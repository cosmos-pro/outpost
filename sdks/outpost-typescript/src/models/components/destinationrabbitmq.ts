/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  RabbitMQConfig,
  RabbitMQConfig$inboundSchema,
  RabbitMQConfig$Outbound,
  RabbitMQConfig$outboundSchema,
} from "./rabbitmqconfig.js";
import {
  RabbitMQCredentials,
  RabbitMQCredentials$inboundSchema,
  RabbitMQCredentials$Outbound,
  RabbitMQCredentials$outboundSchema,
} from "./rabbitmqcredentials.js";
import {
  Topics,
  Topics$inboundSchema,
  Topics$Outbound,
  Topics$outboundSchema,
} from "./topics.js";

/**
 * Type of the destination.
 */
export const DestinationRabbitMQType = {
  Rabbitmq: "rabbitmq",
} as const;
/**
 * Type of the destination.
 */
export type DestinationRabbitMQType = ClosedEnum<
  typeof DestinationRabbitMQType
>;

export type DestinationRabbitMQ = {
  /**
   * Control plane generated ID or user provided ID for the destination.
   */
  id: string;
  /**
   * Type of the destination.
   */
  type: DestinationRabbitMQType;
  /**
   * "*" or an array of enabled topics.
   */
  topics: Topics;
  /**
   * ISO Date when the destination was disabled, or null if enabled.
   */
  disabledAt: Date | null;
  /**
   * ISO Date when the destination was created.
   */
  createdAt: Date;
  config: RabbitMQConfig;
  credentials: RabbitMQCredentials;
  /**
   * A human-readable representation of the destination target (RabbitMQ exchange). Read-only.
   */
  target?: string | undefined;
  /**
   * A URL link to the destination target (not applicable for RabbitMQ exchange). Read-only.
   */
  targetUrl?: string | null | undefined;
};

/** @internal */
export const DestinationRabbitMQType$inboundSchema: z.ZodNativeEnum<
  typeof DestinationRabbitMQType
> = z.nativeEnum(DestinationRabbitMQType);

/** @internal */
export const DestinationRabbitMQType$outboundSchema: z.ZodNativeEnum<
  typeof DestinationRabbitMQType
> = DestinationRabbitMQType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DestinationRabbitMQType$ {
  /** @deprecated use `DestinationRabbitMQType$inboundSchema` instead. */
  export const inboundSchema = DestinationRabbitMQType$inboundSchema;
  /** @deprecated use `DestinationRabbitMQType$outboundSchema` instead. */
  export const outboundSchema = DestinationRabbitMQType$outboundSchema;
}

/** @internal */
export const DestinationRabbitMQ$inboundSchema: z.ZodType<
  DestinationRabbitMQ,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  type: DestinationRabbitMQType$inboundSchema,
  topics: Topics$inboundSchema,
  disabled_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  config: RabbitMQConfig$inboundSchema,
  credentials: RabbitMQCredentials$inboundSchema,
  target: z.string().optional(),
  target_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "disabled_at": "disabledAt",
    "created_at": "createdAt",
    "target_url": "targetUrl",
  });
});

/** @internal */
export type DestinationRabbitMQ$Outbound = {
  id: string;
  type: string;
  topics: Topics$Outbound;
  disabled_at: string | null;
  created_at: string;
  config: RabbitMQConfig$Outbound;
  credentials: RabbitMQCredentials$Outbound;
  target?: string | undefined;
  target_url?: string | null | undefined;
};

/** @internal */
export const DestinationRabbitMQ$outboundSchema: z.ZodType<
  DestinationRabbitMQ$Outbound,
  z.ZodTypeDef,
  DestinationRabbitMQ
> = z.object({
  id: z.string(),
  type: DestinationRabbitMQType$outboundSchema,
  topics: Topics$outboundSchema,
  disabledAt: z.nullable(z.date().transform(v => v.toISOString())),
  createdAt: z.date().transform(v => v.toISOString()),
  config: RabbitMQConfig$outboundSchema,
  credentials: RabbitMQCredentials$outboundSchema,
  target: z.string().optional(),
  targetUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    disabledAt: "disabled_at",
    createdAt: "created_at",
    targetUrl: "target_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DestinationRabbitMQ$ {
  /** @deprecated use `DestinationRabbitMQ$inboundSchema` instead. */
  export const inboundSchema = DestinationRabbitMQ$inboundSchema;
  /** @deprecated use `DestinationRabbitMQ$outboundSchema` instead. */
  export const outboundSchema = DestinationRabbitMQ$outboundSchema;
  /** @deprecated use `DestinationRabbitMQ$Outbound` instead. */
  export type Outbound = DestinationRabbitMQ$Outbound;
}

export function destinationRabbitMQToJSON(
  destinationRabbitMQ: DestinationRabbitMQ,
): string {
  return JSON.stringify(
    DestinationRabbitMQ$outboundSchema.parse(destinationRabbitMQ),
  );
}

export function destinationRabbitMQFromJSON(
  jsonString: string,
): SafeParseResult<DestinationRabbitMQ, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DestinationRabbitMQ$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DestinationRabbitMQ' from JSON`,
  );
}
