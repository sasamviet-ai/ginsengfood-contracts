# P1.2D - SKU EXTENSION SEED GOVERNANCE

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-02 SKU extension and seed governance.
- PACK-03 material and packaging dependency.
- TECH-02 Product seed boundary.
- APPENDICES material and packaging taxonomy.

## Noi Dung Rewrite

## 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE

## TÀI LIỆU QUẢN TRỊ MỞ RỘNG SKU / SEED DATA / MASTER DATA GOVERNANCE CHO PHASE 1

Global Gate Status: bị chặn
Completion Status: WAITING IMPLEMENTATION EVIDENCE
Production Readiness: KHONG
Go-live Decision: KHONG
Seed Authorization: KHONG, cho đến khi dữ liệu được chuẩn hóa và Owner xác nhận
Default Agent Mode: ANALYSIS ONLY

## PHẦN 1/4 - PHASE MARKER / PURPOSE / SOURCE-OF-TRUTH / SCOPE

## 1. PHASE MARKER

Tài liệu này thuộc nhóm:

## PHASE-01-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE

Đây là file đặc tả quản trị seed và mở rộng SKU cho Phase 1.

Tài liệu này thay thế toàn bộ nội dung cũ của:

## 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE.docx

Tài liệu này khóa cách quản trị các nhóm dữ liệu nền sau:

SKU baseline 20 sản phẩm.

SKU extension sau baseline.

Product master.

Ingredient canonical.

Ingredient alias.

## UOM.

UOM conversion.

Recipe line group.

Recipe / Formula seed.

G1 formula seed.

Anchor gạo.

Ratio_to_rice.

Packaging profile seed.

Material group A/B.

Source type.

Sâm Savigin Company Source.

MRP/procurement threshold ở mức dữ liệu nền/boundary.

Product activation seed boundary.

Seed idempotency.

Seed evidence.

Tài liệu này không cho phép seed ngay nếu dữ liệu chưa được Owner xác nhận.

## 2. HEADER

Trường

Nội dung

Tên tài liệu

## 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE

Phiên bản

Phase

Phase 1

Module

SKU Extension / Seed Governance

Loại tài liệu

Đặc tả quản trị seed và dữ liệu nền

Nguồn chính

Phase 1 clean documentation

Nguồn phụ trợ

nguồn tổng hợp TÀI LIỆU.docx

File điều phối trước

## README-PHASE-01-HANDOFF-INDEX V1.1

File công thức liên quan

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION V2.0

Checklist liên quan

## MASTER-DATA-NORMALIZATION-CHECKLIST-PHASE-01-02

Cho phép code ngay?

Không

Cho phép tạo seed script ngay?

Không

Cho phép seed dữ liệu thật ngay?

Không

Cho phép migration ngay?

Không

Mode mặc định cho Agent

## ANALYSIS ONLY

Gateway Status

bị chặn

Production Readiness

KHONG

## 3. PURPOSE - MỤC ĐÍCH TÀI LIỆU

Tài liệu này được viết lại để khóa toàn bộ quy tắc seed dữ liệu nền và mở rộng SKU trong Phase 1.

Lý do cần viết lại:

nguồn tổng hợp TÀI LIỆU.docx mở rộng nhiều dữ liệu vận hành thực tế có ảnh hưởng trực tiếp tới seed, gồm:

20 SKU baseline.

Công thức G1.

Anchor gạo.

Ratio_to_rice.

UOM kg/g/l/ml/gói/hộp/thùng.

Ingredient canonical và alias.

Material group A/B.

Bao bì B1/B2.

Ngưỡng tồn kho/loại khỏi phiếu thu mua.

Sâm Savigin là Company Source / strategic reserve.

Buffer +5% nhóm A và +7% nhóm B.

Packaging profile ảnh hưởng đóng gói, in, QR và threshold.

Seed không được tự mở trạng thái sellable/released/production-ready.

Nếu dữ liệu từ nguồn tổng hợp được seed trực tiếp mà chưa chuẩn hóa, hệ thống có thể lỗi từ gốc:

Sai SKU.

Sai công thức.

