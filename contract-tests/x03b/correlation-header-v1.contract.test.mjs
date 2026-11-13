import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

// NM3-32c (c): the X-Correlation-Id rule of docs/correlation-audit-standard.md is machine readable in the OpenAPI of every
// service-bearer external operation: an optional request header and a response header on the success answers. Wording and metadata
// only: the provider has applied this rule to every external operation since before SKU-M12-03.
const root = path.resolve(import.meta.dirname, "../..");
const normalize = text => text.replace(/\r\n?/g, "\n");
const readText = relative => normalize(fs.readFileSync(path.join(root, relative), "utf8"));

const PATTERN = "^[A-Za-z0-9:_.-]{1,128}$";
const PARAMETER_REF = '- $ref: "#/components/parameters/CorrelationId"';
const HEADER_LINE = 'X-Correlation-Id: { $ref: "#/components/headers/CorrelationId" }';

// Every operation whose x04d row is SERVICE_BEARER, plus the token endpoint (anonymous bootstrap, same rule).
const x04dText = readText("contract-tests/x04d/external-runtime-v1-security.contract.test.mjs");
const x04dServiceOperations = [...x04dText.matchAll(/\{ file: "([^"]+)", operationId: "([^"]+)", authClass: "SERVICE_BEARER"/g)]
  .map(match => ({ file: `openapi/ops-core/${match[1]}`, operationId: match[2] }));
// The X04D inventory (17 service-bearer rows) does not list the snapshot reads; they are service-bearer operations all the same.
const snapshotReads = [
  ["inventory.v1.yaml", ["listStockBalancesV1", "listInventoryLedgerV1", "listStockAlertsV1", "listInventoryAllocationsV1"]],
  ["warehouse.v1.yaml", ["listWarehousesV1", "listWarehouseLocationsV1", "listWarehouseReceiptsV1"]],
  ["sku.v1.yaml", ["listSkusV1"]]
].flatMap(([file, ids]) => ids.map(operationId => ({ file: `openapi/ops-core/${file}`, operationId })));
const serviceOperations = [...x04dServiceOperations, ...snapshotReads];
const operations = [...serviceOperations, { file: "openapi/ops-core/service-auth.v1.yaml", operationId: "issueServiceTokenV1", tokenOnly: true }];

function operationBlock(text, operationId) {
  const lines = text.split("\n");
  const line = lines.findIndex(candidate => candidate.trim() === `operationId: ${operationId}`);
  assert.notEqual(line, -1, `missing operationId ${operationId}`);
  let start = line;
  while (start >= 0 && !/^    (get|post|put|patch|delete):$/.test(lines[start])) start -= 1;
  let end = lines.length;
  for (let index = line + 1; index < lines.length; index += 1) {
    if (/^    (get|post|put|patch|delete):$/.test(lines[index]) || /^  \/|^components:/.test(lines[index])) { end = index; break; }
  }
  return lines.slice(start, end).join("\n");
}

function successResponses(block) {
  const lines = block.split("\n");
  const found = [];
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^        "(20\d)":\s*$/);
    if (!match) continue;
    let end = lines.length;
    for (let next = index + 1; next < lines.length; next += 1) {
      if (/^        "\d{3}":/.test(lines[next])) { end = next; break; }
    }
    found.push({ status: match[1], text: lines.slice(index, end).join("\n") });
  }
  return found;
}

function componentBlock(text, section, name) {
  const lines = text.split("\n");
  const components = lines.findIndex(line => line === "components:");
  const sectionLine = lines.findIndex((line, index) => index > components && line === `  ${section}:`);
  assert.ok(sectionLine > components, `components.${section} missing`);
  const start = lines.findIndex((line, index) => index > sectionLine && line === `    ${name}:`);
  assert.ok(start > sectionLine, `components.${section}.${name} missing`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^    [A-Za-z][A-Za-z0-9]*:/.test(lines[index]) || /^  [A-Za-z][A-Za-z0-9]*:/.test(lines[index])) { end = index; break; }
  }
  return lines.slice(start, end).join("\n");
}

