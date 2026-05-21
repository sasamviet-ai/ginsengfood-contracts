# Operational Form State Machine v1

Sources:

- `docs/documents/0. appendices/01-OPERATIONAL-FORMS.md`
- `docs/documents/0. appendices/02-AUTO-GENERATED-FORM-RULES.md`
- `docs/documents/0. appendices/05-MATERIAL-PACKAGING-TAXONOMY.md`

Scope:

This state machine applies to the shared OPF-01 through OPF-12 operational form envelope. Per-form restrictions may be stricter.

States:

- `AUTO_GENERATED_DRAFT`
- `DRAFT`
- `PENDING_CONFIRMATION`
- `SUBMITTED`
- `CONFIRMED`
- `APPROVED`
- `PARTIALLY_APPROVED`
- `REJECTED`
- `IN_PROGRESS`
- `CHECKED_OUT`
- `APPROVED_FOR_PACKING`
- `APPROVED_FOR_WAREHOUSE`
- `COMPLETED`
- `ACCOUNTED`
- `SYNC_AWAITING_REVIEW`
- `SYNC_SUCCESS`
- `SYNC_ERROR`
- `REVIEW_REQUIRED`
- `BLOCKED`
- `CLOSED`
- `CANCELLED`

Allowed baseline transitions:

| From | To | Required guard |
|---|---|---|
| `AUTO_GENERATED_DRAFT` | `PENDING_CONFIRMATION` | Source object and inherited/generated fields are present. |
| `DRAFT` | `PENDING_CONFIRMATION` | Required manual fields are present. |
| `PENDING_CONFIRMATION` | `CONFIRMED` | Required confirmations are complete. |
| `CONFIRMED` | `SUBMITTED` | Evidence and audit requirements for the form are present. |
| `SUBMITTED` | `APPROVED` | Reviewer has permission and approval evidence is recorded. |
| `SUBMITTED` | `PARTIALLY_APPROVED` | Partial material approval is explicitly allowed for the form. |
| `SUBMITTED` | `REJECTED` | Rejection reason and audit are recorded. |
| `APPROVED` | `IN_PROGRESS` | Operational step begins. |
| `IN_PROGRESS` | `COMPLETED` | Step output and evidence are recorded. |
| `IN_PROGRESS` | `CHECKED_OUT` | Workforce check-out evidence is recorded. |
| `APPROVED` | `APPROVED_FOR_PACKING` | QC/quality gate allows packing. |
| `APPROVED` | `APPROVED_FOR_WAREHOUSE` | Finished-goods QC allows warehouse receipt. |
| `COMPLETED` | `ACCOUNTED` | Accounting handoff applies and audit is recorded. |
| `ACCOUNTED` | `SYNC_AWAITING_REVIEW` | MISA sync requires review. |
| `SYNC_AWAITING_REVIEW` | `SYNC_SUCCESS` | MISA sync succeeds. |
| `SYNC_AWAITING_REVIEW` | `SYNC_ERROR` | MISA sync fails. |
| `SYNC_ERROR` | `SYNC_AWAITING_REVIEW` | Retry is allowed by permission and idempotency. |
| any non-terminal | `REVIEW_REQUIRED` | Owner/reviewer decision is needed. |
| any non-terminal | `BLOCKED` | Guard, source, permission, evidence, mapping, or P0 condition blocks progress. |
| `COMPLETED` | `CLOSED` | Closure audit is recorded. |
| any non-terminal | `CANCELLED` | Cancellation is source-supported and audited. |

Compatibility:

- Re-entering generated/inherited fields manually when the source requires auto-pull is breaking.
- Transitioning without required confirmation, permission, evidence, or audit is breaking.
- MISA/accounting states must not expose price/accounting data to workshop-only forms unless the source allows it.