Sai UOM.

Sai tồn kho.

Sai nguyên liệu.

Sai packaging.

Sai threshold.

Sai source type.

Sai điều kiện sản xuất.

Sai điều kiện bán hàng.

Mục tiêu của tài liệu này:

Chỉ cho phép seed dữ liệu đã chuẩn hóa, có Owner xác nhận, có idempotency, có audit/evidence, và không tự mở bất kỳ trạng thái vận hành/bán hàng nào.

## 4. SOURCE-OF-TRUTH - NGUỒN SỰ THẬT

Tầng

Nguồn

Vai trò

Được dùng như thế nào

Không được dùng để làm gì

Tầng 0

MASTER Governance

Quy tắc quản trị cao nhất

Giữ nguyên tắc no-bypass, no-parallel-source, no-PASS-without-evidence

Không ghi đè bằng seed nhanh

Tầng 1

## README-PHASE-01-HANDOFF-INDEX V1.1

Điều phối Phase 1

Xác định phạm vi Phase 1 và boundary

Không thay thế file seed governance này

Tầng 2

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION V2.0

Nguồn chính cho Recipe/BOM/Formula

Là nguồn rule cho seed công thức

Không seed formula trái rule P1.2B

Tầng 3

Tài liệu P1.2D V1.1 này

Nguồn chính cho seed governance

Giao dev/Agent phân tích seed và SKU extension

Không tự cho phép seed/code

Tầng 4

## MASTER-DATA-NORMALIZATION-CHECKLIST

Kiểm soát dữ liệu trước seed/code

Xác định dữ liệu nào cần Owner confirm

Không thay thế Owner confirmation

Tầng 5

nguồn tổng hợp TÀI LIỆU.docx

Nguồn phụ trợ nghiệp vụ

Dùng để đối chiếu dữ liệu cần chuẩn hóa

Không seed trực tiếp

Tầng 6

Code/seed hiện tại

Hiện trạng triển khai

Dùng để gap analysis

Không là source-of-truth nếu conflict với tài liệu sạch

## 5. SCOPE IN - PHẠM VI BAO GỒM

Tài liệu này bao gồm:

Quy tắc seed SKU baseline.

Quy tắc mở rộng SKU mới sau baseline.

Quy tắc seed product master.

Quy tắc seed ingredient canonical.

Quy tắc seed ingredient alias.

Quy tắc seed UOM.

Quy tắc seed UOM conversion.

Quy tắc seed recipe line group.

Quy tắc seed recipe header.

Quy tắc seed formula header.

Quy tắc seed formula line.

Quy tắc seed G1 formula.

Quy tắc seed anchor gạo.

Quy tắc seed ratio_to_rice.

Quy tắc seed packaging profile.

Quy tắc seed material group A/B.

Quy tắc seed source type.

Quy tắc seed Sâm Savigin Company Source.

Quy tắc seed threshold ở mức dữ liệu nền.

Quy tắc seed product activation baseline.

Quy tắc seed idempotency.

Quy tắc no dirty seed.

Quy tắc no hardcode.

Quy tắc smoke/evidence cho seed.

## 6. SCOPE OUT - PHẠM VI KHÔNG BAO GỒM

Tài liệu này không bao gồm:

Không viết seed script thật.

Không viết migration thật.

Không viết code API.

Không viết DTO.

Không viết service.

Không viết UI.

Không viết worker.

Không triển khai Production Order.

Không triển khai Material Issue.

Không triển khai Raw Lot/QC thật.

Không triển khai Warehouse Ledger thật.

Không triển khai MRP/procurement full.

Không triển khai MISA integration thật.

Không triển khai print/QR runtime.

Không triển khai Commerce sellable gate thật.

Không triển khai AI Advisor runtime.

Không mở bán sản phẩm.

Không set SKU sellable mặc định.

Không set batch released.

Không set production-ready.

Không gọi Completion Decision.

Không gọi Gateway PASS.

Không gọi Production Readiness.

Không gọi Go-live Decision.

## 7. ĐỊNH NGHĨA THUẬT NGỮ

Thuật ngữ

Định nghĩa

