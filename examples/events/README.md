# examples/events

Event examples are source-backed event payloads for producer/consumer contract planning.

Current examples cover ops-core sale lock, sellable, MISA handoff, evidence/release readiness, and business-platform order/payment/ads/IVR events.

Examples must include the standard event envelope:

- `eventId`
- `eventType`
- `eventVersion`
- `occurredAt`
- `source`
- `correlationId`
- `data`

Broker, topic, retry, dead-letter, and outbox behavior must not be inferred from these examples.
