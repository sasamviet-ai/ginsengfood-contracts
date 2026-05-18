# PACK-01 — OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK

## PRODUCTION–WAREHOUSE–INVENTORY–TRACE–RECALL–SELLABLE CONTROL PACK

## V1.0 CLEAN FINAL

# PHẦN 1/4 — OPERATIONAL CORE PRINCIPLES / FIELD OPERATIONS APP / OWNER BOUNDARY / PRODUCT TRUTH MODEL

## 0. DOCUMENT CONTROL

### 0.1. Mục tiêu tài liệu

PACK-01 là tài liệu kỹ thuật chính thức dùng để kiểm soát phân hệ Operational Core của hệ thống Ginsengfood.

Tài liệu này khóa các nguyên tắc vận hành cốt lõi cho toàn bộ chuỗi:

1.  Nguồn nguyên liệu.

2.  Nhập nguyên liệu đầu vào.

3.  QC nguyên liệu.

4.  Lot nguyên liệu.

5.  Lệnh sản xuất.

6.  Cấp phát nguyên liệu theo lot.

7.  Thực thi sản xuất.

8.  Batch thành phẩm.

9.  Đóng gói cấp 1.

10. Đóng gói cấp 2 hộp/thùng.

11. In mã.

12. QC sau sấy.

13. QC thành phẩm.

14. Release batch.

15. Nhập kho thành phẩm.

16. Tồn kho.

17. Truy xuất.

18. Thu hồi.

19. Sale Lock / Stop Sale.

20. Kết nối hạch toán MISA.

21. Evidence hiện trường.

22. Smoke vận hành.

23. App nội bộ hiện trường.

PACK-01 là tài liệu nền để xác định khi nào một sản phẩm thật sự đủ điều kiện đi tiếp sang bán hàng, tư vấn AI, CRM, ADS, MC AI, Gateway, Order, Payment và Shipping.

### 0.2. Vai trò của tài liệu

PACK-01 không phải tài liệu code.

PACK-01 không mô tả chi tiết:

1.  Migration SQL.

2.  DTO.

3.  Controller.

4.  Service implementation.

5.  UI component.

6.  Worker implementation.

7.  Prompt AI.

8.  Cấu hình thiết bị thật.

9.  Mapping MISA thật.

10. GTIN/GS1 thật.

11. Danh sách nhân sự thật.

PACK-01 dùng để khóa:

1.  Owner.

2.  Boundary.

3.  Source-of-truth.

4.  Field Operations App boundary.

5.  Product truth model.

6.  Operational flow.

7.  Registry bắt buộc.

8.  Resolver bắt buộc.

9.  Guard bắt buộc.

10. Evidence bắt buộc.

11. Smoke bắt buộc.

12. No-hardcode rule.

13. Done Gate.

14. Release handoff.

### 0.3. Nguyên tắc tài liệu sạch

Tài liệu này được trình bày như một tài liệu chính thức độc lập.

Trong PACK-01:

1.  Không nhắc tài liệu gốc.

2.  Không nhắc bản trước.

3.  Không nhắc nội dung bổ sung.

4.  Không nhắc quá trình rà soát.

5.  Không ghi “kế thừa”.

6.  Không viết theo kiểu vá/phụ lục.

7.  Không để dev tự suy luận nghiệp vụ.

8.  Không để consumer tự suy luận dữ liệu vận hành.

9.  Không dùng placeholder như dữ liệu thật.

10. Không gọi PASS khi chưa có evidence thật.

## 1. CORE SCOPE

### 1.1. Phạm vi phân hệ

PACK-01 kiểm soát các domain sau:

1.  Source Origin.

2.  Supplier / Company Source.

3.  Raw Material Intake.

4.  Raw Material QC.

5.  Raw Material Lot Readiness.

6.  Recipe / BOM Snapshot.

7.  Production Order.

8.  Material Issue.

9.  Material Receipt.

10. Production Execution.

11. Batch.

12. Personnel Check-in / Check-out.

13. Field Operations Internal App / Mobile PWA.

14. Packaging Level 1.

15. Packaging Level 2 — Hộp / Thùng.

16. Printing.

17. QC sau sấy.

18. QC thành phẩm.

19. Batch Release.

20. Warehouse Receipt.

21. Inventory Ledger.

22. Traceability.

23. Recall.

24. Sale Lock / Stop Sale.

25. MISA Integration Boundary.

26. Operational Evidence Packet.

27. Operational Smoke Run.

### 1.2. Operational Core là owner của sự thật vận hành

Operational Core là nơi tạo và giữ sự thật vận hành của sản phẩm.

Operational Core trả lời các câu hỏi:

1.  Nguyên liệu đến từ đâu?

2.  Nguyên liệu thuộc lot nào?

3.  Lot đã QC chưa?

4.  Lot có được phép đưa vào sản xuất không?

5.  SKU dùng công thức/version nào?

6.  Nguyên liệu nào được cấp cho mẻ nào?

7.  Batch thành phẩm được tạo từ mẻ nào?

8.  Batch có truy được về raw material lot không?

9.  Batch đã QC chưa?

10. Batch đã release chưa?

11. Batch đã nhập kho chưa?

12. Tồn kho khả dụng là bao nhiêu?

13. Hộp/thùng đã in mã nào?

14. QR/barcode map về batch nào?

15. Sản phẩm có bị hold, recall, sale lock không?

16. Sản phẩm có đủ điều kiện bán không?

Không domain bán hàng nào được tự quyết định các câu hỏi trên.

### 1.3. Field Operations App là phạm vi bắt buộc

Sản xuất, QC, đóng gói, nhập kho, truy xuất và thu hồi là hành động hiện trường.

Do đó, PACK-01 bắt buộc có lớp:

# FIELD OPERATIONS INTERNAL APP / MOBILE PWA

Lớp này dùng cho:

1.  Chụp ảnh.

2.  Quay video.

3.  Upload file.

4.  Scan QR/barcode.

5.  Check-in/check-out.

6.  Click xác nhận.

7.  Ghi nhận số liệu thực tế.

8.  Ghi nhận % độ ẩm.

9.  Ghi nhận hao hụt.

10. Ghi lỗi in.

11. Gửi yêu cầu reprint.

12. Xác nhận công đoạn.

13. Đồng bộ offline.

14. Ghi mobile event audit.

15. Gắn evidence vào phiếu/lệnh/batch/lot.

PACK-01 không được hiểu là chỉ triển khai Admin Web.

### 1.4. Admin Web và Field App phải tách vai trò

| **Kênh**                          | **Vai trò chính**                                                                              | **Không được làm**                               |
|-----------------------------------|------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Admin Web                         | Quản trị master data, cấu hình, review, phê duyệt, dashboard, audit, báo cáo                   | Không thay thế thao tác hiện trường bắt buộc     |
| Field Operations App / Mobile PWA | Capture thao tác hiện trường, ảnh/video, scan, check-in, click-confirm, evidence, offline sync | Không owner business truth, không bypass backend |
| Device / Printer                  | Nhận payload, in, trả trạng thái, heartbeat, báo lỗi thiết bị                                  | Không sinh business truth                        |
| Backend Operational Core          | Validate, mutate state, enforce guard, ghi audit, tạo source-of-truth                          | Không bỏ qua permission/evidence/audit           |

## 2. CURRENT OPERATIONAL LOCKS

### 2.1. In cấp 2 trên hộp và thùng

In cấp 2 áp dụng cho:

1.  Hộp.

2.  Thùng.

Cả hộp và thùng đều phải in tối thiểu:

1.  Lô / batch.

2.  NSX.

3.  HSD.

4.  Mã vạch.

5.  QR.

Nếu hộp và thùng là trade item thương mại, mỗi cấp phải có GTIN/GS1 riêng khi Trade Item Registry chính thức sẵn sàng.

Quy tắc bắt buộc:

1.  Hệ thống sinh dữ liệu in.

2.  Máy in chỉ nhận payload.

3.  Người vận hành không nhập tay lô/NSX/HSD/barcode/QR ở flow thường.

4.  QR là mã truy xuất/minh bạch.

5.  Barcode thương mại phải lấy từ Trade Item Registry nếu GTIN/GS1 đã active.

6.  Không có hai barcode thương mại trên cùng một trade item.

### 2.2. Kho / location thật ban đầu

Kho thật ban đầu:

# Kho Bến Tre

Quy tắc:

1.  Kho Bến Tre là warehouse thật ban đầu.

2.  Kho Bến Tre phải được quản trị qua Warehouse Registry.

3.  Không hardcode Kho Bến Tre trong code, UI, AI, CRM, ADS, Gateway hoặc template.

4.  Location cụ thể bên trong kho cấu hình theo Warehouse Location Registry.

5.  Warehouse receipt, inventory ledger và stock balance phải gắn warehouse_id / location_id.

6.  Khi mở thêm kho, chỉ cập nhật registry, không sửa business logic.

### 2.3. Máy in / template in thật

Trạng thái hiện tại:

# RESERVED / PENDING_DEVICE

Quy tắc:

1.  Chừa ngõ kết nối khi có thiết bị.

2.  Chừa ngõ cấu hình template in.

3.  Không hardcode model máy in.

4.  Không hardcode template in.

5.  Hệ thống sinh print payload.

6.  Máy in chỉ nhận payload và trả trạng thái.

7.  Printer callback không được pass QC.

8.  Printer callback không được release batch.

9.  Printer callback không được nhập kho.

10. Printer callback không được tạo inventory.

### 2.4. GTIN/GS1 hộp / thùng

Trạng thái hiện tại:

# RESERVED / PENDING_REGISTRY

Quy tắc:

1.  Hộp là trade item có thể có GTIN/GS1 riêng.

2.  Thùng là trade item có thể có GTIN/GS1 riêng.

3.  GTIN/GS1 phải lấy từ Trade Item Registry.

4.  Không cho user nhập tay barcode thương mại.

5.  Không sinh barcode nội bộ thứ hai trên cùng trade item.

6.  QR không thay thế GTIN/GS1.

7.  Trade item chưa có GTIN/GS1 hợp lệ thì chưa đủ điều kiện thương mại hóa ở cấp đó nếu kênh bán yêu cầu barcode thương mại.

### 2.5. Mapping MISA thật

Trạng thái hiện tại:

# RESERVED / PENDING_MAPPING

Các mapping cần chừa ngõ:

1.  Kho.

2.  Location nếu cần.

3.  Nguyên liệu.

4.  SKU.

5.  Thành phẩm.

6.  Nhà cung cấp.

7.  Tài khoản kế toán.

8.  Mã chi phí.

9.  Mã tập hợp chi phí.

10. Nhân sự/bộ phận nếu cần.

11. Doanh thu/chiết khấu/hoa hồng nếu thuộc scope sau.

Quy tắc:

1.  MISA dùng một integration layer chung.

2.  Không module nào sync riêng lẻ.

3.  Không có mapping thì không sync chính thức.

4.  Sync phải có status / retry / error / reconcile.

5.  MISA không điều khiển lệnh sản xuất.

6.  MISA không điều khiển mẻ sản xuất.

7.  MISA không điều khiển công thức.

8.  MISA không điều khiển traceability.

9.  MISA không điều khiển recall.

10. MISA không điều khiển print logic.

11. MISA không điều khiển check-in vận hành.

### 2.6. QC threshold độ ẩm

Ngưỡng QC sau sấy thăng hoa:

| **Độ ẩm** | **Trạng thái** | **Hành động**                      |
|-----------|----------------|------------------------------------|
| \< 2%     | PASS           | Được xét đi tiếp                   |
| 2%–4%     | HOLD / REVIEW  | QC review, chưa downstream tự động |
| \> 4%     | FAIL           | Chặn downstream                    |

Quy tắc:

1.  Độ ẩm dưới 2% được xem là đạt.

2.  Độ ẩm từ 2% đến 4% không tự động đạt.

3.  Độ ẩm trên 4% không đạt.

4.  QC_PASS không tự release batch.

5.  Batch chỉ nhập kho sau khi có Batch Release hợp lệ.

### 2.7. HSD

HSD mặc định:

# 12 tháng

Quy tắc:

1.  HSD có thể theo từng SKU.

2.  HSD có thể theo nhóm SKU.

3.  Nếu chưa có khác biệt, mặc định dùng 12 tháng.

4.  HSD sinh từ NSX/MFG date + shelf-life config.

5.  Không nhập tay HSD trong flow thường.

6.  Override HSD là high-risk action, phải có reason, approval và audit.

### 2.8. Source zone / source origin / supplier

Vùng trồng Sâm Savigin:

# Nguồn công ty

Quy tắc:

1.  Vùng trồng Sâm là nguồn nội bộ của công ty.

2.  Không xử lý vùng trồng Sâm như supplier ngoài thông thường.

3.  Supplier nguyên liệu khác tích hợp Supplier Portal khi đủ điều kiện.

4.  Supplier đủ điều kiện được cấp tài khoản để nhập ảnh/video/thông tin vùng trồng.

5.  Supplier upload evidence không tự động PASS.

6.  Source Verification Owner phải review và xác nhận.

### 2.9. Nhân sự / role / permission thật

Nhân sự thật sẽ bổ sung khi nhà máy vận hành.

Quy tắc:

1.  Không hardcode tên người.

2.  Không hardcode role.

3.  Không hardcode permission.

4.  Role / Permission Registry phải kiểm soát high-risk action.

5.  Mỗi phiếu/lệnh quan trọng phải có xác nhận cá nhân.

6.  Không đủ xác nhận bắt buộc thì không chuyển bước.

## 3. OPERATIONAL CORE PRINCIPLES

### 3.1. Operational Core là nguồn sự thật vận hành

Operational Core là nguồn sự thật cho:

1.  Nguyên liệu đầu vào.

2.  Source origin.

3.  Supplier/company source.

4.  Raw material lot.

5.  QC nguyên liệu.

6.  Lot readiness.

7.  Công thức/version dùng cho sản xuất.

8.  Lệnh sản xuất.

9.  BOM snapshot.

10. Cấp phát nguyên liệu theo lot.

11. Thực thi sản xuất.

12. Batch thành phẩm.

13. Đóng gói cấp 1.

14. Đóng gói cấp 2 hộp/thùng.

15. Print payload.

16. QC sau sấy.

17. QC thành phẩm.

18. Batch release.

19. Warehouse receipt.

20. Inventory ledger.

21. Traceability.

22. Recall.

23. Sale Lock / Stop Sale.

24. Evidence hiện trường.

AI, CRM, ADS, MC AI, Gateway, Landing Page, Order, Payment, Shipping không được tự tạo sự thật vận hành.

### 3.2. Product Truth phải dựa trên record, không dựa trên lời nói

Product Truth không được xác định bằng:

1.  Nhân sự nói đã làm xong.

2.  Ảnh/video không gắn phiếu.

3.  Excel rời.

4.  MISA đã ghi nhận.

5.  Máy in đã in.

6.  QC nói miệng.

7.  Kho đã scan nhưng chưa confirm.

8.  AI nói còn hàng.

9.  ADS đang chạy.

10. CRM đang gửi.

11. MC AI đang live.

12. Owner chat nhưng chưa có sign-off/evidence.

Product Truth phải có:

1.  Record.

2.  Trace ID.

3.  Audit.

4.  Evidence.

5.  Owner/role.

6.  Timestamp.

7.  Correlation ID.

### 3.3. Không có đường tắt từ sản xuất sang bán hàng

Các trạng thái sau không đồng nghĩa sellable:

1.  Production complete.

2.  Execution complete.

3.  Batch created.

4.  Packaging completed.

5.  Printing completed.

6.  QC_PASS.

7.  Batch RELEASED nhưng chưa nhập kho.

8.  Warehouse scan nhưng chưa confirm.

9.  MISA sync success.

10. AI/CRM/ADS/MC AI có nhu cầu bán.

Luồng đúng:

**Production Execution → Batch Create → QC Inspection → Batch Release → Warehouse Receipt Confirmed → Inventory Ledger → Stock Available → Trace Ready → Recall Ready → Sellable Gate**

### 3.4. Inventory chỉ tăng tại Warehouse Receipt Confirmed

Inventory không được tăng tại:

1.  Production complete.

2.  Batch create.

3.  Packaging complete.

4.  Printing complete.

5.  QC pass.

6.  Scan inbound.

7.  MISA sync.

8.  AI demand.

9.  CRM demand.

10. ADS demand.

11. Manual note.

Inventory chỉ tăng sau:

# Warehouse Receipt Confirmed

và phải ghi qua:

# Inventory Ledger

### 3.5. QC_PASS không đồng nghĩa RELEASED

QC_PASS là kết quả kiểm tra.

RELEASED là quyết định giải phóng batch.

Hai trạng thái này phải tách.

Batch chỉ được nhập kho khi:

1.  QC phù hợp.

2.  Disposition phù hợp.

3.  Batch Release record tồn tại.

4.  Release action có role/permission/audit.

5.  Không hold/reject/block.

### 3.6. Traceability là nền của Recall

Recall không được dựng chain riêng.

Recall phải dùng traceability chain:

**Raw Material Lot → Material Issue → Production Execution → Batch → Packaging L2 Hộp/Thùng → Print Payload → QR Registry → Warehouse → Allocation/Shipment/Exposure → Recall**

Nếu trace chain đứt, recall readiness chưa đạt.

### 3.7. Sale Lock thắng mọi hành vi bán hàng

Sale Lock / Stop Sale thắng:

1.  AI Advisor.

2.  CRM.

3.  ADS.

4.  MC AI.

5.  Gateway.

6.  Landing Page.

7.  Order.

8.  Quote.

9.  Payment request.

10. Shipping allocation.

11. Promotion.

12. Member benefit.

13. Diamond benefit.

14. Revenue target.

Khi Sale Lock active, Consumer phải suppress.

## 4. FIELD OPERATIONS APP PRINCIPLES

### 4.1. Field App là kênh thao tác hiện trường bắt buộc

Các nghiệp vụ hiện trường phải có Field Operations App / Mobile PWA hoặc giao diện hiện trường tương đương:

1.  Nhận nguyên liệu đầu vào.

2.  Chụp ảnh/video nguyên liệu.

3.  QC nguyên liệu.

4.  Ghi lot nguyên liệu.

5.  Check-in/check-out nhân sự.

6.  Xác nhận cấp nguyên liệu.

7.  Xác nhận nhận nguyên liệu tại xưởng.

8.  Theo dõi sơ chế.

9.  Ghi hao hụt.

10. QC sau sấy.

11. Ghi % độ ẩm.

12. Đóng gói cấp 1.

13. Đóng gói cấp 2 hộp/thùng.

14. Scan/kiểm tra mã in.

15. Ghi lỗi in.

16. Gửi yêu cầu reprint.

17. QC thành phẩm.

18. Scan nhập kho.

19. Click confirm nhập kho.

20. Scan truy vết nội bộ.

21. Ghi evidence recall/recovery/disposition.

22. Xác nhận hoàn tất công đoạn.

### 4.2. Field App là capture channel, không phải Owner Core

Field App chỉ được:

1.  Capture dữ liệu hiện trường.

2.  Gửi command.

3.  Upload media.

4.  Scan QR/barcode.

5.  Ghi nhận check-in/check-out.

6.  Ghi nhận số liệu thực tế.

7.  Gửi click-confirm.

8.  Sync offline event.

9.  Hiển thị dữ liệu backend trả về.

10. Hiển thị cảnh báo guard/sale lock.

Field App không được:

1.  Tự pass QC.

2.  Tự release batch.

3.  Tự tăng inventory.

4.  Tự sửa công thức.

5.  Tự sửa batch.

6.  Tự tạo inventory.

7.  Tự xác nhận MISA sync.

8.  Tự bỏ qua sale lock.

9.  Tự tạo QR/barcode.

10. Tự xác định sellable.

11. Tự sửa HSD.

12. Tự sửa GTIN/GS1.

13. Tự bypass backend validation.

### 4.3. Backend mới là nơi validate và mutate state

Mọi command từ Field App phải đi qua:

1.  Backend API.

2.  Domain service.

3.  Resolver.

4.  Guard.

5.  Permission.

6.  Idempotency.

7.  Audit.

8.  State transition.

9.  Evidence binding.

10. Event/outbox nếu cần.

Field App không được mutate state trực tiếp vào database.

Field App không được bỏ qua service validation.

### 4.4. Mọi action hiện trường phải có actor / role / device / object

Mỗi action từ Field App phải có tối thiểu:

1.  actor_id.

2.  actor_name_snapshot nếu cần.

3.  role_code.

4.  department_code.

5.  device_id.

6.  device_code.

7.  device_uuid.

8.  app_version.

9.  platform.

10. action_time.

11. object_type.

12. object_id / object_code.

13. action_type.

14. client_event_id.

15. idempotency_key.

16. audit_id.

17. correlation_id.

Nếu thuộc sản xuất, phải thêm:

1.  production_order_id.

2.  production_profile_id nếu có.

3.  production_execution_id nếu có.

4.  batch_id nếu có.

5.  work_step_code nếu có.

Nếu thuộc nguyên liệu, phải thêm:

1.  raw_material_receipt_id.

2.  raw_material_lot_id.

3.  raw_material_qc_id nếu có.

Nếu thuộc đóng gói/in, phải thêm:

1.  packaging_job_id.

2.  print_job_id.

3.  print_payload_id nếu có.

Nếu thuộc kho, phải thêm:

1.  warehouse_receipt_id.

2.  warehouse_id.

3.  warehouse_location_id.

Nếu thuộc recall, phải thêm:

1.  recall_case_id.

2.  hold_id nếu có.

3.  sale_lock_id nếu có.

4.  recovery_item_id nếu có.

5.  disposition_id nếu có.

### 4.5. Device identity là bắt buộc

Mọi request từ Field App phải có tối thiểu:

1.  X-Request-Id.

2.  X-Device-Code.

3.  X-Device-UUID.

4.  X-App-Version.

5.  X-Platform.

6.  X-Offline-Mode.

7.  X-Client-Event-Id.

8.  Idempotency-Key.

Thiết bị chưa đăng ký phải bị chặn.

Thiết bị bị revoke phải bị chặn.

Thiết bị dùng app version không còn được phép vận hành phải bị chặn hoặc yêu cầu cập nhật.

### 4.6. Offline queue là bắt buộc

Field App phải hỗ trợ offline queue cho:

1.  Phiếu hiện trường.

2.  Check-in/check-out.

3.  QC result.

4.  Scan.

5.  Media evidence.

6.  Packaging result.

7.  Print error.

8.  Warehouse scan.

9.  Recall evidence.

10. Click-confirm được phép offline theo policy.

Mỗi offline event phải có:

1.  client_event_id.

2.  local_created_at.

3.  device_id.

4.  actor_id.

5.  action_type.

6.  object_type.

7.  object_id.

8.  payload_hash.

9.  idempotency_key.

10. sync_status.

11. retry_count.

12. last_error.

13. audit_ref khi sync thành công.

Retry không được sinh duplicate:

1.  duplicate receipt;

2.  duplicate QC;

3.  duplicate media;

4.  duplicate confirmation;

5.  duplicate warehouse receipt;

6.  duplicate recall action;

7.  duplicate print/reprint action.

### 4.7. Media evidence không được mồ côi

Ảnh/video/file hiện trường phải gắn object.

Media không được upload kiểu rời.

Media evidence phải gắn ít nhất một trong các object sau:

1.  raw_material_receipt_id.

2.  raw_material_receipt_item_id.

3.  raw_material_lot_id.

4.  raw_material_qc_id.

5.  production_order_id.

6.  production_execution_id.

7.  process_event_id.

8.  packaging_job_id.

9.  print_job_id.

10. print_error_id.

11. qc_inspection_id.

12. warehouse_receipt_id.

13. trace_result_id.

14. recall_case_id.

15. recovery_item_id.

16. disposition_id.

17. capa_id nếu có.

Media không gắn object không được dùng làm evidence PASS.

### 4.8. Scan không đồng nghĩa confirm

Scan là capture/verify.

Scan không được tự đổi state nghiệp vụ.

Các rule bắt buộc:

1.  Scan inbound không đồng nghĩa nhập kho.

2.  Scan mã in không đồng nghĩa QC pass.

3.  Scan QR không đồng nghĩa trace complete.

4.  Scan thùng/hộp không đồng nghĩa sellable.

5.  Scan nguyên liệu không đồng nghĩa lot ready.

6.  Scan hàng thu hồi không đồng nghĩa recall close.

Muốn đổi state phải có command riêng:

1.  Confirm receipt.

2.  Accept QC.

3.  Release batch.

4.  Complete packaging.

5.  Confirm warehouse receipt.

6.  Activate hold.

7.  Activate sale lock.

8.  Close recall.

9.  Mark recovery.

### 4.9. Click-confirm là command có permission và audit

Click xác nhận không phải thao tác UI đơn giản.

Các action sau là high-risk command:

1.  Confirm raw material intake.

2.  Submit QC.

3.  Accept QC.

4.  Hold QC.

5.  Reject QC.

6.  Approve material for production.

7.  Start execution.

8.  Pause execution.

9.  Resume execution.

10. Complete execution.

11. Complete packaging.

12. Start print.

13. Reprint.

14. Accept finished goods QC.

15. Release batch.

16. Confirm warehouse receipt.

17. Inventory adjustment.

18. Activate hold.

19. Activate sale lock.

20. Close recall.

21. Close with residual risk.

22. Override / break-glass.

Mỗi high-risk command phải có:

1.  permission.

2.  idempotency_key.

3.  actor_id.

4.  role_code.

5.  device_id nếu từ app.

6.  reason nếu cần.

7.  audit.

8.  state transition log.

9.  evidence nếu thuộc scope.

## 5. FIELD APP USE CASE REGISTRY

### 5.1. Raw Material Intake

Field App phải hỗ trợ:

1.  Chọn supplier/source từ registry.

2.  Chọn nguyên liệu từ master.

3.  Nhập số lượng giao.

4.  Chụp ảnh/video nguyên liệu.

5.  Upload hóa đơn/phiếu giao hàng nếu có.

6.  Ghi tình trạng ban đầu.

7.  Ghi kết quả đánh giá.

8.  Ghi lý do không đạt.

9.  Click xác nhận theo role.

10. Sync offline nếu mất mạng.

Không được nhập tay tên nguyên liệu thay cho master.

### 5.2. Raw Material QC / Lot Readiness

Field App phải hỗ trợ:

1.  Xem lot cần QC.

2.  Ghi kết quả QC.

3.  Chụp ảnh/video defect.

4.  Accept / Hold / Reject theo permission.

5.  Ghi reason khi hold/reject.

6.  Gắn evidence vào lot/QC.

7.  Không cho lot chưa ready vào material issue.

### 5.3. Production Order / Material Issue

Field App phải hỗ trợ:

1.  Xem lệnh sản xuất.

2.  Xem BOM snapshot.

3.  Xem danh sách nguyên liệu tự hiện.

4.  Scan/check lot nguyên liệu.

5.  Xác nhận nhận nguyên liệu tại xưởng.

6.  Ghi chênh lệch nếu có.

7.  Không cho chọn tay nguyên liệu ngoài BOM.

8.  Không cho issue lot chưa QC_PASS + READY_FOR_PRODUCTION.

### 5.4. Personnel Check-in / Check-out

Field App phải hỗ trợ:

1.  Check-in nhân sự.

2.  Check-out nhân sự.

3.  Gắn production_order_id.

4.  Gắn batch/mẻ nếu có.

5.  Gắn công đoạn.

6.  Gắn ca.

7.  Ghi tổng giờ làm.

8.  Ghi role.

9.  Xác nhận tổ trưởng/quản lý.

10. Audit.

Check-in/check-out không được là ghi chú text.

### 5.5. Production Execution

Field App phải hỗ trợ:

1.  Start execution.

2.  Pause execution.

3.  Resume execution.

4.  Complete execution.

5.  Ghi process event.

6.  Ghi output.

7.  Ghi loss.

8.  Ghi incident.

9.  Chụp evidence nếu có lỗi.

10. Không tự sinh batch nếu backend guard không cho phép.

### 5.6. QC sau sấy

Field App phải hỗ trợ:

1.  Ghi số lượng bán thành phẩm kiểm tra.

2.  Ghi % độ ẩm.

3.  Ghi cảm quan.

4.  Chụp ảnh/video sau sấy.

5.  Đính file đo độ ẩm nếu có.

6.  Duyệt cho đóng gói / từ chối / hold theo permission.

7.  Chặn downstream nếu độ ẩm từ 2% đến 4% hoặc trên 4%.

### 5.7. Packaging cấp 1

Field App phải hỗ trợ:

1.  Xem packaging job cấp 1.

2.  Xem batch.

3.  Xem rule in cấp 1.

4.  Ghi số lượng đầu vào.

5.  Ghi số lượng đạt.

6.  Ghi số lượng không đạt.

7.  Ghi lý do không đạt.

8.  Chụp ảnh/video.

