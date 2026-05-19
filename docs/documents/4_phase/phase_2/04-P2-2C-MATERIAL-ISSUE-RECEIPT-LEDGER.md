**FILE:** **04-P2-2C-MATERIAL-ISSUE-RECEIPT-LEDGER.docx**

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

### 1.3. Mode

**MODE: LIMITED IMPLEMENTATION**

### 1.4. Prompt liền trước

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2C

PROMPT-P2.2C chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  P2.2A Implementation Report đã có.

4.  P2.2B Implementation Report đã có.

5.  Raw Lot Readiness Gate đã có nền.

6.  Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

7.  Production Order foundation đã có.

8.  Production Order snapshot formula / recipe / BOM / ingredient / quantity / UOM đã có nền.

9.  Production Order không phụ thuộc động vào recipe hiện tại.

10. Boundary **Material Issue là điểm giảm tồn nguyên liệu chính** đã được khóa.

11. Boundary **Material Receipt không được giảm tồn lần hai** đã được khóa.

12. Boundary **Inventory Ledger append-only** đã được khóa.

13. PHASE 0 Foundation có Actor / RBAC / Audit / Evidence / Idempotency foundation.

14. Owner/dev lead cho phép limited implementation.

15. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2D

Chỉ được chuyển sang **P2.2D** khi:

1.  Material Request foundation đã có nếu scope yêu cầu.

2.  Material Issue foundation đã có.

3.  Material Issue linked Production Order hợp lệ.

4.  Material Issue linked Raw Lot READY_FOR_PRODUCTION.

5.  Material Issue tạo raw inventory ledger debit.

6.  Material Issue retry không tạo double debit.

7.  Material Receipt / Workshop Receipt foundation đã có.

8.  Material Receipt chỉ xác nhận xưởng nhận nguyên liệu.

9.  Material Receipt không giảm tồn nguyên liệu lần hai.

10. Inventory Ledger foundation đã có append-only boundary.

11. Raw inventory balance projection foundation đã có nếu scope yêu cầu.

12. Actor / RBAC / Audit / Evidence / Idempotency hook đã có ở mức foundation nếu scope hỗ trợ.

13. P2.2C report đủ 14 mục.

14. Không có P2 blocker nghiêm trọng trong Material Issue / Receipt / Ledger.

15. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.2C.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2D — Batch / QC / Release / Warehouse / Inventory.

2.  P2.2E — Traceability / QR / Recall / Sale Lock.

3.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

4.  Không còn P0/P1/P2 blocker mở.

5.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2C thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.2C là prompt limited implementation thứ ba của PHASE 2.

Prompt này chỉ triển khai giới hạn phần nền của:

1.  Material Request foundation nếu thuộc scope.

2.  Material Issue foundation.

3.  Material Issue guard.

4.  Raw Inventory Ledger debit foundation.

5.  Material Receipt / Workshop Receipt foundation.

6.  No Double Debit boundary.

7.  Raw Inventory Ledger append-only foundation.

8.  Raw Inventory Balance Projection foundation nếu thuộc scope.

9.  Material Issue / Receipt actor / permission / audit / evidence / idempotency hooks ở mức foundation.

PROMPT-P2.2C không triển khai Batch, Batch QC, Batch Release, Warehouse Receipt, Finished Goods Ledger, Traceability, QR, Recall hoặc Sale Lock.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2C là cho phép dev/Codex/Copilot triển khai giới hạn:

1.  Material Request foundation.

2.  Material Issue entity/model/service foundation.

3.  Material Issue linked Production Order validation.

4.  Material Issue linked Raw Lot READY_FOR_PRODUCTION validation.

5.  Material Issue quantity / UOM validation.

6.  Raw Inventory Ledger debit foundation.

7.  Idempotency protection để không double debit.

8.  Material Receipt / Workshop Receipt foundation.

9.  Material Receipt no-second-debit boundary.

10. Raw Inventory Ledger append-only boundary.

11. Raw Inventory Balance Projection foundation nếu thuộc scope.

12. Material Issue / Receipt audit / evidence / idempotency hooks nếu foundation hỗ trợ.

13. Test/smoke tối thiểu cho issue / receipt / ledger.

14. Report implementation đầy đủ 14 mục.

### 2.4. Tuyên bố bắt buộc

Đây là prompt **LIMITED IMPLEMENTATION**.

Agent được phép sửa code **chỉ trong phạm vi Material Issue / Material Receipt / Raw Inventory Ledger foundation**.

Agent không được mở rộng sang:

1.  Production Batch.

2.  Batch Process.

3.  Batch QC.

4.  Batch Release.

5.  Warehouse Receipt.

6.  Finished Goods Ledger credit.

7.  Finished Goods Inventory.

8.  Traceability / Genealogy.

9.  QR / Public Trace.

10. Recall / Sale Lock.

11. Commerce Runtime.

12. AI Advisor.

13. Facebook Gateway.

14. Ads.

15. MC AI Live.

16. IVR.

17. Release Gateway.

## 3. MODE: LIMITED IMPLEMENTATION

### 3.1. Chế độ thực thi

**MODE: LIMITED IMPLEMENTATION**

Agent được phép:

1.  Inspect codebase thật.

2.  Đọc PROMPT-P2 Analysis Report.

3.  Đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đọc P2.2A Implementation Report.

5.  Đọc P2.2B Implementation Report.

6.  Đọc PHASE 0 Validation Report.

7.  Đọc PHASE 1 Smoke / Evidence / Implementation Report.

8.  Sửa file trong phạm vi Material Issue / Material Receipt / Raw Inventory Ledger foundation.

9.  Bổ sung hoặc chuẩn hóa Material Request model/service nếu cần.

10. Bổ sung hoặc chuẩn hóa Material Issue model/service/repository nếu cần.

11. Bổ sung hoặc chuẩn hóa Material Issue guard nếu cần.

12. Bổ sung hoặc chuẩn hóa Raw Inventory Ledger debit nếu cần.

13. Bổ sung hoặc chuẩn hóa Material Receipt / Workshop Receipt foundation nếu cần.

14. Bổ sung hoặc chuẩn hóa Inventory Ledger append-only boundary nếu cần.

15. Bổ sung hoặc chuẩn hóa balance projection foundation nếu thuộc scope.

16. Bổ sung validation no double debit.

