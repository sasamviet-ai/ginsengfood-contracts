**FILE:** **06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx**

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

### 1.3. Mode

**MODE: LIMITED IMPLEMENTATION**

### 1.4. Prompt liền trước

**PROMPT-P2.2D — BATCH / QC / RELEASE / WAREHOUSE / INVENTORY IMPLEMENTATION HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2E

PROMPT-P2.2E chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  P2.2A Implementation Report đã có.

4.  P2.2B Implementation Report đã có.

5.  P2.2C Implementation Report đã có.

6.  P2.2D Implementation Report đã có.

7.  Source / Raw / QC / Readiness foundation đã có.

8.  Production Order / Snapshot foundation đã có.

9.  Material Issue / Receipt / Raw Ledger foundation đã có.

10. Batch / QC / Release / Warehouse / Finished Goods Inventory foundation đã có.

11. Batch QC_PASS không đồng nghĩa Batch RELEASED đã được khóa.

12. Warehouse chỉ nhận Batch RELEASED đã được khóa.

13. Finished Goods Ledger credit foundation đã có.

14. Finished Goods Inventory không tự Sellable đã được khóa.

15. Boundary **Public Trace whitelist-only** đã được khóa.

16. Boundary **QR VOID/FAILED không public-valid** đã được khóa.

17. Boundary **Recall / Sale Lock thắng Commerce, AI, Ads, Live, CRM, Gateway, IVR** đã được khóa.

18. PHASE 0 Foundation có Actor / RBAC / Audit / Evidence / Idempotency foundation.

19. Owner/dev lead cho phép limited implementation.

20. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2F

Chỉ được chuyển sang **P2.2F** khi:

1.  Internal Traceability / Genealogy foundation đã có.

2.  Trace link từ Source / Raw Lot / Production Order / Material Issue / Batch / Warehouse Receipt đã có hoặc gap được ghi rõ.

3.  QR foundation đã có.

4.  QR status boundary đã có.

5.  QR VOID/FAILED không public-valid.

6.  Public Trace DTO whitelist đã có.

7.  Public Trace không lộ private/internal field.

8.  Recall Case foundation đã có.

9.  Recall impact analysis foundation đã có.

10. Hold / Sale Lock foundation đã có.

11. Recall / Sale Lock có downstream suppression boundary.

12. Recall / Sale Lock không bị Commerce / AI / Gateway / Ads / Live / CRM / IVR bypass.

13. Actor / RBAC / Audit / Evidence / Idempotency hook đã có ở mức foundation nếu scope hỗ trợ.

14. P2.2E report đủ 14 mục.

15. Không có P2 blocker nghiêm trọng trong Traceability / QR / Recall / Sale Lock.

16. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.2E.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

2.  Không còn P0/P1/P2 blocker mở.

3.  PHASE 2 evidence đã submit cho owner/reviewer.

4.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

5.  Global Gateway vẫn BLOCKED.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2E thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.2E là prompt limited implementation thứ năm của PHASE 2.

Prompt này chỉ triển khai giới hạn phần nền của:

1.  Internal Traceability / Genealogy.

2.  Trace Link / Genealogy Projection.

3.  QR foundation.

4.  QR status boundary.

5.  Public Trace whitelist DTO foundation.

6.  Public Trace private-field suppression.

7.  Recall Case foundation.

8.  Recall impact analysis foundation.

9.  Hold / Sale Lock foundation.

10. Downstream suppression boundary.

11. Recall / Traceability / QR actor / permission / audit / evidence / idempotency hooks ở mức foundation.

PROMPT-P2.2E không triển khai Commerce Runtime, AI Advisor Runtime, Facebook Gateway, Ads, MC AI Live, IVR hoặc Release Gateway đầy đủ.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2E là cho phép dev/Codex/Copilot triển khai giới hạn:

1.  Traceability foundation.

2.  Genealogy linkage từ source/raw lot đến warehouse receipt.

3.  Trace gap detection foundation nếu thuộc scope.

4.  QR entity/model foundation.

5.  QR generated / printed / void / failed status foundation.

6.  QR public-valid guard.

7.  Public Trace whitelist-only response boundary.

8.  Public Trace private/internal field suppression.

9.  Recall Case foundation.

10. Recall impact analysis foundation.

11. Hold / Sale Lock foundation.

12. Downstream suppression boundary cho Commerce / AI / Gateway / Ads / Live / CRM / IVR.

13. Recall / Sale Lock audit / evidence / idempotency hooks nếu foundation hỗ trợ.

14. Test/smoke tối thiểu cho Traceability / QR / Public Trace / Recall / Sale Lock.

15. Report implementation đầy đủ 14 mục.

### 2.4. Tuyên bố bắt buộc

Đây là prompt **LIMITED IMPLEMENTATION**.

Agent được phép sửa code **chỉ trong phạm vi Traceability / QR / Public Trace / Recall / Sale Lock foundation**.

Agent không được mở rộng sang:

1.  Commerce Sellable Gate đầy đủ.

2.  Price / Program / Quote.

3.  Cart / Order.

4.  Payment.

5.  Shipping.

6.  AI Advisor tư vấn/chốt đơn.

7.  Facebook Gateway delivery.

8.  Ads scale.

9.  MC AI Live runtime.

10. IVR order confirmation.

11. Release Gateway.

12. MISA integration đầy đủ.

13. Notification delivery đầy đủ.

14. CRM automation đầy đủ.

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

7.  Đọc P2.2D Implementation Report.

8.  Đọc PHASE 0 Validation Report.

9.  Đọc PHASE 1 Smoke / Evidence / Implementation Report.

10. Sửa file trong phạm vi Traceability / QR / Public Trace / Recall / Sale Lock foundation.

11. Bổ sung hoặc chuẩn hóa Traceability model/service/repository nếu cần.

12. Bổ sung hoặc chuẩn hóa Genealogy Link foundation nếu cần.

13. Bổ sung hoặc chuẩn hóa QR model/service/repository nếu cần.

14. Bổ sung hoặc chuẩn hóa Public Trace whitelist DTO nếu cần.

15. Bổ sung hoặc chuẩn hóa Recall Case model/service/repository nếu cần.

16. Bổ sung hoặc chuẩn hóa Hold / Sale Lock foundation nếu cần.

17. Bổ sung hoặc chuẩn hóa downstream suppression boundary nếu cần.

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

