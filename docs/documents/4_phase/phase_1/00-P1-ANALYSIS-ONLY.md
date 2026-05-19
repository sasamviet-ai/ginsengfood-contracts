**PROMPT-P1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS HANDOFF**

**MODE: ANALYSIS ONLY**

| **FILE**             | 00-P1-ANALYSIS-ONLY.docx                               |
|----------------------|--------------------------------------------------------|
| **PHASE**            | PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION |
| **MODE**             | MODE: ANALYSIS ONLY                                    |
| **PROMPT TIẾP THEO** | PROMPT-P1.1 — TECHNICAL DESIGN ONLY                    |
| **GLOBAL GATEWAY**   | BLOCKED                                                |

# PROMPT-P1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS HANDOFF

MODE: ANALYSIS ONLY

V1.0 CLEAN FINAL

# 1. HEADER

## 1.1. Tên prompt

# PROMPT-P1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS HANDOFF

## 1.2. Vị trí trong roadmap

PROMPT-P1 là prompt mở đầu cho:

PHASE 1 — Product / SKU / Recipe / Product Activation

PROMPT-P1 chỉ được bắt đầu sau khi PHASE 0 đã có:

Foundation Boundary.

Actor Context.

Correlation ID.

RBAC / Permission Enforcement.

Audit Trail / Append-only Event Log.

Evidence Registry.

Idempotency Foundation.

High-risk Command Guard / Admin Override Foundation.

PHASE 0 Smoke / Evidence / Implementation Report đã được submit cho owner/reviewer.

PROMPT-P1 không phải implementation prompt.

PROMPT-P1 là bước analysis only để phân tích domain Product / SKU / Recipe / Product Activation trước khi cho phép sửa code.

## 1.3. Mục tiêu

Mục tiêu của PROMPT-P1 là yêu cầu dev/Codex/Copilot:

Đọc source-of-truth.

Inspect codebase thật.

Xác định current implementation state của Product / SKU / Recipe / Product Activation.

Đối chiếu code hiện tại với TECH source-of-truth.

Tìm gap, conflict, blocker.

Tìm rủi ro về Product Active / Sellable.

Tìm rủi ro về SKU / Recipe / Formula Version / BOM.

Tìm rủi ro về Product Activation Guard.

Tìm rủi ro khi mở rộng SKU sau này.

Lập báo cáo phân tích đủ 14 mục.

Không sửa file.

Không tạo code.

Không tạo migration.

Không gọi PHASE 1 Complete / Release Ready / Production Ready / Go-live Approved.

# 2. MODE: ANALYSIS ONLY — DO NOT MODIFY FILES

## 2.1. Chế độ thực thi

MODE: ANALYSIS ONLY

Agent chỉ được phép:

Đọc tài liệu.

Đọc report PHASE 0.

Inspect codebase thật.

Tìm kiếm file.

Đọc module Product / SKU / Recipe nếu có.

Đọc migration/schema hiện có nếu có.

Đọc seed hiện có nếu có.

Đọc test hiện có nếu có.

Đọc configuration hiện có nếu có.

Lập current implementation state.

Lập gap matrix.

Lập conflict matrix.

Lập P1 blocker register.

Lập downstream impact.

Lập report 14 mục.

## 2.2. Các hành động bị cấm

Agent không được:

Sửa file.

Tạo file.

Xóa file.

Rename file.

Format file.

Refactor code.

Tạo code.

Tạo migration.

Tạo seed.

Update database.

Sửa product data.

Sửa SKU data.

Sửa recipe/BOM.

Sửa activation logic.

Tự tạo API.

Tự tạo UI.

Tự đổi nghiệp vụ.

Hardcode policy.

Gọi Product Active là Sellable.

Gọi PHASE 1 Complete.

Gọi Completion PASS.

Gọi Release Ready.

Gọi Production Ready.

Gọi Go-live Approved.

Mở Global Gateway.

# 3. SOURCE-OF-TRUTH BẮT BUỘC

## 3.1. Source chính

Agent phải đọc và ưu tiên:

TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency

TECH-10 — Global Smoke / UAT / Evidence / Release Gateway

TECH-11 — Implementation Roadmap / Dev Phase Plan

TECH-12 — Phase Backlog Pack

