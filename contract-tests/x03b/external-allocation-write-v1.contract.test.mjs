import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

// X03B write surface: POST /v1/inventory/allocations (reserve) and POST /v1/inventory/allocations/release.
// Mirrors external-bulk-read-v1.contract.test.mjs: operation metadata is read from the OpenAPI text, payloads
// (examples + fixtures) are validated against the JSON Schemas, and every guarantee has a tamper/negative case.

const root = path.resolve(import.meta.dirname, "../..");
const inventoryFile = "openapi/ops-core/inventory.v1.yaml";
const allocationAudience = "ginsengfood-ops-core-external-allocation-v1";
const allocationStatuses = ["RESERVED", "CONFIRMED", "ISSUED", "RELEASED"];

const normalizeNewlines = text => text.replace(/\r\n?/g, "\n");
const read = relative => normalizeNewlines(fs.readFileSync(path.join(root, relative), "utf8"));
const parseJson = relative => JSON.parse(read(relative));
const exists = relative => fs.existsSync(path.join(root, relative));

// ---------------------------------------------------------------------------------------------------------
// Minimal JSON Schema validator (same subset as the bulk-read test, plus maxLength).
// ---------------------------------------------------------------------------------------------------------
function loadSchema(relative) {
  return { schema: parseJson(relative), file: path.join(root, relative) };
}

function resolveRef(ref, schemaFile) {
  const [relative, fragment] = ref.split("#", 2);
  const target = relative ? path.resolve(path.dirname(schemaFile), relative) : schemaFile;
  let schema = JSON.parse(fs.readFileSync(target, "utf8"));
  if (fragment) {
    assert.match(fragment, /^\//, `unsupported JSON pointer fragment: #${fragment}`);
    for (const token of fragment.slice(1).split("/")) {
      schema = schema[token.replaceAll("~1", "/").replaceAll("~0", "~")];
      assert.ok(schema, `unresolved JSON pointer #${fragment}`);
    }
  }
  return { schema, file: target };
}

function validateSchema(schema, value, schemaFile, location = "$") {
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, schemaFile);
    return validateSchema(resolved.schema, value, resolved.file, location);
  }
  if (schema.allOf) for (const part of schema.allOf) validateSchema(part, value, schemaFile, location);
  if (schema.oneOf) {
    const matches = schema.oneOf.filter(part => {
      try {
        validateSchema(part, value, schemaFile, location);
        return true;
      } catch {
        return false;
      }
    });
    assert.equal(matches.length, 1, `${location} must match exactly one oneOf branch`);
  }
  if (schema.const !== undefined) assert.deepEqual(value, schema.const, `${location} must equal const`);
  if (schema.enum) assert.ok(schema.enum.includes(value), `${location} must be in enum`);
  if (schema.type) {
    const allowed = Array.isArray(schema.type) ? schema.type : [schema.type];
    const actual = value === null ? "null" : Array.isArray(value) ? "array" : Number.isInteger(value) ? "integer" : typeof value;
    const normalized = actual === "integer" && allowed.includes("number") ? "number" : actual;
    assert.ok(allowed.includes(normalized), `${location} expected ${allowed.join("|")}, got ${actual}`);
  }
  if (typeof value === "string") {
    if (schema.minLength !== undefined) assert.ok(value.length >= schema.minLength, `${location} minLength`);
    if (schema.maxLength !== undefined) assert.ok(value.length <= schema.maxLength, `${location} maxLength`);
    if (schema.pattern) assert.match(value, new RegExp(schema.pattern), `${location} pattern`);
    if (schema.format === "uuid") assert.match(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, `${location} uuid`);
    if (schema.format === "date-time") assert.ok(value.includes("T") && Number.isFinite(Date.parse(value)), `${location} date-time`);
  }
  if (typeof value === "number") {
    if (schema.minimum !== undefined) assert.ok(value >= schema.minimum, `${location} minimum`);
    if (schema.maximum !== undefined) assert.ok(value <= schema.maximum, `${location} maximum`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined) assert.ok(value.length >= schema.minItems, `${location} minItems`);
    if (schema.maxItems !== undefined) assert.ok(value.length <= schema.maxItems, `${location} maxItems`);
    if (schema.items) value.forEach((item, index) => validateSchema(schema.items, item, schemaFile, `${location}[${index}]`));
  }
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    for (const required of schema.required ?? []) assert.ok(Object.hasOwn(value, required), `${location}.${required} required`);
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) assert.ok(Object.hasOwn(schema.properties ?? {}, key), `${location}.${key} is not whitelisted`);
    }
    for (const [key, propertySchema] of Object.entries(schema.properties ?? {})) {
      if (Object.hasOwn(value, key)) validateSchema(propertySchema, value[key], schemaFile, `${location}.${key}`);
    }
  }
}

function validateAgainst(schemaRelative, value, fragment = "") {
  const loaded = loadSchema(schemaRelative);
  const target = fragment ? resolveRef(`#${fragment}`, loaded.file) : loaded;
  validateSchema(target.schema, value, target.file);
}

function validateEnvelope(payload, dataSchemaRelative) {
  assert.equal(payload.schemaVersion, "v1");
  assert.deepEqual(Object.keys(payload).sort(), ["correlation", "data", "schemaVersion"].sort());
  const correlation = loadSchema("schemas/common/correlation.schema.json");
  validateSchema(correlation.schema, payload.correlation, correlation.file, "$.correlation");
  validateAgainst(dataSchemaRelative, payload.data);
}

