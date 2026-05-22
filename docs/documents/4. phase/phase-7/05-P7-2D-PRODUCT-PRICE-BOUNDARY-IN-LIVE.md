# P7.2D - Product / Price Boundary In Live

**BACKLOG:** LIVE-BLG-006  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao MC AI Live khong tu bao gia, khong tu xac nhan ton kho, khong tu tao quote/order; moi gia cuoi phai tu Commerce QuoteSnapshot.

## Entry Gate

- COM-BLG-002 QuoteSnapshot pass.
- P4 AI QuoteSnapshot consumption pass.
- P5 Gateway public/private handoff pass.

## Implementation Scope

- Live quote boundary guard.
- Product sellable/suppression awareness.
- Public-safe price wording.
- QuoteSnapshot request/handoff path via Gateway/AI/Commerce.
- Evidence for no self-price.

## Not Allowed

- Noi final price tu script/memory.
- Tu tinh discount/member benefit/live offer.
- Tu xac nhan con hang khi sellable unknown.
- Tu tao order_code/payment/revenue.

## Acceptance Criteria

- No QuoteSnapshot -> no final price.
- Live comment hoi gia -> route private/quote runtime.
- Expired QuoteSnapshot -> refresh request.
- Sale lock/recall -> no sales CTA.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2D-SMK-001 | Host asks price without quote | No final price |
| P7.2D-SMK-002 | Active QuoteSnapshot | Display allowed per policy |
| P7.2D-SMK-003 | Expired QuoteSnapshot | Request refresh |
| P7.2D-SMK-004 | SKU recall/sale lock | No sales CTA |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

