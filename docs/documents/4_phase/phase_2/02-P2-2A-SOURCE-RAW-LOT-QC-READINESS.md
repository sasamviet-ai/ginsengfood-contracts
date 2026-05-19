**FILE:** **02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx**

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

### 1.3. Mode

**MODE: LIMITED IMPLEMENTATION**

### 1.4. Prompt liền trước

**PROMPT-P2.1 — OPERATIONAL CORE TECHNICAL DESIGN HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2A

PROMPT-P2.2A chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  Workstream 2A đã được xác định rõ.

4.  Source / Raw Material / Raw Lot / QC / Readiness scope đã rõ.

5.  Boundary **RAW_LOT QC_PASS không đồng nghĩa READY_FOR_PRODUCTION** đã được khóa.

6.  Boundary **Raw lot chỉ được issue khi READY_FOR_PRODUCTION** đã được khóa.

7.  PHASE 0 Foundation có Actor / RBAC / Audit / Evidence / Idempotency foundation.

8.  PHASE 1 Product / SKU / Recipe foundation đã có hoặc gap đã được ghi rõ.

9.  Owner/dev lead cho phép limited implementation.

10. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2B

Chỉ được chuyển sang **P2.2B** khi:

1.  Source Origin foundation đã có hoặc gap được ghi rõ.

2.  Raw Material foundation đã có.

3.  Raw Material Receipt foundation đã có.

4.  Raw Lot foundation đã có.

5.  Incoming QC foundation đã có.

6.  Raw Lot Readiness Gate đã có.

7.  QC_PASS không bị dùng thay READY_FOR_PRODUCTION.

8.  Raw lot chưa READY_FOR_PRODUCTION không được issue.

9.  Actor / RBAC / Audit / Evidence / Idempotency hook đã có ở mức foundation nếu scope hỗ trợ.

10. P2.2A report đủ 14 mục.

11. Không có P2 blocker nghiêm trọng trong Source / Raw / QC / Readiness.

12. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.2A.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2B — Production Order / Snapshot / Workshop.

2.  P2.2C — Material Issue / Receipt / Ledger.

3.  P2.2D — Batch / QC / Release / Warehouse / Inventory.

4.  P2.2E — Traceability / QR / Recall / Sale Lock.

5.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

6.  Không còn P0/P1/P2 blocker mở.

7.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2A thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.2A là prompt limited implementation đầu tiên của PHASE 2.

Prompt này chỉ triển khai giới hạn phần nền của:

1.  Source Origin.

2.  Raw Material Master.

3.  Raw Material Receipt.

4.  Raw Lot.

5.  Incoming QC.

6.  Raw Lot Readiness Gate.

PROMPT-P2.2A không triển khai Production Order, Material Issue, Material Receipt, Inventory Ledger đầy đủ, Batch, Warehouse, Traceability, Recall hoặc Sale Lock.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2A là cho phép dev/Codex/Copilot triển khai giới hạn:

1.  Source Origin foundation.

2.  Raw Material Master foundation.

3.  Raw Material Receipt foundation.

4.  Raw Lot foundation.

5.  Incoming QC foundation.

6.  Raw Lot status lifecycle.

7.  Raw Lot Readiness Gate.

8.  QC_PASS vs READY_FOR_PRODUCTION boundary.

9.  Raw lot issue eligibility boundary.

10. Raw lot actor / permission / audit / evidence / idempotency hooks ở mức foundation.

11. Test/smoke tối thiểu cho Source / Raw / QC / Readiness.

12. Report implementation đầy đủ 14 mục.

### 2.4. Tuyên bố bắt buộc

Đây là prompt **LIMITED IMPLEMENTATION**.

Agent được phép sửa code **chỉ trong phạm vi Source / Raw Material / Raw Lot / QC / Readiness foundation**.

Agent không được mở rộng sang:

1.  Production Order đầy đủ.

2.  Formula Snapshot implementation.

3.  Material Request.

4.  Material Issue.

5.  Material Receipt.

6.  Inventory Ledger đầy đủ.

7.  Batch / QC / Release.

8.  Warehouse Receipt.

9.  Traceability / QR / Public Trace.

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

4.  Đọc PHASE 0 Validation Report.

5.  Đọc PHASE 1 Smoke / Evidence / Implementation Report.

6.  Sửa file trong phạm vi Source / Raw Material / Raw Lot / QC / Readiness foundation.

7.  Bổ sung hoặc chuẩn hóa Source Origin model/service/repository nếu cần.

8.  Bổ sung hoặc chuẩn hóa Raw Material model/service/repository nếu cần.

9.  Bổ sung hoặc chuẩn hóa Raw Material Receipt model/service/repository nếu cần.

10. Bổ sung hoặc chuẩn hóa Raw Lot model/service/repository nếu cần.

11. Bổ sung hoặc chuẩn hóa Incoming QC model/service/repository nếu cần.

12. Bổ sung hoặc chuẩn hóa Raw Lot Readiness Guard nếu cần.

13. Bổ sung status lifecycle cho Raw Lot.

14. Bổ sung validation QC_PASS vs READY_FOR_PRODUCTION.

15. Bổ sung test/smoke tối thiểu.

16. Chạy build/test/lint phù hợp.

17. Báo cáo đầy đủ 14 mục.

### 3.2. Điều kiện để được sửa file

Agent chỉ được sửa file khi đáp ứng đủ:

1.  Đã đọc PROMPT-P2 Analysis Report.

