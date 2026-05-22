# Contract Generation Review

Review date: 2026-05-22

## Baseline Closure

The current contract pass is aligned to the refreshed source tree in `docs/documents/0. appendices`, `docs/documents/1. master`, `docs/documents/2. pack`, `docs/documents/3. tech`, and the Phase 8 IVR SRS set in `docs/documents/4. phase/phase-8`.

Current baseline gates:

- `node scripts/validate-contracts.mjs` passes with 0 warnings.
- No contract metadata uses legacy source folders such as `0_dev_execution`, `1_master`, `2_pack`, `3_tech`, or `4_phase`.
- Old form-code references are removed from generated contract metadata.
- Legacy placeholder marker files under contract areas have been deleted.
- `TECH-13` is treated as `needs-review` handoff/report source, not as a runtime contract source.
- Phase 8 IVR SRS files are source-map governed inputs for IVR contract extraction.

## Phase Coverage

| phase | review result | notes |
|---|---|---|
| Phase 0 baseline closure | done | Source map, generation plan, validation script, and placeholder cleanup are in place. |
| Phase 1 traceability | in progress | `domain-contract-map.md`, compatibility policy, and validator source path checks now enforce exact source-map paths. |
| Phase 2 schema/enum coverage | in progress | Foundation, OPF, print, MISA, material planning, and packaging contracts exist; remaining TODOs must be owner decisions, not missing source-backed fields. |
| Phase 3 API/event/state alignment | in progress | Ops admin OpenAPI and core state/event surfaces exist. AsyncAPI broker/topic/retry/outbox must remain explicit future integration until owner-approved. |
| Phase 4 examples/fixtures/tests | in progress | Examples and fixture manifest should track only stable schema fields. Validator checks paths and basic required fields. |
| Phase 5 release readiness | in progress | CI command and release checklist are defined; generated-client manifests stay policy-only until SDK tooling is approved. |
| Phase 8 IVR contract pass | in progress | IVR SRS has been extracted into v1 enum/schema/API/event/state/example/fixture contracts while preserving Order Core ownership of order state transitions. |

## Residual Owner Decisions

- AsyncAPI broker names, topic naming standard, retry strategy, dead-letter behavior, and outbox implementation are not invented in this repo.
- Strict YAML/OpenAPI/AsyncAPI semantic parsing is deferred until owners approve a parser/toolchain. The current validator intentionally remains zero-dependency and validates contract hygiene, traceability, refs, event envelopes, fixtures, and basic required fields.
- Generated SDK/toolchain approval remains out of scope; manifests document policy only.
- Some domain taxonomies may need narrower owner-approved enumerations after operational rollout.
- OpenAPI local component expansion can be deepened after route ownership is approved.
- Order-paid and accounting handoff payload split remains a provider/consumer decision and should not be inferred from examples alone.
- Phase 8 real-customer-call release remains blocked until IVR smoke, evidence, privacy, admin review, and production release gates pass.

## Merge Recommendation

Before merging a contract pass, run:

```powershell
node scripts\validate-contracts.mjs
git diff --check
```

The validation command is the primary contract gate. `git diff --check` catches whitespace and patch hygiene issues.
