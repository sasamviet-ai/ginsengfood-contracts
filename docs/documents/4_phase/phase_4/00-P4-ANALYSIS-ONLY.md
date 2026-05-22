**FILE: 00-P4-ANALYSIS-ONLY.md**

**PROMPT-P4 — AI ADVISOR RUNTIME ANALYSIS HANDOFF**

**MODE: ANALYSIS ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**PROMPT:** PROMPT-P4 — AI ADVISOR RUNTIME ANALYSIS HANDOFF  
**MODE:** ANALYSIS ONLY  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.2E — COMMERCE SMOKE / EVIDENCE REPORT  
**PROMPT TIẾP THEO:** PROMPT-P4.1 — AI ADVISOR TECHNICAL DESIGN HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

Chỉ bắt đầu P4 Analysis khi:

1. P3 QuoteSnapshot evidence đã submit.
2. P3 Order Draft evidence đã submit.
3. Không có P0 Commerce blocker ảnh hưởng AI.
4. Owner/dev lead cho phép P4 Analysis.
5. Global Gateway vẫn BLOCKED.

Nếu chưa đủ, ghi `P4-ENTRY-BLOCKED-BY-P3-COMMERCE-DEPENDENCY`.

## 3. SOURCE-OF-TRUTH BẮT BUỘC

1. TECH-05 — AI Advisor Runtime.
2. TECH-04 — Commerce Runtime.
3. TECH-02 — Product Knowledge.
4. TECH-03 — Sellable / Sale Lock / Recall.
5. TECH-06 — Gateway delivery dependency.
6. TECH-10 — Evidence / Release Gateway.
7. TECH-11 — Implementation Roadmap.
8. TECH-12 — PHASE 4 Backlog Matrix.
9. TECH-13 — PROMPT-P4 final pack.
10. PACK-10 — Completion / Evidence / Gateway.
11. P3 reports/evidence.

## 4. SCOPE IN

P4 Analysis inspect backend thật cho:

1. AI Orchestrator.
2. Channel/session context.
3. Product Knowledge resolver.
4. Claim Guard.
5. Medical/sensitive wording guard nếu có.
6. Customer Memory / CRM context.
7. Intent routing.
8. Sellable/suppression dependency.
9. QuoteSnapshot consumption.
10. Order Draft presentation / confirmation handoff.
11. Payment response boundary.
12. Public/private data boundary.
13. Runtime unavailable fail-safe.
14. Human handoff.
15. Final Response Guard.
16. Evidence/test/feedback runtime.

## 5. SCOPE OUT

Không được:

1. Sửa file.
2. Tạo prompt production.
3. Implement Gateway.
4. Implement Ads/Live/IVR.
5. Tự viết product knowledge mới.
6. Tự tạo quote/order/payment.
7. Gọi release/pass/ready.
8. Mở Global Gateway.

## 6. REQUIRED ANALYSIS OUTPUT

1. Current AI Implementation State Matrix.
2. Product Knowledge / Claim Gap Matrix.
3. Commerce Dependency Gap Matrix.
4. Privacy / Public-Private Boundary Matrix.
5. Response Guard Gap Matrix.
6. API/DTO/Schema Impact Matrix nếu có.
7. Test Coverage Matrix.
8. P0/P1/P2 Blocker Register.
9. Evidence Required Matrix.
10. Smoke Required Matrix.
11. Owner Decision Required list.
12. Frontend/Gateway impact note nếu contract thay đổi.
13. Git status / diff summary.
14. Report đủ 14 mục.

## 7. P0 ANALYSIS CHECKLIST

Agent phải tìm rõ:

1. AI có trả lời trước guard không.
2. AI có dùng Product Knowledge chưa approved không.
3. AI có bịa claim hoặc wording quá mức không.
4. AI có tự tính giá không.
5. AI có báo giá không QuoteSnapshot không.
6. AI có tạo order/payment không.
7. AI có nói PAID khi chưa payment confirmed không.
8. AI có public private data không.
9. AI có bỏ qua Sale Lock / Recall không.
10. AI có fail-safe khi runtime unavailable không.

## 8. DONE GATE

Trạng thái tối đa được phép:

**PHASE 4 ANALYSIS REPORT COMPLETED — NOT IMPLEMENTATION READY UNTIL P4.1 AND OWNER REVIEW**  
**GLOBAL GATEWAY: BLOCKED**

