**PHASE-01-PRODUCT-SKU-RECIPE-ACTIVATION/README-PHASE-01-HANDOFF-INDEX.docx**

**README — PHASE-01 PRODUCT / SKU / RECIPE / ACTIVATION HANDOFF INDEX / EXECUTION ORDER / GATEWAY LOCK**

**1. PHASE MARKER**

**PHASE:** PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION  
**FILE:** README-PHASE-01-HANDOFF-INDEX.docx  
**TYPE:** HANDOFF INDEX / EXECUTION MAP / GATEWAY LOCK  
**STATUS:** CLEAN FINAL DRAFT  
**GLOBAL GATEWAY:** BLOCKED  
**OWNER REVIEW REQUIRED:** YES  
**EVIDENCE ACCEPTANCE REQUIRED:** YES  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

**2. HEADER**

Tài liệu này là file README tổng hợp cho toàn bộ **PHASE-01 — Product / SKU / Recipe / Product Activation**.

Mục tiêu của file này là giúp dev/Codex/Copilot hiểu:

1.  PHASE 1 gồm những file nào.

2.  Chạy file nào trước, file nào sau.

3.  File nào chỉ phân tích.

4.  File nào chỉ thiết kế.

5.  File nào mới được limited implementation.

6.  File nào chỉ smoke/evidence/report.

7.  Rule nào tuyệt đối không được vi phạm.

8.  Evidence nào phải gom.

9.  Blocker nào phải dừng.

10. Điều kiện nào mới được chuyển sang PHASE 2.

11. Vì sao **Global Gateway vẫn BLOCKED**.

12. Vì sao PHASE 1 Done không đồng nghĩa Release Ready / Production Ready / Go-live Approved.

README này **không thay thế** các prompt chi tiết.

README này **không phải prompt viết code**.

README này **không cho phép copy-paste code từ AI**.

README này là tài liệu điều phối để triển khai PHASE 1 đúng quy trình kỹ thuật.

**3. PHẠM VI PHASE 1**

PHASE 1 tập trung vào lớp nền tảng sản phẩm:

1.  Product Master.

2.  SKU Master.

3.  Ingredient Master.

4.  UOM foundation.

5.  Recipe Master.

6.  BOM / Recipe Ingredient Line.

7.  Formula Version.

8.  Formula Kind.

9.  Product Activation Guard.

10. SKU Activation Guard.

11. Recipe Activation Guard.

12. Active vs Sellable boundary.

13. SKU Extension Registry.

14. Seed / Master Data Governance.

15. Smoke / Evidence / Implementation Report.

PHASE 1 **không phải** lớp bán hàng.

PHASE 1 **không quyết định Sellable**.

PHASE 1 **không quyết định mở bán**.

PHASE 1 **không tạo đơn hàng**.

PHASE 1 **không xử lý thanh toán**.

PHASE 1 **không xử lý tồn kho thành phẩm**.

PHASE 1 **không xử lý verified revenue**.

PHASE 1 chỉ tạo nền dữ liệu Product / SKU / Recipe đúng để PHASE 2 và PHASE 3 sử dụng.

**4. NGUYÊN TẮC CỐT LÕI**

**4.1. Không xây hệ thống bằng copy-paste code**

Developer không được hiểu các file PHASE 1 là code để copy-paste.

AI chỉ hỗ trợ:

1.  Phân tích.

2.  Viết prompt handoff.

3.  Viết checklist.

4.  Viết smoke matrix.

5.  Viết evidence matrix.

6.  Viết report format.

7.  Gợi ý boundary.

Developer phải:

1.  Inspect codebase thật.

2.  Đọc kiến trúc thật.

3.  Đối chiếu database thật.

4.  Kiểm tra API thật.

5.  Kiểm tra module thật.

6.  Implement theo architecture thật.

7.  Build/test/smoke thật.

8.  Nộp evidence thật.

Không có chuyện lấy vài đoạn code AI rồi dán vào là có Product/SKU/Recipe foundation ổn định.

Ví dụ: Product Activation không chỉ là một nút “Active”. Thực tế cần kiểm:

1.  Product master data có đủ chưa.

2.  SKU có liên kết Product chưa.

3.  Recipe có linked SKU chưa.

4.  BOM có Ingredient / Quantity / UOM chưa.

5.  Formula version có đúng chưa.

6.  Actor có quyền chưa.

7.  Evidence đã accepted chưa nếu policy yêu cầu.

8.  Audit có ghi chưa.

9.  Idempotency có chống thao tác lặp chưa.

10. Product Active có bị hiểu sai thành Sellable không.

Nếu làm kiểu copy-paste rời rạc, hệ thống sẽ dễ bị lỗi dữ liệu nền, sai recipe, sai SKU, không mở rộng được 40–50 SKU và rất khó debug khi đi sang Production / Commerce.

**4.2. Người dùng quyết định “muốn gì”, developer quyết định “làm thế nào”**

Business owner quyết định:

1.  Có những Product nào.

2.  Có những SKU nào.

3.  Ingredient nào là master data hợp lệ.

4.  UOM nào được dùng.

5.  Recipe/BOM gồm những gì.

6.  Formula version/kind nào được phép.

7.  Điều kiện nào để Product/SKU/Recipe được active.

8.  Seed baseline nào được phép.

