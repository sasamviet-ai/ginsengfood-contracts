# Recipe and Formula Status v2 — Owner Addendum

Status: `OWNER_ACCEPTED / CONTRACT_OWNER_REVIEW_REQUIRED`

Owner approved option A in `OD-B9-FORMULA-STATUS-001` on 2026-09-04. The external major v2 contract uses the canonical ops-core formula lifecycle vocabulary without translating it into the incompatible v1 Recipe or Formula Version status vocabularies.

## Canonical lifecycle

Both Recipe v2 and Formula Version v2 use exactly these lifecycle values:

| Order | `lifecycle_status` |
|---|---|
| 1 | `DRAFT` |
| 2 | `PENDING_APPROVAL` |
| 3 | `APPROVED` |
| 4 | `APPROVED_SEED_BASELINE` |
| 5 | `ACTIVE_OPERATIONAL` |
| 6 | `RETIRED` |
| 7 | `REJECTED` |

Only `ACTIVE_OPERATIONAL` is eligible for the production-order recipe-resolution gate. This addendum does not change that internal rule.

`G0` must never combine with `ACTIVE_OPERATIONAL`. `G1` uses `PILOT_PERCENT_BASED`; `FIXED_QUANTITY_BATCH` is reserved for later approved formula generations such as G2.

## Separate axes

- `formula_kind` is separate from lifecycle and is exactly `PILOT_PERCENT_BASED` or `FIXED_QUANTITY_BATCH`.
- Readiness/config/evidence, usage lock, successor/supersession, and derived guard outcomes are separate axes. They must not be inferred from `lifecycle_status`.
- `RETIRED` must not be rewritten as `SUPERSEDED`; `REJECTED` must not be rewritten as `BLOCKED`.
- Phase 1 does not add fields for the separate axes because their wire shape and authoritative signals still require Contract Owner review.

## Compatibility and runtime boundary

- v1 Recipe and Formula Version operations are `V1_FROZEN` and deprecated at the contract level; the v1 BOM operation remains active and unchanged.
- There is no approved v1 removal date.
- No lossy mapping is approved between v1 and v2 vocabularies.
- v2 is a `CONTRACT_ONLY` candidate. Runtime registration is `BLOCKED_BY_X04` until exact auth/audience policy is approved and provider/consumer compatibility gates close.
- Publishing this addendum or contract files does not establish runtime implementation, consumer cutover, staging evidence, or production readiness.
