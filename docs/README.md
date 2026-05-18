# docs

Thư mục này chứa tài liệu nguyên tắc thiết kế contract, compatibility, review và release cho `ginsengfood-contracts`.

Người dùng chính là team `ginsengfood-ops-core`, team `ginsengfood-business-platform`, QA và reviewer contract. Không đặt OpenAPI, AsyncAPI, JSON Schema thật, implementation code, secret hoặc migration vào đây.

Ví dụ file trong thư mục này: `api-design-standard.md`, `event-design-standard.md`, `compatibility-policy.md`, `release-checklist.md`. Khi tài liệu mô tả API/event/schema cụ thể, phải nhắc rõ version và impact compatibility.

## Ops-core External Boundary With ginsengfood-business-platform

`ops-core-business-platform-boundary.md` là tài liệu boundary chung cho phần ops-core expose/consume với `ginsengfood-business-platform`.

Tài liệu này ghi rõ API ops-core expose, event ops-core publish, event business-platform publish mà ops-core có thể consume, và các boundary lock: business-platform chỉ consume/check contract, không mutate ops-core truth; ops-core không sở hữu customer/CRM/commerce/payment/shipping/ads/AI/member benefit; ops-core chỉ lưu reference key khi cần; Sale Lock / Recall / Not Sellable thắng downstream selling flow; Product Active và SKU Active không đồng nghĩa Sellable/có hàng bán.
