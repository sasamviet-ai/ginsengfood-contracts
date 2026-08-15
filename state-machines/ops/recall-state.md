# Recall State Projection v1

Owner: ops-core

Source basis: canonical M13 internal state machine, TECH-03, recall schemas, `recall-status` enum, `OD-M13-RCL-STATUS-002`.

The internal granular `recall_status` remains operational truth. This document defines the deterministic external `/v1/*` projection; it does not create a second persisted state machine.

## Internal-to-external mapping

| Internal state | External status | Additional response rule |
|---|---|---|
| `OPEN` | `OPEN` | — |
| `IMPACT_ANALYSIS` | `UNDER_REVIEW` | — |
| `HOLD_ACTIVE` | `ACTIVE` | — |
| `SALE_LOCK_ACTIVE` | `ACTIVE` | — |
| `NOTIFICATION_REQUESTED` | `ACTIVE` | — |
| `RECOVERY` | `RECOVERY_IN_PROGRESS` | — |
| `DISPOSITION` | `RECOVERY_IN_PROGRESS` | — |
| `CAPA` | `RECOVERY_IN_PROGRESS` | — |
| `CLOSED` | `CLOSED` | `close_type=CLOSED`, `residual_risk=false` |
| `CLOSED_WITH_RESIDUAL_RISK` | `CLOSED` | `close_type=CLOSED_WITH_RESIDUAL_RISK`, `residual_risk=true`; internal residual note is not exposed |
| `CANCELLED` | `CANCELLED` | Additive external enum value |

## `BLOCKED` overlay

`BLOCKED` is a derived non-persisted overlay for a non-terminal case with a real fail-safe blocker, including:

- `TRACE_GAP_DETECTED`;
- `POST_RECEIPT_IMPACT_ACK_REQUIRED`;
- `BATCH_RELEASE_REVOKE_PENDING`;
- `APPROVAL_POLICY_VIOLATION`;
- `OWNER_DECISION_REQUIRED`;
- evidence blocker at close-readiness.

A `BLOCKED` response requires `blocked_from_status` and non-empty `blocking_error_codes`. Expected active/recovery phases and an active restriction by themselves are not reasons to project `BLOCKED`.

Unknown internal state fails closed to `BLOCKED` with `blocked_from_status=UNKNOWN` and `CONTRACT_STATUS_UNMAPPED`; the provider records telemetry/error and never returns the raw value.

## Invariants

- Projection does not mutate persisted state, append an internal transition, or emit an event.
- `OPEN`, `UNDER_REVIEW`, `ACTIVE`, and `RECOVERY_IN_PROGRESS` cannot project directly to `CLOSED` without the canonical internal close gate.
- Active Recall/Sale Lock/Not Sellable wins every downstream commerce flow.
- Recall reuses the operational trace chain and must not create a parallel recall trace truth.