9.  SKU mở rộng sau này theo nguyên tắc nào.

Developer quyết định:

1.  Entity/model.

2.  Migration.

3.  API.

4.  Service.

5.  Repository.

6.  Validation.

7.  Test.

8.  Build.

9.  Debug.

10. Security implementation.

**5. CẤU TRÚC FILE PHASE 1**

PHASE-01-PRODUCT-SKU-RECIPE-ACTIVATION/  
├── README-PHASE-01-HANDOFF-INDEX.docx  
├── 00-P1-ANALYSIS-ONLY.docx  
├── 01-P1-1-TECHNICAL-DESIGN-ONLY.docx  
├── 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM.docx  
├── 03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx  
├── 04-P1-2C-ACTIVATION-GUARD.docx  
├── 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx  
└── 06-P1-2E-SMOKE-EVIDENCE-REPORT.docx

**6. THỨ TỰ THỰC THI BẮT BUỘC**

PHASE 1 phải chạy đúng thứ tự sau:

| **Thứ tự** | **File**                                    | **Mode**                                  | **Mục đích**                            | **Có được sửa code không** |
|------------|---------------------------------------------|-------------------------------------------|-----------------------------------------|----------------------------|
| 0          | README-PHASE-01-HANDOFF-INDEX.docx          | Handoff Index                             | Điều phối toàn phase                    | Không                      |
| 1          | 00-P1-ANALYSIS-ONLY.docx                    | ANALYSIS ONLY                             | Phân tích Product/SKU/Recipe hiện trạng | Không                      |
| 2          | 01-P1-1-TECHNICAL-DESIGN-ONLY.docx          | TECHNICAL DESIGN ONLY                     | Thiết kế workstream/boundary/task       | Không                      |
| 3          | 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM.docx    | LIMITED IMPLEMENTATION                    | Product/SKU/Ingredient/UOM foundation   | Có giới hạn                |
| 4          | 03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx    | LIMITED IMPLEMENTATION                    | Recipe/BOM/Formula foundation           | Có giới hạn                |
| 5          | 04-P1-2C-ACTIVATION-GUARD.docx              | LIMITED IMPLEMENTATION                    | Product/SKU/Recipe Activation Guard     | Có giới hạn                |
| 6          | 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx | LIMITED IMPLEMENTATION                    | SKU Extension / Seed Governance         | Có giới hạn                |
| 7          | 06-P1-2E-SMOKE-EVIDENCE-REPORT.docx         | VALIDATION / SMOKE / EVIDENCE REPORT ONLY | Smoke/evidence/report PHASE 1           | Không thêm feature         |

Không được nhảy từ README sang implementation.

Không được bỏ qua Analysis.

Không được bỏ qua Technical Design.

Không được chạy P1.2A nếu chưa có P1 Analysis Report và P1.1 Technical Design.

Không được chuyển PHASE 2 nếu chưa hoàn tất P1.2E và owner/dev lead chưa cho phép. File P1.2E cũng đã khóa rõ sau khi đạt Done Gate mới được submit cho owner/dev lead xem xét viết P2 Analysis Only, vẫn không gọi Release Ready.

**7. KHÓA RULE PHASE 1**

**7.1. Product Active không đồng nghĩa Sellable**

Product Active chỉ có nghĩa:

1.  Product đã được định nghĩa hợp lệ trong Product Master.

2.  Product có thể làm dữ liệu nền.

3.  Product có thể liên kết SKU.

4.  Product có thể được dùng ở phase sau nếu đủ điều kiện.

Product Active **không có nghĩa**:

1.  Được bán.

2.  Có tồn kho.

3.  Có giá đang active.

4.  Có batch released.

5.  Có warehouse receipt.

6.  Không bị recall.

7.  Không bị sale lock.

8.  Được AI tư vấn chốt đơn.

9.  Được Gateway public bán.

10. Được Ads scale.

**7.2. SKU Active không đồng nghĩa Sellable**

SKU Active chỉ có nghĩa:

1.  SKU đã được định nghĩa hợp lệ.

2.  SKU thuộc Product hợp lệ.

3.  SKU có thể được tham chiếu bởi recipe/BOM.

4.  SKU có lifecycle rõ.

SKU Active **không có nghĩa**:

1.  SKU sellable.

2.  SKU có tồn kho.

3.  SKU có giá active.

4.  SKU có batch released.

5.  SKU được phép chốt đơn.

6.  SKU được phép public trong mọi channel.

**7.3. Recipe Active không đồng nghĩa Sellable**

Recipe Active chỉ có nghĩa:

1.  Recipe/BOM hợp lệ theo rule nội bộ.

2.  Recipe có version.

3.  Recipe có Ingredient / Quantity / UOM đầy đủ.

4.  Recipe có thể được dùng làm nguồn snapshot cho Production Order nếu production guard cho phép.

Recipe Active **không có nghĩa**:

1.  Batch đã sản xuất.

2.  Batch QC_PASS.

3.  Batch RELEASED.

4.  Finished goods đã nhập kho.

5.  SKU sellable.

6.  Product được chốt đơn.

**7.4. Recipe Active không đồng nghĩa Batch Released**

PHASE 1 không có quyền gọi Recipe Active là:

1.  Production-ready hoàn chỉnh.

2.  Batch QC_PASS.

