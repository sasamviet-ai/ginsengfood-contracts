**PHASE-02-OPERATIONAL-CORE/**

**CẤU TRÚC THƯ MỤC ĐỀ XUẤT**

PHASE-02-OPERATIONAL-CORE/
├── 00-P2-ANALYSIS-ONLY.docx
├── 01-P2-1-TECHNICAL-DESIGN-ONLY.docx
├── 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx
├── 03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx
├── 04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx
├── 05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx
├── 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx
└── 07-P2-2F-SMOKE-EVIDENCE-REPORT.docx

**FILE: 00-P2-ANALYSIS-ONLY.docx**

**PROMPT-P2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK ANALYSIS HANDOFF**

**MODE: ANALYSIS ONLY**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK ANALYSIS HANDOFF**

### 1.3. Mode

**MODE: ANALYSIS ONLY**

### 1.4. Prompt liền trước

**PROMPT-P1.2E — PHASE 1 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

### 1.6. Điều kiện bắt đầu PHASE 2

PHASE 2 chỉ được bắt đầu khi:

1.  PHASE 1 đã có Analysis Report.

2.  PHASE 1 đã có Technical Design Handoff.

3.  PHASE 1 đã có các limited implementation report.

4.  PHASE 1 đã có Smoke / Evidence / Implementation Report.

5.  Product / SKU / Recipe / Formula / BOM foundation đã có.

6.  Product Active không bị hiểu là Sellable.

7.  Recipe Active không bị hiểu là Batch Released.

8.  Không còn blocker nghiêm trọng từ Product / SKU / Recipe.

9.  Owner/dev lead cho phép viết PROMPT-P2 Analysis Only.

10. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.1

Chỉ được chuyển sang **P2.1 Technical Design Only** khi PROMPT-P2 đạt đủ:

1.  Đã inspect codebase thật.

2.  Đã phân tích Source / Raw Material / Raw Lot / QC / Readiness.

3.  Đã phân tích Production Order / Formula Snapshot.

4.  Đã phân tích Material Request / Material Issue / Material Receipt.

5.  Đã phân tích Batch / QC / Release.

6.  Đã phân tích Warehouse / Inventory Ledger.

7.  Đã phân tích Traceability / QR / Recall / Sale Lock.

8.  Đã có current implementation state matrix.

9.  Đã có gap matrix.

10. Đã có conflict matrix.

11. Đã có blocker register.

12. Đã có downstream impact.

13. Đã có smoke required.

14. Đã có report 14 mục.

15. Không sửa file.

16. Không tạo code.

17. Không tạo migration.

18. Global Gateway vẫn BLOCKED.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK ANALYSIS HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2 là prompt mở đầu cho:

**PHASE 2 — Operational Core**

PHASE 2 là lớp vận hành lõi, quản lý chuỗi:

**Source / Raw Material → Raw Lot → QC → READY_FOR_PRODUCTION → Production Order → Material Issue → Material Receipt → Batch → QC / Release → Warehouse Receipt → Inventory Ledger → Traceability → QR / Public Trace → Recall / Sale Lock**

PROMPT-P2 không phải implementation prompt.

PROMPT-P2 chỉ dùng để phân tích codebase thật, tìm gap, conflict, blocker và xác định mức độ sẵn sàng của Operational Core trước khi viết technical design.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2 là yêu cầu dev/Codex/Copilot:

1.  Đọc source-of-truth.

2.  Đọc PHASE 1 report.

3.  Inspect codebase thật.

4.  Xác định current implementation state của Operational Core.

5.  Đối chiếu code hiện tại với TECH source-of-truth.

6.  Tìm gap, conflict, blocker.

7.  Tìm rủi ro về Raw Lot QC_PASS vs READY_FOR_PRODUCTION.

8.  Tìm rủi ro về Material Issue / Material Receipt / Inventory Ledger.

9.  Tìm rủi ro về Production Order formula snapshot.

10. Tìm rủi ro về Batch QC_PASS vs Batch RELEASED.

11. Tìm rủi ro về Warehouse Receipt / Finished Goods Inventory.

12. Tìm rủi ro về Traceability / QR / Recall / Sale Lock.

13. Lập báo cáo phân tích đủ 14 mục.

14. Không sửa file.

15. Không tạo code.

16. Không tạo migration.

17. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

## 3. MODE: ANALYSIS ONLY — DO NOT MODIFY FILES

### 3.1. Chế độ thực thi

**MODE: ANALYSIS ONLY**

Agent chỉ được phép:

1.  Đọc tài liệu.

2.  Đọc report PHASE 0 và PHASE 1.

3.  Inspect codebase thật.

4.  Tìm kiếm file.

5.  Đọc module Source / Raw Material nếu có.

6.  Đọc module QC nếu có.

7.  Đọc module Production nếu có.

8.  Đọc module Material Issue / Receipt nếu có.

9.  Đọc module Batch nếu có.

10. Đọc module Warehouse / Inventory nếu có.

11. Đọc module Traceability / QR nếu có.

12. Đọc module Recall / Sale Lock nếu có.

13. Đọc migration/schema hiện có nếu có.

14. Đọc seed hiện có nếu có.

15. Đọc test hiện có nếu có.

16. Lập current implementation state.

17. Lập gap matrix.

18. Lập conflict matrix.

19. Lập P2 blocker register.

20. Lập downstream impact.

21. Lập smoke required.

22. Lập report 14 mục.

### 3.2. Các hành động bị cấm

Agent không được:

1.  Sửa file.

2.  Tạo file.

3.  Xóa file.

4.  Rename file.

5.  Format file.

6.  Refactor code.

7.  Tạo code.

8.  Tạo migration.

9.  Tạo seed.

10. Update database.

11. Sửa source/raw/lot data.

12. Sửa QC data.

13. Sửa production order.

14. Sửa material issue / receipt.

15. Sửa inventory ledger.

16. Sửa warehouse data.

17. Sửa traceability data.

18. Sửa QR / recall / sale lock logic.

19. Tạo API.

20. Tạo UI.

21. Tự đổi nghiệp vụ.

22. Hardcode policy.

23. Gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

24. Gọi Batch QC_PASS là RELEASED.

25. Gọi Warehouse Receipt trước khi batch RELEASED.

26. Gọi Finished Goods available khi chưa warehouse receipt confirmed.

27. Gọi PHASE 2 Complete.

28. Gọi Completion PASS.

29. Gọi Release Ready.

30. Gọi Production Ready.

31. Gọi Go-live Approved.

32. Mở Global Gateway.

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

2.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

3.  **TECH-11 — Implementation Roadmap / Dev Phase Plan**

4.  **TECH-12 — Phase Backlog Pack**

5.  **TECH-13 — Codex / Copilot Dev Prompt Pack**

6.  **PHASE 0 Validation Report**

7.  **PHASE 1 Smoke / Evidence / Implementation Report**

8.  **TECH Operational Core nếu đã có trong bộ TECH**

9.  **Source / Raw / Production / Warehouse / Inventory / Traceability / Recall source-of-truth mới do owner cung cấp nếu có**

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PHASE 0 / PHASE 1 evidence submitted chưa phải evidence accepted.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict, không sửa.

9.  Nếu tài liệu cũ khác TECH mới thì báo legacy conflict, không dùng làm nền.

10. Nếu nghiệp vụ Operational Core chưa có source-of-truth thì không tự suy luận.

## 5. OBJECTIVE

### 5.1. Mục tiêu phân tích PHASE 2

Agent phải phân tích các domain sau:

1.  Source Origin / Supplier / Growing Source nếu có.

2.  Raw Material Master.

3.  Raw Material Receipt.

4.  Raw Lot.

5.  Incoming QC.

6.  Raw Lot Readiness.

7.  Production Demand / Production Order.

8.  Formula Snapshot / Recipe Snapshot.

9.  Material Request.

10. Material Issue.

11. Material Receipt / Workshop Receipt.

12. Production Batch.

13. Batch Process State.

14. Batch QC.

15. Batch Release.

16. Warehouse Receipt.

17. Inventory Ledger.

18. Inventory Balance Projection.

19. Packaging / QR / Print readiness nếu có liên quan.

20. Traceability / Genealogy.

21. Public Trace boundary.

22. Recall / Hold / Sale Lock.

23. Operational Evidence / Audit / Idempotency.

24. Operational Smoke hiện có nếu có.

### 5.2. Mục tiêu không phải

PROMPT-P2 không nhằm:

1.  Viết code Operational Core.

2.  Tạo schema DB.

3.  Tạo API.

4.  Tạo UI.

5.  Tạo migration.

6.  Tạo seed.

7.  Tạo production order.

8.  Issue material.

9.  Receipt material.

10. Release batch.

11. Confirm warehouse receipt.

12. Tạo QR.

13. Public trace dữ liệu.

14. Mở bán sản phẩm.

15. Release.

16. Go-live.

## 6. SCOPE IN

### 6.1. Source Origin / Raw Material Analysis

Agent phải phân tích:

1.  Source origin entity/model hiện có không.

2.  Supplier/source zone hiện có không.

3.  Raw material master hiện có không.

4.  Raw material group/category hiện có không.

5.  Raw material UOM hiện có không.

6.  Raw material receipt flow hiện có không.

7.  Raw material evidence/COA/source verification nếu có không.

8.  Raw material có audit/actor/correlation không nếu có command.

9.  Raw material có public/private boundary không.

10. Raw material có liên kết raw lot không.

### 6.2. Raw Lot Analysis

Agent phải phân tích:

1.  Raw lot entity/model hiện có không.

2.  Raw lot code.

3.  Raw material linkage.

4.  Source/receipt linkage.

5.  Lot quantity/UOM.

6.  Lot status.

7.  Lot QC status.

8.  Lot readiness status.

9.  Lot hold/reject/quarantine status nếu có.

10. Lot có audit/state history không.

11. Lot có inventory/ledger linkage không.

12. Lot có traceability linkage không.

13. Lot có thể bị dùng sai khi chỉ QC_PASS chưa READY_FOR_PRODUCTION không.

Nguyên tắc bắt buộc:

**RAW_LOT QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.**

### 6.3. Incoming QC / Raw Lot Readiness Analysis

Agent phải phân tích:

1.  Incoming QC flow hiện có không.

2.  QC result có PASS/FAIL/HOLD không.

3.  QC result có actor/audit/correlation không.

4.  QC result có evidence không.

5.  QC result có idempotency không nếu command có side effect.

6.  Có bước mark READY_FOR_PRODUCTION riêng không.

7.  READY_FOR_PRODUCTION có guard không.

8.  Raw lot chỉ được issue khi READY_FOR_PRODUCTION không.

9.  Code có chỗ nào dùng QC_PASS thay READY_FOR_PRODUCTION không.

10. Có test chứng minh QC_PASS không đủ để issue không.

Nguyên tắc bắt buộc:

**Raw lot chỉ được issue khi READY_FOR_PRODUCTION.**

### 6.4. Production Order / Formula Snapshot Analysis

Agent phải phân tích:

1.  Production order entity/model hiện có không.

2.  Production order code/status.

3.  Production order linked SKU.

4.  Production order linked recipe.

5.  Production order linked formula version.

6.  Production order có snapshot formula kind không.

7.  Production order có snapshot ingredient/quantity/UOM không.

8.  Production order có snapshot recipe version không.

9.  Production order có audit/actor/correlation không.

10. Production order có idempotency không.

11. Production order có approval/guard không.

12. Production order có bị sửa theo recipe mới sau khi đã tạo không.

Nguyên tắc bắt buộc:

**Production Order phải snapshot formula kind / version / ingredient / quantity / UOM.**

### 6.5. Material Request / Material Issue Analysis

Agent phải phân tích:

1.  Material request entity/model hiện có không.

2.  Material issue entity/model hiện có không.

3.  Material issue linked production order không.

4.  Material issue linked raw lot không.

5.  Material issue kiểm raw lot READY_FOR_PRODUCTION không.

6.  Material issue có quantity/UOM không.

7.  Material issue có idempotency không.

8.  Material issue có audit không.

9.  Material issue có inventory ledger debit không.

10. Material issue có thể bị retry tạo double debit không.

11. Material issue có test duplicate retry không.

12. Material issue có state machine không.

Nguyên tắc bắt buộc:

**Material Issue là điểm giảm tồn nguyên liệu chính.**

### 6.6. Material Receipt / Workshop Receipt Analysis

Agent phải phân tích:

1.  Material receipt/workshop receipt entity/model hiện có không.

2.  Material receipt linked production order không.

3.  Material receipt linked material issue không.

4.  Material receipt xác nhận xưởng nhận nguyên liệu không.

5.  Material receipt có variance không.

6.  Material receipt có audit không.

7.  Material receipt có idempotency không.

8.  Material receipt có inventory ledger debit lần hai không.

9.  Material receipt có bị dùng sai để giảm tồn nguyên liệu không.

10. Material receipt có test chứng minh không double debit không.

Nguyên tắc bắt buộc:

**Material Receipt không được giảm tồn lần hai.**

### 6.7. Production Batch / Process State Analysis

Agent phải phân tích:

1.  Production batch entity/model hiện có không.

2.  Batch linked production order không.

3.  Batch linked material receipt không.

4.  Batch code/status.

5.  Batch process state.

6.  Batch process step nếu có.

7.  Batch output quantity nếu có.

8.  Batch loss/variance nếu có.

9.  Batch audit/state history không.

10. Batch traceability linkage không.

11. Batch có public/private boundary không.

### 6.8. Batch QC / Batch Release Analysis

Agent phải phân tích:

1.  Batch QC flow hiện có không.

2.  Batch QC result có PASS/FAIL/HOLD/REJECT không.

3.  Batch QC có actor/audit/correlation không.

4.  Batch QC có evidence không.

5.  Batch QC có idempotency không.

6.  Batch Release flow riêng không.

7.  Batch Release có approval/guard không.

8.  Batch Release có audit/evidence không.

9.  Batch QC_PASS có bị dùng thay RELEASED không.

10. Warehouse có nhận batch QC_PASS chưa RELEASED không.

Nguyên tắc bắt buộc:

**Batch QC_PASS không đồng nghĩa Batch RELEASED.**

### 6.9. Warehouse Receipt / Finished Goods Inventory Analysis

Agent phải phân tích:

1.  Warehouse receipt entity/model hiện có không.

2.  Warehouse receipt chỉ nhận batch RELEASED không.

3.  Warehouse receipt có idempotency không.

4.  Warehouse receipt có audit không.

5.  Warehouse receipt có ledger credit thành phẩm không.

6.  Inventory balance projection có từ ledger không.

7.  Finished goods chỉ tăng tồn khi warehouse receipt confirmed không.

8.  Warehouse receipt retry có tạo double credit không.

9.  Có test duplicate warehouse receipt không.

Nguyên tắc bắt buộc:

**Warehouse chỉ nhận batch RELEASED.**
**Finished goods chỉ tăng tồn khi warehouse receipt confirmed.**
**Inventory Ledger append-only.**

### 6.10. Inventory Ledger Analysis

Agent phải phân tích:

1.  Inventory ledger entity/model hiện có không.

2.  Ledger append-only không.

3.  Ledger có debit/credit không.

4.  Ledger có raw material ledger không.

5.  Ledger có finished goods ledger không.

6.  Ledger có balance projection không.

7.  Ledger có audit/correlation không.

8.  Ledger có idempotency linkage không.

9.  Ledger có thể update/delete không.

10. Ledger có test append-only không.

11. Ledger có double debit/double credit risk không.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 6.11. Traceability / QR / Public Trace Analysis

Agent phải phân tích:

1.  Traceability entity/model hiện có không.

2.  Genealogy raw lot → production order → batch → warehouse receipt có không.

3.  QR entity/model hiện có không.

4.  QR status có GENERATED / PRINTED / VOID / FAILED không nếu có.

5.  QR VOID/FAILED có bị public-valid không.

6.  Public Trace có whitelist DTO không.

7.  Public Trace có lọc private field không.

8.  Public Trace có supplier/cost/formula/internal QC leak risk không.

9.  Trace gap detection có không.

10. Trace có recall impact support không.

Nguyên tắc bắt buộc:

**Public Trace whitelist-only.**
**QR VOID/FAILED không public-valid.**

### 6.12. Recall / Hold / Sale Lock Analysis

Agent phải phân tích:

1.  Recall case entity/model hiện có không.

2.  Hold flow hiện có không.

3.  Sale Lock flow hiện có không.

4.  Recall impact analysis có không.

5.  Recall linked traceability không.

6.  Recall có audit/evidence không.

7.  Recall có notification handoff nếu có không.

8.  Sale Lock có thắng Commerce không.

9.  Sale Lock có thắng AI / Ads / Live / Gateway / CRM / IVR không.

10. Có test stop-sale không.

11. Có risk system vẫn bán hàng khi recall active không.

Nguyên tắc bắt buộc:

**Recall / Sale Lock thắng Commerce, AI, Ads, Live, CRM, Gateway, IVR.**

## 7. SCOPE OUT

PROMPT-P2 không được:

1.  Sửa Source / Raw code.

2.  Sửa QC code.

3.  Sửa Production code.

4.  Sửa Inventory code.

5.  Sửa Warehouse code.

6.  Sửa Traceability code.

7.  Sửa Recall code.

8.  Tạo migration.

9.  Tạo seed.

10. Tạo API.

11. Tạo UI.

12. Tạo production order.

13. Issue material.

14. Receipt material.

15. Release batch.

16. Confirm warehouse receipt.

17. Tạo QR.

18. Public trace dữ liệu.

19. Kích hoạt recall/sale lock.

20. Tạo Sellable Gate.

21. Sửa Commerce.

22. Sửa AI Advisor.

23. Sửa Gateway / Ads / MC AI Live / IVR.

24. Mở Global Gateway.

25. Gọi PHASE 2 Complete.

26. Gọi Release Ready / Production Ready / Go-live Approved.

Nếu phát hiện cần sửa, chỉ ghi gap/handoff.

## 8. CURRENT IMPLEMENTATION STATE

### 8.1. Trạng thái được phép dùng

Agent chỉ được dùng các trạng thái:

| **Status**                   | **Ý nghĩa**                                            |
|------------------------------|--------------------------------------------------------|
| NOT_FOUND                    | Chưa thấy implementation                               |
| PARTIAL                      | Có một phần nhưng chưa đủ TECH                         |
| IMPLEMENTED_BUT_CONFLICT     | Có implementation nhưng khác TECH                      |
| IMPLEMENTED_NEEDS_VALIDATION | Có implementation tương đối nhưng thiếu evidence/smoke |
| UNKNOWN_BLOCKED              | Không đủ quyền/thiếu file/không inspect được           |

Không được dùng:

- PASS.

- COMPLETE.

- OPERATIONAL READY.

- RELEASE READY.

- PRODUCTION READY.

- GO-LIVE APPROVED.

### 8.2. Matrix bắt buộc

| **Domain**           | **Current State** | **Evidence Found** | **Gap** | **P2 Blocker** | **Downstream Impact** |
|----------------------|-------------------|--------------------|---------|----------------|-----------------------|
| Source Origin        |                   |                    |         |                |                       |
| Raw Material Master  |                   |                    |         |                |                       |
| Raw Material Receipt |                   |                    |         |                |                       |
| Raw Lot              |                   |                    |         |                |                       |
| Incoming QC          |                   |                    |         |                |                       |
| Raw Lot Readiness    |                   |                    |         |                |                       |
| Production Order     |                   |                    |         |                |                       |
| Formula Snapshot     |                   |                    |         |                |                       |
| Material Request     |                   |                    |         |                |                       |
| Material Issue       |                   |                    |         |                |                       |
| Material Receipt     |                   |                    |         |                |                       |
| Production Batch     |                   |                    |         |                |                       |
| Batch QC             |                   |                    |         |                |                       |
| Batch Release        |                   |                    |         |                |                       |
| Warehouse Receipt    |                   |                    |         |                |                       |
| Inventory Ledger     |                   |                    |         |                |                       |
| Traceability         |                   |                    |         |                |                       |
| QR / Public Trace    |                   |                    |         |                |                       |
| Recall / Sale Lock   |                   |                    |         |                |                       |

## 9. P2 BLOCKER

Agent phải đánh dấu P2 blocker nếu phát hiện:

1.  Raw Lot QC_PASS đang bị dùng làm READY_FOR_PRODUCTION.

2.  Raw lot chưa READY_FOR_PRODUCTION vẫn được issue.

3.  Material Issue không giảm tồn nguyên liệu.

4.  Material Receipt giảm tồn nguyên liệu lần hai.

5.  Inventory Ledger không append-only.

6.  Material Issue retry có thể tạo double debit.

7.  Warehouse Receipt retry có thể tạo double credit.

8.  Production Order không snapshot formula kind/version/ingredient/quantity/UOM.

9.  Recipe thay đổi làm Production Order cũ bị thay đổi.

10. Batch QC_PASS đang bị dùng làm RELEASED.

11. Warehouse nhận batch chưa RELEASED.

12. Finished goods tăng tồn trước warehouse receipt confirmed.

13. QR VOID/FAILED vẫn public-valid.

14. Public Trace không whitelist-only.

15. Public Trace lộ private/internal field.

16. Recall / Sale Lock không chặn Commerce.

17. Recall / Sale Lock không chặn AI/Gateway/Ads/Live/CRM/IVR.

18. Không có audit cho high-risk operational command.

19. Không có idempotency cho issue/receipt/release/warehouse.

20. Không có evidence cho QC/release/recall close nếu TECH yêu cầu.

21. Code cũ khác TECH mới nhưng chưa được ghi conflict.

## 10. GAP ANALYSIS MATRIX

Agent phải lập bảng:

| **Gap ID** | **Domain**                     | **TECH Requirement** | **Current State** | **Gap Description** | **Severity** | **P2 Blocker** | **Downstream Impact** | **Evidence Found** | **Smoke Required** | **Recommended Next Action** |
|------------|--------------------------------|----------------------|-------------------|---------------------|--------------|----------------|-----------------------|--------------------|--------------------|-----------------------------|
| P2-GAP-001 | Raw Lot Readiness              |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-002 | Production Order Snapshot      |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-003 | Material Issue                 |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-004 | Material Receipt               |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-005 | Inventory Ledger               |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-006 | Batch QC / Release             |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-007 | Warehouse Receipt              |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-008 | Traceability / QR              |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-009 | Recall / Sale Lock             |                      |                   |                     |              |                |                       |                    |                    |                             |
| P2-GAP-010 | Audit / Evidence / Idempotency |                      |                   |                     |              |                |                       |                    |                    |                             |

## 11. CONFLICT DETECTION MATRIX

Agent phải lập bảng:

| **Conflict ID** | **Area**                         | **TECH Source-of-truth** | **Current Implementation / Legacy State** | **Conflict Description** | **Risk** | **P2 Blocker** | **Recommended Handling** |
|-----------------|----------------------------------|--------------------------|-------------------------------------------|--------------------------|----------|----------------|--------------------------|
| P2-CONFLICT-001 | QC_PASS vs READY_FOR_PRODUCTION  |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-002 | Material Issue / Inventory Debit |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-003 | Material Receipt Double Debit    |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-004 | Production Snapshot              |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-005 | QC_PASS vs RELEASED              |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-006 | Warehouse Receipt                |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-007 | Public Trace                     |                          |                                           |                          |          |                |                          |
| P2-CONFLICT-008 | Recall / Sale Lock               |                          |                                           |                          |          |                |                          |

## 12. DOWNSTREAM IMPACT

Agent phải đánh giá PHASE 2 ảnh hưởng đến:

1.  **PHASE 3 — Commerce Runtime**
    Vì Commerce Sellable Gate phải dựa vào warehouse/finished goods/release/sale lock truth, không dùng Product Active thay sellable.

2.  **PHASE 4 — AI Advisor Runtime**
    Vì AI chỉ được tư vấn/chốt theo sellable runtime, không được bán sản phẩm bị hold/recall/out of stock.

3.  **PHASE 5 — Facebook Gateway**
    Vì Gateway không được public thông tin nội bộ và phải tôn trọng recall/sale lock.

4.  **PHASE 6 — Ads Measurement**
    Vì Ads không được scale SKU bị recall/sale lock/suppression hoặc không có verified operational truth.

5.  **PHASE 7 — MC AI Live**
    Vì Live không được giới thiệu/chốt SKU không sellable hoặc bị sale lock.

6.  **PHASE 8 — IVR**
    Vì IVR chỉ xác nhận Official Order hợp lệ, không xác nhận đơn có sản phẩm bị stop-sale.

7.  **PHASE 9 — Global Smoke / Release Gateway**
    Vì Operational Core thiếu evidence/smoke thì không Release Ready.

## 13. EVIDENCE REQUIRED

Agent phải gom evidence analysis gồm:

1.  Source-of-truth đã đọc.

2.  File/module Source / Raw đã inspect.

3.  File/module QC đã inspect.

4.  File/module Production đã inspect.

5.  File/module Material Issue / Receipt đã inspect.

6.  File/module Batch / Release đã inspect.

7.  File/module Warehouse / Inventory đã inspect.

8.  File/module Traceability / QR đã inspect.

9.  File/module Recall / Sale Lock đã inspect.

10. Migration/schema hiện có nếu có.

11. Seed hiện có nếu có.

12. Test hiện có nếu có.

13. Current implementation state matrix.

14. Gap matrix.

15. Conflict matrix.

16. Blocker register.

17. Downstream impact.

18. Git status/git diff chứng minh không sửa file nếu có git.

Ghi rõ:

**Evidence trong PROMPT-P2 là Evidence Submitted, chưa phải Evidence Accepted.**

## 14. SMOKE REQUIRED — CHỈ ĐỀ XUẤT, CHƯA VIẾT TEST

Agent phải đề xuất smoke cho phase implementation sau:

| **Smoke ID** | **Scenario**                                     | **Expected Result**                              |
|--------------|--------------------------------------------------|--------------------------------------------------|
| P2-SMOKE-001 | Raw lot QC_PASS nhưng chưa READY_FOR_PRODUCTION  | Không được issue                                 |
| P2-SMOKE-002 | Raw lot READY_FOR_PRODUCTION                     | Được phép issue nếu đủ guard                     |
| P2-SMOKE-003 | Material Issue retry cùng idempotency key        | Không double debit                               |
| P2-SMOKE-004 | Material Receipt sau issue                       | Không giảm tồn lần hai                           |
| P2-SMOKE-005 | Production Order tạo từ recipe                   | Snapshot formula/version/ingredient/quantity/UOM |
| P2-SMOKE-006 | Batch QC_PASS nhưng chưa RELEASED                | Warehouse không được nhận                        |
| P2-SMOKE-007 | Batch RELEASED                                   | Warehouse receipt được phép nếu đủ guard         |
| P2-SMOKE-008 | Warehouse Receipt retry                          | Không double credit                              |
| P2-SMOKE-009 | Inventory Ledger                                 | Append-only, không update/delete                 |
| P2-SMOKE-010 | QR VOID/FAILED                                   | Public Trace không valid                         |
| P2-SMOKE-011 | Public Trace response                            | Whitelist-only, không lộ private field           |
| P2-SMOKE-012 | Recall/Sale Lock active                          | Commerce/AI/Gateway/Ads/Live/IVR bị chặn         |
| P2-SMOKE-013 | Runtime unavailable                              | Fail-safe, không suy đoán                        |
| P2-SMOKE-014 | Evidence SUBMITTED dùng cho release/recall close | Không pass nếu cần ACCEPTED                      |

Không gọi smoke đề xuất này là Global Smoke Pass.

## 15. EXECUTION STEPS

Agent phải làm theo thứ tự:

1.  Đọc TECH source-of-truth.

2.  Đọc PHASE 0 validation report.

3.  Đọc PHASE 1 smoke/evidence report.

4.  Inspect codebase thật.

5.  Tìm Source / Raw Material module.

6.  Tìm Raw Lot / QC / Readiness module.

7.  Tìm Production Order module.

8.  Tìm Material Request / Issue / Receipt module.

9.  Tìm Batch / QC / Release module.

10. Tìm Warehouse / Inventory module.

11. Tìm Traceability / QR module.

12. Tìm Recall / Sale Lock module.

13. Tìm audit/evidence/idempotency usage trong operational commands.

14. Tìm các chỗ QC_PASS đang được dùng.

15. Tìm các chỗ READY_FOR_PRODUCTION đang được dùng.

16. Tìm các chỗ RELEASED đang được dùng.

17. Tìm các chỗ Warehouse Receipt đang được dùng.

18. Tìm các chỗ Public Trace đang expose dữ liệu.

19. Tìm các chỗ Recall/Sale Lock đang chặn downstream.

20. Lập current implementation state.

21. Lập gap matrix.

22. Lập conflict matrix.

23. Lập blocker register.

24. Lập downstream impact.

25. Lập smoke required.

26. Báo cáo đủ 14 mục.

27. Không sửa file.

## 16. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 16.1. Mục 1 — Tóm tắt

Ghi rõ:

1.  Prompt đã chạy: PROMPT-P2.

2.  Mode: ANALYSIS ONLY.

3.  Scope đã phân tích.

4.  Current implementation state tổng quan.

5.  P2 blocker chính.

6.  Gap chính.

7.  Downstream impact chính.

8.  Trạng thái cuối.

Không được ghi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

### 16.2. Mục 2 — File đã sửa

Bắt buộc ghi:

1.  Không sửa file.

2.  Không tạo file.

3.  Không tạo code.

4.  Không tạo migration.

5.  Không tạo seed.

6.  Không update database.

7.  Git status/git diff nếu có.

### 16.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  TECH-01.

2.  TECH-10.

3.  TECH-11.

4.  TECH-12.

5.  TECH-13.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  TECH Operational Core nếu có.

9.  Legacy docs nếu có đọc, ghi rõ LEGACY_REFERENCE_ONLY.

### 16.4. Mục 4 — Evidence đã dùng

Liệt kê:

| **Evidence ID** | **Type** | **Source** | **Domain** | **Status** | **Limitation** |
|-----------------|----------|------------|------------|------------|----------------|

Bắt buộc ghi:

**Evidence Submitted, not Evidence Accepted.**

### 16.5. Mục 5 — Lệnh đã chạy

Liệt kê:

1.  Lệnh inspect.

2.  Lệnh search.

3.  Lệnh git status/git diff nếu có.

4.  Lệnh build/test nếu có chạy ở chế độ không sửa file.

5.  Nếu không chạy lệnh nào, ghi lý do.

### 16.6. Mục 6 — Kết quả test

Ghi rõ:

1.  Test Operational Core hiện có.

2.  Test đã chạy nếu có.

3.  Test pass/fail nếu có.

4.  Test gap.

5.  Smoke required cho phase sau.

Không gọi test pass là Global Smoke Pass.

### 16.7. Mục 7 — Kết quả backend build

Ghi rõ:

1.  Có chạy backend build không.

2.  Kết quả nếu có.

3.  Nếu không chạy, lý do.

### 16.8. Mục 8 — Kết quả frontend build

Ghi rõ:

1.  Có chạy frontend build không.

2.  Có cần chạy không.

3.  Nếu không chạy, lý do.

### 16.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

1.  Có process nào mở không.

2.  Có server/test runner cần dừng không.

3.  Có file tạm không.

4.  Có artifact phát sinh không.

5.  Đã cleanup chưa.

### 16.10. Mục 10 — Cập nhật Markdown

Bắt buộc ghi:

1.  Không cập nhật Markdown.

2.  Không sửa tài liệu trong repo.

3.  Chỉ trả report trong response.

Nếu có cập nhật Markdown ngoài ý muốn thì FAIL.

### 16.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Bắt buộc ghi:

1.  Không tạo migration.

2.  Không chạy migration.

3.  Không update database.

4.  Chỉ đọc migration/schema hiện có nếu cần.

### 16.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có seed Source / Raw / Production / Inventory không.

2.  Seed có đúng source-of-truth không.

3.  Seed có hardcode sai không.

4.  Seed có tạo trạng thái production/release sai không.

5.  Seed có hỗ trợ smoke không.

6.  Không sửa seed.

### 16.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Raw Lot Readiness risk.

2.  Production Order Snapshot risk.

3.  Material Issue risk.

4.  Material Receipt risk.

5.  Inventory Ledger risk.

6.  Batch QC / Release risk.

7.  Warehouse Receipt risk.

8.  Traceability / Public Trace risk.

9.  Recall / Sale Lock risk.

10. Audit / Evidence / Idempotency risk.

11. Downstream PHASE 3/4/5 risk.

12. Release Gateway risk.

13. Global Gateway risk.

### 16.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Gap cần xử lý ở PHASE 2 Technical Design.

2.  Blocker cần clear trước implementation.

3.  Evidence cần chuẩn bị.

4.  Smoke cần viết/chạy.

5.  Prompt tiếp theo đề xuất.

6.  Điều kiện để được chuyển sang P2.1.

7.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2 FINAL STATUS: ANALYSIS REPORT ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 17. DONE GATE

PROMPT-P2 chỉ được xem là analysis done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PHASE 0 report.

3.  Đã đọc PHASE 1 report.

4.  Đã inspect codebase thật.

5.  Đã phân tích Source / Raw Material.

6.  Đã phân tích Raw Lot / QC / Readiness.

7.  Đã phân tích Production Order / Formula Snapshot.

8.  Đã phân tích Material Request / Issue / Receipt.

9.  Đã phân tích Batch / QC / Release.

10. Đã phân tích Warehouse / Inventory Ledger.

11. Đã phân tích Traceability / QR / Public Trace.

12. Đã phân tích Recall / Sale Lock.

13. Đã có current implementation state matrix.

14. Đã có gap matrix.

15. Đã có conflict matrix.

16. Đã có blocker register.

17. Đã có downstream impact.

18. Đã có smoke required.

19. Đã report đủ 14 mục.

20. Không sửa file.

21. Không tạo code.

22. Không tạo migration.

23. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

24. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**PHASE 2 ANALYSIS REPORT COMPLETED**

Không được gọi:

- PHASE 2 Complete.

- Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

- Gateway PASS.

## 18. FAIL GATE

PROMPT-P2 phải fail nếu:

1.  Agent sửa file.

2.  Agent tạo code.

3.  Agent tạo migration.

4.  Agent tạo seed.

5.  Agent update database.

6.  Agent không inspect codebase.

7.  Agent không đọc source-of-truth.

8.  Agent không phân tích QC_PASS vs READY_FOR_PRODUCTION.

9.  Agent gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

10. Agent bỏ qua Material Issue / Material Receipt double debit risk.

11. Agent bỏ qua Inventory Ledger append-only.

12. Agent gọi Batch QC_PASS là RELEASED.

13. Agent bỏ qua Warehouse Receipt gate.

14. Agent bỏ qua Public Trace whitelist-only.

15. Agent bỏ qua Recall / Sale Lock.

16. Agent không lập gap matrix.

17. Agent không lập conflict matrix.

18. Agent không lập blocker register.

19. Agent không report đủ 14 mục.

20. Agent tự đổi nghiệp vụ.

21. Agent hardcode Operational Core policy.

22. Agent gọi Analysis là Implementation Complete.

23. Agent gọi Release Ready / Production Ready / Go-live Approved.

24. Agent mở Global Gateway.

Nếu fail, agent phải ghi:

**PROMPT-P2 FAIL GATE — ANALYSIS NOT ACCEPTED**

## 19. DOWNSTREAM HANDOFF

### 19.1. Prompt tiếp theo nếu P2 analysis đạt Done Gate

Nếu PROMPT-P2 đạt Done Gate, prompt tiếp theo nên là:

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

**MODE: TECHNICAL DESIGN ONLY**

**V1.0 CLEAN FINAL**

P2.1 sẽ chuyển gap analysis thành:

1.  Workstream.

2.  Task breakdown.

3.  Dependency matrix.

4.  Evidence plan.

5.  Smoke plan.

6.  Implementation sequence.

P2.1 vẫn chưa nên sửa code nếu gap còn lớn.

### 19.2. Không tự chuyển mode

Agent không được tự chuyển từ:

**ANALYSIS ONLY**

sang:

**IMPLEMENTATION MODE**

Chỉ owner/dev lead mới được cho phép prompt tiếp theo.

## 20. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 20.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK ANALYSIS HANDOFF**

MODE:

**ANALYSIS ONLY**

PROMPT TIẾP THEO:

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

Bạn chỉ được phân tích.

Bạn không được sửa file.

Bạn không được tạo code.

Bạn không được tạo migration.

Bạn không được tạo seed.

Bạn không được update database.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

Bạn không được gọi Batch QC_PASS là RELEASED.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  TECH-01.

2.  TECH-10.

3.  TECH-11.

4.  TECH-12.

5.  TECH-13.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  TECH Operational Core nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict thì báo cáo, không sửa.

**B. Scope In**

Bạn phải phân tích:

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

**C. Scope Out**

Bạn không được:

1.  Sửa code.

2.  Tạo code.

3.  Tạo migration.

4.  Tạo seed.

5.  Tạo API.

6.  Tạo UI.

7.  Tạo production order.

8.  Issue material.

9.  Receipt material.

10. Release batch.

11. Confirm warehouse receipt.

12. Public trace dữ liệu.

13. Kích hoạt recall/sale lock.

14. Sửa Commerce / AI Advisor / Gateway.

15. Gọi PHASE 2 Complete.

16. Mở Global Gateway.

**D. Phân tích bắt buộc**

Bạn phải kiểm tra:

1.  RAW_LOT QC_PASS có bị dùng thay READY_FOR_PRODUCTION không.

2.  Raw lot chưa READY_FOR_PRODUCTION có bị issue không.

3.  Material Issue có phải điểm giảm tồn nguyên liệu chính không.

4.  Material Receipt có giảm tồn lần hai không.

5.  Production Order có snapshot formula kind/version/ingredient/quantity/UOM không.

6.  Batch QC_PASS có bị dùng thay RELEASED không.

7.  Warehouse chỉ nhận batch RELEASED không.

8.  Finished goods chỉ tăng tồn khi warehouse receipt confirmed không.

9.  Inventory Ledger có append-only không.

10. Public Trace có whitelist-only không.

11. QR VOID/FAILED có bị public-valid không.

12. Recall / Sale Lock có thắng Commerce / AI / Ads / Live / CRM / Gateway / IVR không.

**E. Báo cáo bắt buộc**

Bạn phải lập:

1.  Current Implementation State Matrix.

2.  Gap Analysis Matrix.

3.  Conflict Detection Matrix.

4.  P2 Blocker Register.

5.  Downstream Impact.

6.  Smoke Required.

7.  Report 14 mục.

**F. Report format 14 mục**

Bạn phải báo cáo đúng 14 mục:

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

**G. Done Gate**

Chỉ được coi là analysis done nếu:

1.  Đọc source-of-truth.

2.  Inspect codebase thật.

3.  Phân tích đầy đủ Source / Raw / QC / Production / Material / Batch / Warehouse / Inventory / Traceability / Recall.

4.  Có gap matrix.

5.  Có conflict matrix.

6.  Có blocker register.

7.  Có downstream impact.

8.  Có smoke required.

9.  Report đủ 14 mục.

10. Không sửa file.

11. Không tạo code.

12. Không tạo migration.

13. Global Gateway vẫn BLOCKED.

**H. Fail Gate**

Phải fail nếu:

1.  Sửa file.

2.  Tạo code.

3.  Tạo migration.

4.  Tạo seed.

5.  Gọi QC_PASS là READY_FOR_PRODUCTION.

6.  Gọi QC_PASS là RELEASED.

7.  Không phân tích Inventory Ledger append-only.

8.  Không phân tích Recall / Sale Lock.

9.  Không inspect codebase.

10. Không lập gap/conflict/blocker.

11. Gọi Release Ready / Production Ready / Go-live Approved.

12. Mở Global Gateway.

**I. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2 FINAL STATUS: ANALYSIS REPORT ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

**KẾT THÚC PROMPT**

## 21. FINAL STATUS

### 21.1. Trạng thái tài liệu

**PROMPT-P2 DOCUMENT STATUS: CLEAN FINAL**

### 21.2. Trạng thái thực thi

**ANALYSIS HANDOFF ONLY**

### 21.3. Phạm vi

**OPERATIONAL CORE ANALYSIS ONLY**

### 21.4. Trạng thái PHASE 2

**NOT PHASE 2 COMPLETE**

### 21.5. Trạng thái implementation

**NOT IMPLEMENTATION COMPLETE**

### 21.6. Trạng thái Completion

**NOT COMPLETION PASS**

### 21.7. Trạng thái release

**NOT RELEASE READY**

### 21.8. Trạng thái production

**NOT PRODUCTION READY**

### 21.9. Trạng thái go-live

**NOT GO-LIVE APPROVED**

### 21.10. Trạng thái Global Gateway

**GLOBAL GATEWAY: BLOCKED**
