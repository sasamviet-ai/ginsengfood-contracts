import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import fs from "node:fs";
import path from "node:path";

// Webhook security profile (ops-core SEC-12 / SEC-13): docs/webhook-security.md, the closed stock-alert webhook
// projection, the field lists of the inventory events, the bounded sale-lock reason, the signature test vector and
// the answers table. Prose cannot be run, so what can be checked is checked: the vector is recomputed, the grammar
// is executed, the documented field lists are compared with the schemas, and every guarantee has a tamper case.

const root = path.resolve(import.meta.dirname, "../..");
const normalizeNewlines = text => text.replace(/\r\n?/g, "\n");
const read = relative => normalizeNewlines(fs.readFileSync(path.join(root, relative), "utf8"));
const parseJson = relative => JSON.parse(read(relative));
const exists = relative => fs.existsSync(path.join(root, relative));
const clone = value => structuredClone(value);

// ---------------------------------------------------------------------------------------------------------
// Minimal JSON Schema validator: the subset the schemas under test use, plus if/then and code-point maxLength.
// ---------------------------------------------------------------------------------------------------------
function resolveRef(ref, schemaFile) {
  const [relative, fragment] = ref.split("#", 2);
  const target = relative ? path.resolve(path.dirname(schemaFile), relative) : schemaFile;
  let schema = JSON.parse(fs.readFileSync(target, "utf8"));
  if (fragment) {
    assert.match(fragment, /^\//, `unsupported JSON pointer fragment: #${fragment}`);
    for (const token of fragment.slice(1).split("/")) {
      schema = schema[token.replaceAll("~1", "/").replaceAll("~0", "~")];
      assert.ok(schema, `unresolved JSON pointer #${fragment} in ${ref}`);
    }
  }
  return { schema, file: target };
}

function validateSchema(schema, value, schemaFile, location = "$") {
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, schemaFile);
    return validateSchema(resolved.schema, value, resolved.file, location);
  }
  for (const part of schema.allOf ?? []) validateSchema(part, value, schemaFile, location);
  if (schema.if) {
    let conditionMet = true;
    try {
      validateSchema(schema.if, value, schemaFile, location);
    } catch {
      conditionMet = false;
    }
    if (conditionMet && schema.then) validateSchema(schema.then, value, schemaFile, location);
  }
  if (schema.not) {
    let matchesNot = true;
    try {
      validateSchema(schema.not, value, schemaFile, location);
    } catch {
      matchesNot = false;
    }
    assert.ok(!matchesNot, `${location} must not match the "not" schema`);
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
    const length = [...value].length;
    if (schema.minLength !== undefined) assert.ok(length >= schema.minLength, `${location} minLength`);
    if (schema.maxLength !== undefined) assert.ok(length <= schema.maxLength, `${location} maxLength ${schema.maxLength}, got ${length}`);
    if (schema.format === "date-time") assert.ok(value.includes("T") && Number.isFinite(Date.parse(value)), `${location} date-time`);
  }
  if (Array.isArray(value) && schema.items) {
    value.forEach((item, index) => validateSchema(schema.items, item, schemaFile, `${location}[${index}]`));
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

function validateEvent(eventRelative, payload) {
  const file = path.join(root, eventRelative);
  validateSchema(JSON.parse(fs.readFileSync(file, "utf8")), payload, file);
}

function rejects(label, fn, pattern) {
  assert.throws(fn, pattern ?? /./, `${label} must be rejected`);
}

// ---------------------------------------------------------------------------------------------------------
// Doc helpers.
// ---------------------------------------------------------------------------------------------------------
const security = read("docs/webhook-security.md");
const transport = read("docs/webhook-transport.md");

function section(text, number) {
  const start = text.indexOf(`\n## ${number}. `);
  assert.notEqual(start, -1, `missing section ${number}`);
  const next = text.indexOf("\n## ", start + 1);
  return text.slice(start, next === -1 ? undefined : next);
}

function tableRows(text) {
  return text.split("\n").filter(line => line.startsWith("| ") && !/^\| ?-/.test(line)).map(line => line.split("|").slice(1, -1).map(cell => cell.trim()));
}

const backticked = text => [...text.matchAll(/`([^`]+)`/g)].map(match => match[1]);

// ---------------------------------------------------------------------------------------------------------
// 1. The specification states every rule SEC-13 asks for.
// ---------------------------------------------------------------------------------------------------------
const headersSection = section(security, 2);
for (const header of ["X-Outbox-Event-Id", "X-Idempotency-Key", "X-Correlation-Id", "X-Webhook-Timestamp", "X-Webhook-Key-Version", "X-Webhook-Signature"]) {
  assert.ok(tableRows(headersSection).some(row => row[0] === `\`${header}\``), `header table must list ${header}`);
}
const signatureSection = section(security, 3);
assert.ok(signatureSection.includes('"{timestamp}\\n{eventId}\\n" + raw body'), "signature section states the signed string");
assert.match(signatureSection, /HMAC-SHA256/);
assert.match(signatureSection, /never parse the JSON and serialize it again/);

