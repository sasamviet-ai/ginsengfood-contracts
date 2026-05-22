# P5.2F - Suppression / Opt-out / Human Handoff

**BACKLOG:** GW-BLG-009  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao Gateway ton trong recall, sale lock, channel suppression, user opt-out, policy block va human handoff.

## Entry Gate

- GW-BLG-007 pass.
- Operational suppression / AI suppression / Commerce suppression contract available.
- Opt-out policy accepted.

## Implementation Scope

- Suppression resolver.
- Opt-out resolver.
- Recall/sale-lock blocking.
- Human handoff route.
- Suppression evidence.

## Not Allowed

- Gui sales message cho user opt-out.
- Ban SKU bi recall/sale lock.
- Bypass suppression vi comment dang co intent mua.
- Handoff human ma khong ghi reason/evidence.

## Acceptance Criteria

- Suppression thang AI/Commerce/Gateway template.
- Opt-out user khong bi proactive message.
- Sale lock/recall chan quote/order/sales message.
- Human handoff co trace va owner queue.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2F-SMK-001 | User opt-out | No message |
| P5.2F-SMK-002 | SKU sale lock | No sales reply |
| P5.2F-SMK-003 | Recall active | Block + safe response |
| P5.2F-SMK-004 | Need human | Handoff with reason |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

