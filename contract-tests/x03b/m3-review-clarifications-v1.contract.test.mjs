import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// NM3-32c (f, g): clarifications that answer the second M3 review with what the ops-core code does. They are wording only: they add no
// wire field, no status code and no operation, and they change no value. The test pins the sentences so that they are not lost, and the
// values they explain so that nobody "fixes" the wording by changing a value.
const root = path.resolve(import.meta.dirname, "../..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8").replace(/\r\n?/g, "\n");
const flat = text => text.replace(/\s+/g, " ");
const json = relative => JSON.parse(read(relative));

function assertPhrases(label, text, phrases) {
  const haystack = flat(text);
  for (const phrase of phrases) assert.ok(haystack.includes(phrase), `${label} must say: ${phrase}`);
}

function section(text, heading) {
  const start = text.indexOf(heading);
  assert.notEqual(start, -1, `missing section ${heading}`);
  const next = text.indexOf("\n## ", start + heading.length);
  return text.slice(start, next === -1 ? undefined : next);
}

const skuNotes = read("docs/m3-sku-catalog-integration-notes.md");
const skuYaml = read("openapi/ops-core/sku.v1.yaml");
const listBlock = skuYaml.slice(skuYaml.indexOf("\n  /v1/skus:\n"), skuYaml.indexOf("\n  /v1/skus/{skuId}:\n"));
const skuSchema = json("schemas/product/sku.schema.json");

// ---- (f1) C2, C3, C7: lifecycle, sku_code, transitions ------------------------------------------------------------------------------
{
  const lifecycle = section(skuNotes, "## 2. SKU lifecycle as ops-core stores and publishes it");
  assertPhrases("notes section 2", lifecycle, [
    "ck_ref_sku_status",
    "ACTIVE_BASELINE, ACTIVE, INACTIVE and RETIRED",
    "`GET /v1/skus` does not hide a SKU by its status",
    "filters only when `lifecycle_status` is sent",
    "ACTIVE_BASELINE is published as ACTIVE",
    "The other five values of the enum (DRAFT, PENDING_CONFIG, PENDING_EVIDENCE, READY, BLOCKED) have never been published",
    "DRAFT, PENDING_READINESS and BLOCKED",
    "statuses of the product activation",
    "not of the SKU lifecycle",
    "INACTIVE and ACTIVE can alternate",
    "RETIRED is final",
    "SKU_RETIRED_TERMINAL",
    "`SKU_NOT_ACTIVE`",
    "`sellable_quantity` is 0",
    "`available_quantity` stays the physical stock",
    "does not filter stock balances by the status of the SKU",
    "still answers 200 for a RETIRED SKU"
  ]);
  const code = section(skuNotes, "## 3. `sku_code` does not change on a `sku_id`");
  assertPhrases("notes section 3", code, [
    "No operation of the API changes a `sku_code`",
    "SKU_CODE_IMMUTABLE",
    "unique",
    "deliberate migration",
    "drops the trigger",
    "M3 is told before",
    "`updated_at`"
  ]);

  assertPhrases("listSkusV1", listBlock, [
    "never hides a SKU by its status",
    "four stored states",
    "ACTIVE_BASELINE, ACTIVE, INACTIVE and RETIRED",
    "PENDING_READINESS",
    "statuses of the product activation"
  ]);
  assertPhrases("sku.schema.json lifecycle_status", skuSchema.properties.lifecycle_status.description, [
    "ACTIVE_BASELINE",
    "INACTIVE and ACTIVE can alternate",
    "RETIRED is final",
    "docs/m3-sku-catalog-integration-notes.md"
  ]);
  // The values themselves are untouched.
  assert.deepEqual(skuSchema.properties.lifecycle_status.enum, ["DRAFT", "PENDING_CONFIG", "PENDING_EVIDENCE", "READY", "ACTIVE", "INACTIVE", "RETIRED", "BLOCKED"]);
  const lifecycleEnum = read("enums/product/sku-lifecycle-status.yaml");
  assert.match(lifecycleEnum, /^ops_core_provider_behavior:$/m, "the lifecycle enum file must carry the provider behavior block");
  assertPhrases("sku-lifecycle-status.yaml", lifecycleEnum, ["SKU_RETIRED_TERMINAL", "SKU_CODE_IMMUTABLE", "INACTIVE and ACTIVE can alternate"]);
}

