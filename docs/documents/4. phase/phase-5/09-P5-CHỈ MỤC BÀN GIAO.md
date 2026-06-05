# P5 - CHỈ MỤC BÀN GIAO

**Phase:** PHASE-05 - Facebook Channel Gateway / Meta Live / Messenger Delivery  
**Ngày viết lại:** 2026-06-05  
**Trạng thái:** `REWRITTEN_FROM_FACEBOOK_ADS_LIVE_BASELINE`  
**Gateway:** `PRODUCTION_BLOCKED`  
**Release:** `NOT_RELEASE_READY`

## 1. Đọc file nào trước

1. `BẢNG GÔM GIAI ĐOẠN 5.md`
2. `10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md`
3. `00-P5-PHÂN TÍCH HIỆN TRẠNG.md`
4. `01-P5-THIẾT KẾ KỸ THUẬT.md`
5. `02-P5-2A-ĐỊNH DANH KÊNH VÀ NGỮ CẢNH PAGE.md`
6. `03-P5-2B-BÌNH LUẬN CÔNG KHAI VÀ BÀN GIAO MESSENGER.md`
7. `04-P5-2C-NGỮ CẢNH MESSENGER VÀ CHẶN PHẢN HỒI CUỐI.md`
8. `05-P5-2D-CHỈ BÁO ĐANG GÕ VÀ NHỊP ĐỘ PHẢN HỒI.md`
9. `06-P5-2E-GIỚI HẠN TẦN SUẤT CHỐNG SPAM VÀ KIỂM DUYỆT.md`
10. `07-P5-2F-CHẶN GỬI TỪ CHỐI NHẬN VÀ BÀN GIAO NGƯỜI THẬT.md`
11. `08-P5-2G-BÁO CÁO KIỂM THỬ KHÓI VÀ BẰNG CHỨNG GATEWAY.md`

## 2. Vai trò Phase 5

Phase 5 là Facebook Channel Gateway: lớp hạ tầng kênh cho Meta webhook, Page Registry, event normalization, live comment, Messenger handoff, delivery pacing, rate-limit, suppression, attribution preservation và evidence.

Phase 5 không phải AI Advisor, không phải Commerce, không phải Payment, không phải CRM worker, không phải Ads optimizer và không phải Diamond payout runtime.

## 3. Entry gate

Gateway production chỉ được xét khi:

- AI Advisor Facebook Completion Report `PASS`.
- Evidence Package `PASS`.
- GATE-01 đến GATE-12 của AI Channel đều PASS.
- E2E live-to-order smoke PASS.
- Owner sign-off PASS.
- Rollback plan và monitoring READY.

Nếu chưa đủ, trạng thái bắt buộc:

`P5_GATEWAY_PRODUCTION_BLOCKED_BY_AI_COMPLETION_EVIDENCE`

## 4. Source-of-truth

Nguồn Phase 5 tối thiểu:

| Nhóm | File |
| --- | --- |
| Master source truth | `docs/documents/1. master/02-MASTER-01-SOURCE-OF-TRUTH.md` |
| Master dependency | `docs/documents/1. master/03-MASTER-02-CROSS-PACK-DEPENDENCY.md` |
| Master runtime guard | `docs/documents/1. master/05-MASTER-04-RUNTIME-RESOLUTION-GUARD.md` |
| Master evidence gate | `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md` |
| Master release control | `docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md` |
| Master decision log | `docs/documents/1. master/09-MASTER-08-CROSS-SYSTEM-DECISION-LOG.md` |
| Master runtime addendum | `docs/documents/1. master/10-MASTER-09-CROSS-PHASE-RUNTIME-LOCK-ADDENDUM.md` |
| Gateway pack | `docs/documents/2. pack/06-PACK-06-FACEBOOK-CHANNEL-GATEWAY.md` |
| AI Advisor pack | `docs/documents/2. pack/05-PACK-05-AI-ADVISOR-CHANNEL.md` |
| Ads pack | `docs/documents/2. pack/07-PACK-07-ADS-ROAS-ATTRIBUTION.md` |
| Live pack | `docs/documents/2. pack/08-PACK-08-MC-AI-LIVE.md` |
| Completion evidence pack | `docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md` |
| Commerce tech | `docs/documents/3. tech/05-TECH-04-COMMERCE-PRICE-PROMOTION-ORDER-PAYMENT-SHIPPING.md` |
| AI Advisor tech | `docs/documents/3. tech/06-TECH-05-AI-ADVISOR-RUNTIME-PRODUCT-CONSULTING-CUSTOMER-MEMORY-QUOTE-SAFE-SALES-ORDER-DRAFT-HANDOFF.md` |
| Gateway tech | `docs/documents/3. tech/07-TECH-06-FACEBOOK-GATEWAY-META-LIVE-MESSENGER-CHANNEL-DELIVERY-COMMENT-TO-MESSENGER.md` |
| Ads tech | `docs/documents/3. tech/08-TECH-07-ADS-ROAS-PIXEL-CAPI-ATTRIBUTION-SCALE-GATE.md` |
| Live tech | `docs/documents/3. tech/09-TECH-08-MC-AI-LIVE-SESSION-SCRIPT-LIVE-COMMERCE-COMMENT-ROUTING.md` |
| Global evidence tech | `docs/documents/3. tech/11-TECH-10-GLOBAL-SMOKE-EVIDENCE-RELEASE-GATE.md` |
| Phase 4 AI lock | `docs/documents/4. phase/phase-4/BẢNG GÔM GIAI ĐOẠN 4.md` |
| CRM canonical | `docs/documents/6. canonical/01-CANONICAL-CRM-MEMBER-LIFECYCLE-RUNTIME.md` |
| Finance/Diamond canonical | `docs/documents/6. canonical/02-CANONICAL-FINANCE-DIAMOND-COMMISSION-PAYOUT-RUNTIME.md` |
| Evidence canonical | `docs/documents/6. canonical/03-CANONICAL-EVIDENCE-SMOKE-GATE-CUSTOMER-TO-CASH-CARE.md` |

