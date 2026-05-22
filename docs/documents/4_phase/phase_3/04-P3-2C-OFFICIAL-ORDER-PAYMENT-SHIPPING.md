**FILE: 04-P3-2C-OFFICIAL-ORDER-PAYMENT-SHIPPING.md**

**PROMPT-P3.2C — OFFICIAL ORDER / PAYMENT / COD / SHIPPING IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**BACKLOG:** COM-BLG-005 / COM-BLG-006 / COM-BLG-007 / COM-BLG-008  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.2B — QuoteSnapshot / Cart / Order Draft  
**PROMPT TIẾP THEO:** PROMPT-P3.2D — Verified Revenue / Benefit / Bank Registry  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P3.2B report đã có.
2. QuoteSnapshot và Order Draft evidence đã submit.
3. Không có P0 quote/cart/draft blocker mở.
4. Payment/shipping source-of-truth rõ.
5. Owner/dev lead cho phép slice này.
6. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

Implement tối thiểu:

1. Customer Confirmation linked to complete Order Draft.
2. Official Order creation only after valid confirmation.
3. Official Order state machine.
4. Payment method selection.
5. Bank transfer review state; proof image does not equal PAID.
6. Payment confirmation source from Payment Core / Accounting Review / gateway callback if scoped.
7. COD pending state.
8. Shipping eligibility / fee / method boundary.
9. Idempotency for order creation and payment update.
10. Audit/evidence/correlation.

## 4. SCOPE OUT

Không implement:

1. Verified Revenue final resolver.
2. Ads/KPI/commission.
3. MISA/accounting sync.
4. AI Advisor message behavior.
5. IVR call flow.
6. Global Release Gateway.

## 5. P0 BLOCKER

1. Không Customer Confirmation vẫn tạo Official Order.
2. Order Draft invalid vẫn tạo order_code.
3. Retry tạo order trùng.
4. Payment method inactive/invalid vẫn chọn được.
5. Payment proof image tự thành PAID.
6. Payment pending/review/failed vẫn PAID.
7. COD pending vẫn PAID/revenue.
8. Shipping not eligible vẫn tạo order ship.
9. Payment/shipping private data bị public.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P3.2C-SMK-001 | Draft incomplete + customer confirm | Không tạo order |
| P3.2C-SMK-002 | Draft complete + valid confirmation | Tạo Official Order + order_code |
| P3.2C-SMK-003 | Retry same idempotency key | Không duplicate order |
| P3.2C-SMK-004 | Inactive payment method | Bị chặn |
| P3.2C-SMK-005 | Upload transfer proof | Payment review, không PAID |
| P3.2C-SMK-006 | Payment confirmed by valid source | PAID / payment confirmed state |
| P3.2C-SMK-007 | COD order created | COD pending, không revenue |
| P3.2C-SMK-008 | Shipping ineligible area | Block shipping/order path theo policy |

## 7. FINAL STATUS

**PROMPT-P3.2C FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 3 COMPLETE**  
**NOT VERIFIED REVENUE READY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

