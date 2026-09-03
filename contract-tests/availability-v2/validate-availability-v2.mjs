import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDirectory, "../..");
const positiveQuantityPattern = /^(?=.{1,19}$)(?=.*[1-9])(?:0|[1-9][0-9]{0,14})(?:\.[0-9]{1,3})?$/;
const nonNegativeQuantityPattern = /^(?:0|[1-9][0-9]{0,14})(?:\.[0-9]{1,3})?$/;
const uomPattern = /^[A-Z][A-Z0-9_]{0,31}$/;
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const files = {
  provider: "openapi/ops-core/availability-sellable.v2.yaml",
  consumer: "openapi/business-platform/availability-consumer.v2.yaml",
  requestSchema: "schemas/ops/availability-check-request.v2.schema.json",
  resultSchema: "schemas/ops/availability-check-result.v2.schema.json",
  successSchema: "schemas/ops/availability-check-success.v2.schema.json",
  errorSchema: "schemas/ops/availability-check-error.v2.schema.json",
  requestExample: "examples/api/availability-check.v2.request.json",
  successExample: "examples/api/availability-check.v2.response.json",
  existenceAllRequestExample: "examples/api/availability-check.v2.existence-all.request.json",
  existenceAllSuccessExample: "examples/api/availability-check.v2.existence-all.response.json",
  rateLimitedExample: "examples/errors/availability-check-v2-rate-limited.example.json",
  requestFixture: "contract-tests/fixtures/availability-check.v2.request.fixture.json",
  successFixture: "contract-tests/fixtures/availability-check.v2.response.fixture.json",
  existenceAllRequestFixture: "contract-tests/fixtures/availability-check.v2.existence-all.request.fixture.json",
  existenceAllSuccessFixture: "contract-tests/fixtures/availability-check.v2.existence-all.response.fixture.json",
  rateLimitedFixture: "contract-tests/fixtures/availability-check.v2.rate-limited.fixture.json"
};

const expectedOperationResponses = {
  "200": "#/components/responses/AvailabilityResolved",
  "400": "#/components/responses/InvalidRequest",
  "401": "#/components/responses/Unauthorized",
  "403": "#/components/responses/Forbidden",
  "404": "#/components/responses/WarehouseNotFound",
  "408": "#/components/responses/RequestTimeout",
  "415": "#/components/responses/UnsupportedMediaType",
  "422": "#/components/responses/ValidationFailed",
  "429": "#/components/responses/RateLimited",
  "500": "#/components/responses/InternalError",
  "502": "#/components/responses/UpstreamUnavailable",
  "503": "#/components/responses/ServiceUnavailable",
  "504": "#/components/responses/UpstreamTimeout"
};

const expectedErrorBindings = {
  InvalidRequest: { schema: "InvalidRequestError", code: "INVALID_REQUEST", status: 400, retryable: false },
  Unauthorized: { schema: "UnauthorizedError", code: "UNAUTHORIZED", status: 401, retryable: false },
  Forbidden: { schema: "ForbiddenError", code: "FORBIDDEN", status: 403, retryable: false },
  WarehouseNotFound: { schema: "WarehouseNotFoundError", code: "WAREHOUSE_NOT_FOUND", status: 404, retryable: false },
  RequestTimeout: { schema: "RequestTimeoutError", code: "REQUEST_TIMEOUT", status: 408, retryable: true },
  UnsupportedMediaType: { schema: "UnsupportedMediaTypeError", code: "UNSUPPORTED_MEDIA_TYPE", status: 415, retryable: false },
  ValidationFailed: { schema: "ValidationFailedError", code: "VALIDATION_FAILED", status: 422, retryable: false },
  RateLimited: { schema: "RateLimitedError", code: "RATE_LIMITED", status: 429, retryable: true },
  InternalError: { schema: "InternalErrorEnvelope", code: "INTERNAL_ERROR", status: 500, retryable: false },
  UpstreamUnavailable: { schema: "BadGatewayError", code: "UPSTREAM_UNAVAILABLE", status: 502, retryable: true },
  ServiceUnavailable: { schema: "ServiceUnavailableError", code: "UPSTREAM_UNAVAILABLE", status: 503, retryable: true },
  UpstreamTimeout: { schema: "GatewayTimeoutError", code: "UPSTREAM_TIMEOUT", status: 504, retryable: true }
};

const expectedRecheckCheckpoints = [
  "QUOTE_CREATE",
  "CHECKOUT_SUBMIT",
  "ORDER_CONFIRM",
  "BEFORE_FULFILLMENT",
  "BEFORE_SHIP"
];