TECH-13 — Codex / Copilot Dev Prompt Pack

PROMPT-P0.2G PHASE 0 Validation / Smoke / Evidence Report

TECH liên quan PHASE 1 — Product / SKU / Recipe / Product Activation nếu đã có trong bộ TECH

Các tài liệu Product / SKU / Recipe mới thuộc TECH source-of-truth nếu đã được owner cung cấp.

## 3.2. Quy tắc ưu tiên

Agent phải áp dụng:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Tài liệu cũ chỉ là LEGACY_REFERENCE_ONLY.

PHASE 0 evidence submitted chưa phải evidence accepted.

Không dùng legacy làm nền nghiệp vụ.

Không để code cũ thắng TECH mới.

Nếu code hiện tại khác TECH mới thì báo conflict, không sửa.

Nếu tài liệu cũ khác TECH mới thì báo legacy conflict, không dùng làm nền.

Nếu nghiệp vụ chưa có source-of-truth thì không tự suy luận.

# 4. OBJECTIVE

## 4.1. Mục tiêu phân tích PHASE 1

Agent phải phân tích các domain sau:

Product Master.

SKU Master.

Product Category / Group.

Ingredient Master.

Recipe Master.

Formula Version.

Formula Kind.

BOM / Ingredient Quantity / UOM.

Product Activation.

Product Active Guard.

Product Active vs Sellable boundary.

Recipe Snapshot Readiness.

SKU Expansion / Extension Registry.

Product Data Governance.

Product Seed / Master Data nếu có.

Product / SKU / Recipe smoke hiện có nếu có.

## 4.2. Mục tiêu không phải

PROMPT-P1 không nhằm:

Viết code Product module.

Viết code SKU module.

Viết code Recipe module.

Viết API.

Viết DB schema.

Viết UI.

Tạo migration.

Tạo seed.

Sửa dữ liệu sản phẩm.

Kích hoạt sản phẩm.

Mở bán sản phẩm.

Gọi product là sellable.

Release.

Go-live.

# 5. REQUIRED INPUT

## 5.1. Đầu vào bắt buộc

Agent cần có:

TECH source-of-truth.

PHASE 0 Validation Report.

Codebase thật.

Quyền đọc source code.

Quyền inspect repo.

Quyền đọc migration/test/seed hiện có nếu có.

Danh sách file/module Product / SKU / Recipe hiện có nếu có.

## 5.2. Nếu thiếu đầu vào

Nếu thiếu PHASE 0 report, agent phải báo:

BLOCKED — PHASE 0 VALIDATION REPORT REQUIRED

Nếu thiếu codebase thật, agent phải báo:

BLOCKED — CODEBASE INSPECTION REQUIRED

Nếu thiếu source-of-truth PHASE 1, agent phải báo:

BLOCKED — PHASE 1 SOURCE-OF-TRUTH REQUIRED

Agent không được tự dựng nghiệp vụ Product / SKU / Recipe.

# 6. SCOPE IN

## 6.1. Product Master Analysis

Agent phải phân tích:

Product entity/model hiện có không.

Product public name.

Product internal name.

Product group/category.

Product status.

Product active flag.

Product lifecycle.

Product public/private field boundary.

Product owner/source-of-truth.

Product có liên kết SKU không.

Product có liên kết recipe không.

Product active có bị hiểu sai thành sellable không.

Product có audit/actor/correlation không nếu có command.

Product có seed/master data không.

## 6.2. SKU Master Analysis

Agent phải phân tích:

SKU entity/model hiện có không.

SKU code.

SKU public name.

SKU internal code.

SKU group.

SKU type.

SKU status.

SKU active.

SKU versioning nếu có.

SKU public/private field boundary.

SKU có liên kết Product không.

SKU có liên kết Recipe/BOM không.

SKU có liên kết packaging/trade item không nếu có.

SKU có bị dùng sai làm sellable gate không.

SKU seed hiện có có đầy đủ/đúng source-of-truth không.

## 6.3. Ingredient Master Analysis

Agent phải phân tích:

Ingredient master hiện có không.

Ingredient code/name.

Ingredient group.

Ingredient UOM.

Ingredient category.

Ingredient active status.

Ingredient source type.