9.  Complete packaging theo permission.

10. Không tạo inventory.

### 5.8. Packaging cấp 2 — Hộp / Thùng

Field App phải hỗ trợ:

1.  Xem packaging job cấp 2.

2.  Phân biệt hộp và thùng.

3.  Xem batch/lô.

4.  Xem nội dung in cấp 2.

5.  Xem barcode/QR rule.

6.  Chọn máy in từ registry nếu có thiết bị.

7.  Start print.

8.  Scan kiểm tra mã in.

9.  Ghi print error.

10. Gửi reprint request có reason.

11. Complete packaging.

12. Không nhập tay lô/NSX/HSD/barcode/QR.

13. Không tạo inventory.

### 5.9. Finished Goods QC

Field App phải hỗ trợ:

1.  Xem batch/packaging context.

2.  Ghi số lượng kiểm tra.

3.  Ghi số lượng đạt.

4.  Ghi số lượng không đạt.

5.  Ghi tỷ lệ đạt.

6.  Chụp evidence.

7.  Submit / approve / reject theo permission.

8.  Không tự release batch.

### 5.10. Warehouse Receipt

Field App phải hỗ trợ:

1.  Scan inbound.

2.  Xem batch RELEASED.

3.  Xem warehouse/location.

4.  Ghi số lượng nhận.

5.  Chụp ảnh/video nhập kho.

6.  Click confirm receipt theo permission.

7.  Không tăng inventory khi chỉ scan.

8.  Inventory chỉ tăng sau confirm receipt backend PASS.

### 5.11. Traceability / Recall

Field App phải hỗ trợ:

1.  Scan QR/barcode.

2.  Resolve trace nội bộ theo quyền.

3.  Chụp evidence sản phẩm/lô/batch.

4.  Ghi recovery item.

5.  Ghi disposition evidence.

6.  Ghi contact/recovery result nếu thuộc scope.

7.  Gắn recall_case_id.

8.  Không close recall nếu thiếu owner approval.

9.  Không gỡ Sale Lock nếu thiếu recovery evidence/sign-off.

## 6. OWNER BOUNDARY MODEL

### 6.1. Owner Boundary tổng quan

| **Domain**               | **Owner Core**               | **Consumer**                        |
|--------------------------|------------------------------|-------------------------------------|
| SKU canonical            | Product Master Owner         | Operational Core                    |
| Formula / BOM            | Recipe Owner                 | Production                          |
| Operational Config       | Operational Owner            | Production, Packaging, QC, Trace    |
| Field Operations App     | Field App Owner              | Operational domains                 |
| Device / Mobile Identity | Device Owner                 | Field App, Audit                    |
| Source Origin            | Source Origin Owner          | Raw Intake                          |
| Raw Material Lot         | Raw Material Owner           | Production, Trace, Recall           |
| Production Order         | Production Owner             | Material Issue, Execution           |
| Material Issue           | Warehouse / Production Owner | Execution, Genealogy                |
| Production Execution     | Production Owner             | Batch                               |
| Batch                    | Production / QC Owner        | Packaging, QC, Warehouse, Trace     |
| Packaging                | Packaging Owner              | Printing, QC                        |
| Printing                 | Printing Owner               | Trace, QC                           |
| QC                       | QC Owner                     | Release                             |
| Batch Release            | QC / Operational Owner       | Warehouse                           |
| Warehouse Receipt        | Warehouse Owner              | Inventory                           |
| Inventory Ledger         | Inventory Owner              | Sellable Gate                       |
| Traceability             | Traceability Owner           | Recall                              |
| Recall                   | Recall Owner                 | Sale Lock                           |
| Sale Lock / Stop Sale    | Recall / Risk Owner          | AI, CRM, ADS, Gateway, MC AI, Order |
| MISA Integration         | MISA Integration Owner       | Accounting                          |
| Evidence / Smoke         | QA / Evidence Owner          | Release Gate                        |

### 6.2. Field App Owner không thay Domain Owner

Field App Owner chịu trách nhiệm:

1.  App channel.

2.  Offline queue.

3.  Device binding.

4.  Media capture.

5.  Sync health.

6.  Mobile event audit.

7.  User experience hiện trường.

Field App Owner không thay:

1.  QC Owner.

2.  Production Owner.

3.  Warehouse Owner.

4.  Inventory Owner.

5.  Recall Owner.

6.  MISA Owner.

7.  Recipe Owner.

8.  Product Master Owner.

App chỉ gửi action đến domain owner tương ứng.

### 6.3. Consumer không được override Operational Truth

Các Consumer không được override:

1.  Stock.

2.  Sellable.

3.  Batch status.

4.  Release status.

5.  Recall status.

6.  Sale Lock.

7.  HSD.

8.  GTIN/GS1.

9.  QR registry.

10. Warehouse receipt.

11. Inventory ledger.

12. MISA sync status.

13. Evidence status.

14. Smoke status.

Consumer muốn dùng dữ liệu phải đọc qua resolver/projection hợp lệ.

Projection không thay source-of-truth.

## 7. PRODUCT TRUTH MODEL

### 7.1. Product Truth là gì

Product Truth là trạng thái thật của sản phẩm trong chuỗi vận hành.

Product Truth trả lời:

1.  SKU nào?

2.  Công thức/version nào?

3.  Nguyên liệu lot nào?

4.  Mẻ nào?

5.  Batch nào?

6.  Đã QC chưa?

7.  Đã release chưa?

8.  Đã đóng gói chưa?

9.  Hộp/thùng đã in gì?

10. QR/barcode map vào đâu?

11. Đã nhập kho chưa?

12. Inventory ledger ghi nhận chưa?

13. Stock available bao nhiêu?

14. Có bị hold không?

15. Có bị recall không?

16. Có bị sale lock không?

17. Có đủ trace không?

18. Có đủ điều kiện sellable không?

### 7.2. Product Truth Chain chuẩn

Chuỗi Product Truth chuẩn:

**Source Zone → Source Origin → Raw Material Intake → Incoming QC → Raw Material Lot → READY_FOR_PRODUCTION → Production Order → BOM Snapshot → Material Issue → Material Receipt → Execution → Batch → Packaging Level 1 → Packaging Level 2 Hộp/Thùng → Print Payload → QC sau sấy → QC thành phẩm → Batch Release → Warehouse Receipt Confirmed → Inventory Ledger → Stock Available → Trace Ready → Recall Ready → Sellable Gate**

Không bước nào được tự ý bỏ qua.

### 7.3. Field Evidence là một phần của Product Truth

Với các hành động hiện trường, Product Truth không đủ nếu thiếu Field Evidence.

Ví dụ:

1.  Nguyên liệu nhập phải có phiếu/evidence nếu policy yêu cầu.

2.  QC phải có kết quả và người xác nhận.

3.  Sau sấy phải có % độ ẩm.

4.  Đóng gói phải có số lượng thực tế.

5.  In phải có payload/log.

6.  Nhập kho phải có confirm.

7.  Recall phải có evidence/recovery/disposition.

8.  Smoke phải có evidence packet.

Ảnh/video/scan/check/click-confirm từ Field App phải vào Operational Evidence Packet.

### 7.4. Product Truth Status tối thiểu

| **Status**             | **Ý nghĩa**                 |
|------------------------|-----------------------------|
| NOT_STARTED            | Chưa phát sinh vận hành     |
| SOURCE_READY           | Nguồn đã sẵn sàng           |
| RAW_LOT_READY          | Lot nguyên liệu sẵn sàng    |
| PRODUCTION_OPENED      | Đã mở lệnh sản xuất         |
| MATERIAL_ISSUED        | Đã cấp nguyên liệu theo lot |
| EXECUTION_STARTED      | Đã bắt đầu sản xuất         |
| EXECUTION_COMPLETED    | Đã hoàn tất sản xuất        |
| BATCH_CREATED          | Đã sinh batch               |
| PACKAGING_L1_COMPLETED | Đã đóng gói cấp 1           |
| PACKAGING_L2_COMPLETED | Đã đóng gói cấp 2 hộp/thùng |
| PRINT_COMPLETED        | Đã in                       |
| QC_PASS                | Đạt QC                      |
| RELEASED               | Batch đã release            |
| WAREHOUSE_RECEIVED     | Đã nhập kho                 |
| INVENTORY_AVAILABLE    | Có tồn khả dụng             |
| TRACE_READY            | Sẵn sàng truy xuất          |
| RECALL_READY           | Sẵn sàng thu hồi            |
| SELLABLE               | Đủ điều kiện bán            |
| ON_HOLD                | Đang hold                   |
| SALE_LOCKED            | Đang khóa bán               |
| RECALLED               | Thu hồi                     |
| STOP_SALE              | Dừng bán                    |

## 8. REGISTRY LOCKS

### 8.1. Warehouse Registry

| **Field**                 | **Value**   |
|---------------------------|-------------|
| warehouse_runtime_default | Kho Bến Tre |
| registry_required         | YES         |
| hardcode_allowed          | NO          |
| future_expansion          | YES         |

### 8.2. Field App / Device Registry

| **Field**                   | **Value**                 |
|-----------------------------|---------------------------|
| internal_ops_app_required   | YES                       |
| app_type_initial            | Mobile PWA / Internal App |
| offline_queue_required      | YES                       |
| device_registry_required    | YES                       |
| mobile_event_audit_required | YES                       |
| hardcode_device_allowed     | NO                        |

### 8.3. Printer / Template Registry

| **Field**                  | **Value**        |
|----------------------------|------------------|
| printer_real_device_status | PENDING_DEVICE   |
| template_real_status       | PENDING_TEMPLATE |
| integration_port           | RESERVED         |
| hardcode_allowed           | NO               |

### 8.4. GTIN/GS1 Registry

| **Field**        | **Value**           |
|------------------|---------------------|
| retail_box_gtin  | RESERVED            |
| carton_gtin      | RESERVED            |
| owner_registry   | Trade Item Registry |
| hardcode_allowed | NO                  |

### 8.5. MISA Mapping Registry

| **Field**           | **Value** |
|---------------------|-----------|
| warehouse_mapping   | RESERVED  |
| material_mapping    | RESERVED  |
| sku_mapping         | RESERVED  |
| account_mapping     | RESERVED  |
| cost_center_mapping | RESERVED  |
| integration_status  | RESERVED  |
| hardcode_allowed    | NO        |

### 8.6. QC Moisture Threshold Registry

| **Field**            | **Value** |
|----------------------|-----------|
| moisture_pass        | \< 2%     |
| moisture_review_hold | 2%–4%     |
| moisture_fail        | \> 4%     |
| owner                | QC Owner  |
| hardcode_allowed     | NO        |

### 8.7. Shelf-life Registry

| **Field**          | **Value** |
|--------------------|-----------|
| default_shelf_life | 12 tháng  |
| by_sku_allowed     | YES       |
| by_group_allowed   | YES       |
| hardcode_allowed   | NO        |

### 8.8. Supplier Portal Registry

| **Field**             | **Value**                    |
|-----------------------|------------------------------|
| Sâm source            | Company-owned growing source |
| supplier_portal       | RESERVED                     |
| supplier_pass         | CONDITIONAL                  |
| evidence_upload       | REQUIRED WHEN ACTIVE         |
| verification_required | YES                          |

### 8.9. Personnel / Role / Permission Registry

| **Field**            | **Value**                 |
|----------------------|---------------------------|
| real_personnel_data  | PENDING_FACTORY_OPERATION |
| role_registry        | REQUIRED                  |
| permission_registry  | REQUIRED                  |
| hardcode_person_name | NO                        |

## 9. NO-HARDCODE CONTROL

### 9.1. Không hardcode runtime data

Không được hardcode:

1.  Kho Bến Tre.

2.  Location thật.

3.  Máy in thật.

4.  Template in.

5.  Device.

6.  App version.

7.  GTIN/GS1.

8.  Barcode.

9.  QR.

10. MISA mapping.

11. Tài khoản kế toán.

12. Mã chi phí.

13. QC threshold.

14. HSD.

15. Supplier pass.

16. Nhân sự thật.

17. Role/permission.

18. Evidence path.

19. Smoke status.

20. Product sellable.

21. Recall status.

22. Sale lock status.

### 9.2. Hardcode là blocker

PACK-01 BLOCK nếu phát hiện:

1.  Kho Bến Tre hardcode trong service/UI.

2.  GTIN hardcode trong template.

3.  HSD hardcode không qua shelf-life registry.

4.  Độ ẩm hardcode không qua QC config.

5.  MISA account hardcode trong module.

6.  Máy in hardcode trong worker.

7.  Nhân sự hardcode trong flow.

8.  App cho bypass backend validation.

9.  App sync không có idempotency.

10. Evidence lưu không gắn object.

## 10. PHẦN 1/4 DONE GATE

PHẦN 1/4 được xem là đạt governance scope khi đã khóa đủ:

1.  PACK-01 là Operational Core Pack, không phải code.

2.  Field Operations Internal App / Mobile PWA là P0 boundary.

3.  Admin Web và Field App tách vai trò.

4.  Field App là capture channel, không phải Owner Core.

5.  Backend/domain service mới validate và mutate state.

6.  Offline queue là bắt buộc.

7.  Device identity là bắt buộc.

8.  Media evidence không được mồ côi.

9.  Scan không đồng nghĩa confirm.

10. Click-confirm high-risk phải có permission/idempotency/audit.

11. Check-in/check-out là action thật, không phải ghi chú.

12. Product Truth Model đã rõ.

13. Field Evidence là một phần của Product Truth.

14. Owner Boundary đã rõ.

15. Không đi tắt từ production sang sellable.

16. Inventory chỉ tăng sau warehouse receipt confirmed.

17. QC_PASS không đồng nghĩa RELEASED.

18. In cấp 2 áp dụng cho hộp và thùng.

19. Hệ thống sinh dữ liệu in, máy in chỉ nhận payload.

20. Kho Bến Tre được ghi nhận là kho thật ban đầu nhưng không hardcode.

21. Máy in/template chừa ngõ kết nối.

22. GTIN/GS1 hộp/thùng chừa ngõ tích hợp.

23. MISA mapping chừa ngõ kết nối.

24. QC độ ẩm: \<2% PASS, 2%–4% HOLD/REVIEW, \>4% FAIL.

25. HSD mặc định 12 tháng.

26. Vùng trồng Sâm là của công ty.

27. Supplier Portal/evidence chừa ngõ khi nhà cung cấp đủ điều kiện.

28. Role/personnel thật bổ sung khi nhà máy vận hành.

29. Evidence Pack và Smoke Log dùng phương án tinh gọn.

30. No-hardcode rule đã khóa.

## 11. PHẦN 1/4 FINAL CONCLUSION

PHẦN 1/4 của PACK-01 khóa nền vận hành lõi của Ginsengfood theo hướng thực chiến hiện trường.

PACK-01 không được hiểu là tài liệu chỉ cho Admin Web. Mọi hành động sản xuất, QC, đóng gói, in, nhập kho, truy vết và thu hồi phải có Field Operations Internal App / Mobile PWA hoặc giao diện hiện trường tương đương để capture đúng ảnh/video/scan/check-in/click-confirm/evidence.

Chuỗi nguyên tắc bắt buộc:

**Operational Core tạo sự thật sản phẩm → Field App capture evidence hiện trường → Backend validate/mutate state → Guard kiểm soát điều kiện → Audit ghi nhận → Evidence Packet gom bằng chứng → Smoke chứng minh xuyên chuỗi → Sellable/Recall/Sale Lock quyết định downstream**

Không có đường tắt từ app hiện trường sang business truth.

Không có đường tắt từ scan sang confirm.

Không có đường tắt từ ảnh/video sang evidence PASS nếu không gắn object.

Không có đường tắt từ QC_PASS sang RELEASED.

Không có đường tắt từ in mã sang inventory.

Không có đường tắt từ MISA sang operational truth.

Không có đường tắt từ AI/CRM/ADS/MC AI/Gateway sang sellable.

PACK-01 PHẦN 1/4 là nền để viết tiếp:

# PHẦN 2/4 — PRODUCTION / FIELD OPS APP / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK DOMAIN REGISTRY

**PHẦN 2/4 — PRODUCTION / FIELD OPS APP / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK DOMAIN REGISTRY**

**12. DOMAIN REGISTRY PRINCIPLES**

**12.1. Mục tiêu Domain Registry**

Domain Registry là bảng khóa nghiệp vụ chính thức của PACK-01.

Domain Registry dùng để xác định rõ:

1.  Domain nào là Owner Core.

2.  Domain nào là Consumer.

3.  Source-of-truth nằm ở đâu.

4.  Resolver nào bắt buộc.

5.  Guard nào bắt buộc.

6.  Trace ID nào bắt buộc.

7.  Evidence nào bắt buộc.

8.  Field Operations App tham gia ở điểm nào.

9.  Admin Web tham gia ở điểm nào.

10. Thiết bị/printer tham gia ở điểm nào.

11. Blocked-if-missing rule là gì.

12. Domain nào được phép mutate state.

13. Domain nào chỉ được capture/query/display.

Không domain nào được tự mở rộng boundary ngoài phạm vi đã khóa trong Domain Registry.

**12.2. Nguyên tắc một domain không làm thay domain khác**

Mỗi domain chỉ làm đúng phần mình owner.

Các nguyên tắc bắt buộc:

1.  Field App không owner business truth.

2.  Admin Web không thay thao tác hiện trường bắt buộc.

3.  Printer không tạo inventory.

4.  Printing không pass QC.

5.  QC_PASS không tự release batch.

6.  Batch Release không tự nhập kho.

7.  Warehouse scan không tự tăng tồn.

8.  Inventory projection không thay Inventory Ledger.

9.  Traceability không dựng lại công thức.

10. Recall không dựng chain riêng.

11. Sale Lock không thay Recall Case.

12. MISA không điều khiển nghiệp vụ nhà máy.

13. AI/CRM/ADS/MC AI/Gateway không quyết định product truth.

**12.3. Mọi domain P0 phải có Field Evidence khi phát sinh hiện trường**

Các domain có hành động hiện trường bắt buộc phải gắn với Field Operations App / Mobile PWA hoặc giao diện hiện trường tương đương.

Các hành động sau không được chỉ ghi nhận sau trên Admin Web:

1.  Nhận nguyên liệu.

2.  QC nguyên liệu.

3.  Check-in/check-out.

4.  Cấp phát nguyên liệu.

5.  Nhận nguyên liệu tại xưởng.

6.  Theo dõi sơ chế.

7.  QC sau sấy.

8.  Đóng gói cấp 1.

9.  Đóng gói cấp 2 hộp/thùng.

10. In/kiểm tra mã in.

11. QC thành phẩm.

12. Scan nhập kho.

13. Confirm nhập kho.

14. Scan truy xuất.

15. Thu hồi/recovery/disposition.

Nếu action hiện trường không có actor, role, device, object binding, timestamp, audit và correlation ID thì chưa đủ điều kiện làm evidence vận hành.

**12.4. Standard Domain Record**

Mỗi domain trong PACK-01 phải có cấu trúc:

| **Field**            | **Bắt buộc** | **Ý nghĩa**                    |
|----------------------|--------------|--------------------------------|
| domain_code          | Có           | Mã domain                      |
| domain_name          | Có           | Tên domain                     |
| owner_core           | Có           | Owner chịu trách nhiệm chính   |
| consumer_scope       | Có           | Domain tiêu thụ dữ liệu        |
| source_of_truth      | Có           | Nguồn sự thật                  |
| field_app_required   | Có/Không     | Có bắt buộc Field App không    |
| admin_web_required   | Có/Không     | Có Admin Web không             |
| device_required      | Có/Không     | Có thiết bị/printer/scan không |
| required_resolver    | Có           | Resolver bắt buộc              |
| required_guard       | Có           | Guard bắt buộc                 |
| required_trace_ids   | Có           | Trace ID bắt buộc              |
| required_evidence    | Có           | Evidence bắt buộc              |
| blocked_if_missing   | Có           | Điều kiện BLOCK                |
| audit_required       | Có           | Có audit hay không             |
| no_hardcode_required | Có           | Có cấm hardcode không          |

**12.5. Domain Default Decision**

Mọi domain trong PACK-01 mặc định là:

**BLOCK / PENDING_EVIDENCE**

Domain chỉ chuyển sang PASS khi có đủ:

1.  Owner rõ.

2.  Source-of-truth rõ.

3.  Resolver hoạt động.

4.  Guard hoạt động.

5.  Trace ID đầy đủ.

6.  Field Evidence nếu có thao tác hiện trường.

7.  Audit đầy đủ.

8.  Smoke pass.

9.  Evidence accepted.

10. Không có blocker P0.

**13. DOMAIN REGISTRY OVERVIEW**

| **Domain Code** | **Domain Name**                                  | **Owner Core**               | **Field App Required**                           | **Source-of-Truth**                              |
|-----------------|--------------------------------------------------|------------------------------|--------------------------------------------------|--------------------------------------------------|
| OP-SRC          | Source Origin / Company Source / Supplier Source | Source Origin Owner          | Có nếu capture evidence hiện trường              | Source Origin Registry                           |
| OP-RMI          | Raw Material Intake                              | Raw Material Owner           | Có                                               | Raw Material Receipt                             |
| OP-RMQ          | Raw Material QC / Lot Readiness                  | QC / Raw Material Owner      | Có                                               | Raw Material Lot + QC Record                     |
| OP-FLD          | Field Operations Internal App / Mobile PWA       | Field App Owner              | Có                                               | Mobile Event Audit / Backend Operational Records |
| OP-RCP          | Recipe / BOM Snapshot                            | Recipe Owner                 | Không bắt buộc                                   | Recipe / BOM Version                             |
| OP-PRD          | Production Order                                 | Production Owner             | Có cho hiện trường                               | Production Order                                 |
| OP-MTI          | Material Issue / Material Receipt                | Warehouse / Production Owner | Có                                               | Material Issue by Lot                            |
| OP-EXE          | Production Execution                             | Production Owner             | Có                                               | Execution Record                                 |
| OP-BAT          | Batch                                            | Production / QC Owner        | Có theo execution/QC                             | Batch Record                                     |
| OP-PKG          | Packaging Level 1 / Level 2 Box-Carton           | Packaging Owner              | Có                                               | Packaging Job                                    |
| OP-PRN          | Printing / Print Payload / Reprint               | Printing Owner               | Có                                               | Print Payload / Print Log                        |
| OP-QCR          | QC / Batch Release                               | QC Owner                     | Có cho QC, Admin/Owner cho release               | QC Inspection + Batch Release                    |
| OP-WHR          | Warehouse Receipt                                | Warehouse Owner              | Có                                               | Warehouse Receipt Confirmed                      |
| OP-INV          | Inventory Ledger / Stock Balance                 | Inventory Owner              | Không mutate trực tiếp từ app                    | Inventory Ledger                                 |
| OP-TRC          | Traceability                                     | Traceability Owner           | Có cho scan/check                                | Trace Chain / Genealogy                          |
| OP-RCL          | Recall / Recovery / Disposition / CAPA           | Recall Owner                 | Có                                               | Recall Case + Impact Snapshot                    |
| OP-SLK          | Sale Lock / Stop Sale                            | Recall / Risk Owner          | Có cho cảnh báo/suppress, Owner command cho lock | Sale Lock Registry                               |
| OP-MIS          | MISA Integration Boundary                        | MISA Integration Owner       | Không                                            | MISA Sync Event / Reconcile                      |
| OP-EVD          | Evidence / Smoke                                 | QA / Evidence Owner          | Có                                               | Evidence Packet / Smoke Log                      |

**14. OP-SRC — SOURCE ORIGIN / COMPANY SOURCE / SUPPLIER SOURCE DOMAIN**

**14.1. Domain Purpose**

OP-SRC kiểm soát nguồn gốc nguyên liệu trước khi nguyên liệu đi vào chuỗi vận hành.

Domain này xác định:

1.  Source zone.

2.  Source origin.

3.  Nguồn công ty.

4.  Supplier source.

5.  Evidence nguồn.

6.  Verification nguồn.

7.  Supplier Portal nếu có.

Vùng trồng Sâm Savigin là nguồn nội bộ của công ty.

Supplier bên ngoài chỉ được nhập evidence khi đủ điều kiện và được cấp quyền.

**14.2. Owner Core**

1.  Source Origin Owner.

2.  Raw Material Owner.

3.  QC Owner.

4.  Supplier Collaboration Owner.

5.  Evidence Owner.

**14.3. Source-of-Truth**

1.  Source Zone Registry.

2.  Source Origin Registry.

3.  Company Source Registry.

4.  Supplier Registry.

5.  Source Evidence.

6.  Source Verification Record.

**14.4. Field App Boundary**

Field App được dùng để:

1.  Chụp ảnh vùng trồng/nguyên liệu khi cần.

2.  Quay video evidence nếu cần.

3.  Upload evidence hiện trường.

4.  Gắn evidence vào source_origin_id hoặc supplier_id.

5.  Sync offline evidence.

Field App không được tự verify source.

Supplier Portal không được tự làm source PASS.

Source Verification Owner mới được xác nhận.

**14.5. Required Resolver**

1.  SourceZoneResolver.

2.  SourceOriginResolver.

3.  CompanySourceResolver.

4.  SupplierResolver.

5.  SupplierEligibilityResolver.

6.  SourceEvidenceResolver.

7.  SourceVerificationResolver.

**14.6. Required Guard**

1.  SourceOriginRequiredGuard.

2.  CompanySourceBoundaryGuard.

3.  SupplierPortalEligibilityGuard.

4.  SourceEvidenceGuard.

5.  SourceVerificationGuard.

6.  NoFreeTextSourceGuard.

7.  NoSupplierAutoPassGuard.

**14.7. Required Trace IDs**

1.  source_zone_id.

2.  source_origin_id.

3.  company_source_id nếu là nguồn công ty.

4.  supplier_id nếu là supplier ngoài.

5.  source_evidence_id.

6.  source_verification_id.

7.  audit_id.

8.  correlation_id.

**14.8. Blocked If Missing**

OP-SRC BLOCK nếu:

1.  Không có source zone.

2.  Không có source origin.

3.  Nguyên liệu không bind được nguồn.

4.  Supplier chưa đủ điều kiện nhưng được nhập evidence.

5.  Supplier evidence tự động PASS.

6.  Vùng trồng Sâm bị xử lý như supplier ngoài.

7.  Evidence không gắn object.

8.  Không có verification.

9.  Không có audit.

**15. OP-RMI — RAW MATERIAL INTAKE DOMAIN**

**15.1. Domain Purpose**

OP-RMI kiểm soát phiếu đánh giá và nhập kho nguyên liệu đầu vào.

Domain này ghi nhận:

1.  Nhà cung cấp hoặc nguồn công ty.

2.  Source zone.

3.  Source origin.

4.  Nguyên liệu canonical.

5.  Số lượng giao.

6.  Số lượng đạt.

7.  Số lượng không đạt.

8.  Đơn vị.

9.  Đơn giá nếu thuộc ngõ kế toán.

10. Evidence ảnh/video/file.

11. Kết luận nhập kho.

12. Cơ sở sinh lot nguyên liệu.

**15.2. Owner Core**

1.  Raw Material Owner.

2.  Warehouse Owner.

3.  QC Owner.

4.  Accounting Boundary Owner nếu có giá nhập.

5.  Evidence Owner.

**15.3. Source-of-Truth**

1.  Raw Material Receipt.

2.  Raw Material Receipt Item.

3.  Raw Material Master.

4.  Supplier/Company Source Record.

5.  Intake Evidence.

6.  Intake Accounting Data nếu có.

**15.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Chọn supplier/source từ registry.

2.  Chọn nguyên liệu từ master.

3.  Nhập số lượng giao.

4.  Ghi tình trạng ban đầu.

5.  Chụp ảnh/video nguyên liệu.

6.  Upload phiếu giao hàng/hóa đơn nếu có.

7.  Ghi kết quả đánh giá.

8.  Ghi lý do không đạt.

9.  Click xác nhận theo role.

10. Sync offline nếu mất mạng.

Field App không được cho nhập tay tên nguyên liệu thay cho master.

**15.5. Required Resolver**

1.  RawMaterialResolver.

2.  SupplierResolver.

3.  CompanySourceResolver.

4.  SourceOriginResolver.

5.  IntakeReceiptResolver.

6.  IntakeEvidenceResolver.

7.  IntakeAccountingResolver.

**15.6. Required Guard**

1.  RawMaterialMasterGuard.

2.  NoFreeTextMaterialGuard.

3.  IntakeQuantityGuard.

4.  SourceBindingGuard.

5.  SupplierStatusGuard.

6.  FieldEvidenceRequiredGuard.

7.  IntakeAccountingBoundaryGuard.

8.  IdempotencyGuard.

**15.7. Required Trace IDs**

1.  raw_material_receipt_id.

2.  raw_material_receipt_item_id.

3.  raw_material_id.

4.  supplier_id hoặc company_source_id.

