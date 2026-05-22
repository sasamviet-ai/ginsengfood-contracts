# P1.2A - PRODUCT SKU INGREDIENT UOM

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-02 Product Master / SKU / Recipe / Activation.
- TECH-02 Product / SKU / Ingredient / UOM.
- APPENDICES material and packaging taxonomy.
- Product Active khong dong nghia Sellable.

## Noi Dung Rewrite

## PROMPT-P1.2A - PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

P1.2A chỉ được bắt đầu khi:

P1 Analysis Report đã có.

P1.1 Technical Design Handoff đã có.

Product/SKU/Ingredient/UOM scope rõ.

Active vs Sellable boundary rõ.

SKU extension boundary rõ.

Owner/dev lead cho phép limited implementation.

## 16.2. Không tự chuyển mode

Agent không được tự chuyển từ:

## TECHNICAL DESIGN ONLY

sang:

## LIMITED IMPLEMENTATION

Chỉ owner/dev lead mới được cho phép prompt implementation tiếp theo.

## 17. PROMPT COPY GIAO DEV / CODEX / COPILOT

## 17.1. Nội dung prompt

## BẮT ĐẦU PROMPT

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

Nhiệm vụ hiện tại:

## PROMPT-P1.1 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION TECHNICAL DESIGN HANDOFF

## MODE: TECHNICAL DESIGN ONLY - DO NOT MODIFY FILES

Bạn chỉ được thiết kế handoff kỹ thuật.

Bạn không được sửa file.

Bạn không được tạo code.

Bạn không được tạo migration.

Bạn không được tạo seed.

Bạn không được update database.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Product Active là Sellable.

Bạn không được gọi SKU Active là Sellable.

Bạn không được gọi Recipe Active là Sellable / Released.

Bạn không được mở Global Gate.

Bạn không được gọi Completion Decision / Release Readiness / Production Readiness / Go-live Decision.

A. Source-of-truth bắt buộc

Bạn phải đọc:

PROMPT-P1 Analysis Report.

## TECH-01.

## TECH-10.

## TECH-11.

## TECH-12.

## TECH-13.

PHASE 0 Validation Report.

Product / SKU / Recipe TECH source-of-truth nếu có.

Quy tắc:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu thiếu source-of-truth, báo bị chặn, không tự suy luận.

B. Scope In

Bạn phải lập technical design cho:

Product Master.

SKU Master.

Ingredient Master.

## UOM.

Recipe Master.

## BOM.

Formula Version.

Formula Kind.

Product Activation Guard.

Product Active vs Sellable Boundary.

SKU Active vs Sellable Boundary.

Recipe Active vs Production-ready Boundary.

SKU Extension Registry.

Seed / Master Data Governance.

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

Mở Global Gate.

D. Workstream bắt buộc

Bạn phải chia thành:

Workstream 1A - Product Master Boundary.

Workstream 1B - SKU Master Boundary.

Workstream 1C - Ingredient Master / UOM Boundary.

Workstream 1D - Recipe Master / BOM Boundary.

Workstream 1E - Formula Version / Formula Kind Boundary.

Workstream 1F - Product Activation Guard.

Workstream 1G - Active vs Sellable Boundary.

Workstream 1H - SKU Extension Registry.

Workstream 1I - Seed / Master Data Governance.

E. Ma trận bắt buộc

Bạn phải tạo:

Workstream Matrix.

Task Breakdown Matrix.

Dependency Matrix.

Evidence Plan Matrix.

Smoke Plan Matrix.

P1 điểm chặn Handling Matrix.

Implementation Sequence.

F. Boundary bắt buộc

Bạn phải ghi rõ:

Product Active không đồng nghĩa Sellable.

SKU Active không đồng nghĩa Sellable.

Recipe Active không đồng nghĩa Sellable.

Recipe Active không đồng nghĩa Batch Released.

Sellable thuộc PHASE 3 Commerce Runtime.

Product/SKU/Recipe chỉ là foundation cho các phase sau.

G. Mỗi task phải có đủ

Task ID.

Phase.

Workstream.

Source-of-truth.

Requirement summary.

Scope In.

Scope Out.

Upstream dependency.

Downstream handoff.

P1 điểm chặn liên quan.

Evidence required.

Smoke required.

Owner.

Report requirement.

Done Gate.

Fail Gate.

Initial status.

H. Report format 14 mục

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

I. Done Gate

Chỉ được coi là done nếu:

Có workstream matrix.

Có task breakdown.

Có dependency matrix.

Có evidence plan.

Có smoke plan.

Có điểm chặn handling.

Có implementation sequence.

Có Active vs Sellable boundary.

Có SKU Extension Registry design.

Có Seed Governance design.

Không sửa file.

Không tạo code.

Không tạo migration.

Không tạo seed.

Global Gate vẫn bị chặn.

J. Fail Gate

Phải fail nếu:

Sửa file.

Tạo code.

Tạo migration.

Tạo seed.

Gọi Product Active là Sellable.

