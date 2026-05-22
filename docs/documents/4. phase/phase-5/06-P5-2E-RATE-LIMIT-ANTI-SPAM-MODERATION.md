# P5.2E - Rate Limit / Anti-Spam / Moderation

**BACKLOG:** GW-BLG-007 / GW-BLG-008  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa gate chong spam, rate-limit, moderation va tach complaint that voi troll/malicious.

## Entry Gate

- GW-BLG-001 pass.
- Public/private classifier co evidence.
- Moderation policy accepted.

## Implementation Scope

- Rate-limit per user/page/channel.
- Anti-spam detector.
- Moderation route.
- Complaint route CSKH/human.
- Abuse/malicious handling.
- Evidence for blocked/suppressed delivery.

## Not Allowed

- Gui Messenger hang loat khi user spam.
- Xu ly complaint nghiem trong nhu sales objection.
- Cho troll vao sales funnel.
- Bo qua opt-out/suppression vi live dang chay.

## Acceptance Criteria

- Spam bi block/rate-limited.
- Complaint route CSKH/human.
- Troll/malicious khong tao quote/order lead.
- Audit co reason code.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2E-SMK-001 | 20 comments lap lai | Rate-limit active |
| P5.2E-SMK-002 | Complaint chat luong | Human/CSKH route |
| P5.2E-SMK-003 | Troll abusive | Moderation, no Messenger sales |
| P5.2E-SMK-004 | Malicious link | Block/quarantine |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