5.  source_zone_id.

6.  source_origin_id.

7.  evidence_item_id.

8.  device_id nếu từ Field App.

9.  actor_id.

10. audit_id.

11. correlation_id.

**15.8. Blocked If Missing**

OP-RMI BLOCK nếu:

1.  Nguyên liệu không chọn từ master.

2.  Tên nguyên liệu nhập tay tự do.

3.  Thiếu nguồn.

4.  Thiếu supplier/company source hợp lệ.

5.  Số lượng giao không hợp lệ.

6.  Không tách số lượng đạt / không đạt.

7.  Media evidence mồ côi.

8.  Confirm intake không có role/device/audit.

9.  Không sinh được lot.

10. Không có audit.

**16. OP-RMQ — RAW MATERIAL QC / LOT READINESS DOMAIN**

**16.1. Domain Purpose**

OP-RMQ kiểm soát QC nguyên liệu và trạng thái sẵn sàng đưa vào sản xuất.

Lot nguyên liệu chỉ được issue cho sản xuất khi:

1.  Có raw material lot.

2.  Có QC record.

3.  QC_PASS.

4.  READY_FOR_PRODUCTION.

5.  Không hold.

6.  Không reject.

7.  Không expired.

8.  Không blocked.

9.  Có số lượng khả dụng.

10. Trace được về nguồn.

**16.2. Owner Core**

1.  QC Owner.

2.  Raw Material Owner.

3.  Warehouse Owner.

4.  Production Owner với vai trò Consumer.

**16.3. Source-of-Truth**

1.  Raw Material Lot.

2.  Raw Material QC Record.

3.  Lot Readiness Status.

4.  Lot Hold/Reject Status.

5.  Lot Evidence.

**16.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Xem lot chờ QC.

2.  Ghi kết quả QC.

3.  Chụp ảnh/video defect.

4.  Upload file kiểm tra nếu có.

5.  Accept / Hold / Reject theo permission.

6.  Ghi reason khi hold/reject.

7.  Gắn evidence vào lot/QC.

8.  Sync offline theo policy.

Field App không được tự chuyển lot READY_FOR_PRODUCTION nếu backend guard không PASS.

**16.5. Required Resolver**

1.  RawMaterialLotResolver.

2.  RawMaterialQCResolver.

3.  LotReadinessResolver.

4.  LotAvailabilityResolver.

5.  LotHoldResolver.

6.  LotExpiryResolver.

7.  LotEvidenceResolver.

**16.6. Required Guard**

1.  LotQCGuard.

2.  ReadyForProductionGuard.

3.  LotHoldGuard.

4.  LotRejectGuard.

5.  LotExpiryGuard.

6.  LotQuantityGuard.

7.  MaterialIssueEligibilityGuard.

8.  FieldQCPermissionGuard.

**16.7. Required Trace IDs**

1.  raw_material_lot_id.

2.  raw_material_qc_id.

3.  lot_readiness_event_id.

4.  evidence_item_id.

5.  device_id nếu từ Field App.

6.  actor_id.

7.  audit_id.

8.  correlation_id.

**16.8. Blocked If Missing**

OP-RMQ BLOCK nếu:

1.  Lot không có QC record.

2.  QC chưa PASS.

3.  Lot chưa READY_FOR_PRODUCTION.

4.  Lot bị hold.

5.  Lot bị reject.

6.  Lot expired.

7.  Lot không trace được nguồn.

8.  Lot không có số lượng khả dụng.

9.  Field App accept/hold/reject không có permission.

10. Production vẫn issue được lot chưa đủ điều kiện.

**17. OP-FLD — FIELD OPERATIONS INTERNAL APP / MOBILE PWA DOMAIN**

**17.1. Domain Purpose**

OP-FLD kiểm soát kênh thao tác hiện trường.

Domain này đảm bảo mọi hành động hiện trường được capture đúng:

1.  Actor.

2.  Role.

3.  Device.

4.  App version.

5.  Object binding.

6.  Timestamp.

7.  Evidence.

8.  Offline event.

9.  Idempotency.

10. Audit.

11. Correlation ID.

OP-FLD không owner business truth.

OP-FLD chỉ là capture/sync/action channel.

**17.2. Owner Core**

1.  Field App Owner.

2.  Device Owner.

3.  Security/Permission Owner.

4.  Operational Owner.

5.  Evidence Owner.

6.  QA Owner.

**17.3. Source-of-Truth**

1.  Mobile Event Queue.

2.  Mobile Event Audit.

3.  Device Registry.

4.  Device Auth Session.

5.  Media Evidence Record.

6.  Backend Operational Records.

7.  Idempotency Registry.

8.  Audit Log.

**17.4. Required Resolver**

1.  DeviceResolver.

2.  DeviceSessionResolver.

3.  ActorResolver.

4.  RolePermissionResolver.

5.  ObjectBindingResolver.

6.  OfflineEventResolver.

7.  IdempotencyResolver.

8.  MediaEvidenceResolver.

9.  FieldActionResolver.

10. AppVersionResolver.

**17.5. Required Guard**

1.  RegisteredDeviceGuard.

2.  DeviceSessionGuard.

3.  AppVersionGuard.

4.  ActorRoleGuard.

5.  PermissionGuard.

6.  ObjectBindingGuard.

7.  IdempotencyGuard.

8.  OfflineSyncGuard.

9.  NoOrphanMediaGuard.

10. NoBypassBackendGuard.

11. HighRiskActionGuard.

**17.6. Required Trace IDs**

1.  mobile_event_id.

2.  client_event_id.

3.  device_id.

4.  device_session_id.

5.  actor_id.

6.  role_id.

7.  object_id.

8.  evidence_item_id nếu có.

9.  idempotency_key.

10. audit_id.

11. correlation_id.

**17.7. Required Field App Actions**

Field App phải hỗ trợ nhóm action:

1.  Capture image.

2.  Capture video.

3.  Upload file.

4.  Scan QR/barcode.

5.  Check-in.

6.  Check-out.

7.  Submit field form.

8.  Click-confirm.

9.  Submit QC result.

10. Submit print error.

11. Submit reprint request.

12. Submit warehouse scan.

13. Submit recall evidence.

14. Offline sync.

15. Retry failed sync.

**17.8. Blocked If Missing**

OP-FLD BLOCK nếu:

1.  Không có device identity.

2.  Device chưa đăng ký.

3.  App version không hợp lệ.

4.  Không có actor/role.

5.  Không có permission cho high-risk action.

6.  Media không gắn object.

7.  Offline retry sinh duplicate.

8.  App mutate database trực tiếp.

9.  App bypass backend validation.

10. Scan tự đổi state.

11. Click-confirm không audit.

12. Không có mobile event audit.

**18. OP-RCP — RECIPE / BOM SNAPSHOT DOMAIN**

**18.1. Domain Purpose**

OP-RCP kiểm soát công thức/version/BOM được dùng trong sản xuất.

Khi chọn SKU, hệ thống phải tự hiện:

1.  Tên sản phẩm.

2.  Nhóm sản phẩm.

3.  Phân loại vegan / mặn.

4.  Mã công thức.

5.  Version công thức.

6.  Danh sách dược liệu.

7.  Danh sách nguyên liệu.

8.  Hàm lượng.

9.  Đơn vị.

10. Ghi chú vận hành nếu có.

Người vận hành không được chọn lại nguyên liệu trong sản xuất thường.

**18.2. Owner Core**

1.  Recipe Owner.

2.  Product Master Owner.

3.  Operational Config Owner.

4.  Production Owner với vai trò Consumer.

**18.3. Source-of-Truth**

1.  SKU Canonical Registry.

2.  Recipe / BOM Version.

3.  Formula Status Registry.

4.  Operational Config Map.

5.  Formula Approval Record.

**18.4. Field App Boundary**

Field App chỉ được hiển thị BOM snapshot và ghi nhận thao tác hiện trường.

Field App không được:

1.  Sửa công thức.

2.  Thêm nguyên liệu.

3.  Xóa nguyên liệu.

4.  Đổi hàm lượng chuẩn.

5.  Đổi version.

6.  Dùng nguyên liệu ngoài BOM.

**18.5. Required Resolver**

1.  SKUCanonicalResolver.

2.  ActiveFormulaResolver.

3.  BOMResolver.

4.  FormulaVersionResolver.

5.  OperationalConfigResolver.

6.  FormulaApprovalResolver.

**18.6. Required Guard**

1.  FormulaActiveGuard.

2.  BOMCompletenessGuard.

3.  NoManualMaterialSelectionGuard.

4.  FormulaVersionGuard.

5.  OperationalConfigGuard.

6.  FormulaChangeApprovalGuard.

**18.7. Required Trace IDs**

1.  sku_id.

2.  formula_id.

3.  formula_version_id.

4.  bom_snapshot_id.

5.  operational_config_id.

6.  formula_approval_id nếu có.

7.  audit_id.

8.  correlation_id.

**18.8. Blocked If Missing**

OP-RCP BLOCK nếu:

1.  SKU không có công thức.

2.  Công thức thiếu version.

3.  Công thức thiếu nhóm sản phẩm.

4.  Công thức thiếu phân loại vegan/mặn.

5.  BOM thiếu nguyên liệu chi tiết.

6.  Có dòng gom nhóm mơ hồ ở downstream.

7.  Field App hoặc Admin Web cho chọn tay nguyên liệu ở sản xuất thường.

8.  Thay đổi công thức nhưng không tạo version mới.

9.  Lệnh sản xuất không snapshot BOM.

10. Không audit được version đang dùng.

**19. OP-PRD — PRODUCTION ORDER DOMAIN**

**19.1. Domain Purpose**

OP-PRD kiểm soát lệnh sản xuất và hồ sơ sản xuất gốc.

Production Order là điểm sinh dữ liệu gốc cho toàn bộ phiếu downstream.

Production Order phải tự kéo:

1.  SKU.

2.  Tên sản phẩm.

3.  Nhóm sản phẩm.

4.  Phân loại vegan / mặn.

5.  Mã công thức.

6.  Version.

7.  BOM snapshot.

8.  Số lượng kế hoạch.

9.  Ca sản xuất.

10. Bộ phận sản xuất.

11. Quản lý nhà máy.

**19.2. Owner Core**

1.  Production Owner.

2.  Recipe Owner.

3.  Factory Manager.

4.  QA/QC Owner với vai trò downstream gate.

5.  Warehouse Owner với vai trò material issue consumer.

**19.3. Source-of-Truth**

1.  Production Order.

2.  Production Profile.

3.  BOM Snapshot.

4.  Production Order Item.

5.  Production Order Status.

6.  Production Sign-off.

**19.4. Field App Boundary**

Field App được dùng để:

1.  Xem lệnh sản xuất.

2.  Xem BOM snapshot.

3.  Xem công đoạn.

4.  Check-in/check-out.

5.  Start/Pause/Resume/Complete execution theo permission.

6.  Ghi process event.

7.  Capture evidence.

Field App không được tạo/sửa BOM snapshot.

**19.5. Required Resolver**

1.  ProductionOrderResolver.

2.  ProductionProfileResolver.

3.  BOMSnapshotResolver.

4.  ProductionOrderStatusResolver.

5.  ProductionRoleSignoffResolver.

6.  ProductionPlanningSignalResolver nếu có.

**19.6. Required Guard**

1.  ProductionOrderCreationGuard.

2.  BOMSnapshotGuard.

3.  ProductionOpenGuard.

4.  NoManualMaterialSelectionGuard.

5.  RoleSignoffGuard.

6.  ProductionPlanningOwnerReviewGuard.

7.  FieldCommandPermissionGuard.

**19.7. Required Trace IDs**

1.  production_order_id.

2.  production_profile_id.

3.  bom_snapshot_id.

4.  sku_id.

5.  formula_version_id.

6.  production_signoff_id.

7.  device_id nếu action từ app.

8.  audit_id.

9.  correlation_id.

**19.8. Blocked If Missing**

OP-PRD BLOCK nếu:

1.  Không có production profile.

2.  Không có BOM snapshot.

3.  Không có formula version.

4.  Lệnh sản xuất không tự hiện công thức.

5.  Người dùng chọn tay nguyên liệu.

6.  Không có role ký xác nhận.

7.  Sản xuất bắt đầu khi chưa có nguyên liệu được chấp thuận.

8.  Production Planning Signal tự thành Production Order mà không qua Owner Review.

9.  Field App start execution không có permission/audit.

10. Không audit được lệnh sản xuất.

**20. OP-MTI — MATERIAL ISSUE / MATERIAL RECEIPT DOMAIN**

**20.1. Domain Purpose**

OP-MTI kiểm soát cấp phát và nhận nguyên liệu cho sản xuất.

Material Issue là cầu nối giữa:

1.  BOM snapshot.

2.  Raw material lot.

3.  Production order.

4.  Phiếu đề nghị cấp nguyên liệu.

5.  Phiếu chấp thuận nguyên liệu.

6.  Xưởng nhận nguyên liệu.

7.  Batch genealogy.

8.  Phiếu kế toán xuất nguyên liệu nếu thuộc scope.

**20.2. Owner Core**

1.  Warehouse Owner.

2.  Production Owner.

3.  QC Owner.

4.  Accounting Boundary Owner nếu có phiếu kế toán xuất nguyên liệu.

**20.3. Source-of-Truth**

1.  Material Issue Record.

2.  Material Receipt Confirmation.

3.  Production Order Item / BOM Snapshot.

4.  Raw Material Lot.

5.  Material Approval Record.

6.  Accounting Issue Record nếu có.

**20.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Xem danh sách nguyên liệu tự hiện từ BOM.

2.  Scan/check lot nguyên liệu.

3.  Xác nhận nhận nguyên liệu tại xưởng.

4.  Ghi chênh lệch nếu có.

5.  Chụp ảnh/video nếu có sự cố.

6.  Sync offline theo policy.

Field App không được:

1.  Issue nguyên liệu ngoài BOM.

2.  Chọn tay nguyên liệu.

3.  Dùng lot chưa QC_PASS + READY_FOR_PRODUCTION.

4.  Xác nhận nhận nguyên liệu nếu backend guard BLOCK.

**20.5. Required Resolver**

1.  MaterialIssueResolver.

2.  MaterialReceiptResolver.

3.  ProductionOrderItemResolver.

4.  RawMaterialLotResolver.

5.  LotReadinessResolver.

6.  MaterialApprovalResolver.

7.  MaterialAccountingIssueResolver.

**20.6. Required Guard**

1.  BOMLineGuard.

2.  LotReadyForProductionGuard.

3.  LotQuantityGuard.

4.  NoOutsideBOMIssueGuard.

5.  MaterialApprovalGuard.

6.  AccountingBoundaryGuard.

7.  IdempotencyGuard.

8.  FieldReceiptConfirmationGuard.

**20.7. Required Trace IDs**

1.  material_issue_id.

2.  material_receipt_id.

3.  production_order_id.

4.  production_order_item_id.

5.  raw_material_lot_id.

6.  material_approval_id.

7.  accounting_issue_id nếu có.

8.  device_id nếu từ Field App.

9.  audit_id.

10. correlation_id.

**20.8. Blocked If Missing**

OP-MTI BLOCK nếu:

1.  Nguyên liệu không thuộc BOM snapshot.

2.  Lot chưa QC_PASS.

3.  Lot chưa READY_FOR_PRODUCTION.

4.  Lot bị hold/reject/expired.

5.  Không đủ số lượng khả dụng.

6.  Không có phiếu chấp thuận nguyên liệu.

7.  Issue không lot-based.

8.  Field App xác nhận nhận nguyên liệu không có actor/device/audit.

9.  Phiếu kế toán xuất nguyên liệu bị gộp sai với phiếu xưởng.

10. Batch sau này không truy ngược được raw material lot.

**21. OP-EXE — PRODUCTION EXECUTION DOMAIN**

**21.1. Domain Purpose**

OP-EXE kiểm soát thực thi sản xuất.

Domain này ghi nhận:

1.  Start.

2.  Pause.

3.  Resume.

4.  Complete.

5.  Process event.

6.  Actual input.

7.  Actual output.

8.  Loss.

9.  Incident.

10. Handover.

11. Check-in/check-out nhân sự.

Execution không được chỉ lưu trạng thái cuối.

Execution phải có log sự kiện phục vụ audit, costing, trace và recall.

**21.2. Owner Core**

1.  Production Owner.

2.  Factory Manager.

3.  Shift Leader / Process Owner.

4.  QA/QC Owner với vai trò downstream.

5.  Costing Owner với vai trò consumer.

**21.3. Source-of-Truth**

1.  Production Execution Record.

2.  Production Process Event.

3.  Personnel Check-in / Check-out Record.

4.  Process Evidence.

5.  Actual Output / Loss Record.

**21.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Start execution.

2.  Pause execution.

3.  Resume execution.

4.  Complete execution.

5.  Ghi process event.

6.  Ghi output.

7.  Ghi loss.

8.  Ghi incident.

9.  Chụp ảnh/video nếu có lỗi.

10. Sync offline theo policy.

Field App không được tự tạo batch nếu backend guard không cho phép.

**21.5. Required Resolver**

1.  ProductionExecutionResolver.

2.  ProcessEventResolver.

3.  ActualOutputResolver.

4.  LossResolver.

5.  IncidentResolver.

6.  PersonnelCheckInResolver.

**21.6. Required Guard**

1.  ExecutionStartGuard.

2.  ExecutionStateGuard.

3.  ProcessEventAuditGuard.

4.  OutputQuantityGuard.

5.  LossReasonGuard.

6.  PersonnelSignoffGuard.

7.  FieldExecutionPermissionGuard.

**21.7. Required Trace IDs**

1.  production_execution_id.

2.  production_order_id.

3.  work_order_id nếu có.

4.  process_event_id.

5.  personnel_check_event_id nếu có.

6.  output_record_id.

7.  device_id nếu từ Field App.

8.  audit_id.

9.  correlation_id.

**21.8. Blocked If Missing**

OP-EXE BLOCK nếu:

1.  Execution không gắn production order.

2.  Không ghi process event.

3.  Pause/resume/loss/incident không có log.

4.  Actual output không rõ.

5.  Loss không có reason.

6.  Produced/accepted/loss bị trộn.

7.  Check-in/check-out là ghi chú text.

8.  Field App complete execution không có permission/audit.

9.  Batch phải tự đoán dữ liệu từ execution.

**22. OP-BAT — BATCH DOMAIN**

**22.1. Domain Purpose**

OP-BAT kiểm soát batch thành phẩm sau sản xuất và trước kho.

Batch là trung tâm cho:

1.  Packaging.

2.  Printing.

3.  QC thành phẩm.

4.  Release.

5.  Warehouse receipt.

6.  Inventory.

7.  Traceability.

8.  Recall.

9.  Public trace.

10. MISA checkpoint nếu có.

**22.2. Owner Core**

1.  Production Owner.

2.  QC Owner.

3.  Batch Release Owner.

4.  Traceability Owner với vai trò consumer.

5.  Warehouse Owner với vai trò consumer.

**22.3. Source-of-Truth**

1.  Batch Record.

2.  Batch Material Usage.

3.  Batch State Transition Log.

4.  Batch Genealogy Link.

5.  Batch Quantity Summary như projection.

Batch Quantity Summary không thay source-of-truth nếu conflict với batch/execution.

**22.4. Field App Boundary**

Field App có thể capture:

1.  Output thực tế.

2.  Loss.

3.  Incident.

4.  Evidence công đoạn.

5.  Check trạng thái batch.

Field App không được:

1.  Sửa batch trực tiếp.

2.  Gán batch vào lot thủ công trái issue log.

3.  Chuyển batch QC_PASS.

4.  Release batch.

5.  Nhập kho batch.

**22.5. Required Resolver**

1.  BatchResolver.

2.  BatchGenealogyResolver.

3.  BatchMaterialUsageResolver.

4.  BatchQuantityResolver.

5.  BatchStatusResolver.

6.  BatchExpiryResolver.

7.  BatchHoldResolver.

**22.6. Required Guard**

1.  BatchCreationGuard.

2.  BatchCodeUniqueGuard.

3.  BatchGenealogyGuard.

4.  BatchQuantityGuard.

5.  BatchQCStatusGuard.

6.  BatchReleaseStatusGuard.

7.  BatchHoldGuard.

8.  FieldBatchMutationGuard.

**22.7. Required Trace IDs**

1.  batch_id.

2.  batch_code.

3.  production_order_id.

4.  production_execution_id.

5.  raw_material_lot_id list.

6.  batch_material_usage_id.

7.  formula_version_id.

8.  audit_id.

9.  correlation_id.

**22.8. Blocked If Missing**

OP-BAT BLOCK nếu:

1.  Batch không gắn production order.

2.  Batch không gắn execution.

3.  Batch không truy được raw material lot.

4.  Batch không có formula version.

5.  Batch không có MFG/HSD.

6.  Batch mới tạo nhưng bị coi như RELEASED.

7.  QC_PASS bị coi như RELEASED.

8.  Batch bị hold nhưng vẫn downstream.

9.  Không có state transition log.

10. Field App sửa batch state trực tiếp.

**23. OP-PKG — PACKAGING LEVEL 1 / LEVEL 2 BOX-CARTON DOMAIN**

**23.1. Domain Purpose**

OP-PKG kiểm soát đóng gói cấp 1 và cấp 2.

Packaging Level 1:

1.  Gói / lọ / hũ.

2.  Chỉ in NSX/HSD.

3.  Không tạo inventory.

4.  Không release batch.

5.  Không phải trace chính nếu policy không xác định là trade item.

Packaging Level 2:

1.  Hộp.

2.  Thùng.

3.  Có lô/batch.

4.  Có NSX.

5.  Có HSD.

6.  Có mã vạch.

7.  Có QR.

8.  Là cấp truy vết chính.

9.  Có thể là trade item thương mại.

10. Phải map GTIN/GS1 khi registry sẵn sàng.

**23.2. Owner Core**

1.  Packaging Owner.

2.  Production Owner.

3.  Printing Owner.

4.  Traceability Owner.

5.  Trade Item Owner nếu cấp đóng gói là trade item.

6.  QC Owner với vai trò downstream.

**23.3. Source-of-Truth**

1.  Packaging Spec.

2.  Packaging Job.

3.  Packaging Job Unit.

4.  Batch.

5.  Trade Item Config.

6.  GTIN/GS1 Registry nếu có.

7.  Packaging Evidence.

**23.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Xem packaging job.

2.  Xem batch.

3.  Phân biệt cấp 1/cấp 2.

4.  Phân biệt hộp/thùng.

5.  Ghi số lượng đầu vào.

6.  Ghi số lượng đạt.

7.  Ghi số lượng không đạt.

8.  Ghi lý do không đạt.

9.  Chụp ảnh/video.

10. Complete packaging theo permission.

11. Gửi print request nếu thuộc cấp in.

12. Sync offline theo policy.

Field App không được tạo inventory khi complete packaging.

**23.5. Required Resolver**

1.  PackagingSpecResolver.

2.  PackagingJobResolver.

3.  PackagingLevelResolver.

4.  BatchResolver.

5.  TradeItemResolver.

6.  GTINResolver.

7.  PackagingEvidenceResolver.

**23.6. Required Guard**

1.  BatchRequiredForPackagingGuard.

2.  PackagingLevelGuard.

3.  PackagingSpecGuard.

4.  Level1PrintBoundaryGuard.

5.  Level2BoxCartonGuard.

6.  TradeItemGTINGuard.

7.  NoInventoryFromPackagingGuard.

8.  PackagingEvidenceGuard.

9.  FieldPackagingPermissionGuard.

**23.7. Required Trace IDs**

1.  packaging_job_id.

2.  packaging_level.

3.  batch_id.

4.  trade_item_id nếu có.

5.  gtin_id nếu có.

6.  evidence_item_id.

7.  device_id nếu từ Field App.

8.  audit_id.

9.  correlation_id.

**23.8. Blocked If Missing**

OP-PKG BLOCK nếu:

1.  Packaging job không gắn batch.

2.  Packaging level không rõ.

3.  Hộp/thùng không phân biệt.

4.  Cấp 1 in dữ liệu vượt boundary.

5.  Cấp 2 không in đủ lô/NSX/HSD/barcode/QR.

6.  GTIN/GS1 bị nhập tay.

7.  QR bị dùng thay barcode thương mại.

8.  Packaging complete làm tăng inventory.

9.  Packaging complete làm pass QC.

10. Packaging complete làm release batch.

11. Field App cho nhập tay lô/barcode/QR.

**24. OP-PRN — PRINTING / PRINT PAYLOAD / REPRINT DOMAIN**

**24.1. Domain Purpose**

OP-PRN kiểm soát dữ liệu in, máy in, template, print payload, print log, print error và reprint.

Printing là technical boundary.

Hệ thống sinh payload.

Máy in chỉ nhận payload và trả trạng thái.

**24.2. Owner Core**

1.  Printing Owner.

2.  Packaging Owner.

3.  Device/Printer Owner.

4.  Traceability Owner.

5.  Trade Item Owner nếu liên quan GTIN/GS1.

6.  QA/QC Owner với vai trò kiểm chứng.

**24.3. Source-of-Truth**

1.  Print Template Registry.

2.  Print Device Registry.

3.  Print Job.

4.  Print Payload.

5.  Print Execution Log.

6.  Print Error Log.

7.  Reprint Log.

8.  QR Registry.

9.  GTIN/GS1 Registry nếu có.

**24.4. Field App Boundary**

Field App được dùng để:

1.  Chọn packaging job.

2.  Chọn máy in từ registry.

3.  Start print.

4.  Scan kiểm tra mã in.

5.  Ghi print error.

6.  Chụp ảnh/video lỗi in.

7.  Gửi reprint request có reason.

8.  Theo dõi trạng thái in.

Field App không được:

1.  Nhập tay batch/lô.

2.  Nhập tay NSX/HSD.

3.  Nhập tay barcode.

4.  Nhập tay QR.

5.  Tự tạo print payload.

6.  Tự xác nhận print PASS nếu backend/printer log không có.

**24.5. Required Resolver**

1.  PrintTemplateResolver.

2.  PrintDeviceResolver.

3.  PrintPayloadResolver.

4.  BatchPrintContextResolver.

5.  QRTokenResolver.

6.  GTINResolver.

7.  ReprintPolicyResolver.

8.  PrintLogResolver.

**24.6. Required Guard**

1.  PrintTemplateGuard.

2.  PrintDeviceStatusGuard.

3.  SystemGeneratedPayloadGuard.

4.  NoManualPrintDataGuard.

5.  ReprintControlGuard.

6.  PrinterNoBusinessTruthGuard.

7.  QRBatchMappingGuard.

8.  GTINTradeItemGuard.

9.  FieldPrintActionGuard.

**24.7. Required Trace IDs**

1.  print_job_id.

2.  print_payload_id.

3.  batch_id.

4.  packaging_job_id.

5.  qr_token_id.

6.  gtin_id nếu có.

7.  reprint_event_id nếu có.

8.  print_error_id nếu có.

9.  device_id.

10. audit_id.

11. correlation_id.

**24.8. Blocked If Missing**

OP-PRN BLOCK nếu:

1.  Máy in tự sinh batch/lô/NSX/HSD/barcode/QR.

2.  Field App cho nhập tay mã in cấp 2.

3.  Không có print payload.

4.  Không có print log.

5.  Không có reprint log.

6.  Reprint không reason/approval.

7.  QR không map batch thật.

8.  GTIN không lấy từ trade item config.

9.  Cùng trade item có hai barcode thương mại.

10. Printing làm thay inventory/QC/release.

**25. OP-QCR — QC / BATCH RELEASE DOMAIN**

**25.1. Domain Purpose**

OP-QCR kiểm soát QC sau sấy, QC thành phẩm và hành động release batch.

QC_PASS không đồng nghĩa RELEASED.

Release là action riêng.

**25.2. Owner Core**

1.  QC Owner.

2.  Batch Release Owner.

3.  Factory Manager.

4.  Warehouse Owner với vai trò downstream consumer.

5.  Recall Owner nếu QC phát sinh incident.

**25.3. Source-of-Truth**

1.  QC Checklist Template.

2.  QC Inspection.

3.  QC Inspection Item.

4.  QC Scan Verification.

5.  QC Media.

6.  Batch Disposition.

7.  Batch Release Record.

8.  Batch State Transition Log.

**25.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Ghi số lượng kiểm tra.

2.  Ghi % độ ẩm.

3.  Ghi cảm quan.

4.  Chụp ảnh/video.

5.  Upload file đo nếu có.

6.  Submit QC result.

7.  Accept/Hold/Reject theo permission.

8.  Ghi reason khi hold/reject.

9.  Scan verification nếu cần.

Field App không được tự release batch.

Batch release phải là action riêng có owner/permission/audit.

**25.5. Required Resolver**

1.  QCChecklistResolver.

2.  QCInspectionResolver.

3.  MoistureThresholdResolver.

