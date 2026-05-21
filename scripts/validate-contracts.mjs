import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

const ignoredDirs = new Set([".git", ".codex-doc-memory", ".artifacts", "node_modules"]);
const textExtensions = new Set([".md", ".json", ".yaml", ".yml"]);
const eventEnvelopeFields = [
  "eventId",
  "eventType",
  "eventVersion",
  "occurredAt",
  "source",
  "correlationId",
  "data"
];
const allowedMetaSources = new Set(["docs/source-map.md"]);
const sourceMapDocumentPaths = new Set();
const placeholderFileName = ["cc", "md"].join(".");
const legacyFormCodePattern = new RegExp("\\b" + ["FR", "M-"].join("") + "[0-9A-Za-z_-]+");
const techHandoffId = ["TECH", "-13"].join("");
const staleTechHandoffPattern = new RegExp(`${techHandoffId}.{0,80}blocked|blocked.{0,80}${techHandoffId}`, "i");

function rel(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function toFsPath(relativePath) {
  return relativePath.replaceAll("/", path.sep);
}

function existsRel(relativePath) {
  return fs.existsSync(path.join(root, toFsPath(relativePath)));
}

function resolveFrom(filePath, relativePath) {
  if (relativePath.startsWith("docs/")) {
    return path.join(root, toFsPath(relativePath));
  }
  return path.resolve(path.dirname(filePath), toFsPath(relativePath));
}

function stripQuotes(value) {
  return value.trim().replace(/^["']|["']$/g, "");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (ignoredDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function readJson(filePath) {
  return JSON.parse(read(filePath));
}

function checkIncludes(relative, actual, required, context) {
  for (const field of required) {
    if (!actual.includes(field)) {
      errors.push(`${relative}: missing ${context} field ${field}`);
    }
  }
}

function checkJson(filePath) {
  const relative = rel(filePath);
  let parsed;
  try {
    parsed = JSON.parse(read(filePath));
  } catch (error) {
    errors.push(`${relative}: invalid JSON (${error.message})`);
    return;
  }

  if (relative.startsWith("schemas/") && relative.endsWith(".schema.json")) {
    if (parsed.$schema !== "https://json-schema.org/draft/2020-12/schema") {
      errors.push(`${relative}: JSON Schema must use draft 2020-12`);
    }
    if (!parsed.$id) errors.push(`${relative}: missing $id`);
    if (!parsed.title) errors.push(`${relative}: missing title`);
    if (!parsed.description) errors.push(`${relative}: missing description`);
  }

  if (relative.startsWith("events/") && relative.endsWith(".v1.json")) {
    const propertyKeys = Object.keys(parsed.properties || {});
    const requiredFields = Array.isArray(parsed.required) ? parsed.required : [];
    checkIncludes(relative, propertyKeys, eventEnvelopeFields, "event schema property");
    checkIncludes(relative, requiredFields, eventEnvelopeFields, "event schema required");
  }

  if (relative.startsWith("examples/events/") && relative.endsWith(".json")) {
    const exampleKeys = Object.keys(parsed || {});
    checkIncludes(relative, exampleKeys, eventEnvelopeFields, "event example");
  }
}

function checkRefs(filePath, text) {
  const relative = rel(filePath);
  const dir = path.dirname(filePath);
  const patterns = [
    /"\$ref"\s*:\s*"([^"]+)"/g,
    /\$ref:\s*["']?([^"',}\s]+)["']?/g
  ];

  for (const pattern of patterns) {
    for (const match of text.matchAll(pattern)) {
      const ref = match[1];
      if (!ref || ref.startsWith("#")) continue;
      if (/^[a-z]+:\/\//i.test(ref)) continue;
      const withoutFragment = ref.split("#")[0];
      if (!withoutFragment) continue;
      const target = path.resolve(dir, toFsPath(withoutFragment));
      if (!fs.existsSync(target)) {
        errors.push(`${relative}: unresolved local $ref ${ref}`);
      }
    }
  }
}

function checkOpenApi(filePath, text) {
  const relative = rel(filePath);
  if (!/^openapi:\s*3\.1\.0/m.test(text)) {
    errors.push(`${relative}: OpenAPI files must declare openapi: 3.1.0`);
  }
  if (!/^\s+version:\s*1\.0\.0/m.test(text)) {
    errors.push(`${relative}: OpenAPI info.version must be 1.0.0`);
  }
  if (!/\/v1\//.test(text) && !/\/v1[\s:{]/.test(text)) {
    warnings.push(`${relative}: no /v1 path detected`);
  }
}

function checkAsyncApi(filePath, text) {
  const relative = rel(filePath);
  if (!/^asyncapi:\s*/m.test(text)) {
    errors.push(`${relative}: AsyncAPI files must declare asyncapi`);
  }
}

function extractYamlListValues(text, key) {
  const lines = text.split(/\r?\n/);
  const values = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const keyMatch = line.match(new RegExp(`^(\\s*)${key}:\\s*$`));
    if (!keyMatch) continue;
    const baseIndent = keyMatch[1].length;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const current = lines[cursor];
      if (!current.trim()) continue;
      const itemMatch = current.match(/^(\s*)-\s+(.+?)\s*$/);
      if (itemMatch && itemMatch[1].length > baseIndent) {
        values.push(stripQuotes(itemMatch[2]));
        continue;
      }
      const indent = current.match(/^(\s*)/)?.[1].length ?? 0;
      if (indent <= baseIndent && /^\s*[A-Za-z0-9_-]+:\s*/.test(current)) {
        break;
      }
    }
  }
  return values;
}