const checksSection = section(security, 5);
const normalizedChecks = checksSection.replace(/\s+/g, " ");
assert.match(normalizedChecks, /\*\*65 536 bytes \(64 KiB\)\*\*/, "body cap");
assert.match(normalizedChecks, /\*\*300 seconds\*\*/, "clock skew window");
assert.match(normalizedChecks, /\*\*atomic\*\* insert-if-absent on a unique key/, "atomic dedupe");
assert.match(normalizedChecks, /at least 24 hours/, "dedupe retention");
assert.match(normalizedChecks, /constant-time comparison/);
assert.match(normalizedChecks, /Record only after steps 3 and 4 passed/, "dedupe store is written only after authentication");
assert.ok(
  checksSection.indexOf("**Body size.**") < checksSection.indexOf("**Signature.**") &&
    checksSection.indexOf("**Signature.**") < checksSection.indexOf("**Clock skew.**") &&
    checksSection.indexOf("**Clock skew.**") < checksSection.indexOf("**Deduplication.**"),
  "checks are listed in the order size, signature, skew, deduplication"
);
assert.match(section(security, 4).replace(/\s+/g, " "), /at most \*\*two\*\* keys/, "receiver accepts two keys during rotation");
assert.match(section(security, 4).replace(/\s+/g, " "), /once that variable is set, does not move.*While that variable is unset the provider falls back to the version label shared with those other secrets, and then the label does move with them/, "the label is separate only once its own variable is set");

// Answers table: what the receiver says and what the provider does.
const answers = new Map(tableRows(section(security, 6)).slice(1).map(row => [row[0], row[2]]));
const answerFor = code => [...answers.entries()].find(([key]) => key.includes(code))?.[1];
assert.match(answerFor("`2xx`"), /^Delivered/, "2xx is delivered");
assert.match(answerFor("`401`"), /Not retried.*Dead-letter immediately/, "401 is not retried");
assert.match(answerFor("`413`"), /Not retried.*Dead-letter immediately/, "413 is not retried");
assert.match(answerFor("`5xx`"), /^Retried/, "5xx is retried");
assert.match(answerFor("`3xx`"), /Not followed/, "3xx is not followed");
assert.match(answerFor("Any other `4xx`"), /Not retried/, "other 4xx is not retried");
assert.match(transport, /`401` and `413` included/, "transport doc table names 401 and 413");
assert.match(transport, /`3xx` \| \*\*Not followed\*\*/, "transport doc table names 3xx");
assert.match(transport, /webhook-security\.md/, "transport doc points to the security profile");
assert.match(read("asyncapi/README.md"), /webhook-security\.md/, "asyncapi README points to the security profile");
assert.match(read("contract-tests/README.md"), /webhook-security-v1\.contract\.test\.mjs/, "contract-tests README lists this test");
assert.match(read(".github/workflows/contract-validation.yml"), /webhook-security-v1\.contract\.test\.mjs/, "CI runs this test");

