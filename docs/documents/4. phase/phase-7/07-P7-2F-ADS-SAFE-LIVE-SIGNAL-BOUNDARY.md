# P7.2F - Ads-safe Live Signal Boundary

**BACKLOG:** LIVE-BLG-009  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Dam bao live signal chi la signal/funnel/engagement, khong bi dung lam revenue/ROAS hoac scale decision khi chua qua Phase 6.

## Entry Gate

- ADS-BLG-001 event taxonomy pass.
- ADS-BLG-004 Verified Revenue consumption pass neu lien quan ROAS.
- LIVE-BLG-001/004 pass.

Neu thieu ADS-BLG-004, ghi `LIVE-BLG-009-BLOCKED-BY-ADS-VERIFIED-REVENUE`.

## Implementation Scope

- Live signal event mapping.
- Ads-safe label.
- Revenue=false guard.
- Signal export to Ads Measurement.
- Evidence for no ROAS from live signal.

## Not Allowed

- Dung comment/view/engagement live lam revenue.
- Dung live order intent lam ROAS.
- Auto-scale ads tu live hype.
- Hide suppression/data quality fail.

## Acceptance Criteria

- Live signal exported as funnel/engagement only.
- Revenue metric only from Commerce Verified Revenue.
- Ads dashboard flags live signal confidence.
- Scale decision remains under Phase 6 Gate.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2F-SMK-001 | Live comment high intent | Signal only, not revenue |
| P7.2F-SMK-002 | Live view spike | No ROAS |
| P7.2F-SMK-003 | Live quote created | Funnel signal only |
| P7.2F-SMK-004 | Verified revenue arrives | Revenue via Ads Phase 6 only |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

