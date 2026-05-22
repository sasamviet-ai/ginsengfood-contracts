# Contract Generation Review

Review date: 2026-05-21

## Baseline Closure

The current contract pass is aligned to the refreshed source tree in `docs/documents/0. appendices`, `docs/documents/1. master`, `docs/documents/2. pack`, and `docs/documents/3. tech`.

Current baseline gates:

- `node scripts/validate-contracts.mjs` passes with 0 warnings.
- No contract metadata uses legacy source folders such as `0_dev_execution`, `1_master`, `2_pack`, `3_tech`, or `4_phase`.
- Old form-code references are removed from generated contract metadata.
- Legacy placeholder marker files under contract areas have been deleted.
- `TECH-13` is treated as `needs-review` handoff/report source, not as a runtime contract source.

## Phase Coverage

| phase | review result | notes |
|---|---|---|
| Phase 0 baseline closure | done | Source map, generation plan, validation script, and placeholder cleanup are in place. |
| Phase 1 traceability | in progress | `domain-contract-map.md`, compatibility policy, and validator source path checks now enforce exact source-map paths. |
| Phase 2 schema/enum coverage | in progress | Foundation, OPF, print, MISA, material planning, and packaging contracts exist; remaining TODOs must be owner decisions, not missing source-backed fields. |
| Phase 3 API/event/state alignment | in progress | Ops admin OpenAPI and core state/event surfaces exist. AsyncAPI broker/topic/retry/outbox must remain explicit future integration until owner-approved. |
| Phase 4 examples/fixtures/tests | in progress | Examples and fixture manifest should track only stable schema fields. Validator checks paths and basic required fields. |
| Phase 5 release readiness | in progress | CI command and release checklist are defined; generated-client manifests stay policy-only until SDK tooling is approved. |

## Residual Owner Decisions

- AsyncAPI broker names, topic naming standard, retry strategy, dead-letter behavior, and outbox implementation are not invented in this repo.
- Strict YAML/OpenAPI/AsyncAPI semantic parsing is deferred until owners approve a parser/toolchain. The current validator intentionally remains zero-dependency and validates contract hygiene, traceability, refs, event envelopes, fixtures, and basic required fields.
- Generated SDK/toolchain approval remains out of scope; manifests document policy only.
- Some domain taxonomies may need narrower owner-approved enumerations after operational rollout.
- OpenAPI local component expansion can be deepened after route ownership is approved.
- Order-paid and accounting handoff payload split remains a provider/consumer decision and should not be inferred from examples alone.

## Merge Recommendation

Before merging a contract pass, run:

```powershell
node scripts\validate-contracts.mjs
git diff --check
```

The validation command is the primary contract gate. `git diff --check` catches whitespace and patch hygiene issues.
