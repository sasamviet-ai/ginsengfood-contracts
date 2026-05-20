**FILE:** **05-P2-2D-BATCH-QC-RELEASE-WAREHOUSE-INVENTORY.docx**

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

### 1.3. Mode

**MODE: LIMITED IMPLEMENTATION**

### 1.4. Prompt liền trước

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2D

PROMPT-P2.2D chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  P2.2A Implementation Report đã có.

4.  P2.2B Implementation Report đã có.

5.  P2.2C Implementation Report đã có.

6.  Raw Lot Readiness Gate đã có nền.

7.  Production Order / Snapshot foundation đã có.

8.  Material Issue / Raw Inventory Ledger debit foundation đã có.

9.  Material Receipt / Workshop Receipt foundation đã có.

10. Material Receipt không giảm tồn lần hai đã được khóa.

11. Inventory Ledger append-only boundary đã có nền.

12. Boundary **Batch QC_PASS không đồng nghĩa Batch RELEASED** đã được khóa.

13. Boundary **Warehouse chỉ nhận Batch RELEASED** đã được khóa.

14. Boundary **Finished goods chỉ tăng tồn khi warehouse receipt confirmed** đã được khóa.

15. PHASE 0 Foundation có Actor / RBAC / Audit / Evidence / Idempotency foundation.

16. Owner/dev lead cho phép limited implementation.

17. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2E

Chỉ được chuyển sang **P2.2E** khi:

1.  Production Batch foundation đã có.

2.  Batch Process State foundation đã có.

3.  Batch linked Production Order hợp lệ.

4.  Batch linked Material Receipt / Workshop Receipt hợp lệ nếu policy yêu cầu.

5.  Batch QC foundation đã có.

6.  Batch QC_PASS không bị dùng thay Batch RELEASED.

7.  Batch Release Gate foundation đã có.

8.  Warehouse Receipt foundation đã có.

9.  Warehouse chỉ nhận Batch RELEASED.

10. Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

11. Warehouse Receipt retry không tạo double credit.

12. Finished Goods Inventory Balance Projection foundation đã có nếu scope yêu cầu.

13. Inventory Ledger append-only boundary vẫn giữ đúng.

14. Actor / RBAC / Audit / Evidence / Idempotency hook đã có ở mức foundation nếu scope hỗ trợ.

15. P2.2D report đủ 14 mục.

16. Không có P2 blocker nghiêm trọng trong Batch / QC / Release / Warehouse / Inventory.

17. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.2D.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2E — Traceability / QR / Public Trace / Recall / Sale Lock.

2.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

3.  Không còn P0/P1/P2 blocker mở.

4.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2D thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.2D là prompt limited implementation thứ tư của PHASE 2.

Prompt này chỉ triển khai giới hạn phần nền của:

1.  Production Batch foundation.

2.  Batch Process State foundation.

3.  Batch QC foundation.

4.  Batch Release Gate foundation.

5.  Warehouse Receipt foundation.

6.  Finished Goods Ledger credit foundation.

7.  Finished Goods Inventory Balance Projection foundation nếu thuộc scope.

8.  Warehouse Receipt idempotency / no double credit.

9.  Batch / Warehouse actor / permission / audit / evidence / idempotency hooks ở mức foundation.

PROMPT-P2.2D không triển khai Traceability / QR / Public Trace / Recall / Sale Lock đầy đủ.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2D là cho phép dev/Codex/Copilot triển khai giới hạn:

1.  Production Batch entity/model/service foundation.

2.  Batch linked Production Order validation.

3.  Batch linked Material Receipt / Workshop Receipt validation nếu policy yêu cầu.

4.  Batch process state lifecycle foundation.

5.  Batch QC record foundation.

6.  Batch QC result validation.

7.  Batch Release Gate foundation.

8.  Batch QC_PASS vs RELEASED boundary.

9.  Warehouse Receipt foundation.

10. Warehouse Receipt linked Batch RELEASED validation.

11. Finished Goods Ledger credit foundation.

12. Warehouse Receipt idempotency protection để không double credit.

13. Finished Goods Inventory Balance Projection foundation nếu thuộc scope.

14. Batch / QC / Release / Warehouse actor / permission / audit / evidence / idempotency hooks ở mức foundation.

15. Test/smoke tối thiểu cho Batch / QC / Release / Warehouse / Inventory.

16. Report implementation đầy đủ 14 mục.

### 2.4. Tuyên bố bắt buộc

Đây là prompt **LIMITED IMPLEMENTATION**.

Agent được phép sửa code **chỉ trong phạm vi Batch / QC / Release / Warehouse / Finished Goods Inventory foundation**.

Agent không được mở rộng sang:

1.  Traceability / Genealogy đầy đủ.

2.  QR / Public Trace.

3.  Recall / Sale Lock.

4.  Commerce Runtime.

5.  AI Advisor.

6.  Facebook Gateway.

7.  Ads.

8.  MC AI Live.

9.  IVR.

10. Release Gateway.

11. MISA integration đầy đủ.

12. Costing/accounting đầy đủ.

## 3. MODE: LIMITED IMPLEMENTATION

### 3.1. Chế độ thực thi

**MODE: LIMITED IMPLEMENTATION**

Agent được phép:

1.  Inspect codebase thật.

2.  Đọc PROMPT-P2 Analysis Report.

3.  Đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đọc P2.2A Implementation Report.

5.  Đọc P2.2B Implementation Report.

6.  Đọc P2.2C Implementation Report.

7.  Đọc PHASE 0 Validation Report.

8.  Đọc PHASE 1 Smoke / Evidence / Implementation Report.

9.  Sửa file trong phạm vi Batch / QC / Release / Warehouse / Finished Goods Inventory foundation.

10. Bổ sung hoặc chuẩn hóa Production Batch model/service/repository nếu cần.

11. Bổ sung hoặc chuẩn hóa Batch Process State nếu cần.

12. Bổ sung hoặc chuẩn hóa Batch QC model/service/repository nếu cần.

13. Bổ sung hoặc chuẩn hóa Batch Release Guard nếu cần.

14. Bổ sung hoặc chuẩn hóa Warehouse Receipt model/service/repository nếu cần.

15. Bổ sung hoặc chuẩn hóa Finished Goods Ledger credit nếu cần.