const expectedInvalidationTriggers = [
  "INVENTORY_LEDGER_CHANGED",
  "STOCK_BALANCE_CHANGED",
  "RESERVATION_CHANGED",
  "WAREHOUSE_RECEIPT_CHANGED",
  "BATCH_RELEASED_OR_REVOKED",
  "QC_OR_QUALITY_HOLD_CHANGED",
  "HSD_VALIDITY_CHANGED",
  "TRACE_READINESS_CHANGED",
  "RECALL_CHANGED",
  "SALE_LOCK_CHANGED",
  "SKU_ACTIVATION_CHANGED",
  "SELL_UOM_CHANGED"
];

function absolute(relativePath) {
  return path.join(root, ...relativePath.split("/"));
}

function readText(relativePath) {
  return fs.readFileSync(absolute(relativePath), "utf8").replace(/\r\n?/g, "\n");
}

function readJson(relativePath) {
  return JSON.parse(readText(relativePath));
}

function assertExactKeys(value, required, optional, label) {
  assert.equal(value !== null && typeof value === "object" && !Array.isArray(value), true, `${label} must be an object`);
  const allowed = new Set([...required, ...optional]);
  for (const key of required) assert.equal(Object.hasOwn(value, key), true, `${label} missing ${key}`);
  for (const key of Object.keys(value)) assert.equal(allowed.has(key), true, `${label} has unexpected ${key}`);
}

function assertUuid(value, label) {
  assert.equal(typeof value, "string", `${label} must be a string`);
  assert.match(value, uuidPattern, `${label} must be UUID`);
}

function decimal(value, pattern, label) {
  assert.equal(typeof value, "string", `${label} must be a decimal string`);
  assert.match(value, pattern, `${label} violates numeric(18,3)`);
  const [whole, fractional = ""] = value.split(".");
  return (BigInt(whole) * 1000n) + BigInt(fractional.padEnd(3, "0"));
}

function validateRequest(request) {
  assertExactKeys(request, ["sku_id", "uom_code"], ["batch_id", "warehouse_id", "requested_quantity"], "request");
  assertUuid(request.sku_id, "request.sku_id");
  if (request.batch_id !== undefined) assertUuid(request.batch_id, "request.batch_id");
  if (request.warehouse_id !== undefined) assertUuid(request.warehouse_id, "request.warehouse_id");
  assert.match(request.uom_code, uomPattern, "request.uom_code must preserve an uppercase, case-sensitive canonical code");
  if (request.requested_quantity !== undefined) {
    assert.ok(decimal(request.requested_quantity, positiveQuantityPattern, "request.requested_quantity") > 0n);
  }
}

