# P1.2B - RECIPE BOM FORMULA VERSION

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-02 Recipe / BOM / Formula Version.
- PACK-03 Demand / MRP / Procurement / Material Control.
- TECH-02 Formula and BOM boundary.
- Recipe Active khong dong nghia batch RELEASED.

## Noi Dung Rewrite

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION

## TÀI LIỆU ĐẶC TẢ RECIPE / BOM / FORMULA VERSION CHO PHASE 1

Global Gate Status: bị chặn
Completion Status: WAITING IMPLEMENTATION EVIDENCE
Production Readiness: KHONG
Go-live Decision: KHONG
Default Agent Mode: ANALYSIS ONLY

## PHẦN 1/4 - PHASE MARKER / PURPOSE / SOURCE-OF-TRUTH / SCOPE

## 1. PHASE MARKER

Tài liệu này thuộc nhóm:

## PHASE-01-P1-2B-RECIPE-BOM-FORMULA-VERSION

Đây là file đặc tả lõi cho miền:

Recipe.

## BOM.

Formula.

Formula Version.

G1 Operational Formula.

Anchor gạo.

Ratio_to_rice.

Formula scaling.

Formula snapshot requirement cho Phase 2.

Quy tắc không sửa công thức đã khóa.

Quy tắc tạo version mới khi thay đổi công thức.

Quy tắc phân biệt công thức sản xuất và buffer planning.

Tài liệu này thay thế toàn bộ nội dung cũ của:

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION.docx

## 2. HEADER

Trường

Nội dung

Tên tài liệu

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION

Phiên bản

Phase

Phase 1

Module

Recipe / BOM / Formula Version

Loại tài liệu

Đặc tả nghiệp vụ - kỹ thuật, chưa phải code

Nguồn chính

Phase 1 clean documentation

Nguồn phụ trợ

nguồn tổng hợp TÀI LIỆU.docx

File điều phối trước

## README-PHASE-01-HANDOFF-INDEX V1.1

Checklist liên quan

## MASTER-DATA-NORMALIZATION-CHECKLIST-PHASE-01-02

Cho phép code ngay?

Không

Cho phép seed ngay?

Không

Cho phép tạo migration ngay?

Không

Mode mặc định cho Agent

## ANALYSIS ONLY

Gateway Status

bị chặn

Production Readiness

KHONG

## 3. PURPOSE - MỤC ĐÍCH TÀI LIỆU

Tài liệu này được viết lại để khóa toàn bộ logic Recipe/BOM/Formula cho Phase 1 theo đúng nghiệp vụ đã được mở rộng từ nguồn tổng hợp.

Mục tiêu chính:

Chuẩn hóa cách định nghĩa công thức sản xuất cho 20 SKU baseline.

Khóa công thức G1 là công thức vận hành nền cho go-live sau này, nhưng chưa tự gọi Production Readiness.

Khóa nguyên tắc gạo là anchor ingredient trong công thức pilot/G1.

Khóa nguyên tắc khi nhập số kg gạo, hệ thống tự scale toàn bộ nguyên liệu theo ratio_to_rice.

Khóa nguyên tắc scale kg gạo không phải là đổi công thức.

Khóa nguyên tắc nếu đổi tỷ lệ, thêm nguyên liệu, bỏ nguyên liệu sau khi G1 đã khóa thì bắt buộc tạo Formula Version mới.

Khóa việc công thức phải bung chi tiết từng nguyên liệu cụ thể, không để nhóm mơ hồ.

Khóa UOM và conversion là điều kiện bắt buộc trước khi seed formula.

Khóa buffer +5% nhóm A và +7% nhóm B chỉ là buffer planning, không được tự sửa công thức sản xuất đã phê duyệt.

Khóa việc Phase 2 Production Order phải tiêu thụ công thức bằng snapshot, không chọn tay nguyên liệu.

Khóa smoke/evidence cần có để chứng minh Recipe/BOM/Formula đúng trước khi giao implementation.

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

Không ghi đè bằng công thức tự suy luận

Tầng 1

## README-PHASE-01-HANDOFF-INDEX V1.1

Điều phối Phase 1

Biết phạm vi và gate của Phase 1

Không thay thế file P1.2B chi tiết

Tầng 2

Tài liệu P1.2B V2.0 này

Nguồn chính cho Recipe/BOM/Formula

Giao dev/Agent phân tích miền công thức

Không tự cho phép code/seed

Tầng 3

## MASTER-DATA-NORMALIZATION-CHECKLIST

Kiểm soát dữ liệu trước seed/code

Chốt SKU, ingredient, UOM, formula, packaging cần Owner confirm

Không thay thế Owner confirmation

Tầng 4

nguồn tổng hợp TÀI LIỆU.docx

Nguồn phụ trợ nghiệp vụ

Dùng để xác định rule cần đưa vào tài liệu sạch

Không code/seed trực tiếp

Tầng 5

Code hiện tại

Hiện trạng triển khai

Dùng để gap analysis

Không là source-of-truth nếu conflict với tài liệu này

## 5. SCOPE IN - PHẠM VI BAO GỒM

Tài liệu này bao gồm:

Recipe master.

Recipe header.

Recipe line group.

Recipe line.

BOM sản xuất.

Formula header.

Formula line.

Formula version.

Formula kind.

G1 operational formula.

G0/research boundary.

G2/G3 future version boundary.

Anchor ingredient là gạo.

Ratio_to_rice.

Formula scaling theo kg gạo.

Formula snapshot requirement.

Formula approval status.

Formula activation status.

Formula change control.

UOM dùng trong công thức.

UOM conversion requirement.

Rounding policy.

Buffer planning +5% nhóm A.

Buffer planning +7% nhóm B.

No manual ingredient selection trong Production Order và Material Request của Phase 2.

Seed requirement cho formula.

Smoke/evidence cho formula.

## 6. SCOPE OUT - PHẠM VI KHÔNG BAO GỒM

