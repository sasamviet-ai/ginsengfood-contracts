import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { loadSchema, validateSchema } from "./lib/mini-schema.mjs";

// SKU catalog read model of ops-core for the business-platform (M3): the SkuV1Response object returned by
// GET /v1/skus/{skuId} (and, from the list-route change, by GET /v1/skus). Source: ops-core plan row SKU-M12-03.
const root = path.resolve(import.meta.dirname, "../..");
const parseJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));

const skuSchema = loadSchema(root, "schemas/product/sku.schema.json");
const correlationSchema = loadSchema(root, "schemas/common/correlation.schema.json");

function validateSkuEnvelope(payload) {
  assert.equal(payload.schemaVersion, "v1");
  assert.deepEqual(Object.keys(payload).sort(), ["correlation", "data", "schemaVersion"], "single SKU envelope has no meta");
  validateSchema(correlationSchema.schema, payload.correlation, correlationSchema.file, "$.correlation");
  validateSchema(skuSchema.schema, payload.data, skuSchema.file, "$.data");
}

// 1. updated_at and revision: additive, optional in the schema, always present in the examples.
const properties = skuSchema.schema.properties;
assert.equal(skuSchema.schema.additionalProperties, false);
assert.deepEqual(properties.updated_at.type, "string");
assert.equal(properties.updated_at.format, "date-time");
assert.deepEqual(properties.revision.type, "integer");
assert.equal(properties.revision.minimum, 1);
assert.deepEqual(skuSchema.schema.required, ["sku_id", "sku_code"], "additive change: the required list does not move");
for (const field of ["updated_at", "revision"]) {
  assert.match(properties[field].description, /optional in the schema/i, `${field} must say why it is optional`);
}
assert.match(properties.updated_at.description, /never null/i);
assert.match(properties.updated_at.description, /NOT covered/);
assert.match(properties.revision.description, /SAME sku_id/);
assert.match(properties.revision.description, /LOWER/);

for (const relative of ["examples/api/x03b/sku.response.json", "contract-tests/x03b/fixtures/sku.response.fixture.json"]) {
  const payload = parseJson(relative);
  validateSkuEnvelope(payload);
  assert.ok(Object.hasOwn(payload.data, "updated_at"), `${relative} must show updated_at`);
  assert.ok(Object.hasOwn(payload.data, "revision"), `${relative} must show revision`);

  for (const [field, value, failure] of [
    ["updated_at", "2026-11-10 03:15:00", /date-time/],
    ["updated_at", "yesterday", /date-time/],
    ["updated_at", null, /expected string, got null/],
    ["revision", 0, /minimum/],
    ["revision", -5, /minimum/],
    ["revision", "7", /expected integer, got string/],
    ["revision", 1.5, /expected integer, got number/],
    ["revision", null, /expected integer, got null/]
  ]) {
    const tampered = structuredClone(payload);
    tampered.data[field] = value;
    assert.throws(() => validateSkuEnvelope(tampered), failure, `${relative} ${field}=${JSON.stringify(value)} must be rejected`);
  }

  const unknownField = structuredClone(payload);
  unknownField.data.updated_by = "someone";
  assert.throws(() => validateSkuEnvelope(unknownField), /not whitelisted/);
}

console.log("X03B SKU catalog contract PASS: updated_at and revision (schema, example, fixture, 8 tamper cases).");