// Redirects: all four statuses named, none followed.
const redirects = section(security, 7).replace(/\s+/g, " ");
assert.match(redirects, /does not follow redirects/);
for (const status of ["301", "302", "307", "308"]) assert.ok(redirects.includes(`\`${status}\``), `redirect section names ${status}`);

// ---------------------------------------------------------------------------------------------------------
// 2. Signature test vector: recomputed here, so the published value cannot drift from the algorithm.
// ---------------------------------------------------------------------------------------------------------
const vectorRows = new Map(tableRows(signatureSection).map(row => [row[0], backticked(row[1])[0]]));
const vectorKey = vectorRows.get("Key (base64)");
const vectorTimestamp = vectorRows.get("`X-Webhook-Timestamp`");
const vectorEventId = vectorRows.get("`X-Outbox-Event-Id`");
const vectorSignature = vectorRows.get("Expected `X-Webhook-Signature`");
assert.ok(vectorKey && vectorTimestamp && vectorEventId && vectorSignature, "test vector rows present");
const vectorBodyMatch = signatureSection.match(/Raw body of the vector[^\n]*\n\n```\n([^\n]+)\n```/);
assert.ok(vectorBodyMatch, "vector body present");
const vectorBody = vectorBodyMatch[1];
const sign = (keyBase64, timestamp, eventId, body) =>
  `v1=${createHmac("sha256", Buffer.from(keyBase64, "base64")).update(Buffer.from(`${timestamp}\n${eventId}\n`, "utf8")).update(Buffer.from(body, "utf8")).digest("hex")}`;
assert.equal(sign(vectorKey, vectorTimestamp, vectorEventId, vectorBody), vectorSignature, "published signature must equal the recomputed one");
assert.equal(Buffer.from(vectorKey, "base64").length, 32, "vector key is 32 bytes");
assert.notEqual(sign(vectorKey, vectorTimestamp, vectorEventId, vectorBody.replace("12.5", "12.6")), vectorSignature, "tamper: a changed body changes the signature");
assert.notEqual(sign(vectorKey, String(Number(vectorTimestamp) + 1), vectorEventId, vectorBody), vectorSignature, "tamper: a changed timestamp changes the signature");
assert.notEqual(sign(vectorKey, vectorTimestamp, vectorEventId.replace("3f2b", "3f2c"), vectorBody), vectorSignature, "tamper: a changed event id changes the signature");

// Reference receiver: steps 1 to 4 of section 5 executed on the published vector, so the numbers in the prose are
// behaviour and not only words. The skew window and the body cap are read from the document itself.
const skewWindow = Number(checksSection.match(/\*\*(\d+) seconds\*\*/)[1]);
const bodyCap = Number(checksSection.match(/\*\*([\d ]+) bytes \(64 KiB\)\*\*/)[1].replaceAll(" ", ""));
assert.equal(skewWindow, 300);
assert.equal(bodyCap, 65536);
function receive({ now, timestamp, eventId, signature, version, body, keys }) {
  if (Buffer.byteLength(body, "utf8") > bodyCap) return 413;
  if (!/^\d+$/.test(timestamp) || !/^[0-9a-f-]{36}$/.test(eventId) || !signature.startsWith("v1=")) return 401;
  const ordered = [...keys.filter(entry => entry.version === version), ...keys.filter(entry => entry.version !== version)];
  if (!ordered.some(entry => sign(entry.key, timestamp, eventId, body) === signature)) return 401;
  return Math.abs(now - Number(timestamp)) > skewWindow ? 401 : 200;
}
const goodKey = { version: "v1", key: vectorKey };
const otherKey = { version: "v2", key: Buffer.alloc(32, 9).toString("base64") };
const base = { timestamp: vectorTimestamp, eventId: vectorEventId, signature: vectorSignature, version: "v1", body: vectorBody, keys: [goodKey] };
const at = Number(vectorTimestamp);
assert.equal(receive({ ...base, now: at }), 200);
for (const offset of [299, -299, 300, -300]) assert.equal(receive({ ...base, now: at + offset }), 200, `receiver clock ${offset} s off is inside the window`);
for (const offset of [301, -301, 3600]) assert.equal(receive({ ...base, now: at + offset }), 401, `receiver clock ${offset} s off is outside the window`);
assert.equal(receive({ ...base, now: at, keys: [otherKey] }), 401, "wrong key");
assert.equal(receive({ ...base, now: at, version: "v9", keys: [otherKey, goodKey] }), 200, "unknown label: any configured key may verify (rotation with two keys)");
assert.equal(receive({ ...base, now: at, version: "v2", keys: [otherKey, goodKey] }), 200, "a wrong label is a hint, not a verdict");
assert.equal(receive({ ...base, now: at, body: vectorBody.replace("12.5", "12.6") }), 401, "changed body");
assert.equal(receive({ ...base, now: at, timestamp: "abc" }), 401, "malformed timestamp");
assert.equal(receive({ ...base, now: at, body: `${vectorBody}${" ".repeat(bodyCap)}` }), 413, "oversize body is 413 before anything else");
assert.equal(receive({ ...base, now: at, body: "\u00e9".repeat(bodyCap / 2 + 1) }), 413, "the cap counts bytes, not characters");
const vectorEvent = JSON.parse(vectorBody);
assert.equal(vectorEvent.eventId, vectorEventId, "vector body eventId equals X-Outbox-Event-Id");
validateEvent("events/ops-core/inventory/inventory-available-changed.v1.json", vectorEvent);

