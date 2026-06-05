# P5.2F - Suppression / Opt-out / Human Handoff

**Backlog:** `GW-BLG-009`  
**Mapped FB scope:** CRM suppression, human handoff, Ads/Diamond attribution guard  
**Gateway:** `PRODUCTION_BLOCKED`

## 1. Mục tiêu

Đảm bảo Gateway tôn trọng consent, opt-out, quiet hours, open case, recall/sale lock, human handoff và attribution boundary. Gateway không được tự gửi CRM, không tự tính Diamond commission và không public Ads/ROAS/Diamond payout.

## 2. Suppression contract

```yaml
GatewaySuppressionDecision:
  customer_ref: required
  channel_identity: required
  consent_status: OPTED_IN | OPTED_OUT | UNKNOWN
  quiet_hour_status: IN_WINDOW | OUTSIDE_WINDOW
  message_fatigue_status: PASS | EXCEEDED
  open_case_status: NONE | QUALITY | COUNTERFEIT | PRIVACY | PAYMENT | DELIVERY
  recall_or_sale_lock_status: PASS | BLOCKED
  selected_action: SEND | SUPPRESS | HUMAN_HANDOFF | SAFE_ACK_ONLY
  suppression_reasons: list
  evidence_ref: required
```

Suppression thắng AI, Gateway, CRM, Ads, Live và IVR sales flow.

## 3. CRM outbound boundary

Gateway chỉ được enqueue hoặc deliver CRM command đã được CRM/AI runtime guard pass. Gateway không tự chọn lifecycle message.

CRM frequency locks:

- Sau mua: tối đa 1 tin/ngày/khách.
- Gợi ý mua lại/đổi vị: tối đa 1 tin/3 ngày/khách.
- Win-back: tối đa 1 tin/7 ngày/khách.
- Campaign: tối đa 1 campaign/ngày/khách, nếu có consent và policy cho phép.
- Quiet hour: 22h00-08h00.

CRM không gửi khi:

- Opt-out.
- Open quality/counterfeit/privacy/payment/delivery issue.
- Message fatigue exceeded.
- SKU recall/sale lock/not sellable.
- Thiếu Product Effectiveness nếu gợi ý sản phẩm.

## 4. Human handoff

Human bắt buộc khi:

- Complaint thật.
- Hàng giả/chất lượng/privacy/payment/delivery issue.
- Bệnh nền phức tạp, thai kỳ, trẻ nhỏ, dùng thuốc chống đông, suy thận/lọc thận, dị ứng nặng.
- Khách yêu cầu cam kết y khoa/thay thuốc/chữa bệnh.
- AI không đủ dữ liệu để lọc an toàn.
- Handoff/delivery/quote/order runtime fail mà không có safe fallback.

## 5. Ads/ROAS internal-only guard

Gateway được preserve attribution, không public:

- campaign_id.
- adset_id.
- ad_id.
- attribution_id.
- ROAS.
- CPA.
- Ads spend.

ROAS chỉ tính từ `ORDER_VERIFIED`. Quote, inbox, comment, order_created không là revenue.

## 6. Diamond/referral attribution guard

Gateway được preserve:

- referral_link_id.
- diamond_id.
- source_page_id.
- live_session_id.
- order_attribution_snapshot.

Gateway không được:

- Tự tính commission.
- Nói payout cho khách thường.
- Tính commission trước ORDER_VERIFIED.
- Bỏ qua self-purchase policy.
- Ghi duplicate commission ledger khi retry.

Commission baseline chỉ là business input:

- 24/7: 15%.
- Giờ Vàng Tri Ân: 10%.
- PIT: 10% trên hoa hồng.

Runtime/canonical Finance-Diamond mới là owner tính toán.

## 7. Acceptance criteria

- Opt-out user không nhận proactive message.
- Open case suppress sales/CRM.
- Quiet hour được enforce.
- Recall/sale lock chặn sales reply.
- Ads/ROAS chỉ internal.
- Diamond attribution preserve nhưng không tính payout ở Gateway.
- Human handoff có reason/evidence.

## 8. Smoke

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| P5.2F-SMK-001 | User opt-out | No outbound. |
| P5.2F-SMK-002 | Quiet hour CRM | Suppressed/deferred. |
| P5.2F-SMK-003 | Open complaint | Human route, no sales. |
| P5.2F-SMK-004 | Ads-origin customer response | No campaign/ad/ROAS public. |
| P5.2F-SMK-005 | Diamond referral before verified order | No commission calculation. |

## 9. Final status

`LIMITED_IMPLEMENTATION_REPORT_ONLY`

`SUPPRESSION_AND_ATTRIBUTION_GUARD_REQUIRED`