16. Bổ sung hoặc chuẩn hóa Finished Goods Balance Projection foundation nếu thuộc scope.

17. Bổ sung validation no double credit.

18. Bổ sung test/smoke tối thiểu.

19. Chạy build/test/lint phù hợp.

20. Báo cáo đầy đủ 14 mục.

### 3.2. Điều kiện để được sửa file

Agent chỉ được sửa file khi đáp ứng đủ:

1.  Đã đọc PROMPT-P2 Analysis Report.

2.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đã đọc P2.2A Implementation Report.

4.  Đã đọc P2.2B Implementation Report.

5.  Đã đọc P2.2C Implementation Report.

6.  Đã đọc PHASE 0 Validation Report.

7.  Đã đọc PHASE 1 Smoke / Evidence Report.

8.  Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

9.  Đã inspect codebase thật.

10. Đã xác định Source / Raw / QC / Readiness foundation đã có hoặc gap đã rõ.

11. Đã xác định Production Order / Snapshot foundation đã có hoặc gap đã rõ.

12. Đã xác định Material Issue / Receipt / Raw Ledger foundation đã có hoặc gap đã rõ.

13. Đã xác định file nào thuộc scope P2.2D.

14. Đã xác định file nào không thuộc scope P2.2D.

15. Đã xác nhận không cần tự đổi nghiệp vụ.

16. Đã xác nhận không cần hardcode policy.

17. Đã xác nhận không triển khai Traceability / QR trong prompt này.

18. Đã xác nhận không triển khai Recall / Sale Lock trong prompt này.

19. Đã xác nhận không triển khai Commerce Runtime trong prompt này.

Thiếu một trong các điều kiện trên thì agent phải dừng và báo:

**BLOCKED — LIMITED IMPLEMENTATION PRECONDITION NOT MET**

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PROMPT-P2.1 Technical Design Handoff**

3.  **PROMPT-P2.2A Implementation Report**

4.  **PROMPT-P2.2B Implementation Report**

5.  **PROMPT-P2.2C Implementation Report**

6.  **PHASE 0 Validation Report**

7.  **PHASE 1 Smoke / Evidence / Implementation Report**

8.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

9.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

10. **TECH-11 — Implementation Roadmap / Dev Phase Plan**

11. **TECH-12 — Phase Backlog Pack**

12. **TECH-13 — Codex / Copilot Dev Prompt Pack**

13. Batch / QC / Release / Warehouse / Inventory source-of-truth nếu đã có.

14. Production Order / Snapshot source-of-truth từ P2.2B.

15. Material Issue / Receipt / Ledger source-of-truth từ P2.2C.

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PROMPT-P2/P2.1/P2.2A/P2.2B/P2.2C là đầu vào analysis/design/implementation, không phải release evidence.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P2.1 đã cho phép.

9.  Nếu nghiệp vụ Batch / QC / Release / Warehouse / Inventory chưa có source-of-truth thì dừng phần đó và báo owner decision required.

10. Evidence submitted chưa phải evidence accepted.

## 5. OBJECTIVE

### 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

1.  Production Batch foundation.

2.  Batch Process State foundation.

3.  Batch linked Production Order validation.

4.  Batch linked Material Receipt / Workshop Receipt validation nếu policy yêu cầu.

5.  Batch output quantity / UOM foundation nếu thuộc scope.

6.  Batch QC foundation.

7.  Batch QC result / status validation.

8.  Batch Release Gate foundation.

9.  Batch QC_PASS vs RELEASED boundary.

10. Warehouse Receipt foundation.

11. Warehouse Receipt linked Batch RELEASED validation.

12. Finished Goods Ledger credit foundation.

13. Warehouse Receipt idempotency protection.

14. No Double Credit boundary.

15. Finished Goods Balance Projection foundation nếu thuộc scope.

16. Batch / Warehouse actor / permission / audit / evidence / idempotency hooks ở mức foundation.

17. Test/smoke tối thiểu.

18. Report implementation đầy đủ 14 mục.

### 5.2. Mục tiêu nền tảng

P2.2D phải tạo nền để các prompt sau có thể tiếp tục:

1.  **PROMPT-P2.2E — Traceability / QR / Public Trace / Recall / Sale Lock**

2.  **PROMPT-P2.2F — PHASE 2 Smoke / Evidence / Implementation Report**

3.  **PHASE 3 — Commerce Runtime** sau khi PHASE 2 đủ evidence/smoke/owner review.

## 6. SCOPE IN

### 6.1. Production Batch Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Production Batch entity/model.

2.  Batch code.

3.  Linked Production Order.

4.  Linked Material Receipt / Workshop Receipt nếu policy yêu cầu.

5.  Batch status.

6.  Batch process state.

7.  Batch planned quantity nếu có.

8.  Batch output quantity nếu có.

9.  Batch output UOM nếu có.

10. Batch actor/correlation/audit hook nếu foundation hỗ trợ.

11. Batch evidence hook nếu policy yêu cầu.

12. Batch idempotency hook nếu command có side effect.

13. Batch validation foundation.

Batch không đồng nghĩa:

1.  Batch QC_PASS.

2.  Batch RELEASED.

3.  Warehouse Receipt.

4.  Finished Goods Inventory.

5.  SKU Sellable.

### 6.2. Batch Process State Foundation

Batch process state foundation có thể gồm:

| **State**         | **Ý nghĩa**                                          |
|-------------------|------------------------------------------------------|
| CREATED           | Batch mới được tạo                                   |
| PREPARING         | Chuẩn bị sản xuất                                    |
| IN_PROCESS        | Đang sản xuất                                        |
| PROCESS_COMPLETED | Hoàn tất quá trình sản xuất, chưa đồng nghĩa QC_PASS |
| ON_HOLD           | Tạm giữ                                              |
| CANCELLED         | Hủy                                                  |
| BLOCKED           | Bị chặn bởi policy/guard                             |

Agent phải bảo đảm:

1.  PROCESS_COMPLETED không đồng nghĩa QC_PASS.

2.  PROCESS_COMPLETED không đồng nghĩa RELEASED.

3.  PROCESS_COMPLETED không đồng nghĩa warehouse receipt.

4.  PROCESS_COMPLETED không đồng nghĩa Finished Goods Available.

### 6.3. Batch QC Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Batch QC entity/model.

2.  Linked Batch.

3.  QC result.

