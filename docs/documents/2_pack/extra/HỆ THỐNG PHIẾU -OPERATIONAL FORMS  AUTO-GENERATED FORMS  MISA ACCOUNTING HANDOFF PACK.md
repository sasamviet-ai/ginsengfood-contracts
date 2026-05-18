**OPERATIONAL FORMS / AUTO-GENERATED FORMS / MISA ACCOUNTING HANDOFF PACK**

**PRODUCTION–MATERIAL–PACKAGING–QC–WAREHOUSE–MISA FORM CONTROL**

**V1.0 CLEAN FINAL**

**0. DOCUMENT CONTROL**

**0.1. Mục tiêu tài liệu**

Tài liệu này khóa bộ phiếu vận hành chuẩn cho hệ thống Ginsengfood, bao gồm toàn bộ chuỗi:

**Production Demand → Formula Resolution → MRP → Procurement / Harvest → Intake → QC → Readiness → Production Order → Material Issue → Production Execution → Packaging → QC Finished Goods → Batch Release → Warehouse Receipt → Inventory Ledger → MISA Accounting Handoff**

Tài liệu này dùng để:

1.  Chuẩn hóa toàn bộ phiếu vận hành.

2.  Khóa dữ liệu nào tự sinh, dữ liệu nào tự hiện, dữ liệu nào click chọn, dữ liệu nào nhập thực tế.

3.  Khóa phiếu nào có ngõ kế toán/MISA.

4.  Khóa nguyên tắc tự kế thừa dữ liệu giữa các phiếu.

5.  Khóa khối xác nhận cá nhân, evidence, audit và owner review.

6.  Chặn việc người vận hành chọn tay nguyên liệu, sửa công thức hoặc nhập tay dữ liệu hệ thống phải tự sinh.

7.  Bảo đảm dev không phải tự suy luận form khi triển khai.

**0.2. Phạm vi tài liệu**

Tài liệu này quản trị các nhóm phiếu:

1.  Nhóm kế hoạch / demand / MRP.

2.  Nhóm thu mua / thu hoạch / nhập nguyên liệu.

3.  Nhóm công thức / lệnh sản xuất / cấp nguyên liệu.

4.  Nhóm sản xuất / sơ chế / sấy / QC.

5.  Nhóm đóng gói / in mã.

6.  Nhóm nhập kho thành phẩm.

7.  Nhóm kế toán / MISA.

8.  Nhóm hủy / ghi giảm tồn kho.

9.  Nhóm evidence / audit / smoke.

**0.3. Ranh giới tài liệu**

Tài liệu này không viết:

1.  API route chi tiết.

2.  DTO.

3.  Database schema.

4.  UI component.

5.  Worker.

6.  Code tích hợp MISA.

7.  Mapping tài khoản kế toán thật.

8.  Template in thật.

9.  Danh sách nhân sự thật.

Tài liệu này chỉ khóa **nghiệp vụ form, dữ liệu form, điều kiện chuyển bước, MISA handoff và done gate**.

**1. NGUYÊN TẮC CỐT LÕI CỦA BỘ PHIẾU**

**1.1. Hồ sơ sản xuất gốc là trục trung tâm**

Mỗi lệnh sản xuất phải có **hồ sơ sản xuất gốc**.

Hồ sơ sản xuất gốc là nơi liên kết:

1.  Production Demand.

2.  SKU.

3.  G1 Approved Operational Formula.

4.  anchor_rice_quantity.

5.  Production BOM Snapshot.

6.  MRP Run.

7.  Material Requirement Board.

8.  Phiếu cấp nguyên liệu.

9.  Phiếu chấp thuận nguyên liệu.

10. Check-in / check-out.

11. Sơ chế.

12. Sấy.

13. Đóng gói.

14. QC thành phẩm.

15. Batch Release.

16. Nhập kho thành phẩm.

17. Kế toán xuất nguyên liệu.

18. MISA checkpoint.

Không phiếu nào trong chuỗi sản xuất được tồn tại rời rạc nếu thuộc cùng một production run.

**1.2. Dữ liệu nền không được nhập lại**

Các dữ liệu sau phải tự kế thừa, không nhập lại ở từng phiếu:

1.  SKU.

2.  Tên sản phẩm.

3.  Nhóm sản phẩm.

4.  Vegan / mặn.

5.  Mã công thức.

6.  Formula version.

7.  Recipe/BOM version.

8.  anchor_rice_quantity.

9.  Production BOM Snapshot.

10. Danh sách nguyên liệu.

11. Đơn vị chuẩn.

12. Số lượng nguyên liệu hệ thống tính.

13. Lô nguyên liệu đã duyệt.

14. Batch.

15. NSX.

16. HSD.

17. Kho / location nếu đã được quyết định.

18. Người/role đã xác nhận ở bước trước nếu cần kế thừa.

**1.3. Người dùng chỉ nhập dữ liệu thực tế**

Người vận hành chỉ được nhập:

1.  Số lượng thực nhận.

2.  Số lượng thực xuất.

3.  Số lượng đạt.

4.  Số lượng không đạt.

5.  Hao hụt thực tế.

6.  % độ ẩm.

7.  Kết quả QC.

8.  Lý do không đạt.

9.  Ghi chú vận hành.

10. Evidence ảnh/video/file.

11. Xác nhận cá nhân.

Người vận hành không được sửa công thức G1, không được sửa tỷ lệ, không được thêm/bỏ nguyên liệu trong sản xuất thường.

**1.4. Click chọn chỉ áp dụng ở nơi được phép**

Click chọn được phép tại:

1.  Chọn SKU trong Demand / Production Plan.

2.  Chọn supplier/company source trong phiếu nhập đầu vào.

3.  Chọn nguyên liệu từ Material Master khi nhập nguyên liệu ngoài.

4.  Chọn kho/location từ Warehouse Registry.

5.  Chọn nhân sự từ Personnel Registry.

6.  Chọn máy in từ Printer Registry nếu có.

7.  Chọn trạng thái đánh giá/QC từ danh mục trạng thái.

Click chọn không được dùng để thay công thức ở bước sản xuất.

**1.5. Tự hiện công thức là bắt buộc**

Khi lập lệnh sản xuất, hệ thống phải tự hiện:

1.  G1 Approved Operational Formula.

2.  anchor_rice_quantity.

3.  Production BOM Snapshot.

4.  Danh sách nguyên liệu.

5.  Tỷ lệ theo gạo.

6.  Số lượng đã scale.

7.  Đơn vị.

8.  Nhóm A1/A2/A3.

9.  Lot tracking requirement.

10. QC-before-issue requirement.

Không được để lệnh sản xuất hiển thị công thức dạng nhóm mơ hồ.

**1.6. MISA không điều khiển vận hành**

MISA chỉ nhận checkpoint hợp lệ.

