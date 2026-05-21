# P2.2E - TRACEABILITY QR RECALL SALE LOCK

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PACK-01 Traceability / QR / Recall / Sale Lock.
- TECH-03 Traceability / Recall / Sale Lock.
- PACK-10 Evidence / Smoke Gateway.
- Recall / Sale Lock thang downstream.

## Noi Dung Rewrite

## 32. KẾT LUẬN ĐIỀU PHỐI P2.2D

Từ thời điểm dùng bản V2.0 này, miền Batch / QC / Release / Warehouse / Inventory phải tuân thủ các khóa sau:

Batch phải linked Production Dossier.

Batch phải dựa trên SKU, formula snapshot, material genealogy.

Batch không được tạo trôi nổi.

Sơ chế, sấy, QC sau sấy, đóng gói cấp 1, đóng gói cấp 2, QC thành phẩm phải dựa trên batch/dossier.

Batch QC_PASS không đồng nghĩa RELEASED.

Batch Release là gate riêng.

Batch HOLD/REJECTED/QC_FAIL không được release.

Warehouse chỉ nhận batch RELEASED.

Finished Goods Ledger Credit chỉ tạo khi Warehouse Receipt confirmed.

Retry Warehouse Receipt không được double credit.

Warehouse Receipt không được tự set Sellable.

Finished Goods Inventory không tự Sellable.

Print cấp 1 chỉ in MFG/HSD.

Print cấp 2 in batch/MFG/HSD/barcode/QR.

Máy in chỉ nhận payload, không tự sinh mã.

Disposal/write-off không được xóa tay batch/thành phẩm/bao bì.

MISA không điều khiển batch/release/warehouse/ledger.

Actor/permission/audit/idempotency/evidence là bắt buộc.

Evidence Submitted chưa phải Evidence Accepted.

Global Gate vẫn bị chặn.

Tài liệu kế tiếp cần viết lại toàn bộ là:

## 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK

## TÀI LIỆU ĐẶC TẢ TRACEABILITY / QR / PUBLIC TRACE / RECALL / HOLD / SALE LOCK CHO PHASE 2

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

## PHASE-02-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK

Đây là file thứ năm trong nhóm triển khai giới hạn của Phase 2 - Operational Core.

File này phụ trách miền:

Internal traceability.

Internal genealogy.

Trace projection.

Trace gap detection.

QR foundation.

Barcode foundation.

QR lifecycle.

QR public-valid guard.

Print payload trace boundary.

Reprint control.

Public Trace whitelist DTO.

Public Trace private/internal field suppression.

Recall Case.

Recall Impact Analysis.

Hold.

Sale Lock.

Downstream suppression boundary.

Commerce/AI/Gateway/Ads/Live/CRM/IVR suppression boundary.

Actor / permission / audit / idempotency / evidence.

Smoke/evidence cho P2.2E.

Report 15 mục cho P2.2E.

Tài liệu này thay thế toàn bộ nội dung cũ của:

## 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK.docx

## 2. HEADER

Trường

Nội dung

Tên tài liệu

## 06-P2-2E-TRACEABILITY-QR-RECALL-SALE-LOCK

Phiên bản

Phase

## PHASE 2 - OPERATIONAL CORE

Workstream

## P2.2E

Loại tài liệu

Limited Implementation Handoff / Traceability-QR-Recall-SaleLock

Nguồn chính

README Phase 2 V1.1 + P2.1 Technical Design + P2.2B/C/D

Nguồn phụ trợ

nguồn tổng hợp TÀI LIỆU.docx

Phụ thuộc Phase 1

SKU / Formula / Packaging Profile / UOM / Public-safe field policy

Phụ thuộc P2.2B

Production Dossier / Formula Snapshot

Phụ thuộc P2.2C

Material Issue / Raw Lot / Ledger

Phụ thuộc P2.2D

Batch / Release / Warehouse Receipt / Packaging / Print boundary

Cho phép code ngay bởi file này?

Không, chỉ sau khi có lệnh Limited Implementation riêng

Cho phép migration ngay bởi file này?

Không

Cho phép seed ngay bởi file này?

Không

Cho phép Agent tự suy luận public trace field?

Không

Global Gate

bị chặn

Production Readiness

KHONG

## 3. PURPOSE - MỤC ĐÍCH TÀI LIỆU

Tài liệu này được viết lại để khóa lớp truy xuất, QR, public trace, recall và sale lock của Operational Core.

Đây là lớp bảo vệ cuối của Phase 2 trước khi dữ liệu vận hành được các hệ sau tiêu thụ, gồm:

Commerce Runtime.

AI Advisor Runtime.

Facebook Gateway.

Ads Measurement.

MC AI Live.

## CRM.

## IVR.

Public Trace cho khách hàng.

Nếu P2.2E sai, hệ thống có thể phát sinh các lỗi nghiêm trọng:

Public Trace lộ dữ liệu nội bộ.

QR lỗi vẫn tra cứu hợp lệ.

QR VOID/FAILED vẫn public-valid.

Máy in hoặc printer tự sinh mã ngoài hệ thống.

Reprint không có kiểm soát, gây rủi ro tem/nhãn giả.

Traceability không dựng được genealogy từ raw lot -> production -> batch -> warehouse.

Recall không xác định được batch/QR/SKU bị ảnh hưởng.

Sale Lock không chặn Commerce/AI/Gateway/Ads/Live/CRM/IVR.

Sản phẩm bị recall vẫn được chốt đơn.

Sản phẩm bị hold vẫn được quảng cáo/livestream/tư vấn.

Internal defect/loss/cost/personnel/audit bị lộ ra public.

Phase 3 có thể dùng sai operational truth để mở bán.

Mục tiêu chính của tài liệu này:

Khóa traceability phải bám theo Production Dossier và genealogy nội bộ.

Khóa QR cấp 2 phải gắn batch/MFG/HSD/barcode/QR theo payload do Ginsengfood sinh.

Khóa máy in chỉ nhận payload, in và trả trạng thái.

Khóa máy in không được tự sinh batch, MFG, HSD, barcode, QR.

Khóa QR VOID/FAILED/bị chặn không public-valid.

Khóa Public Trace whitelist-only.

Khóa Public Trace không lộ private/internal field.

Khóa Reprint phải có lý do, quyền, log và audit.

Khóa Recall Case và Impact Analysis.

Khóa Hold / Sale Lock.

Khóa Sale Lock thắng Commerce/AI/Gateway/Ads/Live/CRM/IVR.

Khóa actor/permission/audit/idempotency/evidence cho mọi command rủi ro.

Khóa Evidence Submitted chưa phải Evidence Accepted.

Khóa Global Gate vẫn bị chặn.

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

Không thay file chi tiết P2.2E

Tầng 2

P2.1 Technical Design V1.1

Thiết kế workstream

Cung cấp form registry, field behavior, data inheritance

Không tự cho phép code

Tầng 3

P2.2B Production Order / Dossier / Snapshot

Production root truth

Cung cấp Production Dossier và Formula Snapshot

Không dựng trace nếu thiếu dossier

Tầng 4

P2.2C Material Issue / Receipt / Ledger

Raw material movement truth

Cung cấp raw lot/material issue genealogy

Không tự tạo issue trong P2.2E

Tầng 5

P2.2D Batch / Release / Warehouse / Packaging

Finished goods truth

Cung cấp batch, warehouse receipt, packaging/print boundary

Không tự release/warehouse trong P2.2E

Tầng 6

P2.2E V1.1 này

Nguồn chính cho Trace/QR/Recall/Sale Lock

Giao dev/Agent phân tích/triển khai giới hạn khi được mở