4.  QC status.

5.  QC inspectedBy / actor linkage.

6.  QC inspectedAt.

7.  QC evidence reference nếu policy yêu cầu.

8.  QC reason/note nếu có.

9.  QC audit event nếu foundation hỗ trợ.

10. QC idempotency hook nếu command có side effect.

11. QC result validation.

Batch QC result tối thiểu có thể gồm:

| **QC Result**    | **Ý nghĩa**                       |
|------------------|-----------------------------------|
| PASS             | Batch đạt QC                      |
| FAIL             | Batch không đạt QC                |
| HOLD             | Cần giữ lại                       |
| RECHECK_REQUIRED | Cần kiểm tra lại                  |
| REJECTED         | Bị loại                           |
| NOT_APPLICABLE   | Không áp dụng nếu policy cho phép |

Agent phải bảo đảm:

**Batch QC_PASS không đồng nghĩa Batch RELEASED.**

### 6.4. Batch Release Gate Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Batch Release Guard service/policy.

2.  Release command foundation.

3.  Release status transition validation.

4.  Release precondition validation.

5.  Release actor/permission hook.

6.  Release audit hook.

7.  Release evidence hook nếu policy yêu cầu.

8.  Release idempotency hook nếu command có side effect.

9.  Release reason rule nếu cần.

10. Release fail-safe rule.

Release preconditions tối thiểu:

1.  Batch tồn tại.

2.  Batch linked Production Order hợp lệ.

3.  Batch process state hợp lệ.

4.  Batch QC result = PASS.

5.  Batch không HOLD.

6.  Batch không REJECTED.

7.  Batch không CANCELLED.

8.  Batch không BLOCKED.

9.  Batch output quantity/UOM hợp lệ nếu policy yêu cầu.

10. Required evidence accepted nếu policy yêu cầu.

11. Actor hợp lệ.

12. Permission hợp lệ.

13. Audit event nếu release xảy ra.

14. Idempotency nếu command có side effect.

### 6.5. Warehouse Receipt Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Warehouse Receipt entity/model.

2.  Warehouse Receipt code.

3.  Linked Batch.

4.  Linked Production Order nếu cần.

5.  Receipt quantity.

6.  Receipt UOM.

7.  Warehouse location nếu có.

8.  Receipt status.

9.  Receipt actor/correlation/audit hook nếu foundation hỗ trợ.

10. Receipt evidence hook nếu policy yêu cầu.

11. Receipt idempotency hook nếu command có side effect.

12. Receipt validation foundation.

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

### 6.6. Finished Goods Ledger Credit Foundation

Warehouse Receipt confirmed phải tạo Finished Goods Ledger credit.

Finished Goods Ledger Credit foundation cần có:

1.  Ledger entry ID.

2.  Ledger type.

3.  Inventory item type = FINISHED_GOODS hoặc equivalent.

4.  SKU ID.

5.  Batch ID.

6.  Warehouse Receipt ID.

7.  Credit quantity.

8.  UOM.

9.  Direction = CREDIT hoặc equivalent.

10. OccurredAt.

11. Actor/correlation.

12. Idempotency reference.

13. Audit reference nếu có.

14. Metadata an toàn.

Nguyên tắc bắt buộc:

**Finished goods chỉ tăng tồn khi warehouse receipt confirmed.**

### 6.7. No Double Credit Boundary

Agent phải bảo đảm:

1.  Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

2.  Retry Warehouse Receipt cùng idempotency key/payload không tạo credit trùng.

3.  Same idempotency key different payload phải conflict nếu hook có.

4.  Warehouse Receipt không sửa ledger credit cũ.

5.  Correction nếu cần phải qua adjustment/correction flow riêng.

6.  Adjustment flow không tự triển khai nếu chưa có source-of-truth.

### 6.8. Finished Goods Inventory Balance Projection Foundation

Nếu scope cho phép, agent có thể chuẩn hóa foundation cho finished goods balance projection:

1.  Balance được tính từ Finished Goods Ledger.

2.  Balance không phải source-of-truth chính.

3.  Ledger là source-of-truth cho movement.

4.  Projection có thể cập nhật sau ledger entry.

5.  Projection stale phải được đánh dấu nếu có mechanism.

6.  Projection không được sửa ledger.

7.  Projection không được tự set Sellable.

8.  Projection không được tự tạo Commerce stock truth nếu Commerce chưa tích hợp.

## 7. BOUNDARY BẮT BUỘC

### 7.1. Batch Boundary

Batch chỉ là đơn vị sản xuất.

Batch không đồng nghĩa:

1.  QC_PASS.

2.  RELEASED.

3.  Warehouse Receipt.

4.  Finished Goods Available.

5.  SKU Sellable.

6.  Public Trace valid.

### 7.2. Batch QC Boundary

Batch QC_PASS chỉ có nghĩa:

1.  Batch đạt kiểm tra chất lượng.

2.  Batch có thể được xem xét release.

Batch QC_PASS không có nghĩa:

1.  Batch RELEASED.

2.  Warehouse được nhận.

3.  Finished Goods Inventory tăng.

4.  SKU Sellable.

5.  Public Trace valid.

Nguyên tắc bắt buộc:

**Batch QC_PASS không đồng nghĩa Batch RELEASED.**

### 7.3. Batch Release Boundary

Batch RELEASED chỉ có nghĩa:

1.  Batch đã qua release gate.

2.  Batch có thể được warehouse nhận nếu warehouse guard pass.

3.  Batch đủ điều kiện đi tiếp sang warehouse receipt.

Batch RELEASED không có nghĩa:

1.  Warehouse đã nhận.

2.  Finished goods inventory đã tăng.

3.  SKU đã sellable.

4.  Commerce được bán nếu chưa có Sellable Gate.

### 7.4. Warehouse Receipt Boundary

Warehouse Receipt confirmed mới là điểm tăng tồn thành phẩm.

Warehouse Receipt phải:

1.  Linked Batch RELEASED.

2.  Ghi Finished Goods Ledger credit.

3.  Có idempotency chống double credit.

4.  Có audit.

5.  Có actor/correlation.

6.  Không tự mở Sellable Gate.

7.  Không tự public trace.

Nguyên tắc bắt buộc:

**Warehouse chỉ nhận Batch RELEASED.**
**Finished goods chỉ tăng tồn khi warehouse receipt confirmed.**

