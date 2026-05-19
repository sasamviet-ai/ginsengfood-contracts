**FILE:** **03-P2-2B-PRODUCTION-ORDER-SNAPSHOT-WORKSHOP.docx**

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

### 1.1. Phase hiện tại

**PHASE-02 — OPERATIONAL CORE**

### 1.2. Prompt hiện tại

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

### 1.3. Mode

**MODE: LIMITED IMPLEMENTATION**

### 1.4. Prompt liền trước

**PROMPT-P2.2A — SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS IMPLEMENTATION HANDOFF**

### 1.5. Prompt tiếp theo

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

### 1.6. Điều kiện bắt đầu P2.2B

PROMPT-P2.2B chỉ được bắt đầu khi:

1.  PROMPT-P2 Analysis Report đã có.

2.  PROMPT-P2.1 Technical Design Handoff đã có.

3.  P2.2A Implementation Report đã có.

4.  Product / SKU / Recipe / BOM / Formula Version foundation từ PHASE 1 đã có hoặc gap đã được ghi rõ.

5.  Source / Raw / Lot / QC / Readiness foundation từ P2.2A đã có hoặc gap đã được ghi rõ.

6.  Boundary **Production Order phải snapshot formula kind / version / ingredient / quantity / UOM** đã được khóa.

7.  Boundary **Production Order không được phụ thuộc động vào recipe hiện tại sau khi đã tạo** đã được khóa.

8.  PHASE 0 Foundation có Actor / RBAC / Audit / Evidence / Idempotency foundation.

9.  Owner/dev lead cho phép limited implementation.

10. Global Gateway vẫn BLOCKED.

### 1.7. Điều kiện chuyển sang P2.2C

Chỉ được chuyển sang **P2.2C** khi:

1.  Production Order foundation đã có.

2.  Production Demand / Production Order creation boundary đã rõ.

3.  Production Order linked SKU hợp lệ.

4.  Production Order linked Recipe hợp lệ.

5.  Formula Snapshot foundation đã có.

6.  Recipe Snapshot foundation đã có.

7.  Snapshot đã giữ được formula kind / version / ingredient / quantity / UOM.

8.  Production Order không bị thay đổi khi Recipe/BOM hiện tại bị sửa sau đó.

9.  Production Order state lifecycle đã có nền.

10. Workshop handoff foundation đã có nếu scope yêu cầu.

11. Actor / RBAC / Audit / Evidence / Idempotency hook đã có ở mức foundation nếu scope hỗ trợ.

12. P2.2B report đủ 14 mục.

13. Không có P2 blocker nghiêm trọng trong Production Order / Snapshot / Workshop.

14. Global Gateway vẫn BLOCKED.

### 1.8. Điều kiện chuyển sang PHASE 3

Chưa được chuyển sang PHASE 3 sau P2.2B.

PHASE 3 chỉ được bắt đầu sau khi hoàn tất:

1.  P2.2C — Material Issue / Material Receipt / Inventory Ledger.

2.  P2.2D — Batch / QC / Release / Warehouse / Inventory.

3.  P2.2E — Traceability / QR / Recall / Sale Lock.

4.  P2.2F — PHASE 2 Smoke / Evidence / Implementation Report.

5.  Không còn P0/P1/P2 blocker mở.

6.  Owner/dev lead cho phép viết **PROMPT-P3 — Commerce Runtime Analysis Only**.

## 2. HEADER

### 2.1. Tên prompt

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

### 2.2. Vị trí trong roadmap

PROMPT-P2.2B thuộc:

**PHASE-02 — OPERATIONAL CORE**

PROMPT-P2.2B là prompt limited implementation thứ hai của PHASE 2.

Prompt này chỉ triển khai giới hạn phần nền của:

1.  Production Demand Intake boundary.

2.  Production Order foundation.

3.  Production Order state lifecycle.

4.  Formula Snapshot foundation.

5.  Recipe Snapshot foundation.

6.  BOM Snapshot foundation.

7.  Workshop handoff foundation nếu thuộc scope.

8.  Production Order actor / permission / audit / evidence / idempotency hooks ở mức foundation.

PROMPT-P2.2B không triển khai Material Issue, Material Receipt, Inventory Ledger đầy đủ, Batch, Warehouse, Traceability, Recall hoặc Sale Lock.

### 2.3. Mục tiêu

Mục tiêu của PROMPT-P2.2B là cho phép dev/Codex/Copilot triển khai giới hạn:

1.  Production Demand-to-Production Order boundary.

2.  Production Order entity/model foundation.

3.  Production Order creation guard foundation.

4.  Production Order status lifecycle foundation.

5.  Production Order linked SKU / Recipe / BOM validation.

6.  Formula Snapshot / Recipe Snapshot / BOM Snapshot foundation.

7.  Snapshot immutability boundary.

8.  Workshop handoff foundation.

9.  Production Order actor / permission / audit / evidence / idempotency hooks ở mức foundation.

10. Test/smoke tối thiểu cho Production Order / Snapshot / Workshop.

11. Report implementation đầy đủ 14 mục.

### 2.4. Tuyên bố bắt buộc

Đây là prompt **LIMITED IMPLEMENTATION**.

Agent được phép sửa code **chỉ trong phạm vi Production Order / Snapshot / Workshop foundation**.

Agent không được mở rộng sang:

1.  Material Request đầy đủ.

2.  Material Issue đầy đủ.

3.  Material Receipt đầy đủ.

4.  Raw Inventory Ledger debit.

5.  Finished Goods Inventory.

6.  Batch / QC / Release.

7.  Warehouse Receipt.

8.  Traceability / QR / Public Trace.

9.  Recall / Sale Lock.

10. Commerce Runtime.

11. AI Advisor.

12. Facebook Gateway.

13. Ads.

14. MC AI Live.

15. IVR.

16. Release Gateway.

## 3. MODE: LIMITED IMPLEMENTATION

### 3.1. Chế độ thực thi

**MODE: LIMITED IMPLEMENTATION**

Agent được phép:

1.  Inspect codebase thật.

2.  Đọc PROMPT-P2 Analysis Report.

3.  Đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đọc P2.2A Implementation Report.

5.  Đọc PHASE 0 Validation Report.

6.  Đọc PHASE 1 Smoke / Evidence / Implementation Report.

7.  Sửa file trong phạm vi Production Order / Snapshot / Workshop foundation.

8.  Bổ sung hoặc chuẩn hóa Production Demand Intake boundary nếu cần.

9.  Bổ sung hoặc chuẩn hóa Production Order model/service/repository nếu cần.

10. Bổ sung hoặc chuẩn hóa Production Order status lifecycle nếu cần.

11. Bổ sung hoặc chuẩn hóa Formula Snapshot / Recipe Snapshot / BOM Snapshot nếu cần.

12. Bổ sung hoặc chuẩn hóa Workshop Handoff foundation nếu cần.