Không lấn sang Commerce/AI/Gateway full

Tầng 7

Phase 1 SKU/Formula/Packaging Profile

Dữ liệu nền

Cung cấp SKU, packaging profile, public-safe reference

Không sửa Phase 1 trong file này

Tầng 8

nguồn tổng hợp TÀI LIỆU.docx

Nguồn phụ trợ nghiệp vụ

Đối chiếu QR cấp 2, print payload, reprint, recall/sale lock

Không code/seed trực tiếp

Tầng 9

Code hiện tại

Hiện trạng triển khai

Dùng để gap analysis

Không là source-of-truth nếu conflict

## 5. SCOPE IN - PHẠM VI BAO GỒM

Tài liệu này bao gồm:

Internal traceability.

Internal genealogy link.

Raw lot -> Production Dossier -> Material Issue -> Batch -> Warehouse genealogy.

Trace projection.

Trace gap detection.

QR generation boundary.

Barcode boundary.

QR status lifecycle.

QR public-valid guard.

Print payload trace boundary.

Print job status boundary.

Reprint request.

Reprint approval.

Reprint payload snapshot.

Public Trace DTO.

Public Trace whitelist fields.

Public Trace private/internal field suppression.

Recall Case.

Recall Impact Analysis.

Recall affected scope.

Hold.

Sale Lock.

Stop-sale suppression.

Downstream suppression hooks.

Commerce suppression boundary.

AI Advisor suppression boundary.

Facebook Gateway suppression boundary.

Ads/Live/CRM/IVR suppression boundary.

MISA boundary for trace/recall/sale lock.

Actor / permission / audit / idempotency / evidence.

Smoke/evidence requirements cho P2.2E.

Report 15 mục cho P2.2E.

## 6. SCOPE OUT - PHẠM VI KHÔNG BAO GỒM

Tài liệu này không bao gồm:

Không triển khai Source / Raw Lot / QC đầu vào đầy đủ.

Không triển khai Production Order đầy đủ.

Không triển khai Formula Snapshot đầy đủ.

Không triển khai Material Request/Issue/Receipt đầy đủ.

Không triển khai Batch/Release/Warehouse đầy đủ.

Không quyết định Commerce Sellable Gate.

Không tạo giá bán.

Không tạo QuoteSnapshot.

Không tạo Cart.

Không tạo Official Order.

Không xử lý Payment.

Không xử lý Verified Revenue.

Không triển khai AI Advisor runtime đầy đủ.

Không triển khai Facebook Gateway runtime đầy đủ.

Không triển khai Ads Measurement đầy đủ.

Không triển khai MC AI Live đầy đủ.

Không triển khai CRM automation đầy đủ.

Không triển khai IVR đầy đủ.

Không triển khai full MISA Integration.

Không cho MISA điều khiển trace/recall/sale lock.

Không gọi Completion Decision.

Không gọi Gateway PASS.

Không gọi Release Readiness.

Không gọi Production Readiness.

Không gọi Go-live Decision.

## 7. ĐỊNH NGHĨA THUẬT NGỮ

Thuật ngữ

Định nghĩa

Internal Traceability

Truy xuất nội bộ đầy đủ, gồm raw lot, production, batch, warehouse

Genealogy

Dòng phả hệ dữ liệu từ nguyên liệu đến thành phẩm

Trace Projection

Bản chiếu dữ liệu truy xuất được tổng hợp từ genealogy

Public Trace

Dữ liệu truy xuất an toàn được phép hiển thị cho khách hàng

Public Trace DTO

Cấu trúc dữ liệu whitelist-only cho public

## QR

Mã truy xuất trên sản phẩm/bao bì

Barcode

Mã thương mại hoặc mã định danh đóng gói theo cấu hình

Public-valid QR

QR đủ điều kiện cho khách tra cứu public

## QR VOID

QR bị vô hiệu hóa

## QR FAILED

QR tạo/in lỗi

QR bị chặn

QR bị chặn vì trace/recall/sale lock/policy

Print Payload

Dữ liệu in do Ginsengfood sinh

Reprint

In lại nhãn/tem/QR/barcode

Recall

Thu hồi sản phẩm/batch/QR/SKU theo case

Hold

Tạm giữ, chưa cho vận hành/bán

Sale Lock

Chặn bán/chặn chốt/chặn downstream

Downstream Suppression

Chặn Commerce/AI/Gateway/Ads/Live/CRM/IVR tiêu thụ sản phẩm bị lock

Whitelist-only

Chỉ trả field được phép public

Private/Internal Field

Dữ liệu nội bộ không được public

## PHẦN 2/4 - TRACEABILITY / QR / BARCODE / PUBLIC TRACE MODEL

## 8. LUỒNG NGHIỆP VỤ TỔNG QUAN P2.2E

Luồng nghiệp vụ P2.2E:

Production Dossier -> Material Issue Genealogy -> Batch -> Batch Release -> Warehouse Receipt -> Packaging Level 2 -> Print Payload -> QR / Barcode -> Trace Projection -> Public Trace Whitelist -> Recall / Hold / Sale Lock -> Downstream Suppression

Trong đó:

Traceability phải bám theo Production Dossier.

Production Dossier là root production file.

Material Issue cung cấp raw lot genealogy.

Batch dựa trên Production Dossier và material genealogy.

Warehouse Receipt confirmed tạo finished goods truth.

Packaging Level 2 là nơi QR/barcode có ý nghĩa public-facing theo rule.

Print payload phải do Ginsengfood sinh.

QR/barcode không được do máy in tự sinh.

QR chỉ public-valid khi status, trace projection và public trace policy hợp lệ.

Public Trace chỉ trả whitelist field.

Recall/Sale Lock chặn downstream.

## 9. INTERNAL TRACEABILITY / GENEALOGY

## 9.1. Nguyên tắc

Internal Traceability phải dựng được chuỗi:

Source Origin -> Raw Receipt -> Raw Lot -> Incoming QC -> Readiness -> Material Issue -> Production Dossier -> Batch -> Batch Process -> Batch QC -> Batch Release -> Warehouse Receipt -> Packaging -> QR/Barcode -> Public Trace

Traceability không được chỉ bắt đầu từ batch.

Traceability không được chỉ bắt đầu từ QR.

Traceability phải có khả năng truy ngược về:

Nguyên liệu.

Raw lot.

QC đầu vào.

Readiness.

Production order.

Formula version.

Material issue.

Batch.

QC batch/thành phẩm.

Release.

Warehouse receipt.

Packaging/print/QR.

## 9.2. Checklist Internal Genealogy Link

Trường

Bắt buộc

Quy tắc

genealogy_link_code

Có

Mã link

source_type

Có

## RAW_LOT / MATERIAL_ISSUE / PRODUCTION_DOSSIER / BATCH / WAREHOUSE / QR

source_ref

Có

Mã nguồn

target_type

Có

Loại đích

target_ref

Có

Mã đích

relationship_type

Có

## USED_IN / PRODUCED_BY / PACKAGED_AS / PRINTED_AS / STORED_AS

sku_code

Có nếu liên quan thành phẩm

## SKU

batch_code

Có nếu liên quan batch

Batch

production_dossier_code

Có

Root

raw_lot_code

Có nếu liên quan raw

Raw lot

quantity

Tùy

Nếu cần trace định lượng

uom

Tùy

Nếu có quantity

created_by

Có

Actor/system

created_at

Có

Thời điểm

audit_log

Có

Bắt buộc

## 9.3. Trace gap detection

Trace gap phải được flag nếu thiếu:

Production Dossier.

Formula Snapshot.

Material Issue.

Raw lot genealogy.

Batch link.

Batch release.

Warehouse receipt.