17. Bổ sung test/smoke tối thiểu.

18. Chạy build/test/lint phù hợp.

19. Báo cáo đầy đủ 14 mục.

### 3.2. Điều kiện để được sửa file

Agent chỉ được sửa file khi đáp ứng đủ:

1.  Đã đọc PROMPT-P2 Analysis Report.

2.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đã đọc P2.2A Implementation Report.

4.  Đã đọc P2.2B Implementation Report.

5.  Đã đọc PHASE 0 Validation Report.

6.  Đã đọc PHASE 1 Smoke / Evidence Report.

7.  Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

8.  Đã inspect codebase thật.

9.  Đã xác định Raw Lot Readiness foundation đã có hoặc gap đã rõ.

10. Đã xác định Production Order / Snapshot foundation đã có hoặc gap đã rõ.

11. Đã xác định file nào thuộc scope P2.2C.

12. Đã xác định file nào không thuộc scope P2.2C.

13. Đã xác nhận không cần tự đổi nghiệp vụ.

14. Đã xác nhận không cần hardcode policy.

15. Đã xác nhận không triển khai Batch trong prompt này.

16. Đã xác nhận không triển khai Warehouse Receipt trong prompt này.

17. Đã xác nhận không triển khai Finished Goods Ledger trong prompt này.

18. Đã xác nhận không triển khai Traceability / Recall / Sale Lock trong prompt này.

Thiếu một trong các điều kiện trên thì agent phải dừng và báo:

**BLOCKED — LIMITED IMPLEMENTATION PRECONDITION NOT MET**

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PROMPT-P2.1 Technical Design Handoff**

3.  **PROMPT-P2.2A Implementation Report**

4.  **PROMPT-P2.2B Implementation Report**

5.  **PHASE 0 Validation Report**

6.  **PHASE 1 Smoke / Evidence / Implementation Report**

7.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

8.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

9.  **TECH-11 — Implementation Roadmap / Dev Phase Plan**

10. **TECH-12 — Phase Backlog Pack**

11. **TECH-13 — Codex / Copilot Dev Prompt Pack**

12. Material Request / Issue / Receipt / Ledger source-of-truth nếu đã có.

13. Raw Lot / Readiness source-of-truth từ P2.2A.

14. Production Order / Snapshot source-of-truth từ P2.2B.

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PROMPT-P2/P2.1/P2.2A/P2.2B là đầu vào analysis/design/implementation, không phải release evidence.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P2.1 đã cho phép.

9.  Nếu nghiệp vụ Material Issue / Receipt / Ledger chưa có source-of-truth thì dừng phần đó và báo owner decision required.

10. Evidence submitted chưa phải evidence accepted.

## 5. OBJECTIVE

### 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

1.  Material Request foundation nếu thuộc scope.

2.  Material Issue foundation.

3.  Material Issue command / service boundary.

4.  Material Issue linked Production Order validation.

5.  Material Issue linked Raw Lot validation.

6.  Material Issue READY_FOR_PRODUCTION guard.

7.  Material Issue quantity / UOM validation.

8.  Raw Inventory Ledger debit foundation.

9.  Material Issue idempotency protection.

10. Material Receipt / Workshop Receipt foundation.

11. Material Receipt no-second-debit boundary.

12. Inventory Ledger append-only foundation.

13. Raw Inventory Balance Projection foundation nếu thuộc scope.

14. Material Issue / Receipt actor / permission / audit / evidence / idempotency hooks ở mức foundation.

15. Test/smoke tối thiểu.

16. Report implementation đầy đủ 14 mục.

### 5.2. Mục tiêu nền tảng

P2.2C phải tạo nền để các prompt sau có thể tiếp tục:

1.  **PROMPT-P2.2D — Batch / QC / Release / Warehouse / Inventory**

2.  **PROMPT-P2.2E — Traceability / QR / Public Trace / Recall / Sale Lock**

3.  **PROMPT-P2.2F — PHASE 2 Smoke / Evidence / Implementation Report**

4.  **PHASE 3 — Commerce Runtime** sau khi PHASE 2 đủ evidence/smoke/owner review.

## 6. SCOPE IN

### 6.1. Material Request Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Material Request entity/model nếu source-of-truth yêu cầu.

2.  Linked Production Order.

3.  Requested raw material lines.

4.  Requested quantity.

5.  Requested UOM.

6.  Request status.

7.  Request actor/correlation/audit hook nếu foundation hỗ trợ.

8.  Request evidence hook nếu policy yêu cầu.

9.  Request validation foundation.

Material Request không đồng nghĩa:

1.  Raw lot đã issue.

2.  Inventory đã debit.

3.  Xưởng đã nhận nguyên liệu.

4.  Batch đã bắt đầu.

### 6.2. Material Issue Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Material Issue entity/model.

2.  Material Issue code.

3.  Linked Production Order.

4.  Linked Material Request nếu có.

5.  Issue lines.

6.  Linked Raw Lot.

7.  Raw material ID.

8.  Issue quantity.

9.  Issue UOM.

10. Issue status.

11. Issue actor/correlation/audit hook nếu foundation hỗ trợ.

12. Issue evidence hook nếu policy yêu cầu.

13. Issue idempotency hook nếu command có side effect.

14. Issue validation foundation.

### 6.3. Material Issue Guard

Material Issue phải kiểm tra:

1.  Production Order tồn tại.

2.  Production Order status hợp lệ.

3.  Production Order không cancelled/blocked.

4.  Production Order có snapshot hợp lệ.

5.  Raw lot tồn tại.

6.  Raw lot linked raw material hợp lệ.

7.  Raw lot READY_FOR_PRODUCTION.

8.  Raw lot không HOLD.

9.  Raw lot không REJECTED.

10. Raw lot không QUARANTINE.

11. Raw lot không CONSUMED.

12. Quantity issue hợp lệ.

13. UOM hợp lệ.

14. Quantity không vượt available quantity nếu balance foundation có.

15. Actor hợp lệ.

16. Permission hợp lệ.

17. Evidence accepted nếu policy yêu cầu.

18. Idempotency key nếu command có side effect và policy yêu cầu.

19. Audit event nếu issue xảy ra.

Nguyên tắc bắt buộc:

**Raw lot chỉ được issue khi READY_FOR_PRODUCTION.**

### 6.4. Raw Inventory Ledger Debit Foundation

