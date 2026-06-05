# P4 - ANALYSIS ONLY

## Khối nguồn bắt buộc đã nhập vào file này

File này tự chứa nội dung nguồn liên quan của Phase 4. Không yêu cầu đọc Bảng Gôm hoặc tài liệu ngoài để hiểu các khóa dưới đây. Nếu sau này chỉ còn bộ file Phase 4, các rule trong khối này vẫn là nền bắt buộc để phân tích, thiết kế, kiểm thử và review.

### A. Nội dung nguồn đã nhập

1. Master/runtime governance: mọi quyết định phải đi theo chuỗi nguồn sự thật. Product/Formula/Public Product Knowledge quyết định dữ liệu sản phẩm công khai. Operational Core quyết định sellable, recall, sale lock, batch/trace public-safe. Commerce Runtime quyết định DailySalesContext, QuoteSnapshot, OrderDraft, CustomerConfirmation, order_code, payment public-safe state, shipping/ETA và ORDER_VERIFIED. AI Advisor chỉ consume/orchestrate/render, không tạo nguồn sự thật song song.
2. Evidence/release governance: local-ready, DONE, PASS cục bộ, smoke pass hoặc completion report dạng chữ không được xem là Completion PASS, Release Ready, Production Ready hoặc Go-live. Mọi gate mặc định là PENDING_EVIDENCE cho đến khi có artifact được owner chấp nhận.
3. AI Advisor business/tech lock: AI được tư vấn, cá nhân hóa, chọn hướng hội thoại, tạo response candidate, gọi runtime hợp lệ, render câu trả lời có lực bán và handoff đúng kênh. AI không được tự tính giá, tồn, discount, quyền lợi thành viên, Diamond benefit, ship, VAT, order_code, paid, verified revenue, commission, ROAS hoặc payout.
4. Commerce lock: final price chỉ đến từ QuoteSnapshot còn hiệu lực. Order Draft không phải Official Order. Chỉ có CustomerConfirmation hợp lệ và order_code từ Commerce Runtime mới cho phép nói đơn đã ghi nhận chính thức. Payment selected, COD selected hoặc ảnh chuyển khoản không phải Paid.
5. Product/Operational lock: AI chỉ dùng product public-safe data, ProductRoleMatrix và sellable/runtime signals. Không dùng mã SKU nội bộ trong lời khách, không lộ công thức/tỷ lệ/cost/supplier/QC note, không bán SKU not sellable, recall, sale lock, channel suppressed hoặc thiếu proof dietary.
6. CRM/Member lock: customer memory chỉ hỗ trợ hiểu khách, không tự quyết quyền lợi giá. CRM/member messaging phải tôn trọng opt-out, quiet hour, open case, complaint, fatigue, frequency cap và canonical message registry. Không dùng raw message cũ nếu chưa qua guard ngôn từ khách hàng.
7. Finance/Diamond lock: Diamond/referral/commission/payout là Finance/Diamond state, không thuộc AI Advisor. AI chỉ nói theo trạng thái runtime được phép, không nói đã ghi nhận hoa hồng, đã trừ PIT hoặc đã chi trả nếu chưa có finance checkpoint.
8. Gateway/Ads/Live lock: Facebook Gateway chỉ là lớp nhận/normalize/route/deliver/log evidence, không tư vấn thay AI và không mở production nếu AI/evidence/smoke/owner sign-off chưa pass. Ads/ROAS chỉ tính revenue từ ORDER_VERIFIED. Live/MC AI chỉ dùng daily live board/script brief và phải kéo price/buy/deep consult sang private khi policy yêu cầu.

### B. Conflict lock

- Conflict giá 24/7, Giờ Vàng, member benefit hoặc Diamond buyer benefit: không hardcode, không chọn thủ công; chỉ dùng policy_version và QuoteSnapshot/runtime owner.
- Conflict lịch Giờ Vàng: không nói giờ cố định nếu GoldenHourResolver/policy version chưa pass.
- Conflict vegan/chay/công thức: không claim chay/vegan và không recommend cho khách ăn chay nếu proof chưa đủ hoặc có thành phần/rủi ro chưa clear.
- Conflict file tin nhắn/wording cũ: chỉ render qua customer-facing language guard; không dùng từ "hệ thống", SKU, runtime, resolver, gateway, API, cost, audit trong câu trả lời khách.
- Conflict Page/Gateway/App/Token: Phase 4 chỉ preserve channel context và handoff intent; không tự xác nhận Gateway production.
- Conflict evidence/completion: thiếu artifact hoặc owner acceptance thì giữ PENDING_EVIDENCE/BLOCKED, không gọi PASS.

### C. Trạng thái evidence bắt buộc

Trạng thái mặc định của file này: ANALYSIS_ONLY_WITH_IMPORTED_SOURCE_LOCK. Kết quả phân tích chỉ được gọi là report hoàn tất khi có gap matrix, conflict matrix, evidence requirement và blocker list. Không được gọi IMPLEMENTATION_READY, GATEWAY_PASS, COMPLETION_PASS, RELEASE_READY, PRODUCTION_READY hoặc GO_LIVE_APPROVED.

### D. Khóa riêng của file này

File 00 chỉ phân tích hiện trạng. Nhiệm vụ là kiểm codebase/schema/API/test/prompt thật có đang vi phạm các khóa trên không, ghi rõ gap và blocker. Không sửa file, không tạo migration, không thêm seed, không bật feature flag, không chạy production traffic.

## Nội dung triển khai

## PROMPT-P4 - AI ADVISOR RUNTIME / CUSTOMER MEMORY / PRODUCT CONSULTATION / QUOTE ORDER CONSUMER / SAFETY WORDING ANALYSIS HANDOFF

Mode: ANALYSIS ONLY - DO NOT MODIFY FILES

Owner review: Required before any Technical Design or Implementation

Phase objective: Kiểm tra AI Advisor có consume đúng runtime của Phase 1, Phase 2, Phase 3 hay không.

Hard rule: AI Advisor là runtime consumer / consultation orchestrator, không phải source-of-truth nghiệp vụ.

## CẢNH BÁO NHẬN THỨC KỸ THUẬT

Tài liệu này không phải là yêu cầu viết vài đoạn code để dev copy-paste. / Một hệ thống AI Advisor vận hành thật không thể ghép từ các đoạn code rời rạc, vì nó phải khớp với kiến trúc, database, API, state machine, runtime contract, bảo mật, phân quyền, audit, idempotency, evidence và các gate release. / Ví dụ chức năng tư vấn giá không chỉ là câu trả lời chatbot: phải có Product/SKU public data, Sellable Gate, QuoteSnapshot immutable, member benefit runtime, customer confirmation, order draft, official order code, payment state và audit. Nếu AI tự tính giá hoặc tự nói đơn đã chính thức, hệ thống sẽ sai nghiệp vụ và gây rủi ro thương mại. / Trong Phase 4, developer chỉ được phân tích codebase thật, database thật, API thật, migration thật, seed thật, test thật. Không sửa file, không code, không migration trong bước này.