// ---------------------------------------------------------------------------------------------------------
// OpenAPI text helpers (indentation based, same approach as the bulk-read test).
// ---------------------------------------------------------------------------------------------------------
function extractPathBlock(text, route) {
  const lines = normalizeNewlines(text).split("\n");
  const start = lines.findIndex(line => line === `  ${route}:`);
  assert.notEqual(start, -1, `missing route ${route}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^  \//.test(lines[index]) || /^components:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractMethodBlock(pathBlock, method) {
  const lines = normalizeNewlines(pathBlock).split("\n");
  const start = lines.findIndex(line => line === `    ${method}:`);
  assert.notEqual(start, -1, `missing ${method} method`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^    [a-z][a-z-]*:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractInlineResponse(methodBlock, status) {
  const lines = methodBlock.split("\n");
  const start = lines.findIndex(line => line.startsWith(`        "${status}":`));
  assert.notEqual(start, -1, `missing response ${status}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^        "\d{3}":/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractComponentBlock(text, group, component) {
  const lines = normalizeNewlines(text).split("\n");
  const componentsStart = lines.findIndex(line => line === "components:");
  const groupStart = lines.findIndex((line, index) => index > componentsStart && line === `  ${group}:`);
  assert.ok(groupStart > componentsStart, `components.${group} missing`);
  const start = lines.findIndex((line, index) => index > groupStart && line === `    ${component}:`);
  assert.notEqual(start, -1, `missing ${group} component ${component}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^    [A-Za-z][A-Za-z0-9]*:/.test(lines[index]) || /^  [A-Za-z][A-Za-z0-9]*:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractRootCatalogEntry(text, catalog, entry) {
  const lines = normalizeNewlines(text).split("\n");
  const catalogStart = lines.findIndex(line => line === `${catalog}:`);
  assert.notEqual(catalogStart, -1, `missing root catalog ${catalog}`);
  const start = lines.findIndex((line, index) => index > catalogStart && line === `  ${entry}:`);
  assert.notEqual(start, -1, `missing ${catalog} entry ${entry}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^  [^ ].*:/.test(lines[index]) || /^[^ ]/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

// ---------------------------------------------------------------------------------------------------------
// The two write operations.
// ---------------------------------------------------------------------------------------------------------
const errorDefinitions = schemaFile => ({
  "400": { code: "INVALID_REQUEST", retryable: false, ref: `${schemaFile}#/$defs/InvalidRequest` },
  "401": { code: "UNAUTHORIZED", retryable: false, ref: `${schemaFile}#/$defs/Unauthorized` },
  "403": { code: "FORBIDDEN", retryable: false, ref: `${schemaFile}#/$defs/Forbidden` },
  "404": { code: "NOT_FOUND", retryable: false, ref: `${schemaFile}#/$defs/NotFound` },
  "422": { code: "VALIDATION_FAILED", retryable: false, ref: `${schemaFile}#/$defs/ValidationFailed` },
  "500": { code: "INTERNAL_ERROR", retryable: false, ref: `${schemaFile}#/$defs/InternalError` }
});

const operations = [
  {
    operationId: "reserveInventoryAllocationV1",
    route: "/v1/inventory/allocations",
    writeSurface: "EXTERNAL_ALLOCATION_RESERVE",
    requestSchema: "external-allocation-reserve-request.schema.json",
    resultSchema: "external-allocation-reserve-result.schema.json",
    errorSchema: "external-allocation-reserve-error.schema.json",
    successStatuses: ["200", "201"],
    rateLimitedComponent: "AllocationReserveRateLimited",
    conflictDefs: ["InsufficientStock", "AllocationConflict"],
    conflictCode: "INSUFFICIENT_STOCK"
  },
  {
    operationId: "releaseInventoryAllocationV1",
    route: "/v1/inventory/allocations/release",
    writeSurface: "EXTERNAL_ALLOCATION_RELEASE",
    requestSchema: "external-allocation-release-request.schema.json",
    resultSchema: "external-allocation-release-result.schema.json",
    errorSchema: "external-allocation-release-error.schema.json",
    successStatuses: ["200"],
    rateLimitedComponent: "AllocationReleaseRateLimited",
    conflictDefs: ["AllocationConflict", "AllocationNotHeld"],
    conflictCode: "ALLOCATION_CONFLICT"
  }
];

function assertWriteOperation(operation, textOverride) {
  const text = normalizeNewlines(textOverride ?? read(inventoryFile));
  const block = extractMethodBlock(extractPathBlock(text, operation.route), "post");
  const id = operation.operationId;
  assert.match(block, new RegExp(`operationId: ${id}\\b`), `${id} operationId drift`);
  assert.match(block, /security:\n\s+- ServiceBearer: \[\]/, `${id} security drift`);
  assert.match(block, /x-auth-class: SERVICE_BEARER/, `${id} x-auth-class drift`);
  assert.match(block, /x-token-use: service/, `${id} x-token-use drift`);
  assert.match(block, new RegExp(`x-audience: ${allocationAudience}\\b`), `${id} x-audience drift`);
  assert.match(block, /x-permission: INVENTORY_ALLOCATION_CREATE\b/, `${id} x-permission drift`);
  assert.match(block, /x-permission-scope: SERVICE/, `${id} x-permission-scope drift`);
  assert.match(block, /x-rate-limit-policy: ExternalAllocationWrite(?![A-Za-z0-9_])/, `${id} x-rate-limit-policy drift`);
  assert.match(block, /x-idempotency: REQUIRED/, `${id} x-idempotency drift`);
  assert.match(block, new RegExp(`x-write-surface: ${operation.writeSurface}\\b`), `${id} x-write-surface drift`);
  assert.match(block, /\$ref: "#\/components\/parameters\/IdempotencyKey"/, `${id} must reference the shared X-Idempotency-Key parameter`);
  assert.doesNotMatch(block, /maxLength: 100\b/, `${id} must not restate a 100-character idempotency limit`);
  assert.match(block, new RegExp(`requestBody:[\\s\\S]*schemas/ops/x03b/${operation.requestSchema.replaceAll(".", "\\.")}`), `${id} request schema drift`);

  for (const status of operation.successStatuses) {
    const response = extractInlineResponse(block, status);
    assert.match(response, new RegExp(`schemas/ops/x03b/${operation.resultSchema.replaceAll(".", "\\.")}`), `${id} ${status} result schema drift`);
  }

  for (const [status, expected] of Object.entries(errorDefinitions(operation.errorSchema))) {
    const response = extractInlineResponse(block, status);
    assert.match(response, new RegExp(`x-error-code: ${expected.code}\\b`), `${id} ${status} x-error-code drift`);
    assert.match(response, new RegExp(`x-http-status: ${status}\\b`), `${id} ${status} x-http-status drift`);
    assert.match(response, new RegExp(`x-retryable: ${expected.retryable}\\b`), `${id} ${status} x-retryable drift`);
    assert.ok(response.includes(`schemas/ops/x03b/${expected.ref}`), `${id} ${status} error schema ref drift`);
  }

  const conflict = extractInlineResponse(block, "409");
  assert.match(conflict, new RegExp(`x-error-code: ${operation.conflictCode}\\b`), `${id} 409 x-error-code drift`);
  assert.match(conflict, /x-http-status: 409\b/);
  assert.match(conflict, /x-retryable: false\b/);
  for (const definition of operation.conflictDefs) {
    assert.ok(conflict.includes(`schemas/ops/x03b/${operation.errorSchema}#/$defs/${definition}`), `${id} 409 must offer ${definition}`);
  }

  assert.ok(
    extractInlineResponse(block, "429").includes(`#/components/responses/${operation.rateLimitedComponent}`),
    `${id} 429 component drift`
  );
  const rateLimited = extractComponentBlock(text, "responses", operation.rateLimitedComponent);
  assert.match(rateLimited, /x-error-code: RATE_LIMITED\b/);
  assert.match(rateLimited, /x-http-status: 429\b/);
  assert.match(rateLimited, /x-retryable: true\b/);
  assert.match(rateLimited, /Retry-After: \{ required: true, schema: \{ type: integer, minimum: 1 \} \}/);
  assert.ok(rateLimited.includes(`schemas/ops/x03b/${operation.errorSchema}#/$defs/RateLimited`), `${operation.rateLimitedComponent} schema drift`);
}

for (const operation of operations) {
  assertWriteOperation(operation);
  // Tamper checks: every guarantee the helper asserts must fail when its metadata line is damaged.
  const sourceText = read(inventoryFile);
  const sourceBlock = extractMethodBlock(extractPathBlock(sourceText, operation.route), "post");
  for (const [needle, replacement, failure] of [
    ["x-permission: INVENTORY_ALLOCATION_CREATE", "x-permission: ADMIN_FULL", /x-permission drift/],
    [`x-audience: ${allocationAudience}`, "x-audience: ginsengfood-ops-core-external-bulk-read-v1", /x-audience drift/],
    ["x-rate-limit-policy: ExternalAllocationWrite", "x-rate-limit-policy: ExternalAvailabilityCheck", /x-rate-limit-policy drift/],
    ["x-idempotency: REQUIRED", "x-idempotency: OPTIONAL", /x-idempotency drift/],
    [`x-write-surface: ${operation.writeSurface}`, "x-write-surface: EXTERNAL_ALLOCATION_CONFIRM", /x-write-surface drift/],
    ['$ref: "#/components/parameters/IdempotencyKey"', "schema: { type: string, minLength: 1, maxLength: 100 }", /shared X-Idempotency-Key parameter/]
  ]) {
    assert.ok(sourceBlock.includes(needle), `${operation.operationId} tamper setup failed for ${needle}`);
    assert.throws(
      () => assertWriteOperation(operation, sourceText.replace(sourceBlock, () => sourceBlock.replace(needle, () => replacement))),
      failure
    );
  }
}

// ExternalAllocationWrite is defined in the file that uses it (the 2026-09-21 contract referenced it without defining it).
const inventoryText = read(inventoryFile);
const writePolicy = extractRootCatalogEntry(inventoryText, "x-rate-limit-policies", "ExternalAllocationWrite");
for (const token of [
  "sustained_rps_per_principal: 5",
  "burst_per_principal: 10",
  "fleet_rps: 25",
  "queue_limit: 0",
  "partition_claims: [token_use, sub]",
  "required_token_use: service",
  "startup_fail_closed: true",
  "exhausted_or_unavailable_behavior: FAIL_CLOSED_NO_CACHED_PASS"
]) {
  assert.ok(writePolicy.includes(token), `ExternalAllocationWrite must declare ${token}`);
}
assert.doesNotMatch(inventoryText, /tạm dùng bucket hot/, "stale 'temporarily uses the hot bucket' comment must be gone");
const audienceEntry = extractRootCatalogEntry(inventoryText, "x-audience-catalog", allocationAudience);
assert.match(audienceEntry, /auth_class: SERVICE_BEARER/);
assert.match(audienceEntry, /token_use: service/);
assert.match(audienceEntry, /permission_scope: SERVICE/);

// X-Idempotency-Key: one definition, 1-200 characters, [A-Za-z0-9:_.-] (matches the provider and TB-08).
const keyParameter = extractComponentBlock(inventoryText, "parameters", "IdempotencyKey");
assert.match(keyParameter, /name: X-Idempotency-Key/);
assert.match(keyParameter, /in: header/);
assert.match(keyParameter, /required: true/);
assert.match(keyParameter, /minLength: 1\b/);
assert.match(keyParameter, /maxLength: 200\b/);
const keyPattern = keyParameter.match(/pattern: "([^"]+)"/)?.[1];
assert.equal(keyPattern, "^[A-Za-z0-9:_.-]+$", "X-Idempotency-Key pattern must be [A-Za-z0-9:_.-]");
const keyRegex = new RegExp(keyPattern);
for (const accepted of ["m3:rsv:123456:1", "a".repeat(200), "A_b-c.d:e", "5d65e4a9-b171-599d-ac58-c4308320bf1d"]) {
  assert.ok(keyRegex.test(accepted) && accepted.length <= 200, `key should be accepted: ${accepted.slice(0, 20)}`);
}
for (const rejected of ["", "has space", "slash/key", "dấu-tiếng-việt", "key\n"]) {
  assert.ok(!keyRegex.test(rejected), `key should be rejected: ${JSON.stringify(rejected)}`);
}
assert.equal(Number(keyParameter.match(/maxLength: (\d+)/)[1]), 200, "the 201st character is over the declared limit");

// ---------------------------------------------------------------------------------------------------------
// Payloads: examples + fixtures validate; tampered payloads do not.
// ---------------------------------------------------------------------------------------------------------
const reserveRequestFiles = ["examples/api/x03b/allocation-reserve.request.json", "contract-tests/x03b/fixtures/allocation-reserve.request.fixture.json"];
const reserveResponseFiles = ["examples/api/x03b/allocation-reserve.response.json", "contract-tests/x03b/fixtures/allocation-reserve.response.fixture.json"];
const releaseRequestFiles = ["examples/api/x03b/allocation-release.request.json", "contract-tests/x03b/fixtures/allocation-release.request.fixture.json"];
const releaseResponseFiles = ["examples/api/x03b/allocation-release.response.json", "contract-tests/x03b/fixtures/allocation-release.response.fixture.json"];

const reserveRequestSchema = "schemas/ops/x03b/external-allocation-reserve-request.schema.json";
const reserveResultSchema = "schemas/ops/x03b/external-allocation-reserve-result.schema.json";
const releaseRequestSchema = "schemas/ops/x03b/external-allocation-release-request.schema.json";
const releaseResultSchema = "schemas/ops/x03b/external-allocation-release-result.schema.json";
const releaseLineSchema = "schemas/ops/x03b/external-allocation-release-line.schema.json";

function expectInvalid(schemaRelative, mutate, sample, pattern, fragment = "") {
  const tampered = structuredClone(sample);
  mutate(tampered);
  assert.throws(() => validateAgainst(schemaRelative, tampered, fragment), pattern);
}

for (const relative of reserveRequestFiles) {
  const request = parseJson(relative);
  validateAgainst(reserveRequestSchema, request);
  expectInvalid(reserveRequestSchema, value => { value.channel = "web"; }, request, /not whitelisted/);
  expectInvalid(reserveRequestSchema, value => { value.requested_quantity = 15; }, request, /expected string/);
  expectInvalid(reserveRequestSchema, value => { value.uom_code = "HỘP"; }, request, /enum/);
  expectInvalid(reserveRequestSchema, value => { value.source_object_type = "SHIPMENT_REFERENCE"; }, request, /enum/);
  expectInvalid(reserveRequestSchema, value => { value.source_object_id = "ORD-1"; }, request, /uuid/);
  expectInvalid(reserveRequestSchema, value => { delete value.warehouse_id; }, request, /warehouse_id required/);
}

for (const relative of reserveResponseFiles) {
  const response = parseJson(relative);
  validateEnvelope(response, reserveResultSchema);
  expectInvalid(reserveResultSchema, value => { value.partial_supported = true; }, response.data, /const/);
  expectInvalid(reserveResultSchema, value => { value.reservation_status = "RELEASED"; }, response.data, /enum/);
  expectInvalid(reserveResultSchema, value => { value.allocations = []; }, response.data, /minItems/);
  expectInvalid(reserveResultSchema, value => { value.allocations[0].lot_balance_id = "internal"; }, response.data, /not whitelisted/);
  expectInvalid(reserveResultSchema, value => { value.resolved_at = "2026-09-05T09:00:00+07:00"; }, response.data, /pattern/);
  // Every reserved line is on the allocation vocabulary, including the new terminal state.
  expectInvalid(reserveResultSchema, value => { value.allocations[0].status = "HELD"; }, response.data, /enum/);
  const issuedLine = structuredClone(response.data);
  issuedLine.allocations[0].status = "ISSUED";
  validateAgainst(reserveResultSchema, issuedLine);
}

for (const relative of releaseRequestFiles) {
  const request = parseJson(relative);
  validateAgainst(releaseRequestSchema, request);
  assert.deepEqual(Object.keys(request).sort(), ["source_object_id", "source_object_type"], "release body carries the source only");
  expectInvalid(releaseRequestSchema, value => { value.requested_quantity = "1.000"; }, request, /not whitelisted/);
  expectInvalid(releaseRequestSchema, value => { value.allocation_id = "14000000-0000-4000-8000-000000000001"; }, request, /not whitelisted/);
  expectInvalid(releaseRequestSchema, value => { delete value.source_object_type; }, request, /source_object_type required/);
  expectInvalid(releaseRequestSchema, value => { delete value.source_object_id; }, request, /source_object_id required/);
  expectInvalid(releaseRequestSchema, value => { value.source_object_type = "SHIPMENT_REFERENCE"; }, request, /enum/);
  expectInvalid(releaseRequestSchema, value => { value.source_object_id = "not-a-uuid"; }, request, /uuid/);
}

for (const relative of releaseResponseFiles) {
  const response = parseJson(relative);
  validateEnvelope(response, releaseResultSchema);
  assert.equal(response.data.release_status, "RELEASED");
  for (const line of response.data.allocations) {
    assert.equal(line.status, "RELEASED");
    assert.equal(line.source_object_id, response.data.source_object_id, "every released line belongs to the requested source");
    assert.ok(!Object.hasOwn(line, "expires_at"), "released lines carry released_at, not expires_at");
  }
  expectInvalid(releaseResultSchema, value => { value.release_status = "ALREADY_RELEASED"; }, response.data, /const/);
  expectInvalid(releaseResultSchema, value => { value.allocations = []; }, response.data, /minItems/);
  expectInvalid(releaseResultSchema, value => { delete value.resolved_at; }, response.data, /resolved_at required/);
  expectInvalid(releaseResultSchema, value => { value.resolved_at = "2026-10-20T09:00:00+07:00"; }, response.data, /pattern/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].status = "RESERVED"; }, response.data, /const/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].status = "ISSUED"; }, response.data, /const/);
  expectInvalid(releaseResultSchema, value => { delete value.allocations[0].released_at; }, response.data, /released_at required/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].released_at = "2026-10-20T09:00:00+07:00"; }, response.data, /pattern/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].expires_at = "2026-10-20T10:00:00Z"; }, response.data, /not whitelisted/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].released_by = "operator"; }, response.data, /not whitelisted/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].allocated_quantity = "8"; }, response.data, /pattern/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].allocated_quantity = "8.0000"; }, response.data, /pattern/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].warehouse_location_id = null; }, response.data, /expected string/);
  expectInvalid(releaseResultSchema, value => { value.allocations[0].item_type = "FINISHED_GOODS_UNIT"; }, response.data, /enum/);
  expectInvalid(releaseLineSchema, value => { delete value.lot_code; }, response.data.allocations[0], /lot_code required/);
}