// ---- (f2) C9: quantities can be fractional up to three decimals ------------------------------------------------------------------
{
  const allocationNotes = read("docs/m3-allocation-integration-notes.md");
  const quantities = section(allocationNotes, "## 8. Quantities: whole numbers are not guaranteed");
  assertPhrases("allocation notes section 8", quantities, [
    "`numeric(18,3)`",
    "no whole-number constraint",
    "fractional, up to three decimal places",
    "`requested_quantity`",
    "does NOT guarantee a whole number",
    "KHO-Q1",
    "is NOT applied by the provider today",
    "UNKNOWN_BLOCKED",
    "tell M3 before"
  ]);

  const quantity = json("schemas/ops/x03b/external-quantity.schema.json");
  assert.equal(quantity.properties.value.pattern, "^-?(0|[1-9][0-9]*)(\\.[0-9]{1,3})?$", "the pattern is the contract and is untouched");
  assertPhrases("external-quantity.schema.json", `${quantity.description} ${quantity.properties.value.description}`, [
    "at most three decimal places",
    "NOT guaranteed to be a whole number",
    "hộp",
    "thùng",
    "KHO-Q1",
    "docs/m3-allocation-integration-notes.md section 8"
  ]);

  const status = json("schemas/ops/sellable-status.schema.json");
  const patternOfStatus = "^(?:0|[1-9][0-9]{0,14})(?:\\.[0-9]{1,3})?$";
  for (const field of ["available_quantity", "sellable_quantity"]) {
    assert.equal(status.properties[field].pattern, patternOfStatus, `${field} pattern is untouched`);
    assertPhrases(`sellable-status ${field}`, status.properties[field].description, ["fractional", "up to three decimal places", "not guaranteed to be whole", "docs/m3-allocation-integration-notes.md section 8"]);
  }
}

// ---- (g) item_type FINISHED_GOOD (singular) is not warehouse_type FINISHED_GOODS (plural) ---------------------------------------------
{
  const stockBalance = json("schemas/ops/x03b/external-stock-balance.schema.json");
  assert.deepEqual(stockBalance.properties.item_type.enum, ["FINISHED_GOOD"], "item_type stays singular");
  const externalWarehouse = json("schemas/ops/x03b/external-warehouse.schema.json");
  const domainWarehouse = json("schemas/ops/warehouse.schema.json");
  assert.deepEqual(externalWarehouse.properties.warehouse_type.enum, ["RAW_MATERIAL", "FINISHED_GOODS"], "warehouse_type stays plural");
  assert.deepEqual(domainWarehouse.properties.warehouse_type.enum, ["RAW_MATERIAL", "FINISHED_GOODS"]);
  const phrases = ["FINISHED_GOOD", "FINISHED_GOODS", "singular", "plural", "not the same string", "byte for byte", "never normalise"];
  assertPhrases("stock-balance item_type", stockBalance.properties.item_type.description, phrases);
  assertPhrases("external-warehouse warehouse_type", externalWarehouse.properties.warehouse_type.description, phrases);
  assertPhrases("warehouse warehouse_type", domainWarehouse.properties.warehouse_type.description, phrases);
  const allocationNotes = read("docs/m3-allocation-integration-notes.md");
  const spellings = section(allocationNotes, "## 9. Two spellings that look alike: `item_type` and `warehouse_type`");
  assertPhrases("allocation notes section 9", spellings, [
    "`item_type` is `FINISHED_GOOD` (singular)",
    "`warehouse_type` is `FINISHED_GOODS` (plural)",
    "different vocabularies",
    "Both strings stay as they are",
    "never normalise one into the other",
    "no change of value"
  ]);
}

console.log("X03B M3 review clarifications PASS: (f1) lifecycle, sku_code and transitions; (f2) quantities; (g) item_type versus warehouse_type.");
