# P4 - README HANDOFF INDEX

## Update 2026-05-22 - Plan tiep Phase 4

Dung thu muc chinh thuc: `docs/documents/4. phase/phase-4/`.

Khong dung `docs/documents/4_phase/` lam source-of-truth. Neu phat hien folder nay trong repo, xem la duplicate/deprecated va khong giao dev/Codex/Copilot chay tu do.

Phase 4 chi duoc bat dau khi Phase 3 co evidence toi thieu cho QuoteSnapshot va Order Draft boundary. Neu chua du, ghi blocker `P4-ENTRY-BLOCKED-BY-P3-COMMERCE-DEPENDENCY`.

Global Gateway tiep tuc `BLOCKED` trong toan Phase 4 cho den TECH-10/global release review rieng. Phase 4 smoke pass khong dong nghia release-ready.

## Update 2026-06-05 - P4 Practical Runtime Lock Addendum

Đã bổ sung `10-P4-ADDENDUM-AI-ADVISOR-PRACTICAL-RUNTIME-LOCK.md` làm bản khóa thực chiến hợp nhất cho AI bán hàng, CRM vòng đời, member lifecycle, quote/order/payment/shipping và UX hội thoại.

Addendum này phải được đọc trước mọi correction/implementation sau của P4-2A đến P4-2F. Nó không thay thế các file 00-08, không mở Gateway, không gọi Completion Decision và không gọi Production Readiness.

Nếu rule trong addendum chưa có contract/resolver/guard/smoke/evidence tương ứng, ghi blocker `P4-PRACTICAL-GAP-*` và quay lại file P4 tương ứng, không để dev tự suy luận nghiệp vụ.

Nguyen tac khoa:

- AI chi consume Product Knowledge approved/public-safe.
- AI chi hien thi gia cuoi tu Commerce QuoteSnapshot.
- AI chi handoff Order Draft tu Commerce, khong tu tao order/order_code.
- AI chi noi payment status theo runtime hop le, khong tu xac nhan PAID.
- AI khong public private/internal data.
- Runtime unavailable thi fail-safe.
- Final Response Guard la chot cuoi truoc khi downstream Gateway/Live/CRM dung.

Thu tu thuc thi tiep theo:

0. `10-P4-ADDENDUM-AI-ADVISOR-PRACTICAL-RUNTIME-LOCK.md`: đọc bắt buộc trước khi chạy/correction/implementation các file 00-08 nếu phạm vi chạm AI bán hàng thực chiến, CRM, member lifecycle, quote/order/payment/shipping hoặc UX hội thoại.
1. `00-P4-ANALYSIS-ONLY.md`: chi inspect backend/runtime hien co, khong sua file.
2. `01-P4-1-TECHNICAL-DESIGN-ONLY.md`: khoa runtime consumer contract, API/DTO/event/state neu can doi; moi API/DTO change phai bao frontend repo cap nhat.
3. `02-P4-2A-RUNTIME-CONSUMER-CONTRACT.md`: AIA-BLG-001, khoa consumer boundary cho Product/Commerce/Payment/Shipping/Suppression.
4. `03-P4-2B-CUSTOMER-MEMORY-CONTEXT-RESOLVER.md`: AIA-BLG-003, customer memory chi dung public/allowed runtime context.
5. `04-P4-2C-PRODUCT-KNOWLEDGE-CONSULTATION-ORCHESTRATOR.md`: AIA-BLG-002, Product Knowledge + Claim Guard khong dung claim chua duyet.
6. `05-P4-2D-QUOTE-ORDER-DRAFT-CONFIRMATION-CONSUMER.md`: AIA-BLG-004/005, QuoteSnapshot consumption va Order Draft handoff.
7. `06-P4-2E-SAFETY-PUBLIC-WORDING-CLAIM-GUARD.md`: AIA-BLG-006/007, public wording, privacy, private/internal data guard.
8. `07-P4-2F-CHANNEL-HANDOFF-MESSENGER-LIVE-CRM-BRIDGE.md`: AIA-BLG-008/009, runtime fail-safe va channel handoff boundary.
9. `08-P4-2G-SMOKE-EVIDENCE-REPORT.md`: AIA-BLG-010, nop report 14 muc, evidence submitted only, owner review.

Smoke toi thieu phai cover:

- Product Knowledge chua approved bi chan.
- Claim chua duyet bi chan.
- Hoi gia phai route Commerce QuoteSnapshot.
- AI khong tu order/payment.
- Private/internal data khong public.
- Runtime unavailable thi fail-safe.
- Moi response phai qua Final Response Guard.

## Nguon Bat Buoc

File nay duoc rewrite cho PHASE theo ranh gioi MASTER/PACK/TECH hien hanh.

- PHASE-04 file package tu 00 den 08.
- MASTER release va go-live control.
- PACK-05 AI Advisor Channel va PACK-10 Evidence Gateway.
- TECH-13 Codex / Copilot execution handoff report template.

