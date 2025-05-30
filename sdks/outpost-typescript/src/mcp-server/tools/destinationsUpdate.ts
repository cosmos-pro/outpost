/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { destinationsUpdate } from "../../funcs/destinationsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateTenantDestinationRequest$inboundSchema,
};

export const tool$destinationsUpdate: ToolDefinition<typeof args> = {
  name: "destinations-update",
  description: `Update Destination

Updates the configuration of an existing destination. The request body structure depends on the destination's \`type\`. Type itself cannot be updated. May return an OAuth redirect URL for certain types.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await destinationsUpdate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