2.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đã đọc PHASE 0 Validation Report.

4.  Đã đọc PHASE 1 Smoke / Evidence Report.

5.  Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

6.  Đã inspect codebase thật.

7.  Đã xác định file nào thuộc scope P2.2A.

8.  Đã xác định file nào không thuộc scope P2.2A.

9.  Đã xác nhận không cần tự đổi nghiệp vụ.

10. Đã xác nhận không cần hardcode policy.

11. Đã xác nhận không triển khai Production Order trong prompt này.

12. Đã xác nhận không triển khai Material Issue trong prompt này.

13. Đã xác nhận không triển khai Inventory Ledger đầy đủ trong prompt này.

14. Đã xác nhận không triển khai Traceability / Recall / Sale Lock trong prompt này.

Thiếu một trong các điều kiện trên thì agent phải dừng và báo:

**BLOCKED — LIMITED IMPLEMENTATION PRECONDITION NOT MET**

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PROMPT-P2.1 Technical Design Handoff**

3.  **PHASE 0 Validation Report**

4.  **PHASE 1 Smoke / Evidence / Implementation Report**

5.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

6.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

7.  **TECH-11 — Implementation Roadmap / Dev Phase Plan**

8.  **TECH-12 — Phase Backlog Pack**

9.  **TECH-13 — Codex / Copilot Dev Prompt Pack**

10. Source / Raw Material / Raw Lot / QC / Readiness source-of-truth nếu đã có.

11. Product / SKU / Ingredient / UOM source-of-truth từ PHASE 1 nếu cần đối chiếu.

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PROMPT-P2/P2.1 là đầu vào analysis/design, không phải release evidence.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P2.1 đã cho phép.

9.  Nếu nghiệp vụ Source / Raw / QC / Readiness chưa có source-of-truth thì dừng phần đó và báo owner decision required.

10. Evidence submitted chưa phải evidence accepted.

## 5. OBJECTIVE

### 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

1.  Source Origin foundation.

2.  Raw Material Master foundation.

3.  Raw Material Receipt foundation.

4.  Raw Lot foundation.

5.  Incoming QC foundation.

6.  Raw Lot status lifecycle foundation.

7.  Raw Lot Readiness Gate foundation.

8.  Raw Lot hold/reject/quarantine boundary nếu source-of-truth có.

9.  QC_PASS vs READY_FOR_PRODUCTION boundary.

10. Raw lot issue eligibility boundary.

11. Evidence metadata hook cho QC/readiness nếu foundation hỗ trợ.

12. Audit hook cho QC/readiness nếu foundation hỗ trợ.

13. Idempotency hook cho QC/readiness command nếu foundation hỗ trợ.

14. Test/smoke tối thiểu.

15. Report implementation đầy đủ 14 mục.

### 5.2. Mục tiêu nền tảng

P2.2A phải tạo nền để các prompt sau có thể tiếp tục:

1.  **PROMPT-P2.2B — Production Order / Snapshot / Workshop**

2.  **PROMPT-P2.2C — Material Issue / Material Receipt / Inventory Ledger**

3.  **PROMPT-P2.2D — Batch / QC / Release / Warehouse / Inventory**

4.  **PROMPT-P2.2E — Traceability / QR / Public Trace / Recall / Sale Lock**

5.  **PROMPT-P2.2F — PHASE 2 Smoke / Evidence / Implementation Report**

## 6. SCOPE IN

### 6.1. Source Origin Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Source Origin entity/model nếu source-of-truth yêu cầu.

2.  Source code/name.

3.  Source type.

4.  Source zone / growing area nếu có.

5.  Supplier/source owner reference nếu có.

6.  Source verification status nếu có.

7.  Source evidence reference nếu có.

8.  Source status lifecycle.

9.  Source public/private boundary.

10. Source audit hook nếu PHASE 0 Audit foundation hỗ trợ.

Agent không được triển khai full supplier procurement hoặc purchase flow trong P2.2A nếu chưa thuộc scope.

### 6.2. Raw Material Master Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Raw Material entity/model.

2.  Raw Material code.

3.  Raw Material name.

4.  Raw Material group/category.

5.  Raw Material base UOM.

6.  Raw Material source type.

7.  Raw Material status lifecycle.

8.  Raw Material public/private boundary.

9.  Raw Material relationship readiness với Raw Lot.

10. Raw Material validation foundation.

11. Raw Material audit hook nếu foundation hỗ trợ.

Agent phải bảo đảm:

1.  Raw material active không tự động nghĩa là available inventory.

2.  Raw material active không tự động nghĩa là READY_FOR_PRODUCTION.

3.  Raw material active không tự động nghĩa là được issue.

### 6.3. Raw Material Receipt Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Raw Material Receipt entity/model.

2.  Receipt code.

3.  Receipt date.

4.  Linked Raw Material.

5.  Linked Source Origin nếu có.

6.  Received quantity.

7.  Received UOM.

8.  Receipt status.

9.  Receipt evidence reference nếu có.

10. Receipt actor/correlation/audit hook nếu foundation hỗ trợ.

11. Receipt idempotency hook nếu command có side effect và foundation hỗ trợ.

12. Receipt validation foundation.

Raw Material Receipt không đồng nghĩa:

1.  Raw lot QC_PASS.

2.  Raw lot READY_FOR_PRODUCTION.

3.  Raw lot available for issue.

4.  Raw lot approved for production.

### 6.4. Raw Lot Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Raw Lot entity/model.

2.  Raw Lot code.

