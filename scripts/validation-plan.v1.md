# Validation Plan v1

The active validation command is:

```powershell
node scripts\validate-contracts.mjs
```

## Current Checks

- Parse every tracked Markdown, JSON, YAML, and YML file outside ignored implementation folders.
- Validate JSON syntax.
- Enforce JSON Schema draft `2020-12`, `$id`, `title`, and `description` for `schemas/**/*.schema.json`.
- Resolve local `$ref` targets in JSON and YAML.
- Enforce OpenAPI `3.1.0`, `info.version: 1.0.0`, and `/v1` path presence.
- Parse AsyncAPI files and keep broker/topic/retry/outbox placeholders as explicit future integration decisions.
- Verify `docs/source-map.md` document rows point to existing files.
- Verify Phase 8 IVR SRS files are present in `docs/source-map.md` before contracts cite them.
- Verify all YAML `source_documents` entries use exact existing paths, not aliases.
- Reject legacy source folder references outside `docs/documents/**`.
- Warn on legacy placeholder marker files if any are reintroduced.
- Check event schema and event examples include the standard event envelope fields.
- Verify fixture manifest path targets exist.
- Check fixture JSON includes top-level fields required by the referenced schema when the fixture shape is directly comparable.
- Require the Phase 8 IVR contract surface to exist across enums, schemas, OpenAPI, events, AsyncAPI, state machines, examples, and fixtures.
- Reject stale IVR wording that treats all programs as a two-attempt policy or references the old Phase 7 IVR handoff.

## Required Local Gate

Run these commands before publishing a contract patch:

```powershell
node scripts\validate-contracts.mjs
git diff --check
```

## CI Gate

The official CI gate is the same Node command. CI must not silently generate SDKs or mutate contract files; generation remains a separate owner-approved workflow.

## Deferred Strict Toolchain

Strict YAML parsing, OpenAPI semantic validation, AsyncAPI semantic validation, and full JSON Schema example validation require an approved parser/toolchain. This repo currently has no `package.json` and no local YAML parser dependency, so `validate-contracts.mjs` remains zero-dependency by design.
