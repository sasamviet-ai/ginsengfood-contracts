**PHASE-02-OPERATIONAL-CORE/README-PHASE-02-HANDOFF-INDEX.docx**

**README — PHASE-02 OPERATIONAL CORE HANDOFF INDEX / EXECUTION ORDER / GATEWAY LOCK**

## 1. PHASE MARKER

**PHASE:** PHASE-02 — OPERATIONAL CORE
**FILE:** README-PHASE-02-HANDOFF-INDEX.docx
**TYPE:** HANDOFF INDEX / EXECUTION MAP / GATEWAY LOCK
**STATUS:** CLEAN FINAL DRAFT
**GLOBAL GATEWAY:** BLOCKED
**OWNER REVIEW REQUIRED:** YES
**EVIDENCE ACCEPTANCE REQUIRED:** YES
**RELEASE READY:** NO
**PRODUCTION READY:** NO
**GO-LIVE APPROVED:** NO

## 2. HEADER

Tài liệu này là file README tổng hợp cho toàn bộ **PHASE-02 — Operational Core**.

Mục tiêu của file này là giúp dev/Codex/Copilot hiểu:

1.  PHASE 2 gồm những file nào.

2.  Chạy file nào trước, file nào sau.

3.  File nào chỉ phân tích.

4.  File nào chỉ thiết kế.

5.  File nào mới được limited implementation.

6.  File nào chỉ smoke/evidence/report.

7.  Rule vận hành nào tuyệt đối không được vi phạm.

8.  Evidence nào phải gom.

9.  Blocker nào phải dừng.

10. Điều kiện nào mới được chuyển sang PHASE 3.

11. Vì sao **Global Gateway vẫn BLOCKED**.

12. Vì sao PHASE 2 Done không đồng nghĩa Release Ready / Production Ready / Go-live Approved.

README này **không thay thế** các prompt chi tiết.

README này **không phải prompt viết code**.

README này **không cho phép copy-paste code từ AI**.

README này là tài liệu điều phối để triển khai PHASE 2 đúng quy trình kỹ thuật.

## 3. PHẠM VI PHASE 2

PHASE 2 tập trung vào **Operational Core**, tức lõi vận hành sản xuất — kho — truy xuất — thu hồi.

Chuỗi vận hành chính:

**Source / Raw Material → Raw Lot → QC → READY_FOR_PRODUCTION → Production Order → Formula Snapshot → Material Issue → Material Receipt → Batch → Batch QC → Batch Release → Warehouse Receipt → Inventory Ledger → Traceability → QR / Public Trace → Recall / Sale Lock**

PHASE 2 bao gồm:

1.  Source Origin.

2.  Raw Material Master.

3.  Raw Material Receipt.

4.  Raw Lot.

5.  Incoming QC.

6.  Raw Lot Readiness.

7.  Production Order.

8.  Formula / Recipe / BOM Snapshot.

9.  Workshop Handoff.

10. Material Request.

11. Material Issue.

12. Material Receipt / Workshop Receipt.

13. Raw Inventory Ledger.

14. Production Batch.

15. Batch Process State.

16. Batch QC.

17. Batch Release.

18. Warehouse Receipt.

19. Finished Goods Ledger.

20. Inventory Balance Projection.

21. Traceability / Genealogy.

22. QR.

23. Public Trace.

24. Recall.

25. Hold / Sale Lock.

26. Downstream suppression boundary.

27. PHASE 2 Smoke / Evidence / Report.

PHASE 2 **không phải** Commerce Runtime.

PHASE 2 **không quyết định Sellable**.

PHASE 2 **không tạo giá bán**.

PHASE 2 **không tạo QuoteSnapshot**.

PHASE 2 **không tạo Cart / Order / Payment**.

PHASE 2 **không xử lý verified revenue**.

PHASE 2 cung cấp **operational truth** để PHASE 3 Commerce Runtime quyết định sellable, quote, order và revenue.

## 4. NGUYÊN TẮC CỐT LÕI

### 4.1. Không xây hệ thống bằng copy-paste code

Developer không được hiểu các file PHASE 2 là code để copy-paste.

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

Không có chuyện lấy vài đoạn code AI rồi dán vào là có Operational Core ổn định.

Ví dụ: **Material Issue** không chỉ là một API trừ số lượng. Thực tế phải kiểm raw lot đã READY_FOR_PRODUCTION chưa, production order có snapshot hợp lệ chưa, quantity/UOM đúng chưa, actor có quyền không, idempotency có chống double debit không, audit có ghi không, ledger có append-only không và retry có tạo side effect trùng không.

Nếu làm kiểu copy-paste rời rạc, hệ thống sẽ rất dễ sai tồn kho, sai batch, sai traceability, sai recall và gây rủi ro bán hàng khi sang PHASE 3.

### 4.2. Người dùng quyết định “muốn gì”, developer quyết định “làm thế nào”

Business owner quyết định:

1.  Quy trình nguồn nguyên liệu.

2.  Quy trình QC đầu vào.

3.  Điều kiện READY_FOR_PRODUCTION.

4.  Điều kiện tạo Production Order.

5.  Điều kiện cấp nguyên liệu.

6.  Điều kiện nhận nguyên liệu tại xưởng.

7.  Điều kiện batch QC.

8.  Điều kiện batch release.

9.  Điều kiện nhập kho thành phẩm.

10. Điều kiện public trace.

11. Điều kiện recall / sale lock.

12. Điều kiện evidence / approval.

Developer quyết định:

1.  Entity/model.

2.  Migration.

3.  API.

4.  Service.

5.  Repository.

6.  Validation.

7.  State machine.

8.  Ledger design.

9.  Test.

10. Build.

11. Debug.

12. Security implementation.

## 5. CẤU TRÚC FILE PHASE 2

PHASE-02-OPERATIONAL-CORE/
├── README-PHASE-02-HANDOFF-INDEX.docx
├── 00-P2-ANALYSIS-ONLY.docx
├── 01-P2-1-TECHNICAL-DESIGN-ONLY.docx
├── 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx
├── 03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx
├── 04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx
├── 05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx
├── 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx
└── 07-P2-2F-SMOKE-EVIDENCE-REPORT.docx

## 6. THỨ TỰ THỰC THI BẮT BUỘC

