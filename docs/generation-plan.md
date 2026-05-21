# Contract Generation Plan

This plan sequences the remaining contract work from the current source set under:

- `docs/documents/0. appendices`
- `docs/documents/1. master`
- `docs/documents/2. pack`
- `docs/documents/3. tech`

Global rules:

- Do not edit `docs/documents/**` during contract generation.
- Keep contracts versioned as `v1`.
- Use exact active paths from `docs/source-map.md` in `source_documents`.
- Do not invent broker, topic, retry, outbox, SDK generation, provider behavior, or business calculations without source or owner approval.
- TODOs are valid only for future owner decisions, not for missing source-backed contract work.

## Phase 0 - Baseline Closure

Status: complete for the current pass.

Outputs:

- refreshed `docs/source-map.md`;
- refreshed `docs/domain-contract-map.md`;
- refreshed review and validation planning docs;
- removed legacy placeholder marker files;
- active validator command: `node scripts/validate-contracts.mjs`.

Gate:

- validator passes with 0 warnings;
- no stale source-folder references or old form-code prefixes outside source documents;
- `git diff --check` is clean.

## Phase 1 - Source-To-Contract Traceability Hardening

Status: complete for the current pass, with future tightening allowed as source sections become stable.

Outputs:

- domain trace matrix from source document groups to schema, enum, API, event, and state-machine areas;
- compatibility source-traceability policy;
- validator checks for source-map paths and `source_documents` targets.

Gate:

- every YAML `source_documents` entry points to `docs/source-map.md` or an exact active path listed in it;
- every main domain has a visible trace path in `docs/domain-contract-map.md`.

## Phase 2 - Deep Schema/Enum Coverage

Status: implemented for the main gaps identified in the current pass.

Outputs:

- common foundation contracts for User, Role, Permission, RBAC Matrix, Auth Session, Evidence Registry, P0 Stop Point, Release Status Registry, and Runtime Config;
- OPF form and payload contracts for OPF-01 through OPF-12 boundaries;
- print payload/job contracts and status enum;
- material planning policy, material code registry, packaging yield policy, material group/family, suppression reason, and planning policy enums;
- MISA checkpoint, handoff, checkpoint type, mapping status, sync status, and reconcile status contracts.

Gate:

- JSON parses cleanly;
- schemas carry draft `2020-12`, `$id`, title, and description;
- remaining owner decisions do not hide missing source-backed fields.

## Phase 3 - API/Event/State Alignment

Status: implemented at contract-surface level; future integration details remain owner decisions.

Outputs:

- ops-core admin/internal OpenAPI for operational forms, print/reprint, MISA sync/reconcile, and material planning policy;
- `/v1` consumer boundaries remain read/check oriented;
- evidence/release events use the shared event envelope;
- OPF, print, evidence, P0, release, batch/QC/warehouse/recall/sale-lock state-machine docs are present where source-backed.

Gate:

- OpenAPI declares `3.1.0`, `info.version: 1.0.0`, and `/v1`;
- event schemas and examples include the standard event envelope;
- state machines name permission, evidence, audit, and P0 guards where required.

## Phase 4 - Examples, Fixtures, Contract Tests

Status: implemented as planning-grade fixtures and examples.

Outputs:

- API examples for OPF, print, MISA handoff, material planning policy, and existing availability/trace flows;
- event examples for MISA, evidence, release, sale-lock, sellable, order, payment, ads, and IVR;
- fixture manifest with provider/consumer boundaries;
- Pact interaction planning map without assuming a broker or Pact registry.

Gate:

- example and fixture JSON parses;
- fixture manifest targets resolve;
- validator checks top-level required fields where fixture shape is comparable to the referenced schema or event.

## Phase 5 - Release Readiness And CI Gate

Status: implemented as repo hygiene and policy gate.

Outputs:

- `.github/workflows/contract-validation.yml`;
- generated-client manifests stay `manifest-only`;
- release checklist defines source trace, validation, compatibility, OpenAPI/AsyncAPI, state, example, fixture, and generated-client evidence.

Gate:

- one command validates the contract repo: `node scripts/validate-contracts.mjs`;
- release checklist records source trace, validation evidence, compatibility impact, and owner decisions.
