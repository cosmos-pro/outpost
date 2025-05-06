import http from "k6/http";
import { check } from "k6";
import { Counter, Rate } from "k6/metrics";
import redis from "k6/experimental/redis";
import { loadEventsConfig } from "../lib/config.ts";

const ENVIRONMENT = __ENV.ENVIRONMENT || "local";
const SCENARIO = __ENV.SCENARIO || "basic";

const config = await loadEventsConfig(
  `../../config/environments/${ENVIRONMENT}.json`,
  `../../config/scenarios/events-throughput/${SCENARIO}.json`
);

const API_KEY = __ENV.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable is required");
}

const TESTID = __ENV.TESTID;
if (!TESTID) {
  throw new Error("TESTID environment variable is required");
}

// Redis client for storing event IDs
// @ts-ignore - k6 Redis client types may not match connection string parameter
const redisClient = new redis.Client(config.env.redis);

// Custom metrics
const eventsPublished = new Counter("events_published");
const publishSuccessRate = new Rate("event_publish_success_rate");

// Default options that can be overridden by config
const defaultOptions = {
  thresholds: {
    http_req_duration: ["p(95)<1000"],
    http_req_failed: ["rate<0.01"],
    event_publish_success_rate: ["rate>=1.0"], // 100% of events must be published successfully
  },
  scenarios: {
    events: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 10,
      maxVUs: 100,
    },
  },
};

// Merge config options with defaults (config takes precedence)
export const options = {
  thresholds: {
    ...defaultOptions.thresholds,
    ...(config.scenario.options?.thresholds || {}),
  },
  scenarios: {
    events: {
      ...defaultOptions.scenarios.events,
      ...(config.scenario.options?.scenarios?.events || {}),
    },
  },
};

// Single tenant ID for all VUs
const tenantId = `test-tenant-${TESTID}`;

// Setup function that runs once at the beginning
export function setup() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  // Create tenant
  const tenantResponse = http.put(
    `${config.env.api.baseUrl}/api/v1/${tenantId}`,
    JSON.stringify({}),
    { headers }
  );

  check(tenantResponse, {
    "tenant created": (r) => r.status === 201,
  });

  if (tenantResponse.status !== 201) {
    throw new Error(
      `Unexpected tenant creation status: ${tenantResponse.status}. Response: ${tenantResponse.body}`
    );
  }

  // Create destination
  const destinationResponse = http.post(
    `${config.env.api.baseUrl}/api/v1/${tenantId}/destinations`,
    JSON.stringify({
      type: "webhook",
      topics: ["user.created"],
      config: {
        url: `${config.env.mockWebhook.destinationUrl}/webhook`,
      },
    }),
    { headers }
  );

  check(destinationResponse, {
    "destination created": (r) => r.status === 201,
  });

  if (destinationResponse.status !== 201) {
    throw new Error(
      `Failed to create destination: ${destinationResponse.status} ${destinationResponse.body}`
    );
  }

  // Clear any existing data for this test ID
  redisClient.del([`events:${TESTID}`]);
  redisClient.del([`events:${TESTID}:count`]);
  redisClient.set(`events:${TESTID}:count`, "0", 0);

  console.log(`🚀 Test setup complete for tenant: ${tenantId}`);
  console.log(`📊 Redis initialized at ${config.env.redis}`);

  return { tenantId };
}

// Main function executed by each VU
export default function (data: { tenantId: string }) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  // Generate a unique event ID
  const eventId = `event-${TESTID}-${__VU}-${__ITER}`;

  // Record timestamp when event is sent
  const sentTimestamp = new Date().getTime();

  // Publish event
  const eventResponse = http.post(
    `${config.env.api.baseUrl}/api/v1/publish`,
    JSON.stringify({
      tenant_id: data.tenantId,
      topic: "user.created",
      eligible_for_retry: false,
      id: eventId,
      data: {
        iteration: __ITER,
        vu: __VU,
        timestamp: new Date().toISOString(),
        sent_at: sentTimestamp,
      },
    }),
    { headers }
  );

  // Check if the event was published successfully
  const isSuccess = eventResponse.status === 200;

  // Record custom metrics
  publishSuccessRate.add(isSuccess);
  if (isSuccess) {
    eventsPublished.add(1);
  }

  check(eventResponse, {
    "event published": () => isSuccess,
  });

  if (!isSuccess) {
    console.error(
      `Failed to publish event: ${eventResponse.status} ${eventResponse.body}`
    );
    return;
  }

  // Store event ID in Redis
  if (redisClient) {
    // Add to Redis set
    redisClient.sadd(`events:${TESTID}`, eventId);

    // Store the sent timestamp for latency calculation
    redisClient.set(
      `event:${TESTID}:${eventId}:sent_at`,
      sentTimestamp.toString(),
      0
    );

    // Increment event count
    redisClient.incr(`events:${TESTID}:count`);
  }
}

// Teardown function runs once at the end of the test
export function teardown(data: { tenantId: string }) {
  console.log(`📊 Test completed for tenant: ${data.tenantId}`);
  console.log(`📊 Events stored in Redis under key: events:${TESTID}`);
  console.log(
    `📊 To verify these events, run the events-verify test with TESTID=${TESTID}`
  );
}