| **Thứ tự** | **File**                                           | **Mode**                                  | **Mục đích**                            | **Có được sửa code không** |
|------------|----------------------------------------------------|-------------------------------------------|-----------------------------------------|----------------------------|
| 0          | README-PHASE-02-HANDOFF-INDEX.docx                 | Handoff Index                             | Điều phối toàn phase                    | Không                      |
| 1          | 00-P2-ANALYSIS-ONLY.docx                           | ANALYSIS ONLY                             | Phân tích Operational Core hiện trạng   | Không                      |
| 2          | 01-P2-1-TECHNICAL-DESIGN-ONLY.docx                 | TECHNICAL DESIGN ONLY                     | Thiết kế workstream/boundary/task       | Không                      |
| 3          | 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx          | LIMITED IMPLEMENTATION                    | Source / Raw / Lot / QC / Readiness     | Có giới hạn                |
| 4          | 03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx   | LIMITED IMPLEMENTATION                    | Production Order / Snapshot / Workshop  | Có giới hạn                |
| 5          | 04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx        | LIMITED IMPLEMENTATION                    | Material Issue / Receipt / Ledger       | Có giới hạn                |
| 6          | 05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx | LIMITED IMPLEMENTATION                    | Batch / Release / Warehouse / Inventory | Có giới hạn                |
| 7          | 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx     | LIMITED IMPLEMENTATION                    | Traceability / QR / Recall / Sale Lock  | Có giới hạn                |
| 8          | 07-P2-2F-SMOKE-EVIDENCE-REPORT.docx                | VALIDATION / SMOKE / EVIDENCE REPORT ONLY | Smoke/evidence/report PHASE 2           | Không thêm feature         |

Không được nhảy từ README sang implementation.

Không được bỏ qua Analysis.

Không được bỏ qua Technical Design.

Không được chạy P2.2A nếu chưa có P2 Analysis Report và P2.1 Technical Design.

Không được chạy P2.2B nếu P2.2A chưa có report đủ 14 mục.

Không được chạy P2.2C nếu P2.2B chưa có report đủ 14 mục.

Không được chạy P2.2D nếu P2.2C chưa có report đủ 14 mục.

Không được chạy P2.2E nếu P2.2D chưa có report đủ 14 mục.

Không được chạy P2.2F nếu P2.2A → P2.2E chưa có report đủ 14 mục.

Không được chuyển PHASE 3 nếu P2.2F chưa có smoke/evidence/report và owner/dev lead chưa cho phép.

## 7. KHÓA RULE PHASE 2

### 7.1. Raw Lot QC_PASS không đồng nghĩa READY_FOR_PRODUCTION

Raw Lot QC_PASS chỉ có nghĩa:

1.  Raw lot đã đạt QC đầu vào.

2.  Raw lot có thể được xem xét readiness.

3.  QC_PASS là một điều kiện của readiness.

Raw Lot QC_PASS **không có nghĩa**:

1.  Được issue ngay.

2.  Được đưa vào production ngay.

3.  Đã READY_FOR_PRODUCTION.

4.  Đã vượt qua mọi guard.

5.  Đã có đủ evidence/approval nếu policy yêu cầu.

Nguyên tắc bắt buộc:

**RAW_LOT QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.**

### 7.2. Raw lot chỉ được issue khi READY_FOR_PRODUCTION

Raw lot chỉ được issue khi:

1.  Raw lot tồn tại.

2.  Raw lot linked raw material hợp lệ.

3.  Raw lot linked receipt hợp lệ.

4.  Raw lot quantity/UOM hợp lệ.

5.  Raw lot QC result = PASS.

6.  Raw lot không HOLD.

7.  Raw lot không QUARANTINE.

8.  Raw lot không REJECTED.

9.  Raw lot không CONSUMED.

10. Required evidence accepted nếu policy yêu cầu.

11. Actor hợp lệ.

12. Permission hợp lệ.

13. Audit event nếu readiness xảy ra.

14. Idempotency nếu command có side effect.

Nguyên tắc bắt buộc:

**Raw lot chỉ được issue khi READY_FOR_PRODUCTION.**

### 7.3. Production Order phải snapshot formula / recipe / BOM

Production Order phải snapshot:

1.  SKU.

2.  Recipe.

3.  Formula kind.

4.  Formula version.

5.  Ingredient.

6.  Quantity.

7.  UOM.

8.  BOM line.

9.  Metadata tại thời điểm tạo lệnh.

Production Order không được phụ thuộc động vào recipe hiện tại sau khi đã tạo.

Nếu Recipe/BOM/Formula hiện tại thay đổi, Production Order cũ không được thay đổi theo.

### 7.4. Material Issue là điểm giảm tồn nguyên liệu chính

Material Issue phải:

1.  Linked Production Order.

2.  Linked Raw Lot READY_FOR_PRODUCTION.

3.  Có issue quantity/UOM.

4.  Tạo raw inventory ledger debit.

5.  Có idempotency chống retry trùng.

6.  Có audit.

7.  Có actor/correlation.

8.  Không tạo batch.

9.  Không tạo warehouse receipt.

Nguyên tắc bắt buộc:

**Material Issue là điểm giảm tồn nguyên liệu chính.**

### 7.5. Material Receipt không giảm tồn lần hai

Material Receipt / Workshop Receipt chỉ xác nhận xưởng đã nhận nguyên liệu.

Material Receipt không được:

1.  Giảm tồn nguyên liệu lần hai.

2.  Tạo raw ledger debit lần hai.

3.  Sửa ledger debit của issue.

4.  Tự tạo inventory adjustment nếu chưa có adjustment flow.

5.  Tự tạo batch output.

6.  Tự tạo thành phẩm.

Nguyên tắc bắt buộc:

**Material Receipt không được giảm tồn lần hai.**

### 7.6. Inventory Ledger append-only

Inventory Ledger phải:

1.  Append-only.

2.  Có reference command.

3.  Có debit/credit direction.

4.  Có quantity/UOM.

5.  Có item/lot reference.

6.  Có actor/correlation.

7.  Có idempotency reference.

8.  Không update/delete bằng business flow.

9.  Correction nếu có phải là entry mới.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 7.7. Batch QC_PASS không đồng nghĩa RELEASED

Batch QC_PASS chỉ có nghĩa:

1.  Batch đạt QC.

2.  Batch có thể được xem xét release.

Batch QC_PASS không có nghĩa:

1.  Batch RELEASED.

