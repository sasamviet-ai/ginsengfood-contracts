# P4 - CHỈ MỤC BÀN GIAO

## Khóa chống conflict Phase 4

Chỉ mục này không override `BẢNG GÔM GIAI ĐOẠN 4.md`. Nếu tên file, thứ tự đọc, status hoặc gate trong chỉ mục khác bản gôm/phụ lục runtime, áp dụng bản gôm/phụ lục và xử lý fail-closed.

Các cụm `local-ready`, `DONE`, `PASS cục bộ`, `owner review` hoặc `handoff` chỉ là trạng thái hồ sơ cục bộ. Chúng không phải `IMPLEMENTATION_READY`, không phải `GATEWAY_PASS`, không phải `COMPLETION_PASS`, không phải `RELEASE_READY`, không phải `PRODUCTION_READY` và không phải Go-live.

**Phase:** PHASE-04 - AI Advisor Runtime / AI Channel Readiness
**Ngày viết lại:** 2026-06-05
**Trạng thái mặc định:** `CANONICAL_REWRITE_FOR_OWNER_REVIEW`
**Gateway:** `PRODUCTION_BLOCKED`
**Release:** `NOT_RELEASE_READY`

## 1. File đọc đầu tiên

`BẢNG GÔM GIAI ĐOẠN 4.md` là bản canonical rewrite đầy đủ của Phase 4.

Khi có xung đột giữa các file Phase 4 hiện có, áp dụng thứ tự:

1. MASTER-08 owner decisions và fail-closed stance.
2. MASTER-09 cross-phase runtime lock.
3. `BẢNG GÔM GIAI ĐOẠN 4.md`.
4. `10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md`.
5. File execution shard 00-08.
6. Raw source baseline / supplemental docs.

Raw source baseline không được dùng để override runtime owner hoặc mở Gateway.

## 2. Ranh giới Phase 4

Phase 4 sở hữu:

- AI Advisor request/decision envelope.
- Runtime consumer contract.
- CustomerAdvisoryContext usage.
- DailySalesContext consumption.
- ProductRoleMatrix consumption.
- Recommendation decision tree.
- QuoteSnapshot and Order Runtime consumer rendering.
- Payment/shipping public-safe response.
- CRM/member response candidate guard.
- Diamond/Finance wording guard.
- Final Response Guard.
- Public/private language guard.
- Channel handoff decision from AI side.
- Typing/pacing policy.
- AI evidence item.

Phase 4 không sở hữu:

- Product activation, formula, BOM, costing, QC, supplier.
- Inventory truth, sellable truth, sale lock, recall.
- Final price, program price, member benefit, Diamond buyer benefit.
- Official order creation, order_code generation.
- Payment confirmation, bank reconciliation, refund execution.
- Shipping/tracking truth.
- Verified revenue, commission, payout, MISA sync.
- Meta App setup, Page token, webhook production, Messenger delivery infra.
- Ads scaling, ROAS dashboard, MC AI live production, IVR real call.

## 3. Entry gate

Không bắt đầu implementation Phase 4 nếu thiếu:

- Phase 3 Commerce boundary cho Sellable, QuoteSnapshot, Order Draft, CustomerConfirmation, order_code, Payment public-safe state, Shipping/ETA, ORDER_VERIFIED.
- Phase 3.1 supplement boundary cho Member, Program, Diamond, CRM, payment/shipping/IVR guards.
- MASTER-08 decision register hoặc blocker carry-over.
- Evidence plan theo canonical evidence/smoke gate.

Nếu thiếu, ghi:

`P4-ENTRY-BLOCKED-BY-UPSTREAM_RUNTIME_OR_OWNER_DECISION`

## 4. Source-of-truth bắt buộc

Danh sách dưới đây là source tối thiểu. Ma trận đầy đủ nằm trong `BẢNG GÔM GIAI ĐOẠN 4.md`, mục `2. Tài liệu nguồn đã nhập vào Phase 4`.