Seed

Dữ liệu nền ban đầu được nạp vào hệ thống để vận hành module

Seed Governance

Bộ quy tắc kiểm soát dữ liệu nào được seed, seed khi nào, seed ra sao

Dirty Seed

Dữ liệu chưa chuẩn hóa, chưa Owner confirm, còn mơ hồ hoặc conflict

Idempotent Seed

Seed chạy lại nhiều lần không tạo trùng hoặc phá dữ liệu

SKU Baseline

20 SKU nền đã khóa cho Ginsengfood

SKU Extension

Quy trình thêm SKU mới sau baseline

Canonical

Dữ liệu chuẩn duy nhất

Alias

Tên gọi phụ trỏ về canonical

Owner Confirm

Xác nhận của chủ nghiệp vụ/chủ dự án trước khi seed/code

Active Baseline

Trạng thái dữ liệu nền đang dùng làm baseline, không đồng nghĩa sellable

Sellable

Được phép bán qua Commerce/AI/Gateway sau khi qua nhiều gate

Released

Trạng thái batch/thành phẩm đã được phê duyệt release

Production Readiness

Trạng thái sẵn sàng production/go-live, không thuộc quyền Phase 1 tự gọi

Company Source

Nguồn nguyên liệu do công ty chủ động sở hữu/quản trị, như Sâm Savigin

Strategic Reserve

Tồn kho dự trữ chiến lược, không xử lý như hàng mua ngoài thông thường

## PHẦN 2/4 - SEED BASELINE / SKU EXTENSION / MASTER DATA GOVERNANCE

## 8. NGUYÊN TẮC TỔNG QUAN SEED GOVERNANCE

## 8.1. Seed là nền dữ liệu, không phải mở vận hành

Seed chỉ có nhiệm vụ tạo dữ liệu nền.

Seed không được:

Mở bán SKU.

Xác nhận batch released.

Xác nhận tồn kho thành phẩm.

Xác nhận production-ready.

Xác nhận Gateway PASS.

Xác nhận Go-live.

Seed không thay thế workflow vận hành.

Seed không thay thế Owner approval.

Seed không thay thế evidence accepted.

## 8.2. Seed phải idempotent

Seed phải đảm bảo:

Chạy lần đầu tạo dữ liệu đúng.

Chạy lại không tạo trùng.

Chạy lại không ghi đè dữ liệu vận hành đã phát sinh.

Chạy lại không reset trạng thái đã được workflow cập nhật.

Chạy lại không sửa công thức G1 đã active nếu chưa có versioning rule.

Chạy lại phải có log.

Chạy lại phải có evidence.

## 8.3. Seed không được hardcode logic nghiệp vụ

Không được hardcode trong code:

Danh sách 20 SKU.

Danh sách ingredient.

Danh sách alias.

Danh sách UOM.

Công thức G1.

Ratio_to_rice.

Packaging profile.

Threshold.

Source type.

Sâm Savigin rule.

Activation status.

Sellable status.

Các dữ liệu này phải nằm ở master/config/seed đã chuẩn hóa.

## 9. SEED READINESS GATE - ĐIỀU KIỆN TRƯỚC KHI SEED

Không được seed nếu chưa đạt đủ các điều kiện sau:

Nhóm

Điều kiện bắt buộc

Trạng thái nếu thiếu

## SKU

Có danh sách SKU canonical

## OWNER CONFIRM REQUIRED

Ingredient

Có ingredient canonical

## OWNER CONFIRM REQUIRED

Alias

Alias trỏ đúng canonical

## OWNER CONFIRM REQUIRED

## UOM

Có UOM master

## OWNER CONFIRM REQUIRED

Conversion

Có quy đổi UOM khi cần

## OWNER CONFIRM REQUIRED

Recipe group

Có recipe line group

## OWNER CONFIRM REQUIRED

Formula

Có formula header/line

## OWNER CONFIRM REQUIRED

## G1

Có G1 formula được Owner xác nhận

## OWNER CONFIRM REQUIRED

Anchor

Có gạo anchor

## OWNER CONFIRM REQUIRED