Material Issue phải tạo raw inventory ledger debit.

Ledger debit foundation cần có:

1.  Ledger entry ID.

2.  Ledger type.

3.  Inventory item type = RAW_MATERIAL hoặc equivalent.

4.  Raw material ID.

5.  Raw lot ID.

6.  Production Order ID.

7.  Material Issue ID.

8.  Debit quantity.

9.  UOM.

10. Direction = DEBIT hoặc equivalent.

11. OccurredAt.

12. Actor/correlation.

13. Idempotency reference.

14. Audit reference nếu có.

15. Metadata an toàn.

Nguyên tắc bắt buộc:

**Material Issue là điểm giảm tồn nguyên liệu chính.**

### 6.5. Material Receipt / Workshop Receipt Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Material Receipt entity/model.

2.  Workshop Receipt entity/model nếu tách riêng.

3.  Linked Production Order.

4.  Linked Material Issue.

5.  Received by workshop actor/reference nếu có.

6.  Received quantity nếu policy yêu cầu.

7.  Received UOM nếu policy yêu cầu.

8.  Variance quantity nếu có.

9.  Receipt status.

10. Receipt actor/correlation/audit hook nếu foundation hỗ trợ.

11. Receipt evidence hook nếu policy yêu cầu.

12. Receipt idempotency hook nếu command có side effect.

13. Receipt validation foundation.

Material Receipt chỉ có nghĩa:

1.  Xưởng xác nhận đã nhận nguyên liệu.

2.  Có thể ghi nhận variance nếu có.

3.  Có thể làm đầu vào cho batch/process sau này.

Material Receipt không có nghĩa:

1.  Giảm tồn nguyên liệu.

2.  Tạo raw ledger debit lần hai.

3.  Tạo batch.

4.  Tạo thành phẩm.

5.  Tạo warehouse receipt.

Nguyên tắc bắt buộc:

**Material Receipt không được giảm tồn lần hai.**

### 6.6. No Double Debit Boundary

Agent phải bảo đảm:

1.  Material Issue tạo raw ledger debit.

2.  Material Receipt không tạo raw ledger debit.

3.  Material Receipt không sửa ledger debit cũ.

4.  Retry Material Issue không tạo debit trùng.

5.  Retry Material Receipt không tạo debit.

6.  Variance nếu cần không được xử lý như debit lần hai nếu chưa có adjustment flow.

7.  Adjustment flow nếu cần sẽ thuộc prompt khác, không tự triển khai trong P2.2C nếu chưa source-of-truth.

### 6.7. Inventory Ledger Append-only Foundation

Agent được phép triển khai hoặc chuẩn hóa Inventory Ledger append-only foundation ở mức raw material.

Inventory Ledger phải:

1.  Chỉ append entry.

2.  Không update entry nghiệp vụ.

3.  Không delete entry nghiệp vụ.

4.  Correction nếu có phải là entry mới.

5.  Có reference đến source command.

6.  Có idempotency reference.

7.  Có actor/correlation.

8.  Có audit hook nếu foundation hỗ trợ.

9.  Không chứa secret/private note không cần thiết.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 6.8. Raw Inventory Balance Projection Foundation

Nếu scope cho phép, agent có thể chuẩn hóa foundation cho raw inventory balance projection:

1.  Balance được tính từ ledger.

2.  Balance không phải source-of-truth chính.

3.  Ledger là source-of-truth cho inventory movement.

4.  Projection có thể cập nhật sau ledger entry.

5.  Projection stale phải được đánh dấu nếu có mechanism.

6.  Projection không được sửa ledger.

7.  Projection không được tạo side effect nghiệp vụ.

Nếu chưa có source-of-truth projection, agent chỉ tạo boundary/gap, không tự dựng phức tạp.

## 7. BOUNDARY BẮT BUỘC

### 7.1. Material Request Boundary

Material Request chỉ là yêu cầu cấp nguyên liệu.

Material Request không đồng nghĩa:

1.  Nguyên liệu đã issue.

2.  Tồn kho đã giảm.

3.  Xưởng đã nhận.

4.  Batch đã bắt đầu.

### 7.2. Material Issue Boundary

Material Issue là nghiệp vụ cấp/xuất nguyên liệu cho sản xuất.

Material Issue phải:

1.  Linked Production Order.

2.  Linked Raw Lot READY_FOR_PRODUCTION.

3.  Có issue quantity/UOM.

4.  Tạo raw inventory ledger debit.

5.  Có idempotency chống retry trùng.

6.  Có audit.

7.  Không tạo batch.

8.  Không tạo warehouse receipt.

Nguyên tắc bắt buộc:

**Material Issue là điểm giảm tồn nguyên liệu chính.**

### 7.3. Material Receipt Boundary

Material Receipt / Workshop Receipt chỉ xác nhận xưởng nhận nguyên liệu.

Material Receipt không được:

1.  Giảm tồn nguyên liệu lần hai.

2.  Tạo raw ledger debit lần hai.

3.  Sửa ledger debit của issue.

4.  Tự tạo inventory adjustment nếu chưa có adjustment flow.

5.  Tự tạo batch output.

6.  Tự tạo thành phẩm.

Nguyên tắc bắt buộc:

**Material Receipt không được giảm tồn lần hai.**

### 7.4. Inventory Ledger Boundary

Inventory Ledger là nguồn sự thật của movement tồn kho.

Ledger phải:

1.  Append-only.

2.  Có reference command.

3.  Có debit/credit direction.

4.  Có quantity/UOM.

5.  Có item/lot reference.

6.  Có actor/correlation.

7.  Có idempotency reference.

8.  Không update/delete bằng business flow.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 7.5. P2.2C vs P2.2D Boundary

P2.2C chỉ xử lý nguyên liệu/raw inventory side.

P2.2C không xử lý:

1.  Batch QC.

2.  Batch Release.

3.  Warehouse Receipt.

4.  Finished Goods Ledger credit.

5.  Finished Goods Inventory.

6.  Commerce stock.

Các phần này thuộc P2.2D và PHASE 3.

## 8. SCOPE OUT

PROMPT-P2.2C không được triển khai:

1.  Production Batch.

2.  Batch Process State.

3.  Batch QC.

4.  Batch Release.

5.  Warehouse Receipt.

6.  Finished Goods Ledger credit.

7.  Finished Goods Inventory.