// ---------------------------------------------------------------------------------------------------------
// Allocation status vocabulary: RESERVED -> CONFIRMED -> ISSUED, RESERVED|CONFIRMED -> RELEASED.
// ---------------------------------------------------------------------------------------------------------
const statusEnumText = read("enums/ops/inventory-allocation-status.yaml");
const enumValues = [...statusEnumText.matchAll(/^  - value: ([A-Z_]+)$/gm)].map(match => match[1]);
assert.deepEqual([...enumValues].sort(), [...allocationStatuses].sort(), "enum file must list the four allocation statuses");
for (const schemaRelative of [
  "schemas/ops/x03b/external-inventory-allocation.schema.json",
  "schemas/ops/x03b/external-allocation-reserve-line.schema.json"
]) {
  const status = parseJson(schemaRelative).properties.status;
  assert.deepEqual([...status.enum].sort(), [...allocationStatuses].sort(), `${schemaRelative} status enum must match inventory-allocation-status`);
}
assert.equal(parseJson(releaseLineSchema).properties.status.const, "RELEASED");

const allocationListSchema = "schemas/ops/x03b/external-inventory-allocation.schema.json";
const issuedList = parseJson("examples/api/x03b/inventory-allocations.issued.response.json");
assert.equal(issuedList.data[0].status, "ISSUED");
assert.deepEqual(Object.keys(issuedList.data[0]).filter(key => key.endsWith("_at")).sort(), ["confirmed_at", "requested_at"], "ISSUED adds no timestamp field");
issuedList.data.forEach(item => validateAgainst(allocationListSchema, item));
assert.equal(issuedList.meta.manifest_sha256, canonicalSha256({
  manifest_version: issuedList.meta.manifest_version,
  resource: "inventory.allocations",
  snapshot_id: issuedList.meta.snapshot_id,
  as_of: issuedList.meta.as_of,
  high_watermark: issuedList.meta.high_watermark,
  item_count: issuedList.meta.item_count,
  items: issuedList.data
}), "ISSUED allocation example manifest hash");
expectInvalid(allocationListSchema, value => { value.status = "SHIPPED"; }, issuedList.data[0], /enum/);
expectInvalid(allocationListSchema, value => { value.issued_at = "2026-10-20T09:00:00Z"; }, issuedList.data[0], /not whitelisted/);

function canonicalJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
}
function canonicalSha256(value) {
  return createHash("sha256").update(canonicalJson(value), "utf8").digest("hex");
}

const stateMachine = read("state-machines/ops/allocation-state.md");
for (const row of [
  "| RESERVED | CONFIRMED |",
  "| CONFIRMED | ISSUED |",
  "| RESERVED | RELEASED |",
  "| CONFIRMED | RELEASED |",
  "| ISSUED | RELEASED |",
  "| ISSUED | CONFIRMED |"
]) {
  assert.ok(stateMachine.includes(row), `allocation state machine must contain ${row}`);
}
assert.match(stateMachine, /CONFIRMED[^\n]*never expires|never expires[^\n]*CONFIRMED/i, "CONFIRMED must be documented as never expiring");
assert.match(stateMachine, /expiry[^\n]*RELEASED|RELEASED[^\n]*expiry/i, "expiry must be documented as ending in RELEASED");

// ---------------------------------------------------------------------------------------------------------
// ALLOCATION_NOT_HELD lives in the release error vocabulary only (closed enums are per operation).
// ---------------------------------------------------------------------------------------------------------
const releaseErrorSchema = "schemas/ops/x03b/external-allocation-release-error.schema.json";
const releaseErrorEnum = parseJson(releaseErrorSchema).$defs.Error.properties.code.enum;
assert.deepEqual(
  [...releaseErrorEnum].sort(),
  ["ALLOCATION_CONFLICT", "ALLOCATION_NOT_HELD", "FORBIDDEN", "INTERNAL_ERROR", "INVALID_REQUEST", "NOT_FOUND", "RATE_LIMITED", "REQUEST_TIMEOUT", "SERVICE_UNAVAILABLE", "UNAUTHORIZED", "VALIDATION_FAILED"],
  "release error enum drift"
);
assert.ok(!parseJson("schemas/ops/x03b/external-allocation-reserve-error.schema.json").$defs.Error.properties.code.enum.includes("ALLOCATION_NOT_HELD"), "reserve never emits ALLOCATION_NOT_HELD");
assert.ok(!parseJson("schemas/ops/x03b/external-bulk-read-error.schema.json").properties.code.enum.includes("ALLOCATION_NOT_HELD"), "read routes never emit ALLOCATION_NOT_HELD");
assert.ok(!releaseErrorEnum.includes("INSUFFICIENT_STOCK"), "release never reports a shortage");
assert.match(read("error-codes/external-allocation-errors.yaml"), /code: ALLOCATION_NOT_HELD\n\s+httpStatus: 409/);

