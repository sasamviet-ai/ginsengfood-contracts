# Correlation And Audit Standard

Tài liệu này định hướng metadata correlation và audit dùng chung giữa hai repo.

API/event nên có correlation id, causation id, actor, source system và timestamp khi cần trace end-to-end giữa `ginsengfood-ops-core` và `ginsengfood-business-platform`.

Không đặt log format production, secret, token hoặc observability config vào tài liệu này.

## X-Correlation-Id on the external /v1 API

Every request to the external `/v1` operations of ops-core may carry the header `X-Correlation-Id`. The rule below is enforced by the provider (`ApiHeaderValidation`, `CorrelationIdMiddleware`) and is the same for every external operation, including `POST /v1/service-tokens`:

- **Grammar.** After leading and trailing white space is trimmed: 1 to 128 characters of `A-Z`, `a-z`, `0-9`, `:`, `_`, `.`, `-` (`^[A-Za-z0-9:_.-]{1,128}$`). Put nothing secret or personal in it.
- **Absent, empty or malformed is not an error.** The provider does not reject the request: it ignores the value, generates a UUID, and uses that one. The request is processed normally.
- **The id in effect always comes back.** It is echoed in the `X-Correlation-Id` response header, in `correlation.correlationId` of the response body and in `error.correlationId` of an error body, except the `200` answer of `POST /v1/service-tokens`: that is a bare OAuth-style body without an envelope, so there the id comes back in the response header only. A consumer that sent a valid id gets the same id back; one that sent none or a malformed one finds the generated id there. Compare the echoed id before assuming it is yours.
- **Check body.** On `POST /v1/availability/check`, a `correlation.correlationId` in the request body that is sent together with the header must equal the header exactly, otherwise the answer is `422` on the field `correlation.correlationId`.
- **Webhooks.** The webhook carries the event's `correlationId` in the same header (`docs/webhook-transport.md`); it is for tracing only.