function validateResult(result, request) {
  const optional = ["batch_id", "warehouse_id", "requested_quantity"];
  assertExactKeys(
    result,
    [
      "sku_id",
      "warehouse_scope",
      "uom_code",
      "check_mode",
      "available_quantity",
      "sellable_quantity",
      "decision",
      "fulfillable",
      "partial_supported",
      "block_reasons",
      "resolved_at",
      "valid_until"
    ],
    optional,
    "result"
  );

  assertUuid(result.sku_id, "result.sku_id");
  assert.equal(result.sku_id, request.sku_id, "result.sku_id must echo the checked SKU");
  assert.equal(result.uom_code, request.uom_code, "result must preserve the exact requested UOM");
  if (request.batch_id === undefined) {
    assert.equal(result.batch_id, undefined, "result must not synthesize batch_id");
  } else {
    assert.equal(result.batch_id, request.batch_id, "result.batch_id must match request");
  }

  if (request.warehouse_id === undefined) {
    assert.equal(result.warehouse_scope, "ALL", "omitted warehouse must resolve to ALL");
    assert.equal(result.warehouse_id, undefined, "ALL scope must not expose warehouse_id");
  } else {
    assert.equal(result.warehouse_scope, "WAREHOUSE", "supplied warehouse must resolve to WAREHOUSE");
    assert.equal(result.warehouse_id, request.warehouse_id, "WAREHOUSE scope must preserve warehouse_id");
  }

  if (request.requested_quantity === undefined) {
    assert.equal(result.check_mode, "EXISTENCE", "omitted quantity must use EXISTENCE mode");
    assert.equal(result.requested_quantity, undefined, "EXISTENCE result must not synthesize quantity");
  } else {
    assert.equal(result.check_mode, "FULL_FILL", "requested quantity must use FULL_FILL mode");
    assert.equal(result.requested_quantity, request.requested_quantity, "FULL_FILL result must echo requested quantity");
  }

  const available = decimal(result.available_quantity, nonNegativeQuantityPattern, "result.available_quantity");
  const sellable = decimal(result.sellable_quantity, nonNegativeQuantityPattern, "result.sellable_quantity");
  assert.ok(available >= sellable, "available_quantity must be >= sellable_quantity");
  assert.equal(result.partial_supported, false, "partial fulfillment is forbidden");
  assert.ok(["SELLABLE", "BLOCKED", "UNKNOWN"].includes(result.decision), "decision must be fail-closed taxonomy");
  assert.equal(Array.isArray(result.block_reasons), true, "block_reasons must be an array");
  assert.equal(result.block_reasons.every(reason => typeof reason === "string" && reason.length > 0), true, "block_reasons must be non-empty strings");

  const required = request.requested_quantity === undefined
    ? 0n
    : decimal(request.requested_quantity, positiveQuantityPattern, "request.requested_quantity");
  const expectedFulfillable = request.requested_quantity === undefined ? sellable > 0n : sellable >= required;
  assert.equal(result.decision === "SELLABLE", expectedFulfillable, "SELLABLE must be equivalent to exact-UOM existence/full-fill satisfaction");
  if (result.decision === "SELLABLE") {
    assert.equal(result.fulfillable, true, "SELLABLE must be fulfillable");
    assert.equal(expectedFulfillable, true, "SELLABLE must satisfy exact-UOM full-fill/existence quantity semantics");
    assert.deepEqual(result.block_reasons, [], "SELLABLE must not carry blockers");
  } else {
    assert.equal(result.fulfillable, false, "BLOCKED/UNKNOWN must fail closed");
    assert.ok(result.block_reasons.length > 0, "BLOCKED/UNKNOWN must state a safe block reason");
  }

  const resolvedAt = Date.parse(result.resolved_at);
  const validUntil = Date.parse(result.valid_until);
  assert.equal(Number.isFinite(resolvedAt), true, "resolved_at must be date-time");
  assert.equal(Number.isFinite(validUntil), true, "valid_until must be date-time");
  assert.equal(result.resolved_at.endsWith("Z"), true, "resolved_at must be UTC");
  assert.equal(result.valid_until.endsWith("Z"), true, "valid_until must be UTC");
  assert.equal(validUntil - resolvedAt, 5000, "valid_until must equal resolved_at + 5 seconds");
}

function validateSuccessEnvelope(envelope, request) {
  assertExactKeys(envelope, ["schemaVersion", "correlation", "data", "meta"], [], "success envelope");
  assert.equal(envelope.schemaVersion, "v2");
  assertExactKeys(envelope.correlation, ["correlationId"], ["causationId", "sourceSystem", "timestamp"], "correlation");
  assertExactKeys(
    envelope.meta,
    ["provider_cache_seconds", "consumer_max_reuse_seconds", "rate_limit_policy", "server_timeout_seconds", "max_retry", "total_retry_budget_seconds"],
    [],
    "success meta"
  );
  assert.deepEqual(envelope.meta, {
    provider_cache_seconds: 0,
    consumer_max_reuse_seconds: 5,
    rate_limit_policy: "ExternalAvailabilityCheck",
    server_timeout_seconds: 2,
    max_retry: 1,
    total_retry_budget_seconds: 5
  });
  validateResult(envelope.data, request);
}

function validateRateLimitedEnvelope(envelope) {
  assertExactKeys(envelope, ["schemaVersion", "correlation", "error", "meta"], [], "error envelope");
  assert.equal(envelope.schemaVersion, "v2");
  assertExactKeys(envelope.error, ["code", "message", "http_status", "retryable"], [], "error");
  assert.deepEqual(envelope.error, {
    code: "RATE_LIMITED",
    message: "Request rate limit exceeded.",
    http_status: 429,
    retryable: true
  });
  assertExactKeys(
    envelope.meta,
    ["failure_mode", "cached_sellable_reused", "rate_limit_policy", "retry_after_seconds"],
    [],
    "error meta"
  );
  assert.equal(envelope.meta.failure_mode, "UNKNOWN_BLOCK");
  assert.equal(envelope.meta.cached_sellable_reused, false);
  assert.equal(envelope.meta.rate_limit_policy, "ExternalAvailabilityCheck");
  assert.equal(Number.isInteger(envelope.meta.retry_after_seconds) && envelope.meta.retry_after_seconds >= 1, true);
  assert.equal(JSON.stringify(envelope).includes("partition"), false, "rate-limit response must not disclose partition key");
}