3.  Batch RELEASED.

4.  Finished Goods Available.

5.  Warehouse Confirmed.

6.  Sellable.

Batch Released thuộc downstream PHASE 2 Operational Core.

Sellable thuộc PHASE 3 Commerce Runtime.

**7.5. PHASE 1 không làm Sellable Gate**

Sellable thuộc PHASE 3 Commerce Runtime / Sellable Gate.

Sellable phải phụ thuộc tối thiểu:

1.  Product/SKU active.

2.  Listed price active.

3.  Stock available.

4.  Finished goods released.

5.  Warehouse receipt confirmed.

6.  No quality hold.

7.  No recall.

8.  No sale lock.

9.  No channel suppression.

10. Runtime policy available.

PHASE 1 chỉ tạo Product/SKU/Recipe foundation.

PHASE 1 không được tự quyết Sellable.

**7.6. Seed không được tự set sellable**

Seed trong PHASE 1 không được:

1.  Tự set sellable true.

2.  Tự set released.

3.  Tự set production-ready.

4.  Tự tạo Product/SKU được bán.

5.  Tự tạo Recipe thành batch released.

6.  Tự tạo Commerce runtime state.

7.  Tự mở Gateway.

Seed chỉ được dùng cho master data foundation theo source-of-truth và phải idempotent.

**7.7. Không hardcode danh sách SKU**

PHASE 1 phải hỗ trợ mở rộng SKU sau này.

Không được:

1.  Hardcode danh sách 20 SKU trong business logic.

2.  Viết logic phụ thuộc cố định vào số lượng SKU.

3.  Sửa code mỗi khi thêm SKU mới.

4.  Gắn SKU mới bằng cách overwrite SKU cũ.

5.  Tự public SKU mới nếu thiếu policy.

6.  Tự sellable SKU mới.

Hệ thống phải có nền cho mở rộng 40–50 SKU hoặc hơn.

**7.8. Global Gateway vẫn BLOCKED**

Trong toàn PHASE 1:

1.  GLOBAL GATEWAY: BLOCKED.

2.  Evidence Submitted chưa phải Evidence Accepted.

3.  Smoke cục bộ chưa phải Global Smoke Pass.

4.  PHASE 1 Done chưa phải Release Ready.

5.  Documentation Complete chưa phải Production Ready.

6.  Không gọi Completion PASS.

7.  Không gọi Release Ready.

8.  Không gọi Production Ready.

9.  Không gọi Go-live Approved.

10. Không gọi Gateway PASS.

**8. FILE INDEX CHI TIẾT**

**8.1. 00-P1-ANALYSIS-ONLY.docx**

**Mode:** ANALYSIS ONLY  
**Mục tiêu:** Phân tích hiện trạng Product / SKU / Recipe / Product Activation.

**Scope chính**

1.  Product Master.

2.  SKU Master.

3.  Ingredient Master.

4.  Recipe Master.

5.  Formula Version.

6.  Formula Kind.

7.  BOM / Ingredient Quantity / UOM.

8.  Product Activation.

9.  Product Active vs Sellable.

10. SKU Extension Registry.

11. Product/SKU/Recipe seed hiện có.

12. Product/SKU/Recipe test hiện có.

13. Downstream impact.

P1 Analysis file khóa rõ agent chỉ được phân tích, không sửa file, không tạo code, không tạo migration và phải lập current implementation state, gap matrix, conflict matrix, blocker register, downstream impact, report 14 mục.

**Done Gate**

1.  Không sửa file.

2.  Đã đọc source-of-truth.

3.  Đã inspect codebase thật.

4.  Đã phân tích Product/SKU/Ingredient/Recipe/BOM/Formula/Activation.

5.  Đã phân tích Product Active vs Sellable.

6.  Có gap matrix.

7.  Có conflict matrix.

8.  Có blocker register.

9.  Có downstream impact.

10. Có smoke required.

11. Report đủ 14 mục.

12. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không sửa code.

2.  Không tạo migration.

3.  Không tạo seed.

4.  Không tạo API.

5.  Không tạo UI.

6.  Không kích hoạt Product/SKU.

7.  Không tạo Sellable Gate.

8.  Không sửa Commerce / Operational Core / AI Advisor / Gateway.

9.  Không gọi PHASE 1 Complete.

10. Không mở Global Gateway.

**8.2. 01-P1-1-TECHNICAL-DESIGN-ONLY.docx**

**Mode:** TECHNICAL DESIGN ONLY  
**Mục tiêu:** Chuyển P1 Analysis thành workstream, task breakdown, dependency, evidence plan, smoke plan và implementation sequence.

**Scope chính**

1.  Product Master Boundary.

2.  SKU Master Boundary.

3.  Ingredient Master / UOM Boundary.

4.  Recipe Master / BOM Boundary.

5.  Formula Version / Formula Kind Boundary.

6.  Product Activation Guard.

7.  Active vs Sellable Boundary.

8.  SKU Extension Registry.

9.  Seed / Master Data Governance.

P1.1 đã chia workstream rõ và khóa các boundary Product Active vs Sellable, SKU Active vs Sellable, Recipe Active vs Production-ready, đồng thời xác định evidence, smoke và implementation sequence.

**Done Gate**

1.  Không sửa file.

2.  Có Workstream Matrix.

