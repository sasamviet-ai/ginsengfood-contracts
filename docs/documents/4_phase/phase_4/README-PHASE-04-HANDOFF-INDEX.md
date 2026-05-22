**PHASE-04-AI-ADVISOR-RUNTIME/README-PHASE-04-HANDOFF-INDEX.md**

**README — PHASE-04 AI ADVISOR RUNTIME HANDOFF INDEX / EXECUTION ORDER / GATEWAY LOCK**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**FILE:** README-PHASE-04-HANDOFF-INDEX.md  
**TYPE:** HANDOFF INDEX / EXECUTION MAP / GATEWAY LOCK  
**STATUS:** CLEAN FINAL DRAFT  
**GLOBAL GATEWAY:** BLOCKED  
**OWNER REVIEW REQUIRED:** YES  
**EVIDENCE ACCEPTANCE REQUIRED:** YES  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

## 2. HEADER

Tài liệu này điều phối toàn bộ PHASE 4 — AI Advisor Runtime.

AI Advisor là lớp tư vấn, diễn giải, gợi ý và hỗ trợ chốt đơn có kiểm soát. AI không phải source-of-truth cho sản phẩm, tồn kho, giá, đơn hàng, thanh toán, public trace, recall hoặc doanh thu.

## 3. PHẠM VI PHASE 4

PHASE 4 bao gồm:

1. Product Knowledge Resolver.
2. Claim Guard / Public Wording Policy.
3. Customer Memory Resolver.
4. QuoteSnapshot Consumption.
5. Order Draft Handoff.
6. Final Response Guard.
7. Public / Private Data Boundary.
8. Product Name Public Policy.
9. Runtime Unavailable Fail-safe.
10. AI Advisor Smoke / Evidence Pack.

PHASE 4 không triển khai Facebook Gateway, Ads, MC AI Live, IVR hoặc Release Gateway.

## 4. SOURCE-OF-TRUTH BẮT BUỘC

1. TECH-05 — AI Advisor Runtime.
2. TECH-04 — Commerce Runtime.
3. TECH-02 — Product / SKU / Product Knowledge.
4. TECH-03 — Operational / Sellable / Sale Lock / Recall dependency.
5. TECH-06 — Gateway dependency.
6. TECH-10 — Evidence / Release Gateway.
7. TECH-11 — Implementation Roadmap.
8. TECH-12 — PHASE 4 Backlog Matrix.
9. TECH-13 — PROMPT-P4 final pack.
10. PACK-10 — Completion / Evidence / Gateway.
11. P3 QuoteSnapshot / Order Draft evidence.

## 5. ĐIỀU KIỆN BẮT ĐẦU PHASE 4

Chỉ được bắt đầu P4 Analysis khi:

1. P3.2E report đã có hoặc owner/dev lead cho phép analysis song song ở trạng thái non-release.
2. QuoteSnapshot evidence tối thiểu đã submit.
3. Order Draft evidence tối thiểu đã submit.
4. Không có P0 Commerce blocker ảnh hưởng AI quote/order/payment.
5. Owner/dev lead cho phép P4 Analysis.
6. Global Gateway vẫn BLOCKED.

Nếu chưa đủ, PHASE 4 chỉ được chuẩn bị tài liệu/handoff, không implement backend.

## 6. THỨ TỰ FILE PHASE 4

| Thứ tự | File | Mode | Mục đích | Sửa code |
|---|---|---|---|---|
| 0 | README-PHASE-04-HANDOFF-INDEX.md | Handoff Index | Điều phối Phase 4 | Không |
| 1 | 00-P4-ANALYSIS-ONLY.md | ANALYSIS ONLY | Inspect AI modules, gap/blocker | Không |
| 2 | 01-P4-1-TECHNICAL-DESIGN-ONLY.md | TECHNICAL DESIGN ONLY | Workstream, guard, evidence/smoke | Không |
| 3 | 02-P4-2A-PRODUCT-KNOWLEDGE-CLAIM-GUARD.md | LIMITED IMPLEMENTATION | Product Knowledge + Claim Guard | Có giới hạn |
| 4 | 03-P4-2B-CUSTOMER-MEMORY-INTENT-ROUTING.md | LIMITED IMPLEMENTATION | Customer Memory + Intent Routing | Có giới hạn |
| 5 | 04-P4-2C-QUOTE-CONSUMPTION-ORDER-DRAFT-HANDOFF.md | LIMITED IMPLEMENTATION | Quote consumption + Order Draft handoff | Có giới hạn |
| 6 | 05-P4-2D-FINAL-RESPONSE-GUARD-PRIVACY-FAILSAFE.md | LIMITED IMPLEMENTATION | Final Response Guard + privacy + fail-safe | Có giới hạn |
| 7 | 06-P4-2E-SMOKE-EVIDENCE-REPORT.md | VALIDATION / SMOKE / EVIDENCE REPORT ONLY | Smoke/evidence/report Phase 4 | Không thêm feature |

## 7. KHÓA RULE PHASE 4

1. AI chỉ dùng Product Knowledge approved.
2. AI không tự tạo claim.
3. AI không bán SKU không sellable.
4. AI không public số lượng tồn kho.
5. Không QuoteSnapshot thì AI không báo final price.
6. Không Customer Confirmation / Official Order thì AI không nói đã tạo đơn.
7. Không Payment Confirmation thì AI không nói đã thanh toán.
8. AI không public private/internal data.
9. Recall / Sale Lock thắng AI.
10. Runtime unavailable thì AI fail-safe, không suy đoán.
11. Response phải qua Final Response Guard.
12. Global Gateway vẫn BLOCKED.

## 8. P0 BLOCKER TOÀN PHASE 4

1. AI gửi response trước guard.
2. Product Knowledge chưa approved vẫn public.
3. Claim chưa approved vẫn public.
4. AI nói chữa bệnh/thay thuốc.
5. Private/internal data bị public.
6. Memory dùng sai khách/sai kênh.
7. SKU không sellable vẫn chốt.
8. Không QuoteSnapshot vẫn báo giá.
9. Order Draft thiếu vẫn xác nhận.
10. AI tự cấp order_code.
11. AI nói PAID khi chưa payment confirmed.
12. Bank account hardcoded.
13. Public Trace blocked vẫn nói valid.
14. Human handoff bắt buộc nhưng AI tự xử lý.
15. Runtime unavailable nhưng AI khẳng định.
16. Evidence chưa accepted nhưng PASS.

## 9. FINAL STATUS

**FILE STATUS:** CLEAN FINAL DRAFT  
**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**IMPLEMENTATION ALLOWED BY THIS FILE:** NO  
**CODE CHANGE ALLOWED BY THIS FILE:** NO  
**GATEWAY STATUS:** BLOCKED  
**EVIDENCE STATUS:** NOT ACCEPTED UNTIL OWNER REVIEW  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

