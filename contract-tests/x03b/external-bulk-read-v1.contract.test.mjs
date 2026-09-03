import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const baseSha = "7d452526cd94cd49ec18c056e56c789506faae41";
const audience = "ginsengfood-ops-core-external-bulk-read-v1";

const commonCollectionErrors = {
  "400": { component: "CursorInvalid", code: "CURSOR_INVALID", retryable: false, definition: "CursorInvalid" },
  "408": { component: "RequestTimeout", code: "REQUEST_TIMEOUT", retryable: true, definition: "RequestTimeout" },
  "409": { component: "ChangeFeedGap", code: "CHANGE_FEED_GAP", retryable: false, definition: "ChangeFeedGap" },
  "410": { component: "CursorExpired", code: "CURSOR_EXPIRED", retryable: false, definition: "CursorExpired" },
  "429": { component: "TooManyRequests", code: "RATE_LIMITED", retryable: true, definition: "RateLimited" },
  "502": { component: "BadGateway", code: "BAD_GATEWAY", retryable: true, definition: "BadGateway" },
  "503": { component: "ServiceUnavailable", code: "SERVICE_UNAVAILABLE", retryable: true, definition: "ServiceUnavailable" },
  "504": { component: "GatewayTimeout", code: "GATEWAY_TIMEOUT", retryable: true, definition: "GatewayTimeout" }
};

const responseProfiles = {
  inventory: {
    ...commonCollectionErrors,
    "401": { component: "Unauthorized", code: "UNAUTHORIZED", retryable: false, definition: "Unauthorized" },
    "403": { component: "Forbidden", code: "FORBIDDEN", retryable: false, definition: "Forbidden" },
    "404": { component: "NotFound", code: "NOT_FOUND", retryable: false, definition: "NotFound" },
    "422": { component: "UnprocessableEntity", code: "VALIDATION_FAILED", retryable: false, definition: "ValidationFailed" },
    "500": { component: "InternalServerError", code: "INTERNAL_ERROR", retryable: false, definition: "InternalError" }
  },
  warehouse: {
    ...commonCollectionErrors,
    "401": { component: "ExternalUnauthorized", code: "UNAUTHORIZED", retryable: false, definition: "Unauthorized" },
    "403": { component: "ExternalForbidden", code: "FORBIDDEN", retryable: false, definition: "Forbidden" },
    "404": { component: "ExternalNotFound", code: "NOT_FOUND", retryable: false, definition: "NotFound" },
    "422": { component: "ExternalUnprocessableEntity", code: "VALIDATION_FAILED", retryable: false, definition: "ValidationFailed" },
    "500": { component: "ExternalInternalServerError", code: "INTERNAL_ERROR", retryable: false, definition: "InternalError" }
  },
  sku: {
    "400": { component: "ExternalBadRequest", code: "INVALID_REQUEST", retryable: false, definition: "InvalidRequest" },
    "401": { component: "ExternalUnauthorized", code: "UNAUTHORIZED", retryable: false, definition: "Unauthorized" },
    "403": { component: "ExternalForbidden", code: "FORBIDDEN", retryable: false, definition: "Forbidden" },
    "404": { component: "ExternalNotFound", code: "NOT_FOUND", retryable: false, definition: "NotFound" },
    "408": { component: "RequestTimeout", code: "REQUEST_TIMEOUT", retryable: true, definition: "RequestTimeout" },
    "422": { component: "ExternalUnprocessableEntity", code: "VALIDATION_FAILED", retryable: false, definition: "ValidationFailed" },
    "429": { component: "TooManyRequests", code: "RATE_LIMITED", retryable: true, definition: "RateLimited" },
    "500": { component: "ExternalInternalServerError", code: "INTERNAL_ERROR", retryable: false, definition: "InternalError" },
    "502": { component: "BadGateway", code: "BAD_GATEWAY", retryable: true, definition: "BadGateway" },
    "503": { component: "ServiceUnavailable", code: "SERVICE_UNAVAILABLE", retryable: true, definition: "ServiceUnavailable" },
    "504": { component: "GatewayTimeout", code: "GATEWAY_TIMEOUT", retryable: true, definition: "GatewayTimeout" }
  }
};

