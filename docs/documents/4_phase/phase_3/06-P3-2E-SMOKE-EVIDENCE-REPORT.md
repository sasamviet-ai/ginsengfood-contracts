**FILE: 06-P3-2E-SMOKE-EVIDENCE-REPORT.md**

**PROMPT-P3.2E — PHASE 3 COMMERCE SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**PROMPT:** PROMPT-P3.2E — COMMERCE SMOKE / EVIDENCE REPORT  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.2D — Verified Revenue / Benefit / Bank Registry  
**PROMPT TIẾP THEO:** PROMPT-P4 — AI ADVISOR ANALYSIS HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

P3.2E chỉ được bắt đầu khi:

1. P3 Analysis report đã có.
2. P3 Technical Design report đã có.
3. P3.2A report đã có.
4. P3.2B report đã có.
5. P3.2C report đã có.
6. P3.2D report đã có.
7. Toàn bộ limited implementation có report 14 mục.
8. Agent có thể chạy build/test/smoke phù hợp.
9. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

P3.2E chỉ được:

1. Đọc source-of-truth và reports.
2. Inspect codebase thật.
3. Chạy build/test/lint/smoke.
4. Kiểm tra migration/seed nếu có.
5. Kiểm tra git status/git diff.
6. Gom evidence.
7. Lập Smoke Result Matrix.
8. Lập Evidence Register.
9. Lập Open Blocker Register.
10. Lập Risk Register.
11. Lập handoff sang PHASE 4 nếu đủ điều kiện review.

## 4. SCOPE OUT

Không được:

1. Tạo feature code mới.
2. Sửa business logic.
3. Sửa AI Advisor.
4. Sửa Gateway/Ads/Live/IVR.
5. Tạo migration/seed mới.
6. Gọi Completion PASS.
7. Gọi Release Ready.
8. Gọi Production Ready.
9. Gọi Go-live Approved.
10. Mở Global Gateway.

## 5. SMOKE MATRIX TỐI THIỂU

| Smoke ID | Domain | Scenario | Expected |
|---|---|---|---|
| P3E-SMK-001 | Sellable | Operational blocked | Commerce blocked |
| P3E-SMK-002 | Sellable | Product Active only | Not sellable |
| P3E-SMK-003 | Quote | No QuoteSnapshot | No final price |
| P3E-SMK-004 | Quote | Quote expired | Cannot create official order |
| P3E-SMK-005 | Cart | Cart line no snapshot | Blocked |
| P3E-SMK-006 | Cart | Cart active | No revenue, no order_code |
| P3E-SMK-007 | Draft | Draft incomplete | Cannot confirm |
| P3E-SMK-008 | Order | Valid confirmation | Official Order created |
| P3E-SMK-009 | Order | Retry same key | No duplicate order |
| P3E-SMK-010 | Payment | Transfer proof image | Review only, not PAID |
| P3E-SMK-011 | Payment | Payment pending/review/failed | Not PAID / not revenue |
| P3E-SMK-012 | COD | COD pending | Not revenue |
| P3E-SMK-013 | Revenue | Payment confirmed + order verified | Verified Revenue |
| P3E-SMK-014 | Bank | Hardcoded bank account | Fail Gate |
| P3E-SMK-015 | Suppression | Sale Lock / Recall active | Commerce blocked |
| P3E-SMK-016 | Runtime | Runtime unavailable | Fail-safe, no guessing |

Không gọi smoke này là Global Smoke Pass.

## 6. EVIDENCE PACKAGE TỐI THIỂU

1. Source-of-truth đã đọc.
2. P3 Analysis report.
3. P3 Technical Design report.
4. P3.2A-D implementation reports.
5. File changes summary.
6. Git diff summary.
7. Build result.
8. Test result.
9. Smoke result.
10. Migration validation nếu có.
11. Seed validation nếu có.
12. Sellable decision evidence.
13. QuoteSnapshot evidence.
14. Cart / Order Draft evidence.
15. Official Order evidence.
16. Payment / COD / Shipping evidence.
17. Verified Revenue evidence.
18. Bank registry evidence.
19. Open blocker/risk.
20. Gateway blocked evidence.

Evidence status chỉ được dùng: FOUND, SUBMITTED, MISSING, NEEDS_REVIEW, REJECTED_BY_SMOKE, BLOCKED.

## 7. ĐIỀU KIỆN VIẾT P4 ANALYSIS

Chỉ được viết/chạy P4 Analysis khi:

1. P3.2E report đủ 14 mục.
2. COM-BLG-002 QuoteSnapshot evidence đã submit.
3. COM-BLG-004 Order Draft evidence đã submit.
4. Không có P0 Commerce blocker ảnh hưởng AI quote/order/payment.
5. Owner/dev lead cho phép P4 Analysis.
6. Global Gateway vẫn BLOCKED.

## 8. FINAL STATUS BẮT BUỘC

**PROMPT-P3.2E FINAL STATUS: PHASE 3 VALIDATION REPORT ONLY**  
**PHASE 3 EVIDENCE SUBMITTED FOR REVIEW ONLY**  
**NOT PHASE 3 COMPLETE UNTIL OWNER REVIEW**  
**NOT COMPLETION PASS**  
**NOT RELEASE READY**  
**NOT PRODUCTION READY**  
**NOT GO-LIVE APPROVED**  
**GLOBAL GATEWAY: BLOCKED**

