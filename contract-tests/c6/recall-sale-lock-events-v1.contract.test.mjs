import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

/**
 * C6 — recall / sale-lock EVENT contract test.
 *
 * Vì sao cần test riêng, trong khi đã có x04d:
 *   x04d ghim metadata bảo mật của BỐN operation REST trong recall-sale-lock.v1.yaml
 *   (audience / permission / rate / retry / idempotency). Nó KHÔNG chạm tới bốn event
 *   `ops-core.recall.*.v1` — mà đó mới là thứ Module 6 (Ads / Scale Gate) hỏi xin được
 *   "phát và khoá" để nạp `risk_flags['recall']` thật thay cho đường bơm tay.
 *   Bộ validate-contracts chung cũng chỉ kiểm envelope tối thiểu của MỌI event
 *   (eventId/eventType/... có mặt), không kiểm phần `data` — tức đúng phần consumer đọc.
 *
 * Test này ghim những gì một consumer downstream thật sự phụ thuộc:
 *   1. Tên event không đổi (đổi tên = consumer câm lặng, không lỗi).
 *   2. `data` mang đủ trường để quyết định chặn, và trỏ đúng schema dùng chung.
 *   3. Bất biến active/status: ACTIVE ⇒ active=true; RELEASED ⇒ active=false + có effective_to.
 *   4. Từ vựng `scope_type` ĐỐI NGOẠI đúng 4 giá trị — nới ra là lộ định danh nội bộ,
 *      thu hẹp lại là consumer gặp giá trị không xử lý được.
 *   5. AsyncAPI khai đủ 4 kênh, tên kênh khớp chính xác `eventType` const.
 *   6. Cờ `recall_case_open` (C6, owner 10-09-2026) có mặt, là BỔ SUNG, và KHÔNG lọt vào
 *      từ vựng `block_reasons` — xem §5 bên dưới để biết vì sao ranh giới đó quan trọng.
 *
 * Nguồn: docs/integration/module-6/09-09-13-56-goi-chot-ket-noi-module-6.md (ops-core repo) §1.1, §4.3, §7.
 */

const root = path.resolve(import.meta.dirname, "../..");
const readJson = relative => JSON.parse(fs.readFileSync(path.join(root, relative), "utf8"));
const readText = relative => fs.readFileSync(path.join(root, relative), "utf8").replace(/\r\n?/g, "\n");

let checks = 0;
const check = (fn) => { fn(); checks++; };

const ENVELOPE_REQUIRED = [
  "eventId",
  "eventType",
  "eventVersion",
  "occurredAt",
  "source",
  "correlationId",
  "data",
];

/**
 * Bốn event của miền recall. `dataRef` là schema dùng chung mà `data` phải trỏ tới;
 * `dataRequired` là tập trường tối thiểu consumer được phép trông cậy.
 */
const EVENTS = [
  {
    file: "events/ops-core/recall/recall-case-opened.v1.json",
    eventType: "ops-core.recall.recall-case-opened.v1",
    dataRef: "../../../schemas/ops/recall-case.schema.json",
    dataRequired: ["recall_case_id", "status"],
    constrainedProperty: ["status", "OPEN"],
  },
  {
    file: "events/ops-core/recall/sale-lock-activated.v1.json",
    eventType: "ops-core.recall.sale-lock-activated.v1",
    dataRef: "../../../schemas/ops/sale-lock.schema.json",
    dataRequired: ["sale_lock_id", "scope_type", "scope_id", "active", "reason", "effective_from"],
    constrainedProperty: ["active", true],
  },
  {
    file: "events/ops-core/recall/sale-lock-released.v1.json",
    eventType: "ops-core.recall.sale-lock-released.v1",
    dataRef: "../../../schemas/ops/sale-lock.schema.json",
    // effective_to bắt buộc: nhả khoá mà không nói nhả lúc nào thì consumer không dựng lại được dòng thời gian.
    dataRequired: ["sale_lock_id", "scope_type", "scope_id", "active", "effective_to"],
    constrainedProperty: ["active", false],
  },
  {
    file: "events/ops-core/recall/stop-sale-required.v1.json",
    eventType: "ops-core.recall.stop-sale-required.v1",
    dataRef: "../../../schemas/ops/sale-lock.schema.json",
    dataRequired: ["sale_lock_id", "scope_type", "scope_id", "active", "reason"],
    constrainedProperty: ["active", true],
  },
];