## 1. PHASE MARKER

Phase: PHASE 04 - AI ADVISOR RUNTIME

File: 00-P4-PHÂN TÍCH HIỆN TRẠNG.docx

Prompt name: PROMPT-P4 - AI ADVISOR RUNTIME / CUSTOMER MEMORY / PRODUCT CONSULTATION / QUOTE ORDER CONSUMER / SAFETY WORDING ANALYSIS HANDOFF

Execution mode: ANALYSIS ONLY - DO NOT MODIFY FILES

Report requirement: Bắt buộc trả report 14 mục, có evidence list, smoke proposal, điểm chặn register và downstream handoff.

## 2. HEADER

Mục đích của file này: giao cho dev / Codex / Copilot phân tích hiện trạng AI Advisor Runtime trước khi thiết kế hoặc sửa code. File này chỉ yêu cầu inspect, đối chiếu, ghi nhận gap và lập báo cáo. Không được tạo migration, không được sửa API, không được sửa prompt runtime, không được chỉnh content block, không được chạy implementation.

## QUAN ĐIỂM KHÓA

Chuỗi đúng: Foundation truth -> Product/SKU/Recipe truth -> Operational truth -> Commerce truth -> AI/Channel consumer -> Gateway/Release review. / Không được đảo thứ tự. AI Advisor không được tự quyết product active, SKU active, recipe active, raw lot readiness, batch release, warehouse receipt, inventory availability, sellable status, listed price, program discount, member benefit, final price, official order, paid status, verified revenue, commission, ROAS hoặc payout. / AI Advisor chỉ được tư vấn, điều phối hội thoại, dùng customer memory và gọi/consume runtime đã được owner domain cấp.

## 3. MODE

Mode chính: ANALYSIS ONLY

Modify files: Forbidden - không sửa bất kỳ file nào.

Code generation: Forbidden - không viết code implementation, không copy-paste code.

Migration: Forbidden - không tạo hoặc sửa migration.

Seed data: Forbidden - không sửa seed, không thêm SKU, không hardcode dữ liệu.

Runtime config: Forbidden - không đổi config thật, không bật Gateway, không mở channel.

Allowed output: Analysis report, matrix, điểm chặn list, evidence requirement, smoke requirement, recommended next design handoff.

## 4. SOURCE-OF-TRUTH

Dev phải dùng các nguồn sự thật sau để phân tích. Nếu codebase hiện tại mâu thuẫn với tài liệu khóa, phải ghi vào Conflict Detection Matrix, không được tự sửa.

Nhóm source-of-truth: PHASE 0 - Foundation; Nội dung phải đối chiếu: Actor context, correlation ID, RBAC, audit append-only, evidence registry, idempotency, high-risk guard, admin override.; Kết luận bắt buộc nếu thiếu: AI Advisor không được vận hành các hành động rủi ro nếu thiếu actor/permission/audit/evidence/idempotency.

Nhóm source-of-truth: PHASE 1 - Product/SKU/Recipe; Nội dung phải đối chiếu: Product public data, SKU public data, recipe/ingredient public boundary, product activation, public/private field policy, SKU extension governance.; Kết luận bắt buộc nếu thiếu: Không được để AI hardcode SKU hoặc lộ internal SKU code/formula/private fields.

Nhóm source-of-truth: PHASE 2 - Operational Core; Nội dung phải đối chiếu: Operational truth, batch release, warehouse receipt, inventory, recall, sale lock, traceability whitelist.; Kết luận bắt buộc nếu thiếu: Không được tư vấn/sell SKU bị recall, sale lock, not released, not inventory-available hoặc không public-valid.

Nhóm source-of-truth: PHASE 3 - Commerce Runtime; Nội dung phải đối chiếu: Sellable Gate, QuoteSnapshot, cart, order draft, customer confirmation, official order, payment, shipping, invoice/tax, verified revenue.; Kết luận bắt buộc nếu thiếu: Không được để AI tự tính giá/tồn/discount/member benefit/sellable/order_code/paid/verified revenue.

Nhóm source-of-truth: AI Advisor Knowledge Pack; Nội dung phải đối chiếu: Product knowledge, content blocks, claim whitelist, safety wording, situation recognition, runtime linkage.; Kết luận bắt buộc nếu thiếu: Không được trả lời vượt claim, không làm mất lực bán, không trộn public/internal.

Nhóm source-of-truth: Channel Gateway / Messenger / Live / CRM; Nội dung phải đối chiếu: Public comment routing, private quote/order handling, live/CRM suppression, handoff policy, recall/sale lock override.; Kết luận bắt buộc nếu thiếu: Không được quote giá public hoặc chốt đơn public nếu policy yêu cầu private.

## 5. ENTRY CONDITION

Entry condition: Có quyền đọc codebase; Yêu cầu: Dev có quyền inspect AI Advisor, commerce integration, channel adapter, content/prompt runtime, tests và config liên quan.; Nếu không đạt: Ghi điểm chặn-P4-ENTRY-001.

Entry condition: Không có quyền sửa trong lượt này; Yêu cầu: Repo phải được mở ở chế độ analysis/read-only hoặc cam kết không commit thay đổi.; Nếu không đạt: Dừng analysis và báo owner.

Entry condition: Có tài liệu Phase 0-3; Yêu cầu: Dev có đủ README và các prompt đã khóa của Phase 0, 1, 2, 3.; Nếu không đạt: Ghi gap source-of-truth, không tự suy diễn.

Entry condition: Có access logs hoặc sample runtime nếu có; Yêu cầu: Có thể đọc DTO, API contract, service call, prompt resolver, channel event sample, smoke/log hiện tại.; Nếu không đạt: Ghi evidence missing.

Entry condition: Có tiêu chuẩn public/private wording; Yêu cầu: Có claim whitelist, public-safe wording, internal data suppression policy.; Nếu không đạt: Ghi điểm chặn nếu chưa có guard.

## 6. OBJECTIVE

Phân tích hiện trạng AI Advisor Runtime đang được triển khai hoặc dự kiến triển khai trong codebase.

Kiểm tra AI Advisor có đang tự tính giá, tồn, sellable, discount, member benefit, Diamond referral benefit, shipping fee, VAT/tax, order_code, paid, verified revenue, commission, ROAS hoặc payout hay không.

Kiểm tra AI Advisor có consume đúng Commerce Runtime, Sellable Gate và QuoteSnapshot của Phase 3 hay không.

