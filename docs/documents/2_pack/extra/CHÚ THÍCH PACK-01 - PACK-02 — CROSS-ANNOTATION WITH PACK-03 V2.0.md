**PACK-01 / PACK-02 — CROSS-ANNOTATION WITH PACK-03 V2.0**

**OPERATIONAL–PRODUCT–FORMULA–MRP COMPATIBILITY NOTE**

**V1.0 CLEAN FINAL**

**1. MỤC TIÊU TÀI LIỆU**

Tài liệu này dùng để chú thích và khóa liên kết giữa:

1.  PACK-01 — Operational Core / Production / Warehouse / Inventory / Traceability / Recall / Sale Lock.

2.  PACK-02 — Product Master / SKU / Ingredient / Recipe / Formula Version / Product Activation.

3.  PACK-03 — Demand / MRP / Formula Scaling / Procurement / Stock Alert / Material & Packaging Control Pack — V2.0 Clean Final.

Tài liệu này không viết lại PACK-01.

Tài liệu này không viết lại PACK-02.

Tài liệu này không thay PACK-03.

Tài liệu này chỉ khóa cách đọc PACK-01 và PACK-02 sau khi PACK-03 V2.0 đã bổ sung các rule P0 mới về:

1.  Pilot-to-G1 Formula Scaling.

2.  Gạo làm anchor_ingredient.

3.  G1 Approved Operational Formula.

4.  Production BOM Snapshot từ công thức đã scale.

5.  Demand Board trước Production Order.

6.  MRP trước Procurement / Harvest / Production.

7.  Dynamic Threshold Resolver.

8.  Procurement Suppression Threshold.

9.  Sâm Savigin Strategic Reserve / Company Source Harvest Exception.

10. Material / Packaging Disposal & Write-off Control.

11. MISA checkpoint boundary.

**2. NGUYÊN TẮC ÁP DỤNG**

**2.1. PACK-01 và PACK-02 vẫn giữ hiệu lực**

PACK-01 và PACK-02 vẫn là tài liệu nền đã khóa.

Không viết lại PACK-01 / PACK-02 chỉ vì PACK-03 V2.0 phát sinh thêm lớp Demand / MRP / Formula Scaling.

Quy tắc đúng là:

PACK-01 giữ sự thật vận hành.  
PACK-02 giữ sự thật sản phẩm, SKU, công thức và cấu hình.  
PACK-03 giữ lớp kế hoạch nhu cầu, scale công thức, MRP, threshold, procurement suppression và readiness planning.

**2.2. PACK-03 V2.0 là lớp đọc bổ sung bắt buộc**

Từ thời điểm PACK-03 V2.0 được khóa, mọi phần trong PACK-01 / PACK-02 liên quan đến:

1.  Production Order.

2.  BOM Snapshot.

3.  Material Issue.

4.  Formula Version.

5.  MRP.

6.  Nguyên liệu.

7.  Bao bì.

8.  Thu mua.

9.  Thu hoạch Sâm.

10. Hủy vật tư.

11. Hạch toán MISA.

phải đọc cùng PACK-03 V2.0.

**2.3. Không cho dev tự suy luận giữa các pack**

Nếu có điểm giao giữa PACK-01, PACK-02 và PACK-03, dev không được tự chọn pack nào thắng.

Quy tắc ưu tiên:

1.  Product identity / SKU / Formula / BOM / Config → PACK-02.

2.  Demand / MRP / Formula Scaling / Threshold / Procurement Suppression → PACK-03.

3.  Production Order / Material Issue / QC / Release / Warehouse / Inventory / Trace / Recall / Sale Lock → PACK-01.

4.  Accounting sync / MISA checkpoint → chỉ qua integration boundary, không điều khiển nghiệp vụ nguồn.

**3. CHÚ THÍCH BỔ SUNG CHO PACK-01**

**3.1. Bổ sung vào PACK-01 — Document Control**

**3.1.1. Compatibility Note với PACK-03 V2.0**

PACK-01 phải được đọc cùng PACK-03 V2.0 trong các nghiệp vụ liên quan đến:

1.  Demand Board.

2.  Formula Scaling.

3.  Production BOM Snapshot.

4.  MRP.

5.  Dynamic Threshold.

