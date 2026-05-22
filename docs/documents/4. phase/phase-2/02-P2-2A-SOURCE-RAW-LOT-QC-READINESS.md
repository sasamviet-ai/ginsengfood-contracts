# P2.2A - SOURCE RAW LOT QC READINESS

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-01 raw lot, QC and readiness control.
- PACK-03 procurement and material control.
- TECH-03 Source / Raw Lot / QC / Readiness.
- QC_PASS khong dong nghia READY_FOR_PRODUCTION.

## Noi Dung Rewrite

## 32. KẾT LUẬN ĐIỀU PHỐI P2.1

Từ thời điểm dùng bản V1.1 này, toàn bộ thiết kế kỹ thuật Phase 2 phải đi theo hướng:

Thiết kế trước, chưa code.

Chỉ chuyển sang P2.2A-P2.2E khi boundary đã rõ.

nguồn tổng hợp chỉ là nguồn phụ trợ.

Chuỗi phiếu phải tự sinh/dựa trên dữ liệu.

Production Dossier là root data.

Formula Snapshot là bắt buộc.

Không chọn tay nguyên liệu ở sản xuất/cấp nguyên liệu.

Material Issue là điểm debit chính.

Material Receipt không debit lần hai.

Ledger append-only.

QC_PASS không tự READY/RELEASED.

Warehouse chỉ nhận batch RELEASED.

Print payload do Ginsengfood sinh.

MISA không điều khiển vận hành.

Disposal/write-off không xóa tay.

Sale Lock thắng downstream.

Evidence Submitted chưa phải Accepted.

Gateway vẫn bị chặn.

Tài liệu kế tiếp cần viết lại toàn bộ là:

## 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS

## TÀI LIỆU ĐẶC TẢ SOURCE / RAW MATERIAL / RAW LOT / QC / READINESS CHO PHASE 2

Global Gate Status: bị chặn
Completion Status: WAITING IMPLEMENTATION EVIDENCE
Evidence Status: NOT ACCEPTED
Production Readiness: KHONG
Release Readiness: KHONG
Go-live Decision: KHONG
Default Agent Mode: LIMITED IMPLEMENTATION CHỈ KHI ĐÃ QUA ANALYSIS + TECHNICAL DESIGN + OWNER APPROVAL

## PHẦN 1/4 - PHASE MARKER / PURPOSE / SOURCE-OF-TRUTH / SCOPE

## 1. PHASE MARKER

Tài liệu này thuộc nhóm:

## PHASE-02-P2-2A-SOURCE-RAW-LOT-QC-READINESS

Đây là file đầu tiên trong nhóm triển khai giới hạn của Phase 2 - Operational Core.

File này phụ trách miền:

Source origin.

Raw material master consumption.

Phiếu tiếp nhận/đánh giá nguyên liệu đầu vào.

Phiếu nhập nguyên liệu đầu vào.

Raw material receipt.

Raw lot.

Incoming QC.

Raw lot readiness.

READY_FOR_PRODUCTION gate.

Issue eligibility boundary.

Sâm Savigin Company Source / strategic reserve.

Disposal/write-off cho nguyên liệu reject, hư hỏng, hết hạn.

MISA input boundary ở mức handoff, chưa phải full MISA integration.

Tài liệu này thay thế toàn bộ nội dung cũ của:

## 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS.docx

## 2. HEADER

Trường

Nội dung

Tên tài liệu

## 02-P2-2A-SOURCE-RAW-LOT-QC-READINESS

Phiên bản

Phase

## PHASE 2 - OPERATIONAL CORE

Workstream

## P2.2A

Loại tài liệu

Limited Implementation Handoff / Source-Raw-QC-Readiness

Nguồn chính

README Phase 2 V1.1 + P2.1 Technical Design

Nguồn phụ trợ

nguồn tổng hợp TÀI LIỆU.docx

Phụ thuộc Phase 1

Product/SKU/Ingredient/UOM/Source Type đã chuẩn hóa

Cho phép code ngay bởi file này?

Không, chỉ sau khi có lệnh Limited Implementation riêng

Cho phép migration ngay bởi file này?

Không

Cho phép seed ngay bởi file này?

Không

Cho phép Agent tự suy luận nghiệp vụ?

Không

Global Gate

bị chặn

Production Readiness

KHONG

## 3. PURPOSE - MỤC ĐÍCH TÀI LIỆU

Tài liệu này được viết lại để khóa miền đầu vào nguyên liệu của Operational Core.

Đây là điểm khởi đầu của toàn bộ chuỗi sản xuất, vì mọi sản xuất sau đó đều phụ thuộc vào nguyên liệu đầu vào có đúng, sạch, đủ QC và đủ readiness hay không.

Nếu miền P2.2A sai, các bước sau sẽ sai theo:

Material Issue có thể cấp sai nguyên liệu.

Production Order có thể dùng nguyên liệu chưa đủ điều kiện.

Batch có thể truy xuất sai lot.

Traceability bị sai từ gốc.

Recall không xác định đúng nguồn.

Tồn kho nguyên liệu sai.

Giá thành nội bộ sai.

MISA handoff sai.

Commerce/AI sau này có thể bán sản phẩm có nguồn nguyên liệu không đủ điều kiện.

Mục tiêu chính của tài liệu này:

Khóa phiếu nhập nguyên liệu đầu vào là nơi được click chọn nguyên liệu từ master.

Chặn việc nhập tên nguyên liệu tự do.

Khóa raw receipt và raw lot phải dựa trên material canonical, UOM, source type từ master.

Khóa Incoming QC là bước kiểm tra đầu vào, nhưng QC_PASS chưa đồng nghĩa READY_FOR_PRODUCTION.

Khóa Raw Lot chỉ được cấp cho sản xuất khi lot_status = READY_FOR_PRODUCTION.

Khóa Sâm Savigin là Company Source / strategic reserve, không xử lý như supplier material thường.

Khóa disposal/write-off cho nguyên liệu reject, expired, damaged, không được xóa tay tồn kho.