Ingredient có phân nhóm nguyên liệu/vật tư không.

Ingredient có public/private boundary không.

Ingredient có liên kết recipe/BOM không.

Ingredient có bị hardcode trong recipe không.

Ingredient có audit/versioning nếu thay đổi không.

## 6.4. Recipe Master Analysis

Agent phải phân tích:

Recipe entity/model hiện có không.

Recipe code/name.

Recipe linked SKU.

Recipe version.

Recipe status.

Recipe active flag.

Recipe ingredient lines.

Recipe quantity.

Recipe UOM.

Recipe formula kind.

Recipe approval status.

Recipe effective date.

Recipe snapshot readiness.

Recipe có bị sửa đè lịch sử không.

Recipe có audit/versioning không.

Recipe có guard khi active không.

## 6.5. Formula Version / Formula Kind Analysis

Agent phải phân tích:

Có formula version không.

Có formula kind không.

Formula kind có bị hardcode không.

Có phân biệt pilot formula và production formula không.

Có lưu version lịch sử không.

Có cho sửa đè version đã dùng trong production không.

Có snapshot khi dùng vào production order không.

Có guard không cho recipe chưa approved/active vào production không.

Có liên kết BOM không.

Có test cho formula version không.

## 6.6. BOM / Ingredient Quantity / UOM Analysis

Agent phải phân tích:

BOM có tồn tại không.

BOM có linked SKU/recipe không.

BOM có line item không.

Ingredient quantity có UOM không.

UOM conversion có được kiểm soát không.

BOM có version không.

BOM có status không.

BOM có approval không.

BOM có audit không.

BOM có snapshot readiness không.

BOM có bị tính từ dữ liệu hardcode không.

BOM có mở rộng SKU mới được không.

## 6.7. Product Activation Analysis

Agent phải phân tích:

Product activation flow hiện có không.

SKU activation flow hiện có không.

Recipe activation flow hiện có không.

Product activation có guard không.

Product active có cần recipe active không.

Product active có cần SKU active không.

Product active có cần BOM/version không.

Product active có cần approval không.

Product active có audit không.

Product active có evidence không.

Product active có idempotency không nếu command có side effect.

Product active có permission không.

Product active có bị hiểu nhầm là sellable không.

## 6.8. Product Active vs Sellable Boundary Analysis

Agent phải kiểm tra bắt buộc:

Product Active có đang bị dùng làm điều kiện mở bán không.

SKU Active có đang bị dùng làm sellable không.

Recipe Active có đang bị dùng làm sellable không.

Có Sellable Gate riêng không.

Có Commerce Runtime kiểm sellable không.

Có inventory/warehouse/release/sale lock/recall dependency không.

Product Active có bị public là “đang bán” không.

Có rủi ro AI/Gateway/Commerce dùng Product Active sai không.

Có test chứng minh Product Active không đồng nghĩa Sellable không.

Nguyên tắc bắt buộc:

Product Active không đồng nghĩa Sellable.

## 6.9. SKU Expansion / Extension Registry Analysis

Agent phải phân tích:

Hệ thống có hỗ trợ thêm SKU mới không.

Có extension registry không.

Có cơ chế thêm SKU mà không sửa đè SKU cũ không.

Có recipe/BOM version cho SKU mới không.

Có activation guard cho SKU mới không.

Có audit/evidence/approval cho SKU mới không.

Có test thêm SKU mới không.

Có rủi ro hardcode danh sách 20 SKU không.

Có rủi ro mở rộng 40–50 SKU làm vỡ logic không.

# 7. SCOPE OUT

PROMPT-P1 không được:

Sửa Product code.

Sửa SKU code.

Sửa Recipe code.

Sửa BOM code.

Tạo migration.

Tạo seed.

Tạo API.

Tạo UI.

Tạo Product Activation Guard implementation.

Tạo Sellable Gate.

Sửa Commerce.

Sửa Operational Core.

Sửa AI Advisor.

Sửa Gateway.

Sửa Ads / MC AI Live / IVR.

Mở Global Gateway.

Gọi Product Ready.

Gọi Sellable Ready.

Gọi PHASE 1 Complete.

Gọi Release Ready / Production Ready / Go-live Approved.

Nếu phát hiện cần sửa, chỉ ghi gap/handoff.