3.  Có Task Breakdown Matrix.

4.  Có Dependency Matrix.

5.  Có Evidence Plan Matrix.

6.  Có Smoke Plan Matrix.

7.  Có Active vs Sellable boundary.

8.  Có SKU Extension Registry design.

9.  Có Seed Governance design.

10. Có implementation sequence.

11. Có prompt tiếp theo.

12. Report đủ 14 mục.

13. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không code.

2.  Không migration.

3.  Không seed.

4.  Không test code.

5.  Không API.

6.  Không UI.

7.  Không gọi Product Active là Sellable.

8.  Không gọi SKU Active là Sellable.

9.  Không gọi Recipe Active là Sellable / Released.

10. Không mở Gateway.

**8.3. 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM.docx**

**Mode:** LIMITED IMPLEMENTATION  
**Mục tiêu:** Triển khai giới hạn Product Master / SKU Master / Ingredient / UOM foundation.

**Scope chính**

1.  Product Master foundation.

2.  SKU Master foundation.

3.  Ingredient Master foundation.

4.  UOM foundation.

5.  Product-SKU relationship.

6.  Ingredient-UOM validation.

7.  Product/SKU/Ingredient status foundation.

8.  Public/private field boundary foundation.

9.  SKU extension readiness foundation.

10. Test/smoke tối thiểu cho Product/SKU/Ingredient/UOM.

P1.2A chỉ được sửa code trong phạm vi Product Master / SKU Master / Ingredient / UOM foundation và không được mở rộng sang Recipe/BOM, Activation Guard, Sellable Gate, Operational Core, Commerce Runtime, AI Advisor hoặc Gateway.

**Done Gate**

1.  Product Master foundation có nền.

2.  SKU Master foundation có nền.

3.  Ingredient Master foundation có nền.

4.  UOM foundation có nền.

5.  Product Active không đồng nghĩa Sellable.

6.  SKU Active không đồng nghĩa Sellable.

7.  Public/private field boundary có nền.

8.  Không sửa lan sang Recipe/BOM.

9.  Không triển khai Formula Version.

10. Không triển khai Activation Guard đầy đủ.

11. Không triển khai Sellable Gate.

12. Có test/build hoặc lý do không chạy.

13. Report đủ 14 mục.

14. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không Recipe/BOM full.

2.  Không Formula Version.

3.  Không Activation Guard full.

4.  Không Sellable Gate.

5.  Không Operational Core.

6.  Không Commerce Runtime.

7.  Không AI Advisor.

8.  Không Gateway.

**8.4. 03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx**

**Mode:** LIMITED IMPLEMENTATION  
**Mục tiêu:** Triển khai giới hạn Recipe / BOM / Formula Version foundation.

**Scope chính**

1.  Recipe Master foundation.

2.  BOM / Recipe Ingredient Line foundation.

3.  Formula Version foundation.

4.  Formula Kind foundation.

5.  Recipe-SKU relationship.

6.  Recipe-Ingredient-UOM validation.

7.  BOM quantity validation.

8.  Recipe status lifecycle.

9.  Recipe immutability boundary.

10. Formula snapshot readiness foundation.

P1.2B khóa rõ Recipe/BOM không được sửa đè lịch sử, phải có liên kết Product/SKU/Ingredient/UOM đúng, report đủ 14 mục, và chưa được chuyển PHASE 2 sau P1.2B. PHASE 2 chỉ bắt đầu sau P1.2C, P1.2D, P1.2E và owner/dev lead cho phép P2 Analysis Only.

**Done Gate**

1.  Recipe Master foundation có nền.

2.  BOM/Recipe Line foundation có nền.

3.  Formula Version foundation có nền.

4.  Formula Kind foundation có nền nếu source-of-truth có.

5.  Recipe linked SKU đúng.

6.  Recipe Line linked Ingredient/UOM đúng.

7.  Quantity/UOM validation có nền.

8.  Recipe Active không đồng nghĩa Sellable.

9.  Recipe Active không đồng nghĩa Batch Released.

10. Snapshot readiness có nền.

11. Không triển khai Production Order.

12. Không triển khai Activation Guard đầy đủ.

13. Không triển khai Sellable Gate.

14. Report đủ 14 mục.

15. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không Product Activation Guard đầy đủ.

2.  Không Production Order.

3.  Không Operational Core.

4.  Không Sellable Gate.

5.  Không Commerce Runtime.

6.  Không AI Advisor.

7.  Không Gateway.

8.  Không gọi Recipe Active là Batch Released.

**8.5. 04-P1-2C-ACTIVATION-GUARD.docx**

**Mode:** LIMITED IMPLEMENTATION  
**Mục tiêu:** Triển khai giới hạn Product / SKU / Recipe Activation Guard và Active != Sellable enforcement.

**Scope chính**

1.  Product Activation Guard foundation.

2.  SKU Activation Guard foundation.

3.  Recipe Activation Guard foundation.

4.  Activation Guard Context.

5.  Guard Result.

6.  Failure Reason.

7.  Actor/RBAC/Audit/Evidence/Idempotency linkage.

8.  Product/SKU/Recipe Active != Sellable enforcement.

9.  Recipe Active != Batch Released enforcement.