Tài liệu này không bao gồm:

Không triển khai code.

Không tạo migration.

Không tạo seed script.

Không thiết kế API chi tiết.

Không thiết kế DTO chi tiết.

Không thiết kế UI chi tiết.

Không triển khai Production Order thật.

Không triển khai Material Issue thật.

Không triển khai Warehouse Ledger thật.

Không triển khai MRP/procurement đầy đủ.

Không triển khai MISA integration.

Không triển khai print/QR/traceability runtime.

Không quyết định SKU sellable.

Không quyết định batch release.

Không quyết định Production Readiness.

Không gọi Completion Decision.

Không gọi Gateway PASS.

Không gọi Go-live Decision.

Tài liệu này chỉ khóa nền Recipe/BOM/Formula để các file sau tiêu thụ đúng.

## 7. ĐỊNH NGHĨA THUẬT NGỮ

Thuật ngữ

Định nghĩa

Recipe

Công thức sản phẩm ở cấp nghiệp vụ, gắn với SKU

## BOM

Định mức nguyên liệu/vật tư cần cho sản xuất, được rút ra từ công thức

Formula

Phiên bản công thức có thể được duyệt và dùng vận hành

Formula Version

Mã phiên bản của công thức, ví dụ G1, G2

## G0

Công thức nghiên cứu/thử nghiệm, không được dùng làm operational formula

## G1

Công thức vận hành nền được khóa cho baseline/go-live sau này

## G2/G3

Phiên bản công thức tương lai khi có thay đổi sau G1

Anchor Ingredient

Nguyên liệu mốc dùng để scale công thức; trong nguồn tổng hợp khóa là gạo

Ratio_to_rice

Tỷ lệ của từng nguyên liệu so với lượng gạo anchor

Formula Scaling

Tính lại lượng nguyên liệu khi thay đổi kg gạo

Formula Change

Thay đổi tỷ lệ/thêm/bỏ/thay nguyên liệu làm phát sinh version mới

Planning Buffer

Hệ số dự phòng cho MRP/stock planning, không phải công thức sản xuất

Formula Snapshot

Bản chụp công thức tại thời điểm tạo lệnh sản xuất

Active Operational

Trạng thái công thức được phép tiêu thụ cho vận hành theo gate

Owner Confirm

Xác nhận của chủ dự án/chủ nghiệp vụ trước seed/code

## PHẦN 2/4 - RECIPE / BOM / FORMULA MODEL / ANCHOR GẠO / SCALING

## 8. NGUYÊN TẮC TỔNG QUAN RECIPE / BOM / FORMULA

## 8.1. Recipe phải gắn với SKU

Mỗi recipe vận hành phải thuộc về một SKU cụ thể.

Không cho phép recipe trôi nổi không có SKU.

Không cho phép một recipe dùng cho nhiều SKU nếu chưa có rule chia sẻ được Owner xác nhận.

## 8.2. Formula phải có version

Mọi công thức dùng cho vận hành phải có:

Formula code.

Formula version.

SKU code.

Formula status.

Approved status.

Active status.

Effective date.

Formula lines.

Owner confirmation.

Không có version thì không được dùng sản xuất.

Không có approved status thì không được active operational.

Không có formula lines cụ thể thì không được seed.

## 8.3. Recipe line phải là nguyên liệu cụ thể

Công thức không được chỉ ghi:

Nhóm đạm.

Nhóm rau củ.

Nhóm gia vị.

Nhóm bổ dưỡng.

Nhóm bao bì.

Nhóm nguyên liệu phụ.

Mỗi dòng công thức phải có:

Ingredient code.

Ingredient canonical name.

## UOM.

Ratio hoặc quantity.

Formula line group.

Status.

Owner confirmation.

Recipe line group chỉ dùng để tổ chức công thức, không được thay thế nguyên liệu cụ thể.

## 8.4. BOM là đầu ra từ formula, không phải nhập tay độc lập

BOM sản xuất phải được sinh hoặc xác định từ formula đã khóa.

Không cho phép dev tạo một danh sách BOM độc lập, tách rời formula.

Không cho phép người dùng tự nhập tay BOM ở bước sản xuất nếu công thức đã có.

BOM dùng cho Phase 2 phải đến từ formula snapshot.

## 9. CẤU TRÚC RECIPE HEADER

Recipe header là lớp định danh công thức sản phẩm ở cấp SKU.

Trường nghiệp vụ

Bắt buộc

Quy tắc

recipe_code

Có

Mã recipe duy nhất

sku_code

Có

SKU sở hữu recipe

sku_name_snapshot

Có

Snapshot tên SKU tại thời điểm tạo recipe

recipe_name

Có

Tên recipe nội bộ

recipe_purpose

Có

Baseline / Pilot / Operational / Research

recipe_status

Có

## DRAFT / OWNER_REVIEW / APPROVED / ACTIVE / INACTIVE

formula_kind

Có

ANCHOR_BASED / FIXED_BATCH hoặc loại được Owner khóa

default_formula_version

Có nếu active

Version mặc định khi tạo production order

owner_confirmed

Có

Bắt buộc trước seed/code

created_by

Có

Actor tạo

approved_by

Có nếu approved

Actor duyệt

approved_at

Có nếu approved

Thời điểm duyệt

effective_from

Có nếu active

Ngày hiệu lực

effective_to

Tùy

Ngày hết hiệu lực nếu thay version

audit_required

Có

Bắt buộc

## 10. CẤU TRÚC FORMULA HEADER

Formula header là lớp khóa phiên bản công thức.

Trường nghiệp vụ

Bắt buộc

Quy tắc

formula_code

Có

Mã công thức duy nhất

recipe_code

Có

Trỏ về recipe

sku_code

Có

SKU áp dụng

formula_version

Có

G1/G2/G3 hoặc version được khóa

formula_name

Có

Tên công thức

formula_kind

Có

ANCHOR_BASED hoặc FIXED_BATCH

