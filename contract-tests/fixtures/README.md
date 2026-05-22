# contract-tests/fixtures

Fixtures are source-backed v1 payloads for future provider/consumer contract tests.

Rules:

- fixture files must be listed in `fixture-manifest.v1.yaml`;
- each fixture must point to an example and at least one schema or event contract;
- fixtures must not contain production data, credentials, or fields outside the referenced contract;
- examples may be copied into fixtures, but fixtures are the contract-test inputs.

The manifest is validation input today. It is not a generated Pact file and does not require a Pact broker.
