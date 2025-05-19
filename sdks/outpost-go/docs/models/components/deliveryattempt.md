# DeliveryAttempt


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `DeliveredAt`                                           | [*time.Time](https://pkg.go.dev/time#Time)              | :heavy_minus_sign:                                      | N/A                                                     | 2024-01-01T00:00:00Z                                    |
| `Status`                                                | [*components.Status](../../models/components/status.md) | :heavy_minus_sign:                                      | N/A                                                     | success                                                 |
| `ResponseStatusCode`                                    | **int64*                                                | :heavy_minus_sign:                                      | N/A                                                     | 200                                                     |
| `ResponseBody`                                          | **string*                                               | :heavy_minus_sign:                                      | N/A                                                     | {"status":"ok"}                                         |
| `ResponseHeaders`                                       | map[string]*string*                                     | :heavy_minus_sign:                                      | N/A                                                     | {<br/>"content-type": "application/json"<br/>}          |