Gọi SKU Active là Sellable.

Gọi Recipe Active là Sellable/Released.

Không tạo task breakdown.

Không tạo evidence plan.

Không tạo smoke plan.

Tự đổi nghiệp vụ.

Hardcode policy.

Gọi Release Readiness / Production Readiness / Go-live Decision.

Mở Global Gate.

K. Trạng thái cuối bắt buộc

Kết thúc report phải ghi:

## KẾT THÚC PROMPT

## 18.1. Trạng thái tài liệu

## 18.2. Trạng thái thực thi

## TECHNICAL DESIGN HANDOFF ONLY

## 18.3. Phạm vi

## PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION TECHNICAL DESIGN ONLY

## 18.4. Trạng thái PHASE 1

## 18.5. Trạng thái implementation

## 18.6. Trạng thái Completion

## 18.7. Trạng thái release

## 18.8. Trạng thái production

## 18.9. Trạng thái go-live

## 18.10. Trạng thái Global Gate

Global Gate: bị chặn

## PROMPT-P1.2A - PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

## FILE

## 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM.docx

## PHASE

## PHASE-01 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## MODE

## MODE: LIMITED IMPLEMENTATION

## PROMPT TIẾP THEO

## PROMPT-P1.2B - LIMITED IMPLEMENTATION

Global Gate

bị chặn

## PROMPT-P1.2A - PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

## 1. HEADER

## 1.1. Tên prompt

## PROMPT-P1.2A - PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## 1.2. Vị trí trong roadmap

PROMPT-P1.2A thuộc:

PHASE 1 - Product / SKU / Recipe / Product Activation

PROMPT-P1.2A là bước limited implementation đầu tiên của PHASE 1, thực hiện sau:

## PROMPT-P1 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION ANALYSIS HANDOFF - MODE: ANALYSIS ONLY

## PROMPT-P1.1 - PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION TECHNICAL DESIGN HANDOFF - MODE: TECHNICAL DESIGN ONLY

PROMPT-P1.2A chỉ được bắt đầu khi:

PROMPT-P1 Analysis Report đã có.

PROMPT-P1.1 Technical Design Handoff đã có.

Product Master / SKU Master / Ingredient / UOM scope đã rõ.

Active vs Sellable boundary đã được khóa.

Owner/dev lead đã cho phép limited implementation trong phạm vi P1.2A.

## 1.3. Mục tiêu

Mục tiêu của PROMPT-P1.2A là cho phép dev/Codex/Copilot triển khai giới hạn phần nền của:

Product Master.

SKU Master.

Ingredient Master.

UOM foundation.

Product/SKU/Ingredient status foundation.

Product/SKU public/private field boundary.

Product-SKU relationship foundation.

Ingredient-UOM validation foundation.

SKU extension readiness foundation.

Seed/master data validation nền nếu đã được scope cho phép.

Test/smoke tối thiểu cho Product / SKU / Ingredient / UOM.

Report implementation đầy đủ 14 mục.

## 1.4. Tuyên bố bắt buộc

Đây là prompt LIMITED IMPLEMENTATION.

Agent được phép sửa code chỉ trong phạm vi Product Master / SKU Master / Ingredient / UOM foundation.

Agent không được mở rộng sang:

Recipe Master.

BOM line implementation.

Formula Version / Formula Kind implementation.

Product Activation Guard đầy đủ.

SKU Activation Guard đầy đủ.

Recipe Activation Guard.

Sellable Gate.

Operational Core.

Commerce Runtime.

AI Advisor.

Facebook Gateway.

Ads.

MC AI Live.

## IVR.

Release Gateway.

## 2. MODE: LIMITED IMPLEMENTATION

## 2.1. Chế độ thực thi

## MODE: LIMITED IMPLEMENTATION

Agent được phép:

Inspect codebase thật.

Đọc PROMPT-P1 Analysis Report.

Đọc PROMPT-P1.1 Technical Design Handoff.

Đọc PHASE 0 Validation Report.

Sửa file trong phạm vi Product / SKU / Ingredient / UOM foundation.

mở rộng hoặc chuẩn hóa Product Master model/service/repository nếu cần.

mở rộng hoặc chuẩn hóa SKU Master model/service/repository nếu cần.

mở rộng hoặc chuẩn hóa Ingredient Master model/service/repository nếu cần.

mở rộng hoặc chuẩn hóa UOM foundation nếu cần.

mở rộng public/private field boundary foundation nếu cần.

mở rộng status/lifecycle foundation nếu cần.

mở rộng test/smoke tối thiểu.

Chạy build/test/lint phù hợp.

Báo cáo đầy đủ 14 mục.

## 2.2. Điều kiện để được sửa file

Agent chỉ được sửa file nếu đáp ứng đủ:

Đã đọc PROMPT-P1 Analysis Report.

Đã đọc PROMPT-P1.1 Technical Design Handoff.

Đã đọc PHASE 0 Validation Report.

Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

Đã inspect codebase thật.

