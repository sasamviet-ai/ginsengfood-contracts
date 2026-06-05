# P5.2A - Channel Identity / Page Context

**Backlog:** `GW-BLG-001`  
**Mapped FB file:** FB-01 - Meta App / Business / Page Registry / Token Governance  
**Gateway:** `PRODUCTION_BLOCKED`

## 1. Mục tiêu

Chuẩn hóa Page Registry và channel identity để mọi inbound event biết đến từ Page nào, role nào, live/session nào, có quyền outbound nào và có được production hay không.

## 2. Page Registry owner decisions

| Page/Profile | ID | Vai trò | Live | Messenger | CRM | Ghi chú |
| --- | --- | --- | --- | --- | --- | --- |
| Ái Vy Phạm | 61557082440623 | Page CSKH / live spoke | Có | Không | Không | Không chốt Messenger riêng. |
| Hương Xuân | 61585392260203 | Page live spoke | Có | Không | Không | Handoff về Commerce Hub. |
| Huyền Trân | 61585211732304 | Page test | Không | Không | Không | Chỉ dùng test. |
| Sâm Biển Việt Nam | 102437252680397 | Page chạy ads/live spoke | Có | Không | Không | Handoff về Commerce Hub. |
| Ginsengfood - Cháo Sâm Mỗi Ngày | 101044219306135 | Page chính / Commerce Hub | Có | Có | Có | Page chính thức, AI auto reply và CRM. |
| Ginsengfood - Thực Dưỡng Gia Đình | 161431274523980 | Page phụ | Không | Không | Không | Audience spoke. |
| Ginsengfood - Chăm Sóc Ba Mẹ | 105347285574705 | Page phụ | Không | Không | Không | Audience spoke. |
| Ginsengfood - Món Chay Thực Dưỡng | 395032681300769 | Page phụ | Không | Không | Không | Audience spoke. |
| Ginsengfood - Quà Tặng Sức Khỏe | 330237488279968 | Page phụ | Không | Không | Không | Cần owner xác nhận lại Business/App mapping nếu lệch nguồn. |

Owner decision hiện tại:

- Page chính thức: Ginsengfood - Cháo Sâm Mỗi Ngày.
- Page được AI auto reply: Ginsengfood - Cháo Sâm Mỗi Ngày.
- Page được CRM: Ginsengfood - Cháo Sâm Mỗi Ngày.
- Page test: Huyền Trân.
- Live pages: Ái Vy Phạm, Hương Xuân, Sâm Biển Việt Nam, Ginsengfood - Cháo Sâm Mỗi Ngày.

## 3. ChannelContext contract

```yaml
ChannelContext:
  source_platform: facebook | messenger | live_comment | post_comment
  source_page_id: required
  commerce_hub_page_id: required
  page_role: commerce_hub | live_spoke | ads_spoke | audience_spoke | test
  live_session_id: required_if_live
  comment_id: required_if_public_comment
  messenger_thread_id: required_if_private
  customer_channel_identity_id: required
  page_registry_version: required
  production_allowed: boolean
  outbound_allowed:
    public_reply: boolean
    private_reply: boolean
    messenger_handoff: boolean
    crm: boolean
```

Nếu `production_allowed=false`, Gateway chỉ được dry-run/evidence.

## 4. Meta App / token governance

MUST:

- App ID/App Secret/Verify Token/Page Access Token không ghi trực tiếp trong docs/evidence.
- Chỉ lưu `secret_ref`.
- Token rotation có audit.
- App mode, app review, subscribed fields phải rõ.
- Page subscription status phải inspect được.

MUST NOT:

- Hardcode Page ID hoặc token trong logic.
- Gộp public comment và Messenger private thread.
- Cho Page spoke tự chốt Messenger sales riêng nếu policy yêu cầu Commerce Hub.

## 5. Owner decision cần chốt

| Decision ID | Nội dung | Trạng thái |
| --- | --- | --- |
| P5-OD-001 | Xác nhận Business ID/App mapping cho Page Quà Tặng Sức Khỏe. | `OWNER_CONFIRM_REQUIRED` |
| P5-OD-002 | Chốt Page nào được outbound public reply trong pilot. | `OWNER_CONFIRM_REQUIRED` |
| P5-OD-003 | Chốt Page nào được private reply từ comment trong pilot. | `OWNER_CONFIRM_REQUIRED` |
| P5-OD-004 | Chốt permission/subscribed fields cần xin App Review. | `OWNER_CONFIRM_REQUIRED` |

## 6. Acceptance criteria

- Mỗi inbound event có ChannelContext.
- Unknown page bị reject/quarantine.
- Page chưa production_allowed không gửi outbound production.
- Commerce Hub mapping preserve khi handoff từ spoke.
- Evidence sample đã mask token/secret/PII.

## 7. Smoke

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| P5.2A-SMK-001 | Known Commerce Hub event | Resolve đúng page/channel/session. |
| P5.2A-SMK-002 | Known live spoke comment | Resolve source_page_id và commerce_hub_page_id. |
| P5.2A-SMK-003 | Unknown page id | Reject/quarantine. |
| P5.2A-SMK-004 | Page production_allowed=false | Dry-run only. |
| P5.2A-SMK-005 | Evidence screenshot/log | Không lộ token/secret. |

## 8. Final status

`LIMITED_IMPLEMENTATION_REPORT_ONLY`

`GLOBAL_GATEWAY_PRODUCTION_BLOCKED`