function expectReject(mutator, validate, label) {
  const value = structuredClone(mutator.base);
  mutator.change(value);
  assert.throws(() => validate(value), undefined, label);
}

function validateRequestSchemaStructure(schema) {
  assert.equal(schema.$schema, "https://json-schema.org/draft/2020-12/schema");
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.required, ["sku_id", "uom_code"]);
  assert.equal(schema.properties.sku_id.type, "string");
  assert.equal(schema.properties.sku_id.format, "uuid", "request sku_id must retain UUID format validation");
  assert.equal(schema.properties.requested_quantity.pattern, positiveQuantityPattern.source);
  assert.equal(schema.properties.uom_code.pattern, uomPattern.source);
}

function requiredConditional(schema, discriminator, discriminatorValue, guardedProperty) {
  assert.equal(Array.isArray(schema.allOf), true, "result schema must define allOf conditionals");
  const matches = schema.allOf.filter(rule => (
    rule?.if?.properties?.[discriminator]?.const === discriminatorValue
    && Array.isArray(rule.if.required)
    && rule.if.required.includes(discriminator)
  ));
  assert.equal(matches.length, 1, `result schema must retain one ${discriminator}=${discriminatorValue} conditional`);
  assert.deepEqual(matches[0].then?.required, [guardedProperty], `${guardedProperty} then-required drift`);
  assert.deepEqual(matches[0].else?.not?.required, [guardedProperty], `${guardedProperty} else-forbidden drift`);
}

function validateResultSchemaStructure(schema) {
  assert.equal(schema.additionalProperties, false);
  assert.equal(schema.properties.partial_supported.const, false);
  assert.deepEqual(schema.properties.decision.enum, ["SELLABLE", "BLOCKED", "UNKNOWN"]);
  assert.equal(schema.properties.available_quantity.pattern, nonNegativeQuantityPattern.source);
  assert.equal(schema.properties.sellable_quantity.pattern, nonNegativeQuantityPattern.source);
  assert.ok(schema.$comment.includes("available_quantity >= sellable_quantity >= 0"));
  assert.ok(schema.$comment.includes("valid_until = resolved_at + 5 seconds"));
  assert.equal(schema.properties.resolved_at.pattern, "Z$");
  assert.equal(schema.properties.valid_until.pattern, "Z$");
  requiredConditional(schema, "warehouse_scope", "WAREHOUSE", "warehouse_id");
  requiredConditional(schema, "check_mode", "FULL_FILL", "requested_quantity");
}

function validateErrorSchemaStructure(schema) {
  assert.equal(schema.properties.schemaVersion.const, "v2");
  assert.equal(schema.properties.error.oneOf.length, 11);
  assert.equal(schema.properties.meta.properties.failure_mode.const, "UNKNOWN_BLOCK");
  assert.equal(schema.properties.meta.properties.cached_sellable_reused.const, false);

  for (const binding of Object.values(expectedErrorBindings)) {
    const compatibleBaseMappings = schema.properties.error.oneOf.filter(mapping => {
      const properties = mapping?.properties;
      if (properties?.code?.const !== binding.code || properties?.retryable?.const !== binding.retryable) return false;
      const status = properties.http_status;
      return status?.const === binding.status || status?.enum?.includes(binding.status);
    });
    assert.equal(
      compatibleBaseMappings.length,
      1,
      `base error schema must remain satisfiable with ${binding.status}/${binding.code}/retryable=${binding.retryable} wrapper`
    );
  }
}

