# IVR Confirmation State Machine v1

Source basis: PACK-09, TECH-09, Phase 8 SRS IVR-00 through IVR-09, IVR schemas, and `enums/ivr/*`.

This overview links the specialized state machines. It is intentionally contract-level and does not define SIM implementation details, broker topics, or runtime code.

## Program Policy

| program | customer-counted attempts | confirmation window | planned offsets |
|---|---:|---:|---|
| `GOLDEN_HOUR` | 2 | 10 minutes | `T0`, `T0 + 5` |
| `TWENTY_FOUR_SEVEN` | 3 | 15 minutes | `T0`, `T0 + 5`, `T0 + 10` |

Technical retries do not consume the customer-counted attempt budget.

## Machine Index

| machine | file | purpose |
|---|---|---|
| CallJob | `call-job-state.md` | Tracks task intake, eligibility, queue, execution, final signal, and core acknowledgement. |
| Attempt | `call-attempt-state.md` | Tracks scheduled attempts, precheck, SIM reservation, DTMF, no-answer, invalid phone, and technical failure. |
| Result | `result-state.md` | Tracks raw result capture, normalization, callback, and Order Core acceptance/rejection. |
| CapacityIncident | `capacity-incident-state.md` | Tracks queue/SIM capacity degradation, hold, escalation, and resume. |
| TechnicalException | `technical-exception-state.md` | Tracks technical failures and approved technical retry handling. |

## Global Blocked Transitions

| from | blocked transition | reason |
|---|---|---|
| Any IVR state | Direct order confirmation/cancellation | IVR result is input signal only; Order Core decides after revalidation. |
| Any IVR state | Payment confirmation or verified revenue | IVR cannot confirm payment, revenue, shipping, warehouse, MISA, or ROAS. |
| Quote, Cart, Order Draft | IVR task creation | IVR applies only to eligible Official Orders. |
| Technical exception | Customer no-answer final | Technical failures are not customer attempts. |
| Customer confirm signal | Force confirm despite Sale Lock/Recall/payment issue | Order Core revalidation wins over IVR signal. |
| No-answer final | Auto notification | Notification owner can act only after Order Core decision and approved notice contract. |

## Evidence And Audit

Every transition that changes queue state, attempts a call, captures DTMF, pauses/resumes capacity, disables/enables SIM, performs manual retry, or sends callback must include audit/evidence references through the related schema.