// ── 1. Envelope + định danh event ────────────────────────────────────────────────────────────────
for (const event of EVENTS) {
  const schema = readJson(event.file);

  check(() => assert.equal(
    schema.$id,
    event.file,
    `${event.file}: $id phải bằng đúng đường dẫn tương đối của chính nó`));

  check(() => assert.equal(
    schema.properties?.eventType?.const,
    event.eventType,
    `${event.file}: eventType const bị đổi — consumer downstream sẽ im lặng bỏ qua event`));

  check(() => assert.equal(
    schema.properties?.source?.const,
    "ops-core",
    `${event.file}: source phải là hằng "ops-core" (quyền sở hữu sự thật recall)`));

  check(() => assert.equal(
    schema.properties?.eventVersion?.const,
    "1.0",
    `${event.file}: eventVersion const phải là "1.0"`));

  check(() => assert.deepEqual(
    [...(schema.required ?? [])].sort(),
    [...ENVELOPE_REQUIRED].sort(),
    `${event.file}: tập required của envelope bị đổi`));

  check(() => assert.equal(
    schema.additionalProperties,
    false,
    `${event.file}: envelope phải đóng (additionalProperties: false)`));

  // ── 2. data: trỏ đúng schema dùng chung + đủ trường quyết định ────────────────────────────────
  const dataAllOf = schema.properties?.data?.allOf;
  check(() => assert.ok(
    Array.isArray(dataAllOf) && dataAllOf.length === 2,
    `${event.file}: data phải là allOf[schema dùng chung, ràng buộc riêng của event]`));

  check(() => assert.equal(
    dataAllOf[0]?.$ref,
    event.dataRef,
    `${event.file}: data phải trỏ tới ${event.dataRef}`));

  const refTarget = path.resolve(path.dirname(path.join(root, event.file)), event.dataRef);
  check(() => assert.ok(
    fs.existsSync(refTarget),
    `${event.file}: $ref trỏ tới file không tồn tại (${event.dataRef})`));

  const overlay = dataAllOf[1] ?? {};
  for (const field of event.dataRequired) {
    check(() => assert.ok(
      (overlay.required ?? []).includes(field),
      `${event.file}: data.required thiếu "${field}" — consumer mất một mảnh để ra quyết định chặn`));
  }

  const [constrainedName, constrainedValue] = event.constrainedProperty;
  check(() => assert.equal(
    overlay.properties?.[constrainedName]?.const,
    constrainedValue,
    `${event.file}: ${constrainedName} phải bị ghim const ${JSON.stringify(constrainedValue)}`));
}

// ── 3. sale-lock.schema.json — từ vựng đối ngoại và bất biến trạng thái ───────────────────────────
const saleLock = readJson("schemas/ops/sale-lock.schema.json");

check(() => assert.deepEqual(
  saleLock.properties?.scope_type?.enum,
  ["SKU", "BATCH", "LOT", "TRACE_CHAIN"],
  "sale-lock.schema.json: scope_type đối ngoại phải đúng 4 giá trị. "
  + "Nới ra là lộ định danh nội bộ (QR / phiếu nhập / lô hàng / khách hàng đã được chiếu về TRACE_CHAIN); "
  + "thu hẹp là consumer gặp giá trị không xử lý được."));

check(() => assert.deepEqual(
  saleLock.properties?.status?.enum,
  ["ACTIVE", "RELEASE_REQUESTED", "RELEASED", "REVIEW_REQUIRED", "BLOCKED"],
  "sale-lock.schema.json: tập status bị đổi"));

for (const field of ["sale_lock_id", "scope_type", "scope_id", "status", "active", "reason", "recall_case_id", "effective_from"]) {
  check(() => assert.ok(
    (saleLock.required ?? []).includes(field),
    `sale-lock.schema.json: required thiếu "${field}"`));
}

