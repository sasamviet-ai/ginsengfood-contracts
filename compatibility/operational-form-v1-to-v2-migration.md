# Operational Form v1 to v2 Migration

## Decision

Owner decision `D1=A` selects `form_key` as the cross-repository Operational Form identity. Because this replaces required v1 fields and enum semantics, the replacement is published as v2. v1 is frozen and deprecated rather than overwritten.

## Contract overlap

| Capability | v1 | v2 |
|---|---|---|
| Canonical identity | `form_code` plus `form_type` | `form_key` |
| Supported identity set | FRM-01 through FRM-27 | 30 keys for read/history; create schema excludes the one retired key, while exposed create routes remain limited to operations explicitly listed in OpenAPI |
| Order | `form_sequence` maximum 27 | optional `flow_sequence`, minimum 1, no fixed maximum |
| Stage | not canonical | optional `flow_stage` |
| Retired history | v1 `FREEZE_DRY_QC` remains usable | `AFTER_DRYING_QC` readable, not creatable |
| New process forms | not representable | `FREEZING_LOG`, `FREEZE_DRYING_LOG`, `PACKAGING_LEVEL3_LOG` |

The exact 27-value mapping and all 30 keys are defined in `docs/documents/0. appendices/06-OPERATIONAL-FORM-KEY-V2-OWNER-ADDENDUM.md` and `enums/ops/operational-form-key.v2.yaml`.

## Provider migration

1. Keep v1 request/response behavior stable for existing consumers.
2. Implement a dedicated `/v2` surface or explicitly report `CONTRACT_SCHEMA_CREATED` until that surface exists.
3. Map the provider's canonical semantic identity directly to `form_key`; do not derive it from flow position.
4. Reject unknown keys and reject create requests for `AFTER_DRYING_QC`.
5. Continue reading historical `AFTER_DRYING_QC` records without rewriting their identity.
6. Emit `flow_sequence` and `flow_stage` only as current placement metadata.

The shared create schema is an allowlist component, not a generic create endpoint. Providers expose only the source-specific create routes listed in `openapi/ops-core/operational-forms.v2.yaml`; adding another active key route requires normal route/provider/consumer review.

## Consumer migration

1. Continue using v1 until the provider advertises a tested v2 route.
2. Replace v1 identity branching with `form_key` branching.
3. Do not infer display/workflow order from a key or historical number.
4. Tolerate a retired key on read/history and hide or disable its create action.
5. Confirm that no local persisted cache treats the old enum as authoritative before switching traffic.
6. Send `X-Idempotency-Key` on every v2 state-changing call (all create operations and the status update). The header is required in v2; a retry that reuses the same key with the same payload returns the original result instead of creating a duplicate form. Recommended format `<surface>:<actionCode>:<clientUuid>`, 1-200 characters.

## Failure and rollback behavior

- Unknown `form_key` or retired-key create: fail closed with validation/business-rule failure; never coerce to a nearby form.
- Provider v2 unavailable: consumer remains on v1; it must not translate FRM-28 through FRM-30 into a v1 value.
- Missing or empty `X-Idempotency-Key` on a v2 state-changing call: fail closed with a validation failure; the provider must not silently generate a key on the consumer's behalf.
- Partial rollout: version choice is per request. Do not send mixed v1/v2 identity fields.
- Rollback: route traffic back to v1 for its supported 27 forms while retaining v2 data and historical identity; do not reverse-migrate keys into changed meanings.

## Deprecation and removal

- Replacement: `openapi/ops-core/operational-forms.v2.yaml` and the v2 schemas/enums.
- Provider: ops-core.
- Known consumer: ops-admin-ui / ops-core frontend.
- Reason: numbered paper codes and v1 types are not stable workflow identity and cannot represent the accepted 30-key catalog.
- Tests retained: v1 example, v1 fixture manifest entry, v1 Pact planning interaction, and v1 schema checks.
- Removal date: not approved. The repository has no owner-approved support window or release calendar; removal requires a new compatibility decision and provider/consumer sign-off.