Ratio

Có ratio_to_rice

## OWNER CONFIRM REQUIRED

Packaging

Có packaging profile

## OWNER CONFIRM REQUIRED

Material group

Có nhóm A/B/Company Source

## OWNER CONFIRM REQUIRED

Threshold

Có threshold nếu seed dữ liệu planning

## OWNER CONFIRM REQUIRED

Activation

Có rule activation baseline

## OWNER CONFIRM REQUIRED

Evidence

Có bảng dữ liệu review

## OWNER CONFIRM REQUIRED

## 10. SKU BASELINE 20 SẢN PHẨM

## 10.1. Nguyên tắc

20 SKU baseline là dữ liệu nền quan trọng.

Nhưng 20 SKU baseline không có nghĩa là:

Đã bán được.

Đã có tồn kho.

Đã có batch release.

Đã có QR public.

Đã có giá chính thức runtime.

Đã đủ commerce sellable gate.

Đã production-ready.

## 10.2. Checklist seed SKU baseline

Trường

Bắt buộc

Quy tắc

sku_code

Có

Mã duy nhất, không trùng

sku_public_name

Có

Tên dùng cho khách hàng

sku_internal_name

Có nếu khác public

Tên nội bộ

sku_group

Có

Nhóm sản phẩm đã khóa

sku_type

Có

Seasonal / Functional / Nourishing hoặc phân loại được khóa

product_line

Có

Cháo Sâm Savigin hoặc dòng tương ứng

sku_status

Có

ACTIVE_BASELINE / ACTIVE / INACTIVE theo governance

baseline_flag

Có

TRUE nếu thuộc 20 SKU baseline

default_recipe_ref

Có nếu đã có G1

Trỏ recipe chính

default_formula_version

Có nếu đã có G1

Trỏ G1 hoặc version được khóa

packaging_profile_ref

Có

Trỏ packaging profile

sellable_status

Không set mặc định bán được

Không được tự PASS

released_status

Không

Không thuộc SKU seed

PRODUCTION_READINESS_status

Không

Không thuộc SKU seed

owner_confirmed

Có

Bắt buộc trước seed

## 10.3. Fail gate SKU baseline

Fail nếu:

Trùng sku_code.

SKU thiếu public name.

SKU dùng tên tạm chưa xác nhận.

SKU thiếu group/type.

SKU hardcode trong service.

SKU seed tự set sellable.

SKU seed tự set released.

SKU seed tự set production-ready.

SKU có G1 nhưng thiếu formula_version.

SKU có packaging nhưng thiếu packaging_profile_ref.

Seed 20 SKU trực tiếp từ nguồn tổng hợp chưa qua normalization.

## 11. SKU EXTENSION - QUY TRÌNH THÊM SKU MỚI SAU BASELINE

## 11.1. Nguyên tắc

Mọi SKU mới sau baseline phải đi qua quy trình mở rộng SKU.

Không được thêm SKU mới bằng cách:

Thêm dòng trực tiếp vào DB.

Hardcode vào code.

Copy SKU cũ rồi đổi tên.

Tạo seed mới không qua Owner confirm.

Gắn công thức tạm.

Tự set sellable.

## 11.2. Quy trình SKU extension

Bước

Tên bước

Đầu ra

SKU Extension Request

Yêu cầu thêm SKU

Owner Business Review

Owner xác nhận mục tiêu sản phẩm

SKU Code Reservation

Giữ mã SKU duy nhất

Product Naming Confirmation

Chốt tên public/internal

Ingredient Requirement Review

Chốt nguyên liệu cần dùng

UOM / Conversion Review

Chốt đơn vị và quy đổi

Recipe / Formula Draft

Tạo draft công thức

G1 Formula Approval

Owner duyệt G1 nếu đủ

Packaging Profile Review

Chốt gói/hộp/thùng

10

Source Type Review

Chốt supplier/company source

11

Seed Plan Review

Chốt dữ liệu seed

12

Smoke Plan

Chốt test

13

Owner Confirm

Cho phép seed theo scope

14

Limited Seed Implementation

Chỉ khi có lệnh riêng