function extractSourceDocuments(_filePath, text) {
  return extractYamlListValues(text, "source_documents");
}

function checkSourceDocuments(filePath, text) {
  const relative = rel(filePath);
  for (const documentPath of extractSourceDocuments(filePath, text)) {
    if (!existsRel(documentPath)) {
      errors.push(`${relative}: source_documents target does not exist: ${documentPath}`);
      continue;
    }

    if (/^(MASTER|PACK|TECH)-\d+/.test(documentPath)) {
      errors.push(`${relative}: source_documents must use exact docs/source-map.md paths, not alias ${documentPath}`);
    }

    if (documentPath.startsWith("docs/documents/") && !sourceMapDocumentPaths.has(documentPath)) {
      errors.push(`${relative}: source_documents path is not listed in docs/source-map.md: ${documentPath}`);
    }

    if (
      documentPath.startsWith("docs/") &&
      !documentPath.startsWith("docs/documents/") &&
      !allowedMetaSources.has(documentPath)
    ) {
      errors.push(`${relative}: source_documents may only cite docs/source-map.md or docs/source-map.md document_file paths: ${documentPath}`);
    }
  }
}

function checkSourceMap() {
  const sourceMap = path.join(root, "docs", "source-map.md");
  if (!fs.existsSync(sourceMap)) {
    errors.push("docs/source-map.md: missing");
    return;
  }

  const text = read(sourceMap);
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\|\s*(docs\/documents\/[^|]+?)\s*\|/);
    if (!match) continue;
    const documentPath = match[1].trim();
    sourceMapDocumentPaths.add(documentPath);
    if (!existsRel(documentPath)) {
      errors.push(`docs/source-map.md: document_file target does not exist: ${documentPath}`);
    }
  }
}

function checkLegacySourcePath(filePath, text) {
  const relative = rel(filePath);
  if (relative.startsWith("docs/documents/")) return;
  const legacy = text.match(/docs\/documents\/(?:0_dev_execution|1_master|2_pack|3_tech|4_phase)/);
  if (legacy) {
    errors.push(`${relative}: legacy docs/documents path remains (${legacy[0]})`);
  }
  if (legacyFormCodePattern.test(text)) {
    errors.push(`${relative}: legacy form code remains`);
  }
  if (staleTechHandoffPattern.test(text)) {
    errors.push(`${relative}: stale handoff-source blocked wording remains`);
  }
}

function checkPlaceholder(filePath) {
  const relative = rel(filePath);
  if (!relative.endsWith(placeholderFileName)) return;
  const content = read(filePath).trim();
  if (!content || content === "cc") {
    warnings.push(`${relative}: placeholder marker file remains`);
  }
}

function checkKnownYamlPathFields(filePath, text) {
  const relative = rel(filePath);
  const scalarPathKeys = new Set(["source_example", "openapi", "event", "fixture"]);
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z0-9_]+):\s+(.+?)\s*$/);
    if (!match) continue;
    const key = match[1];
    if (!scalarPathKeys.has(key)) continue;
    const value = stripQuotes(match[2]);
    if (!value.startsWith(".") && !value.startsWith("docs/")) continue;
    if (!fs.existsSync(resolveFrom(filePath, value))) {
      errors.push(`${relative}: ${key} target does not exist: ${value}`);
    }
  }

  for (const value of extractYamlListValues(text, "validates_against")) {
    if (!value.startsWith(".") && !value.startsWith("docs/")) continue;
    if (!fs.existsSync(resolveFrom(filePath, value))) {
      errors.push(`${relative}: validates_against target does not exist: ${value}`);
    }
  }
}