3.  Linked Raw Material.

4.  Linked Raw Material Receipt.

5.  Linked Source Origin nếu có.

6.  Lot quantity.

7.  Lot UOM.

8.  Lot status.

9.  QC status.

10. Readiness status.

11. Hold/reject/quarantine boundary nếu có.

12. Lot evidence reference nếu có.

13. Lot actor/correlation/audit hook nếu command có.

14. Lot idempotency hook nếu command có.

15. Lot validation foundation.

### 6.5. Raw Lot Status Lifecycle

Raw lot status foundation tối thiểu có thể gồm:

| **Status**           | **Ý nghĩa**                                    |
|----------------------|------------------------------------------------|
| CREATED              | Lot mới được tạo từ receipt hoặc source hợp lệ |
| PENDING_QC           | Chờ QC đầu vào                                 |
| QC_PASS              | QC đạt, nhưng chưa READY_FOR_PRODUCTION        |
| QC_FAIL              | QC không đạt                                   |
| HOLD                 | Bị giữ lại                                     |
| QUARANTINE           | Cách ly                                        |
| REJECTED             | Bị loại                                        |
| READY_FOR_PRODUCTION | Đủ điều kiện để issue cho sản xuất             |
| CONSUMED             | Đã dùng hết hoặc không còn khả dụng cho issue  |
| ARCHIVED             | Lưu trữ                                        |

Nếu codebase dùng status khác, agent phải map tương đương và báo rõ trong report.

Agent phải bảo đảm:

**QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.**

### 6.6. Incoming QC Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Incoming QC entity/model.

2.  QC inspection record.

3.  Linked Raw Lot.

4.  QC result.

5.  QC status.

6.  QC criteria reference nếu có.

7.  QC evidence reference nếu có.

8.  QC actor/correlation/audit hook nếu foundation hỗ trợ.

9.  QC idempotency hook nếu command có side effect.

10. QC result validation.

QC result tối thiểu có thể gồm:

| **QC Result**    | **Ý nghĩa**                       |
|------------------|-----------------------------------|
| PASS             | Đạt QC đầu vào                    |
| FAIL             | Không đạt QC                      |
| HOLD             | Cần giữ lại                       |
| RECHECK_REQUIRED | Cần kiểm tra lại                  |
| NOT_APPLICABLE   | Không áp dụng nếu policy cho phép |

QC PASS không được tự động set READY_FOR_PRODUCTION nếu TECH yêu cầu readiness gate riêng.

### 6.7. Raw Lot Readiness Gate Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Readiness Guard service/policy.

2.  Mark READY_FOR_PRODUCTION command foundation.

3.  Readiness precondition validation.

4.  Readiness actor/permission hook.

5.  Readiness audit hook.

6.  Readiness evidence hook nếu policy yêu cầu.

7.  Readiness idempotency hook nếu command có side effect.

8.  Readiness reason rule nếu cần.

9.  Readiness fail-safe rule.

10. Readiness status transition validation.

Readiness preconditions tối thiểu:

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

## 7. BOUNDARY BẮT BUỘC

### 7.1. QC_PASS Boundary

QC_PASS chỉ có nghĩa:

1.  Raw lot đã đạt kiểm tra chất lượng đầu vào.

2.  Raw lot có thể đi tiếp sang bước readiness review.

3.  QC record có thể được dùng làm một điều kiện trong readiness guard.

QC_PASS không có nghĩa:

1.  Raw lot đã READY_FOR_PRODUCTION.

2.  Raw lot được phép issue.

3.  Raw lot được phép đưa vào production order.

4.  Raw lot đã có đủ evidence/approval.

5.  Raw lot đã vượt mọi guard.

Nguyên tắc bắt buộc:

**RAW_LOT QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.**

### 7.2. READY_FOR_PRODUCTION Boundary

READY_FOR_PRODUCTION chỉ có nghĩa:

1.  Raw lot đã đạt QC.

2.  Raw lot không bị hold/reject/quarantine.

3.  Raw lot đã qua readiness guard.

4.  Raw lot có đủ dữ liệu nền để issue nếu các guard khác pass.

5.  Raw lot có thể được Material Issue sử dụng ở P2.2C.

READY_FOR_PRODUCTION không có nghĩa:

1.  Raw lot đã được issue.

2.  Raw lot đã bị giảm tồn.

3.  Raw lot đã đưa vào batch.

4.  Production đã bắt đầu.

5.  Thành phẩm đã có.

Nguyên tắc bắt buộc:

**Raw lot chỉ được issue khi READY_FOR_PRODUCTION.**

### 7.3. Raw Material Receipt Boundary

Raw Material Receipt chỉ có nghĩa:

1.  Nguyên liệu đã được ghi nhận tiếp nhận.

2.  Có số lượng/UOM tiếp nhận.

3.  Có thể tạo raw lot hoặc liên kết raw lot theo rule.

Raw Material Receipt không có nghĩa:

1.  QC pass.

2.  READY_FOR_PRODUCTION.

3.  Available for issue.

4.  Đã giảm/tăng ledger theo production issue.

5.  Đã dùng trong production.

### 7.4. Issue Eligibility Boundary

P2.2A chỉ chuẩn bị eligibility boundary.

Material Issue đầy đủ thuộc P2.2C.

Tuy nhiên P2.2A phải bảo đảm các field/guard có thể hỗ trợ rule:

1.  Raw lot phải READY_FOR_PRODUCTION.

2.  Raw lot phải còn quantity khả dụng.