15

Evidence Submission

Nộp log/evidence

16

Owner Review

Chờ accepted hoặc retest

## 11.3. SKU extension không được làm

Không được:

Thêm SKU mới không có Owner request.

Dùng lại mã SKU cũ.

Tự sinh SKU code không theo rule.

Tự tạo công thức G1.

Tự copy formula SKU khác.

Tự gán packaging profile sai.

Tự gắn Sâm Savigin như supplier material.

Tự set active operational nếu chưa duyệt.

Tự set sellable.

Tự mở Commerce/AI bán SKU mới.

## 12. PRODUCT MASTER SEED

## 12.1. Nguyên tắc

Product master là nền cho SKU.

Product master không phải logic bán hàng.

Product master không tự mở inventory, production hoặc commerce.

## 12.2. Checklist product master

Trường

Bắt buộc

Quy tắc

product_code

Có

Mã dòng sản phẩm

product_name

Có

Tên dòng sản phẩm

product_category

Có

Nhóm sản phẩm

brand

Có

Ginsengfood / SSAVIGROUP theo cấu trúc đã khóa

product_description

Tùy

Mô tả nội bộ

status

Có

## ACTIVE / INACTIVE

owner_confirmed

Có

Trước seed

## 13. INGREDIENT CANONICAL SEED

## 13.1. Nguyên tắc

Mỗi nguyên liệu phải có một canonical duy nhất.

Không được seed một nguyên liệu dưới nhiều tên khác nhau.

Không được seed alias thành ingredient riêng.

## 13.2. Checklist ingredient canonical

Trường

Bắt buộc

Quy tắc

ingredient_code

Có

Mã duy nhất

canonical_name

Có

Tên chuẩn

public_name

Tùy

Nếu cần public

material_group

Có

Nhóm A/B/Company Source/Other

material_subgroup

Có nếu có

A-specific, A-common, B1, B2, Company Source

source_type

Có

Supplier / Company Source / Internal

default_uom

Có

UOM mặc định

inventory_uom

Có

Đơn vị tồn kho

formula_uom

Có nếu dùng trong công thức

Đơn vị công thức

purchase_uom

Có nếu mua ngoài

Đơn vị mua

conversion_rule_ref

Có nếu khác UOM

Trỏ rule quy đổi

is_formula_eligible

Có

Có được dùng trong formula không

is_procurement_eligible

Có

Có được mua ngoài không

is_company_source

Có

TRUE với Sâm Savigin nếu được khóa

status

Có

## ACTIVE / INACTIVE

owner_confirmed

Có

Bắt buộc

## 13.3. Sâm Savigin trong ingredient seed

Sâm Savigin phải được seed theo rule:

Trường

Giá trị nguyên tắc

source_type

## COMPANY_SOURCE

is_company_source

## TRUE

is_procurement_eligible

FALSE cho supplier purchase thông thường

strategic_reserve

TRUE nếu được dùng làm reserve

harvest_eligible

## TRUE

qc_required

## TRUE

readiness_required

## TRUE

supplier_material_default

## FALSE

Không được seed Sâm Savigin như nguyên liệu mua supplier thông thường.

## 14. INGREDIENT ALIAS SEED

## 14.1. Nguyên tắc

Alias chỉ là tên phụ.

Alias phải trỏ về ingredient canonical.

Alias không được tạo master mới.

## 14.2. Checklist alias

Trường

Bắt buộc

Quy tắc

alias_text

Có

Tên phụ

normalized_alias

Có

Dạng chuẩn hóa để search

canonical_ingredient_code

Có

Trỏ ingredient chuẩn

alias_type

Có

Internal / Supplier / Public / Legacy

status

Có

## ACTIVE / INACTIVE

owner_confirmed

Có

Trước active

## 14.3. Fail gate alias

Fail nếu:

Alias không trỏ canonical.

Alias trỏ nhiều canonical.

Alias bị seed thành ingredient mới.

Alias thiếu Owner confirm.

Alias dùng trong formula nhưng canonical chưa active.

## 15. UOM / CONVERSION SEED

## 15.1. Nguyên tắc