2.  Warehouse được nhận.

3.  Finished goods inventory tăng.

4.  SKU sellable.

5.  Public trace valid.

Nguyên tắc bắt buộc:

**Batch QC_PASS không đồng nghĩa Batch RELEASED.**

### 7.8. Warehouse chỉ nhận Batch RELEASED

Warehouse Receipt chỉ được phép khi:

1.  Batch RELEASED.

2.  Batch không HOLD.

3.  Batch không REJECTED.

4.  Batch không CANCELLED.

5.  Batch output quantity/UOM hợp lệ.

6.  Actor/permission hợp lệ.

7.  Evidence accepted nếu policy yêu cầu.

8.  Idempotency guard pass.

Nguyên tắc bắt buộc:

**Warehouse chỉ nhận Batch RELEASED.**

### 7.9. Finished goods chỉ tăng tồn khi Warehouse Receipt confirmed

Warehouse Receipt confirmed mới:

1.  Ghi Finished Goods Ledger credit.

2.  Cập nhật balance projection.

3.  Tạo finished goods inventory truth cho Commerce sau này.

Warehouse Receipt không được:

1.  Tự set Sellable.

2.  Tự public trace.

3.  Tự mở Commerce.

4.  Tự tạo order.

5.  Tự tạo revenue.

Nguyên tắc bắt buộc:

**Finished goods chỉ tăng tồn khi warehouse receipt confirmed.**

### 7.10. Public Trace whitelist-only

Public Trace chỉ được trả dữ liệu whitelist.

Public Trace không được lộ:

1.  Supplier private detail.

2.  Internal source contract.

3.  Cost data.

4.  Internal formula ratio.

5.  Full BOM detail.

6.  Internal ingredient quantity.

7.  Internal QC defect detail.

8.  Internal reject reason chi tiết.

9.  Internal loss/variance.

10. Personnel/user info.

11. Worker note.

12. Admin note.

13. MISA/accounting data.

14. Evidence private data.

15. Recall internal note.

16. Raw material internal lot metadata không public.

17. Audit log nội bộ.

18. Idempotency key.

19. Internal correlation ID nếu policy không cho public.

20. Any private/internal field.

Nguyên tắc bắt buộc:

**Public Trace whitelist-only.**

### 7.11. QR VOID/FAILED không public-valid

QR không public-valid nếu:

1.  VOID.

2.  FAILED.

3.  BLOCKED.

4.  Missing trace projection.

5.  Missing public trace policy.

6.  Linked recall/sale lock theo policy.

7.  Public DTO không an toàn.

Nguyên tắc bắt buộc:

**QR VOID/FAILED không public-valid.**

### 7.12. Recall / Sale Lock thắng downstream

Recall / Sale Lock phải thắng:

1.  Commerce.

2.  AI Advisor.

3.  Facebook Gateway.

4.  Ads.

5.  MC AI Live.

6.  CRM.

7.  IVR.

8.  Any selling or public delivery channel.

Nguyên tắc bắt buộc:

**Recall / Sale Lock thắng Commerce, AI, Ads, Live, CRM, Gateway, IVR.**

### 7.13. PHASE 2 không quyết định Sellable

PHASE 2 tạo operational truth:

1.  Batch RELEASED.

2.  Warehouse Receipt confirmed.

3.  Finished Goods Ledger credit.

4.  Inventory Balance Projection.

5.  Traceability.

6.  Recall / Sale Lock.

PHASE 2 **không tự quyết Sellable**.

Sellable thuộc PHASE 3 Commerce Runtime.

### 7.14. Global Gateway vẫn BLOCKED

Trong toàn PHASE 2:

1.  GLOBAL GATEWAY: BLOCKED.

2.  Evidence Submitted chưa phải Evidence Accepted.

3.  Smoke cục bộ chưa phải Global Smoke Pass.

4.  PHASE 2 Done chưa phải Release Ready.

5.  Documentation Complete chưa phải Production Ready.

6.  Không gọi Completion PASS.

7.  Không gọi Release Ready.

8.  Không gọi Production Ready.

9.  Không gọi Go-live Approved.

10. Không gọi Gateway PASS.

## 8. FILE INDEX CHI TIẾT

### 8.1. 00-P2-ANALYSIS-ONLY.docx

**Mode:** ANALYSIS ONLY
**Mục tiêu:** Phân tích hiện trạng Operational Core, không sửa file.

**Scope chính**

1.  Source Origin.

2.  Raw Material.

3.  Raw Material Receipt.

4.  Raw Lot.

5.  Incoming QC.

6.  Raw Lot Readiness.

7.  Production Order.

8.  Formula Snapshot.

9.  Material Request.

10. Material Issue.

11. Material Receipt.

12. Production Batch.

13. Batch QC.

14. Batch Release.

15. Warehouse Receipt.

16. Inventory Ledger.

17. Inventory Balance Projection.

18. Traceability / QR / Public Trace.

19. Recall / Hold / Sale Lock.

20. Operational audit/evidence/idempotency.

**Done Gate**

1.  Không sửa file.

2.  Không tạo code.

3.  Không tạo migration.

4.  Không tạo seed.

5.  Đã inspect codebase thật.

6.  Có current implementation state matrix.

7.  Có gap matrix.

8.  Có conflict matrix.

9.  Có blocker register.

10. Có downstream impact.

11. Có smoke required.

12. Report đủ 14 mục.

13. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không sửa Source / Raw / QC / Production / Inventory code.

2.  Không tạo production order.

3.  Không issue material.

4.  Không release batch.

5.  Không confirm warehouse receipt.

6.  Không public trace dữ liệu.

7.  Không kích hoạt recall/sale lock.

8.  Không mở Global Gateway.

9.  Không gọi Release Ready / Production Ready / Go-live Approved.

### 8.2. 01-P2-1-TECHNICAL-DESIGN-ONLY.docx

**Mode:** TECHNICAL DESIGN ONLY
**Mục tiêu:** Chuyển P2 Analysis thành workstream, task breakdown, dependency, evidence plan, smoke plan và implementation sequence.

**Workstream**

1.  2A — Source / Raw Material / Raw Lot / QC / Readiness.

2.  2B — Production Order / Formula Snapshot / Workshop.

3.  2C — Material Request / Material Issue / Material Receipt / Ledger.

4.  2D — Batch / QC / Release / Warehouse / Inventory.

