**PHASE-03-COMMERCE-RUNTIME/README-PHASE-03-HANDOFF-INDEX.md**

**README — PHASE-03 COMMERCE RUNTIME HANDOFF INDEX / EXECUTION ORDER / GATEWAY LOCK**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**FILE:** README-PHASE-03-HANDOFF-INDEX.md  
**TYPE:** HANDOFF INDEX / EXECUTION MAP / GATEWAY LOCK  
**STATUS:** CLEAN FINAL DRAFT  
**GLOBAL GATEWAY:** BLOCKED  
**OWNER REVIEW REQUIRED:** YES  
**EVIDENCE ACCEPTANCE REQUIRED:** YES  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

## 2. HEADER

Tài liệu này điều phối toàn bộ PHASE 3 — Commerce Runtime.

Mục tiêu là giúp dev/Codex/Copilot biết:

1. PHASE 3 gồm những file nào.
2. Chạy file nào trước, file nào sau.
3. File nào chỉ phân tích.
4. File nào chỉ thiết kế.
5. File nào mới được limited implementation.
6. File nào chỉ smoke/evidence/report.
7. Commerce không được vượt Operational truth.
8. AI/Gateway/Live/Ads/IVR không được vượt Commerce truth.
9. Global Gateway vẫn BLOCKED.

README này không thay thế prompt chi tiết và không phải bằng chứng implementation complete.

## 3. PHẠM VI PHASE 3

PHASE 3 tập trung vào Commerce Runtime:

**Operational Truth → Sellable Gate → QuoteSnapshot → Cart → Order Draft → Customer Confirmation → Official Order → Payment / COD / Shipping → Order Verification → Verified Revenue → Downstream Handoff**

PHASE 3 bao gồm:

1. Sellable Gate from Operational.
2. QuoteSnapshot as only final price source.
3. Cart not Order boundary.
4. Order Draft not Official Order boundary.
5. Customer Confirmation.
6. Official Order state machine.
7. Payment confirmation boundary.
8. COD / delivery / shipping boundary.
9. Verified Revenue resolver.
10. Program / member / Diamond runtime benefit.
11. Bank Account Registry / no hardcoded payment account.
12. Commerce smoke / evidence pack.

PHASE 3 không triển khai AI Advisor behavior, Facebook Gateway, Ads Scale, MC AI Live, IVR hoặc Release Gateway.

## 4. SOURCE-OF-TRUTH BẮT BUỘC

Trước mọi phân tích hoặc sửa code, agent phải đọc:

1. TECH-04 — Commerce Runtime.
2. TECH-03 — Operational Core.
3. TECH-05 — AI Advisor dependency.
4. TECH-07 — Verified Revenue dependency nếu liên quan Ads.
5. TECH-09 — Official Order dependency nếu liên quan IVR.
6. TECH-10 — Global Smoke / UAT / Evidence / Release Gateway.
7. TECH-11 — Implementation Roadmap.
8. TECH-12 — Phase Backlog Pack.
9. TECH-13 — Codex / Copilot Dev Prompt Pack.
10. PACK-10 — Completion / Evidence / Gateway / Release Readiness.
11. PHASE 2 P2.2F report và owner/dev lead decision.

Nếu `docs/docs-ginsengfood-project/`, `schema-project.sql`, hoặc `repo-structure-convention.en.md` xuất hiện thì phải đối chiếu trước khi sửa backend.

## 5. ĐIỀU KIỆN BẮT ĐẦU PHASE 3

Chỉ được bắt đầu PROMPT-P3 Analysis khi:

1. P2.2F đã có Smoke / Evidence / Implementation Report.
2. P2.2F đã có Evidence Register.
3. P2.2F đã có Open Blocker Register.
4. P2.2F đã có Risk Register.
5. Không còn P0/P1/P2 blocker nghiêm trọng mở.
6. Evidence đã submit cho owner/reviewer.
7. Owner/dev lead cho phép viết/chạy P3 Analysis.
8. Global Gateway vẫn BLOCKED.

Nếu chưa đủ các điều kiện trên, PHASE 3 chỉ được chuẩn bị tài liệu/handoff, không implement backend.

## 6. THỨ TỰ FILE PHASE 3