MISA không được điều khiển:

1.  Công thức.

2.  Lệnh sản xuất.

3.  MRP.

4.  Thu mua.

5.  Thu hoạch.

6.  QC.

7.  Readiness.

8.  Traceability.

9.  Recall.

10. Sale Lock.

Hệ Ginsengfood giữ operational truth; MISA giữ accounting truth chính thức.

**2. FORM REGISTRY — DANH MỤC PHIẾU CHUẨN**

**2.1. Nhóm kế hoạch / demand / MRP**

| **Mã phiếu** | **Tên phiếu**                                       | **Vai trò**                                   |
|--------------|-----------------------------------------------------|-----------------------------------------------|
| FRM-01       | Phiếu kế hoạch / nhu cầu sản xuất                   | Ghi nhận nhu cầu trước Demand Board           |
| FRM-02       | Production Demand Board Record                      | Chuẩn hóa demand, shortage, priority          |
| FRM-03       | Formula Resolution / Production BOM Snapshot Record | Resolve G1, anchor gạo, snapshot công thức    |
| FRM-04       | MRP Run / Material Requirement Board                | Tính nhu cầu nguyên liệu/vật tư               |
| FRM-05       | Procurement Suppression Result                      | Loại vật tư đủ/vượt ngưỡng khỏi phiếu thu mua |

**2.2. Nhóm thu mua / thu hoạch / nhập nguyên liệu**

| **Mã phiếu** | **Tên phiếu**                                  | **Vai trò**                           |
|--------------|------------------------------------------------|---------------------------------------|
| FRM-06       | Phiếu yêu cầu mua nguyên liệu / vật tư         | Procurement Requirement, chưa phải PO |
| FRM-07       | Phiếu yêu cầu thu hoạch Sâm Savigin            | Company Source Harvest Requirement    |
| FRM-08       | Phiếu yêu cầu mua bao bì / vật tư đóng gói     | Packaging Procurement Requirement     |
| FRM-09       | Phiếu đánh giá và nhập kho nguyên liệu đầu vào | Raw Material Intake                   |
| FRM-10       | Phiếu nhập bao bì / vật tư đóng gói            | Packaging Intake                      |

**2.3. Nhóm sản xuất / cấp nguyên liệu**

| **Mã phiếu** | **Tên phiếu**                                           | **Vai trò**                        |
|--------------|---------------------------------------------------------|------------------------------------|
| FRM-11       | Lệnh sản xuất                                           | Hồ sơ sản xuất gốc                 |
| FRM-12       | Phiếu đề nghị cấp nguyên liệu cho sản xuất              | Tự hiện nguyên liệu theo snapshot  |
| FRM-13       | Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất | Khóa lot được dùng                 |
| FRM-14       | Phiếu kế toán xuất nguyên liệu cho sản xuất             | Hạch toán giá trị xuất nguyên liệu |

**2.4. Nhóm hiện trường sản xuất**

| **Mã phiếu** | **Tên phiếu**                           | **Vai trò**                       |
|--------------|-----------------------------------------|-----------------------------------|
| FRM-15       | Phiếu check-in / check-out nhân sự      | Tính nhân công, trace nhân sự     |
| FRM-16       | Phiếu theo dõi sơ chế                   | Theo dõi đầu vào, đầu ra, hao hụt |
| FRM-17       | Phiếu kiểm chất lượng sau sấy thăng hoa | Kiểm % độ ẩm và cảm quan          |
| FRM-18       | Phiếu theo dõi đóng gói cấp 1           | Gói/lọ/hũ, không tạo inventory    |
| FRM-19       | Phiếu theo dõi đóng gói cấp 2           | Hộp/thùng, in QR/barcode          |
| FRM-20       | Phiếu QC thành phẩm                     | Chốt đạt/không đạt trước release  |
| FRM-21       | Phiếu Batch Release                     | Release batch, tách riêng QC_PASS |
| FRM-22       | Lệnh nhập kho thành phẩm                | Warehouse Receipt Confirmed       |

**2.5. Nhóm hủy / MISA / evidence**

| **Mã phiếu** | **Tên phiếu**                                            | **Vai trò**             |
|--------------|----------------------------------------------------------|-------------------------|
| FRM-23       | Phiếu yêu cầu hủy / ghi giảm nguyên liệu, bao bì, vật tư | Disposal Request        |
| FRM-24       | Phiếu ghi giảm tồn kho / Inventory Write-off             | Ledger write-off        |
| FRM-25       | MISA Accounting Handoff Record                           | Checkpoint đồng bộ MISA |
| FRM-26       | Operational Evidence Packet                              | Gom evidence toàn chuỗi |
| FRM-27       | Operational Smoke Run Record                             | Kiểm thử end-to-end     |

**3. QUY TẮC TỰ SINH PHIẾU**

**3.1. Từ Production Demand**

Từ Production Demand hợp lệ, hệ thống được phép tạo:

1.  Production Demand Board Record.

2.  Formula Resolution Record.

3.  MRP Run.

4.  Material Requirement Board.

Không được tạo Production Order trực tiếp từ Demand.

**3.2. Từ MRP Run**

Từ MRP Run, hệ thống được phép tạo:

1.  Procurement Suppression Result.

2.  Procurement Requirement nếu thiếu thật và không bị suppressed.

3.  Harvest Requirement nếu là Sâm Savigin theo Company Source policy.

4.  Packaging Procurement Requirement nếu thiếu B1/B2/B3.

5.  Blocker nếu thiếu config, thiếu stock, bị hold/recall/disposal.

MRP không tự tạo Purchase Order.

**3.3. Từ Lệnh sản xuất**

Từ Lệnh sản xuất đã được duyệt, hệ thống tự sinh nháp:

1.  Phiếu đề nghị cấp nguyên liệu.

2.  Phiếu check-in / check-out.

3.  Phiếu theo dõi sơ chế.

4.  Phiếu kiểm chất lượng sau sấy.

5.  Phiếu đóng gói cấp 1.

6.  Phiếu đóng gói cấp 2.

7.  Phiếu QC thành phẩm.

8.  Phiếu Batch Release.

9.  Lệnh nhập kho thành phẩm.

10. Phiếu kế toán xuất nguyên liệu cho sản xuất.

**3.4. Từ Phiếu nhập nguyên liệu đầu vào**

Khi nguyên liệu được intake và QC/readiness đạt, hệ thống cho phép:

1.  Tạo Raw Material Lot.

2.  Chuyển READY_FOR_PRODUCTION.

3.  Cho lot tham gia phiếu chấp thuận nguyên liệu.

4.  Cho Material Issue nếu lệnh sản xuất đủ điều kiện.

**3.5. Từ Phiếu hủy**

Khi có Disposal Request được duyệt, hệ thống cho phép:

1.  Disposal Execution.

