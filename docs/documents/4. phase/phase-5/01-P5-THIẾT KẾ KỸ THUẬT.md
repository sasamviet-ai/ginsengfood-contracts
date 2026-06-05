# P5.1 - Technical Design Only

**Mode:** `TECHNICAL_DESIGN_ONLY`  
**Gateway:** `PRODUCTION_BLOCKED`  
**Ngày viết lại:** 2026-06-05

## 1. Design objective

Khóa thiết kế Facebook Channel Gateway trước implementation. Gateway là channel infrastructure: nhận Meta webhook, normalize event, dedup, kiểm Page policy, route vào AI Advisor, nhận delivery command đã guard pass và ghi delivery/evidence.

Gateway không phải chatbot riêng, không phải AI Advisor, không phải Commerce Runtime, không phải Ads optimizer, không phải CRM worker và không phải Diamond payout engine.

## 2. Gateway boundary

Gateway được làm:

- Meta webhook verify/signature intake.
- Page Registry and channel identity resolution.
- Event normalization and idempotency.
- Live comment ingestion.
- Comment-to-Messenger handoff.
- Messenger thread binding.
- Delivery command execution theo platform policy.
- Delivery log, retry, dead-letter queue.
- Ads/live/page attribution preservation.
- Evidence for Gateway transition.

Gateway bị cấm:

- Tự chọn sản phẩm.
- Tự tính giá/ship/VAT/final payable.
- Tự tạo QuoteSnapshot.
- Tự tạo official order/order_code.
- Tự xác nhận payment/paid.
- Tự gửi CRM campaign.
- Tự tính Diamond commission.
- Bypass AI Advisor Final Response Guard.

## 3. FB-00 đến FB-08 map vào Phase 5

| FB file | Nội dung | File Phase 5 chứa |
| --- | --- | --- |
| FB-00 | README / source-of-truth / Gateway boundary | `09-P5-CHỈ MỤC BÀN GIAO.md`, `10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md`, file này |
| FB-01 | Meta App / Business / Page Registry / Token Governance | `02-P5-2A` |
| FB-02 | Webhook / Event Normalization / Dedup / Idempotency | `03-P5-2B`, `06-P5-2E` |
| FB-03 | Live Session Registry / Comment -> Messenger Handoff | `03-P5-2B` |
| FB-04 | Messenger Thread / AI Advisor Routing / Hub-Spoke Handoff | `04-P5-2C` |
| FB-05 | Ads Attribution / Pixel / CAPI / Offline Conversion / ORDER_VERIFIED | file này, `08-P5-2G` |
| FB-06 | Diamond / Referral / Commission Attribution | file này, `07-P5-2F`, `08-P5-2G` |
| FB-07 | ROAS / CPA / AOV Dashboard / Scale Gate | file này, `08-P5-2G` |
| FB-08 | Security / App Review / Test / Pilot / Release / Rollback | `06-P5-2E`, `08-P5-2G`, `10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md` |

## 4. API contract cần khóa

```yaml
gateway_public_apis:
  GET /api/channel/meta/webhook/verify:
    purpose: Meta verify token handshake
  POST /api/channel/meta/webhook:
    purpose: receive Meta webhook with signature validation

gateway_admin_apis:
  POST /api/admin/facebook/pages:
    purpose: create/update page registry entry
  POST /api/admin/facebook/pages/{id}/subscribe:
    purpose: subscribe page webhook fields
  POST /api/admin/facebook/live-sessions:
    purpose: register live session
  GET /api/admin/facebook/events:
    purpose: inspect normalized events
  GET /api/admin/facebook/attribution:
    purpose: inspect attribution chain

internal_integration_apis:
  POST /api/internal/ai-channel/gateway/normalized-event:
    owner: AI Channel
  POST /api/internal/facebook/messenger/handoff:
    owner: Gateway
  POST /api/internal/facebook/delivery-commands:
    owner: Gateway
```

Hard rule: Gateway không có API tạo quote/order/payment/CRM directly.

## 5. Database object contract cần khóa

```yaml
gateway_db_objects:
  - facebook_page_registry
  - meta_app_registry
  - page_token_secret_ref
  - meta_webhook_event
  - normalized_channel_event
  - live_session
  - comment_handoff
  - messenger_thread_binding
  - ads_attribution_context
  - ads_measurement_event
  - order_attribution_snapshot
  - diamond_referral_attribution
  - gateway_outbound_log
  - gateway_dedup_key
  - gateway_retry_queue
  - gateway_dead_letter_event
```

Các object chứa PII hoặc token chỉ lưu restricted/secret_ref. Không lưu token thật trong DB/log rộng.

## 6. Measurement event contract

Event tối thiểu:

- LIVE_VIEW.
- LIVE_COMMENT.
- MESSENGER_STARTED.
- AI_PROPOSAL_SENT.
- QUOTE_CREATED.
- QUOTE_SENT.
- ORDER_CONFIRMATION_SENT.
- ORDER_CREATED.
- ORDER_VERIFIED.
- CRM_REORDER.
- DIAMOND_LEAD_CREATED.

Revenue event chính: `ORDER_VERIFIED`.

Không tính revenue từ:

- comment.
- inbox.
- quote.
- order_created.
- test order.
- duplicate order.
- COD_FAILED.
- CANCELLED.
- RETURNED.

## 7. Pixel / CAPI / Offline Conversion design placeholder

Chưa được implementation nếu chưa có owner-approved contract:

```yaml
conversion_mapping_contract:
  event_name: required
  destination: internal_only | pixel | capi | offline_conversion
  revenue_source: ORDER_VERIFIED_only
  dedup_key: required
  customer_match_fields_hashed: required_if_external
  retry_policy: required
  failure_log: required
  privacy_review_required: true
```

## 8. Security / App Review design placeholder

Cần checklist trước production:

- App mode dev/live.
- Permission cần xin và use case từng permission.
- Test user/page.
- Webhook subscribed fields.
- Screencast/evidence App Review.
- Data retention and deletion policy.
- Token rotation.
- Signature validation test.
- Secret storage by secret_ref.

## 9. Feature flags

```yaml
p5_gateway_feature_flags:
  facebook_gateway_webhook_enabled: false
  facebook_gateway_page_registry_enabled: false
  facebook_gateway_live_comment_enabled: false
  facebook_gateway_messenger_handoff_enabled: false
  facebook_gateway_private_reply_enabled: false
  facebook_gateway_delivery_enabled: false
  facebook_gateway_ads_attribution_enabled: false
  facebook_gateway_pixel_capi_enabled: false
  facebook_gateway_crm_bridge_enabled: false
  facebook_gateway_diamond_attribution_enabled: false
  facebook_gateway_production_allowed: false
```

## 10. Done gate

Technical design chỉ DONE khi:

- API/DB/event/feature-flag design có owner review.
- Page Registry design có production_allowed per page.
- Gateway không bypass AI Advisor.
- Ads/ROAS chỉ tính ORDER_VERIFIED.
- Rollback flags có trong design.
- Gateway production vẫn BLOCKED cho đến Completion Report PASS.

## 11. Final status tối đa

`P5_TECHNICAL_DESIGN_HANDOFF_COMPLETED__NOT_RELEASE_READY`