P1.2C khóa rõ mục tiêu là activation guard, không triển khai SKU Extension Registry, Seed Governance, Sellable Gate, Commerce Runtime, Operational Core, AI Advisor, Gateway, Ads, MC AI Live, IVR hoặc Release Gateway.

**Done Gate**

1.  Có Product Activation Guard foundation.

2.  Có SKU Activation Guard foundation.

3.  Có Recipe Activation Guard foundation.

4.  Có Actor/RBAC/Audit/Evidence/Idempotency linkage nếu foundation hỗ trợ.

5.  Product Active không đồng nghĩa Sellable.

6.  SKU Active không đồng nghĩa Sellable.

7.  Recipe Active không đồng nghĩa Sellable.

8.  Recipe Active không đồng nghĩa Batch Released.

9.  Không triển khai SKU Extension / Seed Governance.

10. Không triển khai Sellable Gate.

11. Không triển khai Commerce / Operational Core.

12. Có test/build hoặc lý do không chạy.

13. Report đủ 14 mục.

14. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không Sellable Gate.

2.  Không Commerce Runtime.

3.  Không Operational Core.

4.  Không AI Advisor.

5.  Không Gateway.

6.  Không Ads / Live / IVR.

7.  Không cho UNKNOWN actor activation.

8.  Không cho missing permission activation.

9.  Không cho SUBMITTED evidence pass ACCEPTED nếu policy yêu cầu ACCEPTED.

10. Không bỏ qua idempotency conflict.

**8.6. 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx**

**Mode:** LIMITED IMPLEMENTATION  
**Mục tiêu:** Triển khai giới hạn SKU Extension Registry, Add SKU flow foundation và Seed / Master Data Governance.

**Scope chính**

1.  SKU Extension Registry foundation.

2.  Add SKU flow foundation.

3.  SKU code unique validation.

4.  No overwrite SKU cũ.

5.  Product parent hợp lệ.

6.  Public/private boundary.

7.  Seed governance foundation.

8.  Master Data Manifest.

9.  Seed idempotency.

10. No hardcode SKU.

11. No sellable seed.

P1.2D khóa rõ chưa được chuyển sang PHASE 2 cho đến khi hoàn tất P1.2E và owner/dev lead cho phép viết P2 Operational Core Analysis Only. File này cũng khóa không triển khai Sellable Gate, Product Knowledge/AI Advisor full, Commerce Runtime, Operational Core hoặc Release Gateway.

**Done Gate**

1.  Có SKU Extension Registry foundation.

2.  Có Add SKU flow foundation.

3.  Có Seed Governance foundation.

4.  Không hardcode SKU.

5.  Seed idempotent.

6.  SKU mới không tự sellable.

7.  Extension không overwrite SKU cũ.

8.  Seed không chứa secret.

9.  Seed không tự set sellable/released/production-ready.

10. Không sửa downstream domain.

11. Có test/build hoặc lý do không chạy.

12. Report đủ 14 mục.

13. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không hardcode SKU list vào business logic.

2.  Không seed secret.

3.  Không seed tự set sellable.

4.  Không seed released/production-ready.

5.  Không public private field.

6.  Không sửa AI/Commerce/Gateway.

7.  Không mở Gateway.

8.  Không gọi Release Ready / Production Ready / Go-live Approved.

**8.7. 06-P1-2E-SMOKE-EVIDENCE-REPORT.docx**

**Mode:** VALIDATION / SMOKE / EVIDENCE REPORT ONLY  
**Mục tiêu:** Chạy smoke, gom evidence và lập PHASE 1 Implementation Report.

**Scope chính**

1.  Validate P1.2A.

2.  Validate P1.2B.

3.  Validate P1.2C.

4.  Validate P1.2D.

5.  Lập Evidence Register.

6.  Lập Smoke Result Matrix.

7.  Lập Open Blocker Register.

8.  Lập Risk Register.

9.  Handoff sang PHASE 2 nếu đủ điều kiện review.

P1.2E đã khóa rõ mode là Validation / Smoke / Evidence Report Only, không triển khai feature mới, không sửa business domain, không triển khai Operational Core, Commerce, AI Advisor, Gateway, Ads, Live, IVR hoặc Release Gateway.

**Done Gate**

1.  Đã đọc source-of-truth.

2.  Đã đọc reports P1.2A-D.

3.  Đã inspect codebase thật.

4.  Đã chạy hoặc báo rõ build/test/smoke.

5.  Đã gom evidence.

6.  Có Evidence Register.

7.  Có Smoke Result Matrix.

8.  Có Open Blocker Register.

9.  Có Risk Register.

10. Có git status/git diff.

11. Không sửa feature code ngoài scope.

12. Không mở Global Gateway.

13. Không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

14. Report đủ 14 mục.

**Không được**

1.  Không triển khai feature mới.

2.  Không sửa Product/SKU/Recipe/BOM/Activation/Seed logic.

3.  Không triển khai Operational Core.

4.  Không triển khai Commerce.

5.  Không triển khai AI Advisor.

6.  Không triển khai Gateway.

7.  Không gọi PHASE 1 Complete.

8.  Không gọi Completion PASS.

9.  Không gọi Release Ready.

10. Không gọi Production Ready.

11. Không gọi Go-live Approved.

12. Không gọi Gateway PASS.

**9. REPORT 14 MỤC BẮT BUỘC**