## Noi Dung Rewrite

README-PHASE-04-HANDOFF-INDEX: Đóng gói toàn phase: danh mục file, rule khóa, dependency, smoke summary, evidence index, điểm chặn, gateway status.

Owner / QA review: Review report 14 mục và evidence; quyết định evidence accepted/rejected/WAITING.

Gateway review future: Chỉ được đưa vào Global Gate review nếu owner accepted và không còn critical điểm chặn.

Correction prompts: Nếu fail, tạo prompt sửa đúng phạm vi file lỗi; không chỉnh sửa tạm lan sang module khác.

Future IVR / Meta Gateway: Nếu cần, chuyển sang phase riêng; không triển khai trong 2G.

## 19. PROMPT COPY GIAO DEV / CODEX / COPILOT

Copy nguyên prompt dưới đây cho dev/Codex/Copilot khi chạy smoke/evidence/report cho Phase 4. Prompt này không cho phép copy-paste code rời rạc và không cho phép sửa code trong smoke mode.

## PROMPT-P4-2G - AI ADVISOR RUNTIME / SMOKE / EVIDENCE / REPORT / PHASE 4 LOCAL READINESS HANDOFF

## MODE: SMOKE / EVIDENCE / REPORT ONLY - DO NOT MODIFY FILES

You are working on Ginsengfood PHASE-04 AI Advisor Runtime.

Do not build by copy-pasting code from AI. Inspect the real codebase, architecture, database, APIs, tests, logs and runtime contracts. In this prompt, do not modify code, do not run migrations, do not seed production, do not open Gateway.

Objective:

- Verify that AI Advisor is a runtime consumer/orchestrator only.

- Verify AI does not self-compute price, stock, sellable, discount, member benefit, Diamond benefit, shipping fee, VAT/tax, order_code, paid, verified revenue, commission, ROAS or payout.

- Verify Product Consultation, Customer Memory, Quote/Order Consumer, Safety Guard and Channel Handoff behave correctly.

- Collect evidence and produce a 14-section report.

Run smoke tests:

- Execute P4-GSMK-001 to P4-GSMK-022.

- For every smoke, capture input, expected result, actual result, status and evidence reference.

- Mask secrets, tokens, customer PII, payment data and internal sensitive data.

Mandatory evidence:

- Commit hash, build version, environment, migration/seed/config version.

- Runtime payload samples with PII masked.

- Test logs, screenshots, audit logs, correlation/idempotency logs and suppression evidence.

- Quote/order/payment/shipping evidence proving correct boundaries.

Fail immediately if:

- AI self-computes business truth.

- AI sells not-sellable/recall/sale-lock SKU.

- AI says official order without order_code.

- AI says Paid when payment is only selected.

- AI leaks internal data or makes medical treatment claims.

- CRM/Live/Public routes leak private data or bypass opt-out/frequency cap/policy.

- Recall/Sale Lock does not suppress AI/Ads/Live/CRM/Gateway/IVR.

Required report: exactly 14 sections as defined in 08-P4-2G document.

## PHASE-04-AI-ADVISOR-RUNTIME

## README-PHASE-04-HANDOFF-INDEX

## GINSENGFOOD / SSAVIGROUP - AI ADVISOR RUNTIME HANDOFF CONTROL INDEX

README này là tài liệu điều phối toàn PHASE 4. Dev/Codex/Copilot phải dùng file này để biết thứ tự chạy prompt, phạm vi từng file, bằng chứng cần nộp và điều kiện chuyển bước. README không phải prompt sửa code, không phải Completion Decision và không mở Global Gate.

## PHASE MARKER

Phase: PHASE-04 - AI ADVISOR RUNTIME

README: README-PHASE-04-HANDOFF-INDEX.docx

Vai trò: Bản đóng gói điều phối toàn phase, dùng để định hướng dev/Codex/Copilot đọc và thực thi đúng thứ tự các file 00 đến 08.

Nguyên tắc trung tâm: AI Advisor là runtime consumer và consultation orchestrator. AI Advisor không phải source-of-truth của product, operational, commerce, payment, revenue, commission hoặc Gateway.

## 1. HEADER

PHASE 4 khóa lớp AI Advisor Runtime sau khi PHASE 0, PHASE 1, PHASE 2 và PHASE 3 đã xác lập lần lượt Foundation truth, Product/SKU/Recipe truth, Operational truth và Commerce truth. AI Advisor trong phase này chỉ được tiêu thụ runtime từ các lớp trước để tư vấn, hiển thị thông tin public-safe, dẫn khách sang quote/order draft và phối hợp channel. AI không được tự tạo business truth.

Không viết hệ thống bằng copy-paste code từ AI. Mỗi prompt chỉ là handoff để dev inspect codebase thật, database thật, API thật, seed thật, migration thật và test thật.

