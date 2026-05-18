# schemas/common

This folder contains v1 common JSON Schemas used by both `ginsengfood-ops-core` and `ginsengfood-business-platform`.

These schemas are foundation contracts for API, event, and schema payloads. They must not contain product, ops, commerce, channel, AI, ads, live, IVR, MISA, or other business-domain logic.

Allowed content:

- Common envelope, error, audit, actor, correlation, idempotency, evidence, source, owner decision, release status, pagination, money, quantity, and date-range references.
- Shared metadata required for traceability, audit, idempotency, evidence, resolver, guard, and release flows.
- TODO notes where the Phase 1 source documents do not define enough detail.

Rules:

- Every schema must use JSON Schema draft 2020-12.
- Every schema must be versioned as `v1` through its `$id`.
- Required fields must stay minimal and source-backed.
- Additive optional fields are usually backward compatible.
- Removing fields, changing types, changing enum values, changing required fields, or changing semantics is a breaking change and must be recorded under `compatibility/`.

TODO:

- `pagination.schema.json`, `money.schema.json`, `quantity.schema.json`, and `date-range.schema.json` are conservative placeholders because Phase 1 sources do not define exact pagination, currency, quantity-unit, or date-range semantics.
- Later phases must tighten those schemas only after source documents provide concrete rules.