6.  Procurement Suppression.

7.  Company Source Harvest.

8.  Material / Packaging Intake.

9.  Readiness.

10. Disposal / Write-off.

11. MISA checkpoint.

PACK-01 không tự tạo demand.

PACK-01 không tự tính MRP.

PACK-01 không tự quyết định nguyên liệu nào cần mua.

PACK-01 chỉ tiếp nhận các nghiệp vụ đã đạt điều kiện từ PACK-03 để phát hành Production Order, Material Issue, Intake, QC, Readiness, Warehouse Receipt, Inventory Ledger và Traceability theo đúng guard của Operational Core.

**3.2. Bổ sung vào PACK-01 — Product Truth Model**

**3.2.1. Product Truth phải bao gồm Formula Scaling Truth**

Từ PACK-03 V2.0, Product Truth không chỉ biết SKU dùng công thức/version nào, mà phải biết:

1.  Công thức G1 nào được dùng.

2.  Gạo có phải anchor_ingredient hay không.

3.  anchor_rice_quantity của lệnh sản xuất là bao nhiêu.

4.  Hệ thống đã scale nguyên liệu theo tỷ lệ nào.

5.  Production BOM Snapshot nào được tạo.

6.  MRP đã dùng snapshot nào để tính nguyên liệu.

7.  Material Issue đã cấp theo snapshot nào.

8.  Batch sau này trace về đúng snapshot nào.

Nếu thiếu Production BOM Snapshot từ G1 đã scale, Product Truth chưa đủ.

**3.2.2. Product Truth Chain cập nhật**

Chuỗi Product Truth chuẩn sau PACK-03 V2.0:

**Demand Board → Formula Resolution → G1 Approved Operational Formula → Anchor Rice Quantity → Production BOM Snapshot → MRP → Material Requirement Board → Procurement / Harvest / Intake / QC / Readiness → Production Order → Material Issue → Execution → Batch → Packaging → Print → QC → Release → Warehouse Receipt → Inventory Ledger → Trace → Recall → Sale Lock → Sellable Gate**

Không được đi thẳng từ G1 Formula sang Production Order nếu chưa qua Demand / MRP / Readiness planning.

**3.3. Bổ sung vào PACK-01 — OP-RCP Recipe / BOM Snapshot Domain**

**3.3.1. Recipe/BOM Snapshot phải tương thích Rice Anchor Formula**

PACK-01 hiện khóa BOM Snapshot là bắt buộc khi tạo Production Order. Từ PACK-03 V2.0, BOM Snapshot này phải được hiểu là:

Production BOM Snapshot được tạo từ G1 Approved Operational Formula sau khi hệ thống scale theo anchor_rice_quantity.

Snapshot phải lưu tối thiểu:

1.  sku_id.

2.  formula_version_id.

3.  G1 status.

4.  anchor_ingredient_id.

5.  anchor_rice_quantity.

6.  ratio_to_rice của từng nguyên liệu.

7.  calculated_quantity của từng nguyên liệu.

8.  unit_of_measure.

9.  rounding_policy.

10. yield_policy nếu có.

11. snapshot_created_at.

12. snapshot_created_by.

13. audit_reference.

14. evidence_reference.

**3.3.2. Field App không được sửa snapshot**

Field App chỉ được hiển thị Production BOM Snapshot.

Field App không được:

1.  Sửa nguyên liệu.

2.  Thêm nguyên liệu.

3.  Bỏ nguyên liệu.

4.  Sửa tỷ lệ.

5.  Sửa số lượng đã tính.

6.  Sửa đơn vị.

7.  Sửa buffer MRP.

8.  Sửa yield.

9.  Sửa G1.

Nếu cần đổi công thức, phải quay về PACK-02 Formula Version Control, không xử lý trong Field App.

**3.4. Bổ sung vào PACK-01 — OP-PRD Production Order Domain**

**3.4.1. Production Order chỉ được mở sau Demand / Formula / MRP Gate**

Production Order chính thức chỉ được phát hành khi đã có:

1.  Production Demand hợp lệ.

2.  Demand Board đã xử lý.

3.  Formula Resolution thành công.

4.  G1 Approved Operational Formula hợp lệ.