3.  Raw lot không hold/reject/quarantine.

4.  Raw lot không consumed.

5.  Raw lot có UOM hợp lệ.

6.  Raw lot có trace/source linkage nếu policy yêu cầu.

## 8. SCOPE OUT

PROMPT-P2.2A không được triển khai:

1.  Production Order đầy đủ.

2.  Formula Snapshot đầy đủ.

3.  Material Request đầy đủ.

4.  Material Issue đầy đủ.

5.  Material Receipt đầy đủ.

6.  Inventory Ledger đầy đủ.

7.  Production Batch.

8.  Batch QC / Release.

9.  Warehouse Receipt.

10. Finished Goods Inventory.

11. Traceability / Genealogy đầy đủ.

12. QR / Public Trace.

13. Recall / Sale Lock.

14. Commerce Sellable Gate.

15. AI Advisor runtime.

16. Facebook Gateway.

17. Ads.

18. MC AI Live.

19. IVR.

20. Release Gateway.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

## 9. ALLOWED FILE CHANGE BOUNDARY

### 9.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

1.  Source Origin model/entity/service/repository foundation.

2.  Raw Material model/entity/service/repository foundation.

3.  Raw Material Receipt model/entity/service/repository foundation.

4.  Raw Lot model/entity/service/repository foundation.

5.  Incoming QC model/entity/service/repository foundation.

6.  Raw Lot Readiness Guard service/policy.

7.  Raw Lot status transition validation.

8.  QC result validation.

9.  Readiness precondition validation.

10. Migration Source/Raw/QC/Readiness nếu đã được scope cho phép.

11. Test/smoke Source/Raw/QC/Readiness.

12. Seed/dev fixture nếu đã được P2.1 cho phép và không chứa production secret.

### 9.2. File không được sửa

Agent không được sửa:

1.  Production Order implementation file.

2.  Material Issue implementation file.

3.  Material Receipt implementation file.

4.  Inventory Ledger implementation file.

5.  Batch / Release file.

6.  Warehouse Receipt file.

7.  Traceability / QR file.

8.  Recall / Sale Lock file.

9.  Commerce file.

10. AI Advisor file.

11. Gateway file.

12. Ads / MC AI Live / IVR file.

13. Release Gateway file.

14. Production config/release flag.

15. Global Gateway config.

### 9.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

**BLOCKED — FILE BOUNDARY UNCLEAR**

## 10. IMPLEMENTATION REQUIREMENTS

### 10.1. Source Origin Requirements

Source Origin foundation tối thiểu cần có:

1.  Source ID.

2.  Source code hoặc equivalent identity nếu source-of-truth yêu cầu.

3.  Source name.

4.  Source type.

5.  Source status.

6.  Source verification status nếu có.

7.  Source evidence reference nếu có.

8.  Public/private field boundary.

9.  Created/updated metadata nếu codebase có convention.

10. Audit/actor/correlation linkage nếu command thuộc scope.

### 10.2. Raw Material Requirements

Raw Material foundation tối thiểu cần có:

1.  Raw Material ID.

2.  Raw Material code.

3.  Raw Material name.

4.  Raw Material group/category.

5.  Base UOM.

6.  Raw Material status.

7.  Source type hoặc source reference nếu có.

8.  Validation không thiếu code/name/UOM.

9.  Public/private field boundary nếu áp dụng.

10. Audit/actor/correlation linkage nếu command thuộc scope.

### 10.3. Raw Material Receipt Requirements

Raw Material Receipt foundation tối thiểu cần có:

1.  Receipt ID.

2.  Receipt code.

3.  Linked Raw Material.

4.  Linked Source Origin nếu có.

5.  Received quantity.

6.  Received UOM.

7.  Receipt date.

8.  Receipt status.

9.  Evidence reference nếu có.

10. Validation quantity/UOM.

11. Audit/actor/correlation linkage nếu command thuộc scope.

12. Idempotency hook nếu command có side effect và foundation hỗ trợ.

### 10.4. Raw Lot Requirements

Raw Lot foundation tối thiểu cần có:

1.  Raw Lot ID.

2.  Raw Lot code.

3.  Linked Raw Material.

4.  Linked Receipt.

5.  Linked Source Origin nếu có.

6.  Lot quantity.

7.  Lot UOM.

8.  Lot status.

9.  QC result/status.

10. Readiness status.

11. Hold/reject/quarantine flags/status nếu có.

12. Validation quantity/UOM.

13. Audit/actor/correlation linkage nếu command thuộc scope.

14. Idempotency hook nếu command có side effect.

### 10.5. Incoming QC Requirements

Incoming QC foundation tối thiểu cần có:

1.  QC Record ID.

2.  Linked Raw Lot.

3.  QC result.

4.  QC status.

5.  QC inspectedBy hoặc actor linkage.

6.  QC inspectedAt.

7.  QC evidence reference nếu có.

8.  QC reason/note nếu có.

9.  QC audit event nếu foundation hỗ trợ.

10. QC không tự động issue raw lot.

11. QC PASS không tự động READY_FOR_PRODUCTION trừ khi TECH cho phép, nhưng hiện rule khóa là phải tách readiness.

### 10.6. Readiness Requirements

Readiness foundation tối thiểu cần có:

1.  Mark READY_FOR_PRODUCTION command hoặc equivalent.

2.  Readiness precondition validation.

3.  QC PASS required.

4.  Not HOLD.

5.  Not QUARANTINE.