# 8. CURRENT IMPLEMENTATION STATE

## 8.1. Trạng thái được phép dùng

Agent chỉ được dùng các trạng thái:

Không được dùng:

PASS.

COMPLETE.

PRODUCT READY.

SELLABLE READY.

RELEASE READY.

PRODUCTION READY.

GO-LIVE APPROVED.

## 8.2. Matrix bắt buộc

# 9. P1 BLOCKER

Agent phải đánh dấu P1 blocker nếu phát hiện:

Product Active đang bị dùng làm Sellable.

SKU Active đang bị dùng làm Sellable.

Recipe Active đang bị dùng làm Sellable.

Không có Product/SKU/Recipe source-of-truth.

Không có recipe version.

Không có formula version.

Không có BOM line rõ ràng.

Không có UOM cho ingredient quantity.

Recipe có thể sửa đè lịch sử.

Recipe/BOM đã dùng vẫn bị sửa trực tiếp.

Không có Product Activation Guard.

Product/SKU activation không kiểm recipe/BOM/approval.

Không có audit cho activation command.

Không có actor/correlation cho product command.

Không có evidence/approval cho product activation nếu TECH yêu cầu.

Hardcode danh sách SKU làm không mở rộng được.

Không có cơ chế thêm SKU mới.

Product/SKU public/private field bị lẫn.

AI/Gateway/Commerce có thể dùng Product Active để tư vấn/chốt bán.

Code cũ khác TECH mới nhưng chưa được ghi conflict.

# 10. GAP ANALYSIS MATRIX

Agent phải lập bảng:

# 11. CONFLICT DETECTION MATRIX

Agent phải lập bảng:

# 12. DOWNSTREAM IMPACT

Agent phải đánh giá PHASE 1 ảnh hưởng đến:

PHASE 2 — Operational Core  
Vì Production Order cần SKU/Recipe/BOM/Formula Version đúng và có snapshot readiness.

PHASE 3 — Commerce Runtime  
Vì Product Active không được dùng thay Sellable Gate.

PHASE 4 — AI Advisor Runtime  
Vì AI chỉ được tư vấn/chốt theo public product data và sellable runtime đúng.

PHASE 5 — Facebook Gateway  
Vì Gateway không được public sai SKU/private field.

PHASE 6 — Ads Measurement  
Vì Ads không được dùng sản phẩm inactive/suppressed sai trạng thái.

PHASE 7 — MC AI Live  
Vì Live script không được giới thiệu SKU chưa active/chưa sellable.

PHASE 8 — IVR  
Vì IVR không liên quan Product activation trực tiếp nhưng order confirmation phụ thuộc order hợp lệ.

PHASE 9 — Global Smoke / Release Gateway  
Vì Product/SKU/Recipe thiếu evidence/smoke thì không Release Ready.

# 13. EVIDENCE REQUIRED

Agent phải gom evidence analysis gồm:

Source-of-truth đã đọc.

File/module Product đã inspect.

File/module SKU đã inspect.

File/module Recipe đã inspect.

File/module Ingredient/BOM đã inspect.

Migration/schema hiện có nếu có.

Seed hiện có nếu có.

Test hiện có nếu có.

Current implementation state matrix.

Gap matrix.

Conflict matrix.

Blocker register.

Downstream impact.

Git status/git diff chứng minh không sửa file nếu có git.

Ghi rõ:

Evidence trong PROMPT-P1 là Evidence Submitted, chưa phải Evidence Accepted.

# 14. SMOKE REQUIRED — CHỈ ĐỀ XUẤT, CHƯA VIẾT TEST

Agent phải đề xuất smoke cho phase implementation sau:

Không gọi smoke đề xuất này là Global Smoke Pass.

# 15. EXECUTION STEPS

Agent phải làm theo thứ tự:

Đọc TECH source-of-truth.

Đọc PHASE 0 validation report.

Inspect codebase thật.

Tìm Product module.

Tìm SKU module.

Tìm Ingredient module.

Tìm Recipe/BOM module.

Tìm Product Activation logic nếu có.

Tìm Product/SKU seed nếu có.

Tìm Product/SKU/Recipe tests nếu có.

Tìm các chỗ Product Active đang được dùng.