// ---------------------------------------------------------------------------------------------------------
// 3. X-Webhook-Key-Version grammar: executed, not just quoted.
// ---------------------------------------------------------------------------------------------------------
const grammar = backticked(section(security, 4)).find(token => token.startsWith("^["));
assert.equal(grammar, "^[A-Za-z0-9][A-Za-z0-9._-]{0,31}$", "grammar stated in section 4");
const labelPattern = new RegExp(grammar);
for (const label of ["v1", "v2", "1", "A", "2026-11.rot_1", "a".repeat(32)]) assert.match(label, labelPattern, `${label} is a valid label`);
for (const label of ["", "v 1", "-v1", "v1/2", "v1\r\nX-Injected: 1", "vault://ops/key", "a".repeat(33)]) assert.doesNotMatch(label, labelPattern, `${JSON.stringify(label)} is not a valid label`);

// ---------------------------------------------------------------------------------------------------------
// 4. Inventory payload field lists: documented, closed in the schema, and the six planning fields cannot ride along.
// ---------------------------------------------------------------------------------------------------------
const planningFields = ["risk_calculation", "lead_time_days", "coverage_days", "recommended_action", "guard_block_reasons", "evidence_refs"];
const neverSent = [...planningFields, "available_stock_breakdown"];
const webhookSchemaFile = "schemas/ops/stock-alert-webhook.schema.json";
const webhookSchema = parseJson(webhookSchemaFile);
const domainSchema = parseJson("schemas/ops/stock-alert.schema.json");
const balanceSchema = parseJson("schemas/ops/stock-balance.schema.json");

assert.equal(webhookSchema.additionalProperties, false, "the webhook projection is closed");
assert.deepEqual(webhookSchema.required, ["stock_alert_id"]);
for (const [name, definition] of Object.entries(webhookSchema.properties)) {
  assert.deepEqual(definition, { $ref: `stock-alert.schema.json#/properties/${name}` }, `${name} reuses the domain definition`);
  assert.ok(Object.hasOwn(domainSchema.properties, name), `${name} exists in the domain schema`);
}
for (const field of neverSent) assert.ok(!Object.hasOwn(webhookSchema.properties, field), `${field} must not be a webhook property`);
assert.ok(neverSent.every(field => Object.hasOwn(domainSchema.properties, field)), "the domain schema is not narrowed");
assert.deepEqual(
  Object.keys(domainSchema.properties).filter(key => !Object.hasOwn(webhookSchema.properties, key)).sort(),
  [...neverSent].sort(),
  "the projection drops exactly the seven listed fields of the domain schema"
);

