# Breaking Change Policy v1

This policy applies to all v1 API, AsyncAPI, event payload, JSON Schema, enum, error-code, example, and state-machine contracts in this repository.

## Rule

No breaking change may be merged without provider and consumer review. A breaking change must be documented in `compatibility/` before it is used by `ginsengfood-ops-core` or `ginsengfood-business-platform`.

## Breaking Changes

| Area | Breaking change examples |
| --- | --- |
| JSON Schema | Removing a field, making an optional field required, changing type, narrowing enum values, changing meaning of a field. |
| Enum | Removing or renaming a value, changing the operational meaning of a value, merging distinct states such as `QC_PASS` and `RELEASED`. |
| OpenAPI | Removing an endpoint, changing path/method, changing request/response schema incompatibly, changing error semantics. |
| AsyncAPI/Event | Renaming `eventType`, changing `eventVersion` semantics, removing required envelope fields, moving producer ownership. |
| Error Code | Removing or renaming a code, changing HTTP status meaning, changing retryability or business meaning. |
| State Machine | Allowing a transition that source documents block, removing a required guard, or making a previously valid state unreachable. |

## Non-Breaking Changes

| Area | Compatible change examples |
| --- | --- |
| JSON Schema | Adding optional fields, adding descriptions, adding examples, widening safe metadata objects. |
| Enum | Adding a new value when consumers are required to ignore unknown values safely. |
| OpenAPI | Adding an endpoint, adding optional request fields, adding response metadata under the envelope. |
| Event | Adding optional fields to `data`, adding a new event type with v1 envelope. |
| Error Code | Adding a new namespaced code with stable message and HTTP status. |

## Required Review

Every proposed breaking change must include:

- Source document evidence or an explicit TODO explaining missing evidence.
- Provider owner impact.
- Consumer owner impact.
- Migration or dual-read/dual-write plan if needed.
- Example fixture updates.
- Contract test update plan.
- Versioning decision: remain backward compatible in v1 or introduce a new major contract version.

## Current v1 Guardrails

- `QC_PASS` must not be treated as `RELEASED`.
- Warehouse receipt must not confirm a non-`RELEASED` batch.
- Inventory balance must remain derived from ledger/checkpoints, not direct consumer mutation.
- Sale Lock / Stop Sale must block quote, order, AI, CRM, Ads, and Live selling flows.
- Customer confirmation is required before official order creation.
- Payment must not become paid without an allowed confirmation source.
- Verified revenue is produced by business-platform, not ops-core.
- IVR result is an input signal only and must not directly mutate core order state.

## TODO

- Source documents do not define formal review roles, approval SLA, or deprecation windows. Keep those as TODO until owner policy exists.
