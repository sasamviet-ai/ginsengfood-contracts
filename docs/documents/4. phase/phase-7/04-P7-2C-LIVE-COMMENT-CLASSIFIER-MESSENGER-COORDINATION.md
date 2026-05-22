# P7.2C - Live Comment Classifier / Messenger Coordination

**BACKLOG:** LIVE-BLG-004 / LIVE-BLG-005  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Classify comment live va coordinate Gateway de public reply an toan, handoff Messenger khi can.

## Entry Gate

- GW-BLG-003/004 pass.
- GW-BLG-008 classifier/moderation evidence pass.
- LIVE-BLG-001 pass.

## Implementation Scope

- Live comment classifier.
- Intent categories: price, buy, consult, troll, complaint, spam, generic.
- Public response suggestion.
- Messenger handoff command via Gateway.
- Evidence for classification.

## Not Allowed

- MC AI Live tu gui Messenger bypass Gateway.
- Public private info/order/payment.
- Pull troll/malicious to Messenger sales.
- Treat complaint as troll.

## Acceptance Criteria

- Price/buy/deep consult -> public-safe + Messenger route.
- Troll/malicious -> moderation.
- Complaint -> CSKH/human route.
- All handoff commands go through Gateway contract.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2C-SMK-001 | "Gia bao nhieu" | Route Messenger, no public final price |
| P7.2C-SMK-002 | "Mua 1 hop" | Route order draft path via Gateway/AI/Commerce |
| P7.2C-SMK-003 | Troll comment | Moderation |
| P7.2C-SMK-004 | Complaint quality | CSKH/human |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