formula_status

Có

## DRAFT / OWNER_REVIEW / APPROVED_SEED_BASELINE / ACTIVE_OPERATIONAL / SUPERSEDED / INACTIVE

is_active_operational

Có

TRUE duy nhất theo rule active

anchor_ingredient_code

Có với ANCHOR_BASED

Gạo anchor

anchor_uom

Có với ANCHOR_BASED

Đơn vị của gạo anchor

standard_anchor_quantity

Có

Ví dụ kg gạo chuẩn nếu Owner xác nhận

standard_batch_size

Có nếu FIXED_BATCH

Mẻ chuẩn nếu dùng fixed batch

rounding_policy

Có

Quy tắc làm tròn khi scale

loss_buffer_policy_ref

Tùy

Chỉ trỏ planning buffer, không sửa formula

approved_by

Có khi approved

Người duyệt

approved_at

Có khi approved

Thời điểm duyệt

effective_from

Có khi active

Ngày hiệu lực

change_reason

Có nếu version mới

Lý do thay đổi

previous_formula_version

Có nếu G2+

Version trước đó

owner_confirmed

Có

Bắt buộc trước seed/code

audit_required

Có

Bắt buộc

## 11. CẤU TRÚC FORMULA LINE

Formula line là từng dòng nguyên liệu cụ thể.

Trường nghiệp vụ

Bắt buộc

Quy tắc

formula_code

Có

Trỏ về formula header

formula_version

Có

Version cụ thể

line_no

Có

Thứ tự dòng, không trùng

line_group_code

Có

Nhóm dòng công thức

ingredient_code

Có

Nguyên liệu cụ thể

ingredient_name_snapshot

Có

Snapshot tên nguyên liệu

ingredient_source_type_snapshot

Có

Supplier / Company Source / Internal

material_group_snapshot

Có

Nhóm A/B/Company Source

formula_uom

Có

Đơn vị trong công thức

inventory_uom_snapshot

Có

Đơn vị tồn kho tương ứng

uom_conversion_required

Có

TRUE nếu cần quy đổi

ratio_to_rice

Có với ANCHOR_BASED

Tỷ lệ so với gạo

quantity_at_standard_anchor

Có nếu có anchor chuẩn

Số lượng tại mức gạo chuẩn

quantity_per_standard_batch

Có nếu FIXED_BATCH

Số lượng theo mẻ chuẩn

is_anchor_ingredient

Có

TRUE duy nhất với gạo

is_active_line

Có

TRUE nếu dòng còn hiệu lực

is_optional

Có

G1 operational không nên optional nếu chưa có rule

owner_confirmed

Có

Bắt buộc trước seed

audit_required

Có

Bắt buộc

## 12. RECIPE LINE GROUP

## 12.1. Mục tiêu của line group

Recipe line group dùng để phân nhóm nguyên liệu cho dễ quản trị, kiểm tra và hiển thị.

Line group không phải là nguyên liệu.

Line group không được thay thế ingredient code.

Mỗi dòng công thức vẫn phải có ingredient cụ thể.

## 12.2. Quy tắc line group

Quy tắc

Diễn giải

Mỗi công thức G1 phải có đủ nhóm bắt buộc theo seed spec đã khóa

Không thiếu nhóm nếu rule yêu cầu 4 nhóm

Group chỉ dùng tổ chức

Không dùng group làm dòng nguyên liệu

Ingredient phải nằm trong group hợp lệ

Không để ingredient không group nếu rule yêu cầu

Group code phải từ master/config

Không nhập tay tự do

Group không quyết định UOM

UOM nằm ở ingredient/formula line

Group không quyết định quantity

Quantity/ratio nằm ở formula line

## 12.3. Fail gate line group

Fail nếu:

Công thức chỉ có group nhưng không có ingredient.

Một group chứa mô tả chung chung không thể issue nguyên liệu.

Formula line không có ingredient_code.

Ingredient không thuộc group nào trong khi G1 yêu cầu đủ nhóm.

Dev hardcode group trong service thay vì dùng master/config.

## 13. FORMULA KIND

## 13.1. Các loại formula được chấp nhận trong tài liệu này

Formula kind

Ý nghĩa

Dùng khi nào

Điều kiện bắt buộc

## ANCHOR_BASED

Công thức scale theo nguyên liệu mốc

nguồn tổng hợp khóa gạo làm anchor

Có anchor gạo và ratio_to_rice

## FIXED_BATCH

Công thức theo mẻ chuẩn cố định

Dùng nếu Owner khóa batch size cụ thể

Có quantity_per_standard_batch

## RESEARCH_ONLY

Công thức nghiên cứu

Không dùng vận hành

Không được active operational

## 13.2. Công thức G1 ưu tiên ANCHOR_BASED theo nguồn tổng hợp

nguồn tổng hợp đã khóa:

Pilot formula lấy gạo làm anchor ingredient.

Khi nhập số kg gạo, hệ thống tự scale toàn bộ nguyên liệu theo ratio_to_rice.

Scale số kg gạo không phải đổi công thức.

Vì vậy, trong Phase 1, file này khóa hướng G1 như sau:

G1 operational formula phải hỗ trợ anchor-based scaling theo gạo.

Nếu một SKU có công thức fixed batch riêng, phải được Owner xác nhận rõ và không được làm mờ rule anchor gạo.

## 14. ANCHOR GẠO

## 14.1. Nguyên tắc

Gạo là nguyên liệu mốc để scale công thức.

Khi người dùng nhập số kg gạo trong bối cảnh sản xuất, hệ thống phải tự tính ra lượng các nguyên liệu còn lại theo ratio_to_rice.

Gạo anchor phải là một ingredient canonical trong master.

Không được dùng chữ “gạo” dạng text tự do nếu chưa có ingredient_code.

## 14.2. Checklist anchor gạo

Trường

Bắt buộc

Quy tắc

anchor_ingredient_code

Có