5.  anchor_rice_quantity nằm trong phạm vi cho phép.

6.  Production BOM Snapshot tạo được.

7.  MRP Run hoàn tất.

8.  Material Requirement Board có kết quả.

9.  Nguyên liệu/vật tư thiếu đã được xử lý theo procurement / harvest / readiness plan.

10. Không có blocker từ Sale Lock / Recall / Hold / QC / Readiness.

11. Owner approval đạt.

Production Order không được phát hành chỉ vì SKU có G1.

Production Order không được phát hành chỉ vì Sales / Dealer / Distributor có nhu cầu.

Production Order không được phát hành chỉ vì tồn thành phẩm thấp.

**3.4.2. Production Order phải ghi nguồn planning**

Production Order phải biết nó được tạo từ:

1.  Demand Board nào.

2.  MRP Run nào.

3.  Formula Resolution nào.

4.  Production BOM Snapshot nào.

5.  Material Requirement Board nào.

6.  Owner approval nào.

Nếu không truy được ngược các nguồn này, Production Order chưa đủ audit.

**3.5. Bổ sung vào PACK-01 — OP-MTI Material Issue / Material Receipt Domain**

**3.5.1. Material Issue phải theo Production BOM Snapshot đã scale**

Material Issue không được lấy nguyên liệu từ công thức gốc chưa scale.

Material Issue phải lấy từ:

1.  Production BOM Snapshot.

2.  MRP Result.

3.  Raw Material Lot READY_FOR_PRODUCTION.

4.  Material Approval Record.

5.  Inventory Ledger.

Nếu Production BOM Snapshot tính theo 30 kg gạo, phiếu cấp nguyên liệu phải dùng đúng số lượng đã scale theo 30 kg gạo, không dùng số lượng pilot 3 kg, không dùng số lượng G0, không dùng số lượng nhập tay.

**3.5.2. Buffer MRP không phải số lượng cấp phát mặc định**

Buffer +5% của Nhóm A là buffer planning/MRP.

Material Issue chỉ cấp theo số lượng sản xuất được duyệt trong Production BOM Snapshot, trừ khi có policy cấp dự phòng riêng được owner phê duyệt.

Không được tự cộng +5% vào số lượng cấp phát sản xuất nếu policy không cho phép.

**3.6. Bổ sung vào PACK-01 — OP-SRC Company Source / Supplier Source Domain**

**3.6.1. Sâm Savigin là Company Source theo mùa vụ**

Sâm Savigin không xử lý như nguyên liệu supplier.

PACK-01 phải đọc theo PACK-03 V2.0:

1.  Sâm Savigin là Company Source / vùng trồng công ty.

2.  Đến kỳ thu hoạch thì tạo Company Source Harvest Alert / Harvest Requirement.

3.  Harvest không phải Purchase Requirement.

4.  Sâm sau thu hoạch phải qua sơ chế, intake, QC, raw lot, readiness.

5.  Sâm READY_FOR_PRODUCTION trở thành Strategic Reserve Stock.

6.  MRP chỉ cảnh báo thiếu Sâm khi ready stock dưới ngưỡng an toàn sản xuất hoặc forecast thiếu.

**3.6.2. Sâm không bị chặn thu hoạch như hàng mua ngoài**

Procurement Suppression Threshold áp dụng cho hàng mua ngoài và vật tư mua ngoài.

Sâm Savigin không bị loại khỏi harvest cycle chỉ vì tồn kho hiện tại đủ cho sản xuất ngắn hạn.

Nếu tồn Sâm dự trữ quá cao, hệ thống đưa về Owner Review / Strategic Reserve Review, không tự hủy harvest cycle.

**3.7. Bổ sung vào PACK-01 — OP-RMI Raw Material Intake Domain**

**3.7.1. Intake phải phân biệt Supplier Delivery và Company Harvest**

Raw Material Intake phải biết nguồn đến từ:

1.  Supplier Delivery.

2.  Company Harvest.

3.  Internal Transfer nếu có.

4.  Return/Rework nếu có policy.

Với Sâm Savigin, intake phải gắn:

1.  company_source_id.

2.  harvest_requirement_id.

3.  harvest_plan_id nếu có.

4.  harvest_execution_id nếu có.