Đã xác định file nào thuộc scope P1.2A.

Đã xác định file nào không thuộc scope P1.2A.

Đã xác nhận không cần tự đổi nghiệp vụ.

Đã xác nhận không cần hardcode policy.

Đã xác nhận không cần triển khai Recipe/BOM trong prompt này.

Đã xác nhận không cần triển khai Sellable Gate trong prompt này.

Nếu thiếu điều kiện, agent phải dừng và báo:

bị chặn - LIMITED IMPLEMENTATION PRECONDITION NOT MET

## 3. SOURCE-OF-TRUTH BẮT BUỘC

## 3.1. Source chính

Agent phải đọc và ưu tiên:

PROMPT-P1 Analysis Report

PROMPT-P1.1 Technical Design Handoff

PHASE 0 Validation Report

TECH-01 - Foundation / RBAC / Audit / Evidence / Idempotency

TECH-10 - Global Smoke / UAT / Evidence / Release Gateway

TECH-11 - Implementation Roadmap / Dev Phase Plan

TECH-12 - Phase Backlog Pack

TECH-13 - Codex / Copilot Dev Prompt Pack

Product / SKU / Ingredient / UOM TECH source-of-truth nếu đã có.

Product master data source-of-truth mới do owner cung cấp nếu có.

## 3.2. Quy tắc ưu tiên

Agent phải áp dụng:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Tài liệu cũ chỉ là LEGACY_REFERENCE_ONLY.

PROMPT-P1/P1.1 là đầu vào analysis/design, không phải release evidence.

Không dùng legacy làm nền nghiệp vụ.

Không để code cũ thắng TECH mới.

Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu đã được P1.1 cho phép.

Nếu nghiệp vụ chưa có source-of-truth thì dừng phần đó và báo owner decision required.

## 4. OBJECTIVE

## 4.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

Product Master foundation.

SKU Master foundation.

Ingredient Master foundation.

UOM foundation.

Product-SKU relationship foundation.

Ingredient-UOM validation foundation.

Product status foundation.

SKU status foundation.

Ingredient status foundation.

Public/private field boundary foundation.

SKU extension readiness foundation.

Seed/master data validation foundation nếu được scope cho phép.

Test/smoke tối thiểu cho các phần trên.

Report implementation đầy đủ 14 mục.

## 4.2. Mục tiêu nền tảng

P1.2A phải tạo nền để các prompt sau có thể tiếp tục:

## PROMPT-P1.2B - Recipe / BOM / Formula Version Implementation Handoff

## PROMPT-P1.2C - Product / SKU / Recipe Activation Guard Implementation Handoff

## PROMPT-P1.2D - SKU Extension Registry / Seed Governance Implementation Handoff

## PROMPT-P1.2E - PHASE 1 Smoke / Evidence / Implementation Report Handoff

## 5. SCOPE IN

## 5.1. Product Master Foundation

Agent được phép triển khai hoặc chuẩn hóa:

Product entity/model.

Product identity.

Product public name.

Product internal name/code nếu có.

Product group/category nếu scope đã rõ.

Product description/metadata an toàn nếu có.

Product status foundation.

Product active flag nếu đã được thiết kế rõ.

Product public/private field boundary.

Product relationship với SKU.

Product audit hook nếu PHASE 0 Audit foundation hỗ trợ.

Product actor/correlation linkage nếu có command foundation.

Product validation foundation.

Agent phải bảo đảm:

Product Active không đồng nghĩa Sellable.

## 5.2. Product Status Foundation

Product status tối thiểu có thể gồm:

Nếu codebase đã có status khác, agent phải map tương đương và báo rõ trong report.

Không được tự tạo trạng thái bán hàng như SELLABLE trong Product Master.

## 5.3. SKU Master Foundation

Agent được phép triển khai hoặc chuẩn hóa:

SKU entity/model.

SKU identity.

SKU code.

SKU public name.

SKU internal code nếu có.

SKU linked product.

SKU group/category nếu scope rõ.

SKU type nếu scope rõ.

SKU status foundation.

SKU active flag nếu đã thiết kế rõ.

SKU public/private field boundary.

SKU extension readiness.

SKU validation foundation.

SKU uniqueness rule.

SKU audit hook nếu PHASE 0 Audit foundation hỗ trợ.

Agent phải bảo đảm:

SKU Active không đồng nghĩa Sellable.

## 5.4. SKU Status Foundation

SKU status tối thiểu có thể gồm:

Không được dùng SKU status để thay thế Sellable Gate.

Không được dùng SKU Active để tự động cho AI/Commerce/Gateway bán hàng.

## 5.5. Ingredient Master Foundation

Agent được phép triển khai hoặc chuẩn hóa:

Ingredient entity/model.

Ingredient identity.

Ingredient code.

Ingredient name.

Ingredient group/category.

Ingredient type nếu scope rõ.

Ingredient status foundation.

Ingredient base UOM.

Ingredient public/private field boundary nếu có.

Ingredient validation foundation.