Khóa MISA boundary: Ginsengfood quản trị vận hành đầu vào; MISA chỉ hạch toán chính thức qua integration layer ở phase sau.

Khóa actor/permission/audit/idempotency/evidence cho mọi command rủi ro.

## 4. SOURCE-OF-TRUTH - THỨ BẬC NGUỒN SỰ THẬT

Tầng

Nguồn

Vai trò

Được dùng như thế nào

Không được làm

Tầng 0

MASTER Governance

Governance cao nhất

Giữ no-bypass, no-parallel-source, no-PASS-without-evidence

Không ghi đè bằng implementation cục bộ

Tầng 1

README Phase 2 V1.1

Điều phối Phase 2

Xác định scope, boundary, execution order

Không thay file chi tiết P2.2A

Tầng 2

P2.1 Technical Design V1.1

Thiết kế workstream

Cung cấp form registry, field behavior, state boundary

Không tự cho phép code

Tầng 3

P2.2A V1.1 này

Nguồn chính cho Source/Raw/QC/Readiness

Giao dev/Agent phân tích/triển khai giới hạn khi được mở

Không lấn sang P2.2B/C/D/E

Tầng 4

Phase 1 Product/SKU/Ingredient/UOM clean docs

Dữ liệu master nền

Cung cấp material canonical, UOM, source type

Không sửa Phase 1 trong file này

Tầng 5

nguồn tổng hợp TÀI LIỆU.docx

Nguồn phụ trợ nghiệp vụ

Đối chiếu raw intake, Sâm strategic reserve, disposal, MISA boundary

Không code/seed trực tiếp

Tầng 6

Code hiện tại

Hiện trạng triển khai

Dùng để gap analysis

Không là source-of-truth nếu conflict

## 5. SCOPE IN - PHẠM VI BAO GỒM

Tài liệu này bao gồm:

Source origin foundation.

Raw material master consumption.

Raw material intake.

Phiếu tiếp nhận/đánh giá nguyên liệu đầu vào.

Phiếu nhập nguyên liệu đầu vào.

Raw material receipt.

Raw lot generation.

Raw lot lifecycle.

Incoming QC.

QC result.

QC evidence.

HOLD / QUARANTINE / REJECTED / EXPIRED / DAMAGED status.

READY_FOR_PRODUCTION gate.

Readiness decision.

Issue eligibility boundary.

Sâm Savigin Company Source / harvest / intake / QC / readiness / strategic reserve.

Disposal request.

Disposal review.

Disposal executed.

Inventory ledger write-off boundary.

MISA input/accounting handoff boundary.

Actor / permission / audit / idempotency / evidence.

Smoke/evidence requirements cho P2.2A.

Report 15 mục cho P2.2A.

## 6. SCOPE OUT - PHẠM VI KHÔNG BAO GỒM

Tài liệu này không bao gồm:

Không triển khai Production Order đầy đủ.

Không triển khai Production Dossier.

Không triển khai Formula Snapshot.

Không triển khai Material Request đầy đủ.

Không triển khai Material Issue đầy đủ.

Không ghi raw inventory ledger debit cho sản xuất.

Không triển khai Material Receipt / Workshop Receipt đầy đủ.

Không triển khai Batch.

Không triển khai Batch QC.

Không triển khai Batch Release.

Không triển khai Warehouse Receipt thành phẩm.

Không triển khai Finished Goods Ledger.

Không triển khai Print / QR / Traceability đầy đủ.

Không triển khai Recall / Sale Lock đầy đủ.

Không triển khai Commerce Runtime.

Không quyết định Sellable.

Không triển khai full MRP/procurement.

Không triển khai full MISA Integration.

Không gọi Completion Decision.

Không gọi Gateway PASS.

Không gọi Release Readiness.

Không gọi Production Readiness.

Không gọi Go-live Decision.

## 7. ĐỊNH NGHĨA THUẬT NGỮ

Thuật ngữ

Định nghĩa

Source Origin

Nguồn gốc nguyên liệu hoặc vùng/đơn vị cung ứng

Raw Material

Nguyên liệu/vật tư đầu vào được quản trị trong master

Raw Material Receipt

Phiếu nhập nguyên liệu đầu vào vào hệ thống

Raw Lot

Lot nguyên liệu được sinh từ raw receipt

Incoming QC

Kiểm tra chất lượng nguyên liệu đầu vào

## QC_PASS

Kết quả QC đạt, nhưng chưa đồng nghĩa sẵn sàng sản xuất

## READY_FOR_PRODUCTION

Trạng thái lot đủ điều kiện để cấp vào sản xuất

## HOLD

Trạng thái tạm giữ, không được issue

## QUARANTINE

Trạng thái cách ly, không được issue

## REJECTED

Không đạt, không được issue

## EXPIRED

Hết hạn, không được issue

## DAMAGED

Hư hỏng, không được issue

Company Source

Nguồn do công ty sở hữu/quản trị, ví dụ Sâm Savigin

Strategic Reserve

Tồn kho dự trữ chiến lược

Disposal

Quy trình hủy/xử lý vật tư/nguyên liệu không dùng được

Write-off

Ghi giảm tồn kho bằng ledger có kiểm soát

Issue Eligibility

Điều kiện lot được phép cấp vào sản xuất

## PHẦN 2/4 - RAW INTAKE / RECEIPT / LOT / QC / READINESS MODEL

## 8. LUỒNG NGHIỆP VỤ TỔNG QUAN P2.2A

Luồng nghiệp vụ P2.2A:

Material Master -> Source Origin -> Raw Intake / Receipt -> Raw Lot -> Incoming QC -> Readiness Decision -> READY_FOR_PRODUCTION -> Issue Eligibility cho P2.2C

Trong đó:

Material Master đến từ dữ liệu đã chuẩn hóa ở Phase 1.

Raw Receipt là nơi được click chọn nguyên liệu từ master.

Raw Lot được sinh từ receipt hợp lệ.

Incoming QC đánh giá chất lượng đầu vào.

QC_PASS chỉ là một điều kiện của readiness.