5.  2E — Traceability / QR / Public Trace / Recall / Sale Lock.

6.  2F — Operational Smoke / Evidence / Report.

**Done Gate**

1.  Không sửa file.

2.  Có Workstream Matrix.

3.  Có Task Breakdown Matrix.

4.  Có Dependency Matrix.

5.  Có Evidence Plan Matrix.

6.  Có Smoke Plan Matrix.

7.  Có P2 Blocker Handling Matrix.

8.  Có Implementation Sequence.

9.  Đã khóa đủ boundary vận hành.

10. Report đủ 14 mục.

11. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không code.

2.  Không migration.

3.  Không seed.

4.  Không tạo API.

5.  Không tạo UI.

6.  Không gọi QC_PASS là READY_FOR_PRODUCTION.

7.  Không gọi Batch QC_PASS là RELEASED.

8.  Không mở Gateway.

### 8.3. 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx

**Mode:** LIMITED IMPLEMENTATION
**Mục tiêu:** Triển khai giới hạn Source / Raw Material / Raw Lot / Incoming QC / Readiness Gate.

**Scope chính**

1.  Source Origin foundation.

2.  Raw Material Master foundation.

3.  Raw Material Receipt foundation.

4.  Raw Lot foundation.

5.  Incoming QC foundation.

6.  Raw Lot status lifecycle.

7.  Raw Lot Readiness Gate.

8.  QC_PASS vs READY_FOR_PRODUCTION boundary.

9.  Issue eligibility boundary.

10. Audit / Evidence / Idempotency hook nếu foundation hỗ trợ.

**Done Gate**

1.  Raw Material foundation có nền.

2.  Raw Receipt foundation có nền.

3.  Raw Lot foundation có nền.

4.  Incoming QC foundation có nền.

5.  Raw Lot Readiness Gate có nền.

6.  QC_PASS không bị dùng thay READY_FOR_PRODUCTION.

7.  Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

8.  Không triển khai Production Order.

9.  Không triển khai Material Issue đầy đủ.

10. Không triển khai Inventory Ledger đầy đủ.

11. Report đủ 14 mục.

12. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không Production Order đầy đủ.

2.  Không Material Issue đầy đủ.

3.  Không Inventory Ledger đầy đủ.

4.  Không Batch / Warehouse.

5.  Không Traceability / Recall.

6.  Không Commerce / AI / Gateway.

### 8.4. 03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx

**Mode:** LIMITED IMPLEMENTATION
**Mục tiêu:** Triển khai giới hạn Production Order / Formula Snapshot / Recipe Snapshot / BOM Snapshot / Workshop Handoff.

**Scope chính**

1.  Production Demand Intake boundary.

2.  Demand-to-Production Order resolver foundation.

3.  Production Order foundation.

4.  Production Order status lifecycle.

5.  Production Order linked SKU validation.

6.  Production Order linked Recipe validation.

7.  Formula Snapshot foundation.

8.  Recipe Snapshot foundation.

9.  BOM / Ingredient / Quantity / UOM Snapshot foundation.

10. Snapshot immutability boundary.

11. Workshop handoff foundation.

**Done Gate**

1.  Production Order foundation có nền.

2.  Production Order status lifecycle có nền.

3.  Formula / Recipe / BOM Snapshot có nền.

4.  Snapshot có formula kind / version / ingredient / quantity / UOM.

5.  Snapshot không phụ thuộc động vào recipe hiện tại.

6.  Recipe/BOM thay đổi sau đó không làm thay đổi Production Order snapshot cũ.

7.  Không triển khai Material Issue / Inventory Ledger / Batch / Warehouse đầy đủ.

8.  Report đủ 14 mục.

9.  Global Gateway vẫn BLOCKED.

**Không được**

1.  Không Material Issue.

2.  Không Raw Inventory Ledger debit.

3.  Không Batch.

4.  Không Warehouse Receipt.

5.  Không Finished Goods.

6.  Không Sellable.

7.  Không AI/Gateway tự phát Production Order.

### 8.5. 04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx

**Mode:** LIMITED IMPLEMENTATION
**Mục tiêu:** Triển khai giới hạn Material Request / Material Issue / Material Receipt / Raw Inventory Ledger.

**Scope chính**

1.  Material Request foundation.

2.  Material Issue foundation.

3.  Material Issue Guard.

4.  Material Issue linked Production Order validation.

5.  Material Issue linked Raw Lot READY_FOR_PRODUCTION validation.

6.  Raw Inventory Ledger debit foundation.

7.  Idempotency protection để không double debit.

8.  Material Receipt / Workshop Receipt foundation.

9.  Material Receipt no-second-debit boundary.

10. Inventory Ledger append-only boundary.

11. Raw Inventory Balance Projection nếu thuộc scope.

**Done Gate**

1.  Material Issue linked Production Order hợp lệ.

2.  Material Issue linked Raw Lot READY_FOR_PRODUCTION.

3.  Material Issue tạo Raw Inventory Ledger debit.

4.  Retry không double debit nếu idempotency foundation hỗ trợ.

5.  Material Receipt không giảm tồn lần hai.

6.  Inventory Ledger append-only boundary có nền.

7.  Không triển khai Batch / Warehouse / Traceability / Recall.

8.  Không sửa Commerce / AI / Gateway.

9.  Report đủ 14 mục.

10. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không issue raw lot chưa READY_FOR_PRODUCTION.

2.  Không double debit.

3.  Không Material Receipt giảm tồn lần hai.

4.  Không Ledger update/delete.

5.  Không Batch / Warehouse / Finished Goods.

6.  Không Commerce Sellable Gate.

### 8.6. 05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx

**Mode:** LIMITED IMPLEMENTATION
**Mục tiêu:** Triển khai giới hạn Batch / QC / Release / Warehouse / Finished Goods Inventory.

**Scope chính**

1.  Production Batch foundation.

2.  Batch Process State foundation.

3.  Batch QC foundation.

4.  Batch Release Gate foundation.

5.  Batch QC_PASS vs RELEASED boundary.

6.  Warehouse Receipt foundation.

7.  Warehouse Receipt linked Batch RELEASED validation.

8.  Finished Goods Ledger credit foundation.

9.  Warehouse Receipt idempotency protection.

10. No Double Credit boundary.

11. Finished Goods Balance Projection nếu thuộc scope.

**Done Gate**

1.  Production Batch foundation có nền.