Ingredient relationship readiness cho Recipe/BOM prompt sau.

Ingredient audit hook nếu PHASE 0 Audit foundation hỗ trợ.

Agent phải bảo đảm:

Ingredient không bị hardcode trong recipe logic.

Ingredient active không tự động làm Recipe active.

Ingredient active không tự động làm SKU sellable.

## 5.6. UOM Foundation

Agent được phép triển khai hoặc chuẩn hóa:

UOM entity/model nếu chưa có.

UOM code.

UOM name.

UOM type/group nếu scope rõ.

Base UOM flag nếu cần.

UOM status.

UOM validation.

Ingredient base UOM linkage.

UOM conversion placeholder/boundary nếu đã có thiết kế.

Không triển khai conversion phức tạp nếu chưa có source-of-truth.

UOM foundation phải bảo đảm:

Ingredient quantity sau này không được thiếu UOM.

BOM line sau này phải dùng UOM hợp lệ.

Không hardcode đơn vị trong recipe/BOM.

Không tự đổi đơn vị nếu không có conversion rule.

## 5.7. Public / Private Field Boundary

Agent phải bảo đảm dữ liệu Product/SKU/Ingredient có boundary:

Public field có thể dùng cho public/AI/channel sau này nếu policy cho phép

publicName.

publicDescription nếu có.

publicCategory nếu có.

publicPositioning nếu có.

publicImageRef nếu có và đã được policy cho phép.

Private/internal field không được public mặc định

internalCode.

cost data.

formula/recipe detail.

supplier/internal sourcing note.

internal status reason.

private quality note.

internal approval note.

internal owner note.

raw ingredient ratio.

non-public metadata.

P1.2A chỉ tạo boundary nền.

Public exposure thực tế thuộc các phase/channel sau.

## 5.8. SKU Extension Readiness

Agent phải chuẩn bị foundation để sau này thêm SKU mới mà không sửa đè logic.

Yêu cầu:

Không hardcode danh sách SKU trong business logic.

SKU code phải unique.

SKU mới phải linked product.

SKU mới có status riêng.

SKU mới không tự sellable.

SKU mới có thể linked recipe/BOM ở prompt sau.

SKU extension không sửa đè SKU cũ.

SKU extension có thể validate seed/manifest ở prompt sau.

SKU extension không tự public nếu thiếu policy.

## 6. SCOPE OUT

PROMPT-P1.2A không được triển khai:

Recipe Master đầy đủ.

BOM line đầy đủ.

Formula Version.

Formula Kind.

Recipe approval flow.

Recipe activation.

Product Activation Guard đầy đủ.

SKU Activation Guard đầy đủ.

Recipe Activation Guard.

Sellable Gate.

Commerce Runtime.

Operational Core.

AI Advisor product knowledge.

Facebook Gateway public product exposure.

Ads product mapping.

MC AI Live script product runtime.

IVR order logic.

Release Gateway.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt tương ứng.

## 7. ALLOWED FILE CHANGE BOUNDARY

## 7.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

Product Master model/entity.

Product Master service/repository nếu nằm trong foundation scope.

SKU Master model/entity.

SKU Master service/repository nếu nằm trong foundation scope.

Ingredient Master model/entity.

Ingredient Master service/repository nếu nằm trong foundation scope.

UOM model/entity/service/repository nếu nằm trong foundation scope.

Validation foundation cho Product/SKU/Ingredient/UOM.

Migration cho Product/SKU/Ingredient/UOM nếu đã được scope cho phép.

Test/smoke cho Product/SKU/Ingredient/UOM foundation.

Seed/dev fixture nếu đã được P1.1 cho phép và không chứa production secret.

## 7.2. File không được sửa

Agent không được sửa:

Recipe/BOM implementation file.

Formula Version implementation file.

Product Activation Guard file nếu chưa thuộc scope.

Commerce Sellable Gate file.

Operational Core file.

AI Advisor file.

Gateway file.

Ads/MC AI Live/IVR file.

Release Gateway file.

Production config/release flag.

Global Gate config.

## 7.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

bị chặn - FILE BOUNDARY UNCLEAR

## 8. IMPLEMENTATION REQUIREMENTS

## 8.1. Product Master Requirements

Product Master foundation phải có tối thiểu:

Product ID.

Product code hoặc equivalent identity nếu source-of-truth yêu cầu.

Product public name.

Product internal name/code nếu có.

Product status.

Product active flag hoặc equivalent lifecycle field.

Product category/group nếu source-of-truth có.

Public/private field boundary.

Created/updated metadata nếu codebase có convention.

Actor/correlation/audit linkage nếu command được triển khai trong scope.

Không có sellable flag trong Product Master trừ khi TECH định nghĩa rõ và không dùng thay Commerce Sellable Gate.

## 8.2. SKU Master Requirements

SKU Master foundation phải có tối thiểu:

## SKU ID.

SKU code.

SKU public name.

SKU internal code nếu có.

Linked Product ID.

SKU status.

SKU active flag hoặc equivalent lifecycle.