READY_FOR_PRODUCTION là trạng thái riêng, chỉ được set khi đủ toàn bộ guard.

Raw lot chưa READY_FOR_PRODUCTION không được issue.

Raw lot HOLD/QUARANTINE/REJECTED/EXPIRED/DAMAGED không được issue.

Raw lot không đủ evidence theo policy không được mark READY.

Disposal/write-off phải đi qua flow riêng, không xóa tay tồn kho.

## 9. RAW MATERIAL MASTER CONSUMPTION

## 9.1. Nguyên tắc

P2.2A không tạo master nguyên liệu tùy tiện.

P2.2A chỉ tiêu thụ nguyên liệu đã được chuẩn hóa từ Phase 1:

Ingredient canonical.

Ingredient alias.

## UOM.

UOM conversion.

Material group A/B/Company Source.

Source type.

Procurement eligibility.

Formula eligibility.

Inventory eligibility.

Nếu material chưa có trong master, phiếu nhập nguyên liệu không được nhập text tự do để tạo nguyên liệu mới.

Trường hợp phát sinh nguyên liệu mới phải quay lại master data governance / Owner confirm.

## 9.2. Checklist material consumption

Trường

Bắt buộc

Quy tắc

material_code

Có

Click chọn từ master

canonical_name

Có

Tự hiện từ master

material_group

Có

A/B/Company Source/Other

material_subgroup

Có nếu có

A-specific/A-common/B1/B2

source_type

Có

Supplier / Company Source / Internal

default_uom

Có

Tự hiện

inventory_uom

Có

Tự hiện

purchase_uom

Có nếu supplier

Tự hiện hoặc map

conversion_rule

Có nếu khác UOM

Không được thiếu

status

Có

Chỉ material active/allowed mới được nhận

owner_confirmed

Có ở master

Không nhận material chưa xác nhận nếu policy chặn

## 9.3. Fail gate material master

Fail nếu:

Raw receipt cho nhập tên nguyên liệu tự do.

Raw receipt tạo material master mới không qua Owner confirm.

Material thiếu canonical name.

Material thiếu UOM.

Material thiếu source_type.

Sâm Savigin bị chọn như supplier material thường.

Material inactive vẫn được nhập kho.

Alias bị dùng làm material master riêng.

## 10. SOURCE ORIGIN MODEL

## 10.1. Mục tiêu

Source origin giúp hệ thống biết nguyên liệu đến từ đâu:

Supplier.

Company Source.

Internal source.

Harvest source.

Other source theo Owner confirm.

Source origin là dữ liệu quan trọng cho:

Traceability.

Recall.

## QC.

Raw lot.

MISA/accounting handoff.

Strategic reserve.

Supplier quality monitoring.

## 10.2. Checklist source origin

Trường

Bắt buộc

Quy tắc

source_origin_code

Có

Mã nguồn

source_origin_name

Có

Tên nguồn

source_type

Có

Supplier / Company Source / Internal / Harvest

supplier_code

Có nếu supplier

Không áp dụng cho Company Source nếu không có

company_source_flag

Có

TRUE nếu nguồn công ty

location_info

Tùy

Theo policy

status

Có

## ACTIVE / INACTIVE

evidence_required

Có nếu policy yêu cầu

Ví dụ chứng từ/COA/ảnh

audit_required

Có

Bắt buộc

## 10.3. Boundary source origin

Không được:

Dùng source origin để tự mở quyền nhập nguyên liệu chưa có master.

Dùng source origin để bỏ qua QC.

Dùng source origin để bỏ qua readiness.

Dùng source origin để tự xác nhận MISA accounting.

Dùng source origin supplier cho Sâm Savigin nếu Owner đã khóa là Company Source.

## 11. RAW INTAKE / RAW RECEIPT

## 11.1. Nguyên tắc

Phiếu nhập nguyên liệu đầu vào là nơi hợp lệ để người dùng click chọn nguyên liệu từ master.

Tại bước này, người dùng có thể nhập các dữ liệu thực tế như:

Số lượng nhận.

Chứng từ.

Ngày nhận.

Người giao.

Lô nhà cung cấp nếu có.

Ghi chú.

Evidence.

Kho/vị trí lưu tạm.

Nhưng người dùng không được nhập tên nguyên liệu tự do.

## 11.2. Field behavior raw receipt

Nhóm field

Hành vi

material_code

Click chọn từ master

material_name

Tự hiện từ master

material_group

Tự hiện từ master

source_type

Tự hiện từ master/source

source_origin

Click chọn từ source đã active

supplier

Click chọn nếu source_type = Supplier

received_quantity

Nhập tay

received_uom

Tự hiện hoặc chọn từ UOM hợp lệ

conversion

Tự hiện nếu khác UOM tồn kho

document_number

Nhập tay nếu có

received_date

Nhập tay/chọn ngày

evidence

Upload/chọn evidence

storage_location

Chọn kho/vị trí

note

Nhập tay có kiểm soát

receipt_status

Tự quản lý theo state

## 11.3. Raw receipt status

Status

Ý nghĩa

Cho phép sinh raw lot?

## DRAFT

Phiếu nháp

Không

## SUBMITTED

Đã gửi

Có thể nếu đủ data

## RECEIVED_WAITING_QC

Đã nhận, chờ QC

Có

## CANCELLED

Hủy

Không

bị chặn

Bị chặn vì thiếu data/evidence

Không

## 11.4. Fail gate raw receipt

Fail nếu:

Cho nhập material text tự do.

Cho tạo receipt thiếu material_code.

Cho tạo receipt thiếu quantity/UOM.

Cho tạo receipt từ material inactive.

Cho tạo receipt từ source inactive.

Không lưu evidence khi policy yêu cầu.

Không có audit actor.

Không có idempotency cho command tạo receipt nếu có side effect.

## 12. RAW LOT GENERATION

## 12.1. Nguyên tắc

Raw lot phải được sinh từ raw receipt hợp lệ.

Raw lot không được tạo trôi nổi.

Raw lot phải dựa trên:

Receipt code.

Material code.