6.  Đã đọc P2.2D Implementation Report.

7.  Đã đọc PHASE 0 Validation Report.

8.  Đã đọc PHASE 1 Smoke / Evidence Report.

9.  Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

10. Đã inspect codebase thật.

11. Đã xác định Source / Raw / QC / Readiness foundation đã có hoặc gap đã rõ.

12. Đã xác định Production Order / Snapshot foundation đã có hoặc gap đã rõ.

13. Đã xác định Material Issue / Receipt / Ledger foundation đã có hoặc gap đã rõ.

14. Đã xác định Batch / Release / Warehouse / Inventory foundation đã có hoặc gap đã rõ.

15. Đã xác định file nào thuộc scope P2.2E.

16. Đã xác định file nào không thuộc scope P2.2E.

17. Đã xác nhận không cần tự đổi nghiệp vụ.

18. Đã xác nhận không cần hardcode policy.

19. Đã xác nhận không triển khai Commerce Runtime trong prompt này.

20. Đã xác nhận không triển khai AI / Gateway / Ads / Live / IVR trong prompt này.

21. Đã xác nhận không mở Global Gateway trong prompt này.

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

6.  **PROMPT-P2.2D Implementation Report**

7.  **PHASE 0 Validation Report**

8.  **PHASE 1 Smoke / Evidence / Implementation Report**

9.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

10. **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

11. **TECH-11 — Implementation Roadmap / Dev Phase Plan**

12. **TECH-12 — Phase Backlog Pack**

13. **TECH-13 — Codex / Copilot Dev Prompt Pack**

14. Traceability / QR / Recall / Sale Lock source-of-truth nếu đã có.

15. Batch / Warehouse / Inventory source-of-truth từ P2.2D.

16. Public/private field policy nếu đã có.

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PROMPT-P2/P2.1/P2.2A/P2.2B/P2.2C/P2.2D là đầu vào analysis/design/implementation, không phải release evidence.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P2.1 đã cho phép.

9.  Nếu nghiệp vụ Traceability / QR / Recall / Sale Lock chưa có source-of-truth thì dừng phần đó và báo owner decision required.

10. Evidence submitted chưa phải evidence accepted.

11. Public Trace chỉ được dùng whitelist DTO, không suy luận từ internal model.

## 5. OBJECTIVE

### 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

1.  Traceability foundation.

2.  Internal Genealogy Link foundation.

3.  Trace projection foundation nếu thuộc scope.

4.  Trace gap detection foundation nếu thuộc scope.

5.  QR foundation.

6.  QR status lifecycle foundation.

7.  QR public-valid guard.

8.  Public Trace whitelist DTO foundation.

9.  Public Trace private/internal field suppression.

10. Recall Case foundation.

11. Recall Impact Analysis foundation.

12. Hold / Sale Lock foundation.

13. Downstream suppression boundary.

14. Recall / Sale Lock actor / permission / audit / evidence / idempotency hooks ở mức foundation.

15. Test/smoke tối thiểu.

16. Report implementation đầy đủ 14 mục.

### 5.2. Mục tiêu nền tảng

P2.2E phải tạo nền để các prompt sau có thể tiếp tục:

1.  **PROMPT-P2.2F — PHASE 2 Smoke / Evidence / Implementation Report**

2.  **PHASE 3 — Commerce Runtime** sau khi PHASE 2 đủ evidence/smoke/owner review.

3.  **PHASE 4 — AI Advisor Runtime** sau Commerce.

4.  **PHASE 5+ Channel / Ads / Live / IVR** theo roadmap sau.

## 6. SCOPE IN

### 6.1. Traceability Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Traceability entity/model nếu source-of-truth yêu cầu.

2.  Trace link model.

3.  Genealogy relation model.

4.  Source Origin linkage.

5.  Raw Material linkage.

6.  Raw Lot linkage.

7.  Production Order linkage.

8.  Material Issue linkage.

9.  Material Receipt linkage.

10. Batch linkage.

11. Batch Release linkage.

12. Warehouse Receipt linkage.

13. Finished Goods Ledger linkage nếu thuộc scope.

14. Trace actor/correlation/audit hook nếu foundation hỗ trợ.

15. Trace validation foundation.

Traceability không đồng nghĩa:

1.  Public Trace.

2.  QR valid.

3.  Product sellable.

4.  Recall closed.

5.  Release Ready.

### 6.2. Genealogy Link Foundation

Internal genealogy phải hỗ trợ liên kết tối thiểu:

1.  Source Origin → Raw Material Receipt.

2.  Raw Material Receipt → Raw Lot.

3.  Raw Lot → Material Issue.

4.  Material Issue → Production Order.

5.  Production Order → Batch.

6.  Batch → Batch QC.

7.  Batch → Batch Release.

8.  Batch Release → Warehouse Receipt.

9.  Warehouse Receipt → Finished Goods Ledger.

10. Finished Goods Ledger → SKU / Batch / Warehouse location nếu có.

Agent phải bảo đảm:

1.  Internal genealogy là dữ liệu nội bộ.

2.  Internal genealogy không được public trực tiếp.

3.  Public response phải đi qua Public Trace whitelist DTO.

4.  Genealogy gap phải được phát hiện hoặc flagged nếu không đủ link.

### 6.3. Trace Gap Detection Foundation

Nếu scope cho phép, agent được phép triển khai trace gap detection foundation:

1.  Missing raw lot link.

2.  Missing production order link.

3.  Missing batch link.

4.  Missing warehouse receipt link.

5.  Missing QR mapping.

6.  Missing public trace policy.

7.  Missing recall impact path.

8.  Inconsistent state chain.

Trace gap không được public chi tiết.

Trace gap public response phải fail-safe hoặc trả thông báo an toàn nếu public trace không đủ dữ liệu.

### 6.4. QR Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  QR entity/model.

2.  QR code/hash/token.

3.  Linked SKU.

4.  Linked Batch.

5.  Linked Warehouse Receipt nếu policy yêu cầu.

6.  QR status.

7.  QR generatedAt.

8.  QR printedAt nếu có.

9.  QR voidedAt nếu có.

10. QR failedReason nếu có.

11. QR actor/correlation/audit hook nếu foundation hỗ trợ.

12. QR idempotency hook nếu command có side effect.

13. QR validation foundation.