Không đảo thứ tự phase. AI Advisor chỉ được hoạt động trên truth đã được các phase trước cung cấp qua contract/runtime.

Không để AI tự tính giá, tồn, quyền lợi thành viên, sellable, order_code, paid, verified revenue, commission, ROAS hoặc payout.

Không dùng nội dung customer-facing để lộ khái niệm kỹ thuật như "hệ thống", mã SKU nội bộ, công thức, cost, QC note, trace nội bộ hoặc supplier private.

Không mở Gateway từ PHASE 4. Gateway chỉ được xét ở hồ sơ release/global review riêng.

## 2. PHASE 4 FILE PACKAGE

Thư mục PHASE 4 phải được đóng gói theo cấu trúc dưới đây. README này dùng để điều phối, còn từng file 00-08 là prompt/handoff chuyên biệt.

## PHASE-04-AI-ADVISOR-RUNTIME/

├── README-PHASE-04-HANDOFF-INDEX.docx

├── 00-P4-ANALYSIS-ONLY.docx

├── 01-P4-1-TECHNICAL-DESIGN-ONLY.docx

├── 02-P4-2A-RUNTIME-CONSUMER-CONTRACT.docx

├── 03-P4-2B-CUSTOMER-MEMORY-CONTEXT-RESOLVER.docx

├── 04-P4-2C-PRODUCT-KNOWLEDGE-CONSULTATION-ORCHESTRATOR.docx

├── 05-P4-2D-QUOTE-ORDER-DRAFT-CONFIRMATION-CONSUMER.docx

├── 06-P4-2E-SAFETY-PUBLIC-WORDING-CLAIM-GUARD.docx

├── 07-P4-2F-CHANNEL-HANDOFF-MESSENGER-LIVE-CRM-BRIDGE.docx

└── 08-P4-2G-SMOKE-EVIDENCE-REPORT.docx

## 3. SOURCE-OF-TRUTH CHAIN

Lớp truth: Foundation truth; Phase owner: PHASE 0; AI Advisor được làm gì: Consume actor context, RBAC result, audit/correlation/idempotency/evidence status nếu được expose.; AI Advisor bị cấm làm gì: Không bypass permission, không tự tạo actor, không tự ghi evidence accepted, không tự override high-risk command.

Lớp truth: Product/SKU/Recipe truth; Phase owner: PHASE 1; AI Advisor được làm gì: Consume product public data, product knowledge, active public view, dietary/public-safe fields.; AI Advisor bị cấm làm gì: Không tự active product/SKU/recipe, không hardcode SKU list, không suy luận formula hoặc internal recipe.

Lớp truth: Operational truth; Phase owner: PHASE 2; AI Advisor được làm gì: Consume release/sale lock/recall/trace-safe signals và public-safe block reason.; AI Advisor bị cấm làm gì: Không tự set raw lot ready, batch released, warehouse received, inventory available, trace public-valid hoặc recall closed.

Lớp truth: Commerce truth; Phase owner: PHASE 3; AI Advisor được làm gì: Consume sellable status, QuoteSnapshot, cart/order draft, customer confirmation, official order state, payment/shipping public-safe state.; AI Advisor bị cấm làm gì: Không tự tính sellable, final price, discount, shipping, tax, order_code, paid, verified revenue, commission, ROAS hoặc payout.

Lớp truth: AI/Channel consumer; Phase owner: PHASE 4; AI Advisor được làm gì: Tư vấn, diễn giải, dẫn khách, handoff Messenger/Live/CRM, hiển thị quote/order draft theo runtime.; AI Advisor bị cấm làm gì: Không trở thành owner của bất kỳ business truth nào.

Lớp truth: Gateway/Release; Phase owner: Global review; AI Advisor được làm gì: Nộp evidence, smoke report, điểm chặn, owner decision request.; AI Advisor bị cấm làm gì: Không tự mở Gateway, không tự gọi Production Readiness hoặc Go-live Decision.

## 4. EXECUTION ORDER BẮT BUỘC

## 1. Chạy 00-P4-ANALYSIS-ONLY trước để kiểm tra current state, gap, conflict, điểm chặn và downstream impact. Không sửa file trong bước này.

## 2. Chạy 01-P4-1-TECHNICAL-DESIGN-ONLY để khóa thiết kế kỹ thuật tổng thể. Không implementation nếu design chưa pass review.

## 3. Chạy 02-P4-2A để khóa Runtime Consumer Contract giữa AI Advisor và Phase 1/2/3 runtime.

## 4. Chạy 03-P4-2B để khóa Customer Memory và Context Resolver ở chế độ read-only consumer.

## 5. Chạy 04-P4-2C để khóa Product Knowledge / Consultation Orchestrator và guard tư vấn SKU.