Packaging link.

QR link.

Public trace projection.

Required evidence.

Nếu trace gap chưa xử lý:

QR không được public-valid nếu policy yêu cầu đầy đủ trace.

Public Trace không được trả dữ liệu mơ hồ.

Downstream không được dùng trace đó làm bằng chứng bán hàng.

## 9.4. Fail gate internal traceability

Fail nếu:

Batch không trace được về Production Dossier.

Batch không trace được về material issue/raw lot khi policy yêu cầu.

QR không trace được về batch.

Public Trace trả dữ liệu khi trace gap nghiêm trọng.

Trace projection tự suy đoán missing genealogy.

Trace sửa lịch sử production snapshot.

Trace lộ internal evidence/private field ra public.

## 10. TRACE PROJECTION

## 10.1. Nguyên tắc

Trace Projection là bản tổng hợp dữ liệu truy xuất từ các nguồn nội bộ.

Trace Projection không phải source-of-truth gốc.

Source-of-truth gốc vẫn là:

Raw receipt.

Raw lot.

QC/readiness.

Production Dossier.

Material Issue.

Batch.

Batch QC/release.

Warehouse Receipt.

Packaging/print.

Recall/Sale Lock.

Projection có thể được rebuild khi nguồn thay đổi.

Projection phải có status.

## 10.2. Checklist Trace Projection

Trường

Bắt buộc

Quy tắc

trace_projection_code

Có

Mã projection

batch_code

Có

Batch

sku_code

Có

## SKU

production_dossier_code

Có

Root

warehouse_receipt_code

Có nếu public

Thành phẩm đã nhập kho

qr_code_ref

Có nếu QR

QR liên quan

projection_status

Có

DRAFT / VALID / PARTIAL / bị chặn / SUPERSEDED

trace_gap_flag

Có

## TRUE/FALSE

public_trace_eligible

Có

## TRUE/FALSE

recall_lock_flag

Có

## TRUE/FALSE

sale_lock_flag

Có

## TRUE/FALSE

generated_at

Có

Thời điểm

generated_by

Có

System/actor

audit_log

Có

Bắt buộc

## 10.3. Projection status

Status

Ý nghĩa

Public trace được không?

## DRAFT

Chưa hoàn thiện

Không

## VALID

Đủ dữ liệu theo policy

Có thể

## PARTIAL

Thiếu một phần dữ liệu

Không hoặc chỉ public hạn chế nếu Owner policy cho phép

bị chặn

Bị chặn vì trace gap/recall/sale lock

Không

## SUPERSEDED

Bị thay bằng projection mới

Không

## ERROR

Lỗi build projection

Không

## 11. QR / BARCODE FOUNDATION

## 11.1. Nguyên tắc

nguồn tổng hợp đã khóa:

In mã sản phẩm chia 2 cấp.

Cấp 1 chỉ in MFG/HSD.

Cấp 2 in batch/MFG/HSD/barcode/QR.

Ginsengfood sinh dữ liệu in.

Máy in chỉ nhận payload, in và trả trạng thái.

Máy in không được tự sinh mã sản xuất, mã lô, ngày sản xuất, hạn dùng, barcode, QR.

Trong P2.2E, QR/barcode phải được hiểu là dữ liệu trace/sale/public-risk, không chỉ là dữ liệu in.

## 11.2. QR chỉ thuộc public trace khi đủ điều kiện

QR chỉ được public-valid nếu:

QR được sinh bởi Ginsengfood.

QR linked batch hợp lệ.

QR linked packaging level 2 nếu rule yêu cầu.

Batch đã RELEASED.

Warehouse Receipt confirmed nếu policy yêu cầu.

Trace Projection hợp lệ.

Public Trace DTO an toàn.

QR status hợp lệ.

Không VOID.

Không FAILED.

Không bị chặn.

Không recall lock.

Không sale lock theo policy.

Không thiếu required evidence nếu policy yêu cầu.

## 11.3. QR status lifecycle

Status

Ý nghĩa

Public-valid?

## DRAFT

QR chuẩn bị tạo

Không

## GENERATED

QR đã sinh

Chưa chắc

## PRINTED

QR đã in

Chưa chắc

## ACTIVE_PUBLIC

Đủ điều kiện public trace

Có

## FAILED

Sinh/in lỗi

Không

## VOID

Vô hiệu hóa

Không

bị chặn

Bị chặn vì policy/trace/recall/sale lock

Không

## SUPERSEDED

Bị thay thế

Không

## REPRINTED

Đã in lại

Chỉ public nếu replacement hợp lệ

## RECALLED

Bị recall

Không hoặc chỉ hiển thị thông báo recall theo policy

## SALE_LOCKED

Bị stop-sale

Không dùng để bán/chốt

## 11.4. Checklist QR

Trường

Bắt buộc

Quy tắc

qr_code

Có

Mã QR duy nhất

qr_status

Có

Theo lifecycle

batch_code

Có

Trỏ batch

sku_code

Có

Trỏ SKU

packaging_level

Có

Thường là LEVEL_2 theo nguồn tổng hợp

print_payload_ref

Có

Payload do Ginsengfood sinh

public_trace_projection_ref

Có nếu public

Trace projection

barcode_ref

Có nếu có barcode

Barcode liên quan

mfg_date_snapshot

Có

Snapshot

hsd_date_snapshot

Có

Snapshot

public_valid_flag

Có

## TRUE/FALSE

recall_lock_flag

Có

## TRUE/FALSE

sale_lock_flag

Có

## TRUE/FALSE

created_by

Có

Actor/system

created_at

Có

Thời điểm

audit_log

Có

Bắt buộc

## 11.5. Barcode boundary

Barcode phải đến từ:

Product/packaging master.

Trade item / packaging profile.

Payload do Ginsengfood sinh.

Approved barcode/GTIN config nếu có.

Barcode không được:

Do máy in tự sinh.

Do operator nhập tay tùy tiện.

Thay đổi theo từng lần in nếu là barcode thương mại cố định.

Dùng sai cấp packaging.

Public nếu bị VOID/bị chặn theo QR/trace policy.

## 11.6. Fail gate QR / Barcode

Fail nếu:

QR không linked batch.

QR không linked trace projection.

QR VOID vẫn public-valid.

QR FAILED vẫn public-valid.

QR bị chặn vẫn public-valid.

QR linked batch chưa release nhưng public-valid.

QR linked trace gap nghiêm trọng nhưng public-valid.

Máy in tự sinh QR.

Máy in tự sinh barcode.

Operator nhập tay QR/barcode.

Barcode cấp 2 không bám packaging profile.

QR sale-locked vẫn cho Commerce/AI/Gateway dùng để bán.

## 12. PRINT PAYLOAD / PRINTER BOUNDARY

## 12.1. Nguyên tắc

P2.2E khóa kỹ hơn về payload in:

Ginsengfood sinh payload. Máy in chỉ nhận payload, in và trả trạng thái.

Không được để máy in tự sinh:

Mã sản xuất.

Batch code.

## MFG.

## HSD.

Barcode.

## QR.

Trace URL.

Public trace token.

Recall/Sale Lock status.

## 12.2. Print payload cấp 1

Theo nguồn tổng hợp:

Cấp 1 chỉ in MFG/HSD.

Checklist:

Trường

Bắt buộc

Quy tắc

print_payload_code

Có

Mã payload

print_level

Có

## LEVEL_1

batch_code_ref

Có để trace nội bộ

Có thể không in public nếu rule chỉ MFG/HSD

mfg_date

Có

Do Ginsengfood sinh

hsd_date

Có

Do Ginsengfood sinh

label_template_ref

Có

Template cấp 1