4.  BatchDispositionResolver.

5.  BatchReleaseResolver.

6.  BatchHoldResolver.

7.  QCIncidentResolver.

**25.6. Required Guard**

1.  QCRequiredItemGuard.

2.  MoistureThresholdGuard.

3.  QCResultGuard.

4.  BatchReleaseEligibilityGuard.

5.  QCNotAutoReleaseGuard.

6.  BatchRejectGuard.

7.  BatchHoldGuard.

8.  TransitionLogGuard.

9.  FieldQCPermissionGuard.

**25.7. Required Trace IDs**

1.  qc_inspection_id.

2.  qc_item_id.

3.  batch_id.

4.  disposition_id.

5.  batch_release_id.

6.  state_transition_id.

7.  moisture_measurement_id nếu có.

8.  evidence_item_id.

9.  device_id nếu từ Field App.

10. audit_id.

11. correlation_id.

**25.8. Blocked If Missing**

OP-QCR BLOCK nếu:

1.  Không có QC inspection.

2.  Thiếu độ ẩm ở bước sau sấy.

3.  Độ ẩm \>4% nhưng vẫn PASS.

4.  Độ ẩm 2%–4% nhưng tự động PASS.

5.  QC_PASS tự release.

6.  Rejected batch vẫn release được.

7.  Hold batch vẫn downstream.

8.  Release không có record riêng.

9.  Field App release batch trực tiếp.

10. Không có transition log.

**26. OP-WHR — WAREHOUSE RECEIPT DOMAIN**

**26.1. Domain Purpose**

OP-WHR kiểm soát nhập kho thành phẩm.

Warehouse Receipt Confirmed là điểm kích hoạt tồn kho thành phẩm.

Scan inbound không đồng nghĩa confirm receipt.

Chỉ batch RELEASED mới được nhập kho.

**26.2. Owner Core**

1.  Warehouse Owner.

2.  Inventory Owner.

3.  QC Owner với vai trò xác nhận batch released.

4.  Operational Owner.

5.  MISA Integration Owner nếu sync nhập kho.

**26.3. Source-of-Truth**

1.  Warehouse Receipt.

2.  Warehouse Receipt Item.

3.  Warehouse Registry.

4.  Location Registry.

5.  Batch Release Record.

6.  Receipt Confirmation Record.

7.  Warehouse Evidence.

Kho thật ban đầu: Kho Bến Tre.

Kho này phải là registry value, không hardcode.

**26.4. Field App Boundary**

Field App bắt buộc hỗ trợ:

1.  Scan inbound.

2.  Xem batch RELEASED.

3.  Xem warehouse/location.

4.  Ghi số lượng nhận.

5.  Chụp ảnh/video nhập kho.

6.  Click confirm receipt theo permission.

7.  Sync offline nếu policy cho phép.

Field App không được:

1.  Tăng inventory khi chỉ scan.

2.  Confirm receipt nếu batch chưa RELEASED.

3.  Confirm receipt nếu không đủ permission.

4.  Confirm receipt nếu thiếu warehouse/location.

5.  Bypass backend guard.

**26.5. Required Resolver**

1.  WarehouseResolver.

2.  LocationResolver.

3.  BatchReleaseResolver.

4.  WarehouseReceiptResolver.

5.  ReceiptConfirmationResolver.

6.  WarehouseEvidenceResolver.

7.  MISAWarehouseMappingResolver nếu sync.

**26.6. Required Guard**

1.  ReleasedBatchOnlyReceiptGuard.

2.  ScanNotConfirmGuard.

3.  ReceiptConfirmationGuard.

4.  WarehouseLocationGuard.

5.  ReceiptQuantityGuard.

6.  ReceiptEvidenceGuard.

7.  WarehouseNoHardcodeGuard.

8.  FieldReceiptPermissionGuard.

9.  MISAMappingGuard nếu sync.

**26.7. Required Trace IDs**

1.  warehouse_receipt_id.

2.  warehouse_receipt_item_id.

3.  batch_id.

4.  batch_release_id.

5.  warehouse_id.

6.  warehouse_location_id.

7.  receipt_confirmation_id.

8.  device_id nếu từ Field App.

9.  misa_sync_event_id nếu có.

10. audit_id.

11. correlation_id.

**26.8. Blocked If Missing**

OP-WHR BLOCK nếu:

1.  Batch chưa RELEASED.

2.  QC_PASS bị dùng thay release.

3.  Chỉ scan nhưng chưa confirm.

4.  Không có warehouse/location.

5.  Kho Bến Tre bị hardcode thay vì registry.

6.  Số lượng nhập không rõ.

7.  Không có receipt confirmation.

8.  Warehouse receipt làm sai inventory boundary.

9.  Field App confirm receipt không có permission/device/audit.

10. Không có MISA mapping nếu cần sync chính thức.

**27. OP-INV — INVENTORY LEDGER / STOCK BALANCE DOMAIN**

**27.1. Domain Purpose**

OP-INV kiểm soát tồn kho và biến động tồn kho.

Inventory chỉ thay đổi qua:

1.  Warehouse Receipt Confirmed.

2.  Approved Adjustment.

3.  Allocation / Issue theo policy.

4.  Return / Recovery theo policy.

5.  Recall disposition theo policy.

Inventory Ledger là source-of-truth của biến động tồn kho.

**27.2. Owner Core**

1.  Inventory Owner.

2.  Warehouse Owner.

3.  Operational Owner.

4.  Recall Owner nếu có hold/recovery.

5.  Order/Allocation Consumer nếu có bán hàng.

**27.3. Source-of-Truth**

1.  Inventory Ledger.

2.  Inventory Lot Balance.

3.  Warehouse Receipt Confirmed.

4.  Allocation Record.

5.  Adjustment Approval.

6.  Hold/Sale Lock Registry nếu ảnh hưởng availability.

**27.4. Field App Boundary**

Field App có thể:

1.  Scan inbound.

2.  Capture stock evidence.

3.  Gửi yêu cầu adjustment nếu có policy.

4.  Capture recovery/return evidence.

Field App không được:

1.  Update inventory trực tiếp.

2.  Sửa ledger.

3.  Tự tạo stock available.

4.  Tự gỡ stock blocked.

5.  Tự bỏ recall hold.

6.  Tự xác định sellable.

**27.5. Required Resolver**

1.  InventoryLedgerResolver.

2.  InventoryBalanceResolver.

3.  StockAvailableResolver.

4.  StockReservedResolver.

5.  StockBlockedResolver.

6.  WarehouseLocationResolver.

7.  InventoryAdjustmentResolver.

8.  InventoryHoldResolver.

**27.6. Required Guard**

1.  LedgerAppendOnlyGuard.

2.  NoDirectInventoryUpdateGuard.

3.  NoNegativeInventoryGuard.

4.  StockAvailabilityGuard.

5.  StockReservationGuard.

6.  StockBlockedGuard.

7.  AdjustmentReasonGuard.

8.  InventoryProjectionGuard.

9.  FieldInventoryMutationGuard.

**27.7. Required Trace IDs**

1.  inventory_ledger_id.

2.  inventory_lot_balance_id.

3.  batch_id.

4.  warehouse_receipt_id.

5.  warehouse_id.

6.  warehouse_location_id.

7.  allocation_id nếu có.

8.  adjustment_id nếu có.

9.  audit_id.

10. correlation_id.

**27.8. Blocked If Missing**

OP-INV BLOCK nếu:

1.  Inventory tăng từ packaging.

2.  Inventory tăng từ QC.

3.  Inventory tăng từ printing.

4.  Inventory tăng từ scan inbound chưa confirm.

5.  Field App update inventory trực tiếp.

6.  Ledger sửa trực tiếp.

7.  Ledger không append-only.

8.  Stock âm.

9.  Stock available không khớp ledger/balance.

10. Consumer tự suy luận tồn kho.

**28. OP-TRC — TRACEABILITY DOMAIN**

**28.1. Domain Purpose**

OP-TRC kiểm soát truy xuất nội bộ và public trace.

Traceability phải hỗ trợ:

1.  Backward trace.

2.  Forward trace.

3.  Internal trace.

4.  Public trace.

5.  Genealogy tree.

6.  Timeline.

7.  Batch-to-lot trace.

8.  QR-to-batch trace.

9.  Batch-to-exposure trace.

10. Recall impact trace.

**28.2. Owner Core**

1.  Traceability Owner.

2.  Production Owner.

3.  Warehouse Owner.

4.  Inventory Owner.

5.  Recall Owner với vai trò Consumer.

6.  Public Trace Owner.

**28.3. Source-of-Truth**

1.  Trace Link.

2.  Batch Genealogy Link.

3.  QR Registry.

4.  Trace Search Index.

5.  Internal Trace View.

6.  Public Trace View.

7.  Shipment/Exposure Link nếu có.

8.  Trace Policy.

**28.4. Field App Boundary**

Field App phải hỗ trợ:

1.  Scan QR/barcode.

2.  Resolve trace nội bộ theo quyền.

3.  Capture ảnh/video trace evidence.

4.  Gắn trace_result_id.

5.  Gửi trace issue nếu phát hiện lỗi.

6.  Sync offline theo policy.

Field App không được:

1.  Tự sửa trace chain.

2.  Tự public trace.

3.  Tự gỡ trace gap.

4.  Tự map QR sang batch khác.

**28.5. Required Resolver**

1.  TraceSearchResolver.

2.  BatchGenealogyResolver.

3.  QRRegistryResolver.

4.  InternalTraceResolver.

5.  PublicTraceResolver.

6.  TracePolicyResolver.

7.  ExposureResolver.

8.  TraceGapResolver.

**28.6. Required Guard**

1.  TraceCompletenessGuard.

2.  QRBatchMappingGuard.

3.  PublicTraceWhitelistGuard.

4.  InternalDataLeakGuard.

5.  TraceGapGuard.

6.  RecallTraceReuseGuard.

7.  LotBatchBasedTraceGuard.

8.  FieldTracePermissionGuard.

**28.7. Required Trace IDs**

1.  trace_link_id.

2.  batch_genealogy_link_id.

3.  qr_token_id.

4.  batch_id.

5.  raw_material_lot_id.

6.  packaging_job_id.

7.  print_payload_id.

8.  warehouse_receipt_id.

9.  shipment_batch_link_id nếu có.

10. customer_exposure_id nếu có.

11. device_id nếu từ Field App.

12. audit_id.

13. correlation_id.

**28.8. Blocked If Missing**

OP-TRC BLOCK nếu:

1.  Batch không truy ngược được raw material lot.

2.  QR không map batch thật.

3.  Cấp 2 hộp/thùng không gắn trace.

4.  Public trace lộ internal fields.

5.  Internal trace thiếu genealogy.

6.  Trace theo tên sản phẩm thay vì lot/batch.

7.  Recall phải dựng chain riêng.

8.  Field App tự sửa trace.

9.  Không audit được trace action.

**29. OP-RCL — RECALL / RECOVERY / DISPOSITION / CAPA DOMAIN**

**29.1. Domain Purpose**

OP-RCL kiểm soát thu hồi, impact, recovery, disposition, CAPA và close case.

Recall phải:

1.  Dùng traceability chain.

2.  Chặn flow thật.

3.  Nhìn thấy inventory impact.

4.  Nhìn thấy order/shipment impact nếu có.

5.  Nhìn thấy customer exposure impact nếu có.

6.  Recovery được.

7.  Disposition được.

8.  Có CAPA.

9.  Có timeline.

10. Có evidence.

11. Đóng case rõ, kể cả residual risk.

**29.2. Owner Core**

1.  Recall Owner.

2.  QC Owner.

3.  Risk Owner.

4.  Warehouse Owner.

5.  Customer Service Owner nếu có customer exposure.

6.  Legal/Compliance Owner nếu sự cố nghiêm trọng.

7.  Final Business Owner nếu cần.

**29.3. Source-of-Truth**

1.  Recall Case.

2.  Recall Case Batch.

3.  Hold Registry.

4.  Sale Lock Registry.

5.  Recall Inventory Impact.

6.  Recall Order Impact.

7.  Recall Customer Impact.

8.  Recall Contact Task.

9.  Recovery Item.

10. Disposition Record.

11. Recall Timeline.

12. Root Cause / CAPA.

13. Recall Impact Summary.

14. Recovery Summary.

**29.4. Field App Boundary**

Field App phải hỗ trợ:

1.  Scan QR/batch khi thu hồi.

2.  Chụp ảnh/video sản phẩm thu hồi.

3.  Ghi recovery item.

4.  Ghi disposition evidence.

5.  Ghi contact/recovery result nếu thuộc scope.

6.  Gắn recall_case_id.

7.  Sync offline nếu thu hồi ngoài kho.

Field App không được:

1.  Tự close recall.

2.  Tự gỡ Sale Lock.

3.  Tự sửa impact.

4.  Tự xóa recovery record.

5.  Tự close with residual risk.

**29.5. Required Resolver**

1.  RecallCaseResolver.

2.  RecallImpactResolver.

3.  HoldResolver.

4.  SaleLockResolver.

5.  InventoryImpactResolver.

6.  OrderImpactResolver.

7.  CustomerExposureResolver.

8.  RecoveryResolver.

9.  DispositionResolver.

10. CAPAResolver.

11. ResidualRiskResolver.

**29.6. Required Guard**

1.  RecallTraceReuseGuard.

2.  RecallImpactCompletenessGuard.

3.  HoldActivationGuard.

4.  SaleLockActivationGuard.

5.  RecoveryGuard.

6.  DispositionGuard.

7.  CAPAGuard.

8.  ResidualRiskGuard.

9.  RecallCloseGuard.

10. FieldRecallActionGuard.

**29.7. Required Trace IDs**

1.  recall_case_id.

2.  recall_case_batch_id.

3.  hold_id.

4.  sale_lock_id.

5.  inventory_impact_id.

6.  order_impact_id.

7.  customer_impact_id.

8.  recovery_item_id.

9.  disposition_id.

10. capa_id.

11. recall_timeline_id.

12. device_id nếu từ Field App.

13. audit_id.

14. correlation_id.

**29.8. Blocked If Missing**

OP-RCL BLOCK nếu:

1.  Recall dựng chain riêng.

2.  Không xác định batch/scope.

3.  Không có inventory impact.

4.  Không có order/shipment impact khi có dữ liệu.

5.  Không có customer exposure impact khi có dữ liệu.

6.  Hold và sale lock bị trộn.

7.  Recovery/disposition/CAPA không là object riêng.

8.  Close with residual risk không explicit.

9.  Field App close recall không có owner approval.

10. Recall không chặn flow thật.

**30. OP-SLK — SALE LOCK / STOP SALE DOMAIN**

**30.1. Domain Purpose**

OP-SLK kiểm soát khóa bán theo SKU, batch, lot, trade item, channel, program hoặc campaign.

Sale Lock chặn downstream:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  ADS.

5.  MC AI.

6.  Landing Page.

7.  Order.

8.  Quote.

9.  Allocation.

10. Shipping nếu scope yêu cầu.

**30.2. Owner Core**

1.  Recall Owner.

2.  Risk Owner.

3.  Operational Owner.

4.  Product Activation Owner.

5.  Channel Owner với vai trò Consumer.

6.  Final Business Owner nếu scope nghiêm trọng.

**30.3. Source-of-Truth**

1.  Sale Lock Registry.

2.  Hold Registry.

3.  Recall Case.

4.  Stop Sale Event.

5.  Suppression Event.

6.  Product Activation Status.

7.  Channel Block Status.

**30.4. Field App Boundary**

Field App phải:

1.  Hiển thị cảnh báo Sale Lock tại hiện trường.

2.  Chặn thao tác bị ảnh hưởng theo guard.

3.  Không cho confirm xuất/nhập nếu lock block.

4.  Không cho tiếp tục thao tác batch bị stop-sale nếu policy chặn.

5.  Ghi nhận evidence khi phát hiện lỗi liên quan lock.

Field App không được:

1.  Gỡ Sale Lock.

2.  Bỏ qua Sale Lock.

3.  Thao tác tiếp trên batch bị lock nếu guard BLOCK.

4.  Tự quyết định reopen.

**30.5. Required Resolver**

1.  SaleLockResolver.

2.  StopSaleResolver.

3.  ProductActivationResolver.

4.  ChannelBlockResolver.

5.  ConsumerSuppressionResolver.

6.  RecallCaseResolver.

7.  HoldStatusResolver.

**30.6. Required Guard**

1.  SaleLockGuard.

2.  StopSaleGuard.

3.  ProductActivationGuard.

4.  ChannelBlockGuard.

5.  ConsumerSuppressionGuard.

6.  ReopenAfterLockGuard.

7.  NoConsumerBypassGuard.

8.  FieldSaleLockGuard.

**30.7. Required Trace IDs**

1.  sale_lock_id.

2.  stop_sale_event_id.

3.  recall_case_id nếu có.

4.  affected_sku_id.

5.  affected_batch_id nếu có.

6.  affected_trade_item_id nếu có.

7.  affected_channel_id nếu có.

8.  suppression_event_id.

9.  reopen_event_id nếu có.

10. audit_id.

11. correlation_id.

**30.8. Blocked If Missing**

OP-SLK BLOCK nếu:

1.  SKU/batch bị recall vẫn bán được.

2.  Sale Lock không chặn AI/CRM/ADS/MC AI/Gateway/Landing Page.

3.  Sale Lock không chặn Order nếu scope yêu cầu.

4.  Field App bỏ qua Sale Lock.

5.  Không xác định được scope lock.

6.  Không có suppression event.

7.  Mở bán lại không có recovery evidence.

8.  Không có owner sign-off khi cần.

9.  Không audit được lock/unlock.

**31. OP-MIS — MISA INTEGRATION BOUNDARY DOMAIN**

**31.1. Domain Purpose**

OP-MIS kiểm soát ngõ hạch toán chính thức giữa Operational Core và MISA.

Operational Core owner truth nghiệp vụ.

MISA owner accounting record chính thức.

MISA không điều khiển nghiệp vụ nguồn.

**31.2. Owner Core**

1.  MISA Integration Owner.

2.  Accounting Owner.

3.  Warehouse Owner.

4.  Production Owner.

5.  Inventory Owner.

6.  Finance Owner.

**31.3. Source-of-Truth**

1.  Operational Business Checkpoint.

2.  MISA Mapping Registry.

3.  MISA Sync Event.

4.  MISA Sync Log.

5.  MISA Reconcile Record.

6.  Accounting Review nếu cần.

**31.4. Field App Boundary**

Field App không sync MISA trực tiếp.

Field App chỉ capture dữ liệu hiện trường.

MISA Integration Layer chỉ nhận dữ liệu đã qua Operational checkpoint đủ điều kiện.

**31.5. Required Resolver**

1.  MISAMappingResolver.

2.  MISASyncEligibilityResolver.

3.  MISAEventResolver.

4.  MISAStatusResolver.

5.  MISAReconcileResolver.

6.  AccountingCheckpointResolver.

**31.6. Required Guard**

1.  MISAMappingRequiredGuard.

2.  OneMISAIntegrationLayerGuard.

3.  NoDirectModuleSyncGuard.

4.  MISASyncStatusGuard.

5.  MISAReconcileGuard.

6.  MISANoBusinessTruthGuard.

**31.7. Required Checkpoints**

MISA sync chừa ngõ cho:

1.  Intake approved.

2.  Phiếu kế toán xuất nguyên liệu cho sản xuất.

3.  Warehouse receipt confirmed.

4.  Sync retry/error.

5.  Reconcile.

**31.8. Required Trace IDs**

1.  misa_mapping_id.

2.  misa_sync_event_id.

3.  misa_sync_log_id.

4.  misa_reconcile_record_id.

5.  operational_checkpoint_id.

6.  accounting_reference_id nếu có.

7.  audit_id.

8.  correlation_id.

**31.9. Blocked If Missing**

OP-MIS BLOCK nếu:

1.  Không có mapping.

2.  Mỗi module sync MISA một kiểu.

3.  MISA điều khiển business truth.

4.  Field App sync MISA trực tiếp.

5.  Không có sync status.

6.  Không có retry.

7.  Không có error log.

8.  Không có reconcile.

9.  Không trace được operational checkpoint.

10. Không audit được sync.

**32. OP-EVD — EVIDENCE / SMOKE DOMAIN**

**32.1. Domain Purpose**

OP-EVD kiểm soát bằng chứng và smoke vận hành.

PACK-01 dùng mô hình:

**01 Production Run / 01 Batch / 01 Operational Evidence Packet**

và

**01 operational_smoke_run_id cho mỗi lần smoke xuyên chuỗi**

**32.2. Owner Core**

1.  QA Owner.

2.  Evidence Owner.

3.  Operational Owner.

4.  Release Owner.

5.  Domain Owner tương ứng từng bước.

**32.3. Source-of-Truth**

1.  Operational Evidence Packet.

2.  Evidence Item.

3.  Mobile Event Audit.

4.  Device Evidence.

5.  Print Log.

6.  QC Evidence.

7.  Warehouse Evidence.

8.  Trace Evidence.

9.  Recall Evidence.

10. MISA Sync Evidence.

11. Smoke Run.

12. Smoke Step Result.

13. Owner Sign-off.

**32.4. Field App Boundary**

Field App là nguồn capture evidence hiện trường chính.

Evidence từ Field App phải có:

1.  actor_id.

2.  role_code.

3.  device_id.

4.  app_version.

5.  object binding.

6.  timestamp.

7.  sync_status.

8.  audit_id.

9.  correlation_id.

Media không gắn object không được dùng PASS.

Offline media chưa sync không được dùng PASS.

**32.5. Required Resolver**

1.  EvidencePacketResolver.

2.  EvidenceItemResolver.

3.  FieldEvidenceResolver.

4.  MobileEventAuditResolver.

5.  SmokeRunResolver.

6.  SmokeStepResolver.

7.  OwnerSignoffResolver.

8.  EvidenceStatusResolver.

**32.6. Required Guard**

1.  EvidenceCompletenessGuard.

2.  EvidenceAcceptedGuard.

3.  FieldEvidenceObjectBindingGuard.

4.  MobileEventAuditGuard.

5.  SmokePassGuard.

6.  NegativePathEvidenceGuard.

7.  OwnerSignoffGuard.

8.  NoPartialSmokePassGuard.

**32.7. Required Trace IDs**

1.  evidence_packet_id.

2.  evidence_item_id.

3.  mobile_event_id nếu từ Field App.

4.  operational_smoke_run_id.

5.  smoke_step_id.

6.  batch_id.

7.  production_order_id.

8.  owner_signoff_id.

9.  audit_id.

10. correlation_id.

**32.8. Blocked If Missing**

OP-EVD BLOCK nếu:

1.  Không có evidence packet.

2.  Evidence chưa ACCEPTED.

3.  Field evidence không gắn object.

4.  Mobile event không audit.

5.  Smoke chưa chạy.

6.  Smoke chỉ partial.

7.  Negative path thiếu.

8.  Không có batch/production run trace.

9.  Không có owner sign-off.

10. Không chứng minh được recall/sale lock chặn flow thật.

**33. CROSS-DOMAIN FLOW REGISTRY**

**33.1. Flow 01 — Source To Raw Lot**

Chuỗi:

**Source Zone → Source Origin → Company/Supplier Source → Field Evidence → Intake → QC → Raw Material Lot → READY_FOR_PRODUCTION**

Blocked nếu:

1.  Thiếu source.

2.  Thiếu evidence nếu policy yêu cầu.

3.  Supplier evidence chưa verified.

4.  QC chưa PASS.

5.  Lot chưa READY.

6.  Field evidence không gắn object.

**33.2. Flow 02 — Raw Lot To Production**

Chuỗi:

**Production Order → BOM Snapshot → Material Request → Material Approval → Field Scan/Check Lot → Material Issue by Lot → Material Receipt Confirmation**

Blocked nếu:

1.  Lệnh sản xuất không snapshot công thức.

2.  User chọn tay nguyên liệu.

3.  Lot chưa READY_FOR_PRODUCTION.

4.  Issue không lot-based.

5.  Không có phiếu chấp thuận nguyên liệu.

6.  Field App confirm nhận nguyên liệu không có actor/device/audit.

**33.3. Flow 03 — Production To Batch**

Chuỗi:

**Material Receipt → Field Execution Start → Process Event → Output/Loss → Execution Complete → Batch Create → Batch Material Usage**

Blocked nếu:

1.  Execution không có order.

2.  Process event không audit.

3.  Batch không genealogy.

4.  Produced/accepted/loss bị trộn.

5.  Batch mới tạo bị coi như released.

6.  Field App mutate batch trực tiếp.

**33.4. Flow 04 — Batch To Packaging / Print**

Chuỗi:

**Batch → Packaging Level 1 → Packaging Level 2 Hộp/Thùng → Field Print Action → Print Payload → Print Log → QR/Barcode Registry**

Blocked nếu:

1.  Packaging không batch-based.

2.  Cấp 1/cấp 2 lẫn nhau.

3.  Hộp/thùng không rõ.

4.  User nhập tay barcode/QR.

5.  Printer tự sinh business data.

6.  Reprint không reason/audit.

7.  Field App bỏ qua print payload.

**33.5. Flow 05 — QC / Release / Warehouse**

Chuỗi:

**Field QC → QC Inspection → QC Result → Batch Disposition → Batch Release → Field Scan Inbound → Warehouse Receipt Confirmed → Inventory Ledger**

Blocked nếu:

1.  QC_PASS tự release.

2.  Batch rejected vẫn release.

3.  Batch chưa RELEASED vẫn nhập kho.

4.  Scan inbound bị coi là confirm.

5.  Inventory tăng trước receipt confirmed.

6.  Ledger không append-only.

**33.6. Flow 06 — Inventory To Sellable**

Chuỗi:

**Inventory Ledger → Inventory Balance → Stock Available → Hold/Sale Lock Check → Product Activation / Sellable Gate**

Blocked nếu:

1.  stock_available \<= 0.

2.  quality hold.

3.  recall hold.

4.  sale lock.

5.  channel block.

6.  price inactive nếu thuộc commerce scope.

7.  Consumer tự suy luận stock.

**33.7. Flow 07 — Trace To Recall**

Chuỗi:

**Trace Search → Field Scan → Genealogy → Exposure Resolution → Recall Case → Hold → Sale Lock → Impact Snapshot → Field Recovery Evidence → Disposition → CAPA → Close**

Blocked nếu:

1.  Trace chain đứt.

2.  Recall dựng chain riêng.

3.  Impact thiếu.

4.  Hold/sale lock trộn nhau.

5.  Recovery/disposition/CAPA thiếu.

6.  Field App close recall thiếu owner approval.

**33.8. Flow 08 — Operational To MISA**

Chuỗi:

**Operational Business Checkpoint → MISA Mapping → MISA Integration Layer → Sync Status → Retry/Error → Reconcile**

Blocked nếu:

1.  Mapping thiếu.

2.  Sync riêng từng module.

3.  Không có sync status.

4.  Không có retry/error/reconcile.

5.  MISA điều khiển nghiệp vụ nguồn.

6.  Field App sync MISA trực tiếp.

**34. DOMAIN STATUS REGISTRY**

**34.1. Standard Domain Status**

| **Status**                   | **Ý nghĩa**                             |
|------------------------------|-----------------------------------------|
| NOT_CONFIGURED               | Chưa cấu hình                           |
| CONFIGURED                   | Đã có config                            |
| READY_FOR_TEST               | Sẵn sàng test                           |
| TESTING                      | Đang test                               |
| PASS_GOVERNANCE              | Đạt tầng tài liệu/governance            |
| PENDING_EVIDENCE             | Chờ evidence                            |
| PENDING_SMOKE                | Chờ smoke                               |
| BLOCKED                      | Bị chặn                                 |
| READY_FOR_HANDOVER_CANDIDATE | Có thể xét handover                     |
| READY_FOR_HANDOVER           | Đủ handover trong scope                 |
| PRODUCTION_READY_CANDIDATE   | Ứng viên production ready               |
| PRODUCTION_READY             | Đủ production readiness khi có evidence |
| RELEASE_APPROVED             | Được duyệt release                      |
| GO_LIVE_APPROVED             | Được duyệt go-live                      |
| LIVE                         | Đang vận hành                           |
| PAUSED                       | Tạm dừng                                |
| ROLLBACK_REQUIRED            | Cần rollback                            |
| RETIRED                      | Ngưng dùng                              |

**34.2. Default Domain Status For PACK-01**

