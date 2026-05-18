# Event Version Matrix v1

All current event payload examples and payload schemas use `eventVersion: "1.0"` and a v1 event type suffix.

## AsyncAPI Documents

| Document | Version | Producers | Consumers | Compatibility notes |
| --- | --- | --- | --- | --- |
| `asyncapi/ops-core-events.v1.yaml` | v1 | ops-core | business-platform, integration consumers | Operational truth events must not contain unnecessary sensitive data. |
| `asyncapi/business-platform-events.v1.yaml` | v1 | business-platform | ops-core, ads/analytics, integration consumers | Official order, payment, verified revenue, and IVR events remain business-platform owned. |
| `asyncapi/integration-events.v1.yaml` | v1 | both | integration consumers | Placeholder broker/server only; no real broker config is defined. |

## Event Groups

| Producer | Group | Version | Compatibility notes |
| --- | --- | --- | --- |
| ops-core | product | 1.0 | Activation/suspension events do not imply sellable stock. |
| ops-core | inventory | 1.0 | Inventory availability changes derive from operational checkpoints and ledger. |
| ops-core | sellable | 1.0 | Sellable changes must expose enough block reasons for business-platform suppression. |
| ops-core | recall | 1.0 | Sale lock and stop-sale events must be enough to block quote/order/AI/CRM/Ads/Live. |
| ops-core | misa | 1.0 | MISA sync events must not rewrite operational truth. |
| business-platform | order | 1.0 | `order-confirmed` must identify an official customer-confirmed order. |
| business-platform | payment | 1.0 | Payment confirmed requires an allowed confirmation source. |
| business-platform | shipping | 1.0 | Shipping events do not create payment or revenue truth. |
| business-platform | demand | 1.0 | Demand events inform ops-core planning; they are not production orders. |
| business-platform | ads | 1.0 | Verified revenue is business-platform owned. |
| business-platform | ivr | 1.0 | IVR events are input signals only. |

## Breaking Event Changes

- Changing producer ownership is breaking.
- Reusing an event type for a new meaning is breaking.
- Removing envelope fields such as `eventId`, `eventType`, `eventVersion`, `occurredAt`, `source`, `correlationId`, or `data` is breaking.
- Moving verified revenue production to ops-core is breaking.
- Letting IVR update core order state directly is breaking.

## TODO

- Source documents do not define broker topic names, partition keys, retry policy, dead-letter policy, or outbox schema.