SKU category/group/type nếu source-of-truth có.

Public/private field boundary.

Unique SKU code validation.

Created/updated metadata nếu codebase có convention.

Actor/correlation/audit linkage nếu command được triển khai trong scope.

Không dùng SKU Active làm Sellable.

## 8.3. Ingredient Master Requirements

Ingredient Master foundation phải có tối thiểu:

Ingredient ID.

Ingredient code.

Ingredient name.

Ingredient group/category nếu có.

Ingredient status.

Base UOM.

Public/private boundary nếu có public ingredient exposure.

Ingredient uniqueness validation.

Created/updated metadata nếu codebase có convention.

Không hardcode ingredient trong recipe logic.

## 8.4. UOM Requirements

UOM foundation phải có tối thiểu:

UOM ID hoặc code.

UOM code.

UOM display name.

UOM type/group nếu có.

UOM status.

Base unit flag nếu có.

Validation không cho Ingredient/BOM line sau này dùng UOM không hợp lệ.

Không tự động conversion nếu chưa có conversion rule.

## 8.5. Active vs Sellable Enforcement at Foundation Level

P1.2A phải bảo đảm ở mức foundation:

Product Active chỉ là trạng thái master data.

SKU Active chỉ là trạng thái master data.

Ingredient Active chỉ là trạng thái master data.

Không có function/service nào trong scope P1.2A trả kết quả “sellable” chỉ vì Product/SKU active.

Nếu code hiện tại có function kiểu isSellable = isActive, agent phải báo conflict hoặc sửa trong đúng scope nếu P1.1 đã cho phép.

Nếu sửa conflict vượt scope, dừng và báo handoff sang PHASE 3/P1.2C tùy loại conflict.

## 9. DATABASE / MIGRATION / SEED RULE

## 9.1. Database / migration rule

P1.2A có thể cần migration cho Product/SKU/Ingredient/UOM foundation.

Agent chỉ được tạo migration khi:

P1.1 đã xác định cần.

Repo đang dùng migration chuẩn.

Migration chỉ phục vụ Product/SKU/Ingredient/UOM foundation.

Không tạo Recipe/BOM/Formula table trong prompt này.

Không tạo Sellable Gate table.

Không update database production.

Không chạy production migration.

Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

bị chặn - PRODUCT MASTER DATA SCHEMA APPROVAL REQUIRED

## 9.2. Seed rule

P1.2A mặc định không seed production data.

Nếu cần seed/dev fixture:

Chỉ seed dev/test/baseline nếu scope cho phép.

Không seed secret.

Không seed production-only data.

Không hardcode sai danh sách SKU.

Seed phải idempotent nếu có.

Seed không được tự set sellable.

Seed không được tự active nếu chưa có owner-approved source.

Report rõ trong mục 12.

Nếu chưa có source-of-truth Product/SKU/Ingredient, không tạo seed.

## 10. TEST / SMOKE REQUIREMENTS

## 10.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

Product tạo hợp lệ.

Product code/public name validation.

Product Active không trả sellable.

SKU tạo hợp lệ.

SKU code unique.

SKU linked Product hợp lệ.

SKU Active không trả sellable.

Ingredient tạo hợp lệ.

Ingredient linked UOM hợp lệ.

UOM hợp lệ được dùng.

UOM không hợp lệ bị reject.

Public field response không chứa private field nếu có response boundary.

SKU extension không sửa đè SKU cũ nếu có flow/fixture.

Seed idempotent nếu có seed.

## 10.2. Test không được phép

Không được viết test cho:

Recipe/BOM full.

Formula Version full.

Product Activation Guard full.

Sellable Gate.

Commerce Runtime.

Operational Production Order.

AI Advisor product recommendation.

Gateway public response.

Ads/Live/IVR product usage.

Release Gateway.

## 10.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

Không gọi các smoke này là Global Smoke Pass.

## 11. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

Không hardcode SKU list vào business logic.

Không hardcode Product Active = Sellable.

Không hardcode SKU Active = Sellable.

Không tạo Sellable Gate trong P1.2A.

Không bỏ qua Actor/RBAC/Audit foundation nếu có command.

Không public private field.

Không seed production secret.

Không sửa business domain ngoài scope.

Không bypass permission.

Không mở Global Gate.

Không gọi Product Master xong là Commerce Ready.

Không gọi SKU Master xong là Sellable Ready.

Không gọi PHASE 1 Complete.

Không gọi Release Readiness / Production Readiness / Go-live Decision.

## 12. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

Đọc PROMPT-P1 Analysis Report.

Đọc PROMPT-P1.1 Technical Design Handoff.

Đọc PHASE 0 Validation Report.

Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

Inspect codebase thật.

Xác định Product/SKU/Ingredient/UOM implementation hiện có.

Xác định file thuộc scope P1.2A.

Xác định file không được sửa.

Xác định có cần migration không.

Xác định có cần seed/dev fixture không.

Triển khai giới hạn Product Master foundation.

