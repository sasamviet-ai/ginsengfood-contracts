import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];
const validationScope = process.argv
  .find(argument => argument.startsWith("--scope="))
  ?.slice("--scope=".length) ?? "all";

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
const unsupportedDeprecatedOpfPattern = /\bOPF-(?:00|1[3-9]|[2-9][0-9A-Za-z_-]*)/;
const techHandoffId = ["TECH", "-13"].join("");
const staleTechHandoffPattern = new RegExp(`${techHandoffId}.{0,80}blocked|blocked.{0,80}${techHandoffId}`, "i");
const requiredPhase8SrsPaths = [
  "docs/documents/4. phase/phase-8/IVR-SRS-trace-matrix.md",
  "docs/documents/4. phase/phase-8/IVR-00-governance-source-of-truth-scope-boundary.md",
  "docs/documents/4. phase/phase-8/IVR-01-business-purpose-confirmation-use-case.md",
  "docs/documents/4. phase/phase-8/IVR-02-ownership-boundary-connected-systems.md",
  "docs/documents/4. phase/phase-8/IVR-03-eligibility-customer-trust-official-contact.md",
  "docs/documents/4. phase/phase-8/IVR-04-order-core-to-ivr-task-contract.md",
  "docs/documents/4. phase/phase-8/IVR-05-attempt-policy-scheduler-queue.md",
  "docs/documents/4. phase/phase-8/IVR-06-internal-sim-gateway-adapter.md",
  "docs/documents/4. phase/phase-8/IVR-07-result-normalization-order-core-callback.md",
  "docs/documents/4. phase/phase-8/IVR-08-admin-monitoring-evidence-audit-privacy.md",
  "docs/documents/4. phase/phase-8/IVR-09-test-matrix-smoke-release-gate.md"
];
const requiredIvrContractFiles = [
  "enums/ivr/ivr-call-job-status.yaml",
  "enums/ivr/ivr-call-attempt-status.yaml",
  "enums/ivr/ivr-result-status.yaml",
  "enums/ivr/ivr-result-state.yaml",
  "enums/ivr/ivr-capacity-incident-status.yaml",
  "enums/ivr/ivr-technical-exception-type.yaml",
  "enums/ivr/ivr-eligibility-decision.yaml",
  "enums/ivr/ivr-phone-validation-status.yaml",
  "schemas/ivr/ivr-confirmation-task.schema.json",
  "schemas/ivr/ivr-result-callback.schema.json",
  "schemas/ivr/ivr-call-job.schema.json",
  "schemas/ivr/ivr-call-attempt.schema.json",
  "schemas/ivr/ivr-call-result.schema.json",
  "schemas/ivr/ivr-eligibility-decision.schema.json",
  "schemas/ivr/ivr-phone-validation.schema.json",
  "schemas/ivr/ivr-capacity-incident.schema.json",
  "schemas/ivr/ivr-technical-exception.schema.json",
  "schemas/ivr/ivr-sim-channel.schema.json",
  "schemas/ivr/ivr-admin-action.schema.json",
  "state-machines/ivr/call-job-state.md",
  "state-machines/ivr/call-attempt-state.md",
  "state-machines/ivr/result-state.md",
  "state-machines/ivr/capacity-incident-state.md",
  "state-machines/ivr/technical-exception-state.md",
  "openapi/business-platform/ivr-order-confirmation.v1.yaml",
  "events/business-platform/ivr/ivr-no-answer-final.v1.json",
  "events/business-platform/ivr/ivr-invalid-phone-final.v1.json",
  "events/business-platform/ivr/ivr-technical-exception.v1.json",
  "events/business-platform/ivr/ivr-operational-blocked.v1.json",
  "events/business-platform/ivr/ivr-capacity-incident-opened.v1.json"
];

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

  const fileVersion = relative.match(/\.v(?<major>\d+)\.ya?ml$/i)?.groups?.major;
  if (!fileVersion) {
    errors.push(`${relative}: OpenAPI file name must contain a .vN major version suffix`);
    return;
  }

  const expectedInfoVersion = `${fileVersion}.0.0`;
  const infoVersionPattern = new RegExp(`^\\s+version:\\s*${expectedInfoVersion.replaceAll(".", "\\.")}$`, "m");
  if (!infoVersionPattern.test(text)) {
    errors.push(`${relative}: OpenAPI info.version must be ${expectedInfoVersion}`);
  }

  const pathVersionPattern = new RegExp(`/v${fileVersion}(?:/|[\\s:{])`);
  if (!pathVersionPattern.test(text)) {
    warnings.push(`${relative}: no /v${fileVersion} path detected`);
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

function checkSourceMap({ validateTargets = true } = {}) {
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
    if (validateTargets && !existsRel(documentPath)) {
      errors.push(`docs/source-map.md: document_file target does not exist: ${documentPath}`);
    }
  }
}

