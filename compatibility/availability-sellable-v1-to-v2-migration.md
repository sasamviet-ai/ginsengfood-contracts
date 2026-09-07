# `availability-sellable` v1 → v2 — `block_reasons` migration

**Trạng thái:** `DRAFT_PENDING_CONSUMER_CONFIRMATION` — phần ops-core (provider) đã đo trên mã nguồn; phần
business-platform (consumer) cần xác nhận. Xem §5.

**Vì sao có tài liệu này.** `block_reasons` của v1 khai là `array<string>` **không có enum**
(`schemas/ops/sellable-status.schema.json`), còn v2 khai enum **đóng 15 giá trị**
(`schemas/ops/availability-check-result.v2.schema.json`). Không có gì nối hai danh sách đó, nên mỗi bên đọc một
kiểu và không ai thấy chỗ lệch. Đây là bảng nối.

---

## 1. Ba từ vựng, không phải hai

| Nguồn | Số token | Tính chất |
| --- | --- | --- |
| **ops-core v1 runtime** — `OpSellableStatus.GetBlockReasons` | 11 | đang phát thật; `block_reasons` v1 không có enum nên chưa từng bị ràng buộc |
| **contracts v2** — `availability-check-result.v2.schema.json` | 15 | enum đóng, đã publish, **chưa có runtime** |
| **business-platform** — `SellableBlockReason` (phase-3 §13.4) | 15 tối thiểu | danh sách của consumer, **là hợp** của lý do M3 tự sinh và lý do ops-core cấp |

> ⚠️ Ba danh sách này **không phải ba phiên bản của cùng một enum**. Danh sách M3 chứa những lý do
> ops-core không bao giờ được phát (§4). Đọc nhầm nó thành "yêu cầu với ops-core" sẽ sinh ra một xung đột
> không có thật.

Spec phase-3 §13.3–13.4 nói rõ ngay trên danh sách:

> *"Tên enum có thể điều chỉnh theo convention codebase, nhưng ý nghĩa không được làm sai."*

Nên khác tên **không phải** breaking change. Thứ bắt buộc là bảng map này, và ngữ nghĩa không được lệch.

---

## 2. ops-core v1 → v2

| v1 (đang phát) | v2 | Ghi chú |
| --- | --- | --- |
| `SKU_NOT_ACTIVE` | `SKU_NOT_ACTIVE` | giữ nguyên |
| `BATCH_NOT_RELEASED` | `BATCH_NOT_RELEASED` | giữ nguyên |
| `WAREHOUSE_RECEIPT_NOT_CONFIRMED` | `WAREHOUSE_RECEIPT_NOT_CONFIRMED` | giữ nguyên |
| `QUALITY_HOLD` | `QUALITY_HOLD` | giữ nguyên |
| `RECALL_HOLD` | `RECALL_HOLD` | giữ nguyên |
| `SALE_LOCK` | `SALE_LOCK` | giữ nguyên |
| `TRACE_NOT_READY` | `TRACE_NOT_READY` | giữ nguyên |
| `HSD_NOT_VALID` | `HSD_EXPIRED` | **đổi tên**, cùng nghĩa |
| `STOCK_NOT_AVAILABLE` | `INSUFFICIENT_STOCK` **hoặc** `ZERO_SELLABLE_QUANTITY` | **tách một thành hai**: v2 trả số lượng nên phân biệt được "không còn gì" với "còn nhưng không đủ". v1 không có số nên không tách được — chuyển tiếp v1→v2 phải chọn theo `sellable_quantity`, không map cứng. |
| `SKU_ACTIVATION_NOT_ACTIVE` | *(bỏ)* | v2 không tách trục activation khỏi trạng thái SKU. Xem §5.1. |
| `INVENTORY_LEDGER_NOT_PASSED` | *(bỏ)* | Xem §5.2 — đây là ô còn thật sự mở. |

**Chỉ có trong v2** (v1 không thể phát): `UOM_NOT_ACTIVE` · `UOM_MISMATCH` · `RESOLUTION_TIMEOUT` ·
`PROVIDER_UNAVAILABLE` · `FLEET_AUTHORITY_UNAVAILABLE`. Bốn cái sau là chế độ hỏng của đường v2, không phải
trạng thái nghiệp vụ; consumer phải phân biệt "không bán được" với "chưa trả lời được".

---

## 3. ops-core → business-platform

Phần ops-core **sở hữu** và cấp cho consumer:

| ops-core v1 | ops-core v2 | business-platform |
| --- | --- | --- |
| `SKU_NOT_ACTIVE` | `SKU_NOT_ACTIVE` | `SKU_INACTIVE` |
| `SKU_ACTIVATION_NOT_ACTIVE` | *(gộp)* | `SKU_INACTIVE` |
| `BATCH_NOT_RELEASED` | `BATCH_NOT_RELEASED` | `BATCH_NOT_RELEASED` |
| `WAREHOUSE_RECEIPT_NOT_CONFIRMED` | `WAREHOUSE_RECEIPT_NOT_CONFIRMED` | `WAREHOUSE_RECEIPT_NOT_CONFIRMED` |
| `STOCK_NOT_AVAILABLE` | `INSUFFICIENT_STOCK` / `ZERO_SELLABLE_QUANTITY` | `NO_AVAILABLE_STOCK` |
| `QUALITY_HOLD` | `QUALITY_HOLD` | `QUALITY_HOLD_ACTIVE` |
| `RECALL_HOLD` | `RECALL_HOLD` | `RECALL_ACTIVE` |
| `SALE_LOCK` | `SALE_LOCK` | `SALE_LOCK_ACTIVE` |
| `HSD_NOT_VALID` | `HSD_EXPIRED` | ⚠️ **chưa có** — §5.3 |
| `TRACE_NOT_READY` | `TRACE_NOT_READY` | ⚠️ **chưa có** — §5.3 |
| `INVENTORY_LEDGER_NOT_PASSED` | *(bỏ)* | ⚠️ `DATA_CONFLICT` — §5.2 |

---

## 4. Lý do business-platform tự sinh — ops-core KHÔNG phát

Ops-core không có dữ liệu để phán những mục này, và không được phát chúng:

`LISTED_PRICE_MISSING` · `LISTED_PRICE_INACTIVE` — ops-core không sở hữu giá bán.
`CHANNEL_SUPPRESSED` — chính sách kênh thuộc consumer.
`RUNTIME_POLICY_UNAVAILABLE` · `DEPENDENCY_UNAVAILABLE` · `DATA_CONFLICT` · `UNKNOWN_ERROR_FAIL_SAFE` — chế độ
hỏng của resolver phía consumer.

`PRODUCT_INACTIVE` — **không bao giờ khả thi.** Owner decision `OD-A6-01` chốt Product ≡ SKU quan hệ 1:1,
`product_id = sku_id`; ops-core không có aggregate Product và không có `product_status`. Consumer cần chặn theo
sản phẩm thì dùng `SKU_INACTIVE`.

---

## 5. Ô còn mở — cần consumer/chief chốt

### 5.1 · `SKU_ACTIVATION_NOT_ACTIVE` gộp vào `SKU_INACTIVE`
Ops-core tách hai trục: SKU active, và bản activation của SKU active. Cả hai danh sách phía ngoài chỉ có một
lý do. Gộp là **mất độ phân giải, không mất tính đúng**: cả hai đều nghĩa là chưa được phép bán. Chấp nhận
được nếu consumer không cần biết vì sao.

### 5.2 · `INVENTORY_LEDGER_NOT_PASSED` — ô mở thật sự
Nó bật khi phiếu nhập kho **đã CONFIRMED** nhưng **chưa sinh bút toán tồn** (`HasWarehouseReceiptLedgerAsync`).
Đó là **bất nhất nội bộ của ops-core**, không phải "hết hàng": xác nhận nhập kho lẽ ra phải ghi ledger trong
cùng giao dịch.

⛔ **Đừng map nó sang `NO_AVAILABLE_STOCK`.** Làm vậy là giấu một lỗi dữ liệu sau một thông điệp kinh doanh
bình thường, và không ai đi điều tra.

Đề nghị: consumer nhận `DATA_CONFLICT`; ops-core đồng thời bật cảnh báo nội bộ.

**Câu hỏi cho v2:** v2 đã bỏ token này, nên khi v2 chạy thật và gặp đúng trạng thái đó thì nó phát gì? Ba
đường: (a) thêm token vào enum v2; (b) ops-core bảo đảm trạng thái này bất khả thi bằng ràng buộc giao dịch,
rồi bỏ hẳn; (c) trả `ZERO_SELLABLE_QUANTITY` và chỉ cảnh báo nội bộ — nhưng (c) chính là cái bẫy vừa nêu.

### 5.3 · `HSD_EXPIRED` và `TRACE_NOT_READY` thiếu ở phía consumer
Cả hai **đã có trong enum v2 đã publish**, chỉ thiếu trong danh sách phase-3 §13.4 của consumer — danh sách đó
viết trước v2. Nên hướng đúng là **danh sách consumer bổ sung theo v2**, không phải ops-core bỏ token. Ops-core
gộp `HSD_EXPIRED` vào `NO_AVAILABLE_STOCK` sẽ khiến hàng hết hạn trông giống hàng hết — hai việc xử lý khác hẳn nhau.

---

## 6. Việc còn lại

- [ ] Consumer xác nhận bảng §3 và ba ô §5.
- [ ] Chốt §5.2 trước khi v2 có runtime — nó chạm ranh giới "lỗi dữ liệu" vs "trạng thái kinh doanh".
- [ ] Sau khi chốt: cân nhắc đóng enum cho `block_reasons` của **v1** đúng 11 token đang phát. Hiện v1 là
      `array<string>` tự do, nên một lần đổi tên bên trong ops-core sẽ ra tới wire mà không cổng nào đỏ.
      Việc này chạm contract đã phát hành ⇒ cần decision riêng.
- [ ] Contract test hai chiều cùng một pin contracts, cho ít nhất các token ở §3.
