/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RabbitMQCredentials = {
  /**
   * RabbitMQ username.
   */
  username: string;
  /**
   * RabbitMQ password.
   */
  password: string;
};

/** @internal */
export const RabbitMQCredentials$inboundSchema: z.ZodType<
  RabbitMQCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  password: z.string(),
});

/** @internal */
export type RabbitMQCredentials$Outbound = {
  username: string;
  password: string;
};

/** @internal */
export const RabbitMQCredentials$outboundSchema: z.ZodType<
  RabbitMQCredentials$Outbound,
  z.ZodTypeDef,
  RabbitMQCredentials
> = z.object({
  username: z.string(),
  password: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RabbitMQCredentials$ {
  /** @deprecated use `RabbitMQCredentials$inboundSchema` instead. */
  export const inboundSchema = RabbitMQCredentials$inboundSchema;
  /** @deprecated use `RabbitMQCredentials$outboundSchema` instead. */
  export const outboundSchema = RabbitMQCredentials$outboundSchema;
  /** @deprecated use `RabbitMQCredentials$Outbound` instead. */
  export type Outbound = RabbitMQCredentials$Outbound;
}

export function rabbitMQCredentialsToJSON(
  rabbitMQCredentials: RabbitMQCredentials,
): string {
  return JSON.stringify(
    RabbitMQCredentials$outboundSchema.parse(rabbitMQCredentials),
  );
}

export function rabbitMQCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<RabbitMQCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RabbitMQCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RabbitMQCredentials' from JSON`,
  );
}