### 7.5. Finished Goods Ledger Boundary

Finished Goods Ledger phải:

1.  Append-only.

2.  Có credit khi warehouse receipt confirmed.

3.  Có reference batch/warehouse receipt.

4.  Có quantity/UOM.

5.  Có SKU reference.

6.  Có actor/correlation.

7.  Có idempotency reference.

8.  Không update/delete bằng business flow.

Nguyên tắc bắt buộc:

**Inventory Ledger append-only.**

### 7.6. P2.2D vs P2.2E Boundary

P2.2D chỉ xử lý Batch / Release / Warehouse / Finished Goods Inventory foundation.

P2.2D không xử lý:

1.  Full Traceability / Genealogy.

2.  QR generation/public trace.

3.  Recall case.

4.  Hold / Sale Lock.

5.  Downstream suppression.

Các phần này thuộc P2.2E.

### 7.7. P2.2D vs PHASE 3 Commerce Boundary

P2.2D tạo finished goods inventory truth.

P2.2D không tự quyết Sellable.

Sellable thuộc PHASE 3 Commerce Runtime, phải còn phụ thuộc:

1.  Product/SKU active.

2.  Listed price active.

3.  Finished goods available.

4.  No recall.

5.  No sale lock.

6.  No quality hold.

7.  Runtime policy.

8.  Channel policy.

## 8. SCOPE OUT

PROMPT-P2.2D không được triển khai:

1.  Traceability / Genealogy đầy đủ.

2.  QR / Public Trace.

3.  Recall / Sale Lock.

4.  Commerce Sellable Gate.

5.  Price / Program / Quote.

6.  Cart / Order.

7.  Payment.

8.  Shipping.

9.  AI Advisor runtime.

10. Facebook Gateway.

11. Ads.

12. MC AI Live.

13. IVR.

14. Release Gateway.

15. MISA integration đầy đủ.

16. Costing/accounting đầy đủ.

17. Inventory adjustment full workflow nếu chưa có source-of-truth.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

## 9. ALLOWED FILE CHANGE BOUNDARY

### 9.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

1.  Production Batch model/entity/service/repository foundation.

2.  Batch Process State model/service.

3.  Batch QC model/entity/service/repository foundation.

4.  Batch Release Guard service/policy.

5.  Warehouse Receipt model/entity/service/repository foundation.

6.  Finished Goods Ledger model/entity/service foundation.

7.  Finished Goods Balance Projection foundation nếu thuộc scope.

8.  No Double Credit validation.

9.  Inventory Ledger append-only boundary nếu dùng chung với P2.2C.

10. Migration Batch / QC / Release / Warehouse / Finished Goods Ledger nếu đã được scope cho phép.

11. Test/smoke Batch / QC / Release / Warehouse / Inventory.

12. Seed/dev fixture nếu đã được P2.1 cho phép và không chứa production secret.

### 9.2. File không được sửa

Agent không được sửa:

1.  Traceability / QR file.

2.  Recall / Sale Lock file.

3.  Commerce file.

4.  AI Advisor file.

5.  Gateway file.

6.  Ads / MC AI Live / IVR file.

7.  Release Gateway file.

8.  MISA integration file nếu không thuộc scope.

9.  Production config/release flag.

10. Global Gateway config.

### 9.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

**BLOCKED — FILE BOUNDARY UNCLEAR**

## 10. IMPLEMENTATION REQUIREMENTS

### 10.1. Production Batch Requirements

Production Batch foundation tối thiểu cần có:

1.  batchId.

2.  batchCode.

3.  linkedProductionOrderId.

4.  linkedMaterialReceiptId hoặc workshopReceiptRef nếu policy yêu cầu.

5.  batchStatus.

6.  processState.

7.  plannedQuantity nếu có.

8.  outputQuantity nếu có.

9.  outputUom nếu có.

10. createdAt.

11. actor/correlation/audit linkage nếu command thuộc scope.

12. idempotency reference nếu command có side effect.

13. evidence reference nếu policy yêu cầu.

14. Không có warehouse receipt effect.

15. Không có sellable flag.

### 10.2. Batch QC Requirements

Batch QC foundation tối thiểu cần có:

1.  batchQcId.

2.  linkedBatchId.

3.  qcResult.

4.  qcStatus.

5.  inspectedBy hoặc actor linkage.

6.  inspectedAt.

7.  evidence reference nếu policy yêu cầu.

8.  reason/note nếu có.

9.  audit linkage nếu foundation hỗ trợ.

10. idempotency reference nếu command có side effect.

11. Không tự set Batch RELEASED khi QC_PASS nếu rule yêu cầu tách release.

### 10.3. Batch Release Requirements

Batch Release foundation tối thiểu cần có:

1.  releaseId hoặc release record nếu source-of-truth yêu cầu.

2.  linkedBatchId.

3.  releaseStatus.

4.  releasedBy hoặc actor linkage.

5.  releasedAt.

6.  releaseReason nếu có.

7.  evidence reference nếu policy yêu cầu.

8.  audit linkage nếu foundation hỗ trợ.

9.  idempotency reference nếu command có side effect.

10. Release guard kiểm QC_PASS.

11. Release guard kiểm not HOLD / not REJECTED / not CANCELLED / not BLOCKED.

12. Release không tạo warehouse receipt.

13. Release không tạo finished goods ledger credit.

### 10.4. Warehouse Receipt Requirements

Warehouse Receipt foundation tối thiểu cần có:

1.  warehouseReceiptId.

2.  receiptCode.

3.  linkedBatchId.

4.  linkedProductionOrderId nếu cần.

5.  receivedQuantity.

6.  receivedUom.

7.  warehouseLocationId nếu có.

8.  receiptStatus.

9.  confirmedAt.

10. confirmedBy hoặc actor linkage.

11. audit linkage nếu foundation hỗ trợ.

12. idempotency reference nếu command có side effect.

13. finishedGoodsLedgerCreditRef khi confirmed.

14. Không tự set sellable.

15. Không tự public trace.

### 10.5. Finished Goods Ledger Credit Requirements

Finished Goods Ledger Credit tối thiểu cần có:

1.  ledgerEntryId.

2.  ledgerType = FINISHED_GOODS hoặc equivalent.

3.  movementType = WAREHOUSE_RECEIPT hoặc equivalent.

