**PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

| **FILE**             | 06-P1-2E-SMOKE-EVIDENCE-REPORT.docx                    |
|----------------------|--------------------------------------------------------|
| **PHASE**            | PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION |
| **MODE**             | MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY        |
| **PROMPT TIẾP THEO** | PROMPT-P2 — OPERATIONAL CORE ANALYSIS HANDOFF          |
| **GLOBAL GATEWAY**   | BLOCKED                                                |

# PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF

MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY

V1.0 CLEAN FINAL

# 1. PHASE MARKER

## 1.1. Phase hiện tại

PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## 1.2. Prompt hiện tại

# PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF

## 1.3. Mode

MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY

## 1.4. Prompt tiếp theo

# PROMPT-P2 — OPERATIONAL CORE ANALYSIS HANDOFF

## 1.5. Điều kiện chuyển phase

Chưa được chuyển sang PHASE 2 cho đến khi hoàn tất toàn bộ P1.2E — PHASE 1 Smoke / Evidence / Implementation Report và owner/dev lead cho phép viết PROMPT-P2 — Operational Core Analysis Only.

# 2. HEADER

Tên prompt: PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF.

Prompt này là bước validation / smoke / evidence report cuối của PHASE 1, sau P1.2A, P1.2B, P1.2C và P1.2D.

Mục tiêu là kiểm tra, gom evidence và lập PHASE 1 Implementation Report; không triển khai feature mới.

Nếu P1.2E đạt Done Gate, mới được submit cho owner/dev lead xem xét viết PROMPT-P2 — Operational Core Analysis Only. Vẫn không gọi Release Ready.

# 3. SOURCE-OF-TRUTH BẮT BUỘC

Agent phải đọc PROMPT-P1 Analysis Report, PROMPT-P1.1 Technical Design Handoff, các Implementation Report liền trước trong PHASE 1 và PHASE 0 Validation Report.

Agent phải đọc TECH-01, TECH-10, TECH-11, TECH-12, TECH-13 và mọi source-of-truth Product / SKU / Recipe / Activation / Seed có liên quan.

TECH mới thắng code cũ. TECH mới thắng tài liệu cũ. Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY. Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu phát hiện conflict ngoài scope prompt hiện tại thì báo cáo trong handoff, không tự sửa lan.

Agent phải đọc toàn bộ Implementation Report P1.2A, P1.2B, P1.2C, P1.2D trước khi chạy P1.2E.

# 4. MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY

Agent được phép inspect codebase, chạy build/test/lint, chạy smoke PHASE 1, kiểm migration/seed nếu có, git status/git diff, gom evidence và lập report.

Agent không được sửa feature code. Nếu test fail do cần sửa code, dừng và mapping về prompt liên quan: P1.2A/B/C/D.

# 5. SCOPE IN

Validate P1.2A: Product Master / SKU Master / Ingredient / UOM foundation; Product Active != Sellable; SKU Active != Sellable; public/private boundary.

Validate P1.2B: Recipe / BOM / Formula Version foundation; Recipe linked SKU; Recipe line linked Ingredient/UOM; quantity/UOM validation; Recipe Active != Sellable / Batch Released.

Validate P1.2C: Product/SKU/Recipe Activation Guard; actor/permission/audit/evidence/idempotency linkage; fail-safe; active != sellable enforcement.

Validate P1.2D: SKU Extension Registry; Add SKU flow; Seed Governance; seed idempotency; no hardcode SKU; no sellable seed.

Lập Evidence Register, Smoke Result Matrix, Open Blocker Register, Risk Register và handoff sang PHASE 2 nếu đủ điều kiện review.

# 6. SCOPE OUT

Không triển khai feature mới. Không sửa Product/SKU/Recipe/BOM/Activation/Seed logic. Không triển khai Operational Core, Commerce, AI Advisor, Gateway, Ads, Live, IVR hoặc Release Gateway.

Không gọi PHASE 1 Complete, Completion PASS, Release Ready, Production Ready, Go-live Approved hoặc Gateway PASS.

# 7. PHASE 1 SMOKE MATRIX

P1E-SMOKE-A01: Product Master hợp lệ -\> tạo/đọc master data đúng.

P1E-SMOKE-A02: Product Active -\> không Sellable.

P1E-SMOKE-A03: SKU linked Product -\> hợp lệ; duplicate SKU code -\> reject/idempotent.

P1E-SMOKE-A04: Ingredient linked UOM -\> hợp lệ; thiếu/invalid UOM -\> reject.

P1E-SMOKE-B01: Recipe linked SKU -\> hợp lệ; thiếu SKU -\> reject.

P1E-SMOKE-B02: BOM line đủ Ingredient/Quantity/UOM -\> hợp lệ; thiếu UOM/quantity invalid -\> reject.

P1E-SMOKE-B03: Formula version duplicate sai scope -\> reject; version locked/used không sửa đè.

P1E-SMOKE-B04: Recipe Active -\> không Sellable, không Batch Released.

P1E-SMOKE-C01: Product/SKU/Recipe activation thiếu actor/permission -\> deny.

P1E-SMOKE-C02: Evidence SUBMITTED không pass nếu require ACCEPTED.

P1E-SMOKE-C03: Activation retry same idempotency key/payload -\> không tạo side effect lần hai.

P1E-SMOKE-C04: Runtime unavailable -\> fail-safe, không allow.

P1E-SMOKE-D01: Add SKU qua registry -\> không sửa đè SKU cũ, không tự sellable.

P1E-SMOKE-D02: Seed/dev fixture chạy lại -\> không duplicate, không chứa secret, không tự sellable/released.

# 8. EVIDENCE REQUIREMENTS