Tìm các chỗ Sellable đang được dùng.

Tìm chỗ AI/Gateway/Commerce có thể đọc Product Active sai.

Lập current implementation state.

Lập gap matrix.

Lập conflict matrix.

Lập blocker register.

Lập downstream impact.

Lập smoke required.

Báo cáo đủ 14 mục.

Không sửa file.

# 16. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

## 16.1. Mục 1 — Tóm tắt

Ghi rõ:

Prompt đã chạy: PROMPT-P1.

Mode: ANALYSIS ONLY.

Scope đã phân tích.

Current implementation state tổng quan.

P1 blocker chính.

Gap chính.

Downstream impact chính.

Trạng thái cuối.

Không được ghi PHASE 1 Complete / Release Ready / Production Ready / Go-live Approved.

## 16.2. Mục 2 — File đã sửa

Bắt buộc ghi:

Không sửa file.

Không tạo file.

Không tạo code.

Không tạo migration.

Không tạo seed.

Không update database.

Git status/git diff nếu có.

## 16.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

TECH-01.

TECH-10.

TECH-11.

TECH-12.

TECH-13.

PHASE 0 Validation Report.

TECH Product / SKU / Recipe nếu có.

Legacy docs nếu có đọc, ghi rõ LEGACY_REFERENCE_ONLY.

## 16.4. Mục 4 — Evidence đã dùng

Liệt kê:

Bắt buộc ghi:

Evidence Submitted, not Evidence Accepted.

## 16.5. Mục 5 — Lệnh đã chạy

Liệt kê:

Lệnh inspect.

Lệnh search.

Lệnh git status/git diff nếu có.

Lệnh build/test nếu có chạy ở chế độ không sửa file.

Nếu không chạy lệnh nào, ghi lý do.

## 16.6. Mục 6 — Kết quả test

Ghi rõ:

Test Product/SKU/Recipe hiện có.

Test đã chạy nếu có.

Test pass/fail nếu có.

Test gap.

Smoke required cho phase sau.

Không gọi test pass là Global Smoke Pass.

## 16.7. Mục 7 — Kết quả backend build

Ghi rõ:

Có chạy backend build không.

Kết quả nếu có.

Nếu không chạy, lý do.

## 16.8. Mục 8 — Kết quả frontend build

Ghi rõ:

Có chạy frontend build không.

Có cần chạy không.

Nếu không chạy, lý do.

## 16.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

Có process nào mở không.

Có server/test runner cần dừng không.

Có file tạm không.

Có artifact phát sinh không.

Đã cleanup chưa.

## 16.10. Mục 10 — Cập nhật Markdown

Bắt buộc ghi:

Không cập nhật Markdown.

Không sửa tài liệu trong repo.

Chỉ trả report trong response.

Nếu có cập nhật Markdown ngoài ý muốn thì FAIL.

## 16.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Bắt buộc ghi:

Không tạo migration.

Không chạy migration.

Không update database.

Chỉ đọc migration/schema hiện có nếu cần.

## 16.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

Có seed Product/SKU/Recipe không.

Seed có đúng source-of-truth không.

Seed có hardcode sai không.

Seed có hỗ trợ mở rộng SKU không.

Không sửa seed.

## 16.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

Product Master risk.

SKU Master risk.

Ingredient Master risk.

Recipe/BOM risk.

Formula Version risk.

Product Activation risk.

Active vs Sellable risk.

SKU Extension risk.

Seed/Test risk.

Downstream PHASE 2/3/4 risk.

Release Gateway risk.

Global Gateway risk.

## 16.14. Mục 14 — Cập nhật handoff

Phải ghi:

Gap cần xử lý ở PHASE 1 Technical Design.

Blocker cần clear trước implementation.

Evidence cần chuẩn bị.

Smoke cần viết/chạy.

Prompt tiếp theo đề xuất.

Điều kiện để được chuyển sang P1.1.

Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P1 FINAL STATUS: ANALYSIS REPORT ONLY  
NOT PHASE 1 COMPLETE  
NOT IMPLEMENTATION COMPLETE  
NOT COMPLETION PASS  
NOT RELEASE READY  
NOT PRODUCTION READY  
NOT GO-LIVE APPROVED  
GLOBAL GATEWAY: BLOCKED

