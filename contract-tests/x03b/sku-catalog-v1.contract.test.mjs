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

// 2. sellable_uoms: from the ACTIVE trade items; exactly the two codes hộp and thùng, each with its own factor.
const uomSchema = loadSchema(root, "schemas/product/sku-sellable-uom.schema.json");
assert.deepEqual(uomSchema.schema.properties.uom_code.enum, ["hộp", "thùng"], "only hộp and thùng are sellable units");
assert.deepEqual(Object.keys(uomSchema.schema.properties).sort(), ["boxes_per_carton", "units_per_box", "uom_code"]);
assert.equal(uomSchema.schema.additionalProperties, false);
assert.equal(properties.sellable_uoms.type, "array");
assert.equal(properties.sellable_uoms.items.$ref, "sku-sellable-uom.schema.json");
assert.equal(properties.sellable_uoms.maxItems, 2);
assert.equal(properties.sellable_uoms.uniqueItems, true);
assert.ok(!skuSchema.schema.required.includes("sellable_uoms"), "additive change: not required");
assert.match(properties.sellable_uoms.description, /empty array/i);
assert.match(properties.sellable_uoms.description, /never omitted and never null/);
// The code points are fixed: a decomposed (NFD) spelling is a different string.
assert.equal([...uomSchema.schema.properties.uom_code.enum[0]].length, 3, "hộp is 3 code points in NFC");
assert.equal([...uomSchema.schema.properties.uom_code.enum[1]].length, 5, "thùng is 5 code points in NFC");
assert.equal(uomSchema.schema.properties.uom_code.enum[0], "hộp".normalize("NFC"));
assert.equal(uomSchema.schema.properties.uom_code.enum[1], "thùng".normalize("NFC"));

const validateUom = value => validateSchema(uomSchema.schema, value, uomSchema.file, "$.uom");
validateUom({ uom_code: "hộp", units_per_box: 4 });
validateUom({ uom_code: "thùng", boxes_per_carton: 6 });
for (const [label, value] of [
  ["inner pack is not a sellable unit", { uom_code: "gói", units_per_box: 1 }],
  ["jar is not a sellable unit", { uom_code: "lọ", units_per_box: 1 }],
  ["pot is not a sellable unit", { uom_code: "hũ", units_per_box: 1 }],
  ["English spelling", { uom_code: "BOX", units_per_box: 4 }],
  ["upper case", { uom_code: "HỘP", units_per_box: 4 }],
  ["no diacritics", { uom_code: "hop", units_per_box: 4 }],
  ["decomposed (NFD) hộp", { uom_code: "hộp".normalize("NFD"), units_per_box: 4 }],
  ["decomposed (NFD) thùng", { uom_code: "thùng".normalize("NFD"), boxes_per_carton: 6 }],
  ["box without its factor", { uom_code: "hộp" }],
  ["carton without its factor", { uom_code: "thùng" }],
  ["box carrying the carton factor", { uom_code: "hộp", boxes_per_carton: 6 }],
  ["carton carrying the box factor", { uom_code: "thùng", units_per_box: 4 }],
  ["both factors", { uom_code: "hộp", units_per_box: 4, boxes_per_carton: 6 }],
  ["zero factor", { uom_code: "hộp", units_per_box: 0 }],
  ["fractional factor", { uom_code: "thùng", boxes_per_carton: 2.5 }],
  ["string factor", { uom_code: "hộp", units_per_box: "4" }],
  ["extra field", { uom_code: "hộp", units_per_box: 4, gtin: "x" }],
  ["missing uom_code", { units_per_box: 4 }]
]) {
  assert.throws(() => validateUom(value), undefined, `${label} must be rejected`);
}

