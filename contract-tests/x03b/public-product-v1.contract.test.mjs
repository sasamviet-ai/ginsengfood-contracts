import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "../..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8").replace(/\r\n?/g, "\n");

const approvedFields = [
  "product_id",
  "public_name",
  "public_safe_description",
  "ingredient_public_summary",
  "product_positioning",
  "product_group",
  "content_version"
];

test("public Product/SKU schema is an exact public-safe allowlist", () => {
  const schema = JSON.parse(read("schemas/ops/x03b/external-public-product.schema.json"));
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.required, approvedFields);
  assert.deepEqual(Object.keys(schema.properties), [
    ...approvedFields,
    "dietary_flags",
    "usage_guidance",
    "benefit_phrase"
  ]);
  assert.deepEqual(schema.properties.product_group.enum, ["SEASONAL", "FUNCTIONAL", "NUTRITIOUS"]);

  const forbidden = [
    "sku_id", "sku_code", "lifecycle_status", "activation_status", "sellable_decision",
    "formula", "recipe", "bom", "ratio", "quantity", "cost", "qc", "supplier",
    "source_ref", "evidence_refs", "audit_refs", "claim_whitelist", "forbidden_claims"
  ];
  for (const field of forbidden) assert.equal(schema.properties[field], undefined, `${field} must stay private`);
});

test("all three public operations require the dedicated service permission", () => {
  const product = read("openapi/ops-core/product-master.v1.yaml");
  const sku = read("openapi/ops-core/sku.v1.yaml");
  for (const route of ["/v1/products:", "/v1/products/{productId}:"])
    assert.match(product, new RegExp(route.replace(/[{}]/g, "\\$&")));
  assert.match(sku, /\/v1\/skus\/\{skuId\}\/public:/);

  for (const source of [product, sku]) {
    assert.match(source, /x-auth-class: SERVICE_BEARER/);
    assert.match(source, /x-audience: ginsengfood-ops-core-external-bulk-read-v1/);
    assert.match(source, /x-token-use: service/);
    assert.match(source, /x-permission: PRODUCT_PUBLIC_VIEW/);
    assert.match(source, /x-permission-scope: SERVICE/);
    assert.match(source, /x-rate-limit-policy: ExternalBulkRead/);
    assert.match(source, /x-retry-policy: ExternalBulkReadRetry/);
  }
});