printer_target

Có

Máy in

payload_status

Có

## WAITING / SENT / PRINTED / FAILED / VOID

audit_log

Có

Bắt buộc

## 12.3. Print payload cấp 2

Theo nguồn tổng hợp:

Cấp 2 in batch/MFG/HSD/barcode/QR.

Checklist:

Trường

Bắt buộc

Quy tắc

print_payload_code

Có

Mã payload

print_level

Có

## LEVEL_2

batch_code

Có

Do Ginsengfood sinh

sku_code

Có

## SKU

mfg_date

Có

Do Ginsengfood sinh

hsd_date

Có

Do Ginsengfood sinh

barcode_value

Có nếu required

Do Ginsengfood sinh từ config

qr_code

Có nếu required

Do Ginsengfood sinh

trace_projection_ref

Có nếu QR

Trace

label_template_ref

Có

Template cấp 2

printer_target

Có

Máy in

payload_status

Có

## WAITING / SENT / PRINTED / FAILED / VOID

audit_log

Có

Bắt buộc

## 12.4. Printer status

Status

Ý nghĩa

Hành động

## WAITING

Chưa gửi máy in

Chưa in

## SENT

Đã gửi payload

Chờ phản hồi

## PRINTED

Máy in báo đã in

Có thể chuyển QR printed

## FAILED

Máy in báo lỗi

QR/print không public-valid

## VOID

Payload bị vô hiệu

Không public-valid

## RETRY_WAITING

Chờ gửi lại

Không public-valid nếu chưa in

## REPRINT_REQUIRED

Cần in lại

Chuyển reprint flow

## 12.5. Fail gate printer

Fail nếu:

Máy in tự sinh mã.

Máy in tự sinh batch.

Máy in tự sinh MFG/HSD.

Máy in tự sinh barcode.

Máy in tự sinh QR.

Payload FAILED nhưng QR public-valid.

Payload VOID nhưng QR public-valid.

Print cấp 1 in sai rule.

Print cấp 2 thiếu field bắt buộc.

Không có audit payload.

## 13. REPRINT CONTROL

## 13.1. Nguyên tắc

nguồn tổng hợp đã khóa:

Reprint phải có lý do, quyền, log và audit.

Reprint là hành động rủi ro cao vì có thể tạo thêm nhãn/QR/barcode vật lý ngoài thị trường.

Do đó, reprint không được tự do.

Reprint phải có:

Original print job.

Reprint request.

Reprint reason.

Authorized actor.

Approval nếu policy yêu cầu.

Payload snapshot.

Old label disposition nếu có.

Audit.

Evidence.

## 13.2. Checklist Reprint Request

Trường

Bắt buộc

Quy tắc

reprint_request_code

Có

Mã yêu cầu in lại

original_print_payload_ref

Có

Payload gốc

original_qr_code

Có nếu có QR

QR gốc

batch_code

Có

Batch

reason_code

Có

Lý do

reason_note

Có nếu policy yêu cầu

Ghi chú

requested_by

Có

Actor

requested_at

Có

Thời điểm

approval_status

Có

## WAITING / APPROVED / REJECTED

approved_by

Có nếu approved

Actor có quyền

approved_at

Có nếu approved

Thời điểm

reprint_payload_ref

Có nếu approved

Payload in lại

old_label_disposition

Có nếu có

Thu hồi/hủy/ghi nhận

evidence_ref

Có nếu policy yêu cầu

Evidence

audit_log

Có

Bắt buộc

## 13.3. Reprint status

Status

Ý nghĩa

## REQUESTED

Đã yêu cầu

## WAITING_APPROVAL

Chờ duyệt

## APPROVED

Đã duyệt

## REJECTED

Bị từ chối

## REPRINT_PAYLOAD_CREATED

Đã tạo payload mới

## REPRINTED

Đã in lại

## VOIDED_ORIGINAL

QR/label gốc đã void nếu policy yêu cầu

Đóng case

## 13.4. Fail gate reprint

Fail nếu:

Reprint không có original print reference.

Reprint không có reason.

Reprint không có permission.

Reprint không có audit.

Reprint tự tạo QR mới không linked original.

Reprint không xử lý old label disposition nếu policy yêu cầu.

Reprint bypass recall/sale lock.

Reprint làm QR VOID/FAILED thành public-valid.

Reprint không có evidence khi policy yêu cầu.

## 14. PUBLIC TRACE WHITELIST

## 14.1. Nguyên tắc

Public Trace chỉ được trả dữ liệu whitelist.

Public Trace không phải internal trace.

Public Trace không được lộ:

Supplier private detail.

Internal source contract.

Cost data.

Internal formula ratio.

Full BOM detail.

Internal ingredient quantity.

Internal QC defect detail.

Internal reject reason chi tiết.

Internal loss/variance.

Personnel/user info.

Worker note.

Admin note.

MISA/accounting data.

Evidence private data.

Recall internal note.

Raw material internal lot metadata không public.

Audit log nội bộ.

Idempotency key.

Internal correlation ID nếu policy không cho public.

Any private/internal field.

## 14.2. Public Trace whitelist đề xuất

Public Trace có thể gồm các nhóm field an toàn sau, nhưng vẫn cần Owner/Public Policy xác nhận:

Nhóm field

Có thể public

Ghi chú

Product

Tên sản phẩm public

Không dùng internal SKU code nếu không public

Brand

Ginsengfood / SSAVIGROUP

Theo chính sách

Batch display

Mã batch public nếu được phép

Không lộ internal IDs nếu policy chặn

## MFG

Ngày sản xuất

Theo label

## HSD

Hạn sử dụng

Theo label

QR status public

Hợp lệ / không hợp lệ / bị thu hồi

Diễn đạt public-safe

Trace summary

Đã được sản xuất theo quy trình truy xuất

Không lộ BOM

Quality status public

Đã qua kiểm soát chất lượng theo chính sách

Không lộ defect nội bộ

Recall notice

Có nếu bị recall

Nội dung public-safe

Sale lock notice

Có nếu stop-sale

Nội dung public-safe

Customer guidance

Hướng dẫn liên hệ kênh chính thức

Không lộ nội bộ

Public certification/ref

Nếu có và được approved

Chỉ evidence public-approved

## 14.3. Public Trace DTO boundary

Rule

Diễn giải

DTO public riêng

Không dùng Admin/Internal DTO

Whitelist-only

Field không có trong whitelist thì không trả

No raw JSON debug

Không lộ cấu trúc nội bộ

No internal IDs

Không lộ ID nội bộ nếu không approved

No cost/accounting

Không lộ giá thành/MISA

No full formula

Không lộ BOM/ratio/quantity

No private evidence

Không lộ ảnh/chứng từ nội bộ

No personnel

Không lộ người vận hành

No audit

Không lộ audit/correlation/idempotency

Safe recall message

Nếu recall, chỉ thông tin public-safe

## 14.4. Fail gate Public Trace

Fail nếu:

Public Trace dùng Admin DTO.

Public Trace trả full internal trace.

Public Trace lộ supplier private detail.

Public Trace lộ formula/BOM/ratio.

Public Trace lộ cost/MISA.

Public Trace lộ QC defect nội bộ.

Public Trace lộ evidence private.

Public Trace lộ audit/idempotency/correlation.

Public Trace trả QR VOID/FAILED như hợp lệ.

Public Trace không có whitelist policy.

## PHẦN 3/4 - RECALL / HOLD / SALE LOCK / DOWNSTREAM SUPPRESSION / MISA BOUNDARY

## 15. RECALL CASE

## 15.1. Nguyên tắc