# 17. DONE GATE

PROMPT-P1 chỉ được xem là analysis done khi đủ:

Đã đọc source-of-truth.

Đã đọc PHASE 0 report.

Đã inspect codebase thật.

Đã phân tích Product Master.

Đã phân tích SKU Master.

Đã phân tích Ingredient Master.

Đã phân tích Recipe/BOM.

Đã phân tích Formula Version / Formula Kind.

Đã phân tích Product Activation.

Đã phân tích Product Active vs Sellable.

Đã phân tích SKU Extension Registry.

Đã có current implementation state matrix.

Đã có gap matrix.

Đã có conflict matrix.

Đã có blocker register.

Đã có downstream impact.

Đã có smoke required.

Đã report đủ 14 mục.

Không sửa file.

Không tạo code.

Không tạo migration.

Không gọi PHASE 1 Complete / Release Ready / Production Ready / Go-live Approved.

Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

PHASE 1 ANALYSIS REPORT COMPLETED

Không được gọi:

PHASE 1 Complete.

Implementation Complete.

Completion PASS.

Release Ready.

Production Ready.

Go-live Approved.

Gateway PASS.

# 18. FAIL GATE

PROMPT-P1 phải fail nếu:

Agent sửa file.

Agent tạo code.

Agent tạo migration.

Agent tạo seed.

Agent update database.

Agent không inspect codebase.

Agent không đọc source-of-truth.

Agent không phân tích Product Active vs Sellable.

Agent gọi Product Active là Sellable.

Agent bỏ qua Recipe/BOM/Formula Version.

Agent không lập gap matrix.

Agent không lập conflict matrix.

Agent không lập blocker register.

Agent không report đủ 14 mục.

Agent tự đổi nghiệp vụ.

Agent hardcode Product/SKU/Recipe policy.

Agent gọi Analysis là Implementation Complete.

Agent gọi Release Ready / Production Ready / Go-live Approved.

Agent mở Global Gateway.

Nếu fail, agent phải ghi:

# PROMPT-P1 FAIL GATE — ANALYSIS NOT ACCEPTED

# 19. DOWNSTREAM HANDOFF

## 19.1. Prompt tiếp theo nếu P1 analysis đạt Done Gate

Nếu PROMPT-P1 đạt Done Gate, prompt tiếp theo nên là:

# PROMPT-P1.1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION TECHNICAL DESIGN HANDOFF

MODE: TECHNICAL DESIGN ONLY

V1.0 CLEAN FINAL

P1.1 sẽ chuyển gap analysis thành:

Workstream.

Task breakdown.

Dependency.

Evidence plan.

Smoke plan.

Implementation sequence.

P1.1 vẫn chưa nên sửa code nếu gap còn lớn.

## 19.2. Không tự chuyển mode

Agent không được tự chuyển từ:

ANALYSIS ONLY

sang:

IMPLEMENTATION MODE

Chỉ owner/dev lead mới được cho phép prompt tiếp theo.

# 20. PROMPT COPY GIAO DEV / CODEX / COPILOT

## 20.1. Nội dung prompt

## BẮT ĐẦU PROMPT

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

Nhiệm vụ hiện tại:

# PROMPT-P1 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS HANDOFF

MODE: ANALYSIS ONLY

V1.0 CLEAN FINAL

Bạn chỉ được phân tích.

Bạn không được sửa file.

Bạn không được tạo code.

Bạn không được tạo migration.

Bạn không được tạo seed.

Bạn không được update database.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Product Active là Sellable.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

A. Source-of-truth bắt buộc

Bạn phải đọc:

TECH-01.

TECH-10.

TECH-11.

TECH-12.

TECH-13.

PHASE 0 Validation Report.

TECH Product / SKU / Recipe / Product Activation nếu có.

Quy tắc:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu conflict thì báo cáo, không sửa.

B. Scope In

Bạn phải phân tích:

Product Master.

SKU Master.

Ingredient Master.

Recipe Master.

Formula Version.

Formula Kind.

BOM / Ingredient Quantity / UOM.

Product Activation.

Product Active vs Sellable.

SKU Extension Registry.

Product/SKU/Recipe seed hiện có.

Product/SKU/Recipe test hiện có.