for (const relative of ["examples/api/x03b/sku.response.json", "contract-tests/x03b/fixtures/sku.response.fixture.json"]) {
  const payload = parseJson(relative);
  assert.ok(Array.isArray(payload.data.sellable_uoms), `${relative} must show sellable_uoms`);
  assert.ok(payload.data.sellable_uoms.length >= 1, `${relative} must show at least one unit`);

  const tooMany = structuredClone(payload);
  tooMany.data.sellable_uoms = [
    { uom_code: "hộp", units_per_box: 4 },
    { uom_code: "thùng", boxes_per_carton: 6 },
    { uom_code: "hộp", units_per_box: 5 }
  ];
  assert.throws(() => validateSkuEnvelope(tooMany), /maxItems/);

  const duplicate = structuredClone(payload);
  duplicate.data.sellable_uoms = [{ uom_code: "hộp", units_per_box: 4 }, { uom_code: "hộp", units_per_box: 4 }];
  assert.throws(() => validateSkuEnvelope(duplicate), /uniqueItems/);

  const innerPack = structuredClone(payload);
  innerPack.data.sellable_uoms = [{ uom_code: "gói", units_per_box: 1 }];
  assert.throws(() => validateSkuEnvelope(innerPack), /oneOf/);

  const notArray = structuredClone(payload);
  notArray.data.sellable_uoms = null;
  assert.throws(() => validateSkuEnvelope(notArray), /expected array, got null/);

  const empty = structuredClone(payload);
  empty.data.sellable_uoms = [];
  validateSkuEnvelope(empty);
}

// The two shipped examples cover both shapes between them: a SKU sold as box and carton, and one sold as box only.
const sellableShapes = ["examples/api/x03b/sku.response.json", "contract-tests/x03b/fixtures/sku.response.fixture.json"]
  .map(relative => parseJson(relative).data.sellable_uoms.map(entry => entry.uom_code).join("+"));
assert.deepEqual(sellableShapes, ["hộp+thùng", "hộp"]);

// 3. GET /v1/skus (listSkusV1): same object as getSkuV1, cursor pagination, two filters, stable order.
const normalize = text => text.replace(/\r\n?/g, "\n");
const readText = relative => normalize(fs.readFileSync(path.join(root, relative), "utf8"));
const skuYaml = readText("openapi/ops-core/sku.v1.yaml");