Recall Case là nghiệp vụ thu hồi hoặc kiểm soát rủi ro liên quan đến sản phẩm, batch, QR, SKU hoặc lô nguyên liệu.

Recall không được là ghi chú tự do không có trạng thái.

Recall phải có:

Case code.

Scope.

Reason.

Impact analysis.

Actor/permission.

Evidence.

Status.

Downstream suppression nếu cần.

Audit.

## 15.2. Recall scope

Recall có thể áp dụng theo:

Scope

Ý nghĩa

## RAW_LOT

Thu hồi/kiểm soát theo lô nguyên liệu

## PRODUCTION_DOSSIER

Theo hồ sơ sản xuất

## BATCH

Theo batch

## SKU

Theo SKU

## QR

Theo QR

## WAREHOUSE_RECEIPT

Theo nhập kho

## CUSTOMER_SHIPMENT

Theo lô đã giao, thuộc phase sau

## MIXED_SCOPE

Nhiều scope cùng lúc

## 15.3. Checklist Recall Case

Trường

Bắt buộc

Quy tắc

recall_case_code

Có

Mã case

recall_scope

Có

## RAW_LOT / BATCH / SKU / QR / MIXED

target_refs

Có

Danh sách target

recall_reason_code

Có

Lý do

recall_reason_note

Có nếu policy yêu cầu

Ghi chú

severity

Có

## LOW / MEDIUM / HIGH / CRITICAL

status

Có

OPEN / INVESTIGATING / IMPACT_ANALYZED / LOCKED / CLOSED / CANCELLED

opened_by

Có

Actor

opened_at

Có

Thời điểm

evidence_ref

Có

Evidence

owner_review_status

Có nếu policy yêu cầu

## WAITING / APPROVED / REJECTED

audit_log

Có

Bắt buộc

## 16. RECALL IMPACT ANALYSIS

## 16.1. Nguyên tắc

Recall Impact Analysis phải xác định các đối tượng bị ảnh hưởng.

Nếu recall từ raw lot, phải truy ra:

Material Issue.

Production Dossier.

Batch.

Warehouse Receipt.

## QR.

## SKU.

Sale lock target.

Downstream suppression target.

Nếu recall từ batch, phải truy ra:

## QR.

Warehouse Receipt.

## SKU.

Public Trace.

Sale lock target.

Downstream suppression.

## 16.2. Checklist Recall Impact

Trường

Bắt buộc

Quy tắc

impact_analysis_code

Có

Mã phân tích

recall_case_code

Có

Trỏ case

input_target

Có

Target ban đầu

impacted_raw_lots

Tùy scope

Danh sách

impacted_dossiers

Tùy scope

Danh sách

impacted_batches

Có nếu batch impacted

Danh sách

impacted_skus

Có nếu SKU impacted

Danh sách

impacted_qrs

Có nếu QR impacted

Danh sách

impacted_warehouse_receipts

Tùy

Danh sách

trace_gap_flag

Có

## TRUE/FALSE

recommended_hold

Có

## TRUE/FALSE

recommended_sale_lock

Có

## TRUE/FALSE

recommended_public_notice

Có nếu cần

## TRUE/FALSE

analyzed_by

Có

Actor/system

analyzed_at

Có

Thời điểm

audit_log

Có

Bắt buộc

## 16.3. Fail gate Recall Impact

Fail nếu:

Recall case không có impact analysis.

Recall từ raw lot không truy được batch.

Recall từ batch không truy được QR.

Trace gap không được flag.

Recall không tạo recommended hold/sale lock khi cần.

Recall chỉ là ghi chú không có state.

Recall không audit.

Recall không chặn downstream khi đã sale lock.

## 17. HOLD

## 17.1. Nguyên tắc

Hold là trạng thái tạm giữ.

Hold có thể áp dụng cho:

Raw lot.

Production Dossier.

Batch.

Warehouse stock.

## QR.

## SKU.

Packaging/print payload.

Trace projection.

Hold không nhất thiết là recall, nhưng nếu hold ảnh hưởng bán hàng thì phải có suppression boundary.

## 17.2. Checklist Hold

Trường

Bắt buộc

Quy tắc

hold_code

Có

Mã hold

hold_scope

Có

## RAW_LOT / BATCH / SKU / QR / WAREHOUSE / OTHER

target_ref

Có

Đối tượng bị hold

hold_reason_code

Có

Lý do

hold_status

Có

## ACTIVE / RELEASED / CANCELLED

hold_started_by

Có

Actor

hold_started_at

Có

Thời điểm

hold_released_by

Có nếu release

Actor

hold_released_at

Có nếu release

Thời điểm

evidence_ref

Có nếu policy yêu cầu

Evidence

audit_log

Có

Bắt buộc

## 17.3. Hold effect

Target hold

Effect

Raw lot hold

Không issue

Batch hold

Không release / không warehouse nếu chưa release

Warehouse stock hold

Không đưa vào sellable stock

QR hold

Không public-valid hoặc public warning theo policy

SKU hold

Chặn downstream selling

Trace projection hold

Public trace bị block hoặc limited

## 18. SALE LOCK

## 18.1. Nguyên tắc

Sale Lock là trạng thái chặn bán.

Sale Lock phải thắng mọi downstream channel:

Commerce.

AI Advisor.

Facebook Gateway.

Ads.

MC AI Live.

## CRM.

## IVR.

Website.

Landing page.

Any order/quote/selling channel.

Nếu Sale Lock active, downstream không được:

Báo SKU sellable.

Tư vấn chốt mua.

Tạo quote.

Tạo cart.

Tạo order.

Xác nhận đơn.

Đẩy quảng cáo.

Livestream chốt SKU.

Gửi CRM thúc mua.

IVR xác nhận đơn chứa SKU/batch/QR bị lock.

## 18.2. Sale Lock scope

Sale Lock có thể áp dụng theo:

Scope

Ý nghĩa

## SKU

Chặn toàn SKU

## BATCH

Chặn batch cụ thể

## QR

Chặn QR cụ thể

## WAREHOUSE_STOCK

Chặn tồn kho cụ thể

## PRODUCT_LINE

Chặn dòng sản phẩm

## RAW_LOT_IMPACT

Chặn thành phẩm bị ảnh hưởng bởi raw lot

## MIXED

Nhiều scope

## 18.3. Checklist Sale Lock

Trường

Bắt buộc

Quy tắc

sale_lock_code

Có

Mã sale lock

lock_scope

Có

## SKU / BATCH / QR / WAREHOUSE / MIXED

target_refs

Có

Danh sách target

lock_reason_code

Có

Lý do

lock_status

Có

## ACTIVE / RELEASED / CANCELLED

lock_source

Có

## RECALL / QA_HOLD / OWNER_DECISION / SYSTEM_GUARD

started_by

Có

Actor/system

started_at

Có

Thời điểm

released_by

Có nếu release

Actor

released_at

Có nếu release

Thời điểm

release_reason

Có nếu release

Lý do mở khóa

evidence_ref

Có

Evidence

downstream_suppression_status

Có

## ACTIVE / WAITING / FAILED / RELEASED

audit_log

Có

Bắt buộc

## 18.4. Sale Lock release

Không được release Sale Lock nếu:

Recall case chưa đóng.

QA/Owner chưa phê duyệt.

Evidence còn missing/rejected.

Trace gap chưa xử lý.

Public notice chưa hoàn tất nếu policy yêu cầu.

Actor không có quyền.

Audit không ghi.

Downstream suppression chưa được cập nhật theo rule.

## 18.5. Fail gate Sale Lock

Fail nếu:

Sale Lock active nhưng Commerce vẫn sellable.

Sale Lock active nhưng AI vẫn tư vấn chốt.