Mã ingredient của gạo

anchor_ingredient_name_snapshot

Có

Tên gạo tại thời điểm formula approved

anchor_uom

Có

Đơn vị tính, ví dụ kg nếu Owner xác nhận

is_anchor_ingredient

Có

TRUE duy nhất trong formula

anchor_precision

Có

Số lẻ cho phép

anchor_min_quantity

Tùy

Nếu có giới hạn vận hành

anchor_max_quantity

Tùy

Nếu có giới hạn vận hành

owner_confirmed

Có

Bắt buộc

## 14.3. Fail gate anchor

Fail nếu:

Formula G1 không có anchor.

Có nhiều hơn một anchor trong cùng formula.

Anchor không phải ingredient canonical.

Anchor thiếu UOM.

Anchor không phải gạo nhưng không có Owner confirm.

Anchor bị nhập tay ở Production Order thay vì lấy từ formula.

## 15. RATIO_TO_RICE

## 15.1. Định nghĩa

ratio_to_rice là tỷ lệ của từng nguyên liệu so với lượng gạo anchor.

Khi gạo thay đổi, lượng nguyên liệu khác được tính theo tỷ lệ này.

Ví dụ về nguyên tắc, không phải dữ liệu thật:

Nếu gạo là 10 kg và nguyên liệu X có ratio_to_rice = 0,05 thì nguyên liệu X được tính theo tỷ lệ 5% so với gạo.

Tài liệu này không khóa con số thật. Con số thật phải do Owner xác nhận trong checklist chuẩn hóa.

## 15.2. Quy tắc bắt buộc

Quy tắc

Diễn giải

Mỗi dòng nguyên liệu cần scale phải có ratio_to_rice

Không để null

Ratio_to_rice phải theo UOM đã chuẩn hóa

Không dùng UOM mơ hồ

Ratio_to_rice thuộc formula version

Version khác có thể có ratio khác

Ratio_to_rice không được sửa trong G1 active

Nếu sửa phải tạo version mới

Ratio_to_rice phải Owner confirm

Agent không được tự suy luận

Ratio_to_rice phải test scaling

Smoke bắt buộc

## 15.3. Fail gate ratio

Fail nếu:

Thiếu ratio_to_rice.

Ratio_to_rice âm.

Ratio_to_rice không phù hợp UOM.

Ratio_to_rice tự suy luận từ text nguồn tổng hợp.

Sửa ratio_to_rice trong G1 mà không tạo version mới.

Công thức scale được dù thiếu ratio.

## 16. FORMULA SCALING THEO KG GẠO

## 16.1. Nguyên tắc chính

Khi nhập số kg gạo:

Hệ thống lấy formula version đang active.

Hệ thống lấy anchor gạo.

Hệ thống đọc ratio_to_rice của từng dòng nguyên liệu.

Hệ thống tính quantity cần dùng cho từng nguyên liệu.

Hệ thống áp dụng rounding policy.

Hệ thống tạo danh sách scaled formula lines.

Danh sách này được Phase 2 dùng để tạo production dossier/material request.

## 16.2. Scaling không làm thay đổi formula version

Thay đổi số kg gạo chỉ thay đổi sản lượng/mẻ sản xuất, không làm thay đổi công thức.

Các hành động sau không tạo formula version mới:

Hành động

Có tạo version mới không?

Ghi chú

Nhập 10 kg gạo thay vì 5 kg

Không

Chỉ scale sản lượng

Nhập 20 kg gạo theo cùng ratio

Không

Chỉ scale

Làm tròn theo rounding policy đã khóa

Không

Nếu policy không đổi

Tính nhu cầu nguyên liệu cho production order

Không

Dùng snapshot

Tính nhu cầu planning có buffer

Không

Buffer thuộc planning, không phải formula

## 16.3. Các hành động bắt buộc tạo version mới

Hành động

Có tạo version mới không?

Lý do

Đổi tỷ lệ giữa các nguyên liệu

Có

Thay đổi công thức

Đổi ratio_to_rice

Có

Thay đổi công thức

Thêm nguyên liệu

Có

Thay đổi công thức

Bỏ nguyên liệu

Có

Thay đổi công thức

Thay nguyên liệu này bằng nguyên liệu khác

Có

Thay đổi công thức

Đổi anchor ingredient

Có

Thay đổi logic scale

Đổi UOM làm thay đổi định lượng thực tế

Có

Ảnh hưởng công thức

Đổi nhóm công thức làm thay đổi line bắt buộc

Có

Ảnh hưởng formula structure

## 16.4. Rounding policy

Formula scaling phải có rounding policy.

Nội dung

Quy tắc

Rounding policy phải được khóa ở formula header hoặc config liên quan

Không để dev tự làm tròn tùy ý

Rounding phải nhất quán giữa preview, production order và material request

Không được mỗi nơi một kết quả

Rounding không được làm thay đổi ratio gốc

Chỉ là biểu diễn/tính lượng dùng

Nếu rounding policy thay đổi làm ảnh hưởng sản xuất

Cần Owner review

## 17. UOM TRONG FORMULA

## 17.1. Nguyên tắc

Mỗi formula line phải có UOM.

Không được có dòng công thức thiếu đơn vị tính.

Không được dùng UOM text tự do.

UOM phải đến từ master.

Nếu formula_uom khác inventory_uom, phải có conversion rule.

## 17.2. Nhóm UOM cần hỗ trợ

Nhóm

Ví dụ

Dùng cho

Khối lượng

kg, g

Gạo, nguyên liệu khô, thành phần sản xuất

Thể tích

l, ml

Nguyên liệu lỏng nếu có

Đơn vị đếm

pcs, gói

Vật tư hoặc đơn vị đặc biệt

Đóng gói

hộp, thùng, carton

Packaging profile, không thay dòng nguyên liệu sản xuất nếu chưa xác nhận

## 17.3. Fail gate UOM

Fail nếu:

Formula line thiếu UOM.

