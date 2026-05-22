# P5.2C - Messenger Context / Final Response Guard

**BACKLOG:** GW-BLG-004 / GW-BLG-005  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao sau khi handoff sang Messenger, conversation chay nhu private context va moi response truoc khi delivery deu pass Final Response Guard.

## Entry Gate

- GW-BLG-003 pass.
- AIA-BLG-006 Final Response Guard pass.
- AI Advisor runtime envelope accepted.

## Implementation Scope

- Messenger private context resolver.
- Context handoff payload.
- AI request binding.
- Final Response Guard enforcement before delivery.
- Unguarded response quarantine.
- Guard evidence logging.

## Not Allowed

- Gui AI draft response truc tiep.
- Tu sua response de them gia/claim/order.
- Noi official order khi chi co draft.
- Noi PAID khi runtime chua xac nhan.

## Acceptance Criteria

- Messenger context khong lap lai public-comment mode.
- Moi outbound response co guard decision.
- Guard fail thi no delivery hoac human handoff.
- Evidence co trace request -> guard -> delivery.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2C-SMK-001 | AI response pass guard | Delivery allowed |
| P5.2C-SMK-002 | Unguarded response | Block/quarantine |
| P5.2C-SMK-003 | Response co private leak | Guard fail, no send |
| P5.2C-SMK-004 | Messenger after public handoff | Private context preserved |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

