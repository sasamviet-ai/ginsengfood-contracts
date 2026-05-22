# P5.2B - Public Comment Boundary / Comment-to-Messenger

**BACKLOG:** GW-BLG-002 / GW-BLG-003  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Khoa public/private boundary cho comment public va route dung intent can tu van sau sang Messenger/private.

## Entry Gate

- GW-BLG-001 pass.
- P4 Final Response Guard available.
- Public/private policy da duoc design accepted.

## Implementation Scope

- Public comment classifier: price, buy, consult, complaint, troll, spam, generic.
- Public short response policy.
- Comment-to-Messenger routing.
- Private reply handoff.
- Evidence cho no-private-data public reply.

## Not Allowed

- Public dia chi, phone, order, payment, member tier.
- Public final price ca nhan neu policy yeu cau private.
- Keo troll/malicious vao Messenger nhu lead mua hang.
- Xu ly complaint that nhu spam/troll.

## Acceptance Criteria

- Comment "gia", "mua", "1 hop", "ib" route Messenger/private.
- Public reply chi la public-safe short response.
- Complaint route CSKH/human handoff.
- Troll/spam route moderation, khong tao lead ban hang.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2B-SMK-001 | Public comment hoi gia | Reply public-safe + route private |
| P5.2B-SMK-002 | Comment chua phone/address | Mask/block public private data |
| P5.2B-SMK-003 | Troll comment | Moderation, no Messenger lead |
| P5.2B-SMK-004 | Complaint chat luong | Route CSKH/human |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