5.  harvest evidence.

6.  sơ chế evidence nếu có.

Với nguyên liệu supplier, intake phải gắn:

1.  supplier_id.

2.  purchase_requirement_id.

3.  purchase_order_id nếu có.

4.  delivery evidence.

5.  supplier evidence.

**3.7.2. Intake không tự pass QC**

Dù là Supplier Delivery hay Company Harvest, intake không tự tạo QC_PASS.

Sau intake phải qua Incoming QC và Readiness.

**3.8. Bổ sung vào PACK-01 — OP-RMQ Raw Material QC / Lot Readiness Domain**

**3.8.1. READY_FOR_PRODUCTION phải loại trừ Disposal**

Lot không được READY_FOR_PRODUCTION nếu:

1.  QC_REJECT.

2.  HOLD.

3.  EXPIRED.

4.  DAMAGED.

5.  OBSOLETE.

6.  DISPOSAL_REQUESTED.

7.  DISPOSAL_APPROVED.

8.  DISPOSAL_EXECUTED.

9.  INVENTORY_WRITTEN_OFF.

10. RECALL_LOCKED.

**3.8.2. QC_PASS chưa đủ nếu chưa Readiness**

QC_PASS vẫn phải qua readiness action.

Readiness phải xác nhận:

1.  Lot hợp lệ.

2.  usable_quantity \> 0.

3.  warehouse/location hợp lệ.

4.  không hold.

5.  không recall.

6.  không disposal pending.

7.  trace reference đầy đủ.

8.  evidence đầy đủ.

9.  audit đầy đủ.

**3.9. Bổ sung vào PACK-01 — OP-INV Inventory Ledger Domain**

**3.9.1. Hàng chờ hủy không tính tồn khả dụng**

Inventory Resolver phải loại khỏi available_stock:

1.  QC_REJECT.

2.  EXPIRED.

3.  DAMAGED.

4.  OBSOLETE.

5.  DISPOSAL_REQUESTED.

6.  DISPOSAL_APPROVED.

7.  DISPOSAL_EXECUTED.

8.  RECALL_LOCKED.

Nếu hàng đã hủy nhưng chưa Inventory Ledger Write-off, hệ thống vẫn không được tính là usable.

**3.9.2. Không xóa tay tồn kho**

Khi hủy nguyên liệu/vật tư/thành phẩm, không được delete hoặc sửa tay số tồn.

Luồng đúng:

**Disposal Request → QA / Owner Review → Disposal Approval → Disposal Execution → Inventory Ledger Write-off → Accounting / MISA Sync nếu cần → Disposal Close**

**3.10. Bổ sung vào PACK-01 — OP-MIS MISA Integration Boundary**

**3.10.1. MISA chỉ nhận checkpoint hợp lệ**

MISA chỉ nhận dữ liệu sau khi Operational checkpoint hợp lệ.

Các checkpoint liên quan PACK-03 V2.0 gồm:

1.  Raw Material Intake approved.

2.  Purchase Order nếu có.

3.  Phiếu kế toán xuất nguyên liệu cho sản xuất.

4.  Material Issue đã xác nhận.

5.  Disposal Write-off.

6.  Warehouse Receipt Confirmed.

7.  Finished Goods Inventory movement.

8.  Accounting cost checkpoint nếu có.

MISA không được điều khiển:

1.  Formula.

2.  Demand.

3.  MRP.

4.  Procurement Suppression.

5.  Harvest.

6.  QC.

7.  Readiness.

8.  Production Order.

9.  Material Issue.

10. Inventory Ledger nguồn.

**3.10.2. Không có mapping thì không sync chính thức**

Mọi sync sang MISA phải qua:

1.  MISA Mapping Registry.

2.  MISA Sync Eligibility.

3.  Sync status.

4.  Retry.

5.  Error log.

6.  Reconcile.

7.  Audit.

Không module nào sync MISA riêng lẻ.

**4. CHÚ THÍCH BỔ SUNG CHO PACK-02**

**4.1. Bổ sung vào PACK-02 — Product Master Principles**

**4.1.1. Product Master phải hỗ trợ Rice Anchor Formula**

PACK-02 phải đọc cùng PACK-03 V2.0 để bổ sung rằng công thức Ginsengfood có cơ chế:

1.  Gạo là anchor_ingredient.

2.  Pilot nhập kg/g/l/ml.

3.  Hệ thống tự tính ratio_to_rice.

4.  Pilot thành công được khóa thành G1.

5.  G1 dùng để scale theo anchor_rice_quantity.

6.  Production BOM Snapshot được tạo cho từng lệnh sản xuất.

Product Master không chỉ lưu danh sách nguyên liệu và quantity tĩnh, mà phải hỗ trợ cấu trúc tỷ lệ theo anchor.

**4.2. Bổ sung vào PACK-02 — G0 / G1 / Formula Version Principle**

**4.2.1. G0 / Pilot / G1 phải tách rõ hơn**

PACK-02 đã khóa G0 là lịch sử/công thức gốc nghiên cứu và G1 là công thức vận hành.

Sau PACK-03 V2.0, cần chú thích rõ:

| **Trạng thái**                  | **Ý nghĩa**                        | **Quyền chỉnh sửa**                                         |
|---------------------------------|------------------------------------|-------------------------------------------------------------|
| G0                              | Lịch sử / công thức gốc nghiên cứu | Không dùng trực tiếp cho sản xuất thường nếu chưa chuẩn hóa |
| Pilot Formula                   | Công thức thử nghiệm có kiểm soát  | Formula/R&D Owner được thêm/bỏ/sửa trong phạm vi pilot      |
| G1 Approved Operational Formula | Công thức vận hành đã phê duyệt    | Sản xuất không được sửa                                     |
| G2/G3/...                       | Version sau G1                     | Phải tạo version mới, owner approval, evidence, audit       |

**4.2.2. Sau G1, sản xuất không có quyền sửa công thức**

PACK-02 cần chú thích khóa:

Từ thời điểm Formula Version được phê duyệt thành G1 Approved Operational Formula, bộ phận sản xuất không được sửa công thức, không được thêm/bỏ nguyên liệu, không được sửa tỷ lệ, không được sửa đơn vị và không được sửa quantity đã được hệ thống tính.

Bộ phận sản xuất chỉ được nhập anchor_rice_quantity trong phạm vi batch policy.

**4.3. Bổ sung vào PACK-02 — Recipe / BOM Definition**

**4.3.1. BOM Line phải có ratio_to_rice hoặc usage_basis**

Mỗi BOM line trong công thức G1 phải có thêm các trường logic:

1.  anchor_ingredient_id.

2.  ratio_to_rice hoặc usage_basis.

3.  standardized_quantity.

4.  standardized_unit.

5.  UOM policy.

6.  density policy nếu là lít/ml cần quy đổi.

7.  rounding policy.

8.  scalable flag.

9.  fixed_quantity flag nếu có ngoại lệ.

10. calculation rule.

Nếu một nguyên liệu không scale theo gạo, BOM line phải ghi rõ usage_basis khác.

Không được để BOM line chỉ có quantity tĩnh nhưng không biết scale theo gì.

**4.3.2. Liquid material phải có UOM / density policy**

Nguyên liệu dạng lít/ml không được ép đổi sang kg nếu chưa có density config.

Nếu cần quy đổi để tính MRP/costing, phải có density policy.

Nếu thiếu density policy trong trường hợp bắt buộc, Formula Guard phải BLOCK.

**4.4. Bổ sung vào PACK-02 — Formula Approval Gate**

**4.4.1. Điều kiện approve G1 sau pilot**

Một công thức pilot chỉ được approve thành G1 khi có đủ:

1.  SKU canonical.

2.  Recipe Header.

3.  Ingredient canonical.

4.  Không có nguyên liệu mơ hồ.

5.  Gạo là anchor_ingredient.

6.  anchor_rice_quantity pilot rõ.

7.  ratio_to_rice của từng nguyên liệu rõ.

8.  UOM policy rõ.

9.  Density policy nếu cần.

10. Rounding policy rõ.

11. Yield policy nếu đã xác định.

12. Material group A1/A2/A3 rõ.

13. Dietary / allergen / trace / recall relevance rõ.

14. Owner approval.

15. Pilot evidence.

16. Audit.

Nếu thiếu các điều kiện trên, công thức không được khóa G1.