const releaseErrorCases = [
  { definition: "AllocationNotHeld", code: "ALLOCATION_NOT_HELD", status: 409 },
  { definition: "AllocationConflict", code: "ALLOCATION_CONFLICT", status: 409 },
  { definition: "NotFound", code: "NOT_FOUND", status: 404 },
  { definition: "ValidationFailed", code: "VALIDATION_FAILED", status: 422 },
  { definition: "RateLimited", code: "RATE_LIMITED", status: 429 },
  { definition: "Unauthorized", code: "UNAUTHORIZED", status: 401 },
  { definition: "Forbidden", code: "FORBIDDEN", status: 403 },
  { definition: "InvalidRequest", code: "INVALID_REQUEST", status: 400 },
  { definition: "InternalError", code: "INTERNAL_ERROR", status: 500 }
];
for (const expected of releaseErrorCases) {
  const envelope = {
    schemaVersion: "v1",
    correlation: { correlationId: `corr-release-${expected.status}` },
    error: { code: expected.code, message: "Safe external error.", httpStatus: expected.status, correlationId: `corr-release-${expected.status}` }
  };
  validateAgainst(releaseErrorSchema, envelope, `/$defs/${expected.definition}`);
  const wrongCode = structuredClone(envelope);
  wrongCode.error.code = expected.code === "FORBIDDEN" ? "UNAUTHORIZED" : "FORBIDDEN";
  assert.throws(() => validateAgainst(releaseErrorSchema, wrongCode, `/$defs/${expected.definition}`), /const|enum/);
  const wrongStatus = structuredClone(envelope);
  wrongStatus.error.httpStatus = expected.status === 403 ? 401 : 403;
  assert.throws(() => validateAgainst(releaseErrorSchema, wrongStatus, `/$defs/${expected.definition}`), /const/);
}
const detailEnvelope = {
  schemaVersion: "v1",
  correlation: { correlationId: "corr-release-detail" },
  error: {
    code: "VALIDATION_FAILED",
    message: "The request failed validation. See details for the offending fields.",
    httpStatus: 422,
    correlationId: "corr-release-detail",
    details: [{ field: "X-Idempotency-Key", reason: "IDEMPOTENCY_KEY_REUSED" }]
  }
};
validateAgainst(releaseErrorSchema, detailEnvelope, "/$defs/ValidationFailed");
const detailWithoutReason = structuredClone(detailEnvelope);
delete detailWithoutReason.error.details[0].reason;
assert.throws(() => validateAgainst(releaseErrorSchema, detailWithoutReason, "/$defs/ValidationFailed"), /reason required/);
const detailWithInternalKey = structuredClone(detailEnvelope);
detailWithInternalKey.error.details[0].stack = "internal";
assert.throws(() => validateAgainst(releaseErrorSchema, detailWithInternalKey, "/$defs/ValidationFailed"), /not whitelisted/);

for (const relative of [
  "examples/api/x03b/allocation-release.error-not-held.response.json",
  "contract-tests/x03b/fixtures/allocation-release.not-held.error.fixture.json"
]) {
  validateAgainst(releaseErrorSchema, parseJson(relative), "/$defs/AllocationNotHeld");
  assert.throws(() => validateAgainst(releaseErrorSchema, parseJson(relative), "/$defs/AllocationConflict"), /const/);
}
for (const relative of [
  "examples/api/x03b/allocation-release.error-conflict.response.json",
  "contract-tests/x03b/fixtures/allocation-release.conflict.error.fixture.json"
]) {
  validateAgainst(releaseErrorSchema, parseJson(relative), "/$defs/AllocationConflict");
  assert.throws(() => validateAgainst(releaseErrorSchema, parseJson(relative), "/$defs/AllocationNotHeld"), /const/);
}

