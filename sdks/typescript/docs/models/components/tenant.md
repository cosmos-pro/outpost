# Tenant

## Example Usage

```typescript
import { Tenant } from "@hookdeck/outpost-sdk/models/components";

let value: Tenant = {
  id: "123",
  destinationsCount: 5,
  topics: [
    "user.created",
    "user.deleted",
  ],
  createdAt: new Date("2024-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | User-defined system ID for the tenant.                                                        | 123                                                                                           |
| `destinationsCount`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of destinations associated with the tenant.                                            | 5                                                                                             |
| `topics`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | List of subscribed topics across all destinations for this tenant.                            | [<br/>"user.created",<br/>"user.deleted"<br/>]                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | ISO Date when the tenant was created.                                                         | 2024-01-01T00:00:00Z                                                                          |