**4.5. Bổ sung vào PACK-02 — Snapshot Control**

**4.5.1. BOM Snapshot phải là Production BOM Snapshot đã scale**

PACK-02 hiện khóa BOM Snapshot là bắt buộc.

Sau PACK-03 V2.0, cần hiểu rõ BOM Snapshot trong sản xuất là:

Production BOM Snapshot = G1 Approved Operational Formula + anchor_rice_quantity + ratio_to_rice + UOM/rounding/yield policy + calculated quantity.

Snapshot không chỉ là copy của BOM gốc.

Snapshot là kết quả tính cho một lệnh sản xuất cụ thể.

**4.5.2. Snapshot phải bất biến**

Khi Production BOM Snapshot đã gắn Production Order, không được sửa.

Nếu cần thay đổi:

1.  Hủy draft nếu chưa duyệt.

2.  Tạo calculation snapshot mới nếu nhập sai anchor.

3.  Tạo Formula Version mới nếu công thức sai.

4.  Tạo correction/exception path nếu đã phát sinh sản xuất.

Không được chỉnh âm thầm snapshot.

**4.6. Bổ sung vào PACK-02 — Operational Config / Packaging Config**

**4.6.1. Packaging Config phải hỗ trợ Dynamic Packaging Yield**

PACK-02 phải chú thích rằng Packaging Config không chỉ lưu quy cách hộp/thùng, mà phải cung cấp dữ liệu cho PACK-03 tính:

1.  pack_output_per_batch.

2.  box_output_per_batch.

3.  carton_output_per_batch.

4.  units_per_box.

5.  boxes_per_carton.

6.  B1 buffer policy.

7.  B2 buffer policy.

8.  packaging material mapping B1/B2/B3.

Nếu sản lượng mẻ thay đổi sau pilot, B1/B2 threshold phải tự nhảy theo output mới.

Không được giữ cứng 7.200 gói, 1.800 hộp, 300 thùng nếu G1/Yield Policy xác nhận sản lượng khác.

**4.6.2. Packaging Config không tạo inventory**

Packaging Config chỉ cung cấp rule.

Inventory vẫn thuộc PACK-01.

MRP và threshold vẫn thuộc PACK-03.

**4.7. Bổ sung vào PACK-02 — Ingredient Canonical**

**4.7.1. Ingredient phải map được sang nhóm A/B của PACK-03**

Mỗi ingredient/material cần có khả năng map sang:

1.  A1 — Nguyên liệu Quân–Thần–Tá–Sứ.

2.  A2 — Nền dinh dưỡng / nước hầm / rau củ.

3.  A3 — Nêm & tạo hương vị.

4.  B1 — Bao bì cấp 1.

5.  B2 — Hộp/thùng cấp 2.

6.  B3 — Vật tư dùng chung.

Ingredient canonical không thay material grouping của PACK-03, nhưng phải đủ dữ liệu để PACK-03 phân nhóm đúng.

**4.7.2. Một material canonical có thể nhiều usage_role**

Ví dụ Táo tàu, Rong biển, Đậu xanh không vỏ có thể xuất hiện ở nhiều vai trò.

Không tạo trùng material.

Phải dùng một material canonical và tách usage_role trên BOM line.

Ngưỡng tồn/thu mua tính theo material canonical, không tính trùng theo usage_role.

**4.8. Bổ sung vào PACK-02 — Sâm Savigin Ingredient Boundary**

**4.8.1. Sâm Savigin phải có source_type = COMPANY_SOURCE**

PACK-02 đã khóa Sâm Savigin là ingredient canonical riêng.

Sau PACK-03 V2.0, cần chú thích thêm:

1.  Sâm Savigin là COMPANY_SOURCE.

2.  Không đưa vào Purchase Requirement như supplier material.

3.  Có Strategic Reserve Policy.

4.  Có Harvest Cycle Policy.

5.  MRP chỉ cảnh báo thiếu khi READY_FOR_PRODUCTION stock dưới production safety threshold hoặc forecast thiếu.

6.  Khi đến mùa vụ, harvest vẫn được xử lý qua Company Source Harvest Requirement.

Product Master không tự xác nhận lô Sâm đủ sản xuất. Readiness thuộc PACK-01 và PACK-03.