Nguồn bổ sung được nhập:

- Business & Ads Financial Baseline Lock.
- AI Advisor Facebook Completion Report.
- Facebook Page List / Owner Decisions.
- Ads Cost Model / Live Commerce Scale Model.
- Pricing / Golden Hour / Diamond Model.
- Financial Analysis.
- AI Channel đủ điều kiện trước Gateway.
- Trình tự triển khai tiếp theo.

File `01. FILE FACEBOOK ADS & LIVE COMMERCE OPERATING MODEL.md` hiện rỗng.

## 5. Execution order

| Bước | File | Scope | Done condition |
| --- | --- | --- | --- |
| 0 | `BẢNG GÔM GIAI ĐOẠN 5.md` | Reading hub | Hiểu toàn bộ Gateway boundary và business/financial/channel locks. |
| 1 | `10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md` | Runtime lock | Gateway không tự quote/order/CRM/commission, production blocked. |
| 2 | `00-P5-PHÂN TÍCH HIỆN TRẠNG.md` | Analysis | Current state/gap/risk/owner decisions, không sửa code. |
| 3 | `01-P5-THIẾT KẾ KỸ THUẬT.md` | Design | API/DB/event/feature flag design. |
| 4 | `02-P5-2A...` | Page Registry | Meta App/Page/Token governance. |
| 5 | `03-P5-2B...` | Webhook/live/comment | Normalized event, public/private, handoff. |
| 6 | `04-P5-2C...` | Messenger/AI routing | Thread binding, Final Response Guard, quote/order handoff. |
| 7 | `05-P5-2D...` | Delivery | Typing, pacing, retry, delivery log. |
| 8 | `06-P5-2E...` | Security/moderation | Rate-limit, anti-spam, dedup, App Review checklist. |
| 9 | `07-P5-2F...` | Suppression/attribution | Opt-out, CRM, human handoff, Ads/ROAS/Diamond guard. |
| 10 | `08-P5-2G...` | Smoke/evidence | P0 matrix, E2E smoke, dashboard, pilot, rollback. |

## 6. Core rules

- Gateway chỉ nhận/normalize/route/deliver; không tự tạo business truth.
- Không có Final Response Guard PASS thì không delivery.
- Không có QuoteSnapshot thì không final price.
- Không có CustomerConfirmation/order_code thì không order success.
- Public comment/live không được leak price/PII/payment/order/health-sensitive.
- Handoff success mới được nói đã chuyển Messenger.
- ORDER_VERIFIED là event revenue chính.
- Diamond commission chỉ sau valid referral bind và Order Verified, không tính trong Gateway.
- Completion Report chưa PASS thì Gateway production vẫn BLOCKED.

## 7. Pilot/scale rule

Pilot 7-14 ngày, không scale mạnh ngay.

Chỉ scale khi:

- Không leak PII.
- Không spam.
- Handoff đúng success/fail.
- AOV >= 2 hộp/đơn.
- CPA nằm trong target.
- ORDER_VERIFIED tracking đúng.
- ROAS đo thật và cao hơn break-even.
- COD fail/cancel/return trong ngưỡng hoặc owner accepted risk rõ.

## 8. Status cuối

`PHASE_5_REWRITTEN_AS_FACEBOOK_CHANNEL_GATEWAY_TECHNICAL_DEV_PACK`

`GATEWAY_PRODUCTION_BLOCKED`

`NOT_RELEASE_READY`

