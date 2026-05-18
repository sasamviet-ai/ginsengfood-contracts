# asyncapi

Thu muc nay chua AsyncAPI v1 contracts cho event bus boundary giua `ginsengfood-ops-core`, `ginsengfood-business-platform`, va cac integration consumer hop le.

Cac file trong thu muc nay chi la contract. Khong dat queue worker, handler implementation, broker config production, retry policy implementation, secret, hay deployment config vao day.

## Files

- `ops-core-events.v1.yaml`: events published by ops-core.
- `business-platform-events.v1.yaml`: events published by business-platform.
- `integration-events.v1.yaml`: high-risk cross-system event subset for sale lock, order, payment, MISA, verified revenue, and IVR boundaries.

## Boundary

- Placeholder server in AsyncAPI is not real broker configuration.
- TODO: Source documents do not define real broker, topic, partition, retry, or outbox publication metadata. These AsyncAPI files use `eventType` as placeholder channel address only.
- Event payload schema lives under `events/`.
- Every event uses `eventVersion: "1.0"` and an `eventType` ending with `.v1`.
- Breaking changes require a new major event version or compatibility note.
