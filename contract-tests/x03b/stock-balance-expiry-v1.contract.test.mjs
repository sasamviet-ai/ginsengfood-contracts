import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { loadSchema, validateSchema } from "./lib/mini-schema.mjs";

// expiry_date on the EXTERNAL stock-balance projection (listStockBalancesV1): optional, additive, a calendar date.
// Kept in its own test and its own commit so it can be dropped on its own (ops-core plan row SKU-M12-03, item 5).
const root = path.resolve(import.meta.dirname, "../..");
const parseJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));

const balanceSchema = loadSchema(root, "schemas/ops/x03b/external-stock-balance.schema.json");
const metaSchema = loadSchema(root, "schemas/ops/x03b/external-snapshot-meta.schema.json");
const correlationSchema = loadSchema(root, "schemas/common/correlation.schema.json");

const canonicalJson = value => {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
};
const manifestSha256 = payload => createHash("sha256").update(canonicalJson({
  manifest_version: payload.meta.manifest_version,
  resource: payload.meta.resource,
  snapshot_id: payload.meta.snapshot_id,
  as_of: payload.meta.as_of,
  high_watermark: payload.meta.high_watermark,
  item_count: payload.meta.item_count,
  items: payload.data
}), "utf8").digest("hex");

function validatePayload(payload) {
  assert.equal(payload.schemaVersion, "v1");
  validateSchema(correlationSchema.schema, payload.correlation, correlationSchema.file, "$.correlation");
  payload.data.forEach((item, index) => validateSchema(balanceSchema.schema, item, balanceSchema.file, `$.data[${index}]`));
  validateSchema(metaSchema.schema, payload.meta, metaSchema.file, "$.meta");
  assert.equal(payload.meta.resource, "inventory.stock-balances");
  assert.equal(payload.meta.manifest_sha256, manifestSha256(payload), "$.meta.manifest_sha256 mismatch");
}

// 1. The property: optional, a date (not a date-time), described as UNKNOWN when absent.
const property = balanceSchema.schema.properties.expiry_date;
assert.equal(property.type, "string");
assert.equal(property.format, "date");
assert.ok(!balanceSchema.schema.required.includes("expiry_date"), "additive: optional");
assert.equal(balanceSchema.schema.additionalProperties, false);
assert.match(property.description, /OPTIONAL/);
assert.match(property.description, /Vietnam time/);
assert.match(property.description, /END of that day/);
assert.match(property.description, /never null/);
assert.match(property.description, /UNKNOWN, not 'does not expire'/);

// 2. Examples: one row with the date, one without; an example from before this change stays valid.
for (const relative of ["examples/api/x03b/stock-balances.expiry.response.json", "contract-tests/x03b/fixtures/stock-balances.expiry.response.fixture.json"]) {
  const payload = parseJson(relative);
  validatePayload(payload);
  assert.ok(payload.data.some(item => Object.hasOwn(item, "expiry_date")), `${relative} must show the property`);
  assert.ok(payload.data.some(item => !Object.hasOwn(item, "expiry_date")), `${relative} must show that an absent value is valid`);
  assert.ok(payload.data.every(item => item.expiry_date === undefined || /^\d{4}-\d{2}-\d{2}$/.test(item.expiry_date)));

  for (const [label, value] of [
    ["month 13", "2028-13-01"],
    ["30 February", "2028-02-30"],
    ["day first", "01-11-2028"],
    ["slashes", "2028/11/01"],
    ["date-time instead of date", "2028-11-01T00:00:00Z"],
    ["date-time with the Vietnam offset", "2028-11-01T00:00:00+07:00"],
    ["empty string", ""],
    ["compact digits as a number", 20281101],
    ["null", null]
  ]) {
    const tampered = structuredClone(payload);
    tampered.data[0].expiry_date = value;
    // The manifest would also drift; recompute it so that only the property can be the reason of the failure.
    tampered.meta.manifest_sha256 = manifestSha256(tampered);
    assert.throws(() => validatePayload(tampered), /date|expected string/, `${relative}: ${label} must be rejected`);
  }

  const absentIsValid = structuredClone(payload);
  for (const item of absentIsValid.data) delete item.expiry_date;
  absentIsValid.meta.manifest_sha256 = manifestSha256(absentIsValid);
  validatePayload(absentIsValid);
}

validatePayload(parseJson("examples/api/x03b/stock-balances.response.json"));
validatePayload(parseJson("contract-tests/x03b/fixtures/stock-balances.response.fixture.json"));

console.log("X03B stock-balance expiry_date contract PASS: optional date, 2 payloads, 9 tamper cases each, absence valid.");
