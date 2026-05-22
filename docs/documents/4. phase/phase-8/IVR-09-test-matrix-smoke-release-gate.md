# IVR-09 - Test Matrix / Smoke / Release Gate

Trạng thái: `SRS_BASELINE`  
Phase: 8 - IVR Order Confirmation  
Mục tiêu: Khóa test matrix, smoke, evidence và release gate cho real customer call.

## 1. Mục tiêu

IVR chỉ được gọi khách thật khi documentation, implementation, privacy, security, smoke, evidence, owner sign-off và release decision đều đạt. Tài liệu này xác định acceptance test ở mức SRS.

## 2. Nguồn tham chiếu

| Nguồn | Vai trò |
| --- | --- |
| `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md` | Evidence/smoke/completion gate. |
| `docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md` | Release/go-live control. |
| `docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md` | Completion/evidence gateway. |
| `docs/documents/3. tech/11-TECH-10-GLOBAL-SMOKE-UAT-EVIDENCE-RELEASE-GATEWAY-PRODUCTION-READINESS-CONTROL.md` | Global smoke/UAT/release readiness. |
| `docs/documents/3. tech/10-TECH-09-IVR-ORDER-CONFIRMATION-AUTO-CALL-VERIFICATION-ANTI-FAKE-ORDER-CONTROL.md` | IVR final smoke matrix. |

## 3. Cổng tài liệu

Trước khi triển khai:

- `IVR-00` đến `IVR-09` hoàn tất.
- `IVR-SRS-trace-matrix.md` hoàn tất.
- PACK-09, TECH-09 và Phase 8 baseline không mâu thuẫn attempt policy.
- Owner decision chưa có nguồn được đánh dấu rõ.
- Không có production claim.

## 4. Cổng sẵn sàng triển khai

Trước khi bật staging/prod-like:

- Order Core chỉ tạo task cho Official Order đủ điều kiện.
- IVR không có quyền update order.
- Order Core revalidate mọi callback.
- Internal SIM Gateway Adapter có health monitoring.
- Evidence/audit writer hoạt động.
- RBAC server-side cho admin actions.
- Kill switch/pause queue/disable SIM có audit.

## 5. Ma trận smoke bắt buộc

| Smoke ID | Scenario | Expected |
| --- | --- | --- |
| IVR-SMK-001 | Quote đi vào IVR | Bị reject, không tạo CallJob. |
| IVR-SMK-002 | Cart đi vào IVR | Bị reject, không tạo CallJob. |
| IVR-SMK-003 | Order Draft đi vào IVR | Bị reject, không tạo CallJob. |
| IVR-SMK-004 | Official Order khách mới | Eligible nếu không có blocker. |
| IVR-SMK-005 | Khách trusted không risk | Skip IVR. |
| IVR-SMK-006 | Khách trusted có risk mới | Route IVR hoặc human review theo policy. |
| IVR-SMK-007 | Phone invalid format | Không gọi, invalid phone outcome. |
| IVR-SMK-008 | Phone validation technical error | Technical exception, không tính attempt. |
| IVR-SMK-009 | Golden Hour attempt policy | Chỉ 2 customer attempts trong 10 phút. |
| IVR-SMK-010 | 24/7 attempt policy | Chỉ 3 customer attempts trong 15 phút. |
| IVR-SMK-011 | Khách bấm `1` | Callback `IVR_CONFIRMED`, Core revalidate. |
| IVR-SMK-012 | Khách bấm `0` | Callback `IVR_CUSTOMER_CANCELLED`, Core cancel. |
| IVR-SMK-013 | No-answer chưa max | Queue attempt kế tiếp đúng schedule. |
| IVR-SMK-014 | No-answer max | Callback final, IVR không notification. |
| IVR-SMK-015 | SIM failure | Technical exception, không tính attempt. |
| IVR-SMK-016 | DTMF capture error | Technical exception, không tính customer fault. |
| IVR-SMK-017 | Sale Lock trước dispatch | Không gọi, operational blocked. |
| IVR-SMK-018 | Recall trong lúc gọi | Core block/hold khi callback. |
| IVR-SMK-019 | Payment issue xuất hiện sau phím `1` | Core không auto-confirm. |
| IVR-SMK-020 | Callback duplicate | Idempotent, không duplicate transition. |
| IVR-SMK-021 | Callback stale order version | Core reject stale hoặc hold review. |
| IVR-SMK-022 | Evidence unavailable | Result không được dùng transition. |
| IVR-SMK-023 | Admin retry technical | Permission/reason/evidence bắt buộc. |
| IVR-SMK-024 | Admin override bypass blocker | Bị chặn. |
| IVR-SMK-025 | Queue pause/resume | Audit đầy đủ, re-check windows. |
| IVR-SMK-026 | Disable/enable SIM | Permission/health evidence. |
| IVR-SMK-027 | Privacy script | Không đọc full address/payment/member/health note. |
| IVR-SMK-028 | Recording disabled | Không recording khi chưa approved. |
| IVR-SMK-029 | Production flag off | Không gọi khách thật. |
| IVR-SMK-030 | Release gate incomplete | `REAL_CUSTOMER_CALL_ALLOWED` vẫn `NO`. |

## 6. Gói bằng chứng

Release evidence tối thiểu:

- SRS trace matrix.
- Contract semantic review.
- Eligibility smoke evidence.
- Attempt policy smoke evidence.
- SIM Gateway internal-number smoke evidence.
- DTMF evidence.
- Callback/idempotency evidence.
- Race-condition evidence.
- Sale Lock/Recall/Suppression evidence.
- Admin RBAC evidence.
- Privacy review evidence.
- Security review evidence.
- Owner sign-off.
- Release decision audit.

## 7. Cổng release production

Required trước khi `REAL_CUSTOMER_CALL_ALLOWED = YES`:

- SRS approved.
- Implementation approved.
- Privacy/legal retention approved.
- Pilot scope approved.
- Kill switch tested.
- Queue pause tested.
- SIM disable tested.
- Duplicate callback tested.
- Stale callback tested.
- Evidence accepted.
- IVR Owner sign-off.
- Order Core Owner sign-off.
- Operational/Sale Lock Owner sign-off.
- Privacy Owner sign-off.
- Release Owner sign-off.

## 8. Cổng chặn lỗi

Release FAIL nếu:

- IVR gọi khách thật khi production flag chưa mở.
- IVR tự update order.
- IVR gọi Quote/Cart/Order Draft.
- Golden Hour có attempt thứ 3.
- 24/7 có attempt thứ 4.
- Technical failure bị tính là no-answer.
- Invalid phone bị tính là no-answer.
- Admin override bỏ qua Sale Lock/Recall/Suppression.
- Evidence chưa accepted nhưng gọi PASS.
- Privacy/retention chưa được duyệt nhưng bật recording hoặc production call.

## 9. Tiêu chí chấp nhận

- Test matrix bao phủ toàn bộ tình huống user yêu cầu.
- Release gate trả lời rõ khi nào được gọi khách thật.
- Không có smoke nào yêu cầu schema/API/code ở phase SRS này.
- Phase sau có thể sinh contract-tests từ smoke matrix này.