Mọi report trong PHASE 1 phải có đúng 14 mục:

1.  Tóm tắt.

2.  File đã sửa.

3.  Nguồn yêu cầu.

4.  Evidence đã dùng.

5.  Lệnh đã chạy.

6.  Kết quả test.

7.  Kết quả backend build.

8.  Kết quả frontend build.

9.  Kết quả cleanup process.

10. Cập nhật Markdown.

11. Kết quả database migration/update nếu áp dụng.

12. Kết quả seed validation nếu áp dụng.

13. Rủi ro còn lại.

14. Cập nhật handoff.

Nếu report thiếu 14 mục, không được chuyển prompt.

**10. PHASE 1 SMOKE MATRIX TỔNG HỢP**

PHASE 1 phải có smoke tối thiểu:

| **Smoke ID**  | **Nhóm**       | **Case**                                | **Expected**                                           |
|---------------|----------------|-----------------------------------------|--------------------------------------------------------|
| P1E-SMOKE-A01 | Product        | Product Master hợp lệ                   | Tạo/đọc master data đúng                               |
| P1E-SMOKE-A02 | Product        | Product Active                          | Không Sellable                                         |
| P1E-SMOKE-A03 | SKU            | SKU linked Product / duplicate SKU code | Hợp lệ / reject hoặc idempotent                        |
| P1E-SMOKE-A04 | Ingredient/UOM | Ingredient linked UOM / thiếu UOM       | Hợp lệ / reject                                        |
| P1E-SMOKE-B01 | Recipe         | Recipe linked SKU / thiếu SKU           | Hợp lệ / reject                                        |
| P1E-SMOKE-B02 | BOM            | BOM line đủ Ingredient/Quantity/UOM     | Hợp lệ                                                 |
| P1E-SMOKE-B03 | Formula        | Formula version duplicate sai scope     | Reject                                                 |
| P1E-SMOKE-B04 | Recipe Active  | Recipe Active                           | Không Sellable, không Batch Released                   |
| P1E-SMOKE-C01 | Activation     | Thiếu actor/permission                  | Deny                                                   |
| P1E-SMOKE-C02 | Evidence       | Evidence SUBMITTED nếu require ACCEPTED | Không pass                                             |
| P1E-SMOKE-C03 | Idempotency    | Retry same key/payload                  | Không side effect lần hai                              |
| P1E-SMOKE-C04 | Runtime        | Runtime unavailable                     | Fail-safe, không allow                                 |
| P1E-SMOKE-D01 | SKU Extension  | Add SKU qua registry                    | Không sửa đè SKU cũ, không tự sellable                 |
| P1E-SMOKE-D02 | Seed           | Seed/dev fixture chạy lại               | Không duplicate, không secret, không sellable/released |

P1.2E đã liệt kê smoke matrix chính với Product Active không Sellable, Recipe Active không Sellable/Batch Released, evidence submitted không pass accepted, runtime unavailable fail-safe, add SKU không tự sellable và seed không duplicate/không secret/không tự sellable/released.

**11. EVIDENCE PACKAGE TỐI THIỂU**

PHASE 1 cần gom evidence package gồm:

1.  P1 Analysis Report.

2.  P1 Technical Design Report.

3.  P1.2A Product/SKU/Ingredient/UOM evidence.

4.  P1.2B Recipe/BOM/Formula evidence.

5.  P1.2C Activation Guard evidence.

6.  P1.2D SKU Extension/Seed Governance evidence.

7.  P1.2E Smoke Result Matrix.

8.  File changes summary.

9.  Git diff summary.

10. Build result.

11. Test result.

12. Smoke result.

13. Migration validation nếu có.

14. Seed validation nếu có.

15. Open blocker register.

16. Risk register.

17. Gateway blocked evidence.

18. Owner review checklist.

Evidence status được phép:

1.  FOUND.

2.  SUBMITTED.

3.  MISSING.

4.  NEEDS_REVIEW.

5.  REJECTED_BY_SMOKE.

6.  BLOCKED.

Không tự ghi:

1.  ACCEPTED.

2.  COMPLETION PASS.

3.  RELEASE READY.

4.  PRODUCTION READY.

5.  GO-LIVE APPROVED.

**12. BLOCKER P0 TOÀN PHASE 1**

Các lỗi sau là **P0 Blocker**:

1.  Product Active bị dùng làm Sellable.

2.  SKU Active bị dùng làm Sellable.

3.  Recipe Active bị dùng làm Sellable.

4.  Recipe Active bị dùng làm Batch Released.

5.  Thiếu Product Master source-of-truth.

6.  Thiếu SKU Master source-of-truth.

7.  Thiếu Ingredient/UOM validation.

8.  BOM line thiếu Ingredient.

9.  BOM line thiếu Quantity.

10. BOM line thiếu UOM.

11. Formula version bị sửa đè lịch sử.

12. Formula Kind branch rule sai hoặc thiếu source-of-truth.

13. Product/SKU/Recipe activation thiếu actor vẫn allow.

14. Product/SKU/Recipe activation thiếu permission vẫn allow.

15. Evidence SUBMITTED được xem như ACCEPTED.

16. Idempotency conflict bị bỏ qua.

17. SKU extension overwrite SKU cũ.

18. Seed tự set sellable.