## 6. Chạy 05-P4-2D để khóa QuoteSnapshot / Order Draft / Customer Confirmation consumer.

## 7. Chạy 06-P4-2E để khóa Safety / Public Wording / Claim Guard.

## 8. Chạy 07-P4-2F để khóa Channel Handoff / Messenger / Live / CRM Bridge.

## 9. Chạy 08-P4-2G để smoke, thu evidence và lập report 14 mục. Chỉ sau đó mới được đề xuất owner review.

## 5. PHASE FILE REGISTRY

File: 00-P4-ANALYSIS-ONLY; Mode: ANALYSIS ONLY; Mục tiêu: Inspect AI Advisor current state: runtime usage, hardcode, price/stock/sellable/order/paid/revenue leakage, safety/channel boundary.; Done condition: Có current state matrix, gap matrix, conflict matrix, điểm chặn register, downstream impact, smoke required và report 14 mục.; Fail nếu: Có sửa code, migration, seed, hoặc kết luận pass khi chưa có evidence.

File: 01-P4-1-TECHNICAL-DESIGN-ONLY; Mode: TECHNICAL DESIGN ONLY; Mục tiêu: Khóa target architecture, runtime boundary, owner/consumer split, guard chain và handoff sequence.; Done condition: Thiết kế rõ service/resolver/DTO/boundary/gate/evidence trước implementation.; Fail nếu: Design cho phép AI tự tính truth hoặc trộn source-of-truth.

File: 02-P4-2A-RUNTIME-CONSUMER-CONTRACT; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa contract dữ liệu AI consume từ Phase 1/2/3.; Done condition: Contract có input/output, public/private scope, suppression, fallback, audit/evidence.; Fail nếu: AI tự tính sellable, stock, price, discount, member benefit, order, paid, revenue.

File: 03-P4-2B-CUSTOMER-MEMORY-CONTEXT-RESOLVER; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa customer memory/context read-only để tư vấn đúng người, đúng nhu cầu.; Done condition: Memory không tự quyết quyền lợi giá/tồn/trạng thái đơn; identity guard rõ.; Fail nếu: AI hỏi vòng khi runtime đã có context hoặc tự gán tier/benefit.

File: 04-P4-2C-PRODUCT-KNOWLEDGE-CONSULTATION-ORCHESTRATOR; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa tư vấn sản phẩm theo product knowledge, nhu cầu khách, safety guard và sellable runtime.; Done condition: Không tư vấn SKU not sellable/recall/sale lock/channel suppressed; có alternative logic.; Fail nếu: Tư vấn/chốt SKU bị khóa bán, không phù hợp dietary/allergy hoặc dùng claim sai.

File: 05-P4-2D-QUOTE-ORDER-DRAFT-CONFIRMATION-CONSUMER; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa AI consume QuoteSnapshot, Order Draft, Customer Confirmation và official order state.; Done condition: Không final price nếu chưa có QuoteSnapshot; không nói đơn chính thức nếu chưa có order_code.; Fail nếu: AI tự tính giá cuối, tự tạo order_code, nói paid khi mới chọn payment.

File: 06-P4-2E-SAFETY-PUBLIC-WORDING-CLAIM-GUARD; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa public wording, claim guard, internal data leak guard và tone bán hàng.; Done condition: Không claim chữa bệnh; không lộ internal; vẫn giữ lực bán và public-safe Đông phương.; Fail nếu: Lộ mã SKU/cost/formula/QC/trace internal hoặc dùng disclaimer làm mất lực bán không cần thiết.

File: 07-P4-2F-CHANNEL-HANDOFF-MESSENGER-LIVE-CRM-BRIDGE; Mode: LIMITED IMPLEMENTATION DESIGN; Mục tiêu: Khóa bridge giữa AI Advisor và Messenger/Live/CRM.; Done condition: Public/private boundary đúng; quote/order ở private khi cần; CRM tôn trọng sellable/recall/sale lock.; Fail nếu: Live/CRM hardcode giá, spam, nhắn sai kênh, tư vấn SKU bị lock hoặc mở Gateway.

File: 08-P4-2G-SMOKE-EVIDENCE-REPORT; Mode: SMOKE/EVIDENCE/REPORT; Mục tiêu: Chạy smoke toàn Phase 4 và lập report 14 mục.; Done condition: Evidence đủ, pass/fail rõ, điểm chặn rõ, Gateway vẫn bị chặn.; Fail nếu: Thiếu evidence nhưng ghi pass; gọi Release Readiness/Go-live Decision.

