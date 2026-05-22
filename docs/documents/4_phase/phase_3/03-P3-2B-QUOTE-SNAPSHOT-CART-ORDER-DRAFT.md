**FILE: 03-P3-2B-QUOTE-SNAPSHOT-CART-ORDER-DRAFT.md**

**PROMPT-P3.2B — QUOTESNAPSHOT / CART / ORDER DRAFT IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**BACKLOG:** COM-BLG-002 / COM-BLG-003 / COM-BLG-004  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.2A — Sellable Gate From Operational  
**PROMPT TIẾP THEO:** PROMPT-P3.2C — Official Order / Payment / Shipping  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P3.2A report đã có.
2. Sellable Gate pass/block evidence đã submit.
3. Không có P0 Sellable blocker mở.
4. Price/program/member/referral source rõ.
5. Owner/dev lead cho phép slice này.
6. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

Implement tối thiểu:

1. QuoteSnapshot là nguồn final price duy nhất.
2. Quote expiry / refresh / supersede rule.
3. Cart line phải reference QuoteSnapshot.
4. Cart không tạo order_code, không revenue.
5. Order Draft phải có 3 phần: quote/price, delivery/shipping, payment/confirmation section.
6. Order Draft không phải Official Order.
7. Audit/evidence/idempotency cho command.
8. Tests cho missing/expired quote, cart invalid, draft incomplete.

## 4. SCOPE OUT

Không implement:

1. Official Order creation.
2. Payment confirmation / paid state.
3. Verified Revenue.
4. AI Advisor display behavior.
5. Gateway Messenger flow.
6. Global Gateway.

## 5. P0 BLOCKER

1. Không QuoteSnapshot vẫn báo final price.
2. Quote expired vẫn dùng để tạo draft/order.
3. QuoteSnapshot bị sửa trực tiếp không version/supersede.
4. Cart line không có QuoteSnapshot.
5. Cart tạo order_code.
6. Cart được tính revenue.
7. Order Draft thiếu 3 phần bắt buộc.
8. Order Draft tự thành Official Order.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P3.2B-SMK-001 | Sellable pass + runtime price pass | Tạo QuoteSnapshot active |
| P3.2B-SMK-002 | Missing QuoteSnapshot | Không báo final price |
| P3.2B-SMK-003 | Quote expired | Cần refresh, không tạo order |
| P3.2B-SMK-004 | Add cart without quote | Bị chặn |
| P3.2B-SMK-005 | Cart active | Không revenue, không order_code |
| P3.2B-SMK-006 | Draft thiếu delivery/payment section | Draft incomplete / block confirmation |
| P3.2B-SMK-007 | Valid cart + quote + checkout | Tạo Order Draft complete |

## 7. DOWNSTREAM HANDOFF

Sau P3.2B chỉ được handoff:

1. AI/Gateway/Live có thể tiêu thụ QuoteSnapshot safe view ở mức non-release.
2. P4 Analysis được phép chuẩn bị nếu owner/dev lead cho phép, nhưng P4 implementation vẫn chờ P3 smoke/evidence phù hợp.
3. Không gọi AI quote production-ready.

## 8. FINAL STATUS

**PROMPT-P3.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 3 COMPLETE**  
**NOT AI READY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