4.  direction = CREDIT.

5.  skuId.

6.  batchId.

7.  warehouseReceiptId.

8.  quantity.

9.  UOM.

10. locationId nếu có.

11. idempotencyKey/reference.

12. correlationId.

13. actorId.

14. occurredAt.

15. append-only boundary.

### 10.6. Inventory Balance Projection Requirements

Finished Goods Balance Projection foundation nếu thuộc scope cần bảo đảm:

1.  Balance derived from ledger.

2.  Balance grouped by SKU nếu cần.

3.  Balance grouped by batch/location nếu cần.

4.  Projection not source-of-truth.

5.  Projection update does not mutate ledger.

6.  Projection stale indicator nếu có mechanism.

7.  Projection does not equal Sellable.

8.  Projection does not bypass Recall/Sale Lock.

## 11. DATABASE / MIGRATION / SEED RULE

### 11.1. Database / migration rule

P2.2D có thể cần migration cho Batch / QC / Release / Warehouse / Finished Goods Ledger foundation.

Agent chỉ được tạo migration khi:

1.  P2.1 đã xác định cần.

2.  Repo đang dùng migration chuẩn.

3.  Migration chỉ phục vụ Batch / QC / Release / Warehouse / Finished Goods Ledger foundation.

4.  Không tạo Traceability / QR / Recall table trong prompt này.

5.  Không tạo Commerce table trong prompt này.

6.  Không tạo Order/Payment table trong prompt này.

7.  Không update database production.

8.  Không chạy production migration.

9.  Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

**BLOCKED — BATCH / RELEASE / WAREHOUSE / INVENTORY SCHEMA APPROVAL REQUIRED**

### 11.2. Seed rule

P2.2D mặc định không seed production batch/warehouse receipt thật.

Nếu cần seed/dev fixture:

1.  Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

2.  Không seed secret.

3.  Không seed production batch thật.

4.  Không seed warehouse receipt thật.

5.  Không seed finished goods ledger side effect ngoài controlled fixture.

6.  Không seed sellable status.

7.  Không seed public trace.

8.  Seed phải idempotent nếu có.

9.  Report rõ trong mục 12.

Nếu chưa có source-of-truth Batch / Release / Warehouse / Inventory, không tạo seed.

## 12. TEST / SMOKE REQUIREMENTS

### 12.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

1.  Tạo Batch linked Production Order hợp lệ.

2.  Batch process state transition hợp lệ.

3.  PROCESS_COMPLETED không tự QC_PASS.

4.  Batch QC PASS được ghi nhận.

5.  Batch QC PASS không tự RELEASED.

6.  Batch QC FAIL/HOLD/REJECTED không release được.

7.  Batch Release chỉ khi QC_PASS và guard pass.

8.  Warehouse Receipt với Batch QC_PASS nhưng chưa RELEASED bị reject.

9.  Warehouse Receipt với Batch RELEASED được allow nếu guard pass.

10. Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

11. Retry Warehouse Receipt same idempotency key/payload không double credit.

12. Same idempotency key different payload conflict nếu hook có.

13. Finished Goods Ledger append-only, không update/delete qua service.

14. Balance projection từ ledger nếu thuộc scope.

15. Warehouse Receipt không tự set Sellable.

16. Warehouse Receipt success/deny có audit event nếu hook hỗ trợ.

17. Evidence SUBMITTED không pass nếu command require ACCEPTED evidence.

### 12.2. Test không được phép

Không được viết test cho:

1.  Full Traceability / Genealogy.

2.  QR / Public Trace.

3.  Recall / Sale Lock.

4.  Commerce Sellable Gate.

5.  Price / Quote / Order / Payment.

6.  AI Advisor / Gateway / Ads / Live / IVR.

7.  Release Gateway.

8.  MISA integration đầy đủ.

9.  Costing/accounting đầy đủ.

### 12.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

| **Smoke ID**    | **Scenario**                                                   | **Expected Result**                    |
|-----------------|----------------------------------------------------------------|----------------------------------------|
| P2.2D-SMOKE-001 | Tạo Batch linked Production Order                              | Batch được tạo                         |
| P2.2D-SMOKE-002 | PROCESS_COMPLETED                                              | Không tự QC_PASS, không RELEASED       |
| P2.2D-SMOKE-003 | Batch QC PASS                                                  | QC record PASS, batch chưa tự RELEASED |
| P2.2D-SMOKE-004 | Batch QC FAIL/HOLD/REJECTED                                    | Không release được                     |
| P2.2D-SMOKE-005 | Batch Release khi QC_PASS + guard pass                         | Batch RELEASED                         |
| P2.2D-SMOKE-006 | Warehouse Receipt Batch QC_PASS chưa RELEASED                  | Bị reject                              |
| P2.2D-SMOKE-007 | Warehouse Receipt Batch RELEASED                               | Receipt được confirm                   |
| P2.2D-SMOKE-008 | Warehouse Receipt confirmed                                    | Tạo Finished Goods Ledger credit       |
| P2.2D-SMOKE-009 | Retry Warehouse Receipt same key/payload                       | Không double credit                    |
| P2.2D-SMOKE-010 | Same key different payload                                     | Conflict nếu idempotency hook có       |
| P2.2D-SMOKE-011 | Finished Goods Ledger update/delete attempt qua service        | Không được phép                        |
| P2.2D-SMOKE-012 | Balance projection từ ledger                                   | Projection khớp ledger                 |
| P2.2D-SMOKE-013 | Warehouse Receipt confirmed                                    | Không tự set Sellable                  |
| P2.2D-SMOKE-014 | Evidence SUBMITTED dùng cho release/warehouse require ACCEPTED | Không pass                             |
| P2.2D-SMOKE-015 | Release/Warehouse success/deny                                 | Có audit event nếu hook hỗ trợ         |

Không gọi các smoke này là Global Smoke Pass.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

1.  Không hardcode Batch QC_PASS = RELEASED.

2.  Không cho Warehouse nhận Batch chưa RELEASED.

3.  Không cho Warehouse Receipt tạo credit khi batch chưa RELEASED.

4.  Không để Warehouse Receipt retry tạo double credit.

5.  Không để same idempotency key different payload tiếp tục xử lý.

6.  Không để Finished Goods Ledger update/delete qua business service.

