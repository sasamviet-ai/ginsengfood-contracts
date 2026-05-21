# contract-tests

This folder contains planning assets and fixtures for provider/consumer contract testing between `ginsengfood-ops-core`, `ginsengfood-business-platform`, and authorized integration consumers.

Current validation:

- Repository-level contract hygiene/source trace validation is available through `node scripts/validate-contracts.mjs`.
- Existing Postman collections and JSON fixtures remain early contract-test assets.
- Pact files remain planning-only until the provider/consumer registry and Pact toolchain are approved.

Contract tests must not contain application implementation, generated SDKs, database migrations, secrets, or production config.

Future work:

- Add strict schema/example validation after the JSON Schema validator is approved.
- Add OpenAPI/AsyncAPI validation after strict validator packages are approved.
- Add provider/consumer verification after ownership and CI gates are approved.