2.  Inventory Ledger Write-off.

3.  Accounting/MISA handoff nếu có giá trị kế toán.

4.  Cập nhật tồn mới cho MRP/Stock Alert.

Không được xóa tay tồn kho.

**4. CẤU TRÚC CHUNG MỌI PHIẾU**

Mọi phiếu trong bộ này phải có 6 khối:

**A. Thông tin chung**

Tối thiểu gồm:

1.  Mã phiếu.

2.  Loại phiếu.

3.  Ngày lập.

4.  Người lập.

5.  Bộ phận.

6.  Trạng thái phiếu.

7.  Source object liên quan.

8.  Correlation ID.

9.  Audit reference.

**B. Dữ liệu nghiệp vụ chi tiết**

Tùy phiếu, gồm:

1.  SKU.

2.  Công thức.

3.  Version.

4.  Material.

5.  Lot.

6.  Quantity.

7.  Unit.

8.  Warehouse/location.

9.  QC result.

10. Readiness status.

11. Accounting value nếu có.

**C. Bằng chứng / Evidence**

Tùy phiếu, gồm:

1.  Ảnh.

2.  Video.

3.  File đo.

4.  Hóa đơn/phiếu giao.

5.  Biên bản.

6.  Log in.

7.  Scan result.

8.  MISA sync log.

**D. Xác nhận tham gia**

Tối thiểu gồm:

| **Vai trò** | **Họ tên** | **Bộ phận** | **Trạng thái xác nhận** | **Thời gian xác nhận** | **Ghi chú** |
|-------------|------------|-------------|-------------------------|------------------------|-------------|

Không đủ xác nhận bắt buộc thì không chuyển bước.

**E. Kết luận / Quyết định**

Ví dụ:

1.  Cho đi tiếp.

2.  Chờ xử lý.

3.  Hold.

4.  Reject.

5.  Cho nhập kho.

6.  Chưa cho nhập kho.

7.  Cho release.

8.  Không release.

9.  Cho write-off.

10. Không cho write-off.

**F. Ngõ kế toán / MISA nếu có**

Tùy phiếu, gồm:

1.  Đơn giá.

2.  Thành tiền.

3.  Giá trị hao hụt.

4.  Giá trị hủy.

5.  Giá trị xuất kho.

6.  Giá trị nhập kho.

7.  Đối tượng tập hợp chi phí.

8.  Mã mapping MISA.

9.  Trạng thái sync.

10. Reconcile status.

**5. CHI TIẾT BỘ PHIẾU CHUẨN**

**FRM-01 — PHIẾU KẾ HOẠCH / NHU CẦU SẢN XUẤT**

**A. Thông tin chung**

1.  Mã phiếu kế hoạch.

2.  Kỳ kế hoạch.

3.  Ngày lập.

4.  Người lập.

5.  Nguồn nhu cầu.

6.  Bộ phận đề xuất.

7.  Trạng thái kế hoạch.

8.  Evidence reference.

9.  Audit reference.

**B. Nguồn nhu cầu**

| **Nguồn**          | **Có/Không** | **Tham chiếu** |
|--------------------|--------------|----------------|
| Tồn kho thấp       |              |                |
| Kế hoạch bán hàng  |              |                |
| ADS campaign       |              |                |
| Giờ Vàng           |              |                |
| CRM                |              |                |
| Dealer order       |              |                |
| Distributor order  |              |                |
| Forecast điều hành |              |                |

**C. Danh sách SKU cần xét**

| **STT** | **SKU** | **Tên sản phẩm** | **Số lượng nhu cầu** | **Tồn hiện tại** | **Tồn khả dụng** | **Thiếu hụt** | **Priority** | **Ghi chú** |
|---------|---------|------------------|----------------------|------------------|------------------|---------------|--------------|-------------|

**D. Kết luận**

1.  Đưa vào Demand Board.

2.  Không cần sản xuất vì tồn đủ.

3.  Chờ owner review.

4.  Blocked.

**FRM-02 — PRODUCTION DEMAND BOARD RECORD**

**A. Thông tin chung**

1.  demand_id.

2.  demand_source.

3.  sku_id.

4.  requested_quantity.

5.  requested_date.

6.  priority.

7.  demand_reason.

8.  linked_sales_plan.

9.  linked_dealer_order.

10. linked_distributor_order.

11. planning_status.

12. owner_review_status.

**B. Kiểm tra tồn thành phẩm**

| **SKU** | **Current stock** | **Available stock** | **Reserved** | **Hold** | **Recall/Sale Lock** | **Shortage** |
|---------|-------------------|---------------------|--------------|----------|----------------------|--------------|

**C. Formula check**

| **SKU** | **G1 Formula** | **Formula status** | **Anchor policy** | **BOM snapshot required** | **Kết quả** |
|---------|----------------|--------------------|-------------------|---------------------------|-------------|

**D. Demand Guard**

| **Guard**                | **PASS/BLOCK** | **Lý do** |
|--------------------------|----------------|-----------|
| SKU_CANONICAL_GUARD      |                |           |
| G1_FORMULA_GUARD         |                |           |
| STOCK_AVAILABILITY_GUARD |                |           |
| SALE_LOCK_GUARD          |                |           |
| RECALL_GUARD             |                |           |
| EVIDENCE_GUARD           |                |           |

**E. Kết luận**

1.  Chuyển Formula Resolution.

2.  Chuyển MRP.

3.  Fulfillment từ kho.

4.  Blocked.

5.  Cần Giám đốc phê duyệt.

**FRM-03 — FORMULA RESOLUTION / PRODUCTION BOM SNAPSHOT RECORD**

**A. Thông tin chung**

1.  formula_resolution_id.

2.  demand_id.

3.  sku_id.

4.  formula_version.

5.  formula_status.

6.  anchor_ingredient.

7.  anchor_rice_quantity.

8.  production_bom_snapshot_id.

9.  calculation_snapshot_id.

10. Người tạo snapshot.

11. Thời điểm tạo.

**B. Công thức G1 đã khóa**

| **STT** | **Mã nguyên liệu** | **Tên nguyên liệu** | **Nhóm A** | **ratio_to_rice** | **Đơn vị** | **UOM policy** | **Rounding policy** |
|---------|--------------------|---------------------|------------|-------------------|------------|----------------|---------------------|

**C. Kết quả scale theo anchor_rice_quantity**

| **STT** | **Mã nguyên liệu** | **Tên nguyên liệu** | **Số lượng đã tính** | **Đơn vị** | **Số trước làm tròn** | **Số sau làm tròn** | **Ghi chú** |
|---------|--------------------|---------------------|----------------------|------------|-----------------------|---------------------|-------------|

**D. Guard**