2.  Batch QC foundation có nền.

3.  Batch QC_PASS không đồng nghĩa RELEASED.

4.  Batch Release Gate có nền.

5.  Warehouse chỉ nhận Batch RELEASED.

6.  Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

7.  Retry không double credit nếu idempotency foundation hỗ trợ.

8.  Inventory Ledger append-only vẫn đúng.

9.  Warehouse Receipt không tự set Sellable.

10. Không triển khai Traceability / QR / Recall / Sale Lock / Commerce.

11. Report đủ 14 mục.

12. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không hardcode Batch QC_PASS = RELEASED.

2.  Không Warehouse nhận Batch chưa RELEASED.

3.  Không Warehouse Receipt tự set Sellable.

4.  Không Balance Projection tự quyết Commerce stock.

5.  Không QR / Recall / Sale Lock.

6.  Không Commerce Runtime.

### 8.7. 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx

**Mode:** LIMITED IMPLEMENTATION
**Mục tiêu:** Triển khai giới hạn Traceability / QR / Public Trace / Recall / Sale Lock.

**Scope chính**

1.  Traceability foundation.

2.  Internal Genealogy Link foundation.

3.  Trace projection nếu thuộc scope.

4.  Trace gap detection nếu thuộc scope.

5.  QR foundation.

6.  QR status lifecycle.

7.  QR public-valid guard.

8.  Public Trace whitelist DTO.

9.  Public Trace private/internal field suppression.

10. Recall Case foundation.

11. Recall Impact Analysis foundation.

12. Hold / Sale Lock foundation.

13. Downstream suppression boundary.

**Done Gate**

1.  Traceability foundation có nền.

2.  Genealogy Link foundation có nền.

3.  QR foundation có nền.

4.  QR VOID/FAILED không public-valid.

5.  Public Trace whitelist-only.

6.  Public Trace không lộ private/internal field.

7.  Recall Case foundation có nền.

8.  Recall Impact Analysis foundation có nền.

9.  Hold / Sale Lock foundation có nền.

10. Downstream suppression boundary có nền.

11. Recall / Sale Lock thắng downstream ở mức boundary.

12. Không triển khai Commerce / AI / Gateway / Ads / Live / IVR đầy đủ.

13. Report đủ 14 mục.

14. Global Gateway vẫn BLOCKED.

**Không được**

1.  Không public internal trace trực tiếp.

2.  Không QR VOID/FAILED public-valid.

3.  Không Public Trace lộ private field.

4.  Không Recall/Sale Lock bị downstream bypass.

5.  Không Commerce Sellable Gate.

6.  Không AI/Gateway delivery đầy đủ.

7.  Không mở Release Gateway.

### 8.8. 07-P2-2F-SMOKE-EVIDENCE-REPORT.docx

**Mode:** VALIDATION / SMOKE / EVIDENCE REPORT ONLY
**Mục tiêu:** Chạy smoke, gom evidence và lập PHASE 2 Implementation Report.

**Scope chính**

1.  Validate P2.2A.

2.  Validate P2.2B.

3.  Validate P2.2C.

4.  Validate P2.2D.

5.  Validate P2.2E.

6.  Build validation.

7.  Test validation.

8.  Smoke validation.

9.  Migration validation nếu có.

10. Seed validation nếu có.

11. Evidence Register.

12. Smoke Result Matrix.

13. Open Blocker Register.

14. Risk Register.

15. Handoff sang PHASE 3 nếu đủ điều kiện review.

**Done Gate**

1.  Đã đọc reports P2 → P2.2E.

2.  Đã inspect codebase thật.

3.  Đã chạy hoặc báo rõ build/test/smoke.

4.  Đã kiểm tra migration nếu có.

5.  Đã kiểm tra seed nếu có.

6.  Đã gom evidence.

7.  Có Smoke Result Matrix.

8.  Có Evidence Register.

9.  Có Open Blocker Register.

10. Có Risk Register.

11. Có git status/git diff.

12. Không sửa feature code ngoài scope.

13. Không mở Global Gateway.

14. Không gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

15. Report đủ 14 mục.

**Không được**

1.  Không sửa business logic.

2.  Không tạo feature mới.

3.  Không tạo migration mới.

4.  Không tạo seed mới.

5.  Không sửa Commerce / AI / Gateway.

6.  Không tự chuyển sang PHASE 3 implementation.

7.  Không gọi Gateway PASS.

## 9. REPORT 14 MỤC BẮT BUỘC

Mọi report trong PHASE 2 phải có đúng 14 mục:

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

## 10. PHASE 2 SMOKE MATRIX TỔNG HỢP

