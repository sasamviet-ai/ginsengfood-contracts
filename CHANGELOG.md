# Changelog

Changelog này ghi lại thay đổi của contract repo `ginsengfood-contracts`. Mọi thay đổi ảnh hưởng đến API, event, schema, enum, state machine, error code hoặc compatibility policy cần được ghi tại đây.

## Unreleased

### Added

- Operational Forms v2 OpenAPI, JSON Schemas, canonical 32-value `form_key` enum (30 legacy-code mappings plus semantic-only `COOKING_LOG` and `EQUIPMENT_READINESS_CHECK`), status/state docs, example, fixture manifest, and migration note under owner decision `D1=A` plus additive owner approvals.
- Targeted zero-dependency validation scope `operational-form-v2` and version-discovered fixture manifest validation.
- Required `X-Idempotency-Key` header on every Operational Forms v2 state-changing operation (14 create + 1 status update), declared once as `components.parameters.IdempotencyKey`, plus a validation ratchet that fails when a `post`/`put`/`patch`/`delete` operation does not reference it or a read-only operation does.

### Changed

- OpenAPI validation now derives major from `.vN.yaml` and checks matching `info.version` plus `/vN` paths.
- Documented that `sellable_status_id` returned by `POST /v1/availability/check` is **ephemeral**: that path evaluates without persisting, so the identifier is newly generated per call and `GET /v1/sellable-statuses/{sellableStatusId}` with it always returns `404`. Only identifiers carried by `ops-core.sellable.*` events resolve. Description-only change on `openapi/ops-core/availability-sellable.v1.yaml` and `schemas/ops/sellable-status.schema.json` — no field, shape or status code changed. Raised by the business-platform M3 integration review after an ops-core smoke test proved the behaviour; ops-core locks it with `SellableStatusEphemeralIdBehaviorTests`.

### Deprecated

- Operational Form v1 create/status/read operations, v1 form schemas, and `operational-form-type.yaml`; they remain usable during migration and have no approved removal date.

### Removed

- Chưa có.

### Fixed

- Corrected the v1 FRM-14 OpenAPI extension to the published v1 enum value `ACCOUNTING_MATERIAL_ISSUE`.

### Breaking Changes

- Operational Forms v2 replaces required v1 identity fields with canonical `form_key`. Consumers must opt into `/v2`; v1 is not silently changed or removed. See `compatibility/operational-form-v1-to-v2-migration.md`.