6.  Not REJECTED.

7.  Not CONSUMED.

8.  Quantity/UOM valid.

9.  Evidence accepted nếu policy yêu cầu.

10. Permission required nếu RBAC foundation hỗ trợ.

11. Audit event nếu audit foundation hỗ trợ.

12. Idempotency hook nếu command có side effect.

13. Fail-safe nếu runtime dependency unavailable.

## 11. DATABASE / MIGRATION / SEED RULE

### 11.1. Database / migration rule

P2.2A có thể cần migration cho Source / Raw / Lot / QC / Readiness foundation.

Agent chỉ được tạo migration khi:

1.  P2.1 đã xác định cần.

2.  Repo đang dùng migration chuẩn.

3.  Migration chỉ phục vụ Source / Raw / Lot / QC / Readiness foundation.

4.  Không tạo Production Order table trong prompt này.

5.  Không tạo Material Issue table trong prompt này.

6.  Không tạo Inventory Ledger table đầy đủ trong prompt này.

7.  Không tạo Batch / Warehouse / Traceability / Recall table trong prompt này.

8.  Không update database production.

9.  Không chạy production migration.

10. Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

**BLOCKED — SOURCE / RAW / QC / READINESS SCHEMA APPROVAL REQUIRED**

### 11.2. Seed rule

P2.2A mặc định không seed production raw data.

Nếu cần seed/dev fixture:

1.  Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

2.  Không seed secret.

3.  Không seed production-only source/raw lot chưa được phê duyệt.

4.  Không hardcode sai raw lot readiness.

5.  Seed không tự set READY_FOR_PRODUCTION nếu chưa có approved scenario.

6.  Seed không tự issue material.

7.  Seed không tạo inventory ledger side effect ngoài scope.

8.  Seed phải idempotent nếu có.

9.  Report rõ trong mục 12.

Nếu chưa có source-of-truth Source / Raw / QC, không tạo seed.

## 12. TEST / SMOKE REQUIREMENTS

### 12.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

1.  Tạo Source Origin hợp lệ.

2.  Tạo Raw Material hợp lệ.

3.  Tạo Raw Material Receipt hợp lệ.

4.  Tạo Raw Lot từ Raw Material/Receipt hợp lệ.

5.  Raw Lot thiếu material bị reject.

6.  Raw Lot thiếu quantity/UOM bị reject.

7.  Incoming QC PASS được ghi nhận.

8.  Incoming QC FAIL/HOLD được ghi nhận.

9.  QC_PASS không tự động READY_FOR_PRODUCTION.

10. Raw lot HOLD/REJECTED/QUARANTINE không được mark READY_FOR_PRODUCTION.

11. Raw lot QC_PASS + đủ precondition được mark READY_FOR_PRODUCTION.

12. Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility check.

13. Readiness command có audit event nếu hook hỗ trợ.

14. Readiness command retry same idempotency key/payload không tạo side effect lần hai nếu hook có.

15. Evidence SUBMITTED không pass nếu readiness require ACCEPTED evidence.

### 12.2. Test không được phép

Không được viết test cho:

1.  Production Order full.

2.  Formula Snapshot full.

3.  Material Issue full.

4.  Inventory Ledger full.

5.  Material Receipt full.

6.  Batch / QC / Release.

7.  Warehouse Receipt.

8.  Traceability / QR.

9.  Recall / Sale Lock.

10. Commerce Sellable Gate.

11. AI Advisor / Gateway / Ads / Live / IVR.

12. Release Gateway.

### 12.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

| **Smoke ID**    | **Scenario**                                               | **Expected Result**                                  |
|-----------------|------------------------------------------------------------|------------------------------------------------------|
| P2.2A-SMOKE-001 | Tạo Raw Material hợp lệ                                    | Raw Material được tạo                                |
| P2.2A-SMOKE-002 | Tạo Raw Material Receipt hợp lệ                            | Receipt được tạo                                     |
| P2.2A-SMOKE-003 | Tạo Raw Lot từ receipt hợp lệ                              | Raw Lot CREATED/PENDING_QC                           |
| P2.2A-SMOKE-004 | Raw Lot thiếu UOM/quantity                                 | Bị reject                                            |
| P2.2A-SMOKE-005 | Incoming QC PASS                                           | QC record PASS, raw lot chưa tự READY_FOR_PRODUCTION |
| P2.2A-SMOKE-006 | Incoming QC FAIL/HOLD                                      | Raw lot không READY_FOR_PRODUCTION                   |
| P2.2A-SMOKE-007 | Raw lot QC_PASS + đủ điều kiện readiness                   | Mark READY_FOR_PRODUCTION                            |
| P2.2A-SMOKE-008 | Raw lot QC_PASS nhưng thiếu evidence accepted nếu required | Không READY_FOR_PRODUCTION                           |
| P2.2A-SMOKE-009 | Raw lot HOLD/REJECTED/QUARANTINE                           | Không READY_FOR_PRODUCTION                           |
| P2.2A-SMOKE-010 | Raw lot chưa READY_FOR_PRODUCTION                          | Không pass issue eligibility                         |
| P2.2A-SMOKE-011 | Readiness retry same key/payload nếu hook có               | Không tạo side effect lần hai                        |
| P2.2A-SMOKE-012 | Readiness success/deny                                     | Có audit event nếu hook hỗ trợ                       |

Không gọi các smoke này là Global Smoke Pass.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

1.  Không hardcode QC_PASS = READY_FOR_PRODUCTION.