19. Seed tự set released/production-ready.

20. Seed chứa secret.

21. Hardcode SKU list trong business logic.

22. Public private/internal field.

23. Sửa AI/Commerce/Gateway ngoài scope.

24. Global Gateway không còn BLOCKED.

25. Smoke fail nhưng vẫn gọi done.

26. Evidence Submitted bị gọi Evidence Accepted.

27. Test pass bị gọi Global Smoke Pass.

28. PHASE 1 Done bị gọi Release Ready.

29. PHASE 1 Done bị gọi Production Ready.

30. PHASE 1 Done bị gọi Go-live Approved.

**13. DOWNSTREAM IMPACT**

**13.1. Ảnh hưởng sang PHASE 2 — Operational Core**

PHASE 2 cần Product/SKU/Recipe foundation đúng để:

1.  Production Order có SKU hợp lệ.

2.  Recipe/BOM có version hợp lệ.

3.  Formula snapshot được tại thời điểm tạo Production Order.

4.  Ingredient / Quantity / UOM đầy đủ.

5.  Recipe Active không bị hiểu sai là Batch Released.

6.  Batch released vẫn do Operational Core xử lý.

Không có PHASE 1 foundation đúng thì PHASE 2 sẽ dễ sai từ Production Order, BOM, material issue, batch genealogy và traceability.

**13.2. Ảnh hưởng sang PHASE 3 — Commerce Runtime**

PHASE 3 cần PHASE 1 để biết:

1.  Product/SKU active.

2.  SKU identity.

3.  Public product name.

4.  Product/SKU private/public boundary.

5.  Recipe foundation.

Nhưng PHASE 3 mới quyết định Sellable.

PHASE 1 không được làm thay Sellable Gate.

**13.3. Ảnh hưởng sang AI Advisor / Gateway / Ads / Live / CRM / IVR**

Các kênh này chỉ được dùng Product/SKU public data sau khi runtime cho phép.

Không được:

1.  Dùng Product Active để tư vấn bán.

2.  Dùng SKU Active để chốt đơn.

3.  Dùng Recipe Active để nói sản phẩm đang bán.

4.  Public private/internal formula fields.

5.  Hardcode SKU list.

6.  Tự dùng seed để mở bán.

**14. DEV EXECUTION PROTOCOL**

Khi giao dev/Codex/Copilot, bắt buộc chạy theo protocol sau:

**Step 1 — Đọc README này**

Dev phải đọc file README này để hiểu thứ tự và gate.

**Step 2 — Chạy 00-P1-ANALYSIS-ONLY.docx**

Chỉ phân tích.

Không sửa file.

**Step 3 — Chạy 01-P1-1-TECHNICAL-DESIGN-ONLY.docx**

Chỉ thiết kế.

Không sửa file.

**Step 4 — Owner duyệt boundary**

Không có owner/dev lead approval thì không được implementation.

**Step 5 — Chạy từng prompt implementation**

Chạy tuần tự:

1.  P1.2A — Product / SKU / Ingredient / UOM.

2.  P1.2B — Recipe / BOM / Formula Version.

3.  P1.2C — Activation Guard.

4.  P1.2D — SKU Extension / Seed Governance.

Mỗi prompt phải có report 14 mục.

**Step 6 — Chạy P1.2E**

Chỉ smoke/evidence/report.

Không sửa feature code.

**Step 7 — Owner Review**

Sau P1.2E mới sang Owner Review.

**Step 8 — Cho phép viết P2 Analysis Only**

Chỉ sau Owner Review, mới viết hoặc chạy:

**PROMPT-P2 — OPERATIONAL CORE ANALYSIS HANDOFF**

Không tự chuyển sang PHASE 2.

**15. RELEASE / GATEWAY LOCK**

PHASE 1 không được gọi các trạng thái sau:

1.  PHASE 1 Complete.

2.  Completion PASS.

3.  Global Smoke Pass.

4.  Release Ready.

5.  Production Ready.

6.  Go-live Approved.

7.  Gateway PASS.

PHASE 1 chỉ có thể kết luận tối đa:

1.  PHASE 1 Analysis Report Completed.

2.  PHASE 1 Technical Design Handoff Completed.

3.  P1.2A Limited Implementation Report Only.

4.  P1.2B Limited Implementation Report Only.

5.  P1.2C Limited Implementation Report Only.

6.  P1.2D Limited Implementation Report Only.

7.  PHASE 1 Validation Report Only.

8.  Evidence Submitted for Review.

9.  Ready for Owner Review.

10. P2 Prompt Draft Allowed nếu owner/dev lead cho phép.

**16. PROMPT COPY GIAO DEV / CODEX / COPILOT**

Sao chép nguyên khối dưới đây để giao dev/Codex/Copilot khi bắt đầu PHASE 1.

**PHASE-01 PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION — DEV EXECUTION HANDOFF**

Bạn đang thực hiện PHASE-01 — Product / SKU / Recipe / Product Activation cho dự án Ginsengfood.

Không được hiểu nhiệm vụ này là copy-paste code từ AI.

Bạn phải inspect codebase thật, database thật, API thật, migration thật, seed thật, test thật và triển khai theo architecture thật.

**GLOBAL LOCK**

1.  GLOBAL GATEWAY: BLOCKED.

