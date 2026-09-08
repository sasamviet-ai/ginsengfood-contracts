import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const ownerDecision = "X04D-SEC-01";

const operations = [
  { file: "availability-sellable.v1.yaml", operationId: "checkAvailabilityV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-availability-v1", tokenUse: "service", permission: "SELLABLE_CHECK", scope: "SERVICE", rate: "ExternalAvailabilityCheck", retry: "ExternalAvailabilityCheckRetry", idempotency: "NOT_APPLICABLE_SAFE_EVALUATION", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "bearerAuth" },
  { file: "availability-sellable.v1.yaml", operationId: "getSellableStatusV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-availability-v1", tokenUse: "service", permission: "SELLABLE_STATUS_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "bearerAuth" },
  { file: "ingredient.v1.yaml", operationId: "getIngredientV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECIPE_PRODUCTION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "product-activation.v1.yaml", operationId: "getProductActivationV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "SKU_ACTIVATION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "product-activation.v1.yaml", operationId: "getSkuActivationV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "SKU_ACTIVATION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "product-master.v1.yaml", operationId: "listProductsV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "PRODUCT_PUBLIC_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer", ownerDecision: "OD-A6-05" },
  { file: "product-master.v1.yaml", operationId: "getProductV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "PRODUCT_PUBLIC_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer", ownerDecision: "OD-A6-05" },
  { file: "recipe-formula-bom.v1.yaml", operationId: "getRecipeV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECIPE_PRODUCTION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "recipe-formula-bom.v1.yaml", operationId: "getFormulaVersionV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECIPE_PRODUCTION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "recipe-formula-bom.v1.yaml", operationId: "getBomV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECIPE_PRODUCTION_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "sku.v1.yaml", operationId: "getSkuV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "SKU_CATALOG_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "sku.v1.yaml", operationId: "getPublicSkuV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "PRODUCT_PUBLIC_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer", ownerDecision: "OD-A6-05" },
  { file: "sku.v1.yaml", operationId: "getSkuOperationalStatusV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "SELLABLE_STATUS_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "recall-sale-lock.v1.yaml", operationId: "getRecallCaseV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECALL_CASE_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "recall-sale-lock.v1.yaml", operationId: "getSaleLockV1", authClass: "SERVICE_BEARER", audience: "ginsengfood-ops-core-external-bulk-read-v1", tokenUse: "service", permission: "RECALL_HOLD_VIEW", scope: "SERVICE", rate: "ExternalBulkRead", retry: "ExternalBulkReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_AND_RATE_PARITY; FLEET_ENV_BINDING_REQUIRED", securityScheme: "ServiceBearer" },
  { file: "misa-handoff.v1.yaml", operationId: "listMisaHandoffsV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "MISA_SYNC_VIEW", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorRead", retry: "ExternalOperatorReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CONDITIONAL_ROUTE_PRESENT; OWNER_ORDER_AND_RUNTIME_FLAG_REQUIRED; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "misa-handoff.v1.yaml", operationId: "createMisaHandoffV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "ACCOUNTING_DOCUMENT_POST", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorMutation", retry: "ExternalManualReplayOnly", idempotency: "IDEMPOTENCY_KEY_REQUIRED", runtime: "CONDITIONAL_ROUTE_PRESENT; OWNER_ORDER_AND_RUNTIME_FLAG_REQUIRED; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "misa-handoff.v1.yaml", operationId: "getMisaHandoffV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "MISA_SYNC_VIEW", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorRead", retry: "ExternalOperatorReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CONDITIONAL_ROUTE_PRESENT; OWNER_ORDER_AND_RUNTIME_FLAG_REQUIRED; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "operational-admin.v1.yaml", operationId: "createPrintJobV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "PRINT_JOB_CREATE", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorMutation", retry: "ExternalManualReplayOnly", idempotency: "IDEMPOTENCY_KEY_REQUIRED", runtime: "CURRENT_SOURCE_AUTH_PARITY; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "operational-admin.v1.yaml", operationId: "requestPrintJobReprintV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "QR_REPRINT", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorMutation", retry: "ExternalManualReplayOnly", idempotency: "IDEMPOTENCY_KEY_REQUIRED", runtime: "CURRENT_SOURCE_AUTH_PARITY; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "operational-admin.v1.yaml", operationId: "listMaterialPlanningPoliciesV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "MRP_VIEW", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorRead", retry: "ExternalOperatorReadRetry", idempotency: "NOT_APPLICABLE_READ_ONLY", runtime: "CURRENT_SOURCE_AUTH_PARITY; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "recall-sale-lock.v1.yaml", operationId: "createRecallCaseV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "RECALL_CASE_CREATE", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorHighRisk", retry: "ExternalManualReplayOnly", idempotency: "IDEMPOTENCY_KEY_REQUIRED", runtime: "CURRENT_SOURCE_AUTH_PARITY; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "recall-sale-lock.v1.yaml", operationId: "createSaleLockV1", authClass: "OPERATOR_BEARER", audience: "ginsengfood-ops-core-external-operator-v1", tokenUse: "ABSENT", permission: "RECALL_SALE_LOCK_APPLY", scope: "ADMIN_OPERATIONAL", rate: "ExternalOperatorHighRisk", retry: "ExternalManualReplayOnly", idempotency: "IDEMPOTENCY_KEY_REQUIRED", runtime: "CURRENT_SOURCE_AUTH_PARITY; RATE_POLICY_NOT_IMPLEMENTED", securityScheme: "OperatorBearer" },
  { file: "service-auth.v1.yaml", operationId: "issueServiceTokenV1", authClass: "ANONYMOUS_BOOTSTRAP", audience: "NONE", tokenUse: "NONE", permission: "NONE", scope: "NONE", rate: "AuthSensitive", retry: "AuthSensitiveNoRetry", idempotency: "NOT_APPLICABLE_CONFIDENTIAL_CLIENT_EXCHANGE", runtime: "CURRENT_SOURCE_ROUTE_REQUIRES_EXACT_PARITY; AUTH_SENSITIVE_RATE_POLICY_MATCHED", securityScheme: null }
];

const ratePolicyTokens = {
  ExternalAvailabilityCheck: ["sustained_rps_per_principal: 10", "burst_per_principal: 20", "fleet_rps: 50", "server_timeout_seconds: 2", "queue_limit: 0", "partition_claims: [token_use, sub]"],
  ExternalBulkRead: ["sustained_rps_per_principal: 2", "burst_per_principal: 4", "fleet_rps: 10", "server_timeout_seconds: 10", "queue_limit: 0", "partition_claims: [token_use, sub]"],
  ExternalOperatorRead: ["sustained_rps_per_principal: 2", "burst_per_principal: 4", "fleet_rps: 10", "server_timeout_seconds: 10", "queue_limit: 0", "partition_claims: [sub]"],
  ExternalOperatorMutation: ["sustained_rps_per_principal: 0.5", "burst_per_principal: 2", "fleet_rps: 5", "server_timeout_seconds: 15", "queue_limit: 0", "partition_claims: [sub]"],
  ExternalOperatorHighRisk: ["sustained_rps_per_principal: 0.1", "burst_per_principal: 1", "fleet_rps: 1", "server_timeout_seconds: 15", "queue_limit: 0", "partition_claims: [sub]"],
  AuthSensitive: ["permit_limit: 10", "window_seconds: 60", "queue_limit: 0", "partition: VERIFIED_REMOTE_IP"]
};

const retryPolicyTokens = {
  ExternalAvailabilityCheckRetry: ["max_retries: 1", "total_budget_seconds: 5", "retryable_statuses: [408, 429, 502, 503, 504]", "honor_retry_after: true", "backoff: FULL_JITTER"],
  ExternalBulkReadRetry: ["max_retries: 2", "total_budget_seconds: 30", "retryable_statuses: [408, 429, 502, 503, 504]", "honor_retry_after: true", "backoff: FULL_JITTER_BASE_500MS_CAP_5S"],
  ExternalOperatorReadRetry: ["max_retries: 1", "total_budget_seconds: 20", "retryable_statuses: [408, 429, 502, 503, 504]", "honor_retry_after: true", "backoff: FULL_JITTER"],
  ExternalManualReplayOnly: ["max_retries: 0", "total_budget_seconds: 0", "replay: MANUAL_SAME_IDEMPOTENCY_KEY_AND_PAYLOAD_ONLY", "honor_retry_after: true"],
  AuthSensitiveNoRetry: ["max_retries: 0", "total_budget_seconds: 0", "honor_retry_after: true"]
};

const normalize = text => text.replace(/\r\n?/g, "\n");
const read = file => normalize(fs.readFileSync(path.join(root, "openapi/ops-core", file), "utf8"));
const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function operationBlock(text, operationId) {
  const lines = normalize(text).split("\n");
  const operationLine = lines.findIndex(line => line.trim() === `operationId: ${operationId}`);
  assert.notEqual(operationLine, -1, `missing operationId ${operationId}`);
  let start = operationLine;
  while (start >= 0 && !/^    (get|post|put|patch|delete):$/.test(lines[start])) start -= 1;
  assert.ok(start >= 0, `missing method block for ${operationId}`);
  let end = lines.length;
  for (let index = operationLine + 1; index < lines.length; index += 1) {
    if (/^    (get|post|put|patch|delete):$/.test(lines[index]) || /^  \/|^components:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function responseComponentBlock(text, component) {
  const lines = normalize(text).split("\n");
  const responsesStart = lines.findIndex(line => line === "  responses:");
  assert.ok(responsesStart >= 0, "components.responses missing");
  const start = lines.findIndex((line, index) => index > responsesStart && line === `    ${component}:`);
  assert.ok(start > responsesStart, `missing response component ${component}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^    [A-Za-z][A-Za-z0-9]*:/.test(lines[index]) || /^  [A-Za-z][A-Za-z0-9]*:/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function rootCatalogEntryBlock(text, catalog, entry) {
  const lines = normalize(text).split("\n");
  const catalogStart = lines.findIndex(line => line === `${catalog}:`);
  assert.ok(catalogStart >= 0, `missing root catalog ${catalog}`);
  const start = lines.findIndex((line, index) => index > catalogStart && line === `  ${entry}:`);
  assert.ok(start > catalogStart, `missing ${catalog} target ${entry}`);
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index += 1) {
    if (/^  [^ ]+.*:$/.test(lines[index]) || /^[^ ]/.test(lines[index])) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join("\n");
}

function assertScalar(block, key, value, operationId) {
  const pattern = new RegExp(`^      ${escapeRegex(key)}: ${escapeRegex(value)}$`, "m");
  assert.match(block, pattern, `${operationId} ${key} drift`);
  assert.equal((block.match(new RegExp(`^      ${escapeRegex(key)}:`, "gm")) ?? []).length, 1, `${operationId} ${key} must be unique`);
}

function assertOperation(operation, textOverride) {
  const text = normalize(textOverride ?? read(operation.file));
  const block = operationBlock(text, operation.operationId);
  const expectedSecurity = operation.securityScheme
    ? new RegExp(`^      security:\n        - ${escapeRegex(operation.securityScheme)}: \\[\\]$`, "m")
    : /^      security: \[\]$/m;
  assert.match(block, expectedSecurity, `${operation.operationId} security drift`);
  if (operation.securityScheme) {
    assert.match(
      text,
      new RegExp(`^  securitySchemes:\n(?:[\\s\\S]*?)^    ${escapeRegex(operation.securityScheme)}:\n      type: http\n      scheme: bearer\n      bearerFormat: JWT$`, "m"),
      `${operation.operationId} security scheme target missing`
    );
  }
  assertScalar(block, "x-auth-class", operation.authClass, operation.operationId);
  assertScalar(block, "x-audience", operation.audience, operation.operationId);
  assertScalar(block, "x-token-use", operation.tokenUse, operation.operationId);
  assertScalar(block, "x-permission", operation.permission, operation.operationId);
  assertScalar(block, "x-permission-scope", operation.scope, operation.operationId);
  assertScalar(block, "x-rate-limit-policy", operation.rate, operation.operationId);
  assertScalar(block, "x-retry-policy", operation.retry, operation.operationId);
  assertScalar(block, "x-idempotency-disposition", operation.idempotency, operation.operationId);
  assertScalar(block, "x-runtime-policy", `"${operation.runtime}"`, operation.operationId);
  assertScalar(block, "x-owner-decision-ref", operation.ownerDecision ?? ownerDecision, operation.operationId);
  assert.doesNotMatch(block, /^      x-auth-alternatives:/m, `${operation.operationId} must not declare conditional auth`);
  if (operation.idempotency === "IDEMPOTENCY_KEY_REQUIRED") {
    assert.match(block, /#\/components\/parameters\/IdempotencyKey/, `${operation.operationId} idempotency header reference missing`);
    assert.match(text, /^    IdempotencyKey:\n      name: X-Idempotency-Key\n      in: header\n      required: true$/m);
  }

  const audienceCatalog = rootCatalogEntryBlock(text, "x-audience-catalog", operation.audience);
  assert.match(audienceCatalog, new RegExp(`auth_class: ${operation.authClass}\\b`));
  assert.match(audienceCatalog, new RegExp(`token_use: ${operation.tokenUse}\\b`));
  assert.match(audienceCatalog, new RegExp(`permission_scope: ${operation.scope}\\b`));
  const rateCatalog = rootCatalogEntryBlock(text, "x-rate-limit-policies", operation.rate);
  for (const token of ratePolicyTokens[operation.rate]) assert.match(rateCatalog, new RegExp(escapeRegex(token)));
  if (operation.rate !== "AuthSensitive") {
    assert.match(rateCatalog, /fleet_authority_id: OPS_CORE_EXTERNAL_FLEET_LIMITER_V1/);
    assert.match(rateCatalog, /fleet_authority_config_key: RateLimiting__External__FleetAuthorityRef/);
    assert.match(rateCatalog, /startup_fail_closed: true/);
  }
  const retryCatalog = rootCatalogEntryBlock(text, "x-retry-policies", operation.retry);
  for (const token of retryPolicyTokens[operation.retry]) assert.match(retryCatalog, new RegExp(escapeRegex(token)));

  const responseMatch =
    block.match(/^        "429": \{ \$ref: "#\/components\/responses\/([A-Za-z0-9]+)" \}$/m) ??
    block.match(/^        "429":\n          \$ref: "#\/components\/responses\/([A-Za-z0-9]+)"$/m);
  assert.ok(responseMatch, `${operation.operationId} external 429 mapping missing`);
  const response = responseComponentBlock(text, responseMatch[1]);
  assert.match(response, /^      x-error-code: RATE_LIMITED$/m);
  assert.match(response, /^      x-http-status: 429$/m);
  assert.match(response, /^      x-retryable: true$/m);
  assert.match(response, /^        Retry-After:/m);
  assert.match(response, /Retry-After:[\s\S]*?type: integer/);
  assert.match(response, /Retry-After:[\s\S]*?minimum: 1/);
  assert.match(response, /#\/components\/schemas\/ErrorEnvelope|schemas\/.*error.*schema\.json/);
}

assert.equal(operations.length, 24, "runtime security operation inventory must remain 24");
assert.equal(new Set(operations.map(operation => operation.operationId)).size, 24, "operationId values must be unique");

for (const operation of operations) assertOperation(operation);

const first = operations[0];
const firstText = read(first.file);
assert.throws(
  () => assertOperation(first, firstText.replace("x-permission: SELLABLE_CHECK", "x-permission: ADMIN_FULL")),
  /x-permission drift/
);
assert.throws(
  () => assertOperation(first, firstText.replace("minimum: 1", "minimum: 0")),
  /minimum: 1/
);

const operator = operations.find(operation => operation.operationId === "createRecallCaseV1");
const operatorText = read(operator.file);
assert.throws(
  () => assertOperation(operator, operatorText.replace("x-token-use: ABSENT", "x-token-use: service")),
  /x-token-use drift/
);
assert.throws(
  () => assertOperation(operator, operatorText.replace("x-idempotency-disposition: IDEMPOTENCY_KEY_REQUIRED", "x-idempotency-disposition: NOT_APPLICABLE_READ_ONLY")),
  /x-idempotency-disposition drift/
);

console.log("X04D external runtime v1 security metadata PASS: 24/24 operations plus negative tamper checks.");
