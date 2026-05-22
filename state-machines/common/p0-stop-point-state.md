# P0 Stop Point State Machine v1

Sources:

- `docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md`

States:

- `OPEN`
- `INVESTIGATING`
- `FIX_IN_PROGRESS`
- `READY_FOR_RETEST`
- `RETEST_PASS`
- `RETEST_FAILED`
- `OWNER_REVIEW_REQUIRED`
- `CLEARED`
- `REOPENED`

Allowed transitions:

| From | To | Required guard |
|---|---|---|
| `OPEN` | `INVESTIGATING` | Owner or reviewer accepts triage. |
| `INVESTIGATING` | `FIX_IN_PROGRESS` | Fix plan is recorded. |
| `FIX_IN_PROGRESS` | `READY_FOR_RETEST` | Fix evidence is linked. |
| `READY_FOR_RETEST` | `RETEST_PASS` | Retest evidence is accepted or ready for owner review. |
| `READY_FOR_RETEST` | `RETEST_FAILED` | Retest failure evidence is recorded. |
| `RETEST_FAILED` | `FIX_IN_PROGRESS` | Updated fix plan is recorded. |
| `RETEST_PASS` | `OWNER_REVIEW_REQUIRED` | Owner decision is required for business/release impact. |
| `RETEST_PASS` | `CLEARED` | Fix evidence, retest evidence, audit, reviewer, and smoke evidence when required are present. |
| `OWNER_REVIEW_REQUIRED` | `CLEARED` | Owner decision, accepted evidence, and audit are present. |
| `CLEARED` | `REOPENED` | Regression or new evidence reopens the P0. |
| `REOPENED` | `INVESTIGATING` | Reopened P0 is triaged. |

Compatibility:

- A non-`CLEARED` P0 blocks completion, release-ready, production-ready, and go-live decisions.
- Clearing without accepted evidence and audit is breaking.
- Downgrading or deleting a P0 without owner decision and audit is breaking.