Triển khai giới hạn SKU Master foundation.

Triển khai giới hạn Ingredient Master foundation.

Triển khai giới hạn UOM foundation.

Triển khai public/private boundary foundation nếu scope phù hợp.

Thêm/chỉnh test/smoke trong scope.

Chạy build/test/lint phù hợp.

Chạy migration validation nếu có migration.

Chạy seed validation nếu có seed.

Chạy git status/git diff.

Báo cáo đủ 14 mục.

## 13. REQUIRED REPORT FORMAT - 14 MỤC

Agent phải báo cáo đúng 14 mục.

## 13.1. Mục 1 - Tóm tắt

Phải ghi:

Prompt đã chạy: PROMPT-P1.2A.

Mode: LIMITED IMPLEMENTATION.

Scope đã thực hiện.

Product Master foundation đã triển khai gì.

SKU Master foundation đã triển khai gì.

Ingredient/UOM foundation đã triển khai gì.

Test/build đã chạy.

Gap còn lại.

Trạng thái cuối.

Không được ghi PHASE 1 Complete / Release Readiness / Production Readiness / Go-live Decision.

## 13.2. Mục 2 - File đã sửa

Liệt kê:

File đã sửa.

File đã tạo nếu có.

File đã xóa nếu có.

Migration đã tạo nếu có.

Seed/dev fixture đã tạo/sửa nếu có.

Lý do từng file thuộc scope P1.2A.

Xác nhận không sửa ngoài scope.

Git diff summary.

## 13.3. Mục 3 - Nguồn yêu cầu

Liệt kê:

PROMPT-P1 Analysis Report.

PROMPT-P1.1 Technical Design Handoff.

PHASE 0 Validation Report.

## TECH-01.

## TECH-10.

## TECH-11.

## TECH-12.

## TECH-13.

Product/SKU/Ingredient/UOM source-of-truth nếu có.

## 13.4. Mục 4 - Evidence đã dùng

Liệt kê:

Code inspection evidence.

Product implementation evidence.

SKU implementation evidence.

Ingredient implementation evidence.

UOM implementation evidence.

Test evidence.

Build evidence.

Migration evidence nếu có.

Seed validation evidence nếu có.

Git diff evidence.

Gap evidence.

Phải ghi rõ:

Evidence Submitted, not Evidence Accepted.

## 13.5. Mục 5 - Lệnh đã chạy

Liệt kê:

Lệnh inspect.

Lệnh test.

Lệnh build.

Lệnh lint nếu có.

Lệnh migration validation nếu có.

Lệnh seed validation nếu có.

Lệnh git status/git diff.

Lệnh cleanup nếu có.

## 13.6. Mục 6 - Kết quả test

Ghi rõ:

Test nào đã chạy.

Test nào pass.

Test nào fail.

Test nào chưa có.

Test nào cần mở rộng ở prompt sau.

Không gọi test pass là Global Smoke Pass.

## 13.7. Mục 7 - Kết quả backend build

Ghi rõ:

Có chạy backend build không.

Kết quả.

Log tóm tắt.

Nếu không chạy, lý do.

## 13.8. Mục 8 - Kết quả frontend build

Nếu scope không đụng frontend, ghi rõ:

Không chạy frontend build vì scope P1.2A không sửa frontend.

Hoặc có chạy nếu repo yêu cầu.

## 13.9. Mục 9 - Kết quả cleanup process

Ghi rõ:

Có process nào mở không.

Có server/test runner cần dừng không.

Có file tạm không.

Có artifact phát sinh không.

Đã cleanup chưa.

## 13.10. Mục 10 - Cập nhật Markdown

Ghi rõ:

Có sửa Markdown không.

Nếu sửa, vì sao thuộc scope.

Nếu không sửa, ghi “Không cập nhật Markdown”.

Mặc định không cần sửa Markdown trong P1.2A.

## 13.11. Mục 11 - Kết quả database migration/update nếu áp dụng

Ghi rõ:

Có tạo migration không.

Có chạy migration không.

Có update database không.

Migration có thuộc scope Product/SKU/Ingredient/UOM không.

Nếu không, ghi rõ “Không áp dụng trong P1.2A”.

Không update database thật.

## 13.12. Mục 12 - Kết quả seed validation nếu áp dụng

Ghi rõ:

Có động tới seed/dev fixture không.

Có validate seed không.

Seed có liên quan Product/SKU/Ingredient/UOM không.

Seed có idempotent không.

Seed có hardcode sai SKU không.

Seed có tự set sellable không.

Seed có chứa secret không.

Nếu không, ghi rõ “Không áp dụng trong P1.2A”.

## 13.13. Mục 13 - Rủi ro còn lại

Phân nhóm:

Product Master risk.

SKU Master risk.

Ingredient Master risk.

UOM risk.

Public/private boundary risk.

SKU extension readiness risk.

Recipe/BOM chưa triển khai.

Formula Version chưa triển khai.

Product Activation Guard chưa triển khai.