7.  Không để PROCESS_COMPLETED tự QC_PASS / RELEASED.

8.  Không để Warehouse Receipt tự set Sellable.

9.  Không để Balance Projection bypass ledger.

10. Không để Balance Projection tự quyết Commerce available stock.

11. Không tạo Traceability / QR trong P2.2D.

12. Không tạo Recall / Sale Lock trong P2.2D.

13. Không sửa Commerce / AI / Gateway / Ads / Live / IVR.

14. Không cho SUBMITTED evidence pass accepted requirement nếu policy yêu cầu.

15. Không public private/internal field.

16. Không seed production batch/warehouse receipt tùy tiện.

17. Không bypass permission.

18. Không mở Global Gateway.

19. Không gọi P2.2D xong là PHASE 2 Complete.

20. Không gọi Release Ready / Production Ready / Go-live Approved.

## 14. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đọc P2.2A Implementation Report.

4.  Đọc P2.2B Implementation Report.

5.  Đọc P2.2C Implementation Report.

6.  Đọc PHASE 0 Validation Report.

7.  Đọc PHASE 1 Smoke / Evidence Report.

8.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

9.  Inspect codebase thật.

10. Xác định Production Order / Snapshot foundation từ P2.2B.

11. Xác định Material Issue / Receipt / Raw Ledger foundation từ P2.2C.

12. Xác định Batch / QC / Release / Warehouse / Inventory implementation hiện có.

13. Xác định file thuộc scope P2.2D.

14. Xác định file không được sửa.

15. Xác định có cần migration không.

16. Xác định có cần seed/dev fixture không.

17. Triển khai giới hạn Production Batch foundation.

18. Triển khai giới hạn Batch Process State foundation.

19. Triển khai giới hạn Batch QC foundation.

20. Triển khai giới hạn Batch Release Gate foundation.

21. Triển khai giới hạn Warehouse Receipt foundation.

22. Triển khai giới hạn Finished Goods Ledger Credit foundation.

23. Triển khai No Double Credit boundary.

24. Triển khai Finished Goods Balance Projection foundation nếu thuộc scope.

25. Thêm/chỉnh test/smoke trong scope.

26. Chạy build/test/lint phù hợp.

27. Chạy migration validation nếu có migration.

28. Chạy seed validation nếu có seed.

29. Chạy git status/git diff.

30. Báo cáo đủ 14 mục.

## 15. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 15.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2D.

2.  Mode: LIMITED IMPLEMENTATION.

3.  Scope đã thực hiện.

4.  Production Batch foundation đã triển khai gì.

5.  Batch QC foundation đã triển khai gì.

6.  Batch Release Gate đã triển khai gì.

7.  Warehouse Receipt foundation đã triển khai gì.

8.  Finished Goods Ledger credit đã triển khai gì.

9.  No Double Credit boundary đã triển khai gì.

10. Test/build đã chạy.

11. Gap còn lại.

12. Trạng thái cuối.

Không được ghi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

### 15.2. Mục 2 — File đã sửa

Liệt kê:

1.  File đã sửa.

2.  File đã tạo nếu có.

3.  File đã xóa nếu có.

4.  Migration đã tạo nếu có.

5.  Seed/dev fixture đã tạo/sửa nếu có.

6.  Lý do từng file thuộc scope P2.2D.

7.  Xác nhận không sửa ngoài scope.

8.  Git diff summary.

### 15.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PROMPT-P2.2C Implementation Report.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  TECH-01.

9.  TECH-10.

10. TECH-11.

11. TECH-12.

12. TECH-13.

13. Batch / QC / Release / Warehouse / Inventory source-of-truth nếu có.

### 15.4. Mục 4 — Evidence đã dùng

Liệt kê:

1.  Code inspection evidence.

2.  P2.2B Production Order Snapshot evidence.

3.  P2.2C Material Issue / Receipt / Raw Ledger evidence.

4.  Batch implementation evidence.

5.  Batch QC implementation evidence.

6.  Batch Release implementation evidence.

7.  Warehouse Receipt implementation evidence.

8.  Finished Goods Ledger implementation evidence.

9.  No Double Credit evidence.

10. Test evidence.

11. Build evidence.

12. Migration evidence nếu có.

13. Seed validation evidence nếu có.

14. Git diff evidence.

15. Gap evidence.

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

1.  Không chạy frontend build vì scope P2.2D không sửa frontend.

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

Mặc định không cần sửa Markdown trong P2.2D.

### 15.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có tạo migration không.

2.  Có chạy migration không.

3.  Có update database không.

4.  Migration có thuộc scope Batch / QC / Release / Warehouse / Finished Goods Ledger không.

5.  Nếu không, ghi rõ “Không áp dụng trong P2.2D”.

Không update database thật.

### 15.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có động tới seed/dev fixture không.

2.  Có validate seed không.

3.  Seed có liên quan Batch / QC / Release / Warehouse / Inventory không.

4.  Seed có idempotent không.

5.  Seed có tự tạo production batch thật không.

6.  Seed có tự warehouse receipt thật không.

7.  Seed có tạo finished goods ledger side effect ngoài controlled fixture không.

8.  Seed có tự set sellable không.

9.  Seed có tự public trace không.

10. Seed có chứa secret không.

11. Nếu không, ghi rõ “Không áp dụng trong P2.2D”.

### 15.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Production Batch risk.

2.  Batch Process State risk.

3.  Batch QC risk.

4.  Batch Release risk.

5.  Warehouse Receipt risk.

6.  Finished Goods Ledger credit risk.

7.  No Double Credit risk.

8.  Inventory Ledger append-only risk.

9.  Balance Projection risk.

10. Evidence policy risk.

11. Audit hook risk.

12. Idempotency hook risk.

13. Traceability / QR chưa triển khai.

14. Recall / Sale Lock chưa triển khai.

15. Commerce Sellable Gate chưa triển khai.

16. Downstream PHASE 3 risk.

17. Global Gateway risk.

### 15.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Kết quả P2.2D.

2.  Việc còn lại cho P2.2E.

3.  Việc còn lại cho P2.2F.

4.  Batch / QC / Release / Warehouse / Inventory gap còn lại.

5.  Evidence cần owner review.

6.  Smoke cần bổ sung.

7.  Handoff rõ cho Commerce PHASE 3 sau này: Finished Goods Inventory không tự Sellable.