function assertOperation(operation, textOverride) {
  const text = normalize(textOverride ?? readText(operation.file));
  const parameter = componentBlock(text, "parameters", "CorrelationId");
  assert.match(parameter, /^      name: X-Correlation-Id$/m, `${operation.file} parameter name`);
  assert.match(parameter, /^      in: header$/m, `${operation.file} parameter location`);
  assert.match(parameter, /^      required: false$/m, `${operation.file} parameter must be optional`);
  assert.ok(parameter.includes(`pattern: "${PATTERN}"`), `${operation.file} parameter pattern drift`);
  assert.match(parameter, /not\s+an\s+error/, `${operation.file} must say a bad value is not an error`);
  assert.match(parameter, /generates\s+a\s+UUID/, `${operation.file} must say the provider generates a UUID`);
  const header = componentBlock(text, "headers", "CorrelationId");
  assert.ok(header.includes(`pattern: "${PATTERN}"`), `${operation.file} header schema pattern drift`);
  assert.match(header, /description:/, `${operation.file} header description`);

  const block = operationBlock(text, operation.operationId);
  assert.equal(block.split(PARAMETER_REF).length - 1, 1, `${operation.operationId} must reference the CorrelationId parameter exactly once`);
  const successes = successResponses(block);
  assert.ok(successes.length >= 1, `${operation.operationId} has no success response`);
  for (const success of successes) {
    assert.ok(success.text.includes(HEADER_LINE), `${operation.operationId} ${success.status} must declare the X-Correlation-Id response header`);
  }
  if (operation.tokenOnly) {
    assert.match(parameter, /header\s+only/, "the token endpoint 200 has no envelope, so the id comes back in the header only");
  }
}

// 1. Coverage: all 25 service-bearer operations of the X04D inventory plus the token endpoint, and nothing dropped silently.
assert.equal(x04dServiceOperations.length, 17, "the X04D inventory has 17 service-bearer rows");
assert.equal(serviceOperations.length, 25, "17 X04D rows + 8 snapshot reads = 25 service-bearer operations");
assert.equal(new Set(operations.map(operation => operation.operationId)).size, 26);
for (const operation of operations) assertOperation(operation);

// 2. The pattern is the one of the written rule, identically in every file that declares it.
const standard = readText("docs/correlation-audit-standard.md");
assert.ok(standard.includes(`\`${PATTERN}\``), "docs/correlation-audit-standard.md must carry the same pattern");
for (const file of new Set(operations.map(operation => operation.file))) {
  assert.equal(readText(file).split(`pattern: "${PATTERN}"`).length - 1 >= 1, true, `${file} declares the pattern`);
}

// 3. The operator operations and the other files keep their shape: nothing outside the 26 was touched by accident.
for (const [file, operationId] of [["openapi/ops-core/misa-handoff.v1.yaml", "createMisaHandoffV1"], ["openapi/ops-core/recall-sale-lock.v1.yaml", "createRecallCaseV1"]]) {
  assert.doesNotMatch(operationBlock(readText(file), operationId), /CorrelationId/, `${operationId} is an operator operation and stays as it was`);
}

// 4. Tamper cases: each way to lose the rule must be red.
const skuOperation = operations.find(operation => operation.operationId === "getSkuV1");
const skuText = readText(skuOperation.file);
const skuBlock = operationBlock(skuText, "getSkuV1");
for (const [label, mutate, failure] of [
  ["parameter reference removed", text => text.replace(skuBlock, skuBlock.replace(PARAMETER_REF, "- $ref: \"#/components/parameters/SkuId\"")), /exactly once/],
  ["response header removed", text => text.replace(skuBlock, skuBlock.replace(HEADER_LINE, "X-Other: { $ref: \"#/components/headers/CorrelationId\" }")), /response header/],
  ["pattern widened", text => text.replaceAll(`pattern: "${PATTERN}"`, 'pattern: "^.*$"'), /pattern drift/],
  ["parameter made required", text => text.replace(/(    CorrelationId:\n      name: X-Correlation-Id\n      in: header\n      required: )false/, "$1true"), /must be optional/],
  ["parameter location changed", text => text.replace(/(    CorrelationId:\n      name: X-Correlation-Id\n      in: )header/, "$1query"), /parameter location/]
]) {
  const mutated = mutate(skuText);
  assert.notEqual(mutated, skuText, `${label}: tamper setup failed`);
  assert.throws(() => assertOperation(skuOperation, mutated), failure, `${label} must be rejected`);
}

console.log(`X03B correlation header contract PASS: ${operations.length} operations declare the optional X-Correlation-Id request header and the success response header, 5 tamper cases.`);
