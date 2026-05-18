# Deprecation Policy v1

This policy defines how v1 contracts may be deprecated without silently breaking providers or consumers.

## Principles

- Deprecation is not deletion.
- A deprecated contract remains usable until a reviewed compatibility plan says otherwise.
- New consumers should avoid deprecated contracts once a replacement exists.
- Existing consumers need explicit migration notes before removal or incompatible change.

## Deprecation Requirements

| Requirement | Description |
| --- | --- |
| Replacement | Identify the replacement schema, endpoint, event, enum value, or error code. |
| Owner | Identify provider owner and known consumer systems. |
| Reason | Explain why the contract is deprecated. |
| Risk | Document behavior that may break if consumers keep using it. |
| Migration | Provide request/response/event mapping when possible. |
| Tests | Identify fixtures or contract tests that must remain during migration. |

## Allowed Deprecation Markers

- OpenAPI: use `deprecated: true` with a description.
- JSON Schema: use description text and compatibility notes.
- AsyncAPI/Event: use description text and version matrix notes.
- Enum: keep the old value listed and mark it as deprecated in notes.
- Error code: keep the code stable and mark replacement guidance in notes.

## Not Allowed

- Removing a deprecated value from v1 without review.
- Changing a deprecated value to mean something else.
- Reusing a deprecated event type or error code for a new meaning.
- Marking a contract deprecated only in implementation code without updating this repository.

## TODO

- No official support window is defined in source documents.
- No release calendar is defined for contract removal.
- No owner-approved deprecation template exists yet.