// recall_case_id là con trỏ tra ngược: đường event chiếu 4 phạm vi hẹp về TRACE_CHAIN với
// scope_id = recall_case_id, nên mất trường này là consumer không lần ra SKU được nữa.
check(() => assert.ok(
  saleLock.properties?.recall_case_id,
  "sale-lock.schema.json: mất recall_case_id thì consumer không tra ngược ra SKU được"));

const conditionals = saleLock.allOf ?? [];
const activeRule = conditionals.find(rule => rule.if?.properties?.status?.const === "ACTIVE");
const releasedRule = conditionals.find(rule => rule.if?.properties?.status?.const === "RELEASED");

check(() => assert.equal(
  activeRule?.then?.properties?.active?.const,
  true,
  "sale-lock.schema.json: status=ACTIVE phải kéo theo active=true"));

check(() => assert.equal(
  releasedRule?.then?.properties?.active?.const,
  false,
  "sale-lock.schema.json: status=RELEASED phải kéo theo active=false"));

check(() => assert.ok(
  (releasedRule?.then?.required ?? []).includes("effective_to"),
  "sale-lock.schema.json: status=RELEASED phải bắt buộc effective_to"));

// ── 4. AsyncAPI — kênh phải khớp chính xác tên event ──────────────────────────────────────────────
const asyncApi = readText("asyncapi/integration-events.v1.yaml");

for (const event of EVENTS) {
  check(() => assert.ok(
    new RegExp(`^  ${event.eventType.replace(/\./g, "\\.")}:$`, "m").test(asyncApi),
    `asyncapi/integration-events.v1.yaml: thiếu kênh ${event.eventType}`));
}

// ── 5. recall_case_open — cờ rủi ro của M6, và ranh giới KHÔNG được vượt ──────────────────────────
// Owner chốt 10-09-2026: thêm cờ boolean, KHÔNG thêm token vào block_reasons. Lý do nằm ở chỗ
// `decision` được suy ra từ chính `block_reasons` (rỗng ⇒ SELLABLE), nên nhét một token vào đó biến
// mọi SKU có hồ sơ thu hồi mở thành không bán được với hệ bán hàng, bất kể còn hàng sạch — đó là đổi
// chính sách bán, không phải thêm nhãn. Bốn khẳng định dưới đây ghim đúng ranh giới ấy.
const sellableStatus = readJson("schemas/ops/sellable-status.schema.json");

check(() => assert.equal(
  sellableStatus.properties?.recall_case_open?.type,
  "boolean",
  "sellable-status.schema.json: thiếu cờ recall_case_open (kiểu boolean) — cổng rủi ro của M6 đọc trường này"));

check(() => assert.ok(
  !(sellableStatus.required ?? []).includes("recall_case_open"),
  "recall_case_open phải là BỔ SUNG: đưa vào required là phá consumer v1 đang chạy"));

check(() => assert.match(
  sellableStatus.properties?.recall_case_open?.description ?? "",
  /NOT part of decision or block_reasons/i,
  "mô tả của recall_case_open phải ghi rõ nó KHÔNG tham gia decision/block_reasons — "
  + "ranh giới này sống trong hợp đồng đã phát hành, không chỉ trong comment mã nguồn"));

check(() => assert.match(
  sellableStatus.properties?.block_reasons?.description ?? "",
  /Exactly the 11 tokens/,
  "block_reasons vẫn phải là đúng 11 token của OpSellableStatus.GetBlockReasons. "
  + "Test này đỏ khi ai đó thêm RECALL_CASE_OPEN (hoặc token thứ 12 bất kỳ) vào từ vựng chặn — "
  + "hãy đọc lại vì sao owner từ chối, đừng sửa assertion cho xanh"));

// ── 6. Cổng an toàn cho chính test này ────────────────────────────────────────────────────────────
// Regex hoặc bộ liệt kê hỏng thì test soi 0 thứ và xanh giả. 4 event × (6 envelope + 4 data +
// 5..6 required) + 14 khẳng định schema/asyncapi ⇒ luôn > 60.
assert.ok(
  checks > 60,
  `contract test tự kiểm: chỉ chạy được ${checks} khẳng định — bộ liệt kê hỏng`);

console.log(`recall-sale-lock v1 contract test: ${checks} khẳng định PASS (4 event, 2 schema dùng chung, 4 kênh AsyncAPI, cờ recall_case_open).`);