Sellable Gate chưa triển khai.

Downstream PHASE 2/3/4 risk.

Global Gate risk.

## 13.14. Mục 14 - Cập nhật handoff

Phải ghi:

Kết quả P1.2A.

Việc còn lại cho P1.2B.

Việc còn lại cho P1.2C.

Việc còn lại cho P1.2D.

Product/SKU/Ingredient/UOM gap còn lại.

Evidence cần owner review.

Smoke cần mở rộng.

Trạng thái cuối.

Bắt buộc ghi:

## 14. DONE GATE

PROMPT-P1.2A chỉ được xem là done khi đủ:

Đã đọc source-of-truth.

Đã đọc PROMPT-P1 Analysis Report.

Đã đọc PROMPT-P1.1 Technical Design Handoff.

Đã inspect codebase thật.

Đã giới hạn scope đúng P1.2A.

Đã triển khai hoặc chuẩn hóa Product Master foundation.

Đã triển khai hoặc chuẩn hóa SKU Master foundation.

Đã triển khai hoặc chuẩn hóa Ingredient Master foundation.

Đã triển khai hoặc chuẩn hóa UOM foundation.

Đã có Product Active != Sellable boundary ở foundation level.

Đã có SKU Active != Sellable boundary ở foundation level.

Đã có public/private field boundary nền.

Không sửa lan sang Recipe/BOM.

Không triển khai Formula Version.

Không triển khai Product Activation Guard đầy đủ.

Không triển khai Sellable Gate.

Không sửa Commerce / Operational / AI / Gateway.

Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

Có build/test result nếu chạy được.

Có git diff summary.

Có report đủ 14 mục.

Không gọi PHASE 1 Complete / Release Readiness / Production Readiness / Go-live Decision.

Global Gate vẫn bị chặn.

Trạng thái tối đa được phép:

## P1.2A LIMITED IMPLEMENTATION COMPLETED FOR PRODUCT / SKU / INGREDIENT / UOM FOUNDATION ONLY

Không được gọi:

PHASE 1 Complete.

Full Implementation Complete.

Completion Decision.

Release Readiness.

Production Readiness.

Go-live Decision.

## 15. FAIL GATE

PROMPT-P1.2A phải fail nếu:

Agent sửa ngoài scope.

Agent tự triển khai Recipe/BOM đầy đủ.

Agent tự triển khai Formula Version.

Agent tự triển khai Product Activation Guard đầy đủ.

Agent tự triển khai Sellable Gate.

Agent sửa Commerce / Operational / AI / Gateway không được phép.

Agent hardcode danh sách SKU vào business logic.

Agent hardcode Product Active = Sellable.

Agent hardcode SKU Active = Sellable.

Agent public private/internal field.

Agent tạo seed tự set sellable.

Agent tạo seed chứa secret.

Agent bỏ qua PHASE 0 Actor/RBAC/Audit nếu có command.

Agent đổi gateway/release flag.

Agent không chạy hoặc không báo test/build.

Agent không report đủ 14 mục.

Agent gọi Release Readiness / Production Readiness / Go-live Decision.

Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

PROMPT-P1.2A FAIL GATE - LIMITED IMPLEMENTATION NOT ACCEPTED

## 16. DOWNSTREAM HANDOFF

## 16.1. Sang PROMPT-P1.2B

Nếu P1.2A đạt Done Gate, bước tiếp theo là:

## PROMPT-P1.2B - RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

P1.2B chỉ được bắt đầu khi:

Product Master foundation đã có.

SKU Master foundation đã có.

Ingredient Master foundation đã có.

UOM foundation đã có.

Product/SKU Active != Sellable boundary đã có.

P1.2A report đủ 14 mục.

Owner/dev lead cho phép limited implementation tiếp theo.

## 16.2. Không tự chuyển prompt

Agent không được tự chuyển sang P1.2B.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 17. PROMPT COPY GIAO DEV / CODEX / COPILOT

## 17.1. Nội dung prompt

## BẮT ĐẦU PROMPT

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

Nhiệm vụ hiện tại:

## PROMPT-P1.2A - PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## MODE: LIMITED IMPLEMENTATION

Bạn được phép sửa code chỉ trong phạm vi Product Master / SKU Master / Ingredient / UOM foundation.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Product Active là Sellable.

Bạn không được gọi SKU Active là Sellable.

Bạn không được mở Global Gate.

Bạn không được gọi Completion Decision / Release Readiness / Production Readiness / Go-live Decision.

A. Source-of-truth bắt buộc

Bạn phải đọc:

PROMPT-P1 Analysis Report.

PROMPT-P1.1 Technical Design Handoff.

PHASE 0 Validation Report.

## TECH-01.

## TECH-10.

## TECH-11.

## TECH-12.

## TECH-13.

Product / SKU / Ingredient / UOM source-of-truth nếu có.

Quy tắc:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu conflict ngoài scope, báo cáo, không sửa.

B. Scope In

Bạn chỉ được triển khai:

Product Master foundation.

