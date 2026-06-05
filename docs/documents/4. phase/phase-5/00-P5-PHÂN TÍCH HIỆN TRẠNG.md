# P5 - Analysis Only

**Phase:** PHASE-05 - Facebook Channel Gateway / Meta Live / Messenger Delivery  
**Mode:** `ANALYSIS_ONLY`  
**Ngày viết lại:** 2026-06-05  
**Gateway:** `PRODUCTION_BLOCKED`  
**Release:** `NOT_RELEASE_READY`

## 1. Mục tiêu analysis

Phân tích current state trước khi thiết kế hoặc triển khai Facebook Channel Gateway. File này chỉ dùng để inspect tài liệu, code, API, DB, config, test, log, evidence và owner decision. Không sửa code, không tạo migration, không seed, không bật webhook production, không tạo Page Access Token thật trong tài liệu.

## 2. Kết luận nguồn bổ sung

Các tài liệu bổ sung đạt mức `PASS_AS_BUSINESS_OPERATING_BASELINE`: đủ làm nền chiến lược, tài chính, Page Registry, Ads/Live operating model và Gateway transition gate.

Chưa đủ để dev triển khai production Gateway ngay vì còn thiếu:

- Gateway API contract.
- Database object contract.
- Pixel / CAPI / Offline Conversion contract.
- App Review / permission checklist.
- Runbook vận hành và rollback.
- Evidence package pass cho AI Advisor Facebook Completion Report.

`01. FILE FACEBOOK ADS & LIVE COMMERCE OPERATING MODEL.md` hiện là file rỗng, không có nội dung để phân tích.

## 3. Entry gate

Chỉ bắt đầu analysis khi đã đọc:

- `docs/documents/4. phase/phase-4/BẢNG GÔM GIAI ĐOẠN 4.md`
- `docs/documents/4. phase/phase-4/10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md`
- `docs/documents/4. phase/phase-5/TÀI LIỆU BỔ SUNG/AI_ADVISOR_FACEBOOK_COMPLETION_REPORT.md`
- `docs/documents/4. phase/phase-5/TÀI LIỆU BỔ SUNG/TRÌNH TỰ TRIỂN KHAI TIẾP THEO.md`

Nếu AI Advisor Completion Report chưa `PASS`, ghi:

`P5-ENTRY-BLOCKED-BY-AI-ADVISOR-COMPLETION-EVIDENCE`

## 4. Scope phân tích

1. Meta Business/App/Page Registry current state.
2. Page role: Commerce Hub, live spoke, ads spoke, test page, CRM allowed.
3. Token/secret governance, app mode, app review status.
4. Webhook endpoint, verify token handshake, signature validation.
5. Raw webhook storage, normalized event, idempotency, dedup, retry, DLQ.
6. Live Session Registry and comment ingestion.
7. Public comment boundary and system-initiated Messenger handoff.
8. Messenger thread binding and source attribution preservation.
9. AI Advisor routing and Final Response Guard enforcement.
10. Ads campaign/adset/ad attribution, Pixel/CAPI/offline mapping.
11. ORDER_VERIFIED revenue measurement.
12. Diamond referral attribution and commission eligibility handoff.
13. Rate-limit, anti-spam, moderation, complaint split.
14. Suppression, opt-out, CRM quiet hour, frequency cap.
15. Evidence package, dashboard, pilot, scale gate, rollback.

## 5. Business locks phải đối chiếu

| Nhóm | Giá trị khóa |
| --- | --- |
| Revenue engine | Giờ Vàng Tri Ân là chính; 24/7 là CRM/reorder/reactivation. |
| Price wording | Không dùng "sale sốc/xả kho/flash sale"; dùng "Giờ Vàng Tri Ân". |
| Quote hold | Giờ Vàng 5 phút, 24/7 15 phút; hết hạn phải revalidate. |
| AOV | 1 hộp hợp lệ; 2-3 hộp là growth target; AI/Gateway không ép combo. |
| Ads cost | Tháng 1-2: 20% verified revenue; tháng 3-4: 17%; tháng 5-6: 15%. |
| ROAS | Chỉ tính từ ORDER_VERIFIED, không tính comment/inbox/quote/order_created. |
| Diamond | Commission chỉ sau valid referral bind và Order Verified. |

## 6. Output bắt buộc

Analysis report phải có:

- Current-state map: API, route, service, config, DB/table, worker, queue, test, log, evidence.
- Page Registry gap matrix.
- Gateway API gap matrix.
- Database object gap matrix.
- Pixel/CAPI/offline conversion gap matrix.
- App Review/permission gap matrix.
- Public/private risk register.
- Ads/ROAS measurement risk register.
- Diamond attribution risk register.
- P0 smoke matrix proposal.
- Owner decision register.

## 7. P0 blockers

- AI Advisor Completion Report chưa PASS nhưng Gateway production được mở.
- Gateway tự quote/order/CRM.
- Gateway public final price, PII, payment, order hoặc health-sensitive detail.
- Webhook thiếu signature validation hoặc idempotency.
- Page Access Token/App Secret/Verify Token xuất hiện trong tài liệu/evidence.
- ROAS tính từ quote/inbox/comment/order chưa verified.
- Diamond commission tính trước ORDER_VERIFIED.
- CRM gửi khi opt-out/open case/quiet hour/frequency cap.

## 8. Done gate

Analysis chỉ DONE khi có report rõ:

- `PASS_AS_BUSINESS_OPERATING_BASELINE` cho tài liệu nguồn.
- `PRODUCTION_BLOCKED` cho Gateway nếu Completion Report chưa PASS.
- Missing contracts cụ thể cho từng file P5.1 đến P5.2G.
- Không kết luận release-ready.

## 9. Final status tối đa

`P5_ANALYSIS_COMPLETED_WITH_GATEWAY_PRODUCTION_BLOCKED`