| **Smoke ID**  | **Nhóm**          | **Case**                                      | **Expected**                                               |
|---------------|-------------------|-----------------------------------------------|------------------------------------------------------------|
| P2F-SMOKE-A01 | Source / Raw      | Tạo Raw Material hợp lệ                       | Raw Material được tạo                                      |
| P2F-SMOKE-A02 | Raw Receipt       | Tạo Raw Material Receipt hợp lệ               | Receipt được tạo                                           |
| P2F-SMOKE-A03 | Raw Lot           | Tạo Raw Lot từ receipt hợp lệ                 | Raw Lot CREATED/PENDING_QC                                 |
| P2F-SMOKE-A04 | Raw Lot           | Raw Lot thiếu UOM/quantity                    | Bị reject                                                  |
| P2F-SMOKE-A05 | Incoming QC       | Incoming QC PASS                              | QC PASS, raw lot chưa tự READY_FOR_PRODUCTION              |
| P2F-SMOKE-A06 | Incoming QC       | Incoming QC FAIL/HOLD                         | Raw lot không READY_FOR_PRODUCTION                         |
| P2F-SMOKE-A07 | Readiness         | Raw lot QC_PASS + đủ điều kiện                | Mark READY_FOR_PRODUCTION                                  |
| P2F-SMOKE-A08 | Readiness         | Raw lot HOLD/REJECTED/QUARANTINE              | Không READY_FOR_PRODUCTION                                 |
| P2F-SMOKE-A09 | Issue Eligibility | Raw lot chưa READY_FOR_PRODUCTION             | Không pass issue eligibility                               |
| P2F-SMOKE-B01 | Production        | Tạo Production Order từ SKU/Recipe hợp lệ     | Production Order được tạo                                  |
| P2F-SMOKE-B02 | Production        | Production Order thiếu SKU                    | Bị reject                                                  |
| P2F-SMOKE-B03 | Production        | Production Order thiếu Recipe                 | Bị reject                                                  |
| P2F-SMOKE-B04 | Production        | Recipe thiếu BOM line                         | Production Order bị reject                                 |
| P2F-SMOKE-B05 | Snapshot          | Production Order snapshot                     | Có formula kind/version/ingredient/quantity/UOM            |
| P2F-SMOKE-B06 | Snapshot          | Recipe/BOM sửa sau khi tạo order              | Snapshot cũ không đổi                                      |
| P2F-SMOKE-B07 | Demand            | Demand từ Sales/Đại lý                        | Không tự phát Production Order nếu chưa qua resolver/guard |
| P2F-SMOKE-B08 | Production        | Production Order created                      | Không tự material issue, không debit inventory             |
| P2F-SMOKE-C01 | Material Request  | Request linked Production Order               | Request được tạo, không debit ledger                       |
| P2F-SMOKE-C02 | Material Issue    | Issue raw lot READY_FOR_PRODUCTION            | Issue được tạo                                             |
| P2F-SMOKE-C03 | Material Issue    | Issue raw lot QC_PASS chưa READY              | Bị reject                                                  |
| P2F-SMOKE-C04 | Material Issue    | Issue raw lot HOLD/REJECTED/QUARANTINE        | Bị reject                                                  |
| P2F-SMOKE-C05 | Ledger            | Material Issue thành công                     | Tạo raw ledger debit                                       |
| P2F-SMOKE-C06 | Idempotency       | Retry Material Issue same key/payload         | Không double debit                                         |
| P2F-SMOKE-C07 | Idempotency       | Same key different payload                    | Conflict nếu idempotency hook có                           |
| P2F-SMOKE-C08 | Material Receipt  | Receipt linked Issue                          | Receipt được tạo                                           |
| P2F-SMOKE-C09 | Material Receipt  | Receipt thành công                            | Không tạo raw ledger debit lần hai                         |
| P2F-SMOKE-C10 | Ledger            | Ledger update/delete attempt                  | Không được phép                                            |
| P2F-SMOKE-D01 | Batch             | Tạo Batch linked Production Order             | Batch được tạo                                             |
| P2F-SMOKE-D02 | Batch Process     | PROCESS_COMPLETED                             | Không tự QC_PASS, không RELEASED                           |
| P2F-SMOKE-D03 | Batch QC          | Batch QC PASS                                 | QC PASS, batch chưa tự RELEASED                            |
| P2F-SMOKE-D04 | Batch QC          | Batch QC FAIL/HOLD/REJECTED                   | Không release được                                         |
| P2F-SMOKE-D05 | Batch Release     | Release khi QC_PASS + guard pass              | Batch RELEASED                                             |
| P2F-SMOKE-D06 | Warehouse         | Warehouse Receipt Batch QC_PASS chưa RELEASED | Bị reject                                                  |
| P2F-SMOKE-D07 | Warehouse         | Warehouse Receipt Batch RELEASED              | Receipt được confirm                                       |
| P2F-SMOKE-D08 | FG Ledger         | Warehouse Receipt confirmed                   | Tạo Finished Goods Ledger credit                           |
| P2F-SMOKE-D09 | Idempotency       | Retry Warehouse Receipt same key/payload      | Không double credit                                        |
| P2F-SMOKE-D10 | Commerce Boundary | Warehouse Receipt confirmed                   | Không tự set Sellable                                      |
| P2F-SMOKE-E01 | Traceability      | Build internal genealogy                      | Trace link raw lot → production → batch → warehouse        |
| P2F-SMOKE-E02 | Traceability      | Missing genealogy link                        | Trace gap flagged                                          |
| P2F-SMOKE-E03 | QR                | QR GENERATED/PRINTED                          | QR có status hợp lệ                                        |
| P2F-SMOKE-E04 | QR                | QR VOID                                       | Public Trace không valid                                   |
| P2F-SMOKE-E05 | QR                | QR FAILED                                     | Public Trace không valid                                   |
| P2F-SMOKE-E06 | Public Trace      | Public Trace response                         | Whitelist-only                                             |
| P2F-SMOKE-E07 | Public Trace      | Private field attempt                         | Không lộ private/internal field                            |
| P2F-SMOKE-E08 | Recall            | Recall Case OPEN                              | Recall case được tạo                                       |
| P2F-SMOKE-E09 | Recall            | Recall impact analysis                        | Xác định impacted batch/QR/SKU                             |
| P2F-SMOKE-E10 | Sale Lock         | Sale Lock active                              | Target bị suppression                                      |
| P2F-SMOKE-E11 | Downstream        | Sale Lock active downstream hook              | Commerce/AI/Gateway/Ads/Live/CRM/IVR bị chặn ở boundary    |
| P2F-SMOKE-X01 | Cross-cutting     | High-risk command thiếu actor                 | DENY / BLOCK                                               |
| P2F-SMOKE-X02 | Cross-cutting     | High-risk command thiếu permission            | DENY                                                       |
| P2F-SMOKE-X03 | Evidence          | Command require evidence nhưng SUBMITTED      | Không pass                                                 |
| P2F-SMOKE-X04 | Idempotency       | Same key same payload                         | Không tạo side effect lần hai                              |
| P2F-SMOKE-X05 | Idempotency       | Same key different payload                    | Conflict                                                   |
| P2F-SMOKE-X06 | Runtime           | Runtime dependency unavailable                | Fail-safe, không suy đoán                                  |
| P2F-SMOKE-X07 | Audit             | Audit event for success/deny                  | Có actor/correlation/action/result                         |

Không gọi bất kỳ smoke nào ở đây là **Global Smoke Pass**.

## 11. EVIDENCE PACKAGE TỐI THIỂU

PHASE 2 cần gom evidence package gồm:

1.  P2 Analysis Report.

2.  P2.1 Technical Design Report.

3.  P2.2A Source / Raw / QC / Readiness evidence.

4.  P2.2B Production Order / Snapshot evidence.

5.  P2.2C Material Issue / Receipt / Ledger evidence.

6.  P2.2D Batch / Release / Warehouse evidence.

7.  P2.2E Traceability / QR / Recall / Sale Lock evidence.

8.  P2.2F Smoke Result Matrix.