SKU Master foundation.

Ingredient Master foundation.

UOM foundation.

Product/SKU relationship foundation.

Ingredient/UOM validation foundation.

Product/SKU/Ingredient status foundation.

Public/private field boundary foundation.

SKU extension readiness foundation.

Seed/dev fixture nếu đã được scope cho phép.

Test/smoke tối thiểu.

Report 14 mục.

C. Scope Out

Bạn không được triển khai:

Recipe Master full.

BOM line full.

Formula Version.

Formula Kind.

Product Activation Guard full.

SKU Activation Guard full.

Recipe Activation Guard.

Sellable Gate.

Operational Core.

Commerce Runtime.

AI Advisor.

Facebook Gateway.

Ads / MC AI Live / IVR.

Release Gateway.

D. Boundary bắt buộc

Bạn phải bảo đảm:

Product Active không đồng nghĩa Sellable.

SKU Active không đồng nghĩa Sellable.

Ingredient Active không đồng nghĩa Recipe Active.

Product/SKU/Ingredient foundation không tự mở bán.

Sellable thuộc PHASE 3 Commerce Runtime.

Public/private field không được lẫn.

Không hardcode SKU list trong business logic.

Không seed tự set sellable.

E. Allowed file change boundary

Bạn chỉ được sửa file liên quan trực tiếp đến:

Product Master model/entity/service/repository foundation.

SKU Master model/entity/service/repository foundation.

Ingredient Master model/entity/service/repository foundation.

UOM model/entity/service/repository foundation.

Validation foundation.

Migration Product/SKU/Ingredient/UOM nếu đã được scope cho phép.

Test/smoke Product/SKU/Ingredient/UOM.

Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

F. Database / migration / seed

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

Thuộc Product/SKU/Ingredient/UOM foundation.

Có migration mechanism rõ.

Không tạo Recipe/BOM/Formula/Sellable table.

Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

bị chặn - PRODUCT MASTER DATA SCHEMA APPROVAL REQUIRED

Nếu cần seed/dev fixture:

Không chứa secret.

Không tự set sellable.

Không hardcode sai SKU.

Phải idempotent nếu có seed validation.

Report đầy đủ trong mục 12.

G. Test/smoke tối thiểu

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

Tạo Product Master hợp lệ.

Product Active không được xem là Sellable.

Tạo SKU linked Product hợp lệ.

SKU code duplicate bị reject.

SKU Active không được xem là Sellable.

Tạo Ingredient với UOM hợp lệ.

Ingredient thiếu UOM bị reject nếu UOM bắt buộc.

UOM inactive/invalid không được dùng nếu rule yêu cầu.

Public response không lộ private/internal field nếu có response boundary.

Seed/dev fixture chạy lại không duplicate, không tự sellable nếu có seed.

Không gọi test này là Global Smoke Pass.

H. Lệnh và kiểm tra

Bạn cần chạy phù hợp:

Backend build nếu có thể.

Test liên quan.

Lint nếu project yêu cầu.

Migration validation nếu có tạo migration.

Seed validation nếu có seed.

Git status.

Git diff.

Không chạy migration production.

Không update database thật.

I. Report format bắt buộc 14 mục

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

J. Done Gate

Chỉ được coi là done nếu:

Đúng scope P1.2A.

Product Master foundation có nền.

SKU Master foundation có nền.

Ingredient Master foundation có nền.

UOM foundation có nền.

Product Active != Sellable.

SKU Active != Sellable.

Public/private boundary có nền.

Không triển khai Recipe/BOM/Formula/Activation Guard/Sellable Gate.

Có test/build hoặc báo rõ lý do không chạy.

Có report 14 mục.

Có git diff summary.

Global Gate vẫn bị chặn.

K. Fail Gate

Phải fail nếu:

Sửa ngoài scope.

Hardcode policy.

Hardcode Product Active = Sellable.

Hardcode SKU Active = Sellable.

Hardcode SKU list vào business logic.

Public private/internal field.

Tự triển khai Recipe/BOM/Formula/Activation Guard/Sellable Gate.

Sửa Commerce/Operational/AI/Gateway không được phép.

Seed tự set sellable.

Mở Gateway.

Gọi Release Readiness / Production Readiness / Go-live Decision.

Không report đủ 14 mục.

L. Trạng thái cuối bắt buộc

Kết thúc report phải ghi:

## KẾT THÚC PROMPT

## 18.1. Trạng thái tài liệu

## 18.2. Trạng thái thực thi

## LIMITED IMPLEMENTATION HANDOFF ONLY

## 18.3. Phạm vi được phép

## PRODUCT MASTER / SKU MASTER / INGREDIENT / UOM FOUNDATION ONLY

## 18.4. Trạng thái PHASE 1

## 18.5. Trạng thái implementation

## 18.6. Trạng thái Completion

## 18.7. Trạng thái release

## 18.8. Trạng thái production

## 18.9. Trạng thái go-live

## 18.10. Trạng thái Global Gate

Global Gate: bị chặn