UOM không nằm trong master.

UOM không có conversion khi cần.

Cùng ingredient trong công thức dùng nhiều UOM không có rule.

Ratio_to_rice dùng UOM không quy đổi được.

Dev hardcode UOM trong code.

## PHẦN 3/4 - G1 LOCK / VERSIONING / BUFFER / SNAPSHOT / PHASE 2 CONSUMPTION

## 18. G1 OPERATIONAL FORMULA LOCK

## 18.1. Định nghĩa G1

G1 là công thức vận hành nền được Owner xác nhận để làm baseline cho sản xuất sau này.

G1 không phải công thức nghiên cứu.

G1 không được sửa tùy tiện sau khi đã khóa.

G1 là nguồn để Phase 2 Production Order tự hiện công thức và tạo formula snapshot.

## 18.2. Điều kiện để một formula được xem là G1 hợp lệ

Điều kiện

Bắt buộc

Có sku_code

Có

Có formula_code

Có

Có formula_version = G1 hoặc version được Owner khóa tương ứng

Có

Có formula_status hợp lệ

Có

Có anchor gạo nếu anchor-based

Có

Có ratio_to_rice cho từng line cần scale

Có

Có formula lines cụ thể

Có

Có UOM cho từng line

Có

Có ingredient canonical

Có

Có Owner confirm

Có

Có approved_by / approved_at nếu active operational

Có

Có audit trail

Có

## 18.3. G0 / Research boundary

G0 hoặc công thức nghiên cứu không được dùng làm operational formula.

Không được:

Seed G0 thành active operational.

Dùng G0 để tạo production order.

Dùng G0 để tạo material request.

Dùng G0 để mở bán.

Dùng G0 để tính giá thành chính thức.

Nếu cần lưu G0, phải ở trạng thái research/draft, không được tiêu thụ bởi production.

## 18.4. G2/G3 future version

G2/G3 chỉ phát sinh khi có thay đổi sau G1.

Mỗi version mới phải có:

Version code.

Previous version.

Change reason.

Change summary.

Changed lines.

Owner approval.

Effective date.

Audit.

Rule không ảnh hưởng hồ sơ sản xuất cũ.

## 19. FORMULA VERSIONING RULES

## 19.1. Nguyên tắc versioning

Formula versioning bảo vệ lịch sử sản xuất.

Khi một production order đã snapshot G1, sau này dù G2 được tạo, hồ sơ sản xuất cũ vẫn phải giữ G1 snapshot.

Không được cập nhật ngược công thức cũ làm thay đổi lịch sử.

## 19.2. Những thay đổi không tạo version mới

Thay đổi

Có tạo version mới không?

Ghi chú

Thay đổi số kg gạo để scale sản lượng

Không

Chỉ là quantity input

Tính nhu cầu cho mẻ lớn/mẻ nhỏ

Không

Dựa cùng ratio

Làm tròn theo policy đã có

Không

Không đổi policy

Tính planning buffer

Không

Không phải formula

Đổi trạng thái draft chưa approved trong quá trình soạn

Không bắt buộc

Tùy workflow, miễn chưa active

Sửa lỗi chính tả mô tả không ảnh hưởng công thức

Không

Cần audit nếu đã approved

## 19.3. Những thay đổi bắt buộc tạo version mới

Thay đổi

Có tạo version mới không?

Ghi chú

Thay đổi ratio_to_rice

Có

Thay đổi bản chất công thức

Thêm nguyên liệu

Có

Thay đổi BOM

Bỏ nguyên liệu

Có

Thay đổi BOM

Thay nguyên liệu

Có

Thay đổi BOM/trace

Đổi anchor gạo sang anchor khác

Có

Thay đổi logic công thức

Đổi UOM làm thay đổi định lượng

Có

Ảnh hưởng sản xuất

Đổi quantity_per_batch trong fixed batch

Có

Thay đổi mẻ chuẩn

Đổi nhóm dòng bắt buộc ảnh hưởng nguyên liệu

Có

Thay đổi cấu trúc công thức

Thay đổi quy trình làm thay đổi nguyên liệu sử dụng

Có nếu ảnh hưởng formula

Owner confirm

## 20. BUFFER +5% / +7% KHÔNG ĐƯỢC SỬA FORMULA

## 20.1. Quy tắc từ nguồn tổng hợp

nguồn tổng hợp đã khóa:

Buffer +5% Nhóm A.

Buffer +7% Nhóm B.

Buffer là buffer cho MRP/stock planning.

Buffer không được tự sửa công thức sản xuất đã phê duyệt.

## 20.2. Phân biệt formula và planning

Hạng mục

Formula sản xuất

Planning buffer

Mục đích

Định mức công thức đã duyệt

Dự phòng mua hàng/tồn kho

Có nằm trong G1 formula không?

Có, nếu là nguyên liệu thật

Không

Có làm thay đổi recipe line không?

Có nếu thay đổi nguyên liệu/tỷ lệ

Không

Có dùng để issue nguyên liệu mặc định không?

Theo production/material rule

Không tự động nếu chưa duyệt

Có tạo formula version mới không?

Có nếu đổi formula

Không nếu chỉ đổi planning policy

Ai xác nhận

Owner công thức

Owner planning/MRP

## 20.3. Fail gate buffer

Fail nếu:

Dev cộng +5% vào formula line nhóm A.

Dev cộng +7% vào formula line nhóm B.

Buffer làm thay đổi G1 quantity.

Buffer làm thay đổi ratio_to_rice.

Material request dùng buffer như công thức sản xuất khi chưa có rule phê duyệt.

Agent hiểu buffer là thành phần công thức.

## 21. FORMULA SNAPSHOT CHO PHASE 2

## 21.1. Mục tiêu snapshot

Phase 2 sẽ tạo Production Order và Production Dossier.

Khi tạo lệnh sản xuất, hệ thống phải snapshot công thức tại thời điểm đó.