const inventoryRows = tableRows(section(security, 8)).filter(row => row[0].startsWith("`ops-core.inventory."));
assert.equal(inventoryRows.length, 3, "three inventory events are listed");
const documented = Object.fromEntries(inventoryRows.map(row => [row[0].replaceAll("`", ""), row]));
const keysOf = cell => backticked(cell).filter(token => /^[a-z_]+$/.test(token));
const availableKeys = keysOf(documented["ops-core.inventory.inventory-available-changed.v1"][1]);
const belowKeys = keysOf(documented["ops-core.inventory.stock-below-threshold.v1"][1]);
assert.match(documented["ops-core.inventory.stockout-risk-detected.v1"][1], /the same as `stock-below-threshold`, with `stockout_risk_threshold` in place of `yellow_threshold` or `red_threshold`/);
assert.ok(belowKeys.includes("yellow_threshold") && belowKeys.includes("red_threshold"), "stock-below-threshold documents both threshold names");
const stockoutKeys = [...belowKeys.filter(key => key !== "yellow_threshold" && key !== "red_threshold"), "stockout_risk_threshold"];
assert.deepEqual([...availableKeys].sort(), ["available_quantity", "last_ledger_entry_id", "sku_id", "stock_balance_id"]);
for (const key of availableKeys) assert.ok(Object.hasOwn(balanceSchema.properties, key), `${key} exists in the stock-balance schema`);
for (const key of [...belowKeys, ...stockoutKeys]) assert.ok(Object.hasOwn(webhookSchema.properties, key), `${key} exists in the webhook projection`);
for (const key of [...belowKeys, ...stockoutKeys, ...availableKeys]) assert.ok(!neverSent.includes(key), `${key} is documented as sent and as never sent`);
assert.deepEqual(
  [...new Set([...belowKeys, ...stockoutKeys])].sort(),
  Object.keys(webhookSchema.properties).sort(),
  "documented alert keys are exactly the projection"
);
const thresholdProse = section(security, 8).replace(/\s+/g, " ");
assert.match(thresholdProse, /`STOCK_YELLOW_ALERT` carries `yellow_threshold`, `STOCK_RED_ALERT` carries `red_threshold`, exactly one of the two/, "threshold is named after the status");
assert.deepEqual(
  webhookSchema.allOf,
  [
    { if: { properties: { status: { const: "STOCK_RED_ALERT" } }, required: ["status"] }, then: { required: ["red_threshold"], not: { required: ["yellow_threshold"] } } },
    { if: { properties: { status: { const: "STOCK_YELLOW_ALERT" } }, required: ["status"] }, then: { required: ["yellow_threshold"], not: { required: ["red_threshold"] } } }
  ],
  "the closed projection ties the threshold name to the status"
);
const statusValues = read("enums/ops/stock-alert-status.yaml");
for (const status of ["STOCK_YELLOW_ALERT", "STOCK_RED_ALERT"]) assert.ok(statusValues.includes(`value: ${status}`), `${status} is a published status`);
assert.deepEqual(backticked(section(security, 8).match(/Never sent on a webhook[^\n]*/)[0]).filter(token => /^[a-z_]+$/.test(token)).sort(), [...neverSent].sort(), "never-sent list in the prose");

for (const [eventFile, expectedRequired] of [
  ["events/ops-core/inventory/stock-below-threshold.v1.json", ["stock_alert_id", "sku_id", "warehouse_id", "status", "available_stock"]],
  ["events/ops-core/inventory/stockout-risk-detected.v1.json", ["stock_alert_id", "sku_id", "warehouse_id", "status", "stockout_risk_threshold"]]
]) {
  const schema = parseJson(eventFile);
  assert.deepEqual(schema.properties.data.allOf[0], { $ref: "../../../schemas/ops/stock-alert-webhook.schema.json" }, `${eventFile} validates data with the closed projection`);
  assert.deepEqual(schema.properties.data.allOf[1].required, expectedRequired, `${eventFile} required keys`);
}