function pathBlock(text, route) {
  const lines = text.split("\n");
  const start = lines.findIndex(line => line === `  ${route}:`);
  assert.notEqual(start, -1, `missing route ${route}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^  \//.test(lines[index]) || /^components:/.test(lines[index])) { end = index; break; }
  }
  return lines.slice(start, end).join("\n");
}

const listBlock = pathBlock(skuYaml, "/v1/skus");
const getBlock = pathBlock(skuYaml, "/v1/skus/{skuId}");
assert.match(listBlock, /operationId: listSkusV1\b/);
assert.match(getBlock, /operationId: getSkuV1\b/);
assert.doesNotMatch(listBlock, /\n    (post|put|patch|delete):/, "the list route is read only");
assert.match(listBlock, /\$ref: "\.\.\/\.\.\/schemas\/product\/sku\.schema\.json"/, "items are the SkuV1Response object of getSkuV1");

// Same audience, permission, rate bucket and retry policy as getSkuV1: no new permission (SEC-06 ceiling).
const metadata = (block, key) => block.match(new RegExp(`^      ${key}: (.+)$`, "m"))?.[1];
for (const key of ["x-auth-class", "x-token-use", "x-audience", "x-permission", "x-permission-scope", "x-rate-limit-policy", "x-retry-policy"]) {
  assert.ok(metadata(listBlock, key), `listSkusV1 ${key} missing`);
  assert.equal(metadata(listBlock, key), metadata(getBlock, key), `listSkusV1 ${key} must equal getSkuV1`);
}
assert.equal(metadata(listBlock, "x-permission"), "SKU_CATALOG_VIEW");

// Cursor pagination only: no offset, no page number, and exactly the two agreed filters.
const parameterRefs = [...listBlock.matchAll(/^        - \$ref: "#\/components\/parameters\/(\w+)"$/gm)].map(match => match[1]);
const inlineParameters = [...listBlock.matchAll(/^        - name: (\w+)$/gm)].map(match => match[1]);
assert.deepEqual(parameterRefs, ["Cursor", "Limit"]);
assert.deepEqual(inlineParameters, ["lifecycle_status", "updated_since"]);
assert.doesNotMatch(listBlock, /name: (offset|page|pageNumber|pageSize|skip)\b/i);
assert.match(skuYaml, /^    Limit:\n      name: limit\n      in: query\n      required: false\n      schema: \{ type: integer, minimum: 1, maximum: 100, default: 50 \}$/m, "limit is 1..100");
assert.match(listBlock, /x-pagination-policy: ExternalSnapshotCursorV1/);
assert.match(listBlock, /x-stable-sort: "updatedAt ASC, skuId ASC"/);

const lifecycleParameter = listBlock.match(/- name: lifecycle_status\n[\s\S]*?schema: \{ type: string, enum: \[([^\]]+)\] \}/);
assert.ok(lifecycleParameter, "lifecycle_status parameter must be a closed enum");
assert.deepEqual(
  lifecycleParameter[1].split(",").map(value => value.trim()),
  skuSchema.schema.properties.lifecycle_status.enum,
  "the lifecycle_status filter takes exactly the values the SKU object can publish"
);
assert.match(listBlock, /- name: updated_since\n[\s\S]*?schema: \{ type: string, format: date-time \}/);
assert.match(listBlock, /inclusive/i, "the updated_since semantics must be stated");
assert.match(listBlock, /WITH a time\s+zone/, "updated_since must require a time zone");
assert.match(listBlock, /ACTIVE_BASELINE/, "the published/filtered ACTIVE_BASELINE projection must be stated");

// Examples and fixtures: every item is a complete SkuV1Response with the three catalog additions.
const listPayloads = [
  "examples/api/x03b/skus.response.json",
  "contract-tests/x03b/fixtures/skus.response.fixture.json",
  "contract-tests/x03b/fixtures/skus.two-page.page-1.response.fixture.json",
  "contract-tests/x03b/fixtures/skus.two-page.page-2.response.fixture.json"
].map(relative => ({ relative, payload: parseJson(relative) }));
for (const { relative, payload } of listPayloads) {
  assert.equal(payload.meta.resource, "skus", `${relative} resource`);
  assert.equal(payload.meta.delta_supported, false);
  for (const item of payload.data) {
    validateSchema(skuSchema.schema, item, skuSchema.file, `${relative}.data[]`);
    for (const field of ["updated_at", "revision", "sellable_uoms"]) assert.ok(Object.hasOwn(item, field), `${relative} item ${item.sku_code} must show ${field}`);
  }
}

// A tie on updated_at is broken by sku_id, in the full example and across the page boundary of the two-page fixture.
const full = parseJson("examples/api/x03b/skus.response.json").data;
const ties = full.filter((item, index) => index > 0 && item.updated_at === full[index - 1].updated_at);
assert.ok(ties.length >= 1, "the example must contain at least two SKUs sharing updated_at");
for (let index = 1; index < full.length; index += 1) {
  const [left, right] = [full[index - 1], full[index]];
  assert.ok(
    left.updated_at < right.updated_at || (left.updated_at === right.updated_at && left.sku_id < right.sku_id),
    "items are ordered by updated_at then sku_id"
  );
}
assert.ok(full.some(item => item.lifecycle_status === "INACTIVE" && item.sellable_uoms.length === 0), "INACTIVE SKUs are listed; one without trade items shows an empty sellable_uoms");
for (const item of full) assert.ok(["ACTIVE", "INACTIVE", "RETIRED"].includes(item.lifecycle_status), "the provider publishes only three lifecycle values");

const [pageOne, pageTwo] = listPayloads.slice(2).map(entry => entry.payload);
assert.equal(pageOne.meta.complete, false);
assert.equal(typeof pageOne.meta.next_cursor, "string");
assert.equal(pageOne.meta.snapshot_id, pageTwo.meta.snapshot_id);
assert.equal(pageOne.meta.manifest_sha256, pageTwo.meta.manifest_sha256);
const boundary = [pageOne.data.at(-1), pageTwo.data[0]];
assert.equal(boundary[0].updated_at, boundary[1].updated_at, "the page boundary falls inside a tie on updated_at");
assert.ok(boundary[0].sku_id < boundary[1].sku_id, "the tie is broken by sku_id across the boundary");
assert.equal(new Set([...pageOne.data, ...pageTwo.data].map(item => item.sku_id)).size, 2, "no SKU repeats or is lost across the boundary");

const emptyList = parseJson("contract-tests/x03b/fixtures/skus.empty.response.fixture.json");
assert.deepEqual(emptyList.data, []);
assert.equal(emptyList.meta.complete, true);
assert.equal(emptyList.meta.item_count, 0);
assert.equal(emptyList.meta.next_cursor, null);

console.log("X03B SKU catalog contract PASS: updated_at, revision, sellable_uoms and GET /v1/skus (schema, openapi, examples, fixtures, tamper cases).");