Material canonical name.

Source type.

Source origin.

Quantity.

## UOM.

Storage location.

Evidence reference.

Actor/audit metadata.

## 12.2. Checklist raw lot

Trường

Bắt buộc

Quy tắc

raw_lot_code

Có

Mã lot duy nhất

raw_receipt_code

Có

Trỏ receipt nguồn

material_code

Có

dựa trên từ receipt

material_name_snapshot

Có

Snapshot

source_type_snapshot

Có

Supplier / Company Source

source_origin_snapshot

Có

Nguồn tại thời điểm nhận

received_quantity

Có

Số lượng nhận

current_quantity_projection

Có

Theo ledger/projection nếu có

uom

Có

Đơn vị tồn kho

qc_status

Có

## WAITING_QC / QC_PASS / QC_FAIL

lot_status

Có

Lifecycle/readiness riêng

storage_location

Có

Kho/vị trí

expiry_date

Có nếu áp dụng

Hạn dùng

hold_flag

Có

## TRUE/FALSE

quarantine_flag

Có

## TRUE/FALSE

evidence_refs

Có nếu policy yêu cầu

COA/ảnh/chứng từ

audit_log

Có

Bắt buộc

## 12.3. Raw lot status lifecycle

Lot Status

Ý nghĩa

Được issue không?

## CREATED

Lot vừa tạo

Không

## WAITING_QC

Chờ QC

Không

## QC_PASSED_WAITING_READINESS

QC đạt, chờ readiness

Không

## READY_FOR_PRODUCTION

Sẵn sàng cấp sản xuất

Có, nếu còn quantity và không hold

## HOLD

Tạm giữ

Không

## QUARANTINED

Cách ly

Không

## REJECTED

Bị loại

Không

## EXPIRED

Hết hạn

Không

## DAMAGED

Hư hỏng

Không

## DISPOSAL_WAITING

Chờ hủy

Không

## DISPOSED

Đã hủy/write-off

Không

## CONSUMED

Đã dùng hết

Không

## 12.4. Fail gate raw lot

Fail nếu:

Raw lot không linked receipt.

Raw lot không linked material.

Raw lot thiếu UOM.

Raw lot thiếu source type.

Raw lot thiếu status.

Raw lot QC_PASS tự thành READY_FOR_PRODUCTION.

Raw lot HOLD/QUARANTINED/REJECTED vẫn issue được.

Raw lot bị xóa khi hỏng thay vì disposal/write-off.

## 13. INCOMING QC

## 13.1. Nguyên tắc

Incoming QC là bước kiểm tra chất lượng nguyên liệu đầu vào.

QC có thể cho kết quả:

## QC_PASS.

## QC_FAIL.

## HOLD.

## QUARANTINE.

## NEEDS_RETEST.

## REJECTED.

Nhưng QC_PASS không đồng nghĩa READY_FOR_PRODUCTION.

QC_PASS chỉ là một điều kiện để lot được xét readiness.

## 13.2. Checklist incoming QC

Trường

Bắt buộc

Quy tắc

qc_record_code

Có

Mã QC

raw_lot_code

Có

Lot được QC

material_code

Có

dựa trên

qc_result

Có

PASS/FAIL/HOLD/QUARANTINE/RETEST

qc_checked_by

Có

Actor QC

qc_checked_at

Có

Thời điểm QC

qc_criteria

Có nếu policy yêu cầu

Tiêu chí kiểm

qc_evidence

Có nếu policy yêu cầu

Ảnh, biên bản, test result

rejected_quantity

Có nếu fail/reject

Số lượng không đạt

accepted_quantity

Có nếu pass một phần/toàn phần

Số lượng đạt

qc_note

Tùy

Ghi chú

audit_log

Có

Bắt buộc

## 13.3. QC result mapping

QC Result

Lot status sau QC

Được issue không?

## QC_PASSED_WAITING_READINESS

Không, cần readiness

REJECTED hoặc HOLD theo rule

Không

## HOLD

## HOLD

Không

## QUARANTINE

## QUARANTINED

Không

## NEEDS_RETEST

## WAITING_QC / RETEST_REQUIRED

Không

## PARTIAL_PASS

Cần split/accepted quantity theo rule

Chỉ phần đạt sau readiness

## 13.4. Fail gate incoming QC

Fail nếu:

QC_PASS tự set READY_FOR_PRODUCTION.

QC_FAIL vẫn cho issue.

HOLD vẫn cho issue.

QUARANTINE vẫn cho issue.

QC thiếu actor.

QC thiếu evidence khi policy yêu cầu.

QC sửa raw receipt gốc trái phép.

QC result bị dùng để tự tạo Material Issue.

## 14. READINESS GATE - READY_FOR_PRODUCTION

## 14.1. Nguyên tắc

READY_FOR_PRODUCTION là gate riêng, không phải QC result.

Một raw lot chỉ được mark READY_FOR_PRODUCTION nếu đạt đủ điều kiện:

Raw lot tồn tại.

Raw lot linked receipt hợp lệ.

Raw lot linked material active.

Raw lot có quantity/UOM hợp lệ.

Raw lot không HOLD.

Raw lot không QUARANTINED.

Raw lot không REJECTED.

Raw lot không EXPIRED.

Raw lot không DAMAGED.

Raw lot không DISPOSAL_WAITING.

Evidence cần thiết đã được accepted nếu policy yêu cầu.

Actor có quyền mark readiness.

Audit event được ghi.

Idempotency guard pass nếu command có side effect.

## 14.2. Readiness decision fields

Trường

Bắt buộc

Quy tắc

readiness_decision_code

Có

Mã quyết định

raw_lot_code

Có

Lot xét readiness

readiness_result

Có

READY / NOT_READY / bị chặn

readiness_reason

Có nếu not ready/bị chặn

Lý do

decided_by

Có

Actor

decided_at

Có

Thời điểm

evidence_status

Có nếu policy yêu cầu

## ACCEPTED / SUBMITTED / MISSING

previous_lot_status

Có

Trạng thái trước

target_lot_status

Có

