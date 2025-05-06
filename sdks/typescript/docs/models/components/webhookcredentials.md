# WebhookCredentials

## Example Usage

```typescript
import { WebhookCredentials } from "openapi/models/components";

let value: WebhookCredentials = {
  secret: "whsec_abc123",
  previousSecret: "whsec_xyz789",
  previousSecretInvalidAt: new Date("2024-01-02T00:00:00Z"),
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `secret`                                                                                                                             | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The secret used for signing webhook requests. Auto-generated if omitted on creation by admin. Read-only for tenants unless rotating. | whsec_abc123                                                                                                                         |
| `previousSecret`                                                                                                                     | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The previous secret used during rotation. Valid for 24 hours by default. Read-only.                                                  | whsec_xyz789                                                                                                                         |
| `previousSecretInvalidAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_minus_sign:                                                                                                                   | ISO timestamp when the previous secret becomes invalid. Read-only.                                                                   | 2024-01-02T00:00:00Z                                                                                                                 |