13. Bổ sung Production Order validation foundation.

14. Bổ sung test/smoke tối thiểu.

15. Chạy build/test/lint phù hợp.

16. Báo cáo đầy đủ 14 mục.

### 3.2. Điều kiện để được sửa file

Agent chỉ được sửa file khi đáp ứng đủ:

1.  Đã đọc PROMPT-P2 Analysis Report.

2.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đã đọc P2.2A Implementation Report.

4.  Đã đọc PHASE 0 Validation Report.

5.  Đã đọc PHASE 1 Smoke / Evidence Report.

6.  Đã đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

7.  Đã inspect codebase thật.

8.  Đã xác định Product / SKU / Recipe / BOM / Formula Version foundation đã có hoặc gap đã rõ.

9.  Đã xác định Source / Raw / QC / Readiness foundation từ P2.2A đã có hoặc gap đã rõ.

10. Đã xác định file nào thuộc scope P2.2B.

11. Đã xác định file nào không thuộc scope P2.2B.

12. Đã xác nhận không cần tự đổi nghiệp vụ.

13. Đã xác nhận không cần hardcode policy.

14. Đã xác nhận không triển khai Material Issue trong prompt này.

15. Đã xác nhận không triển khai Inventory Ledger đầy đủ trong prompt này.

16. Đã xác nhận không triển khai Batch / Warehouse / Traceability / Recall trong prompt này.

Thiếu một trong các điều kiện trên thì agent phải dừng và báo:

**BLOCKED — LIMITED IMPLEMENTATION PRECONDITION NOT MET**

## 4. SOURCE-OF-TRUTH BẮT BUỘC

### 4.1. Source chính

Agent phải đọc và ưu tiên:

1.  **PROMPT-P2 Analysis Report**

2.  **PROMPT-P2.1 Technical Design Handoff**

3.  **PROMPT-P2.2A Implementation Report**

4.  **PHASE 0 Validation Report**

5.  **PHASE 1 Smoke / Evidence / Implementation Report**

6.  **TECH-01 — Foundation / RBAC / Audit / Evidence / Idempotency**

7.  **TECH-10 — Global Smoke / UAT / Evidence / Release Gateway**

8.  **TECH-11 — Implementation Roadmap / Dev Phase Plan**

9.  **TECH-12 — Phase Backlog Pack**

10. **TECH-13 — Codex / Copilot Dev Prompt Pack**

11. Product / SKU / Recipe / BOM / Formula source-of-truth từ PHASE 1.

12. Production Order / Snapshot / Workshop source-of-truth nếu đã có.

13. Demand-to-Production source-of-truth nếu đã được owner cung cấp.

### 4.2. Quy tắc ưu tiên

Agent phải áp dụng:

1.  TECH mới thắng code cũ.

2.  TECH mới thắng tài liệu cũ.

3.  Code hiện tại chỉ là **CURRENT_IMPLEMENTATION_STATE_ONLY**.

4.  Tài liệu cũ chỉ là **LEGACY_REFERENCE_ONLY**.

5.  PROMPT-P2/P2.1/P2.2A là đầu vào analysis/design/implementation, không phải release evidence.

6.  Không dùng legacy làm nền nghiệp vụ.

7.  Không để code cũ thắng TECH mới.

8.  Nếu code hiện tại khác TECH mới thì báo conflict hoặc xử lý trong đúng scope nếu P2.1 đã cho phép.

9.  Nếu nghiệp vụ Production Order / Snapshot chưa có source-of-truth thì dừng phần đó và báo owner decision required.

10. Evidence submitted chưa phải evidence accepted.

## 5. OBJECTIVE

### 5.1. Mục tiêu triển khai

Agent phải triển khai giới hạn:

1.  Production Demand Intake boundary.

2.  Demand-to-Production Order resolver foundation.

3.  Production Order foundation.

4.  Production Order status lifecycle foundation.

5.  Production Order linked SKU validation.

6.  Production Order linked Recipe validation.

7.  Production Order linked Formula Version validation.

8.  Formula Snapshot foundation.

9.  Recipe Snapshot foundation.

10. BOM / Ingredient / Quantity / UOM Snapshot foundation.

11. Snapshot immutability boundary.

12. Workshop handoff foundation.

13. Production Order actor / permission / audit / evidence / idempotency hooks ở mức foundation.

14. Test/smoke tối thiểu.

15. Report implementation đầy đủ 14 mục.

### 5.2. Mục tiêu nền tảng

P2.2B phải tạo nền để các prompt sau có thể tiếp tục:

1.  **PROMPT-P2.2C — Material Issue / Material Receipt / Inventory Ledger**

2.  **PROMPT-P2.2D — Batch / QC / Release / Warehouse / Inventory**

3.  **PROMPT-P2.2E — Traceability / QR / Public Trace / Recall / Sale Lock**

4.  **PROMPT-P2.2F — PHASE 2 Smoke / Evidence / Implementation Report**

## 6. SCOPE IN

### 6.1. Production Demand Intake Boundary

Agent được phép triển khai hoặc chuẩn hóa boundary nhận nhu cầu sản xuất ở mức foundation.

Nguồn nhu cầu sản xuất hợp lệ có thể gồm:

1.  Nhu cầu tồn kho / kế hoạch bổ sung tồn.

2.  Nhu cầu từ bán hàng đã được hệ thống tổng hợp.

3.  Nhu cầu từ đơn đặt hàng đại lý / nhà phân phối.

4.  Nhu cầu kế hoạch sản xuất được owner phê duyệt.

5.  Nhu cầu điều chỉnh tồn hoặc chiến lược dự trữ nếu source-of-truth cho phép.

Agent phải bảo đảm:

1.  Sales không tự phát lệnh sản xuất trực tiếp.

2.  Đại lý / nhà phân phối không tự phát lệnh sản xuất trực tiếp.

3.  AI / Gateway / Ads / Live / IVR không tự phát lệnh sản xuất.

4.  Nhu cầu chỉ là input.

5.  Production Order chỉ được tạo qua resolver/guard/approval boundary.

6.  Demand phải có source reference nếu có.

7.  Demand phải có audit/actor/correlation nếu command thuộc scope.

8.  Demand thiếu dữ liệu thì không tự suy luận.

### 6.2. Demand-to-Production Order Resolver Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Demand source type.

2.  Demand reference ID.

3.  Demand quantity.

4.  Demand target SKU.

5.  Demand priority nếu có.

6.  Demand requested date nếu có.

7.  Demand approval state nếu có.

8.  Resolver boundary.

9.  Guard boundary.

10. Owner approval boundary nếu policy yêu cầu.

11. Demand-to-production handoff record nếu có.

Agent không được triển khai MRP đầy đủ trong P2.2B nếu chưa thuộc scope.

Agent không được tự tính kế hoạch mua hàng/nguyên liệu ở prompt này.