9.  File changes summary.

10. Git diff summary.

11. Build result.

12. Test result.

13. Smoke result.

14. Migration validation nếu có.

15. Seed validation nếu có.

16. Raw Lot QC_PASS != READY_FOR_PRODUCTION evidence.

17. Production Order snapshot evidence.

18. Material Issue no double debit evidence.

19. Material Receipt no second debit evidence.

20. Batch QC_PASS != RELEASED evidence.

21. Warehouse only accepts RELEASED batch evidence.

22. No double credit evidence.

23. Inventory Ledger append-only evidence.

24. Public Trace whitelist-only evidence.

25. QR VOID/FAILED not public-valid evidence.

26. Recall / Sale Lock downstream suppression evidence.

27. Open blocker register.

28. Risk register.

29. Gateway blocked evidence.

30. Owner review checklist.

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

## 12. BLOCKER P0 TOÀN PHASE 2

Các lỗi sau là **P0 Blocker**:

1.  Raw Lot QC_PASS bị dùng làm READY_FOR_PRODUCTION.

2.  Raw lot chưa READY_FOR_PRODUCTION vẫn issue được.

3.  Material Issue không tạo raw ledger debit.

4.  Material Receipt tạo debit lần hai.

5.  Inventory Ledger update/delete được.

6.  Material Issue retry tạo double debit.

7.  Warehouse Receipt retry tạo double credit.

8.  Production Order không snapshot formula/BOM.

9.  Recipe/BOM sửa làm snapshot cũ thay đổi.

10. Batch QC_PASS bị dùng làm RELEASED.

11. Warehouse nhận Batch chưa RELEASED.

12. Finished Goods Ledger credit tạo trước warehouse receipt confirmed.

13. Warehouse Receipt tự set Sellable.

14. Public Trace không whitelist-only.

15. QR VOID/FAILED public-valid.

16. Recall/Sale Lock không chặn Commerce.

17. Recall/Sale Lock không chặn AI/Gateway/Ads/Live/CRM/IVR.

18. SUBMITTED evidence được xem là ACCEPTED.

19. Runtime unavailable nhưng hệ thống vẫn suy đoán.

20. Global Gateway không còn BLOCKED.

21. Smoke fail nhưng vẫn gọi done.

22. Evidence Submitted bị gọi Evidence Accepted.

23. Test pass bị gọi Global Smoke Pass.

24. PHASE 2 Done bị gọi Release Ready.

25. PHASE 2 Done bị gọi Production Ready.

26. PHASE 2 Done bị gọi Go-live Approved.

## 13. DOWNSTREAM IMPACT

### 13.1. Ảnh hưởng sang PHASE 3 — Commerce Runtime

PHASE 3 cần PHASE 2 để biết:

1.  Finished goods có thật không.

2.  Batch đã RELEASED chưa.

3.  Warehouse Receipt đã confirmed chưa.

4.  Finished Goods Ledger đã credit chưa.

5.  SKU/batch có recall không.

6.  SKU/batch có sale lock không.

7.  Public trace/QR có hợp lệ không.

Commerce Sellable Gate không được dùng Product Active thay Sellable.

Commerce Sellable Gate phải dựa vào Operational truth từ PHASE 2.

### 13.2. Ảnh hưởng sang PHASE 4 — AI Advisor Runtime

AI Advisor không được tư vấn/chốt sản phẩm nếu:

1.  Không có finished goods truth.

2.  Batch chưa RELEASED.

3.  Warehouse chưa receipt confirmed.

4.  SKU/batch bị recall.

5.  SKU/batch bị sale lock.

6.  SKU không sellable theo Commerce Runtime.

### 13.3. Ảnh hưởng sang PHASE 5 — Facebook Gateway

Gateway không được:

1.  Public trace private field.

2.  Chốt đơn SKU bị sale lock.

3.  Chạy Messenger order flow khi SKU bị recall.

4.  Bỏ qua suppression boundary.

5.  Mở global gateway khi Operational Core chưa có evidence.

### 13.4. Ảnh hưởng sang PHASE 6 — Ads Measurement

Ads không được:

1.  Scale SKU bị recall/sale lock.

2.  Dùng SKU không có operational truth.

3.  Dùng batch/QR/public trace sai.

4.  Tính ROAS trên SKU không được bán.

### 13.5. Ảnh hưởng sang PHASE 7 — MC AI Live

MC AI Live không được:

1.  Giới thiệu SKU bị sale lock.

2.  Chốt sản phẩm bị recall.

3.  Nói sai trạng thái tồn/bán được.

4.  Bỏ qua suppression boundary.

### 13.6. Ảnh hưởng sang PHASE 8 — IVR

IVR không được xác nhận đơn nếu:

1.  SKU bị recall.

2.  SKU bị sale lock.

3.  Sản phẩm chưa có sellable truth.

4.  Official Order chứa sản phẩm stop-sale.

5.  Operational suppression đang active.

### 13.7. Ảnh hưởng sang PHASE 9 — Global Smoke / Release Gateway

Nếu PHASE 2 thiếu evidence/smoke:

1.  Không được Release Ready.

2.  Không được Production Ready.

3.  Không được Go-live Approved.

4.  Không được mở Global Gateway.

## 14. DEV EXECUTION PROTOCOL

Khi giao dev/Codex/Copilot, bắt buộc chạy theo protocol sau:

**Step 1 — Đọc README này**

Dev phải đọc file README này để hiểu thứ tự và gate.

**Step 2 — Chạy 00-P2-ANALYSIS-ONLY.docx**

Chỉ phân tích.

Không sửa file.

**Step 3 — Chạy 01-P2-1-TECHNICAL-DESIGN-ONLY.docx**

Chỉ thiết kế.

Không sửa file.

**Step 4 — Owner duyệt boundary**

Không có owner/dev lead approval thì không được implementation.

**Step 5 — Chạy từng prompt implementation**

Chạy tuần tự:

1.  P2.2A — Source / Raw / Lot / QC / Readiness.

2.  P2.2B — Production Order / Snapshot / Workshop.

3.  P2.2C — Material Issue / Receipt / Ledger.

4.  P2.2D — Batch / Release / Warehouse / Inventory.

5.  P2.2E — Traceability / QR / Recall / Sale Lock.

Mỗi prompt phải có report 14 mục.

**Step 6 — Chạy P2.2F**