Sale Lock active nhưng Gateway vẫn tạo đơn.

Sale Lock active nhưng Ads vẫn scale sản phẩm.

Sale Lock active nhưng CRM vẫn gửi thúc mua.

Sale Lock active nhưng IVR vẫn xác nhận đơn.

Sale Lock release không có approval/evidence.

Sale Lock không audit.

Sale Lock không linked recall/hold/source reason.

Sale Lock bị MISA hoặc downstream tự mở.

## 19. DOWNSTREAM SUPPRESSION BOUNDARY

## 19.1. Nguyên tắc

Downstream suppression là boundary để các hệ sau không bán/chốt/truyền thông sai sản phẩm bị recall/hold/sale lock.

P2.2E không triển khai toàn bộ downstream, nhưng phải tạo sự thật chặn bán để Phase 3+ tiêu thụ.

## 19.2. Suppression targets

Downstream

Bị chặn khi Sale Lock active

Commerce Runtime

Không sellable, không quote, không cart, không order

AI Advisor

Không tư vấn chốt mua, không tạo order draft

Facebook Gateway

Không kéo chốt mua, không Messenger order flow cho SKU bị lock

Ads Measurement

Không scale, không ROAS promote SKU bị lock

MC AI Live

Không giới thiệu/chốt SKU bị lock

## CRM

Không gửi chăm sóc thúc mua SKU bị lock

## IVR

Không xác nhận đơn chứa SKU/batch/QR bị lock

Website/Landing

Không hiển thị mua ngay nếu lock

Public Trace

Hiển thị warning/bị chặn theo public policy

## 19.3. Suppression output cho phase sau

P2.2E phải cung cấp ít nhất:

lock_scope.

target_refs.

lock_status.

lock_reason.

effective_from.

effective_to nếu có.

downstream_suppression_status.

public_trace_policy.

audit/correlation.

evidence status.

Không được để phase sau tự suy luận Sale Lock từ ghi chú.

## 20. MISA BOUNDARY TRONG TRACE / RECALL / SALE LOCK

## 20.1. Nguyên tắc

MISA không điều khiển traceability, recall hoặc sale lock.

MISA không được:

Tạo recall case.

Đóng recall case.

Tạo sale lock.

Release sale lock.

Sửa QR status.

Sửa public trace.

Sửa trace genealogy.

Sửa batch/warehouse/ledger.

Tự mở bán sản phẩm bị lock.

Ginsengfood Operational Core là nguồn vận hành.

MISA chỉ là kế toán chính thức qua integration layer riêng.

## 20.2. Fail gate MISA boundary

Fail nếu:

MISA sửa QR status.

MISA sửa recall/sale lock.

MISA release hold.

MISA public trace data.

MISA làm mất operational lock.

MISA sync fail làm unlock sản phẩm.

MISA accounting status được dùng làm sellable truth.

PHẦN 4/4 - CROSS-CUTTING / HANDOFF / SMOKE / DONE GATE / FAIL GATE

## 21. ACTOR / PERMISSION / AUDIT / IDEMPOTENCY / EVIDENCE

## 21.1. Command rủi ro trong P2.2E

Command

Actor

Permission

Audit

Idempotency

Evidence

Build Trace Projection

System/Actor

Bắt buộc

Bắt buộc

Bắt buộc

Trace evidence

Generate QR

System/Actor

Bắt buộc

Bắt buộc

Bắt buộc

Payload evidence

Mark QR Printed

Printer callback/System

Bắt buộc

Bắt buộc

Bắt buộc

Print result

Void QR

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Reason/evidence

Create Reprint Request

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Reason/evidence

Approve Reprint

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Approval evidence

Create Recall Case

QA/Owner actor

Bắt buộc

Bắt buộc

Bắt buộc

Recall evidence

Run Recall Impact Analysis

System/QA

Bắt buộc

Bắt buộc

Bắt buộc

Impact evidence

Apply Hold

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Hold evidence

Apply Sale Lock

Authorized actor/System guard

Bắt buộc

Bắt buộc

Bắt buộc

Lock evidence

Release Sale Lock

Authorized actor

Bắt buộc

Bắt buộc

Bắt buộc

Release evidence

Update Downstream Suppression

System

Bắt buộc

Bắt buộc

Bắt buộc

Suppression evidence

## 21.2. Idempotency rule

Case

Expected

Same key + same payload Generate QR

Không tạo QR trùng

Same key + different payload Generate QR

Conflict

Retry print callback same payload

Không đổi trạng thái sai

Retry Void QR same payload

No-op hoặc trả kết quả cũ

Same key different payload Void QR

Conflict

Retry Reprint request

Không tạo nhiều request trùng

Retry Sale Lock same payload

Không tạo lock trùng

Retry Release Sale Lock

Không release nhiều lần gây audit sai

Retry Downstream Suppression

Không tạo trạng thái mâu thuẫn

## 21.3. Evidence rule

Nếu policy yêu cầu evidence accepted, thì:

Evidence SUBMITTED chưa được xem là pass.

Evidence UNDER_REVIEW chưa được xem là pass.

Evidence MISSING phải block.

Evidence REJECTED phải fail/retest.

Evidence ACCEPTED mới được dùng cho gate tương ứng.

Fail nếu evidence SUBMITTED bị dùng như ACCEPTED.

## 22. ENTITY / API / SERVICE BOUNDARY

## 22.1. Entity impact draft

Tài liệu này không tạo migration, nhưng implementation sau này có thể cần rà soát các nhóm entity:

Nhóm entity

Vai trò

trace_genealogy

Internal genealogy

trace_projection

Bản chiếu truy xuất

trace_gap

Ghi nhận thiếu chuỗi trace

qr_code

QR lifecycle

barcode_ref

Barcode reference

print_payload

Payload in

print_job

Job in

reprint_request

Yêu cầu in lại

public_trace_projection

DTO/projection public-safe

recall_case

Case thu hồi

recall_impact_analysis

Phân tích ảnh hưởng

hold_record

Hold

sale_lock

Sale lock

downstream_suppression

Suppression boundary

public_trace_access_log

Log truy xuất public nếu có

evidence_ref

Evidence

audit_log

Audit

idempotency_record

Chống retry trùng

## 22.2. API/service boundary

Nhóm

Mục tiêu

Không được

Trace API

Đọc internal genealogy

Không public internal data

Trace Projection Service

Build projection

Không suy đoán missing link

## QR API

Generate/void/status QR

Không public-valid QR lỗi

Barcode Service

Resolve barcode

Không tự sinh sai config

Print Payload Service

Sinh payload

Không để printer sinh mã

Reprint API

Request/approve/reprint

Không reprint không reason/audit

Public Trace API

Trả whitelist DTO

Không dùng Admin DTO

Recall API

Create/manage recall case

Không chỉ ghi note tự do

Impact Analysis Service

Tìm affected scope

Không bỏ trace gap

Sale Lock API

Apply/release lock

Không unlock không approval

Downstream Suppression Service

Cung cấp lock truth

Không tự triển khai full Commerce/AI

Audit Service

Ghi audit

Không bỏ audit

Idempotency Service

Chống duplicate side effect

Không bỏ qua retry

Evidence Service

Link evidence

Không coi submitted là accepted

## 23. EXECUTION ORDER P2.2E

Khi sau này được phép triển khai, P2.2E phải đi theo thứ tự:

Thứ tự

Việc cần làm

Output

Đọc README Phase 2 V1.1

Hiểu boundary Phase 2

Đọc P2.1 Technical Design V1.1

Hiểu form registry / field behavior

Đọc P2.2B V2.0

Hiểu Production Dossier / Snapshot

Đọc P2.2C V1.1