2.  Không cho QC_PASS tự động issue.

3.  Không cho raw lot chưa READY_FOR_PRODUCTION pass issue eligibility.

4.  Không bỏ qua hold/reject/quarantine.

5.  Không bỏ qua quantity/UOM validation.

6.  Không bỏ qua evidence accepted nếu policy yêu cầu.

7.  Không cho SUBMITTED evidence pass accepted requirement.

8.  Không bỏ qua Actor/RBAC/Audit/Evidence/Idempotency foundation nếu có command.

9.  Không tạo Material Issue trong P2.2A.

10. Không tạo Inventory Ledger side effect trong P2.2A.

11. Không tạo Production Order trong P2.2A.

12. Không tạo Sellable Gate trong P2.2A.

13. Không sửa Commerce / AI / Gateway / Ads / Live / IVR.

14. Không public private/internal field.

15. Không seed production raw lot tùy tiện.

16. Không bypass permission.

17. Không mở Global Gateway.

18. Không gọi P2.2A xong là PHASE 2 Complete.

19. Không gọi Release Ready / Production Ready / Go-live Approved.

## 14. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đọc PHASE 0 Validation Report.

4.  Đọc PHASE 1 Smoke / Evidence Report.

5.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

6.  Inspect codebase thật.

7.  Xác định Source / Raw / QC / Readiness implementation hiện có.

8.  Xác định file thuộc scope P2.2A.

9.  Xác định file không được sửa.

10. Xác định có cần migration không.

11. Xác định có cần seed/dev fixture không.

12. Triển khai giới hạn Source Origin foundation nếu thuộc scope.

13. Triển khai giới hạn Raw Material foundation.

14. Triển khai giới hạn Raw Material Receipt foundation.

15. Triển khai giới hạn Raw Lot foundation.

16. Triển khai giới hạn Incoming QC foundation.

17. Triển khai giới hạn Raw Lot Readiness Gate foundation.

18. Triển khai QC_PASS != READY_FOR_PRODUCTION boundary.

19. Triển khai issue eligibility boundary ở mức foundation, không làm Material Issue full.

20. Thêm/chỉnh test/smoke trong scope.

21. Chạy build/test/lint phù hợp.

22. Chạy migration validation nếu có migration.

23. Chạy seed validation nếu có seed.

24. Chạy git status/git diff.

25. Báo cáo đủ 14 mục.

## 15. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 15.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2A.

2.  Mode: LIMITED IMPLEMENTATION.

3.  Scope đã thực hiện.

4.  Source Origin foundation đã triển khai gì.

5.  Raw Material foundation đã triển khai gì.

6.  Raw Receipt / Raw Lot foundation đã triển khai gì.

7.  Incoming QC foundation đã triển khai gì.

8.  Readiness Gate đã triển khai gì.

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

6.  Lý do từng file thuộc scope P2.2A.

7.  Xác nhận không sửa ngoài scope.

8.  Git diff summary.

### 15.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PHASE 0 Validation Report.

4.  PHASE 1 Smoke / Evidence Report.

5.  TECH-01.

6.  TECH-10.

7.  TECH-11.

8.  TECH-12.

9.  TECH-13.

10. Source / Raw / QC / Readiness source-of-truth nếu có.

### 15.4. Mục 4 — Evidence đã dùng

Liệt kê:

1.  Code inspection evidence.

2.  Source Origin implementation evidence.

3.  Raw Material implementation evidence.

4.  Raw Receipt implementation evidence.

5.  Raw Lot implementation evidence.

6.  QC implementation evidence.

7.  Readiness Gate implementation evidence.

8.  Test evidence.

9.  Build evidence.

10. Migration evidence nếu có.

11. Seed validation evidence nếu có.

12. Git diff evidence.

13. Gap evidence.

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

1.  Không chạy frontend build vì scope P2.2A không sửa frontend.

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

Mặc định không cần sửa Markdown trong P2.2A.

### 15.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có tạo migration không.

2.  Có chạy migration không.

3.  Có update database không.

4.  Migration có thuộc scope Source / Raw / QC / Readiness không.

5.  Nếu không, ghi rõ “Không áp dụng trong P2.2A”.

Không update database thật.

### 15.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có động tới seed/dev fixture không.

2.  Có validate seed không.

3.  Seed có liên quan Source / Raw / QC / Readiness không.

4.  Seed có idempotent không.

5.  Seed có tự set READY_FOR_PRODUCTION sai rule không.

6.  Seed có tự issue material không.

7.  Seed có tạo inventory side effect ngoài scope không.

8.  Seed có chứa secret không.

9.  Nếu không, ghi rõ “Không áp dụng trong P2.2A”.

### 15.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Source Origin risk.

2.  Raw Material risk.

3.  Raw Receipt risk.

4.  Raw Lot risk.

5.  Incoming QC risk.

6.  Readiness Gate risk.

7.  QC_PASS vs READY_FOR_PRODUCTION risk.

8.  Evidence policy risk.

9.  Audit hook risk.

10. Idempotency hook risk.

11. Material Issue chưa triển khai.

12. Production Order chưa triển khai.

13. Inventory Ledger chưa triển khai.

14. Downstream PHASE 2 risk.

15. Global Gateway risk.

### 15.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Kết quả P2.2A.

2.  Việc còn lại cho P2.2B.

3.  Việc còn lại cho P2.2C.

4.  Việc còn lại cho P2.2D.

5.  Việc còn lại cho P2.2E.