Chỉ smoke/evidence/report.

Không sửa feature code.

**Step 7 — Owner Review**

Sau P2.2F mới sang Owner Review.

**Step 8 — Cho phép PHASE 3**

Chỉ sau Owner Review, mới bắt đầu:

**PROMPT-P3 — COMMERCE RUNTIME ANALYSIS HANDOFF**

P3 vẫn phải bắt đầu bằng **ANALYSIS ONLY**.

## 15. RELEASE / GATEWAY LOCK

PHASE 2 không được gọi các trạng thái sau:

1.  PHASE 2 Complete.

2.  Completion PASS.

3.  Global Smoke Pass.

4.  Release Ready.

5.  Production Ready.

6.  Go-live Approved.

7.  Gateway PASS.

PHASE 2 chỉ có thể kết luận tối đa:

1.  PHASE 2 Analysis Report Completed.

2.  PHASE 2 Technical Design Handoff Completed.

3.  P2.2A Limited Implementation Report Only.

4.  P2.2B Limited Implementation Report Only.

5.  P2.2C Limited Implementation Report Only.

6.  P2.2D Limited Implementation Report Only.

7.  P2.2E Limited Implementation Report Only.

8.  PHASE 2 Validation Report Only.

9.  Evidence Submitted for Review.

10. Ready for Owner Review.

11. P3 Analysis Prompt Draft Allowed nếu owner/dev lead cho phép.

## 16. PROMPT COPY GIAO DEV / CODEX / COPILOT

Sao chép nguyên khối dưới đây để giao dev/Codex/Copilot khi bắt đầu PHASE 2.

**PHASE-02 OPERATIONAL CORE — DEV EXECUTION HANDOFF**

Bạn đang thực hiện PHASE-02 — Operational Core cho dự án Ginsengfood.

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

1.  00-P2-ANALYSIS-ONLY.docx

2.  01-P2-1-TECHNICAL-DESIGN-ONLY.docx

3.  02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx

4.  03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx

5.  04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx

6.  05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx

7.  06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx

8.  07-P2-2F-SMOKE-EVIDENCE-REPORT.docx

Không được nhảy phase.

Không được bỏ qua Analysis/Design.

Không được implementation nếu chưa có approved boundary.

**CORE RULES**

1.  Raw Lot QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.

2.  Raw lot chỉ được issue khi READY_FOR_PRODUCTION.

3.  Production Order phải snapshot formula kind / version / ingredient / quantity / UOM.

4.  Production Order không phụ thuộc động vào Recipe hiện tại sau khi đã tạo.

5.  Material Issue là điểm giảm tồn nguyên liệu chính.

6.  Material Receipt không được giảm tồn lần hai.

7.  Inventory Ledger append-only.

8.  Batch QC_PASS không đồng nghĩa Batch RELEASED.

9.  Warehouse chỉ nhận Batch RELEASED.

10. Finished goods chỉ tăng tồn khi warehouse receipt confirmed.

11. Warehouse Receipt không tự set Sellable.

12. Finished Goods Inventory không tự Sellable.

13. QR VOID/FAILED không public-valid.

14. Public Trace whitelist-only.

15. Recall / Sale Lock thắng Commerce / AI / Ads / Live / CRM / Gateway / IVR.

16. Evidence Submitted chưa phải Evidence Accepted.

17. Smoke cục bộ chưa phải Global Smoke Pass.

18. Global Gateway vẫn BLOCKED.

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

1.  Lỗi Source / Raw / QC / Readiness → quay lại P2.2A.

2.  Lỗi Production Order / Snapshot → quay lại P2.2B.

3.  Lỗi Material Issue / Receipt / Ledger → quay lại P2.2C.

4.  Lỗi Batch / Warehouse / Inventory → quay lại P2.2D.

5.  Lỗi Traceability / QR / Recall / Sale Lock → quay lại P2.2E.

6.  Lỗi Smoke/Evidence → xử lý theo P2.2F và owner review.

7.  Lỗi Actor/RBAC/Audit/Evidence/Idempotency → quay lại PHASE 0 liên quan.

8.  Lỗi Product/SKU/Recipe dependency → quay lại PHASE 1 liên quan.

## 17. DOWNSTREAM SAU PHASE 2

Sau PHASE 2, không tự động sang PHASE 3.

Thứ tự đúng là:

1.  P2.2F Smoke / Evidence / Implementation Report.

2.  Evidence Submitted.

3.  Owner Review.

4.  Blocker review.

5.  Owner/dev lead cho phép viết P3.

6.  Bắt đầu PROMPT-P3 — COMMERCE RUNTIME ANALYSIS HANDOFF.

7.  P3 vẫn phải bắt đầu bằng **ANALYSIS ONLY**.

## 18. FILE TIẾP THEO SAU README

Sau khi có README này, thứ tự đúng là giao dev đọc:

1.  README-PHASE-02-HANDOFF-INDEX.docx

2.  00-P2-ANALYSIS-ONLY.docx

Nếu 00-P2 đã chạy rồi thì tiếp tục theo đúng trạng thái hiện tại, nhưng vẫn phải dùng README này làm file điều phối.

## 19. FINAL STATUS

**FILE STATUS:** CLEAN FINAL DRAFT
**FILE TYPE:** README / HANDOFF INDEX / EXECUTION ORDER
**PHASE:** PHASE-02 — OPERATIONAL CORE
**IMPLEMENTATION ALLOWED BY THIS FILE:** NO
**CODE CHANGE ALLOWED BY THIS FILE:** NO
**GATEWAY STATUS:** BLOCKED
**EVIDENCE STATUS:** NOT ACCEPTED UNTIL OWNER REVIEW
**GLOBAL SMOKE PASS:** NO
**COMPLETION PASS:** NO
**RELEASE READY:** NO
**PRODUCTION READY:** NO
**GO-LIVE APPROVED:** NO

**NEXT ACTION:** Giao dev/Codex/Copilot đọc README này, sau đó bắt đầu hoặc đối chiếu lại từ 00-P2-ANALYSIS-ONLY.docx.

**FINAL NOTE:** PHASE 2 chỉ được xem là sẵn sàng cho Owner Review sau khi chạy đủ 00 đến 07, report đủ 14 mục, evidence package submitted, không còn P0/P1/P2 blocker hoặc blocker đã phân loại rõ, và Global Gateway vẫn BLOCKED.