// Examples validate, carry none of the seven fields, and each tamper is rejected.
for (const [exampleFile, eventFile] of [
  ["examples/events/stock-below-threshold.v1.example.json", "events/ops-core/inventory/stock-below-threshold.v1.json"],
  ["examples/events/stock-below-threshold-red.v1.example.json", "events/ops-core/inventory/stock-below-threshold.v1.json"],
  ["examples/events/stockout-risk-detected.v1.example.json", "events/ops-core/inventory/stockout-risk-detected.v1.json"]
]) {
  const example = parseJson(exampleFile);
  validateEvent(eventFile, example);
  for (const field of neverSent) assert.ok(!Object.hasOwn(example.data, field), `${exampleFile} must not carry ${field}`);
  assert.deepEqual(Object.keys(example.data).filter(key => !Object.hasOwn(webhookSchema.properties, key)), [], `${exampleFile} data keys are all declared`);

  for (const field of planningFields) {
    const tampered = clone(example);
    tampered.data[field] = field === "guard_block_reasons" || field === "evidence_refs" ? [] : field === "risk_calculation" ? {} : field === "recommended_action" ? "CREATE_PRODUCTION_DEMAND" : 7;
    rejects(`${exampleFile} + ${field}`, () => validateEvent(eventFile, tampered), /is not whitelisted/);
  }
  const withBreakdown = clone(example);
  withBreakdown.data.available_stock_breakdown = {};
  rejects(`${exampleFile} + available_stock_breakdown`, () => validateEvent(eventFile, withBreakdown), /is not whitelisted/);
  const withUnknown = clone(example);
  withUnknown.data.internal_note = "x";
  rejects(`${exampleFile} + unknown key`, () => validateEvent(eventFile, withUnknown), /is not whitelisted/);
  const withNull = clone(example);
  withNull.data.demand_id = null;
  rejects(`${exampleFile} + demand_id null (absent, never null)`, () => validateEvent(eventFile, withNull), /expected string, got null/);
  const withoutRequired = clone(example);
  delete withoutRequired.data.warehouse_id;
  rejects(`${exampleFile} - warehouse_id`, () => validateEvent(eventFile, withoutRequired), /warehouse_id required/);
}

// The threshold is named after the status: each wrong pairing is rejected, each right one passes.
{
  const belowEvent = "events/ops-core/inventory/stock-below-threshold.v1.json";
  const yellowExample = parseJson("examples/events/stock-below-threshold.v1.example.json");
  const redExample = parseJson("examples/events/stock-below-threshold-red.v1.example.json");
  assert.equal(yellowExample.data.status, "STOCK_YELLOW_ALERT");
  assert.equal(redExample.data.status, "STOCK_RED_ALERT");
  assert.ok(Object.hasOwn(yellowExample.data, "yellow_threshold") && !Object.hasOwn(yellowExample.data, "red_threshold"), "yellow example carries yellow_threshold only");
  assert.ok(Object.hasOwn(redExample.data, "red_threshold") && !Object.hasOwn(redExample.data, "yellow_threshold"), "red example carries red_threshold only");

  const redUnderYellowName = clone(redExample);
  redUnderYellowName.data.yellow_threshold = redUnderYellowName.data.red_threshold;
  delete redUnderYellowName.data.red_threshold;
  rejects("red alert with yellow_threshold only (the old provider behaviour)", () => validateEvent(belowEvent, redUnderYellowName), /red_threshold required|must not match the "not" schema/);
  const redWithBoth = clone(redExample);
  redWithBoth.data.yellow_threshold = redWithBoth.data.red_threshold;
  rejects("red alert with both thresholds", () => validateEvent(belowEvent, redWithBoth), /must not match the "not" schema/);
  const yellowWithRedName = clone(yellowExample);
  yellowWithRedName.data.red_threshold = yellowWithRedName.data.yellow_threshold;
  delete yellowWithRedName.data.yellow_threshold;
  rejects("yellow alert with red_threshold only", () => validateEvent(belowEvent, yellowWithRedName), /yellow_threshold required|must not match the "not" schema/);
  const yellowWithBoth = clone(yellowExample);
  yellowWithBoth.data.red_threshold = yellowWithBoth.data.yellow_threshold;
  rejects("yellow alert with both thresholds", () => validateEvent(belowEvent, yellowWithBoth), /must not match the "not" schema/);
}