Hiểu Material Issue / Raw Lot genealogy

Đọc P2.2D V2.0

Hiểu Batch / Release / Warehouse / Packaging

Đọc P2.2E V1.1 này

Hiểu Trace / QR / Recall / Sale Lock

Analysis code hiện tại

Gap matrix

Owner Confirm nếu thiếu dữ liệu

Owner confirm list

Technical implementation plan

Task breakdown

10

Limited implementation nếu được mở

Code trong scope

11

Smoke P2.2E

Smoke result

12

Evidence submission

Evidence package

13

Report 15 mục

Handoff update

Hiện tại trong cuộc làm tài liệu này:

Chỉ viết lại tài liệu sạch, chưa mở implementation.

## 24. DEV / CODEX / COPILOT HANDOFF

## 24.1. Mode mặc định

Khi giao file này cho Agent:

## MODE: LIMITED IMPLEMENTATION CHỈ KHI ĐÃ CÓ APPROVED ANALYSIS + TECHNICAL DESIGN

Nếu chưa có approval, phải dùng:

## MODE: ANALYSIS ONLY

## 24.2. Prompt đúng cho Agent

MODE hiện tại: ANALYSIS ONLY nếu chưa có Owner/dev lead approval.

Nhiệm vụ:

Lập Gap Matrix giữa tài liệu P2.2E và code hiện tại.

Liệt kê entity/table hiện có hoặc thiếu.

Liệt kê API/DTO/service/UI/worker bị ảnh hưởng.

Liệt kê nơi trace genealogy thiếu Production Dossier nếu có.

Liệt kê nơi QR không linked batch/trace projection nếu có.

Liệt kê nơi QR VOID/FAILED vẫn public-valid nếu có.

Liệt kê nơi Public Trace dùng Admin/Internal DTO nếu có.

Liệt kê private/internal fields có nguy cơ lộ public nếu có.

Liệt kê nơi printer tự sinh QR/barcode/MFG/HSD nếu có.

Liệt kê nơi reprint không reason/permission/audit nếu có.

Liệt kê nơi recall không có impact analysis nếu có.

Liệt kê nơi sale lock không chặn Commerce/AI/Gateway/Ads/Live/CRM/IVR nếu có.

Liệt kê nơi MISA/downstream có thể mutate trace/recall/sale lock nếu có.

Liệt kê risk P0/P1/P2.

Đề xuất implementation scope.

Đề xuất smoke/evidence.

Không sửa code nếu chưa có lệnh Limited Implementation riêng.

Cấm:

Không code trực tiếp từ nguồn tổng hợp.

Không tạo migration khi chưa duyệt.

Không seed dữ liệu khi chưa Owner confirm.

Không public internal trace.

Không dùng Admin DTO cho Public Trace.

Không để QR VOID/FAILED public-valid.

Không để printer tự sinh mã.

Không reprint không audit.

Không để Sale Lock bị downstream bypass.

Không triển khai Commerce/AI/Gateway đầy đủ.

Không gọi Gateway PASS.

Không gọi Production Readiness.

## 25. OWNER CONFIRM REQUIRED

Các điểm cần Owner/dev lead xác nhận trước implementation:

Nhóm

Nội dung cần xác nhận

Public Trace whitelist

Field nào được public

Public Trace wording

Cách hiển thị khi QR hợp lệ/không hợp lệ/recall

Internal/private fields

Field nào tuyệt đối không public

QR code format

Quy tắc mã QR/token/URL

Barcode config

Barcode/GTIN/trade item nếu áp dụng

QR public-valid policy

Điều kiện QR public-valid

Trace gap policy

Missing genealogy thì block hay limited public

Print payload

Field payload cấp 1/cấp 2

Printer status

Status chuẩn

Reprint reason

Danh sách lý do in lại

Reprint approval

Ai được approve

Old label disposition

Xử lý tem/QR cũ

Recall scope

## RAW_LOT/BATCH/SKU/QR/MIXED

Recall severity

## LOW/MEDIUM/HIGH/CRITICAL

Sale Lock scope

## SKU/BATCH/QR/WAREHOUSE/MIXED

Downstream suppression

Channel nào bị chặn và cách tiêu thụ

Sale Lock release

Điều kiện mở khóa

Public notice

Khi nào public trace hiển thị thông báo recall/lock

## RBAC

Ai được tạo QR, void, reprint, recall, lock, unlock

Idempotency

Command nào cần key

Audit

Audit field bắt buộc

Evidence

Evidence nào cần accepted

## 26. STOP CONDITIONS

Dev/Agent phải dừng nếu gặp:

Mã

Điều kiện dừng

Hành động

## P2-2E-STOP-01

Chưa có Production Dossier / Batch / Warehouse dependency

Dừng, quay lại P2.2B/D

## P2-2E-STOP-02

QR không linked batch

Dừng P0

## P2-2E-STOP-03

QR không linked trace projection

Dừng P0

## P2-2E-STOP-04

QR VOID/FAILED public-valid

Dừng P0

## P2-2E-STOP-05

Public Trace dùng Admin/Internal DTO

Dừng P0

## P2-2E-STOP-06

Public Trace lộ private/internal field

Dừng P0

## P2-2E-STOP-07

Trace projection tự suy đoán missing genealogy

Dừng P0

## P2-2E-STOP-08

Máy in tự sinh mã

Dừng P0

## P2-2E-STOP-09

Reprint không reason/permission/audit

Dừng P0

## P2-2E-STOP-10

Recall case không impact analysis

Dừng P0

## P2-2E-STOP-11

Sale Lock active nhưng downstream vẫn bán/chốt

Dừng P0

## P2-2E-STOP-12

Sale Lock release không approval/evidence

Dừng P0

## P2-2E-STOP-13

MISA mutate trace/recall/sale lock

Dừng P0

## P2-2E-STOP-14

Evidence SUBMITTED được coi ACCEPTED

Dừng P0

## P2-2E-STOP-15

Agent chuẩn bị code khi chưa approval

Dừng

## P2-2E-STOP-16

Scope lấn sang Commerce/AI/Gateway đầy đủ

Dừng, chuyển đúng phase

## P2-2E-STOP-17

Có ý định gọi Gateway PASS/Production Readiness

Dừng

## 27. SMOKE REQUIREMENTS P2.2E

Mã smoke

Nội dung

Expected

## SMK-P2-2E-01

Build internal genealogy

Raw lot -> issue -> dossier -> batch -> warehouse

## SMK-P2-2E-02

Missing genealogy link

Trace gap flagged

## SMK-P2-2E-03

Build trace projection hợp lệ

Projection VALID nếu đủ dữ liệu

## SMK-P2-2E-04

Trace projection thiếu dữ liệu

Projection PARTIAL/bị chặn

## SMK-P2-2E-05

Generate QR linked batch

QR được tạo và linked

## SMK-P2-2E-06

QR linked trace projection

Có trace_projection_ref

## SMK-P2-2E-07

## QR VOID

Public Trace không valid

## SMK-P2-2E-08

## QR FAILED

Public Trace không valid

## SMK-P2-2E-09

QR bị chặn

Public Trace không valid

## SMK-P2-2E-10

Print payload cấp 1

Chỉ MFG/HSD

## SMK-P2-2E-11

Print payload cấp 2

Batch/MFG/HSD/barcode/QR

## SMK-P2-2E-12

Printer tự sinh mã

Bị chặn

## SMK-P2-2E-13

Reprint request hợp lệ

Có reason/permission/audit

## SMK-P2-2E-14

Reprint không reason

Bị reject

## SMK-P2-2E-15

Public Trace response

Whitelist-only

## SMK-P2-2E-16