8.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2D FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2D BATCH / QC / RELEASE / WAREHOUSE / FINISHED GOODS INVENTORY FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 16. DONE GATE

PROMPT-P2.2D chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PROMPT-P2 Analysis Report.

3.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đã đọc P2.2A Implementation Report.

5.  Đã đọc P2.2B Implementation Report.

6.  Đã đọc P2.2C Implementation Report.

7.  Đã đọc PHASE 0 Validation Report.

8.  Đã đọc PHASE 1 Smoke / Evidence Report.

9.  Đã inspect codebase thật.

10. Đã giới hạn scope đúng P2.2D.

11. Đã triển khai hoặc chuẩn hóa Production Batch foundation.

12. Đã triển khai hoặc chuẩn hóa Batch Process State foundation.

13. Đã triển khai hoặc chuẩn hóa Batch QC foundation.

14. Đã bảo đảm Batch QC_PASS không đồng nghĩa Batch RELEASED.

15. Đã triển khai hoặc chuẩn hóa Batch Release Gate foundation.

16. Đã triển khai hoặc chuẩn hóa Warehouse Receipt foundation.

17. Đã bảo đảm Warehouse chỉ nhận Batch RELEASED.

18. Đã bảo đảm Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

19. Đã có idempotency protection để không double credit nếu foundation hỗ trợ.

20. Đã triển khai Inventory Ledger append-only boundary.

21. Đã triển khai Finished Goods Balance Projection foundation nếu thuộc scope.

22. Không sửa lan sang Traceability / QR / Recall / Sale Lock.

23. Không triển khai Commerce Sellable Gate.

24. Không sửa AI / Gateway / Ads / Live / IVR.

25. Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

26. Có build/test result nếu chạy được.

27. Có git diff summary.

28. Có report đủ 14 mục.

29. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

30. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**P2.2D LIMITED IMPLEMENTATION COMPLETED FOR BATCH / QC / RELEASE / WAREHOUSE / FINISHED GOODS INVENTORY FOUNDATION ONLY**

Không được gọi:

- PHASE 2 Complete.

- Full Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

## 17. FAIL GATE

PROMPT-P2.2D phải fail nếu:

1.  Agent sửa ngoài scope.

2.  Agent tự triển khai Traceability / QR / Public Trace đầy đủ.

3.  Agent tự triển khai Recall / Sale Lock đầy đủ.

4.  Agent tự triển khai Commerce Sellable Gate.

5.  Agent sửa Commerce / AI / Gateway không được phép.

6.  Agent hardcode Batch QC_PASS = RELEASED.

7.  Agent cho Warehouse nhận Batch chưa RELEASED.

8.  Agent cho Warehouse Receipt tạo credit khi Batch chưa RELEASED.

9.  Agent cho Warehouse Receipt retry tạo double credit.

10. Agent cho same idempotency key different payload tiếp tục xử lý.

11. Agent cho Finished Goods Ledger update/delete qua business service.

12. Agent cho PROCESS_COMPLETED tự QC_PASS / RELEASED.

13. Agent cho Warehouse Receipt tự set Sellable.

14. Agent cho Balance Projection bypass ledger.

15. Agent cho Balance Projection tự quyết Commerce available stock.

16. Agent cho SUBMITTED evidence pass accepted requirement.

17. Agent public private/internal field.

18. Agent tạo seed production batch/warehouse receipt thật.

19. Agent tạo seed gây finished goods ledger side effect ngoài scope.

20. Agent tạo seed tự set sellable.

21. Agent tạo seed public trace.

22. Agent tạo seed chứa secret.

23. Agent đổi gateway/release flag.

24. Agent không chạy hoặc không báo test/build.

25. Agent không report đủ 14 mục.

26. Agent gọi Release Ready / Production Ready / Go-live Approved.

27. Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

**PROMPT-P2.2D FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED**

## 18. DOWNSTREAM HANDOFF

### 18.1. Sang PROMPT-P2.2E

Nếu P2.2D đạt Done Gate, bước tiếp theo là:

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

P2.2E chỉ được bắt đầu khi:

1.  Source / Raw / QC / Readiness foundation từ P2.2A đã có.

2.  Production Order / Snapshot foundation từ P2.2B đã có.

3.  Material Issue / Receipt / Raw Ledger foundation từ P2.2C đã có.

4.  Batch / QC / Release / Warehouse / Finished Goods Inventory foundation từ P2.2D đã có.

5.  Batch QC_PASS != RELEASED boundary đã có.

6.  Warehouse chỉ nhận Batch RELEASED boundary đã có.

7.  Finished Goods Ledger credit foundation đã có.

8.  Finished Goods Inventory không tự Sellable boundary đã có.

9.  P2.2D report đủ 14 mục.

10. Owner/dev lead cho phép limited implementation tiếp theo.

### 18.2. Không tự chuyển prompt

Agent không được tự chuyển sang P2.2E.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 19.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

MODE:

**LIMITED IMPLEMENTATION**

PROMPT TIẾP THEO:

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

Bạn được phép sửa code **chỉ trong phạm vi Batch / QC / Release / Warehouse / Finished Goods Inventory foundation**.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Batch QC_PASS là RELEASED.

Bạn không được cho Warehouse nhận Batch chưa RELEASED.

Bạn không được cho Warehouse Receipt tự set Sellable.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PROMPT-P2.2C Implementation Report.

6.  PHASE 0 Validation Report.

7.  PHASE 1 Smoke / Evidence Report.

8.  TECH-01.

9.  TECH-10.

10. TECH-11.

11. TECH-12.

12. TECH-13.

13. Batch / QC / Release / Warehouse / Inventory source-of-truth nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được triển khai:

1.  Production Batch foundation.

2.  Batch Process State foundation.

3.  Batch linked Production Order validation.

4.  Batch linked Material Receipt / Workshop Receipt validation nếu policy yêu cầu.

5.  Batch output quantity / UOM foundation nếu thuộc scope.

6.  Batch QC foundation.

7.  Batch QC result / status validation.

8.  Batch Release Gate foundation.

9.  Batch QC_PASS vs RELEASED boundary.

10. Warehouse Receipt foundation.

11. Warehouse Receipt linked Batch RELEASED validation.

12. Finished Goods Ledger credit foundation.

13. Warehouse Receipt idempotency protection.