UOM là nền bắt buộc cho formula, inventory, packaging và MISA mapping sau này.

Không seed formula nếu UOM chưa chuẩn.

## 15.2. Checklist UOM

Trường

Bắt buộc

Quy tắc

uom_code

Có

Mã đơn vị

uom_name

Có

Tên đơn vị

uom_type

Có

Weight / Volume / Count / Packaging

base_uom

Có nếu quy đổi

Đơn vị gốc

conversion_factor

Có nếu quy đổi

Hệ số quy đổi

decimal_precision

Có

Số lẻ

rounding_policy

Có

Quy tắc làm tròn

allow_formula_use

Có

Có dùng trong công thức không

allow_inventory_use

Có

Có dùng tồn kho không

allow_packaging_use

Có

Có dùng bao bì không

status

Có

## ACTIVE / INACTIVE

owner_confirmed

Có

Bắt buộc

## 15.3. Fail gate UOM seed

Fail nếu:

Seed công thức dùng UOM chưa tồn tại.

Formula UOM khác inventory UOM nhưng không có conversion.

Packaging dùng gói/hộp/thùng nhưng thiếu conversion.

UOM bị hardcode trong service.

UOM từ nguồn tổng hợp chưa chuẩn hóa nhưng đã seed.

## PHẦN 3/4 - RECIPE / FORMULA / PACKAGING / THRESHOLD / ACTIVATION SEED

## 16. RECIPE LINE GROUP SEED

## 16.1. Nguyên tắc

Recipe line group chỉ dùng để tổ chức công thức.

Không được dùng group thay cho ingredient.

## 16.2. Checklist recipe line group

Trường

Bắt buộc

Quy tắc

line_group_code

Có

Mã nhóm dòng công thức

line_group_name

Có

Tên nhóm

display_order

Có

Thứ tự hiển thị

required_for_g1

Có

TRUE nếu G1 bắt buộc có

status

Có

## ACTIVE / INACTIVE

owner_confirmed

Có

Bắt buộc

## 16.3. Fail gate recipe line group

Fail nếu:

Group không có mã.

Group bị dùng thay ingredient.

G1 thiếu group bắt buộc.

Dev hardcode group trong service.

Group chưa Owner confirm nhưng đã seed active.

## 17. RECIPE / FORMULA SEED

## 17.1. Nguyên tắc

Recipe/Formula seed phải tuân thủ file:

Seed công thức không được tách khỏi rule P1.2B.

## 17.2. Checklist recipe header seed

Trường

Bắt buộc

Quy tắc

recipe_code

Có

Mã recipe duy nhất

sku_code

Có

Trỏ SKU

recipe_name

Có

Tên recipe

recipe_status

Có

DRAFT / APPROVED / ACTIVE theo rule

formula_kind

Có

## ANCHOR_BASED / FIXED_BATCH

default_formula_version

Có nếu active

Thường là G1

owner_confirmed

Có

Bắt buộc

## 17.3. Checklist formula header seed

Trường

Bắt buộc

Quy tắc

formula_code

Có

Mã formula

recipe_code

Có

Trỏ recipe

sku_code

Có

SKU áp dụng

formula_version

Có

G1/G2 hoặc version chính thức

formula_kind

Có

## ANCHOR_BASED/FIXED_BATCH

formula_status

Có

## DRAFT / APPROVED_SEED_BASELINE / ACTIVE_OPERATIONAL

anchor_ingredient_code

Có nếu ANCHOR_BASED

Gạo anchor

anchor_uom

Có

Đơn vị anchor

rounding_policy

Có

Làm tròn khi scale

approved_by

Có nếu approved

Người duyệt

approved_at

Có nếu approved

Thời điểm duyệt

owner_confirmed

Có

Bắt buộc

## 17.4. Checklist formula line seed

Trường

Bắt buộc

Quy tắc

formula_code

Có

Trỏ formula

formula_version

Có

Version

line_no

Có

Thứ tự dòng

line_group_code

Có

Nhóm dòng

ingredient_code

Có

Nguyên liệu cụ thể

ingredient_name_snapshot

Có

