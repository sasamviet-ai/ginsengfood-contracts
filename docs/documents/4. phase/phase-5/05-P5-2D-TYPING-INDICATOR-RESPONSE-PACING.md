# P5.2D - Typing Indicator / Response Pacing

**BACKLOG:** GW-BLG-006  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Thiet ke va implement delivery pacing de Gateway khong tra loi bat ngay nhu bot may moc, dong thoi khong spam va khong vuot policy kenh.

## Entry Gate

- GW-BLG-005 pass.
- Delivery command contract accepted.
- Platform policy / rate constraint da duoc analysis.

## Implementation Scope

- Typing indicator command.
- Response pacing by message length/type.
- Chunking/multi-message delivery.
- Delivery retry policy.
- Delivery evidence.

## Not Allowed

- Reply instant cho moi comment/inbox.
- Split message lam mat y nghia hoac lo data.
- Retry vo han.
- Pacing bypass guard decision.

## Acceptance Criteria

- Short/medium/long response co pacing rule.
- Typing indicator khong gui neu channel khong support.
- Chunking giu dung public/private boundary.
- Retry co limit va audit.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P5.2D-SMK-001 | Short reply | Pacing dung rule |
| P5.2D-SMK-002 | Long reply | Chunking safe |
| P5.2D-SMK-003 | Unsupported typing indicator | Skip safely |
| P5.2D-SMK-004 | Delivery fail | Retry bounded + audit |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