| Nhóm | File |
| --- | --- |
| Master source truth | `docs/documents/1. master/02-MASTER-01-SOURCE-OF-TRUTH.md` |
| Master dependency | `docs/documents/1. master/03-MASTER-02-CROSS-PACK-DEPENDENCY.md` |
| Master runtime guard | `docs/documents/1. master/05-MASTER-04-RUNTIME-RESOLUTION-GUARD.md` |
| Master evidence gate | `docs/documents/1. master/06-MASTER-05-EVIDENCE-SMOKE-COMPLETION-GATE.md` |
| Master release control | `docs/documents/1. master/08-MASTER-07-RELEASE-GO-LIVE-CONTROL.md` |
| Master | `docs/documents/1. master/09-MASTER-08-CROSS-SYSTEM-DECISION-LOG.md` |
| Master addendum | `docs/documents/1. master/10-MASTER-09-CROSS-PHASE-RUNTIME-LOCK-ADDENDUM.md` |
| AI Advisor pack | `docs/documents/2. pack/05-PACK-05-AI-ADVISOR-CHANNEL.md` |
| AI Advisor tech | `docs/documents/3. tech/06-TECH-05-AI-ADVISOR-RUNTIME-PRODUCT-CONSULTING-CUSTOMER-MEMORY-QUOTE-SAFE-SALES-ORDER-DRAFT-HANDOFF.md` |
| Ads/ROAS pack | `docs/documents/2. pack/07-PACK-07-ADS-ROAS-ATTRIBUTION.md` |
| MC AI Live pack | `docs/documents/2. pack/08-PACK-08-MC-AI-LIVE.md` |
| Completion evidence pack | `docs/documents/2. pack/10-PACK-10-COMPLETION-EVIDENCE-GATEWAY.md` |
| Commerce tech | `docs/documents/3. tech/05-TECH-04-COMMERCE-PRICE-PROMOTION-ORDER-PAYMENT-SHIPPING.md` |
| Gateway tech | `docs/documents/3. tech/07-TECH-06-FACEBOOK-GATEWAY-META-LIVE-MESSENGER-CHANNEL-DELIVERY-COMMENT-TO-MESSENGER.md` |
| Ads tech | `docs/documents/3. tech/08-TECH-07-ADS-ROAS-PIXEL-CAPI-ATTRIBUTION-SCALE-GATE.md` |
| Live tech | `docs/documents/3. tech/09-TECH-08-MC-AI-LIVE-SESSION-SCRIPT-LIVE-COMMERCE-COMMENT-ROUTING.md` |
| Global evidence tech | `docs/documents/3. tech/11-TECH-10-GLOBAL-SMOKE-EVIDENCE-RELEASE-GATE.md` |
| Commerce upstream | `docs/documents/4. phase/phase-3/10-P3-ADDENDUM-CUSTOMER-TO-CASH-RUNTIME-LOCK.md` |
| Phase 3.1 supplement | `docs/documents/4. phase/phase-3.1/*` |
| Supplemental raw docs | `docs/documents/4. phase/phase-3.1/5. bo sung/*` |
| CRM canonical | `docs/documents/6. canonical/01-CANONICAL-CRM-MEMBER-LIFECYCLE-RUNTIME.md` |
| Finance/Diamond canonical | `docs/documents/6. canonical/02-CANONICAL-FINANCE-DIAMOND-COMMISSION-PAYOUT-RUNTIME.md` |
| Evidence canonical | `docs/documents/6. canonical/03-CANONICAL-EVIDENCE-SMOKE-GATE-CUSTOMER-TO-CASH-CARE.md` |
| Gateway downstream | `docs/documents/4. phase/phase-5/10-P5-PHỤ LỤC KHÓA RUNTIME GATEWAY FACEBOOK VÀ NHẮN TIN.md` |

## 5. Execution order

| Bước | File | Mode | Done condition |
| --- | --- | --- | --- |
| 0 | `BẢNG GÔM GIAI ĐOẠN 4.md` | Canonical reading hub | Nắm toàn bộ nguồn, conflict resolution, runtime contracts, P0 gates. |
| 1 | `10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md` | Practical lock | Dev hiểu các khóa bắt buộc trước khi analysis/design. |
| 2 | `00-P4-PHÂN TÍCH HIỆN TRẠNG.md` | Analysis only | Current state, gap/conflict matrix, evidence requirement. Không sửa code. |
| 3 | `01-P4-THIẾT KẾ KỸ THUẬT.md` | Technical design only | Contract/API/DTO/event/state/evidence design. Không implement. |
| 4 | `02-P4-2A-HỢP ĐỒNG TIÊU THỤ DỮ LIỆU THỜI GIAN CHẠY.md` | Limited implementation handoff | AI chỉ consume runtime owner truth. |
| 5 | `03-P4-2B-BỘ NHỚ KHÁCH HÀNG VÀ BỘ GIẢI NGỮ CẢNH.md` | Limited implementation handoff | CustomerAdvisoryContext, privacy, opt-out, open case. |
| 6 | `04-P4-2C-ĐIỀU PHỐI TƯ VẤN KIẾN THỨC SẢN PHẨM.md` | Limited implementation handoff | ProductRoleMatrix, decision tree, situation locks. |
| 7 | `05-P4-2D-TIÊU THỤ BÁO GIÁ NHÁP VÀ XÁC NHẬN ĐƠN.md` | Limited implementation handoff | QuoteSnapshot, OrderRuntimeConsumerView, payment/shipping. |
| 8 | `06-P4-2E-CHẶN AN TOÀN NGÔN TỪ CÔNG KHAI VÀ TUYÊN BỐ.md` | Limited implementation handoff | Final Response Guard, language guard, public/private safety. |
| 9 | `07-P4-2F-CẦU NỐI BÀN GIAO KÊNH MESSENGER LIVE CRM.md` | Limited implementation handoff | Channel handoff, Gateway boundary, CRM/Live bridge, typing/pacing. |
| 10 | `08-P4-2G-BÁO CÁO KIỂM THỬ KHÓI VÀ BẰNG CHỨNG.md` | Smoke/evidence/report only | P0 evidence, 14-section report, owner review request. |