8.  Traceability / Genealogy đầy đủ.

9.  QR / Public Trace.

10. Recall / Sale Lock.

11. Commerce Sellable Gate.

12. AI Advisor runtime.

13. Facebook Gateway.

14. Ads.

15. MC AI Live.

16. IVR.

17. Release Gateway.

18. Inventory adjustment full workflow nếu chưa source-of-truth.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

## 9. ALLOWED FILE CHANGE BOUNDARY

### 9.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

1.  Material Request model/entity/service/repository foundation nếu thuộc scope.

2.  Material Issue model/entity/service/repository foundation.

3.  Material Issue Guard service/policy.

4.  Material Issue Line model/entity.

5.  Raw Inventory Ledger model/entity/service foundation.

6.  Material Receipt / Workshop Receipt model/entity/service/repository foundation.

7.  No Double Debit validation.

8.  Inventory Ledger append-only boundary.

9.  Raw Inventory Balance Projection foundation nếu thuộc scope.

10. Migration Material Issue / Receipt / Raw Ledger nếu đã được scope cho phép.

11. Test/smoke Material Issue / Receipt / Raw Ledger.

12. Seed/dev fixture nếu đã được P2.1 cho phép và không chứa production secret.

### 9.2. File không được sửa

Agent không được sửa:

1.  Batch implementation file.

2.  Batch QC / Release file.

3.  Warehouse Receipt file.

4.  Finished Goods Ledger file.

5.  Traceability / QR file.

6.  Recall / Sale Lock file.

7.  Commerce file.

8.  AI Advisor file.

9.  Gateway file.

10. Ads / MC AI Live / IVR file.

11. Release Gateway file.

12. Production config/release flag.

13. Global Gateway config.

### 9.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

**BLOCKED — FILE BOUNDARY UNCLEAR**

## 10. IMPLEMENTATION REQUIREMENTS

### 10.1. Material Request Requirements

Material Request foundation tối thiểu cần có:

1.  materialRequestId.

2.  requestCode nếu có.

3.  linkedProductionOrderId.

4.  requestStatus.

5.  requestLines nếu scope yêu cầu.

6.  requestedRawMaterialId.

7.  requestedQuantity.

8.  requestedUom.

9.  requestedAt.

10. actor/correlation/audit linkage nếu command thuộc scope.

11. Không tạo ledger debit.

12. Không tạo material receipt.

### 10.2. Material Issue Requirements

Material Issue foundation tối thiểu cần có:

1.  materialIssueId.

2.  issueCode.

3.  linkedProductionOrderId.

4.  linkedMaterialRequestId nếu có.

5.  issueStatus.

6.  issueLines.

7.  rawMaterialId.

8.  rawLotId.

9.  issueQuantity.

10. issueUom.

11. issuedAt.

12. actor/correlation/audit linkage nếu command thuộc scope.

13. idempotency reference nếu command có side effect.

14. evidence reference nếu policy yêu cầu.

15. raw ledger debit reference.

### 10.3. Material Issue Line Requirements

Material Issue Line tối thiểu cần có:

1.  issueLineId.

2.  materialIssueId.

3.  productionOrderSnapshotLineRef nếu có.

4.  rawMaterialId.

5.  rawLotId.

6.  quantity.

7.  UOM.

8.  lineStatus nếu có.

9.  validation raw lot READY_FOR_PRODUCTION.

10. validation quantity/UOM.

11. no double issue with same idempotency context.

### 10.4. Raw Ledger Debit Requirements

Raw Ledger Debit tối thiểu cần có:

1.  ledgerEntryId.

2.  ledgerType = RAW_INVENTORY hoặc equivalent.

3.  movementType = MATERIAL_ISSUE hoặc equivalent.

4.  direction = DEBIT.

5.  rawMaterialId.

6.  rawLotId.

7.  quantity.

8.  UOM.

9.  productionOrderId.

10. materialIssueId.

11. issueLineId nếu có.

12. idempotencyKey/reference.

13. correlationId.

14. actorId.

15. occurredAt.

16. append-only boundary.

### 10.5. Material Receipt Requirements

Material Receipt / Workshop Receipt tối thiểu cần có:

1.  materialReceiptId.

2.  receiptCode.

3.  linkedProductionOrderId.

4.  linkedMaterialIssueId.

5.  receiptStatus.

6.  receivedQuantity nếu policy yêu cầu.

7.  receivedUom nếu policy yêu cầu.

8.  varianceQuantity nếu có.

9.  receivedBy nếu có.

10. receivedAt.

11. actor/correlation/audit linkage nếu command thuộc scope.

12. idempotency reference nếu command có side effect.

13. Không có ledger debit creation.

14. Không sửa ledger debit cũ.

### 10.6. Inventory Ledger Append-only Requirements

Inventory Ledger foundation phải bảo đảm:

1.  Service/repository nghiệp vụ chỉ có append/create.

2.  Không expose update ledger entry qua business service.

3.  Không expose delete ledger entry qua business service.

4.  Correction nếu cần là entry mới.

5.  Ledger entry có immutable business identity.

6.  Ledger entry có command reference.

7.  Ledger entry có idempotency reference.

8.  Ledger entry có audit/correlation.

9.  Test/smoke chứng minh không update/delete qua service.

## 11. DATABASE / MIGRATION / SEED RULE

### 11.1. Database / migration rule

P2.2C có thể cần migration cho Material Issue / Material Receipt / Raw Inventory Ledger foundation.

Agent chỉ được tạo migration khi:

1.  P2.1 đã xác định cần.

2.  Repo đang dùng migration chuẩn.

3.  Migration chỉ phục vụ Material Issue / Receipt / Raw Ledger foundation.

4.  Không tạo Batch table trong prompt này.

5.  Không tạo Warehouse Receipt table trong prompt này.

6.  Không tạo Finished Goods Ledger table trong prompt này.

7.  Không tạo Traceability / QR / Recall table trong prompt này.

8.  Không update database production.

9.  Không chạy production migration.

10. Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

**BLOCKED — MATERIAL ISSUE / RECEIPT / LEDGER SCHEMA APPROVAL REQUIRED**

### 11.2. Seed rule

P2.2C mặc định không seed production issue/receipt thật.

Nếu cần seed/dev fixture:

1.  Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

2.  Không seed secret.

3.  Không seed production material issue thật.

