**PROMPT-P1.2D — SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

| **FILE**             | 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx                             |
|----------------------|-------------------------------------------------------------------------|
| **PHASE**            | PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION                  |
| **MODE**             | MODE: LIMITED IMPLEMENTATION                                            |
| **PROMPT TIẾP THEO** | PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF |
| **GLOBAL GATEWAY**   | BLOCKED                                                                 |

# PROMPT-P1.2D — SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF

MODE: LIMITED IMPLEMENTATION

V1.0 CLEAN FINAL

# 1. PHASE MARKER

## 1.1. Phase hiện tại

PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## 1.2. Prompt hiện tại

# PROMPT-P1.2D — SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF

## 1.3. Mode

MODE: LIMITED IMPLEMENTATION

## 1.4. Prompt tiếp theo

# PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF

## 1.5. Điều kiện chuyển phase

Chưa được chuyển sang PHASE 2 cho đến khi hoàn tất toàn bộ P1.2E — PHASE 1 Smoke / Evidence / Implementation Report và owner/dev lead cho phép viết PROMPT-P2 — Operational Core Analysis Only.

# 2. HEADER

Tên prompt: PROMPT-P1.2D — SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF.

Prompt này là bước limited implementation thứ tư của PHASE 1, sau P1.2C.

Mục tiêu là triển khai giới hạn SKU Extension Registry, Add SKU flow foundation và Seed / Master Data Governance.

Không triển khai Sellable Gate, Product Knowledge/AI Advisor full, Commerce Runtime, Operational Core hoặc Release Gateway.

# 3. SOURCE-OF-TRUTH BẮT BUỘC

Agent phải đọc PROMPT-P1 Analysis Report, PROMPT-P1.1 Technical Design Handoff, các Implementation Report liền trước trong PHASE 1 và PHASE 0 Validation Report.

Agent phải đọc TECH-01, TECH-10, TECH-11, TECH-12, TECH-13 và mọi source-of-truth Product / SKU / Recipe / Activation / Seed có liên quan.

TECH mới thắng code cũ. TECH mới thắng tài liệu cũ. Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY. Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu phát hiện conflict ngoài scope prompt hiện tại thì báo cáo trong handoff, không tự sửa lan.

# 4. SCOPE IN

SKU Extension Registry foundation: không hardcode danh sách SKU; SKU mới có registry/manifest; linked Product; có status riêng; không tự sellable; có thể linked Recipe/BOM/Formula sau này.

Add SKU flow foundation: validate SKU code unique, public/private boundary, product parent hợp lệ, no overwrite SKU cũ, actor/permission/audit/evidence/idempotency hook nếu command có side effect.

Seed Governance foundation: seed idempotent, không phá dữ liệu đã có, không chứa secret, không tự active sellable, có source-of-truth, có validation, hỗ trợ mở rộng SKU.

Master Data Manifest: có cấu trúc để quản lý Product/SKU/Ingredient/UOM/Recipe baseline mà không phải sửa code rải rác.

# 5. SCOPE OUT

Không triển khai Recipe/BOM/Formula full nếu chưa hoàn tất ở P1.2B.

Không triển khai Activation Guard full nếu chưa hoàn tất P1.2C.

Không triển khai Sellable Gate / Commerce Runtime.

Không sửa AI Advisor/Product Knowledge full.

Không mở Global Gateway hoặc release flag.

# 6. ALLOWED FILE CHANGE BOUNDARY

Chỉ sửa file liên quan SKU extension registry/manifest, seed governance, seed validation, dev/test fixtures, SKU add validation foundation, master data import/validation foundation, test/smoke liên quan.

Không đoán file path. Nếu boundary không rõ, báo BLOCKED — FILE BOUNDARY UNCLEAR.

# 7. IMPLEMENTATION REQUIREMENTS

SKU Extension Registry phải có SKU identity/code, linked Product, lifecycle/status, public/private fields, extension source/owner, created/updated metadata nếu codebase có convention, no sellable flag.

Add SKU flow không được overwrite SKU cũ. Duplicate code phải reject hoặc return existing theo idempotent rule rõ ràng. SKU mới không tự Sellable.

Seed phải idempotent: chạy lại không duplicate, không mutate record đã locked nếu không có policy, không tự set sellable/released/production-ready, không chứa secret.

Nếu có 20 SKU baseline, registry/seed phải hỗ trợ mở rộng 40-50 SKU mà không hardcode logic nghiệp vụ.

