# PRINTING CODE RULES

## 2. QUY TẮC IN MÃ SẢN PHẨM 2 GIAI ĐOẠN - GINSENGFOOD

## 0. MỞ ĐẦU

### 0.1. Mục đích

Khóa nguyên tắc in mã theo 2 cấp đóng gói:

cấp 1

cấp 2

### 0.2. Nguyên tắc cốt lõi

Ops-core sinh và quản trị dữ liệu nghiệp vụ/identity; máy in chỉ nhận resolved render payload để in và trả trạng thái. Dữ liệu hệ thống quản trị không đồng nghĩa mọi field đều được render tại nhà máy.

Máy in không được tự sinh:

mã sản xuất

mã lô

ngày sản xuất

hạn dùng

barcode nghiệp vụ hoặc render policy

QR

### 0.3. OWNER-DIRECTIVE-2026-08-14-SUPPLIER-PREPRINTED-GTIN

Quyết định này supersede các câu cũ trong tài liệu yêu cầu factory in EAN-13 trên BOX/CARTON:

- BOX/CARTON dùng approved artwork và registered `GTIN_13`/EAN-13 do supplier in sẵn.
- Ops-core vẫn sở hữu Trade Item/GTIN registry, kiểm tra effective mapping và đối chiếu barcode tại FRM-10; supplier không tự cấp/đổi GTIN.
- Factory chỉ in variable data: BOX = batch/lô + MFG/EXP + unique public trace QR; CARTON = batch/lô + MFG/EXP + số hộp/thùng, không public QR mặc định.
- PACKET vẫn chỉ in MFG/EXP; directive này không tự áp dụng supplier-preprinted barcode cho PACKET.
- GTIN được giữ trong immutable validation/audit context nhưng không được đưa vào render fields khi `barcode_application_mode=SUPPLIER_PREPRINTED`.
- Policy được snapshot theo packaging material lot/intake để xử lý mixed legacy/preprinted stock. `FACTORY_PRINTED + FULL_LABEL` chỉ là controlled fallback cho legacy blank lot.
- Reprint chỉ reprint variable data/QR được phép; không reprint supplier-preprinted EAN-13.
- Baseline identity hiện hành là 19 SKU, 19 BOX `GTIN_13` và 19 CARTON `GTIN_13` (38 GTIN tổng); mọi assertion 20/40 cũ trong tài liệu này là historical và bị owner directive 2026-08-14 supersede.

Nguồn quyết định: `docs/decisions/14-08-11-18-m10-supplier-preprinted-gtin-owner-decision.md` trong ops-core.

## 1. QUY TẮC SINH MÃ TRUNG TÂM

### 1.1. Hệ thống phải sinh

batch / lô sản xuất

ngày sản xuất

hạn dùng

GTIN/barcode identity và expected value để validation/audit

QR token / QR payload

resolved print payload theo cấp đóng gói, packaging lot và label profile

### 1.2. Máy in chỉ làm

nhận payload

in

trả trạng thái:

đã nhận

đã in

lỗi in

dừng line

reprint callback

### 1.3. Cấm

Không cho máy in tự sinh mã nghiệp vụ làm source of truth.

## 2. QUY TẮC SINH DỮ LIỆU IN THEO THỜI GIAN THỰC

### 2.1. Điều kiện để hệ thống tự sinh dữ liệu in

Khi hệ thống đã biết:

SKU đang sản xuất

Mã hồ sơ sản xuất

Mã lệnh sản xuất

Mẻ sản xuất

Công đoạn đóng gói

Cấp đóng gói

Template in đang áp dụng

thì hệ thống phải tự sinh dữ liệu in theo thời gian thực.

### 2.2. Ý nghĩa “tự sinh thời gian thực”

“Tự sinh thời gian thực” nghĩa là:

hệ thống chủ động tạo dữ liệu in ngay tại thời điểm line đang chạy

không để người vận hành nhập tay mã

không để máy in tự nghĩ ra mã nghiệp vụ

### 2.3. Người vận hành chỉ làm

xác nhận line đang chạy lệnh nào

xác nhận cấp đóng gói nào

chọn máy in

bấm bắt đầu in

theo dõi lỗi / reprint theo quyền

## 3. GIAI ĐOẠN IN CẤP 1

### 3.1. Đơn vị áp dụng

gói

chai

lọ

hũ

### 3.2. Nội dung in cấp 1

Chỉ in:

ngày sản xuất

hạn dùng

### 3.3. Mục tiêu

tối giản

nhanh

ít lỗi

không làm nặng line đóng gói cấp 1

## 4. GIAI ĐOẠN IN CẤP 2

### 4.1. Đơn vị áp dụng

hộp

### 4.2. Nội dung in cấp 2

Phải phân biệt nội dung đã có sẵn trên bao bì và nội dung factory render:

| Cấp | Supplier in sẵn | Factory render |
| --- | --- | --- |
| BOX | approved artwork + registered EAN-13 | lô, MFG, EXP, unique public trace QR |
| CARTON | approved artwork + registered EAN-13 | lô, MFG, EXP, số hộp/thùng |

Không render lặp EAN-13 trên variable-data label. Generic QR có sẵn trong artwork không thay thế unique public trace QR của BOX.