### 6.3. Production Order Foundation

Agent được phép triển khai hoặc chuẩn hóa:

1.  Production Order entity/model.

2.  Production Order code.

3.  Production Order linked SKU.

4.  Production Order linked Recipe.

5.  Production Order linked Formula Version.

6.  Production Order planned quantity.

7.  Production Order UOM.

8.  Production Order status.

9.  Production Order source demand reference.

10. Production Order createdBy/createdAt.

11. Production Order actor/correlation/audit hook nếu foundation hỗ trợ.

12. Production Order idempotency hook nếu command có side effect.

13. Production Order evidence hook nếu policy yêu cầu.

14. Production Order validation foundation.

### 6.4. Production Order Status Lifecycle

Production Order status foundation tối thiểu có thể gồm:

| **Status**  | **Ý nghĩa**                                                |
|-------------|------------------------------------------------------------|
| DRAFT       | Lệnh sản xuất nháp, chưa mở                                |
| OPEN        | Đã mở lệnh, chưa phê duyệt đầy đủ nếu policy yêu cầu       |
| APPROVED    | Đã được duyệt để chuẩn bị sản xuất                         |
| IN_PROGRESS | Đang thực hiện sản xuất                                    |
| ON_HOLD     | Tạm giữ                                                    |
| COMPLETED   | Hoàn tất ở mức sản xuất, chưa đồng nghĩa warehouse receipt |
| CANCELLED   | Đã hủy theo quy trình                                      |
| BLOCKED     | Bị chặn bởi policy/guard                                   |

Agent phải bảo đảm:

1.  Production Order COMPLETED không đồng nghĩa Batch RELEASED.

2.  Production Order APPROVED không đồng nghĩa Material Issued.

3.  Production Order IN_PROGRESS không đồng nghĩa Finished Goods Available.

4.  Production Order không mở bán sản phẩm.

5.  Production Order không làm Commerce Sellable.

### 6.5. Production Order Creation Preconditions

Production Order creation phải kiểm tra hoặc chuẩn bị foundation cho:

1.  SKU tồn tại.

2.  SKU active ở master nếu policy yêu cầu.

3.  SKU không archived/blocked.

4.  Recipe tồn tại.

5.  Recipe linked SKU hợp lệ.

6.  Recipe status hợp lệ.

7.  Recipe có formula version.

8.  Recipe có formula kind nếu source-of-truth yêu cầu.

9.  Recipe có BOM lines.

10. BOM line có ingredient.

11. BOM line có quantity.

12. BOM line có UOM.

13. Planned quantity hợp lệ.

14. Demand source hợp lệ nếu tạo từ demand.

15. Actor hợp lệ.

16. Permission hợp lệ.

17. Evidence nếu policy yêu cầu.

18. Idempotency nếu command có side effect.

19. Audit nếu command xảy ra.

### 6.6. Formula Snapshot Foundation

Agent được phép triển khai hoặc chuẩn hóa snapshot gồm:

1.  formulaKind.

2.  formulaVersion.

3.  recipeId.

4.  recipeCode nếu có.

5.  recipeVersion.

6.  SKU ID.

7.  SKU code.

8.  plannedQuantity.

9.  productionUOM.

10. snapshotCreatedAt.

11. snapshotSource.

12. snapshotHash nếu có.

13. snapshot metadata an toàn.

### 6.7. BOM / Ingredient Snapshot Foundation

Production Order snapshot phải lưu tại thời điểm tạo order:

1.  ingredientId.

2.  ingredientCode nếu có.

3.  ingredientName nếu policy cho phép.

4.  ingredientGroup nếu có.

5.  quantity.

6.  UOM.

7.  lineOrder nếu có.

8.  formula line type nếu có.

9.  required/optional flag nếu có.

10. snapshot note nếu an toàn.

Agent phải bảo đảm:

1.  Không phụ thuộc động vào recipe lines hiện tại sau khi order đã tạo.

2.  Không sửa snapshot khi recipe/BOM sau đó thay đổi.

3.  Nếu cần chỉnh production order, phải có workflow riêng, không tự sửa snapshot cũ tùy tiện.

4.  Snapshot không public mặc định.

5.  Snapshot không đồng nghĩa material issued.

### 6.8. Snapshot Immutability Boundary

Agent phải bảo đảm:

1.  Snapshot chỉ được tạo khi Production Order được tạo hoặc được approve theo design.

2.  Snapshot không bị update theo recipe hiện tại.

3.  Snapshot không bị xóa nếu Production Order đã tham chiếu.

4.  Correction nếu có phải qua controlled workflow.

5.  Snapshot có audit nếu thay đổi trạng thái hoặc correction.

6.  Snapshot có evidence nếu policy yêu cầu.

7.  Snapshot không được dùng làm public trace trực tiếp nếu chưa qua trace/public policy.

### 6.9. Workshop Handoff Foundation

Agent được phép triển khai hoặc chuẩn hóa Workshop Handoff ở mức foundation:

1.  Production Order có thể được handoff sang xưởng.

2.  Handoff record nếu source-of-truth yêu cầu.

3.  Handoff status nếu có.

4.  Handoff actor/audit/correlation nếu command thuộc scope.

5.  Handoff không đồng nghĩa Material Issue.

6.  Handoff không đồng nghĩa Workshop đã nhận nguyên liệu.

7.  Handoff không đồng nghĩa Production Batch đã bắt đầu.

8.  Handoff không đồng nghĩa Warehouse Receipt.

Workshop handoff đầy đủ với material receipt thuộc prompt sau nếu có liên quan.

## 7. BOUNDARY BẮT BUỘC

### 7.1. Production Order Snapshot Boundary

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

Nguyên tắc bắt buộc:

**Production Order phải snapshot formula kind / version / ingredient / quantity / UOM.**

### 7.2. No Dynamic Recipe Dependency Boundary

Sau khi Production Order đã tạo snapshot:

1.  Recipe hiện tại thay đổi không được làm thay đổi Production Order cũ.

2.  BOM hiện tại thay đổi không được làm thay đổi Production Order cũ.

3.  Formula version hiện tại thay đổi không được làm thay đổi Production Order cũ.

4.  Ingredient master thay đổi không được làm mất snapshot lịch sử.

5.  UOM display name thay đổi không được làm mất UOM snapshot lịch sử nếu snapshot đã lưu.

Nguyên tắc bắt buộc:

**Production Order không được phụ thuộc động vào recipe hiện tại sau khi đã tạo.**

### 7.3. Demand-to-Production Boundary

Nhu cầu sản xuất không phải Production Order.

Demand chỉ là input.

Production Order chỉ được tạo khi:

1.  Demand hợp lệ hoặc owner tạo trực tiếp theo policy.

2.  SKU/Recipe/BOM/Formula hợp lệ.

3.  Guard pass.

4.  Actor/permission hợp lệ.

