# Release Status Registry State Machine v1

Sources:

- `docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md`
- `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md`
- `docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md`
- `docs/documents/3. tech/11-TECH-10-GLOBAL-SMOKE-UAT-EVIDENCE-RELEASE-GATEWAY-PRODUCTION-READINESS-CONTROL.md`

Baseline progression:

`NOT_STARTED` -> `SPEC_COMPLETE` -> `IMPLEMENTATION_WAITING` -> `IMPLEMENTATION_COMPLETE_ONLY` -> `TEST_WAITING` -> `SMOKE_WAITING` -> `EVIDENCE_WAITING` -> `RELEASE_READY` -> `RELEASE_DECISION_ACCEPTED` -> `GO_LIVE_APPROVED` -> `LIVE`

Blocking states:

- `P0_BLOCKED`: Open P0 exists.
- `DEPENDENCY_BLOCKED`: Upstream dependency is not clear.
- `SECURITY_WAITING`: Required security review is missing.
- `OWNER_REVIEW_REQUIRED`: Owner decision is required.
- `GO_LIVE_BLOCKED`: Go-live is blocked.
- `ROLLBACK_REQUIRED`: Rollback must be executed.
- `ROLLED_BACK`: Rollback completed.
- `PAUSED`: Scope paused.

Rules:

- Any open P0 forces `P0_BLOCKED`.
- Missing accepted evidence forces `EVIDENCE_WAITING`.
- Missing dependency clearance forces `DEPENDENCY_BLOCKED`.
- Status changes must be audited.
- Jumping to `RELEASE_READY`, `RELEASE_DECISION_ACCEPTED`, `GO_LIVE_APPROVED`, or `LIVE` without accepted evidence, P0 clearance, dependency clearance, and owner decision where required is breaking.