// ---------------------------------------------------------------------------------------------------------
// 5. Sale-lock reason: at most 200 characters on all three sale-lock events.
// ---------------------------------------------------------------------------------------------------------
for (const eventFile of ["sale-lock-activated", "stop-sale-required", "sale-lock-released"]) {
  const file = `events/ops-core/recall/${eventFile}.v1.json`;
  const reason = parseJson(file).properties.data.allOf[1].properties.reason;
  assert.equal(reason.maxLength, 200, `${file} caps reason at 200`);
  assert.match(reason.description, /webhook-security\.md section 8/);
}
const saleLockExample = parseJson("examples/events/sale-lock-activated.v1.example.json");
const saleLockEvent = "events/ops-core/recall/sale-lock-activated.v1.json";
validateEvent(saleLockEvent, saleLockExample);
const atLimit = clone(saleLockExample);
atLimit.data.reason = "a".repeat(200);
validateEvent(saleLockEvent, atLimit);
const emojiAtLimit = clone(saleLockExample);
emojiAtLimit.data.reason = "\u{1F600}".repeat(200);
validateEvent(saleLockEvent, emojiAtLimit);
const overLimit = clone(saleLockExample);
overLimit.data.reason = "a".repeat(201);
rejects("reason of 201 characters", () => validateEvent(saleLockEvent, overLimit), /maxLength 200, got 201/);
const emojiOverLimit = clone(saleLockExample);
emojiOverLimit.data.reason = "\u{1F600}".repeat(201);
rejects("reason of 201 code points", () => validateEvent(saleLockEvent, emojiOverLimit), /maxLength 200, got 201/);
const reasonSection = section(security, 8).replace(/\s+/g, " ");
assert.match(reasonSection, /at most \*\*200 characters\*\*/);
assert.match(reasonSection, /`UNSPECIFIED`/);
assert.match(reasonSection, /never splits a surrogate pair/);

// ---------------------------------------------------------------------------------------------------------
// 6. Governance records: CHANGELOG carries the entry, with its classification and the order of landing.
// ---------------------------------------------------------------------------------------------------------
const changelog = read("CHANGELOG.md");
const unreleased = changelog.slice(changelog.indexOf("## Unreleased"));
const entryStart = unreleased.indexOf("### Webhook security profile and inventory payload allowlist");
assert.notEqual(entryStart, -1, "CHANGELOG entry present");
const entryEnd = unreleased.indexOf("\n### ", entryStart + 1);
const entry = unreleased.slice(entryStart, entryEnd === -1 ? undefined : entryEnd);
const classification = entry.split("\n\n")[1];
for (const token of ["tightens published event schemas in three ways", "removes seven optional properties", "`maxLength: 200`", "if/then rule", "`yellow_threshold` of a red alert", "needs no `reason` text beyond 200 characters"]) {
  assert.ok(classification.includes(token), `CHANGELOG classification paragraph must mention ${token}`);
}
for (const token of ["docs/webhook-security.md", "stock-alert-webhook.schema.json", "risk_calculation", "NOT live yet", "removes seven optional properties", "no consumer", "reason", "AllowAutoRedirect", "X-Webhook-Key-Version", "red_threshold", "STOCK_RED_ALERT", "stock-below-threshold-red.v1.example.json"]) {
  assert.ok(entry.includes(token), `CHANGELOG entry must mention ${token}`);
}

console.log("Webhook security profile contract PASS: 6 headers, signature vector, key-version grammar, answers table, 3 inventory events, 7 never-sent fields with tamper cases, 3 sale-lock reason caps.");
