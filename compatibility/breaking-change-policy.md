# Breaking Change Policy

This repository publishes v1 contracts for cross-system integration. A change is breaking when an existing provider or consumer can no longer satisfy the contract without code, data, or operational workflow changes.

## Breaking Changes

- Removing a schema property, enum value, OpenAPI route, response field, event envelope field, or documented state transition.
- Changing the meaning, owner, source-of-truth, or lifecycle of an existing contract field.
- Moving ownership of product, operational truth, inventory, traceability, recall, sale lock, evidence, or MISA checkpoint contracts.
- Adding a required request field to an existing external `/v1` consumer API.
- Replacing exact `source_documents` paths with aliases or paths that do not exist in `docs/source-map.md`.

## Non-Breaking Changes

- Adding optional schema fields with source-backed descriptions.
- Adding new enum values when consumers are already required to tolerate unknown values.
- Adding admin/internal routes that do not change external `/v1` consumer behavior.
- Adding examples, fixtures, or validation checks that reflect already-published schema requirements.

## Guardrails

- Printer output, QR code text, barcode text, and generated form display text are never the source of truth.
- Open P0 stop points block release even when schema validation passes.
- AsyncAPI broker/topic/retry/outbox details remain future integration decisions until owner-approved.
- Compatibility review must include source traceability evidence from `docs/source-map.md`.