| **Guard**            | **Kết quả** | **Lý do** |
|----------------------|-------------|-----------|
| G1_FORMULA_GUARD     |             |           |
| ANCHOR_POLICY_GUARD  |             |           |
| UOM_GUARD            |             |           |
| DENSITY_POLICY_GUARD |             |           |
| SNAPSHOT_GUARD       |             |           |

**E. Kết luận**

1.  Formula resolved.

2.  Snapshot created.

3.  Blocked.

4.  Cần owner review.

**FRM-04 — MRP RUN / MATERIAL REQUIREMENT BOARD**

**A. Thông tin chung**

1.  mrp_run_id.

2.  demand_batch_id.

3.  planning_period.

4.  sku_list.

5.  formula_snapshot_reference.

6.  yield_snapshot_reference.

7.  stock_snapshot_reference.

8.  Người chạy MRP.

9.  Thời điểm chạy.

**B. Nhu cầu nguyên liệu Nhóm A**

| **STT** | **Material ID** | **Tên nguyên liệu** | **A1/A2/A3** | **Gross requirement** | **Buffer %** | **Buffered requirement** | **Available** | **Incoming approved** | **Net requirement** |
|---------|-----------------|---------------------|--------------|-----------------------|--------------|--------------------------|---------------|-----------------------|---------------------|

**C. Nhu cầu bao bì / vật tư Nhóm B**

| **STT** | **Material ID** | **Tên vật tư** | **B1/B2/B3** | **Output basis** | **Buffer %** | **Requirement** | **Available** | **Incoming** | **Net requirement** |
|---------|-----------------|----------------|--------------|------------------|--------------|-----------------|---------------|--------------|---------------------|

**D. Dynamic Threshold**

| **Material** | **Threshold type** | **Threshold value** | **Available + Incoming** | **Suppression result** |
|--------------|--------------------|---------------------|--------------------------|------------------------|

**E. Kết luận**

1.  Covered by stock.

2.  Covered by incoming.

3.  Procurement allowed for review.

4.  Procurement suppressed.

5.  Harvest policy required.

6.  Blocked config missing.

7.  Director approval required.

**FRM-05 — PROCUREMENT SUPPRESSION RESULT**

**A. Thông tin chung**

1.  suppression_result_id.

2.  mrp_run_id.

3.  material_requirement_id.

4.  material_id.

5.  material_group.

6.  threshold_type.

7.  dynamic_suppression_threshold.

8.  suppression_check_quantity.

9.  suppression_status.

10. suppression_reason.

**B. Bảng kết quả**

| **STT** | **Material** | **Nhóm** | **Available** | **Incoming** | **Threshold** | **Kết quả** | **Hành động** |
|---------|--------------|----------|---------------|--------------|---------------|-------------|---------------|

**C. Kết luận**

1.  Loại khỏi phiếu thu mua.

2.  Cho vào danh mục xét mua.

3.  Chờ owner review.

4.  Cần Giám đốc phê duyệt.

5.  Blocked.

**FRM-06 — PHIẾU YÊU CẦU MUA NGUYÊN LIỆU / VẬT TƯ**

**A. Thông tin chung**

1.  Mã phiếu yêu cầu mua.

2.  MRP run reference.

3.  Material Requirement reference.

4.  Ngày lập.

5.  Người lập.

6.  Bộ phận đề xuất.

7.  Trạng thái.

8.  Supplier/source đề xuất.

**B. Danh sách nguyên liệu / vật tư được phép xét mua**

| **STT** | **Mã vật tư** | **Tên vật tư** | **Nhóm** | **Số lượng đề xuất** | **Đơn vị** | **Threshold status** | **Supplier** | **Ghi chú** |
|---------|---------------|----------------|----------|----------------------|------------|----------------------|--------------|-------------|

**C. Kiểm soát không mua thừa**

| **Chỉ tiêu**                      | **Kết quả** |
|-----------------------------------|-------------|
| MRP đã chạy                       | Có / Không  |
| Dynamic Threshold đã tính         | Có / Không  |
| Không bị Procurement Suppressed   | Có / Không  |
| Supplier Allowlist đạt            | Có / Không  |
| Owner review                      | Có / Không  |
| Director approval nếu vượt ngưỡng | Có / Không  |

**D. Kết luận**

1.  Được chuyển Purchase Request.

2.  Chờ owner review.

3.  Bị loại khỏi mua.

4.  Blocked.

**FRM-07 — PHIẾU YÊU CẦU THU HOẠCH SÂM SAVIGIN**

**A. Thông tin chung**

1.  harvest_requirement_id.

2.  company_source_id.

3.  Vùng trồng.

4.  Kỳ thu hoạch.

5.  Ngày dự kiến.

6.  Người đề xuất.

7.  Owner phụ trách.

8.  Trạng thái harvest.

**B. Thông tin tồn Sâm**

| **Chỉ tiêu**                | **Số lượng** | **Đơn vị** | **Ghi chú** |
|-----------------------------|--------------|------------|-------------|
| Tồn Sâm hiện tại            |              |            |             |
| READY_FOR_PRODUCTION stock  |              |            |             |
| Strategic reserve stock     |              |            |             |
| Production safety threshold |              |            |             |
| Forecast demand             |              |            |             |

**C. Lý do thu hoạch**

1.  Đến kỳ thu hoạch.

2.  Bổ sung strategic reserve.

3.  Production stock low.

4.  Forecast thiếu.

5.  Owner quyết định theo mùa vụ.

**D. Kết luận**

1.  Cho lập Harvest Plan.

2.  Chờ owner review.

3.  Hoãn thu hoạch.

4.  Cảnh báo aging/overstock.

5.  Blocked.

**FRM-08 — PHIẾU YÊU CẦU MUA BAO BÌ / VẬT TƯ ĐÓNG GÓI**

**A. Thông tin chung**

1.  packaging_requirement_id.

2.  MRP run reference.

3.  SKU.

4.  B1/B2/B3.

5.  Nhà cung cấp đề xuất.

6.  Ngày cần hàng.

7.  Lead time.

8.  Người lập.

**B. Danh sách vật tư**

| **STT** | **Mã vật tư** | **Tên vật tư** | **B1/B2/B3** | **SKU** | **Số lượng đề xuất** | **Đơn vị** | **Threshold** | **Kết quả** |
|---------|---------------|----------------|--------------|---------|----------------------|------------|---------------|-------------|

**C. Kết luận**

1.  Được xét mua.

2.  Bị loại khỏi phiếu mua vì tồn đủ/vượt ngưỡng.

3.  Cần Giám đốc phê duyệt.

4.  Blocked.

**FRM-09 — PHIẾU ĐÁNH GIÁ VÀ NHẬP KHO NGUYÊN LIỆU ĐẦU VÀO**

**A. Thông tin chung**

1.  Mã phiếu nhập.

2.  Ngày nhập.

3.  Giờ nhập.

4.  Địa điểm nhận.