READY_FOR_PRODUCTION nếu pass

audit_log

Có

Bắt buộc

## 14.3. Issue eligibility boundary

P2.2A chỉ thiết kế boundary cho issue eligibility.

P2.2A không triển khai Material Issue đầy đủ.

Material Issue đầy đủ thuộc P2.2C.

P2.2A phải đảm bảo output cho P2.2C:

Điều kiện

P2.2A phải cung cấp

Lot được issue

lot_status = READY_FOR_PRODUCTION

Lot không được issue

## HOLD / QUARANTINE / REJECTED / EXPIRED / DAMAGED / DISPOSED

Material identity

material_code/canonical/UOM

Quantity

available quantity/projection nếu có

Evidence

readiness/QC evidence

Audit

readiness event

Source

source type/origin snapshot

## 14.4. Fail gate readiness

Fail nếu:

QC_PASS được xem là READY_FOR_PRODUCTION.

Lot chưa READY vẫn pass issue eligibility.

Lot HOLD vẫn READY.

Lot QUARANTINE vẫn READY.

Lot REJECTED vẫn READY.

Lot EXPIRED vẫn READY.

Lot thiếu evidence accepted nhưng vẫn READY nếu policy yêu cầu.

Readiness không có actor/audit.

Readiness command retry tạo trạng thái bất nhất.

## PHẦN 3/4 - SÂM SAVIGIN / DISPOSAL / MISA / CROSS-CUTTING CONTROL

## 15. SÂM SAVIGIN COMPANY SOURCE / STRATEGIC RESERVE

## 15.1. Nguyên tắc

Sâm Savigin là:

Company Source / Strategic Reserve / theo mùa vụ

Không được xử lý như supplier material thông thường.

Không đưa Sâm Savigin vào phiếu thu mua supplier như nguyên liệu mua ngoài.

Khi đến kỳ thu hoạch, Sâm Savigin vẫn có thể đi qua:

Harvest -> Sơ chế nếu có -> Company Source Intake -> Raw Receipt -> Raw Lot -> Incoming QC -> Readiness -> Strategic Reserve / READY_FOR_PRODUCTION

## 15.2. Checklist Sâm Savigin

Trường

Bắt buộc

Quy tắc

material_code

Có

Mã nguyên liệu Sâm

canonical_name

Có

Tên chuẩn

source_type

Có

## COMPANY_SOURCE

company_source_flag

Có

## TRUE

procurement_eligible

Có

FALSE cho supplier purchase thường

harvest_eligible

Có

## TRUE

strategic_reserve

Có

TRUE nếu Owner khóa

harvest_batch_ref

Tùy

Theo mùa vụ

intake_process

Có

Company source intake

qc_required

Có

## TRUE

readiness_required

Có

## TRUE

reserve_location

Có nếu áp dụng

Kho/vị trí dự trữ

safety_threshold

Có nếu policy có

Ngưỡng an toàn

forecast_shortage_rule

Có nếu policy có

Cảnh báo thiếu

disposal_rule

Có

Nếu hỏng/hết hạn

## 15.3. Sâm Savigin không được làm

Không được:

Seed hoặc xử lý Sâm như supplier material thường.

Đưa Sâm vào phiếu thu mua supplier theo threshold mua ngoài.

Bỏ qua QC vì là Company Source.

Bỏ qua readiness vì là Company Source.

Issue Sâm khi chưa READY_FOR_PRODUCTION.

Xóa tay tồn kho Sâm hỏng/hết hạn.

Áp purchase suppression thường làm chặn harvest theo mùa vụ.

## 16. DISPOSAL / WRITE-OFF CHO NGUYÊN LIỆU ĐẦU VÀO

## 16.1. Nguyên tắc

Nguyên liệu reject, expired, damaged, contaminated, hoặc không thể dùng phải đi qua flow disposal/write-off.

Không được xóa tay tồn kho.

Flow bắt buộc:

Disposal Request -> QA/Owner Review -> Disposal Approved/Rejected -> Disposal Executed -> Inventory Ledger Write-off -> Evidence/Audit

## 16.2. Khi nào kích hoạt disposal

Tình huống

Kích hoạt disposal?

QC_FAIL toàn bộ

Có

QC_FAIL một phần

Có cho phần reject

Hết hạn

Có

Hư hỏng

Có

Nhiễm bẩn

Có

Bao bì/vật tư hư

Có nếu thuộc inventory

Sâm hỏng/hết hạn

Có, theo Company Source disposal

Hold tạm thời

Chưa, nếu chưa có quyết định hủy

Quarantine chờ kết quả

Chưa, nếu chưa có quyết định hủy

## 16.3. Checklist disposal

Trường

Bắt buộc

Quy tắc

disposal_request_code

Có

Mã yêu cầu

item_type

Có

Raw material / packaging / other

raw_lot_code

Có nếu là lot

Lot liên quan

material_code

Có

Nguyên liệu

quantity

Có

Số lượng hủy

uom

Có

Đơn vị

reason_code

Có

Lý do

requested_by

Có

Actor

requested_at

Có

Thời điểm

qa_review_status

Có

## WAITING/APPROVED/REJECTED

owner_approval_status

Có nếu policy yêu cầu

## WAITING/APPROVED/REJECTED

executed_by

Có khi thực hiện

Actor

executed_at

Có khi thực hiện

Thời điểm

ledger_writeoff_ref

Có sau write-off

Event ledger

evidence_ref

Có

Bằng chứng

audit_log

Có

Bắt buộc

## 16.4. Fail gate disposal

Fail nếu:

Nguyên liệu reject bị xóa khỏi DB.

Lot expired bị xóa tay tồn kho.

Disposal không có request.

Disposal không có QA/Owner review.

Disposal không có evidence.

Disposal không có ledger write-off.

Disposal không có audit.

Disposal làm mất trace raw lot.

## 17. MISA INPUT / ACCOUNTING BOUNDARY

## 17.1. Nguyên tắc

P2.2A có thể tạo dữ liệu đầu vào cần thiết cho kế toán sau này, nhưng không triển khai full MISA Integration.