4.  Không seed inventory ledger side effect ngoài controlled fixture.

5.  Không seed material receipt làm double debit.

6.  Không seed batch/release/warehouse state.

7.  Seed phải idempotent nếu có.

8.  Report rõ trong mục 12.

Nếu chưa có source-of-truth Material Issue / Receipt / Ledger, không tạo seed.

## 12. TEST / SMOKE REQUIREMENTS

### 12.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

1.  Tạo Material Request linked Production Order hợp lệ.

2.  Material Request không tạo ledger debit.

3.  Material Issue linked Production Order hợp lệ.

4.  Material Issue linked raw lot READY_FOR_PRODUCTION.

5.  Material Issue với raw lot QC_PASS nhưng chưa READY_FOR_PRODUCTION bị reject.

6.  Material Issue với raw lot HOLD / REJECTED / QUARANTINE bị reject.

7.  Material Issue quantity vượt available bị reject nếu balance foundation có.

8.  Material Issue tạo raw ledger debit.

9.  Retry Material Issue same idempotency key/payload không double debit.

10. Same idempotency key different payload conflict nếu hook có.

11. Material Receipt linked Material Issue hợp lệ.

12. Material Receipt không tạo raw ledger debit lần hai.

13. Retry Material Receipt không tạo debit.

14. Inventory Ledger append-only, không update/delete qua service.

15. Issue/Receipt success/deny có audit event nếu hook hỗ trợ.

16. Evidence SUBMITTED không pass nếu command require ACCEPTED evidence.

### 12.2. Test không được phép

Không được viết test cho:

1.  Batch full.

2.  Batch QC / Release.

3.  Warehouse Receipt full.

4.  Finished Goods Ledger.

5.  Traceability / QR.

6.  Recall / Sale Lock.

7.  Commerce Sellable Gate.

8.  AI Advisor / Gateway / Ads / Live / IVR.

9.  Release Gateway.

### 12.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

| **Smoke ID**    | **Scenario**                                         | **Expected Result**                  |
|-----------------|------------------------------------------------------|--------------------------------------|
| P2.2C-SMOKE-001 | Material Request linked Production Order             | Request được tạo, không debit ledger |
| P2.2C-SMOKE-002 | Material Issue raw lot READY_FOR_PRODUCTION          | Issue được tạo                       |
| P2.2C-SMOKE-003 | Material Issue raw lot QC_PASS chưa READY            | Bị reject                            |
| P2.2C-SMOKE-004 | Material Issue raw lot HOLD/REJECTED/QUARANTINE      | Bị reject                            |
| P2.2C-SMOKE-005 | Material Issue thành công                            | Tạo raw ledger debit                 |
| P2.2C-SMOKE-006 | Retry Material Issue same key/payload                | Không double debit                   |
| P2.2C-SMOKE-007 | Same key different payload                           | Conflict nếu idempotency hook có     |
| P2.2C-SMOKE-008 | Material Receipt linked Issue                        | Receipt được tạo                     |
| P2.2C-SMOKE-009 | Material Receipt thành công                          | Không tạo raw ledger debit lần hai   |
| P2.2C-SMOKE-010 | Retry Material Receipt                               | Không tạo debit                      |
| P2.2C-SMOKE-011 | Ledger update/delete attempt qua service             | Không được phép                      |
| P2.2C-SMOKE-012 | Issue/Receipt success/deny                           | Có audit event nếu hook hỗ trợ       |
| P2.2C-SMOKE-013 | Evidence SUBMITTED dùng cho command require ACCEPTED | Không pass                           |
| P2.2C-SMOKE-014 | Material Receipt variance nếu có                     | Không xử lý như debit lần hai        |

Không gọi các smoke này là Global Smoke Pass.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

1.  Không hardcode Raw Lot QC_PASS = READY_FOR_PRODUCTION.

2.  Không issue raw lot chưa READY_FOR_PRODUCTION.

3.  Không issue raw lot HOLD / REJECTED / QUARANTINE.

4.  Không bỏ qua quantity/UOM validation.

5.  Không bỏ qua Production Order validation.

6.  Không bỏ qua Production Order snapshot.

7.  Không để Material Receipt giảm tồn lần hai.

8.  Không để Material Receipt sửa ledger debit cũ.

9.  Không để retry tạo double debit.

10. Không để same idempotency key different payload tiếp tục xử lý.

11. Không để Inventory Ledger update/delete qua business service.

12. Không tạo Batch trong P2.2C.

13. Không tạo Warehouse Receipt trong P2.2C.

14. Không tạo Finished Goods Ledger trong P2.2C.

15. Không tạo Traceability / Recall trong P2.2C.

16. Không sửa Commerce / AI / Gateway / Ads / Live / IVR.

17. Không cho SUBMITTED evidence pass accepted requirement nếu policy yêu cầu.

18. Không public private/internal field.

19. Không seed production issue/receipt tùy tiện.

20. Không bypass permission.

21. Không mở Global Gateway.

22. Không gọi P2.2C xong là PHASE 2 Complete.

23. Không gọi Release Ready / Production Ready / Go-live Approved.

## 14. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đọc P2.2A Implementation Report.

4.  Đọc P2.2B Implementation Report.

5.  Đọc PHASE 0 Validation Report.

6.  Đọc PHASE 1 Smoke / Evidence Report.

7.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

8.  Inspect codebase thật.

9.  Xác định Raw Lot Readiness foundation từ P2.2A.

10. Xác định Production Order / Snapshot foundation từ P2.2B.

11. Xác định Material Issue / Receipt / Ledger implementation hiện có.

12. Xác định file thuộc scope P2.2C.

13. Xác định file không được sửa.

14. Xác định có cần migration không.

15. Xác định có cần seed/dev fixture không.

16. Triển khai giới hạn Material Request foundation nếu thuộc scope.

17. Triển khai giới hạn Material Issue foundation.

18. Triển khai giới hạn Material Issue Guard.

19. Triển khai giới hạn Raw Inventory Ledger Debit foundation.

20. Triển khai giới hạn Material Receipt / Workshop Receipt foundation.

21. Triển khai No Double Debit boundary.

22. Triển khai Inventory Ledger append-only boundary.

23. Triển khai Raw Inventory Balance Projection foundation nếu thuộc scope.

24. Thêm/chỉnh test/smoke trong scope.