5.  Kho nhập.

6.  Vị trí kho.

7.  Người tiếp nhận.

8.  Bộ phận tiếp nhận.

9.  Source type: SUPPLIER_SOURCE / COMPANY_SOURCE.

10. Supplier ID hoặc Company Source ID.

**B. Thông tin nguồn**

| **Trường**                   | **Nội dung** |
|------------------------------|--------------|
| Supplier / Company Source    |              |
| Người giao / đội thu hoạch   |              |
| Phương tiện                  |              |
| Biển số / mã vận chuyển      |              |
| Purchase / Harvest reference |              |
| Evidence nguồn               |              |

**C. Danh sách nguyên liệu nhập**

| **STT** | **Mã NL** | **Tên nguyên liệu** | **Nhóm** | **Số lượng giao** | **Đơn vị** | **Tình trạng ban đầu** | **Kết quả đánh giá** | **Đề xuất xử lý** |
|---------|-----------|---------------------|----------|-------------------|------------|------------------------|----------------------|-------------------|

Đơn vị cho phép: kg, lít, ml.

**D. Khối hạch toán nhập kho**

| **STT** | **Mã NL** | **Số lượng đạt nhập** | **Đơn vị** | **Đơn giá nhập** | **Thành tiền** | **Giá trị hư hỏng** | **Đơn giá bình quân sau nhập** |
|---------|-----------|-----------------------|------------|------------------|----------------|---------------------|--------------------------------|

**E. Kết luận**

1.  Cho nhập kho toàn bộ.

2.  Cho nhập kho một phần.

3.  Không cho nhập kho.

4.  Chờ QC.

5.  Chờ owner review.

**FRM-10 — PHIẾU NHẬP BAO BÌ / VẬT TƯ ĐÓNG GÓI**

**A. Thông tin chung**

1.  packaging_intake_id.

2.  Nhà cung cấp.

3.  Ngày nhận.

4.  Kho nhận.

5.  Vị trí.

6.  Người nhận.

7.  Purchase reference.

8.  Packaging requirement reference.

**B. Danh sách bao bì / vật tư**

| **STT** | **Mã vật tư** | **Tên vật tư** | **B1/B2/B3** | **SKU/trade item** | **Số lượng nhận** | **Đơn vị** | **Tình trạng** | **Check result** |
|---------|---------------|----------------|--------------|--------------------|-------------------|------------|----------------|------------------|

**C. Packaging Check**

1.  Đúng SKU.

2.  Đúng thiết kế.

3.  Đúng quy cách.

4.  Đúng vùng in.

5.  Đúng trade item.

6.  Không lỗi in.

7.  Không rách/móp/hư.

8.  READY_FOR_PACKAGING nếu đạt.

**D. Kết luận**

1.  READY_FOR_PACKAGING.

2.  HOLD.

3.  REJECT.

4.  DISPOSAL_REQUESTED.

5.  RETURN_TO_SUPPLIER.

**FRM-11 — LỆNH SẢN XUẤT**

**A. Thông tin chung**

1.  Mã hồ sơ sản xuất gốc.

2.  Mã lệnh sản xuất.

3.  Demand reference.

4.  MRP reference.

5.  SKU.

6.  Tên sản phẩm.

7.  Nhóm sản phẩm.

8.  Vegan / mặn.

9.  Formula version.

10. anchor_rice_quantity.

11. Production BOM Snapshot ID.

12. Số lượng kế hoạch.

13. Đơn vị kế hoạch.

14. Ca sản xuất.

15. Bộ phận sản xuất.

16. Quản lý nhà máy.

**B. Công thức tự hiện**

Không được chọn tay nguyên liệu.

| **STT** | **Mã NL** | **Tên nguyên liệu** | **Nhóm A** | **ratio_to_rice** | **Số lượng đã scale** | **Đơn vị** | **Lot tracking** | **QC before issue** |
|---------|-----------|---------------------|------------|-------------------|-----------------------|------------|------------------|---------------------|

**C. Điều kiện mở lệnh**

| **Điều kiện**              | **Kết quả** |
|----------------------------|-------------|
| Demand Board đạt           | Có / Không  |
| Formula Resolution đạt     | Có / Không  |
| Production BOM Snapshot có | Có / Không  |
| MRP đạt                    | Có / Không  |
| Material readiness plan có | Có / Không  |
| Không Sale Lock / Recall   | Có / Không  |
| Owner approval             | Có / Không  |

**D. Kết luận**

1.  Mở lệnh sản xuất.

2.  Chưa mở.

3.  Blocked.

4.  Cần owner review.

**FRM-12 — PHIẾU ĐỀ NGHỊ CẤP NGUYÊN LIỆU CHO SẢN XUẤT**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  SKU.

5.  Formula version.

6.  Production BOM Snapshot ID.

7.  Kho xuất.

8.  Người đề nghị.

9.  Ngày đề nghị.

**B. Danh sách nguyên liệu cần cấp**

Tự hiện từ Production BOM Snapshot.

| **STT** | **Mã NL** | **Tên nguyên liệu** | **Nhóm A** | **Số lượng yêu cầu** | **Đơn vị** | **Lot yêu cầu** | **Ghi chú** |
|---------|-----------|---------------------|------------|----------------------|------------|-----------------|-------------|

**C. Giá trị tham chiếu kế toán**

| **STT** | **Mã NL** | **Số lượng yêu cầu** | **Đơn vị** | **Đơn giá bình quân** | **Giá trị dự kiến xuất** | **Ghi chú** |
|---------|-----------|----------------------|------------|-----------------------|--------------------------|-------------|

**D. Kết luận**

1.  Đồng ý cấp phát.

2.  Cấp thiếu.

3.  Chưa đồng ý cấp phát.

4.  Blocked do lot chưa ready.

**FRM-13 — PHIẾU CHẤP THUẬN NGUYÊN LIỆU ĐƯỢC PHÉP ĐƯA VÀO SẢN XUẤT**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  SKU.

5.  Production BOM Snapshot ID.

6.  Ngày chấp thuận.

7.  Người chấp thuận.

**B. Danh sách lot được duyệt**

| **STT** | **Mã NL** | **Tên nguyên liệu** | **Raw lot** | **READY status** | **Số lượng duyệt** | **Đơn vị** | **Kết quả** |
|---------|-----------|---------------------|-------------|------------------|--------------------|------------|-------------|

Chỉ lot READY_FOR_PRODUCTION mới được duyệt.

**C. Phiếu kế toán xuất đi kèm**

| **STT** | **Mã NL** | **Raw lot** | **Số lượng duyệt xuất** | **Đơn vị** | **Đơn giá bình quân** | **Thành tiền xuất** | **Hao hụt** | **Giá trị hao hụt** |
|---------|-----------|-------------|-------------------------|------------|-----------------------|---------------------|-------------|---------------------|

