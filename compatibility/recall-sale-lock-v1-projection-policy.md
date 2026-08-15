# Recall and Sale Lock v1 compatibility policy

Decision source: `docs/decisions/13-08-16-56-m13-recall-completion-decisions.md` in ops-core (`OD-M13-RCL-STATUS-002`, `OD-M13-RCL-SCOPE-003`).

## Additive changes

- `CANCELLED` is added to external Recall status. Consumers using exhaustive enum switches must add a safe branch before candidate freeze.
- `BLOCKED` is clarified as a derived response overlay, not a persisted state or event. It always includes `blocked_from_status` and non-empty `blocking_error_codes`.
- Create request schemas are separated from response schemas. Clients must not submit provider-owned IDs, status, active/effective timestamps, close fields, or blocker fields.

## Stable mapping

| Internal state | External status |
|---|---|
| `OPEN` | `OPEN` |
| `IMPACT_ANALYSIS` | `UNDER_REVIEW` |
| `HOLD_ACTIVE`, `SALE_LOCK_ACTIVE`, `NOTIFICATION_REQUESTED` | `ACTIVE` |
| `RECOVERY`, `DISPOSITION`, `CAPA` | `RECOVERY_IN_PROGRESS` |
| `CLOSED`, `CLOSED_WITH_RESIDUAL_RISK` | `CLOSED` with conditional close fields |
| `CANCELLED` | `CANCELLED` |

Unknown internal state is returned as `BLOCKED`, `blocked_from_status=UNKNOWN` + `CONTRACT_STATUS_UNMAPPED`; raw internal state is never exposed.

## Sale Lock scope

External v1 accepts only `SKU`, `BATCH`, `LOT`, `TRACE_CHAIN`. `WAREHOUSE`, `LOCATION`, `CHANNEL`, `PROGRAM`, and any unknown value are negative cases and must fail validation before registry/audit/outbox side effects.

All v1 identifiers use canonical UUID strings. For a Sale Lock with `scope_type=TRACE_CHAIN`, `scope_id` is exactly the `recall_case_id`; it identifies the complete append-only historical impact union materialized for that Recall Case. A different UUID fails closed before any registry, audit, transition, or outbox side effect. The Recall-create `TRACE_CHAIN` input is distinct: before a case exists, its `scope_id` is an existing trace anchor UUID used to seed impact analysis.

Positive and negative payloads are maintained in:

- `examples/api/recall-case-status-projection.examples.json`;
- `examples/api/sale-lock-scope.examples.json`.

## Consumer action before candidate freeze

1. Notify affected consumers about `CANCELLED` and the mandatory `BLOCKED` fields.
2. Run provider/consumer tests for all external statuses and four allowed Sale Lock scopes.
3. Prove invalid wider scopes produce no operational side effect.
4. Pin the immutable candidate and retain the notification/test evidence.
