# P5.2C - Messenger Context / Final Response Guard

**Backlog:** `GW-BLG-004 / GW-BLG-005`  
**Mapped FB file:** FB-04 - Messenger Thread / AI Advisor Routing / Hub-Spoke Handoff  
**Gateway:** `PRODUCTION_BLOCKED`

## 1. Mục tiêu

Đảm bảo mọi conversation sau public handoff được xử lý trong private context, preserve source attribution, gọi AI Advisor đúng contract và chỉ delivery khi Final Response Guard pass.

## 2. Hub-spoke rule

- Commerce Hub Messenger: `Ginsengfood - Cháo Sâm Mỗi Ngày`.
- Page spoke chỉ tạo source event và handoff.
- Page spoke không có sales Messenger flow riêng nếu policy chưa cho phép.
- Khi khách từ spoke sang hub, phải preserve `source_page_id`, `live_session_id`, `comment_id`, `attribution_id`, `referral_link_id`, `diamond_id` nếu có.

## 3. MessengerThreadBinding contract

```yaml
MessengerThreadBinding:
  binding_id: required
  commerce_hub_page_id: required
  source_page_id: required
  psid_or_customer_channel_identity_id: required
  messenger_thread_id: required
  conversation_id: required
  entry_channel: live_comment | post_comment | direct_messenger | ads_origin | crm
  source_event_id: optional
  attribution_id: optional_internal
  live_session_id: optional
  privacy_scope: PRIVATE
  active_window_status: OPEN | CLOSED | POLICY_RESTRICTED
```

## 4. AI routing contract

Gateway gửi normalized event sang AI Channel. AI Channel trả về delivery command hoặc block/handoff.

```yaml
GatewayToAIRequest:
  normalized_event_id: required
  channel_context: required
  thread_binding: required_if_private
  customer_context_ref: optional
  message_text_ref: required
  attribution_context_ref: optional_internal

AIDeliveryDecision:
  decision_envelope_id: required
  selected_action: SEND_MESSAGE | BLOCK_RESPONSE | HUMAN_HANDOFF | REQUEST_QUOTE | NOOP
  final_guard_status: PASS | FAIL | BLOCKED
  delivery_command_ref: required_if_SEND_MESSAGE
  blocked_actions: list
  evidence_refs: list
```

Gateway chỉ delivery `SEND_MESSAGE` khi guard pass.

## 5. Required guards

- FinalResponseGuard.
- CustomerFacingLanguageGuard.
- PublicPrivateScopeGuard.
- SuppressionGuard.
- ChannelRateLimitGuard.
- QuoteSnapshotGuard nếu có giá.
- CustomerConfirmationGuard nếu có order.
- OrderCodeGuard nếu có order success.
- ROASInternalOnlyGuard nếu có ads context.

## 6. Messenger forbidden behavior

- Không gửi AI draft trực tiếp.
- Không tự sửa response để thêm giá/claim/order.
- Không nói final price nếu thiếu QuoteSnapshot.
- Không nói official order nếu thiếu order_code.
- Không nói paid nếu runtime chưa confirmed.
- Không public campaign/ad/ROAS.
- Không mất attribution khi quote/order.

## 7. Acceptance criteria

- Public handoff sang Messenger giữ private context.
- Mọi outbound có DecisionEnvelope và final guard trace.
- Guard fail thì no delivery hoặc human handoff.
- Quote/order/payment message chỉ render từ runtime owner.
- Handoff success/fail có delivery log.

## 8. Smoke

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| P5.2C-SMK-001 | Messenger after live handoff | Private context preserved. |
| P5.2C-SMK-002 | AI response pass guard | Delivery allowed. |
| P5.2C-SMK-003 | Unguarded response | Block/quarantine. |
| P5.2C-SMK-004 | Private quote missing QuoteSnapshot | No final price. |
| P5.2C-SMK-005 | Ads-origin thread | campaign/ad internal only. |

## 9. Final status

`LIMITED_IMPLEMENTATION_REPORT_ONLY`

`FINAL_RESPONSE_GUARD_REQUIRED`
