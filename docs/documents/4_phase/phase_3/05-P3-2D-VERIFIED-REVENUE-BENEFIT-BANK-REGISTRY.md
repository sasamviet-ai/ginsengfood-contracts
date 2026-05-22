**FILE: 05-P3-2D-VERIFIED-REVENUE-BENEFIT-BANK-REGISTRY.md**

**PROMPT-P3.2D — VERIFIED REVENUE / RUNTIME BENEFIT / BANK REGISTRY IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**BACKLOG:** COM-BLG-009 / COM-BLG-010 / COM-BLG-011  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.2C — Official Order / Payment / Shipping  
**PROMPT TIẾP THEO:** PROMPT-P3.2E — Commerce Smoke / Evidence Pack  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P3.2C report đã có.
2. Official Order / Payment / COD / Shipping evidence đã submit.
3. Không có P0 order/payment/shipping blocker mở.
4. Benefit and bank registry source-of-truth rõ.
5. Owner/dev lead cho phép slice này.
6. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

Implement tối thiểu:

1. Verified Revenue resolver.
2. Exclude quote/cart/draft/payment pending/payment failed/COD pending/cancel/refund.
3. Runtime benefit resolver for program/member/Diamond/referral.
4. Policy priority when benefits conflict.
5. Company Bank Account Registry.
6. Payment instruction uses registry/runtime, no hardcode.
7. Downstream handoff to Ads/KPI/commission/AI/Gateway/Live/IVR.
8. Evidence/audit/correlation for revenue and bank instruction.

## 4. SCOPE OUT

Không implement:

1. Ads attribution / ROAS / scale gate.
2. MISA full sync.
3. Commission payout.
4. AI/Gateway rendering.
5. Release Gateway.

## 5. P0 BLOCKER

1. Unverified order/payment thành Verified Revenue.
2. Payment pending/review/failed vẫn revenue.
3. COD pending vẫn revenue.
4. Cancel/refund/COD fail vẫn revenue.
5. Quote/cart/draft được tính revenue.
6. AI/Gateway tự cộng benefit/discount.
7. Bank account hardcoded.
8. Missing bank registry nhưng vẫn tạo instruction.
9. Verified Revenue không có evidence source.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P3.2D-SMK-001 | Official Order unpaid | Not Verified Revenue |
| P3.2D-SMK-002 | Payment pending/review | Not Verified Revenue |
| P3.2D-SMK-003 | Payment confirmed + order verified | Verified Revenue created |
| P3.2D-SMK-004 | COD pending | Not Verified Revenue |
| P3.2D-SMK-005 | Cancel/refund | Excluded / reversed theo policy |
| P3.2D-SMK-006 | Benefit conflict | Policy priority decides |
| P3.2D-SMK-007 | Missing bank registry | Payment instruction blocked |
| P3.2D-SMK-008 | Hardcoded bank account in template | Fail Gate |

## 7. DOWNSTREAM HANDOFF

Sau P3.2D:

1. Ads chỉ được dùng Verified Revenue, không dùng order/payment pending.
2. AI/Gateway/Live chỉ được nói benefit/price từ QuoteSnapshot/runtime.
3. IVR chỉ được dùng Official Order / Core Order State.
4. P3.2E phải chạy smoke/evidence trước owner review.

## 8. FINAL STATUS

**PROMPT-P3.2D FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 3 COMPLETE**  
**NOT ADS READY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

