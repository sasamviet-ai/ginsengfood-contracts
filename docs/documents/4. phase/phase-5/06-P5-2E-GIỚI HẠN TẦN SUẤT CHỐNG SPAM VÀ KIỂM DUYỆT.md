# P5.2E - Rate Limit / Anti-Spam / Moderation

**Backlog:** `GW-BLG-007 / GW-BLG-008`  
**Mapped FB scope:** Dedup/idempotency, moderation, App Review/security, retry/DLQ  
**Gateway:** `PRODUCTION_BLOCKED`

## 1. Mục tiêu

Khóa lớp chống spam, rate-limit, moderation, complaint split, dedup và security để Gateway không tạo duplicate delivery, không kéo spam/troll vào sales funnel và không mở production thiếu App Review/security.

## 2. Rate-limit policy

```yaml
GatewayRateLimitPolicy:
  public_reply:
    max_per_comment: 1
  private_reply_from_comment:
    max_per_eligible_comment: 1
  messenger_conversation:
    mode: conversational
    spam_burst_guard: required
  crm_after_purchase:
    max_per_customer_per_day: 1
  crm_reorder_or_flavor_change:
    max_per_customer_per_3_days: 1
  winback:
    max_per_customer_per_7_days: 1
  campaign:
    max_per_customer_per_day: 1
    requires_consent: true
  quiet_hours:
    from: "22:00"
    to: "08:00"
```

## 3. Moderation split

| Intent | Route | Rule |
| --- | --- | --- |
| Trust objection nhẹ | AI trust-safe response | Không tranh luận, không spam. |
| Yêu cầu bằng chứng | Approved proof / Messenger / human | Không bịa chứng nhận. |
| Complaint thật | CSKH/human | Complaint thắng sales flow. |
| Hàng giả/chất lượng/privacy/payment | Human/support queue | Suppress sales/CRM. |
| Troll/spam/malicious | Moderation/quarantine | Không tạo sales lead. |
| Malicious link | Block/quarantine | Không delivery. |

## 4. Dedup/idempotency

```yaml
GatewayDedupKey:
  key_parts:
    - source_platform
    - source_page_id
    - event_type
    - platform_event_id_or_comment_id_or_message_id
    - live_session_id_if_any
    - delivery_target_if_outbound
```

Dedup bắt buộc cho:

- Duplicate webhook.
- Duplicate comment.
- Duplicate handoff.
- Duplicate private reply.
- Duplicate quote command.
- Duplicate order command.
- Duplicate commission/attribution command.

## 5. Security/App Review checklist

MUST before production:

- Meta App mode and App Review status recorded.
- Permission use cases documented.
- Webhook subscribed fields approved.
- Signature validation test pass.
- Verify token not exposed.
- Page access token stored by secret_ref.
- Token rotation runbook.
- Test page/user evidence.
- Data deletion/retention policy.

## 6. Runbook required

Runbook phải cover:

- Webhook fail.
- Token expired.
- Duplicate comment.
- Page blocked outbound.
- Messenger handoff fail.
- ROAS dashboard mismatch.
- CAPI/offline conversion error.
- Live spam burst.
- Public PII.
- Public health-sensitive question.
- Spoke page duplicate message.

## 7. Acceptance criteria

- Spam burst rate-limited.
- Duplicate event không tạo side effect trùng.
- Complaint thật không bị xử lý như troll.
- Troll/spam/malicious không vào Messenger sales lead.
- Security checklist không còn P0 gap trước production.

## 8. Smoke

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| P5.2E-SMK-001 | 20 comments lặp | Rate-limit active. |
| P5.2E-SMK-002 | Duplicate webhook | No duplicate reply/handoff. |
| P5.2E-SMK-003 | Complaint chất lượng | Human/CSKH route. |
| P5.2E-SMK-004 | Troll abusive | Moderation, no sales lead. |
| P5.2E-SMK-005 | Missing signature | Reject/quarantine. |

## 9. Final status

`LIMITED_IMPLEMENTATION_REPORT_ONLY`

`SECURITY_AND_MODERATION_EVIDENCE_REQUIRED`