function parseFixtureManifestEntries(text) {
  const lines = text.split(/\r?\n/);
  const entries = [];
  let inFixtures = false;
  let current = null;
  let currentListKey = null;

  for (const line of lines) {
    if (/^fixtures:\s*$/.test(line)) {
      inFixtures = true;
      continue;
    }
    if (!inFixtures) continue;
    if (/^[A-Za-z0-9_]+:\s*/.test(line)) break;

    const first = line.match(/^  - file:\s+(.+?)\s*$/);
    if (first) {
      current = {
        file: stripQuotes(first[1]),
        source_example: null,
        validates_against: []
      };
      entries.push(current);
      currentListKey = null;
      continue;
    }

    if (!current) continue;

    const kv = line.match(/^    ([A-Za-z0-9_]+):(?:\s+(.+?)\s*)?$/);
    if (kv) {
      const key = kv[1];
      const value = kv[2] ? stripQuotes(kv[2]) : "";
      if (value) {
        current[key] = value;
        currentListKey = null;
      } else {
        currentListKey = key;
        if (!Array.isArray(current[key])) current[key] = [];
      }
      continue;
    }

    const item = line.match(/^      -\s+(.+?)\s*$/);
    if (item && currentListKey) {
      current[currentListKey].push(stripQuotes(item[1]));
    }
  }

  return entries;
}

function requiredFieldsForSchema(schema) {
  return Array.isArray(schema.required) ? schema.required : [];
}

function comparableFixtureObject(schemaRelative, fixtureJson) {
  if (schemaRelative.startsWith("events/")) return fixtureJson;
  if (schemaRelative === "schemas/common/envelope.schema.json") return fixtureJson;
  if (fixtureJson && typeof fixtureJson === "object" && !Array.isArray(fixtureJson) && fixtureJson.data && typeof fixtureJson.data === "object") {
    return fixtureJson.data;
  }
  return fixtureJson;
}

function checkFixtureRequiredFields(fixtureFile, schemaFile, fixtureJson, schemaJson) {
  const fixtureRelative = rel(fixtureFile);
  const schemaRelative = rel(schemaFile);
  const required = requiredFieldsForSchema(schemaJson);
  if (required.length === 0) return;
  const candidate = comparableFixtureObject(schemaRelative, fixtureJson);
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return;
  for (const field of required) {
    if (!(field in candidate)) {
      errors.push(`${fixtureRelative}: missing required field ${field} from ${schemaRelative}`);
    }
  }
}

function checkFixtureManifest() {
  const manifest = path.join(root, "contract-tests", "fixtures", "fixture-manifest.v1.yaml");
  if (!fs.existsSync(manifest)) return;
  const entries = parseFixtureManifestEntries(read(manifest));

  for (const entry of entries) {
    if (!entry.file) {
      errors.push("contract-tests/fixtures/fixture-manifest.v1.yaml: fixture entry missing file");
      continue;
    }

    const fixtureFile = resolveFrom(manifest, entry.file);
    if (!fs.existsSync(fixtureFile)) {
      errors.push(`contract-tests/fixtures/fixture-manifest.v1.yaml: fixture target does not exist: ${entry.file}`);
      continue;
    }

    let fixtureJson;
    try {
      fixtureJson = readJson(fixtureFile);
    } catch (error) {
      errors.push(`${rel(fixtureFile)}: invalid fixture JSON (${error.message})`);
      continue;
    }

    if (entry.source_example && !fs.existsSync(resolveFrom(manifest, entry.source_example))) {
      errors.push(`contract-tests/fixtures/fixture-manifest.v1.yaml: source_example target does not exist: ${entry.source_example}`);
    }

    if (!Array.isArray(entry.validates_against) || entry.validates_against.length === 0) {
      errors.push(`contract-tests/fixtures/fixture-manifest.v1.yaml: ${entry.file} must validate against at least one contract`);
      continue;
    }

    for (const target of entry.validates_against) {
      const schemaFile = resolveFrom(manifest, target);
      if (!fs.existsSync(schemaFile)) {
        errors.push(`contract-tests/fixtures/fixture-manifest.v1.yaml: validates_against target does not exist: ${target}`);
        continue;
      }
      if (!target.endsWith(".json")) continue;
      let schemaJson;
      try {
        schemaJson = readJson(schemaFile);
      } catch (error) {
        errors.push(`${rel(schemaFile)}: invalid referenced schema JSON (${error.message})`);
        continue;
      }
      checkFixtureRequiredFields(fixtureFile, schemaFile, fixtureJson, schemaJson);
    }
  }
}

checkSourceMap();

const files = walk(root);
for (const filePath of files) {
  const extension = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(extension)) continue;
  const relative = rel(filePath);
  const text = read(filePath);

  checkLegacySourcePath(filePath, text);
  checkPlaceholder(filePath);
  checkRefs(filePath, text);

  if (extension === ".json") checkJson(filePath);
  if (relative.startsWith("openapi/") && (extension === ".yaml" || extension === ".yml")) checkOpenApi(filePath, text);
  if (relative.startsWith("asyncapi/") && (extension === ".yaml" || extension === ".yml")) checkAsyncApi(filePath, text);
  if (extension === ".yaml" || extension === ".yml") {
    checkSourceDocuments(filePath, text);
    checkKnownYamlPathFields(filePath, text);
  }
}

checkFixtureManifest();

for (const warning of warnings) {
  console.warn(`WARN ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR ${error}`);
  }
  console.error(`Contract validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Contract validation passed with ${warnings.length} warning(s).`);
