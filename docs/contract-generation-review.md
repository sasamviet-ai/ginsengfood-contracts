# Contract Generation Review

Review date: 2026-05-18

Scope: generated contract repository, excluding source documents under `docs/documents/` from mutation. This review checked generated/planned contract areas: `schemas/`, `enums/`, `error-codes/`, `openapi/`, `asyncapi/`, `events/`, `examples/`, `state-machines/`, `compatibility/`, `contract-tests/`, `generated/`, `scripts/`, and generated docs under `docs/`.

## Summary

The generated contract set is broadly consistent with the phase plan and the documented owner boundaries. Mechanical checks passed for the major contract artifacts:

- All JSON files under `schemas/`, `events/`, and `examples/` parse successfully.
- All JSON Schemas under `schemas/` have `title` and `description`.
- All event payload schemas under `events/` define and require `eventId`, `eventType`, `eventVersion`, `occurredAt`, `source`, `correlationId`, and `data`.
- Event examples under `examples/events/` contain the same required event envelope fields.
- All OpenAPI YAML files under `openapi/` use OpenAPI `3.1.0`, have `info.version: 1.0.0`, use `/v1` paths, and include standard error responses `400`, `401`, `403`, `404`, `409`, `422`, and `500`.
- Internal `$ref` targets from `schemas/`, `events/`, `openapi/`, and `asyncapi/` resolve to existing files.
- Breaking-change governance exists under `compatibility/breaking-change-policy.md`.

Main issues found are repository hygiene and traceability issues, not core contract-shape failures:

- Stray placeholder files named `cc.md` exist in contract folders.
- Unexpected empty schema provider folders exist: `schemas/ops-core/` and `schemas/business-platform/`.
- Those unexpected folders have no README.
- Many YAML `source_documents` values are ASCII-normalized and do not match the real Unicode source file paths in `docs/documents/`.
- There are many intentional TODOs that require owner decisions before stricter contracts or generated clients should be treated as stable.

## Files Reviewed

| Area | Files reviewed | Notes |
| --- | ---: | --- |
| `schemas/` | 116 | Includes domain schema files and stray `cc.md` placeholders. JSON Schema title/description check passed. |
| `enums/` | 52 | Enum YAML catalogs plus README files. Source path traceability needs cleanup. |
| `openapi/` | 34 | 30 OpenAPI YAML contracts plus README/placeholder files. Version/path/error checks passed. |
| `asyncapi/` | 4 | 3 AsyncAPI YAML contracts plus README. |
| `events/` | 54 | Event payload schemas, README files, and stray `cc.md` placeholders. Required event envelope check passed. |
| `examples/` | 22 | API, event, and error examples. JSON parse check passed. |
| `state-machines/` | 16 | State-machine docs and README files. |
| `compatibility/` | 6 | Breaking-change/deprecation/version/consumer compatibility docs. |
| `error-codes/` | 6 | Shared error-code catalogs plus README. |
| `contract-tests/` | 4 | README-only placeholders. |
| `generated/` | 4 | README-only placeholders. |
| `scripts/` | 1 | README-only placeholder. |
| `docs/` generated files | 13 before this report | Excludes `docs/documents/` source corpus. |

## Issues Found

| Severity | Issue | Evidence | Impact |
| --- | --- | --- | --- |
| Medium | Stray placeholder files were created in generated contract folders. | `docs/cc.md` contains only `cc`; `openapi/cc.md`, `schemas/common/cc.md`, `schemas/ops-core/cc.md`, `schemas/business-platform/cc.md`, `events/ops-core/cc.md`, and `events/business-platform/cc.md` are empty or placeholder-like. | These are not contracts, schemas, examples, state machines, or governance docs. They create noise and can confuse later linting. |
| Medium | Unexpected schema folders exist outside the phase contract model. | `schemas/ops-core/` and `schemas/business-platform/` exist but generated phases used domain folders such as `schemas/ops/`, `schemas/product/`, `schemas/commerce/`, `schemas/channel/`, `schemas/ai/`, `schemas/ads/`, `schemas/live/`, and `schemas/ivr/`. | These folders are not part of the requested schema layout and may imply a provider-oriented schema structure that was not requested. |
| Medium | README coverage is missing only for the unexpected schema folders. | `schemas/ops-core/` and `schemas/business-platform/` have no `README.md`. | If those folders are kept, they violate the repo convention that every contract area/sub-area explains scope and boundaries. If they are removed, this issue disappears. |
| Medium | YAML `source_documents` paths do not resolve to actual source files. | Example: `enums/product/dietary-type.yaml` points to `docs/documents/2_pack/operational_more/CONG THUC VAN HANH 20 SKU MOI.md`, but the actual source file is `docs/documents/2_pack/operational_more/CÔNG THỨC VẬN HÀNH 20 SKU MỚI.md`. Similar ASCII-normalized paths appear across enum and error-code YAML files. | Traceability is weakened. The domain is usually source-backed, but automated source verification cannot follow these paths. |
| Low | Some OpenAPI files define small inline component schemas rather than extracting every request shape to `schemas/`. | `openapi/ops-core/availability-sellable.v1.yaml` and `openapi/business-platform/availability-consumer.v1.yaml` define `AvailabilityCheckRequest` locally with TODO descriptions. `ProductId`, `SkuId`, and `ErrorEnvelope` are also local OpenAPI components. | This is acceptable for minimal OpenAPI contracts, but later strict generation may require reusable request schemas or a documented OpenAPI-local component policy. |
| Low | Required example names use dot suffixes that a strict single-extension kebab-case linter may flag. | Files such as `availability-check.request.json`, `order-created.response.json`, and `sale-lock-activated.v1.example.json`. | These names were explicitly requested by the phase task, so this is not a contract defect. A future linter should allow semantic dot suffixes for examples and versioned events. |
| Low | `order-paid.v1` is grouped under order events but its payload is the payment schema. | `events/business-platform/order/order-paid.v1.json` has `eventType: business-platform.order.order-paid.v1` and `data` referencing `schemas/commerce/payment.schema.json`. | Owner is still `business-platform`, so this is not an owner mix. Human review should decide whether this event should carry an order projection, payment projection, or both by reference. |