Ginsengfood sở hữu operational truth.

MISA hạch toán chính thức thông qua integration layer riêng.

MISA không điều khiển:

Source.

Raw receipt.

Raw lot.

Incoming QC.

Readiness.

Disposal decision.

Traceability.

Production eligibility.

## 17.2. P2.2A có thể chuẩn bị gì cho MISA

Hạng mục

Có thể chuẩn bị

Không được làm

Raw receipt accounting data

Có field/handoff placeholder

Không post MISA thật

Supplier/material mapping

Có mapping placeholder

Không hardcode MISA code

Receipt value/cost placeholder

Có nếu policy cần

Không hạch toán chính thức

Sync status placeholder

Có

Không coi sync là operational state

Error log placeholder

Có

Không để MISA fail làm mất receipt

## 17.3. Fail gate MISA boundary

Fail nếu:

MISA tạo raw receipt.

MISA sửa raw lot.

MISA sửa QC result.

MISA mark READY_FOR_PRODUCTION.

MISA hủy lot.

MISA xóa tồn kho.

MISA sync fail làm mất operational truth.

MISA code bị hardcode không qua mapping.

## 18. ACTOR / PERMISSION / AUDIT / IDEMPOTENCY / EVIDENCE

## 18.1. Command rủi ro trong P2.2A

Command

Actor

Permission

Audit

Idempotency

Evidence

Create raw receipt

Bắt buộc

Bắt buộc

Bắt buộc

Bắt buộc nếu có side effect

Có nếu policy yêu cầu

Generate raw lot

System/Actor

Bắt buộc

Bắt buộc

Bắt buộc

Receipt evidence

Submit incoming QC

QC actor

Bắt buộc

Bắt buộc

Bắt buộc

QC evidence

Mark readiness

QA/Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Readiness evidence

Hold/quarantine lot

QA/Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Reason/evidence

Reject lot

## QC/QA

Bắt buộc

Bắt buộc

Bắt buộc

QC/reject evidence

Create disposal request

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Evidence

Approve disposal

QA/Owner

Bắt buộc

Bắt buộc

Bắt buộc

Review evidence

Execute disposal/write-off

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Execution evidence

## 18.2. Fail gate cross-cutting

Fail nếu:

Command thiếu actor.

Command thiếu permission.

Command thiếu audit.

Retry tạo duplicate raw receipt/lot.

Retry readiness tạo trạng thái bất nhất.

Evidence SUBMITTED được xem là ACCEPTED khi policy yêu cầu accepted.

Hệ thống suy đoán khi dependency unavailable.

Command có side effect nhưng không idempotency.

## 19. ENTITY / API / SERVICE BOUNDARY

## 19.1. Entity impact draft

Tài liệu này không tạo migration, nhưng implementation sau này có thể cần rà soát các nhóm entity:

Nhóm entity

Vai trò

source_origin

Nguồn nguyên liệu

raw_material_receipt

Phiếu nhập nguyên liệu

raw_lot

Lot nguyên liệu

incoming_qc

QC đầu vào

raw_lot_readiness

Quyết định readiness

raw_lot_hold

Hold/quarantine nếu tách

disposal_request

Yêu cầu hủy

disposal_execution

Thực hiện hủy

inventory_ledger_writeoff

Write-off nếu thuộc ledger foundation

evidence_ref

Liên kết evidence

audit_log

Audit

idempotency_record

Chống retry trùng

## 19.2. API/service boundary

Nhóm

Mục tiêu

Không được

Raw receipt API

Tạo/đọc receipt

Không tạo material master tùy tiện

Raw lot API

Đọc lot/status

Không mark READY từ QC_PASS tự động

Incoming QC API

Ghi QC result

Không issue nguyên liệu

Readiness API

Mark READY nếu pass guard

Không bỏ qua hold/quarantine

Hold/quarantine API

Chặn lot

Không xóa lot

Disposal API

Request/review/execute

Không xóa tồn kho

MISA handoff placeholder

Chuẩn bị sync boundary

Không post MISA thật nếu chưa phase

Evidence service

Link evidence

Không coi submitted là accepted

Audit service

Ghi audit

Không bỏ audit ở command rủi ro

PHẦN 4/4 - EXECUTION ORDER / HANDOFF / SMOKE / DONE GATE / FAIL GATE

## 20. EXECUTION ORDER P2.2A

Khi sau này được phép triển khai, P2.2A phải đi theo thứ tự:

Thứ tự

Việc cần làm

Output

Đọc README Phase 2 V1.1

Hiểu boundary Phase 2

Đọc P2.1 Technical Design V1.1

Hiểu form registry / field behavior

Đọc P2.2A V1.1 này

Hiểu Source/Raw/QC/Readiness

Analysis code hiện tại

Gap matrix

Owner Confirm nếu thiếu dữ liệu

Owner confirm list

Technical implementation plan

Task breakdown

Limited implementation nếu được mở

Code trong scope

Smoke P2.2A

Smoke result

Evidence submission

Evidence package

10

Report 15 mục

Handoff update

Hiện tại trong cuộc làm tài liệu này:

Chỉ viết lại tài liệu sạch, chưa mở implementation.

## 21. DEV / CODEX / COPILOT HANDOFF

## 21.1. Mode mặc định

Khi giao file này cho Agent:

## MODE: LIMITED IMPLEMENTATION CHỈ KHI ĐÃ CÓ APPROVED ANALYSIS + TECHNICAL DESIGN

Nếu chưa có approval, phải dùng:

## MODE: ANALYSIS ONLY

## 21.2. Prompt đúng cho Agent

MODE hiện tại: ANALYSIS ONLY nếu chưa có Owner/dev lead approval.

Nhiệm vụ:

Lập Gap Matrix giữa tài liệu P2.2A và code hiện tại.

Liệt kê entity/table hiện có hoặc thiếu.

Liệt kê API/DTO/service/UI/worker bị ảnh hưởng.

Liệt kê điểm raw receipt cho phép nhập material tự do nếu có.

