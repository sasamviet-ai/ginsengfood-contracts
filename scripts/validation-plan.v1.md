# Contract Validation Plan v1

This is a planning document for future contract validation scripts. It is not an executable script.

Validation goals:

- Validate OpenAPI 3.1.0 files under `openapi/`.
- Validate AsyncAPI files under `asyncapi/`.
- Validate JSON Schema draft 2020-12 files under `schemas/` and `events/`.
- Parse example and fixture JSON files under `examples/` and `contract-tests/fixtures/`.
- Check required event envelope fields: `eventId`, `eventType`, `eventVersion`, `occurredAt`, `source`, `correlationId`, and `data`.
- Check OpenAPI paths use `/v1` and include standard error responses.
- Check filename policy and README coverage.
- Check placeholder files such as empty `cc.md` are not present.
- Check no files are added under `docs/documents/` by contract generation.

Future script names are listed in `script-manifest.v1.yaml`.

TODO:

- Choose validator tools and CI entrypoint before adding executable scripts.