6.  Source / Raw / QC / Readiness gap còn lại.

7.  Evidence cần owner review.

8.  Smoke cần bổ sung.

9.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2A FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2A SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 16. DONE GATE

PROMPT-P2.2A chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PROMPT-P2 Analysis Report.

3.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đã đọc PHASE 0 Validation Report.

5.  Đã đọc PHASE 1 Smoke / Evidence Report.

6.  Đã inspect codebase thật.

7.  Đã giới hạn scope đúng P2.2A.

8.  Đã triển khai hoặc chuẩn hóa Source Origin foundation nếu thuộc scope.

9.  Đã triển khai hoặc chuẩn hóa Raw Material foundation.

10. Đã triển khai hoặc chuẩn hóa Raw Material Receipt foundation.

11. Đã triển khai hoặc chuẩn hóa Raw Lot foundation.

12. Đã triển khai hoặc chuẩn hóa Incoming QC foundation.

13. Đã triển khai hoặc chuẩn hóa Raw Lot Readiness Gate foundation.

14. Đã có QC_PASS != READY_FOR_PRODUCTION boundary.

15. Đã có Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

16. Không sửa lan sang Production Order.

17. Không triển khai Material Issue đầy đủ.

18. Không triển khai Inventory Ledger đầy đủ.

19. Không triển khai Batch / Warehouse / Traceability / Recall.

20. Không sửa Commerce / AI / Gateway.

21. Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

22. Có build/test result nếu chạy được.

23. Có git diff summary.

24. Có report đủ 14 mục.

25. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

26. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**P2.2A LIMITED IMPLEMENTATION COMPLETED FOR SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS FOUNDATION ONLY**

Không được gọi:

- PHASE 2 Complete.

- Full Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

## 17. FAIL GATE

PROMPT-P2.2A phải fail nếu:

1.  Agent sửa ngoài scope.

2.  Agent tự triển khai Production Order đầy đủ.

3.  Agent tự triển khai Material Issue đầy đủ.

4.  Agent tự triển khai Inventory Ledger đầy đủ.

5.  Agent tự triển khai Batch / Warehouse / Traceability / Recall.

6.  Agent sửa Commerce / AI / Gateway không được phép.

7.  Agent hardcode QC_PASS = READY_FOR_PRODUCTION.

8.  Agent cho raw lot chưa READY_FOR_PRODUCTION pass issue eligibility.

9.  Agent bỏ qua HOLD / REJECTED / QUARANTINE.

10. Agent bỏ qua quantity/UOM validation.

11. Agent cho SUBMITTED evidence pass ACCEPTED requirement.

12. Agent bỏ qua audit/idempotency hook khi foundation hỗ trợ và command có side effect.

13. Agent public private/internal field.

14. Agent tạo seed tự set READY_FOR_PRODUCTION sai rule.

15. Agent tạo seed tự issue material.

16. Agent tạo inventory side effect ngoài scope.

17. Agent tạo seed chứa secret.

18. Agent đổi gateway/release flag.

19. Agent không chạy hoặc không báo test/build.

20. Agent không report đủ 14 mục.

21. Agent gọi Release Ready / Production Ready / Go-live Approved.

22. Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

**PROMPT-P2.2A FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED**

## 18. DOWNSTREAM HANDOFF

### 18.1. Sang PROMPT-P2.2B

Nếu P2.2A đạt Done Gate, bước tiếp theo là:

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

P2.2B chỉ được bắt đầu khi:

1.  Source / Raw Material foundation đã có.

2.  Raw Material Receipt foundation đã có.

3.  Raw Lot foundation đã có.

4.  Incoming QC foundation đã có.

5.  Raw Lot Readiness Gate đã có.

6.  QC_PASS != READY_FOR_PRODUCTION boundary đã có.

7.  Raw lot issue eligibility boundary đã có.

8.  P2.2A report đủ 14 mục.

9.  Owner/dev lead cho phép limited implementation tiếp theo.

### 18.2. Không tự chuyển prompt

Agent không được tự chuyển sang P2.2B.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 19.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

MODE:

**LIMITED IMPLEMENTATION**

PROMPT TIẾP THEO:

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

Bạn được phép sửa code **chỉ trong phạm vi Source / Raw Material / Raw Lot / QC / Readiness foundation**.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được gọi Raw Lot QC_PASS là READY_FOR_PRODUCTION.

Bạn không được cho raw lot chưa READY_FOR_PRODUCTION pass issue eligibility.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PHASE 0 Validation Report.

4.  PHASE 1 Smoke / Evidence Report.

5.  TECH-01.

6.  TECH-10.

7.  TECH-11.

8.  TECH-12.

9.  TECH-13.

10. Source / Raw / QC / Readiness source-of-truth nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được triển khai:

1.  Source Origin foundation.

2.  Raw Material Master foundation.

3.  Raw Material Receipt foundation.

4.  Raw Lot foundation.

5.  Incoming QC foundation.

6.  Raw Lot status lifecycle foundation.

7.  Raw Lot Readiness Gate foundation.

8.  QC_PASS vs READY_FOR_PRODUCTION boundary.

9.  Raw lot issue eligibility boundary.

10. Audit / Evidence / Idempotency hooks nếu foundation hỗ trợ.

11. Test/smoke tối thiểu.

12. Report 14 mục.

**C. Scope Out**

Bạn không được triển khai:

1.  Production Order đầy đủ.

2.  Formula Snapshot đầy đủ.

3.  Material Request.

4.  Material Issue.