14. No Double Credit boundary.

15. Finished Goods Balance Projection foundation nếu thuộc scope.

16. Audit / Evidence / Idempotency hooks nếu foundation hỗ trợ.

17. Test/smoke tối thiểu.

18. Report 14 mục.

**C. Scope Out**

Bạn không được triển khai:

1.  Traceability / Genealogy đầy đủ.

2.  QR / Public Trace.

3.  Recall / Sale Lock.

4.  Commerce Sellable Gate.

5.  Price / Quote / Order / Payment.

6.  AI Advisor.

7.  Facebook Gateway.

8.  Ads / MC AI Live / IVR.

9.  Release Gateway.

10. MISA integration đầy đủ.

11. Costing/accounting đầy đủ.

**D. Boundary bắt buộc**

Bạn phải bảo đảm:

1.  Batch QC_PASS không đồng nghĩa Batch RELEASED.

2.  PROCESS_COMPLETED không đồng nghĩa QC_PASS / RELEASED.

3.  Batch RELEASED không đồng nghĩa Warehouse Receipt.

4.  Warehouse chỉ nhận Batch RELEASED.

5.  Warehouse Receipt confirmed mới tạo Finished Goods Ledger credit.

6.  Warehouse Receipt retry không double credit.

7.  Finished Goods Ledger append-only.

8.  Balance Projection không phải source-of-truth.

9.  Finished Goods Inventory không tự Sellable.

10. P2.2D không tạo Traceability / QR / Recall / Sale Lock.

**E. Allowed file change boundary**

Bạn chỉ được sửa file liên quan trực tiếp đến:

1.  Production Batch model/entity/service/repository foundation.

2.  Batch Process State model/service.

3.  Batch QC model/entity/service/repository foundation.

4.  Batch Release Guard service/policy.

5.  Warehouse Receipt model/entity/service/repository foundation.

6.  Finished Goods Ledger model/entity/service foundation.

7.  Finished Goods Balance Projection foundation nếu thuộc scope.

8.  No Double Credit validation.

9.  Inventory Ledger append-only boundary nếu dùng chung với P2.2C.

10. Migration Batch / QC / Release / Warehouse / Finished Goods Ledger nếu đã được scope cho phép.

11. Test/smoke Batch / QC / Release / Warehouse / Inventory.

12. Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

**F. Database / migration / seed**

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

1.  Thuộc Batch / QC / Release / Warehouse / Finished Goods Ledger foundation.

2.  Có migration mechanism rõ.

3.  Không tạo Traceability / QR / Recall table.

4.  Không tạo Commerce / Order / Payment table.

5.  Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

**BLOCKED — BATCH / RELEASE / WAREHOUSE / INVENTORY SCHEMA APPROVAL REQUIRED**

Nếu cần seed/dev fixture:

1.  Không chứa secret.

2.  Không seed production batch/warehouse receipt thật.

3.  Không tạo finished goods ledger side effect ngoài controlled fixture.

4.  Không tự set sellable.

5.  Không tự public trace.

6.  Phải idempotent nếu có seed validation.

7.  Report đầy đủ trong mục 12.

**G. Test/smoke tối thiểu**

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

1.  Tạo Batch linked Production Order.

2.  PROCESS_COMPLETED không tự QC_PASS, không RELEASED.

3.  Batch QC PASS được ghi nhận, batch chưa tự RELEASED.

4.  Batch QC FAIL/HOLD/REJECTED không release được.

5.  Batch Release khi QC_PASS + guard pass.

6.  Warehouse Receipt Batch QC_PASS chưa RELEASED bị reject.

7.  Warehouse Receipt Batch RELEASED được confirm.

8.  Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

9.  Retry Warehouse Receipt same key/payload không double credit.

10. Same key different payload conflict nếu idempotency hook có.

11. Finished Goods Ledger update/delete attempt qua service bị chặn.

12. Balance projection khớp ledger nếu thuộc scope.

13. Warehouse Receipt confirmed không tự set Sellable.

14. Evidence SUBMITTED dùng cho release/warehouse require ACCEPTED không pass.

15. Release/Warehouse success/deny có audit event nếu hook hỗ trợ.

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

1.  Đúng scope P2.2D.

2.  Production Batch foundation có nền.

3.  Batch QC foundation có nền.

4.  Batch QC_PASS != RELEASED.

5.  Batch Release Gate có nền.

6.  Warehouse Receipt foundation có nền.

7.  Warehouse chỉ nhận Batch RELEASED.

8.  Warehouse Receipt confirmed tạo Finished Goods Ledger credit.

9.  Retry không double credit nếu idempotency foundation hỗ trợ.

10. Finished Goods Ledger append-only boundary có nền.

11. Balance projection có nền nếu thuộc scope.

12. Không triển khai Traceability / QR / Recall / Sale Lock / Commerce.

13. Có test/build hoặc báo rõ lý do không chạy.

14. Có report 14 mục.

15. Có git diff summary.

16. Global Gateway vẫn BLOCKED.

**K. Fail Gate**

Phải fail nếu:

1.  Sửa ngoài scope.

2.  Hardcode policy.

3.  Batch QC_PASS bị gọi là RELEASED.

4.  Warehouse nhận Batch chưa RELEASED.

5.  Warehouse Receipt không tạo Finished Goods Ledger credit khi confirmed.

6.  Retry Warehouse Receipt tạo double credit.

7.  Finished Goods Ledger update/delete được qua business service.

8.  Warehouse Receipt tự set Sellable.

9.  Balance Projection bypass ledger.

10. Tự triển khai Traceability / QR / Recall / Sale Lock / Commerce.

11. Seed tự set sellable hoặc public trace.

12. Mở Gateway.

13. Gọi Release Ready / Production Ready / Go-live Approved.

14. Không report đủ 14 mục.

**L. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2D FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2D BATCH / QC / RELEASE / WAREHOUSE / FINISHED GOODS INVENTORY FOUNDATION ONLY
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

**PROMPT-P2.2D DOCUMENT STATUS: CLEAN FINAL**

### 20.2. Trạng thái thực thi

**LIMITED IMPLEMENTATION HANDOFF ONLY**

### 20.3. Phạm vi được phép

**BATCH / QC / RELEASE / WAREHOUSE / FINISHED GOODS INVENTORY FOUNDATION ONLY**

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
