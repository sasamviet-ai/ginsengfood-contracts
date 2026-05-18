# Pact Readiness Notes v1

This folder is not ready for real Pact contract files yet.

The current v1 artifacts are planning and compatibility notes only. They identify provider/consumer boundaries that should later become Pact interactions if the repository adopts Pact.

Readiness requirements before adding real Pact files:

- Choose Pact toolchain and version.
- Define provider names and consumer names.
- Define Pact broker or file-based exchange policy.
- Define CI verification entrypoint.
- Define how OpenAPI, AsyncAPI, JSON Schema, event payload, and example fixtures map into Pact interactions.
- Confirm ownership for each interaction in `pact-interaction-map.v1.yaml`.

Do not place application code, dependency installation scripts, secrets, generated SDKs, or implementation tests in this folder.

TODO:

- No Pact broker, provider registry, or CI verification policy exists yet.