File: 10-P4-ADDENDUM-AI-ADVISOR-PRACTICAL-RUNTIME-LOCK; Mode: GOVERNANCE / CONTRACT / PRACTICAL RULE LOCK; Mục tiêu: Hợp nhất rule thực chiến về bối cảnh thương mại trong ngày, customer/member lifecycle, recommendation 3 trụ, situation routing, business intent routing, quote/order/payment/shipping, CRM message immutable, public wording và typing indicator.; Done condition: Rule được map vào P4-2A..P4-2G bằng contract/resolver/guard/smoke/evidence rõ ràng.; Fail nếu: Dùng addendum để mở Gateway, gọi Production Ready hoặc để dev tự suy luận nghiệp vụ khi thiếu contract.

## 6. STRATEGIC LOCK CỦA PHASE 4

PHASE 4 không phải phase để "làm AI trả lời hay hơn bằng mọi giá". Đây là phase để biến AI Advisor thành consumer có kiểm soát: hiểu khách, hiểu sản phẩm, nói đúng ngữ cảnh, có lực bán, nhưng toàn bộ dữ liệu thật về giá, tồn, mở bán, đơn hàng, thanh toán và doanh thu đều phải đến từ runtime owner.

AI Advisor được phép tư vấn, diễn giải, gợi ý, soạn lời phản hồi, lập bản tạm tính từ QuoteSnapshot và dẫn khách xác nhận.

AI Advisor không được tạo sự thật nghiệp vụ mới. Tất cả sự thật nghiệp vụ phải đến từ Phase 1/2/3 hoặc runtime owner tương ứng.

AI Advisor phải có guard public/private để không lộ nội bộ, không dùng claim y tế quá mức và không làm khách hoang mang.

AI Advisor phải có channel awareness: comment public, Messenger private, Live, CRM đều có chính sách khác nhau.

AI Advisor phải tôn trọng recall/sale lock tuyệt đối. Recall/Sale Lock thắng AI, Commerce, Ads, Live, CRM, Gateway và IVR.

## 7. FORBIDDEN OWNER MATRIX

Business truth: Product active / SKU active / Recipe active; Owner đúng: PHASE 1 Product/SKU/Recipe Runtime; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Chỉ consume public product state đã expose.

Business truth: Raw lot readiness / batch release / warehouse receipt; Owner đúng: PHASE 2 Operational Core; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Chỉ consume public-safe sale/trace/suppression signal nếu liên quan bán hàng.

Business truth: Inventory availability / sellable status; Owner đúng: PHASE 3 Sellable Gate Runtime; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Chỉ tư vấn/chốt SKU khi sellable_status cho phép.

Business truth: Listed price / program discount / member benefit / final price; Owner đúng: PHASE 3 Pricing + Quote Runtime; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Phải tạo/nhận QuoteSnapshot và hiển thị y nguyên runtime.

Business truth: Diamond referral benefit / commission; Owner đúng: PHASE 3 Commerce + Commission boundary; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Chỉ giải thích public-safe nếu runtime đã resolve quyền lợi. Không final commission.

Business truth: Cart / Order Draft / Official Order / order_code; Owner đúng: PHASE 3 Order Runtime; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: AI có thể dẫn khách xác nhận, nhưng chỉ nói chính thức khi có order_code.

Business truth: Payment selected / Paid / COD / Bank transfer; Owner đúng: PHASE 3 Payment Core; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Nói trạng thái public-safe; không nói paid nếu chưa có Payment Core confirmation.

Business truth: Verified revenue / ROAS / payout; Owner đúng: PHASE 3 Verified Revenue + Ads/Finance boundary; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Không hiển thị cho khách; chỉ dùng post-order/CRM/report boundary khi được phép.

Business truth: Public trace / recall / sale lock; Owner đúng: PHASE 2 Operational Core + Release policy; AI Advisor có được tự quyết không?: Không; Cách AI phải xử lý: Tôn trọng whitelist/suppression; không override.

## 8. RUNTIME CONSUMER CONTRACT SUMMARY

Nhóm dữ liệu: Customer context; AI được nhận: customer_id/token, channel identity, customer_type, member_tier display, customer_memory summary, dietary/allergy flags, prior purchase purpose.; Quy tắc consume: Read-only. Không tự gán tier, không tự tạo quyền lợi, không hỏi vòng nếu runtime đã resolve.

Nhóm dữ liệu: Product public data; AI được nhận: product_public_name, product_group, taste, sensory profile, public-safe nutrition positioning, Eastern wellness wording approved.; Quy tắc consume: Chỉ dùng public view. Không lộ mã SKU nội bộ, công thức, cost, QC note, supplier, trace internal.

Nhóm dữ liệu: Sellable runtime; AI được nhận: sellable_status, public-safe block reason, alternatives nếu runtime/consultation guard cho phép.; Quy tắc consume: Not sellable thì không quote, không order draft, không chốt. Phải đề xuất thay thế phù hợp nếu có.

Nhóm dữ liệu: QuoteSnapshot; AI được nhận: quote_id, line items, listed price, program discount, member benefit, shipping/tax/VAT display, final payable, expiry.; Quy tắc consume: QuoteSnapshot immutable. AI hiển thị, không tính lại. Hết hạn thì yêu cầu quote mới.

