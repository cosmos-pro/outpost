/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpsertTenantGlobals = {
  tenantId?: string | undefined;
};

export type UpsertTenantRequest = {
  /**
   * The ID of the tenant. Required when using AdminApiKey authentication.
   */
  tenantId?: string | undefined;
};

/** @internal */
export const UpsertTenantGlobals$inboundSchema: z.ZodType<
  UpsertTenantGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
  });
});

/** @internal */
export type UpsertTenantGlobals$Outbound = {
  tenant_id?: string | undefined;
};

/** @internal */
export const UpsertTenantGlobals$outboundSchema: z.ZodType<
  UpsertTenantGlobals$Outbound,
  z.ZodTypeDef,
  UpsertTenantGlobals
> = z.object({
  tenantId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertTenantGlobals$ {
  /** @deprecated use `UpsertTenantGlobals$inboundSchema` instead. */
  export const inboundSchema = UpsertTenantGlobals$inboundSchema;
  /** @deprecated use `UpsertTenantGlobals$outboundSchema` instead. */
  export const outboundSchema = UpsertTenantGlobals$outboundSchema;
  /** @deprecated use `UpsertTenantGlobals$Outbound` instead. */
  export type Outbound = UpsertTenantGlobals$Outbound;
}

export function upsertTenantGlobalsToJSON(
  upsertTenantGlobals: UpsertTenantGlobals,
): string {
  return JSON.stringify(
    UpsertTenantGlobals$outboundSchema.parse(upsertTenantGlobals),
  );
}

export function upsertTenantGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<UpsertTenantGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertTenantGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertTenantGlobals' from JSON`,
  );
}

/** @internal */
export const UpsertTenantRequest$inboundSchema: z.ZodType<
  UpsertTenantRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tenant_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "tenant_id": "tenantId",
  });
});

/** @internal */
export type UpsertTenantRequest$Outbound = {
  tenant_id?: string | undefined;
};

/** @internal */
export const UpsertTenantRequest$outboundSchema: z.ZodType<
  UpsertTenantRequest$Outbound,
  z.ZodTypeDef,
  UpsertTenantRequest
> = z.object({
  tenantId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    tenantId: "tenant_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpsertTenantRequest$ {
  /** @deprecated use `UpsertTenantRequest$inboundSchema` instead. */
  export const inboundSchema = UpsertTenantRequest$inboundSchema;
  /** @deprecated use `UpsertTenantRequest$outboundSchema` instead. */
  export const outboundSchema = UpsertTenantRequest$outboundSchema;
  /** @deprecated use `UpsertTenantRequest$Outbound` instead. */
  export type Outbound = UpsertTenantRequest$Outbound;
}

export function upsertTenantRequestToJSON(
  upsertTenantRequest: UpsertTenantRequest,
): string {
  return JSON.stringify(
    UpsertTenantRequest$outboundSchema.parse(upsertTenantRequest),
  );
}

export function upsertTenantRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpsertTenantRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpsertTenantRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpsertTenantRequest' from JSON`,
  );
}