### 6.5. QR Status Lifecycle

QR status tối thiểu có thể gồm:

| **Status**   | **Ý nghĩa**                   |
|--------------|-------------------------------|
| GENERATED    | QR đã được sinh               |
| PRINT_QUEUED | QR chờ in                     |
| PRINTED      | QR đã in                      |
| REPRINTED    | QR được in lại theo quy trình |
| FAILED       | QR tạo/in thất bại            |
| VOID         | QR bị vô hiệu hóa             |
| BLOCKED      | QR bị chặn bởi policy         |
| ARCHIVED     | QR lưu trữ                    |

Agent phải bảo đảm:

1.  QR FAILED không public-valid.

2.  QR VOID không public-valid.

3.  QR BLOCKED không public-valid.

4.  QR thiếu trace projection không public-valid.

5.  QR thiếu public policy không public-valid.

6.  QR linked recall/sale lock phải fail-safe theo policy.

Nguyên tắc bắt buộc:

**QR VOID/FAILED không public-valid.**

### 6.6. Public Trace Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Public Trace DTO.

2.  Public Trace whitelist fields.

3.  Public Trace resolver boundary.

4.  Public Trace policy check.

5.  Public Trace QR status check.

6.  Public Trace recall/sale lock check nếu policy yêu cầu.

7.  Public Trace safe error response.

8.  Public Trace private/internal field suppression.

9.  Public Trace audit/log hook nếu policy yêu cầu.

10. Public Trace no-write boundary.

Public Trace chỉ được đọc dữ liệu public-safe.

Nguyên tắc bắt buộc:

**Public Trace whitelist-only.**

### 6.7. Public Trace Whitelist Fields

Public Trace có thể cho phép các field an toàn nếu source-of-truth/policy cho phép:

1.  Public product name.

2.  Public SKU name.

3.  Batch public code nếu policy cho phép.

4.  Production date hoặc date range nếu policy cho phép.

5.  Expiry/best-before nếu có và policy cho phép.

6.  General source region nếu public-safe.

7.  Public quality/release status dạng an toàn.

8.  Public trace message.

9.  Public brand/company info.

10. Public usage/storage note nếu có.

Không public mặc định nếu chưa whitelist.

### 6.8. Public Trace Forbidden Fields

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

### 6.9. Recall Case Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Recall Case entity/model.

2.  Recall case code.

3.  Recall reason.

4.  Recall severity nếu source-of-truth có.

5.  Recall status.

6.  Linked SKU / Batch / QR / Raw Lot / Production Order nếu có.

7.  Recall impact analysis reference.

8.  Recall evidence reference.

9.  Recall actor/correlation/audit hook nếu foundation hỗ trợ.

10. Recall idempotency hook nếu command có side effect.

11. Recall validation foundation.

Recall không đồng nghĩa:

1.  Recall closed.

2.  CAPA complete.

3.  Evidence accepted.

4.  Release Ready.

5.  Go-live decision.

### 6.10. Recall Status Lifecycle

Recall status tối thiểu có thể gồm:

| **Status**                | **Ý nghĩa**                                |
|---------------------------|--------------------------------------------|
| OPEN                      | Recall/incident được mở                    |
| IMPACT_ANALYSIS           | Đang phân tích ảnh hưởng                   |
| HOLD_APPLIED              | Đã áp hold/sale lock                       |
| NOTIFICATION_REQUESTED    | Đã yêu cầu notification nếu có             |
| IN_PROGRESS               | Đang xử lý                                 |
| CAPA_REQUIRED             | Cần CAPA/evidence                          |
| CLOSED                    | Đã đóng theo điều kiện đầy đủ              |
| CLOSED_WITH_RESIDUAL_RISK | Đóng có rủi ro tồn dư, cần reason/evidence |
| CANCELLED                 | Hủy case theo quy trình                    |
| BLOCKED                   | Bị chặn do thiếu evidence/policy           |

### 6.11. Recall Impact Analysis Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Impact analysis service.

2.  Impact snapshot foundation.

3.  Impacted SKU.

4.  Impacted batch.

5.  Impacted QR.

6.  Impacted warehouse receipt.

7.  Impacted finished goods ledger/balance nếu có.

8.  Impacted raw lot nếu trace backward có.

9.  Impacted production order.

10. Impacted channel/downstream references nếu có.

11. Impact evidence/audit linkage.

Impact snapshot không được public trực tiếp.

Impact snapshot phục vụ recall/hold/sale lock/internal decision.

### 6.12. Hold / Sale Lock Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Hold entity/model nếu có.

2.  Sale Lock entity/model.

3.  Lock target type: SKU / Batch / QR / Warehouse Receipt / Product nếu policy cho phép.

4.  Lock status.

5.  Lock reason.

6.  Lock appliedBy / appliedAt.

7.  Lock releasedBy / releasedAt nếu có.

8.  Lock evidence reference nếu policy yêu cầu.

9.  Lock audit hook.

10. Lock idempotency hook nếu command có side effect.

11. Lock validation foundation.

12. Lock downstream suppression boundary.

Nguyên tắc bắt buộc:

**Recall / Sale Lock thắng Commerce, AI, Ads, Live, CRM, Gateway, IVR.**

### 6.13. Downstream Suppression Boundary

Agent được phép triển khai hoặc chuẩn hóa suppression boundary ở mức foundation:

1.  Commerce suppression flag/hook boundary.

2.  AI Advisor suppression hook boundary.

3.  Gateway suppression hook boundary.

4.  Ads suppression hook boundary.

5.  Live suppression hook boundary.

6.  CRM suppression hook boundary.

7.  IVR suppression hook boundary.

8.  Notification handoff reference nếu có.

P2.2E không triển khai các hệ thống downstream đầy đủ.

P2.2E chỉ tạo boundary/hook để các phase sau tiêu thụ.

## 7. BOUNDARY BẮT BUỘC

### 7.1. Internal Trace vs Public Trace Boundary

Internal Trace là dữ liệu nội bộ.

Public Trace là dữ liệu đã qua whitelist.

Không được public trực tiếp internal trace.

Nguyên tắc bắt buộc:

**Public Trace whitelist-only.**

### 7.2. QR Public Valid Boundary

QR public-valid chỉ khi:

1.  QR tồn tại.

2.  QR status hợp lệ.

3.  QR không VOID.