25. Chạy build/test/lint phù hợp.

26. Chạy migration validation nếu có migration.

27. Chạy seed validation nếu có seed.

28. Chạy git status/git diff.

29. Báo cáo đủ 14 mục.

## 15. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 15.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2C.

2.  Mode: LIMITED IMPLEMENTATION.

3.  Scope đã thực hiện.

4.  Material Request foundation đã triển khai gì.

5.  Material Issue foundation đã triển khai gì.

6.  Raw Inventory Ledger debit đã triển khai gì.

7.  Material Receipt / Workshop Receipt đã triển khai gì.

8.  No Double Debit boundary đã triển khai gì.

9.  Test/build đã chạy.

10. Gap còn lại.

11. Trạng thái cuối.

Không được ghi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

### 15.2. Mục 2 — File đã sửa

Liệt kê:

1.  File đã sửa.

2.  File đã tạo nếu có.

3.  File đã xóa nếu có.

4.  Migration đã tạo nếu có.

5.  Seed/dev fixture đã tạo/sửa nếu có.

6.  Lý do từng file thuộc scope P2.2C.

7.  Xác nhận không sửa ngoài scope.

8.  Git diff summary.

### 15.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PHASE 0 Validation Report.

6.  PHASE 1 Smoke / Evidence Report.

7.  TECH-01.

8.  TECH-10.

9.  TECH-11.

10. TECH-12.

11. TECH-13.

12. Material Issue / Receipt / Ledger source-of-truth nếu có.

### 15.4. Mục 4 — Evidence đã dùng

Liệt kê:

1.  Code inspection evidence.

2.  P2.2A Raw Lot Readiness evidence.

3.  P2.2B Production Order Snapshot evidence.

4.  Material Request implementation evidence.

5.  Material Issue implementation evidence.

6.  Raw Inventory Ledger implementation evidence.

7.  Material Receipt implementation evidence.

8.  No Double Debit evidence.

9.  Test evidence.

10. Build evidence.

11. Migration evidence nếu có.

12. Seed validation evidence nếu có.

13. Git diff evidence.

14. Gap evidence.

Phải ghi rõ:

**Evidence Submitted, not Evidence Accepted.**

### 15.5. Mục 5 — Lệnh đã chạy

Liệt kê:

1.  Lệnh inspect.

2.  Lệnh test.

3.  Lệnh build.

4.  Lệnh lint nếu có.

5.  Lệnh migration validation nếu có.

6.  Lệnh seed validation nếu có.

7.  Lệnh git status/git diff.

8.  Lệnh cleanup nếu có.

### 15.6. Mục 6 — Kết quả test

Ghi rõ:

1.  Test nào đã chạy.

2.  Test nào pass.

3.  Test nào fail.

4.  Test nào chưa có.

5.  Test nào cần bổ sung ở prompt sau.

Không gọi test pass là Global Smoke Pass.

### 15.7. Mục 7 — Kết quả backend build

Ghi rõ:

1.  Có chạy backend build không.

2.  Kết quả.

3.  Log tóm tắt.

4.  Nếu không chạy, lý do.

### 15.8. Mục 8 — Kết quả frontend build

Nếu scope không đụng frontend, ghi rõ:

1.  Không chạy frontend build vì scope P2.2C không sửa frontend.

2.  Hoặc có chạy nếu repo yêu cầu.

### 15.9. Mục 9 — Kết quả cleanup process

Ghi rõ:

1.  Có process nào mở không.

2.  Có server/test runner cần dừng không.

3.  Có file tạm không.

4.  Có artifact phát sinh không.

5.  Đã cleanup chưa.

### 15.10. Mục 10 — Cập nhật Markdown

Ghi rõ:

1.  Có sửa Markdown không.

2.  Nếu sửa, vì sao thuộc scope.

3.  Nếu không sửa, ghi “Không cập nhật Markdown”.

Mặc định không cần sửa Markdown trong P2.2C.

### 15.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có tạo migration không.

2.  Có chạy migration không.

3.  Có update database không.

4.  Migration có thuộc scope Material Issue / Receipt / Raw Ledger không.

5.  Nếu không, ghi rõ “Không áp dụng trong P2.2C”.

Không update database thật.

### 15.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có động tới seed/dev fixture không.

2.  Có validate seed không.

3.  Seed có liên quan Material Issue / Receipt / Ledger không.

4.  Seed có idempotent không.

5.  Seed có tự issue material thật không.

6.  Seed có tạo inventory side effect ngoài controlled fixture không.

7.  Seed có tạo material receipt double debit không.

8.  Seed có tạo batch/release/warehouse state không.

9.  Seed có chứa secret không.

10. Nếu không, ghi rõ “Không áp dụng trong P2.2C”.

### 15.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Material Request risk.

2.  Material Issue risk.

3.  Raw Lot readiness dependency risk.

4.  Production Order snapshot dependency risk.

5.  Raw Inventory Ledger debit risk.

6.  No Double Debit risk.

7.  Inventory Ledger append-only risk.

8.  Material Receipt / Workshop Receipt risk.

9.  Balance projection risk.

10. Audit hook risk.

11. Evidence policy risk.

12. Idempotency hook risk.

13. Batch / Warehouse chưa triển khai.

14. Traceability / Recall chưa triển khai.

15. Downstream PHASE 2 risk.

16. Global Gateway risk.

### 15.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Kết quả P2.2C.

2.  Việc còn lại cho P2.2D.

3.  Việc còn lại cho P2.2E.

4.  Việc còn lại cho P2.2F.

5.  Material Issue / Receipt / Ledger gap còn lại.

6.  Evidence cần owner review.

7.  Smoke cần bổ sung.

8.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2C FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2C MATERIAL ISSUE / MATERIAL RECEIPT / RAW INVENTORY LEDGER FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 16. DONE GATE

PROMPT-P2.2C chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PROMPT-P2 Analysis Report.

3.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đã đọc P2.2A Implementation Report.

5.  Đã đọc P2.2B Implementation Report.

6.  Đã đọc PHASE 0 Validation Report.

7.  Đã đọc PHASE 1 Smoke / Evidence Report.

8.  Đã inspect codebase thật.

9.  Đã giới hạn scope đúng P2.2C.

10. Đã triển khai hoặc chuẩn hóa Material Request foundation nếu thuộc scope.

