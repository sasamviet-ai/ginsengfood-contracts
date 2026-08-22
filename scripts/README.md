# scripts

This folder contains contract lifecycle scripts. Scripts must support contract validation/generation only and must not contain application business logic, service logic, database migrations, production config, secrets, or deployment automation.

Available scripts:

- `validate-contracts.mjs`: zero-dependency contract validation for JSON parseability, JSON Schema metadata, version-matched OpenAPI paths, local `$ref` targets, `docs/source-map.md`, YAML `source_documents`, event envelopes, all versioned fixture manifests, basic fixture required fields, legacy source path drift, and Operational Forms v2 parity/retirement rules.

Run from repository root:

```powershell
node scripts/validate-contracts.mjs
```

Targeted Operational Forms v2 validation, intentionally independent of unrelated repository-wide baseline failures:

```powershell
node scripts/validate-contracts.mjs --scope=operational-form-v2
```

Future scripts may include strict OpenAPI/YAML/AsyncAPI validation, full JSON Schema example validation with an approved validator, breaking-change checks, and generated-client workflows after the toolchain is approved.