Snapshot tên

formula_uom

Có

Đơn vị công thức

inventory_uom_snapshot

Có

Đơn vị tồn kho

ratio_to_rice

Có nếu ANCHOR_BASED

Tỷ lệ so với gạo

quantity_per_standard_batch

Có nếu FIXED_BATCH

Số lượng mẻ chuẩn

is_anchor_ingredient

Có

TRUE duy nhất với gạo

is_active_line

Có

TRUE nếu dùng

owner_confirmed

Có

Bắt buộc

## 17.5. Formula seed không được làm

Không được:

Seed formula thiếu version.

Seed formula thiếu anchor gạo.

Seed formula thiếu ratio_to_rice.

Seed formula line chỉ có nhóm mơ hồ.

Seed G0/research thành active operational.

Seed G1 khi Owner chưa confirm.

Seed công thức trực tiếp từ nguồn tổng hợp.

Seed formula rồi tự set SKU sellable.

Seed formula rồi tự tạo production order.

Seed formula rồi tự tạo material request.

## 18. PACKAGING PROFILE SEED

## 18.1. Nguyên tắc

Packaging profile là dữ liệu nền cho Phase 2 đóng gói, print, QR, inventory và threshold.

Phase 1 có thể chuẩn bị seed packaging profile, nhưng không triển khai print runtime thật.

## 18.2. Checklist packaging profile

Trường

Bắt buộc

Quy tắc

packaging_profile_code

Có

Mã profile

sku_code

Có

SKU áp dụng

level_1_unit

Có

Gói/packet

level_1_material_code

Có

B1 film hoặc vật tư tương ứng

level_2_box_enabled

Có

Có hộp hay không

box_material_code

Có nếu có hộp

B2 hộp

units_per_box

Có nếu có hộp

Số gói/hộp

carton_enabled

Có

Có thùng hay không

carton_material_code

Có nếu có thùng

B2 thùng

boxes_per_carton

Có nếu có thùng

Số hộp/thùng

label_template_level_1_ref

Có

Chỉ là ref/template, không in thật

label_template_level_2_ref

Có

Chỉ là ref/template, không in thật

barcode_required

Có

Dùng cho Phase 2

qr_required

Có

Dùng cho Phase 2

owner_confirmed

Có

Bắt buộc

## 18.3. Packaging seed không được làm

Không được:

Seed packaging thiếu units_per_box.

Seed packaging thiếu boxes_per_carton nếu có carton.

Seed packaging profile nhưng chưa gắn SKU.

Seed label template thành print runtime.

Seed barcode/QR thật nếu chưa tới Phase 2.

Cho printer tự sinh mã.

Hardcode packaging threshold trong service.

## 19. MATERIAL GROUP / SOURCE TYPE SEED

## 19.1. Nhóm A - nguyên liệu sản xuất

Loại

Seed rule

A-specific

Nguyên liệu đặc thù SKU

A-common

Nguyên liệu dùng chung nhiều SKU

Company Source

Nguồn công ty sở hữu, ví dụ Sâm Savigin

Buffer

+5% chỉ cho planning, không sửa formula

## 19.2. Nhóm B - bao bì/vật tư

Loại

Seed rule

## B1

Film/gói/cấp 1

## B2

Hộp/thùng/cấp 2

Buffer

+7% chỉ cho planning, không sửa formula/packaging

## 19.3. Checklist material group/source type

Trường

Bắt buộc

Quy tắc

material_code

Có

Trỏ ingredient/material

material_group

Có

A/B/Company Source/Other

material_subgroup

Có

A-specific/A-common/B1/B2

source_type

Có

Supplier/Company Source/Internal

sku_specific

Có

TRUE nếu đặc thù SKU

shared_across_sku

Có

TRUE nếu dùng chung

procurement_eligible

Có

Có được mua ngoài không

strategic_reserve

Có nếu áp dụng

TRUE với Sâm nếu Owner khóa

owner_confirmed

Có

Bắt buộc

## 20. THRESHOLD SEED / PROCUREMENT SUPPRESSION BOUNDARY

## 20.1. Nguyên tắc

