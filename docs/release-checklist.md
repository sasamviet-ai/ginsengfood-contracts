# Contract Release Checklist

Use this checklist before publishing or merging a contract release.

## Required Evidence

- Source trace: every changed contract cites exact paths from `docs/source-map.md`.
- Validation: `node scripts\validate-contracts.mjs` passes with 0 warnings.
- Stale reference sweep: no legacy source folder paths or old form codes remain outside archived source documents.
- Compatibility review: external `/v1` behavior, event envelope fields, and provider/consumer boundaries are unchanged or documented as breaking.
- OpenAPI/AsyncAPI review: OpenAPI files use `3.1.0`; AsyncAPI future-integration placeholders are explicit owner decisions.
- State-machine review: transitions that require permission, audit, evidence, or P0 checks name those guards.
- Examples and fixtures: JSON parses, paths resolve, and fields are supported by schemas.
- Generated-client policy: manifests remain policy-only unless SDK generator/toolchain approval exists.

## Commands

```powershell
node scripts\validate-contracts.mjs
git diff --check
```

## Release Notes

Release notes must list:

- source documents used;
- schema/enum/API/event/state-machine areas changed;
- compatibility impact;
- remaining owner decisions;
- validation evidence.