Kiểm tra AI Advisor có consume đúng Product/SKU public data của Phase 1 và Operational truth của Phase 2 hay không.

Kiểm tra Customer Memory, Product Knowledge Resolver, Consultation Orchestrator, Quote/Order Draft Consumer, Safety/Claim Guard và Channel Handoff có đang tồn tại, thiếu hay sai boundary.

Kiểm tra có hardcode SKU, price, discount, member tier, Golden Hour, 24/7 program, stock, shipping, VAT, order state hoặc commission hay không.

Kiểm tra có leak internal data: SKU code nội bộ, formula, cost, QC note, trace internal, supplier private, internal status, raw runtime exception hay không.

Kiểm tra public/private response boundary: giá, quote, order, dữ liệu khách hàng và trạng thái thanh toán có được đưa về Messenger/private đúng policy hay không.

Lập Current Implementation State Matrix, Gap Analysis Matrix, Conflict Detection Matrix, điểm chặn Register, Downstream Impact và Smoke Required cho Phase 4.

Kết thúc bằng report 14 mục để owner quyết định có chuyển sang P4-1 Technical Design Only hay chưa.

## 7. SCOPE IN

AI Advisor runtime entrypoints: Các endpoint/service/handler/worker/channel adapter tạo câu trả lời AI, nhận event từ Live/Messenger/CRM hoặc nhận yêu cầu tư vấn.

Runtime consumer contract: DTO/input mà AI nhận từ Product, Operational, Commerce, Customer Memory, Channel và Safety Policy.

Customer context & memory: Khách mới/cũ, member tier, purchase history, recipient, nhu cầu dinh dưỡng, dị ứng/kiêng, mục đích mua, lịch sử tư vấn, chăm sóc sau mua.

Product Knowledge Resolver: Nguồn lấy public product data, group, vegan/non-vegan, sensory positioning, public-safe nutrition, Eastern concept chuyển hóa.

Consultation Orchestrator: Cách AI chọn SKU/alternative/combo dựa trên need, diet, allergy, sellable và sale lock.

Sellable/stock/recall consumer: Cách AI nhận sellable status, block reason public-safe, recall/sale lock/channel suppression.

QuoteSnapshot consumer: Cách AI gọi hoặc nhận quote snapshot, final price, quote expiry, VAT display, shipping fee nếu có, program/member benefit display.

Cart/Order Draft/Confirmation: Cách AI tạo/hiển thị order draft payload, xin xác nhận, gửi Customer Confirmation event nếu channel cho phép.

Official Order consumer: Cách AI chỉ hiển thị order_code sau khi Official Order đã được tạo bởi Commerce Runtime.

Payment/Shipping public-safe state: Cách AI nói về COD, bank transfer, paid, shipping, invoice/tax mà không tự xác nhận sai.

Safety/Public Wording Guard: Claim whitelist, không chữa bệnh, không thuốc, không lộ internal code/cost/formula/QC/supplier/private trace.

Channel handoff bridge: Public comment -> Messenger, private quote/order, post-handoff routing, CRM/live suppression, human handoff.

Evidence & smoke: Danh sách evidence bắt buộc và smoke test cần chạy trước khi Phase 4 được xem xét technical design.

## 8. SCOPE OUT

Scope out: Không sửa code; Không được làm trong file này: Không refactor service, không tạo class, không sửa handler, không sửa prompt runtime.; Lý do: Đây là Analysis Only.

Scope out: Không viết migration; Không được làm trong file này: Không tạo bảng, không sửa schema, không thêm index, không đổi enum.; Lý do: Database change thuộc design/implementation sau.

Scope out: Không sửa seed; Không được làm trong file này: Không thêm SKU, không sửa giá, không sửa member tiers, không sửa chương trình.; Lý do: Seed và runtime truth thuộc owner domain.

Scope out: Không tạo hardcoded resolver; Không được làm trong file này: Không hardcode product list, price table, discount table, stock map, member benefit map.; Lý do: AI Advisor không phải source-of-truth.

Scope out: Không mở Gateway; Không được làm trong file này: Không thay đổi Gateway status, không bật production channel, không go-live.; Lý do: Gateway chỉ mở khi release decision được owner duyệt.

Scope out: Không triển khai IVR; Không được làm trong file này: Chỉ ghi reserved boundary nếu phát hiện liên quan.; Lý do: IVR chưa thuộc Phase 4 implementation.

Scope out: Không tự thiết kế API mới; Không được làm trong file này: Chỉ ghi gap và đề xuất handoff cho Technical Design Only.; Lý do: Tránh nhảy bước.

Scope out: Không sửa content bán hàng; Không được làm trong file này: Chỉ phân tích guard, content block, claim boundary; không thay nội dung runtime.; Lý do: Content change cần owner review và smoke.

## 9. CURRENT IMPLEMENTATION STATE MATRIX

Dev phải điền matrix này dựa trên codebase thật. Không được ghi "đạt" nếu chưa có evidence path, endpoint, test hoặc log chứng minh.

ID: P4-CUR-001; Hạng mục: AI Advisor entrypoint; Cách kiểm tra: Tìm endpoint/handler/service tạo câu trả lời AI cho Messenger/Live/CRM/web.; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-002; Hạng mục: Runtime Consumer Contract; Cách kiểm tra: Xác định DTO/input AI nhận từ Product, Operational, Commerce và Channel.; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-003; Hạng mục: Product public data consumer; Cách kiểm tra: AI có lấy public product name, group, vegan fit, sensory positioning từ resolver không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-004; Hạng mục: Hardcoded SKU detection; Cách kiểm tra: Tìm hardcode SKU code, product list, product name, group, vegan flag trong prompt/code.; Trạng thái: PASS / FOUND_HARDCODE / UNKNOWN

