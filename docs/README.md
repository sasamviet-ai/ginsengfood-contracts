# docs

Thư mục này chứa tài liệu nguyên tắc thiết kế contract, compatibility, review và release cho `ginsengfood-contracts`.

Người dùng chính là team `ginsengfood-ops-core`, team `ginsengfood-business-platform`, QA và reviewer contract. Không đặt OpenAPI, AsyncAPI, JSON Schema thật, implementation code, secret hoặc migration vào đây.

Ví dụ file trong thư mục này: `api-design-standard.md`, `event-design-standard.md`, `compatibility-policy.md`, `release-checklist.md`. Khi tài liệu mô tả API/event/schema cụ thể, phải nhắc rõ version và impact compatibility.

## Ops-core External Boundary With ginsengfood-business-platform

`ops-core-business-platform-boundary.md` là tài liệu boundary chung cho phần ops-core expose/consume với `ginsengfood-business-platform`.

Tài liệu này ghi rõ API ops-core expose, event ops-core publish, event business-platform publish mà ops-core có thể consume, và các boundary lock: business-platform chỉ consume/check contract, không mutate ops-core truth; ops-core không sở hữu customer/CRM/commerce/payment/shipping/ads/AI/member benefit; ops-core chỉ lưu reference key khi cần; Sale Lock / Recall / Not Sellable thắng downstream selling flow; Product Active và SKU Active không đồng nghĩa Sellable/có hàng bán.

## Cross-System Canonical Addenda 2026-06-05

Sau vòng gộp bổ sung CRM/Member, Diamond/Finance, Facebook Gateway, AI Advisor và IVR, đọc bộ canonical theo thứ tự:

1. `documents/1. master/09-MASTER-08-CROSS-SYSTEM-DECISION-LOG.md`
2. `documents/1. master/10-MASTER-09-CROSS-PHASE-RUNTIME-LOCK-ADDENDUM.md`
3. `documents/4. phase/phase-3/10-P3-ADDENDUM-CUSTOMER-TO-CASH-RUNTIME-LOCK.md`
4. `documents/4. phase/phase-4/BẢNG GÔM GIAI ĐOẠN 4.md`
5. `documents/4. phase/phase-4/10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md`
6. `documents/4. phase/phase-4/11-P4-MA TRẬN SRS VÀ BÀN GIAO TRIỂN KHAI.md`
7. `documents/4. phase/phase-5/10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md`
8. `documents/6. canonical/01-CANONICAL-CRM-MEMBER-LIFECYCLE-RUNTIME.md`
9. `documents/6. canonical/02-CANONICAL-FINANCE-DIAMOND-COMMISSION-PAYOUT-RUNTIME.md`
10. `documents/4. phase/phase-8/IVR-21-attempt-policy-cleanup-decision.md`
11. `documents/6. canonical/03-CANONICAL-EVIDENCE-SMOKE-GATE-CUSTOMER-TO-CASH-CARE.md`

Các tài liệu này khóa boundary và smoke/evidence. Chúng không tự gọi Gateway PASS, Release Ready hoặc Production Ready.