Snapshot bảo vệ lịch sử:

## SKU.

Formula code.

Formula version.

Ingredient list.

Ratio_to_rice.

## UOM.

Quantity đã scale.

Rounding.

Owner approval metadata.

## 21.2. Dữ liệu snapshot tối thiểu

Trường snapshot

Bắt buộc

Ghi chú

sku_code

Có

SKU sản xuất

sku_name_snapshot

Có

Tên tại thời điểm sản xuất

formula_code

Có

Mã công thức

formula_version

Có

Version đang dùng

formula_status_snapshot

Có

Trạng thái tại thời điểm snapshot

anchor_ingredient_code

Có

Gạo anchor

anchor_quantity

Có

Số kg gạo nhập

formula_lines_snapshot

Có

Toàn bộ dòng công thức

ratio_to_rice_snapshot

Có

Tỷ lệ tại thời điểm snapshot

uom_snapshot

Có

Đơn vị tại thời điểm snapshot

scaled_quantity

Có

Số lượng đã tính

rounding_policy_snapshot

Có

Quy tắc làm tròn

approved_by_snapshot

Có nếu active

Người duyệt công thức

approved_at_snapshot

Có nếu active

Thời điểm duyệt

snapshot_created_at

Có

Thời điểm tạo snapshot

snapshot_actor

Có

Người/hệ thống tạo snapshot

## 21.3. Phase 2 không được sửa snapshot ngược

Sau khi Production Order đã tạo snapshot:

Không được sửa snapshot theo version mới.

Không được tự động đổi G1 snapshot sang G2.

Không được thay nguyên liệu trong snapshot nếu không có version/workflow đặc biệt.

Không được để Material Request chọn tay nguyên liệu khác snapshot.

Không được để Material Issue cấp nguyên liệu ngoài snapshot nếu không có approved deviation.

## 22. KHONG MANUAL INGREDIENT SELECTION - KHÔNG CHỌN TAY NGUYÊN LIỆU Ở SẢN XUẤT

## 22.1. Nguyên tắc

nguồn tổng hợp đã khóa:

Không được cho người dùng chọn tay nguyên liệu ở lệnh sản xuất.

Không được cho người dùng chọn tay nguyên liệu ở phiếu cấp nguyên liệu.

Phiếu đề nghị cấp nguyên liệu phải tự hiện nguyên liệu theo công thức.

Phiếu chấp thuận nguyên liệu đưa vào sản xuất phải dựa trên từ phiếu đề nghị.

Phase 1 phải chuẩn bị formula đủ rõ để Phase 2 thực hiện được rule này.

## 22.2. Điều kiện để Phase 2 không cần chọn tay nguyên liệu

Phase 1 phải cung cấp:

SKU có formula active.

Formula có version.

Formula có line cụ thể.

Formula line có ingredient code.

Formula line có UOM.

Formula line có ratio_to_rice hoặc quantity.

Formula có snapshot-ready structure.

Formula không dùng nhóm mơ hồ.

Ingredient canonical đã chuẩn hóa.

UOM conversion đã chuẩn hóa.

Nếu Phase 1 thiếu các dữ liệu này, Phase 2 sẽ buộc phải cho chọn tay, gây sai governance.

## 23. SEED REQUIREMENT CHO FORMULA

## 23.1. Điều kiện trước khi seed formula

Không được seed formula nếu chưa có:

SKU canonical.

Ingredient canonical.

Ingredient alias mapping.

UOM master.

UOM conversion.

Recipe line group.

Formula header.

Formula lines.

Anchor gạo.

Ratio_to_rice.

Formula version.

Formula status.

Owner confirmation.

Seed idempotency rule.

## 23.2. Seed không được làm

Seed formula không được:

Tự set SKU sellable.

Tự set SKU released.

Tự set SKU production-ready.

Tự tạo production order.

Tự tạo raw lot.

Tự tạo material issue.

Tự mở inventory.

Tự tạo MISA mapping thật.

Tự tạo print payload.

Tự gọi Gateway PASS.

PHẦN 4/4 - EXECUTION ORDER / HANDOFF / SMOKE / DONE GATE / FAIL GATE

## 24. EXECUTION ORDER - THỨ TỰ XỬ LÝ FILE P1.2B

## 24.1. Thứ tự đọc tài liệu

Thứ tự

Tài liệu

Mục đích

## README-PHASE-01-HANDOFF-INDEX V1.1

Hiểu Phase 1 và boundary

## MASTER-DATA-NORMALIZATION-CHECKLIST

Biết dữ liệu cần chuẩn hóa

## 02-P1-2A-PRODUCT-SKU-INGREDIENT-UOM

Đối chiếu SKU/Ingredient/UOM

## 03-P1-2B-RECIPE-BOM-FORMULA-VERSION V2.0

Đọc file formula này

## 05-P1-2D-SKU-EXTENSION-SEED-GOVERNANCE

Đối chiếu seed formula sau khi viết lại

## 06-P1-2E-SMOKE-EVIDENCE-REPORT

Đối chiếu smoke/evidence sau khi viết lại

## 24.2. Thứ tự phân tích trước code

Khi giao cho dev/Codex/Copilot, phải theo thứ tự:

Documentation Reading.

Analysis Only.

Gap Matrix.

Owner Confirm Required.

Technical Design Only.

Limited Implementation, chỉ khi có lệnh riêng.

Smoke/Evidence Submission.

Owner Review.

## 25. DEV / CODEX / COPILOT HANDOFF

## 25.1. Mode mặc định

Khi giao file này cho Agent, mode mặc định là:

## ANALYSIS ONLY

Agent không được code ngay.

## 25.2. Prompt giao Agent đúng

Nội dung giao việc đúng:

Nhiệm vụ:

Lập Gap Matrix giữa tài liệu này và code hiện tại.

Liệt kê dữ liệu formula còn thiếu.

Liệt kê SKU/ingredient/UOM nào cần Owner confirm.