function extractBlock(text, marker) {
  const lines = text.replaceAll("\r\n", "\n").split("\n");
  const start = lines.findIndex(line => line === marker);
  assert.notEqual(start, -1, `YAML block missing: ${marker.trim()}`);
  const indent = marker.length - marker.trimStart().length;
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (!lines[index].trim()) continue;
    const currentIndent = lines[index].length - lines[index].trimStart().length;
    if (currentIndent <= indent) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function scalar(block, indent, key) {
  const matches = [...block.matchAll(new RegExp(`^ {${indent}}${escapeRegExp(key)}:\\s+(.+?)\\s*$`, "gm"))];
  assert.equal(matches.length, 1, `expected exactly one scalar ${key}`);
  const raw = matches[0][1].replace(/^(?:"|')|(?:"|')$/g, "");
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (/^-?\d+$/.test(raw)) return Number(raw);
  return raw;
}

function directList(block, marker) {
  const nested = extractBlock(block, marker);
  const markerIndent = marker.length - marker.trimStart().length;
  return nested
    .split("\n")
    .slice(1)
    .map(line => line.match(new RegExp(`^ {${markerIndent + 2}}-\\s+([A-Z0-9_]+)\\s*$`))?.[1])
    .filter(Boolean);
}

function normalizeOperation(operation) {
  return operation
    .replace("tags: [availability-sellable]", "tags: [availability]")
    .replace("tags: [availability-consumer]", "tags: [availability]")
    .trim();
}

function validateContract(contract, label) {
  const pathBlock = extractBlock(contract, "  /v2/availability/check:");
  const operation = extractBlock(pathBlock, "    post:");
  const expectedTag = label === "provider" ? "[availability-sellable]" : "[availability-consumer]";

  assert.equal(scalar(operation, 6, "operationId"), "checkAvailabilityV2");
  assert.equal(scalar(operation, 6, "tags"), expectedTag);
  assert.equal(scalar(operation, 6, "x-owner-decision"), "OWNER-DIRECTIVE-2026-09-03-EXT-OD-01-07");
  assert.equal(scalar(operation, 6, "x-auth-class"), "SERVICE_BEARER");
  assert.equal(scalar(operation, 6, "x-token-use"), "service");
  assert.equal(scalar(operation, 6, "x-audience"), "ginsengfood-ops-core-external-availability-v2");
  assert.equal(scalar(operation, 6, "x-permission"), "SELLABLE_CHECK");
  assert.equal(scalar(operation, 6, "x-permission-scope"), "SERVICE");
  assert.equal(scalar(operation, 6, "x-side-effects"), "NONE");
  assert.equal(scalar(operation, 6, "x-persistence"), "NONE");

  const security = extractBlock(operation, "      security:")
    .split("\n")
    .slice(1)
    .map(line => line.trim())
    .filter(Boolean);
  assert.deepEqual(security, ["- serviceBearer: []"], `${label} operation security must be exact`);

  const requestBody = extractBlock(operation, "      requestBody:");
  const requestRefs = [...requestBody.matchAll(/^\s+\$ref:\s+"([^"]+)"\s*$/gm)].map(match => match[1]);
  assert.deepEqual(requestRefs, ["../../schemas/ops/availability-check-request.v2.schema.json"], `${label} request schema ref drift`);
  assert.ok(requestBody.includes('externalValue: "../../examples/api/availability-check.v2.request.json"'));
  assert.ok(requestBody.includes('externalValue: "../../examples/api/availability-check.v2.existence-all.request.json"'));

  const responseMapBlock = extractBlock(operation, "      responses:");
  const responseMap = Object.fromEntries(
    [...responseMapBlock.matchAll(/^ {8}"(\d+)":\s+\{\s+\$ref:\s+"([^"]+)"\s+\}\s*$/gm)]
      .map(match => [match[1], match[2]])
  );
  assert.deepEqual(responseMap, expectedOperationResponses, `${label} operation response map drift`);
  assert.equal(Object.hasOwn(responseMap, "409"), false, `${label} must not advertise an undefined 409 response`);

  const freshness = extractBlock(operation, "      x-freshness-policy:");
  assert.equal(scalar(freshness, 8, "provider_cache_seconds"), 0);
  assert.equal(scalar(freshness, 8, "consumer_max_reuse_seconds"), 5);
  assert.equal(scalar(freshness, 8, "invalidation_target_seconds"), 1);
  assert.equal(scalar(freshness, 8, "failure_mode"), "UNKNOWN_BLOCK");
  assert.equal(scalar(freshness, 8, "cached_sellable_reuse_allowed"), false);

  const rate = extractBlock(operation, "      x-rate-limit-policy:");
  assert.equal(scalar(rate, 8, "policy"), "ExternalAvailabilityCheck");
  assert.equal(scalar(rate, 8, "sustained_rps_per_principal"), 10);
  assert.equal(scalar(rate, 8, "burst_per_principal"), 20);
  assert.equal(scalar(rate, 8, "fleet_cap_rps"), 50);
  assert.equal(scalar(rate, 8, "queue_limit"), 0);
  assert.equal(scalar(rate, 8, "principal_partition"), "token.sub");
  assert.equal(scalar(rate, 8, "fleet_authority_id"), "OPS_CORE_EXTERNAL_FLEET_LIMITER_V1");
  assert.equal(scalar(rate, 8, "missing_authority_behavior"), "STARTUP_FAIL_CLOSED");

  const timeoutRetry = extractBlock(operation, "      x-timeout-retry-policy:");
  assert.equal(scalar(timeoutRetry, 8, "server_timeout_seconds"), 2);
  assert.equal(scalar(timeoutRetry, 8, "max_retry"), 1);
  assert.equal(scalar(timeoutRetry, 8, "total_retry_budget_seconds"), 5);
  assert.equal(scalar(timeoutRetry, 8, "retry_http_statuses"), "[408, 429, 502, 503, 504]");
  assert.equal(scalar(timeoutRetry, 8, "non_retry_http_statuses"), "[400, 401, 403, 404, 409, 415, 422, 500]");
  assert.equal(scalar(timeoutRetry, 8, "operation_emits_409"), false);
  assert.equal(scalar(timeoutRetry, 8, "unexpected_409_behavior"), "UNKNOWN_BLOCK_NO_RETRY");
  assert.equal(scalar(timeoutRetry, 8, "honor_retry_after"), true);

  assert.deepEqual(
    directList(operation, "        required_checkpoints:"),
    expectedRecheckCheckpoints,
    `${label} recheck checkpoints drift`
  );
  const invalidation = extractBlock(operation, "      x-invalidation-policy:");
  assert.equal(scalar(invalidation, 8, "target_seconds"), 1);
  assert.deepEqual(
    directList(invalidation, "        triggers:"),
    expectedInvalidationTriggers,
    `${label} invalidation triggers drift`
  );

  const componentSchemas = extractBlock(contract, "  schemas:");
  for (const [component, target] of [
    ["AvailabilityCheckRequest", "../../schemas/ops/availability-check-request.v2.schema.json"],
    ["AvailabilityCheckSuccess", "../../schemas/ops/availability-check-success.v2.schema.json"],
    ["AvailabilityCheckError", "../../schemas/ops/availability-check-error.v2.schema.json"]
  ]) {
    const schemaBlock = extractBlock(componentSchemas, `    ${component}:`);
    assert.equal(scalar(schemaBlock, 6, "$ref"), target, `${label} ${component} ref drift`);
  }

  const componentResponses = extractBlock(contract, "  responses:");
  const successResponse = extractBlock(componentResponses, "    AvailabilityResolved:");
  assert.equal((successResponse.match(/^ {8}Cache-Control:/gm) ?? []).length, 1, `${label} 200 must be no-store`);
  assert.equal(
    scalar(successResponse, 8, "Cache-Control"),
    '{ $ref: "#/components/headers/CacheControlNoStore" }',
    `${label} 200 Cache-Control binding drift`
  );
  assert.equal(scalar(successResponse, 10, "schema"), '{ $ref: "../../schemas/ops/availability-check-success.v2.schema.json" }');
  assert.ok(successResponse.includes('externalValue: "../../examples/api/availability-check.v2.existence-all.response.json"'));

  for (const [responseName, binding] of Object.entries(expectedErrorBindings)) {
    const response = extractBlock(componentResponses, `    ${responseName}:`);
    assert.equal(scalar(response, 6, "x-error-code"), binding.code, `${label} ${responseName} error code drift`);
    assert.equal((response.match(/^ {8}Cache-Control:/gm) ?? []).length, 1, `${label} ${responseName} must be no-store`);
    assert.equal(
      scalar(response, 8, "Cache-Control"),
      '{ $ref: "#/components/headers/CacheControlNoStore" }',
      `${label} ${responseName} Cache-Control binding drift`
    );
    assert.equal(scalar(response, 10, "schema"), `{ $ref: "#/components/schemas/${binding.schema}" }`);
    if (responseName === "RateLimited") {
      assert.equal((response.match(/^ {8}Retry-After:/gm) ?? []).length, 1, `${label} 429 must require Retry-After`);
    }

    const exactSchema = extractBlock(componentSchemas, `    ${binding.schema}:`);
    assert.ok(exactSchema.includes('$ref: "../../schemas/ops/availability-check-error.v2.schema.json"'));
    assert.ok(exactSchema.includes(`code: { const: ${binding.code} }`));
    assert.ok(exactSchema.includes(`http_status: { const: ${binding.status} }`));
    assert.ok(exactSchema.includes(`retryable: { const: ${binding.retryable} }`));
  }

  assert.equal(contract.includes("/v1/availability/check:"), false, `${label} v2 contract must not redefine v1`);
  assert.equal(contract.includes("X-Idempotency-Key"), false, `${label} read/check contract must not require idempotency`);
  assert.equal(contract.includes("availability_check_id"), false, `${label} must not expose persisted availability identity`);
  assert.equal(contract.includes("sellable_status_id"), false, `${label} must not expose persisted sellable identity`);
  return operation;
}

function expectContractTamperReject(contract, from, to, label) {
  assert.ok(contract.includes(from), `tamper source missing for ${label}`);
  const tampered = contract.replace(from, to);
  assert.throws(() => validateContract(tampered, "provider"), undefined, label);
}

for (const relativePath of Object.values(files)) {
  assert.equal(fs.existsSync(absolute(relativePath)), true, `required X03A artifact missing: ${relativePath}`);
}

const provider = readText(files.provider);
const consumer = readText(files.consumer);
const providerOperation = validateContract(provider, "provider");
const consumerOperation = validateContract(consumer, "consumer");
assert.equal(
  normalizeOperation(providerOperation),
  normalizeOperation(consumerOperation),
  "provider and consumer operations must have canonical-normalized parity"
);

const requestSchema = readJson(files.requestSchema);
validateRequestSchemaStructure(requestSchema);

const resultSchema = readJson(files.resultSchema);
validateResultSchemaStructure(resultSchema);

const successSchema = readJson(files.successSchema);
assert.equal(successSchema.properties.schemaVersion.const, "v2");
assert.equal(successSchema.properties.meta.properties.provider_cache_seconds.const, 0);
assert.equal(successSchema.properties.meta.properties.consumer_max_reuse_seconds.const, 5);

const errorSchema = readJson(files.errorSchema);
validateErrorSchemaStructure(errorSchema);

const requestExample = readJson(files.requestExample);
const successExample = readJson(files.successExample);
const existenceAllRequestExample = readJson(files.existenceAllRequestExample);
const existenceAllSuccessExample = readJson(files.existenceAllSuccessExample);
const rateLimitedExample = readJson(files.rateLimitedExample);
assert.deepEqual(readJson(files.requestFixture), requestExample, "request fixture/example drift");
assert.deepEqual(readJson(files.successFixture), successExample, "success fixture/example drift");
assert.deepEqual(
  readJson(files.existenceAllRequestFixture),
  existenceAllRequestExample,
  "EXISTENCE+ALL request fixture/example drift"
);
assert.deepEqual(
  readJson(files.existenceAllSuccessFixture),
  existenceAllSuccessExample,
  "EXISTENCE+ALL success fixture/example drift"
);
assert.deepEqual(readJson(files.rateLimitedFixture), rateLimitedExample, "rate-limit fixture/example drift");

validateRequest(requestExample);
validateSuccessEnvelope(successExample, requestExample);
validateRequest(existenceAllRequestExample);
validateSuccessEnvelope(existenceAllSuccessExample, existenceAllRequestExample);
validateRateLimitedEnvelope(rateLimitedExample);
assert.equal(Object.hasOwn(existenceAllRequestExample, "requested_quantity"), false);
assert.equal(Object.hasOwn(existenceAllRequestExample, "warehouse_id"), false);
assert.equal(Object.hasOwn(existenceAllSuccessExample.data, "requested_quantity"), false);
assert.equal(Object.hasOwn(existenceAllSuccessExample.data, "warehouse_id"), false);

expectReject({ base: requestExample, change: value => { value.requested_quantity = "0"; } }, validateRequest, "zero quantity");
expectReject({ base: requestExample, change: value => { value.requested_quantity = "1.0001"; } }, validateRequest, "scale > 3");
expectReject({ base: requestExample, change: value => { value.uom_code = "box"; } }, validateRequest, "case-sensitive UOM");
expectReject({ base: requestExample, change: value => { delete value.warehouse_id; value.customer_id = "forbidden"; } }, validateRequest, "unknown field");

for (const [label, change] of [
  ["partial fulfillment", value => { value.data.partial_supported = true; }],
  ["quantity under-fill", value => { value.data.sellable_quantity = "9.999"; }],
  ["warehouse fallback", value => { value.data.warehouse_scope = "ALL"; delete value.data.warehouse_id; }],
  ["TTL drift", value => { value.data.valid_until = "2026-09-03T01:00:06Z"; }],
  ["cached policy drift", value => { value.meta.provider_cache_seconds = 1; }],
  ["unsafe UNKNOWN", value => { value.data.decision = "UNKNOWN"; value.data.fulfillable = true; value.data.block_reasons = []; }]
]) {
  expectReject(
    { base: successExample, change },
    value => validateSuccessEnvelope(value, requestExample),
    label
  );
}

for (const [label, change] of [
  ["EXISTENCE zero cannot be SELLABLE", value => { value.data.sellable_quantity = "0"; }],
  ["EXISTENCE must not synthesize requested quantity", value => { value.data.requested_quantity = "1.000"; }],
  ["ALL must not synthesize warehouse", value => { value.data.warehouse_id = "c1000000-0000-4000-8000-000000000001"; }]
]) {
  expectReject(
    { base: existenceAllSuccessExample, change },
    value => validateSuccessEnvelope(value, existenceAllRequestExample),
    label
  );
}

expectReject(
  { base: rateLimitedExample, change: value => { value.meta.cached_sellable_reused = true; } },
  validateRateLimitedEnvelope,
  "cached PASS reuse on 429"
);
expectReject(
  { base: rateLimitedExample, change: value => { value.meta.partition_key = "principal-secret"; } },
  validateRateLimitedEnvelope,
  "partition leakage"
);

for (const [from, to, label] of [
  [
    "x-auth-class: SERVICE_BEARER",
    "x-auth-class: ANONYMOUS_PUBLIC",
    "auth class tamper"
  ],
  [
    "x-audience: ginsengfood-ops-core-external-availability-v2",
    "x-audience: ginsengfood-admin-web-v1",
    "audience tamper"
  ],
  [
    "x-permission: SELLABLE_CHECK",
    "x-permission: ADMIN_FULL",
    "permission tamper"
  ],
  [
    "- serviceBearer: []",
    "- bearerAuth: []",
    "operation security scheme tamper"
  ],
  [
    '$ref: "../../schemas/ops/availability-check-request.v2.schema.json"',
    '$ref: "../../schemas/ops/sellable-status.schema.json"',
    "request schema ref tamper"
  ],
  [
    '"400": { $ref: "#/components/responses/InvalidRequest" }',
    '"400": { $ref: "#/components/responses/RateLimited" }',
    "operation response mapping tamper"
  ],
  [
    "x-error-code: INVALID_REQUEST",
    "x-error-code: UPSTREAM_TIMEOUT",
    "response error code tamper"
  ],
  [
    "http_status: { const: 400 }",
    "http_status: { const: 504 }",
    "exact error status tamper"
  ],
  [
    "          - QUOTE_CREATE\n",
    "",
    "recheck checkpoint tamper"
  ],
  [
    "          - SALE_LOCK_CHANGED\n",
    "",
    "invalidation trigger tamper"
  ],
  [
    '        Cache-Control: { $ref: "#/components/headers/CacheControlNoStore" }',
    '        Cache-Control: { $ref: "#/components/headers/CorrelationId" }',
    "no-store header tamper"
  ]
]) {
  expectContractTamperReject(provider, from, to, label);
}

expectReject(
  { base: requestSchema, change: value => { delete value.properties.sku_id.format; } },
  validateRequestSchemaStructure,
  "request sku_id UUID format schema tamper"
);
expectReject(
  {
    base: resultSchema,
    change: value => {
      value.allOf = value.allOf.filter(rule => rule?.if?.properties?.warehouse_scope?.const !== "WAREHOUSE");
    }
  },
  validateResultSchemaStructure,
  "warehouse_id conditional schema tamper"
);
expectReject(
  {
    base: resultSchema,
    change: value => {
      value.allOf = value.allOf.filter(rule => rule?.if?.properties?.check_mode?.const !== "FULL_FILL");
    }
  },
  validateResultSchemaStructure,
  "requested_quantity conditional schema tamper"
);
expectReject(
  {
    base: errorSchema,
    change: value => {
      const rateLimited = value.properties.error.oneOf.find(
        mapping => mapping?.properties?.code?.const === "RATE_LIMITED"
      );
      rateLimited.properties.retryable.const = false;
    }
  },
  validateErrorSchemaStructure,
  "RATE_LIMITED base/wrapper satisfiability schema tamper"
);

console.log(
  "Availability v2 dedicated contract validation passed: canonical provider/consumer parity, exact HTTP error bindings, schemas, examples, fixtures, and 30 negative tamper cases including JSON Schema structure."
);