5.  Evidence nếu policy yêu cầu.

6.  Idempotency nếu command có side effect.

7.  Audit được ghi nếu foundation hỗ trợ.

Nguyên tắc bắt buộc:

**Sales / đại lý / AI / Gateway không được tự phát Production Order trực tiếp.**

### 7.4. Production Order vs Material Issue Boundary

Production Order không đồng nghĩa:

1.  Nguyên liệu đã được issue.

2.  Raw lot đã bị giảm tồn.

3.  Xưởng đã nhận nguyên liệu.

4.  Inventory ledger đã debit.

5.  Batch đã bắt đầu.

Material Issue thuộc P2.2C.

### 7.5. Production Order vs Batch Boundary

Production Order không đồng nghĩa:

1.  Batch đã được tạo.

2.  Batch đang sản xuất.

3.  Batch QC_PASS.

4.  Batch RELEASED.

5.  Thành phẩm đã nhập kho.

Batch / QC / Release thuộc P2.2D.

### 7.6. Production Order vs Sellable Boundary

Production Order không đồng nghĩa:

1.  SKU sellable.

2.  Có tồn kho thành phẩm.

3.  Có giá bán.

4.  Có warehouse receipt.

5.  Có thể chốt đơn.

6.  AI/Gateway được bán.

Sellable thuộc PHASE 3 Commerce Runtime.

## 8. SCOPE OUT

PROMPT-P2.2B không được triển khai:

1.  Material Request đầy đủ.

2.  Material Issue đầy đủ.

3.  Material Receipt đầy đủ.

4.  Raw Inventory Ledger debit.

5.  Inventory Ledger đầy đủ.

6.  Production Batch.

7.  Batch QC / Release.

8.  Warehouse Receipt.

9.  Finished Goods Inventory.

10. Traceability / Genealogy đầy đủ.

11. QR / Public Trace.

12. Recall / Sale Lock.

13. Commerce Sellable Gate.

14. AI Advisor runtime.

15. Facebook Gateway.

16. Ads.

17. MC AI Live.

18. IVR.

19. Release Gateway.

Nếu phát hiện cần những phần này, agent chỉ ghi handoff cho prompt/phase tương ứng.

## 9. ALLOWED FILE CHANGE BOUNDARY

### 9.1. File được phép sửa

Agent chỉ được sửa các file thuộc nhóm:

1.  Production Demand Intake model/service nếu thuộc scope.

2.  Demand-to-Production resolver foundation nếu thuộc scope.

3.  Production Order model/entity/service/repository foundation.

4.  Production Order status transition validation.

5.  Production Order creation guard foundation.

6.  Formula Snapshot model/entity/service.

7.  Recipe Snapshot model/entity/service.

8.  BOM Snapshot model/entity/service.

9.  Workshop Handoff foundation nếu thuộc scope.

10. Production Order validation.

11. Migration Production Order / Snapshot nếu đã được scope cho phép.

12. Test/smoke Production Order / Snapshot / Workshop.

13. Seed/dev fixture nếu đã được P2.1 cho phép và không chứa production secret.

### 9.2. File không được sửa

Agent không được sửa:

1.  Material Issue implementation file.

2.  Material Receipt implementation file.

3.  Inventory Ledger implementation file.

4.  Batch / QC / Release file.

5.  Warehouse Receipt file.

6.  Traceability / QR file.

7.  Recall / Sale Lock file.

8.  Commerce file.

9.  AI Advisor file.

10. Gateway file.

11. Ads / MC AI Live / IVR file.

12. Release Gateway file.

13. Production config/release flag.

14. Global Gateway config.

### 9.3. Không được đoán file path

Agent phải inspect repo thật.

Không được bịa file path.

Không được tạo cấu trúc thư mục lớn nếu repo đã có convention khác.

Nếu không xác định được file path đúng, agent phải báo:

**BLOCKED — FILE BOUNDARY UNCLEAR**

## 10. IMPLEMENTATION REQUIREMENTS

### 10.1. Production Demand Requirements

Production Demand foundation tối thiểu cần có:

1.  demandId.

2.  demandSourceType.

3.  demandSourceRef.

4.  targetSkuId.

5.  requestedQuantity.

6.  requestedUom.

7.  requestedDate nếu có.

8.  priority nếu có.

9.  demandStatus nếu có.

10. ownerApprovalRef nếu policy yêu cầu.

11. actor/correlation/audit linkage nếu command thuộc scope.

12. Không tạo Production Order trực tiếp nếu chưa qua resolver/guard.

### 10.2. Production Order Requirements

Production Order foundation tối thiểu cần có:

1.  productionOrderId.

2.  productionOrderCode.

3.  linkedSkuId.

4.  linkedRecipeId.

5.  formulaVersion.

6.  formulaKind.

7.  plannedQuantity.

8.  plannedUom.

9.  status.

10. sourceDemandRef nếu có.

11. createdBy / createdAt nếu convention có.

12. actor/correlation/audit linkage nếu command thuộc scope.

13. idempotency hook nếu command có side effect.

14. evidence hook nếu policy yêu cầu.

15. No sellable flag.

16. No inventory debit.

17. No warehouse receipt effect.

### 10.3. Snapshot Requirements

Production Order snapshot tối thiểu cần có:

1.  snapshotId.

2.  productionOrderId.

3.  skuSnapshot.

4.  recipeSnapshot.

5.  formulaKind.

6.  formulaVersion.

7.  bomLineSnapshots.

8.  ingredientSnapshots.

9.  quantitySnapshots.

10. uomSnapshots.

11. snapshotCreatedAt.

12. snapshotSource.

13. snapshotHash nếu có.

14. immutable flag hoặc application-level immutability boundary.

15. audit linkage nếu foundation hỗ trợ.

### 10.4. BOM Line Snapshot Requirements

Mỗi BOM line snapshot tối thiểu cần có:

1.  lineSnapshotId.

2.  productionOrderSnapshotId.

3.  sourceRecipeLineId.

4.  ingredientId.

5.  ingredientCode nếu có.

6.  ingredientName snapshot nếu policy cho phép.

7.  ingredientGroup nếu có.

8.  quantity.

9.  UOM.

10. lineOrder nếu có.

11. required flag nếu có.

12. metadata an toàn.

### 10.5. Production Order State Transition Requirements

Production Order transition phải bảo đảm:

1.  DRAFT → OPEN nếu đủ dữ liệu nền.

2.  OPEN → APPROVED nếu permission/approval pass.

3.  APPROVED → IN_PROGRESS chỉ khi guard pass.

4.  IN_PROGRESS → COMPLETED không đồng nghĩa batch released.

5.  Any state → ON_HOLD nếu policy cho phép.

6.  DRAFT/OPEN/APPROVED → CANCELLED nếu guard pass.

7.  BLOCKED không được bypass nếu policy chưa clear.

8.  State transition có actor/correlation/audit nếu foundation hỗ trợ.

9.  Invalid transition bị deny.

### 10.6. Workshop Handoff Requirements

Workshop handoff foundation tối thiểu cần có:

1.  Handoff reference nếu scope yêu cầu.

2.  Linked Production Order.

3.  Handoff status nếu có.

4.  Handoff actor/correlation/audit nếu command thuộc scope.

5.  Handoff không tạo material issue.

6.  Handoff không tạo inventory ledger.

7.  Handoff không tạo batch.

8.  Handoff không tạo warehouse receipt.

## 11. DATABASE / MIGRATION / SEED RULE

### 11.1. Database / migration rule

P2.2B có thể cần migration cho Production Order / Snapshot foundation.

Agent chỉ được tạo migration khi:

1.  P2.1 đã xác định cần.

2.  Repo đang dùng migration chuẩn.

3.  Migration chỉ phục vụ Production Order / Snapshot / Workshop foundation.

4.  Không tạo Material Issue table trong prompt này.

5.  Không tạo Material Receipt table trong prompt này.

6.  Không tạo Inventory Ledger table đầy đủ trong prompt này.

7.  Không tạo Batch / Warehouse / Traceability / Recall table trong prompt này.

8.  Không update database production.

9.  Không chạy production migration.

10. Report rõ migration file trong mục 11.

Nếu chưa rõ schema hoặc source-of-truth, agent phải báo:

**BLOCKED — PRODUCTION ORDER / SNAPSHOT SCHEMA APPROVAL REQUIRED**

### 11.2. Seed rule

P2.2B mặc định không seed production order thật.

Nếu cần seed/dev fixture:

1.  Chỉ seed dev/test/baseline nếu source-of-truth đã rõ.

2.  Không seed secret.

3.  Không seed production order thật.

4.  Không seed material issue.

5.  Không seed inventory ledger side effect.

6.  Không seed batch/release/warehouse state.

7.  Seed phải idempotent nếu có.

8.  Report rõ trong mục 12.

Nếu chưa có source-of-truth Production Order / Snapshot, không tạo seed.

## 12. TEST / SMOKE REQUIREMENTS

### 12.1. Test được phép

Agent được phép thêm/chỉnh test trong phạm vi:

1.  Tạo Production Order draft hợp lệ từ SKU/Recipe hợp lệ.

2.  Production Order thiếu SKU bị reject.

3.  Production Order thiếu Recipe bị reject.

4.  Production Order với Recipe thiếu BOM line bị reject.

5.  Production Order snapshot có formula kind.

6.  Production Order snapshot có formula version.

7.  Production Order snapshot có ingredient/quantity/UOM.

8.  Sửa Recipe/BOM sau khi tạo order không làm thay đổi snapshot cũ.

9.  Production Order không tự tạo material issue.

10. Production Order không tự debit inventory.

11. Production Order không tự tạo batch.

12. Production Order không làm SKU sellable.

13. Demand từ sales/đại lý chỉ là input, không tự phát Production Order nếu chưa qua resolver/guard.

14. Retry create Production Order cùng idempotency key/payload không tạo duplicate nếu hook có.

15. Production Order success/deny có audit event nếu hook hỗ trợ.

### 12.2. Test không được phép

Không được viết test cho:

1.  Material Issue full.

2.  Material Receipt full.

3.  Inventory Ledger full.

4.  Production Batch full.

5.  Batch QC / Release.

6.  Warehouse Receipt.

7.  Traceability / QR.

8.  Recall / Sale Lock.

9.  Commerce Sellable Gate.

10. AI Advisor / Gateway / Ads / Live / IVR.

11. Release Gateway.

### 12.3. Smoke tối thiểu

Nếu test framework cho phép, agent nên tạo/chạy smoke:

| **Smoke ID**    | **Scenario**                                   | **Expected Result**                                        |
|-----------------|------------------------------------------------|------------------------------------------------------------|
| P2.2B-SMOKE-001 | Tạo Production Order từ SKU/Recipe hợp lệ      | Production Order được tạo                                  |
| P2.2B-SMOKE-002 | Production Order thiếu SKU                     | Bị reject                                                  |
| P2.2B-SMOKE-003 | Production Order thiếu Recipe                  | Bị reject                                                  |
| P2.2B-SMOKE-004 | Recipe thiếu BOM line                          | Production Order bị reject                                 |
| P2.2B-SMOKE-005 | Production Order snapshot                      | Có formula kind/version/ingredient/quantity/UOM            |
| P2.2B-SMOKE-006 | Recipe/BOM sửa sau khi tạo order               | Snapshot cũ không đổi                                      |
| P2.2B-SMOKE-007 | Demand từ Sales/Đại lý                         | Không tự phát Production Order nếu chưa qua resolver/guard |
| P2.2B-SMOKE-008 | Production Order created                       | Không tự material issue                                    |
| P2.2B-SMOKE-009 | Production Order created                       | Không tự debit inventory                                   |
| P2.2B-SMOKE-010 | Production Order approved/in_progress          | Không đồng nghĩa Batch Released                            |
| P2.2B-SMOKE-011 | Retry same idempotency key/payload nếu hook có | Không tạo duplicate Production Order                       |
| P2.2B-SMOKE-012 | Production Order success/deny                  | Có audit event nếu hook hỗ trợ                             |

Không gọi các smoke này là Global Smoke Pass.

## 13. SECURITY / GOVERNANCE GUARDRAILS

Agent phải bảo đảm:

1.  Không hardcode Production Order từ Sales/Đại lý trực tiếp.

2.  Không cho AI / Gateway / Ads / Live / IVR tự phát Production Order.

3.  Không tạo Production Order nếu thiếu SKU/Recipe/BOM/Formula Version.

4.  Không để Production Order phụ thuộc động vào Recipe hiện tại.

5.  Không để snapshot bị sửa khi Recipe/BOM thay đổi.

6.  Không tạo Material Issue trong P2.2B.

7.  Không tạo Inventory Ledger debit trong P2.2B.

8.  Không tạo Batch trong P2.2B.

9.  Không tạo Warehouse Receipt trong P2.2B.

10. Không tạo Sellable Gate trong P2.2B.

11. Không gọi Production Order là Production Completed.

12. Không gọi Production Order là Batch Released.

13. Không gọi Production Order là Finished Goods Available.

14. Không bỏ qua Actor/RBAC/Audit/Evidence/Idempotency foundation nếu có command.

15. Không cho SUBMITTED evidence pass accepted requirement nếu policy yêu cầu.

16. Không public private/internal snapshot field.

17. Không seed production order thật.

18. Không bypass permission.

19. Không mở Global Gateway.

20. Không gọi P2.2B xong là PHASE 2 Complete.

21. Không gọi Release Ready / Production Ready / Go-live Approved.

## 14. EXECUTION STEPS

