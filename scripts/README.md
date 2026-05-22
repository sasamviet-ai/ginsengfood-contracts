# scripts

This folder contains contract lifecycle scripts. Scripts must support contract validation/generation only and must not contain application business logic, service logic, database migrations, production config, secrets, or deployment automation.

Available scripts:

- `validate-contracts.mjs`: zero-dependency contract validation for JSON parseability, JSON Schema metadata, OpenAPI/AsyncAPI surface checks, local `$ref` targets, `docs/source-map.md`, YAML `source_documents`, event envelopes, fixture manifest targets, basic fixture required fields, and legacy source path drift.

Run from repository root:

```powershell
node scripts/validate-contracts.mjs
```

Future scripts may include strict OpenAPI/YAML/AsyncAPI validation, full JSON Schema example validation with an approved validator, breaking-change checks, and generated-client workflows after the toolchain is approved.
