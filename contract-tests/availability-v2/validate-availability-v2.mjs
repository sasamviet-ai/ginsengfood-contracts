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
  rateLimitedExample: "examples/errors/availability-check-v2-rate-limited.example.json",
  requestFixture: "contract-tests/fixtures/availability-check.v2.request.fixture.json",
  successFixture: "contract-tests/fixtures/availability-check.v2.response.fixture.json",
  rateLimitedFixture: "contract-tests/fixtures/availability-check.v2.rate-limited.fixture.json"
};

function absolute(relativePath) {
  return path.join(root, ...relativePath.split("/"));
}

function readText(relativePath) {
  return fs.readFileSync(absolute(relativePath), "utf8");
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

for (const relativePath of Object.values(files)) {
  assert.equal(fs.existsSync(absolute(relativePath)), true, `required X03A artifact missing: ${relativePath}`);
}

const provider = readText(files.provider);
const consumer = readText(files.consumer);
for (const [label, contract] of [["provider", provider], ["consumer", consumer]]) {
  for (const fragment of [
    "openapi: 3.1.0",
    "version: 2.0.0",
    "/v2/availability/check:",
    "operationId: checkAvailabilityV2",
    "x-owner-decision: OWNER-DIRECTIVE-2026-09-03-EXT-OD-01-07",
    "x-auth-class: SERVICE_BEARER",
    "x-token-use: service",
    "x-audience: ginsengfood-ops-core-external-availability-v2",
    "x-permission: SELLABLE_CHECK",
    "x-permission-scope: SERVICE",
    "policy: ExternalAvailabilityCheck",
    "sustained_rps_per_principal: 10",
    "burst_per_principal: 20",
    "fleet_cap_rps: 50",
    "queue_limit: 0",
    "server_timeout_seconds: 2",
    "max_retry: 1",
    "total_retry_budget_seconds: 5",
    "provider_cache_seconds: 0",
    "consumer_max_reuse_seconds: 5",
    "invalidation_target_seconds: 1",
    "failure_mode: UNKNOWN_BLOCK",
    "cached_sellable_reuse_allowed: false",
    '"429": { $ref: "#/components/responses/RateLimited" }',
    "Retry-After:",
    "minimum: 1"
  ]) {
    assert.ok(contract.includes(fragment), `${label} contract missing ${fragment}`);
  }
  assert.equal(contract.includes("/v1/availability/check:"), false, `${label} v2 contract must not redefine v1`);
  assert.equal(contract.includes("X-Idempotency-Key"), false, `${label} read/check contract must not require idempotency`);
  assert.equal((contract.match(/operationId:\s*checkAvailabilityV2/g) ?? []).length, 1, `${label} must define one checkAvailabilityV2`);
}

for (const contract of [provider, consumer]) {
  for (const schemaName of [
    "availability-check-request.v2.schema.json",
    "availability-check-success.v2.schema.json",
    "availability-check-error.v2.schema.json"
  ]) {
    assert.ok(contract.includes(schemaName), `contract must reference ${schemaName}`);
  }
  assert.equal(contract.includes("availability_check_id"), false, "v2 must not expose a persisted availability status identity");
  assert.equal(contract.includes("sellable_status_id"), false, "v2 must not expose a persisted sellable status identity");
}

const requestSchema = readJson(files.requestSchema);
assert.equal(requestSchema.$schema, "https://json-schema.org/draft/2020-12/schema");
assert.equal(requestSchema.additionalProperties, false);
assert.deepEqual(requestSchema.required, ["sku_id", "uom_code"]);
assert.equal(requestSchema.properties.requested_quantity.pattern, positiveQuantityPattern.source);
assert.equal(requestSchema.properties.uom_code.pattern, uomPattern.source);

const resultSchema = readJson(files.resultSchema);
assert.equal(resultSchema.additionalProperties, false);
assert.equal(resultSchema.properties.partial_supported.const, false);
assert.deepEqual(resultSchema.properties.decision.enum, ["SELLABLE", "BLOCKED", "UNKNOWN"]);
assert.equal(resultSchema.properties.available_quantity.pattern, nonNegativeQuantityPattern.source);
assert.equal(resultSchema.properties.sellable_quantity.pattern, nonNegativeQuantityPattern.source);
assert.ok(resultSchema.$comment.includes("available_quantity >= sellable_quantity >= 0"));
assert.ok(resultSchema.$comment.includes("valid_until = resolved_at + 5 seconds"));
assert.equal(resultSchema.properties.resolved_at.pattern, "Z$");
assert.equal(resultSchema.properties.valid_until.pattern, "Z$");

const successSchema = readJson(files.successSchema);
assert.equal(successSchema.properties.schemaVersion.const, "v2");
assert.equal(successSchema.properties.meta.properties.provider_cache_seconds.const, 0);
assert.equal(successSchema.properties.meta.properties.consumer_max_reuse_seconds.const, 5);

const errorSchema = readJson(files.errorSchema);
assert.equal(errorSchema.properties.schemaVersion.const, "v2");
assert.equal(errorSchema.properties.error.oneOf.length, 11);
assert.equal(errorSchema.properties.meta.properties.failure_mode.const, "UNKNOWN_BLOCK");
assert.equal(errorSchema.properties.meta.properties.cached_sellable_reused.const, false);

const requestExample = readJson(files.requestExample);
const successExample = readJson(files.successExample);
const rateLimitedExample = readJson(files.rateLimitedExample);
assert.deepEqual(readJson(files.requestFixture), requestExample, "request fixture/example drift");
assert.deepEqual(readJson(files.successFixture), successExample, "success fixture/example drift");
assert.deepEqual(readJson(files.rateLimitedFixture), rateLimitedExample, "rate-limit fixture/example drift");

validateRequest(requestExample);
validateSuccessEnvelope(successExample, requestExample);
validateRateLimitedEnvelope(rateLimitedExample);

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

console.log("Availability v2 dedicated contract validation passed: provider + consumer + schemas + examples + fixtures + 12 negative tamper cases.");