const operations = [
  { file: "openapi/ops-core/inventory.v1.yaml", route: "/v1/inventory/stock-balances", operationId: "listStockBalancesV1", permission: "INVENTORY_BALANCE_VIEW", schema: "external-stock-balance.schema.json", fixture: "stock-balances", resource: "inventory.stock-balances", responseProfile: "inventory", sort: "stockBalanceId ASC", order: [["stock_balance_id", "ASC"]], tombstone: "SNAPSHOT_ONLY_NO_TOMBSTONE", filters: ["skuId", "materialId", "warehouseId", "itemType"], fields: ["stock_balance_id", "item_type", "sku_id", "material_id", "batch_id", "lot_code", "warehouse_id", "warehouse_location_id", "on_hand_quantity", "available_quantity", "reserved_quantity", "quality_hold_quantity", "recall_hold_quantity", "sale_lock_quantity", "as_of"] },
  { file: "openapi/ops-core/inventory.v1.yaml", route: "/v1/inventory/ledger", operationId: "listInventoryLedgerV1", permission: "INVENTORY_LEDGER_VIEW", schema: "external-inventory-ledger-entry.schema.json", fixture: "inventory-ledger", resource: "inventory.ledger", responseProfile: "inventory", sort: "occurredAt ASC, ledgerEntryId ASC", order: [["occurred_at", "ASC"], ["ledger_entry_id", "ASC"]], tombstone: "APPEND_ONLY_NO_TOMBSTONE", filters: [], fields: ["ledger_entry_id", "append_only", "movement_type", "item_type", "sku_id", "material_id", "batch_id", "lot_code", "warehouse_id", "warehouse_location_id", "quantity_delta", "source_object_type", "source_object_id", "source_object_no", "occurred_at"] },
  { file: "openapi/ops-core/inventory.v1.yaml", route: "/v1/inventory/stock-alerts", operationId: "listStockAlertsV1", permission: "STOCK_ALERT_VIEW", schema: "external-stock-alert.schema.json", fixture: "stock-alerts", resource: "inventory.stock-alerts", responseProfile: "inventory", sort: "occurredAt ASC, stockAlertId ASC", order: [["occurred_at", "ASC"], ["stock_alert_id", "ASC"]], tombstone: "APPEND_ONLY_LIFECYCLE_NO_TOMBSTONE", filters: ["skuId", "warehouseId", "status", "from", "to"], fields: ["stock_alert_id", "sku_id", "warehouse_id", "status", "available_stock", "yellow_threshold", "red_threshold", "stockout_risk_threshold", "occurred_at", "resolved_at"] },
  { file: "openapi/ops-core/inventory.v1.yaml", route: "/v1/inventory/allocations", operationId: "listInventoryAllocationsV1", permission: "INVENTORY_ALLOCATION_VIEW", schema: "external-inventory-allocation.schema.json", fixture: "inventory-allocations", resource: "inventory.allocations", responseProfile: "inventory", sort: "requestedAt DESC, allocationId DESC", order: [["requested_at", "DESC"], ["allocation_id", "DESC"]], tombstone: "STATE_REVISION_NO_TOMBSTONE", filters: [], fields: ["allocation_id", "allocation_no", "warehouse_id", "warehouse_location_id", "item_type", "item_id", "lot_code", "unit", "source_object_type", "source_object_id", "source_object_no", "allocated_quantity", "status", "requested_at", "confirmed_at", "released_at"] },
  { file: "openapi/ops-core/warehouse.v1.yaml", route: "/v1/warehouses", operationId: "listWarehousesV1", permission: "WAREHOUSE_VIEW", schema: "external-warehouse.schema.json", fixture: "warehouses", resource: "warehouses", responseProfile: "warehouse", sort: "warehouseCode ASC, warehouseId ASC", order: [["warehouse_code", "ASC"], ["warehouse_id", "ASC"]], tombstone: "INACTIVE_LIFECYCLE_NO_TOMBSTONE", filters: [], fields: ["warehouse_id", "warehouse_code", "warehouse_name", "warehouse_type", "status"] },
  { file: "openapi/ops-core/warehouse.v1.yaml", route: "/v1/warehouse-locations", operationId: "listWarehouseLocationsV1", permission: "WAREHOUSE_VIEW", schema: "external-warehouse-location.schema.json", fixture: "warehouse-locations", resource: "warehouse-locations", responseProfile: "warehouse", sort: "locationCode ASC, warehouseLocationId ASC", order: [["location_code", "ASC"], ["warehouse_location_id", "ASC"]], tombstone: "INACTIVE_LIFECYCLE_NO_TOMBSTONE", filters: [], fields: ["warehouse_location_id", "warehouse_id", "location_code", "location_name", "location_type", "status"] },
  { file: "openapi/ops-core/warehouse.v1.yaml", route: "/v1/warehouse-receipts", operationId: "listWarehouseReceiptsV1", permission: "WAREHOUSE_RECEIPT_VIEW", schema: "external-warehouse-receipt.schema.json", fixture: "warehouse-receipts", resource: "warehouse-receipts", responseProfile: "warehouse", sort: "createdAt DESC, warehouseReceiptId DESC", order: [["created_at", "DESC"], ["warehouse_receipt_id", "DESC"]], tombstone: "STATE_REVISION_NO_TOMBSTONE", filters: ["status", "batchId", "warehouseId", "fromDate", "toDate"], fields: ["warehouse_receipt_id", "warehouse_receipt_no", "status", "batch_id", "warehouse_id", "warehouse_location_id", "received_quantity", "received_at", "confirmed_at", "created_at"] },
  { file: "openapi/ops-core/sku.v1.yaml", route: "/v1/skus/{skuId}/public", operationId: "getPublicSkuV1", permission: "SKU_CATALOG_VIEW", schema: "external-public-sku.schema.json", fixture: "public-sku", responseProfile: "sku", collection: false, fields: ["sku_id", "sku_code", "product_id", "public_name", "dietary_type", "product_group", "lifecycle_status"] }
];

