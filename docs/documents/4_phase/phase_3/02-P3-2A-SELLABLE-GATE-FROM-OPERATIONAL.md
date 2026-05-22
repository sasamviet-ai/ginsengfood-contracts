**FILE: 02-P3-2A-SELLABLE-GATE-FROM-OPERATIONAL.md**

**PROMPT-P3.2A — SELLABLE GATE FROM OPERATIONAL IMPLEMENTATION HANDOFF**

**MODE: LIMITED IMPLEMENTATION**

**V1.0 CLEAN FINAL**

## 1. PHASE MARKER

**PHASE:** PHASE-03 — COMMERCE RUNTIME  
**BACKLOG:** COM-BLG-001 — Sellable Gate From Operational  
**PROMPT LIỀN TRƯỚC:** PROMPT-P3.1 — Technical Design  
**PROMPT TIẾP THEO:** PROMPT-P3.2B — QuoteSnapshot / Cart / Order Draft  
**GLOBAL GATEWAY:** BLOCKED

## 2. ĐIỀU KIỆN BẮT ĐẦU

Chỉ implement khi:

1. P3 Analysis Report đã có.
2. P3 Technical Design đã có.
3. PHASE 2 operational truth đã có evidence submitted.
4. P2 owner/dev lead cho phép P3 limited implementation.
5. Không có P0 Operational blocker mở.
6. GitNexus impact analysis đã chạy nếu sửa service/DTO/endpoint cũ.
7. Global Gateway vẫn BLOCKED.

## 3. SCOPE IN

Implement tối thiểu:

1. Sellable resolver/guard đọc Operational truth.
2. Input từ Product/SKU, batch released, warehouse receipt confirmed, inventory balance, QR/public trace nếu policy cần.
3. Input recall / hold / sale lock.
4. Blocking reason public-safe và internal-safe.
5. Audit/evidence/correlation/idempotency nếu command có side effect.
6. Unit/integration tests cho pass/block.

## 4. SCOPE OUT

Không implement:

1. QuoteSnapshot.
2. Cart.
3. Order Draft.
4. Official Order.
5. Payment.
6. Shipping.
7. Verified Revenue.
8. AI Advisor.
9. Gateway/Ads/Live/IVR.
10. Global Gateway.

## 5. P0 BLOCKER

1. Product Active được xem là Sellable.
2. Warehouse receipt tự set Sellable.
3. Operational blocked nhưng Commerce pass.
4. Sale Lock / Recall không chặn Sellable.
5. Runtime unavailable nhưng Sellable pass.
6. Missing evidence nhưng decision pass nếu policy require accepted evidence.

## 6. SMOKE TỐI THIỂU

| Smoke ID | Scenario | Expected |
|---|---|---|
| P3.2A-SMK-001 | Product active nhưng chưa operational truth | Sellable BLOCK |
| P3.2A-SMK-002 | Batch released + warehouse confirmed + no lock | Sellable PASS |
| P3.2A-SMK-003 | Sale Lock active | Sellable BLOCK |
| P3.2A-SMK-004 | Recall active | Sellable BLOCK |
| P3.2A-SMK-005 | Operational runtime unavailable | Fail-safe BLOCK |
| P3.2A-SMK-006 | Missing evidence accepted khi required | BLOCK |

Không gọi smoke này là Global Smoke Pass.

## 7. REPORT 14 MỤC

Report phải có: tóm tắt, file sửa, nguồn yêu cầu, evidence dùng, lệnh chạy, test, backend build, frontend build nếu cần, cleanup, Markdown update, migration, seed, rủi ro, handoff.

Trạng thái cuối bắt buộc:

**PROMPT-P3.2A FINAL STATUS: LIMITED IMPLEMENTATION REPORT ONLY**  
**NOT PHASE 3 COMPLETE**  
**NOT RELEASE READY**  
**GLOBAL GATEWAY: BLOCKED**