function checkPhase8Sources() {
  for (const documentPath of requiredPhase8SrsPaths) {
    if (!existsRel(documentPath)) {
      errors.push(`Phase 8 source missing: ${documentPath}`);
      continue;
    }
    if (!sourceMapDocumentPaths.has(documentPath)) {
      errors.push(`docs/source-map.md: missing Phase 8 source row for ${documentPath}`);
    }
  }
}

function checkRequiredIvrContracts() {
  for (const contractPath of requiredIvrContractFiles) {
    if (!existsRel(contractPath)) {
      errors.push(`Required Phase 8 IVR contract file missing: ${contractPath}`);
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
  if (unsupportedDeprecatedOpfPattern.test(text)) {
    errors.push(`${relative}: unsupported deprecated OPF form code remains`);
  }
  if (staleTechHandoffPattern.test(text)) {
    errors.push(`${relative}: stale handoff-source blocked wording remains`);
  }
}

function checkStaleIvrWording(filePath, text) {
  const relative = rel(filePath);
  const isIvrContract =
    relative.startsWith("schemas/ivr/") ||
    relative.startsWith("enums/ivr/") ||
    relative.startsWith("state-machines/ivr/") ||
    relative.startsWith("events/business-platform/ivr/") ||
    relative === "openapi/business-platform/ivr-order-confirmation.v1.yaml" ||
    relative.startsWith("examples/events/ivr") ||
    relative.startsWith("examples/api/ivr") ||
    relative.startsWith("contract-tests/fixtures/ivr");
  if (!isIvrContract) return;

  const stalePatterns = [
    /TECH-09 V1\.0 locks baseline MAX_ATTEMPT_PER_ORDER = 2/i,
    /program-based attempts, while TECH-09 V1\.0 locks/i,
    /baseline max-attempt policy/i,
    /before Phase 7/i,
    /Phase 7 state machines/i,
    /exact retry count and timing need owner confirmation/i,
    /resolve PACK-09 program-based attempts vs TECH-09 V1\.0 max 2/i
  ];
  for (const pattern of stalePatterns) {
    if (pattern.test(text)) {
      errors.push(`${relative}: stale Phase 8 IVR wording remains (${pattern.source})`);
    }
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

function fixtureManifestFiles() {
  const fixtureDir = path.join(root, "contract-tests", "fixtures");
  if (!fs.existsSync(fixtureDir)) return [];
  return fs.readdirSync(fixtureDir)
    .filter(fileName => /^fixture-manifest\.v\d+\.yaml$/i.test(fileName))
    .map(fileName => path.join(fixtureDir, fileName))
    .sort();
}

function checkFixtureManifest(manifest) {
  const manifestRelative = rel(manifest);
  const entries = parseFixtureManifestEntries(read(manifest));

  for (const entry of entries) {
    if (!entry.file) {
      errors.push(`${manifestRelative}: fixture entry missing file`);
      continue;
    }

    const fixtureFile = resolveFrom(manifest, entry.file);
    if (!fs.existsSync(fixtureFile)) {
      errors.push(`${manifestRelative}: fixture target does not exist: ${entry.file}`);
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
      errors.push(`${manifestRelative}: source_example target does not exist: ${entry.source_example}`);
    }

    if (!Array.isArray(entry.validates_against) || entry.validates_against.length === 0) {
      errors.push(`${manifestRelative}: ${entry.file} must validate against at least one contract`);
      continue;
    }

    for (const target of entry.validates_against) {
      const schemaFile = resolveFrom(manifest, target);
      if (!fs.existsSync(schemaFile)) {
        errors.push(`${manifestRelative}: validates_against target does not exist: ${target}`);
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

function extractYamlObjectValues(text, listKey, propertyKey) {
  const lines = text.split(/\r?\n/);
  const values = [];
  let inList = false;
  let listIndent = 0;

  for (const line of lines) {
    if (!inList) {
      const listMatch = line.match(new RegExp(`^(\\s*)${listKey}:\\s*$`));
      if (!listMatch) continue;
      inList = true;
      listIndent = listMatch[1].length;
      continue;
    }

    const indent = line.match(/^(\s*)/)?.[1].length ?? 0;
    if (line.trim() && indent <= listIndent && !/^\s*-/.test(line)) break;
    const valueMatch = line.match(new RegExp(`^\\s*-\\s+${propertyKey}:\\s+(.+?)\\s*$`));
    if (valueMatch) values.push(stripQuotes(valueMatch[1]));
  }

  return values;
}

function extractYamlObjectList(text, listKey) {
  const lines = text.split(/\r?\n/);
  const entries = [];
  let inList = false;
  let listIndent = 0;
  let current = null;

  for (const line of lines) {
    if (!inList) {
      const listMatch = line.match(new RegExp(`^(\\s*)${listKey}:\\s*$`));
      if (!listMatch) continue;
      inList = true;
      listIndent = listMatch[1].length;
      continue;
    }

    const indent = line.match(/^(\s*)/)?.[1].length ?? 0;
    if (line.trim() && indent <= listIndent && !/^\s*-/.test(line)) break;
    const firstProperty = line.match(/^\s*-\s+([A-Za-z0-9_]+):\s+(.+?)\s*$/);
    if (firstProperty) {
      current = { [firstProperty[1]]: stripQuotes(firstProperty[2]) };
      entries.push(current);
      continue;
    }
    const property = line.match(/^\s+([A-Za-z0-9_]+):\s+(.+?)\s*$/);
    if (property && current) current[property[1]] = stripQuotes(property[2]);
  }

  return entries;
}

function checkOperationalFormV2() {
  const requiredFiles = [
    "openapi/ops-core/operational-forms.v2.yaml",
    "schemas/ops/operational-form-key.v2.schema.json",
    "schemas/ops/operational-form.v2.schema.json",
    "schemas/ops/operational-form-payload.v2.schema.json",
    "schemas/ops/operational-form-create-request.v2.schema.json",
    "enums/ops/operational-form-key.v2.yaml",
    "enums/ops/operational-form-status.v2.yaml",
    "state-machines/ops/operational-form-state.v2.md",
    "docs/documents/0. appendices/06-OPERATIONAL-FORM-KEY-V2-OWNER-ADDENDUM.md",
    "examples/api/operational-form-material-intake.v2.request.json",
    "contract-tests/fixtures/operational-form-material-intake.v2.fixture.json",
    "contract-tests/fixtures/fixture-manifest.v2.yaml",
    "compatibility/operational-form-v1-to-v2-migration.md"
  ];

  for (const relative of requiredFiles) {
    if (!existsRel(relative)) errors.push(`Operational Form v2 required file missing: ${relative}`);
  }
  if (requiredFiles.some(relative => !existsRel(relative))) return;

  const keySchemaPath = path.join(root, toFsPath("schemas/ops/operational-form-key.v2.schema.json"));
  const createSchemaPath = path.join(root, toFsPath("schemas/ops/operational-form-create-request.v2.schema.json"));
  const formSchemaPath = path.join(root, toFsPath("schemas/ops/operational-form.v2.schema.json"));
  const payloadSchemaPath = path.join(root, toFsPath("schemas/ops/operational-form-payload.v2.schema.json"));
  const enumPath = path.join(root, toFsPath("enums/ops/operational-form-key.v2.yaml"));
  const statusV1Path = path.join(root, toFsPath("enums/ops/operational-form-status.yaml"));
  const statusV2Path = path.join(root, toFsPath("enums/ops/operational-form-status.v2.yaml"));
  const addendumPath = path.join(root, toFsPath("docs/documents/0. appendices/06-OPERATIONAL-FORM-KEY-V2-OWNER-ADDENDUM.md"));
  const openApiPath = path.join(root, toFsPath("openapi/ops-core/operational-forms.v2.yaml"));
  const v1AdminPath = path.join(root, toFsPath("openapi/ops-core/operational-admin.v1.yaml"));
  const v1EvidencePath = path.join(root, toFsPath("openapi/ops-core/operational-evidence.v1.yaml"));
  const v1FormSchemaPath = path.join(root, toFsPath("schemas/ops/operational-form.schema.json"));
  const v1PayloadSchemaPath = path.join(root, toFsPath("schemas/ops/operational-form-payload.schema.json"));

  const keySchema = readJson(keySchemaPath);
  const createSchema = readJson(createSchemaPath);
  const formSchema = readJson(formSchemaPath);
  const payloadSchema = readJson(payloadSchemaPath);
  const enumText = read(enumPath);
  const enumValues = extractYamlObjectValues(enumText, "values", "value");
  const enumEntries = extractYamlObjectList(enumText, "values");
  const keys = keySchema.enum ?? [];

  if (keys.length !== 30 || new Set(keys).size !== 30) {
    errors.push("schemas/ops/operational-form-key.v2.schema.json: must contain exactly 30 unique form_key values");
  }
  if (JSON.stringify(keys) !== JSON.stringify(enumValues)) {
    errors.push("Operational Form v2 form_key JSON Schema and YAML enum values must match in canonical order");
  }
  const retiredEntries = enumEntries.filter(entry => entry.status === "RETIRED");
  if (
    retiredEntries.length !== 1 ||
    retiredEntries[0]?.value !== "AFTER_DRYING_QC" ||
    retiredEntries[0]?.replacement_form_key !== "FREEZE_DRYING_LOG"
  ) {
    errors.push("enums/ops/operational-form-key.v2.yaml: exactly AFTER_DRYING_QC must be RETIRED with replacement FREEZE_DRYING_LOG");
  }

  const addendumMappings = [...read(addendumPath).matchAll(
    /^\|\s*(FRM-\d{2})\s*\|\s*[^|]+\|\s*([A-Z0-9_]+)\s*\|/gm
  )].map(match => ({ legacy_form_code: match[1], value: match[2] }));
  const enumMappings = enumEntries.map(entry => ({
    legacy_form_code: entry.legacy_form_code,
    value: entry.value
  }));
  if (addendumMappings.length !== 30 || JSON.stringify(addendumMappings) !== JSON.stringify(enumMappings)) {
    errors.push("Operational Form v2 owner addendum and YAML enum must contain the same exact 30 legacy-code/form_key mappings");
  }

  const statusV1Values = extractYamlObjectValues(read(statusV1Path), "values", "value");
  const statusV2Values = extractYamlObjectValues(read(statusV2Path), "values", "value");
  if (JSON.stringify(statusV1Values) !== JSON.stringify(statusV2Values)) {
    errors.push("Operational Form v2 status values must remain exactly compatible with v1");
  }

  const createFormKey = JSON.stringify(createSchema.properties?.form_key ?? {});
  if (!createFormKey.includes("AFTER_DRYING_QC") || !createFormKey.includes("not")) {
    errors.push("schemas/ops/operational-form-create-request.v2.schema.json: must explicitly exclude retired AFTER_DRYING_QC");
  }

  for (const [relative, schema] of [
    ["schemas/ops/operational-form.v2.schema.json", formSchema],
    ["schemas/ops/operational-form-payload.v2.schema.json", payloadSchema],
    ["schemas/ops/operational-form-create-request.v2.schema.json", createSchema]
  ]) {
    if (!schema.required?.includes("form_key")) errors.push(`${relative}: form_key must be required`);
    for (const legacyField of ["form_code", "deprecated_form_code_alias", "form_type"]) {
      if (Object.hasOwn(schema.properties ?? {}, legacyField)) {
        errors.push(`${relative}: v2 must not expose legacy field ${legacyField}`);
      }
    }
  }

  const openApi = read(openApiPath);
  for (const legacyToken of ["form_code", "form_type", "x-operational-form-type"]) {
    if (openApi.includes(legacyToken)) errors.push(`openapi/ops-core/operational-forms.v2.yaml: legacy token ${legacyToken} is not allowed`);
  }
  for (const requiredRoute of [
    "/v2/admin/operational/freezing-log:",
    "/v2/admin/operational/freeze-drying-log:",
    "/v2/admin/operational/packing-level-3:",
    "/v2/admin/operational/forms/{formId}/status:",
    "/v2/operational-forms/{formId}:"
  ]) {
    if (!openApi.includes(requiredRoute)) errors.push(`openapi/ops-core/operational-forms.v2.yaml: missing route ${requiredRoute}`);
  }
  if (openApi.includes("/v2/admin/operational/freeze-dry-qc:")) {
    errors.push("openapi/ops-core/operational-forms.v2.yaml: retired freeze-dry-qc create route must not exist");
  }
  const extensionValues = [...openApi.matchAll(/^\s+x-operational-form-key:\s+([A-Z0-9_]+)\s*$/gm)]
    .map(match => match[1]);
  if (extensionValues.length !== 14 || extensionValues.some(value => !keys.includes(value) || value === "AFTER_DRYING_QC")) {
    errors.push("openapi/ops-core/operational-forms.v2.yaml: expected 14 active source-specific form_key extensions from the canonical allowlist");
  }
  const requestConstValues = [...openApi.matchAll(/form_key:\s*\{\s*const:\s*([A-Z0-9_]+)\s*\}/g)]
    .map(match => match[1]);
  if (
    requestConstValues.length !== 14 ||
    JSON.stringify([...requestConstValues].sort()) !== JSON.stringify([...extensionValues].sort())
  ) {
    errors.push("openapi/ops-core/operational-forms.v2.yaml: each source-specific create operation must constrain request form_key to its extension value");
  }

  // Idempotency: moi operation LAM DOI TRANG THAI phai khai X-Idempotency-Key. Contract noi bo khai
  // header nay o 296/310 mutating operation; v2 ra doi sau nen khong duoc thap chuan hon. Check nay
  // co pham vi rieng file v2 - corpus v1 dang Deprecated, retrofit rieng neu owner quyet dinh.
  const idempotencyParameterRef = '$ref: "#/components/parameters/IdempotencyKey"';
  const idempotencyComponentPattern = /^ {4}IdempotencyKey:\r?\n {6}name: X-Idempotency-Key\r?\n {6}in: header\r?\n {6}required: true\b/m;
  if (!idempotencyComponentPattern.test(openApi)) {
    errors.push(
      "openapi/ops-core/operational-forms.v2.yaml: components.parameters.IdempotencyKey must declare header X-Idempotency-Key as required"
    );
  }
  const mutatingOperationCount = (openApi.match(/^ {4}(?:post|put|patch|delete):\s*$/gm) ?? []).length;
  const idempotencyRefCount = openApi.split(idempotencyParameterRef).length - 1;
  if (mutatingOperationCount !== idempotencyRefCount) {
    errors.push(
      `openapi/ops-core/operational-forms.v2.yaml: ${mutatingOperationCount} state-changing operation(s) but ${idempotencyRefCount} IdempotencyKey reference(s); every post/put/patch/delete must reference it and read-only operations must not`
    );
  }

  const v1Admin = read(v1AdminPath);
  const v1Evidence = read(v1EvidencePath);
  if ((v1Admin.match(/^\s+deprecated:\s+true\s*$/gm) ?? []).length !== 13) {
    errors.push("openapi/ops-core/operational-admin.v1.yaml: exactly 12 form-create operations plus the status operation must be deprecated; unrelated routes stay active");
  }
  if ((v1Evidence.match(/^\s+deprecated:\s+true\s*$/gm) ?? []).length !== 1) {
    errors.push("openapi/ops-core/operational-evidence.v1.yaml: exactly the Operational Form read operation must be deprecated");
  }
  if (!/^\s+x-operational-form-type:\s+ACCOUNTING_MATERIAL_ISSUE\s*$/m.test(v1Admin)) {
    errors.push("openapi/ops-core/operational-admin.v1.yaml: FRM-14 extension must match v1 enum ACCOUNTING_MATERIAL_ISSUE");
  }

  const v1FormSchema = readJson(v1FormSchemaPath);
  const v1PayloadSchema = readJson(v1PayloadSchemaPath);
  if (
    JSON.stringify(v1FormSchema.required) !== JSON.stringify(["operational_form_id", "form_code", "form_type"]) ||
    JSON.stringify(v1PayloadSchema.required) !== JSON.stringify(["form_code", "payload_version"])
  ) {
    errors.push("Operational Form v1 required identity fields must remain frozen during v2 migration");
  }
}

function checkTargetedOperationalFormV2Files() {
  const targetPrefixes = [
    "openapi/ops-core/operational-forms.v2.yaml",
    "schemas/ops/operational-form",
    "enums/ops/operational-form",
    "contract-tests/fixtures/fixture-manifest.v2.yaml"
  ];
  for (const filePath of walk(root)) {
    const relative = rel(filePath);
    if (!targetPrefixes.some(prefix => relative.startsWith(prefix))) continue;
    const extension = path.extname(filePath).toLowerCase();
    const text = read(filePath);
    checkRefs(filePath, text);
    if (extension === ".json") checkJson(filePath);
    if (relative.startsWith("openapi/") && (extension === ".yaml" || extension === ".yml")) checkOpenApi(filePath, text);
    if (extension === ".yaml" || extension === ".yml") {
      checkSourceDocuments(filePath, text);
      checkKnownYamlPathFields(filePath, text);
    }
  }
}

function printResultAndExit() {
  for (const warning of warnings) console.warn(`WARN ${warning}`);
  if (errors.length > 0) {
    for (const error of errors) console.error(`ERROR ${error}`);
    console.error(`Contract validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
    process.exit(1);
  }
  console.log(`Contract validation passed with ${warnings.length} warning(s).`);
}

if (validationScope === "operational-form-v2") {
  checkSourceMap({ validateTargets: false });
  checkOperationalFormV2();
  checkTargetedOperationalFormV2Files();
  for (const manifest of fixtureManifestFiles().filter(filePath => rel(filePath).endsWith(".v2.yaml"))) {
    checkFixtureManifest(manifest);
  }
  printResultAndExit();
  process.exit(0);
}

if (validationScope !== "all") {
  errors.push(`Unknown validation scope: ${validationScope}`);
  printResultAndExit();
}

checkSourceMap();
checkPhase8Sources();
checkRequiredIvrContracts();

const files = walk(root);
for (const filePath of files) {
  const extension = path.extname(filePath).toLowerCase();
  if (!textExtensions.has(extension)) continue;
  const relative = rel(filePath);
  const text = read(filePath);

  checkLegacySourcePath(filePath, text);
  checkStaleIvrWording(filePath, text);
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

for (const manifest of fixtureManifestFiles()) checkFixtureManifest(manifest);
printResultAndExit();