**D. Kết luận**

1.  Cho phép đưa vào sản xuất.

2.  Chưa cho phép.

3.  Hold.

4.  Blocked.

**FRM-14 — PHIẾU KẾ TOÁN XUẤT NGUYÊN LIỆU CHO SẢN XUẤT**

**A. Thông tin chung**

1.  Mã phiếu kế toán.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  SKU.

5.  Mẻ sản xuất.

6.  Ngày hạch toán.

7.  Cost center.

8.  MISA mapping status.

**B. Bảng hạch toán**

| **STT** | **Mã NL** | **Tên nguyên liệu** | **Raw lot** | **Số lượng xuất** | **Đơn vị** | **Đơn giá bình quân** | **Thành tiền** | **Hao hụt** | **Giá trị hao hụt** |
|---------|-----------|---------------------|-------------|-------------------|------------|-----------------------|----------------|-------------|---------------------|

**C. MISA handoff**

| **Trường**             | **Nội dung**                           |
|------------------------|----------------------------------------|
| Operational checkpoint | Material Issue confirmed               |
| Mapping MISA           | Có / Không                             |
| Sync status            | Not synced / Pending / Success / Error |
| Reconcile status       | Pending / Matched / Exception          |
| Error log              |                                        |

**D. Kết luận**

1.  Hạch toán nội bộ hoàn tất.

2.  Chờ mapping MISA.

3.  Chờ đồng bộ MISA.

4.  Lỗi đồng bộ.

5.  Reconciled.

**FRM-15 — PHIẾU CHECK-IN / CHECK-OUT NHÂN SỰ**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  Mẻ sản xuất.

5.  Công đoạn.

6.  Ca sản xuất.

7.  Ngày làm việc.

**B. Danh sách nhân sự**

| **STT** | **Mã nhân sự** | **Họ tên** | **Bộ phận** | **Vai trò** | **Check-in** | **Check-out** | **Tổng giờ** | **Đơn giá công** | **Chi phí phân bổ** |
|---------|----------------|------------|-------------|-------------|--------------|---------------|--------------|------------------|---------------------|

**C. Kết luận**

1.  Hoàn tất công đoạn.

2.  Chưa hoàn tất.

3.  Cần xác nhận bổ sung.

**FRM-16 — PHIẾU THEO DÕI SƠ CHẾ**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  SKU.

5.  Mẻ sản xuất.

6.  Người phụ trách.

7.  Thời gian bắt đầu.

8.  Thời gian kết thúc.

**B. Kết quả sơ chế**

| **STT** | **Loại bán thành phẩm / lô sơ chế** | **Số lượng đầu vào** | **Đơn vị** | **Số lượng sau sơ chế** | **Đơn vị** | **Hao hụt** | **Đánh giá** |
|---------|-------------------------------------|----------------------|------------|-------------------------|------------|-------------|--------------|

Đơn vị: khay, kg, lít.

**C. Kết luận**

1.  Đạt.

2.  Không đạt.

3.  Cần xử lý thêm.

4.  Hold.

**FRM-17 — PHIẾU KIỂM CHẤT LƯỢNG SAU SẤY THĂNG HOA**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  SKU.

5.  Formula version.

6.  Mẻ sản xuất.

7.  Ngày kiểm tra.

**B. Chỉ tiêu kiểm tra**

| **STT** | **Chỉ tiêu**                     | **Kết quả** | **Đơn vị** | **Đánh giá**       | **Ghi chú** |
|---------|----------------------------------|-------------|------------|--------------------|-------------|
| 1       | Số lượng bán thành phẩm kiểm tra |             | khay       |                    |             |
| 2       | Tỷ lệ độ ẩm                      |             | %          | PASS / HOLD / FAIL |             |
| 3       | Màu sắc cảm quan                 |             |            | Đạt / Không đạt    |             |
| 4       | Cấu trúc sau sấy                 |             |            | Đạt / Không đạt    |             |
| 5       | Mùi                              |             |            | Đạt / Không đạt    |             |
| 6       | Trạng thái bề mặt                |             |            | Đạt / Không đạt    |             |

**C. Quy tắc độ ẩm**

1.  Dưới 2%: PASS.

2.  Từ 2% đến 4%: HOLD / REVIEW.

3.  Trên 4%: FAIL.

**D. Kết luận**

1.  Đạt cho đóng gói.

2.  HOLD / REVIEW.

3.  Không đạt.

4.  Chờ xử lý.

**FRM-18 — PHIẾU THEO DÕI ĐÓNG GÓI CẤP 1**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  Batch.

5.  SKU.

6.  Đơn vị cấp 1.

7.  Người phụ trách.

**B. Kết quả đóng gói**

| **STT** | **Số lượng đầu vào** | **Đơn vị** | **Số lượng đạt** | **Đơn vị** | **Số lượng không đạt** | **Lý do không đạt** |
|---------|----------------------|------------|------------------|------------|------------------------|---------------------|

Đơn vị: gói, lọ, hũ.

**C. In cấp 1**

Chỉ in:

1.  NSX.

2.  HSD.

Không in barcode/QR cấp 1 nếu chưa có config.

**D. Kết luận**

1.  Đạt.

2.  Không đạt.

3.  Cần xử lý thêm.

**FRM-19 — PHIẾU THEO DÕI ĐÓNG GÓI CẤP 2**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  Batch.

5.  SKU.

6.  Packaging level: BOX / CARTON.

7.  Trade item ID nếu có.

8.  Người phụ trách.

**B. Kết quả đóng gói**

| **STT** | **Đơn vị** | **Số lượng đầu vào** | **Số lượng đầu ra** | **Số lượng không đạt** | **Lý do không đạt** |
|---------|------------|----------------------|---------------------|------------------------|---------------------|

Đơn vị: hộp, thùng, lọ, hũ.

**C. In cấp 2**

Phải in:

1.  Lô / batch.

2.  NSX.

3.  HSD.

4.  Barcode nếu áp dụng.

5.  QR nếu áp dụng.

**D. Print payload**

| **Trường**            | **Nội dung** |
|-----------------------|--------------|
| print_job_id          |              |
| print_payload_id      |              |
| template_id           |              |
| printer_id            |              |
| batch_id              |              |
| QR token              |              |
| barcode reference     |              |
| reprint reason nếu có |              |

**E. Kết luận**

1.  Đạt.

2.  Không đạt.

3.  Reprint required.

4.  Hold.

**FRM-20 — PHIẾU QC THÀNH PHẨM**

**A. Thông tin chung**

1.  Mã phiếu.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  Batch.

5.  SKU.

6.  Ngày kiểm tra.

7.  QC owner.

**B. Kết quả QC**

