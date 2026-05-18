# error-codes

This folder contains v1 error-code catalogs shared by `ginsengfood-ops-core` and `ginsengfood-business-platform`.

Error codes are foundation contracts for API, event, and schema validation. They must not contain implementation exception classes, stack traces, log dumps, retry code, queue logic, database details, secrets, or business logic.

Allowed content:

- Stable namespaced error codes.
- Safe messages and descriptions.
- HTTP status when applicable.
- Retryability notes when the source documents justify them.
- Compatibility notes and TODOs for missing source detail.

Rules:

- Every error-code file must declare `version: v1`.
- Error code namespaces must stay stable.
- Additive new codes are usually backward compatible if consumers can ignore unknown codes safely.
- Removing a code, changing a code name, changing HTTP status semantics, or changing business meaning is a breaking change and must be recorded under `compatibility/`.
- Domain-specific error codes must be added in later domain phases, not in Phase 1 common foundation files.

Current v1 catalogs:

- `common-errors.yaml`
- `validation-errors.yaml`
- `permission-errors.yaml`
- `idempotency-errors.yaml`
- `integration-errors.yaml`

Example fixtures:

- `examples/errors/validation-error.example.json`
- `examples/errors/forbidden-error.example.json`
- `examples/errors/conflict-error.example.json`
- `examples/errors/idempotency-conflict.example.json`
- `examples/errors/sale-lock-blocked.example.json`

Compatibility notes:

- Error responses should use the common v1 envelope and `schemas/common/error.schema.json`.
- Consumers should treat unknown namespaced error codes as non-success and preserve `correlationId`.
- Domain-specific codes should be additive unless a compatibility review approves a breaking change.

TODO:

- Later domain phases should add domain-specific error namespaces only when source documents provide enough detail.
- A specific sale-lock error namespace is not defined in source documents yet; `sale-lock-blocked.example.json` uses `COMMON.BLOCKED` for v1.