**4.9. Bổ sung vào PACK-02 — Product Activation Dependency**

**4.9.1. SKU không được active nếu thiếu Formula Scaling Config**

Một SKU không được Product Activation Ready nếu thiếu:

1.  G1 Approved Operational Formula.

2.  anchor_ingredient.

3.  ratio_to_rice lines.

4.  UOM policy.

5.  rounding policy.

6.  yield policy nếu cần đóng gói.

7.  A1/A2/A3 mapping.

8.  B1/B2/B3 mapping.

9.  Stock Policy.

10. MRP Config.

11. QC/HSD/Trace/Recall Config.

12. Evidence.

13. Smoke.

Nếu thiếu các cấu hình này, SKU chỉ có thể ở PENDING_CONFIG / PENDING_EVIDENCE, không được Ready/Active.

**5. BẢNG CROSS-ANNOTATION CHUẨN**

| **Chủ đề**           | **PACK-01 phải hiểu**                          | **PACK-02 phải hiểu**                 | **PACK-03 V2.0 owner**                |
|----------------------|------------------------------------------------|---------------------------------------|---------------------------------------|
| Gạo làm anchor       | Dùng snapshot đã scale trong Production Order  | Lưu anchor policy trong Formula/BOM   | Rice Anchor Formula Governance        |
| Pilot → G1           | Chỉ dùng G1 đã approved                        | Quản trị lifecycle G0/Pilot/G1        | Pilot-to-G1 Formula Scaling           |
| Sản xuất nhập kg gạo | Production Order nhận anchor quantity đã duyệt | Formula hỗ trợ scale theo anchor      | Formula Resolver                      |
| BOM Snapshot         | Snapshot bất biến theo lệnh                    | Snapshot từ G1 + ratio + UOM          | Production BOM Snapshot Lock          |
| MRP                  | Không phát Production Order nếu MRP chưa đạt   | Cung cấp BOM/config cho MRP           | MRP Runtime                           |
| Nhóm A threshold     | Material Issue dùng lượng theo snapshot        | Ingredient map A1/A2/A3               | Dynamic Threshold Resolver            |
| Nhóm B threshold     | Packaging chỉ dùng vật tư ready                | Packaging Config có yield output      | Dynamic Packaging Resolver            |
| Sâm Savigin          | Intake/QC/Lot/Readiness/Inventory              | Ingredient canonical + Company Source | Strategic Reserve / Harvest Exception |
| Supplier material    | Intake/QC/Lot/Readiness                        | Ingredient source policy              | Supplier Procurement                  |
| Disposal             | Ledger write-off, không xóa tay                | Material status không usable          | Disposal & Write-off Control          |
| MISA                 | Sync checkpoint hợp lệ                         | Không điều khiển sản phẩm             | Accounting handoff boundary           |

**6. DEV HANDOFF RULE SAU CHÚ THÍCH**

**6.1. Dev không được triển khai PACK-01/02 theo bản cũ nếu bỏ qua PACK-03 V2.0**

Khi triển khai các module thuộc PACK-01/02, dev phải kiểm tra có liên quan PACK-03 V2.0 hay không.

Nếu module có liên quan đến:

1.  Production Order.

2.  Formula.

3.  BOM.

4.  Material Issue.

5.  MRP.

6.  Procurement.

7.  Harvest.

8.  Stock.

9.  Packaging.

10. Disposal.

11. MISA.

thì bắt buộc đọc PACK-03 V2.0 trước khi thiết kế implementation.

**6.2. Không copy code rời rạc theo từng pack**

Một hệ thống thực tế không thể xây bằng cách copy vài đoạn code cho từng phiếu hoặc từng bảng.

Ví dụ chức năng “lệnh sản xuất” không chỉ là một form. Nó còn liên quan đến:

1.  SKU.

2.  G1 Formula.

3.  Anchor rice quantity.

4.  Production BOM Snapshot.

5.  MRP.

6.  Material Requirement.

7.  Lot readiness.

8.  Field App.

9.  QC.

10. Inventory.

11. MISA.

12. Traceability.

Nếu dev chỉ copy code form lệnh sản xuất mà không hiểu chuỗi này, hệ thống sẽ sai ngay từ lõi.

