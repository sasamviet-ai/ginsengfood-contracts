# schemas/ops-core

Provider-level schema boundary index for `ginsengfood-ops-core`.

This folder does not define duplicate domain schemas. It maps ops-core provider responsibilities to the existing v1 domain schemas under `schemas/common`, `schemas/product`, and `schemas/ops`.

Allowed content:

- Provider schema indexes.
- Provider boundary notes.
- Compatibility notes for schema consumers.

Not allowed:

- Implementation code.
- Database schema or migration.
- Service logic.
- Business logic.
- Generated clients.
- Duplicated domain schema definitions.

Primary source documents:

- `docs/source-map.md`
- `MASTER-01`
- `MASTER-02`
- `PACK-01`
- `PACK-02`
- `PACK-03`
- `PACK-04`
- `TECH-02`
- `TECH-03`
- `TECH-10`
