# P5.2B - Public Comment Boundary / Comment-to-Messenger

**Backlog:** `GW-BLG-002 / GW-BLG-003`  
**Mapped FB files:** FB-02 Webhook/Event Normalization, FB-03 Live Session Registry/Comment -> Messenger  
**Gateway:** `PRODUCTION_BLOCKED`

## 1. Mục tiêu

Khóa inbound public comment và live comment để không leak dữ liệu riêng, không public final price, không kêu khách tự inbox, và chỉ handoff Messenger khi đủ điều kiện.

## 2. Webhook event envelope

```yaml
NormalizedChannelEvent:
  normalized_event_id: required
  source_platform: facebook
  source_page_id: required
  event_type: live_comment | post_comment | message | reaction | delivery
  received_at: required
  raw_payload_ref: required_internal_only
  payload_signature_status: PASS | FAIL
  idempotency_key: required
  dedup_status: NEW | DUPLICATE | REPLAY_BLOCKED
  correlation_id: required
  live_session_id: required_if_live_comment
  comment_id: required_if_comment
  messenger_thread_id: optional
  attribution_id: optional_internal
  handoff_required: boolean
  handoff_reason: optional
```

MUST:

- Verify token handshake cho setup.
- Signature validation cho webhook POST.
- Raw payload chỉ lưu internal/restricted.
- Duplicate webhook không tạo side effect trùng.

## 3. Live Session Registry

```yaml
LiveSession:
  live_session_id: required
  source_page_id: required
  commerce_hub_page_id: required
  live_type: GOLDEN_HOUR_TRI_AN | DIAMOND_RECRUITMENT | EDUCATION | TEST
  session_board_id: optional_until_phase7
  started_at: required
  ended_at: optional
  public_reply_allowed: boolean
  private_reply_allowed: boolean
  production_allowed: boolean
```

Live type không được tự động mở quote/order. Quote/order vẫn phải đi qua AI Advisor và Commerce Runtime.

## 4. Public trigger phải kéo private hoặc human

Public comment/live comment phải route private/human khi:

- Hỏi giá.
- Muốn mua/chốt/lấy hàng.
- Để số điện thoại/địa chỉ/email/MST.
- Hỏi thanh toán/hóa đơn.
- Hỏi bệnh nền/kiêng cữ/thai kỳ/trẻ nhỏ.
- Cần tư vấn sâu.
- Hỏi Diamond/referral.
- Hỏi sản phẩm trong live board cần báo giá.

Public reply chỉ được safe ack, không lặp PII và không báo giá cuối.

## 5. System-initiated Messenger handoff

```yaml
CommentHandoff:
  handoff_id: required
  source_event_id: required
  source_page_id: required
  commerce_hub_page_id: required
  handoff_trigger: price | buy | pii | payment | invoice | health_sensitive | diamond | consult_deep
  handoff_status: PENDING | SENT | FAILED | BLOCKED
  public_reply_status: NOT_SENT | SENT | BLOCKED
  private_reply_status: NOT_SENT | SENT | FAILED
  delivery_log_id: required_if_sent
  attribution_id: preserve_if_any
  live_session_id: preserve_if_any
```

Public chỉ được nói đã chuyển/gửi khi `handoff_status=SENT`. Nếu handoff fail, public dùng safe ack không nói đã gửi.

## 6. Forbidden public output

- Final price.
- QuoteSnapshot ID.
- Order code.
- Phone/address/email/MST.
- Payment account/instruction.
- Health-sensitive advice dài.
- Campaign/ad/ROAS/internal attribution.
- Commission/payout.
- Câu kiểu "Mình nhắn Messenger giúp Em" khi chưa có handoff system success.

## 7. Acceptance criteria

- 1 public reply/comment theo policy.
- 1 private reply/comment đủ điều kiện theo policy.
- Comment có giá/mua/chốt route Messenger/private.
- Comment có PII không bị lặp.
- Complaint route CSKH/human.
- Troll/spam/malicious route moderation, không tạo sales lead.
- Board/live/attribution context preserve khi handoff.

## 8. Smoke

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| P5.2B-SMK-001 | Live comment hỏi giá | Không public giá, tạo handoff. |
| P5.2B-SMK-002 | Handoff fail | Không nói đã gửi. |
| P5.2B-SMK-003 | Public có số điện thoại | Không lặp PII, route private/human. |
| P5.2B-SMK-004 | Public hỏi bệnh nền | Safe ack, private/human route. |
| P5.2B-SMK-005 | Duplicate webhook | Không duplicate reply/handoff. |

## 9. Final status

`LIMITED_IMPLEMENTATION_REPORT_ONLY`

`PUBLIC_PRIVATE_GATEWAY_PRODUCTION_BLOCKED`