2.  Evidence Submitted chưa phải Evidence Accepted.

3.  Smoke cục bộ chưa phải Global Smoke Pass.

4.  Dev Complete chưa phải Release Ready.

5.  Documentation Complete chưa phải Production Ready.

6.  Không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved nếu chưa có accepted evidence, smoke, owner review và release decision.

**EXECUTION ORDER**

Chạy đúng thứ tự:

1.  00-P1-ANALYSIS-ONLY.docx

2.  01-P1-1-TECHNICAL-DESIGN-ONLY.docx

3.  02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM.docx

4.  03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx

5.  04-P1-2C-ACTIVATION-GUARD.docx

6.  05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx

7.  06-P1-2E-SMOKE-EVIDENCE-REPORT.docx

Không được nhảy phase.

Không được bỏ qua Analysis/Design.

Không được implementation nếu chưa có approved boundary.

**CORE RULES**

1.  Product Active không đồng nghĩa Sellable.

2.  SKU Active không đồng nghĩa Sellable.

3.  Recipe Active không đồng nghĩa Sellable.

4.  Recipe Active không đồng nghĩa Batch Released.

5.  Product/SKU/Recipe chỉ là foundation.

6.  Sellable thuộc PHASE 3 Commerce Runtime.

7.  PHASE 1 không tạo Sellable Gate.

8.  PHASE 1 không mở bán.

9.  PHASE 1 không tạo order.

10. PHASE 1 không xử lý payment.

11. PHASE 1 không tạo verified revenue.

12. Seed không được tự set sellable.

13. Seed không được tự set released/production-ready.

14. Không hardcode danh sách SKU trong business logic.

15. SKU extension phải hỗ trợ mở rộng 40–50 SKU hoặc hơn.

16. Public/private field phải tách bạch.

17. Global Gateway vẫn BLOCKED.

**REPORT FORMAT**

Mọi report phải có 14 mục:

1.  Tóm tắt.

2.  File đã sửa.

3.  Nguồn yêu cầu.

4.  Evidence đã dùng.

5.  Lệnh đã chạy.

6.  Kết quả test.

7.  Kết quả backend build.

8.  Kết quả frontend build.

9.  Kết quả cleanup process.

10. Cập nhật Markdown.

11. Kết quả database migration/update nếu áp dụng.

12. Kết quả seed validation nếu áp dụng.

13. Rủi ro còn lại.

14. Cập nhật handoff.

**FINAL RULE**

Nếu phát hiện blocker, không vá lén, không bỏ qua, không sửa seed/test để xanh giả.

Phải báo blocker và quay lại đúng prompt liên quan:

1.  Lỗi Product/SKU/Ingredient/UOM → quay lại P1.2A.

2.  Lỗi Recipe/BOM/Formula → quay lại P1.2B.

3.  Lỗi Activation Guard → quay lại P1.2C.

4.  Lỗi SKU Extension/Seed → quay lại P1.2D.

5.  Lỗi Smoke/Evidence → xử lý theo P1.2E và owner review.

**17. DOWNSTREAM SAU PHASE 1**

Sau PHASE 1, không tự động sang PHASE 2.

Thứ tự đúng là:

1.  P1.2E Smoke / Evidence / Implementation Report.

2.  Evidence Submitted.

3.  Owner Review.

4.  Blocker review.

5.  Owner/dev lead cho phép viết P2.

6.  Bắt đầu PROMPT-P2 — OPERATIONAL CORE ANALYSIS HANDOFF.

7.  P2 vẫn phải bắt đầu bằng **ANALYSIS ONLY**.

**18. FILE TIẾP THEO SAU README**

Sau khi có README này, thứ tự đúng là giao dev đọc:

1.  README-PHASE-01-HANDOFF-INDEX.docx

2.  00-P1-ANALYSIS-ONLY.docx

Nếu 00-P1 đã chạy rồi thì tiếp tục theo đúng trạng thái hiện tại, nhưng vẫn phải dùng README này làm file điều phối.

**19. FINAL STATUS**

**FILE STATUS:** CLEAN FINAL DRAFT  
**FILE TYPE:** README / HANDOFF INDEX / EXECUTION ORDER  
**PHASE:** PHASE-01 — PRODUCT / SKU / RECIPE / PRODUCT ACTIVATION  
**IMPLEMENTATION ALLOWED BY THIS FILE:** NO  
**CODE CHANGE ALLOWED BY THIS FILE:** NO  
**GATEWAY STATUS:** BLOCKED  
**EVIDENCE STATUS:** NOT ACCEPTED UNTIL OWNER REVIEW  
**GLOBAL SMOKE PASS:** NO  
**COMPLETION PASS:** NO  
**RELEASE READY:** NO  
**PRODUCTION READY:** NO  
**GO-LIVE APPROVED:** NO

**NEXT ACTION:** Giao dev/Codex/Copilot đọc README này, sau đó bắt đầu hoặc đối chiếu lại từ 00-P1-ANALYSIS-ONLY.docx.

**FINAL NOTE:** PHASE 1 chỉ được xem là sẵn sàng cho Owner Review sau khi chạy đủ 00 đến 06, report đủ 14 mục, evidence package submitted, không còn P0 blocker hoặc blocker đã phân loại rõ, và Global Gateway vẫn BLOCKED.
