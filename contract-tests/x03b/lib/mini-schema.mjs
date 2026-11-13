// Minimal JSON Schema 2020-12 subset used by the x03b contract tests that validate examples and fixtures.
// It supports exactly the keywords our schemas use; an unknown keyword is ignored, so keep the schemas inside this subset.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

export function resolveRef(ref, schemaFile) {
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

export function loadSchema(root, relative) {
  const file = path.join(root, relative);
  return { schema: JSON.parse(fs.readFileSync(file, "utf8")), file };
}

export function validateSchema(schema, value, schemaFile, location = "$") {
  if (schema.$ref) {
    const resolved = resolveRef(schema.$ref, schemaFile);
    validateSchema(resolved.schema, value, resolved.file, location);
    // Annotation siblings such as description are ignored; sibling constraints are not used by our schemas.
    return;
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
    if (schema.pattern) assert.match(value, new RegExp(schema.pattern), `${location} pattern`);
    if (schema.format === "uuid") assert.match(value, /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, `${location} uuid`);
    if (schema.format === "date-time") {
      assert.match(value, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/, `${location} date-time`);
      assert.ok(Number.isFinite(Date.parse(value)), `${location} date-time`);
    }
    if (schema.format === "date") {
      assert.match(value, /^\d{4}-\d{2}-\d{2}$/, `${location} date`);
      const parsed = new Date(`${value}T00:00:00Z`);
      assert.ok(Number.isFinite(parsed.getTime()) && parsed.toISOString().startsWith(value), `${location} date`);
    }
  }
  if (typeof value === "number") {
    if (schema.minimum !== undefined) assert.ok(value >= schema.minimum, `${location} minimum`);
    if (schema.maximum !== undefined) assert.ok(value <= schema.maximum, `${location} maximum`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined) assert.ok(value.length >= schema.minItems, `${location} minItems`);
    if (schema.maxItems !== undefined) assert.ok(value.length <= schema.maxItems, `${location} maxItems`);
    if (schema.uniqueItems) {
      const seen = new Set(value.map(item => JSON.stringify(item)));
      assert.equal(seen.size, value.length, `${location} uniqueItems`);
    }
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