Evidence phải gom: source-of-truth đã đọc, reports P1.2A-D, danh sách file thay đổi, git diff summary, build result, test result, smoke result, migration validation nếu có, seed validation nếu có, open blocker/risk.

Evidence status được phép: FOUND, SUBMITTED, MISSING, NEEDS_REVIEW, REJECTED_BY_SMOKE, BLOCKED. Không tự ghi ACCEPTED.

Evidence Submitted chưa phải Evidence Accepted. Evidence Accepted cũng chưa đồng nghĩa Release Ready.

# 9. BUILD / TEST / LINT REQUIREMENTS

Phải chạy hoặc báo lý do không chạy: backend build, backend test, lint nếu có, frontend build nếu có liên quan, migration validation nếu có migration, seed validation nếu có seed, targeted smoke P1.2A-D, git status, git diff.

Nếu lệnh fail, không tự sửa feature code trong P1.2E; phải báo P1.2E SMOKE FAILED — RETURN TO RELATED PROMPT.

# 10. OPEN BLOCKER REGISTER

P1E-BLOCKER bắt buộc nếu: Product/SKU/Recipe Active bị dùng làm Sellable; Recipe Active bị dùng làm Batch Released; thiếu UOM/quantity validation; formula version sửa đè; activation thiếu actor/permission vẫn allow; SUBMITTED evidence pass ACCEPTED; duplicate SKU/seed tạo trùng; Global Gateway không còn BLOCKED.

# 11. HANDOFF DECISION

Decision hợp lệ: PHASE1_REPORT_SUBMITTED_FOR_REVIEW, PHASE1_SMOKE_FAILED, PHASE1_EVIDENCE_MISSING, PHASE1_BLOCKED_BY_P0_OR_P1, PHASE1_READY_FOR_OWNER_REVIEW, PHASE2_PROMPT_DRAFT_ALLOWED.

Không có decision: Completion PASS, Release Ready, Production Ready, Go-live Approved, Gateway PASS.

Chỉ được viết PROMPT-P2 khi P1.2E report đủ 14 mục, không còn P0/P1 blocker mở, evidence submitted đầy đủ cho owner/reviewer, smoke tối thiểu pass hoặc fail đã xử lý, owner/dev lead cho phép.

# 12. EXECUTION STEPS

Đọc TECH source-of-truth, PHASE 0 Validation Report, P1/P1.1 và implementation reports P1.2A-D.

Inspect codebase thật, xác định file changes trong PHASE 1, chạy build/test/lint/smoke/migration/seed validation phù hợp.

Gom evidence, lập Smoke Result Matrix, Evidence Register, Open Blocker Register, Risk Register, handoff decision.

Không sửa feature code. Báo cáo đủ 14 mục.

# 13. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục: 1. Tóm tắt; 2. File đã sửa; 3. Nguồn yêu cầu; 4. Evidence đã dùng; 5. Lệnh đã chạy; 6. Kết quả test; 7. Kết quả backend build; 8. Kết quả frontend build; 9. Kết quả cleanup process; 10. Cập nhật Markdown; 11. Kết quả database migration/update nếu áp dụng; 12. Kết quả seed validation nếu áp dụng; 13. Rủi ro còn lại; 14. Cập nhật handoff.

Mọi evidence trong report chỉ là Evidence Submitted, not Evidence Accepted.

Không gọi test pass là Global Smoke Pass. Không gọi prompt done là Release Ready / Production Ready / Go-live Approved.

# 14. DONE GATE

Đã đọc source-of-truth và reports P1.2A-D; inspect codebase thật; chạy/báo rõ build/test/smoke; gom evidence; lập Evidence Register, Smoke Result Matrix, Open Blocker Register, Risk Register; có git status/git diff; không sửa feature code ngoài scope; không mở Global Gateway; không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved; report đủ 14 mục.

# 15. FAIL GATE

Fail nếu không chạy/báo smoke, smoke fail nhưng vẫn gọi done, Evidence Submitted bị gọi Evidence Accepted, test pass bị gọi Global Smoke Pass, evidence missing nhưng gọi Completion PASS, sửa feature code ngoài scope, mở Gateway, gọi Release Ready / Production Ready / Go-live Approved hoặc không report đủ 14 mục.

# 16. DOWNSTREAM HANDOFF

Nếu P1.2E đạt Done Gate và owner/dev lead chấp nhận review, prompt tiếp theo được phép viết là PROMPT-P2 — OPERATIONAL CORE ANALYSIS HANDOFF — MODE: ANALYSIS ONLY.

Không tự chuyển sang PHASE 2. Không tự mở Gateway.

# 17. PROMPT COPY GIAO DEV / CODEX / COPILOT

BẮT ĐẦU PROMPT: Bạn đang chạy PROMPT-P1.2E — MODE VALIDATION / SMOKE / EVIDENCE REPORT ONLY. Không triển khai feature mới, không sửa business domain, không tự đổi nghiệp vụ, không hardcode policy, không mở Global Gateway, không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved. Hãy chạy smoke PHASE 1, gom evidence, lập report 14 mục, mapping fail về P1.2A/B/C/D. KẾT THÚC PROMPT.

# 18. FINAL STATUS

PROMPT-P1.2E FINAL STATUS: PHASE 1 VALIDATION REPORT ONLY.

PHASE 1 EVIDENCE SUBMITTED FOR REVIEW ONLY.

NOT PHASE 1 COMPLETE UNTIL OWNER REVIEW.

NOT COMPLETION PASS.

NOT RELEASE READY.

NOT PRODUCTION READY.

NOT GO-LIVE APPROVED.

GLOBAL GATEWAY: BLOCKED.