const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const parseJson = relative => JSON.parse(read(relative));

function extractPathBlock(text, route) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex(line => line === `  ${route}:`);
  assert.notEqual(start, -1, `missing route ${route}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^  \//.test(lines[index])) {
      end = index;
      break;
    }
    if (/^components:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function extractMethodBlock(pathBlock, method) {
  const lines = pathBlock.split(/\r?\n/);
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

function extractResponseComponentBlock(text, component) {
  const lines = text.split(/\r?\n/);
  const componentsStart = lines.findIndex(line => line === "components:");
  const responsesStart = lines.findIndex((line, index) => index > componentsStart && line === "  responses:");
  assert.ok(responsesStart > componentsStart, "components.responses missing");
  const start = lines.findIndex((line, index) => index > responsesStart && line === `    ${component}:`);
  assert.notEqual(start, -1, `missing response component ${component}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^    [A-Za-z][A-Za-z0-9]*:/.test(lines[index]) || /^  [A-Za-z][A-Za-z0-9]*:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function assertOperationErrorMappings(operation, textOverride) {
  const text = textOverride ?? read(operation.file);
  const methodBlock = extractMethodBlock(extractPathBlock(text, operation.route), "get");
  for (const [status, expected] of Object.entries(responseProfiles[operation.responseProfile])) {
    assert.match(
      methodBlock,
      new RegExp(`"${status}": \\{ \\$ref: "#\\/components\\/responses\\/${expected.component}" \\}`),
      `${operation.operationId} response ${status} component drift`
    );
    const componentBlock = extractResponseComponentBlock(text, expected.component);
    assert.match(componentBlock, new RegExp(`x-error-code: ${expected.code}\\b`));
    assert.match(componentBlock, new RegExp(`x-http-status: ${status}\\b`));
    assert.match(componentBlock, new RegExp(`x-retryable: ${expected.retryable}\\b`));
    assert.match(
      componentBlock,
      new RegExp(`external-bulk-read-error-envelopes\\.schema\\.json#\\/\\$defs\\/${expected.definition}`)
    );
  }
}

function assertOperationContract(operation, textOverride) {
  const text = textOverride ?? read(operation.file);
  const block = extractMethodBlock(extractPathBlock(text, operation.route), "get");
  assert.match(block, new RegExp(`operationId: ${operation.operationId}\\b`));
  assert.match(block, /security:\n\s+- ServiceBearer: \[\]/);
  assert.match(block, /x-auth-class: SERVICE_BEARER/);
  assert.match(block, /x-token-use: service/);
  assert.match(block, new RegExp(`x-audience: ${audience}`));
  assert.match(block, new RegExp(`x-permission: ${operation.permission}\\b`));
  assert.match(block, /x-permission-scope: SERVICE/);
  assert.match(block, /x-rate-limit-policy: ExternalBulkRead/);
  assert.match(block, /x-retry-policy: ExternalBulkReadRetry/);
  assert.match(text, /schemas\/ops\/x03b\/external-bulk-read-error-envelopes\.schema\.json/);
  assert.doesNotMatch(block, /requestBody:|X-Idempotency-Key|x-idempotency/i);
  assert.match(block, /"429": \{ \$ref: "#\/components\/responses\/TooManyRequests" \}/);
  assert.match(block, new RegExp(`schemas/ops/x03b/${operation.schema.replaceAll(".", "\\.")}`));

  if (operation.collection !== false) {
    assert.match(block, /\$ref: "#\/components\/parameters\/Cursor"/);
    assert.match(block, /\$ref: "#\/components\/parameters\/Limit"/);
    assert.match(block, /x-pagination-policy: ExternalSnapshotCursorV1/);
    assert.match(block, /x-delta-supported: false/);
    assert.match(block, new RegExp(`x-stable-sort: "${operation.sort}"`));
    assert.match(block, new RegExp(`x-tombstone-policy: ${operation.tombstone}`));
    assert.match(block, /external-snapshot-meta\.schema\.json/);
    assert.match(block, /"400": \{ \$ref: "#\/components\/responses\/CursorInvalid" \}/);
    assert.match(block, /"409": \{ \$ref: "#\/components\/responses\/ChangeFeedGap" \}/);
    assert.match(block, /"410": \{ \$ref: "#\/components\/responses\/CursorExpired" \}/);
    const inlineFilters = [...block.matchAll(/^\s{8}- name: ([A-Za-z0-9]+)$/gm)].map(match => match[1]);
    assert.deepEqual(inlineFilters, operation.filters, `${operation.operationId} query filter drift`);
  } else {
    assert.doesNotMatch(block, /components\/parameters\/Cursor/);
    assert.doesNotMatch(block, /x-pagination-policy:/);
  }
  assertOperationErrorMappings(operation, text);
}

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

function canonicalJson(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
}

function snapshotManifest(payload, operation, accumulatedSnapshotItems = payload.data) {
  return {
    manifest_version: payload.meta.manifest_version,
    resource: operation.resource,
    snapshot_id: payload.meta.snapshot_id,
    as_of: payload.meta.as_of,
    high_watermark: payload.meta.high_watermark,
    item_count: payload.meta.item_count,
    items: accumulatedSnapshotItems
  };
}

function snapshotManifestSha256(payload, operation, accumulatedSnapshotItems = payload.data) {
  return createHash("sha256")
    .update(canonicalJson(snapshotManifest(payload, operation, accumulatedSnapshotItems)), "utf8")
    .digest("hex");
}

function compareStableOrder(left, right, operation) {
  for (const [field, direction] of operation.order) {
    const comparison = left[field] < right[field] ? -1 : left[field] > right[field] ? 1 : 0;
    if (comparison !== 0) return direction === "ASC" ? comparison : -comparison;
  }
  return 0;
}

function assertStableOrdered(items, operation) {
  assert.ok(Array.isArray(operation.order) && operation.order.length > 0, `${operation.operationId} stable order definition missing`);
  for (let index = 1; index < items.length; index += 1) {
    assert.ok(compareStableOrder(items[index - 1], items[index], operation) <= 0, "accumulated snapshot must preserve stable order");
  }
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
  if (schema.if) {
    let conditionMatches = true;
    try {
      validateSchema(schema.if, value, schemaFile, location);
    } catch {
      conditionMatches = false;
    }
    if (conditionMatches && schema.then) validateSchema(schema.then, value, schemaFile, location);
    if (!conditionMatches && schema.else) validateSchema(schema.else, value, schemaFile, location);
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

function validatePayload(payload, operation, accumulatedSnapshotItems = payload.data) {
  assert.equal(payload.schemaVersion, "v1");
  const correlationSchema = loadSchema("schemas/common/correlation.schema.json");
  validateSchema(correlationSchema.schema, payload.correlation, correlationSchema.file, "$.correlation");
  const itemSchema = loadSchema(`schemas/ops/x03b/${operation.schema}`);
  if (operation.collection === false) {
    assert.deepEqual(Object.keys(payload).sort(), ["correlation", "data", "schemaVersion"].sort());
    validateSchema(itemSchema.schema, payload.data, itemSchema.file, "$.data");
    return;
  }
  assert.deepEqual(Object.keys(payload).sort(), ["correlation", "data", "meta", "schemaVersion"].sort());
  assert.ok(Array.isArray(payload.data));
  assert.ok(payload.data.length <= 100, "$.data maxItems");
  payload.data.forEach((item, index) => validateSchema(itemSchema.schema, item, itemSchema.file, `$.data[${index}]`));
  assert.ok(Array.isArray(accumulatedSnapshotItems), "accumulated snapshot items must be an array");
  accumulatedSnapshotItems.forEach((item, index) => validateSchema(itemSchema.schema, item, itemSchema.file, `snapshot[${index}]`));
  const metaSchema = loadSchema("schemas/ops/x03b/external-snapshot-meta.schema.json");
  validateSchema(metaSchema.schema, payload.meta, metaSchema.file, "$.meta");
  assert.equal(payload.meta.resource, operation.resource, "$.meta.resource scope mismatch");
  assert.equal(payload.meta.page_item_count, payload.data.length, "$.meta.page_item_count mismatch");
  assert.ok(payload.meta.delivered_item_count >= payload.meta.page_item_count, "$.meta.delivered_item_count below page count");
  assert.ok(payload.meta.delivered_item_count <= payload.meta.item_count, "$.meta.delivered_item_count exceeds full snapshot count");
  assert.equal(
    payload.meta.delivered_item_count,
    accumulatedSnapshotItems.length,
    "$.meta.delivered_item_count mismatch with accumulated snapshot"
  );
  assertStableOrdered(accumulatedSnapshotItems, operation);
  const currentPageSuffix = payload.meta.page_item_count === 0
    ? []
    : accumulatedSnapshotItems.slice(-payload.meta.page_item_count);
  assert.deepEqual(currentPageSuffix, payload.data, "current page must be the suffix of accumulated snapshot items");
  if (payload.meta.complete) {
    assert.equal(payload.meta.next_cursor, null, "$.meta.next_cursor must be null when complete");
    assert.equal(payload.meta.delivered_item_count, payload.meta.item_count, "$.meta.item_count must equal delivered full snapshot count");
    assert.equal(
      payload.meta.manifest_sha256,
      snapshotManifestSha256(payload, operation, accumulatedSnapshotItems),
      "$.meta.manifest_sha256 mismatch"
    );
  } else {
    assert.equal(typeof payload.meta.next_cursor, "string", "$.meta.next_cursor required while incomplete");
    assert.ok(payload.meta.next_cursor.length > 0, "$.meta.next_cursor required while incomplete");
    assert.ok(payload.meta.delivered_item_count < payload.meta.item_count, "incomplete snapshot must have remaining items");
  }
}

for (const operation of operations) {
  assertOperationContract(operation);
  const itemSchema = loadSchema(`schemas/ops/x03b/${operation.schema}`);
  assert.deepEqual(Object.keys(itemSchema.schema.properties).sort(), [...operation.fields].sort(), `${operation.operationId} whitelist drift`);
  for (const relative of [
    `examples/api/x03b/${operation.fixture}.response.json`,
    `contract-tests/x03b/fixtures/${operation.fixture}.response.fixture.json`
  ]) {
    const payload = parseJson(relative);
    validatePayload(payload, operation);
    const tampered = structuredClone(payload);
    const item = operation.collection === false ? tampered.data : tampered.data[0];
    item.actor_id = "not-public";
    assert.throws(() => validatePayload(tampered, operation), /not whitelisted/);
  }

  const sourceText = read(operation.file);
  const sourcePathBlock = extractPathBlock(sourceText, operation.route);
  for (const [status, expected] of Object.entries(responseProfiles[operation.responseProfile])) {
    const expectedRef = `"${status}": { $ref: "#/components/responses/${expected.component}" }`;
    const tamperedPathBlock = sourcePathBlock.replace(expectedRef, `"${status}": { $ref: "#/components/responses/DefinitelyWrong" }`);
    assert.notEqual(tamperedPathBlock, sourcePathBlock, `${operation.operationId} response ${status} tamper setup failed`);
    assert.throws(
      () => assertOperationErrorMappings(operation, sourceText.replace(sourcePathBlock, tamperedPathBlock)),
      /response .* component drift/
    );

    const componentBlock = extractResponseComponentBlock(sourceText, expected.component);
    for (const [needle, replacement, failurePattern] of [
      [`x-error-code: ${expected.code}`, "x-error-code: WRONG_CODE", /x-error-code/],
      [`x-http-status: ${status}`, "x-http-status: 599", /x-http-status/],
      [`x-retryable: ${expected.retryable}`, `x-retryable: ${!expected.retryable}`, /x-retryable/]
    ]) {
      const tamperedComponent = componentBlock.replace(needle, replacement);
      assert.notEqual(tamperedComponent, componentBlock, `${expected.component} metadata tamper setup failed`);
      assert.throws(
        () => assertOperationErrorMappings(operation, sourceText.replace(componentBlock, tamperedComponent)),
        failurePattern
      );
    }
  }
}

const warehouseOperation = operations[4];
const warehousePageOne = parseJson("contract-tests/x03b/fixtures/warehouses.two-page.page-1.response.fixture.json");
const warehousePageTwo = parseJson("contract-tests/x03b/fixtures/warehouses.two-page.page-2.response.fixture.json");
const accumulatedWarehouseItems = [...warehousePageOne.data, ...warehousePageTwo.data];
assert.equal(warehousePageOne.meta.snapshot_id, warehousePageTwo.meta.snapshot_id);
assert.equal(warehousePageOne.meta.manifest_sha256, warehousePageTwo.meta.manifest_sha256);
assert.ok(warehousePageTwo.meta.page_item_count < warehousePageTwo.meta.delivered_item_count);
assert.equal(warehousePageTwo.meta.delivered_item_count, warehousePageTwo.meta.item_count);
validatePayload(warehousePageOne, warehouseOperation, warehousePageOne.data);
validatePayload(warehousePageTwo, warehouseOperation, accumulatedWarehouseItems);

assert.throws(
  () => validatePayload(warehousePageTwo, warehouseOperation, [...accumulatedWarehouseItems].reverse()),
  /stable order/
);

const priorPageTamper = structuredClone(accumulatedWarehouseItems);
priorPageTamper[0].warehouse_name = "Tampered prior-page warehouse";
assert.throws(() => validatePayload(warehousePageTwo, warehouseOperation, priorPageTamper), /manifest_sha256/);

const finalPageTamper = structuredClone(warehousePageTwo);
finalPageTamper.data[0].warehouse_name = "Tampered final-page warehouse";
assert.throws(
  () => validatePayload(finalPageTamper, warehouseOperation, [...warehousePageOne.data, ...finalPageTamper.data]),
  /manifest_sha256/
);

const allocation = parseJson("examples/api/x03b/inventory-allocations.response.json");
allocation.data[0].source_object_id = "order-line-from-position-1";
assert.throws(() => validatePayload(allocation, operations[3]), /uuid/);

const shippingAllocation = parseJson("examples/api/x03b/inventory-allocations.response.json");
shippingAllocation.data[0].source_object_type = "SHIPMENT_REFERENCE";
assert.throws(() => validatePayload(shippingAllocation, operations[3]), /enum/);

const snapshot = parseJson("examples/api/x03b/stock-balances.response.json");
snapshot.meta.delta_supported = true;
assert.throws(() => validatePayload(snapshot, operations[0]), /const/);

const oversizedSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
oversizedSnapshot.data = Array.from({ length: 101 }, () => structuredClone(oversizedSnapshot.data[0]));
assert.throws(() => validatePayload(oversizedSnapshot, operations[0]), /maxItems/);

const mismatchedCountSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
mismatchedCountSnapshot.meta.item_count += 1;
assert.throws(() => validatePayload(mismatchedCountSnapshot, operations[0]), /item_count/);

const mismatchedPageCountSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
mismatchedPageCountSnapshot.meta.page_item_count = 0;
assert.throws(() => validatePayload(mismatchedPageCountSnapshot, operations[0]), /page_item_count/);

const inconsistentCursorSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
inconsistentCursorSnapshot.meta.next_cursor = "cursor-must-not-exist-when-complete";
assert.throws(() => validatePayload(inconsistentCursorSnapshot, operations[0]), /next_cursor/);

const incompleteWithoutCursorSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
incompleteWithoutCursorSnapshot.meta.complete = false;
incompleteWithoutCursorSnapshot.meta.item_count = 2;
assert.throws(() => validatePayload(incompleteWithoutCursorSnapshot, operations[0]), /next_cursor/);

const staleManifestSnapshot = parseJson("examples/api/x03b/stock-balances.response.json");
staleManifestSnapshot.data[0].available_quantity.value = "99.000";
assert.throws(() => validatePayload(staleManifestSnapshot, operations[0]), /manifest_sha256/);

const emptyReceiptSnapshot = parseJson("examples/api/x03b/warehouse-receipts.response.json");
emptyReceiptSnapshot.data = [];
emptyReceiptSnapshot.meta.item_count = 0;
emptyReceiptSnapshot.meta.page_item_count = 0;
emptyReceiptSnapshot.meta.delivered_item_count = 0;
assert.throws(() => validatePayload(emptyReceiptSnapshot, operations[6]), /manifest_sha256/);

emptyReceiptSnapshot.meta.manifest_sha256 = snapshotManifestSha256(emptyReceiptSnapshot, operations[6]);
validatePayload(emptyReceiptSnapshot, operations[6]);

const inventoryText = read("openapi/ops-core/inventory.v1.yaml");
assert.doesNotMatch(inventoryText, /\/v1\/inventory\/allocation-source-references/);
assert.throws(
  () => assertOperationContract(operations[0], inventoryText.replace("x-permission: INVENTORY_BALANCE_VIEW", "x-permission: ADMIN_FULL")),
  /x-permission/
);

const warehouseNow = read("openapi/ops-core/warehouse.v1.yaml");
const receiptBlock = extractMethodBlock(extractPathBlock(warehouseNow, "/v1/warehouse-receipts"), "get");
for (const filter of ["status", "batchId", "warehouseId", "fromDate", "toDate"]) {
  assert.match(receiptBlock, new RegExp(`name: ${filter}\\b`), `receipt filter ${filter} missing`);
}

const warehouseBase = execFileSync("git", ["show", `${baseSha}:openapi/ops-core/warehouse.v1.yaml`], { cwd: root, encoding: "utf8" });
assert.equal(
  extractMethodBlock(extractPathBlock(warehouseNow, "/v1/warehouse-receipts"), "post").trim(),
  extractMethodBlock(extractPathBlock(warehouseBase, "/v1/warehouse-receipts"), "post").trim(),
  "POST /v1/warehouse-receipts must remain byte-equivalent at the method block"
);

const skuNow = read("openapi/ops-core/sku.v1.yaml");
const skuBase = execFileSync("git", ["show", `${baseSha}:openapi/ops-core/sku.v1.yaml`], { cwd: root, encoding: "utf8" });
for (const route of ["/v1/skus/{skuId}", "/v1/skus/{skuId}/operational-status"]) {
  assert.equal(
    extractMethodBlock(extractPathBlock(skuNow, route), "get").trim(),
    extractMethodBlock(extractPathBlock(skuBase, route), "get").trim(),
    `${route} is outside X03B and must remain byte-equivalent at the method block`
  );
}

for (const file of new Set(operations.map(operation => operation.file))) {
  const text = read(file);
  assert.match(text, /x-owner-decision-ref: OWNER-DIRECTIVE-2026-09-03-EXT-OD-01-07/);
  assert.match(text, /securitySchemes:\n\s+ServiceBearer:\n\s+type: http\n\s+scheme: bearer\n\s+bearerFormat: JWT/);
  assert.match(text, /x-rate-limit-policies:[\s\S]*ExternalBulkRead:[\s\S]*sustained_rps_per_principal: 2[\s\S]*burst_per_principal: 4[\s\S]*fleet_rps: 10[\s\S]*server_timeout_seconds: 10[\s\S]*queue_limit: 0[\s\S]*partition_claims: \[token_use, sub\][\s\S]*required_token_use: service[\s\S]*principal_sub_format: uuid[\s\S]*limiter_authority: DISTRIBUTED_INGRESS_TOKEN_BUCKET[\s\S]*pre_auth_partition: TRUSTED_PROXY_VERIFIED_IP_ONLY[\s\S]*fleet_authority_config_key: RateLimiting__External__FleetAuthorityRef[\s\S]*startup_fail_closed: true[\s\S]*exhausted_or_unavailable_behavior: FAIL_CLOSED_NO_CACHED_PASS/);
  assert.match(text, /x-retry-policies:[\s\S]*ExternalBulkReadRetry:[\s\S]*max_retries: 2[\s\S]*total_budget_seconds: 30[\s\S]*retryable_statuses: \[408, 429, 502, 503, 504\][\s\S]*non_retryable_statuses: \[400, 401, 403, 404, 409, 410, 422, 500\][\s\S]*backoff: FULL_JITTER_BASE_500MS_CAP_5S/);
  if (operations.some(operation => operation.file === file && operation.collection !== false)) {
    assert.match(text, /x-pagination-policies:[\s\S]*ExternalSnapshotCursorV1:[\s\S]*mode: OPAQUE_SCOPE_BOUND_SNAPSHOT_CURSOR[\s\S]*cursor_version: 1[\s\S]*cursor_ttl_seconds: 1800[\s\S]*cursor_ttl_mode: ABSOLUTE_NON_SLIDING[\s\S]*integrity_protected: true[\s\S]*default_limit: 50[\s\S]*max_limit: 100[\s\S]*page_max_items: 100[\s\S]*page_item_count_semantics: EXACT_CURRENT_PAGE_DATA_LENGTH[\s\S]*item_count_semantics: EXACT_FULL_SNAPSHOT_TOTAL[\s\S]*delivered_item_count_semantics: CUMULATIVE_THROUGH_CURRENT_PAGE[\s\S]*complete_requires: DELIVERED_COUNT_EQUALS_ITEM_COUNT_AND_NEXT_CURSOR_NULL[\s\S]*manifest_version: 1[\s\S]*manifest_algorithm: SHA-256[\s\S]*manifest_canonicalization: JCS_RFC8785[\s\S]*manifest_document_fields: \[manifest_version, resource, snapshot_id, as_of, high_watermark, item_count, items\][\s\S]*verify_manifest_before_absence_reconcile: true[\s\S]*delta_supported: false[\s\S]*delta_replay_retention_seconds: 604800[\s\S]*delta_poll_seconds: 30[\s\S]*delta_poll_jitter_percent: 20[\s\S]*future_tombstone_retention_seconds: 7776000[\s\S]*snapshot_refresh_seconds: 300[\s\S]*full_reconciliation_seconds: 21600[\s\S]*full_reconciliation_triggers: \[STARTUP, RESUME, CHANGE_FEED_GAP, CURSOR_EXPIRED\][\s\S]*gap_reconcile_start_within_seconds: 60[\s\S]*gap_recovery: FAIL_CLOSED_FULL_RECONCILE[\s\S]*expired_cursor_recovery: FULL_RECONCILE_NO_TIMESTAMP_OR_LOCAL_CHECKPOINT[\s\S]*absence_reconcile_requires: FULL_SNAPSHOT_COMPLETE_VERIFIED_MANIFEST_COUNT_HASH/);
  }
}

const errorSchema = loadSchema("schemas/ops/x03b/external-bulk-read-error.schema.json");
for (const [code, httpStatus] of [["CURSOR_INVALID", 400], ["CHANGE_FEED_GAP", 409], ["CURSOR_EXPIRED", 410], ["RATE_LIMITED", 429]]) {
  validateSchema(errorSchema.schema, { code, message: "Safe external error.", httpStatus, correlationId: "corr-x03b" }, errorSchema.file);
}
assert.throws(
  () => validateSchema(errorSchema.schema, { code: "CURSOR_INVALID", message: "Safe external error.", httpStatus: 410, correlationId: "corr-x03b" }, errorSchema.file),
  /oneOf/
);

const responseEnvelopeSchema = loadSchema("schemas/ops/x03b/external-bulk-read-error-envelopes.schema.json");
for (const profile of Object.values(responseProfiles)) {
  for (const [status, expected] of Object.entries(profile)) {
    const envelope = {
      schemaVersion: "v1",
      correlation: { correlationId: `corr-x03b-${status}` },
      error: { code: expected.code, message: "Safe external error.", httpStatus: Number(status), correlationId: `corr-x03b-${status}` }
    };
    validateSchema(responseEnvelopeSchema.schema.$defs[expected.definition], envelope, responseEnvelopeSchema.file);
    const wrongCode = structuredClone(envelope);
    wrongCode.error.code = expected.code === "FORBIDDEN" ? "UNAUTHORIZED" : "FORBIDDEN";
    assert.throws(() => validateSchema(responseEnvelopeSchema.schema.$defs[expected.definition], wrongCode, responseEnvelopeSchema.file), /const|oneOf/);
    const wrongStatus = structuredClone(envelope);
    wrongStatus.error.httpStatus = Number(status) === 403 ? 401 : 403;
    assert.throws(() => validateSchema(responseEnvelopeSchema.schema.$defs[expected.definition], wrongStatus, responseEnvelopeSchema.file), /const|oneOf/);
  }
}

console.log(`X03B external bulk-read contract PASS: ${operations.length}/8 operations, one-page/empty/two-page snapshots, and negative tamper checks.`);