## Checks With No Blocking Findings

- Wrong position: apart from `cc.md` placeholders and unexpected `schemas/ops-core/`, `schemas/business-platform/`, generated contracts are in the expected top-level areas.
- Kebab-case: no blocking kebab-case violation found in generated contract names. `README.md` is treated as a conventional exception; requested example dot suffixes are treated as allowed task-specific names.
- Schema title/description: no missing `title` or `description` found in `schemas/**/*.schema.json`.
- Event envelope: no missing required event envelope fields found in `events/**/*.json` or `examples/events/**/*.json`.
- OpenAPI: no missing OpenAPI version, `/v1` paths, or standard error responses found.
- Fabricated domain: no clear unsupported domain was found in the sampled source-basis review. Most uncertain areas are marked with TODOs instead of being asserted as final.
- Business logic: no implementation code, database migration, service logic, production config, or generated client code was found in the generated contract areas. State-machine guard language is contract-level documentation, not executable business logic.
- Owner boundaries: no confirmed owner inversion found. Key boundaries are preserved: ops-core owns product/ops/inventory/sellable/recall/sale-lock/MISA handoff; business-platform owns commerce/channel/AI/ads/live/IVR/payment/verified revenue.
- Breaking-change policy: `compatibility/breaking-change-policy.md` exists and explicitly blocks unreviewed breaking changes.

## Recommended Fixes

1. Remove the stray placeholder files after user approval:
   - `docs/cc.md`
   - `openapi/cc.md`
   - `schemas/common/cc.md`
   - `schemas/ops-core/cc.md`
   - `schemas/business-platform/cc.md`
   - `events/ops-core/cc.md`
   - `events/business-platform/cc.md`

2. Remove `schemas/ops-core/` and `schemas/business-platform/` if they are only placeholder folders. If they are intentionally kept, add README files explaining why provider-level schema folders coexist with domain schema folders.

3. Normalize `source_documents` traceability in YAML files. Recommended options:
   - Use exact `docs/source-map.md` `document_file` values, including Unicode filenames.
   - Or introduce stable source IDs such as `PACK-02`, `TECH-04`, `MASTER-05` and keep exact paths only in `docs/source-map.md`.

4. Add a lightweight lint policy before the next generation pass:
   - allow `README.md`;
   - allow version suffixes like `.v1`;
   - allow example suffixes like `.request`, `.response`, and `.example`;
   - reject placeholder files with empty content or content equal to `cc`.

5. Decide whether OpenAPI-local component schemas are allowed. If not, extract stable request/response component schemas to `schemas/` in a later phase.

6. Decide whether `events/business-platform/order/order-paid.v1.json` should carry payment data, order data, or a small cross-reference payload.

## Human Decisions Required

The following TODO classes need owner decision before contracts should be considered strict/stable:

- Source traceability style: exact Unicode file paths vs stable source IDs.
- Whether to delete or keep provider-level schema folders `schemas/ops-core/` and `schemas/business-platform/`.
- Official English value for Vietnamese `mặn`: current enum uses `SAVORY` with TODO.
- SKU lifecycle inactive semantics.
- Product code and SKU code final formats.
- Unit, currency, precision, rounding, and conversion policy.
- Warehouse type/location taxonomy.
- Supplier approval lifecycle and source-origin taxonomy.
- Production order cancellation after `RELEASED_TO_PRODUCTION` and partial completion.
- Batch rework, QC remediation, hold-release authority, and QC checklist taxonomy.
- Warehouse receipt rejection reasons and partial receipt transitions.
- Recall severity, no-action closure, external reporting, and sale-lock warning/pre-lock model.
- Quote expiration duration, cart abandonment timeout, dispute review SLA.
- Payment provider status taxonomy, bank transfer reconciliation details, refund transitions.
- Shipping carrier/method/tracking schema and international shipping/payment reserved policy.
- Customer PII/masking/receiver field policy.
- AI intent, claim guard, recommendation status, customer memory consent taxonomy.
- Channel delivery target schema, visibility boundary enum, human takeover lifecycle.
- Ads attribution conflict taxonomy, scale-gate thresholds, ROAS calculation contract fields.
- Live plan status, cue type, risk severity/action, measurement event taxonomy.
- IVR retry count/timing and final no-answer program names.
- Real broker/topic/partition/outbox/retry/dead-letter policy.
- Generated client commit policy, generator versions, package names, and publishing flow.
- Contract-test toolchain and provider/consumer ownership registry.
- Deprecation window, approval roles, and compatibility review SLA.

## Next Phase Recommendation

Before generating more domain contracts, run a cleanup and hardening pass:

1. Remove placeholder artifacts and unexpected folders after user approval.
2. Fix source-document traceability so every YAML source reference resolves or maps to a stable source ID.
3. Add repository lint checks for filename policy, placeholder files, JSON parse, schema title/description, event envelope, OpenAPI `/v1`, standard errors, and broken `$ref`.
4. Convert the most important TODOs into owner-decision tickets, starting with source traceability, unit/money policy, availability request shape, IVR retry policy, and sale-lock/recall transition model.
5. Only after that, proceed to formal contract validation and optional generated-client policy.
