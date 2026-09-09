# contract-tests/fixtures

Fixtures are source-backed, versioned payloads for future provider/consumer contract tests.

Rules:

- fixture files must be listed in the matching `fixture-manifest.vN.yaml`;
- each fixture must point to an example and at least one schema or event contract;
- fixtures must not contain production data, credentials, or fields outside the referenced contract;
- examples may be copied into fixtures, but fixtures are the contract-test inputs.

The manifest is validation input today. It is not a generated Pact file and does not require a Pact broker.

Operational Forms keeps the v1 FRM fixture during migration and adds a separate v2 `form_key` fixture. Passing either fixture proves schema shape only, not provider runtime availability.

Availability has a single version. Its fixture is listed in `fixture-manifest.v1.yaml`; the `availability-check.v2.*` fixtures and `contract-tests/availability-v2/` were removed on 2026-09-09 with the v2 route (OWNER-DIRECTIVE-2026-09-09-AVAILABILITY-V1-ONLY).

External bulk-read fixtures live under `contract-tests/x03b/fixtures/` and are exercised by `contract-tests/x03b/external-bulk-read-v1.contract.test.mjs`. Dedicated validator PASS proves contract shape and negative tamper behavior only; it does not prove provider runtime or consumer acceptance.
