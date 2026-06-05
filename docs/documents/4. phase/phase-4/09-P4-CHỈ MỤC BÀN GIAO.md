# P4 - CHỈ MỤC BÀN GIAO

## Khóa chống conflict Phase 4

Chỉ mục này là file dẫn đường cho bộ Phase 4 đã rewrite. Khi giao dev, bắt buộc đọc `BẢNG GÔM GIAI ĐOẠN 4.md` trước, sau đó đọc phụ lục runtime 10, ma trận SRS 11 và các shard 00-08. Chỉ mục này không override Bảng Gôm; nếu có khác biệt về owner, contract, gate, evidence hoặc readiness, áp dụng Bảng Gôm và xử lý fail-closed.

Các cụm `local-ready`, `DONE`, `PASS cục bộ`, `owner review` hoặc `handoff` chỉ là trạng thái hồ sơ cục bộ. Chúng không phải `IMPLEMENTATION_READY`, không phải `GATEWAY_PASS`, không phải `COMPLETION_PASS`, không phải `RELEASE_READY`, không phải `PRODUCTION_READY` và không phải Go-live.

**Phase:** PHASE-04 - AI Advisor Runtime / AI Channel Readiness
**Ngày viết lại:** 2026-06-05
**Trạng thái mặc định:** `CANONICAL_REWRITE_FOR_OWNER_REVIEW`
**Gateway:** `PRODUCTION_BLOCKED`
**Release:** `NOT_RELEASE_READY`

## 1. Thứ tự đọc trong bộ Phase 4 đã rewrite

Các file 00-08 đã được nhúng khối nguồn bắt buộc vào đầu file để chống thiếu nguồn khi chạy lẻ. Khi chạy theo bộ, Bảng Gôm vẫn là canonical source trong Phase 4; không dùng shard 00-08 hoặc phụ lục để hạ thấp khóa nguồn, conflict lock hoặc trạng thái evidence đã nhập trong Bảng Gôm.

Khi có xung đột giữa các file Phase 4 hiện có, áp dụng thứ tự:

1. `BẢNG GÔM GIAI ĐOẠN 4.md`.
2. Owner decision và fail-closed stance đã được nhập vào Bảng Gôm/phụ lục/SRS handoff.
3. Cross-phase runtime lock đã được nhập vào Bảng Gôm, phụ lục 10 và file 11.
4. `10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md`.
5. `11-P4-MA TRẬN SRS VÀ BÀN GIAO TRIỂN KHAI.md`.
6. Khối nguồn bắt buộc nằm trong chính file 00-08 đang được chạy.
7. Nội dung chi tiết của file execution shard 00-08.

Raw source baseline/supplemental content đã được nhập thành rule trong các file Phase 4; không dùng raw source bên ngoài để override runtime owner hoặc mở Gateway.

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
- Owner decision register hoặc blocker carry-over đã nhập trong 00-08.
- Evidence plan theo canonical evidence/smoke gate.

Nếu thiếu, ghi:

`P4-ENTRY-BLOCKED-BY-UPSTREAM_RUNTIME_OR_OWNER_DECISION`

## 4. Source-of-truth bắt buộc đã nhập

Danh sách dưới đây là nội dung nguồn tối thiểu đã được nhập thành rule trong Phase 4. Không dùng như link phụ thuộc; nếu tài liệu gốc không còn, các rule này vẫn là nền để đọc, triển khai và review.

| Nhóm | Nội dung đã nhập vào Phase 4 |
| --- | --- |
| Master source truth | Chuỗi nguồn sự thật bắt buộc: Product/Formula/Public Product Knowledge -> Operational Core -> Commerce Runtime -> AI/Channel consumer -> Gateway/Release review. AI Advisor không tạo truth song song. |
| Master dependency | Phase 4 chỉ consume runtime đã có owner; thiếu upstream truth thì fail-closed, ghi blocker, không tự suy diễn. |
| Master runtime guard | Resolver/runtime owner quyết định final price, sellable, order, payment, shipping, revenue, commission, payout; AI chỉ render public-safe state. |
| Master evidence gate | PASS, DONE, local-ready hoặc report chữ không đủ để mở Completion/Release/Production nếu thiếu artifact, smoke, owner acceptance và secret/PII masking. |
| AI Advisor business/tech | AI Advisor là consultation orchestrator: tư vấn, cá nhân hóa, chọn hướng hội thoại, gọi runtime hợp lệ, render safe response và handoff. |
| Commerce runtime | QuoteSnapshot còn hiệu lực quyết định final price; OrderDraft không phải Official Order; order_code chỉ đến từ Commerce Runtime; Payment selected/COD/ảnh chuyển khoản không phải Paid. |
| Product/Operational runtime | Chỉ tư vấn sản phẩm từ public-safe product data, ProductRoleMatrix, sellable/runtime signal; không bán not-sellable, recall, sale lock, channel suppressed hoặc thiếu dietary proof. |
| CRM/Member runtime | Memory chỉ hỗ trợ hiểu khách; messaging phải tôn trọng opt-out, quiet hour, open case, complaint, fatigue, frequency cap và canonical registry. |
| Finance/Diamond runtime | Diamond/referral/commission/PIT/payable/payout là Finance/Diamond state; AI không nói ghi nhận hoặc chi trả nếu chưa có finance checkpoint. |
| Gateway/Ads/Live runtime | Gateway chỉ receive/normalize/route/deliver/log evidence, không tư vấn thay AI; Ads/ROAS chỉ tính revenue từ ORDER_VERIFIED; Live kéo price/buy/deep consult sang private khi cần. |
| Conflict lock | Giá/Giờ Vàng/member/Diamond/vegan/page/token/IVR/message baseline conflict đều fail-closed, không chọn thủ công. |
| Evidence status | Mặc định PENDING_EVIDENCE/BLOCKED nếu thiếu artifact hoặc owner acceptance; cấm tự gọi GATEWAY_PASS, COMPLETION_PASS, RELEASE_READY, PRODUCTION_READY, GO_LIVE_APPROVED. |