4.  QR không FAILED.

5.  QR không BLOCKED.

6.  QR có trace projection hợp lệ.

7.  QR có public trace policy hợp lệ.

8.  Không bị recall/sale lock theo policy.

9.  Public DTO không có private leak.

Nguyên tắc bắt buộc:

**QR VOID/FAILED không public-valid.**

### 7.3. Recall / Sale Lock Boundary

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

### 7.4. Recall Close Boundary

Recall close không được thực hiện nếu:

1.  Impact analysis chưa đủ.

2.  Required evidence chưa accepted.

3.  CAPA required nhưng chưa có evidence.

4.  Residual risk nhưng không có reason.

5.  Actor không đủ quyền.

6.  Audit không ghi được nếu bắt buộc.

7.  Sale lock cần giữ nhưng bị remove sai.

8.  Notification handoff pending nếu policy yêu cầu.

P2.2E chỉ làm foundation nếu close flow thuộc scope.

Nếu close flow vượt scope, ghi gap/handoff.

### 7.5. Public Trace vs Sellable Boundary

Public Trace valid không đồng nghĩa SKU sellable.

Public Trace chỉ là truy xuất thông tin an toàn.

Sellable thuộc PHASE 3 Commerce Runtime.

### 7.6. Sale Lock vs Inventory Boundary

Có tồn kho không đồng nghĩa được bán.

Nếu Sale Lock active:

1.  Commerce phải bị chặn ở phase sau.

2.  AI Advisor không được chốt đơn ở phase sau.

3.  Gateway không được kéo/chốt bán sai.

4.  Ads không được scale SKU bị lock.

5.  IVR không được xác nhận đơn có sản phẩm stop-sale.

## 8. SCOPE OUT

PROMPT-P2.2E không được triển khai:

1.  Commerce Sellable Gate đầy đủ.

2.  Price / Program / Quote.

3.  Cart / Order.

4.  Payment.

5.  Shipping.

6.  AI Advisor tư vấn/chốt đơn.

7.  Facebook Gateway response delivery.

8.  Ads scale logic.

9.  MC AI Live runtime.

10. IVR order confirmation.

11. CRM automation đầy đủ.

12. Notification delivery đầy đủ.

13. Release Gateway đầy đủ.

14. MISA integration đầy đủ.

15. Costing/accounting đầy đủ.

16. Permanent production go-live decision.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

## 9. ALLOWED FILE CHANGE BOUNDARY

### 9.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

1.  Traceability model/entity/service/repository foundation.

2.  Genealogy Link model/entity/service foundation.

3.  Trace Projection model/service nếu thuộc scope.

4.  QR model/entity/service/repository foundation.

5.  QR status validation.

6.  Public Trace DTO/resolver/policy foundation.

7.  Public Trace private field suppression.

8.  Recall Case model/entity/service/repository foundation.

9.  Recall Impact Analysis foundation.

10. Hold / Sale Lock model/entity/service foundation.

11. Downstream suppression boundary/hook foundation.

12. Migration Traceability / QR / Recall / Sale Lock nếu đã được scope cho phép.

13. Test/smoke Traceability / QR / Public Trace / Recall / Sale Lock.

14. Seed/dev fixture nếu đã được P2.1 cho phép và không chứa production secret.

### 9.2. File không được sửa

Agent không được sửa:

1.  Commerce runtime files.

2.  Price / Quote / Cart / Order files.

3.  Payment files.

4.  AI Advisor files.

5.  Facebook Gateway files.

6.  Ads files.

7.  MC AI Live files.

8.  IVR files.

9.  CRM automation files.

10. Notification delivery files nếu không thuộc boundary.

11. Release Gateway files.

12. Production config/release flag.

13. Global Gateway config.

### 9.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

**BLOCKED — FILE BOUNDARY UNCLEAR**

## 10. IMPLEMENTATION REQUIREMENTS

### 10.1. Traceability Requirements

Traceability foundation tối thiểu cần có:

1.  traceId hoặc genealogyId.

2.  sourceOriginRef nếu có.

3.  rawMaterialReceiptRef.

4.  rawLotRef.

5.  productionOrderRef.

6.  materialIssueRef.

7.  materialReceiptRef nếu có.

8.  batchRef.

9.  batchReleaseRef nếu có.

10. warehouseReceiptRef.

11. skuRef.

12. traceStatus.

13. traceGapFlag nếu có.

14. actor/correlation/audit linkage nếu command thuộc scope.

15. Không public trực tiếp.

### 10.2. QR Requirements

QR foundation tối thiểu cần có:

1.  qrId.

2.  qrCode hoặc qrHash/token.

3.  linkedSkuId.

4.  linkedBatchId.

5.  linkedWarehouseReceiptId nếu policy yêu cầu.

6.  qrStatus.

7.  generatedAt.

8.  printedAt nếu có.

9.  voidedAt nếu có.

10. failedReason nếu có.

11. actor/correlation/audit linkage nếu command thuộc scope.

12. idempotency reference nếu command có side effect.

13. publicValid evaluation boundary.

14. Không public-valid nếu VOID/FAILED/BLOCKED.

### 10.3. Public Trace Requirements

Public Trace foundation tối thiểu cần có:

1.  publicTraceResolver.

2.  QR lookup boundary.

3.  QR status validation.

4.  Trace projection validation.

5.  Public whitelist DTO.

6.  Private/internal field suppression.

7.  Recall/Sale Lock check nếu policy yêu cầu.

8.  Safe error response.

9.  No write side effect.

10. Public response audit/log nếu policy yêu cầu.

11. Rate limit hook nếu foundation có.

12. No direct internal entity exposure.

### 10.4. Recall Requirements

Recall Case foundation tối thiểu cần có:

1.  recallCaseId.

2.  recallCaseCode.

3.  recallReason.

4.  recallSeverity nếu có.

5.  recallStatus.

6.  linkedSkuId nếu có.

7.  linkedBatchId nếu có.

8.  linkedQrId nếu có.

9.  linkedWarehouseReceiptId nếu có.

10. impactAnalysisRef.

11. evidenceRefs nếu policy yêu cầu.

12. actor/correlation/audit linkage.

13. idempotency reference nếu command có side effect.

14. saleLockRefs nếu có.

15. notificationRequestRef nếu có boundary.

### 10.5. Sale Lock Requirements

