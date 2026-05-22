# Source Traceability Policy

Every generated or maintained contract file must be traceable to the refreshed source set in `docs/source-map.md`.

## Exact Path Rule

Contract metadata must use exact active source paths, with `docs/source-map.md` allowed only for index/manifest files that depend on the current map. Example:

```yaml
source_documents:
  - docs/documents/0. appendices/01-OPERATIONAL-FORMS.md
  - docs/documents/3. tech/02-TECH-01-FOUNDATION-RBAC-AUDIT-IDEMPOTENCY-EVIDENCE-REGISTRY.md
```

Do not use aliases such as `MASTER-01`, `PACK-03`, `TECH-13`, internal planning docs, or the old underscored source folders.

## Compatibility Impact

A contract change is not release-ready when:

- a `source_documents` entry points to a missing file;
- a source alias is used instead of an exact path;
- a contract introduces fields that are not supported by an active source document or owner decision;
- a TODO describes missing source-backed contract work instead of a future owner decision.

The validator enforces the missing-file and legacy-path checks. Reviewers enforce whether new fields are source-backed.