## 5. Execution order

| Bước | File | Mode | Done condition |
| --- | --- | --- | --- |
| 0 | `BẢNG GÔM GIAI ĐOẠN 4.md` | Canonical rewrite | Source priority, conflict lock, runtime gates, smoke/evidence gate. |
| 1 | `10-P4-PHỤ LỤC KHÓA RUNTIME THỰC CHIẾN AI ADVISOR.md` | Practical lock | Dev hiểu các khóa bắt buộc trước khi analysis/design. |
| 2 | `11-P4-MA TRẬN SRS VÀ BÀN GIAO TRIỂN KHAI.md` | SRS/dev handoff | Requirement traceability, NFR, work package, implementation guardrails. |
| 3 | `00-P4-PHÂN TÍCH HIỆN TRẠNG.md` | Analysis only | Current state, gap/conflict matrix, evidence requirement. Không sửa code. |
| 4 | `01-P4-THIẾT KẾ KỸ THUẬT.md` | Technical design only | Contract/API/DTO/event/state/evidence design. Không implement. |
| 5 | `02-P4-2A-HỢP ĐỒNG TIÊU THỤ DỮ LIỆU THỜI GIAN CHẠY.md` | Limited implementation handoff | AI chỉ consume runtime owner truth. |
| 6 | `03-P4-2B-BỘ NHỚ KHÁCH HÀNG VÀ BỘ GIẢI NGỮ CẢNH.md` | Limited implementation handoff | CustomerAdvisoryContext, privacy, opt-out, open case. |
| 7 | `04-P4-2C-ĐIỀU PHỐI TƯ VẤN KIẾN THỨC SẢN PHẨM.md` | Limited implementation handoff | ProductRoleMatrix, decision tree, situation locks. |
| 8 | `05-P4-2D-TIÊU THỤ BÁO GIÁ NHÁP VÀ XÁC NHẬN ĐƠN.md` | Limited implementation handoff | QuoteSnapshot, OrderRuntimeConsumerView, payment/shipping. |
| 9 | `06-P4-2E-CHẶN AN TOÀN NGÔN TỪ CÔNG KHAI VÀ TUYÊN BỐ.md` | Limited implementation handoff | Final Response Guard, language guard, public/private safety. |
| 10 | `07-P4-2F-CẦU NỐI BÀN GIAO KÊNH MESSENGER LIVE CRM.md` | Limited implementation handoff | Channel handoff, Gateway boundary, CRM/Live bridge, typing/pacing. |
| 11 | `08-P4-2G-BÁO CÁO KIỂM THỬ KHÓI VÀ BẰNG CHỨNG.md` | Smoke/evidence/report only | P0 evidence, 14-section report, owner review request. |

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

1. File 00-08 đều đã có khối nguồn bắt buộc tự chứa ở đầu file.
2. `11-P4-MA TRẬN SRS VÀ BÀN GIAO TRIỂN KHAI.md` đã được dùng để tạo SRS/RTM trước implementation.
3. File 00-08 có report/evidence đúng mode.
4. P4-GATE-001 đến P4-GATE-015 có evidence item.
5. Smoke P4-SMK-001 đến P4-SMK-022 có kết quả rõ.
6. Không còn P0 fail bị che giấu.
7. Owner decisions còn pending được carry như blocker.
8. Evidence không chứa raw PII/secret/token.
9. Gateway vẫn `PRODUCTION_BLOCKED`.

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
PHASE_4_DEV_SRS_HANDOFF_READY
SRS_REQUIRED_BEFORE_CODE_IMPLEMENTATION
AI_CHANNEL_PENDING_EVIDENCE
GATEWAY_PRODUCTION_BLOCKED
NOT_RELEASE_READY
NOT_PRODUCTION_READY
```