# 8. DATABASE / MIGRATION / SEED RULE

Migration chỉ được tạo khi phục vụ SKU Extension Registry / Seed Governance foundation và đã được P1.1/P1.2D scope cho phép.

Không update database thật. Không chạy migration production. Không seed production data nếu chưa có owner-approved source.

Seed/dev fixture phải có validation và report rõ ở mục 12.

# 9. TEST / SMOKE REQUIREMENTS

Smoke tối thiểu: thêm SKU mới qua registry; duplicate SKU code bị reject/idempotent; SKU mới linked Product hợp lệ; SKU mới không tự sellable; seed chạy lại không duplicate; seed không chứa secret; seed không tự active sellable; private/internal field không public; extension không sửa đè SKU cũ; manifest thiếu required field bị reject.

Không gọi smoke này là Global Smoke Pass.

# 10. SECURITY / GOVERNANCE GUARDRAILS

Không hardcode danh sách SKU trong business logic. Không seed secret. Không seed tự set sellable/released/production-ready. Không public private field. Không bỏ qua Actor/RBAC/Audit/Evidence/Idempotency nếu có command.

Không sửa AI Advisor / Commerce / Gateway để dùng SKU mới trong prompt này; chỉ ghi handoff downstream.

# 11. EXECUTION STEPS

Đọc P1/P1.1/P1.2A/P1.2B/P1.2C, PHASE 0 Validation Report và TECH source-of-truth.

Inspect codebase thật, xác định registry/seed hiện có, file thuộc scope và file không được sửa.

Triển khai giới hạn SKU Extension Registry / Seed Governance foundation.

Thêm/chỉnh test/smoke trong scope, chạy build/test/lint, migration/seed validation nếu có, git status/git diff.

# 12. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục: 1. Tóm tắt; 2. File đã sửa; 3. Nguồn yêu cầu; 4. Evidence đã dùng; 5. Lệnh đã chạy; 6. Kết quả test; 7. Kết quả backend build; 8. Kết quả frontend build; 9. Kết quả cleanup process; 10. Cập nhật Markdown; 11. Kết quả database migration/update nếu áp dụng; 12. Kết quả seed validation nếu áp dụng; 13. Rủi ro còn lại; 14. Cập nhật handoff.

Mọi evidence trong report chỉ là Evidence Submitted, not Evidence Accepted.

Không gọi test pass là Global Smoke Pass. Không gọi prompt done là Release Ready / Production Ready / Go-live Approved.

# 13. DONE GATE

Đúng scope P1.2D; có SKU Extension Registry foundation; có Add SKU flow foundation; có Seed Governance foundation; no hardcode SKU; seed idempotent; SKU mới không tự sellable; không sửa downstream domain; có test/build hoặc lý do không chạy; report đủ 14 mục; Global Gateway BLOCKED.

# 14. FAIL GATE

Fail nếu sửa ngoài scope, hardcode SKU list vào business logic, seed tự set sellable/released/production-ready, seed chứa secret, extension overwrite SKU cũ, public private field, tự sửa AI/Commerce/Gateway, mở Gateway hoặc gọi Release Ready / Production Ready / Go-live Approved.

# 15. DOWNSTREAM HANDOFF

Nếu P1.2D đạt Done Gate, prompt tiếp theo là PROMPT-P1.2E — PHASE 1 Smoke / Evidence / Implementation Report Handoff.

Chưa được chuyển PHASE 2 cho đến khi P1.2E hoàn tất và owner/dev lead cho phép PROMPT-P2 Analysis Only.

# 16. PROMPT COPY GIAO DEV / CODEX / COPILOT

BẮT ĐẦU PROMPT: Bạn được phép sửa code chỉ trong phạm vi SKU Extension Registry / Seed Governance foundation. Không sửa lan, không hardcode SKU list, không seed secret, không tự set sellable, không mở Global Gateway, không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved. Hãy triển khai giới hạn, chạy test/build, báo cáo 14 mục. KẾT THÚC PROMPT.

# 17. FINAL STATUS

Trạng thái cuối bắt buộc: NOT PHASE 1 COMPLETE; NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 1; NOT COMPLETION PASS; NOT RELEASE READY; NOT PRODUCTION READY; NOT GO-LIVE APPROVED; GLOBAL GATEWAY: BLOCKED.
