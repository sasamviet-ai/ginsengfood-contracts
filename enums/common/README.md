# enums/common

This folder contains v1 common enums shared by `ginsengfood-ops-core` and `ginsengfood-business-platform`.

These enums are foundation values for API, event, schema, evidence, audit, resolver, guard, and release contracts. They must not contain domain-only statuses such as product lifecycle, inventory state, order state, payment state, IVR call state, ads lifecycle, or live session state.

Allowed content:

- Actor type values.
- Evidence lifecycle/status values.
- Foundation audit action values.
- Release, completion, gateway, and go-live status values.
- Guard decision values.
- Runtime resolution status values.

Rules:

- Every enum file must declare `version: v1`.
- Enum values must be source-backed from `docs/documents/` or an existing standard in `docs/`.
- Adding a new optional enum value may still require consumer review.
- Removing, renaming, or changing the meaning of an enum value is a breaking change and must be recorded under `compatibility/`.
- Do not add generated code, database seed data, UI labels, or business logic here.

TODO:

- `evidence-status.yaml` intentionally keeps both `DRAFT` and `PENDING` because TECH-01 and MASTER-03/MASTER-05 use overlapping lifecycle wording. A later evidence registry contract should decide whether they remain distinct.
- `release-status.yaml` currently combines completion, gateway, and release decision statuses because Phase 1 documents use them together. Phase 7 compatibility notes may split them if needed.