Liệt kê nơi QC_PASS đang bị dùng nhầm thành READY_FOR_PRODUCTION nếu có.

Liệt kê nơi raw lot chưa READY vẫn có thể issue nếu có.

Liệt kê nơi Sâm Savigin bị xử lý như supplier material nếu có.

Liệt kê nơi disposal đang xóa tay tồn kho nếu có.

Liệt kê nơi MISA đang mutate operational truth nếu có.

Đề xuất implementation scope.

Đề xuất smoke/evidence.

Không sửa code nếu chưa có lệnh Limited Implementation riêng.

Cấm:

Không code trực tiếp từ nguồn tổng hợp.

Không tạo migration khi chưa duyệt.

Không seed dữ liệu khi chưa Owner confirm.

Không tự tạo material master.

Không tự suy luận UOM/source type.

Không triển khai Production Order đầy đủ.

Không triển khai Material Issue đầy đủ.

Không gọi Gateway PASS.

Không gọi Production Readiness.

## 22. OWNER CONFIRM REQUIRED

Các điểm cần Owner/dev lead xác nhận trước implementation:

Nhóm

Nội dung cần xác nhận

Raw material intake

Phiếu tiếp nhận và phiếu nhập có tách riêng không hay gom UI

Material selection

Field nào click chọn từ master

Source origin

Danh sách source type hợp lệ

Supplier boundary

Khi nào cần supplier, khi nào không

Sâm Savigin

Company Source, harvest route, reserve threshold

Raw receipt evidence

Chứng từ/evidence bắt buộc

Raw lot code

Quy tắc mã lot

Incoming QC

Tiêu chí QC đầu vào

QC status

PASS/FAIL/HOLD/QUARANTINE/RETEST mapping

Readiness policy

Điều kiện READY_FOR_PRODUCTION

Evidence policy

Khi nào evidence phải accepted

Hold/quarantine

Ai có quyền hold/quarantine

Disposal reason

Lý do hủy/write-off

Disposal approval

QA/Owner approval route

MISA boundary

Field handoff kế toán, chưa full sync

## RBAC

Ai được tạo/duyệt/QC/readiness/dispose

Idempotency

Command nào cần key

Audit

Audit field bắt buộc

## 23. STOP CONDITIONS

Dev/Agent phải dừng nếu gặp:

Mã

Điều kiện dừng

Hành động

## P2-2A-STOP-01

Material chưa có canonical

Owner confirm / quay lại Phase 1

## P2-2A-STOP-02

UOM thiếu conversion

Owner confirm / quay lại Phase 1

## P2-2A-STOP-03

Raw receipt cho nhập material tự do

Dừng P0

## P2-2A-STOP-04

Raw lot không linked receipt

Dừng P0

## P2-2A-STOP-05

QC_PASS tự READY_FOR_PRODUCTION

Dừng P0

## P2-2A-STOP-06

Lot chưa READY vẫn issue được

Dừng P0

## P2-2A-STOP-07

HOLD/QUARANTINE/REJECTED vẫn issue được

Dừng P0

## P2-2A-STOP-08

Sâm Savigin là supplier material thường

Dừng P0

## P2-2A-STOP-09

Disposal xóa tay tồn kho

Dừng P0

## P2-2A-STOP-10

MISA mutate raw lot/QC/readiness

Dừng P0

## P2-2A-STOP-11

Command rủi ro thiếu actor/audit

Dừng P0

## P2-2A-STOP-12

Evidence SUBMITTED được coi là ACCEPTED

Dừng P0

## P2-2A-STOP-13

Agent chuẩn bị code khi chưa approval

Dừng

## P2-2A-STOP-14

Scope lấn sang Production Order/Material Issue đầy đủ

Dừng, chuyển đúng file P2.2B/C

## P2-2A-STOP-15

Có ý định gọi Gateway PASS/Production Readiness

Dừng

## 24. SMOKE REQUIREMENTS P2.2A

Mã smoke

Nội dung

Expected

## SMK-P2-2A-01

Tạo raw receipt với material từ master

Receipt được tạo

## SMK-P2-2A-02

Tạo raw receipt nhập material text tự do

Bị reject

## SMK-P2-2A-03

Raw receipt thiếu quantity/UOM

Bị reject

## SMK-P2-2A-04

Raw receipt từ material inactive

Bị reject

## SMK-P2-2A-05

Tạo raw lot từ receipt hợp lệ

Raw lot CREATED/WAITING_QC

## SMK-P2-2A-06

Raw lot không linked receipt

Bị reject

## SMK-P2-2A-07

Incoming QC PASS

Lot QC_PASS nhưng chưa READY_FOR_PRODUCTION

## SMK-P2-2A-08

Incoming QC FAIL

Lot không READY, có reject/hold/disposal route

## SMK-P2-2A-09

Incoming QC HOLD/QUARANTINE

Lot không READY

## SMK-P2-2A-10

Mark READY khi QC_PASS + đủ guard

Lot READY_FOR_PRODUCTION

## SMK-P2-2A-11

Mark READY khi HOLD/QUARANTINE/REJECTED

Bị reject

## SMK-P2-2A-12

Issue eligibility lot chưa READY

Không pass

## SMK-P2-2A-13

Sâm Savigin intake

Source type COMPANY_SOURCE

## SMK-P2-2A-14

Sâm Savigin supplier purchase route thường

Bị chặn

## SMK-P2-2A-15

Disposal request cho lot rejected/expired/damaged

Tạo request/review route

## SMK-P2-2A-16

Xóa tay tồn kho rejected lot

Bị chặn

## SMK-P2-2A-17

Evidence required nhưng chỉ SUBMITTED

Không pass nếu policy cần ACCEPTED

## SMK-P2-2A-18

Retry create receipt same key/payload

Không duplicate

## SMK-P2-2A-19

Same idempotency key different payload

Conflict

## SMK-P2-2A-20

Command thiếu actor/permission

## DENY/BLOCK

## SMK-P2-2A-21

MISA mutate raw lot/QC/readiness

Bị chặn