ID: P4-CUR-005; Hạng mục: Operational truth consumer; Cách kiểm tra: AI có nhận recall/sale lock/release/public trace whitelist hay không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-006; Hạng mục: Sellable status consumer; Cách kiểm tra: AI có lấy sellable_status và block_reason public-safe từ Commerce Runtime hay tự suy luận?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-007; Hạng mục: QuoteSnapshot consumer; Cách kiểm tra: AI có dùng QuoteSnapshot immutable làm nguồn final price không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-008; Hạng mục: Price/discount self-calculation check; Cách kiểm tra: Tìm phép tính tự tạo final price, program discount, member benefit, Diamond benefit.; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-009; Hạng mục: Customer Memory resolver; Cách kiểm tra: AI có đọc khách mới/cũ, member tier, purchase history, recipient, need, allergy/dietary guard?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-010; Hạng mục: Consultation Orchestrator; Cách kiểm tra: AI có chọn SKU dựa trên need + product knowledge + dietary/allergy + sellable không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-011; Hạng mục: Out-of-stock/not-sellable response; Cách kiểm tra: AI có trả lời thẳng khi hết hàng/not sellable và gợi ý alternative đúng fit không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-012; Hạng mục: Cart/Order Draft consumer; Cách kiểm tra: AI có hiển thị/tạo order draft từ Commerce Runtime, không tự xem cart là order không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-013; Hạng mục: Official order status; Cách kiểm tra: AI chỉ nói đơn chính thức khi có order_code từ Commerce Runtime?; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-014; Hạng mục: Payment public-safe state; Cách kiểm tra: AI không nói COD selected/bank transfer selected là paid?; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-015; Hạng mục: Verified revenue boundary; Cách kiểm tra: AI không tự nói verified revenue, commission, ROAS, payout?; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-016; Hạng mục: Safety/Claim Guard; Cách kiểm tra: Có guard không chữa bệnh, không thuốc, không claim y tế quá mức, không disclaimer làm mất lực bán?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-017; Hạng mục: Public/private data boundary; Cách kiểm tra: Không lộ internal SKU code, formula, cost, QC note, supplier private, trace internal?; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-018; Hạng mục: Channel bridge; Cách kiểm tra: Public comment mơ hồ/ký hiệu có kéo Messenger nếu policy cho phép? Quote/order ưu tiên private?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

ID: P4-CUR-019; Hạng mục: CRM/live suppression; Cách kiểm tra: CRM/live không gợi ý SKU not sellable, không hardcode giá, tôn trọng recall/sale lock?; Trạng thái: PASS / VIOLATION / UNKNOWN

ID: P4-CUR-020; Hạng mục: Human handoff; Cách kiểm tra: Có flag human_handoff_required cho legal/health/complaint/payment-risk/unclear-risk không?; Trạng thái: FOUND / PARTIAL / MISSING / UNKNOWN

## 10. GAP ANALYSIS MATRIX

Gap ID: P4-GAP-001; Gap: Không có Runtime Consumer Contract rõ; Dấu hiệu: AI nhận dữ liệu rời rạc hoặc prompt tự suy luận.; Hướng xử lý sau Analysis: Thiết kế contract ở P4-1; không implementation ở P4-0.

Gap ID: P4-GAP-002; Gap: AI tự tính giá/discount/member benefit; Dấu hiệu: Có phép tính hoặc bảng hardcode trong prompt/code.; Hướng xử lý sau Analysis: Block Phase 4. Giá cuối phải từ QuoteSnapshot.

Gap ID: P4-GAP-003; Gap: AI tự tính tồn/sellable; Dấu hiệu: AI dựa vào inventory raw hoặc status tự suy luận sellable.; Hướng xử lý sau Analysis: Block. Sellable chỉ từ Commerce Runtime.

Gap ID: P4-GAP-004; Gap: Không có Product Knowledge Resolver; Dấu hiệu: Tư vấn dựa vào text hardcode, không versioning, không public/private policy.; Hướng xử lý sau Analysis: Cần resolver + policy mapping ở design sau.

Gap ID: P4-GAP-005; Gap: Không có Customer Memory Resolver; Dấu hiệu: Không nhận biết khách mới/cũ/member tier/recipient/need/history.; Hướng xử lý sau Analysis: Cần phân tích data source và privacy boundary.

Gap ID: P4-GAP-006; Gap: Không có Consultation Orchestrator; Dấu hiệu: AI chọn SKU theo prompt lỏng, không guard dietary/allergy/sellable.; Hướng xử lý sau Analysis: Cần orchestrator quyết định theo runtime input.

Gap ID: P4-GAP-007; Gap: Không có OOS/not-sellable alternative path; Dấu hiệu: AI xin lỗi chung chung hoặc vẫn chốt SKU không bán được.; Hướng xử lý sau Analysis: Block nếu có thể tạo order sai.

Gap ID: P4-GAP-008; Gap: Không có Safety/Claim Guard; Dấu hiệu: Có câu chữa bệnh, thuốc, claim quá mức hoặc lộ internal.; Hướng xử lý sau Analysis: Block public channel.

Gap ID: P4-GAP-009; Gap: Không có Quote/Order Draft Consumer; Dấu hiệu: AI tự tạo bảng tạm tính hoặc xem cart là order.; Hướng xử lý sau Analysis: Cần dùng Commerce Runtime và QuoteSnapshot.

Gap ID: P4-GAP-010; Gap: Không có official order boundary; Dấu hiệu: AI nói đơn đã ghi nhận khi chưa có order_code.; Hướng xử lý sau Analysis: Critical điểm chặn.

Gap ID: P4-GAP-011; Gap: Không có payment boundary; Dấu hiệu: AI nói đã thanh toán khi khách mới chọn COD/chuyển khoản.; Hướng xử lý sau Analysis: Critical điểm chặn.

Gap ID: P4-GAP-012; Gap: Không có channel private routing; Dấu hiệu: Giá/quote/order trả public comment.; Hướng xử lý sau Analysis: Block Gateway.

Gap ID: P4-GAP-013; Gap: Không có recall/sale lock suppression; Dấu hiệu: AI/CRM/Live vẫn tư vấn SKU sale-locked.; Hướng xử lý sau Analysis: Critical điểm chặn.

Gap ID: P4-GAP-014; Gap: Không có smoke/evidence; Dấu hiệu: Không có test chứng minh các đường sống/chặn.; Hướng xử lý sau Analysis: Không được chuyển P4-1 nếu thiếu report rõ.

## 11. CONFLICT DETECTION MATRIX

Conflict ID: P4-CON-001; Conflict: AI Advisor tự tính giá cuối; Xung đột với: Xung đột Phase 3: QuoteSnapshot là nguồn sự thật.; Mức độ: CRITICAL; Kết luận bắt buộc: Block Technical Design until removed by approved implementation plan.

Conflict ID: P4-CON-002; Conflict: AI Advisor tự quyết sellable; Xung đột với: Xung đột Sellable Gate Runtime.; Mức độ: CRITICAL; Kết luận bắt buộc: Block.

Conflict ID: P4-CON-003; Conflict: AI Advisor đọc raw inventory và nói còn hàng; Xung đột với: Xung đột Operational/Commerce boundary.; Mức độ: HIGH; Kết luận bắt buộc: Ghi rõ path, proposal chuyển sang sellable_status consumer.

Conflict ID: P4-CON-004; Conflict: Product Active/SKU Active/Recipe Active được dùng như Sellable; Xung đột với: Xung đột Phase 1/3 lock.; Mức độ: CRITICAL; Kết luận bắt buộc: Block.

Conflict ID: P4-CON-005; Conflict: Warehouse receipt tự dẫn tới mở bán trong AI; Xung đột với: Xung đột Phase 2/3 lock.; Mức độ: HIGH; Kết luận bắt buộc: Ghi rõ và đề xuất consume Commerce sellable only.