Public Trace private field attempt

Không lộ

## SMK-P2-2E-17

Public Trace dùng Admin DTO

Bị chặn

## SMK-P2-2E-18

Recall Case OPEN

Case được tạo

## SMK-P2-2E-19

Recall Impact Analysis

Xác định impacted batch/QR/SKU

## SMK-P2-2E-20

Recall từ raw lot

Truy ra affected batch/QR nếu có

## SMK-P2-2E-21

Hold active

Target bị chặn theo scope

## SMK-P2-2E-22

Sale Lock active

Target bị suppression

## SMK-P2-2E-23

Sale Lock active downstream

Commerce/AI/Gateway/Ads/Live/CRM/IVR bị chặn ở boundary

## SMK-P2-2E-24

Sale Lock release thiếu approval

Bị reject

## SMK-P2-2E-25

MISA mutate trace/recall/sale lock

Bị chặn

## SMK-P2-2E-26

Evidence required nhưng SUBMITTED

Không pass nếu policy cần ACCEPTED

## SMK-P2-2E-27

Command thiếu actor/permission

## DENY/BLOCK

## SMK-P2-2E-28

Retry same key/payload

Không tạo duplicate side effect

## SMK-P2-2E-29

Same key different payload

Conflict

## 28. EVIDENCE REQUIREMENTS P2.2E

Mã evidence

Nội dung evidence

## EVD-P2-2E-GENEALOGY

Internal genealogy raw -> production -> batch -> warehouse

## EVD-P2-2E-TRACE-GAP

Trace gap detection

## EVD-P2-2E-TRACE-PROJECTION

Trace projection status

## EVD-P2-2E-QR-LINK

QR linked batch/trace

## EVD-P2-2E-QR-VOID-FAILED

QR VOID/FAILED không public-valid

## EVD-P2-2E-BARCODE

Barcode boundary/config

## EVD-P2-2E-PRINT-L1

Print payload cấp 1

## EVD-P2-2E-PRINT-L2

Print payload cấp 2

## EVD-P2-2E-PRINTER-BOUNDARY

Máy in không tự sinh mã

## EVD-P2-2E-REPRINT

Reprint reason/permission/audit

## EVD-P2-2E-PUBLIC-WHITELIST

Public Trace whitelist-only

## EVD-P2-2E-NO-PRIVATE-FIELD

Không lộ private/internal field

## EVD-P2-2E-RECALL-CASE

Recall case

## EVD-P2-2E-RECALL-IMPACT

Recall impact analysis

## EVD-P2-2E-HOLD

Hold target evidence

## EVD-P2-2E-SALE-LOCK

Sale Lock evidence

## EVD-P2-2E-DOWNSTREAM-SUPPRESSION

Downstream suppression boundary

## EVD-P2-2E-MISA-BOUNDARY

MISA không mutate trace/recall/sale lock

## EVD-P2-2E-AUDIT

Actor/permission/audit evidence

## EVD-P2-2E-IDEMPOTENCY

Idempotency evidence

EVD-P2-2E-GATEWAY-bị chặn

Gateway vẫn bị chặn

Evidence Submitted chưa phải Evidence Accepted.

## 29. RISK REGISTER P2.2E

Risk

Mức độ

Nguyên nhân

Kiểm soát

Public Trace lộ dữ liệu nội bộ

## P0

Dùng Admin DTO hoặc không whitelist

Public DTO whitelist-only

QR VOID/FAILED public-valid

## P0

QR guard sai

QR status guard

QR không linked batch/trace

## P0

Trace foundation thiếu

QR link validation

Trace projection suy đoán missing data

## P0

Fail-safe thiếu

Trace gap detection

Máy in tự sinh mã

## P0

Printer integration sai

Payload-only rule

Reprint không kiểm soát

## P0

Thiếu approval/audit

Reprint flow

Recall không impact analysis

## P0

Recall chỉ là note

Impact analysis required

Sale Lock bị downstream bypass

## P0

Suppression boundary thiếu

Sale lock service/output

Sale Lock release không approval

## P0

Unlock sai quyền

Release guard

MISA mutate recall/sale lock

## P0

Boundary sai

MISA no-control

Evidence submitted được pass

## P0

Sai evidence state

Evidence guard

Missing audit

## P1

Command thiếu actor/correlation

Audit required

## 30. REPORT FORMAT 15 MỤC CHO P2.2E

Mọi report P2.2E phải có đủ 15 mục:

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

Nếu thiếu 15 mục, không được chuyển sang P2.2F.

## 31. DONE GATE P2.2E

P2.2E được xem là đạt ở mức handoff/implementation report khi:

Internal genealogy dựng được raw lot -> material issue -> production dossier -> batch -> warehouse.

Trace gap được flag.

Trace projection có status rõ.

QR linked batch.

QR linked trace projection.

QR VOID/FAILED/bị chặn không public-valid.

Barcode bám packaging/trade item config.

Print payload cấp 1 đúng MFG/HSD.

Print payload cấp 2 đúng batch/MFG/HSD/barcode/QR.

Máy in không tự sinh mã.

Reprint có reason/permission/log/audit.

Public Trace dùng DTO riêng.

Public Trace whitelist-only.

Public Trace không lộ private/internal field.

Recall Case có state.

Recall Impact Analysis xác định impacted target.

Hold có scope/status/audit.

Sale Lock có scope/status/audit/evidence.

Sale Lock active tạo downstream suppression boundary.

Commerce/AI/Gateway/Ads/Live/CRM/IVR không được bypass Sale Lock.

Sale Lock release có approval/evidence.

MISA không mutate trace/recall/sale lock.

Actor/permission/audit/idempotency/evidence được kiểm soát.

Có smoke result.

Có evidence package.

Có report 15 mục.

Không lấn sang Commerce/AI/Gateway full.

Gateway vẫn bị chặn.

Không gọi Completion Decision.

Không gọi Production Readiness.

## 32. FAIL GATE P2.2E

P2.2E fail nếu xảy ra một trong các trường hợp:

QR không linked batch.

QR không linked trace projection.

QR VOID vẫn public-valid.

QR FAILED vẫn public-valid.

QR bị chặn vẫn public-valid.

Public Trace dùng Admin/Internal DTO.

Public Trace lộ supplier private detail.

Public Trace lộ formula/BOM/ratio.

Public Trace lộ cost/MISA/accounting data.

Public Trace lộ QC defect nội bộ.

Public Trace lộ evidence private.

Public Trace lộ personnel/admin note/audit/idempotency/correlation.

Trace projection tự suy đoán missing genealogy.

Batch không trace được về Production Dossier.

QR không trace được về Warehouse Receipt nếu policy yêu cầu.

Máy in tự sinh batch/MFG/HSD/barcode/QR.

Print payload FAILED/VOID vẫn public-valid.

Reprint không có reason.

Reprint không có permission.

Reprint không có audit.

Reprint tạo QR mới không linked original.

Recall Case không có impact analysis.

Recall không tạo hold/sale lock khi cần.

Sale Lock active nhưng Commerce vẫn sellable.

Sale Lock active nhưng AI vẫn tư vấn/chốt.

Sale Lock active nhưng Gateway vẫn tạo order flow.

Sale Lock active nhưng Ads/Live/CRM vẫn thúc mua.

Sale Lock active nhưng IVR vẫn xác nhận đơn.

Sale Lock release không có approval/evidence.

MISA mutate trace/recall/sale lock.

Evidence Submitted bị gọi Accepted.

Lấn sang Commerce Runtime đầy đủ.

Lấn sang AI/Gateway runtime đầy đủ.

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

P2.2E - Traceability / QR / Recall / Sale Lock

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
