**FILE: 06-P4-2E-SMOKE-EVIDENCE-REPORT.md**

**PROMPT-P4.2E — PHASE 4 AI ADVISOR SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-04 — AI ADVISOR RUNTIME  
**PROMPT:** PROMPT-P4.2E — AI ADVISOR SMOKE / EVIDENCE REPORT  
**PROMPT LIỀN TRƯỚC:** PROMPT-P4.2D — Final Response Guard / Privacy / Fail-safe  
**PROMPT TIẾP THEO:** PROMPT-P5 — FACEBOOK GATEWAY ANALYSIS HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

1. P4 Analysis report đã có.
2. P4 Technical Design report đã có.
3. P4.2A report đã có.
4. P4.2B report đã có.
5. P4.2C report đã có.
6. P4.2D report đã có.
7. Agent có thể chạy build/test/smoke phù hợp.
8. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

P4.2E chỉ được:

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
11. Lập handoff sang PHASE 5 nếu đủ điều kiện review.

## 4. SCOPE OUT

Không được:

1. Tạo feature code mới.
2. Sửa business logic.
3. Sửa Gateway/Ads/Live/IVR.
4. Tạo migration/seed mới.
5. Gọi Completion PASS.
6. Gọi Release Ready.
7. Gọi Production Ready.
8. Gọi Go-live Approved.
9. Mở Global Gateway.

## 5. SMOKE MATRIX TỐI THIỂU

| Smoke ID | Domain | Scenario | Expected |
|---|---|---|---|
| P4E-SMK-001 | Product Knowledge | Unapproved knowledge | AI không tư vấn chi tiết |
| P4E-SMK-002 | Claim | Unapproved claim | Blocked |
| P4E-SMK-003 | Claim | Medical cure wording | Blocked / human-safe response |
| P4E-SMK-004 | Intent | Hỏi giá | Route Commerce QuoteSnapshot |
| P4E-SMK-005 | Pricing | No QuoteSnapshot | No final price |
| P4E-SMK-006 | Pricing | Active QuoteSnapshot | Correct price + expiry |
| P4E-SMK-007 | Order | Customer says buy before draft | No official order claim |
| P4E-SMK-008 | Order | Commerce creates official order | AI may show order_code |
| P4E-SMK-009 | Payment | Transfer proof image | Review/pending, not PAID |
| P4E-SMK-010 | Payment | Payment confirmed runtime | AI may say payment confirmed |
| P4E-SMK-011 | Privacy | Public response contains private data | Blocked |
| P4E-SMK-012 | Suppression | Sale Lock / Recall active | AI suppresses sales |
| P4E-SMK-013 | Runtime | Product/Commerce/Payment unavailable | Fail-safe |
| P4E-SMK-014 | Final Guard | Guard fail | Response not sent |

Không gọi smoke này là Global Smoke Pass.

## 6. EVIDENCE PACKAGE TỐI THIỂU

1. Source-of-truth đã đọc.
2. P4 Analysis report.
3. P4 Technical Design report.
4. P4.2A-D implementation reports.
5. File changes summary.
6. Git diff summary.
7. Build result.
8. Test result.
9. Smoke result.
10. Product Knowledge evidence.
11. Claim Guard evidence.
12. Customer Memory evidence.
13. QuoteSnapshot consumption evidence.
14. Order Draft handoff evidence.
15. Payment response evidence.
16. Privacy boundary evidence.
17. Final Response Guard evidence.
18. Runtime unavailable fail-safe evidence.
19. Open blocker/risk.
20. Gateway blocked evidence.

Evidence status chỉ được dùng: FOUND, SUBMITTED, MISSING, NEEDS_REVIEW, REJECTED_BY_SMOKE, BLOCKED.

## 7. ĐIỀU KIỆN VIẾT P5 ANALYSIS

Chỉ được viết/chạy P5 Analysis khi:

1. P4.2E report đủ 14 mục.
2. AIA-BLG-006 Final Response Guard evidence đã submit.
3. Public/private boundary evidence đã submit.
4. Không có P0 AI blocker ảnh hưởng Gateway.
5. Owner/dev lead cho phép P5 Analysis.
6. Global Gateway vẫn BLOCKED.

## 8. FINAL STATUS BẮT BUỘC

**PROMPT-P4.2E FINAL STATUS: PHASE 4 VALIDATION REPORT ONLY**  
**PHASE 4 EVIDENCE SUBMITTED FOR REVIEW ONLY**  
**NOT PHASE 4 COMPLETE UNTIL OWNER REVIEW**  
**NOT COMPLETION PASS**  
**NOT RELEASE READY**  
**NOT PRODUCTION READY**  
**NOT GO-LIVE APPROVED**  
**GLOBAL GATEWAY: BLOCKED**