Sale Lock foundation tối thiểu cần có:

1.  saleLockId.

2.  targetType.

3.  targetId.

4.  lockReason.

5.  lockStatus.

6.  appliedBy.

7.  appliedAt.

8.  releasedBy nếu có.

9.  releasedAt nếu có.

10. evidenceRefs nếu policy yêu cầu.

11. recallCaseRef nếu có.

12. actor/correlation/audit linkage.

13. idempotency reference nếu command có side effect.

14. downstreamSuppressionFlag/hook boundary.

### 10.6. Downstream Suppression Requirements

Suppression boundary tối thiểu cần cung cấp:

1.  targetType.

2.  targetId.

3.  suppressionReason.

4.  suppressionSource.

5.  active/inactive status.

6.  appliedAt.

7.  actor/correlation/audit reference.

8.  consumer systems list.

9.  safe response for downstream.

10. fail-safe if suppression runtime unavailable.

Consumer systems gồm:

1.  Commerce.

2.  AI Advisor.

3.  Facebook Gateway.

4.  Ads.

5.  MC AI Live.

6.  CRM.

7.  IVR.

8.  Any future selling channel.

## 11. DATABASE / MIGRATION / SEED RULE

### 11.1. Database / migration rule

P2.2E có thể cần migration cho Traceability / QR / Recall / Sale Lock foundation.

Agent chỉ được tạo migration khi:

1.  P2.1 đã xác định cần.

2.  Repo đang dùng migration chuẩn.

3.  Migration chỉ phục vụ Traceability / QR / Recall / Sale Lock foundation.

4.  Không tạo Commerce / Order / Payment table trong prompt này.

5.  Không tạo AI / Gateway / Ads / Live / IVR table trong prompt này.

6.  Không update database production.

7.  Không chạy production migration.

8.  Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

**BLOCKED — TRACEABILITY / QR / RECALL / SALE LOCK SCHEMA APPROVAL REQUIRED**

### 11.2. Seed rule

P2.2E mặc định không seed production recall/QR thật.

Nếu cần seed/dev fixture:

1.  Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

2.  Không seed secret.

3.  Không seed production QR thật.

4.  Không seed public trace thật cho production.

5.  Không seed recall/sale lock production thật.

6.  Không seed Commerce suppression side effect ngoài controlled fixture.

7.  Seed phải idempotent nếu có.

8.  Report rõ trong mục 12.

Nếu chưa có source-of-truth Traceability / QR / Recall / Sale Lock, không tạo seed.

## 12. TEST / SMOKE REQUIREMENTS

### 12.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

1.  Tạo internal trace/genealogy từ raw lot đến warehouse receipt.

2.  Missing genealogy link bị flagged trace gap.

3.  QR generated hợp lệ.

4.  QR VOID không public-valid.

5.  QR FAILED không public-valid.

6.  QR missing trace projection không public-valid.

7.  Public Trace response chỉ whitelist field.

8.  Public Trace không lộ private/internal field.

9.  Public Trace safe error khi QR invalid.

10. Recall Case open hợp lệ.

11. Recall impact analysis tìm impacted batch/QR/SKU.

12. Sale Lock applied cho target hợp lệ.

13. Sale Lock active tạo suppression boundary.

14. Sale Lock active chặn downstream hook nếu foundation có.

15. Sale Lock release chỉ khi guard pass.

16. Recall close cần accepted evidence nếu policy yêu cầu.

17. Evidence SUBMITTED không pass nếu require ACCEPTED.

18. Trace / QR / Recall / Sale Lock success/deny có audit event nếu hook hỗ trợ.

19. Retry recall/sale lock same idempotency key/payload không tạo duplicate nếu hook có.

### 12.2. Test không được phép

Không được viết test cho:

1.  Full Commerce Sellable Gate.

2.  Price / Quote / Cart / Order.

3.  Payment.

4.  Shipping.

5.  AI Advisor tư vấn/chốt.

6.  Facebook Gateway response delivery.

7.  Ads scale.

8.  MC AI Live runtime.

9.  IVR call/confirmation.

10. CRM automation đầy đủ.

11. Release Gateway đầy đủ.

12. MISA integration đầy đủ.

### 12.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

| **Smoke ID**    | **Scenario**                                              | **Expected Result**                                     |
|-----------------|-----------------------------------------------------------|---------------------------------------------------------|
| P2.2E-SMOKE-001 | Build internal genealogy                                  | Trace link từ raw lot → production → batch → warehouse  |
| P2.2E-SMOKE-002 | Missing trace link                                        | Trace gap flagged                                       |
| P2.2E-SMOKE-003 | QR GENERATED/PRINTED                                      | QR có status hợp lệ                                     |
| P2.2E-SMOKE-004 | QR VOID                                                   | Public Trace không valid                                |
| P2.2E-SMOKE-005 | QR FAILED                                                 | Public Trace không valid                                |
| P2.2E-SMOKE-006 | Public Trace response                                     | Whitelist-only                                          |
| P2.2E-SMOKE-007 | Public Trace private field attempt                        | Không lộ private/internal field                         |
| P2.2E-SMOKE-008 | Recall Case OPEN                                          | Recall case được tạo                                    |
| P2.2E-SMOKE-009 | Recall impact analysis                                    | Xác định impacted batch/QR/SKU                          |
| P2.2E-SMOKE-010 | Sale Lock active                                          | Target bị suppression                                   |
| P2.2E-SMOKE-011 | Sale Lock active downstream hook                          | Commerce/AI/Gateway/Ads/Live/CRM/IVR bị chặn ở boundary |
| P2.2E-SMOKE-012 | Evidence SUBMITTED dùng cho recall close require ACCEPTED | Không pass                                              |
| P2.2E-SMOKE-013 | Sale Lock release thiếu permission/evidence               | DENY                                                    |
| P2.2E-SMOKE-014 | Recall/Sale Lock success/deny                             | Có audit event nếu hook hỗ trợ                          |
| P2.2E-SMOKE-015 | Retry same idempotency key/payload                        | Không duplicate recall/lock side effect                 |

Không gọi các smoke này là Global Smoke Pass.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

1.  Không public internal trace trực tiếp.

2.  Không public private/internal field.

3.  Không hardcode Public Trace từ internal entity.

4.  Không để QR VOID public-valid.