Người dùng chỉ cần mô tả nghiệp vụ và khóa rule. Dev chịu trách nhiệm thiết kế codebase đúng kiến trúc thật.

**7. DONE GATE CHO BẢN CHÚ THÍCH PACK-01 / PACK-02**

Bản chú thích này đạt khi:

1.  Đã xác định PACK-01/02 vẫn giữ hiệu lực.

2.  Đã xác định PACK-03 V2.0 là lớp bổ sung bắt buộc.

3.  Đã khóa điểm cần chú thích trong PACK-01.

4.  Đã khóa điểm cần chú thích trong PACK-02.

5.  Đã khóa Gạo là anchor_ingredient.

6.  Đã khóa Pilot → G1.

7.  Đã khóa sản xuất không được sửa G1.

8.  Đã khóa Production BOM Snapshot từ công thức đã scale.

9.  Đã khóa MRP / Dynamic Threshold / Procurement Suppression liên kết PACK-01.

10. Đã khóa Sâm Savigin Company Source / Strategic Reserve.

11. Đã khóa Disposal / Write-off.

12. Đã khóa MISA checkpoint boundary.

13. Đã khóa rằng không gọi Production Ready / Release Approved / Go-live Approved nếu chưa có evidence, smoke và owner sign-off.

**8. TRẠNG THÁI SAU BẢN CHÚ THÍCH**

| **Hạng mục**                                | **Trạng thái**          |
|---------------------------------------------|-------------------------|
| PACK-01 Cross-Annotation                    | LOCKED_IN_DOCUMENTATION |
| PACK-02 Cross-Annotation                    | LOCKED_IN_DOCUMENTATION |
| PACK-03 V2.0 Compatibility                  | LOCKED_IN_DOCUMENTATION |
| Rice Anchor Compatibility                   | LOCKED_IN_DOCUMENTATION |
| G1 Formula Lock Compatibility               | LOCKED_IN_DOCUMENTATION |
| Production BOM Snapshot Compatibility       | LOCKED_IN_DOCUMENTATION |
| MRP / Threshold Compatibility               | LOCKED_IN_DOCUMENTATION |
| Procurement Suppression Compatibility       | LOCKED_IN_DOCUMENTATION |
| Sâm Savigin Strategic Reserve Compatibility | LOCKED_IN_DOCUMENTATION |
| Disposal / Write-off Compatibility          | LOCKED_IN_DOCUMENTATION |
| MISA Checkpoint Compatibility               | LOCKED_IN_DOCUMENTATION |
| Runtime Implementation                      | PENDING_IMPLEMENTATION  |
| Evidence Packet                             | PENDING_EVIDENCE        |
| Smoke Run                                   | PENDING_SMOKE           |
| Owner Sign-off                              | PENDING_OWNER_SIGNOFF   |
| Production Ready                            | NO                      |
| Release Approved                            | NO                      |
| Go-live Approved                            | NO                      |

**9. FINAL CONCLUSION**

PACK-01 và PACK-02 không cần viết lại toàn bộ.

Tuy nhiên, từ khi PACK-03 V2.0 được khóa, PACK-01 và PACK-02 phải được đọc theo bản chú thích này để tránh hiểu thiếu về:

1.  Công thức neo gạo.

2.  Pilot-to-G1.

3.  G1 Production Formula Lock.

4.  Production BOM Snapshot đã scale.

5.  Demand Board trước Production Order.

6.  MRP trước Procurement / Harvest / Production.

7.  Dynamic Threshold.

8.  Procurement Suppression.

9.  Sâm Savigin Strategic Reserve.

10. Disposal & Write-off.

11. MISA checkpoint.

**Kết luận khóa cuối:**

PACK-01 giữ sự thật vận hành.  
PACK-02 giữ sự thật sản phẩm và công thức.  
PACK-03 V2.0 giữ sự thật kế hoạch nhu cầu, scale công thức, MRP, threshold, suppression, procurement/harvest planning và disposal control.  
Ba pack phải được triển khai như một chuỗi liên kết, không được tách rời, không được dev tự suy luận, không được hardcode, không được gọi PASS nếu chưa có evidence, smoke và owner sign-off.
