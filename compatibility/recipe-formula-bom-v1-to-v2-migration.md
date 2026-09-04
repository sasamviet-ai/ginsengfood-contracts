# Recipe and Formula v1 to v2 compatibility

Status: `V1_FROZEN / CONTRACT_OWNER_REVIEW_REQUIRED / RUNTIME_BLOCKED_BY_X04`

## Decision

Owner approved option A in `OD-B9-FORMULA-STATUS-001`. Recipe v2 and Formula Version v2 use the canonical seven-value lifecycle and expose `formula_kind` separately.

## Compatibility rules

- The two v1 Recipe/Formula operations remain available and are deprecated at the contract level. The v1 BOM operation is unchanged.
- No v1 removal date is approved. Contract publication does not authorize cutover or deletion.
- Không map lossy giữa v1 status và v2 `lifecycle_status`. In particular, `RETIRED` is not always `SUPERSEDED`, and `REJECTED` is not `BLOCKED`.
- Existing v1 response schemas and runtime behavior remain frozen during this bounded contract phase. Their known raw-pass-through mismatch is not declared conformant or production-ready.
- Consumers migrate only after Contract Owner review, explicit auth/audience approval under X04, provider runtime parity tests, and consumer compatibility evidence.
- The v2 OpenAPI file is `CONTRACT_ONLY`; the application must not register v2 runtime endpoints while `RUNTIME_BLOCKED_BY_X04` remains open.

## Field migration

| v1 field | v2 field | Rule |
|---|---|---|
| `status` | `lifecycle_status` | No automatic token translation; consumer adopts the v2 canonical vocabulary. |
| none | `formula_kind` | New required independent axis: `PILOT_PERCENT_BASED` or `FIXED_QUANTITY_BATCH`. |

Readiness/config/evidence, usage lock, successor/supersession, and derived guard outcome fields are deferred until their authoritative signals and wire shapes are reviewed. They must not be inferred from lifecycle.
