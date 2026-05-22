# P7.2E - Troll / Abuse / Complaint Route

**BACKLOG:** LIVE-BLG-007 / LIVE-BLG-008  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Tach troll/abuse/malicious khoi complaint that va route dung moderation/CSKH/human.

## Entry Gate

- GW-BLG-008 pass.
- P7.2C classifier evidence available.
- Human/CSKH route accepted.

## Implementation Scope

- Troll/abuse classifier.
- Complaint classifier.
- Quality/CSKH handoff.
- Moderator suggestion.
- Evidence with masked samples.

## Not Allowed

- Complaint that bi xoa/hide nhu troll.
- Troll/malicious bi keo vao Messenger sales.
- MC AI Live tranh luan cong khai lam tang risk.
- Lo thong tin don hang/payment cua khach tren public.

## Acceptance Criteria

- Troll -> moderation/safe ignore/hide by policy.
- Complaint -> CSKH/human with evidence.
- Severe issue -> escalation.
- Response wording public-safe.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2E-SMK-001 | Abuse/troll | Moderation route |
| P7.2E-SMK-002 | Complaint hang loi | CSKH route |
| P7.2E-SMK-003 | Payment/order complaint | Private/human, no public detail |
| P7.2E-SMK-004 | Malicious link | Block/quarantine |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

