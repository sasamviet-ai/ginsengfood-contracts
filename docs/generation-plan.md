# Contract Generation Plan

This plan sequences contract generation after the Phase 0 document index. It is a planning artifact only and does not create real OpenAPI, AsyncAPI, schemas, enums, events, examples, state machines, or error codes.

Global rules for every phase:

- Read the mapped source documents before generating.
- Generate only `v1` API, event, schema, enum, example, state machine, error code, and compatibility artifacts.
- Do not invent domain concepts, APIs, events, enum values, schemas, or state transitions that are not grounded in `docs/documents/`.
- Add explicit TODO notes when the source is incomplete or ambiguous.
- Do not create implementation code, database migrations, service logic, or business logic.
- Do not create CODEOWNERS.
- Do not edit files under `docs/documents/`.

## Phase 0: Document Index & Source Map

Status: complete when these planning files exist.

Outputs:

- `docs/source-map.md`
- `docs/domain-contract-map.md`
- `docs/generation-plan.md`

Allowed work:

- Scan Markdown source documents.
- Classify document type, domain, related repo, related contract area, generation suitability, and blocking notes.
- Build a phase sequence for later contract generation.

Not allowed:

- No OpenAPI.
- No AsyncAPI.
- No real JSON Schema.
- No real enum.
- No real event contract.
- No state machine contract.
- No error code catalog.

## Phase 1: Common Contract Foundation

Primary sources:

- MASTER-01
- MASTER-02
- MASTER-03
- MASTER-04
- MASTER-05
- MASTER-07
- TECH-01
- Existing contract standards under `docs/`

Expected outputs:

- `common` schemas and enums for shared IDs, correlation, idempotency, audit, evidence, resolver, guard, and compatibility primitives.
- Shared examples where source docs provide enough fields.
- Shared error-code conventions if grounded in the source docs.

Blocking checks:

- TODO if any shared field name, status, or guard outcome is not explicit in source documents.
- Do not generate domain-specific Product/Ops/Commerce objects in this phase.

## Phase 2: ops-core Schemas & Enums

Primary sources:

- PACK-01
- PACK-02
- PACK-03
- TECH-02
- TECH-03
- Operational extra and operational_more documents

Expected outputs:

- `product` schemas/enums.
- `ops` schemas/enums.
- `misa` handoff schemas/enums where source is explicit.
- Examples for product formulas, operational forms, production order, stock alert, material/packaging grouping, traceability, recall, sale lock, and warehouse/inventory contracts.

Blocking checks:

- Reconcile duplicate-like material/packaging catalog files before definitive generation.
- Treat formula catalog rows as examples/source data, not implementation formulas.
- Preserve source enum values such as stock alert status codes exactly when generating later.

## Phase 3: business-platform Schemas & Enums

Primary sources:

- TECH-04
- PACK-05 and TECH-05
- PACK-06 and TECH-06
- PACK-07 and TECH-07
- PACK-08 and TECH-08
- PACK-09 and TECH-09

Expected outputs:

- `commerce`, `ai`, `channel`, `ads`, `live`, and `ivr` schemas/enums.
- Examples for quote/order handoff, AI advisor handoff, channel delivery, ads verified revenue, live script runtime, and IVR order confirmation when the source is explicit.

Blocking checks:

- Commerce must depend on ops-core sellable, stock, trace, recall, and sale-lock contracts.
- AI/channel/live/ads/IVR contracts must not bypass Commerce Runtime or Operational Core.

## Phase 4: ops-core OpenAPI Contracts

Primary sources:

- PACK-01
- PACK-02
- PACK-03
- TECH-02
- TECH-03
- Operational forms documents
- MISA/accounting handoff documents, only where the API boundary is explicit

Expected outputs:

- `v1` OpenAPI contracts for ops-core-facing product, operational, demand/MRP, procurement, inventory, warehouse, traceability, recall, sale-lock, operational forms, and MISA handoff boundaries.

Blocking checks:

- Add TODO for any path, method, request, response, status, or error not explicitly supported by source docs.
- Do not create service behavior or database details.

## Phase 5: business-platform OpenAPI Contracts

Primary sources:

- TECH-04 through TECH-09
- PACK-05 through PACK-09
- MASTER-04 guard boundaries
- MASTER-07 release constraints where applicable

Expected outputs:

- `v1` OpenAPI contracts for commerce runtime, AI advisor, channel gateway, ads measurement, MC AI Live, and IVR order confirmation boundaries.

Blocking checks:

- Do not create endpoints for unsupported channel/provider behavior.
- Do not infer payment, shipping, order, call, ads, or live script behavior beyond source docs.

## Phase 6: AsyncAPI & Event Contracts

Primary sources:

- TECH/PACK docs that explicitly name event flows, lifecycle transitions, handoffs, callbacks, or integration messages.
- MASTER-03 for correlation and idempotency constraints.
- MASTER-04 for guard/suppression/fallback constraints.
- MASTER-05 and MASTER-07 for evidence and release events where explicit.

Expected outputs:

- `v1` AsyncAPI contracts.
- `v1` event contracts.
- Event examples with correlation, idempotency, source owner, consumer boundary, and evidence fields only when source-supported.

Blocking checks:

- Add TODO instead of inventing event names, topics, payload fields, or lifecycle transitions.
- Keep provider-specific events separate from internal events when the source documents make that boundary clear.

## Phase 7: Examples, State Machines, Error Codes, Compatibility

Primary sources:

- All source documents marked `yes` or `needs-review` in `docs/source-map.md`.
- `docs/domain-contract-map.md`
- Existing compatibility/error-code standards under `docs/`

Expected outputs:

- Examples for each generated contract area.
- State-machine artifacts for source-supported operational, commerce, ads, live, IVR, release, and guard flows.
- Error-code catalogs grounded in source docs and existing error-code standard.
- Compatibility notes for cross-system and future-integration boundaries.

Blocking checks:

- Do not generate from `.artifacts` documents.
- Treat TECH-13 as blocked until it contains usable content.
- Add TODOs for unclear source precedence, duplicate documents, empty files, or missing contract boundary details.