| **Domain**                      | **Default Status** |
|---------------------------------|--------------------|
| Source Origin                   | PENDING_EVIDENCE   |
| Raw Material Intake             | PENDING_EVIDENCE   |
| Raw Material QC / Lot Readiness | PENDING_EVIDENCE   |
| Field Operations App            | PENDING_EVIDENCE   |
| Recipe / BOM Snapshot           | PENDING_EVIDENCE   |
| Production Order                | PENDING_EVIDENCE   |
| Material Issue / Receipt        | PENDING_EVIDENCE   |
| Production Execution            | PENDING_EVIDENCE   |
| Batch                           | PENDING_EVIDENCE   |
| Packaging                       | PENDING_EVIDENCE   |
| Printing                        | PENDING_EVIDENCE   |
| QC / Batch Release              | PENDING_EVIDENCE   |
| Warehouse Receipt               | PENDING_EVIDENCE   |
| Inventory                       | PENDING_EVIDENCE   |
| Traceability                    | PENDING_EVIDENCE   |
| Recall                          | PENDING_EVIDENCE   |
| Sale Lock / Stop Sale           | PENDING_EVIDENCE   |
| MISA Integration Boundary       | PENDING_EVIDENCE   |
| Evidence / Smoke                | PENDING_EVIDENCE   |

Không domain nào được gọi PASS nếu chưa có evidence và smoke tương ứng.

**35. DOMAIN CONFLICT RULES**

**35.1. Conflict Priority**

Khi có xung đột, thứ tự ưu tiên là:

1.  Recall / Safety.

2.  Sale Lock / Stop Sale.

3.  QC Hold / Reject.

4.  Batch Release Status.

5.  Warehouse Receipt Confirmed.

6.  Inventory Ledger.

7.  Product Activation / Sellable.

8.  Order / Allocation.

9.  AI / CRM / ADS / MC AI / Gateway.

10. MISA Sync.

11. Reporting / Dashboard.

**35.2. Critical Conflict Rules**

1.  QC_PASS nhưng chưa RELEASED → không nhập kho.

2.  RELEASED nhưng chưa warehouse receipt confirmed → chưa tăng tồn.

3.  Scan inbound nhưng chưa confirm → chưa tăng tồn.

4.  Có tồn nhưng Sale Lock active → không sellable.

5.  Có trace nhưng public policy chưa bật → không public trace.

6.  Có supplier evidence nhưng chưa verification → chưa source PASS.

7.  Có print payload nhưng batch hold → không sellable.

8.  Có MISA sync nhưng operational truth sai → xử lý operational truth trước.

9.  Có ADS demand nhưng stock/sellable không PASS → không scale/không bán.

10. Có order demand nhưng recall active → chặn order mới theo scope.

11. Có MC AI live board nhưng Sale Lock active → MC AI phải dừng SKU.

12. Field App gửi action hợp lệ nhưng backend guard BLOCK → backend decision thắng.

**36. PHẦN 2/4 DONE GATE**

PHẦN 2/4 được xem là đạt governance scope khi đã khóa đủ:

1.  Domain Registry Principles.

2.  Standard Domain Record.

3.  Domain Registry Overview.

4.  Source Origin Domain.

5.  Raw Material Intake Domain.

6.  Raw Material QC / Lot Readiness Domain.

7.  Field Operations Internal App / Mobile PWA Domain.

8.  Recipe / BOM Snapshot Domain.

9.  Production Order Domain.

10. Material Issue / Material Receipt Domain.

11. Production Execution Domain.

12. Batch Domain.

13. Packaging Level 1 / Level 2 Hộp-Thùng Domain.

14. Printing / Print Payload / Reprint Domain.

15. QC / Batch Release Domain.

16. Warehouse Receipt Domain.

17. Inventory Ledger / Stock Balance Domain.

18. Traceability Domain.

19. Recall / Recovery / Disposition / CAPA Domain.

20. Sale Lock / Stop Sale Domain.

21. MISA Integration Boundary Domain.

22. Evidence / Smoke Domain.

23. Cross-Domain Flow Registry.

24. Domain Status Registry.

25. Domain Conflict Rules.

26. Field App không owner business truth.

27. Scan không đồng nghĩa confirm.

28. Media evidence không mồ côi.

29. Offline queue / device identity / idempotency là bắt buộc.

30. No-hardcode rule cho toàn bộ domain.

**37. PHẦN 2/4 FINAL CONCLUSION**

PHẦN 2/4 khóa Domain Registry cho toàn bộ Operational Core.

Từ điểm này trở đi, mọi nghiệp vụ sản xuất / kho / tồn kho / truy xuất / thu hồi / sale lock phải đi đúng registry:

**Source Origin → Raw Intake → Lot QC / Readiness → Field Operations App Evidence → Recipe / BOM Snapshot → Production Order → Material Issue → Execution → Batch → Packaging Hộp/Thùng → Printing → QC → Release → Warehouse Receipt → Inventory Ledger → Traceability → Recall → Sale Lock / Stop Sale → MISA Boundary → Evidence / Smoke**

Không domain nào được tự làm thay domain khác.

Không Field App nào được owner business truth.

Không Admin Web nào được thay thế capture hiện trường bắt buộc.

Không Consumer nào được tự quyết định sự thật vận hành.

Không có đường tắt từ app sang database.

Không có đường tắt từ scan sang confirm.

Không có đường tắt từ QC_PASS sang RELEASED.

Không có đường tắt từ printing sang inventory.

Không có đường tắt từ warehouse scan sang inventory.

Không có đường tắt từ MISA sang operational truth.

Không có đường tắt từ AI/CRM/ADS/MC AI/Gateway sang sellable.

PACK-01 PHẦN 2/4 là nền để viết tiếp:

**PHẦN 3/4 — SELLABLE GATE / STOCK GATE / RECALL STOP-SALE / FIELD SUPPRESSION / CONSUMER SUPPRESSION CONTROL**

**PHẦN 3/4 — SELLABLE GATE / STOCK GATE / RECALL STOP-SALE / FIELD SUPPRESSION / CONSUMER SUPPRESSION CONTROL**

**38. SELLABLE GATE CONTROL PRINCIPLES**

**38.1. Mục tiêu Sellable Gate**

Sellable Gate là cổng quyết định một SKU, batch, hộp, thùng hoặc channel có được phép đi vào bán hàng hay không.

Sellable Gate không phải là quyết định của:

1.  AI Advisor.

2.  CRM.

3.  ADS.

4.  MC AI.

5.  Gateway.

6.  Landing Page.

7.  Order.

8.  Sales operator.

9.  Field Operations App.

10. Admin Web đơn lẻ.

Sellable Gate là kết quả tổng hợp từ Operational Core, bao gồm:

1.  Batch thật.

2.  QC hợp lệ.

3.  Batch Release hợp lệ.

4.  Warehouse Receipt Confirmed.

5.  Inventory Ledger hợp lệ.

6.  Stock Available \> 0.

7.  HSD hợp lệ.

8.  Traceability hợp lệ.

9.  Không Quality Hold.

10. Không Recall Hold.

11. Không Sale Lock.

12. Không Stop Sale.

13. Trade Item hộp/thùng đủ điều kiện.

14. Channel không bị block.

15. Evidence không có blocker P0.

**38.2. Sellable Gate mặc định là BLOCK**

Mặc định mọi SKU / batch / trade item là:

**NOT SELLABLE**

Chỉ được chuyển thành SELLABLE khi tất cả điều kiện P0 cùng PASS.

Không có dữ liệu thì không suy luận là bán được.

Không có stock thì không bán.

Không rõ batch thì không bán.

Không rõ HSD thì không bán.

Không rõ recall/sale lock thì không bán.

Không rõ trade item hộp/thùng thì không bán theo cấp hộp/thùng.

Không rõ channel eligibility thì không bán trên channel đó.

**38.3. Operational Sellable và Commercial Sellable phải tách riêng**

PACK-01 chỉ khóa **Operational Sellable**.

| **Lớp**              | **Ý nghĩa**                                                                            | **Owner**                                 |
|----------------------|----------------------------------------------------------------------------------------|-------------------------------------------|
| Operational Sellable | Sản phẩm đủ điều kiện vận hành: batch, QC, release, kho, tồn, trace, recall, sale lock | Operational Core                          |
| Commercial Sellable  | Sản phẩm đủ điều kiện thương mại: giá, chương trình, channel, payment, shipping, order | Commerce / Pricing / Channel / Order Pack |

Nếu Operational Sellable = BLOCK thì Commercial Sellable bắt buộc BLOCK.

Commercial Pack không được tự mở bán khi Operational Sellable chưa PASS.

**38.4. Các trạng thái không được hiểu là Sellable**

Các trạng thái sau không được hiểu là sản phẩm đã bán được:

1.  Production Order đã mở.

2.  Production Execution đã hoàn tất.

3.  Batch đã tạo.

4.  Packaging đã hoàn tất.

5.  Printing đã hoàn tất.

6.  QC_PASS.

7.  Batch RELEASED nhưng chưa nhập kho.

8.  Warehouse scan nhưng chưa confirm.

9.  MISA sync success.

10. Có ảnh/video hiện trường.

11. Có phiếu nhưng chưa đủ sign-off.

12. Có AI/CRM/ADS demand.

13. Có Live Board.

14. Có Landing Page.

15. Có Order Draft.

16. Có khách hỏi mua.

Chuỗi tối thiểu để xét sellable:

**Batch RELEASED → Warehouse Receipt Confirmed → Inventory Ledger → Stock Available \> 0 → HSD Valid → Trace Ready → No Hold → No Recall → No Sale Lock → Trade Item Ready → Channel Eligible → Sellable PASS**

**39. BASE SELLABLE GATE**

**39.1. Điều kiện Base Sellable Gate**

Một SKU / batch / hộp / thùng chỉ được Operational Sellable PASS khi đồng thời đạt:

1.  SKU canonical hợp lệ.

2.  Công thức/version hợp lệ.

3.  Operational config hợp lệ.

4.  Batch thật tồn tại.

5.  Batch trace được raw material lots.

6.  Batch đã qua QC thành phẩm.

7.  Batch đã RELEASED.

8.  Thành phẩm đã Warehouse Receipt Confirmed.

9.  Inventory Ledger đã ghi nhận.

10. Stock available \> 0.

11. HSD còn hiệu lực.

12. Không quality hold.

13. Không recall hold.

14. Không sale lock.

15. Không stop sale.

16. Không channel block.

17. Hộp/thùng đủ packaging config.

18. Hộp/thùng đủ print config.

19. Hộp/thùng có lô/NSX/HSD/barcode/QR nếu là cấp in 2.

20. Traceability đủ điều kiện.

21. Public trace đủ policy nếu channel yêu cầu.

22. Evidence không có blocker.

23. Smoke negative path không fail với SKU/batch đó.

**39.2. Base Sellable Gate BLOCK khi**

Sellable Gate bắt buộc BLOCK nếu có một trong các lỗi:

1.  SKU không hợp lệ.

2.  Công thức/version không hợp lệ.

3.  Thiếu operational config.

4.  Batch không tồn tại.

5.  Batch không trace được raw material lots.

6.  Batch chưa QC.

7.  Batch QC_HOLD.

8.  Batch QC_REJECT.

9.  Batch QC_PASS nhưng chưa RELEASED.

10. Batch RELEASED nhưng chưa Warehouse Receipt Confirmed.

11. Inventory Ledger chưa ghi nhận.

12. Stock available = 0.

13. HSD thiếu.

14. HSD hết hạn.

15. Quality Hold active.

16. Recall Hold active.

17. Sale Lock active.

18. Stop Sale active.

19. Channel Block active.

20. Hộp/thùng chưa đủ print config.

21. Hộp/thùng thiếu QR/barcode/lô/NSX/HSD.

22. Trace gap nghiêm trọng.

23. Public trace policy chưa đủ nhưng channel yêu cầu public trace.

24. Consumer cố bán vượt guard.

**40. SELLABLE GATE REQUIRED INPUTS / RESOLVER / GUARD**

**40.1. Required Inputs**

Sellable Gate phải nhận đủ các input sau:

1.  sku_id.

2.  sku_code.

3.  formula_version_id.

4.  operational_config_id.

5.  batch_id.

6.  batch_code.

7.  batch_release_id.

8.  warehouse_receipt_id.

9.  warehouse_id.

10. warehouse_location_id.

11. inventory_ledger_id.

12. stock_balance_snapshot_id.

13. mfg_date.

14. hsd / expiry_date.

15. qc_status.

16. release_status.

17. quality_hold_status.

18. recall_hold_status.

19. sale_lock_status.

20. stop_sale_status.

21. trace_status.

22. recall_ready_status.

23. trade_item_id nếu bán theo hộp/thùng.

24. gtin_id nếu trade item đã có GTIN/GS1.

25. qr_registry_id nếu dùng QR.

26. channel_id nếu xét theo kênh.

27. evidence_packet_id nếu thuộc release/readiness review.

28. operational_smoke_run_id nếu thuộc release/readiness review.

**40.2. Required Resolver**

Sellable Gate bắt buộc gọi hoặc nhận kết quả từ:

1.  SKUCanonicalResolver.

2.  FormulaVersionResolver.

3.  OperationalConfigResolver.

4.  BatchResolver.

5.  BatchGenealogyResolver.

6.  QCStatusResolver.

7.  BatchReleaseResolver.

8.  WarehouseReceiptResolver.

9.  InventoryLedgerResolver.

10. StockAvailableResolver.

11. ShelfLifeResolver.

12. QualityHoldResolver.

13. RecallHoldResolver.

14. SaleLockResolver.

15. StopSaleResolver.

16. TraceabilityResolver.

17. RecallReadinessResolver.

18. TradeItemResolver.

19. GTINResolver nếu có.

20. QRRegistryResolver nếu có.

21. ChannelEligibilityResolver.

22. EvidencePacketResolver nếu xét release.

23. SmokeRunResolver nếu xét release.

**40.3. Required Guard**

Sellable Gate bắt buộc có các guard:

1.  SKUActiveGuard.

2.  FormulaVersionGuard.

3.  OperationalConfigGuard.

4.  BatchExistsGuard.

5.  BatchGenealogyGuard.

6.  BatchQCGuard.

7.  BatchReleasedGuard.

8.  WarehouseReceiptConfirmedGuard.

9.  InventoryLedgerGuard.

10. StockAvailableGuard.

11. ShelfLifeGuard.

12. QualityHoldGuard.

13. RecallHoldGuard.

14. SaleLockGuard.

15. StopSaleGuard.

16. TraceReadyGuard.

17. RecallReadyGuard.

18. TradeItemReadyGuard.

19. GTINReadyGuard nếu trade item yêu cầu.

20. QRReadyGuard nếu trace policy yêu cầu.

21. ChannelEligibilityGuard.

22. NoConsumerBypassGuard.

**40.4. Required Decision Output**

Sellable Gate phải trả decision record tối thiểu:

| **Field**                   | **Ý nghĩa**                          |
|-----------------------------|--------------------------------------|
| sellable_decision_id        | Mã quyết định                        |
| sku_id                      | SKU                                  |
| batch_id                    | Batch                                |
| trade_item_id               | Hộp/thùng nếu có                     |
| warehouse_id                | Kho                                  |
| warehouse_location_id       | Location                             |
| channel_id                  | Channel nếu có                       |
| operational_sellable_status | PASS / BLOCK                         |
| stock_status                | PASS / BLOCK                         |
| hsd_status                  | VALID / EXPIRED / MISSING            |
| qc_status                   | QC state                             |
| release_status              | Release state                        |
| trace_status                | Trace state                          |
| recall_status               | CLEAR / HOLD / RECALL                |
| sale_lock_status            | CLEAR / LOCKED                       |
| decision                    | SELLABLE / BLOCKED / REVIEW_REQUIRED |
| block_reasons               | Danh sách lý do block                |
| valid_from                  | Thời điểm hiệu lực                   |
| valid_until                 | Hết hiệu lực nếu có                  |
| resolver_snapshot_id        | Snapshot resolver                    |
| audit_id                    | Audit                                |
| correlation_id              | Correlation                          |

**41. STOCK GATE CONTROL**

**41.1. Mục tiêu Stock Gate**

Stock Gate quyết định sản phẩm có tồn khả dụng để bán hay không.

Stock Gate không chỉ nhìn vào số lượng tồn tổng.

Stock Gate phải phân biệt:

1.  Stock on hand.

2.  Stock available.

3.  Stock reserved.

4.  Stock blocked.

5.  Stock on hold.

6.  Stock recall locked.

7.  Stock allocated.

8.  Stock expired.

9.  Stock quarantine.

10. Channel stock.

11. Trade item stock theo hộp/thùng.

12. Warehouse/location stock.

**41.2. Stock Availability Model**

Stock Available được hiểu theo logic governance:

**Stock Available = Stock On Hand - Stock Reserved - Stock Blocked - Stock On Hold - Stock Allocated - Stock Recall Locked - Stock Expired**

Đây là công thức logic nghiệp vụ.

Cách tính thật phải do Inventory Resolver thực hiện theo:

1.  Inventory Ledger.

2.  Inventory Lot Balance.

3.  Warehouse/location.

4.  Batch.

5.  Trade item.

6.  Channel policy.

7.  Recall/sale lock policy.

8.  Allocation policy.

Không Consumer nào được tự tính stock available.

**41.3. Stock Gate PASS khi**

Stock Gate PASS khi:

1.  Inventory Ledger tồn tại.

2.  Inventory Balance khớp Ledger.

3.  stock_available \> 0.

4.  Stock thuộc warehouse/location hợp lệ.

5.  Stock không bị hold.

6.  Stock không bị recall.

7.  Stock không bị sale lock.

8.  Stock không expired.

9.  Stock không quarantine.

10. Stock không bị channel block.

11. Stock không bị allocation hết.

12. Không có negative inventory risk.

13. Không có ledger conflict.

14. Không có unresolved adjustment.

15. Không có recall impact chưa xử lý.

**41.4. Stock Gate BLOCK khi**

Stock Gate BLOCK nếu:

1.  stock_available = 0.

2.  Stock âm.

3.  Stock không khớp ledger.

4.  Batch chưa nhập kho.

5.  Warehouse Receipt chưa confirm.

6.  Stock bị quality hold.

7.  Stock bị recall hold.

8.  Stock bị sale lock.

9.  Stock bị stop sale.

10. Stock bị channel block.

11. Stock expired.

12. Stock quarantine.

13. Stock đã allocated hết.

14. Stock chưa rõ warehouse/location.

15. Inventory projection conflict với ledger.

16. Consumer tự suy luận còn hàng.

17. Field App cố confirm xuất/nhập vượt guard.

18. Admin Web sửa tồn trực tiếp không qua approved adjustment.

**41.5. Kho Bến Tre trong Stock Gate**

Kho thật ban đầu là:

**Kho Bến Tre**

Quy tắc:

1.  Kho Bến Tre phải được đọc từ Warehouse Registry.

2.  Không hardcode tên kho trong code.

3.  Không hardcode tên kho trong UI.

4.  Không hardcode tên kho trong AI/CRM/ADS/Gateway.

5.  Stock phải tính theo warehouse_id / location_id.

6.  Không cộng gộp tồn nhiều kho nếu channel chỉ bán từ một kho cụ thể.

7.  Nếu mở thêm kho, Stock Gate phải resolve lại theo registry.

**42. TRADE ITEM SELLABLE CONTROL — HỘP / THÙNG**

**42.1. Mục tiêu Trade Item Sellable**

Trade Item Sellable kiểm soát điều kiện bán theo cấp thương mại.

Trong PACK-01, cấp in 2 gồm:

1.  Hộp.

2.  Thùng.

Hộp và thùng có thể là hai trade item khác nhau.

Mỗi trade item có thể có:

1.  Packaging config riêng.

2.  Print config riêng.

3.  GTIN/GS1 riêng.

4.  Barcode thương mại riêng.

5.  QR trace policy riêng.

6.  HSD hiển thị.

7.  Batch/lô in trên nhãn.

8.  Stock unit riêng.

9.  Sellable gate riêng.

**42.2. Trade Item Readiness**

Một trade item hộp/thùng chỉ ready khi:

1.  Bind đúng SKU canonical.

2.  Bind đúng batch.

3.  Bind đúng packaging level.

4.  Có packaging config.

5.  Có print config.

6.  Có HSD.

7.  Có batch/lô.

8.  Có QR nếu trace policy yêu cầu.

9.  Có GTIN/GS1 nếu barcode thương mại đã active.

10. Không có hai barcode thương mại trên cùng trade item.

11. QR không thay GTIN/GS1.

12. Print payload do backend sinh.

13. Reprint nếu có đã kiểm soát.

14. Trace được về batch thật.

15. Recall được theo batch/trade item.

16. Stock available theo đúng đơn vị bán.

**42.3. Hộp Sellable Gate**

Hộp chỉ được sellable khi:

1.  Packaging cấp hộp hoàn tất.

2.  In cấp 2 trên hộp có đủ:

    - lô/batch,

    - NSX,

    - HSD,

    - mã vạch,

    - QR.

3.  QR map đúng batch.

4.  Barcode lấy từ Trade Item Registry nếu GTIN/GS1 đã active.

5.  Không nhập tay barcode.

6.  Không có reprint lỗi chưa xử lý.

7.  Batch đã RELEASED.

8.  Hộp đã nhập kho theo đơn vị tồn phù hợp nếu bán theo hộp.

9.  Stock available theo hộp \> 0.

10. Không recall.

11. Không sale lock.

12. Không channel block.

**42.4. Thùng Sellable Gate**

Thùng chỉ được sellable khi:

1.  Packaging cấp thùng hoàn tất.

2.  In cấp 2 trên thùng có đủ:

    - lô/batch,

    - NSX,

    - HSD,

    - mã vạch,

    - QR.

3.  QR map đúng batch hoặc đúng cấu trúc thùng theo policy.

4.  Barcode lấy từ Trade Item Registry nếu GTIN/GS1 thùng đã active.

5.  Không nhập tay barcode thùng.

6.  Không in barcode hộp cho thùng nếu thùng có trade item riêng.

7.  Không có reprint lỗi chưa xử lý.

8.  Batch đã RELEASED.

9.  Thùng đã nhập kho theo đơn vị tồn phù hợp nếu bán theo thùng.

10. Stock available theo thùng \> 0.

11. Không recall.

12. Không sale lock.

13. Không channel block.

**42.5. Trade Item BLOCK khi**

Trade item hộp/thùng BLOCK nếu:

1.  Chưa có packaging config.

2.  Chưa có print config.

3.  In thiếu lô.

4.  In thiếu NSX.

5.  In thiếu HSD.

6.  In thiếu barcode.

7.  In thiếu QR.

8.  QR không map batch thật.

9.  Barcode nhập tay.

10. GTIN/GS1 chưa active nhưng vẫn thương mại hóa bằng barcode.

11. Một trade item có hai barcode thương mại.

12. QR bị dùng thay barcode thương mại.

13. HSD thiếu hoặc sai.

14. Batch chưa RELEASED.

15. Chưa Warehouse Receipt Confirmed.

16. Stock available = 0.

17. Recall active.

18. Sale Lock active.

19. Traceability chưa đủ.

**43. HSD / SHELF-LIFE GATE**

**43.1. Mục tiêu Shelf-life Gate**

HSD là điều kiện bắt buộc của Sellable Gate.

Mặc định ban đầu:

**HSD 12 tháng**

Cách quản trị:

1.  Theo từng SKU nếu có cấu hình riêng.

2.  Theo nhóm SKU nếu Owner quyết định dùng chung.

3.  Mặc định dùng 12 tháng nếu chưa có khác biệt.

**43.2. Quy tắc sinh HSD**

HSD phải được sinh theo:

**NSX / MFG Date + Shelf-life Config**

Không cho người vận hành nhập tay HSD trong flow thường.

Nếu cần sửa HSD, phải đi qua:

1.  reason;

2.  approval;

3.  audit;

4.  evidence;

5.  role permission;

6.  state transition log.

**43.3. Shelf-life Gate PASS khi**

Shelf-life Gate PASS khi:

1.  Batch có MFG date.

2.  SKU/nhóm SKU có shelf-life config.

3.  HSD được sinh đúng.

4.  HSD được in đúng trên hộp/thùng.

5.  HSD chưa hết hạn.

6.  Không có conflict giữa batch record và print payload.

7.  HSD trace được nguồn tính.

**43.4. Shelf-life Gate BLOCK khi**

Shelf-life Gate BLOCK nếu:

1.  Thiếu MFG date.

2.  Thiếu shelf-life config.

3.  HSD không sinh được.

4.  HSD bị nhập tay không audit.

5.  HSD trên print payload khác batch record.

6.  HSD hết hạn.

7.  HSD bị sửa không có approval.

8.  HSD không trace được nguồn tính.

**44. QC QUALITY GATE — ĐỘ ẨM SAU SẤY**

**44.1. Mục tiêu Quality Gate**

QC Quality Gate kiểm soát chất lượng sau sấy thăng hoa và QC thành phẩm trước release/warehouse/sellable.

Chỉ tiêu độ ẩm là chỉ tiêu bắt buộc trong QC sau sấy.

**44.2. Moisture Threshold**

Ngưỡng vận hành:

| **Độ ẩm sau sấy** | **Decision**  | **Hành động**                      |
|-------------------|---------------|------------------------------------|
| \< 2%             | PASS          | Có thể đi tiếp theo gate QC        |
| 2%–4%             | HOLD / REVIEW | QC review, chưa downstream tự động |
| \> 4%             | FAIL          | Chặn downstream                    |

**44.3. Quality Gate PASS khi**

Quality Gate PASS khi:

1.  Có phiếu QC sau sấy.

2.  Có kết quả đo độ ẩm.

3.  Độ ẩm \< 2%.

4.  Có người QC xác nhận.

5.  Có evidence nếu policy yêu cầu.

6.  Có audit.

7.  Không có defect nghiêm trọng.

8.  Batch đủ điều kiện chuyển bước tiếp theo.

**44.4. Quality Gate HOLD khi**

Quality Gate HOLD khi:

1.  Độ ẩm từ 2% đến 4%.

2.  Thiếu evidence nhưng có thể bổ sung.

3.  Có chỉ tiêu cảm quan cần review.

4.  Có defect chưa kết luận.

5.  Có chênh lệch số liệu cần kiểm tra.

6.  QC yêu cầu kiểm lại.

HOLD không được hiểu là PASS.

HOLD phải chặn release, warehouse, sellable và consumer downstream.

**44.5. Quality Gate FAIL khi**

Quality Gate FAIL khi:

1.  Độ ẩm \> 4%.

2.  Batch không đạt cảm quan nghiêm trọng.

3.  Batch có defect không thể khắc phục.

4.  Evidence xác nhận không đạt.

5.  QC reject.

6.  Owner quyết định reject.

FAIL phải chặn toàn bộ downstream.

**45. RECALL STOP-SALE GATE**

**45.1. Mục tiêu Recall Stop-Sale Gate**

Recall Stop-Sale Gate đảm bảo khi có rủi ro chất lượng, truy xuất, an toàn, khiếu nại nghiêm trọng, lỗi in, lỗi HSD, lỗi QR/barcode hoặc quyết định Owner, hệ thống có thể dừng bán ngay trong scope ảnh hưởng.

Stop Sale có thể áp dụng theo:

1.  SKU.

2.  Batch.

3.  Raw material lot.

4.  Trade item hộp.

5.  Trade item thùng.

6.  Warehouse.

7.  Location.

8.  Channel.

9.  Program.

10. ADS campaign.

11. Live session.

12. Customer segment.

13. Time window.

14. Full product line.

**45.2. Recall Stop-Sale Triggers**

Recall Stop-Sale Gate được kích hoạt khi có một trong các trigger:

1.  QC phát hiện lỗi nghiêm trọng.

2.  Batch hold.

3.  Batch reject.

4.  Recall case mở.

5.  Trace gap nghiêm trọng.

6.  QR map sai batch.

7.  Print error nghiêm trọng.

8.  HSD sai.

9.  GTIN/barcode sai trade item.

10. Inventory ledger conflict.

11. Supplier/source evidence bị reject.

12. Customer complaint có evidence batch/QR.

13. Counterfeit suspicion.

14. Owner quyết định stop sale.

15. Regulatory/compliance risk.

16. Field App phát hiện lỗi hiện trường thuộc nhóm P0.

17. Offline evidence sync trễ nhưng ảnh hưởng batch đã bán/đang bán.

18. App/device ghi nhận conflict giữa mã scan và batch thật.

**45.3. Hold và Sale Lock phải tách riêng**

| **Cơ chế** | **Mục tiêu**                            | **Tác động**                                |
|------------|-----------------------------------------|---------------------------------------------|
| Hold       | Giữ nội bộ batch/lot/stock để kiểm tra  | Chặn warehouse/internal movement tùy policy |
| Sale Lock  | Khóa bán downstream                     | Chặn AI/CRM/ADS/MC AI/Gateway/Landing/Order |
| Stop Sale  | Dừng bán theo scope rộng hơn            | Chặn thương mại hóa                         |
| Recall     | Case xử lý thu hồi/impact/recovery/CAPA | Kích hoạt hold, sale lock, impact           |

Recall có thể kích hoạt Hold và Sale Lock.

Sale Lock không thay thế Recall Case.