| **STT** | **Số lượng kiểm tra** | **Đơn vị** | **Số lượng đạt** | **Số lượng không đạt** | **Tỷ lệ đạt** | **Ghi chú** |
|---------|-----------------------|------------|------------------|------------------------|---------------|-------------|

Đơn vị: gói, lọ, hũ, hộp, thùng.

**C. Kết luận QC**

1.  QC_PASS.

2.  QC_HOLD.

3.  QC_REJECT.

4.  QC_RETEST_REQUIRED.

QC_PASS không đồng nghĩa RELEASED.

**FRM-21 — PHIẾU BATCH RELEASE**

**A. Thông tin chung**

1.  batch_release_id.

2.  batch_id.

3.  SKU.

4.  QC inspection reference.

5.  Release owner.

6.  Release date.

7.  Evidence reference.

8.  Audit reference.

**B. Điều kiện release**

| **Điều kiện**          | **Kết quả** |
|------------------------|-------------|
| QC thành phẩm đạt      | Có / Không  |
| Không hold             | Có / Không  |
| Không recall lock      | Có / Không  |
| Không disposal pending | Có / Không  |
| Packaging/print đạt    | Có / Không  |
| Evidence đủ            | Có / Không  |
| Owner approval         | Có / Không  |

**C. Kết luận**

1.  RELEASED.

2.  HOLD.

3.  REJECTED.

4.  BLOCKED.

**FRM-22 — LỆNH NHẬP KHO THÀNH PHẨM**

**A. Thông tin chung**

1.  warehouse_receipt_id.

2.  Mã hồ sơ sản xuất.

3.  Mã lệnh sản xuất.

4.  Batch.

5.  SKU.

6.  Kho nhập.

7.  Location.

8.  Người nhập.

9.  Thời gian nhập.

**B. Kết quả nhập kho**

| **STT** | **Trade item** | **Số lượng nhập** | **Đơn vị** | **Batch** | **HSD** | **Ghi chú** |
|---------|----------------|-------------------|------------|-----------|---------|-------------|

Đơn vị: hộp, thùng, lọ, hũ.

**C. Kiểm soát nhập kho**

| **Chỉ tiêu**              | **Kết quả** |
|---------------------------|-------------|
| Batch RELEASED            | Có / Không  |
| Scan inbound              | Có / Không  |
| Confirm receipt           | Có / Không  |
| Warehouse/location hợp lệ | Có / Không  |
| Inventory Ledger entry    | Có / Không  |
| MISA checkpoint           | Có / Không  |

**D. Kết luận**

1.  Cho nhập kho.

2.  Chưa cho nhập kho.

3.  Blocked.

Inventory chỉ tăng sau Warehouse Receipt Confirmed.

**FRM-23 — PHIẾU YÊU CẦU HỦY / GHI GIẢM NGUYÊN LIỆU, BAO BÌ, VẬT TƯ**

**A. Thông tin chung**

1.  disposal_request_id.

2.  Loại vật tư.

3.  Material / packaging material / batch.

4.  Lot.

5.  Kho/location.

6.  Người đề nghị.

7.  Ngày đề nghị.

8.  Lý do hủy.

**B. Danh sách vật tư đề nghị hủy**

| **STT** | **Mã vật tư** | **Tên vật tư** | **Lot** | **Số lượng** | **Đơn vị** | **Lý do** | **Tình trạng** |
|---------|---------------|----------------|---------|--------------|------------|-----------|----------------|

**C. Lý do hủy**

1.  QC_REJECT.

2.  EXPIRED.

3.  DAMAGED.

4.  OBSOLETE.

5.  Sai mẫu.

6.  Lỗi in.

7.  Recall / quality issue.

8.  Owner decision.

**D. Kết luận**

1.  Chờ QA review.

2.  Chờ owner approval.

3.  Approved.

4.  Rejected.

5.  Cần xử lý khác.

**FRM-24 — PHIẾU GHI GIẢM TỒN KHO / INVENTORY WRITE-OFF**

**A. Thông tin chung**

1.  write_off_id.

2.  disposal_request_id.

3.  material_id.

4.  lot_id.

5.  quantity.

6.  unit.

7.  warehouse_id.

8.  location_id.

9.  execution evidence.

10. accounting reference nếu có.

**B. Ghi giảm tồn kho**

| **STT** | **Material** | **Lot** | **Quantity write-off** | **Đơn vị** | **Giá trị kế toán** | **Ledger movement ID** |
|---------|--------------|---------|------------------------|------------|---------------------|------------------------|

**C. MISA handoff**

| **Trường**          | **Nội dung**                  |
|---------------------|-------------------------------|
| Accounting required | Có / Không                    |
| MISA mapping        | Có / Không                    |
| Sync status         | Pending / Success / Error     |
| Reconcile status    | Pending / Matched / Exception |

**D. Kết luận**

1.  INVENTORY_WRITTEN_OFF.

2.  ACCOUNTING_SYNC_PENDING.

3.  DISPOSAL_CLOSED.

4.  Blocked.

**FRM-25 — MISA ACCOUNTING HANDOFF RECORD**

**A. Thông tin chung**

1.  misa_handoff_id.

2.  operational_checkpoint_id.

3.  checkpoint_type.

4.  source_form_id.

5.  source_object_id.

6.  created_at.

7.  accounting_owner.

8.  sync_status.

**B. Checkpoint type**

| **Checkpoint**                   | **Nguồn dữ liệu**              |
|----------------------------------|--------------------------------|
| RAW_MATERIAL_INTAKE_APPROVED     | Phiếu nhập nguyên liệu         |
| MATERIAL_ISSUE_CONFIRMED         | Phiếu kế toán xuất nguyên liệu |
| DISPOSAL_WRITE_OFF_CONFIRMED     | Phiếu write-off                |
| FINISHED_GOODS_WAREHOUSE_RECEIPT | Lệnh nhập kho thành phẩm       |
| COSTING_CHECKPOINT               | Giá thành nội bộ nếu có        |
| SALES_REVENUE_CHECKPOINT         | Pack commerce/finance sau      |

**C. Mapping**

| **Đối tượng**     | **Mapping MISA** | **Trạng thái** |
|-------------------|------------------|----------------|
| Kho               |                  |                |
| Nguyên liệu       |                  |                |
| SKU/thành phẩm    |                  |                |
| Supplier          |                  |                |
| Cost center       |                  |                |
| Tài khoản kế toán |                  |                |

**D. Sync status**

1.  NOT_SYNCED.

2.  READY_TO_SYNC.

3.  SYNC_PENDING.

4.  SYNC_SUCCESS.

5.  SYNC_ERROR.

6.  RECONCILE_PENDING.

7.  RECONCILED.

8.  MANUAL_REVIEW_REQUIRED.

**FRM-26 — OPERATIONAL EVIDENCE PACKET**

**A. Thông tin chung**

1.  evidence_packet_id.