// ---------------------------------------------------------------------------------------------------------
// Integration notes: M3 order identity (UUIDv5, published namespace constant) and the webhook transport spec.
// ---------------------------------------------------------------------------------------------------------
function uuidV5(namespace, name) {
  const hash = createHash("sha1")
    .update(Buffer.from(namespace.replaceAll("-", ""), "hex"))
    .update(Buffer.from(name, "utf8"))
    .digest();
  hash[6] = (hash[6] & 0x0f) | 0x50;
  hash[8] = (hash[8] & 0x3f) | 0x80;
  const hex = hash.subarray(0, 16).toString("hex");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
// RFC 4122 appendix B style check so the helper above cannot drift: uuid5(NAMESPACE_DNS, "python.org").
assert.equal(uuidV5("6ba7b810-9dad-11d1-80b4-00c04fd430c8", "python.org"), "886313e1-3b8a-5372-9b90-0c9aee199e5d");

const notes = read("docs/m3-allocation-integration-notes.md");
const namespace = notes.match(/ORDER_SOURCE_NAMESPACE_UUID = `([0-9a-f-]{36})`/)?.[1];
assert.ok(namespace, "integration notes must publish ORDER_SOURCE_NAMESPACE_UUID");
assert.match(namespace, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/, "namespace constant must be a random (v4) UUID");
assert.match(notes, /not a secret/i, "namespace constant must be declared a published constant, not a secret");
const vectors = [...notes.matchAll(/^\| `(order:[0-9]+)` \| `([0-9a-f-]{36})` \|$/gm)];
assert.ok(vectors.length >= 2, "integration notes must publish at least two UUIDv5 test vectors");
for (const [, name, expected] of vectors) {
  assert.equal(uuidV5(namespace, name), expected, `UUIDv5 vector for ${name}`);
}
assert.match(notes, /orderId[^\n]*decimal/i, "order id canonical text form must be stated");

const webhook = read("docs/webhook-transport.md");
for (const token of [
  "HMAC-SHA256",
  "X-Outbox-Event-Id",
  "X-Webhook-Timestamp",
  "X-Webhook-Key-Version",
  "X-Webhook-Signature",
  "v1=<hex>",
  "{timestamp}\\n{eventId}\\n",
  "300 seconds",
  "at-least-once",
  "dead-letter"
]) {
  assert.ok(webhook.includes(token), `webhook transport spec must mention ${token}`);
}
const webhookEventTypes = [...webhook.matchAll(/`(ops-core\.[a-z]+\.[a-z-]+\.v1)`/g)].map(match => match[1]);
assert.equal(new Set(webhookEventTypes).size, 13, "webhook transport spec lists exactly 13 routed event types");
for (const eventType of new Set(webhookEventTypes)) {
  const [, group, name] = eventType.match(/^ops-core\.([a-z]+)\.([a-z-]+)\.v1$/);
  const eventFile = `events/ops-core/${group}/${name}.v1.json`;
  assert.ok(exists(eventFile), `${eventType} must have a published event schema at ${eventFile}`);
  assert.equal(parseJson(eventFile).properties.eventType.const, eventType, `${eventFile} eventType drift`);
}
assert.ok(!webhookEventTypes.includes("ops-core.product.product-suspended.v1"), "product-suspended is not routed externally");
assert.match(read("asyncapi/README.md"), /webhook-transport\.md/, "asyncapi README must point to the transport spec");

// ---------------------------------------------------------------------------------------------------------
// Governance records: CHANGELOG and compatibility matrix state the intentional exception.
// ---------------------------------------------------------------------------------------------------------
const changelog = read("CHANGELOG.md");
const unreleased = changelog.slice(changelog.indexOf("## Unreleased"));
for (const token of ["releaseInventoryAllocationV1", "ISSUED", "ALLOCATION_NOT_HELD", "additive, coordinated", "ExternalAllocationWrite", "X-Idempotency-Key", "UUIDv5"]) {
  assert.ok(unreleased.includes(token), `CHANGELOG Unreleased must mention ${token}`);
}
const matrix = read("compatibility/consumer-compatibility-matrix.md");
assert.match(matrix, /reserveInventoryAllocationV1/);
assert.match(matrix, /releaseInventoryAllocationV1/);
assert.match(read("compatibility/api-version-matrix.md"), /releaseInventoryAllocationV1/);

// ---------------------------------------------------------------------------------------------------------
// Availability consumer mirror: the business-platform request is the provider's closed request, field for field.
// ---------------------------------------------------------------------------------------------------------
function availabilityRequestShape(file) {
  const block = extractComponentBlock(read(file), "schemas", "AvailabilityCheckRequest");
  assert.match(block, /^      additionalProperties: false$/m, `${file} request must be closed`);
  const properties = block.slice(block.indexOf("      properties:\n"));
  return {
    names: [...properties.matchAll(/^        ([a-z_]+):/gm)].map(match => match[1]).sort(),
    uomEnum: properties.match(/enum: (\[[^\]]+\])/)?.[1],
    required: block.match(/^      required: (\[[^\]]*\])$/m)?.[1]
  };
}
const providerRequest = availabilityRequestShape("openapi/ops-core/availability-sellable.v1.yaml");
const consumerRequest = availabilityRequestShape("openapi/business-platform/availability-consumer.v1.yaml");
assert.deepEqual(consumerRequest, providerRequest, "availability-consumer request must mirror the provider request");
function availabilityResponses(file) {
  const block = extractMethodBlock(extractPathBlock(read(file), "/v1/availability/check"), "post");
  return {
    codes: [...block.matchAll(/^        "(\d{3})":/gm)].map(match => match[1]),
    // The 200 body is envelope + data; the data schema is the last $ref of the response.
    okSchema: [...extractInlineResponse(block, "200").matchAll(/\$ref: "(?:\.\.\/)+(schemas\/[^"]*\.schema\.json)"/g)].at(-1)?.[1]
  };
}
const providerResponses = availabilityResponses("openapi/ops-core/availability-sellable.v1.yaml");
const consumerResponses = availabilityResponses("openapi/business-platform/availability-consumer.v1.yaml");
assert.equal(providerResponses.okSchema, "schemas/ops/sellable-status.schema.json", "provider 200 schema");
assert.deepEqual(consumerResponses, providerResponses, "availability-consumer responses (status set and 200 schema) must mirror the provider");
assert.ok(consumerResponses.codes.includes("429"), "availability-consumer declares 429");
for (const removed of ["channel_context_id", "customer_id"]) {
  assert.ok(!consumerRequest.names.includes(removed), `${removed} is not a provider field`);
}
const availabilityExample = parseJson("examples/api/availability-check.request.json");
for (const key of Object.keys(availabilityExample)) assert.ok(providerRequest.names.includes(key), `availability example field ${key} is not a provider field`);
assert.ok(Object.hasOwn(availabilityExample, "sku_id"), "sku_id is required");
assert.match(availabilityExample.sku_id, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/, "sku_id is a UUID");
assert.ok(["hộp", "thùng", "lọ", "hũ"].includes(availabilityExample.uom_code), "uom_code is one of the four unit codes");
assert.equal(availabilityExample.requested_quantity.unit, availabilityExample.uom_code, "unit must equal uom_code when both are sent");
assert.equal(typeof availabilityExample.requested_quantity.value, "string", "quantity value is a decimal string");
assert.ok(!Object.hasOwn(availabilityExample, "data") && !Object.hasOwn(availabilityExample, "schemaVersion"), "request body is bare, not enveloped");