Agent phải thực hiện theo thứ tự:

1.  Đọc PROMPT-P2 Analysis Report.

2.  Đọc PROMPT-P2.1 Technical Design Handoff.

3.  Đọc P2.2A Implementation Report.

4.  Đọc PHASE 0 Validation Report.

5.  Đọc PHASE 1 Smoke / Evidence Report.

6.  Đọc TECH-01 / TECH-10 / TECH-11 / TECH-12 / TECH-13.

7.  Inspect codebase thật.

8.  Xác định Product / SKU / Recipe / BOM / Formula foundation từ PHASE 1.

9.  Xác định Source / Raw / Readiness foundation từ P2.2A.

10. Xác định Production Order / Snapshot implementation hiện có.

11. Xác định Demand-to-Production boundary hiện có nếu có.

12. Xác định file thuộc scope P2.2B.

13. Xác định file không được sửa.

14. Xác định có cần migration không.

15. Xác định có cần seed/dev fixture không.

16. Triển khai giới hạn Production Demand Intake boundary nếu thuộc scope.

17. Triển khai giới hạn Production Order foundation.

18. Triển khai giới hạn Formula Snapshot foundation.

19. Triển khai giới hạn Recipe/BOM/Ingredient/UOM Snapshot foundation.

20. Triển khai Snapshot Immutability boundary.

21. Triển khai Workshop Handoff foundation nếu thuộc scope.

22. Thêm/chỉnh test/smoke trong scope.

23. Chạy build/test/lint phù hợp.

24. Chạy migration validation nếu có migration.

25. Chạy seed validation nếu có seed.

26. Chạy git status/git diff.

27. Báo cáo đủ 14 mục.

## 15. REQUIRED REPORT FORMAT — 14 MỤC

Agent phải báo cáo đúng 14 mục.

### 15.1. Mục 1 — Tóm tắt

Phải ghi:

1.  Prompt đã chạy: PROMPT-P2.2B.

2.  Mode: LIMITED IMPLEMENTATION.

3.  Scope đã thực hiện.

4.  Production Demand boundary đã triển khai gì.

5.  Production Order foundation đã triển khai gì.

6.  Formula / Recipe / BOM Snapshot foundation đã triển khai gì.

7.  Workshop handoff foundation đã triển khai gì.

8.  Test/build đã chạy.

9.  Gap còn lại.

10. Trạng thái cuối.

Không được ghi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

### 15.2. Mục 2 — File đã sửa

Liệt kê:

1.  File đã sửa.

2.  File đã tạo nếu có.

3.  File đã xóa nếu có.

4.  Migration đã tạo nếu có.

5.  Seed/dev fixture đã tạo/sửa nếu có.

6.  Lý do từng file thuộc scope P2.2B.

7.  Xác nhận không sửa ngoài scope.

8.  Git diff summary.

### 15.3. Mục 3 — Nguồn yêu cầu

Liệt kê:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PHASE 0 Validation Report.

5.  PHASE 1 Smoke / Evidence Report.

6.  TECH-01.

7.  TECH-10.

8.  TECH-11.

9.  TECH-12.

10. TECH-13.

11. Production Order / Snapshot source-of-truth nếu có.

### 15.4. Mục 4 — Evidence đã dùng

Liệt kê:

1.  Code inspection evidence.

2.  Production Demand implementation evidence.

3.  Production Order implementation evidence.

4.  Formula Snapshot implementation evidence.

5.  Recipe/BOM Snapshot implementation evidence.

6.  Workshop Handoff implementation evidence.

7.  PHASE 1 Product/SKU/Recipe evidence.

8.  P2.2A Source/Raw/Readiness evidence.

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

1.  Không chạy frontend build vì scope P2.2B không sửa frontend.

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

Mặc định không cần sửa Markdown trong P2.2B.

### 15.11. Mục 11 — Kết quả database migration/update nếu áp dụng

Ghi rõ:

1.  Có tạo migration không.

2.  Có chạy migration không.

3.  Có update database không.

4.  Migration có thuộc scope Production Order / Snapshot không.

5.  Nếu không, ghi rõ “Không áp dụng trong P2.2B”.

Không update database thật.

### 15.12. Mục 12 — Kết quả seed validation nếu áp dụng

Ghi rõ:

1.  Có động tới seed/dev fixture không.

2.  Có validate seed không.

3.  Seed có liên quan Production Order / Snapshot không.

4.  Seed có idempotent không.

5.  Seed có tự tạo Production Order thật không.

6.  Seed có tự issue material không.

7.  Seed có tạo inventory side effect ngoài scope không.

8.  Seed có tạo batch/release/warehouse state không.

9.  Seed có chứa secret không.

10. Nếu không, ghi rõ “Không áp dụng trong P2.2B”.

### 15.13. Mục 13 — Rủi ro còn lại

Phân nhóm:

1.  Production Demand boundary risk.

2.  Production Order foundation risk.

3.  Formula Snapshot risk.

4.  Recipe/BOM Snapshot risk.

5.  Snapshot immutability risk.

6.  Workshop handoff risk.

7.  Actor/RBAC/Audit/Evidence/Idempotency hook risk.

8.  Material Issue chưa triển khai.

9.  Material Receipt chưa triển khai.

10. Inventory Ledger chưa triển khai.

11. Batch / Warehouse chưa triển khai.

12. Traceability / Recall chưa triển khai.

13. Downstream PHASE 2 risk.

14. Global Gateway risk.

### 15.14. Mục 14 — Cập nhật handoff

Phải ghi:

1.  Kết quả P2.2B.

2.  Việc còn lại cho P2.2C.

3.  Việc còn lại cho P2.2D.

4.  Việc còn lại cho P2.2E.

5.  Production Order / Snapshot gap còn lại.

6.  Evidence cần owner review.

7.  Smoke cần bổ sung.

8.  Trạng thái cuối.

Bắt buộc ghi:

PROMPT-P2.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2B PRODUCTION ORDER / SNAPSHOT / WORKSHOP FOUNDATION ONLY
NOT PHASE 2 COMPLETE
NOT IMPLEMENTATION COMPLETE FOR FULL PHASE 2
NOT COMPLETION PASS
NOT RELEASE READY
NOT PRODUCTION READY
NOT GO-LIVE APPROVED
GLOBAL GATEWAY: BLOCKED

## 16. DONE GATE

PROMPT-P2.2B chỉ được xem là done khi đủ:

1.  Đã đọc source-of-truth.

2.  Đã đọc PROMPT-P2 Analysis Report.

3.  Đã đọc PROMPT-P2.1 Technical Design Handoff.

4.  Đã đọc P2.2A Implementation Report.

5.  Đã đọc PHASE 0 Validation Report.

6.  Đã đọc PHASE 1 Smoke / Evidence Report.

7.  Đã inspect codebase thật.

8.  Đã giới hạn scope đúng P2.2B.

9.  Đã triển khai hoặc chuẩn hóa Production Demand Intake boundary nếu thuộc scope.

10. Đã triển khai hoặc chuẩn hóa Production Order foundation.

11. Đã triển khai hoặc chuẩn hóa Production Order status lifecycle.

12. Đã triển khai hoặc chuẩn hóa Formula Snapshot foundation.

13. Đã triển khai hoặc chuẩn hóa Recipe/BOM/Ingredient/UOM Snapshot foundation.

14. Đã có Production Order snapshot formula kind / version / ingredient / quantity / UOM.

15. Đã có Snapshot Immutability boundary.

16. Đã bảo đảm Recipe/BOM thay đổi sau đó không làm thay đổi Production Order snapshot cũ.

17. Đã có Workshop Handoff foundation nếu thuộc scope.

18. Không sửa lan sang Material Issue.

19. Không triển khai Inventory Ledger đầy đủ.

20. Không triển khai Batch / Warehouse / Traceability / Recall.

21. Không sửa Commerce / AI / Gateway.

22. Có test/smoke tối thiểu hoặc báo rõ vì sao chưa có.

23. Có build/test result nếu chạy được.

24. Có git diff summary.

25. Có report đủ 14 mục.

26. Không gọi PHASE 2 Complete / Release Ready / Production Ready / Go-live Approved.

27. Global Gateway vẫn BLOCKED.

Trạng thái tối đa được phép:

**P2.2B LIMITED IMPLEMENTATION COMPLETED FOR PRODUCTION ORDER / SNAPSHOT / WORKSHOP FOUNDATION ONLY**

Không được gọi:

- PHASE 2 Complete.

- Full Implementation Complete.

- Completion PASS.

- Release Ready.

- Production Ready.

- Go-live Approved.

## 17. FAIL GATE

PROMPT-P2.2B phải fail nếu:

1.  Agent sửa ngoài scope.

2.  Agent tự triển khai Material Issue đầy đủ.

3.  Agent tự triển khai Material Receipt đầy đủ.

4.  Agent tự triển khai Inventory Ledger đầy đủ.

5.  Agent tự triển khai Batch / Warehouse / Traceability / Recall.

6.  Agent sửa Commerce / AI / Gateway không được phép.

7.  Agent hardcode Production Order từ Sales/Đại lý trực tiếp.

8.  Agent cho AI / Gateway / Ads / Live / IVR tự phát Production Order.

9.  Agent tạo Production Order khi thiếu SKU/Recipe/BOM/Formula Version.

10. Agent không snapshot formula kind / version / ingredient / quantity / UOM.

11. Agent để Production Order phụ thuộc động vào Recipe hiện tại.

12. Agent cho Recipe/BOM thay đổi làm thay đổi snapshot cũ.

13. Agent tạo Material Issue trong P2.2B.

14. Agent tạo Inventory Ledger debit trong P2.2B.

15. Agent tạo Batch trong P2.2B.

16. Agent gọi Production Order là Batch Released.

17. Agent gọi Production Order là Finished Goods Available.

18. Agent gọi Production Order là Sellable.

19. Agent public private/internal snapshot field.

20. Agent tạo seed production order thật.

21. Agent tạo seed tự issue material.

22. Agent tạo inventory side effect ngoài scope.

23. Agent tạo seed chứa secret.

24. Agent đổi gateway/release flag.

25. Agent không chạy hoặc không báo test/build.

26. Agent không report đủ 14 mục.

27. Agent gọi Release Ready / Production Ready / Go-live Approved.

28. Agent không chứng minh được phạm vi file đã sửa.

Nếu fail, agent phải ghi:

**PROMPT-P2.2B FAIL GATE — LIMITED IMPLEMENTATION NOT ACCEPTED**

## 18. DOWNSTREAM HANDOFF

### 18.1. Sang PROMPT-P2.2C

Nếu P2.2B đạt Done Gate, bước tiếp theo là:

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

P2.2C chỉ được bắt đầu khi:

1.  Source / Raw / QC / Readiness foundation từ P2.2A đã có.

2.  Production Order / Snapshot foundation từ P2.2B đã có.

3.  Raw lot READY_FOR_PRODUCTION gate đã có.

4.  Production Order snapshot formula/BOM đã có.

5.  Production Order không phụ thuộc động vào recipe hiện tại.

6.  P2.2B report đủ 14 mục.

7.  Owner/dev lead cho phép limited implementation tiếp theo.

### 18.2. Không tự chuyển prompt

Agent không được tự chuyển sang P2.2C.

Chỉ owner/dev lead mới quyết định prompt tiếp theo.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

### 19.1. Nội dung prompt

**BẮT ĐẦU PROMPT**

Bạn đang tiếp tục dự án Ginsengfood theo GREENFIELD TECH SOURCE-OF-TRUTH.

PHASE HIỆN TẠI:

**PHASE-02 — OPERATIONAL CORE**

PROMPT HIỆN TẠI:

**PROMPT-P2.2B — PRODUCTION ORDER / SNAPSHOT / WORKSHOP IMPLEMENTATION HANDOFF**

MODE:

**LIMITED IMPLEMENTATION**

PROMPT TIẾP THEO:

**PROMPT-P2.2C — MATERIAL ISSUE / MATERIAL RECEIPT / INVENTORY LEDGER IMPLEMENTATION HANDOFF**

Bạn được phép sửa code **chỉ trong phạm vi Production Order / Snapshot / Workshop foundation**.

Bạn không được sửa lan.

Bạn không được tự đổi nghiệp vụ.

Bạn không được hardcode policy.

Bạn không được tạo Material Issue trong prompt này.

Bạn không được tạo Inventory Ledger debit trong prompt này.

Bạn không được gọi Production Order là Batch Released / Finished Goods Available / Sellable.

Bạn không được mở Global Gateway.

Bạn không được gọi Completion PASS / Release Ready / Production Ready / Go-live Approved.

**A. Source-of-truth bắt buộc**

Bạn phải đọc:

1.  PROMPT-P2 Analysis Report.

2.  PROMPT-P2.1 Technical Design Handoff.

3.  PROMPT-P2.2A Implementation Report.

4.  PHASE 0 Validation Report.

5.  PHASE 1 Smoke / Evidence Report.

6.  TECH-01.

7.  TECH-10.

8.  TECH-11.

9.  TECH-12.

10. TECH-13.

11. Production Order / Snapshot source-of-truth nếu có.

Quy tắc:

- TECH mới thắng code cũ.

- TECH mới thắng tài liệu cũ.

- Code hiện tại chỉ là CURRENT_IMPLEMENTATION_STATE_ONLY.

- Legacy chỉ là LEGACY_REFERENCE_ONLY.

- Nếu conflict ngoài scope, báo cáo, không sửa.

**B. Scope In**

Bạn chỉ được triển khai:

1.  Production Demand Intake boundary.

2.  Demand-to-Production Order resolver foundation.

3.  Production Order foundation.

4.  Production Order status lifecycle foundation.

5.  Production Order linked SKU validation.

6.  Production Order linked Recipe validation.

7.  Production Order linked Formula Version validation.

8.  Formula Snapshot foundation.

9.  Recipe Snapshot foundation.

10. BOM / Ingredient / Quantity / UOM Snapshot foundation.

11. Snapshot immutability boundary.

12. Workshop handoff foundation nếu thuộc scope.

13. Audit / Evidence / Idempotency hooks nếu foundation hỗ trợ.

14. Test/smoke tối thiểu.

15. Report 14 mục.

**C. Scope Out**

Bạn không được triển khai:

1.  Material Request đầy đủ.

2.  Material Issue đầy đủ.

3.  Material Receipt đầy đủ.

4.  Raw Inventory Ledger debit.

5.  Inventory Ledger đầy đủ.

6.  Production Batch.

7.  Batch QC / Release.

8.  Warehouse Receipt.

9.  Finished Goods Inventory.

10. Traceability / QR / Public Trace.

11. Recall / Sale Lock.

12. Commerce Runtime.

13. AI Advisor.

14. Facebook Gateway.

15. Ads / MC AI Live / IVR.

16. Release Gateway.

**D. Boundary bắt buộc**

Bạn phải bảo đảm:

1.  Production Order phải snapshot formula kind / version / ingredient / quantity / UOM.

2.  Production Order không phụ thuộc động vào recipe hiện tại sau khi đã tạo.

3.  Sales / đại lý / AI / Gateway không được tự phát Production Order trực tiếp.

4.  Demand chỉ là input, không phải Production Order.

5.  Production Order không đồng nghĩa Material Issue.

6.  Production Order không đồng nghĩa Inventory Debit.

7.  Production Order không đồng nghĩa Batch Created.

8.  Production Order không đồng nghĩa Batch Released.

9.  Production Order không đồng nghĩa Finished Goods Available.

10. Production Order không đồng nghĩa Sellable.

**E. Allowed file change boundary**

Bạn chỉ được sửa file liên quan trực tiếp đến:

1.  Production Demand Intake model/service nếu thuộc scope.

2.  Demand-to-Production resolver foundation.

3.  Production Order model/entity/service/repository foundation.

4.  Production Order status transition validation.

5.  Production Order creation guard foundation.

6.  Formula Snapshot model/entity/service.

7.  Recipe Snapshot model/entity/service.

8.  BOM Snapshot model/entity/service.

9.  Workshop Handoff foundation nếu thuộc scope.

10. Production Order validation.

11. Migration Production Order / Snapshot nếu đã được scope cho phép.

12. Test/smoke Production Order / Snapshot / Workshop.

13. Seed/dev fixture nếu đã được scope cho phép.

Bạn phải inspect repo thật, không được bịa file path.

**F. Database / migration / seed**

Không update database thật.

Không chạy migration production.

Không seed production data.

Nếu cần migration trong repo, chỉ được tạo khi:

1.  Thuộc Production Order / Snapshot / Workshop foundation.

2.  Có migration mechanism rõ.

3.  Không tạo Material Issue table.

4.  Không tạo Material Receipt table.

5.  Không tạo Inventory Ledger table đầy đủ.

6.  Không tạo Batch / Warehouse / Traceability / Recall table.

7.  Report đầy đủ trong mục 11.

Nếu chưa rõ, dừng phần đó và báo:

**BLOCKED — PRODUCTION ORDER / SNAPSHOT SCHEMA APPROVAL REQUIRED**

Nếu cần seed/dev fixture:

1.  Không chứa secret.

2.  Không tạo Production Order thật.

3.  Không tự issue material.

4.  Không tạo inventory side effect.

5.  Không tạo batch/release/warehouse state.

6.  Phải idempotent nếu có seed validation.

7.  Report đầy đủ trong mục 12.

**G. Test/smoke tối thiểu**

Nếu test framework có sẵn, hãy tạo/chạy smoke cho:

1.  Tạo Production Order từ SKU/Recipe hợp lệ.

2.  Production Order thiếu SKU bị reject.

3.  Production Order thiếu Recipe bị reject.

4.  Recipe thiếu BOM line thì Production Order bị reject.

5.  Production Order snapshot có formula kind/version/ingredient/quantity/UOM.

6.  Recipe/BOM sửa sau khi tạo order không làm thay đổi snapshot cũ.

7.  Demand từ Sales/Đại lý không tự phát Production Order nếu chưa qua resolver/guard.

8.  Production Order created không tự material issue.

9.  Production Order created không tự debit inventory.

10. Production Order approved/in_progress không đồng nghĩa Batch Released.

11. Retry same idempotency key/payload nếu hook có không tạo duplicate Production Order.

12. Production Order success/deny có audit event nếu hook hỗ trợ.

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

1.  Đúng scope P2.2B.

2.  Production Order foundation có nền.

3.  Production Order status lifecycle có nền.

4.  Formula / Recipe / BOM Snapshot có nền.

5.  Snapshot có formula kind / version / ingredient / quantity / UOM.

6.  Snapshot không phụ thuộc động vào recipe hiện tại.

7.  Không triển khai Material Issue / Inventory Ledger / Batch / Warehouse đầy đủ.

8.  Có test/build hoặc báo rõ lý do không chạy.

9.  Có report 14 mục.

10. Có git diff summary.

11. Global Gateway vẫn BLOCKED.

**K. Fail Gate**

Phải fail nếu:

1.  Sửa ngoài scope.

2.  Hardcode policy.

3.  Sales/Đại lý/AI/Gateway tự phát Production Order trực tiếp.

4.  Production Order thiếu snapshot formula/BOM.

5.  Snapshot bị thay đổi khi Recipe/BOM thay đổi.

6.  Tự triển khai Material Issue / Inventory Ledger / Batch / Warehouse đầy đủ.

7.  Production Order bị gọi là Batch Released / Finished Goods Available / Sellable.

8.  Seed tự issue material hoặc tạo inventory side effect.

9.  Mở Gateway.

10. Gọi Release Ready / Production Ready / Go-live Approved.

11. Không report đủ 14 mục.

**L. Trạng thái cuối bắt buộc**

Kết thúc report phải ghi:

PROMPT-P2.2B FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY
P2.2B PRODUCTION ORDER / SNAPSHOT / WORKSHOP FOUNDATION ONLY
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

**PROMPT-P2.2B DOCUMENT STATUS: CLEAN FINAL**

### 20.2. Trạng thái thực thi

**LIMITED IMPLEMENTATION HANDOFF ONLY**

### 20.3. Phạm vi được phép

**PRODUCTION ORDER / SNAPSHOT / WORKSHOP FOUNDATION ONLY**

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