11. Đã triển khai hoặc chuẩn hóa Material Issue foundation.

12. Đã triển khai hoặc chuẩn hóa Material Issue Guard.

13. Đã bảo đảm Material Issue linked Production Order hợp lệ.

14. Đã bảo đảm Material Issue linked Raw Lot READY_FOR_PRODUCTION.

15. Đã bảo đảm Material Issue tạo Raw Inventory Ledger debit.

16. Đã có idempotency protection để không double debit nếu foundation hỗ trợ.

17. Đã triển khai hoặc chuẩn hóa Material Receipt / Workshop Receipt foundation.

18. Đã bảo đảm Material Receipt không giảm tồn lần hai.

19. Đã triển khai Inventory Ledger append-only boundary.

20. Đã triển khai Raw Inventory Balance Projection foundation nếu thuộc scope.

21. Không sửa lan sang Batch / Warehouse / Traceability / Recall.

22. Không triển khai Finished Goods Ledger.

23. Không sửa Commerce / AI / Gateway.

24. Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

25. Có build/test result nếu chạy được.

26. Có git diff summary.

27. Có report đủ 14 mục.

28. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

29. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**P2.2C LIMITED IMPLEMENTATION COMPLETED FOR MATERIAL ISSUE / MATERIAL RECEIPT / RAW INVENTORY LEDGER FOUNDATION ONLY**

Không được gọi:

- PHASE 2 Complete.

- Full Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

## 17. FAIL GATE

PROMPT-P2.2C phải fail nếu:

1.  Agent sửa ngoài scope.

2.  Agent tự triển khai Batch đầy đủ.

3.  Agent tự triển khai Batch QC / Release.

4.  Agent tự triển khai Warehouse Receipt.

5.  Agent tự triển khai Finished Goods Ledger.

6.  Agent tự triển khai Traceability / QR / Recall / Sale Lock.

7.  Agent sửa Commerce / AI / Gateway không được phép.

8.  Agent hardcode Raw Lot QC_PASS = READY_FOR_PRODUCTION.

9.  Agent cho raw lot chưa READY_FOR_PRODUCTION được issue.

10. Agent issue raw lot HOLD / REJECTED / QUARANTINE.

11. Agent bỏ qua quantity/UOM validation.

12. Agent bỏ qua Production Order validation.

13. Agent bỏ qua Production Order snapshot.

14. Agent không tạo raw ledger debit khi Material Issue thành công.

15. Agent cho Material Receipt giảm tồn lần hai.

16. Agent cho Material Receipt sửa ledger debit cũ.

17. Agent cho retry tạo double debit.

18. Agent cho same idempotency key different payload tiếp tục xử lý.

19. Agent cho Inventory Ledger update/delete qua business service.

20. Agent cho SUBMITTED evidence pass accepted requirement.

21. Agent public private/internal field.

22. Agent tạo seed production issue/receipt thật.

23. Agent tạo seed gây inventory side effect ngoài scope.

24. Agent tạo seed chứa secret.

25. Agent đổi gateway/release flag.

26. Agent không chạy hoặc không báo test/build.

27. Agent không report đủ 14 mục.

28. Agent gọi Release Ready / Production Ready / Go-live Approved.

29. Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

**PROMPT-P2.2C FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED**

## 18. DOWNSTREAM HANDOFF

### 18.1. Sang PROMPT-P2.2D

Nếu P2.2C đạt Done Gate, bước tiếp theo là:

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

P2.2D chỉ được bắt đầu khi:

1.  Source / Raw / QC / Readiness foundation từ P2.2A đã có.

2.  Production Order / Snapshot foundation từ P2.2B đã có.

3.  Material Issue / Receipt / Raw Ledger foundation từ P2.2C đã có.

4.  Material Issue tạo raw ledger debit đúng.

5.  Material Receipt không tạo debit lần hai.

6.  Inventory Ledger append-only boundary đã có.

7.  P2.2C report đủ 14 mục.

8.  Owner/dev lead cho phép limited implementation tiếp theo.

### 18.2. Không tự chuyển prompt

Agent không được tự chuyển sang P2.2D.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 19.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

MODE:

**LIMITED IMPLEMENTATION**

PROMPT TIẾP THEO:

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

Bạn được phép sửa code **chỉ trong phạm vi Material Issue / Material Receipt / Raw Inventory Ledger foundation**.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được cho raw lot chưa READY_FOR_PRODUCTION được issue.

Bạn không được cho Material Receipt giảm tồn lần hai.

Bạn không được cho Inventory Ledger update/delete qua business service.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PHASE 0 Validation Report.

6.  PHASE 1 Smoke / Evidence Report.

7.  TECH-01.

8.  TECH-10.

9.  TECH-11.

10. TECH-12.

11. TECH-13.

12. Material Issue / Receipt / Ledger source-of-truth nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được triển khai:

1.  Material Request foundation nếu thuộc scope.

2.  Material Issue foundation.

3.  Material Issue command / service boundary.

4.  Material Issue linked Production Order validation.

5.  Material Issue linked Raw Lot validation.

6.  Material Issue READY_FOR_PRODUCTION guard.

7.  Material Issue quantity / UOM validation.

8.  Raw Inventory Ledger debit foundation.

9.  Material Issue idempotency protection.

10. Material Receipt / Workshop Receipt foundation.

11. Material Receipt no-second-debit boundary.

12. Inventory Ledger append-only foundation.

13. Raw Inventory Balance Projection foundation nếu thuộc scope.

14. Audit / Evidence / Idempotency hooks nếu foundation hỗ trợ.

15. Test/smoke tối thiểu.

16. Report 14 mục.

**C. Scope Out**

Bạn không được triển khai:

1.  Production Batch.

2.  Batch Process State.

3.  Batch QC.

4.  Batch Release.

5.  Warehouse Receipt.

6.  Finished Goods Ledger credit.

7.  Finished Goods Inventory.

8.  Traceability / QR / Public Trace.

9.  Recall / Sale Lock.

10. Commerce Runtime.

11. AI Advisor.

12. Facebook Gateway.

13. Ads / MC AI Live / IVR.

14. Release Gateway.

15. Inventory adjustment full workflow nếu chưa source-of-truth.

**D. Boundary bắt buộc**

Bạn phải bảo đảm:

1.  Material Issue là điểm giảm tồn nguyên liệu chính.

