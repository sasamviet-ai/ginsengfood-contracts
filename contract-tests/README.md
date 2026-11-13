# contract-tests

This folder contains planning assets and fixtures for provider/consumer contract testing between `ginsengfood-ops-core`, `ginsengfood-business-platform`, and authorized integration consumers.

Current validation:

- Repository-level contract hygiene/source trace validation is available through `node scripts/validate-contracts.mjs`.
- Exact X04D metadata parity for the 26 external v1 operations in its inventory (24 plus `reserveInventoryAllocationV1` and `releaseInventoryAllocationV1`) is enforced by `node contract-tests/x04d/external-runtime-v1-security.contract.test.mjs`.
- The SKU catalog read model (`SkuV1Response`: `updated_at`, `revision`, `sellable_uoms`, and the `GET /v1/skus` list route) is enforced by `node contract-tests/x03b/sku-catalog-v1.contract.test.mjs`; the list route's snapshot behaviour is also covered by `external-bulk-read-v1.contract.test.mjs`.
- The allocation write surface (reserve and release: operation metadata, request/result/error schemas, examples and fixtures, status vocabulary, UUIDv5 order identity vectors, webhook transport spec) is enforced by `node contract-tests/x03b/external-allocation-write-v1.contract.test.mjs`.
- The webhook security profile (signature test vector, key-version grammar, answers table, the inventory payload field lists and their closed schema, the sale-lock `reason` cap) is enforced by `node contract-tests/x03b/webhook-security-v1.contract.test.mjs`.
- Existing Postman collections and JSON fixtures remain early contract-test assets.
- Pact files remain planning-only until the provider/consumer registry and Pact toolchain are approved.

Contract tests must not contain application implementation, generated SDKs, database migrations, secrets, or production config.

Future work:

- Add strict schema/example validation after the JSON Schema validator is approved.
- Add OpenAPI/AsyncAPI validation after strict validator packages are approved.
- Add provider/consumer verification after ownership and CI gates are approved.