Nhóm dữ liệu: Order draft; AI được nhận: order_draft_id, customer info fields, delivery info, payment method selected, confirmation state.; Quy tắc consume: Order Draft chưa phải Official Order. AI phải xin xác nhận đúng form.

Nhóm dữ liệu: Official order; AI được nhận: order_code, official_order_state, payment_state public-safe, shipping_state public-safe.; Quy tắc consume: Chỉ khi có order_code mới nói đơn chính thức. selected payment không phải paid.

Nhóm dữ liệu: Suppression/guard; AI được nhận: recall lock, sale lock, channel suppression, claim guard result, human handoff flag.; Quy tắc consume: Suppression thắng mọi sales flow. Human handoff nếu guard yêu cầu.

## 9. CUSTOMER-FACING WORDING LOCK

Giọng nói customer-facing ưu tiên "Dạ Em … ạ", tự nhiên, nhẹ nhàng, có lực bán, không quá máy móc.

Không dùng từ "hệ thống" trong câu trả lời với khách. Dùng "bên Em", "Em kiểm tra theo hồ sơ của Mình", "theo chính sách hiện hành", "theo quyền lợi hiện tại của Mình".

Không dùng mã SKU nội bộ như A1/B2/C3 với khách. Chỉ dùng tên sản phẩm public.

Khi giới thiệu sản phẩm phải có hiệu dụng theo ẩm thực phương Đông/y thực đồng nguyên ở dạng public-safe; không chỉ nói "ngon, bổ, phù hợp" chung chung.

Không nói chữa bệnh, điều trị, cam kết khỏi bệnh, thay thuốc hoặc lời khuyên y khoa quá phạm vi sản phẩm thực phẩm.

Không tự thêm disclaimer làm giảm chốt đơn nếu runtime/context không yêu cầu cảnh báo y tế hoặc human handoff.

Không tiết lộ tồn kho chi tiết, dữ liệu lô nội bộ, công thức, cost, QC note, nhà cung cấp, internal trace hoặc dữ liệu khách khác.

## 10. CHANNEL HANDOFF LOCK

Kênh: Public comment / Live comment; AI được làm: Trả lời ngắn, an toàn, kéo về Messenger nếu hỏi giá/quote/order/thông tin riêng và policy cho phép.; AI không được làm: Không quote giá chi tiết công khai nếu policy yêu cầu private; không hỏi thông tin cá nhân công khai; không tranh luận với troll/abuse.

Kênh: Messenger / Private; AI được làm: Tư vấn sâu, dùng customer context, tạo quote/order draft qua Commerce Runtime, xác nhận đơn theo form.; AI không được làm: Không tự tính final price; không nói paid khi chưa có payment confirmation; không kéo khách vòng nếu context đã có.

Kênh: Live sales; AI được làm: Dùng runtime board/session/sellable/quote policy; giữ lực bán, combo, proposal và Messenger handoff.; AI không được làm: Không hardcode giá; không bán SKU bị lock; không tiết lộ inventory nội bộ.

Kênh: CRM; AI được làm: Chăm sóc sau mua, gợi ý mua lại, combo, quà tặng theo customer memory và sellable runtime.; AI không được làm: Không gợi ý SKU not sellable/recall/sale lock; không spam; không bỏ qua opt-out/frequency cap.

Kênh: Gateway; AI được làm: Nộp evidence và report cho owner review.; AI không được làm: Không tự mở Gateway hoặc gọi Completion Decision.

## 11. EVIDENCE PACKAGING RULE

Evidence group: Code inspection evidence; Bằng chứng cần có: File/route/service/resolver/DTO liên quan, commit hash, grep/log chứng minh không còn hardcode hoặc self-calculation trái rule.; Không đạt nếu thiếu: Không chứng minh được AI không tự tính price/stock/sellable/order/paid/revenue.

Evidence group: Runtime contract evidence; Bằng chứng cần có: API response sample, DTO mapping, fallback/suppression result, public/private field filtering.; Không đạt nếu thiếu: Response thiếu required fields hoặc lộ internal fields.

Evidence group: Customer memory evidence; Bằng chứng cần có: Test khách mới/khách cũ/member/Diamond/buyer-from-link, context resolved và guard identity.; Không đạt nếu thiếu: AI tự gán tier/benefit hoặc hỏi vòng khi đã có context.

Evidence group: Consultation evidence; Bằng chứng cần có: Test hỏi mơ hồ, hỏi SKU cụ thể, dietary/allergy, OOS/not sellable, recall/sale lock, alternative suggestion.; Không đạt nếu thiếu: AI tư vấn/chốt SKU bị lock hoặc claim sai.