// ---------------------------------------------------------------------------------------------------------
// Semantics that live in prose: pin them so a later edit cannot silently reverse them.
// ---------------------------------------------------------------------------------------------------------
const collapse = text => text.replace(/\s+/g, " ");
const reserveBlock = extractMethodBlock(extractPathBlock(inventoryText, "/v1/inventory/allocations"), "post");
const releaseBlock = extractMethodBlock(extractPathBlock(inventoryText, "/v1/inventory/allocations/release"), "post");

const reserve409 = collapse(extractInlineResponse(reserveBlock, "409"));
assert.match(reserve409, /INSUFFICIENT_STOCK is one code for five causes/);
assert.match(reserve409, /different warehouse, unit or quantity/);
assert.match(reserve409, /held by another service principal/);
assert.match(reserve409, /ALLOCATION_CONFLICT means the hold recorded for this idempotency key is no longer held \(it expired, or the warehouse or the consumer's own releaseInventoryAllocationV1 released it/);
assert.match(reserve409, /or the source was already ISSUED by the warehouse for an allocation of this same principal/);
assert.match(reserve409, /held by another service principal \(in any state, including ISSUED; the holder is not disclosed\)/);
assert.match(reserve409, /An ISSUED allocation created by another principal is not visible to the caller and is answered INSUFFICIENT_STOCK, never ALLOCATION_CONFLICT/);
assert.doesNotMatch(collapse(reserveBlock), /A source the warehouse already issued is answered/, "ISSUED => ALLOCATION_CONFLICT only holds for the caller's own allocation");
assert.match(collapse(reserveBlock), /whatever the state of that hold, ISSUED included/);
assert.match(collapse(reserveBlock), /A source whose allocation of this same principal the warehouse already issued is answered 409 ALLOCATION_CONFLICT whatever the key/);
assert.doesNotMatch(reserve409, /ALLOCATION_CONFLICT when the same source/, "a different scope is INSUFFICIENT_STOCK, never ALLOCATION_CONFLICT");

const release409 = collapse(extractInlineResponse(releaseBlock, "409"));
assert.doesNotMatch(release409, /still running|in progress/, "an in-flight call is a 429, not a 409");
assert.match(release409, /changed while the release was being processed; the code is the same for both/);

for (const [name, block] of [["reserve", reserveBlock], ["release", releaseBlock]]) {
  assert.match(collapse(block), /still running is 429 with Retry-After: 1/, `${name}: an in-flight call with the same key is 429`);
  assert.match(collapse(block), /another principal gets 403/, `${name}: a key belongs to its first principal`);
  assert.match(collapse(extractInlineResponse(block, "403")), /first used by another service principal/, `${name}: 403 cause`);
}
assert.match(collapse(reserveBlock), /idempotency scope of this operation is the source: a key sent for a different source is a new command/);
assert.match(collapse(reserveBlock), /includes expires_at, so a retry must resend the original expires_at unchanged/);
assert.match(collapse(reserveBlock), /ALREADY_RESERVED when the existing hold is this principal's own: it creates nothing and never extends the hold/);
assert.match(collapse(extractInlineResponse(reserveBlock, "422")), /already used for the same source with a different request body/);
assert.match(collapse(releaseBlock), /scope of this operation is the key alone, not the source: a key reused for a different source is 422/);
assert.match(collapse(extractInlineResponse(releaseBlock, "422")), /reused for a different source/);
assert.match(collapse(keyParameter), /for reserve the scope is the source/);
assert.match(collapse(keyParameter), /for release the scope is the key alone/);

for (const component of ["AllocationReserveRateLimited", "AllocationReleaseRateLimited"]) {
  const block = extractComponentBlock(inventoryText, "responses", component);
  assert.match(block, /Retry-After: \{ required: true, schema: \{ type: integer, minimum: 1 \} \}/);
  for (const header of ["X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"]) {
    assert.match(block, new RegExp(`${header}: \\{ required: false`), `${component} ${header} is optional`);
  }
  assert.match(collapse(block), /same X-Idempotency-Key is still running \(Retry-After: 1\)/, `${component} covers the in-flight case`);
}

const listDescription = collapse(extractMethodBlock(extractPathBlock(inventoryText, "/v1/inventory/allocations"), "get"));
assert.match(listDescription, /lists only allocations created by the calling service principal/);
assert.match(listDescription, /compare quantities as decimals, never as strings/);
assert.match(parseJson(allocationListSchema).description, /created by the calling service principal/);
assert.match(parseJson(allocationListSchema).properties.allocated_quantity.description, /Compare as decimals/);
assert.match(parseJson("schemas/ops/x03b/external-allocation-reserve-line.schema.json").properties.status.description, /not emitted on this route/);
const releaseErrorComment = parseJson(releaseErrorSchema)["$comment"];
assert.match(releaseErrorComment, /429 with Retry-After: 1, not 409/);
assert.match(releaseErrorComment, /except the 422 caused by the X-Idempotency-Key header/);
assert.doesNotMatch(releaseErrorComment, /still in progress/);

const errorCatalog = read("error-codes/external-allocation-errors.yaml");
assert.match(errorCatalog, /One code for five causes/);
assert.match(errorCatalog, /an ISSUED allocation of another principal is INSUFFICIENT_STOCK, never this code/);
assert.match(errorCatalog, /held by another service principal in any state \(ISSUED included/);
assert.match(errorCatalog, /released by the warehouse or by the consumer's own releaseInventoryAllocationV1/);
assert.doesNotMatch(errorCatalog, /still in progress/);
assert.match(statusEnumText, /The real gate is on the consumer side/);
assert.doesNotMatch(statusEnumText, /before the provider emits ISSUED/, "the contract cannot promise the provider will hold ISSUED back");
assert.match(collapse(notes), /five causes: short stock/);
assert.match(collapse(notes), /for an allocation of your own principal/);
assert.match(collapse(notes), /source held by another principal \(any state, `ISSUED` included/);
assert.match(collapse(notes), /compare quantities as decimals/);
assert.match(collapse(notes), /\| either \| `429` `RATE_LIMITED` \| [^|]*or a call with the same key is still running/);
assert.doesNotMatch(collapse(notes), /allocation changed mid-call, or the first attempt/);

// Temporary contention (PERSIST-01, provider commit d55ff75a0): 429 RATE_LIMITED + Retry-After 1, never a 409.
const contentionMessage = "The request could not be completed because of concurrent activity. Retry later with the same X-Idempotency-Key.";
for (const component of ["AllocationReserveRateLimited", "AllocationReleaseRateLimited"]) {
  const text = collapse(extractComponentBlock(inventoryText, "responses", component));
  assert.match(text, /three causes that share one code, one status and one way to handle them/, `${component}: three causes`);
  assert.ok(text.includes(`message "${contentionMessage}"`), `${component}: contention message`);
  assert.match(text, /temporary contention/i, `${component}: contention cause`);
  assert.match(text, /\(6 attempts, a few hundred milliseconds in total\) ran out, Retry-After: 1/, `${component}: retry budget and Retry-After`);
  assert.match(text, /no details/, `${component}: no details`);
  assert.match(text, /(?:is not out of stock and changes|releases nothing and changes) no state, so the key stays reusable/, `${component}: not out of stock, key reusable`);
  assert.match(text, /repeat the call with the same key and the same body; never send a new key for the same intent/, `${component}: same key and body`);
  assert.match(text, /Only the message text tells the causes apart, and it is not contractual/, `${component}: message not contractual`);
}
assert.match(collapse(reserveBlock), /A 429 is also the answer when the provider's own database transaction kept being rejected because of concurrent activity .* the key stays reusable, so wait Retry-After and repeat with the same key and the same body/);
assert.match(reserve409, /Temporary contention is never reported as INSUFFICIENT_STOCK or ALLOCATION_CONFLICT; it is 429 RATE_LIMITED/);
assert.match(collapse(releaseBlock), /A 429 is also the answer when the provider's own database transaction kept being rejected because of concurrent activity and its internal retries ran out \(temporary contention\): nothing was released, the key stays reusable/);
assert.match(release409, /Temporary contention that outlasts the provider's own retries is 429 RATE_LIMITED, not this 409/);
assert.match(releaseErrorComment, /and so is temporary contention that outlasts the provider's own retries \(same code RATE_LIMITED, a different message, retry with the same key and body\)/);
assert.ok(errorCatalog.includes(contentionMessage), "error catalog carries the contention message");
assert.match(errorCatalog, /Temporary contention is never reported with this code, it is RATE_LIMITED \(429\)/);
assert.match(errorCatalog, /Temporary contention that outlasts the provider retries is RATE_LIMITED \(429\), never this code/);
assert.match(errorCatalog, /both handled the same way, wait and repeat with the same key and body, never as out of stock/);
assert.match(notes, /### Retrying a 429/);
assert.ok(notes.includes(`message "${contentionMessage}" and no \`details\``), "notes carry the contention message");
for (const rule of [
  "Never show a customer an out-of-stock message for a `429`",
  "send the same call with the same `X-Idempotency-Key` and the same body (`expires_at` included)",
  "Retry up to about 5 times in total",
  "treat the outcome as UNKNOWN: neither held nor refused",
  "Do not report out of stock, do not mint a new key"
]) {
  assert.ok(notes.includes(rule), `notes retry guidance must say: ${rule}`);
}
assert.match(collapse(notes), /treats every `429` on these two commands as retry-with-the-same-key-and-body, never as out of stock/);
assert.match(collapse(notes), /or temporary contention on the same source or stock that outlasted the provider's own retries/);
assert.match(unreleased, /\(e\) Temporary contention is `429`, not `409`\*\* \(provider commit `d55ff75a0`, local, not pushed\)/);
assert.ok(unreleased.includes(`the message "${contentionMessage}" and no \`details\``), "CHANGELOG carries the contention message");
assert.match(unreleased, /6 attempts \(about 375 ms of sleeping at most\)/);
assert.match(unreleased, /Until this change the same situation was answered `409 INSUFFICIENT_STOCK` \(reserve\) or `409 ALLOCATION_CONFLICT` \(release\)/);
assert.match(unreleased, /so those two `409` answers now never mean contention/);
assert.match(unreleased, /Internal and admin endpoints keep `409 CONCURRENCY_CONFLICT`/);

assert.match(unreleased, /#### Provider behavior coming with ops-core WP07b phase A \(NOT live yet\)/);
for (const marker of ["(a) A hold of another principal", "(b) `GET /v1/inventory/allocations` lists only", "(c) A call whose first attempt", "(d) Reserve: the same key reused with a different body"]) {
  assert.ok(unreleased.includes(marker), `CHANGELOG must record the coming provider change: ${marker}`);
}
assert.doesNotMatch(unreleased, /A key accepted before is still accepted/);
assert.match(unreleased, /an `ISSUED` allocation of another principal is answered `409 INSUFFICIENT_STOCK`/);
assert.match(unreleased, /not `ALLOCATION_CONFLICT` \(that code is kept for an `ISSUED` allocation of the calling principal itself\)/);
assert.match(stateMachine, /an issued allocation of another principal is answered `409 INSUFFICIENT_STOCK`/);
assert.match(parseJson("schemas/ops/x03b/external-allocation-reserve-line.schema.json").properties.status.description, /an issued allocation of another principal, 409 INSUFFICIENT_STOCK/);
assert.doesNotMatch(unreleased, /does not emit `ISSUED` or enable the release route/);

console.log(`X03B allocation write-surface contract PASS: ${operations.length}/2 operations, ${reserveResponseFiles.length + releaseResponseFiles.length} response payloads, ${releaseErrorCases.length} release error envelopes, ${vectors.length} UUIDv5 vectors, 13 webhook event types, and negative tamper checks.`);