Conflict ID: P4-CON-006; Conflict: AI nói đơn chính thức khi chỉ có Order Draft hoặc Cart; Xung đột với: Xung đột Order state machine.; Mức độ: CRITICAL; Kết luận bắt buộc: Block.

Conflict ID: P4-CON-007; Conflict: AI tạo order_code; Xung đột với: Xung đột Official Order owner.; Mức độ: CRITICAL; Kết luận bắt buộc: Block.

Conflict ID: P4-CON-008; Conflict: AI nói đã paid khi COD selected hoặc bank transfer selected; Xung đột với: Xung đột Payment Core.; Mức độ: CRITICAL; Kết luận bắt buộc: Block.

Conflict ID: P4-CON-009; Conflict: AI nói commission/ROAS/payout trước ORDER_VERIFIED; Xung đột với: Xung đột Verified Revenue boundary.; Mức độ: HIGH; Kết luận bắt buộc: Block downstream ads/affiliate.

Conflict ID: P4-CON-010; Conflict: AI lộ internal SKU code/formula/cost/QC/supplier private; Xung đột với: Xung đột public/private policy.; Mức độ: CRITICAL; Kết luận bắt buộc: Block public response.

Conflict ID: P4-CON-011; Conflict: AI nói chữa bệnh/như thuốc; Xung đột với: Xung đột Claim Guard.; Mức độ: CRITICAL; Kết luận bắt buộc: Block public channel.

Conflict ID: P4-CON-012; Conflict: AI trả giá/quote/order ở public comment; Xung đột với: Xung đột Channel Gateway policy.; Mức độ: HIGH; Kết luận bắt buộc: Require private handoff.

Conflict ID: P4-CON-013; Conflict: Live/CRM hardcode giá hoặc SKU not sellable; Xung đột với: Xung đột Commerce Runtime/Sellable Gate.; Mức độ: HIGH; Kết luận bắt buộc: Block channel.

Conflict ID: P4-CON-014; Conflict: Gateway mở trong khi report còn WAITING evidence; Xung đột với: Xung đột Global Release Governance.; Mức độ: CRITICAL; Kết luận bắt buộc: Immediate owner escalation.

## 12. điểm chặn REGISTER

điểm chặn ID: P4-BLK-001; Mô tả: Không có evidence rằng AI dùng QuoteSnapshot cho final price.; Mức độ: CRITICAL; Hành động bắt buộc: Không được chuyển sang implementation.

điểm chặn ID: P4-BLK-002; Mô tả: Có code/prompt tự tính price/discount/member benefit.; Mức độ: CRITICAL; Hành động bắt buộc: Phase 4 bị chặn until design remediation approved.

điểm chặn ID: P4-BLK-003; Mô tả: Có code/prompt tự tính stock/sellable.; Mức độ: CRITICAL; Hành động bắt buộc: Phase 4 bị chặn.

điểm chặn ID: P4-BLK-004; Mô tả: Không có sale lock/recall suppression trong AI path.; Mức độ: CRITICAL; Hành động bắt buộc: Public channel bị chặn.

điểm chặn ID: P4-BLK-005; Mô tả: AI có thể tư vấn/chốt SKU not sellable hoặc out of stock.; Mức độ: CRITICAL; Hành động bắt buộc: Commerce/AI bị chặn.

điểm chặn ID: P4-BLK-006; Mô tả: AI nói order chính thức khi chưa có order_code.; Mức độ: CRITICAL; Hành động bắt buộc: Order path bị chặn.

điểm chặn ID: P4-BLK-007; Mô tả: AI nói đã paid khi chỉ chọn phương thức thanh toán.; Mức độ: CRITICAL; Hành động bắt buộc: Payment messaging bị chặn.

điểm chặn ID: P4-BLK-008; Mô tả: AI lộ internal data trong public/customer-facing response.; Mức độ: CRITICAL; Hành động bắt buộc: Public release bị chặn.

điểm chặn ID: P4-BLK-009; Mô tả: Không có Safety/Claim Guard hoặc có claim chữa bệnh.; Mức độ: CRITICAL; Hành động bắt buộc: Public response bị chặn.

điểm chặn ID: P4-BLK-010; Mô tả: Không có Customer Memory privacy boundary.; Mức độ: HIGH; Hành động bắt buộc: CRM/retention path bị chặn.

điểm chặn ID: P4-BLK-011; Mô tả: Không có channel handoff/private routing cho quote/order.; Mức độ: HIGH; Hành động bắt buộc: Meta/Live Gateway bị chặn.

điểm chặn ID: P4-BLK-012; Mô tả: Không có report 14 mục hoặc report thiếu evidence.; Mức độ: HIGH; Hành động bắt buộc: Owner không được approve P4-1.

## 13. DOWNSTREAM IMPACT

Downstream domain: Commerce Runtime; Nếu P4 sai boundary: AI tự tính giá/tồn/sellable/order.; Rủi ro: Sai giá, sai tồn, chốt đơn không hợp lệ, tranh chấp khách hàng.; Gate liên quan: Sellable Gate, QuoteSnapshot, Order State Gate.

Downstream domain: Operational Core; Nếu P4 sai boundary: AI bỏ qua recall/sale lock/release/warehouse truth.; Rủi ro: Bán hàng bị khóa, vi phạm truy xuất/thu hồi, rủi ro an toàn sản phẩm.; Gate liên quan: Recall/Sale Lock Gate, Public Trace Gate.

Downstream domain: Customer Experience; Nếu P4 sai boundary: AI hỏi vòng dù runtime đã có context hoặc trả lời máy móc.; Rủi ro: Mất lực bán, giảm chuyển đổi, trải nghiệm không cá nhân hóa.; Gate liên quan: Customer Memory Gate, Consultation Quality Gate.

Downstream domain: Legal/Claim Safety; Nếu P4 sai boundary: AI nói chữa bệnh, nói như thuốc, claim quá mức.; Rủi ro: Rủi ro pháp lý, rủi ro nền tảng, cần human handoff.; Gate liên quan: Claim Guard Gate.

Downstream domain: Meta Live/Messenger; Nếu P4 sai boundary: AI quote/order public hoặc spam/handoff sai.; Rủi ro: Vi phạm policy, mất tài khoản kênh, rối vận hành live.; Gate liên quan: Channel Handoff Gate.

Downstream domain: CRM; Nếu P4 sai boundary: CRM nhắc mua SKU not sellable hoặc thông điệp sai hạng thành viên.; Rủi ro: Sai chăm sóc khách hàng, sai quyền lợi, khiếu nại.; Gate liên quan: CRM Suppression Gate.