5.  Không để QR FAILED public-valid.

6.  Không để QR BLOCKED public-valid.

7.  Không để missing trace projection vẫn public như hợp lệ.

8.  Không để Public Trace lộ supplier/cost/formula/QC defect/personnel/audit/MISA/evidence private.

9.  Không để Recall/Sale Lock bị downstream bypass.

10. Không để Sale Lock active mà Commerce/AI/Gateway boundary vẫn allow.

11. Không để Ads/Live/CRM/IVR bypass Sale Lock.

12. Không cho SUBMITTED evidence pass accepted requirement.

13. Không cho recall close thiếu evidence/impact analysis nếu policy yêu cầu.

14. Không tự triển khai Commerce Sellable Gate.

15. Không tự triển khai AI/Gateway/Ads/Live/IVR.

16. Không seed production recall/QR thật tùy tiện.

17. Không bypass permission.

18. Không mở Global Gateway.

19. Không gọi P2.2E xong là PHASE 2 Complete.

20. Không gọi Release Ready / Production Ready / Go-live Approved.

## 14. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đọc P2.2A Implementation Report.

4.  Đọc P2.2B Implementation Report.

5.  Đọc P2.2C Implementation Report.

6.  Đọc P2.2D Implementation Report.

7.  Đọc PHASE 0 Validation Report.

8.  Đọc PHASE 1 Smoke / Evidence Report.

9.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

10. Inspect codebase thật.

11. Xác định Source / Raw / Production / Material / Batch / Warehouse foundation đã có.

12. Xác định Traceability / QR / Recall / Sale Lock implementation hiện có.

13. Xác định file thuộc scope P2.2E.

14. Xác định file không được sửa.

15. Xác định có cần migration không.

16. Xác định có cần seed/dev fixture không.

17. Triển khai giới hạn Traceability foundation.

18. Triển khai giới hạn Genealogy Link foundation.

19. Triển khai giới hạn QR foundation.

20. Triển khai QR status boundary.

21. Triển khai Public Trace whitelist DTO foundation.

22. Triển khai Public Trace private/internal field suppression.

23. Triển khai Recall Case foundation.

24. Triển khai Recall Impact Analysis foundation.

25. Triển khai Hold / Sale Lock foundation.

26. Triển khai Downstream Suppression Boundary foundation.

27. Thêm/chỉnh test/smoke trong scope.

28. Chạy build/test/lint phù hợp.

29. Chạy migration validation nếu có migration.

30. Chạy seed validation nếu có seed.

31. Chạy git status/git diff.

32. Báo cáo đủ 14 mục.

## 15. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 15.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2E.

2.  Mode: LIMITED IMPLEMENTATION.

3.  Scope đã thực hiện.

4.  Traceability foundation đã triển khai gì.

5.  QR foundation đã triển khai gì.

6.  Public Trace whitelist đã triển khai gì.

7.  Recall foundation đã triển khai gì.

8.  Sale Lock / suppression boundary đã triển khai gì.

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

6.  Lý do từng file thuộc scope P2.2E.

7.  Xác nhận không sửa ngoài scope.

8.  Git diff summary.

### 15.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PROMPT-P2.2C Implementation Report.

6.  PROMPT-P2.2D Implementation Report.

7.  PHASE 0 Validation Report.

8.  PHASE 1 Smoke / Evidence Report.

9.  TECH-01.

10. TECH-10.

11. TECH-11.

12. TECH-12.

13. TECH-13.

14. Traceability / QR / Recall / Sale Lock source-of-truth nếu có.

### 15.4. Mục 4 — Evidence đã dùng

Liệt kê:

1.  Code inspection evidence.

2.  P2.2A Source / Raw / Readiness evidence.

3.  P2.2B Production Order / Snapshot evidence.

4.  P2.2C Material Issue / Receipt / Ledger evidence.

5.  P2.2D Batch / Warehouse / Inventory evidence.

6.  Traceability implementation evidence.

7.  QR implementation evidence.

8.  Public Trace whitelist evidence.

9.  Recall implementation evidence.

10. Sale Lock / Suppression boundary evidence.

11. Test evidence.

12. Build evidence.

13. Migration evidence nếu có.

14. Seed validation evidence nếu có.

15. Git diff evidence.

16. Gap evidence.

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

1.  Không chạy frontend build vì scope P2.2E không sửa frontend.

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

Mặc định không cần sửa Markdown trong P2.2E.

### 15.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có tạo migration không.

2.  Có chạy migration không.

3.  Có update database không.

4.  Migration có thuộc scope Traceability / QR / Recall / Sale Lock không.

5.  Nếu không, ghi rõ “Không áp dụng trong P2.2E”.

Không update database thật.

### 15.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có động tới seed/dev fixture không.

2.  Có validate seed không.

3.  Seed có liên quan Traceability / QR / Recall / Sale Lock không.

4.  Seed có idempotent không.

5.  Seed có tự tạo production QR thật không.

6.  Seed có tự public trace thật không.

7.  Seed có tự tạo recall/sale lock production thật không.

8.  Seed có tạo downstream suppression side effect ngoài controlled fixture không.

9.  Seed có chứa secret không.

10. Nếu không, ghi rõ “Không áp dụng trong P2.2E”.

### 15.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Traceability risk.

2.  Genealogy link risk.

3.  Trace gap detection risk.

4.  QR status risk.

5.  QR public-valid risk.

6.  Public Trace whitelist risk.

7.  Private/internal field leakage risk.

8.  Recall Case risk.

9.  Recall Impact Analysis risk.

10. Sale Lock risk.

11. Downstream suppression risk.

12. Evidence policy risk.

13. Audit hook risk.

14. Idempotency hook risk.

15. Commerce integration chưa triển khai.

16. AI/Gateway/Ads/Live/IVR suppression integration chưa triển khai.

17. Release Gateway risk.

18. Global Gateway risk.

### 15.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Kết quả P2.2E.

2.  Việc còn lại cho P2.2F.

3.  Traceability / QR / Recall / Sale Lock gap còn lại.

4.  Evidence cần owner review.

5.  Smoke cần bổ sung.

6.  Handoff rõ cho PHASE 3: Commerce phải dùng Sale Lock / Recall / Finished Goods truth.

7.  Handoff rõ cho PHASE 4–8: AI / Gateway / Ads / Live / IVR phải tôn trọng suppression.

