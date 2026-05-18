# events

Thu muc nay chua JSON Schema payload contracts cho domain events v1.

Moi event payload co envelope chung: `eventId`, `eventType`, `eventVersion`, `occurredAt`, `source`, `correlationId`, optional `causationId`, optional `idempotencyKey`, va `data`.

## Rules

- `source` chi duoc la `ops-core` hoac `business-platform` theo owner event.
- `eventVersion` phai la `1.0`.
- `data` phai ref den schema domain da tao trong `schemas/` hoac chi siet required field tu schema do.
- Khong dua PII/payment raw/private channel/raw SIM payload vao event neu schema domain khong can.
- Event khong duoc dung de mutate source-of-truth cua he thong khac neu contract khong cho phep.
- TODO: Source documents chua khoa outbox-specific fields nhu outbox id, partition key, retry count, broker topic, hoac dead-letter metadata; cac field nay khong duoc tu them vao payload cho den khi co source.