Hold không thay thế Sale Lock.

**45.4. Recall Stop-Sale Required Inputs**

Recall Stop-Sale Gate cần tối thiểu:

1.  trigger_type.

2.  affected_scope.

3.  affected_sku_id nếu có.

4.  affected_batch_id nếu có.

5.  affected_lot_id nếu có.

6.  affected_trade_item_id nếu có.

7.  affected_warehouse_id nếu có.

8.  affected_channel_id nếu có.

9.  recall_case_id nếu có.

10. hold_id nếu có.

11. sale_lock_id.

12. stop_sale_event_id.

13. impact_snapshot_id.

14. evidence_id.

15. field_event_id nếu phát sinh từ Field App.

16. owner_decision_id nếu cần.

17. audit_id.

18. correlation_id.

**45.5. Recall Stop-Sale PASS khi**

Recall Stop-Sale Gate PASS khi chứng minh được:

1.  Scope bị ảnh hưởng xác định rõ.

2.  Hold kích hoạt đúng nếu cần.

3.  Sale Lock kích hoạt đúng.

4.  Field App bị chặn đúng khi thao tác vào scope lock.

5.  Consumer suppression hoạt động.

6.  AI không quote SKU/batch bị lock.

7.  CRM không gửi gợi ý SKU/batch bị lock.

8.  ADS không chạy/scale SKU bị lock.

9.  MC AI không nói SKU bị lock.

10. Gateway không kéo chốt SKU bị lock.

11. Landing Page không CTA mua SKU bị lock.

12. Order không tạo mới với SKU bị lock.

13. Allocation không xuất hàng nếu scope chặn.

14. Trace được impact.

15. Recovery/reopen phải có evidence.

16. Audit đầy đủ.

**45.6. Recall Stop-Sale BLOCK khi**

Recall Stop-Sale Gate BLOCK nếu:

1.  Không xác định được scope.

2.  Không có sale_lock_id.

3.  Field App vẫn cho thao tác scope bị lock.

4.  Consumer không nhận suppression.

5.  AI vẫn quote.

6.  CRM vẫn gửi.

7.  ADS vẫn chạy.

8.  MC AI vẫn nói.

9.  Gateway vẫn kéo chốt.

10. Landing Page vẫn mở CTA.

11. Order vẫn tạo mới.

12. Stock vẫn sellable.

13. Recall không dùng trace chain.

14. Recovery chưa có evidence nhưng đã mở bán lại.

15. Không có audit.

**46. FIELD SUPPRESSION CONTROL**

**46.1. Mục tiêu Field Suppression**

Field Suppression Control đảm bảo Field Operations App không thể tiếp tục thao tác sai khi Operational Core trả BLOCK.

Field App phải bị suppress khi:

1.  Batch bị hold.

2.  Batch bị recall.

3.  Batch bị sale lock.

4.  Stock bị block.

5.  QC failed.

6.  Trace gap nghiêm trọng.

7.  HSD conflict.

8.  QR/barcode conflict.

9.  Device không hợp lệ.

10. App version không hợp lệ.

11. User không có permission.

12. Object đang ở state không cho thao tác.

13. Offline event conflict.

14. Idempotency conflict.

15. Evidence không hợp lệ.

**46.2. Field Suppression Decision Types**

| **Decision**                   | **Ý nghĩa**                            |
|--------------------------------|----------------------------------------|
| SUPPRESS_FIELD_ACTION          | Chặn thao tác hiện trường              |
| SUPPRESS_FIELD_CONFIRM         | Chặn click-confirm                     |
| SUPPRESS_FIELD_SCAN_CONFIRM    | Chặn scan được hiểu thành confirm      |
| SUPPRESS_FIELD_MEDIA_PASS      | Chặn media dùng làm evidence PASS      |
| SUPPRESS_FIELD_REPRINT         | Chặn reprint                           |
| SUPPRESS_FIELD_RECEIPT_CONFIRM | Chặn confirm nhập kho                  |
| SUPPRESS_FIELD_QC_ACCEPT       | Chặn accept QC                         |
| SUPPRESS_FIELD_RELEASE         | Chặn release từ field nếu không hợp lệ |
| SUPPRESS_FIELD_RECALL_CLOSE    | Chặn close recall                      |
| FIELD_REVIEW_REQUIRED          | Yêu cầu review                         |
| FIELD_HANDOFF_REQUIRED         | Chuyển người có thẩm quyền             |

**46.3. Field App bị chặn khi Sale Lock active**

Khi Sale Lock active, Field App phải:

1.  Hiển thị cảnh báo lock.

2.  Chặn thao tác làm sản phẩm đi tiếp sang bán hàng.

3.  Chặn confirm xuất/nhập nếu lock ảnh hưởng warehouse movement.

4.  Chặn complete packaging nếu policy yêu cầu hold.

5.  Chặn reprint nếu batch đang bị lock.

6.  Chặn scan-confirm cho mục đích sellable.

7.  Cho phép capture evidence phục vụ recall/recovery nếu policy cho phép.

8.  Ghi audit mọi attempt bị chặn.

Field App không được bỏ qua Sale Lock vì người vận hành đang ở hiện trường.

**46.4. Field App bị chặn khi QC HOLD / FAIL**

Khi QC HOLD hoặc FAIL:

Field App phải chặn:

1.  Complete downstream step nếu policy chặn.

2.  Batch release.

3.  Warehouse receipt.

4.  Inventory activation.

5.  Sellable action.

6.  Print/reprint nếu QC status không cho phép.

7.  Handoff sang bán hàng.

Field App vẫn có thể cho phép:

1.  Capture thêm evidence.

2.  Ghi lý do.

3.  Submit review.

4.  Thực hiện rework nếu policy cho phép.

5.  Gửi owner review.

**46.5. Field App bị chặn khi Device/App không hợp lệ**

Field App BLOCK nếu:

1.  Thiết bị chưa đăng ký.

2.  Thiết bị bị revoke.

3.  Device session hết hạn.

4.  App version không còn được phép.

5.  Thiếu device UUID.

6.  Thiếu client_event_id.

7.  Thiếu idempotency_key.

8.  Request không có actor.

9.  Actor không có role.

10. Role không có permission.

Không đủ device/actor/permission thì action không được ghi state.

**46.6. Field App bị chặn khi Offline Conflict**

Offline event bị BLOCK hoặc REVIEW_REQUIRED nếu:

1.  Object state đã thay đổi trong lúc offline.

2.  Batch đã recall trước khi event sync.

3.  Sale Lock đã active trước khi event sync.

4.  Payload hash thay đổi với cùng idempotency key.

5.  Event trùng đã xử lý.

6.  Media sync trễ nhưng object đã đóng.

7.  QC action đến muộn sau release.

8.  Warehouse confirm đến muộn sau adjustment/recall.

9.  Device clock lệch nghiêm trọng.

10. Event không thể reconcile.

Không được vì offline mà tự overwrite truth mới hơn.

**46.7. Field Suppression Event**

Mỗi lần Field App bị suppress phải ghi event:

1.  field_suppression_event_id.

2.  field_event_id.

3.  device_id.

4.  actor_id.

5.  role_id.

6.  object_type.

7.  object_id.

8.  suppression_reason.

9.  guard_decision_id.

10. attempted_action.

11. decision.

12. occurred_at.

13. audit_id.

14. correlation_id.

**47. CONSUMER SUPPRESSION CONTROL**

**47.1. Mục tiêu Consumer Suppression**

Consumer Suppression Control đảm bảo mọi hệ thống tiêu thụ dữ liệu Operational Core phải dừng hành động khi Operational Core trả BLOCK.

Consumer gồm:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  ADS.

5.  MC AI.

6.  Landing Page.

7.  Order.

8.  Quote.

9.  Payment.

10. Shipping.

11. IVR.

12. Public Trace.

13. Reporting/Dashboard.

Consumer không được tự xử lý rule kinh doanh.

Consumer chỉ đọc decision từ resolver/guard.

**47.2. Suppression Decision Types**

| **Decision**          | **Ý nghĩa**                                 |
|-----------------------|---------------------------------------------|
| SUPPRESS_SELLING      | Dừng bán                                    |
| SUPPRESS_QUOTE        | Dừng báo giá                                |
| SUPPRESS_ORDER        | Dừng tạo đơn                                |
| SUPPRESS_ADS          | Dừng ADS                                    |
| SUPPRESS_CRM          | Dừng CRM message                            |
| SUPPRESS_LIVE_SCRIPT  | Dừng MC AI nói SKU                          |
| SUPPRESS_GATEWAY_CTA  | Dừng kéo chốt qua Gateway                   |
| SUPPRESS_LANDING_CTA  | Dừng CTA mua                                |
| SUPPRESS_IVR_CALL     | Dừng gọi xác nhận nếu đơn chưa đủ điều kiện |
| SUPPRESS_ALLOCATION   | Dừng allocation/xuất hàng                   |
| SUPPRESS_PUBLIC_TRACE | Dừng/ẩn public trace nếu policy vi phạm     |
| REVIEW_REQUIRED       | Chuyển Owner review                         |
| HANDOFF_REQUIRED      | Chuyển người phụ trách xử lý                |

**47.3. AI Advisor Suppression**

AI Advisor phải suppress khi:

1.  SKU không operational sellable.

2.  Stock Gate BLOCK.

3.  Batch chưa release.

4.  Warehouse receipt chưa confirm.

5.  HSD không đạt.

6.  Recall active.

7.  Sale Lock active.

8.  Quality hold active.

9.  Trade item chưa ready.

10. Trace gap nghiêm trọng.

11. Price/Program pack chưa resolve nếu cần quote.

12. Order Gate chưa đủ nếu cần chốt.

AI Advisor không được:

1.  Báo còn hàng khi Stock Gate chưa PASS.

2.  Báo giá khi Sellable Gate BLOCK.

3.  Tạo order draft cho SKU bị lock.

4.  Nói đang bán khi Product Activation/Sellable chưa PASS.

5.  Gợi ý thay thế bằng SKU cũng bị lock.

**47.4. CRM Suppression**

CRM phải suppress khi:

1.  SKU bị stop sale.

2.  SKU hết hàng.

3.  SKU bị recall/sale lock.

4.  Khách có complaint mở.

5.  Customer opt-out.

6.  Trigger thiếu.

7.  Frequency cap vượt.

8.  Customer identity chưa resolve.

9.  CRM message gợi ý SKU không sellable.

10. CRM đang conflict với after-sales/complaint.

CRM không được biến recall/complaint thành cơ hội bán tiếp.

**47.5. ADS Suppression**

ADS phải suppress khi:

1.  SKU không active/sellable.

2.  Stock Gate BLOCK.

3.  Recall active.

4.  Sale Lock active.

5.  HSD issue.

6.  Trade item hộp/thùng chưa ready.

7.  GTIN/GS1 trade item chưa đủ điều kiện nếu campaign yêu cầu thương mại hóa barcode.

8.  Landing Page CTA bị block.

9.  Order/Payment/Shipping chưa ready nhưng campaign dẫn chốt đơn.

10. Verified revenue/data quality không đủ cho scale.

ADS không được tự scale khi thiếu verified revenue, data quality, pilot evidence và owner approval.

**47.6. MC AI Suppression**

MC AI phải suppress khi:

1.  SKU không nằm trong Daily Live Product Board.

2.  mc_ai_script_brief_id không hợp lệ.

3.  SKU bị stock block.

4.  SKU bị recall/sale lock.

5.  Program runtime không hợp lệ.

6.  Stock Guard không PASS.

7.  Fake urgency guard BLOCK.

8.  Live moderation yêu cầu dừng.

9.  Trade item chưa ready.

10. Hộp/thùng bị print/trace lỗi.

MC AI không được:

1.  Nói SKU ngoài board.

2.  Nói còn hàng khi Stock Guard chưa PASS.

3.  Nói giá nếu thiếu QuoteSnapshot/Program Runtime.

4.  Tạo khan hiếm giả.

5.  Tiếp tục nói SKU đã stop sale.

**47.7. Gateway Suppression**

Gateway phải suppress khi:

1.  Public comment có nguy cơ báo giá/chốt đơn trái policy.

2.  SKU bị stop sale.

3.  Handoff không thành công.

4.  PII có nguy cơ public.

5.  Payment instruction không được public.

6.  Health/complaint cần handoff.

7.  Troll/abuse cần moderation.

8.  Gateway Completion Gate chưa PASS.

Gateway không được nói đã gửi Messenger nếu handoff fail.

Gateway không được kéo chốt SKU bị lock.

**47.8. Landing Page Suppression**

Landing Page phải suppress hoặc điều chỉnh CTA khi:

1.  SKU không sellable.

2.  Stock available = 0.

3.  SKU bị sale lock.

4.  SKU bị recall.

5.  Price inactive.

6.  Trade item chưa ready.

7.  HSD/trace issue.

8.  Payment/shipping/order gate chưa đủ nếu landing có checkout.

Landing Page không được hiển thị CTA mua nếu Operational Sellable BLOCK.

**47.9. Order / Quote Suppression**

Order / Quote phải suppress khi:

1.  Sellable Gate BLOCK.

2.  Stock Gate BLOCK.

3.  SKU bị sale lock.

4.  Batch/stock không đủ.

5.  QuoteSnapshot không tạo được.

6.  CustomerConfirmation thiếu.

7.  Payment/shipping chưa đủ điều kiện.

8.  Duplicate order risk.

9.  Recall active trước confirmation.

Order không được tạo nếu thiếu CustomerConfirmation.

Quote không được phát hành nếu thiếu Product/Sellable/Stock/Price runtime hợp lệ.

**47.10. IVR Suppression**

IVR phải suppress khi:

1.  Order chưa đủ điều kiện xác nhận.

2.  SKU trong đơn bị sale lock trước xác nhận.

3.  Order bị hold.

4.  Payment issue cần Accounting Review.

5.  Khách không đủ điều kiện gọi theo policy.

6.  Phone chưa verified.

7.  Call frequency vượt ngưỡng.

8.  IVR flow có nguy cơ upsell/sales/payment confirmation.

IVR chỉ được ORDER_CONFIRMATION_ONLY.

**47.11. Payment / Shipping Suppression**

Payment phải suppress khi:

1.  Order chưa hợp lệ.

2.  CustomerConfirmation thiếu.

3.  Order bị stop sale/hold.

4.  Payment method chưa resolve.

5.  Accounting Review cần thiết nhưng chưa có.

6.  PaymentReference bị hiểu nhầm PAID.

Shipping phải suppress khi:

1.  Order chưa hợp lệ.

2.  Warehouse/stock chưa allocation được.

3.  Shipping eligibility chưa resolve.

4.  COD chưa eligible.

5.  ETA/tracking chưa có nguồn.

6.  Sale Lock ảnh hưởng order/stock.

**47.12. Public Trace Suppression**

Public Trace phải suppress hoặc trả safe response khi:

1.  QR VOID.

2.  QR FAILED.

3.  QR không map batch.

4.  Batch bị recall theo policy cần ẩn/đổi thông điệp.

5.  Public whitelist chưa cấu hình.

6.  Có nguy cơ lộ internal data.

7.  Trace gap nghiêm trọng.

8.  QR thuộc cấp không public.

Public trace không được lộ:

1.  supplier private detail;

2.  costing;

3.  internal QC defect note;

4.  MISA data;

5.  internal IDs;

6.  personnel data;

7.  customer/order private data.

**48. SUPPRESSION EVENT REGISTRY**

**48.1. Mục tiêu Suppression Event**

Mỗi lần Field App hoặc Consumer bị suppress phải có suppression event.

Suppression không được xảy ra âm thầm.

**48.2. Required Suppression Event Fields**

Mỗi suppression event phải có:

1.  suppression_event_id.

2.  suppression_type.

3.  trigger_domain.

4.  trigger_reason.

5.  affected_sku_id nếu có.

6.  affected_batch_id nếu có.

7.  affected_trade_item_id nếu có.

8.  affected_channel_id nếu có.

9.  affected_consumer hoặc affected_field_app_action.

10. suppression_decision.

11. suppression_started_at.

12. suppression_ended_at nếu đã gỡ.

13. source_resolver_snapshot_id.

14. source_guard_decision_id.

15. evidence_id nếu có.

16. audit_id.

17. correlation_id.

**48.3. Suppression Status**

| **Status**    | **Ý nghĩa**                  |
|---------------|------------------------------|
| ACTIVE        | Đang suppress                |
| RESOLVED      | Đã gỡ                        |
| EXPIRED       | Hết hiệu lực theo thời gian  |
| SUPERSEDED    | Bị thay bằng suppression mới |
| MANUAL_REVIEW | Chờ Owner review             |
| ERROR         | Lỗi cần xử lý                |

**48.4. Suppression Reopen Rule**

Field App hoặc Consumer chỉ được mở lại khi:

1.  Trigger gốc đã resolved.

2.  Recovery evidence ACCEPTED nếu liên quan recall/quality.

3.  Sellable Gate PASS lại.

4.  Stock Gate PASS lại.

5.  Field Guard PASS lại nếu là app hiện trường.

6.  Channel Gate PASS lại nếu là consumer.

7.  Owner sign-off nếu scope P0.

8.  Suppression event được close có audit.

9.  Smoke negative path được chạy lại nếu thuộc release gate.

**49. RUNTIME DECISION CONTRACT — SELLABLE / STOCK / STOP-SALE / FIELD SUPPRESSION**

**49.1. Mục tiêu Runtime Decision Contract**

Runtime Decision Contract giúp các domain đọc cùng một kết quả, tránh mỗi hệ hiểu một kiểu.

Field App không được tự tính Sellable.

Consumer không được tự tính Stock.

Consumer không được tự xác định Stop Sale.

**49.2. Sellable Runtime Decision**

Output tối thiểu:

| **Field**                   | **Ý nghĩa**                            |
|-----------------------------|----------------------------------------|
| decision_id                 | Mã quyết định                          |
| sku_id                      | SKU                                    |
| batch_scope                 | Batch cụ thể hoặc all eligible batches |
| trade_item_scope            | Hộp/thùng nếu áp dụng                  |
| operational_sellable_status | PASS/BLOCK                             |
| stock_status                | PASS/BLOCK                             |
| recall_status               | CLEAR/HOLD/RECALL                      |
| sale_lock_status            | CLEAR/LOCKED                           |
| hsd_status                  | VALID/EXPIRED/MISSING                  |
| trace_status                | READY/BLOCKED                          |
| block_reasons               | Danh sách lý do block                  |
| valid_until                 | Hết hiệu lực nếu có                    |
| audit_id                    | Audit                                  |
| correlation_id              | Trace                                  |

**49.3. Stock Runtime Decision**

Output tối thiểu:

| **Field**         | **Ý nghĩa**       |
|-------------------|-------------------|
| stock_decision_id | Mã quyết định tồn |
| sku_id            | SKU               |
| warehouse_id      | Kho               |
| location_id       | Location          |
| batch_id          | Batch             |
| trade_item_id     | Hộp/thùng nếu có  |
| stock_on_hand     | Tồn tổng          |
| stock_reserved    | Đã giữ            |
| stock_blocked     | Bị block          |
| stock_available   | Khả dụng          |
| stock_status      | PASS/BLOCK        |
| block_reason      | Lý do             |
| audit_id          | Audit             |
| correlation_id    | Trace             |

**49.4. Stop-Sale Runtime Decision**

Output tối thiểu:

| **Field**              | **Ý nghĩa**                              |
|------------------------|------------------------------------------|
| stop_sale_decision_id  | Mã quyết định stop-sale                  |
| scope_type             | SKU/batch/lot/trade item/channel/program |
| affected_scope         | Phạm vi ảnh hưởng                        |
| trigger                | Nguyên nhân                              |
| recall_case_id         | Nếu có                                   |
| sale_lock_id           | Nếu có                                   |
| suppression_required   | Có/không                                 |
| affected_consumers     | Danh sách consumer                       |
| affected_field_actions | Danh sách field action bị chặn           |
| decision               | STOP/REVIEW/CLEAR                        |
| owner_required         | Có/không                                 |
| audit_id               | Audit                                    |
| correlation_id         | Trace                                    |

**49.5. Field Suppression Runtime Decision**

Output tối thiểu:

| **Field**                     | **Ý nghĩa**       |
|-------------------------------|-------------------|
| field_suppression_decision_id | Mã quyết định     |
| field_event_id                | Event từ app      |
| device_id                     | Thiết bị          |
| actor_id                      | Người thao tác    |
| role_id                       | Vai trò           |
| object_type                   | Object            |
| object_id                     | ID object         |
| attempted_action              | Action            |
| guard_result                  | PASS/BLOCK/REVIEW |
| suppression_decision          | Decision          |
| reason                        | Lý do             |
| retry_allowed                 | Có/không          |
| handoff_required              | Có/không          |
| audit_id                      | Audit             |
| correlation_id                | Trace             |

**50. SPECIAL GATES FOR CURRENT OPERATIONAL LOCKS**

**50.1. Kho Bến Tre Gate**

Kho Bến Tre Gate PASS khi:

1.  Kho Bến Tre tồn tại trong Warehouse Registry.

2.  Có location tối thiểu.

3.  Warehouse receipt ghi đúng warehouse/location.

4.  Inventory ledger ghi đúng warehouse/location.

5.  Stock query đọc đúng warehouse/location.

6.  Không hardcode tên kho.

7.  Có audit.

BLOCK nếu:

1.  Kho Bến Tre chỉ là text hardcode.

2.  Không có warehouse_id.

3.  Không có location.

4.  Inventory không theo location.

5.  Consumer tự nói hàng ở Kho Bến Tre mà không có resolver.

**50.2. Field App Gate**

Field App Gate PASS khi:

1.  Có device registry.

2.  Có device identity.

3.  Có actor/role binding.

4.  Có permission guard.

5.  Có offline queue.

6.  Có idempotency.

7.  Có mobile event audit.

8.  Có media object binding.

9.  Có no-bypass backend guard.

10. Có negative test cho duplicate/offline/conflict.

BLOCK nếu:

1.  Device chưa đăng ký vẫn thao tác được.

2.  App sync không audit.

3.  App action không idempotency.

4.  Media mồ côi vẫn evidence PASS.

5.  Scan tự confirm.

6.  Field App mutate database trực tiếp.

7.  Field App bỏ qua Sale Lock.

**50.3. Printer Pending Integration Gate**

Printer Gate ở trạng thái hiện tại là:

**RESERVED / PENDING_DEVICE**

PASS ở tầng PACK khi:

1.  Có boundary rõ.

2.  Có registry chừa ngõ.

3.  Có print payload model.

4.  Có log model.

5.  Có reprint rule.

6.  Có no-hardcode rule.

7.  Có adapter boundary.

Không được gọi device production-ready khi chưa có thiết bị/evidence thật.

**50.4. GTIN/GS1 Reserved Gate**

GTIN/GS1 Gate ở trạng thái hiện tại là:

**RESERVED / PENDING_REGISTRY**

PASS ở tầng PACK khi:

1.  Có Trade Item Registry boundary.

2.  Hộp/thùng được mô hình hóa là trade item riêng nếu cần.

3.  GTIN/GS1 chừa ngõ theo từng trade item.

4.  Không hardcode GTIN.

5.  Không nhập tay barcode.

6.  QR không thay barcode thương mại.

Commercialization PASS chỉ được gọi khi GTIN/GS1 thật có evidence.

**50.5. MISA Mapping Reserved Gate**

MISA Mapping Gate ở trạng thái hiện tại là:

**RESERVED / PENDING_MAPPING**

PASS ở tầng PACK khi:

1.  Mapping boundary rõ.

2.  Dữ liệu cần mapping đã liệt kê.

3.  MISA Integration Layer là một ngõ chung.

4.  Không module nào sync riêng.

5.  Sync status/retry/error/reconcile đã khóa.

6.  Không hardcode tài khoản kế toán/mã chi phí.

MISA Production Sync PASS chỉ được gọi khi mapping thật có evidence.

**50.6. Supplier Portal Reserved Gate**

Supplier Portal Gate ở trạng thái hiện tại là:

**CONDITIONAL / RESERVED**

PASS ở tầng PACK khi:

1.  Supplier đủ điều kiện mới được cấp tài khoản.

2.  Supplier upload ảnh/video/thông tin vùng trồng.

3.  Supplier evidence không tự PASS.

4.  Source Verification Owner review.

5.  Supplier không sửa operational truth.

6.  Có audit.

Supplier Portal runtime chỉ active khi có supplier registry, account, permission và evidence flow.

**51. NEGATIVE PATH MATRIX — SELLABLE / STOCK / STOP-SALE / FIELD APP**

**51.1. Negative Path bắt buộc**

| **Case**    | **Input lỗi**                               | **Kết quả bắt buộc**                |
|-------------|---------------------------------------------|-------------------------------------|
| NP-SELL-001 | Batch chưa RELEASED                         | Sellable BLOCK                      |
| NP-SELL-002 | Warehouse receipt chưa confirm              | Stock BLOCK                         |
| NP-SELL-003 | Inventory available = 0                     | Sellable BLOCK                      |
| NP-SELL-004 | HSD expired                                 | Sellable BLOCK                      |
| NP-SELL-005 | QC độ ẩm \>4%                               | QC FAIL, downstream BLOCK           |
| NP-SELL-006 | QC độ ẩm 2%–4%                              | HOLD/REVIEW, downstream BLOCK       |
| NP-SELL-007 | Sale Lock active                            | Field + Consumer suppression        |
| NP-SELL-008 | Recall active                               | Stop Sale / suppression             |
| NP-SELL-009 | Hộp thiếu QR                                | Trade item BLOCK nếu trace required |
| NP-SELL-010 | Thùng dùng barcode hộp sai policy           | Trade item BLOCK                    |
| NP-SELL-011 | Printer tự sinh mã                          | Printing BLOCK                      |
| NP-SELL-012 | Consumer tự bán SKU blocked                 | Consumer FAIL / Incident            |
| NP-SELL-013 | Supplier evidence chưa verified             | Source BLOCK                        |
| NP-SELL-014 | MISA mapping thiếu                          | MISA Sync BLOCK                     |
| NP-SELL-015 | Kho Bến Tre hardcode                        | No-hardcode FAIL                    |
| NP-FLD-001  | App không có device_id                      | Field action BLOCK                  |
| NP-FLD-002  | Device chưa đăng ký                         | Field action BLOCK                  |
| NP-FLD-003  | App không có actor/role                     | Field action BLOCK                  |
| NP-FLD-004  | Upload ảnh không gắn object                 | Evidence REJECT                     |
| NP-FLD-005  | Offline retry trùng idempotency             | Không sinh duplicate                |
| NP-FLD-006  | Scan inbound nhưng chưa confirm             | Inventory không tăng                |
| NP-FLD-007  | App nhập tay QR/barcode cấp 2               | BLOCK                               |
| NP-FLD-008  | App pass QC độ ẩm \>4%                      | BLOCK                               |
| NP-FLD-009  | App release batch khi chưa đủ điều kiện     | BLOCK                               |
| NP-FLD-010  | App confirm receipt với batch chưa RELEASED | BLOCK                               |
| NP-FLD-011  | App thao tác batch đang Sale Lock           | BLOCK / REVIEW                      |
| NP-FLD-012  | Offline event cũ conflict state mới         | REVIEW_REQUIRED                     |
| NP-FLD-013  | App version hết hiệu lực                    | BLOCK / UPDATE_REQUIRED             |

**51.2. Negative Path PASS Rule**

Negative Path chỉ PASS khi chứng minh được:

1.  Lỗi bị chặn đúng.

2.  Field App không bypass.

3.  Consumer không bypass.

4.  Có block reason.

5.  Có audit.

6.  Có evidence.

7.  Không phát sinh side effect sai.

8.  Không tự nâng trạng thái nghiệp vụ.

9.  Không ghi duplicate.

10. Không làm bẩn source-of-truth.

**52. SELLABLE / STOCK / STOP-SALE / FIELD SUPPRESSION SMOKE**

**52.1. Smoke 01 — Sellable Happy Path**

Chuỗi:

1.  Batch đã RELEASED.

2.  Warehouse Receipt Confirmed.

3.  Inventory Ledger ghi nhận.

4.  Stock Available \> 0.

5.  HSD valid.

6.  Trace Ready.

7.  No Recall.

8.  No Sale Lock.

9.  Trade item hộp/thùng ready.

10. Sellable PASS.

PASS khi Consumer được phép đọc sellable status nhưng vẫn phải qua channel/price/order gate tương ứng.

**52.2. Smoke 02 — Stock Zero Path**

Chuỗi:

1.  Batch có tồn tổng.

2.  Reserved/blocked/allocated làm stock_available = 0.

3.  Stock Gate BLOCK.

4.  Field App không thể confirm action làm tăng sellable.

5.  AI không báo còn hàng.

6.  ADS không scale.

7.  CRM không gửi gợi ý mua.

8.  Landing Page không CTA mua.