8.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2E FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2E TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 16. DONE GATE

PROMPT-P2.2E chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PROMPT-P2 Analysis Report.

3.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đã đọc P2.2A Implementation Report.

5.  Đã đọc P2.2B Implementation Report.

6.  Đã đọc P2.2C Implementation Report.

7.  Đã đọc P2.2D Implementation Report.

8.  Đã đọc PHASE 0 Validation Report.

9.  Đã đọc PHASE 1 Smoke / Evidence Report.

10. Đã inspect codebase thật.

11. Đã giới hạn scope đúng P2.2E.

12. Đã triển khai hoặc chuẩn hóa Traceability foundation.

13. Đã triển khai hoặc chuẩn hóa Genealogy Link foundation.

14. Đã triển khai hoặc chuẩn hóa QR foundation.

15. Đã bảo đảm QR VOID/FAILED không public-valid.

16. Đã triển khai hoặc chuẩn hóa Public Trace whitelist DTO.

17. Đã bảo đảm Public Trace không lộ private/internal field.

18. Đã triển khai hoặc chuẩn hóa Recall Case foundation.

19. Đã triển khai hoặc chuẩn hóa Recall Impact Analysis foundation.

20. Đã triển khai hoặc chuẩn hóa Hold / Sale Lock foundation.

21. Đã triển khai downstream suppression boundary.

22. Đã bảo đảm Recall / Sale Lock thắng downstream ở mức boundary.

23. Không triển khai Commerce Runtime đầy đủ.

24. Không triển khai AI / Gateway / Ads / Live / IVR đầy đủ.

25. Không triển khai Release Gateway đầy đủ.

26. Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

27. Có build/test result nếu chạy được.

28. Có git diff summary.

29. Có report đủ 14 mục.

30. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

31. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**P2.2E LIMITED IMPLEMENTATION COMPLETED FOR TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK FOUNDATION ONLY**

Không được gọi:

- PHASE 2 Complete.

- Full Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

## 17. FAIL GATE

PROMPT-P2.2E phải fail nếu:

1.  Agent sửa ngoài scope.

2.  Agent tự triển khai Commerce Runtime đầy đủ.

3.  Agent tự triển khai AI Advisor runtime đầy đủ.

4.  Agent tự triển khai Facebook Gateway delivery đầy đủ.

5.  Agent tự triển khai Ads / MC AI Live / IVR đầy đủ.

6.  Agent tự triển khai Release Gateway đầy đủ.

7.  Agent public internal trace trực tiếp.

8.  Agent public private/internal field.

9.  Agent hardcode Public Trace từ internal entity.

10. Agent cho QR VOID public-valid.

11. Agent cho QR FAILED public-valid.

12. Agent cho QR BLOCKED public-valid.

13. Agent cho missing trace projection vẫn public-valid.

14. Agent để Public Trace lộ supplier/cost/formula/QC defect/personnel/audit/MISA/evidence private.

15. Agent để Recall/Sale Lock bị downstream bypass.

16. Agent để Sale Lock active mà Commerce/AI/Gateway boundary vẫn allow.

17. Agent để Ads/Live/CRM/IVR bypass Sale Lock.

18. Agent cho SUBMITTED evidence pass accepted requirement.

19. Agent cho recall close thiếu evidence/impact analysis nếu policy yêu cầu.

20. Agent tạo seed production QR/recall/sale lock thật tùy tiện.

21. Agent tạo seed public trace thật ngoài controlled fixture.

22. Agent tạo seed chứa secret.

23. Agent đổi gateway/release flag.

24. Agent không chạy hoặc không báo test/build.

25. Agent không report đủ 14 mục.

26. Agent gọi Release Ready / Production Ready / Go-live Approved.

27. Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

**PROMPT-P2.2E FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED**

## 18. DOWNSTREAM HANDOFF

### 18.1. Sang PROMPT-P2.2F

Nếu P2.2E đạt Done Gate, bước tiếp theo là:

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

**MODE: VALIDATION / SMOKE / EVIDENCE REPORT ONLY**

**V1.0 CLEAN FINAL**

P2.2F chỉ được bắt đầu khi:

1.  Source / Raw / QC / Readiness foundation từ P2.2A đã có.

2.  Production Order / Snapshot foundation từ P2.2B đã có.

3.  Material Issue / Receipt / Raw Ledger foundation từ P2.2C đã có.

4.  Batch / QC / Release / Warehouse / Finished Goods Inventory foundation từ P2.2D đã có.

5.  Traceability / QR / Public Trace / Recall / Sale Lock foundation từ P2.2E đã có.

6.  P2.2E report đủ 14 mục.

7.  Owner/dev lead cho phép validation/smoke/evidence report.

### 18.2. Không tự chuyển prompt

Agent không được tự chuyển sang P2.2F.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 19.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2E — TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK IMPLEMENTATION HANDOFF**

MODE:

**LIMITED IMPLEMENTATION**

PROMPT TIẾP THEO:

**PROMPT-P2.2F — PHASE 2 SMOKE / EVIDENCE / IMPLEMENTATION REPORT HANDOFF**

Bạn được phép sửa code **chỉ trong phạm vi Traceability / QR / Public Trace / Recall / Sale Lock foundation**.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được public internal trace trực tiếp.

Bạn không được để QR VOID/FAILED public-valid.

Bạn không được để Public Trace lộ private/internal field.

Bạn không được để Recall/Sale Lock bị downstream bypass.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PROMPT-P2.2B Implementation Report.

5.  PROMPT-P2.2C Implementation Report.

6.  PROMPT-P2.2D Implementation Report.

7.  PHASE 0 Validation Report.

8.  PHASE 1 Smoke / Evidence Report.

9.  TECH-01.

10. TECH-10.

11. TECH-11.

12. TECH-12.

13. TECH-13.

14. Traceability / QR / Recall / Sale Lock source-of-truth nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được triển khai:

1.  Traceability foundation.

2.  Internal Genealogy Link foundation.

3.  Trace projection foundation nếu thuộc scope.

4.  Trace gap detection foundation nếu thuộc scope.

5.  QR foundation.

6.  QR status lifecycle foundation.

7.  QR public-valid guard.

8.  Public Trace whitelist DTO foundation.

9.  Public Trace private/internal field suppression.

10. Recall Case foundation.