| Thứ tự | File | Mode | Mục đích | Sửa code |
|---|---|---|---|---|
| 0 | README-PHASE-03-HANDOFF-INDEX.md | Handoff Index | Điều phối Phase 3 | Không |
| 1 | 00-P3-ANALYSIS-ONLY.md | ANALYSIS ONLY | Inspect backend thật, lập gap/blocker | Không |
| 2 | 01-P3-1-TECHNICAL-DESIGN-ONLY.md | TECHNICAL DESIGN ONLY | Workstream, API/DTO/schema/state/event plan | Không |
| 3 | 02-P3-2A-SELLABLE-GATE-FROM-OPERATIONAL.md | LIMITED IMPLEMENTATION | Sellable Gate từ Operational truth | Có giới hạn |
| 4 | 03-P3-2B-QUOTE-SNAPSHOT-CART-ORDER-DRAFT.md | LIMITED IMPLEMENTATION | QuoteSnapshot, Cart, Order Draft | Có giới hạn |
| 5 | 04-P3-2C-OFFICIAL-ORDER-PAYMENT-SHIPPING.md | LIMITED IMPLEMENTATION | Official Order, Payment, COD, Shipping | Có giới hạn |
| 6 | 05-P3-2D-VERIFIED-REVENUE-BENEFIT-BANK-REGISTRY.md | LIMITED IMPLEMENTATION | Verified Revenue, benefit runtime, bank registry | Có giới hạn |
| 7 | 06-P3-2E-SMOKE-EVIDENCE-REPORT.md | VALIDATION / SMOKE / EVIDENCE REPORT ONLY | Smoke/evidence/report Phase 3 | Không thêm feature |

Không được nhảy từ README sang implementation. Không được bỏ qua Analysis hoặc Technical Design.

## 7. KHÓA RULE PHASE 3

1. Operational blocked thì Commerce blocked.
2. Product Active không đồng nghĩa Sellable.
3. Không QuoteSnapshot thì không final price.
4. Quote hết hạn thì không tạo Official Order.
5. Không Customer Confirmation thì không Official Order.
6. Cart không phải Order.
7. Order Draft không phải Official Order.
8. Ảnh chuyển khoản không phải PAID.
9. Payment pending/review/failed không phải Verified Revenue.
10. COD pending không phải revenue.
11. Verified Revenue chỉ đến từ Commerce / Payment / Accounting Review hợp lệ.
12. AI/Gateway/Live không tự tính giá hoặc tự cộng quyền lợi.
13. Không hardcode tài khoản ngân hàng trong AI/Gateway/frontend/template/chat/live.
14. Sale Lock / Recall thắng Commerce.
15. Evidence Submitted chưa phải Evidence Accepted.
16. Smoke cục bộ chưa phải Global Smoke Pass.
17. Global Gateway vẫn BLOCKED.

## 8. P0 BLOCKER TOÀN PHASE 3

1. Operational blocked nhưng Commerce vẫn bán.
2. Product Active được dùng thay Sellable.
3. Không có QuoteSnapshot vẫn báo giá cuối.
4. Quote expired vẫn tạo Official Order.
5. Cart hoặc Order Draft tạo order_code.
6. Không Customer Confirmation vẫn tạo Official Order.
7. Retry tạo order trùng.
8. Ảnh chuyển khoản được gắn PAID.
9. Payment pending/review/failed vẫn Verified Revenue.
10. COD chưa thu vẫn PAID/revenue.
11. Bank account bị hardcode.
12. Benefit/discount/referral được AI/Gateway tự cộng.
13. Runtime unavailable nhưng Commerce vẫn pass.
14. Sale Lock / Recall không chặn Commerce.
15. Evidence chưa accepted nhưng gọi PASS.
16. Smoke fail nhưng vẫn gọi done.
17. Phase 3 Done bị gọi Release Ready / Production Ready / Go-live Approved.

## 9. DOWNSTREAM SAU PHASE 3

PHASE 4 AI Advisor chỉ được bắt đầu Analysis khi:

1. COM-BLG-002 QuoteSnapshot có evidence tối thiểu.
2. COM-BLG-004 Order Draft boundary có evidence tối thiểu.
3. P3 smoke/evidence report đã submit.
4. Không có P0 Commerce blocker ảnh hưởng AI quote/order/payment.
5. Owner/dev lead cho phép viết P4 Analysis.

PHASE 6 Ads cần COM-BLG-009 Verified Revenue.  
PHASE 8 IVR cần COM-BLG-006 Official Order State Machine.  
Global Gateway vẫn BLOCKED đến TECH-10.

## 10. FINAL STATUS

**FILE STATUS:** CLEAN FINAL DRAFT  
**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**IMPLEMENTATION ALLOWED BY THIS FILE:** NO  
**CODE CHANGE ALLOWED BY THIS FILE:** NO  
**GATEWAY STATUS:** BLOCKED  
**EVIDENCE STATUS:** NOT ACCEPTED UNTIL OWNER REVIEW  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