Liệt kê impacted files.

Liệt kê impacted database/migration nếu có.

Liệt kê impacted API/DTO/service/UI/worker nếu có.

Liệt kê risk P0/P1/P2.

Đề xuất implementation scope.

Đề xuất smoke/evidence.

Không sửa code.

Cấm:

Không tạo migration.

Không tạo seed.

Không sửa code.

Không tự suy luận formula.

Không tự suy luận ratio_to_rice.

Không tự hardcode UOM.

Không dùng nguồn tổng hợp để code trực tiếp.

Không gọi Completion Decision / Gateway PASS / Production Readiness.

## 25.3. Output Agent bắt buộc

Mục

Nội dung

Scope đã đọc

File, phase, module, mode

Rule P0

Formula version, anchor gạo, ratio_to_rice, no dirty seed

Boundary

No code, no seed, no manual ingredient

Gap Matrix

Rule tài liệu vs code hiện tại

Impacted Files

File có thể bị ảnh hưởng

DB/Migration Impact

Bảng/object có thể bị ảnh hưởng nếu có

API/DTO/Service/UI/Worker Impact

Layer có thể bị ảnh hưởng

Owner Confirm Required

Dữ liệu còn thiếu/mơ hồ

Risk Register

## P0/P1/P2

Proposed Implementation Scope

Đề xuất phạm vi sửa sau này

Proposed Smoke/Evidence

Test/evidence cần nộp

## 26. OWNER CONFIRM REQUIRED

Các dữ liệu sau bắt buộc Owner xác nhận trước khi seed/code:

Nhóm

Dữ liệu cần xác nhận

Vì sao chặn

## SKU

SKU nào có G1 formula

Tránh gắn nhầm công thức

Formula code

Mã công thức từng SKU

Tránh trùng/nhầm công thức

Formula version

G1/G2 hoặc version chính thức

Tránh sản xuất từ version mơ hồ

Formula status

Draft/Approved/Active

Tránh dùng công thức chưa duyệt

Anchor gạo

Ingredient code của gạo

Tránh scale sai

Anchor UOM

kg/g hoặc đơn vị khác

Tránh sai quantity

Ratio_to_rice

Tỷ lệ từng nguyên liệu

Là lõi tính nguyên liệu

Ingredient lines

Danh sách nguyên liệu cụ thể

Tránh công thức nhóm mơ hồ

## UOM

Đơn vị từng dòng

Tránh sai quy đổi

Rounding

Cách làm tròn

Tránh lệch nguyên liệu

Buffer policy

+5%/+7% chỉ planning

Tránh sửa formula

Version change rule

Khi nào tạo version mới

Tránh sửa G1 tại chỗ

Approval actor

Người duyệt công thức

Tránh active không có trách nhiệm

Effective date

Ngày hiệu lực

Tránh dùng nhầm version

## 27. SMOKE REQUIREMENTS CHO P1.2B

Chi tiết smoke sẽ được đưa vào file P1.2E, nhưng P1.2B phải khóa các smoke tối thiểu sau:

Mã smoke

Nội dung

## SMK-P1-2B-01

Formula G1 có formula_code, sku_code, version, status

## SMK-P1-2B-02

Mỗi G1 có đúng một anchor gạo

## SMK-P1-2B-03

Anchor gạo là ingredient canonical

## SMK-P1-2B-04

Mỗi formula line có ingredient_code cụ thể

## SMK-P1-2B-05

Không có formula line chỉ ghi group mơ hồ

## SMK-P1-2B-06

Mỗi line có UOM hợp lệ

## SMK-P1-2B-07

UOM khác nhau có conversion

## SMK-P1-2B-08

Mỗi line cần scale có ratio_to_rice

## SMK-P1-2B-09

Nhập kg gạo scale đúng toàn bộ line

## SMK-P1-2B-10

Đổi kg gạo không tạo formula version mới

## SMK-P1-2B-11

Đổi ratio_to_rice tạo formula version mới

## SMK-P1-2B-12

Thêm nguyên liệu tạo formula version mới

## SMK-P1-2B-13

Bỏ nguyên liệu tạo formula version mới

## SMK-P1-2B-14

Buffer +5%/+7% không làm thay đổi formula

## SMK-P1-2B-15

Formula snapshot giữ nguyên khi có version mới

## SMK-P1-2B-16

Seed formula idempotent

## SMK-P1-2B-17

Không seed formula chưa Owner confirm

## SMK-P1-2B-18

G0/research không active operational

## 28. EVIDENCE REQUIREMENTS

Mã evidence

Nội dung evidence

## EVD-P1-2B-FORMULA-HEADER

Danh sách formula header đã chuẩn hóa

## EVD-P1-2B-FORMULA-LINES

Danh sách formula line có ingredient cụ thể

## EVD-P1-2B-ANCHOR-RICE

Bằng chứng mỗi G1 có gạo anchor

## EVD-P1-2B-RATIO

Bảng ratio_to_rice

## EVD-P1-2B-UOM

Bằng chứng UOM hợp lệ và conversion

## EVD-P1-2B-SCALING

Kết quả test scale theo kg gạo

## EVD-P1-2B-VERSIONING

Test đổi tỷ lệ/thêm/bỏ nguyên liệu tạo version mới

## EVD-P1-2B-BUFFER

Bằng chứng buffer không sửa formula

## EVD-P1-2B-SNAPSHOT

Bằng chứng snapshot formula không bị đổi ngược

## EVD-P1-2B-OWNER-CONFIRM

Biên bản/chốt Owner confirm formula

## EVD-P1-2B-SEED-IDEMPOTENCY

Log seed idempotency nếu có seed sau này

## EVD-P1-2B-G0-BLOCK

Bằng chứng G0 không active operational

Lưu ý:

Evidence Submitted chưa phải Evidence Accepted.

Không được gọi PASS nếu evidence chưa được Owner/Reviewer chấp nhận.

## 29. RISK REGISTER P1.2B