11. Recall Impact Analysis foundation.

12. Hold / Sale Lock foundation.

13. Downstream suppression boundary.

14. Audit / Evidence / Idempotency hooks nếu foundation hỗ trợ.

15. Test/smoke tối thiểu.

16. Report 14 mục.

**C. Scope Out**

Bạn không được triển khai:

1.  Commerce Sellable Gate đầy đủ.

2.  Price / Program / Quote.

3.  Cart / Order.

4.  Payment.

5.  Shipping.

6.  AI Advisor tư vấn/chốt đơn.

7.  Facebook Gateway response delivery.

8.  Ads scale.

9.  MC AI Live runtime.

10. IVR order confirmation.

11. CRM automation đầy đủ.

12. Notification delivery đầy đủ.

13. Release Gateway đầy đủ.

14. MISA integration đầy đủ.

**D. Boundary bắt buộc**

Bạn phải bảo đảm:

1.  Internal Trace không được public trực tiếp.

2.  Public Trace whitelist-only.

3.  QR VOID không public-valid.

4.  QR FAILED không public-valid.

5.  QR BLOCKED không public-valid.

6.  Missing trace projection không public-valid.

7.  Public Trace không lộ private/internal field.

8.  Recall / Sale Lock thắng Commerce / AI / Ads / Live / CRM / Gateway / IVR.

9.  Public Trace valid không đồng nghĩa Sellable.

10. Có tồn kho không đồng nghĩa được bán nếu Sale Lock active.

11. P2.2E không triển khai Commerce / AI / Gateway / Ads / Live / IVR đầy đủ.

**E. Allowed file change boundary**

Bạn chỉ được sửa file liên quan trực tiếp đến:

1.  Traceability model/entity/service/repository foundation.

2.  Genealogy Link model/entity/service foundation.

3.  Trace Projection model/service nếu thuộc scope.

4.  QR model/entity/service/repository foundation.

5.  QR status validation.

6.  Public Trace DTO/resolver/policy foundation.

7.  Public Trace private field suppression.

8.  Recall Case model/entity/service/repository foundation.

9.  Recall Impact Analysis foundation.

10. Hold / Sale Lock model/entity/service foundation.

11. Downstream suppression boundary/hook foundation.

12. Migration Traceability / QR / Recall / Sale Lock nếu đã được scope cho phép.

13. Test/smoke Traceability / QR / Public Trace / Recall / Sale Lock.

14. Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

**F. Database / migration / seed**

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

1.  Thuộc Traceability / QR / Recall / Sale Lock foundation.

2.  Có migration mechanism rõ.

3.  Không tạo Commerce / Order / Payment table.

4.  Không tạo AI / Gateway / Ads / Live / IVR table.

5.  Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

**BLOCKED — TRACEABILITY / QR / RECALL / SALE LOCK SCHEMA APPROVAL REQUIRED**

Nếu cần seed/dev fixture:

1.  Không chứa secret.

2.  Không seed production QR thật.

3.  Không seed public trace thật cho production.

4.  Không seed recall/sale lock production thật.

5.  Không tạo downstream suppression side effect ngoài controlled fixture.

6.  Phải idempotent nếu có seed validation.

7.  Report đầy đủ trong mục 12.

**G. Test/smoke tối thiểu**

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

1.  Build internal genealogy từ raw lot đến warehouse receipt.

2.  Missing genealogy link bị flagged trace gap.

3.  QR GENERATED/PRINTED có status hợp lệ.

4.  QR VOID không public-valid.

5.  QR FAILED không public-valid.

6.  Public Trace response whitelist-only.

7.  Public Trace không lộ private/internal field.

8.  Recall Case OPEN được tạo.

9.  Recall impact analysis xác định impacted batch/QR/SKU.

10. Sale Lock active tạo suppression.

11. Sale Lock active chặn Commerce/AI/Gateway/Ads/Live/CRM/IVR ở boundary.

12. Evidence SUBMITTED dùng cho recall close require ACCEPTED không pass.

13. Sale Lock release thiếu permission/evidence bị deny.

14. Recall/Sale Lock success/deny có audit event nếu hook hỗ trợ.

15. Retry same idempotency key/payload không duplicate recall/lock side effect.

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

1.  Đúng scope P2.2E.

2.  Traceability foundation có nền.

3.  Genealogy Link foundation có nền.

4.  QR foundation có nền.

5.  QR VOID/FAILED không public-valid.

6.  Public Trace whitelist DTO có nền.

7.  Public Trace không lộ private/internal field.

8.  Recall Case foundation có nền.

9.  Recall Impact Analysis foundation có nền.

10. Hold / Sale Lock foundation có nền.

11. Downstream suppression boundary có nền.

12. Recall / Sale Lock thắng downstream ở mức boundary.

13. Không triển khai Commerce / AI / Gateway / Ads / Live / IVR đầy đủ.

14. Không triển khai Release Gateway đầy đủ.

15. Có test/build hoặc báo rõ lý do không chạy.

16. Có report 14 mục.

17. Có git diff summary.

18. Global Gateway vẫn BLOCKED.

**K. Fail Gate**

Phải fail nếu:

1.  Sửa ngoài scope.

2.  Hardcode policy.

3.  Public internal trace trực tiếp.

4.  QR VOID/FAILED vẫn public-valid.

5.  Missing trace projection vẫn public-valid.

6.  Public Trace lộ private/internal field.

7.  Recall/Sale Lock bị downstream bypass.

8.  Sale Lock active nhưng Commerce/AI/Gateway boundary vẫn allow.

9.  SUBMITTED evidence pass accepted requirement.

10. Tự triển khai Commerce / AI / Gateway / Ads / Live / IVR đầy đủ.

11. Seed production QR/recall/sale lock thật tùy tiện.

12. Mở Gateway.

13. Gọi Release Ready / Production Ready / Go-live Approved.

14. Không report đủ 14 mục.

**L. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2E FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2E TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK FOUNDATION ONLY
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

**PROMPT-P2.2E DOCUMENT STATUS: CLEAN FINAL**

### 20.2. Trạng thái thực thi

**LIMITED IMPLEMENTATION HANDOFF ONLY**

### 20.3. Phạm vi được phép

**TRACEABILITY / QR / PUBLIC TRACE / RECALL / SALE LOCK FOUNDATION ONLY**

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
