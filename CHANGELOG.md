# Changelog

Changelog này ghi lại thay đổi của contract repo `ginsengfood-contracts`. Mọi thay đổi ảnh hưởng đến API, event, schema, enum, state machine, error code hoặc compatibility policy cần được ghi tại đây.

## Unreleased

### Added

- Operational Forms v2 OpenAPI, JSON Schemas, canonical 32-value `form_key` enum (30 legacy-code mappings plus semantic-only `COOKING_LOG` and `EQUIPMENT_READINESS_CHECK`), status/state docs, example, fixture manifest, and migration note under owner decision `D1=A` plus additive owner approvals.
- Targeted zero-dependency validation scope `operational-form-v2` and version-discovered fixture manifest validation.
- Required `X-Idempotency-Key` header on every Operational Forms v2 state-changing operation (14 create + 1 status update), declared once as `components.parameters.IdempotencyKey`, plus a validation ratchet that fails when a `post`/`put`/`patch`/`delete` operation does not reference it or a read-only operation does.

### Changed

- **X03B warehouse-location projection**: `location_type` moved out of `required` and documented as never emitted by v1. The provider has no approved taxonomy and no source column for it, so requiring it forced a fabricated value. Consumers must not infer it from `location_code`, `location_name` or warehouse type, and must not read its absence as a defect. Owner decision `OD-C24-02` (2026-09-05).
- **X03B warehouse-receipt projection**: `status` enum reconciled to the canonical ops-core lifecycle `DRAFT|PENDING_CONFIRMATION|CONFIRMED|CANCELLED|CORRECTED`, and `received_quantity` moved out of `required`. The header roll-up is emitted only when every receipt line shares one UOM — summing mixed UOM lines produces a silently wrong number — so absence means "not expressible as a single quantity", never zero. A `CORRECTED` receipt keeps the quantity recorded on the receipt itself — `OpWarehouseReceipt.Correct` only advances the status and never rewrites the receipt lines, so the corrected amount is carried by a separate document; an earlier draft of this entry claimed the opposite and was wrong. Owner decision `OD-C24-03` (2026-09-05).
- **X03B stock-balance projection**: `item_type` narrowed to `FINISHED_GOOD` so the finished-goods-only boundary is structural rather than provider-code-only, and `material_id` documented as reserved and never emitted at this scope. The three hold quantities are now specified as a **disjoint partition** with priority `recall > sale lock > quality hold`, carrying the invariant `on_hand = available + reserved + quality_hold + recall_hold + sale_lock` at every row and aggregation, so consumers may add and subtract them without double counting. A row under several restrictions reports only its highest-priority reason. `POST /v1/availability/check` remains the sole commit authority. Owner decisions `OD-C24-01` and `OD-C24-01B` (2026-09-05).
- OpenAPI validation now derives major from `.vN.yaml` and checks matching `info.version` plus `/vN` paths.
- Documented that `sellable_status_id` returned by `POST /v1/availability/check` is **ephemeral**: that path evaluates without persisting, so the identifier is newly generated per call and `GET /v1/sellable-statuses/{sellableStatusId}` with it always returns `404`. Only identifiers carried by `ops-core.sellable.*` events resolve. Description-only change on `openapi/ops-core/availability-sellable.v1.yaml` and `schemas/ops/sellable-status.schema.json` — no field, shape or status code changed. Raised by the business-platform M3 integration review after an ops-core smoke test proved the behaviour; ops-core locks it with `SellableStatusEphemeralIdBehaviorTests`.

### Deprecated

- Operational Form v1 create/status/read operations, v1 form schemas, and `operational-form-type.yaml`; they remain usable during migration and have no approved removal date.

### Removed

- `BLOCKED` and `REJECTED` from `enums/ops/warehouse-receipt-status.yaml` and from the `GET /v1/warehouse-receipts` `status` filter. Neither token ever existed for warehouse receipts in the provider: a receipt against a non-RELEASED batch is refused at command time so no row is persisted in that state, and `REJECTED` carried an unresolved TODO admitting its semantics were never specified. Both belong to the packaging-intake vocabulary and were copied across by mistake. Safe to remove because no provider runtime emitted them and `GET /v1/warehouse-receipts` was unimplemented at removal time. Replaced by the canonical `CANCELLED` and `CORRECTED`. Owner decision `OD-C24-03` (2026-09-05).

### Fixed

- Corrected the v1 FRM-14 OpenAPI extension to the published v1 enum value `ACCOUNTING_MATERIAL_ISSUE`.
- Closed SKU lifecycle schema parity around the canonical registry: both Product Master and authenticated external public-SKU schemas now accept terminal `RETIRED`, reject internal-only `ACTIVE_BASELINE`, and are enforced by focused validation plus the X03B contract test in CI.

### Breaking Changes

- Operational Forms v2 replaces required v1 identity fields with canonical `form_key`. Consumers must opt into `/v2`; v1 is not silently changed or removed. See `compatibility/operational-form-v1-to-v2-migration.md`.
