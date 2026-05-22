# P5.2A - Channel Identity / Page Context

**BACKLOG:** GW-BLG-001  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa boundary cho page/channel/session identity de moi inbound event deu biet den tu page nao, channel nao, live/session nao va co du permission hay khong.

## Entry Gate

- P5.1 technical design accepted.
- Phase 0 audit/idempotency/correlation foundation pass.
- Meta/Page/App permission duoc map trong analysis.

Neu thieu, ghi `GW-BLG-001-BLOCKED-BY-CHANNEL-IDENTITY`.

## Implementation Scope

- Channel identity resolver.
- Page context resolver.
- Session correlation.
- Webhook event normalization.
- Permission/config validation.
- Audit evidence cho inbound event.

## Not Allowed

- Khong hardcode page id/token trong logic.
- Khong bo qua signature/permission.
- Khong gop chung public comment va private Messenger session.
- Khong gui message neu chua resolve page/channel.

## Acceptance Criteria

- Moi event co `channel`, `page_context`, `conversation_context`, `correlation_id`.
- Unknown page/channel bi reject hoac quarantine.
- Permission missing khong duoc delivery.
- Evidence co sample event da mask token/secret.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2A-SMK-001 | Known page comment | Resolve dung page/channel/session |
| P5.2A-SMK-002 | Unknown page id | Reject/quarantine |
| P5.2A-SMK-003 | Missing permission | No delivery |
| P5.2A-SMK-004 | Duplicate webhook | Idempotent, no double processing |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

