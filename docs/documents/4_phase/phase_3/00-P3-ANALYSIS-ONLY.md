**FILE: 00-P3-ANALYSIS-ONLY.md**

**PROMPT-P3 — COMMERCE RUNTIME / SELLABLE GATE / QUOTE / ORDER / PAYMENT / SHIPPING ANALYSIS HANDOFF**

**MODE: ANALYSIS ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**PROMPT:** PROMPT-P3 — COMMERCE RUNTIME ANALYSIS HANDOFF  
**MODE:** ANALYSIS ONLY  
**PROMPT LIỀN TRƯỚC:** PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF  
**PROMPT TIẾP THEO:** PROMPT-P3.1 — COMMERCE RUNTIME TECHNICAL DESIGN HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

Chỉ bắt đầu P3 Analysis khi:

1. P2.2F đã có report đủ 14 mục.
2. P2.2F có Smoke Result Matrix, Evidence Register, Open Blocker Register, Risk Register.
3. Không còn P0/P1/P2 blocker nghiêm trọng mở.
4. Evidence đã submit cho owner/reviewer.
5. Owner/dev lead cho phép P3 Analysis.
6. Global Gateway vẫn BLOCKED.

Nếu chưa rõ owner/dev lead approval, agent chỉ được lập blocker: `P3-ENTRY-BLOCKED-BY-P2-OWNER-REVIEW`.

## 3. SOURCE-OF-TRUTH BẮT BUỘC

Agent phải đọc và ưu tiên:

1. TECH-04 — Commerce Runtime.
2. TECH-03 — Operational Core.
3. TECH-05 — AI Advisor Runtime dependency.
4. TECH-07 — Verified Revenue dependency.
5. TECH-09 — Official Order / IVR dependency.
6. TECH-10 — Global Smoke / Evidence / Release Gateway.
7. TECH-11 — Implementation Roadmap.
8. TECH-12 — PHASE 3 Backlog Matrix.
9. TECH-13 — PROMPT-P3 final pack.
10. PACK-10 — Completion / Evidence / Gateway.
11. PHASE 2 reports and evidence.

Code hiện tại chỉ là `CURRENT_IMPLEMENTATION_STATE_ONLY`.

## 4. SCOPE IN

P3 Analysis phải inspect backend thật và lập matrix cho:

1. Product Scope / SKU / channel scope.
2. Operational Sellable dependency.
3. Sale Lock / Recall suppression input.
4. Listed Price / Program / Member / Diamond benefit runtime.
5. Policy priority.
6. QuoteSnapshot.
7. Quote expiry / refresh.
8. Cart.
9. Checkout context.
10. Order Draft.
11. Customer Confirmation.
12. Official Order / order_code.
13. Payment method / bank transfer / COD.
14. Shipping eligibility / fee.
15. Payment confirmation / paid state.
16. Order verification / Verified Revenue.
17. Downstream handoff to AI/Gateway/Ads/Live/IVR.
18. Audit / evidence / idempotency / correlation.
19. Existing API/DTO/schema/event/state machine/test.

## 5. SCOPE OUT

P3 Analysis không được:

1. Sửa file.
2. Tạo migration.
3. Tạo seed.
4. Tạo API mới.
5. Sửa business logic.
6. Implement AI Advisor.
7. Implement Facebook Gateway.
8. Implement Ads, MC AI Live, IVR.
9. Gọi Release Ready / Production Ready / Go-live Approved.
10. Mở Global Gateway.

## 6. REQUIRED ANALYSIS OUTPUT

Report P3 Analysis phải có:

1. Current Implementation State Matrix.
2. Gap Analysis Matrix.
3. Conflict Detection Matrix.
4. API/DTO/Schema Impact Matrix.
5. State Machine / Event Impact Matrix.
6. Test Coverage Matrix.
7. P0/P1/P2 Blocker Register.
8. Downstream Impact Matrix.
9. Evidence Required Matrix.
10. Smoke Required Matrix.
11. Owner Decision Required list.
12. Frontend Impact note nếu có API/DTO/endpoint/OpenAPI change.
13. Git status / diff summary.
14. Report đủ 14 mục.

## 7. P0 ANALYSIS CHECKLIST

Agent phải tìm rõ có tồn tại các rủi ro sau không:

1. Product Active đang bị dùng thay Sellable.
2. Operational blocked nhưng quote/cart/order vẫn được tạo.
3. Missing QuoteSnapshot nhưng vẫn báo final price.
4. Cart tạo order_code hoặc revenue.
5. Order Draft tự thành Official Order.
6. Customer Confirmation thiếu nhưng order được tạo.
7. Payment proof image tự thành PAID.
8. COD pending tự thành revenue.
9. Payment pending/review/failed tự thành Verified Revenue.
10. Bank account hardcoded trong UI/template/AI/Gateway.
11. Sale Lock / Recall không chặn Commerce.
12. Runtime unavailable nhưng vẫn pass.

## 8. DONE GATE

P3 Analysis done khi:

1. Đã đọc source-of-truth.
2. Đã kiểm tra P2 exit condition.
3. Đã inspect codebase thật.
4. Đã lập đủ matrix.
5. Đã ghi blocker/risk.
6. Đã xác định smoke/evidence cần có.
7. Không sửa code.
8. Không gọi ready/pass/release.
9. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép: **PHASE 3 ANALYSIS REPORT COMPLETED — NOT IMPLEMENTATION READY UNTIL P3.1 AND OWNER REVIEW**.