2.  Raw lot chỉ được issue khi READY_FOR_PRODUCTION.

3.  Material Issue tạo raw inventory ledger debit.

4.  Material Issue retry không double debit.

5.  Material Receipt chỉ xác nhận xưởng nhận nguyên liệu.

6.  Material Receipt không được giảm tồn lần hai.

7.  Material Receipt không được sửa ledger debit cũ.

8.  Inventory Ledger append-only.

9.  Balance là projection từ ledger nếu thuộc scope.

10. P2.2C không tạo Batch / Warehouse / Finished Goods Ledger.

**E. Allowed file change boundary**

Bạn chỉ được sửa file liên quan trực tiếp đến:

1.  Material Request model/entity/service/repository foundation nếu thuộc scope.

2.  Material Issue model/entity/service/repository foundation.

3.  Material Issue Guard service/policy.

4.  Material Issue Line model/entity.

5.  Raw Inventory Ledger model/entity/service foundation.

6.  Material Receipt / Workshop Receipt model/entity/service/repository foundation.

7.  No Double Debit validation.

8.  Inventory Ledger append-only boundary.

9.  Raw Inventory Balance Projection foundation nếu thuộc scope.

10. Migration Material Issue / Receipt / Raw Ledger nếu đã được scope cho phép.

11. Test/smoke Material Issue / Receipt / Raw Ledger.

12. Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

**F. Database / migration / seed**

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

1.  Thuộc Material Issue / Receipt / Raw Ledger foundation.

2.  Có migration mechanism rõ.

3.  Không tạo Batch table.

4.  Không tạo Warehouse Receipt table.

5.  Không tạo Finished Goods Ledger table.

6.  Không tạo Traceability / QR / Recall table.

7.  Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

**BLOCKED — MATERIAL ISSUE / RECEIPT / LEDGER SCHEMA APPROVAL REQUIRED**

Nếu cần seed/dev fixture:

1.  Không chứa secret.

2.  Không seed production material issue thật.

3.  Không tạo material receipt double debit.

4.  Không tạo batch/release/warehouse state.

5.  Phải idempotent nếu có seed validation.

6.  Report đầy đủ trong mục 12.

**G. Test/smoke tối thiểu**

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

1.  Material Request linked Production Order được tạo, không debit ledger.

2.  Material Issue raw lot READY_FOR_PRODUCTION được tạo.

3.  Material Issue raw lot QC_PASS chưa READY bị reject.

4.  Material Issue raw lot HOLD/REJECTED/QUARANTINE bị reject.

5.  Material Issue thành công tạo raw ledger debit.

6.  Retry Material Issue same key/payload không double debit.

7.  Same key different payload conflict nếu idempotency hook có.

8.  Material Receipt linked Issue được tạo.

9.  Material Receipt thành công không tạo raw ledger debit lần hai.

10. Retry Material Receipt không tạo debit.

11. Ledger update/delete attempt qua service bị chặn.

12. Issue/Receipt success/deny có audit event nếu hook hỗ trợ.

13. Evidence SUBMITTED dùng cho command require ACCEPTED không pass.

14. Material Receipt variance nếu có không xử lý như debit lần hai.

Không gọi test này là Global Smoke Pass.

**H. Lệnh và kiểm tra**

Bạn cần chạy phù hợp:

1.  Backend build nếu có thể.

2.  Test liên quan.

3.  Lint nếu project yêu cầu.

4.  Migration validation nếu có tạo migration.

5.  Seed validation nếu có seed.

6.  Git status.

7.  Git diff.

Không chạy migration production.

Không update database thật.

**I. Report format bắt buộc 14 mục**

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

**J. Done Gate**

Chỉ được coi là done nếu:

1.  Đúng scope P2.2C.

2.  Material Issue foundation có nền.

3.  Material Issue linked Production Order hợp lệ.

4.  Material Issue linked Raw Lot READY_FOR_PRODUCTION.

5.  Material Issue tạo raw ledger debit.

6.  Retry không double debit nếu idempotency foundation hỗ trợ.

7.  Material Receipt foundation có nền.

8.  Material Receipt không giảm tồn lần hai.

9.  Inventory Ledger append-only boundary có nền.

10. Không triển khai Batch / Warehouse / Finished Goods Ledger / Traceability / Recall.

11. Có test/build hoặc báo rõ lý do không chạy.

12. Có report 14 mục.

13. Có git diff summary.

14. Global Gateway vẫn BLOCKED.

**K. Fail Gate**

Phải fail nếu:

1.  Sửa ngoài scope.

2.  Hardcode policy.

3.  Raw lot chưa READY_FOR_PRODUCTION vẫn issue được.

4.  Material Issue không tạo raw ledger debit.

5.  Retry tạo double debit.

6.  Material Receipt giảm tồn lần hai.

7.  Material Receipt sửa ledger debit cũ.

8.  Ledger update/delete được qua business service.

9.  Tự triển khai Batch / Warehouse / Finished Goods Ledger / Traceability / Recall.

10. Sửa Commerce / AI / Gateway không được phép.

11. Mở Gateway.

12. Gọi Release Ready / Production Ready / Go-live Approved.

13. Không report đủ 14 mục.

**L. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2C FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2C MATERIAL ISSUE / MATERIAL RECEIPT / RAW INVENTORY LEDGER FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

**KẾT THÚC PROMPT**

## 20. FINAL STATUS

### 20.1. Trạng thái tài liệu

**PROMPT-P2.2C DOCUMENT STATUS: CLEAN FINAL**

### 20.2. Trạng thái thực thi

**LIMITED IMPLEMENTATION HANDOFF ONLY**

### 20.3. Phạm vi được phép

**MATERIAL ISSUE / MATERIAL RECEIPT / RAW INVENTORY LEDGER FOUNDATION ONLY**

### 20.4. Trạng thái PHASE 2

**NOT PHASE 2 COMPLETE**

### 20.5. Trạng thái implementation

**NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2**

### 20.6. Trạng thái Completion

**NOT COMPLETION PASS**

### 20.7. Trạng thái release

**NOT RELEASE READY**

### 20.8. Trạng thái production

**NOT PRODUCTION READY**

### 20.9. Trạng thái go-live

**NOT GO-LIVE APPROVED**

### 20.10. Trạng thái Global Gateway

**GLOBAL GATEWAY: BLOCKED**