5.  Material Receipt.

6.  Inventory Ledger đầy đủ.

7.  Batch / QC / Release.

8.  Warehouse Receipt.

9.  Traceability / QR / Public Trace.

10. Recall / Sale Lock.

11. Commerce Runtime.

12. AI Advisor.

13. Facebook Gateway.

14. Ads / MC AI Live / IVR.

15. Release Gateway.

**D. Boundary bắt buộc**

Bạn phải bảo đảm:

1.  Raw Lot QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.

2.  Raw Material Receipt không đồng nghĩa QC_PASS.

3.  Raw Material Receipt không đồng nghĩa READY_FOR_PRODUCTION.

4.  READY_FOR_PRODUCTION là gate riêng.

5.  Raw lot HOLD / REJECTED / QUARANTINE không được READY_FOR_PRODUCTION.

6.  Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

7.  P2.2A không được tạo Material Issue đầy đủ.

8.  P2.2A không được tạo Inventory Ledger side effect đầy đủ.

**E. Allowed file change boundary**

Bạn chỉ được sửa file liên quan trực tiếp đến:

1.  Source Origin model/entity/service/repository foundation.

2.  Raw Material model/entity/service/repository foundation.

3.  Raw Material Receipt model/entity/service/repository foundation.

4.  Raw Lot model/entity/service/repository foundation.

5.  Incoming QC model/entity/service/repository foundation.

6.  Raw Lot Readiness Guard service/policy.

7.  Raw Lot status transition validation.

8.  QC result validation.

9.  Readiness precondition validation.

10. Migration Source/Raw/QC/Readiness nếu đã được scope cho phép.

11. Test/smoke Source/Raw/QC/Readiness.

12. Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

**F. Database / migration / seed**

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

1.  Thuộc Source / Raw / QC / Readiness foundation.

2.  Có migration mechanism rõ.

3.  Không tạo Production Order table.

4.  Không tạo Material Issue table.

5.  Không tạo Inventory Ledger table đầy đủ.

6.  Không tạo Batch / Warehouse / Traceability / Recall table.

7.  Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

**BLOCKED — SOURCE / RAW / QC / READINESS SCHEMA APPROVAL REQUIRED**

Nếu cần seed/dev fixture:

1.  Không chứa secret.

2.  Không tự set READY_FOR_PRODUCTION sai rule.

3.  Không tự issue material.

4.  Không tạo inventory side effect ngoài scope.

5.  Phải idempotent nếu có seed validation.

6.  Report đầy đủ trong mục 12.

**G. Test/smoke tối thiểu**

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

1.  Tạo Raw Material hợp lệ.

2.  Tạo Raw Material Receipt hợp lệ.

3.  Tạo Raw Lot từ receipt hợp lệ.

4.  Raw Lot thiếu UOM/quantity bị reject.

5.  Incoming QC PASS được ghi nhận nhưng raw lot chưa tự READY_FOR_PRODUCTION.

6.  Incoming QC FAIL/HOLD thì raw lot không READY_FOR_PRODUCTION.

7.  Raw lot QC_PASS + đủ điều kiện readiness được mark READY_FOR_PRODUCTION.

8.  Raw lot QC_PASS nhưng thiếu accepted evidence nếu required thì không READY_FOR_PRODUCTION.

9.  Raw lot HOLD/REJECTED/QUARANTINE không READY_FOR_PRODUCTION.

10. Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

11. Readiness retry same key/payload nếu hook có thì không tạo side effect lần hai.

12. Readiness success/deny có audit event nếu hook hỗ trợ.

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

1.  Đúng scope P2.2A.

2.  Source / Raw Material foundation có nền.

3.  Raw Material Receipt foundation có nền.

4.  Raw Lot foundation có nền.

5.  Incoming QC foundation có nền.

6.  Raw Lot Readiness Gate có nền.

7.  QC_PASS != READY_FOR_PRODUCTION.

8.  Raw lot chưa READY_FOR_PRODUCTION không pass issue eligibility.

9.  Không triển khai Production Order / Material Issue / Inventory Ledger đầy đủ.

10. Có test/build hoặc báo rõ lý do không chạy.

11. Có report 14 mục.

12. Có git diff summary.

13. Global Gateway vẫn BLOCKED.

**K. Fail Gate**

Phải fail nếu:

1.  Sửa ngoài scope.

2.  Hardcode policy.

3.  Hardcode QC_PASS = READY_FOR_PRODUCTION.

4.  Raw lot chưa READY_FOR_PRODUCTION vẫn pass issue eligibility.

5.  Bỏ qua HOLD / REJECTED / QUARANTINE.

6.  Bỏ qua quantity/UOM validation.

7.  SUBMITTED evidence pass ACCEPTED requirement.

8.  Tự triển khai Production Order / Material Issue / Inventory Ledger đầy đủ.

9.  Sửa Commerce / AI / Gateway không được phép.

10. Seed tự set READY_FOR_PRODUCTION sai rule.

11. Seed tự issue material.

12. Mở Gateway.

13. Gọi Release Ready / Production Ready / Go-live Approved.

14. Không report đủ 14 mục.

**L. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2A FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2A SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS FOUNDATION ONLY
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

**PROMPT-P2.2A DOCUMENT STATUS: CLEAN FINAL**

### 20.2. Trạng thái thực thi

**LIMITED IMPLEMENTATION HANDOFF ONLY**

### 20.3. Phạm vi được phép

**SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS FOUNDATION ONLY**

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