Phase 1 chỉ chuẩn bị dữ liệu threshold ở mức master/boundary.

Phase 1 không triển khai full MRP/procurement.

Threshold không được hardcode vào code.

## 20.2. Threshold từ nguồn tổng hợp cần chuẩn hóa

Nhóm

Rule từ nguồn tổng hợp

Trạng thái seed

Nhóm A đặc thù SKU

5 mẻ/SKU

Owner confirm trước seed

Nhóm A dùng chung

Aggregate 20 mẻ chuẩn

Owner confirm trước seed

Sâm Savigin

Strategic reserve / harvest exception

Owner confirm trước seed

B1 film

115.560 gói quy đổi/SKU

Owner confirm trước seed

B2 hộp

28.890 hộp/SKU

Owner confirm trước seed

B2 thùng

4.815 thùng/SKU

Owner confirm trước seed

## 20.3. Threshold seed không được làm

Không được:

Hardcode threshold vào service.

Seed threshold khi chưa rõ packaging profile.

Seed threshold khi chưa rõ BOM/G1.

Áp dụng supplier purchase suppression cho Sâm Savigin như hàng mua ngoài.

Cho threshold tự tạo purchase request.

Cho threshold tự loại material khỏi production formula.

Threshold là dữ liệu planning/procurement, không phải công thức sản xuất.

## 21. PRODUCT ACTIVATION SEED BOUNDARY

## 21.1. Nguyên tắc

Seed có thể tạo trạng thái sản phẩm ở mức master, nhưng không được mở bán.

## 21.2. Trạng thái được phép seed

Trạng thái

Được seed?

Ghi chú

## DRAFT

Có

Nếu dữ liệu chưa hoàn tất

## ACTIVE_BASELINE

Có

Baseline đã xác nhận

## ACTIVE

Có nếu Owner confirm

Active master, không đồng nghĩa sellable

## INACTIVE

Có

Không dùng

## SELLABLE

Không

Thuộc Commerce/Sellable gate

## RELEASED

Không

Thuộc batch release

## PRODUCTION_READINESS

Không

Thuộc release/go-live gate

## 21.3. Fail gate activation seed

Fail nếu:

Seed SKU active rồi cho bán.

Seed SKU active rồi AI/Commerce/Gateway xem là sellable.

Seed SKU released.

Seed SKU production-ready.

Seed activation không có audit/evidence.

## 22. SEED CHANGE CONTROL

## 22.1. Nguyên tắc

Sau khi seed đã được dùng, không được sửa dữ liệu nền tùy tiện.

Thay đổi seed phải có:

Change request.

Impact analysis.

Owner approval.

Migration/seed strategy.

Backward compatibility.

Evidence.

Audit.

## 22.2. Loại thay đổi seed

Loại thay đổi

Cách xử lý

Sửa lỗi chính tả tên hiển thị

Có thể update có audit

Sửa alias

Update alias mapping, không tạo ingredient mới

Sửa UOM ảnh hưởng quantity

P0, cần Owner approval và impact analysis

Sửa formula G1

Không sửa trực tiếp, tạo version mới

Thêm ingredient vào formula

Tạo formula version mới

Bỏ ingredient khỏi formula

Tạo formula version mới

Đổi packaging profile

Cần impact packaging/print/threshold

Đổi threshold

Cần Owner approval, không sửa công thức

Đổi source type Sâm

P0, cần Owner quyết định

PHẦN 4/4 - EXECUTION ORDER / HANDOFF / SMOKE / DONE GATE / FAIL GATE

## 23. EXECUTION ORDER - THỨ TỰ XỬ LÝ P1.2D

## 23.1. Thứ tự đọc tài liệu

Thứ tự

Tài liệu

Mục đích

## README-PHASE-01-HANDOFF-INDEX V1.1

Hiểu Phase 1

## MASTER-DATA-NORMALIZATION-CHECKLIST

Biết dữ liệu cần chuẩn hóa

## 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM

Đối chiếu SKU/Ingredient/UOM

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION V2.0

Đối chiếu formula seed

## 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE V1.1

File seed governance này