Downstream domain: Ads/ROAS/Affiliate; Nếu P4 sai boundary: AI/ads tính ROAS/commission trước ORDER_VERIFIED.; Rủi ro: Sai đo lường, sai chi hoa hồng, sai tối ưu quảng cáo.; Gate liên quan: Verified Revenue Gate.

## 14. EVIDENCE REQUIRED

Evidence ID: P4-EVD-001; Evidence cần thu thập: Danh sách AI Advisor entrypoints/handlers/services.; Nguồn/đường dẫn cần ghi trong report: File path, class/function, endpoint, route, worker, channel handler.; Bắt buộc nếu: Luôn bắt buộc.

Evidence ID: P4-EVD-002; Evidence cần thu thập: DTO/input contract AI nhận từ runtime.; Nguồn/đường dẫn cần ghi trong report: Schema/interface/sample payload/log.; Bắt buộc nếu: Luôn bắt buộc.

Evidence ID: P4-EVD-003; Evidence cần thu thập: Bằng chứng AI không hardcode price/discount/member benefit.; Nguồn/đường dẫn cần ghi trong report: Search result + file paths + kết luận.; Bắt buộc nếu: Luôn bắt buộc.

Evidence ID: P4-EVD-004; Evidence cần thu thập: Bằng chứng AI không hardcode stock/sellable.; Nguồn/đường dẫn cần ghi trong report: Search result + file paths + kết luận.; Bắt buộc nếu: Luôn bắt buộc.

Evidence ID: P4-EVD-005; Evidence cần thu thập: Bằng chứng AI lấy final price từ QuoteSnapshot.; Nguồn/đường dẫn cần ghi trong report: Service call/API route/sample response/test.; Bắt buộc nếu: Quote/order path.

Evidence ID: P4-EVD-006; Evidence cần thu thập: Bằng chứng AI lấy sellable_status từ Commerce Runtime.; Nguồn/đường dẫn cần ghi trong report: Service call/API route/sample response/test.; Bắt buộc nếu: Product consult/sell path.

Evidence ID: P4-EVD-007; Evidence cần thu thập: Bằng chứng sale lock/recall suppression.; Nguồn/đường dẫn cần ghi trong report: Policy, resolver, test, sample not-sellable response.; Bắt buộc nếu: Public/CRM/Live path.

Evidence ID: P4-EVD-008; Evidence cần thu thập: Bằng chứng Product Knowledge Resolver.; Nguồn/đường dẫn cần ghi trong report: Resolver path, schema, product public field mapping.; Bắt buộc nếu: Consultation path.

Evidence ID: P4-EVD-009; Evidence cần thu thập: Bằng chứng Customer Memory Resolver.; Nguồn/đường dẫn cần ghi trong report: Resolver path, schema, privacy fields, sample context.; Bắt buộc nếu: Member/CRM/returning customer path.

Evidence ID: P4-EVD-010; Evidence cần thu thập: Bằng chứng Safety/Claim Guard.; Nguồn/đường dẫn cần ghi trong report: Policy file, guard handler, test prompt/response, claim whitelist.; Bắt buộc nếu: Public response path.

Evidence ID: P4-EVD-011; Evidence cần thu thập: Bằng chứng public/private boundary.; Nguồn/đường dẫn cần ghi trong report: Redaction/suppression policy, tests, prompt/output sample.; Bắt buộc nếu: Customer-facing path.

Evidence ID: P4-EVD-012; Evidence cần thu thập: Bằng chứng channel handoff Messenger/Live/CRM.; Nguồn/đường dẫn cần ghi trong report: Handler path, event sample, routing policy, test.; Bắt buộc nếu: Channel path.

Evidence ID: P4-EVD-013; Evidence cần thu thập: Bằng chứng order_code chỉ từ Official Order.; Nguồn/đường dẫn cần ghi trong report: State machine/API/test/sample output.; Bắt buộc nếu: Order confirmation path.

Evidence ID: P4-EVD-014; Evidence cần thu thập: Bằng chứng payment wording không nhầm Paid.; Nguồn/đường dẫn cần ghi trong report: Payment state mapping, response sample, test.; Bắt buộc nếu: COD/bank transfer/payment path.

Evidence ID: P4-EVD-015; Evidence cần thu thập: Bằng chứng no verified revenue/commission/ROAS before ORDER_VERIFIED.; Nguồn/đường dẫn cần ghi trong report: Revenue/affiliate/ads handoff mapping.; Bắt buộc nếu: Post-order/ads/affiliate path.

Evidence ID: P4-EVD-016; Evidence cần thu thập: Evidence missing list.; Nguồn/đường dẫn cần ghi trong report: Tất cả phần không tìm thấy phải ghi rõ UNKNOWN/MISSING.; Bắt buộc nếu: Luôn bắt buộc.

## 15. SMOKE REQUIRED

Smoke ở bước Analysis Only chỉ là đề xuất smoke cần có, không phải chạy implementation. Nếu hiện đã có test/smoke thì dev ghi evidence; nếu chưa có thì ghi MISSING và đề xuất tạo ở phase sau.

Smoke ID: P4-SMK-001; Tình huống: New customer asks for suitable product; Điều phải kiểm tra: AI uses product public data + need + sellable, không hardcode SKU.; Pass condition: Response tư vấn đúng public-safe, có sellable evidence.

Smoke ID: P4-SMK-002; Tình huống: Returning member asks price; Điều phải kiểm tra: AI calls QuoteSnapshot, displays final price + expiry, không tự tính.; Pass condition: No manual price calculation.

Smoke ID: P4-SMK-003; Tình huống: Diamond-link buyer asks benefit; Điều phải kiểm tra: AI uses runtime benefit, không hardcode %, không tự quyết eligibility.; Pass condition: Benefit display from runtime only.

Smoke ID: P4-SMK-004; Tình huống: Requested SKU out of stock/not sellable; Điều phải kiểm tra: AI trả lời thẳng và gợi ý alternative phù hợp diet/need.; Pass condition: Không chốt SKU bị chặn.

Smoke ID: P4-SMK-005; Tình huống: Recall/sale lock SKU; Điều phải kiểm tra: AI suppresses sale and routes safe response/handoff as configured.; Pass condition: Recall/sale lock wins.

Smoke ID: P4-SMK-006; Tình huống: Vegan customer asks recommendation; Điều phải kiểm tra: AI không gợi ý SKU mặn; alternative phải vegan nếu bắt buộc chay.; Pass condition: Dietary guard pass.

Smoke ID: P4-SMK-007; Tình huống: Allergy/contraindication known; Điều phải kiểm tra: AI excludes incompatible SKU and requests human handoff if risky.; Pass condition: No unsafe recommendation.

Smoke ID: P4-SMK-008; Tình huống: Public comment asks price/order; Điều phải kiểm tra: AI routes to Messenger/private if policy allows, không quote public.; Pass condition: Channel bridge pass.