### 4.3. Quy tắc sinh dữ liệu in cấp 2

Khi line cấp 2 đang chạy, hệ thống phải:

tự xác định SKU

tự xác định batch/lô

tự xác định MFG/EXP

tự lấy expected GTIN từ active Trade Item identifier và đối chiếu với barcode supplier-preprinted đã scan

tự sinh QR

tự cấp số thứ tự in nếu policy cần

tự gửi payload xuống máy in

resolve `barcode_application_mode`, `factory_label_profile`, template version và render allowlist từ approved packaging lot; operator không tự nhập các giá trị này

### 4.4. Cấm

Không cho người vận hành nhập tay:

mã lô

barcode

QR

ngày sản xuất

hạn dùng trừ trường hợp override được phê duyệt riêng.

Không cho operator yêu cầu render EAN-13 trong supplier-preprinted mode hoặc tự over-label barcode supplier bị sai/không đọc được. Trường hợp đó phải HOLD/REJECT/return hoặc đi deviation/rework được phê duyệt.

## 5. LIÊN KẾT GIỮA CÔNG THỨC, LỆNH SẢN XUẤT VÀ IN MÃ

### 5.1. Dữ liệu in không tách rời công thức

Dữ liệu in phải sinh từ:

SKU

công thức đang áp dụng

batch/lô thật

hồ sơ sản xuất gốc

công đoạn đóng gói thực tế

### 5.2. Không có bước chọn lại nguyên liệu để in

Người vận hành không được chọn lại nguyên liệu để sinh dữ liệu in. Dữ liệu in chỉ bám vào:

lệnh đang chạy

batch đang chạy

sản phẩm đang đóng gói

### 5.3. Kết luận

Công thức tự hiện đúng thì dữ liệu in mới đúng. Nếu công thức không bị chọn tay lại ở bước sản xuất, hệ thống mới có thể sinh mã in đúng, sạch và truy được.

## 6. QUY TẮC TEMPLATE IN

### 6.1. Template cấp 1

Mỗi SKU phải biết:

cấp 1 dùng đơn vị gì

template cấp 1 là gì

chỉ in MFG/HSD

### 6.2. Template cấp 2

Mỗi SKU phải biết:

cấp 2 dùng đơn vị gì

template/profile cấp 2 do server resolve là gì

phần nào đã có trên artwork supplier và phần nào factory sẽ render

BOX supplier-preprinted: factory render lô/MFG/HSD/QR, không EAN-13.

CARTON supplier-preprinted: factory render lô/MFG/HSD/số hộp, không EAN-13 và không public QR mặc định.

Legacy `FACTORY_PRINTED + FULL_LABEL` chỉ được sử dụng cho approved blank packaging lot, có reason/audit/effective window và physical scan acceptance.

### 6.3. Mapping theo SKU

Mỗi SKU phải có bảng mapping:

| SKU | Đơn vị cấp 1 | Nội dung in cấp 1 | Đơn vị cấp 2 | Nội dung in cấp 2 |
| --- | --- | --- | --- | --- |

## 7. REPRINT

### 7.1. Cấp 1

Reprint có kiểm soát, mức kiểm soát nhẹ hơn.

### 7.2. Cấp 2

Reprint phải bị kiểm soát chặt vì liên quan:

batch và immutable packaging-lot/label-policy lineage

GTIN validation context; không reprint supplier-preprinted barcode

QR

traceability

recall

### 7.3. Bắt buộc

có lý do reprint

có người phê duyệt

có log reprint

không cho máy in tự ý reprint ngoài hệ thống

## 8. LOG IN BẮT BUỘC

### 8.1. Log cấp 1

mã print job

SKU

đơn vị in

MFG/HSD

thời gian gửi lệnh

trạng thái in

### 8.2. Log cấp 2

mã print job

SKU

batch/lô

MFG/HSD

expected/scanned GTIN, barcode application mode, packaging lot, artwork revision và verification reference

QR

thời gian gửi lệnh

trạng thái in

reprint nếu có

## 9. PASS / FAIL GATE

### 9.1. Đạt khi

cấp 1 chỉ in MFG/HSD

cấp 2 resolve đúng policy: BOX in lô/MFG/HSD/QR; CARTON in lô/MFG/HSD/số hộp; supplier-preprinted mode không render lặp EAN-13

hệ thống sinh toàn bộ variable data/QR theo batch thật và giữ GTIN trong validation/audit context

máy in chỉ in và trả trạng thái

có log đầy đủ

reprint bị kiểm soát

dữ liệu in bám đúng batch/lô, packaging lot đã duyệt và lệnh sản xuất thật

FRM-10 chứng minh expected/scanned GTIN match, barcode readable và artwork revision được duyệt trước khi lot `READY_FOR_PACKAGING`

### 9.2. Chưa đạt khi

máy in tự sinh mã nghiệp vụ

không có log in

không có log reprint

GTIN verification/QR không gắn với packaging lot hoặc batch thật

không phân biệt cấp 1 và cấp 2

người vận hành phải nhập tay mã in cấp 2

supplier-preprinted mode vẫn render GTIN/EAN-13, hoặc dùng barcode supplier sai/không đọc được mà không HOLD/REJECT
