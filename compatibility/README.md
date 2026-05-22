# Compatibility

Compatibility documents define what downstream systems may rely on when using `ginsengfood-contracts`.

## Documents

- `breaking-change-policy.md`: versioning and consumer impact rules.
- `source-traceability-policy.md`: exact source path and traceability rules for `source_documents`.
- `consumer-provider-boundary.v1.yaml`: provider/consumer ownership boundaries.
- `versioning-policy.v1.yaml`: v1 compatibility and release semantics.

## Rules

- A contract is traceable only when every `source_documents` entry uses an exact active path from `docs/source-map.md`; `docs/source-map.md` itself is allowed only for index or manifest files.
- Old source aliases and legacy folders are not compatibility-safe references.
- External `/v1` consumer APIs must remain stable unless the breaking-change policy explicitly permits the change.
- Internal/admin APIs may evolve faster, but still require source traceability and release notes.
- Broker/topic/retry/outbox behavior is not assumed until source documents or owners define it.
