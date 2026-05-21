# P1.2C - ACTIVATION GUARD

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-02 Product Activation Guard.
- PACK-01 Operational Sellable boundary.
- TECH-02 Product Activation.
- TECH-03 Operational Core boundary.

## Noi Dung Rewrite

## PROMPT-P1.2C - PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

## FILE

## 04-P1-2C-ACTIVATION-GUARD.docx

## PHASE

## PHASE-01 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## MODE

## MODE: LIMITED IMPLEMENTATION

## PROMPT TIẾP THEO

## PROMPT-P1.2D - SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF

Global Gate

bị chặn

## PROMPT-P1.2C - PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

## 1. PHASE MARKER

## 1.1. Phase hiện tại

## PHASE-01 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## 1.2. Prompt hiện tại

## PROMPT-P1.2C - PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

## 1.3. Mode

## MODE: LIMITED IMPLEMENTATION

## 1.4. Prompt tiếp theo

## PROMPT-P1.2D - SKU EXTENSION REGISTRY / SEED GOVERNANCE IMPLEMENTATION HANDOFF

## 1.5. Điều kiện chuyển phase

Chưa được chuyển sang PHASE 2 cho đến khi hoàn tất toàn bộ P1.2E - PHASE 1 Smoke / Evidence / Implementation Report và owner/dev lead cho phép viết PROMPT-P2 - Operational Core Analysis Only.

## 2. HEADER

Tên prompt: PROMPT-P1.2C - PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF.

Prompt này là bước limited implementation thứ ba của PHASE 1, sau P1.2A và P1.2B.

Mục tiêu là triển khai giới hạn Product Activation Guard, SKU Activation Guard, Recipe Activation Guard và Active != Sellable enforcement.

Không triển khai SKU Extension Registry, Seed Governance, Sellable Gate, Commerce Runtime, Operational Core, AI Advisor, Gateway, Ads, MC AI Live, IVR hoặc Release Gateway.

## 3. SOURCE-OF-TRUTH BẮT BUỘC

Agent phải đọc PROMPT-P1 Analysis Report, PROMPT-P1.1 Technical Design Handoff, các Implementation Report liền trước trong PHASE 1 và PHASE 0 Validation Report.

Agent phải đọc TECH-01, TECH-10, TECH-11, TECH-12, TECH-13 và mọi source-of-truth Product / SKU / Recipe / Activation / Seed có liên quan.

TECH mới thắng code cũ. TECH mới thắng tài liệu cũ. Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY. Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu phát hiện conflict ngoài scope prompt hiện tại thì báo cáo trong handoff, không tự sửa lan.

## 4. SCOPE IN

Product Activation Guard foundation: kiểm Product tồn tại, không archived/bị chặn, required fields đầy đủ, actor hợp lệ, permission hợp lệ, reason/evidence/idempotency/audit nếu policy yêu cầu.

SKU Activation Guard foundation: kiểm SKU tồn tại, linked Product hợp lệ, parent Product không bị chặn/archived, SKU code unique, actor/permission/reason/evidence/idempotency/audit nếu policy yêu cầu.

Recipe Activation Guard foundation: kiểm Recipe tồn tại, linked SKU hợp lệ, formula version/kind hợp lệ, BOM lines đầy đủ Ingredient/Quantity/UOM, branch rule của formula kind, snapshot readiness.

Active vs Sellable enforcement: Product Active, SKU Active, Recipe Active đều không được xem là Sellable, không được xem là Batch Released hoặc Finished Goods Available.

## 5. SCOPE OUT

Không triển khai SKU Extension Registry đầy đủ.

Không triển khai Seed Governance đầy đủ.

Không triển khai Sellable Gate / Commerce Runtime.

Không triển khai Production Order / Operational Core.

Không sửa AI Advisor / Facebook Gateway / Ads / MC AI Live / IVR / Release Gateway.

## 6. ALLOWED FILE CHANGE BOUNDARY

Chỉ sửa file liên quan trực tiếp tới Product/SKU/Recipe activation guard/service/policy, status transition validation, activation command foundation nếu đã có pattern, permission/audit/evidence/idempotency hook, reason validation, test/smoke activation guard.

Không đoán file path. Nếu boundary không rõ, báo bị chặn - FILE BOUNDARY UNCLEAR.

## 7. IMPLEMENTATION REQUIREMENTS

Activation Guard Context tối thiểu: targetType, targetId, currentStatus, targetStatus, actorId, actorType, correlationId, requiredPermission, reasonCode, evidenceRefs, idempotencyKey, validationResult, guardResult, safe metadata.

Guard Result tối thiểu: ALLOW, DENY, BLOCK, NEEDS_PERMISSION, NEEDS_EVIDENCE, EVIDENCE_NOT_ACCEPTED, NEEDS_IDEMPOTENCY_KEY, NEEDS_REASON, INVALID_STATE, INVALID_MASTER_DATA, RUNTIME_UNAVAILABLE, UNKNOWN.

Không dùng UNKNOWN để allow.