Downstream impact sang PHASE 2 → PHASE 9.

C. Scope Out

Bạn không được:

Sửa code.

Tạo code.

Tạo migration.

Tạo seed.

Tạo API.

Tạo UI.

Kích hoạt Product/SKU.

Sửa Recipe/BOM.

Tạo Sellable Gate.

Sửa Commerce / Operational Core / AI Advisor / Gateway.

Gọi PHASE 1 Complete.

Mở Global Gateway.

D. Phân tích bắt buộc Product Active vs Sellable

Bạn phải kiểm tra:

Product Active có bị dùng làm điều kiện bán không.

SKU Active có bị dùng làm sellable không.

Recipe Active có bị dùng làm sellable không.

Có Sellable Gate riêng không.

Có rủi ro Commerce/AI/Gateway dùng sai Product Active không.

Nguyên tắc bắt buộc:

Product Active không đồng nghĩa Sellable.

E. Current implementation state

Dùng một trong các trạng thái:

NOT_FOUND.

PARTIAL.

IMPLEMENTED_BUT_CONFLICT.

IMPLEMENTED_NEEDS_VALIDATION.

UNKNOWN_BLOCKED.

Không dùng PASS / COMPLETE / READY.

F. Báo cáo bắt buộc

Bạn phải lập:

Current Implementation State Matrix.

Gap Analysis Matrix.

Conflict Detection Matrix.

P1 Blocker Register.

Downstream Impact.

Smoke Required.

Report 14 mục.

G. Report format 14 mục

Bạn phải báo cáo đúng 14 mục:

Tóm tắt.

File đã sửa.

Nguồn yêu cầu.

Evidence đã dùng.

Lệnh đã chạy.

Kết quả test.

Kết quả backend build.

Kết quả frontend build.

Kết quả cleanup process.

Cập nhật Markdown.

Kết quả database migration/update nếu áp dụng.

Kết quả seed validation nếu áp dụng.

Rủi ro còn lại.

Cập nhật handoff.

H. Done Gate

Chỉ được coi là analysis done nếu:

Đọc source-of-truth.

Inspect codebase thật.

Phân tích Product/SKU/Ingredient/Recipe/BOM/Formula/Activation.

Phân tích Product Active vs Sellable.

Có gap matrix.

Có conflict matrix.

Có blocker register.

Có downstream impact.

Có smoke required.

Report đủ 14 mục.

Không sửa file.

Không tạo code.

Không tạo migration.

Global Gateway vẫn BLOCKED.

I. Fail Gate

Phải fail nếu:

Sửa file.

Tạo code.

Tạo migration.

Tạo seed.

Gọi Product Active là Sellable.

Không phân tích Product Active vs Sellable.

Không inspect codebase.

Không lập gap/conflict/blocker.

Gọi Release Ready / Production Ready / Go-live Approved.

Mở Global Gateway.

J. Trạng thái cuối bắt buộc

Kết thúc report phải ghi:

PROMPT-P1 FINAL STATUS: ANALYSIS REPORT ONLY  
NOT PHASE 1 COMPLETE  
NOT IMPLEMENTATION COMPLETE  
NOT COMPLETION PASS  
NOT RELEASE READY  
NOT PRODUCTION READY  
NOT GO-LIVE APPROVED  
GLOBAL GATEWAY: BLOCKED

## KẾT THÚC PROMPT

# 21. FINAL STATUS

## 21.1. Trạng thái tài liệu

PROMPT-P1 DOCUMENT STATUS: CLEAN FINAL

## 21.2. Trạng thái thực thi

ANALYSIS HANDOFF ONLY

## 21.3. Phạm vi

PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS ONLY

## 21.4. Trạng thái PHASE 1

NOT PHASE 1 COMPLETE

## 21.5. Trạng thái implementation

NOT IMPLEMENTATION COMPLETE

## 21.6. Trạng thái Completion

NOT COMPLETION PASS

## 21.7. Trạng thái release

NOT RELEASE READY

## 21.8. Trạng thái production

NOT PRODUCTION READY

## 21.9. Trạng thái go-live

NOT GO-LIVE APPROVED

## 21.10. Trạng thái Global Gateway

GLOBAL GATEWAY: BLOCKED
