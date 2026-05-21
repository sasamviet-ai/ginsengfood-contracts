# Evidence Registry State Machine v1

Sources:

- `docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md`
- `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md`

States:

- `WAITING`: Evidence has not been submitted.
- `SUBMITTED`: Evidence was submitted and cannot be used to PASS yet.
- `UNDER_REVIEW`: Reviewer is checking evidence.
- `ACCEPTED`: Evidence is accepted. Only this state can support PASS.
- `REJECTED`: Evidence is rejected and cannot support PASS.
- `NEEDS_RETEST`: Evidence requires retest.
- `OWNER_REVIEW_REQUIRED`: Owner decision is required.
- `SUPERSEDED`: Evidence is replaced by a newer evidence record.
- `EXPIRED`: Evidence is no longer valid.

Allowed transitions:

| From | To | Required guard |
|---|---|---|
| `WAITING` | `SUBMITTED` | Submitter, source document, source rule, scope, and evidence reference are present. |
| `SUBMITTED` | `UNDER_REVIEW` | Reviewer has permission to review the scope. |
| `UNDER_REVIEW` | `ACCEPTED` | Review passes and audit is recorded. |
| `UNDER_REVIEW` | `REJECTED` | Rejection reason and audit are recorded. |
| `UNDER_REVIEW` | `NEEDS_RETEST` | Retest reason and audit are recorded. |
| `UNDER_REVIEW` | `OWNER_REVIEW_REQUIRED` | Evidence affects owner decision, release, P0, payment, customer data, recall, sale lock, or public-safe scope. |
| `NEEDS_RETEST` | `SUBMITTED` | Retest evidence is submitted. |
| `OWNER_REVIEW_REQUIRED` | `ACCEPTED` | Owner decision and reviewer audit are recorded. |
| `ACCEPTED` | `SUPERSEDED` | New accepted evidence replaces the record. |
| `ACCEPTED` | `EXPIRED` | Source, code, config, environment, scope, or policy change invalidates the evidence. |

Compatibility:

- Treating `SUBMITTED`, `UNDER_REVIEW`, `NEEDS_RETEST`, `REJECTED`, `EXPIRED`, or `SUPERSEDED` as PASS-capable is breaking.
- Deleting evidence instead of superseding or expiring it is breaking.