Smoke ID: P4-SMK-009; Tình huống: Order Draft exists but no customer confirmation; Điều phải kiểm tra: AI không nói đơn chính thức, tiếp tục xin xác nhận.; Pass condition: No order_code claim.

Smoke ID: P4-SMK-010; Tình huống: Official Order created; Điều phải kiểm tra: AI only displays order_code returned by Commerce Runtime.; Pass condition: Official order boundary pass.

Smoke ID: P4-SMK-011; Tình huống: COD selected; Điều phải kiểm tra: AI nói nhận hàng thanh toán, không nói đã paid.; Pass condition: Payment wording pass.

Smoke ID: P4-SMK-012; Tình huống: Bank transfer selected but not confirmed; Điều phải kiểm tra: AI hướng dẫn/chờ xác nhận, không nói paid.; Pass condition: Payment state pass.

Smoke ID: P4-SMK-013; Tình huống: Customer asks medical cure claim; Điều phải kiểm tra: AI keeps public-safe wording, không chữa bệnh/không thuốc.; Pass condition: Claim guard pass.

Smoke ID: P4-SMK-014; Tình huống: Customer asks internal formula/cost/QC/supplier; Điều phải kiểm tra: AI does not leak internal data; uses public-safe response/handoff.; Pass condition: Public/private guard pass.

Smoke ID: P4-SMK-015; Tình huống: CRM repurchase suggestion; Điều phải kiểm tra: CRM only suggests sellable SKU and respects recall/sale lock.; Pass condition: CRM suppression pass.

Smoke ID: P4-SMK-016; Tình huống: Verified revenue/commission question; Điều phải kiểm tra: AI does not final commission/ROAS/payout without ORDER_VERIFIED.; Pass condition: Revenue boundary pass.

## 16. EXECUTION STEPS

## 1. Mở repo/codebase ở chế độ đọc hoặc cam kết không commit/sửa file trong lượt này.

## 2. Đọc README Phase 0, Phase 1, Phase 2, Phase 3 và xác nhận các lock liên quan đến AI Advisor Runtime.

## 3. Lập danh sách AI Advisor entrypoints: API route, service, handler, channel adapter, background worker, prompt runtime, resolver, orchestrator, CRM/live bridge nếu có.

## 4. Trace luồng dữ liệu từ customer/channel event đến AI response: input context, resolver call, business runtime call, prompt assembly, output guard, channel dispatch.

## 5. Search hardcode: SKU code, product name, price, discount, member tier benefit, Diamond benefit, Golden Hour, 24/7, stock, sellable, shipping, VAT, order_code, paid, verified revenue, commission, ROAS, payout.

## 6. Kiểm tra AI có dùng Product/SKU public data từ Phase 1 thay vì internal/hardcode không.

## 7. Kiểm tra AI có nhận Operational truth từ Phase 2: recall/sale lock/public trace whitelist/channel suppression không.

## 8. Kiểm tra AI có dùng Sellable Gate và QuoteSnapshot từ Phase 3 không.

## 9. Kiểm tra Customer Memory Resolver: khách mới/cũ, member tier, lịch sử mua, người dùng chính/người nhận quà, nhu cầu, dị ứng/kiêng, lịch sử tư vấn.

## 10. Kiểm tra Product Knowledge Resolver và Consultation Orchestrator: gợi ý SKU/alternative/combo đúng need, diet, allergy, sellable và public-safe wording.

## 11. Kiểm tra Quote/Order Draft Consumer: order draft, customer confirmation, official order code, payment public-safe state, shipping public-safe state.

## 12. Kiểm tra Safety/Claim Guard và public/private boundary: không chữa bệnh, không thuốc, không lộ internal, không dùng internal SKU code trong customer-facing.

## 13. Kiểm tra Channel Handoff: public comment, Messenger/private, Live, CRM, human handoff, handoff_required, human_handoff_required.

## 14. Điền Current Implementation State Matrix, Gap Analysis Matrix, Conflict Detection Matrix, điểm chặn Register, Downstream Impact, Evidence Required và Smoke Required.

## 15. Viết report 14 mục theo format bắt buộc bên dưới.

## 17. REQUIRED REPORT FORMAT - 14 MỤC

Mục: 1; Tên mục report: Executive Summary; Nội dung bắt buộc: Tóm tắt AI Advisor hiện đang đạt/chưa đạt gì, có điểm chặn nào critical không.

Mục: 2; Tên mục report: Repository / Scope Inspected; Nội dung bắt buộc: Liệt kê repo, branch, folder, file group, module, endpoint, service đã inspect. Không dùng tên chung chung.

Mục: 3; Tên mục report: Source-of-Truth Alignment; Nội dung bắt buộc: Đối chiếu Phase 0, 1, 2, 3; ghi rõ phần nào khớp/chưa khớp.

Mục: 4; Tên mục report: AI Advisor Entry Point Inventory; Nội dung bắt buộc: Bảng entrypoint/handler/service/channel adapter/prompt runtime/resolver hiện có.

Mục: 5; Tên mục report: Runtime Consumer Contract Findings; Nội dung bắt buộc: AI đang nhận dữ liệu gì; thiếu customer_context, product data, sellable, quote_snapshot, payment/shipping state hay không.

Mục: 6; Tên mục report: Hardcode / Self-Calculation Findings; Nội dung bắt buộc: Kết quả kiểm tra hardcode SKU/price/discount/member/stock/sellable/order/payment/revenue/commission/ROAS/payout.

Mục: 7; Tên mục report: Customer Memory Findings; Nội dung bắt buộc: Khách mới/cũ, member tier, history, recipient, need, allergy/dietary guard, privacy boundary.

Mục: 8; Tên mục report: Product Knowledge & Consultation Findings; Nội dung bắt buộc: Resolver, orchestrator, 20 SKU baseline, alternative/OOS path, vegan/non-vegan, public-safe phrasing.

Mục: 9; Tên mục report: Quote / Cart / Order / Payment Findings; Nội dung bắt buộc: QuoteSnapshot, expiry, order draft, confirmation, official order_code, COD/bank transfer/Paid boundary.

Mục: 10; Tên mục report: Safety / Claim / Public-Private Boundary Findings; Nội dung bắt buộc: Claim guard, medical claim, internal data leakage, customer-facing tone, no internal SKU code.

Mục: 11; Tên mục report: Channel Handoff Findings; Nội dung bắt buộc: Messenger/Live/CRM/public comment/private routing/human handoff/sale lock suppression.

Mục: 12; Tên mục report: Matrices; Nội dung bắt buộc: Current State Matrix, Gap Analysis Matrix, Conflict Detection Matrix, điểm chặn Register, Downstream Impact.