2.  production_order_id.

3.  batch_id.

4.  demand_id.

5.  mrp_run_id.

6.  warehouse_receipt_id.

7.  owner.

8.  status.

**B. Evidence list**

| **STT** | **Evidence type** | **Object** | **Object ID** | **File/link** | **Status** | **Ghi chú** |
|---------|-------------------|------------|---------------|---------------|------------|-------------|

**C. Evidence status**

1.  PENDING.

2.  SUBMITTED.

3.  ACCEPTED.

4.  REJECTED.

5.  NEED_MORE_INFO.

Không evidence accepted thì không PASS.

**FRM-27 — OPERATIONAL SMOKE RUN RECORD**

**A. Thông tin chung**

1.  smoke_run_id.

2.  Scope.

3.  Environment.

4.  Ngày chạy.

5.  Người chạy.

6.  Pack liên quan.

7.  Evidence packet.

8.  Kết quả.

**B. Smoke steps tối thiểu**

| **Step** | **Nội dung**                      | **PASS/FAIL** | **Evidence** |
|----------|-----------------------------------|---------------|--------------|
| 1        | Demand → Formula Resolution       |               |              |
| 2        | Formula → Production BOM Snapshot |               |              |
| 3        | MRP → Threshold → Suppression     |               |              |
| 4        | Procurement / Harvest             |               |              |
| 5        | Intake → QC → Readiness           |               |              |
| 6        | Production Order                  |               |              |
| 7        | Material Issue                    |               |              |
| 8        | Execution → Batch                 |               |              |
| 9        | Packaging / Printing              |               |              |
| 10       | QC → Release                      |               |              |
| 11       | Warehouse Receipt → Inventory     |               |              |
| 12       | MISA handoff                      |               |              |
| 13       | Disposal/write-off negative path  |               |              |
| 14       | Sale Lock / Recall suppression    |               |              |

**6. MISA BOUNDARY RULE**

**6.1. Phiếu có ngõ MISA bắt buộc**

| **Phiếu**                      | **Dữ liệu MISA**                                      |
|--------------------------------|-------------------------------------------------------|
| Phiếu nhập nguyên liệu đầu vào | Số lượng nhập, đơn giá, thành tiền, hư hỏng           |
| Phiếu kế toán xuất nguyên liệu | Số lượng xuất, đơn giá bình quân, thành tiền, hao hụt |
| Phiếu ghi giảm tồn kho         | Giá trị hủy/write-off                                 |
| Lệnh nhập kho thành phẩm       | Số lượng nhập, giá trị thành phẩm nếu đã tính         |
| Check-in/out nhân sự           | Chi phí nhân công nội bộ nếu áp dụng                  |
| Costing checkpoint             | Giá thành mẻ/SKU nếu áp dụng                          |

**6.2. Không có mapping thì không sync**

Nếu thiếu mapping MISA, trạng thái phải là:

**MISA_MAPPING_MISSING / SYNC_BLOCKED**

Không được sync chính thức.

**6.3. MISA không được sửa dữ liệu nguồn**

Nếu MISA reconcile phát hiện lệch, hệ thống tạo reconciliation issue.

Không được để MISA sửa ngược:

1.  Production Order.

2.  BOM Snapshot.

3.  Material Issue.

4.  QC.

5.  Inventory Ledger.

6.  Disposal.

7.  Warehouse Receipt.

**7. DONE GATE CHO BỘ PHIẾU**

Bộ phiếu đạt governance khi:

1.  Có đầy đủ form registry.

2.  Có phân biệt demand, MRP, procurement, harvest, intake, production, QC, warehouse, MISA.

3.  Lệnh sản xuất có anchor_rice_quantity và Production BOM Snapshot.

4.  Phiếu cấp nguyên liệu tự hiện theo snapshot, không chọn tay.

5.  Phiếu chấp thuận nguyên liệu khóa lot READY_FOR_PRODUCTION.

6.  Phiếu nhập nguyên liệu có ngõ kế toán.

7.  Phiếu kế toán xuất nguyên liệu tách khỏi phiếu xưởng.

8.  Phiếu hủy có Disposal / Write-off.

9.  MISA chỉ nhận checkpoint hợp lệ.

10. Mọi phiếu có evidence, audit, xác nhận cá nhân.

11. Không phiếu nào tự bypass PACK-01/02/03 guard.

12. Không gọi PASS khi thiếu evidence/smoke/owner sign-off.

**8. TRẠNG THÁI SAU BỘ PHIẾU**

| **Hạng mục**                         | **Trạng thái**          |
|--------------------------------------|-------------------------|
| Operational Forms Pack Documentation | GOVERNANCE_COMPLETE     |
| Demand / MRP Forms                   | LOCKED_IN_DOCUMENTATION |
| Formula Snapshot Forms               | LOCKED_IN_DOCUMENTATION |
| Procurement / Harvest Forms          | LOCKED_IN_DOCUMENTATION |
| Intake / QC / Readiness Forms        | LOCKED_IN_DOCUMENTATION |
| Production / Material Issue Forms    | LOCKED_IN_DOCUMENTATION |
| Packaging / Print Forms              | LOCKED_IN_DOCUMENTATION |
| Warehouse Receipt Form               | LOCKED_IN_DOCUMENTATION |
| Disposal / Write-off Forms           | LOCKED_IN_DOCUMENTATION |
| MISA Handoff Forms                   | LOCKED_IN_DOCUMENTATION |
| Evidence / Smoke Forms               | LOCKED_IN_DOCUMENTATION |
| Runtime Implementation               | PENDING_IMPLEMENTATION  |
| MISA Mapping                         | PENDING_MAPPING         |
| Evidence Packet                      | PENDING_EVIDENCE        |
| Smoke Run                            | PENDING_SMOKE           |
| Owner Sign-off                       | PENDING_OWNER_SIGNOFF   |
| Production Ready                     | NO                      |
| Release Approved                     | NO                      |
| Go-live Approved                     | NO                      |

**9. FINAL CONCLUSION**

Bộ phiếu vận hành + MISA của Ginsengfood được khóa theo nguyên tắc:

Không phiếu rời.  
Không nhập lại dữ liệu nền.  
Không chọn tay nguyên liệu ở sản xuất thường.  
Không sửa công thức G1.  
Không MRP thì không mua/thu hoạch/sản xuất.  
Không readiness thì không cấp phát.  
Không QC/release thì không nhập kho thành phẩm.  
Không Warehouse Receipt Confirmed thì không tăng inventory.  
Không write-off thì không giảm tồn hủy.  
Không mapping thì không sync MISA.  
Không evidence/smoke/owner sign-off thì không PASS.

Bản này đủ làm nền để viết tiếp **PACK-04** sau khi anh rà lại các form và quyết định có cần tách thành file riêng cho implementation hay không.