Không được nhảy từ README sang implementation. Không được mở Gateway sau Phase 4 local smoke.

## 6. Conflict xử lý ở Phase 4

Phase 4 không được tự chọn khi gặp conflict. Bắt buộc fail-closed:

- Price policy conflict -> QuoteSnapshot/policy version only.
- Golden Hour schedule conflict -> GoldenHourResolver/policy version only.
- Member + Diamond benefit priority conflict -> QuoteSnapshot policy priority only.
- Vegan/formula conflict -> no vegan claim.
- Message file 3/6 conflict -> canonical registry only.
- Page Registry conflict -> Phase 5 normalized registry only.
- IVR timing conflict -> no IVR real-call readiness claim.
- Financial baseline numbers -> internal source baseline only, not customer quote.

## 7. P0 gates

Phase 4 requires evidence for:

- `P4-GATE-001` Source truth no self-calculation.
- `P4-GATE-002` DailySalesContext.
- `P4-GATE-003` CustomerAdvisoryContext.
- `P4-GATE-004` ProductRoleMatrix.
- `P4-GATE-005` QuoteSnapshot.
- `P4-GATE-006` Order state.
- `P4-GATE-007` Payment public-safe state.
- `P4-GATE-008` Shipping/ETA.
- `P4-GATE-009` CRM/Member suppression.
- `P4-GATE-010` Diamond/Finance wording.
- `P4-GATE-011` Public/private boundary.
- `P4-GATE-012` Customer-facing language guard.
- `P4-GATE-013` Typing/pacing.
- `P4-GATE-014` Gateway handoff while production blocked.
- `P4-GATE-015` Evidence artifact quality.

Mặc định mọi gate là `PENDING_EVIDENCE`. `PENDING` không phải `PASS`.

## 8. Done gate

Phase 4 chỉ đạt `EVIDENCE_SUBMITTED_FOR_OWNER_REVIEW` khi:

1. `BẢNG GÔM GIAI ĐOẠN 4.md` đã được dùng làm canonical source.
2. File 00-08 có report/evidence đúng mode.
3. P4-GATE-001 đến P4-GATE-015 có evidence item.
4. Smoke P4-SMK-001 đến P4-SMK-022 có kết quả rõ.
5. Không còn P0 fail bị che giấu.
6. Owner decisions còn pending được carry như blocker.
7. Evidence không chứa raw PII/secret/token.
8. Gateway vẫn `PRODUCTION_BLOCKED`.

## 9. Fail gate

Phase 4 FAIL nếu AI:

- Tự tính giá, tồn, quyền lợi, ship, VAT, order_code, paid, verified revenue, commission, ROAS hoặc payout.
- Public final quote, PII, payment, order state, member tier, commission hoặc health-sensitive detail.
- Dùng sản phẩm không có ProductRoleMatrix/public-safe proof.
- Bỏ qua vegan/dietary/health guard.
- Bán product not sellable/sale lock/recall.
- Nói paid từ ảnh chuyển khoản hoặc lời khách.
- Gửi CRM khi opt-out/open case/quiet hour/frequency cap fail.
- Dùng raw message file 3/6 thay canonical registry.
- Dùng từ nội bộ trong customer-facing output.
- Gọi Gateway PASS, Completion PASS, Release Ready hoặc Production Ready khi evidence chưa accepted.

## 10. Handoff sang Phase 5

Phase 5 dev planning có thể chuẩn bị sau owner review Phase 4, nhưng Gateway production vẫn bị chặn. Các dòng dưới đây là điều kiện tương lai phải có artifact owner-accepted `PASS`, không phải claim hiện tại của Phase 4:

- AI Advisor Facebook Completion Report owner-accepted `PASS`.
- Evidence Package owner-accepted `PASS`.
- E2E live-to-order smoke owner-accepted `PASS`.
- Page Registry normalized và production explicitly allowed.
- App permission/security review.
- Owner sign-off.
- Rollback/monitoring ready.

## 11. Status cuối

```text
PHASE_4_CANONICAL_REWRITE_COMPLETE_FOR_OWNER_REVIEW
AI_CHANNEL_PENDING_EVIDENCE
GATEWAY_PRODUCTION_BLOCKED
NOT_RELEASE_READY
NOT_PRODUCTION_READY
```

