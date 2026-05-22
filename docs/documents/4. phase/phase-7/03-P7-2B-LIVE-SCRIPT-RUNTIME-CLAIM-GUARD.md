# P7.2B - Live Script Runtime / Claim Guard

**BACKLOG:** LIVE-BLG-002 / LIVE-BLG-003  
**MODE:** LIMITED IMPLEMENTATION HANDOFF  
**GLOBAL GATEWAY:** BLOCKED

## Muc Tieu

Tao/giai quyet script live tu approved source va bat buoc qua Script Guard / Claim Guard truoc khi host/operator dung.

## Entry Gate

- LIVE-BLG-001 pass.
- AIA-BLG-002 Product Knowledge / Claim Guard pass.
- Approved script/product knowledge source available.

## Implementation Scope

- Script runtime resolver.
- Product story generation from approved public-safe data.
- Claim Guard enforcement.
- Script version/evidence.
- Guard fail -> no use/human review.

## Not Allowed

- Script tu noi san pham nhu thuoc/chua benh.
- Claim chua approved van vao script.
- Script hardcode gia/discount/ton kho.
- Script bypass guard vi dang live.

## Acceptance Criteria

- Script co source/version.
- Script pass Claim Guard truoc khi hien thi/dung.
- Guard fail co reason va no delivery/use.
- Product story khong lo recipe/BOM/supplier/private data.

## Smoke

| Smoke ID | Scenario | Expected |
|---|---|---|
| P7.2B-SMK-001 | Approved product story | Script pass |
| P7.2B-SMK-002 | Medical treatment claim | Guard fail |
| P7.2B-SMK-003 | Internal formula in script | Guard fail |
| P7.2B-SMK-004 | Hardcoded price | Guard fail/block |

## Final Status

**LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