## 25. EVIDENCE REQUIREMENTS P2.2A

Mã evidence

Nội dung evidence

## EVD-P2-2A-RAW-RECEIPT

Raw receipt tạo từ material master

## EVD-P2-2A-NO-FREE-MATERIAL

Bằng chứng không nhập material tự do

## EVD-P2-2A-RAW-LOT

Raw lot linked receipt/material/source/UOM

EVD-P2-2A-QC-PASS-NOT-READY

QC_PASS chưa READY

## EVD-P2-2A-READINESS

Readiness decision + audit

## EVD-P2-2A-ISSUE-ELIGIBILITY

Lot chưa READY không pass issue eligibility

## EVD-P2-2A-HOLD-QUARANTINE

HOLD/QUARANTINE không issue

## EVD-P2-2A-SAM

Sâm Savigin Company Source / strategic reserve

## EVD-P2-2A-DISPOSAL

Disposal request/review/write-off boundary

## EVD-P2-2A-MISA-BOUNDARY

MISA không mutate operational truth

## EVD-P2-2A-AUDIT

Actor/permission/audit evidence

## EVD-P2-2A-IDEMPOTENCY

Retry không tạo duplicate

EVD-P2-2A-GATEWAY-bị chặn

Gateway vẫn bị chặn

Evidence Submitted chưa phải Evidence Accepted.

## 26. RISK REGISTER P2.2A

Risk

Mức độ

Nguyên nhân

Kiểm soát

Nhập material tự do

## P0

UI/API không bắt chọn master

Field behavior guard

QC_PASS bị hiểu là READY

## P0

Gộp trạng thái QC/readiness

Tách qc_status và lot_status

Lot chưa READY vẫn issue

## P0

Issue eligibility sai

Guard lot_status

Sâm bị supplier hóa

## P0

Source type sai

Company Source rule

Disposal xóa tay tồn kho

## P0

Thiếu write-off flow

Disposal boundary

UOM sai

## P0

Thiếu conversion

Phase 1 UOM dependency

MISA điều khiển readiness

## P0

Tích hợp sai boundary

MISA handoff only

Evidence submitted được pass

## P0

Sai evidence state

Evidence policy

Retry tạo duplicate receipt/lot

## P1

Thiếu idempotency

Idempotency key

Missing audit

## P1

Command thiếu actor/correlation

Audit required

## 27. REPORT FORMAT 15 MỤC CHO P2.2A

Mọi report P2.2A phải có đủ 15 mục:

Tóm tắt.

File đã sửa.

Nguồn yêu cầu.

Evidence đã dùng.

Lệnh đã chạy.

Kết quả test.

Kết quả backend build.

Kết quả frontend build.

Kết quả cleanup process.

Cập nhật Markdown/tài liệu.

Kết quả database migration/update nếu áp dụng.

Kết quả seed validation nếu áp dụng.

Rủi ro còn lại.

Cập nhật handoff.

Đề xuất tiếp theo.

Nếu thiếu 15 mục, không được chuyển sang P2.2B.

## 28. DONE GATE P2.2A

P2.2A được xem là đạt ở mức handoff/implementation report khi:

Raw receipt chỉ chọn material từ master.

Không cho nhập material text tự do.

Raw receipt có quantity/UOM hợp lệ.

Raw lot linked receipt.

Raw lot linked material/source/UOM.

Incoming QC có result/evidence/audit.

QC_PASS không tự READY_FOR_PRODUCTION.

Readiness gate tách riêng.

Chỉ lot READY_FOR_PRODUCTION mới pass issue eligibility.

HOLD/QUARANTINE/REJECTED/EXPIRED/DAMAGED không issue được.

Sâm Savigin là Company Source / strategic reserve.

Sâm không vào supplier purchase thường.

Disposal/write-off không xóa tay tồn kho.

MISA không mutate raw lot/QC/readiness.

Actor/permission/audit/idempotency/evidence được kiểm soát.

Có smoke result.

Có evidence package.

Có report 15 mục.

Không lấn sang Production Order đầy đủ.

Không lấn sang Material Issue đầy đủ.

Gateway vẫn bị chặn.

Không gọi Completion Decision.

Không gọi Production Readiness.

## 29. FAIL GATE P2.2A

P2.2A fail nếu xảy ra một trong các trường hợp:

Raw receipt nhập material tự do.

Raw receipt thiếu material_code.

Raw receipt thiếu quantity/UOM.

Raw lot không linked receipt.

Raw lot không linked material.

QC_PASS tự set READY_FOR_PRODUCTION.

Raw lot chưa READY vẫn issue được.

HOLD/QUARANTINE/REJECTED/EXPIRED/DAMAGED vẫn issue được.

Sâm Savigin xử lý như supplier material thường.

Sâm bỏ qua QC/readiness.

Disposal bằng cách xóa tay tồn kho.

Disposal không evidence/audit.

MISA sửa raw lot/QC/readiness.

Command rủi ro thiếu actor.

Command rủi ro thiếu permission.

Command rủi ro thiếu audit.

Retry tạo duplicate side effect.

Evidence Submitted bị gọi Accepted.

Lấn sang Production Order đầy đủ.

Lấn sang Material Issue đầy đủ.

Gọi Gateway PASS.

Gọi Release Readiness.

Gọi Production Readiness.

Gọi Go-live Decision.

Hạng mục

Trạng thái

Documentation review

## READY FOR OWNER REVIEW

Phase

## PHASE 2 - OPERATIONAL CORE

Workstream

P2.2A - Source / Raw Lot / QC / Readiness

Implementation authorization by this document

KHONG

Code authorization by this document

KHONG

Migration authorization by this document

KHONG

Seed authorization by this document

KHONG

Limited implementation authorization

Chỉ khi Owner/dev lead mở riêng

Evidence status

NOT ACCEPTED mặc định

Gateway status

bị chặn

Global Smoke Pass

KHONG

Completion Decision

KHONG

Release Readiness

KHONG

Production Readiness

KHONG

Go-live Decision

KHONG

Tài liệu kế tiếp