PASS khi Field App và Consumer bị suppress đúng.

**52.3. Smoke 03 — Recall Stop-Sale Path**

Chuỗi:

1.  Mở recall case.

2.  Attach affected batch.

3.  Activate hold.

4.  Activate sale lock.

5.  Generate impact snapshot.

6.  Suppress Field App action liên quan.

7.  Suppress AI/CRM/ADS/MC AI/Gateway/Landing/Order.

8.  Attempt quote/order bị chặn.

9.  Recovery chưa có thì chưa reopen.

PASS khi SKU/batch bị recall không thể bán hoặc đi tiếp sai ở bất kỳ Field App/Consumer nào trong scope.

**52.4. Smoke 04 — Hộp / Thùng Trade Item Path**

Chuỗi:

1.  Batch ready.

2.  Packaging cấp 2 hộp.

3.  In hộp đủ lô/NSX/HSD/barcode/QR.

4.  Packaging cấp 2 thùng.

5.  In thùng đủ lô/NSX/HSD/barcode/QR.

6.  QR map đúng batch.

7.  GTIN/GS1 lấy từ registry nếu active.

8.  Không barcode thứ hai trên cùng trade item.

9.  Trade item sellable PASS nếu đủ stock.

PASS khi hộp và thùng được phân biệt đúng cấp thương mại.

**52.5. Smoke 05 — QC Moisture Block Path**

Chuỗi:

1.  Batch sau sấy có độ ẩm 4.5%.

2.  Field App submit QC.

3.  QC Guard trả FAIL.

4.  Batch không vào release.

5.  Warehouse receipt bị chặn.

6.  Inventory không tăng.

7.  Sellable BLOCK.

8.  Field App và Consumer suppression.

PASS khi độ ẩm \>4% chặn đúng toàn bộ downstream.

**52.6. Smoke 06 — Field App Offline Conflict Path**

Chuỗi:

1.  Field App tạo offline event.

2.  Trong thời gian offline, batch bị Sale Lock.

3.  App sync event sau khi online.

4.  Backend phát hiện state conflict.

5.  Event chuyển REVIEW_REQUIRED hoặc BLOCK.

6.  Không mutate state sai.

7.  Có audit.

PASS khi offline event không overwrite truth mới hơn.

**52.7. Smoke 07 — Scan Does Not Confirm Path**

Chuỗi:

1.  Field App scan inbound batch.

2.  Chưa bấm confirm receipt.

3.  Inventory Ledger không thay đổi.

4.  Stock Available không tăng.

5.  Sellable không đổi.

6.  Confirm receipt sau đó mới tạo ledger.

PASS khi scan không tự tăng tồn.

**53. EVIDENCE REQUIRED FOR PHẦN 3/4**

**53.1. Evidence tối thiểu**

PHẦN 3/4 cần các evidence sau khi triển khai thật:

1.  Sellable decision evidence.

2.  Stock available evidence.

3.  Inventory ledger evidence.

4.  HSD generation evidence.

5.  QC moisture evidence.

6.  Batch release evidence.

7.  Warehouse receipt evidence.

8.  Recall stop-sale evidence.

9.  Sale lock suppression evidence.

10. Field App suppression evidence.

11. Device identity evidence.

12. Offline sync evidence.

13. Media object binding evidence.

14. AI suppression evidence.

15. CRM suppression evidence.

16. ADS suppression evidence.

17. MC AI suppression evidence.

18. Gateway suppression evidence.

19. Landing Page suppression evidence.

20. Order suppression evidence.

21. Trade item hộp/thùng print evidence.

22. GTIN/GS1 registry evidence nếu active.

23. Kho Bến Tre registry evidence.

24. No-hardcode evidence.

**53.2. Evidence Packet Mapping**

Các evidence trên phải được gom vào:

**Operational Evidence Packet**

Mỗi evidence item phải có:

1.  evidence_item_id.

2.  step.

3.  object_code.

4.  owner.

5.  status.

6.  file/log/reference.

7.  device_id nếu từ Field App.

8.  actor_id nếu từ Field App.

9.  sync_status nếu từ offline.

10. audit_id.

11. correlation_id.

**54. PHẦN 3/4 DONE GATE**

PHẦN 3/4 được xem là đạt governance scope khi đã khóa đủ:

1.  Sellable Gate Control Principles.

2.  Base Sellable Gate.

3.  Operational Sellable và Commercial Sellable boundary.

4.  Sellable Required Inputs.

5.  Sellable Resolver / Guard.

6.  Stock Gate Control.

7.  Stock Availability Model.

8.  Kho Bến Tre Stock Boundary.

9.  Trade Item Sellable Control cho hộp/thùng.

10. Hộp Sellable Gate.

11. Thùng Sellable Gate.

12. HSD / Shelf-life Gate 12 tháng.

13. QC Quality Gate độ ẩm \<2%, 2%–4%, \>4%.

14. Recall Stop-Sale Gate.

15. Hold và Sale Lock tách riêng.

16. Field Suppression Control.

17. Consumer Suppression Control.

18. Suppression Event Registry.

19. Runtime Decision Contract.

20. Special Gates cho Kho Bến Tre, Field App, Printer, GTIN/GS1, MISA Mapping, Supplier Portal.

21. Negative Path Matrix.

22. Sellable / Stock / Stop-Sale / Field Suppression Smoke.

23. Evidence Required.

24. No Field App Bypass rule.

25. No Consumer Bypass rule.

26. No-hardcode rule.

**55. PHẦN 3/4 FINAL CONCLUSION**

PHẦN 3/4 khóa lớp Sellable Gate, Stock Gate, Recall Stop-Sale, Field Suppression và Consumer Suppression cho Operational Core.

Từ điểm này trở đi, SKU / batch / hộp / thùng chỉ được phép đi vào bán hàng khi:

**Batch RELEASED → Warehouse Receipt Confirmed → Inventory Ledger PASS → Stock Available \> 0 → HSD valid → QC clear → Trace Ready → No Recall → No Sale Lock → Trade Item Ready → Sellable Gate PASS**

Nếu một trong các điều kiện P0 không đạt, hệ thống phải:

1.  BLOCK sellable.

2.  SUPPRESS Field App action liên quan.

3.  SUPPRESS Consumer.

4.  Ghi suppression event.

5.  Ghi audit.

6.  Không cho Field App bypass.

7.  Không cho AI/CRM/ADS/MC AI/Gateway/Landing/Order bypass.

8.  Chỉ mở lại khi có evidence, smoke và owner decision nếu thuộc scope P0.

Không có đường tắt từ field action sang sellable.

Không có đường tắt từ scan sang confirm.

Không có đường tắt từ tồn kho sang bán hàng.

Không có đường tắt từ batch sang sellable.

Không có đường tắt từ print sang thương mại hóa.

Không có đường tắt từ CRM/ADS/live demand sang stock.

Không có đường tắt từ recall sang mở bán lại.

PACK-01 PHẦN 3/4 là nền để viết tiếp:

**PHẦN 4/4 — FIELD EVIDENCE / OPERATIONAL DONE GATE / SMOKE / RELEASE HANDOFF / PACK-01 FINAL CONCLUSION**

**PHẦN 4/4 — FIELD EVIDENCE / OPERATIONAL DONE GATE / SMOKE / RELEASE HANDOFF / PACK-01 FINAL CONCLUSION**

**56. FIELD EVIDENCE CONTROL PRINCIPLES**

**56.1. Mục tiêu Field Evidence**

Field Evidence là bằng chứng hiện trường được ghi nhận trong quá trình vận hành thực tế.

Field Evidence dùng để chứng minh:

1.  Ai thao tác.

2.  Thao tác ở đâu.

3.  Thao tác lúc nào.

4.  Thao tác trên đối tượng nào.

5.  Thiết bị nào ghi nhận.

6.  Hình ảnh/video/file nào đi kèm.

7.  Dữ liệu có được đồng bộ đúng không.

8.  Có bị offline conflict không.

9.  Có audit không.

10. Có đủ điều kiện dùng làm evidence PASS không.

Field Evidence không phải dữ liệu trang trí.

Field Evidence là một phần của Product Truth.

Không có Field Evidence đúng chuẩn thì các thao tác hiện trường không đủ điều kiện dùng để gọi PASS trong smoke, handover hoặc release readiness.

**56.2. Field Evidence Source**

Field Evidence có thể phát sinh từ:

1.  Field Operations Internal App / Mobile PWA.

2.  Thiết bị quét QR/barcode.

3.  Máy ảnh/camera trong app.

4.  Video capture trong app.

5.  File upload hiện trường.

6.  Print device callback.

7.  Device heartbeat.

8.  Mobile offline event.

9.  Check-in/check-out.

10. Click-confirm.

11. QC measurement.

12. Warehouse scan.

13. Recall/recovery capture.

Field Evidence không được phát sinh dưới dạng file rời không gắn object.

**56.3. Field Evidence bắt buộc gắn object**

Mỗi Field Evidence phải gắn với ít nhất một object nghiệp vụ.

Các object hợp lệ gồm:

1.  source_origin_id.

2.  raw_material_receipt_id.

3.  raw_material_receipt_item_id.

4.  raw_material_lot_id.

5.  raw_material_qc_id.

6.  production_order_id.

7.  production_profile_id.

8.  material_issue_id.

9.  material_receipt_id.

10. production_execution_id.

11. process_event_id.

12. batch_id.

13. packaging_job_id.

14. print_job_id.

15. print_payload_id.

16. print_error_id.

17. qc_inspection_id.

18. batch_release_id.

19. warehouse_receipt_id.

20. inventory_ledger_id.

21. trace_result_id.

22. recall_case_id.

23. recovery_item_id.

24. disposition_id.

25. capa_id.

Evidence không gắn object được xem là **ORPHAN_EVIDENCE** và không được dùng để gọi PASS.

**56.4. Field Evidence bắt buộc có actor / role / device**

Mỗi Field Evidence phải có tối thiểu:

1.  actor_id.

2.  actor_name_snapshot nếu cần.

3.  role_code.

4.  department_code nếu có.

5.  device_id.

6.  device_code.

7.  device_uuid.

8.  app_version.

9.  platform.

10. captured_at.

11. synced_at nếu có offline sync.

12. object_type.

13. object_id.

14. evidence_type.

15. evidence_status.

16. audit_id.

17. correlation_id.

Nếu thiếu actor, role hoặc device thì evidence không đủ điều kiện dùng làm bằng chứng vận hành.

**56.5. Field Evidence Status**

| **Status**     | **Ý nghĩa**                    | **Được dùng PASS không** |
|----------------|--------------------------------|--------------------------|
| CAPTURED_LOCAL | Đã ghi tại thiết bị, chưa sync | Không                    |
| SYNC_PENDING   | Đang chờ đồng bộ               | Không                    |
| SYNCED         | Đã đồng bộ                     | Chưa                     |
| UNDER_REVIEW   | Đang review                    | Không                    |
| ACCEPTED       | Được chấp nhận                 | Có                       |
| REJECTED       | Không đạt                      | Không                    |
| CONFLICT       | Có xung đột                    | Không                    |
| VOID           | Hủy                            | Không                    |
| SUPERSEDED     | Bị thay bằng evidence mới      | Không                    |

Chỉ Field Evidence có trạng thái **ACCEPTED** mới được dùng cho Done Gate.

**57. OPERATIONAL EVIDENCE PACKET**

**57.1. Mục tiêu Operational Evidence Packet**

Operational Evidence Packet là gói bằng chứng tổng hợp cho một production run, một batch hoặc một smoke run.

Mục tiêu là gom bằng chứng theo chuỗi vận hành, tránh để ảnh/video/log/phiếu nằm rời rạc, không trace được.

Mô hình chuẩn:

**01 Production Run / 01 Batch / 01 Operational Evidence Packet**

**57.2. Cấu trúc Operational Evidence Packet**

Mỗi Operational Evidence Packet phải có:

1.  evidence_packet_id.

2.  evidence_packet_code.

3.  production_order_id.

4.  production_profile_id nếu có.

5.  batch_id.

6.  sku_id.

7.  formula_version_id.

8.  warehouse_id nếu đã nhập kho.

9.  operational_smoke_run_id nếu thuộc smoke.

10. packet_status.

11. created_by.

12. created_at.

13. reviewed_by.

14. reviewed_at.

15. owner_signoff_id nếu dùng release/handover.

16. audit_id.

17. correlation_id.

**57.3. Evidence Packet Content**

Operational Evidence Packet tối thiểu phải gom các nhóm bằng chứng:

| **Nhóm evidence**         | **Nội dung bắt buộc**                                                 |
|---------------------------|-----------------------------------------------------------------------|
| Source Evidence           | Source zone, source origin, company/supplier evidence, verification   |
| Raw Intake Evidence       | Phiếu nhập nguyên liệu, ảnh/video, số lượng, kết luận                 |
| Raw QC Evidence           | QC nguyên liệu, lot status, readiness                                 |
| Recipe Evidence           | SKU, công thức, version, BOM snapshot                                 |
| Material Issue Evidence   | Phiếu đề nghị cấp nguyên liệu, chấp thuận nguyên liệu, issue theo lot |
| Material Receipt Evidence | Xưởng xác nhận nhận nguyên liệu                                       |
| Production Evidence       | Lệnh sản xuất, execution event, output, loss, incident                |
| Personnel Evidence        | Check-in/check-out theo mẻ/công đoạn nếu dùng                         |
| Packaging L1 Evidence     | Đóng gói cấp 1, số lượng, ảnh/video                                   |
| Packaging L2 Evidence     | Đóng gói hộp/thùng, số lượng, ảnh/video                               |
| Printing Evidence         | Print payload, print log, print error, reprint log nếu có             |
| QC After Drying Evidence  | % độ ẩm, cảm quan, ảnh/video/file đo nếu có                           |
| Finished QC Evidence      | QC thành phẩm, accept/hold/reject                                     |
| Release Evidence          | Batch release record                                                  |
| Warehouse Evidence        | Scan inbound, confirm receipt, ảnh/video nhập kho                     |
| Inventory Evidence        | Inventory ledger, lot balance, stock available                        |
| Trace Evidence            | QR/barcode → batch → mẻ → lot nguyên liệu                             |
| Recall Evidence           | Recall negative smoke, hold, sale lock, recovery nếu có               |
| MISA Evidence             | Sync status, retry, error, reconcile nếu thuộc scope                  |
| No-Hardcode Evidence      | Registry/config thay vì hardcode                                      |
| Field App Evidence        | Device, actor, role, offline sync, mobile audit                       |

**57.4. Evidence Packet PASS Conditions**

Operational Evidence Packet chỉ PASS khi:

1.  Có đầy đủ nhóm evidence theo scope.

2.  Evidence hiện trường đã sync thành công.

3.  Media evidence gắn đúng object.

4.  High-risk action có permission/audit.

5.  Offline event không conflict.

6.  Không có orphan evidence.

7.  Không có rejected evidence P0.

8.  Không có trace gap P0.

9.  Không có state transition thiếu audit.

10. Owner/QA review chấp nhận.

**57.5. Evidence Packet BLOCK Conditions**

Operational Evidence Packet BLOCK nếu:

1.  Thiếu Field Evidence cho thao tác hiện trường bắt buộc.

2.  Ảnh/video không gắn object.

3.  Evidence chưa sync.

4.  Evidence conflict.

5.  Evidence bị reject.

6.  QC không có bằng chứng.

7.  Batch release không có audit.

8.  Warehouse receipt không có confirm evidence.

9.  Inventory ledger không trace được.

10. Recall/sale lock không có negative evidence.

11. MISA sync không có status khi thuộc scope.

12. Device/actor/role thiếu.

13. Evidence bị sửa không audit.

**58. FIELD APP EVIDENCE RULES**

**58.1. Media Evidence Rule**

Ảnh/video/file hiện trường phải có:

1.  media_id.

2.  object_type.

3.  object_id.

4.  evidence_packet_id.

5.  media_type.

6.  storage_ref.

7.  captured_by.

8.  captured_at.

9.  device_id.

10. app_version.

11. sync_status.

12. review_status.

13. audit_id.

14. correlation_id.

Không cho phép media mồ côi.

Không cho phép media không biết thuộc phiếu/lệnh/batch/lot nào.

**58.2. Check-in / Check-out Evidence Rule**

Check-in/check-out phải có:

1.  personnel_event_id.

2.  actor_id.

3.  role_code.

4.  production_order_id.

5.  batch_id hoặc production_execution_id nếu có.

6.  work_step_code.

7.  shift_code.

8.  check_in_at.

9.  check_out_at.

10. total_work_time.

11. device_id.

12. supervisor_confirm_id nếu cần.

13. audit_id.

14. correlation_id.

Check-in/check-out không được là ghi chú text.

**58.3. Scan Evidence Rule**

Scan evidence phải có:

1.  scan_event_id.

2.  scan_type.

3.  scan_value.

4.  expected_object_type.

5.  resolved_object_id.

6.  verification_result.

7.  device_id.

8.  actor_id.

9.  scanned_at.

10. audit_id.

11. correlation_id.

Scan chỉ xác minh.

Scan không tự confirm.

Scan không tự tăng tồn.

Scan không tự pass QC.

Scan không tự release batch.

**58.4. Click-confirm Evidence Rule**

Click-confirm phải có:

1.  confirmation_event_id.

2.  action_type.

3.  object_type.

4.  object_id.

5.  actor_id.

6.  role_code.

7.  permission_result.

8.  device_id nếu từ Field App.

9.  idempotency_key.

10. reason nếu required.

11. from_state.

12. to_state.

13. confirmed_at.

14. audit_id.

15. correlation_id.

High-risk click-confirm thiếu permission hoặc audit thì không hợp lệ.

**58.5. Offline Evidence Rule**

Offline event phải có:

1.  client_event_id.

2.  device_id.

3.  actor_id.

4.  local_created_at.

5.  sync_started_at.

6.  synced_at.

7.  action_type.

8.  object_type.

9.  object_id.

10. payload_hash.

11. idempotency_key.

12. retry_count.

13. sync_status.

14. conflict_status.

15. audit_id khi sync thành công.

Offline event không được overwrite truth mới hơn.

Offline event conflict phải chuyển REVIEW_REQUIRED hoặc BLOCK.

**59. OPERATIONAL SMOKE STANDARD**

**59.1. Mục tiêu Smoke**

Operational Smoke chứng minh chuỗi vận hành chạy đúng xuyên suốt.

Smoke không chỉ test từng màn hình.

Smoke không chỉ test API rời.

Smoke phải chứng minh:

1.  Dữ liệu đi đúng chuỗi.

2.  State chuyển đúng.

3.  Field App capture đúng.

4.  Backend guard chặn đúng.

5.  Evidence gắn đúng object.

6.  Inventory không tăng sai.

7.  Trace không đứt.

8.  Recall/Sale Lock chặn flow thật.

9.  MISA không đi tắt.

10. Consumer không bypass.

**59.2. Smoke Run Structure**

Mỗi smoke run phải có:

1.  operational_smoke_run_id.

2.  smoke_run_code.

3.  smoke_name.

4.  scope.

5.  production_order_id.

6.  batch_id.

7.  sku_id.

8.  formula_version_id.

9.  warehouse_id.

10. evidence_packet_id.

11. started_by.

12. started_at.

13. completed_at.

14. smoke_status.

15. positive_path_status.

16. negative_path_status.

17. blocker_list.

18. owner_review_status.

19. audit_id.

20. correlation_id.

**59.3. Smoke Step Structure**

Mỗi smoke step phải có:

1.  smoke_step_id.

2.  operational_smoke_run_id.

3.  step_code.

4.  step_name.

5.  domain_code.

6.  input_object_id.

7.  expected_result.

8.  actual_result.

9.  pass_fail_status.

10. evidence_item_id.

11. field_event_id nếu phát sinh từ Field App.

12. audit_id.

13. correlation_id.

**60. REQUIRED SMOKE MATRIX**

**60.1. OP-SMK-001 — Source → Intake → Lot → QC**

Mục tiêu:

Chứng minh nguyên liệu có nguồn, intake hợp lệ, lot được sinh đúng và QC kiểm soát readiness.

Positive path:

1.  Source hợp lệ.

2.  Intake được tạo.

3.  Nguyên liệu chọn từ master.

4.  Field App chụp evidence.

5.  Receipt confirmed.

6.  Lot được sinh.

7.  QC pass.

8.  Lot READY_FOR_PRODUCTION.

Negative path:

1.  Không có source → intake BLOCK.

2.  Nguyên liệu nhập tay → BLOCK.

3.  QC reject → lot không issue được.

4.  Evidence mồ côi → evidence REJECT.

**60.2. OP-SMK-002 — SKU → BOM → Production Order**

Mục tiêu:

Chứng minh chọn SKU tự hiện công thức và sinh hồ sơ sản xuất gốc.

Positive path:

1.  Chọn SKU.

2.  Công thức/version tự hiện.

3.  BOM snapshot được tạo.

4.  Nhóm sản phẩm và phân loại tự hiện.

5.  Production order mở đúng.

Negative path:

1.  SKU thiếu công thức → BLOCK.

2.  User chọn tay nguyên liệu → BLOCK.

3.  Công thức thiếu version → BLOCK.

4.  BOM không snapshot → BLOCK.

**60.3. OP-SMK-003 — Material Issue By Lot**

Mục tiêu:

Chứng minh chỉ lot đạt điều kiện mới được cấp cho sản xuất.

Positive path:

1.  Production order có BOM snapshot.

2.  Lot QC_PASS.

3.  Lot READY_FOR_PRODUCTION.

4.  Material issue theo lot.

5.  Xưởng xác nhận nhận nguyên liệu qua Field App.

Negative path:

1.  Lot chưa QC_PASS → BLOCK.

2.  Lot chưa READY_FOR_PRODUCTION → BLOCK.

3.  Lot ngoài BOM → BLOCK.

4.  Field App confirm không permission → BLOCK.

**60.4. OP-SMK-004 — Execution → Batch → Genealogy**

Mục tiêu:

Chứng minh batch sinh ra có genealogy về raw material lot.

Positive path:

1.  Start execution.

2.  Ghi process event.

3.  Ghi output/loss.

4.  Complete execution.

5.  Batch được tạo.

6.  Batch truy về material lots.

Negative path:

1.  Execution không gắn production order → BLOCK.

2.  Batch không genealogy → FAIL.

3.  Produced/accepted/loss bị trộn → FAIL.

4.  Field App mutate batch trực tiếp → BLOCK.

**60.5. OP-SMK-005 — Packaging Level 1**

Mục tiêu:

Chứng minh đóng gói cấp 1 đúng boundary.

Positive path:

1.  Packaging L1 gắn batch.

2.  In cấp 1 chỉ NSX/HSD.

3.  Field App ghi số lượng.

4.  Evidence ảnh/video gắn packaging job.

5.  Complete packaging L1.

Negative path:

1.  L1 in QR/barcode trái policy → FAIL.

2.  Packaging complete tăng inventory → FAIL.

3.  Evidence không gắn object → REJECT.

**60.6. OP-SMK-006 — Packaging Level 2 Hộp / Thùng + Print**

Mục tiêu:

Chứng minh hộp và thùng đều in cấp 2 đúng rule.

Positive path:

1.  Packaging L2 hộp.

2.  Hộp in lô/NSX/HSD/barcode/QR.

3.  Packaging L2 thùng.

4.  Thùng in lô/NSX/HSD/barcode/QR.

5.  Print payload do backend sinh.

6.  Field App scan kiểm tra mã.

7.  Print log ghi nhận.

8.  QR map đúng batch.

Negative path:

1.  Hộp thiếu QR → BLOCK.

2.  Thùng thiếu barcode → BLOCK.

3.  Field App nhập tay barcode → BLOCK.

4.  Printer tự sinh mã → BLOCK.

5.  Một trade item có hai barcode → FAIL.

6.  QR thay GTIN/GS1 → FAIL.

**60.7. OP-SMK-007 — QC Moisture / Finished QC**

Mục tiêu:

Chứng minh QC sau sấy và QC thành phẩm hoạt động đúng.

Positive path:

1.  Field App ghi % độ ẩm.

2.  Độ ẩm \<2%.

3.  QC pass.

4.  Finished QC pass.

5.  Evidence đầy đủ.

Negative path:

1.  Độ ẩm 2%–4% → HOLD/REVIEW.

2.  Độ ẩm \>4% → FAIL.

3.  Field App cố pass QC \>4% → BLOCK.

4.  QC_PASS tự release → FAIL.

**60.8. OP-SMK-008 — Batch Release**

Mục tiêu:

Chứng minh release là action riêng.

Positive path:

1.  Batch QC_PASS.

2.  Owner có quyền release.

3.  Release command chạy.

4.  Batch RELEASED.

5.  Transition log ghi nhận.

Negative path:

1.  QC_PASS tự thành RELEASED → FAIL.

2.  Batch QC_HOLD release được → FAIL.

3.  Batch QC_REJECT release được → FAIL.

4.  Release thiếu audit → FAIL.

**60.9. OP-SMK-009 — Warehouse Receipt**

Mục tiêu:

Chứng minh chỉ batch RELEASED mới được nhập kho.

Positive path:

1.  Batch RELEASED.

2.  Field App scan inbound.

3.  Warehouse/location hợp lệ.

4.  Confirm receipt theo permission.

5.  Receipt confirmed.

Negative path:

1.  Batch chưa RELEASED → receipt BLOCK.

2.  Scan inbound tự tăng inventory → FAIL.

3.  Confirm receipt thiếu device/actor/audit → BLOCK.

4.  Kho hardcode → FAIL.

**60.10. OP-SMK-010 — Inventory Ledger**

Mục tiêu:

Chứng minh inventory chỉ tăng sau receipt confirmed.

Positive path:

1.  Warehouse receipt confirmed.

2.  Inventory ledger ghi entry.

3.  Lot balance cập nhật.

4.  Stock available tính đúng.

Negative path:

1.  Packaging tăng inventory → FAIL.

2.  Printing tăng inventory → FAIL.

3.  QC tăng inventory → FAIL.

4.  Ledger sửa trực tiếp → FAIL.

5.  Stock âm → FAIL.

**60.11. OP-SMK-011 — Trace Backward / Forward**

Mục tiêu:

Chứng minh truy xuất đủ chiều.

Positive path:

1.  Scan QR.

2.  Resolve batch.

3.  Batch truy về production order.

4.  Production truy về raw material lots.

5.  Batch truy xuôi về warehouse/inventory.

6.  Public trace không lộ dữ liệu nội bộ.

Negative path:

1.  QR không map batch → BLOCK.

2.  Trace chain đứt → FAIL.

3.  Public trace lộ internal data → FAIL.

4.  Field App tự sửa trace → BLOCK.

**60.12. OP-SMK-012 — Recall / Hold / Sale Lock**

Mục tiêu:

Chứng minh recall chặn flow thật.

Positive path:

1.  Mở recall case.

2.  Attach batch.

3.  Activate hold.

4.  Activate sale lock.

5.  Impact snapshot tạo.

6.  Field App bị chặn action sai scope.

7.  Consumer bị suppress.

Negative path:

1.  Recall dựng chain riêng → FAIL.

2.  Sale lock không chặn AI/CRM/ADS/MC AI/Gateway → FAIL.

3.  Field App vẫn thao tác batch lock → FAIL.

4.  Recovery chưa evidence mà reopen → FAIL.

**60.13. OP-SMK-013 — Field App Offline Conflict**

Mục tiêu:

Chứng minh offline sync không làm bẩn truth.

Positive path:

1.  App ghi event offline.

2.  Sync lại khi online.

3.  Backend nhận event.

4.  Idempotency xử lý đúng.

5.  Audit ghi nhận.

Negative path:

1.  Offline event trùng → không duplicate.

2.  Payload hash đổi cùng idempotency key → conflict.

3.  Batch bị recall trước khi sync → REVIEW_REQUIRED/BLOCK.

4.  Event cũ overwrite state mới → FAIL.

**60.14. OP-SMK-014 — MISA Sync Boundary**

Mục tiêu:

Chứng minh MISA chỉ nhận checkpoint đủ điều kiện.

Positive path:

1.  Operational checkpoint hợp lệ.

2.  Mapping tồn tại.

3.  Sync event tạo.

4.  Status ghi nhận.

5.  Retry/error/reconcile hoạt động.

Negative path:

1.  Thiếu mapping → sync BLOCK.

2.  Field App sync MISA trực tiếp → BLOCK.

3.  Module sync riêng → FAIL.

4.  MISA điều khiển operational truth → FAIL.

**60.15. OP-SMK-015 — No-Hardcode Runtime Data**

Mục tiêu:

Chứng minh dữ liệu runtime đi qua registry/resolver.

Positive path:

1.  Kho Bến Tre đọc từ Warehouse Registry.

2.  QC threshold đọc từ config.

3.  HSD đọc từ Shelf-life Registry.

4.  GTIN/GS1 đọc từ Trade Item Registry nếu active.