Evidence group: Quote/order evidence; Bằng chứng cần có: QuoteSnapshot immutable, expiry, order draft form, customer confirmation, order_code state, payment public-safe state.; Không đạt nếu thiếu: AI nói final price không có QuoteSnapshot hoặc nói đơn chính thức khi chưa có order_code.

Evidence group: Safety wording evidence; Bằng chứng cần có: Snapshot câu trả lời public/private, claim guard, leak guard, internal SKU/cost/formula/QC/trace suppression.; Không đạt nếu thiếu: Có claim chữa bệnh hoặc lộ dữ liệu nội bộ.

Evidence group: Channel evidence; Bằng chứng cần có: Comment to Messenger, Live to private, CRM with frequency/opt-out/sellable guard, handoff/human handoff logs.; Không đạt nếu thiếu: Spam, sai kênh, public hóa thông tin riêng, CRM bán SKU bị lock.

Evidence group: Report evidence; Bằng chứng cần có: Report 14 mục, điểm chặn register, pass/fail table, owner decision request, Gateway bị chặn status.; Không đạt nếu thiếu: Report thiếu mục, thiếu evidence hoặc tự gọi Release Readiness.

## 12. SMOKE MAP TỐI THIỂU

Smoke ID: P4-SMK-001; Nội dung smoke: AI Advisor hỏi thông tin sản phẩm khi sellable TRUE.; Kỳ vọng pass: Tư vấn đúng public name, public-safe Eastern wellness wording, không lộ internal SKU.

Smoke ID: P4-SMK-002; Nội dung smoke: Khách hỏi SKU not sellable/out of stock.; Kỳ vọng pass: AI không quote/chốt SKU đó; nêu block reason public-safe và đề xuất thay thế nếu có.

Smoke ID: P4-SMK-003; Nội dung smoke: Recall/Sale Lock active.; Kỳ vọng pass: AI dừng tư vấn bán/chốt; không override; route human/CSKH nếu cần.

Smoke ID: P4-SMK-004; Nội dung smoke: Khách mới hỏi giá.; Kỳ vọng pass: AI lấy QuoteSnapshot từ Commerce Runtime; không tự tính final price; hiển thị expiry.

Smoke ID: P4-SMK-005; Nội dung smoke: Member/Diamond đã resolve hỏi quyền lợi.; Kỳ vọng pass: AI trả lời theo runtime variables; không nói "nếu Mình là thành viên" khi đã có context.

Smoke ID: P4-SMK-006; Nội dung smoke: Khách chốt mua sau quote.; Kỳ vọng pass: AI hiển thị Order Draft form; khách xác nhận; chỉ nói chính thức khi có order_code.

Smoke ID: P4-SMK-007; Nội dung smoke: Payment selected COD/bank transfer.; Kỳ vọng pass: AI không nói Paid nếu chưa có Payment Core confirmation.

Smoke ID: P4-SMK-008; Nội dung smoke: Comment public hỏi giá/live comment.; Kỳ vọng pass: AI kéo private/Messenger theo policy; không public thông tin riêng.

Smoke ID: P4-SMK-009; Nội dung smoke: CRM gợi ý mua lại.; Kỳ vọng pass: AI dùng customer memory + sellable runtime; không spam; không gợi ý SKU locked.

Smoke ID: P4-SMK-010; Nội dung smoke: Safety/claim/leak test.; Kỳ vọng pass: Không claim chữa bệnh, không lộ formula/cost/QC/trace/supplier, không dùng internal SKU code.

## 13. REPORT 14 MỤC BẮT BUỘC

## 1. Phase/file executed và mode đã chạy.

## 2. Environment, branch, commit hash, runtime/config version và test dataset.

## 3. Scope in/scope out đã thực hiện.

## 4. Current implementation state sau khi chạy phase.

## 5. Runtime consumer contract status.

## 6. Customer memory/context resolver status.

## 7. Product knowledge/consultation orchestrator status.

## 8. Quote/order draft/customer confirmation consumer status.

## 9. Safety/public wording/claim guard status.

## 10. Channel handoff/Messenger/Live/CRM bridge status.

## 11. Smoke result table: pass/fail/bị chặn với evidence reference.

## 12. điểm chặn register và downstream impact.

## 13. Owner review items và decision required.

## 14. DONE GATE

Tất cả file 00-08 đã được chạy đúng thứ tự và report không có prompt nào vượt phạm vi mode.

Không còn logic AI tự tính sellable, stock, price, discount, member benefit, Diamond benefit, final price, order_code, paid, verified revenue, commission, ROAS hoặc payout.

QuoteSnapshot là nguồn sự thật duy nhất cho final price hiển thị cho khách.

Order Draft không bị nói thành Official Order trước khi có order_code.

Payment selected không bị nói thành Paid trước khi Payment Core xác nhận.

Safety/Public Wording/Claim Guard chặn được claim y tế quá mức và internal data leak.

Channel bridge tôn trọng public/private boundary, Messenger handoff, CRM frequency/opt-out và recall/sale lock.