Failure reason tối thiểu: ACTOR_MISSING, ACTOR_UNKNOWN, PERMISSION_MISSING, PERMISSION_DENIED, PRODUCT_NOT_FOUND, SKU_PRODUCT_INVALID, RECIPE_VERSION_MISSING, BOM_LINE_MISSING, UOM_INVALID, QUANTITY_INVALID, EVIDENCE_NOT_ACCEPTED, IDEMPOTENCY_CONFLICT, ACTIVE_NOT_SELLABLE_BOUNDARY_VIOLATION.

## 8. DATABASE / MIGRATION / SEED RULE

Mặc định không cần migration lớn nếu Product/SKU/Recipe status đã có từ P1.2A/P1.2B.

Chỉ tạo migration nếu P1.1 đã xác định cần, migration chỉ phục vụ Activation Guard foundation và không tạo Sellable Gate / Commerce / Operational table.

Không update database thật. Không chạy migration production. Không seed production data.

Seed/dev fixture nếu có không được tự set sellable, released hoặc production-ready; không chứa secret; phải idempotent nếu có seed validation.

## 9. TEST / SMOKE REQUIREMENTS

Smoke tối thiểu: Product activation hợp lệ; Product activation thiếu permission bị deny; Product Active không Sellable; SKU activation linked Product hợp lệ; SKU thiếu Product hợp lệ bị deny; SKU Active không Sellable; Recipe activation có BOM đầy đủ; Recipe thiếu BOM/UOM bị deny; Recipe Active không Sellable/Batch Released; Evidence SUBMITTED không pass nếu require ACCEPTED; retry same idempotency key/payload không tạo side effect lần hai nếu hook có; runtime unavailable fail-safe; activation success/deny có audit event nếu hook hỗ trợ.

Không viết test cho Sellable Gate, Commerce, Production Order, Inventory, Warehouse, QC/Release, AI Advisor, Gateway, Ads/Live/IVR, Release Gateway.

## 10. SECURITY / GOVERNANCE GUARDRAILS

Không hardcode Product Active = Sellable; SKU Active = Sellable; Recipe Active = Sellable; Recipe Active = Batch Released.

Không cho UNKNOWN actor activation. Không cho missing permission activation. Không cho SUBMITTED evidence pass ACCEPTED requirement. Không bỏ qua idempotency conflict.

Không mở Global Gate. Không gọi Activation Guard là Sellable Ready hoặc PHASE 1 Complete.

## 11. EXECUTION STEPS

Đọc PROMPT-P1, P1.1, P1.2A, P1.2B, PHASE 0 Validation Report và TECH source-of-truth.

Inspect codebase thật, xác định file thuộc scope và file không được sửa.

Triển khai giới hạn Product/SKU/Recipe Activation Guard foundation và Active != Sellable enforcement.

Thêm/chỉnh test/smoke trong scope, chạy build/test/lint, migration/seed validation nếu có, git status/git diff.

## 12. REQUIRED REPORT FORMAT - 14 MỤC

Agent phải báo cáo đúng 14 mục: 1. Tóm tắt; 2. File đã sửa; 3. Nguồn yêu cầu; 4. Evidence đã dùng; 5. Lệnh đã chạy; 6. Kết quả test; 7. Kết quả backend build; 8. Kết quả frontend build; 9. Kết quả cleanup process; 10. Cập nhật Markdown; 11. Kết quả database migration/update nếu áp dụng; 12. Kết quả seed validation nếu áp dụng; 13. Rủi ro còn lại; 14. Cập nhật handoff.

Mọi evidence trong report chỉ là Evidence Submitted, not Evidence Accepted.

Không gọi test pass là Global Smoke Pass. Không gọi prompt done là Release Readiness / Production Readiness / Go-live Decision.

## 13. DONE GATE

Đúng scope P1.2C; có Product/SKU/Recipe Activation Guard foundation; có Actor/RBAC/Audit/Evidence/Idempotency linkage nếu foundation hỗ trợ; Product/SKU/Recipe Active != Sellable; Recipe Active != Batch Released; không triển khai SKU Extension / Seed Governance / Sellable Gate / Commerce / Operational Core; có test/build hoặc lý do không chạy; report đủ 14 mục; Global Gate bị chặn.

## 14. FAIL GATE

Fail nếu sửa ngoài scope, hardcode Active=Sellable, cho UNKNOWN actor activation, missing permission vẫn activation được, SUBMITTED evidence pass ACCEPTED requirement, bỏ qua idempotency conflict, tự triển khai Sellable Gate/Commerce/Operational Core, mở Gateway hoặc gọi Release Readiness / Production Readiness / Go-live Decision.

## 15. DOWNSTREAM HANDOFF

Nếu P1.2C đạt Done Gate, prompt tiếp theo là PROMPT-P1.2D - SKU Extension Registry / Seed Governance Implementation Handoff.

Không tự chuyển prompt. Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 16. PROMPT COPY GIAO DEV / CODEX / COPILOT

BẮT ĐẦU PROMPT: Bạn được phép sửa code chỉ trong phạm vi Product / SKU / Recipe Activation Guard foundation. Không sửa lan, không tự đổi nghiệp vụ, không hardcode policy, không gọi Active là Sellable, không mở Global Gate, không gọi Completion Decision / Release Readiness / Production Readiness / Go-live Decision. Hãy đọc source-of-truth, kiểm scope, triển khai giới hạn, chạy test/build, báo cáo 14 mục. KẾT THÚC PROMPT.