Risk

Mức độ

Nguyên nhân

Cách kiểm soát

Công thức thiếu version

## P0

Formula chưa chuẩn hóa

Bắt buộc formula_version

G1 thiếu anchor gạo

## P0

Chưa map ingredient anchor

Owner confirm

Ratio_to_rice thiếu

## P0

Công thức chưa đủ dữ liệu

Chặn seed/code

Công thức dùng nhóm mơ hồ

## P0

Không có ingredient cụ thể

Bắt buộc line detail

UOM sai

## P0

Thiếu conversion

UOM checklist

Sửa G1 trực tiếp

## P0

Thiếu versioning guard

Formula version rule

Scale kg gạo bị hiểu là đổi công thức

## P1

Nhầm scaling với versioning

Rule scaling

Buffer cộng vào formula

## P0

Nhầm planning với production formula

Buffer boundary

Phase 2 chọn tay nguyên liệu

## P0

Formula thiếu detail

Snapshot-ready formula

Seed formula bẩn

## P0

Chưa Owner confirm

No dirty seed gate

G0 active operational

## P0

Nhầm research và production

G0 block

Snapshot bị cập nhật ngược

## P0

Không lưu snapshot

Snapshot requirement

## 30. DONE GATE

File P1.2B được xem là đạt khi:

Đã khóa Recipe phải gắn SKU.

Đã khóa Formula phải có version.

Đã khóa G1 là operational formula baseline.

Đã khóa G0/research không được active operational.

Đã khóa G2/G3 là version tương lai khi thay đổi công thức.

Đã khóa gạo là anchor ingredient.

Đã khóa mỗi formula G1 có đúng một anchor.

Đã khóa ratio_to_rice cho từng line cần scale.

Đã khóa formula scaling theo kg gạo.

Đã khóa scale kg gạo không tạo version mới.

Đã khóa đổi tỷ lệ/thêm/bỏ nguyên liệu phải tạo version mới.

Đã khóa formula line phải là nguyên liệu cụ thể.

Đã khóa line group không thay thế ingredient.

Đã khóa UOM và conversion requirement.

Đã khóa rounding policy.

Đã khóa buffer +5%/+7% chỉ là planning.

Đã khóa buffer không sửa công thức sản xuất.

Đã khóa formula snapshot cho Phase 2.

Đã khóa Phase 2 không chọn tay nguyên liệu.

Đã khóa seed formula chỉ sau Owner confirm.

Đã khóa Dev/Codex/Copilot handoff ở Analysis Only.

Đã khóa smoke/evidence cần có.

Không gọi Completion Decision.

Không gọi Gateway PASS.

Không gọi Production Readiness.

## 31. FAIL GATE

File P1.2B fail nếu xảy ra một trong các trường hợp sau:

Formula không có version.

Formula G1 không có anchor gạo.

Có nhiều anchor trong một formula.

Anchor không phải ingredient canonical.

Formula line thiếu ingredient_code.

Formula line chỉ ghi group mơ hồ.

Formula line thiếu UOM.

UOM thiếu conversion khi cần.

Thiếu ratio_to_rice.

Agent tự suy luận ratio_to_rice.

Đổi kg gạo bị tạo version mới.

Đổi tỷ lệ nhưng không tạo version mới.

Thêm nguyên liệu nhưng không tạo version mới.

Bỏ nguyên liệu nhưng không tạo version mới.

Sửa G1 active trực tiếp.

G0/research được active operational.

Buffer +5%/+7% bị cộng vào formula.

Formula snapshot không lưu.

Production Order cho chọn tay nguyên liệu.

Material Request cho chọn tay nguyên liệu.

Seed formula chưa Owner confirm.

Seed formula tự set sellable/released/production-ready.

Code trực tiếp từ nguồn tổng hợp.

Dev/Codex/Copilot sửa code khi đang Analysis Only.

Gọi Evidence Submitted là Evidence Accepted.

Gọi Completion Decision.

Gọi Gateway PASS.

Gọi Production Readiness.

Gọi Go-live Decision.

Hạng mục

Trạng thái

Documentation review

## READY FOR OWNER REVIEW

Phase

## PHASE 1

Module

Recipe / BOM / Formula Version

Implementation authorization

KHONG

Code authorization

KHONG

Migration authorization

KHONG

Seed authorization

KHONG, cho đến khi Owner confirm và seed governance đạt

Limited implementation authorization

KHONG

Gateway status

bị chặn

Completion status

## WAITING IMPLEMENTATION EVIDENCE

Evidence status

## NOT ACCEPTED

Release status

Production Readiness

KHONG

Go-live Decision

KHONG

Tài liệu kế tiếp

## 33. KẾT LUẬN ĐIỀU PHỐI P1.2B

Từ thời điểm dùng bản V2.0 này, toàn bộ Recipe/BOM/Formula trong Phase 1 phải tuân thủ các khóa sau:

Công thức phải gắn SKU.

Công thức phải có version.

G1 là công thức vận hành nền, không sửa trực tiếp sau khi khóa.

Gạo là anchor ingredient.

Ratio_to_rice là lõi để scale nguyên liệu.

Nhập kg gạo chỉ scale sản lượng, không đổi công thức.

Đổi tỷ lệ/thêm/bỏ nguyên liệu thì bắt buộc tạo Formula Version mới.

Công thức phải bung từng nguyên liệu cụ thể, không dùng nhóm mơ hồ.

UOM và conversion phải chuẩn hóa trước seed/code.

Buffer +5%/+7% là planning buffer, không sửa formula.

Phase 2 chỉ được tiêu thụ formula qua snapshot.

Production Order và Material Request không được chọn tay nguyên liệu.

Seed formula chỉ được thực hiện sau Owner confirm.

Không code trực tiếp từ nguồn tổng hợp.

Không gọi Gateway PASS hoặc Production Readiness.

Tài liệu kế tiếp cần viết lại toàn bộ là:
