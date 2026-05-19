**PROMPT-P1.2B — RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

| **FILE**             | 03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx               |
|----------------------|--------------------------------------------------------|
| **PHASE**            | PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION |
| **MODE**             | MODE: LIMITED IMPLEMENTATION                           |
| **PROMPT TIẾP THEO** | PROMPT-P1.2C — LIMITED IMPLEMENTATION                  |
| **GLOBAL GATEWAY**   | BLOCKED                                                |

# PROMPT-P1.2B — RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF

MODE: LIMITED IMPLEMENTATION

V1.0 CLEAN FINAL

# 1. PHASE MARKER

## 1.1. Phase hiện tại

PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

## 1.2. Prompt hiện tại

# PROMPT-P1.2B — RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF

## 1.3. Mode

MODE: LIMITED IMPLEMENTATION

## 1.4. Prompt liền trước

# PROMPT-P1.2A — PRODUCT MASTER / SKU MASTER / INGREDIENT UOM FOUNDATION IMPLEMENTATION HANDOFF

## 1.5. Prompt tiếp theo

# PROMPT-P1.2C — PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

## 1.6. Điều kiện chuyển sang prompt tiếp theo

Chỉ được chuyển sang P1.2C khi:

Recipe Master foundation đã có.

BOM line foundation đã có.

Formula Version foundation đã có.

Formula Kind foundation đã có.

Recipe/BOM không sửa đè lịch sử.

Recipe/BOM có liên kết Product/SKU/Ingredient/UOM đúng.

P1.2B có report đủ 14 mục.

Không có blocker nghiêm trọng trong Recipe / BOM / Formula Version.

Global Gateway vẫn BLOCKED.

## 1.7. Điều kiện chuyển sang PHASE 2

Chưa được chuyển sang PHASE 2 sau P1.2B.

PHASE 2 chỉ được bắt đầu sau khi hoàn tất:

P1.2C — Activation Guard.

P1.2D — SKU Extension / Seed Governance.

P1.2E — PHASE 1 Smoke / Evidence / Implementation Report.

Owner/dev lead cho phép viết PROMPT-P2 Analysis Only.

# 2. HEADER

## 2.1. Tên prompt

# PROMPT-P1.2B — RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF

## 2.2. Vị trí trong roadmap

PROMPT-P1.2B thuộc:

PHASE 1 — Product / SKU / Recipe / Product Activation

PROMPT-P1.2B là bước limited implementation thứ hai của PHASE 1, thực hiện sau:

# PROMPT-P1 — ANALYSIS ONLY

# PROMPT-P1.1 — TECHNICAL DESIGN ONLY

# PROMPT-P1.2A — PRODUCT / SKU / INGREDIENT / UOM FOUNDATION

PROMPT-P1.2B chỉ được bắt đầu khi:

Product Master foundation đã có.

SKU Master foundation đã có.

Ingredient Master foundation đã có.

UOM foundation đã có.

Product/SKU Active không đồng nghĩa Sellable đã được khóa.

P1.2A có implementation report đủ 14 mục.

Owner/dev lead cho phép limited implementation trong phạm vi P1.2B.

## 2.3. Mục tiêu

Mục tiêu của PROMPT-P1.2B là cho phép dev/Codex/Copilot triển khai giới hạn phần nền của:

Recipe Master.

BOM / Recipe Ingredient Line.

Formula Version.

Formula Kind.

Recipe status lifecycle.

Recipe immutability boundary.

Recipe-to-SKU linkage.

Recipe-to-Ingredient/UOM linkage.

BOM quantity validation.

Formula snapshot readiness foundation.

Pilot vs fixed formula boundary nếu source-of-truth đã có.

Test/smoke tối thiểu cho Recipe / BOM / Formula Version.

Report implementation đầy đủ 14 mục.

## 2.4. Tuyên bố bắt buộc

Đây là prompt LIMITED IMPLEMENTATION.

Agent được phép sửa code chỉ trong phạm vi Recipe / BOM / Formula Version foundation.

Agent không được mở rộng sang:

Product Activation Guard đầy đủ.

SKU Activation Guard đầy đủ.

Recipe Activation Guard đầy đủ.

Production Order.

Material Planning.

Operational Core.

Commerce Runtime.

Sellable Gate.

AI Advisor Product Knowledge.

Facebook Gateway.

Ads.

MC AI Live.

IVR.

Release Gateway.

# 3. MODE: LIMITED IMPLEMENTATION

## 3.1. Chế độ thực thi

MODE: LIMITED IMPLEMENTATION

Agent được phép:

Inspect codebase thật.

Đọc PROMPT-P1 Analysis Report.

Đọc PROMPT-P1.1 Technical Design Handoff.

Đọc PROMPT-P1.2A Implementation Report.

Đọc PHASE 0 Validation Report.

Sửa file trong phạm vi Recipe / BOM / Formula Version foundation.

Bổ sung hoặc chuẩn hóa Recipe Master model/service/repository nếu cần.

Bổ sung hoặc chuẩn hóa BOM/Recipe Line model nếu cần.

Bổ sung hoặc chuẩn hóa Formula Version nếu cần.

Bổ sung hoặc chuẩn hóa Formula Kind nếu cần.

Bổ sung validation Recipe/SKU/Ingredient/UOM linkage.

Bổ sung immutability boundary cho recipe/version.

Bổ sung test/smoke tối thiểu.

Chạy build/test/lint phù hợp.

Báo cáo đầy đủ 14 mục.

## 3.2. Điều kiện để được sửa file

Agent chỉ được sửa file nếu đáp ứng đủ:

Đã đọc PROMPT-P1 Analysis Report.

Đã đọc PROMPT-P1.1 Technical Design Handoff.

Đã đọc PROMPT-P1.2A Implementation Report.

Đã đọc PHASE 0 Validation Report.

Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

Đã inspect codebase thật.

Đã xác định Product/SKU/Ingredient/UOM foundation đã có.

Đã xác định file nào thuộc scope P1.2B.

Đã xác định file nào không thuộc scope P1.2B.

Đã xác nhận không cần tự đổi nghiệp vụ.

Đã xác nhận không cần hardcode policy.

Đã xác nhận không triển khai Production Order trong prompt này.

Đã xác nhận không triển khai Sellable Gate trong prompt này.

Nếu thiếu điều kiện, agent phải dừng và báo:

BLOCKED — LIMITED IMPLEMENTATION PRECONDITION NOT MET

# 4. SOURCE-OF-TRUTH BẮT BUỘC

## 4.1. Source chính

Agent phải đọc và ưu tiên:

PROMPT-P1 Analysis Report

PROMPT-P1.1 Technical Design Handoff

PROMPT-P1.2A Implementation Report

PHASE 0 Validation Report

TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency

TECH-10 — Global Smoke / UAT / Evidence / Release Gateway

TECH-11 — Implementation Roadmap / Dev Phase Plan

TECH-12 — Phase Backlog Pack

TECH-13 — Codex / Copilot Dev Prompt Pack

Recipe / BOM / Formula Version source-of-truth nếu đã có.

Product/SKU/Ingredient/UOM source-of-truth đã dùng ở P1.2A.

## 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Tài liệu cũ chỉ là LEGACY_REFERENCE_ONLY.

PROMPT-P1/P1.1/P1.2A là đầu vào analysis/design/implementation, không phải release evidence.

Không dùng legacy làm nền nghiệp vụ.

Không để code cũ thắng TECH mới.

Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P1.1 đã cho phép.

Nếu nghiệp vụ Recipe/BOM/Formula chưa có source-of-truth thì dừng phần đó và báo owner decision required.

# 5. OBJECTIVE

## 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

Recipe Master foundation.

BOM / Recipe Ingredient Line foundation.

Formula Version foundation.

Formula Kind foundation.

Recipe-SKU relationship foundation.

Recipe-Ingredient-UOM validation foundation.

BOM quantity validation foundation.

Recipe status lifecycle foundation.

Recipe immutability boundary.

Formula snapshot readiness foundation.

Recipe public/private boundary nếu có.

Test/smoke tối thiểu.

Report implementation đầy đủ 14 mục.

## 5.2. Mục tiêu nền tảng

P1.2B phải tạo nền để các prompt sau có thể tiếp tục:

# PROMPT-P1.2C — Product / SKU / Recipe Activation Guard

# PROMPT-P1.2D — SKU Extension Registry / Seed Governance

# PROMPT-P1.2E — PHASE 1 Smoke / Evidence / Implementation Report

PHASE 2 — Operational Core sau khi PHASE 1 đủ evidence/smoke/owner review.

# 6. SCOPE IN

## 6.1. Recipe Master Foundation

Agent được phép triển khai hoặc chuẩn hóa:

Recipe entity/model.

Recipe identity.

Recipe code/name nếu source-of-truth yêu cầu.

Recipe linked SKU.

Recipe version.

Recipe status.

Recipe formula kind.

Recipe effective date nếu có.

Recipe ingredient/BOM lines.

Recipe approval status nếu thuộc foundation.

Recipe immutable boundary.

Recipe public/private field boundary nếu có.

Recipe audit hook nếu PHASE 0 Audit foundation hỗ trợ.

Recipe actor/correlation linkage nếu có command foundation.

Recipe validation foundation.

## 6.2. Recipe Status Foundation

Recipe status tối thiểu có thể gồm:

Agent phải bảo đảm:

Recipe Active không đồng nghĩa Sellable.

Recipe Active không đồng nghĩa Production Order đã được tạo.

Recipe Active không đồng nghĩa Batch QC_PASS.

Recipe Active không đồng nghĩa Batch RELEASED.

Recipe Active không đồng nghĩa Finished Goods Available.

## 6.3. BOM / Recipe Ingredient Line Foundation

Agent được phép triển khai hoặc chuẩn hóa:

Recipe line entity/model.

Recipe ID linkage.

Ingredient ID linkage.

Ingredient quantity.

UOM linkage.

Ingredient group nếu source-of-truth có.

Line order nếu cần.

Required/optional flag nếu có.

Quantity validation.

UOM validation.

No hardcoded ingredient list.

No hardcoded quantity.

No missing UOM.

No invalid ingredient.

## 6.4. BOM Quantity / UOM Rule

BOM/Recipe line phải bảo đảm:

Quantity phải là số hợp lệ.

Quantity không được âm.

Quantity không được bằng 0 nếu line bắt buộc.

UOM phải tồn tại.

UOM phải active nếu rule yêu cầu.

Ingredient phải tồn tại.

Ingredient phải active nếu rule yêu cầu.

Không tự convert UOM nếu chưa có conversion rule.

Nếu cần conversion nhưng chưa có rule, phải báo gap.

Không hardcode UOM trong code.

## 6.5. Formula Version Foundation

Agent được phép triển khai hoặc chuẩn hóa:

Formula version field.

Formula version lifecycle.

Version uniqueness per SKU/recipe scope.

Version immutability boundary.

Version effective date nếu có.

Version supersede rule nếu có.

Version linked recipe lines.

Version audit hook nếu có.

Version validation.

Version readiness cho production snapshot sau này.

Agent phải bảo đảm:

Formula đã dùng trong production sau này không được sửa đè.

Nếu cần thay đổi, phải tạo version mới.

Version cũ phải giữ lịch sử.

Không xóa version đã tham chiếu.

Không dùng version active làm sellable.

## 6.6. Formula Kind Foundation

Agent được phép triển khai hoặc chuẩn hóa Formula Kind nếu source-of-truth đã có.

Formula Kind có thể gồm:

Agent không được tự tạo formula kind tùy tiện.

Nếu source-of-truth chưa khóa Formula Kind, agent phải báo:

BLOCKED — FORMULA KIND SOURCE-OF-TRUTH REQUIRED

## 6.7. Pilot vs Fixed Formula Boundary

Nếu source-of-truth đã khóa pilot/fixed formula, agent phải bảo đảm:

PILOT_PERCENT_BASED dùng ratio/anchor rule nếu có.

FIXED_QUANTITY_BATCH dùng quantity per batch nếu có.

Không lẫn rule giữa hai formula kind.

Không active recipe nếu thiếu dữ liệu bắt buộc theo formula kind.

Không dùng cùng một validation cho mọi formula kind nếu TECH yêu cầu tách.

Test phải chứng minh branch rule nếu có.

## 6.8. Recipe Snapshot Readiness Foundation

P1.2B chưa triển khai Production Order.

Nhưng phải chuẩn bị recipe snapshot readiness cho PHASE 2:

Recipe có version.

Recipe có formula kind.

Recipe có ingredient lines.

Line có ingredient/quantity/UOM.

Recipe có status hợp lệ.

Recipe có audit/version boundary.

Recipe có thể được snapshot bởi Production Order sau này.

Snapshot sau này phải giữ version/ingredient/quantity/UOM tại thời điểm tạo order.

P1.2B chỉ chuẩn bị foundation, không tạo Production Order.

# 7. SCOPE OUT

PROMPT-P1.2B không được triển khai:

Product Activation Guard đầy đủ.

SKU Activation Guard đầy đủ.

Recipe Activation Guard đầy đủ.

Production Order.

Production Batch.

Material Request.

Material Issue.

Material Receipt.

Inventory.

Warehouse.

QC / Release.

Commerce Sellable Gate.

AI Advisor Product Knowledge.

Facebook Gateway public product response.

Ads product mapping.

MC AI Live runtime.

IVR order logic.

Release Gateway.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

# 8. ALLOWED FILE CHANGE BOUNDARY

## 8.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

Recipe Master model/entity.

Recipe Master service/repository nếu nằm trong foundation scope.

Recipe Line / BOM model/entity.

Recipe Line / BOM service/repository nếu nằm trong foundation scope.

Formula Version model/entity.

Formula Kind enum/config nếu source-of-truth đã có.

Recipe/BOM validation foundation.

Migration Recipe/BOM/Formula nếu đã được scope cho phép.

Test/smoke Recipe/BOM/Formula foundation.

Seed/dev fixture nếu đã được P1.1 cho phép và không chứa production secret.

## 8.2. File không được sửa

Agent không được sửa:

Product Activation Guard implementation file nếu chưa thuộc scope.

Commerce Sellable Gate file.

Operational Core file.

Production Order file.

Inventory/Warehouse file.

AI Advisor file.

Gateway file.

Ads/MC AI Live/IVR file.

Release Gateway file.

Production config/release flag.

Global Gateway config.

## 8.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

BLOCKED — FILE BOUNDARY UNCLEAR

# 9. IMPLEMENTATION REQUIREMENTS

## 9.1. Recipe Master Requirements

Recipe Master foundation phải có tối thiểu:

Recipe ID.

Recipe code hoặc equivalent nếu source-of-truth yêu cầu.

Linked SKU ID.

Formula version.

Formula kind nếu source-of-truth có.

Recipe status.

Recipe line collection.

Effective date nếu có.

Created/updated metadata nếu codebase có convention.

Actor/correlation/audit linkage nếu command được triển khai trong scope.

No sellable flag.

No production released flag.

## 9.2. BOM / Recipe Line Requirements

BOM/Recipe Line foundation phải có tối thiểu:

Recipe line ID.

Recipe ID.

Ingredient ID.

Quantity.

UOM.

Line group nếu source-of-truth có.

Line order nếu cần.

Validation không thiếu ingredient.

Validation không thiếu UOM.

Validation quantity hợp lệ.

Không hardcode ingredient/quantity.

Không tự convert UOM nếu chưa có rule.

## 9.3. Formula Version Requirements

Formula Version foundation phải bảo đảm:

Recipe có version.

Version unique trong scope phù hợp.

Version không bị sửa đè khi đã được lock/snapshot/used.

Thay đổi công thức phải tạo version mới nếu đã used/approved.

Version cũ vẫn giữ để trace.

Version có status/lifecycle nếu source-of-truth có.

Version có audit event nếu audit hook có.

Version không đồng nghĩa sellable.

## 9.4. Formula Kind Requirements

Formula Kind foundation phải bảo đảm:

Có danh mục formula kind rõ nếu source-of-truth đã khóa.

Validation branch theo formula kind nếu có.

Không dùng field của PILOT cho FIXED nếu rule cấm.

Không dùng field của FIXED cho PILOT nếu rule cấm.

Không hardcode formula kind sai source.

Không tự thêm formula kind chưa được owner/TECH cho phép.

# 10. DATABASE / MIGRATION / SEED RULE

## 10.1. Database / migration rule

P1.2B có thể cần migration cho Recipe/BOM/Formula Version foundation.

Agent chỉ được tạo migration khi:

P1.1 đã xác định cần.

Repo đang dùng migration chuẩn.

Migration chỉ phục vụ Recipe/BOM/Formula foundation.

Không tạo Production Order table trong prompt này.

Không tạo Sellable Gate table.

Không update database production.

Không chạy production migration.

Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

BLOCKED — RECIPE / BOM / FORMULA SCHEMA APPROVAL REQUIRED

## 10.2. Seed rule

P1.2B mặc định không seed production recipe.

Nếu cần seed/dev fixture:

Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

Không seed secret.

Không seed production-only formula chưa được phê duyệt.

Không hardcode sai ingredient/quantity.

Seed phải idempotent nếu có.

Seed không tự set sellable.

Seed không tự tạo production order.

Report rõ trong mục 12.

Nếu chưa có source-of-truth Recipe/BOM/Formula, không tạo seed.

# 11. TEST / SMOKE REQUIREMENTS

## 11.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

Tạo recipe hợp lệ linked SKU.

Tạo recipe line hợp lệ linked ingredient/UOM.

Recipe line thiếu ingredient bị reject.

Recipe line thiếu UOM bị reject.

Recipe line quantity âm/0 không hợp lệ bị reject.

Recipe version unique trong scope.

Recipe version không sửa đè khi locked/used nếu trạng thái đó có.

Formula kind validation đúng branch nếu có.

Recipe Active không trả Sellable.

Recipe Active không trả Released.

Recipe/BOM snapshot readiness có đủ ingredient/quantity/UOM.

Seed/dev fixture recipe idempotent nếu có seed.

## 11.2. Test không được phép

Không được viết test cho:

Product Activation Guard full.

Production Order full.

Material Request/Issue.

Inventory.

Warehouse.

QC/Release.

Sellable Gate.

Commerce Runtime.

AI Advisor product recommendation.

Gateway public response.

Ads/Live/IVR.

Release Gateway.

## 11.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

Không gọi các smoke này là Global Smoke Pass.

# 12. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

Không hardcode recipe logic.

Không hardcode ingredient quantity sai source-of-truth.

Không hardcode Recipe Active = Sellable.

Không hardcode Recipe Active = Batch Released.

Không tạo Sellable Gate trong P1.2B.

Không tạo Production Order trong P1.2B.

Không bỏ qua Product/SKU/Ingredient/UOM foundation từ P1.2A.

Không bỏ qua Actor/RBAC/Audit foundation nếu có command.

Không public private recipe/formula fields.

Không seed production formula chưa được duyệt.

Không sửa business domain ngoài scope.

Không bypass permission.

Không mở Global Gateway.

Không gọi Recipe/BOM xong là Production Ready.

Không gọi PHASE 1 Complete.

Không gọi Release Ready / Production Ready / Go-live Approved.

# 13. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

Đọc PROMPT-P1 Analysis Report.

Đọc PROMPT-P1.1 Technical Design Handoff.

Đọc PROMPT-P1.2A Implementation Report.

Đọc PHASE 0 Validation Report.

Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

Inspect codebase thật.

Xác định Recipe/BOM/Formula implementation hiện có.

Xác định Product/SKU/Ingredient/UOM foundation từ P1.2A.

Xác định file thuộc scope P1.2B.

Xác định file không được sửa.

Xác định có cần migration không.

Xác định có cần seed/dev fixture không.

Triển khai giới hạn Recipe Master foundation.

Triển khai giới hạn BOM/Recipe Line foundation.

Triển khai giới hạn Formula Version foundation.

Triển khai giới hạn Formula Kind foundation nếu source-of-truth đã có.

Triển khai validation foundation.

Thêm/chỉnh test/smoke trong scope.

Chạy build/test/lint phù hợp.

Chạy migration validation nếu có migration.

Chạy seed validation nếu có seed.

Chạy git status/git diff.

Báo cáo đủ 14 mục.

# 14. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

## 14.1. Mục 1 — Tóm tắt

Phải ghi:

Prompt đã chạy: PROMPT-P1.2B.

Mode: LIMITED IMPLEMENTATION.

Scope đã thực hiện.

Recipe Master foundation đã triển khai gì.

BOM/Recipe Line foundation đã triển khai gì.

Formula Version/Foundation đã triển khai gì.

Test/build đã chạy.

Gap còn lại.

Trạng thái cuối.

Không được ghi PHASE 1 Complete / Release Ready / Production Ready / Go-live Approved.

## 14.2. Mục 2 — File đã sửa

Liệt kê:

File đã sửa.

File đã tạo nếu có.

File đã xóa nếu có.

Migration đã tạo nếu có.

Seed/dev fixture đã tạo/sửa nếu có.

Lý do từng file thuộc scope P1.2B.

Xác nhận không sửa ngoài scope.

Git diff summary.

## 14.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

PROMPT-P1 Analysis Report.

PROMPT-P1.1 Technical Design Handoff.

PROMPT-P1.2A Implementation Report.

PHASE 0 Validation Report.

TECH-01.

TECH-10.

TECH-11.

TECH-12.

TECH-13.

Recipe/BOM/Formula source-of-truth nếu có.

## 14.4. Mục 4 — Evidence đã dùng

Liệt kê:

Code inspection evidence.

Recipe implementation evidence.

BOM implementation evidence.

Formula Version implementation evidence.

Product/SKU/Ingredient/UOM evidence từ P1.2A.

Test evidence.

Build evidence.

Migration evidence nếu có.

Seed validation evidence nếu có.

Git diff evidence.

Gap evidence.

Phải ghi rõ:

Evidence Submitted, not Evidence Accepted.

## 14.5. Mục 5 — Lệnh đã chạy

Liệt kê:

Lệnh inspect.

Lệnh test.

Lệnh build.

Lệnh lint nếu có.

Lệnh migration validation nếu có.

Lệnh seed validation nếu có.

Lệnh git status/git diff.

Lệnh cleanup nếu có.

## 14.6. Mục 6 — Kết quả test

Ghi rõ:

Test nào đã chạy.

Test nào pass.

Test nào fail.

Test nào chưa có.

Test nào cần bổ sung ở prompt sau.

Không gọi test pass là Global Smoke Pass.

## 14.7. Mục 7 — Kết quả backend build

Ghi rõ:

Có chạy backend build không.

Kết quả.

Log tóm tắt.

Nếu không chạy, lý do.

## 14.8. Mục 8 — Kết quả frontend build

Nếu scope không đụng frontend, ghi rõ:

Không chạy frontend build vì scope P1.2B không sửa frontend.

Hoặc có chạy nếu repo yêu cầu.

## 14.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

Có process nào mở không.

Có server/test runner cần dừng không.

Có file tạm không.

Có artifact phát sinh không.

Đã cleanup chưa.

## 14.10. Mục 10 — Cập nhật Markdown

Ghi rõ:

Có sửa Markdown không.

Nếu sửa, vì sao thuộc scope.

Nếu không sửa, ghi “Không cập nhật Markdown”.

Mặc định không cần sửa Markdown trong P1.2B.

## 14.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

Có tạo migration không.

Có chạy migration không.

Có update database không.

Migration có thuộc scope Recipe/BOM/Formula không.

Nếu không, ghi rõ “Không áp dụng trong P1.2B”.

Không update database thật.

## 14.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

Có động tới seed/dev fixture không.

Có validate seed không.

Seed có liên quan Recipe/BOM/Formula không.

Seed có idempotent không.

Seed có hardcode sai ingredient/quantity không.

Seed có tự set sellable không.

Seed có tự set released/production-ready không.

Seed có chứa secret không.

Nếu không, ghi rõ “Không áp dụng trong P1.2B”.

## 14.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

Recipe Master risk.

BOM/Recipe Line risk.

Formula Version risk.

Formula Kind risk.

Formula immutability risk.

Snapshot readiness risk.

Product Activation Guard chưa triển khai.

SKU Extension / Seed Governance chưa hoàn tất.

Production Order chưa triển khai.

Sellable Gate chưa triển khai.

Downstream PHASE 2 risk.

Global Gateway risk.

## 14.14. Mục 14 — Cập nhật handoff

Phải ghi:

Kết quả P1.2B.

Việc còn lại cho P1.2C.

Việc còn lại cho P1.2D.

Việc còn lại cho P1.2E.

Recipe/BOM/Formula gap còn lại.

Evidence cần owner review.

Smoke cần bổ sung.

Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P1.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY  
P1.2B RECIPE / BOM / FORMULA VERSION FOUNDATION ONLY  
NOT PHASE 1 COMPLETE  
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 1  
NOT COMPLETION PASS  
NOT RELEASE READY  
NOT PRODUCTION READY  
NOT GO-LIVE APPROVED  
GLOBAL GATEWAY: BLOCKED

# 15. DONE GATE

PROMPT-P1.2B chỉ được xem là done khi đủ:

Đã đọc source-of-truth.

Đã đọc PROMPT-P1 Analysis Report.

Đã đọc PROMPT-P1.1 Technical Design Handoff.

Đã đọc P1.2A Implementation Report.

Đã inspect codebase thật.

Đã giới hạn scope đúng P1.2B.

Đã triển khai hoặc chuẩn hóa Recipe Master foundation.

Đã triển khai hoặc chuẩn hóa BOM/Recipe Line foundation.

Đã triển khai hoặc chuẩn hóa Formula Version foundation.

Đã triển khai Formula Kind foundation nếu source-of-truth đã có.

Đã có Recipe linked SKU.

Đã có Recipe Line linked Ingredient/UOM.

Đã có quantity/UOM validation.

Đã có Recipe Active != Sellable boundary.

Đã có Recipe Active != Batch Released boundary.

Đã có snapshot readiness foundation.

Không sửa lan sang Production Order.

Không triển khai Activation Guard đầy đủ.

Không triển khai Sellable Gate.

Không sửa Commerce / Operational / AI / Gateway.

Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

Có build/test result nếu chạy được.

Có git diff summary.

Có report đủ 14 mục.

Không gọi PHASE 1 Complete / Release Ready / Production Ready / Go-live Approved.

Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

P1.2B LIMITED IMPLEMENTATION COMPLETED FOR RECIPE / BOM / FORMULA VERSION FOUNDATION ONLY

Không được gọi:

PHASE 1 Complete.

Full Implementation Complete.

Completion PASS.

Release Ready.

Production Ready.

Go-live Approved.

# 16. FAIL GATE

PROMPT-P1.2B phải fail nếu:

Agent sửa ngoài scope.

Agent tự triển khai Product Activation Guard đầy đủ.

Agent tự triển khai Production Order.

Agent tự triển khai Operational Core.

Agent tự triển khai Sellable Gate.

Agent sửa Commerce / Operational / AI / Gateway không được phép.

Agent hardcode Recipe Active = Sellable.

Agent hardcode Recipe Active = Batch Released.

Agent hardcode ingredient/quantity sai source-of-truth.

Agent bỏ qua UOM validation.

Agent cho recipe version sửa đè lịch sử sai rule.

Agent public private/internal formula field.

Agent tạo seed tự set sellable.

Agent tạo seed tự set released/production-ready.

Agent tạo seed chứa secret.

Agent bỏ qua PHASE 0 Actor/RBAC/Audit nếu có command.

Agent đổi gateway/release flag.

Agent không chạy hoặc không báo test/build.

Agent không report đủ 14 mục.

Agent gọi Release Ready / Production Ready / Go-live Approved.

Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

# PROMPT-P1.2B FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED

# 17. DOWNSTREAM HANDOFF

## 17.1. Sang PROMPT-P1.2C

Nếu P1.2B đạt Done Gate, bước tiếp theo là:

# PROMPT-P1.2C — PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

MODE: LIMITED IMPLEMENTATION

V1.0 CLEAN FINAL

P1.2C chỉ được bắt đầu khi:

Product Master foundation đã có.

SKU Master foundation đã có.

Ingredient Master foundation đã có.

UOM foundation đã có.

Recipe Master foundation đã có.

BOM/Recipe Line foundation đã có.

Formula Version foundation đã có.

Product/SKU/Recipe Active != Sellable boundary đã có.

P1.2B report đủ 14 mục.

Owner/dev lead cho phép limited implementation tiếp theo.

## 17.2. Không tự chuyển prompt

Agent không được tự chuyển sang P1.2C.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

# 18. PROMPT COPY GIAO DEV / CODEX / COPILOT

## 18.1. Nội dung prompt

## BẮT ĐẦU PROMPT

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION

PROMPT HIỆN TẠI:

# PROMPT-P1.2B — RECIPE / BOM / FORMULA VERSION IMPLEMENTATION HANDOFF

MODE:

LIMITED IMPLEMENTATION

PROMPT TIẾP THEO:

# PROMPT-P1.2C — PRODUCT / SKU / RECIPE ACTIVATION GUARD IMPLEMENTATION HANDOFF

Bạn được phép sửa code chỉ trong phạm vi Recipe / BOM / Formula Version foundation.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Recipe Active là Sellable.

Bạn không được gọi Recipe Active là Batch Released.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

A. Source-of-truth bắt buộc

Bạn phải đọc:

PROMPT-P1 Analysis Report.

PROMPT-P1.1 Technical Design Handoff.

PROMPT-P1.2A Implementation Report.

PHASE 0 Validation Report.

TECH-01.

TECH-10.

TECH-11.

TECH-12.

TECH-13.

Recipe / BOM / Formula source-of-truth nếu có.

Quy tắc:

TECH mới thắng code cũ.

TECH mới thắng tài liệu cũ.

Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

Legacy chỉ là LEGACY_REFERENCE_ONLY.

Nếu conflict ngoài scope, báo cáo, không sửa.

B. Scope In

Bạn chỉ được triển khai:

Recipe Master foundation.

BOM / Recipe Ingredient Line foundation.

Formula Version foundation.

Formula Kind foundation nếu source-of-truth đã có.

Recipe-SKU relationship foundation.

Recipe-Ingredient-UOM validation foundation.

BOM quantity validation foundation.

Recipe status lifecycle foundation.

Recipe immutability boundary.

Formula snapshot readiness foundation.

Test/smoke tối thiểu.

Report 14 mục.

C. Scope Out

Bạn không được triển khai:

Product Activation Guard đầy đủ.

SKU Activation Guard đầy đủ.

Recipe Activation Guard đầy đủ.

Production Order.

Operational Core.

Commerce Runtime.

Sellable Gate.

AI Advisor.

Facebook Gateway.

Ads / MC AI Live / IVR.

Release Gateway.

D. Boundary bắt buộc

Bạn phải bảo đảm:

Recipe Active không đồng nghĩa Sellable.

Recipe Active không đồng nghĩa Batch Released.

Recipe Active không đồng nghĩa Finished Goods Available.

Formula Version đã dùng sau này không được sửa đè.

BOM line phải có Ingredient / Quantity / UOM hợp lệ.

Không hardcode ingredient/quantity.

Không tự convert UOM nếu chưa có conversion rule.

Không tạo Production Order trong P1.2B.

Không tạo Sellable Gate trong P1.2B.

E. Allowed file change boundary

Bạn chỉ được sửa file liên quan trực tiếp đến:

Recipe Master model/entity/service/repository foundation.

Recipe Line / BOM model/entity/service/repository foundation.

Formula Version model/entity foundation.

Formula Kind enum/config nếu source-of-truth đã có.

Recipe/BOM validation foundation.

Migration Recipe/BOM/Formula nếu đã được scope cho phép.

Test/smoke Recipe/BOM/Formula.

Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

F. Database / migration / seed

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

Thuộc Recipe/BOM/Formula foundation.

Có migration mechanism rõ.

Không tạo Production Order table.

Không tạo Sellable Gate table.

Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

BLOCKED — RECIPE / BOM / FORMULA SCHEMA APPROVAL REQUIRED

Nếu cần seed/dev fixture:

Không chứa secret.

Không tự set sellable.

Không tự set released/production-ready.

Không hardcode sai ingredient/quantity.

Phải idempotent nếu có seed validation.

Report đầy đủ trong mục 12.

G. Test/smoke tối thiểu

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

Tạo Recipe linked SKU hợp lệ.

Recipe thiếu SKU bị reject.

BOM line có Ingredient/UOM/Quantity hợp lệ.

BOM line thiếu UOM bị reject.

BOM line quantity âm/0 bị reject.

Formula version duplicate sai scope bị reject.

Formula kind branch invalid bị reject nếu source-of-truth có branch rule.

Recipe Active không được xem là Sellable.

Recipe Active không được xem là Batch Released.

Recipe snapshot readiness có đủ version/ingredient/quantity/UOM.

Recipe seed/dev fixture chạy lại không duplicate, không tự sellable nếu có seed.

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

Đúng scope P1.2B.

Recipe Master foundation có nền.

BOM/Recipe Line foundation có nền.

Formula Version foundation có nền.

Recipe linked SKU đúng.

Recipe Line linked Ingredient/UOM đúng.

Quantity/UOM validation có nền.

Recipe Active != Sellable.

Recipe Active != Batch Released.

Snapshot readiness có nền.

Không triển khai Production Order/Activation Guard/Sellable Gate.

Có test/build hoặc báo rõ lý do không chạy.

Có report 14 mục.

Có git diff summary.

Global Gateway vẫn BLOCKED.

K. Fail Gate

Phải fail nếu:

Sửa ngoài scope.

Hardcode policy.

Hardcode Recipe Active = Sellable.

Hardcode Recipe Active = Batch Released.

Hardcode ingredient/quantity sai source-of-truth.

Bỏ qua UOM validation.

Recipe version sửa đè lịch sử sai rule.

Public private/internal formula field.

Tự triển khai Product Activation Guard/Production Order/Sellable Gate.

Sửa Commerce/Operational/AI/Gateway không được phép.

Seed tự set sellable/released/production-ready.

Mở Gateway.

Gọi Release Ready / Production Ready / Go-live Approved.

Không report đủ 14 mục.

L. Trạng thái cuối bắt buộc

Kết thúc report phải ghi:

PROMPT-P1.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY  
P1.2B RECIPE / BOM / FORMULA VERSION FOUNDATION ONLY  
NOT PHASE 1 COMPLETE  
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 1  
NOT COMPLETION PASS  
NOT RELEASE READY  
NOT PRODUCTION READY  
NOT GO-LIVE APPROVED  
GLOBAL GATEWAY: BLOCKED

## KẾT THÚC PROMPT

# 19. FINAL STATUS

## 19.1. Trạng thái tài liệu

PROMPT-P1.2B DOCUMENT STATUS: CLEAN FINAL

## 19.2. Trạng thái thực thi

LIMITED IMPLEMENTATION HANDOFF ONLY

## 19.3. Phạm vi được phép

RECIPE / BOM / FORMULA VERSION FOUNDATION ONLY

## 19.4. Trạng thái PHASE 1

NOT PHASE 1 COMPLETE

## 19.5. Trạng thái implementation

NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 1

## 19.6. Trạng thái Completion

NOT COMPLETION PASS

## 19.7. Trạng thái release

NOT RELEASE READY

## 19.8. Trạng thái production

NOT PRODUCTION READY

## 19.9. Trạng thái go-live

NOT GO-LIVE APPROVED

## 19.10. Trạng thái Global Gateway

GLOBAL GATEWAY: BLOCKED