5.  MISA mapping đọc từ registry.

6.  Device đọc từ Device Registry.

Negative path:

1.  Kho hardcode → FAIL.

2.  GTIN hardcode → FAIL.

3.  HSD hardcode → FAIL.

4.  QC threshold hardcode trong UI → FAIL.

5.  MISA account hardcode → FAIL.

**60.16. OP-SMK-016 — Final E2E Close-out**

Mục tiêu:

Chạy toàn chuỗi Operational Core.

Chuỗi bắt buộc:

**Source → Intake → QC Lot → Production Order → Material Issue → Execution → Batch → Packaging L1 → Packaging L2 Hộp/Thùng → Print → QC → Release → Warehouse Receipt → Inventory Ledger → Trace → Recall Stop-Sale Negative Test → MISA Sync Status → Evidence Packet → Owner Review**

PASS khi:

1.  Positive path pass.

2.  Negative path pass.

3.  Evidence packet đủ.

4.  Field evidence accepted.

5.  No-hardcode pass.

6.  Owner review pass.

7.  Không có P0 blocker.

**61. OPERATIONAL DONE GATE**

**61.1. Mục tiêu Operational Done Gate**

Operational Done Gate xác định PACK-01 đã đủ điều kiện chuyển sang:

1.  Dev handoff.

2.  QA handoff.

3.  Operational rehearsal.

4.  Evidence review.

5.  Smoke review.

6.  Release readiness review.

Operational Done Gate không đồng nghĩa Production Ready.

**61.2. Done Gate Matrix**

| **Gate Code** | **Gate Name**                | **PASS khi**                                    | **BLOCK khi**                        |
|---------------|------------------------------|-------------------------------------------------|--------------------------------------|
| OP-DG-001     | Governance Completeness Gate | PACK-01 đủ 4 phần, rule rõ                      | Còn rule P0 mơ hồ                    |
| OP-DG-002     | Field App Gate               | App có device, offline, audit, evidence binding | App bypass backend hoặc media mồ côi |
| OP-DG-003     | Source / Intake Gate         | Source → Intake → Lot → QC chạy đúng            | Lot không trace source hoặc QC thiếu |
| OP-DG-004     | Recipe / BOM Gate            | SKU tự hiện công thức/version/BOM               | Vẫn chọn tay nguyên liệu             |
| OP-DG-005     | Production Gate              | Order → Issue → Execution → Batch đúng          | Batch không genealogy                |
| OP-DG-006     | Packaging / Printing Gate    | L1/L2 hộp/thùng in đúng, log đúng               | Printing tạo truth hoặc in sai cấp   |
| OP-DG-007     | QC / Release Gate            | QC_PASS tách RELEASED                           | QC_PASS tự release                   |
| OP-DG-008     | Warehouse / Inventory Gate   | RELEASED mới receipt, ledger append-only        | Inventory tăng sai boundary          |
| OP-DG-009     | Traceability Gate            | QR/batch/lot trace đủ                           | Trace chain đứt                      |
| OP-DG-010     | Recall / Sale Lock Gate      | Recall dùng trace, lock chặn flow thật          | Recall không chặn bán                |
| OP-DG-011     | MISA Boundary Gate           | Một integration layer, status/retry/reconcile   | Module sync riêng                    |
| OP-DG-012     | Evidence Gate                | Evidence Packet đủ, ACCEPTED                    | Evidence thiếu/chưa accepted         |
| OP-DG-013     | Smoke Gate                   | E2E smoke pass, negative path pass              | Chỉ pass test rời                    |
| OP-DG-014     | No-Hardcode Gate             | Dữ liệu runtime qua registry/resolver           | Runtime data hardcode                |
| OP-DG-015     | Handover Gate                | Dev/QA/Ops/MISA handoff đủ                      | Đội triển khai còn phải tự đoán      |
| OP-DG-016     | Owner Sign-off Gate          | Owner sign-off đúng scope                       | Review chưa ký hoặc không trace      |

**61.3. Done Gate Decision States**

| **State**                    | **Ý nghĩa**               |
|------------------------------|---------------------------|
| NOT_STARTED                  | Chưa đánh giá             |
| UNDER_REVIEW                 | Đang rà                   |
| PENDING_IMPLEMENTATION       | Chưa triển khai           |
| PENDING_EVIDENCE             | Thiếu evidence            |
| PENDING_SMOKE                | Thiếu smoke               |
| PENDING_OWNER_SIGNOFF        | Thiếu owner sign-off      |
| BLOCKED                      | Có blocker                |
| GOVERNANCE_COMPLETE          | Đủ tài liệu governance    |
| READY_FOR_HANDOVER_CANDIDATE | Có thể xét handover       |
| READY_FOR_HANDOVER           | Đủ điều kiện bàn giao     |
| PRODUCTION_READY_CANDIDATE   | Ứng viên production ready |
| REJECTED                     | Không đạt                 |
| SUPERSEDED                   | Bị thay thế               |

**61.4. Default Status**

Sau khi tài liệu hoàn tất, trạng thái mặc định là:

| **Hạng mục**          | **Default State**       |
|-----------------------|-------------------------|
| PACK-01 Documentation | GOVERNANCE_COMPLETE     |
| Implementation        | PENDING_IMPLEMENTATION  |
| Field App Evidence    | PENDING_EVIDENCE        |
| Evidence Packet       | PENDING_EVIDENCE        |
| Smoke Run             | PENDING_SMOKE           |
| Owner Sign-off        | PENDING_OWNER_SIGNOFF   |
| Ready For Handover    | PENDING_HANDOVER_REVIEW |
| Production Ready      | NO                      |
| Release Approved      | NO                      |
| Go-live Approved      | NO                      |

**62. RELEASE HANDOFF STANDARD**

**62.1. Mục tiêu Release Handoff**

Release Handoff dùng để chuyển PACK-01 sang các đội triển khai, kiểm thử và vận hành thử.

Handoff không có nghĩa là production release.

Handoff chỉ xác nhận các đội đã nhận đủ:

1.  Scope.

2.  Owner.

3.  Boundary.

4.  Source-of-truth.

5.  Domain Registry.

6.  Field App rules.

7.  Phase order.

8.  Test matrix.

9.  Smoke matrix.

10. Evidence requirements.

11. Blocker rules.

**62.2. Handoff Recipients**

PACK-01 phải handoff cho:

1.  Dev Lead.

2.  Backend Team.

3.  Frontend/Admin Team.

4.  Field App / Mobile PWA Team.

5.  QA Team.

6.  Operational Owner.

7.  Factory/Production Owner.

8.  Warehouse Owner.

9.  QC Owner.

10. Traceability/Recall Owner.

11. Accounting/MISA Owner.

12. Security/Permission Owner.

13. Release Owner.

14. Business Owner.

**62.3. Dev Handoff Package**

Dev Handoff Package phải gồm:

1.  PACK-01 bản sạch.

2.  Domain Registry.

3.  Field Operations App Domain.

4.  Device / Offline / Idempotency rules.

5.  Media Evidence rules.

6.  Phase order.

7.  DB owner theo module.

8.  API/worker/admin owner theo module.

9.  Route family.

10. State/action boundary.

11. High-risk action list.

12. No-hardcode rules.

13. Registry/resolver list.

14. Done Gate matrix.

15. Smoke matrix.

16. Negative path matrix.

17. Evidence packet structure.

18. Known placeholder registry.

19. Known blocker register.

Không giao dev bằng đoạn code rời.

Không để dev tự đoán owner/boundary/flow.

**62.4. QA Handoff Package**

QA Handoff Package phải gồm:

1.  Test matrix.

2.  Smoke matrix OP-SMK-001 → OP-SMK-016.

3.  Negative path matrix.

4.  Field App negative path.

5.  Evidence acceptance rule.

6.  Device identity checklist.

7.  Offline sync checklist.

8.  Media object binding checklist.

9.  Trace ID checklist.

10. Audit checklist.

11. No-hardcode checklist.

12. Recall / Sale Lock consumer suppression checklist.

13. MISA sync boundary checklist.

14. Trade item hộp/thùng checklist.

15. QC moisture checklist.

16. HSD checklist.

QA không được chỉ test màn hình.

QA phải test state transition, owner boundary, side effect, audit, field evidence và smoke xuyên chuỗi.

**62.5. Operational Handoff Package**

Operational Handoff Package phải gồm:

1.  Chuỗi phiếu vận hành.

2.  Quy tắc tự sinh/tự kế thừa.

3.  Quy tắc auto-fill / click chọn / nhập tay.

4.  Field App workflow.

5.  Check-in/check-out.

6.  Scan rule.

7.  Click-confirm rule.

8.  Role ký xác nhận.

9.  Quy tắc đơn vị theo công đoạn.

10. Quy tắc evidence ảnh/video/file.

11. Quy tắc QC độ ẩm.

12. Quy tắc in cấp 1 / cấp 2.

13. Quy tắc xử lý lỗi in / reprint.

14. Quy tắc warehouse receipt.

15. Quy tắc trace.

16. Quy tắc recall / sale lock.

17. Quy tắc phối hợp với kế toán/MISA.

**62.6. Field App Handoff Package**

Field App Handoff Package phải gồm:

1.  Use case hiện trường.

2.  Device header chuẩn.

3.  Offline queue rules.

4.  Sync rules.

5.  Idempotency rules.

6.  Media capture rules.

7.  Object binding rules.

8.  Scan rules.

9.  Click-confirm rules.

10. High-risk action rules.

11. Sale Lock warning rules.

12. Error/retry/conflict rules.

13. Mobile event audit rules.

14. Device registry rules.

15. App version control rules.

**62.7. MISA / Accounting Handoff Package**

MISA / Accounting Handoff Package phải gồm:

1.  Mapping cần chuẩn bị.

2.  Checkpoint sync.

3.  Sync status.

4.  Retry/error/reconcile rule.

5.  Phiếu kế toán xuất nguyên liệu.

6.  Nhập kho nguyên liệu.

7.  Nhập kho thành phẩm.

8.  Giá trị xuất nguyên liệu.

9.  Hao hụt.

10. Nhân công nếu sync.

11. Cost center nếu dùng.

12. Không để MISA điều khiển nghiệp vụ nhà máy.

**63. PLACEHOLDER REGISTRY CONTROL**

**63.1. Mục tiêu Placeholder Registry**

Các dữ liệu thật chưa có phải được quản trị bằng placeholder có kiểm soát.

Placeholder không được public.

Placeholder không được hiểu là active runtime.

Placeholder không được dùng để gọi PASS.

**63.2. Placeholder Registry bắt buộc**

| **Registry**               | **Trạng thái**                   | **Rule**                                 |
|----------------------------|----------------------------------|------------------------------------------|
| Warehouse Registry         | Kho Bến Tre là kho thật ban đầu  | Không hardcode                           |
| Location Registry          | Chờ chi tiết location            | Phải cấu hình trước receipt thật         |
| Field App Registry         | Required                         | Không bypass backend                     |
| Device Registry            | Required                         | Device chưa đăng ký bị chặn              |
| Printer Registry           | PENDING_DEVICE                   | Chừa ngõ kết nối                         |
| Print Template Registry    | PENDING_TEMPLATE                 | Chừa ngõ cấu hình                        |
| Trade Item Registry        | Hộp/thùng cần registry           | Không suy luận từ tên                    |
| GTIN/GS1 Registry          | RESERVED                         | Không hardcode / không nhập tay          |
| MISA Mapping Registry      | RESERVED                         | Không sync chính thức nếu thiếu mapping  |
| QC Threshold Registry      | \<2% PASS, 2%–4% HOLD, \>4% FAIL | Không hardcode trong UI                  |
| Shelf-life Registry        | 12 tháng                         | Có thể theo SKU/nhóm SKU                 |
| Supplier Portal Registry   | CONDITIONAL                      | Supplier đủ điều kiện mới được cấp quyền |
| Personnel Registry         | PENDING_FACTORY_OPERATION        | Không hardcode tên người                 |
| Role / Permission Registry | REQUIRED                         | High-risk action phải có permission      |
| Evidence Registry          | REQUIRED                         | Chỉ ACCEPTED mới PASS                    |

**63.3. Placeholder BLOCK Rule**

Placeholder bị xem là BLOCK nếu:

1.  Được dùng như dữ liệu thật.

2.  Được public ra khách hàng.

3.  Được dùng để sync MISA chính thức.

4.  Được dùng để gọi Production Ready.

5.  Được hardcode trong code/UI/template.

6.  Không có owner.

7.  Không có trạng thái.

8.  Không có kế hoạch thay bằng dữ liệu thật.

9.  Field App dùng placeholder để thao tác production thật.

10. Device placeholder được dùng như device thật.

**64. OPERATIONAL RELEASE READINESS REVIEW**

**64.1. Mục tiêu Release Readiness Review**

Operational Release Readiness Review là bước rà cuối trước khi PACK-01 được đưa vào hàng chờ xét Production Ready Candidate.

Review này xác định:

1.  Domain nào đã triển khai.

2.  Domain nào chỉ governance.

3.  Domain nào pending registry.

4.  Domain nào pending device.

5.  Domain nào pending Field App smoke.

6.  Domain nào pending MISA mapping.

7.  Domain nào pending GTIN/GS1.

8.  Domain nào pending evidence.

9.  Domain nào pending smoke.

10. Domain nào pending owner sign-off.

11. Domain nào bị blocker.

**64.2. Release Readiness Checklist**

| **Nhóm**    | **Điều kiện**                                         |
|-------------|-------------------------------------------------------|
| Governance  | PACK-01 đủ 4 phần, không còn rule mơ hồ               |
| Master Data | SKU/BOM/version/config/trace map rõ                   |
| Field App   | Device, offline, idempotency, media binding, audit rõ |
| Source      | Source zone/source origin/supplier/company source rõ  |
| Production  | Lệnh sản xuất tự hiện công thức, issue lot-based      |
| Packaging   | L1/L2 rõ, hộp/thùng in đúng                           |
| Printing    | Hệ thống sinh payload, máy in chỉ nhận payload        |
| QC          | Độ ẩm và QC thành phẩm có threshold/state             |
| Release     | QC_PASS tách RELEASED                                 |
| Warehouse   | Kho Bến Tre registry, receipt confirmed               |
| Inventory   | Ledger append-only, stock available resolve được      |
| Trace       | Backward/forward/internal/public trace rõ             |
| Recall      | Hold/sale lock/impact/recovery/CAPA rõ                |
| MISA        | Một integration layer, mapping/status/retry/reconcile |
| Evidence    | Operational Evidence Packet                           |
| Smoke       | E2E smoke + negative smoke                            |
| Security    | Permission/audit cho high-risk action                 |
| Handoff     | Dev/QA/Ops/Field App/MISA nhận đủ gói                 |
| Owner       | Owner sign-off theo scope                             |

**64.3. Production Ready Candidate Rule**

PACK-01 chỉ được đưa vào trạng thái Production Ready Candidate khi:

1.  Implementation scope hoàn tất.

2.  Field App evidence ACCEPTED nếu có thao tác hiện trường.

3.  Evidence Packet ACCEPTED.

4.  E2E smoke PASS.

5.  Negative smoke PASS.

6.  No-hardcode PASS.

7.  Device / offline / idempotency PASS.

8.  Security / permission / audit PASS.

9.  Trace / Recall PASS.

10. MISA boundary PASS nếu thuộc scope.

11. Owner sign-off đủ.

12. Không còn blocker P0.

Nếu thiếu một điều kiện P0, trạng thái vẫn là PENDING_EVIDENCE hoặc BLOCKED.

**65. OPERATIONAL ROLLBACK / RECOVERY HANDOFF**

**65.1. Mục tiêu Rollback / Recovery**

Rollback / Recovery dùng để dừng, cô lập và xử lý lỗi vận hành mà không phá source-of-truth.

Rollback không phải xóa dữ liệu.

Rollback là:

1.  Dừng hành động sai.

2.  Cô lập scope lỗi.

3.  Ghi incident.

4.  Ghi evidence.

5.  Chạy recovery.

6.  Owner review.

7.  Re-run smoke nếu cần.

8.  Mở lại có điều kiện.

**65.2. Rollback Trigger**

Rollback/recovery bắt buộc khi:

1.  Nguyên liệu không trace được source.

2.  Lot reject/hold vẫn issue được.

3.  Lệnh sản xuất chọn tay nguyên liệu.

4.  BOM snapshot sai version.

5.  Batch không genealogy về lot.

6.  Field App sync duplicate state.

7.  Field App bypass backend validation.

8.  Field App media mồ côi được dùng PASS.

9.  In cấp 2 sai batch/QR/barcode.

10. Máy in tự sinh mã nghiệp vụ.

11. QC_PASS tự release.

12. Batch chưa release vẫn nhập kho.

13. Inventory tăng sai boundary.

14. Trace chain đứt.

15. Recall không chặn flow thật.

16. Sale Lock không suppress Field App/Consumer.

17. MISA sync thiếu mapping.

18. High-risk action không audit.

19. Hardcode runtime data.

20. Evidence giả hoặc không trace được.

**65.3. Recovery Requirements**

Mỗi recovery phải có:

1.  recovery_case_id.

2.  trigger.

3.  affected_scope.

4.  owner.

5.  containment action.

6.  correction action.

7.  evidence.

8.  audit.

9.  re-test result.

10. smoke rerun nếu P0.

11. owner sign-off.

12. closure status.

Không đóng recovery nếu chưa xác nhận không còn side effect sai.

**66. FINAL OPERATIONAL DONE GATE**

**66.1. PACK-01 Governance Done Gate**

PACK-01 đạt GOVERNANCE COMPLETE khi:

1.  PHẦN 1/4 khóa Operational Core Principles / Field Operations App / Owner Boundary / Product Truth Model.

2.  PHẦN 2/4 khóa Domain Registry.

3.  PHẦN 3/4 khóa Sellable Gate / Stock Gate / Recall Stop-Sale / Field Suppression / Consumer Suppression.

4.  PHẦN 4/4 khóa Field Evidence / Operational Done Gate / Smoke / Release Handoff.

5.  Không còn rule P0 mơ hồ.

6.  Không còn owner mơ hồ.

7.  Không còn boundary chồng chéo.

8.  Không còn Field App bypass.

9.  Không còn Consumer tự suy luận truth vận hành.

10. Không còn đường tắt từ production/printing/QC/scan/MISA sang inventory/sellable.

**66.2. PACK-01 Ready For Handover Gate**

PACK-01 chỉ được gọi READY FOR HANDOVER khi có đủ:

1.  Dev Handoff Package.

2.  QA Handoff Package.

3.  Operational Handoff Package.

4.  Field App Handoff Package.

5.  MISA/Accounting Handoff Package.

6.  Test matrix.

7.  Smoke matrix.

8.  Evidence packet structure.

9.  Known placeholder registry.

10. Known blocker register.

11. Owner review.

12. Handover sign-off.

READY FOR HANDOVER không đồng nghĩa Production Ready.

**66.3. PACK-01 Production Ready Candidate Gate**

PACK-01 chỉ được gọi PRODUCTION_READY_CANDIDATE khi:

1.  Implementation có evidence.

2.  Field App smoke pass.

3.  E2E smoke pass.

4.  Negative path pass.

5.  Evidence ACCEPTED.

6.  Owner sign-off đầy đủ.

7.  Security/permission/audit pass.

8.  Trace/Recall/MISA smoke pass đúng scope.

9.  No-hardcode evidence pass.

10. Không còn P0 blocker.

11. Completion Gate liên quan đủ điều kiện xét.

**66.4. PACK-01 Production Ready Blockers**

PACK-01 bắt buộc BLOCK nếu còn một trong các lỗi:

1.  Lệnh sản xuất vẫn chọn tay nguyên liệu.

2.  Công thức không tự hiện đầy đủ.

3.  BOM không snapshot.

4.  Lot chưa QC_PASS + READY vẫn issue được.

5.  Batch không truy được raw material lot.

6.  Field App không có device identity.

7.  Field App không có offline/idempotency.

8.  Field App media mồ côi.

9.  Field App bypass backend.

10. Field App scan làm thay confirm.

11. QC_PASS tự release.

12. Batch chưa RELEASED vẫn nhập kho.

13. Inventory tăng trước warehouse receipt confirmed.

14. Ledger không append-only.

15. In cấp 2 thiếu lô/NSX/HSD/barcode/QR.

16. Hộp/thùng không phân biệt trade item.

17. GTIN/GS1 hardcode hoặc nhập tay sai rule.

18. QR thay barcode thương mại.

19. Máy in tự sinh business truth.

20. Reprint không reason/approval/audit.

21. Trace chain đứt.

22. Public trace lộ dữ liệu nội bộ.

23. Recall dựng chain riêng.

24. Hold và Sale Lock trộn nhau.

25. Sale Lock không suppress Field App.

26. Sale Lock không suppress Consumer.

27. MISA sync không có mapping/status/retry/reconcile.

28. MISA điều khiển nghiệp vụ nhà máy.

29. High-risk action không permission/audit.

30. Evidence thiếu hoặc chưa accepted.

31. Smoke chỉ chạy test rời.

32. Owner sign-off thiếu.

33. Runtime data bị hardcode.

**67. PACK-01 FINAL STATUS MATRIX**

| **Hạng mục**               | **Trạng thái sau khi hoàn tất tài liệu** |
|----------------------------|------------------------------------------|
| PACK-01 Documentation      | GOVERNANCE_COMPLETE                      |
| Operational Implementation | PENDING_IMPLEMENTATION                   |
| Field App Implementation   | PENDING_IMPLEMENTATION                   |
| Evidence Packet            | PENDING_EVIDENCE                         |
| Field Evidence             | PENDING_EVIDENCE                         |
| Smoke Run                  | PENDING_SMOKE                            |
| Owner Sign-off             | PENDING_OWNER_SIGNOFF                    |
| Ready For Handover         | PENDING_HANDOVER_REVIEW                  |
| Production Ready           | NO                                       |
| Release Approved           | NO                                       |
| Go-live Approved           | NO                                       |

**68. PHẦN 4/4 DONE GATE**

PHẦN 4/4 được xem là đạt governance scope khi đã khóa đủ:

1.  Field Evidence Control Principles.

2.  Operational Evidence Packet.

3.  Evidence Packet PASS/BLOCK Conditions.

4.  Field App Evidence Rules.

5.  Media Evidence Rule.

6.  Check-in / Check-out Evidence Rule.

7.  Scan Evidence Rule.

8.  Click-confirm Evidence Rule.

9.  Offline Evidence Rule.

10. Operational Smoke Standard.

11. Smoke Run Structure.

12. Smoke Step Structure.

13. Required Smoke Matrix OP-SMK-001 → OP-SMK-016.

14. Field App Offline Conflict Smoke.

15. Scan Does Not Confirm Smoke.

16. Operational Done Gate.

17. Done Gate Matrix.

18. Release Handoff Standard.

19. Dev Handoff Package.

20. QA Handoff Package.

21. Operational Handoff Package.

22. Field App Handoff Package.

23. MISA / Accounting Handoff Package.

24. Placeholder Registry Control.

25. Release Readiness Review.

26. Rollback / Recovery Handoff.

27. Final Operational Done Gate.

28. Production Ready Blockers.

29. Final Status Matrix.

**69. PACK-01 FINAL CONCLUSION**

PACK-01 khóa hoàn chỉnh lớp Operational Core cho hệ thống Ginsengfood.

Operational Core được xác định là owner của sự thật vận hành gồm:

1.  Source Origin.

2.  Raw Material Intake.

3.  Raw Material QC.

4.  Raw Material Lot.

5.  Recipe / BOM Snapshot.

6.  Production Order.

7.  Material Issue.

8.  Material Receipt.

9.  Production Execution.

10. Batch.

11. Field Operations Internal App.

12. Personnel Check-in / Check-out.

13. Packaging Level 1.

14. Packaging Level 2 hộp/thùng.

15. Print Payload.

16. QC sau sấy.

17. QC thành phẩm.

18. Batch Release.

19. Warehouse Receipt.

20. Inventory Ledger.

21. Traceability.

22. Recall.

23. Sale Lock / Stop Sale.

24. MISA Integration Boundary.

25. Evidence / Smoke.

PACK-01 khóa rõ các nguyên tắc không được vi phạm:

1.  Không chọn tay nguyên liệu trong sản xuất thường.

2.  Không sửa đè version công thức.

3.  Không dùng dòng gom nhóm mơ hồ ở downstream.

4.  Không issue nguyên liệu ngoài BOM snapshot.

5.  Không dùng lot chưa QC_PASS + READY_FOR_PRODUCTION.

6.  Không để Field App owner business truth.

7.  Không để Field App bypass backend validation.

8.  Không để media evidence mồ côi.

9.  Không để scan tự confirm.

10. Không để offline retry sinh duplicate.

11. Không để QC_PASS tự thành RELEASED.

12. Không nhập kho batch chưa RELEASED.

13. Không để inventory tăng trước warehouse receipt confirmed.

14. Không để printing tạo inventory/QC/release.

15. Không để máy in tự sinh business truth.

16. Không để QR thay barcode thương mại.

17. Không để cùng trade item có hai barcode thương mại.

18. Không để recall dựng chain riêng.

19. Không để sale lock không chặn Field App.

20. Không để sale lock không chặn Consumer.

21. Không để MISA điều khiển nghiệp vụ nhà máy.

22. Không để AI/CRM/ADS/MC AI/Gateway tự suy luận product truth.

23. Không gọi PASS khi chưa có evidence/smoke/owner sign-off.

PACK-01 cũng khóa các dữ liệu vận hành ban đầu:

1.  In cấp 2 áp dụng cho hộp và thùng.

2.  Hộp/thùng in lô, NSX, HSD, mã vạch, QR.

3.  Kho thật ban đầu là Kho Bến Tre nhưng phải qua Warehouse Registry.

4.  Máy in/template thật chừa ngõ kết nối.

5.  GTIN/GS1 hộp/thùng chừa ngõ tích hợp theo Trade Item Registry.

6.  Mapping MISA chừa ngõ kết nối.

7.  QC độ ẩm: dưới 2% PASS, 2%–4% HOLD/REVIEW, trên 4% FAIL.

8.  HSD mặc định 12 tháng theo SKU hoặc nhóm SKU.

9.  Vùng trồng Sâm là nguồn công ty.

10. Supplier Portal chừa ngõ cho nhà cung cấp đủ điều kiện nhập ảnh/video/thông tin vùng trồng.

11. Nhân sự/role/permission thật bổ sung khi nhà máy vận hành.

12. Evidence Pack và Smoke Log dùng phương án tinh gọn theo Operational Evidence Packet và operational_smoke_run_id.

PACK-01 hoàn thành ở tầng governance, chưa đồng nghĩa Production Ready.

Trạng thái cuối của PACK-01:

**PACK-01 — V1.0 CLEAN FINAL**

**OPERATIONAL CORE / PRODUCTION / WAREHOUSE / INVENTORY / TRACEABILITY / RECALL / SALE LOCK**

**FINAL STATUS: GOVERNANCE COMPLETE**

**IMPLEMENTATION_STATUS: PENDING_IMPLEMENTATION**

**FIELD_APP_STATUS: PENDING_IMPLEMENTATION**

**FIELD_EVIDENCE_STATUS: PENDING_EVIDENCE**

**EVIDENCE_STATUS: PENDING_EVIDENCE**

**SMOKE_STATUS: PENDING_SMOKE**

**PRODUCTION_READY: NO UNTIL ACCEPTED EVIDENCE + E2E SMOKE PASS**

**RELEASE_APPROVED: NO UNTIL OWNER SIGN-OFF**

**GO_LIVE_APPROVED: NO UNTIL FINAL GLOBAL RELEASE DONE GATE PASS**

**70. ĐỀ XUẤT TIẾP THEO**

Bước tiếp theo nên chuyển sang:

**PACK-02 — PRODUCT MASTER / SKU / INGREDIENT / RECIPE / FORMULA VERSION / PRODUCT ACTIVATION**

**SKU–INGREDIENT–RECIPE–FORMULA VERSION–OPERATIONAL CONFIG CONTROL PACK**

**V1.0 CLEAN FINAL**

PACK-02 sẽ khóa sâu lớp:

1.  SKU canonical.

2.  Tên sản phẩm.

3.  Nhóm sản phẩm.

4.  Phân loại vegan / mặn.

5.  Nguyên liệu canonical.

6.  Công thức G1.

7.  Version công thức.

8.  BOM snapshot.

9.  Operational config theo SKU.

10. Packaging config.

11. QC config.

12. HSD config.

13. Trace config.

14. Recall config.

15. Trade item hộp/thùng.

16. GTIN/GS1 boundary.

17. Product Activation dependency.

PACK-02 là cầu nối trực tiếp giữa:

**20 SKU → Nguyên liệu → Công thức G1 → Operational Config → Production Order → Packaging/Trace/Recall → Sellable/Product Activation**.