Smoke 2G có evidence đầy đủ, report 14 mục hoàn chỉnh và có owner review request.

## 15. FAIL GATE

Fail gate: AI tự tính giá/tồn/sellable; Ý nghĩa: Sai bản chất runtime consumer.; Cách xử lý: BLOCK Phase 4. Quay lại P4-2A/P4-2D và Commerce Runtime boundary.

Fail gate: AI hardcode SKU/price/discount/member benefit; Ý nghĩa: Rủi ro lệch dữ liệu và tranh chấp.; Cách xử lý: BLOCK. Gỡ hardcode, dùng resolver/runtime/QuoteSnapshot.

Fail gate: AI nói đơn chính thức khi chưa có order_code; Ý nghĩa: Sai Commerce truth.; Cách xử lý: BLOCK. Sửa order confirmation consumer và smoke lại.

Fail gate: AI nói paid khi mới chọn COD/bank transfer; Ý nghĩa: Sai Payment Core truth.; Cách xử lý: BLOCK. Chỉ dùng payment_state public-safe từ runtime.

Fail gate: AI tư vấn SKU bị recall/sale lock/not sellable; Ý nghĩa: Rủi ro bán sai hàng.; Cách xử lý: BLOCK. Sellable/suppression guard phải thắng AI.

Fail gate: AI claim chữa bệnh hoặc lộ nội bộ; Ý nghĩa: Rủi ro pháp lý/thương hiệu.; Cách xử lý: BLOCK. ClaimGuard/PublicLeakGuard phải được sửa và test lại.

Fail gate: CRM/Live spam hoặc sai policy; Ý nghĩa: Rủi ro vi phạm kênh.; Cách xử lý: BLOCK. Cần Channel policy/frequency/opt-out/handoff gate.

Fail gate: Thiếu evidence/report 14 mục; Ý nghĩa: Không đủ điều kiện owner review.; Cách xử lý: BLOCK. Hoàn thiện evidence trước khi nộp.

## 16. DOWNSTREAM HANDOFF

Sau khi PHASE 4 hoàn tất local smoke và có report 14 mục, hướng tiếp theo không phải mở Gateway ngay. Handoff đúng là nộp bộ Phase 4 kèm evidence sang owner review/global release control. Nếu owner chưa accept evidence hoặc còn điểm chặn, Phase 4 vẫn chưa Completion Decision.

Nếu còn điểm chặn P4 nhưng không ảnh hưởng code production hiện tại: lập backlog bị chặn/deferred rõ owner, impact, prerequisite.

Nếu điểm chặn ảnh hưởng bán hàng, quote, order, payment, claim, recall/sale lock hoặc private data: phải BLOCK release.

Phase tiếp theo chỉ được mở khi có quyết định rõ: Technical Design/Implementation phase kế tiếp hoặc Global Release review.

## 17. PROMPT COPY GIAO DEV / CODEX / COPILOT

Dùng đoạn dưới đây làm lệnh mở đầu khi giao toàn bộ PHASE 4 cho dev/Codex/Copilot. Không yêu cầu AI sửa code ngay nếu chưa chạy Analysis Only và Technical Design Only.

Bạn đang nhận bộ PHASE-04-AI-ADVISOR-RUNTIME của dự án Ginsengfood / SSAVIGROUP.

Hãy đọc README-PHASE-04-HANDOFF-INDEX trước, sau đó chạy các file theo đúng thứ tự 00 đến 08.

Bắt buộc tuân thủ: AI Advisor là runtime consumer, không phải source-of-truth.

Không được để AI tự tính sellable, stock, price, discount, member benefit, Diamond benefit, shipping, VAT/tax, final price, official order, order_code, paid, verified revenue, commission, ROAS hoặc payout.

Không được sửa code trong 00-P4-ANALYSIS-ONLY và 01-P4-1-TECHNICAL-DESIGN-ONLY.

Mọi implementation nếu có phải chia nhỏ theo từng file 2A-2F, có smoke/evidence riêng và không vượt scope.

File 08-P4-2G dùng để smoke, evidence và lập report 14 mục. Local smoke pass không đồng nghĩa Release Readiness.

## README STATUS: PHASE 4 COORDINATION README COMPLETE

## SMOKE STATUS: REQUIRES 08-P4-2G EXECUTION AND EVIDENCE

## GHI CHÚ KẾT THÚC BẢN DỰ PHÒNG

Bản này chỉ là bản dự phòng nhẹ, dùng để lưu trữ và tra cứu nhanh nội dung Phase 4.

Khi giao dev/Codex/Copilot triển khai thật, vẫn phải dùng đúng file prompt/handoff tương ứng và chạy đúng thứ tự 00 đến 08.

Không được dùng bản dự phòng này để mở Gateway hoặc kết luận Production Readiness.