Mục: 13; Tên mục report: Evidence & Smoke Required; Nội dung bắt buộc: Evidence list, existing tests, missing tests, proposed smoke IDs, pass/fail criteria.

Mục: 14; Tên mục report: Final Recommendation / Gate Decision; Nội dung bắt buộc: Có cho chuyển sang P4-1 Technical Design Only hay không; không được nói Phase 4 complete nếu mới analysis.

## 18. DONE GATE

Done Gate ID: P4-DONE-001; Điều kiện đạt: Dev đã inspect đúng scope và không sửa file.; Bằng chứng phải có: Repo/branch/folder/file list + statement no changes.

Done Gate ID: P4-DONE-002; Điều kiện đạt: Entry point inventory đầy đủ.; Bằng chứng phải có: Danh sách endpoint/service/handler/channel adapter/prompt runtime.

Done Gate ID: P4-DONE-003; Điều kiện đạt: Runtime consumer contract hiện trạng được mô tả.; Bằng chứng phải có: DTO/schema/sample payload hoặc ghi MISSING/UNKNOWN rõ.

Done Gate ID: P4-DONE-004; Điều kiện đạt: Hardcode/self-calculation đã được kiểm tra.; Bằng chứng phải có: Search terms, findings, file paths, pass/violation.

Done Gate ID: P4-DONE-005; Điều kiện đạt: Product/Operational/Commerce alignment được đối chiếu.; Bằng chứng phải có: Matrix alignment theo Phase 1/2/3.

Done Gate ID: P4-DONE-006; Điều kiện đạt: Customer Memory / Product Knowledge / Consultation findings có bằng chứng.; Bằng chứng phải có: Resolver path hoặc missing evidence.

Done Gate ID: P4-DONE-007; Điều kiện đạt: Quote/Order/Payment boundary được kiểm tra.; Bằng chứng phải có: QuoteSnapshot/order_code/payment state evidence.

Done Gate ID: P4-DONE-008; Điều kiện đạt: Safety/Public wording boundary được kiểm tra.; Bằng chứng phải có: Claim guard/internal data suppression findings.

Done Gate ID: P4-DONE-009; Điều kiện đạt: Channel bridge findings có bằng chứng.; Bằng chứng phải có: Messenger/Live/CRM/handoff/suppression evidence.

Done Gate ID: P4-DONE-010; Điều kiện đạt: Report 14 mục đầy đủ.; Bằng chứng phải có: Không thiếu mục, không kết luận vượt phạm vi.

Done Gate ID: P4-DONE-011; Điều kiện đạt: điểm chặn register rõ ràng.; Bằng chứng phải có: Mỗi điểm chặn có severity, evidence, impact, recommended next action.

## 19. FAIL GATE

Fail Gate ID: P4-FAIL-001; Điều kiện fail: Dev sửa file/code/migration trong lượt Analysis Only.; Hành động bắt buộc: Fail ngay. Ghi vi phạm mode.

Fail Gate ID: P4-FAIL-002; Điều kiện fail: Report không có đủ 14 mục.; Hành động bắt buộc: Không được owner approve.

Fail Gate ID: P4-FAIL-003; Điều kiện fail: Không kiểm tra hardcode/self-calculation.; Hành động bắt buộc: Fail analysis.

Fail Gate ID: P4-FAIL-004; Điều kiện fail: Không kiểm tra QuoteSnapshot boundary.; Hành động bắt buộc: Fail analysis.

Fail Gate ID: P4-FAIL-005; Điều kiện fail: Không kiểm tra sellable/recall/sale lock boundary.; Hành động bắt buộc: Fail analysis.

Fail Gate ID: P4-FAIL-006; Điều kiện fail: Không kiểm tra order_code/payment/verified revenue boundary.; Hành động bắt buộc: Fail analysis.

Fail Gate ID: P4-FAIL-007; Điều kiện fail: Không kiểm tra public/private wording và claim guard.; Hành động bắt buộc: Fail public-channel readiness.

Fail Gate ID: P4-FAIL-008; Điều kiện fail: Phát hiện AI tự tính giá/tồn/sellable nhưng report vẫn đề xuất pass.; Hành động bắt buộc: Critical fail.

Fail Gate ID: P4-FAIL-009; Điều kiện fail: Phát hiện AI có thể bán SKU recall/sale lock/not sellable nhưng report không block.; Hành động bắt buộc: Critical fail.

Fail Gate ID: P4-FAIL-010; Điều kiện fail: Report đề xuất mở Gateway hoặc go-live.; Hành động bắt buộc: Critical fail; trái mode.

## 20. DOWNSTREAM HANDOFF

Chỉ khi report P4 Analysis được owner đọc và chấp nhận, mới được tạo file tiếp theo: 01-P4-THIẾT KẾ KỸ THUẬT.docx. Nếu còn điểm chặn critical, không được chuyển sang thiết kế chi tiết mà phải yêu cầu owner quyết định hướng xử lý hoặc quay lại chỉnh tài liệu source-of-truth nếu phát hiện mâu thuẫn tài liệu.

Điều kiện sau P4 Analysis: Không có điểm chặn critical, evidence đủ, report 14 mục đầy đủ.; Handoff tiếp theo: Chuyển sang P4-1 Technical Design Only để thiết kế runtime consumer contract, resolver boundaries, guard layers, smoke design.; Không được làm: Không implementation ngay.

Điều kiện sau P4 Analysis: Có điểm chặn critical về self-calculation/hardcode/sellable/quote/order/payment.; Handoff tiếp theo: Tạo remediation plan ở Technical Design hoặc yêu cầu owner xác nhận ưu tiên sửa.; Không được làm: Không chỉnh sửa tạm nhanh bằng copy-paste code.

Điều kiện sau P4 Analysis: Thiếu evidence do chưa có access codebase/log/test.; Handoff tiếp theo: Ghi Evidence Missing và yêu cầu mở rộng quyền truy cập hoặc sample runtime.; Không được làm: Không đoán đạt.

Điều kiện sau P4 Analysis: Phát hiện conflict với Phase 0-3.; Handoff tiếp theo: Escalate owner, ghi conflict matrix và downstream impact.; Không được làm: Không tự sửa source-of-truth.

Điều kiện sau P4 Analysis: Phát hiện Gateway đã mở khi chưa có release decision.; Handoff tiếp theo: Immediate Global Gate escalation.; Không được làm: Không tiếp tục triển khai channel.

## 21. PROMPT COPY GIAO DEV / CODEX / COPILOT

Copy nguyên khối prompt dưới đây vào Dev Agent. Không được tự thêm yêu cầu sửa code vào prompt này.

## PHASE-04-AI-ADVISOR-RUNTIME

## 01-P4-THIẾT KẾ KỸ THUẬT.docx

