# examples/api

API examples are source-backed request or response payloads used by QA, frontend, backend, and contract-test planning.

Current examples cover:

- availability and sellable checks, gồm v1 compatibility và v2 exact-UOM/full-fill examples;
- external inventory, warehouse, warehouse-location, warehouse-receipt, allocation, stock-alert và public-SKU read projections dưới `x03b/`;
- public trace responses;
- deprecated Operational Form v1 and canonical `form_key` v2 requests;
- print job creation;
- MISA handoff response;
- material planning policy response;
- IVR internal/admin task, callback, queue, and SIM actions.

Examples must stay within the fields published by schemas and OpenAPI. They are not mock servers, credentials, production data, or implementation fixtures.
