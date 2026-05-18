**MASTER-07 — GLOBAL RELEASE GOVERNANCE / PRODUCTION READINESS / GO-LIVE CONTROL**

**OPERATIONAL RELEASE / RECALL CONTROL / ADS SCALE GATE / MC AI LIVE CONTROL / GATEWAY-GO-LIVE STANDARD**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — GLOBAL RELEASE PRINCIPLES / PRODUCTION READINESS MODEL / GO-LIVE BOUNDARY / OWNER AUTHORITY**

**1. MASTER-07 DOCUMENT CONTROL**

**1.1. Document Purpose**

MASTER-07 là tài liệu quản trị phát hành toàn cục của hệ thống Ginsengfood.

Tài liệu này dùng để khóa nguyên tắc xác định:

1.  Khi nào một domain được xem là đủ điều kiện Production Ready.

2.  Khi nào một release được xem là Release Approved.

3.  Khi nào hệ thống được phép Go-live thật.

4.  Khi nào một pack, module, kênh, chiến dịch, chương trình hoặc extension phải bị BLOCKED.

5.  Khi nào phải Stop Sale, Rollback, Suppress, Handoff hoặc Owner Review.

6.  Cách tổng hợp evidence, smoke, security, payment, shipping, CRM, order, AI, IVR, ADS, MC AI, Operational Core, Production, Warehouse, Inventory, Traceability, Recall, Sale Lock và future extension trước khi release.

MASTER-07 không thay thế các MASTER trước đó. MASTER-07 là lớp tổng hợp cuối để xét release thật trên toàn hệ thống.

**1.2. Governance Position**

MASTER-07 đứng sau các tài liệu governance nền:

1.  MASTER-00 — Master Technical Documentation Index.

2.  MASTER-01 — Global Source-of-Truth Registry.

3.  MASTER-02 — Cross-Pack Dependency Map.

4.  MASTER-03 — Traceability ID Standard.

5.  MASTER-04 — Runtime Resolution & Guard Control Standard.

6.  MASTER-05 — Evidence / Smoke / Completion Gate Standard.

7.  MASTER-06 — Reserved Pack / Future Integration Governance.

MASTER-07 sử dụng các tài liệu trên làm nền để quyết định:

- Production Ready.

- Release Approved.

- Gateway Release.

- ADS Scale.

- MC AI Live Readiness.

- IVR Order Confirmation Readiness.

- Go-live Approved.

- Rollback / Stop / Suppression.

**1.3. MASTER-07 Is Governance, Not Implementation**

MASTER-07 không phải tài liệu triển khai kỹ thuật chi tiết.

MASTER-07 không viết:

1.  Code.

2.  API chi tiết.

3.  DTO chi tiết.

4.  Database schema chi tiết.

5.  UI screen chi tiết.

6.  Worker job chi tiết.

7.  Prompt runtime chi tiết.

8.  Script bán hàng chi tiết.

9.  Payment provider integration chi tiết.

10. Shipping provider integration chi tiết.

11. ADS campaign setup chi tiết.

Các nội dung đó thuộc về PACK hoặc implementation document tương ứng.

MASTER-07 chỉ khóa:

- Điều kiện release.

- Quyền quyết định.

- Gate bắt buộc.

- Evidence bắt buộc.

- Smoke bắt buộc.

- Owner sign-off bắt buộc.

- Boundary không được vượt.

- Trạng thái BLOCKED / READY / APPROVED / GO-LIVE.

**2. GLOBAL RELEASE PRINCIPLES**

**2.1. Principle 01 — Governance PASS Does Not Mean Production Ready**

Một tài liệu MASTER hoặc PACK được viết xong, rà soát xong hoặc governance PASS không đồng nghĩa hệ thống đã Production Ready.

Production Ready chỉ được xem xét khi có đủ:

1.  Implementation evidence.

2.  Runtime resolver evidence.

3.  Guard evidence.

4.  Smoke evidence.

5.  Negative path evidence.

6.  Security evidence nếu thuộc scope.

7.  Payment evidence nếu thuộc scope.

8.  Shipping evidence nếu thuộc scope.

9.  Traceability evidence nếu thuộc scope.

10. Recall / Stop Sale evidence nếu thuộc scope.

11. Owner sign-off.

12. Completion Gate PASS.

Không được gọi Production Ready chỉ vì tài liệu đã hoàn thành.

**2.2. Principle 02 — Production Ready Does Not Mean Release Approved**

Production Ready là trạng thái kỹ thuật cho biết một domain, pack hoặc hệ thống đã có đủ điều kiện vận hành trong môi trường production-like hoặc production-controlled.

Release Approved là quyết định của Owner sau khi xem xét:

1.  Evidence đã ACCEPTED.

2.  Smoke đã PASS.

3.  Security không còn blocker.

4.  Operational risk được kiểm soát.

5.  Business risk được chấp nhận.

6.  Rollback path sẵn sàng.

7.  Monitoring / audit / trace sẵn sàng.

8.  Owner sign-off hợp lệ.

Production Ready không tự động mở release.

**2.3. Principle 03 — Release Approved Does Not Mean Go-live Approved**

Release Approved chỉ xác nhận một phiên bản, pack, domain hoặc capability được phép đưa vào kế hoạch phát hành.

Go-live Approved chỉ được cấp khi:

1.  Release đã approved.

2.  Production environment sẵn sàng.

3.  Gateway / channel readiness sẵn sàng nếu có kênh bán hàng.

4.  Payment readiness sẵn sàng nếu có thu tiền.

5.  Shipping readiness sẵn sàng nếu có giao hàng.

6.  Order / CustomerConfirmation readiness sẵn sàng nếu có chốt đơn.

7.  Traceability / Recall / Sale Lock sẵn sàng nếu có mở bán sản phẩm.

8.  Monitoring và rollback sẵn sàng.

9.  Owner phê duyệt go-live cuối.

Không được dùng Release Approved thay cho Go-live Approved.

**2.4. Principle 04 — Completion Report Does Not Replace Completion Gate**

Completion Report chỉ là báo cáo.

Completion Gate là trạng thái kiểm soát release có evidence, smoke, audit và owner sign-off.

Nếu Completion Report còn PENDING_EVIDENCE thì:

- Không được gọi Completion Gate PASS.

- Không được gọi Gateway PASS.

- Không được gọi Production Ready.

- Không được gọi Release Approved.

- Không được gọi Go-live Approved.

Completion Report không có quyền tự mở Gateway.

**2.5. Principle 05 — Evidence Accepted Is Mandatory**

Chỉ evidence có trạng thái ACCEPTED mới được dùng để xét PASS.

Các trạng thái sau không được dùng để gọi PASS:

1.  DRAFT.

2.  SUBMITTED.

3.  UNDER_REVIEW.

4.  REJECTED.

5.  VOID.

6.  SUPERSEDED.

7.  MISSING.

8.  EXPIRED.

9.  STALE.

10. CONFLICT.

Không evidence thì không PASS.

**2.6. Principle 06 — Runtime Resolver Before Runtime Action**

Mọi hành động runtime P0 phải đi qua resolver tương ứng.

Consumer không được tự suy luận:

- Giá.

- Quyền lợi thành viên.

- Tồn kho.

- Sellable status.

- Payment status.

- Shipping ETA.

- Order status.

- Customer identity.

- Diamond attribution.

- Official contact.

- Traceability status.

- Recall status.

- Sale lock status.

- ADS scale eligibility.

- MC AI live script eligibility.

- IVR confirmation eligibility.

Không resolver thì không action.

**2.7. Principle 07 — Guard Before Release**

Mọi domain muốn release phải có guard tương ứng.

Guard quyết định:

1.  PASS.

2.  BLOCK.

3.  SUPPRESS.

4.  FALLBACK.

5.  HANDOFF.

6.  REVIEW_REQUIRED.

7.  ESCALATE.

8.  NO_ACTION.

Nếu guard chưa tồn tại, chưa test hoặc chưa có evidence thì domain đó không được release.

**2.8. Principle 08 — Traceability Before Approval**

Mọi release decision phải trace được:

1.  source_id.

2.  dependency_id.

3.  domain_id.

4.  smoke_id.

5.  evidence_id.

6.  completion_gate_id.

7.  owner_signoff_id.

8.  correlation_id.

9.  audit_id.

Không trace được thì không được approve.

**2.9. Principle 09 — Operational Core Controls Product Truth**

Các kênh bán hàng, AI, CRM, ADS, MC AI, Gateway, Landing Page và IVR không được quyết định sự thật sản phẩm.

Sự thật sản phẩm phải đi qua Operational Core và các domain liên quan:

1.  Production.

2.  Warehouse.

3.  Inventory.

4.  Product Activation.

5.  Sellable.

6.  Traceability.

7.  Recall.

8.  Sale Lock.

9.  Stop Sale.

Nếu Operational Core BLOCK thì toàn bộ Consumer phải BLOCK hoặc SUPPRESS theo guard.

**2.10. Principle 10 — Recall / Sale Lock / Stop Sale Wins Over Sales**

Recall, Hold, Sale Lock và Stop Sale luôn thắng:

1.  ADS.

2.  CRM.

3.  AI Advisor.

4.  MC AI.

5.  Gateway.

6.  Landing Page.

7.  Order.

8.  Quote.

9.  IVR.

10. Promotion.

11. Member benefit.

12. Diamond benefit.

13. Revenue target.

Khi Recall / Hold / Sale Lock / Stop Sale được kích hoạt, mọi Consumer phải dừng bán SKU hoặc lô liên quan theo đúng scope lock.

**3. GLOBAL RELEASE SCOPE**

**3.1. Scope Overview**

MASTER-07 áp dụng cho toàn bộ hệ thống Ginsengfood khi xét release thật.

Phạm vi bao gồm:

1.  MASTER governance layer.

2.  PACK documentation layer.

3.  Operational Core.

4.  Production.

5.  Warehouse.

6.  Inventory.

7.  Product Activation / Sellable.

8.  Traceability.

9.  Recall.

10. Sale Lock / Stop Sale.

11. ADS / Attribution / ROAS / CPA / AOV / Scale Gate.

12. MC AI / Live Board / Script Brief.

13. Gateway.

14. Security.

15. Payment.

16. Shipping.

17. CRM.

18. Order / Quote / CustomerConfirmation.

19. AI Advisor.

20. IVR ORDER_CONFIRMATION_ONLY.

21. Future Extension.

**3.2. Operational Core Scope**

Operational Core là nguồn kiểm soát các trạng thái vận hành thật của sản phẩm.

Operational Core release phải chứng minh được:

1.  Sản phẩm được sản xuất hợp lệ.

2.  Thành phẩm được nhập kho hợp lệ.

3.  Tồn kho khả dụng được xác định đúng.

4.  SKU được phép mở bán.

5.  Giá được active.

6.  Không bị quality hold.

7.  Không bị recall hold.

8.  Không bị sale lock.

9.  Không bị channel block.

10. Traceability đủ điều kiện public theo whitelist.

11. Stop Sale hoạt động khi điều kiện vi phạm.

Operational Core không được bị Consumer bypass.

**3.3. Production Scope**

Production release phải kiểm soát:

1.  Production order.

2.  Recipe snapshot.

3.  Batch.

4.  Material issue.

5.  Material receipt.

6.  QC production.

7.  Batch release.

8.  Production status.

9.  Production planning signal.

10. Owner review trước khi chuyển signal thành production action.

Sales / Stock Movement có thể tạo tín hiệu kế hoạch sản xuất nhưng không được tự động biến thành Production Order nếu chưa qua Operational Core / Owner Review.

**3.4. Warehouse / Inventory Scope**

Warehouse / Inventory release phải kiểm soát:

1.  Warehouse receipt.

2.  Finished goods stock.

3.  Stock available.

4.  Stock reserved.

5.  Stock blocked.

6.  Inventory ledger.

7.  Lot balance.

8.  Channel sellable quantity.

9.  Stock movement audit.

10. Stock guard cho các kênh bán hàng.

AI, ADS, CRM, MC AI, Gateway và Landing Page không được tự nói hàng còn nếu Sellable / Stock Guard không PASS.

**3.5. Product Activation / Sellable Scope**

Product Activation / Sellable là gate bắt buộc trước khi sản phẩm được bán.

Base Sellable Gate gồm:

1.  Thành phẩm hoàn tất sản xuất.

2.  Nhập kho hợp lệ.

3.  stock_available \> 0.

4.  sellable_status = SELLABLE.

5.  listed_price_status = ACTIVE.

6.  Không quality hold.

7.  Không recall hold.

8.  Không sale lock.

9.  Không channel block.

Nếu một điều kiện không đạt thì Consumer phải BLOCK hoặc SUPPRESS hành vi bán hàng.

**3.6. Traceability / Recall / Sale Lock Scope**

Traceability / Recall / Sale Lock là domain bảo vệ an toàn vận hành và uy tín thương hiệu.

Release phải chứng minh:

1.  Traceability link đầy đủ.

2.  Public trace chỉ hiển thị whitelist.

3.  Recall impact analysis hoạt động.

4.  Hold áp dụng đúng scope.

5.  Sale Lock áp dụng đúng SKU/lô/kênh.

6.  Stop Sale kích hoạt đúng điều kiện.

7.  Consumer nhận được trạng thái lock.

8.  AI/CRM/ADS/MC AI/Gateway dừng bán khi bị lock.

9.  Audit đầy đủ.

10. Evidence đầy đủ.

Recall / Stop Sale luôn thắng sales.

**3.7. ADS / Attribution / Scale Gate Scope**

ADS release không chỉ là chạy quảng cáo.

ADS release phải có gate riêng cho:

1.  Ads Spend.

2.  Revenue Verified.

3.  ROAS.

4.  CPA.

5.  AOV.

6.  Boxes/Order.

7.  Comment Rate.

8.  Inbox Rate.

9.  Quote Rate.

10. Order Rate.

11. Verified Rate.

12. COD Fail.

13. CRM Revenue.

14. Diamond Revenue.

15. Data quality.

16. Pilot 7–14 ngày.

17. Owner approval trước scale.

ADS không được tự scale khi thiếu verified revenue hoặc evidence.

ADS không được đẩy SKU không active, không sellable hoặc bị Sale Lock.

ADS không được tự quyết định Diamond attribution khi có conflict.

**3.8. MC AI / Live Board / Script Brief Scope**

MC AI là lớp hỗ trợ nội dung live, không phải Owner Core.

MC AI release phải có gate riêng cho:

1.  Daily Live Product Board.

2.  mc_ai_script_brief_id hợp lệ.

3.  SKU được phép nói trong phiên live.

4.  SKU hero / SKU hỗ trợ / SKU không được nói.

5.  Program runtime.

6.  QuoteSnapshot boundary.

7.  Sellable / Stock Guard.

8.  Recall / Hold / Sale Lock Guard.

9.  Fake urgency guard.

10. Live moderation boundary.

11. Audit và evidence.

MC AI chỉ được nói SKU nằm trong Daily Live Product Board hợp lệ.

MC AI không được nói giá nếu không có QuoteSnapshot / Program Runtime hợp lệ.

MC AI không được tạo fake urgency.

MC AI phải dừng nói/bán SKU nếu Recall / Hold / Sale Lock xảy ra.

**3.9. Gateway Scope**

Gateway release phải kiểm soát:

1.  Public comment.

2.  Messenger handoff.

3.  Handoff delivery log.

4.  PII protection.

5.  Health detail suppression.

6.  Payment instruction suppression.

7.  Public price suppression nếu policy yêu cầu.

8.  Moderation.

9.  Abuse / troll / spam handling.

10. Complaint routing.

11. Security.

12. App review.

13. Webhook evidence.

14. Gateway smoke.

15. Completion Gate.

Gateway không được PASS nếu Completion Report còn PENDING_EVIDENCE.

**3.10. Security Scope**

Security release phải kiểm soát:

1.  Authentication.

2.  Authorization.

3.  Permission.

4.  Secret management.

5.  Webhook verification.

6.  HMAC callback nếu có.

7.  Audit log.

8.  PII protection.

9.  Payment data protection.

10. Evidence storage policy.

11. Role boundary.

12. Admin access.

13. External integration access.

14. Abuse handling.

15. Security smoke.

16. Negative security evidence.

Không security evidence thì không Production Ready trong scope có security.

**3.11. Payment Scope**

Payment release phải kiểm soát:

1.  VNPAY.

2.  MOMO_BUSINESS.

3.  DIRECT_BANK_TRANSFER_TO_SSAVIGROUP.

4.  Company Bank Account Registry.

5.  payment_reference.

6.  transfer memo.

7.  Bank transfer queue.

8.  Accounting Review.

9.  Payment Core.

10. Payment status.

11. No hardcoded bank account.

12. No PAID without Payment Core / Accounting Review confirmation.

AI, Gateway, CRM, Admin UI, frontend và template không được hardcode tài khoản ngân hàng.

PaymentReference không đồng nghĩa PAID.

**3.12. Shipping Scope**

Shipping release phải kiểm soát:

1.  Domestic shipping mặc định.

2.  Shipping eligibility.

3.  Shipping fee.

4.  COD eligibility.

5.  ETA.

6.  Tracking.

7.  Delivery status.

8.  Failed delivery.

9.  Return / recovery nếu có.

10. Shipping Core evidence.

11. MAS-SMK-006 mapping.

12. Owner decision nếu mở international shipping.

International payment/shipping là future governed extension, không được mặc định active.

**3.13. CRM Scope**

CRM release phải kiểm soát:

1.  Customer identity.

2.  Customer memory.

3.  CRM trigger.

4.  Suppression.

5.  12-month journey.

6.  Member lifecycle.

7.  Grace period.

8.  Complaint suppression.

9.  Privacy suppression.

10. Duplicate message guard.

11. Message job trace.

12. Revenue attribution nếu có.

13. CRM smoke.

14. Negative path evidence.

CRM không được spam.

CRM không được gửi khi thiếu trigger hoặc đang bị suppression.

**3.14. Order / Quote / CustomerConfirmation Scope**

Order release phải kiểm soát:

1.  QuoteSnapshot.

2.  QuoteCart.

3.  OrderConfirmationDraft.

4.  CustomerConfirmation.

5.  OrderCode.

6.  PaymentReference.

7.  Shipping eligibility.

8.  VAT display.

9.  Member benefit.

10. Diamond benefit nếu eligible.

11. Program runtime.

12. Price freeze window.

13. Order audit.

14. Duplicate order guard.

15. IVR handoff nếu có.

Không QuoteSnapshot thì không báo giá.

Không CustomerConfirmation thì không tạo OrderCode.

Không OrderCode thì không được nói “đã đặt hàng thành công”.

**3.15. AI Advisor Scope**

AI Advisor release phải kiểm soát:

1.  Product knowledge.

2.  Claim whitelist.

3.  Brand soul.

4.  Customer context.

5.  Customer memory.

6.  Product recommendation.

7.  Segment recommendation.

8.  Price/runtime resolver.

9.  Member resolver.

10. Diamond resolver.

11. Health boundary.

12. Complaint boundary.

13. Public/Messenger boundary.

14. Quote boundary.

15. Order boundary.

16. Payment boundary.

17. Shipping boundary.

18. Stop Sale boundary.

19. Handoff boundary.

20. Test matrix evidence.

AI Advisor không được tự suy luận runtime data.

AI Advisor không được bán SKU không active, không sellable hoặc đang bị hold/recall/sale lock.

**3.16. IVR ORDER_CONFIRMATION_ONLY Scope**

IVR release chỉ áp dụng cho PACK-09 IVR_ORDER_CONFIRMATION.

IVR scope bị khóa:

1.  ORDER_CONFIRMATION_ONLY.

2.  INTERNAL_SIM_GATEWAY_SERVER.

3.  Không bán hàng.

4.  Không upsell.

5.  Không tư vấn sản phẩm.

6.  Không xác nhận payment.

7.  Không tự đổi order state ngoài phạm vi xác nhận đơn.

8.  Chỉ gọi khi có OrderConfirmationDraft / OrderCode đủ điều kiện theo policy.

9.  Có call log.

10. Có confirmation result.

11. Có retry policy.

12. Có audit.

13. Có evidence.

14. Có owner sign-off.

IVR không được mở rộng sang sales/CRM/marketing nếu chưa qua future governed extension.

**3.17. Future Extension Scope**

Future Extension mặc định BLOCKED.

Future Extension chỉ được runtime khi đạt ACTIVE_GOVERNED_EXTENSION.

Mỗi future extension phải có:

1.  Integration Intake.

2.  Impact Classification.

3.  Owner Core.

4.  Source-of-Truth.

5.  Resolver.

6.  Guard.

7.  Traceability ID.

8.  Audit.

9.  Evidence.

10. Smoke.

11. Security evidence nếu thuộc scope.

12. Owner sign-off.

13. Completion Gate PASS.

14. Release Gate PASS.

15. Go-live approval nếu đưa vào production.

Future extension không được tự ảnh hưởng runtime hiện tại.

**4. PRODUCTION READINESS MODEL**

**4.1. Production Readiness Definition**

Production Ready là trạng thái xác nhận một domain, pack, module hoặc release candidate đã đủ điều kiện kỹ thuật và vận hành để chạy trong production-controlled environment.

Production Ready không phải là quyền Go-live.

Production Ready chỉ là điều kiện cần để xét Release Approved.

**4.2. Production Readiness Minimum Requirements**

Một domain chỉ được xem xét Production Ready khi đạt đủ:

1.  Source-of-Truth rõ.

2.  Owner Core rõ.

3.  Runtime Resolver hoạt động.

4.  Guard hoạt động.

5.  Traceability ID đầy đủ.

6.  Audit đầy đủ.

7.  Evidence ACCEPTED.

8.  Smoke PASS.

9.  Negative path PASS.

10. Security evidence PASS nếu thuộc scope.

11. E2E smoke PASS nếu domain thuộc luồng trọng yếu.

12. No hardcode runtime data.

13. No unresolved P0 blocker.

14. Owner sign-off kỹ thuật hoặc nghiệp vụ theo scope.

15. Completion Gate không còn PENDING_EVIDENCE.

**4.3. Production Readiness Status**

Trạng thái chuẩn của Production Readiness:

| **Status**                 | **Ý nghĩa**                       | **Được release không** |
|----------------------------|-----------------------------------|------------------------|
| NOT_ASSESSED               | Chưa đánh giá                     | Không                  |
| BLOCKED                    | Có blocker                        | Không                  |
| PENDING_EVIDENCE           | Thiếu evidence                    | Không                  |
| PENDING_SMOKE              | Thiếu smoke                       | Không                  |
| PENDING_SECURITY           | Thiếu security evidence           | Không                  |
| PENDING_OWNER_REVIEW       | Chờ owner review                  | Không                  |
| PRODUCTION_READY_CANDIDATE | Đủ điều kiện kỹ thuật sơ bộ       | Chưa                   |
| PRODUCTION_READY           | Đủ điều kiện production readiness | Chưa tự release        |
| REJECTED                   | Không đạt                         | Không                  |
| SUPERSEDED                 | Bị thay thế                       | Không                  |

**4.4. Production Readiness Blockers**

Các lỗi sau là blocker:

1.  Thiếu Source-of-Truth.

2.  Thiếu Owner Core.

3.  Thiếu Runtime Resolver.

4.  Thiếu Guard.

5.  Thiếu Evidence ACCEPTED.

6.  Thiếu smoke.

7.  Thiếu negative path.

8.  Thiếu security evidence trong scope security.

9.  Hardcode runtime data.

10. Consumer tự suy luận rule kinh doanh.

11. Không trace được P0 ID.

12. Không audit được action P0.

13. Payment tự PAID không qua Payment Core / Accounting Review.

14. Shipping tự bịa ETA/tracking/phí ship.

15. AI tự báo giá không có QuoteSnapshot.

16. Order tự tạo không có CustomerConfirmation.

17. ADS tự scale không có verified revenue.

18. MC AI nói SKU ngoài board.

19. Gateway gọi PASS khi Completion Report còn PENDING_EVIDENCE.

20. Sản phẩm bị hold/recall/sale lock nhưng vẫn bán.

21. Future extension tự active khi chưa approved.

22. Owner sign-off thiếu hoặc không trace được.

**5. GO-LIVE BOUNDARY**

**5.1. Go-live Definition**

Go-live là trạng thái hệ thống, domain, channel, campaign hoặc capability được phép vận hành thật với khách hàng, dữ liệu thật, giao dịch thật hoặc ảnh hưởng vận hành thật.

Go-live chỉ được cấp khi:

1.  Production Ready đạt.

2.  Release Approved đạt.

3.  Go-live owner sign-off đạt.

4.  Monitoring sẵn sàng.

5.  Rollback sẵn sàng.

6.  Support / incident process sẵn sàng.

7.  Evidence package đầy đủ.

8.  No unresolved P0 blocker.

9.  No PENDING_EVIDENCE ở Completion Gate liên quan.

**5.2. Go-live Is Not Allowed When**

Không được Go-live nếu:

1.  Completion Report còn PENDING_EVIDENCE.

2.  Completion Gate chưa PASS.

3.  Gateway còn BLOCKED.

4.  Security evidence chưa PASS.

5.  Payment chưa có evidence nếu có thu tiền.

6.  Shipping chưa có evidence nếu có giao hàng.

7.  Order chưa có CustomerConfirmation gate.

8.  ProductActivation / Sellable chưa PASS.

9.  Recall / Stop Sale chưa có negative path evidence.

10. ADS chưa có Scale Gate approval.

11. MC AI chưa có Live Board / Script Brief gate.

12. IVR chưa chứng minh ORDER_CONFIRMATION_ONLY.

13. Future extension chưa ACTIVE_GOVERNED_EXTENSION.

14. Owner chưa sign-off.

15. Rollback chưa sẵn sàng.

16. Monitoring chưa sẵn sàng.

**5.3. Go-live Boundary by Consumer**

Consumer chỉ được Go-live trong boundary được cấp.

| **Consumer**     | **Boundary bắt buộc**                                      |
|------------------|------------------------------------------------------------|
| AI Advisor       | Tư vấn, quote, order draft theo resolver/guard             |
| Gateway          | Public comment, Messenger handoff, moderation theo policy  |
| CRM              | Message trigger theo suppression và customer context       |
| ADS              | Chạy và scale theo ADS Scale Gate                          |
| MC AI            | Nói theo Live Board và Script Brief hợp lệ                 |
| Landing Page     | Hiển thị theo product activation, sellable, price và guard |
| IVR              | ORDER_CONFIRMATION_ONLY                                    |
| Admin UI         | Thao tác theo permission, audit và workflow                |
| Payment          | Theo Payment Core / Accounting Review                      |
| Shipping         | Theo Shipping Core                                         |
| Future Extension | Chỉ theo ACTIVE_GOVERNED_EXTENSION                         |

Consumer không được mở rộng boundary bằng cấu hình cục bộ.

**6. OWNER AUTHORITY**

**6.1. Owner Authority Principle**

Mỗi quyết định release phải có Owner có thẩm quyền.

Không có Owner thì không có release.

Owner chịu trách nhiệm:

1.  Phê duyệt nghiệp vụ.

2.  Chấp nhận rủi ro.

3.  Xác nhận evidence.

4.  Ký release.

5.  Ký go-live.

6.  Kích hoạt rollback nếu cần.

7.  Quyết định mở rộng hoặc dừng scope.

**6.2. Owner Authority Levels**

| **Level**         | **Vai trò**                                | **Quyền**                              |
|-------------------|--------------------------------------------|----------------------------------------|
| Domain Owner      | Chủ nghiệp vụ từng domain                  | Xác nhận domain readiness              |
| Technical Owner   | Chủ kỹ thuật                               | Xác nhận implementation/security/smoke |
| Evidence Owner    | Chủ evidence                               | Nộp và chịu trách nhiệm evidence       |
| Release Owner     | Chủ release                                | Tổng hợp release decision              |
| Business Owner    | Chủ kinh doanh                             | Chấp nhận business risk                |
| Security Owner    | Chủ bảo mật                                | Xác nhận security readiness            |
| Payment Owner     | Chủ payment/accounting                     | Xác nhận payment readiness             |
| Shipping Owner    | Chủ shipping                               | Xác nhận shipping readiness            |
| Operational Owner | Chủ vận hành sản xuất/kho/tồn/trace/recall | Xác nhận operational readiness         |
| Final Owner       | Chủ quyết định go-live                     | Ký Go-live Approved                    |

**6.3. Owner Sign-off Requirements**

Owner sign-off phải có:

1.  owner_signoff_id.

2.  owner_role.

3.  owner_scope.

4.  decision.

5.  decision_time.

6.  evidence references.

7.  smoke references.

8.  risk notes.

9.  rollback confirmation.

10. audit_id.

11. correlation_id.

Owner sign-off bằng lời nói, chat rời, checklist chữ hoặc báo cáo không có evidence không đủ điều kiện release.

**6.4. Owner Cannot Override P0 Blocker Without Formal Risk Acceptance**

Owner không được bỏ qua P0 blocker bằng quyết định miệng.

Nếu cần release trong điều kiện có rủi ro, phải có:

1.  Formal risk acceptance.

2.  Scope giới hạn.

3.  Time-bound approval.

4.  Rollback plan.

5.  Monitoring plan.

6.  Customer impact assessment.

7.  Audit.

8.  Owner sign-off cấp cao.

9.  Completion Gate ghi rõ trạng thái ngoại lệ.

Các blocker liên quan an toàn, payment, privacy, recall, stop sale, security nghiêm trọng không được override nếu chưa có cơ chế kiểm soát được phê duyệt.

**7. GLOBAL RELEASE DECISION STATES**

**7.1. Standard Decision States**

Trạng thái release chuẩn:

| **State**             | **Ý nghĩa**          |
|-----------------------|----------------------|
| DRAFT                 | Đang chuẩn bị        |
| UNDER_REVIEW          | Đang review          |
| PENDING_EVIDENCE      | Thiếu evidence       |
| PENDING_SMOKE         | Thiếu smoke          |
| PENDING_SECURITY      | Thiếu security       |
| PENDING_OWNER_SIGNOFF | Thiếu owner sign-off |
| BLOCKED               | Bị chặn              |
| READY_CANDIDATE       | Ứng viên sẵn sàng    |
| PRODUCTION_READY      | Đủ Production Ready  |
| RELEASE_APPROVED      | Được duyệt release   |
| GO_LIVE_APPROVED      | Được duyệt go-live   |
| LIVE                  | Đang live            |
| PAUSED                | Tạm dừng             |
| ROLLBACK_REQUIRED     | Cần rollback         |
| ROLLED_BACK           | Đã rollback          |
| CLOSED                | Đóng release         |
| REJECTED              | Không đạt            |
| SUPERSEDED            | Bị thay thế          |

**7.2. Current Global Default State**

Trạng thái mặc định của hệ thống khi chưa có evidence đầy đủ:

| **Hạng mục**             | **Default State** |
|--------------------------|-------------------|
| GATEWAY_STATUS           | BLOCKED           |
| COMPLETION_REPORT_STATUS | PENDING_EVIDENCE  |
| PRODUCTION_READY         | NO                |
| RELEASE_APPROVED         | NO                |
| GO_LIVE_APPROVED         | NO                |

Không được tự thay đổi các trạng thái này nếu chưa có evidence, smoke, security, owner sign-off và Completion Gate PASS.

**8. PHẦN 1/4 DONE GATE**

PHẦN 1/4 được xem là đạt governance scope khi đã khóa đủ:

1.  MASTER-07 là governance release document, không phải implementation.

2.  Governance PASS không đồng nghĩa Production Ready.

3.  Production Ready không đồng nghĩa Release Approved.

4.  Release Approved không đồng nghĩa Go-live Approved.

5.  Completion Report không thay thế Completion Gate.

6.  Evidence ACCEPTED là bắt buộc.

7.  Runtime Resolver phải đứng trước runtime action.

8.  Guard phải đứng trước release.

9.  Traceability phải đứng trước approval.

10. Operational Core kiểm soát product truth.

11. Recall / Sale Lock / Stop Sale thắng sales.

12. Scope bao phủ Operational Core, Production, Warehouse, Inventory, Product Activation, Sellable, Traceability, Recall, Sale Lock, ADS, MC AI, Gateway, Security, Payment, Shipping, CRM, Order, AI Advisor, IVR và Future Extension.

13. Production Readiness Model đã định nghĩa rõ.

14. Go-live Boundary đã định nghĩa rõ.

15. Owner Authority đã định nghĩa rõ.

16. Global Release Decision States đã định nghĩa rõ.

17. Default global state vẫn là BLOCKED / PENDING_EVIDENCE / NO cho các gate chưa đủ evidence.

**9. PHẦN 1/4 FINAL CONCLUSION**

PHẦN 1/4 của MASTER-07 khóa nguyên tắc nền cho toàn bộ Global Release Governance của Ginsengfood.

Từ điểm này trở đi, mọi xét duyệt Production Ready, Release Approved và Go-live Approved phải đi theo mô hình:

**Source-of-Truth → Owner Core → Runtime Resolver → Guard → Traceability ID → Audit → Evidence → Smoke → Owner Sign-off → Completion Gate → Release Gate → Go-live Decision**

Không pack, module, channel, campaign, AI, IVR, ADS, MC AI, Gateway, Payment, Shipping, CRM, Order, Operational Core hoặc future extension nào được tự gọi ready, pass, release hoặc go-live nếu chưa đi đủ chuỗi kiểm soát này.

**PHẦN 2/4 — RELEASE GATE REGISTRY BY DOMAIN / OPERATIONAL / RECALL / ADS / MC AI / GATEWAY / PAYMENT / SHIPPING / CRM / ORDER / AI / IVR / FUTURE EXTENSION**

**10. RELEASE GATE REGISTRY PRINCIPLES**

**10.1. Release Gate Registry Purpose**

Release Gate Registry là bảng kiểm soát chính thức dùng để xác định domain, pack, capability, channel hoặc extension nào được phép tiến đến:

1.  Production Ready.

2.  Release Approved.

3.  Go-live Approved.

4.  Live.

5.  Scale.

6.  Rollback.

7.  Stop.

8.  Suppress.

9.  Block.

Mỗi gate trong registry phải xác định rõ:

- Gate kiểm soát domain nào.

- Owner Core là ai.

- Consumer nào bị ảnh hưởng.

- Runtime Resolver nào bắt buộc.

- Guard nào bắt buộc.

- Evidence nào bắt buộc.

- Smoke nào bắt buộc.

- Negative path nào bắt buộc.

- Security gate có áp dụng hay không.

- Owner sign-off nào bắt buộc.

- Blocked-if-missing rule là gì.

Không domain nào được release nếu không có gate trong registry.

**10.2. One Domain — One Release Gate Owner**

Mỗi domain P0 phải có Owner Core rõ ràng.

Consumer không được làm Owner Core của rule nghiệp vụ.

Ví dụ:

- AI Advisor là Consumer của giá, không phải Owner Core của giá.

- Gateway là Consumer của payment instruction policy, không phải Owner Core của payment.

- ADS là Consumer của sellable/product activation, không phải Owner Core của tồn kho.

- MC AI là Consumer của Daily Live Product Board, không phải Owner Core của chương trình live.

- CRM là Consumer của customer context, không phải Owner Core của customer identity.

- IVR là Consumer của order confirmation, không phải Owner Core của order/payment.

Nếu chưa xác định được Owner Core thì gate mặc định BLOCKED.

**10.3. Release Gate Cannot Be Inferred**

Release Gate không được suy luận từ:

1.  Tài liệu đã viết xong.

2.  Dev nói đã làm xong.

3.  Demo chạy được một lần.

4.  Checklist chưa có evidence.

5.  Completion Report còn PENDING_EVIDENCE.

6.  Smoke không có log.

7.  Owner review chưa ký.

8.  Kết quả test không có trace ID.

9.  Màn hình hiển thị đúng nhưng backend chưa audit.

10. AI trả lời đúng nhưng resolver/guard chưa chứng minh.

Release Gate chỉ được xét bằng evidence ACCEPTED.

**10.4. Consumer Release Depends on Owner Gate**

Consumer chỉ được release khi Owner Gate liên quan đã PASS.

| **Consumer**     | **Phụ thuộc bắt buộc**                                                                                                     |
|------------------|----------------------------------------------------------------------------------------------------------------------------|
| AI Advisor       | Product Knowledge, Claim, Customer, Pricing, Member, Diamond, Quote, Order, Payment, Shipping, Sellable, Health, Complaint |
| Gateway          | Public/Messenger Policy, Handoff, PII, Moderation, Security, Completion Gate                                               |
| CRM              | Customer Identity, Customer Memory, Trigger, Suppression, Member Lifecycle, Privacy, Complaint                             |
| ADS              | Product Activation, Sellable, Attribution, Verified Revenue, Scale Gate, Owner Approval                                    |
| MC AI            | Live Board, Script Brief, Product Activation, Program Runtime, Recall/Sale Lock                                            |
| Landing Page     | Product Activation, Sellable, Price, Claim, Payment/Shipping boundary                                                      |
| IVR              | OrderConfirmationOnly, Order state, Call log, Confirmation result, Audit                                                   |
| Payment          | Payment Core, Bank Registry, Accounting Review                                                                             |
| Shipping         | Shipping Core, ETA, COD, Tracking                                                                                          |
| Future Extension | ACTIVE_GOVERNED_EXTENSION                                                                                                  |

Consumer không được tự mở release nếu Owner Gate chưa PASS.

**11. STANDARD RELEASE GATE RECORD**

**11.1. Required Gate Fields**

Mỗi Release Gate phải có cấu trúc chuẩn sau:

| **Field**              | **Bắt buộc** | **Ý nghĩa**                                |
|------------------------|--------------|--------------------------------------------|
| release_gate_id        | Có           | Mã gate duy nhất                           |
| domain_id              | Có           | Domain nghiệp vụ / kỹ thuật được kiểm soát |
| gate_name              | Có           | Tên gate                                   |
| owner_core             | Có           | Owner Core chịu trách nhiệm                |
| consumer_scope         | Có           | Consumer bị ảnh hưởng                      |
| source_of_truth        | Có           | Nguồn sự thật                              |
| required_resolver      | Có           | Resolver bắt buộc                          |
| required_guard         | Có           | Guard bắt buộc                             |
| required_trace_ids     | Có           | ID bắt buộc để trace                       |
| required_evidence      | Có           | Evidence bắt buộc                          |
| required_smoke         | Có           | Smoke bắt buộc                             |
| required_negative_path | Có           | Negative path bắt buộc                     |
| security_required      | Có/Không     | Có áp security gate hay không              |
| owner_signoff_required | Có           | Owner sign-off bắt buộc                    |
| blocked_if_missing     | Có           | Điều kiện mặc định BLOCK                   |
| release_decision_state | Có           | Trạng thái gate                            |
| audit_required         | Có           | Có audit hay không                         |
| rollback_required      | Có/Không     | Có rollback plan hay không                 |

**11.2. Standard Release Gate Decision**

Mỗi gate chỉ được trả một trong các decision sau:

| **Decision**       | **Ý nghĩa**                  | **Được đi tiếp không** |
|--------------------|------------------------------|------------------------|
| PASS               | Đạt đủ điều kiện gate        | Có                     |
| BLOCK              | Bị chặn                      | Không                  |
| SUPPRESS           | Không cho Consumer hành động | Không                  |
| FALLBACK           | Chỉ dùng phương án an toàn   | Có giới hạn            |
| HANDOFF            | Chuyển người/phân hệ xử lý   | Có điều kiện           |
| REVIEW_REQUIRED    | Cần owner review             | Không                  |
| ESCALATE           | Cần cấp cao xử lý            | Không                  |
| NO_ACTION          | Không hành động              | Không                  |
| ROLLBACK_REQUIRED  | Cần rollback                 | Không                  |
| STOP_SALE_REQUIRED | Cần dừng bán                 | Không                  |

Không có decision rõ thì mặc định BLOCK.

**12. RELEASE GATE REGISTRY OVERVIEW**

**12.1. Global Gate Codes**

| **Gate Code** | **Domain**                    | **Gate Name**                         | **Default State** |
|---------------|-------------------------------|---------------------------------------|-------------------|
| REL-GOV-001   | Governance                    | Global Governance Release Gate        | PENDING_EVIDENCE  |
| REL-OPR-001   | Operational Core              | Operational Core Release Gate         | PENDING_EVIDENCE  |
| REL-PRD-001   | Production                    | Production Readiness Gate             | PENDING_EVIDENCE  |
| REL-WHI-001   | Warehouse / Inventory         | Warehouse Inventory Readiness Gate    | PENDING_EVIDENCE  |
| REL-PAS-001   | Product Activation / Sellable | Product Activation Sellable Gate      | PENDING_EVIDENCE  |
| REL-TRC-001   | Traceability                  | Traceability Public Trace Gate        | PENDING_EVIDENCE  |
| REL-RCL-001   | Recall / Sale Lock            | Recall Stop-Sale Gate                 | PENDING_EVIDENCE  |
| REL-SEC-001   | Security                      | Security Release Gate                 | PENDING_EVIDENCE  |
| REL-GTW-001   | Gateway                       | Gateway Release Gate                  | BLOCKED           |
| REL-PMT-001   | Payment                       | Payment Release Gate                  | PENDING_EVIDENCE  |
| REL-SHP-001   | Shipping                      | Shipping Release Gate                 | PENDING_EVIDENCE  |
| REL-CRM-001   | CRM                           | CRM Release Gate                      | PENDING_EVIDENCE  |
| REL-ORD-001   | Order / Quote                 | Order Quote CustomerConfirmation Gate | PENDING_EVIDENCE  |
| REL-AIA-001   | AI Advisor                    | AI Advisor Release Gate               | PENDING_EVIDENCE  |
| REL-IVR-001   | IVR                           | IVR ORDER_CONFIRMATION_ONLY Gate      | PENDING_EVIDENCE  |
| REL-ADS-001   | ADS / Attribution             | ADS Scale Gate                        | PENDING_EVIDENCE  |
| REL-MCA-001   | MC AI / Live                  | MC AI Live Board Script Brief Gate    | PENDING_EVIDENCE  |
| REL-CUS-001   | Customer Identity / Memory    | Customer Context Gate                 | PENDING_EVIDENCE  |
| REL-MBR-001   | Member / Rights               | Member Lifecycle Rights Gate          | PENDING_EVIDENCE  |
| REL-DIA-001   | Diamond / Affiliate           | Diamond Attribution Commission Gate   | PENDING_EVIDENCE  |
| REL-HCP-001   | Health / Complaint / Privacy  | Priority Conflict Safety Gate         | PENDING_EVIDENCE  |
| REL-OFC-001   | Official Contact              | Official Contact Registry Gate        | PENDING_EVIDENCE  |
| REL-FUT-001   | Future Extension              | Future Governed Extension Gate        | BLOCKED           |

**13. RELEASE GATE REGISTRY BY DOMAIN**

**13.1. REL-GOV-001 — GLOBAL GOVERNANCE RELEASE GATE**

**13.1.1. Gate Purpose**

REL-GOV-001 kiểm soát việc toàn bộ MASTER và PACK liên quan có được dùng làm nền xét release hay không.

Gate này không xác nhận hệ thống đã production ready. Gate này chỉ xác nhận lớp governance đủ điều kiện làm nền cho release review.

**13.1.2. Owner Core**

Owner Core:

- Governance Owner.

- Release Owner.

- Final Business Owner.

**13.1.3. Required Inputs**

1.  MASTER-00 đến MASTER-07 có trạng thái governance rõ.

2.  Pack registry rõ.

3.  Source-of-Truth registry rõ.

4.  Cross-pack dependency map rõ.

5.  Traceability ID standard rõ.

6.  Runtime resolver / guard standard rõ.

7.  Evidence / smoke standard rõ.

8.  Future extension governance rõ.

**13.1.4. Required Evidence**

1.  MASTER governance approval evidence.

2.  Pack registry evidence.

3.  Source-of-Truth mapping evidence.

4.  Owner Core mapping evidence.

5.  P0 domain dependency evidence.

6.  Release gate registry evidence.

7.  Audit evidence.

**13.1.5. Blocked If Missing**

REL-GOV-001 BLOCK nếu:

1.  Thiếu MASTER hoặc PACK trong registry.

2.  Không xác định Source-of-Truth.

3.  Không xác định Owner Core.

4.  Không có release gate cho domain P0.

5.  Completion Report còn PENDING_EVIDENCE nhưng bị gọi PASS.

6.  Gateway bị gọi PASS khi Gate còn BLOCKED.

**13.2. REL-OPR-001 — OPERATIONAL CORE RELEASE GATE**

**13.2.1. Gate Purpose**

REL-OPR-001 kiểm soát Operational Core trước khi bất kỳ Consumer nào được phép bán, quote, chạy ADS, live, CRM hoặc hiển thị Landing Page liên quan đến sản phẩm.

Operational Core là lớp kiểm soát sự thật vận hành.

**13.2.2. Owner Core**

Owner Core:

- Operational Owner.

- Production Owner.

- Warehouse Owner.

- Inventory Owner.

- Traceability Owner.

- Recall Owner.

**13.2.3. Consumer Scope**

Consumer bị phụ thuộc:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  ADS.

5.  MC AI.

6.  Landing Page.

7.  Order.

8.  Payment nếu phát sinh giao dịch.

9.  Shipping nếu phát sinh giao hàng.

10. IVR nếu xác nhận đơn.

**13.2.4. Required Resolver**

1.  OperationalStatusResolver.

2.  ProductActivationResolver.

3.  SellableStatusResolver.

4.  StockAvailabilityResolver.

5.  QualityHoldResolver.

6.  RecallHoldResolver.

7.  SaleLockResolver.

8.  ChannelBlockResolver.

**13.2.5. Required Guard**

1.  OperationalReleaseGuard.

2.  ProductSellableGuard.

3.  StockGuard.

4.  HoldRecallGuard.

5.  SaleLockGuard.

6.  ChannelEligibilityGuard.

**13.2.6. Required Evidence**

1.  Operational flow evidence.

2.  Production completion evidence.

3.  Warehouse receipt evidence.

4.  Inventory ledger evidence.

5.  Sellable status evidence.

6.  Hold / recall / sale lock negative evidence.

7.  Consumer suppression evidence khi Operational Core BLOCK.

8.  Audit evidence.

**13.2.7. Blocked If Missing**

REL-OPR-001 BLOCK nếu:

1.  Không chứng minh được thành phẩm đã hoàn tất sản xuất.

2.  Không chứng minh được nhập kho hợp lệ.

3.  Không có stock_available hợp lệ.

4.  Không có sellable_status.

5.  Không có listed_price_status.

6.  Không có hold/recall/sale lock guard.

7.  Consumer có thể bán khi Operational Core BLOCK.

8.  Không có audit.

**13.3. REL-PRD-001 — PRODUCTION READINESS GATE**

**13.3.1. Gate Purpose**

REL-PRD-001 kiểm soát domain sản xuất trước khi kết quả sản xuất được dùng cho tồn kho, mở bán, traceability, recall hoặc kế toán.

**13.3.2. Owner Core**

Owner Core:

- Production Owner.

- Recipe Owner.

- QC Owner.

- Operational Owner.

**13.3.3. Required Resolver**

1.  ProductionOrderResolver.

2.  RecipeSnapshotResolver.

3.  BatchStatusResolver.

4.  MaterialIssueResolver.

5.  MaterialReceiptResolver.

6.  ProductionQCResolver.

7.  BatchReleaseResolver.

**13.3.4. Required Guard**

1.  ProductionOrderGuard.

2.  RecipeSnapshotGuard.

3.  MaterialIssueGuard.

4.  BatchQCGuard.

5.  BatchReleaseGuard.

6.  ProductionPlanningSignalGuard.

**13.3.5. Required Evidence**

1.  Production order evidence.

2.  Recipe snapshot evidence.

3.  Material issue evidence.

4.  Material receipt evidence.

5.  Batch genealogy evidence.

6.  QC inspection evidence.

7.  Batch release evidence.

8.  Production planning signal evidence.

9.  Owner review evidence trước khi signal thành production action.

10. Audit evidence.

**13.3.6. Blocked If Missing**

REL-PRD-001 BLOCK nếu:

1.  Production Order không có recipe snapshot.

2.  Batch không trace được nguyên liệu.

3.  Material issue không có ledger/audit.

4.  QC_PASS bị hiểu nhầm là RELEASED.

5.  Warehouse receipt nhận batch chưa released.

6.  Sales/Stock Movement tự tạo Production Order.

7.  Thiếu owner review cho production planning signal.

8.  Thiếu traceability từ batch đến SKU/lô.

**13.4. REL-WHI-001 — WAREHOUSE / INVENTORY READINESS GATE**

**13.4.1. Gate Purpose**

REL-WHI-001 kiểm soát kho và tồn kho trước khi sản phẩm được mở bán, quote, chạy ADS, lên Live Board hoặc xuất hiện trong CRM recommendation.

**13.4.2. Owner Core**

Owner Core:

- Warehouse Owner.

- Inventory Owner.

- Operational Owner.

**13.4.3. Required Resolver**

1.  WarehouseReceiptResolver.

2.  FinishedGoodsStockResolver.

3.  StockAvailableResolver.

4.  ReservedStockResolver.

5.  BlockedStockResolver.

6.  InventoryLedgerResolver.

7.  ChannelStockResolver.

**13.4.4. Required Guard**

1.  WarehouseReceiptGuard.

2.  InventoryBalanceGuard.

3.  StockAvailabilityGuard.

4.  ChannelStockGuard.

5.  StockMovementAuditGuard.

**13.4.5. Required Evidence**

1.  Warehouse receipt evidence.

2.  Inventory ledger evidence.

3.  Lot balance evidence.

4.  Stock available evidence.

5.  Reserved stock evidence.

6.  Blocked stock evidence.

7.  Channel stock evidence.

8.  Negative evidence cho stock = 0.

9.  Audit evidence.

**13.4.6. Blocked If Missing**

REL-WHI-001 BLOCK nếu:

1.  Không chứng minh được tồn kho khả dụng.

2.  Stock available không khớp ledger.

3.  Có stock nhưng đang blocked.

4.  Có stock nhưng channel không được phép bán.

5.  Consumer nói còn hàng khi Stock Guard chưa PASS.

6.  Tồn kho âm hoặc không trace được.

7.  Thiếu negative path cho hết hàng.

**13.5. REL-PAS-001 — PRODUCT ACTIVATION / SELLABLE / STOCK GATE**

**13.5.1. Gate Purpose**

REL-PAS-001 kiểm soát việc SKU có được phép bán trên từng kênh, chương trình, live, ADS, CRM, AI Advisor hoặc Landing Page hay không.

**13.5.2. Owner Core**

Owner Core:

- Product Activation Owner.

- Pricing Owner.

- Operational Owner.

- Channel Owner.

**13.5.3. Required Resolver**

1.  ProductActivationResolver.

2.  SellableStatusResolver.

3.  ListedPriceStatusResolver.

4.  ProgramActivationResolver.

5.  ChannelEligibilityResolver.

6.  StockAvailabilityResolver.

7.  SaleLockResolver.

**13.5.4. Required Guard**

1.  BaseSellableGate.

2.  ProgramEligibilityGuard.

3.  ChannelEligibilityGuard.

4.  PriceActiveGuard.

5.  StockGuard.

6.  StopSaleGuard.

**13.5.5. Required Base Sellable Conditions**

SKU chỉ được phép bán khi đồng thời đạt:

1.  Thành phẩm hoàn tất sản xuất.

2.  Nhập kho hợp lệ.

3.  stock_available \> 0.

4.  sellable_status = SELLABLE.

5.  listed_price_status = ACTIVE.

6.  Không quality hold.

7.  Không recall hold.

8.  Không sale lock.

9.  Không channel block.

**13.5.6. Blocked If Missing**

REL-PAS-001 BLOCK nếu:

1.  SKU chưa active.

2.  SKU chưa sellable.

3.  Không có giá active.

4.  Không có tồn kho khả dụng.

5.  Có hold/recall/sale lock.

6.  Channel bị block.

7.  ADS/AI/CRM/MC AI/Landing Page có thể nói/bán SKU không sellable.

8.  Consumer tự tạo danh sách SKU bán mà không qua resolver.

**13.6. REL-TRC-001 — TRACEABILITY / PUBLIC TRACE GATE**

**13.6.1. Gate Purpose**

REL-TRC-001 kiểm soát khả năng truy xuất nguồn gốc, liên kết lô, batch, QR, public trace và whitelist dữ liệu public.

**13.6.2. Owner Core**

Owner Core:

- Traceability Owner.

- Operational Owner.

- QC Owner.

- Public Trace Owner.

**13.6.3. Required Resolver**

1.  TraceLinkResolver.

2.  BatchGenealogyResolver.

3.  PublicTracePolicyResolver.

4.  QRStatusResolver.

5.  TraceProjectionResolver.

**13.6.4. Required Guard**

1.  TraceCompletenessGuard.

2.  PublicTraceWhitelistGuard.

3.  QRPublicValidityGuard.

4.  InternalDataLeakGuard.

5.  TraceGapGuard.

**13.6.5. Required Evidence**

1.  Internal trace evidence.

2.  Public trace projection evidence.

3.  QR valid evidence.

4.  QR void/failed negative evidence.

5.  Whitelist public field evidence.

6.  Internal data leak negative evidence.

7.  Trace gap evidence.

8.  Audit evidence.

**13.6.6. Blocked If Missing**

REL-TRC-001 BLOCK nếu:

1.  Không trace được từ SKU/batch/lô đến nguồn liên quan.

2.  Public trace có nguy cơ lộ supplier evidence, internal ID, costing, QC internal note, MISA/private data.

3.  QR VOID/FAILED vẫn public-valid.

4.  PACKET có QR/public trace standalone trái policy.

5.  Trace projection không có whitelist.

6.  Recall không thể dùng trace để phân tích impact.

**13.7. REL-RCL-001 — RECALL / SALE LOCK / STOP SALE GATE**

**13.7.1. Gate Purpose**

REL-RCL-001 kiểm soát recall, hold, sale lock, stop sale và suppression toàn hệ thống khi có rủi ro sản phẩm.

Đây là gate có quyền ưu tiên cao hơn sales, CRM, ADS, MC AI, Gateway, Landing Page và AI Advisor.

**13.7.2. Owner Core**

Owner Core:

- Recall Owner.

- Quality Owner.

- Operational Owner.

- Risk Owner.

- Final Business Owner khi có tác động nghiêm trọng.

**13.7.3. Required Resolver**

1.  RecallCaseResolver.

2.  RecallImpactResolver.

3.  HoldStatusResolver.

4.  SaleLockResolver.

5.  StopSaleResolver.

6.  ConsumerSuppressionResolver.

7.  RecoveryStatusResolver.

**13.7.4. Required Guard**

1.  RecallGuard.

2.  SaleLockGuard.

3.  StopSaleGuard.

4.  ConsumerSuppressionGuard.

5.  RecoveryGuard.

6.  ResidualRiskGuard.

**13.7.5. Required Evidence**

1.  Recall case evidence.

2.  Impact analysis evidence.

3.  Hold evidence.

4.  Sale lock evidence.

5.  Stop Sale evidence.

6.  Consumer suppression evidence.

7.  Recovery evidence.

8.  Residual risk evidence nếu có.

9.  Negative path evidence: SKU/lô bị recall không thể bán.

10. Audit evidence.

**13.7.6. Blocked If Missing**

REL-RCL-001 BLOCK nếu:

1.  Recall không tạo được impact scope.

2.  Sale Lock không chặn được AI/CRM/ADS/MC AI/Gateway/Landing Page.

3.  SKU/lô bị hold vẫn quote được.

4.  SKU/lô bị recall vẫn order được.

5.  MC AI vẫn nói SKU bị lock.

6.  ADS vẫn đẩy SKU bị stop sale.

7.  CRM vẫn gửi gợi ý SKU bị recall.

8.  Landing Page vẫn hiển thị CTA mua SKU bị lock.

9.  Không có negative path evidence.

**13.8. REL-SEC-001 — SECURITY RELEASE GATE**

**13.8.1. Gate Purpose**

REL-SEC-001 kiểm soát bảo mật trước khi domain có dữ liệu thật, khách thật, giao dịch thật hoặc public exposure.

**13.8.2. Owner Core**

Owner Core:

- Security Owner.

- Technical Owner.

- Data Protection Owner.

- Integration Owner nếu có external system.

**13.8.3. Required Resolver**

1.  AuthResolver.

2.  PermissionResolver.

3.  RoleBoundaryResolver.

4.  SecretResolver.

5.  WebhookVerificationResolver.

6.  DeviceCallbackResolver nếu có.

7.  EvidenceAccessResolver.

8.  PIIAccessResolver.

**13.8.4. Required Guard**

1.  AuthenticationGuard.

2.  AuthorizationGuard.

3.  PermissionGuard.

4.  SecretLeakGuard.

5.  WebhookSignatureGuard.

6.  PIILeakGuard.

7.  PaymentDataGuard.

8.  AdminAccessGuard.

9.  ExternalIntegrationGuard.

**13.8.5. Required Evidence**

1.  Auth evidence.

2.  Permission evidence.

3.  Secret management evidence.

4.  Webhook verification evidence.

5.  PII protection evidence.

6.  Admin access evidence.

7.  Payment data protection evidence nếu thuộc scope.

8.  Negative security evidence.

9.  Incident/abuse handling evidence.

10. Audit evidence.

**13.8.6. Blocked If Missing**

REL-SEC-001 BLOCK nếu:

1.  Secret bị hardcode.

2.  Webhook không verify được.

3.  Admin role vượt quyền.

4.  PII lộ ở public comment/log/template.

5.  Payment data bị public.

6.  Evidence storage lộ dữ liệu nội bộ.

7.  External integration có thể direct-write sai boundary.

8.  Security smoke không PASS.

9.  Negative path thiếu.

**13.9. REL-GTW-001 — GATEWAY RELEASE GATE**

**13.9.1. Gate Purpose**

REL-GTW-001 kiểm soát Gateway trước khi mở kênh public comment, Messenger handoff, live, moderation hoặc channel automation.

**13.9.2. Owner Core**

Owner Core:

- Gateway Owner.

- Channel Owner.

- Security Owner.

- Privacy Owner.

- Release Owner.

**13.9.3. Required Resolver**

1.  PublicCommentPolicyResolver.

2.  MessengerHandoffResolver.

3.  HandoffDeliveryResolver.

4.  ModerationPolicyResolver.

5.  PrivacyResolver.

6.  HealthBoundaryResolver.

7.  PaymentInstructionPolicyResolver.

8.  CompletionGateResolver.

**13.9.4. Required Guard**

1.  PublicCommentGuard.

2.  MessengerHandoffGuard.

3.  PIIProtectionGuard.

4.  HealthDetailSuppressionGuard.

5.  PaymentInstructionSuppressionGuard.

6.  ModerationGuard.

7.  ComplaintRoutingGuard.

8.  GatewayCompletionGuard.

**13.9.5. Required Evidence**

1.  Public comment evidence.

2.  Messenger handoff evidence.

3.  Handoff success/fail evidence.

4.  PII suppression evidence.

5.  Health detail suppression evidence.

6.  Payment instruction suppression evidence.

7.  Moderation evidence.

8.  Abuse/troll/spam handling evidence.

9.  Complaint routing evidence.

10. Webhook evidence.

11. Security evidence.

12. Completion Gate evidence.

**13.9.6. Blocked If Missing**

REL-GTW-001 BLOCK nếu:

1.  Completion Report còn PENDING_EVIDENCE.

2.  Completion Gate chưa PASS.

3.  Gateway security chưa PASS.

4.  Handoff fail nhưng AI nói đã gửi Messenger.

5.  Public comment báo giá/chốt đơn/payment instruction trái policy.

6.  Public comment lặp PII.

7.  Complaint thật bị xử như troll.

8.  Troll/abuse không có moderation policy.

9.  Gateway không có audit.

**13.10. REL-PMT-001 — PAYMENT RELEASE GATE**

**13.10.1. Gate Purpose**

REL-PMT-001 kiểm soát thanh toán trước khi hệ thống được phép nhận tiền, hướng dẫn thanh toán hoặc xác nhận trạng thái payment.

**13.10.2. Owner Core**

Owner Core:

- Payment Owner.

- Accounting Owner.

- Finance Owner.

- Security Owner.

**13.10.3. Payment Scope**

Payment strategy hiện tại gồm:

1.  VNPAY.

2.  MOMO_BUSINESS.

3.  DIRECT_BANK_TRANSFER_TO_SSAVIGROUP.

Direct bank transfer bắt buộc đi qua:

1.  Company Bank Account Registry.

2.  payment_reference.

3.  transfer memo.

4.  Bank transfer queue.

5.  Accounting Review.

**13.10.4. Required Resolver**

1.  PaymentMethodResolver.

2.  CompanyBankAccountRegistryResolver.

3.  PaymentReferenceResolver.

4.  BankTransferQueueResolver.

5.  AccountingReviewResolver.

6.  PaymentStatusResolver.

7.  PaymentReconcileResolver.

**13.10.5. Required Guard**

1.  PaymentMethodGuard.

2.  BankAccountNoHardcodeGuard.

3.  PaymentReferenceGuard.

4.  AccountingReviewGuard.

5.  PaidStatusGuard.

6.  PaymentInstructionGuard.

7.  ReconcileGuard.

**13.10.6. Required Evidence**

1.  VNPAY evidence nếu active.

2.  MOMO_BUSINESS evidence nếu active.

3.  Direct bank transfer evidence nếu active.

4.  Company Bank Account Registry evidence.

5.  payment_reference evidence.

6.  transfer memo evidence.

7.  Accounting Review evidence.

8.  Payment status evidence.

9.  Negative evidence: PaymentReference không tự thành PAID.

10. No-hardcode evidence.

11. Audit evidence.

**13.10.7. Blocked If Missing**

REL-PMT-001 BLOCK nếu:

1.  Tài khoản ngân hàng bị hardcode trong AI/Gateway/CRM/Admin UI/frontend/template.

2.  Không có Company Bank Account Registry.

3.  Không có payment_reference.

4.  Không có transfer memo.

5.  Không có Accounting Review.

6.  PaymentReference bị xem là PAID.

7.  AI xác nhận đã thanh toán khi Payment Core chưa xác nhận.

8.  IVR xác nhận payment.

9.  Gateway public payment instruction trái policy.

10. Không có reconcile evidence.

**13.11. REL-SHP-001 — SHIPPING RELEASE GATE**

**13.11.1. Gate Purpose**

REL-SHP-001 kiểm soát giao hàng, phí ship, COD, ETA, tracking và shipping eligibility trước khi hệ thống được phép báo giao hàng hoặc chốt đơn có giao hàng.

**13.11.2. Owner Core**

Owner Core:

- Shipping Owner.

- Order Owner.

- Finance Owner nếu có COD.

- Customer Service Owner.

**13.11.3. Required Resolver**

1.  ShippingEligibilityResolver.

2.  ShippingFeeResolver.

3.  CODResolver.

4.  ETAResolver.

5.  TrackingResolver.

6.  DeliveryStatusResolver.

7.  ReturnRecoveryResolver nếu có.

**13.11.4. Required Guard**

1.  ShippingEligibilityGuard.

2.  ShippingFeeGuard.

3.  CODGuard.

4.  ETAGuard.

5.  TrackingGuard.

6.  DeliveryStatusGuard.

7.  InternationalShippingGuard.

**13.11.5. Required Evidence**

1.  Domestic shipping eligibility evidence.

2.  Shipping fee evidence.

3.  COD eligibility evidence.

4.  ETA evidence.

5.  Tracking evidence.

6.  Failed delivery evidence.

7.  Return/recovery evidence nếu có.

8.  MAS-SMK-006 evidence mapping.

9.  Negative evidence: không bịa ETA/tracking.

10. Audit evidence.

**13.11.6. Blocked If Missing**

REL-SHP-001 BLOCK nếu:

1.  Không có Shipping Core evidence.

2.  AI/Gateway/CRM tự bịa ETA.

3.  Không xác định được phí ship.

4.  Không xác định được COD eligibility.

5.  Tracking không trace được.

6.  International shipping bị mở khi chưa owner approve.

7.  MAS-SMK-006 không link đủ PACK-04, PACK-01, PACK-03, PACK-05.

8.  Shipping status không audit được.

**13.12. REL-CRM-001 — CRM RELEASE GATE**

**13.12.1. Gate Purpose**

REL-CRM-001 kiểm soát CRM trước khi hệ thống gửi tin chăm sóc, gợi ý mua lại, nhắc quyền lợi thành viên, nhắc Giờ Vàng, nhắc 24/7 hoặc kích hoạt journey 12 tháng.

**13.12.2. Owner Core**

Owner Core:

- CRM Owner.

- Customer Owner.

- Privacy Owner.

- Member Owner.

- Complaint Owner.

**13.12.3. Required Resolver**

1.  CustomerIdentityResolver.

2.  CustomerMemoryResolver.

3.  CRMTriggerResolver.

4.  SuppressionResolver.

5.  MemberLifecycleResolver.

6.  PrivacyPreferenceResolver.

7.  ComplaintStatusResolver.

8.  MessageDedupResolver.

**13.12.4. Required Guard**

1.  CustomerContextGuard.

2.  CRMTriggerGuard.

3.  SuppressionGuard.

4.  DuplicateMessageGuard.

5.  PrivacyGuard.

6.  ComplaintSuppressionGuard.

7.  MemberLifecycleGuard.

8.  SpamGuard.

**13.12.5. Required Evidence**

1.  Customer identity evidence.

2.  Customer memory evidence.

3.  Trigger evidence.

4.  Suppression evidence.

5.  12-month journey evidence.

6.  Member lifecycle evidence.

7.  Grace period evidence.

8.  Privacy opt-out evidence.

9.  Complaint suppression evidence.

10. Duplicate message negative evidence.

11. Audit evidence.

**13.12.6. Blocked If Missing**

REL-CRM-001 BLOCK nếu:

1.  CRM gửi khi không có trigger.

2.  CRM gửi khi đang suppression.

3.  CRM spam nhiều kênh.

4.  CRM không nhận biết customer identity.

5.  CRM không nhận biết customer memory.

6.  CRM gợi ý SKU không active/sellable.

7.  CRM gửi SKU bị recall/sale lock.

8.  CRM gửi quyền lợi member sai lifecycle.

9.  CRM bỏ qua complaint/privacy.

10. Không có message job trace.

**13.13. REL-ORD-001 — ORDER / QUOTE / CUSTOMERCONFIRMATION RELEASE GATE**

**13.13.1. Gate Purpose**

REL-ORD-001 kiểm soát toàn bộ luồng quote, order draft, customer confirmation, order code, payment reference, shipping eligibility và IVR handoff.

**13.13.2. Owner Core**

Owner Core:

- Order Owner.

- Pricing Owner.

- Payment Owner.

- Shipping Owner.

- Customer Owner.

- Accounting Owner nếu có payment.

**13.13.3. Required Resolver**

1.  QuoteSnapshotResolver.

2.  QuoteCartResolver.

3.  ProgramRuntimeResolver.

4.  MemberBenefitResolver.

5.  DiamondBenefitResolver.

6.  VATResolver.

7.  OrderDraftResolver.

8.  CustomerConfirmationResolver.

9.  OrderCodeResolver.

10. PaymentReferenceResolver.

11. ShippingEligibilityResolver.

12. DuplicateOrderResolver.

**13.13.4. Required Guard**

1.  QuoteSnapshotGuard.

2.  PriceFreezeGuard.

3.  MemberBenefitGuard.

4.  DiamondBenefitGuard.

5.  VATDisplayGuard.

6.  CustomerConfirmationGuard.

7.  OrderCodeGuard.

8.  DuplicateOrderGuard.

9.  PaymentReferenceGuard.

10. ShippingEligibilityGuard.

11. IVRHandoffGuard.

**13.13.5. Required Evidence**

1.  QuoteSnapshot evidence.

2.  QuoteCart evidence.

3.  Program runtime evidence.

4.  Member benefit evidence.

5.  Diamond benefit evidence.

6.  VAT display evidence.

7.  OrderConfirmationDraft evidence.

8.  CustomerConfirmation evidence.

9.  OrderCode evidence.

10. Duplicate order negative evidence.

11. PaymentReference evidence.

12. Shipping eligibility evidence.

13. Price freeze window evidence.

14. Audit evidence.

**13.13.6. Blocked If Missing**

REL-ORD-001 BLOCK nếu:

1.  Báo giá không có QuoteSnapshot.

2.  Quote hết hạn vẫn dùng.

3.  Giá chương trình không lấy từ runtime.

4.  Member/Diamond benefit bị bỏ sót khi eligible.

5.  VAT hiển thị mơ hồ.

6.  OrderCode tạo khi chưa có CustomerConfirmation.

7.  PaymentReference bị hiểu là PAID.

8.  Shipping eligibility chưa xác định.

9.  Duplicate order không chặn.

10. IVR được gọi khi order chưa đủ điều kiện.

**13.14. REL-AIA-001 — AI ADVISOR RELEASE GATE**

**13.14.1. Gate Purpose**

REL-AIA-001 kiểm soát AI Advisor trước khi AI được phép tư vấn, gợi ý sản phẩm, xử lý objection, báo quote, tạo order draft, handoff Messenger, xử lý health boundary, complaint và CRM conversation.

**13.14.2. Owner Core**

Owner Core:

- AI Advisor Owner.

- Product Knowledge Owner.

- Claim/Safety Owner.

- Order Owner.

- Pricing Owner.

- CRM Owner.

- Channel Owner.

- Compliance Owner.

**13.14.3. Required Resolver**

1.  ProductKnowledgeResolver.

2.  ClaimWhitelistResolver.

3.  CustomerIdentityResolver.

4.  CustomerMemoryResolver.

5.  SegmentRecommendationResolver.

6.  ProductRecommendationResolver.

7.  PricingRuntimeResolver.

8.  ProgramRuntimeResolver.

9.  MemberBenefitResolver.

10. DiamondResolver.

11. HealthBoundaryResolver.

12. ComplaintResolver.

13. PublicMessengerBoundaryResolver.

14. QuoteSnapshotResolver.

15. OrderDraftResolver.

16. PaymentBoundaryResolver.

17. ShippingBoundaryResolver.

18. StopSaleResolver.

**13.14.4. Required Guard**

1.  ClaimGuard.

2.  PublicWordingGuard.

3.  CustomerContextGuard.

4.  HealthBoundaryGuard.

5.  ComplaintGuard.

6.  PriceQuoteGuard.

7.  OrderGuard.

8.  PaymentBoundaryGuard.

9.  ShippingBoundaryGuard.

10. StopSaleGuard.

11. PublicCommentGuard.

12. MessengerHandoffGuard.

13. NoHardcodeRuntimeGuard.

**13.14.5. Required Evidence**

1.  Product knowledge evidence.

2.  Claim whitelist evidence.

3.  Public wording evidence.

4.  Customer context evidence.

5.  Recommendation evidence.

6.  Pricing evidence.

7.  Member/Diamond evidence.

8.  Health boundary evidence.

9.  Complaint evidence.

10. Quote evidence.

11. Order draft evidence.

12. Payment boundary evidence.

13. Shipping boundary evidence.

14. Stop Sale evidence.

15. Public/Messenger handoff evidence.

16. Test matrix evidence.

17. Audit evidence.

**13.14.6. Blocked If Missing**

REL-AIA-001 BLOCK nếu:

1.  AI tự suy luận giá/quyền lợi/tồn kho.

2.  AI nói công dụng như thuốc.

3.  AI bán SKU không active/sellable.

4.  AI báo giá public trái policy.

5.  AI tạo OrderCode khi chưa có CustomerConfirmation.

6.  AI xác nhận PAID khi payment chưa confirmed.

7.  AI bịa ETA/tracking.

8.  AI bỏ qua recall/sale lock.

9.  AI gửi contact không qua OfficialContactResolver.

10. AI xử lý complaint như sales thường.

11. Không có test matrix evidence.

**13.15. REL-IVR-001 — IVR ORDER_CONFIRMATION_ONLY RELEASE GATE**

**13.15.1. Gate Purpose**

REL-IVR-001 kiểm soát PACK-09 IVR_ORDER_CONFIRMATION trước khi hệ thống gọi tự động xác nhận đơn.

IVR chỉ có chức năng xác nhận đơn, không bán hàng.

**13.15.2. Owner Core**

Owner Core:

- IVR Owner.

- Order Owner.

- Customer Service Owner.

- Security Owner.

- Release Owner.

**13.15.3. Required Resolver**

1.  IVREligibilityResolver.

2.  OrderConfirmationDraftResolver.

3.  OrderCodeResolver.

4.  CustomerPhoneResolver.

5.  CallAttemptResolver.

6.  ConfirmationResultResolver.

7.  RetryPolicyResolver.

8.  CallLogResolver.

**13.15.4. Required Guard**

1.  IVROrderConfirmationOnlyGuard.

2.  OrderEligibilityGuard.

3.  CustomerPhonePrivacyGuard.

4.  CallFrequencyGuard.

5.  RetryPolicyGuard.

6.  PaymentNoConfirmationGuard.

7.  SalesNoUpsellGuard.

8.  CallAuditGuard.

**13.15.5. Required Evidence**

1.  INTERNAL_SIM_GATEWAY_SERVER evidence.

2.  ORDER_CONFIRMATION_ONLY evidence.

3.  Order eligibility evidence.

4.  Call log evidence.

5.  Confirmation result evidence.

6.  Retry policy evidence.

7.  Negative evidence: IVR không bán hàng.

8.  Negative evidence: IVR không upsell.

9.  Negative evidence: IVR không xác nhận payment.

10. Audit evidence.

11. Owner sign-off.

**13.15.6. Blocked If Missing**

REL-IVR-001 BLOCK nếu:

1.  IVR được dùng để bán hàng.

2.  IVR được dùng để upsell.

3.  IVR xác nhận payment.

4.  IVR tự đổi order state ngoài phạm vi xác nhận đơn.

5.  IVR gọi khi không có OrderConfirmationDraft/OrderCode hợp lệ.

6.  Không có call log.

7.  Không có confirmation result.

8.  Không có retry policy.

9.  Không có audit.

10. IVR bị mở sang sales/CRM/marketing khi chưa qua future governed extension.

**13.16. REL-ADS-001 — ADS / ATTRIBUTION / ROAS / CPA / AOV / SCALE GATE**

**13.16.1. Gate Purpose**

REL-ADS-001 kiểm soát ADS trước khi campaign được phép chạy, mở rộng ngân sách hoặc scale.

ADS không được tự scale chỉ vì có comment, inbox hoặc doanh thu chưa verified.

**13.16.2. Owner Core**

Owner Core:

- ADS Owner.

- Revenue Owner.

- Attribution Owner.

- Finance Owner.

- Product Activation Owner.

- Release Owner.

**13.16.3. Required Resolver**

1.  AdsCampaignResolver.

2.  ProductActivationResolver.

3.  SellableStatusResolver.

4.  AttributionResolver.

5.  VerifiedRevenueResolver.

6.  ROASResolver.

7.  CPAResolver.

8.  AOVResolver.

9.  BoxesPerOrderResolver.

10. FunnelMetricResolver.

11. CODFailResolver.

12. CRMRevenueResolver.

13. DiamondRevenueResolver.

14. DataQualityResolver.

15. ScaleEligibilityResolver.

**13.16.4. Required Guard**

1.  AdsProductEligibilityGuard.

2.  SellableGuard.

3.  AttributionConflictGuard.

4.  VerifiedRevenueGuard.

5.  ROASGuard.

6.  CPAGuard.

7.  AOVGuard.

8.  DataQualityGuard.

9.  CODFailGuard.

10. ScaleApprovalGuard.

11. OwnerApprovalBeforeScaleGuard.

**13.16.5. Required Scale Metrics**

ADS Scale Gate phải có tối thiểu:

1.  Ads Spend.

2.  Revenue Verified.

3.  ROAS.

4.  CPA.

5.  AOV.

6.  Boxes/Order.

7.  Comment Rate.

8.  Inbox Rate.

9.  Quote Rate.

10. Order Rate.

11. Verified Rate.

12. COD Fail.

13. CRM Revenue.

14. Diamond Revenue.

15. Data Quality.

16. Pilot 7–14 ngày.

17. Owner approval trước scale.

**13.16.6. Required Evidence**

1.  Campaign evidence.

2.  Product activation evidence.

3.  Sellable evidence.

4.  Attribution evidence.

5.  Verified revenue evidence.

6.  Funnel metric evidence.

7.  ROAS/CPA/AOV evidence.

8.  COD fail evidence.

9.  CRM revenue evidence.

10. Diamond revenue evidence.

11. Data quality evidence.

12. Pilot 7–14 ngày evidence.

13. Owner approval evidence.

14. Negative evidence: không scale khi revenue chưa verified.

15. Audit evidence.

**13.16.7. Blocked If Missing**

REL-ADS-001 BLOCK nếu:

1.  ADS đẩy SKU không active/sellable.

2.  ADS đẩy SKU bị recall/sale lock.

3.  ADS tự scale khi thiếu verified revenue.

4.  ADS scale khi data quality không đạt.

5.  ADS scale khi COD fail vượt ngưỡng chưa được owner chấp nhận.

6.  ADS tự quyết định Diamond attribution khi có conflict.

7.  ADS không tách CRM Revenue và Diamond Revenue khi cần.

8.  Không có pilot 7–14 ngày evidence.

9.  Không có owner approval trước scale.

**13.17. REL-MCA-001 — MC AI / LIVE BOARD / SCRIPT BRIEF RELEASE GATE**

**13.17.1. Gate Purpose**

REL-MCA-001 kiểm soát MC AI trước khi MC AI được phép hỗ trợ live, gợi ý lời dẫn, nói SKU, nói chương trình, giữ nhịp bán hoặc hỗ trợ chốt trong live.

MC AI không phải Owner Core của sản phẩm, giá, tồn kho hoặc chương trình.

**13.17.2. Owner Core**

Owner Core:

- Live Commerce Owner.

- Product Activation Owner.

- Program Owner.

- MC AI Owner.

- Channel Owner.

- Compliance Owner.

**13.17.3. Required Resolver**

1.  DailyLiveProductBoardResolver.

2.  MC AIScriptBriefResolver.

3.  LiveSessionResolver.

4.  HeroSKUResolver.

5.  SupportSKUResolver.

6.  RestrictedSKUResolver.

7.  ProgramRuntimeResolver.

8.  QuoteSnapshotBoundaryResolver.

9.  SellableStatusResolver.

10. StockGuardResolver.

11. RecallHoldResolver.

12. SaleLockResolver.

13. FakeUrgencyResolver.

14. LiveModerationResolver.

**13.17.4. Required Guard**

1.  LiveBoardGuard.

2.  ScriptBriefGuard.

3.  SKUOnBoardGuard.

4.  RestrictedSKUGuard.

5.  ProgramRuntimeGuard.

6.  NoPublicPriceGuard nếu policy áp dụng.

7.  QuoteSnapshotBoundaryGuard.

8.  StockGuard.

9.  RecallHoldGuard.

10. SaleLockGuard.

11. FakeUrgencyGuard.

12. LiveModerationGuard.

**13.17.5. Required Evidence**

1.  Daily Live Product Board evidence.

2.  mc_ai_script_brief_id evidence.

3.  Live session evidence.

4.  Hero/support/restricted SKU evidence.

5.  Program runtime evidence.

6.  Quote boundary evidence.

7.  Sellable/stock evidence.

8.  Recall/hold/sale lock negative evidence.

9.  Fake urgency negative evidence.

10. Live moderation evidence.

11. Audit evidence.

**13.17.6. Blocked If Missing**

REL-MCA-001 BLOCK nếu:

1.  MC AI nói SKU ngoài Daily Live Product Board.

2.  MC AI dùng script brief không hợp lệ.

3.  MC AI nói SKU restricted.

4.  MC AI nói giá khi không có QuoteSnapshot / Program Runtime hợp lệ.

5.  MC AI tạo fake urgency.

6.  MC AI nói còn hàng khi Stock Guard chưa PASS.

7.  MC AI tiếp tục bán SKU bị recall/hold/sale lock.

8.  MC AI tự quyết định chương trình live.

9.  MC AI không có audit.

**13.18. REL-CUS-001 — CUSTOMER IDENTITY / CUSTOMER MEMORY GATE**

**13.18.1. Gate Purpose**

REL-CUS-001 kiểm soát việc nhận diện khách hàng, customer memory, lịch sử mua, mục đích mua, người nhận và ngữ cảnh chăm sóc trước khi AI/CRM/Order/Member/Diamond sử dụng dữ liệu.

**13.18.2. Owner Core**

Owner Core:

- Customer Owner.

- CRM Owner.

- Privacy Owner.

- Order Owner.

**13.18.3. Required Resolver**

1.  CustomerIdentityResolver.

2.  CustomerMemoryResolver.

3.  CustomerProfileResolver.

4.  PurchaseHistoryResolver.

5.  RecipientResolver.

6.  PrivacyPreferenceResolver.

7.  ConsentResolver.

**13.18.4. Required Guard**

1.  CustomerIdentityGuard.

2.  CustomerMemoryFreshnessGuard.

3.  PrivacyGuard.

4.  ConsentGuard.

5.  PIIRedactionGuard.

6.  WrongCustomerGuard.

**13.18.5. Required Evidence**

1.  Customer identity evidence.

2.  Customer memory snapshot evidence.

3.  Purchase history evidence.

4.  Recipient distinction evidence.

5.  Privacy evidence.

6.  Wrong-customer negative evidence.

7.  Audit evidence.

**13.18.6. Blocked If Missing**

REL-CUS-001 BLOCK nếu:

1.  Không xác định được khách hàng nhưng AI/CRM nói như đã biết chắc.

2.  Lấy nhầm lịch sử mua của khách khác.

3.  Lặp PII ở public.

4.  Không phân biệt người mua và người nhận.

5.  Customer memory stale nhưng vẫn dùng để chốt.

6.  Privacy opt-out bị bỏ qua.

**13.19. REL-MBR-001 — MEMBER LIFECYCLE / RIGHTS GATE**

**13.19.1. Gate Purpose**

REL-MBR-001 kiểm soát quyền lợi thành viên, hạng thành viên, chu kỳ 12 tháng, duy trì hạng, ân hạng và tranh chấp quyền lợi.

**13.19.2. Owner Core**

Owner Core:

- Member Owner.

- CRM Owner.

- Pricing Owner.

- Customer Owner.

- Dispute Owner.

**13.19.3. Required Resolver**

1.  MemberStatusResolver.

2.  MemberTierResolver.

3.  MemberLifecycleResolver.

4.  MemberRightsResolver.

5.  MemberGraceResolver.

6.  MemberDisputeResolver.

7.  RuntimeRightsResolver.

**13.19.4. Required Guard**

1.  MemberEligibilityGuard.

2.  MemberRightsGuard.

3.  GracePeriodGuard.

4.  DisputeGuard.

5.  RuntimeRightsGuard.

6.  ProgramStackingGuard.

**13.19.5. Required Evidence**

1.  Member identity evidence.

2.  Tier evidence.

3.  Lifecycle evidence.

4.  Rights evidence.

5.  Grace period evidence.

6.  Dispute evidence.

7.  Runtime rights evidence.

8.  Negative evidence: không cộng quyền lợi sai chương trình.

9.  Audit evidence.

**13.19.6. Blocked If Missing**

REL-MBR-001 BLOCK nếu:

1.  AI báo quyền lợi hạng khi runtime không xác nhận.

2.  Quote bỏ sót quyền lợi hạng khi runtime xác nhận eligible.

3.  Giờ Vàng/Live cộng giảm hạng sai policy.

4.  Chu kỳ 12 tháng bị tính sai.

5.  Ân hạng 60 ngày bị bỏ qua.

6.  Tranh chấp quyền lợi không route review.

7.  Không trace được member_lifecycle_event_id.

**13.20. REL-DIA-001 — DIAMOND / AFFILIATE / COMMISSION ATTRIBUTION GATE**

**13.20.1. Gate Purpose**

REL-DIA-001 kiểm soát Diamond, referral link, bind status, attribution, commission, self-purchase exclusion và ranh giới nhà phân phối/khởi nghiệp.

**13.20.2. Owner Core**

Owner Core:

- Diamond Owner.

- Affiliate Owner.

- Commission Owner.

- Finance Owner.

- Order Owner.

- Payment Owner.

**13.20.3. Required Resolver**

1.  DiamondReferralLinkResolver.

2.  DiamondBindResolver.

3.  AttributionResolver.

4.  SelfPurchaseResolver.

5.  CommissionEligibilityResolver.

6.  PaymentVerifiedResolver.

7.  OrderEligibilityResolver.

8.  DistributorBoundaryResolver.

**13.20.4. Required Guard**

1.  DiamondBindGuard.

2.  AttributionConflictGuard.

3.  SelfPurchaseExclusionGuard.

4.  CommissionEligibilityGuard.

5.  PaymentVerifiedGuard.

6.  DistributorBoundaryGuard.

7.  NoBindNoDiamondPathGuard.

**13.20.5. Required Evidence**

1.  Referral link evidence.

2.  Bind status evidence.

3.  Attribution evidence.

4.  Order evidence.

5.  Payment verified evidence.

6.  Self-purchase exclusion evidence.

7.  Commission calculation evidence.

8.  Conflict negative evidence.

9.  Audit evidence.

**13.20.6. Blocked If Missing**

REL-DIA-001 BLOCK nếu:

1.  Không có bind nhưng vẫn ghi Diamond path.

2.  Buyer từ link Diamond bị hiểu nhầm là Diamond member.

3.  Diamond tự mua vẫn tạo commission.

4.  Commission tạo trước khi PAID verified.

5.  ADS tự quyết định Diamond attribution khi conflict.

6.  Không tách quyền lợi thành viên và commission.

7.  Không trace được diamond_bind_id / commission_event_id.

**13.21. REL-HCP-001 — HEALTH / COMPLAINT / PRIVACY PRIORITY GATE**

**13.21.1. Gate Purpose**

REL-HCP-001 kiểm soát các tình huống ưu tiên cao hơn sales, bao gồm health boundary, complaint, privacy, counterfeit, abuse và priority conflict.

**13.21.2. Owner Core**

Owner Core:

- Compliance Owner.

- Health Boundary Owner.

- Complaint Owner.

- Privacy Owner.

- Customer Service Owner.

- Risk Owner.

**13.21.3. Required Resolver**

1.  HealthBoundaryResolver.

2.  ComplaintResolver.

3.  PrivacyCaseResolver.

4.  CounterfeitCaseResolver.

5.  AbuseModerationResolver.

6.  PriorityConflictResolver.

7.  HumanHandoffResolver.

**13.21.4. Required Guard**

1.  HealthBoundaryGuard.

2.  ComplaintGuard.

3.  PrivacyGuard.

4.  CounterfeitGuard.

5.  AbuseModerationGuard.

6.  PriorityConflictGuard.

7.  HumanHandoffGuard.

**13.21.5. Required Evidence**

1.  Health boundary evidence.

2.  Complaint routing evidence.

3.  Privacy opt-out/delete evidence.

4.  Counterfeit routing evidence.

5.  Abuse/troll moderation evidence.

6.  Priority conflict evidence.

7.  Human handoff evidence.

8.  Negative evidence: complaint thật không bị xử như troll.

9.  Audit evidence.

**13.21.6. Blocked If Missing**

REL-HCP-001 BLOCK nếu:

1.  Khách nêu bệnh nhưng AI tư vấn như thuốc.

2.  Khách khiếu nại thật nhưng AI tiếp tục bán.

3.  Privacy request bị bỏ qua.

4.  Comment có mã đơn/mã lô/bằng chứng nhưng bị coi là troll.

5.  Counterfeit case không route đúng.

6.  Safety/complaint/privacy không thắng sales.

7.  Không có audit cho priority conflict.

**13.22. REL-OFC-001 — OFFICIAL CONTACT REGISTRY GATE**

**13.22.1. Gate Purpose**

REL-OFC-001 kiểm soát việc cung cấp số điện thoại, địa chỉ, liên hệ chính thức và tránh lộ số cá nhân lãnh đạo.

**13.22.2. Owner Core**

Owner Core:

- Official Contact Owner.

- Customer Service Owner.

- Partnership Owner.

- Privacy Owner.

**13.22.3. Required Resolver**

1.  OfficialContactResolver.

2.  ContactPurposeResolver.

3.  AddressResolver.

4.  PersonalContactSuppressionResolver.

**13.22.4. Required Guard**

1.  OfficialContactGuard.

2.  ContactPurposeGuard.

3.  PersonalContactLeakGuard.

4.  AddressWordingGuard.

**13.22.5. Required Evidence**

1.  Official contact registry evidence.

2.  Contact purpose evidence.

3.  Address wording evidence.

4.  Personal contact suppression evidence.

5.  Negative evidence: không gửi số cá nhân lãnh đạo.

6.  Audit evidence.

**13.22.6. Blocked If Missing**

REL-OFC-001 BLOCK nếu:

1.  AI tự gửi số điện thoại không qua resolver.

2.  Cung cấp số cá nhân lãnh đạo.

3.  Nhầm số tham quan/gặp công ty/lãnh đạo với số đại lý/hợp tác.

4.  Dùng địa chỉ cũ hoặc không đúng wording owner-provided.

5.  Không audit contact response.

**13.23. REL-FUT-001 — FUTURE GOVERNED EXTENSION GATE**

**13.23.1. Gate Purpose**

REL-FUT-001 kiểm soát mọi future extension trước khi extension được phép ảnh hưởng runtime hiện tại.

Future extension mặc định BLOCKED.

**13.23.2. Owner Core**

Owner Core tùy extension, nhưng tối thiểu phải có:

- Proposed Owner Core.

- Governance Owner.

- Technical Owner.

- Security Owner nếu có dữ liệu/kết nối.

- Business Owner.

- Release Owner.

**13.23.3. Required Resolver**

1.  FutureIntegrationIntakeResolver.

2.  ImpactClassificationResolver.

3.  OwnerApprovalResolver.

4.  ExtensionActivationResolver.

5.  ConflictResolver.

6.  RollbackResolver.

**13.23.4. Required Guard**

1.  FutureExtensionBlockedByDefaultGuard.

2.  ImpactClassificationGuard.

3.  OwnerApprovalGuard.

4.  ConflictSuppressionGuard.

5.  NoRuntimeBypassGuard.

6.  NoHardcodeGuard.

7.  ActivationPathGuard.

**13.23.5. Required Evidence**

1.  Integration intake evidence.

2.  Impact classification evidence.

3.  Owner approval evidence.

4.  Source-of-Truth mapping evidence.

5.  Resolver evidence.

6.  Guard evidence.

7.  Trace ID evidence.

8.  Security evidence nếu thuộc scope.

9.  Smoke evidence.

10. Conflict suppression evidence.

11. Rollback evidence.

12. Completion Gate evidence.

**13.23.6. Blocked If Missing**

REL-FUT-001 BLOCK nếu:

1.  Future extension chưa ACTIVE_GOVERNED_EXTENSION.

2.  Chưa có Owner Core.

3.  Chưa có Source-of-Truth.

4.  Chưa có resolver/guard.

5.  Chưa có impact classification.

6.  Chưa có evidence.

7.  Chưa có smoke.

8.  Chưa có security evidence trong scope.

9.  Extension ảnh hưởng runtime hiện tại khi chưa active.

10. Consumer tự dùng future rule để xử lý nghiệp vụ hiện tại.

**14. CROSS-DOMAIN RELEASE DEPENDENCY RULES**

**14.1. Operational Dependency Rule**

Không Consumer nào được release nếu phụ thuộc Operational Core mà REL-OPR-001 chưa PASS.

Áp dụng cho:

1.  AI Advisor.

2.  ADS.

3.  MC AI.

4.  CRM recommendation.

5.  Landing Page.

6.  Gateway bán hàng.

7.  Order.

8.  IVR order confirmation.

**14.2. Recall Dependency Rule**

Nếu REL-RCL-001 trả BLOCK / STOP_SALE_REQUIRED / SUPPRESS thì các Consumer sau phải dừng action liên quan:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  ADS.

5.  MC AI.

6.  Landing Page.

7.  Order.

8.  IVR nếu đơn chưa đủ điều kiện xác nhận.

9.  Payment nếu order bị hủy/khóa.

10. Shipping nếu chưa giao hoặc đang cần recovery.

**14.3. Payment Dependency Rule**

Không được xác nhận PAID nếu REL-PMT-001 chưa PASS cho payment path tương ứng.

Áp dụng cho:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  Order.

5.  IVR.

6.  Admin UI.

7.  Accounting Review.

8.  Commission.

**14.4. Shipping Dependency Rule**

Không được báo ETA, phí ship, COD, tracking nếu REL-SHP-001 chưa PASS cho địa chỉ/khu vực/phương thức giao hàng tương ứng.

Áp dụng cho:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  Order.

5.  IVR.

6.  Landing Page.

7.  Customer Service.

**14.5. ADS Scale Dependency Rule**

ADS chỉ được scale khi REL-ADS-001 PASS và có owner approval.

Không được scale dựa trên:

1.  Comment nhiều.

2.  Inbox nhiều.

3.  Đơn nháp nhiều.

4.  Revenue chưa verified.

5.  AOV chưa xác thực.

6.  Diamond revenue đang conflict.

7.  COD fail chưa phân tích.

8.  Data quality chưa đạt.

**14.6. MC AI Live Dependency Rule**

MC AI chỉ được live khi REL-MCA-001 PASS cho phiên live cụ thể.

MC AI không được dùng script brief của phiên khác, board khác, chương trình khác hoặc SKU khác.

Nếu Live Board thay đổi, MC AI phải resolve lại.

**14.7. IVR Dependency Rule**

IVR chỉ được gọi khi REL-IVR-001 PASS và order đủ điều kiện xác nhận.

IVR không được mở rộng sang:

1.  Sales.

2.  Upsell.

3.  CRM.

4.  Marketing.

5.  Payment confirmation.

6.  Product consultation.

**15. PHẦN 2/4 DONE GATE**

PHẦN 2/4 được xem là đạt governance scope khi đã khóa đủ:

1.  Release Gate Registry Principles.

2.  Standard Release Gate Record.

3.  Standard Release Gate Decision.

4.  Global Gate Codes.

5.  Governance Release Gate.

6.  Operational Core Release Gate.

7.  Production Readiness Gate.

8.  Warehouse / Inventory Readiness Gate.

9.  Product Activation / Sellable / Stock Gate.

10. Traceability / Public Trace Gate.

11. Recall / Sale Lock / Stop Sale Gate.

12. Security Release Gate.

13. Gateway Release Gate.

14. Payment Release Gate.

15. Shipping Release Gate.

16. CRM Release Gate.

17. Order / Quote / CustomerConfirmation Gate.

18. AI Advisor Release Gate.

19. IVR ORDER_CONFIRMATION_ONLY Gate.

20. ADS / Attribution / ROAS / CPA / AOV / Scale Gate.

21. MC AI / Live Board / Script Brief Gate.

22. Customer Identity / Customer Memory Gate.

23. Member Lifecycle / Rights Gate.

24. Diamond / Affiliate / Commission Attribution Gate.

25. Health / Complaint / Privacy Priority Gate.

26. Official Contact Registry Gate.

27. Future Governed Extension Gate.

28. Cross-domain dependency rules.

**16. PHẦN 2/4 FINAL CONCLUSION**

PHẦN 2/4 của MASTER-07 khóa Release Gate Registry cho toàn bộ domain trọng yếu của Ginsengfood.

Từ điểm này trở đi, mọi domain, pack, channel, campaign, AI, Gateway, CRM, ADS, MC AI, IVR, Payment, Shipping, Order, Operational Core hoặc Future Extension chỉ được xét release nếu có gate tương ứng trong registry và đạt đủ:

**Owner Core → Source-of-Truth → Resolver → Guard → Traceability ID → Evidence ACCEPTED → Smoke PASS → Negative Path PASS → Security PASS nếu thuộc scope → Owner Sign-off → Completion Gate PASS**

Nếu thiếu một trong các điều kiện P0, gate mặc định là:

**BLOCKED / PENDING_EVIDENCE / NOT RELEASED / NOT GO-LIVE**.

# PHẦN 3/4 — PRODUCTION READINESS MATRIX / E2E RELEASE SMOKE / ADS SCALE GATE / MC AI LIVE GATE / RECALL STOP-SALE CONTROL

## 17. PRODUCTION READINESS MATRIX PRINCIPLES

### 17.1. Production Readiness Matrix Purpose

Production Readiness Matrix là bảng quyết định dùng để xác định từng domain, pack, channel, capability hoặc extension có đủ điều kiện vận hành production-controlled hay chưa.

Matrix này không thay thế Release Gate Registry ở PHẦN 2/4. Matrix này dùng để tổng hợp trạng thái thực tế của các gate trước khi đi đến quyết định:

1.  PRODUCTION_READY.

2.  RELEASE_APPROVED.

3.  GO_LIVE_APPROVED.

4.  BLOCKED.

5.  ROLLBACK_REQUIRED.

6.  STOP_SALE_REQUIRED.

7.  SCALE_APPROVED.

8.  SCALE_BLOCKED.

9.  LIVE_BLOCKED.

10. FUTURE_EXTENSION_BLOCKED.

### 17.2. Matrix Decision Rule

Một domain chỉ được đánh dấu PRODUCTION_READY khi đồng thời đạt đủ:

1.  Gate tương ứng trong Release Gate Registry đã PASS.

2.  Evidence bắt buộc có trạng thái ACCEPTED.

3.  Smoke bắt buộc đã PASS.

4.  Negative path đã PASS.

5.  Security evidence đã PASS nếu domain thuộc scope security.

6.  E2E smoke đã PASS nếu domain nằm trong luồng trọng yếu.

7.  Owner sign-off đã có.

8.  Completion Gate liên quan đã PASS.

9.  Không còn P0 blocker.

10. Không có conflict chưa xử lý.

11. Không có suppression đang active làm vô hiệu release.

12. Không có stale runtime dependency.

13. Rollback path đã sẵn sàng nếu domain có tác động production.

Nếu thiếu một điều kiện P0, trạng thái mặc định là BLOCKED hoặc PENDING_EVIDENCE.

### 17.3. Matrix Cannot Promote Status Automatically

Matrix không được tự nâng trạng thái từ:

- PENDING_EVIDENCE lên PASS.

- Production Ready Candidate lên Production Ready.

- Production Ready lên Release Approved.

- Release Approved lên Go-live Approved.

- Pilot Approved lên Scale Approved.

- Future Proposed lên Active Governed Extension.

Mọi lần nâng trạng thái phải có:

1.  owner_signoff_id.

2.  evidence_id.

3.  smoke_id.

4.  completion_gate_id.

5.  audit_id.

6.  correlation_id.

## 18. GLOBAL PRODUCTION READINESS DECISION MATRIX

### 18.1. Global Readiness Matrix

| **Domain / Capability**       | **Required Gate** | **Production Ready khi**                                                                 | **Blocked nếu**                                                  |
|-------------------------------|-------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| Governance                    | REL-GOV-001       | MASTER/PACK registry, SOT, Owner, Gate, Evidence mapping đầy đủ                          | Thiếu SOT, Owner, Gate hoặc evidence                             |
| Operational Core              | REL-OPR-001       | Production, warehouse, inventory, sellable, hold/recall/sale lock guard có evidence      | Consumer có thể bán khi Operational Core BLOCK                   |
| Production                    | REL-PRD-001       | PO, recipe snapshot, batch, material issue/receipt, QC, release có trace                 | QC_PASS bị hiểu là RELEASED hoặc batch chưa release vẫn nhập kho |
| Warehouse / Inventory         | REL-WHI-001       | Warehouse receipt, ledger, stock available, reserved/blocked stock có audit              | Stock không khớp ledger, tồn âm, thiếu stock guard               |
| Product Activation / Sellable | REL-PAS-001       | Base Sellable Gate PASS                                                                  | SKU chưa sellable, không có price, bị hold/recall/sale lock      |
| Traceability                  | REL-TRC-001       | Internal trace, public trace whitelist, QR validity có evidence                          | Public trace lộ dữ liệu nội bộ hoặc trace gap                    |
| Recall / Sale Lock            | REL-RCL-001       | Recall impact, hold, sale lock, stop sale, suppression hoạt động                         | SKU/lô bị recall vẫn bán/quote/ADS/CRM/live                      |
| Security                      | REL-SEC-001       | Auth, permission, secret, webhook, PII, payment data guard PASS                          | Secret hardcode, PII leak, webhook không verify                  |
| Gateway                       | REL-GTW-001       | Public/Messenger/handoff/moderation/security/completion PASS                             | Completion Report còn PENDING_EVIDENCE                           |
| Payment                       | REL-PMT-001       | Payment Core, Bank Registry, payment_reference, Accounting Review PASS                   | Hardcode bank, PaymentReference bị coi là PAID                   |
| Shipping                      | REL-SHP-001       | Shipping eligibility, fee, COD, ETA, tracking PASS                                       | AI/Gateway/CRM bịa ETA/phí ship/tracking                         |
| CRM                           | REL-CRM-001       | Trigger, suppression, customer context, journey, privacy PASS                            | CRM spam, gửi khi suppression, gợi ý SKU bị lock                 |
| Order / Quote                 | REL-ORD-001       | QuoteSnapshot, OrderDraft, CustomerConfirmation, OrderCode PASS                          | Báo giá không snapshot, tạo order không confirmation             |
| AI Advisor                    | REL-AIA-001       | Product knowledge, claim, customer, quote/order/payment/shipping/stop sale boundary PASS | AI tự suy luận runtime, nói như thuốc, bán SKU bị lock           |
| IVR                           | REL-IVR-001       | ORDER_CONFIRMATION_ONLY, call log, confirmation result, retry, audit PASS                | IVR bán hàng, upsell, xác nhận payment                           |
| ADS                           | REL-ADS-001       | Verified revenue, ROAS/CPA/AOV, data quality, pilot, owner approval PASS                 | ADS scale khi revenue chưa verified hoặc SKU không sellable      |
| MC AI Live                    | REL-MCA-001       | Live Board, Script Brief, SKU board, program runtime, stock/recall guard PASS            | MC AI nói SKU ngoài board, fake urgency, nói SKU bị lock         |
| Customer Identity             | REL-CUS-001       | Identity, memory, privacy, consent, recipient distinction PASS                           | Nhầm khách, lặp PII, dùng memory stale                           |
| Member Rights                 | REL-MBR-001       | Tier, lifecycle, rights, grace, dispute, runtime eligibility PASS                        | Quote bỏ sót quyền lợi hoặc cộng quyền lợi sai policy            |
| Diamond / Affiliate           | REL-DIA-001       | Link, bind, attribution, paid eligibility, self-purchase exclusion PASS                  | Không bind vẫn ghi Diamond path, commission trước PAID           |
| Health / Complaint / Privacy  | REL-HCP-001       | Health boundary, complaint, privacy, counterfeit, handoff PASS                           | Complaint thật bị xử như troll hoặc safety không thắng sales     |
| Official Contact              | REL-OFC-001       | Contact registry, purpose, address wording, personal contact suppression PASS            | Tự gửi số, dùng địa chỉ cũ, lộ số cá nhân lãnh đạo               |
| Future Extension              | REL-FUT-001       | ACTIVE_GOVERNED_EXTENSION + đầy đủ intake/evidence/smoke/sign-off                        | Extension ảnh hưởng runtime hiện tại khi chưa active             |

### 18.2. Required Decision Output

Mỗi lần đánh giá Production Readiness phải xuất decision record có tối thiểu:

1.  production_readiness_decision_id.

2.  domain_id.

3.  release_gate_id.

4.  decision_state.

5.  decision_reason.

6.  evidence_id list.

7.  smoke_id list.

8.  negative_path_result.

9.  security_result nếu áp dụng.

10. owner_signoff_id.

11. unresolved_blocker list.

12. rollback_required.

13. audit_id.

14. correlation_id.

15. decided_at.

Không có decision record thì không được gọi Production Ready.

## 19. E2E RELEASE SMOKE MODEL

### 19.1. E2E Smoke Purpose

E2E Release Smoke dùng để chứng minh các domain liên kết đúng trong luồng thực tế, không chỉ đúng từng module riêng lẻ.

Unit smoke chỉ chứng minh một phần nhỏ.

E2E smoke chứng minh hệ thống chạy đúng qua nhiều pack, nhiều resolver, nhiều guard và nhiều trạng thái nghiệp vụ.

Đối với luồng trọng yếu, E2E smoke là bắt buộc.

### 19.2. E2E Smoke Required Principles

Mỗi E2E smoke phải có:

1.  smoke_id.

2.  scenario_name.

3.  business_domain_scope.

4.  source_of_truth.

5.  owner_core.

6.  resolver path.

7.  guard path.

8.  trace ID chain.

9.  positive path result.

10. negative path result.

11. evidence_id.

12. audit_id.

13. correlation_id.

14. owner_signoff_id nếu dùng cho release.

15. final decision.

Smoke không có trace ID không được dùng để xét release.

Smoke không có negative path không đủ điều kiện P0.

### 19.3. E2E Smoke Status

| **Status** | **Ý nghĩa**                            | **Được dùng PASS không** |
|------------|----------------------------------------|--------------------------|
| NOT_RUN    | Chưa chạy                              | Không                    |
| RUNNING    | Đang chạy                              | Không                    |
| PASS       | Đạt                                    | Có nếu evidence ACCEPTED |
| FAIL       | Không đạt                              | Không                    |
| BLOCKED    | Bị chặn do thiếu dependency            | Không                    |
| FLAKY      | Không ổn định                          | Không                    |
| PARTIAL    | Chỉ chạy một phần                      | Không dùng cho P0        |
| SUPERSEDED | Bị thay thế                            | Không                    |
| ACCEPTED   | Smoke đã được owner/evidence chấp nhận | Có                       |

## 20. E2E RELEASE SMOKE MATRIX

### 20.1. MAS-REL-SMK-001 — Operational Core To Sellable Smoke

#### Mục tiêu

Chứng minh sản phẩm chỉ được mở bán khi Operational Core đủ điều kiện.

#### Scope

1.  Production.

2.  Warehouse.

3.  Inventory.

4.  Product Activation.

5.  Sellable.

6.  Price active.

7.  Hold / Recall / Sale Lock.

8.  Channel eligibility.

#### Positive Path

SKU được bán khi:

1.  Sản xuất hoàn tất.

2.  Batch released.

3.  Thành phẩm nhập kho.

4.  Stock available \> 0.

5.  Giá active.

6.  SKU sellable.

7.  Không hold.

8.  Không recall.

9.  Không sale lock.

10. Channel được phép bán.

#### Negative Path

SKU không được bán khi:

1.  stock_available = 0.

2.  listed_price_status không active.

3.  sellable_status không phải SELLABLE.

4.  Có quality hold.

5.  Có recall hold.

6.  Có sale lock.

7.  Có channel block.

#### PASS khi

Consumer không thể quote, order, ADS, CRM, MC AI hoặc Landing Page CTA cho SKU bị block.

### 20.2. MAS-REL-SMK-002 — Quote To Order To CustomerConfirmation Smoke

#### Mục tiêu

Chứng minh luồng chốt đơn không đi tắt.

#### Scope

1.  Program Runtime.

2.  QuoteSnapshot.

3.  QuoteCart.

4.  Member benefit.

5.  Diamond benefit.

6.  VAT display.

7.  OrderConfirmationDraft.

8.  CustomerConfirmation.

9.  OrderCode.

#### Positive Path

Order chỉ được tạo khi:

1.  Có QuoteSnapshot hợp lệ.

2.  Quote còn trong thời hạn giữ giá.

3.  Giá chương trình đúng runtime.

4.  Quyền lợi member/Diamond được hiển thị đúng nếu eligible.

5.  VAT hiển thị rõ.

6.  Khách xác nhận đúng.

7.  CustomerConfirmation được ghi nhận.

8.  OrderCode được tạo sau confirmation.

#### Negative Path

Order bị chặn khi:

1.  Không có QuoteSnapshot.

2.  Quote hết hạn.

3.  Thiếu CustomerConfirmation.

4.  SKU bị stop sale sau khi quote nhưng trước khi confirm.

5.  Thiếu shipping eligibility.

6.  Duplicate order nghi ngờ.

7.  PaymentReference bị hiểu sai là PAID.

#### PASS khi

Không thể tạo OrderCode nếu chưa có CustomerConfirmation hợp lệ.

### 20.3. MAS-REL-SMK-003 — Payment / Bank Transfer / Accounting Review Smoke

#### Mục tiêu

Chứng minh thanh toán không bị xác nhận sai.

#### Scope

1.  Payment method.

2.  Company Bank Account Registry.

3.  payment_reference.

4.  transfer memo.

5.  Bank transfer queue.

6.  Accounting Review.

7.  Payment status.

8.  Reconcile.

#### Positive Path

Payment được xác nhận khi:

1.  Payment method hợp lệ.

2.  Bank account lấy từ Company Bank Account Registry.

3.  payment_reference hợp lệ.

4.  transfer memo hợp lệ.

5.  Accounting Review xác nhận.

6.  Payment Core cập nhật trạng thái.

7.  Audit đầy đủ.

#### Negative Path

Payment không được xác nhận khi:

1.  Chỉ có lời khách nói đã chuyển.

2.  Chỉ có PaymentReference.

3.  Thiếu Accounting Review.

4.  Tài khoản ngân hàng bị hardcode.

5.  IVR cố xác nhận payment.

6.  Gateway public instruction sai policy.

#### PASS khi

Không có luồng nào tự đổi trạng thái PAID nếu thiếu Payment Core / Accounting Review confirmation.

### 20.4. MAS-REL-SMK-004 — Shipping / COD / ETA / Tracking Smoke

#### Mục tiêu

Chứng minh phí ship, COD, ETA và tracking không bị bịa.

#### Scope

1.  Shipping eligibility.

2.  Domestic shipping.

3.  Shipping fee.

4.  COD.

5.  ETA.

6.  Tracking.

7.  Delivery status.

8.  Return / recovery nếu có.

#### Positive Path

Shipping được báo khi:

1.  Địa chỉ đủ điều kiện.

2.  Phí ship resolve được.

3.  COD resolve được nếu áp dụng.

4.  ETA lấy từ Shipping Core.

5.  Tracking có nguồn.

6.  Delivery status có audit.

#### Negative Path

Shipping bị chặn khi:

1.  Địa chỉ chưa đủ thông tin.

2.  Khu vực chưa hỗ trợ.

3.  COD không eligible.

4.  ETA không resolve được.

5.  Tracking chưa có.

6.  International shipping chưa được owner approve.

#### PASS khi

AI/Gateway/CRM/Order không tự bịa phí ship, ETA, COD hoặc tracking.

### 20.5. MAS-REL-SMK-005 — Gateway Public Comment To Messenger Handoff Smoke

#### Mục tiêu

Chứng minh Gateway xử lý đúng public comment và Messenger handoff.

#### Scope

1.  Public comment.

2.  Messenger handoff.

3.  Handoff success/fail.

4.  PII suppression.

5.  Price suppression nếu policy áp dụng.

6.  Health detail suppression.

7.  Payment instruction suppression.

8.  Moderation.

9.  Complaint routing.

#### Positive Path

Gateway đạt khi:

1.  Public comment trả lời đúng boundary.

2.  Giá/chốt đơn/payment không public trái policy.

3.  Handoff thành công mới nói đã gửi Messenger.

4.  Handoff fail không nói đã gửi.

5.  PII không lặp public.

6.  Complaint route đúng.

7.  Troll/abuse route moderation đúng.

#### Negative Path

Gateway bị chặn khi:

1.  Completion Report còn PENDING_EVIDENCE.

2.  Webhook/security chưa PASS.

3.  Public comment báo giá trái policy.

4.  PII bị lặp public.

5.  Handoff fail nhưng AI nói đã gửi.

6.  Complaint thật bị xử như troll.

#### PASS khi

Gateway không được gọi PASS nếu Completion Gate chưa PASS.

### 20.6. MAS-REL-SMK-006 — Shipping Eligibility Cross-Pack Smoke

#### Mục tiêu

Chứng minh Shipping eligibility được kết nối đúng với các pack liên quan.

#### Scope bắt buộc

MAS-SMK-006 phải link tối thiểu:

1.  PACK-04.

2.  PACK-01.

3.  PACK-03.

4.  PACK-05.

#### Positive Path

Shipping eligibility đạt khi:

1.  Order có thông tin giao hàng đủ điều kiện.

2.  Shipping Core resolve được phương thức.

3.  Fee/COD/ETA phù hợp.

4.  Quote/Order hiển thị đúng.

5.  AI/CRM/Gateway không tự suy luận.

#### Negative Path

Shipping eligibility bị chặn khi:

1.  Thiếu pack dependency.

2.  Shipping Core không trả kết quả.

3.  Địa chỉ không đủ điều kiện.

4.  Fee/ETA stale.

5.  International shipping bị gọi khi chưa approved.

#### PASS khi

Shipping eligibility không bị hardcode ở Consumer.

### 20.7. MAS-REL-SMK-007 — Recall / Stop Sale / Consumer Suppression Smoke

#### Mục tiêu

Chứng minh Recall / Stop Sale thắng toàn bộ sales.

#### Scope

1.  Recall case.

2.  Impact analysis.

3.  Hold.

4.  Sale Lock.

5.  Stop Sale.

6.  AI Advisor suppression.

7.  CRM suppression.

8.  ADS suppression.

9.  MC AI suppression.

10. Gateway suppression.

11. Landing Page CTA suppression.

12. Order block.

#### Positive Path

Khi Recall / Stop Sale được kích hoạt:

1.  SKU/lô liên quan bị khóa.

2.  AI không quote.

3.  CRM không gợi ý.

4.  ADS không chạy/scale.

5.  MC AI không nói/bán.

6.  Gateway không chốt.

7.  Landing Page không CTA mua.

8.  Order không tạo mới.

9.  Audit đầy đủ.

#### Negative Path

Smoke FAIL nếu:

1.  SKU bị recall vẫn quote được.

2.  SKU bị sale lock vẫn order được.

3.  ADS vẫn đẩy SKU bị lock.

4.  CRM vẫn gửi gợi ý SKU bị lock.

5.  MC AI vẫn nói SKU bị lock.

6.  Landing Page vẫn mở CTA mua.

7.  Gateway vẫn kéo khách chốt SKU bị lock.

#### PASS khi

Stop Sale được chứng minh trên tất cả Consumer liên quan.

### 20.8. MAS-REL-SMK-008 — ADS Scale Gate Smoke

#### Mục tiêu

Chứng minh ADS chỉ được scale khi có dữ liệu verified và owner approval.

#### Scope

1.  Ads Spend.

2.  Revenue Verified.

3.  ROAS.

4.  CPA.

5.  AOV.

6.  Boxes/Order.

7.  Comment Rate.

8.  Inbox Rate.

9.  Quote Rate.

10. Order Rate.

11. Verified Rate.

12. COD Fail.

13. CRM Revenue.

14. Diamond Revenue.

15. Data Quality.

16. Pilot 7–14 ngày.

17. Owner approval.

#### Positive Path

ADS được scale khi:

1.  SKU active/sellable.

2.  Không bị recall/sale lock.

3.  Revenue đã verified.

4.  ROAS/CPA/AOV đủ ngưỡng owner quyết.

5.  Funnel metrics đủ chất lượng.

6.  COD Fail không vượt ngưỡng hoặc đã được owner chấp nhận.

7.  Data quality đạt.

8.  Pilot 7–14 ngày có evidence.

9.  Owner approval trước scale.

#### Negative Path

ADS bị block scale khi:

1.  Revenue chưa verified.

2.  Data quality không đạt.

3.  SKU không sellable.

4.  SKU bị stop sale.

5.  Attribution conflict chưa xử lý.

6.  Diamond revenue conflict.

7.  COD Fail cao chưa review.

8.  Không có pilot evidence.

9.  Không có owner approval.

#### PASS khi

Không thể tăng ngân sách/scale nếu thiếu verified revenue và owner approval.

### 20.9. MAS-REL-SMK-009 — MC AI Live Board / Script Brief Smoke

#### Mục tiêu

Chứng minh MC AI chỉ nói theo board và script brief hợp lệ.

#### Scope

1.  Daily Live Product Board.

2.  mc_ai_script_brief_id.

3.  Live session.

4.  SKU hero.

5.  SKU hỗ trợ.

6.  SKU restricted.

7.  Program runtime.

8.  Quote boundary.

9.  Stock guard.

10. Recall / Sale Lock guard.

11. Fake urgency guard.

12. Live moderation.

#### Positive Path

MC AI được hoạt động khi:

1.  Có Daily Live Product Board hợp lệ.

2.  Có mc_ai_script_brief_id hợp lệ.

3.  SKU nằm trong board.

4.  SKU không restricted.

5.  Program runtime hợp lệ.

6.  Stock/Sellable Guard PASS.

7.  Recall/Sale Lock Guard PASS.

8.  Không tạo fake urgency.

9.  Có audit.

#### Negative Path

MC AI bị chặn khi:

1.  Không có board.

2.  Không có script brief hợp lệ.

3.  Nói SKU ngoài board.

4.  Nói SKU restricted.

5.  Nói giá khi thiếu QuoteSnapshot/Program Runtime.

6.  Nói hàng còn khi Stock Guard chưa PASS.

7.  Nói SKU bị recall/sale lock.

8.  Tạo fake urgency.

#### PASS khi

MC AI bị buộc dừng đúng lúc khi board, stock, recall hoặc sale lock thay đổi.

### 20.10. MAS-REL-SMK-010 — IVR ORDER_CONFIRMATION_ONLY Smoke

#### Mục tiêu

Chứng minh IVR chỉ xác nhận đơn, không bán hàng, không upsell, không xác nhận payment.

#### Scope

1.  PACK-09 IVR_ORDER_CONFIRMATION.

2.  INTERNAL_SIM_GATEWAY_SERVER.

3.  OrderConfirmationDraft.

4.  OrderCode.

5.  Customer phone.

6.  Call attempt.

7.  Confirmation result.

8.  Retry policy.

9.  Call log.

10. Audit.

#### Positive Path

IVR được gọi khi:

1.  Có OrderConfirmationDraft/OrderCode hợp lệ.

2.  Customer phone hợp lệ.

3.  Call frequency hợp lệ.

4.  Nội dung chỉ xác nhận đơn.

5.  Có confirmation result.

6.  Có call log.

7.  Có audit.

#### Negative Path

IVR bị block khi:

1.  Không có order đủ điều kiện.

2.  IVR cố bán hàng.

3.  IVR upsell.

4.  IVR xác nhận payment.

5.  IVR tự đổi order state ngoài phạm vi xác nhận đơn.

6.  Không có call log.

7.  Không có retry policy.

#### PASS khi

IVR được chứng minh đúng ORDER_CONFIRMATION_ONLY.

## 21. ADS SCALE GATE CONTROL

### 21.1. ADS Scale Gate Purpose

ADS Scale Gate kiểm soát việc tăng ngân sách, mở rộng chiến dịch, nhân rộng campaign, mở thêm page/live/landing hoặc đẩy mạnh traffic.

Scale không được quyết định bằng cảm tính.

Scale phải dựa trên verified revenue, funnel quality, operational readiness và owner approval.

### 21.2. ADS Scale Gate Minimum Metrics

Một ADS Scale Gate hợp lệ phải có tối thiểu:

| **Metric**       | **Ý nghĩa**                  | **Gate yêu cầu**  |
|------------------|------------------------------|-------------------|
| Ads Spend        | Chi phí quảng cáo            | Có nguồn và audit |
| Revenue Verified | Doanh thu đã xác thực        | Bắt buộc          |
| ROAS             | Hiệu quả doanh thu/chi phí   | Bắt buộc          |
| CPA              | Chi phí chuyển đổi           | Bắt buộc          |
| AOV              | Giá trị đơn trung bình       | Bắt buộc          |
| Boxes/Order      | Số hộp mỗi đơn               | Bắt buộc          |
| Comment Rate     | Tỷ lệ bình luận              | Theo dõi          |
| Inbox Rate       | Tỷ lệ vào inbox              | Theo dõi          |
| Quote Rate       | Tỷ lệ báo giá                | Bắt buộc          |
| Order Rate       | Tỷ lệ tạo đơn                | Bắt buộc          |
| Verified Rate    | Tỷ lệ xác thực đơn/doanh thu | Bắt buộc          |
| COD Fail         | Rủi ro COD                   | Bắt buộc          |
| CRM Revenue      | Doanh thu CRM                | Phân tách khi có  |
| Diamond Revenue  | Doanh thu Diamond            | Phân tách khi có  |
| Data Quality     | Chất lượng dữ liệu           | Bắt buộc          |
| Pilot 7–14 ngày  | Giai đoạn thử nghiệm         | Bắt buộc          |
| Owner Approval   | Phê duyệt scale              | Bắt buộc          |

### 21.3. ADS Scale Decision States

| **State**                | **Ý nghĩa**                 | **Được scale không** |
|--------------------------|-----------------------------|----------------------|
| NOT_READY                | Chưa đủ dữ liệu             | Không                |
| PILOT_RUNNING            | Đang pilot 7–14 ngày        | Không scale lớn      |
| PENDING_VERIFIED_REVENUE | Chưa xác thực doanh thu     | Không                |
| PENDING_DATA_QUALITY     | Chưa đạt chất lượng dữ liệu | Không                |
| PENDING_OWNER_APPROVAL   | Chờ owner duyệt             | Không                |
| SCALE_READY_CANDIDATE    | Có thể xét scale            | Chưa                 |
| SCALE_APPROVED           | Được scale                  | Có                   |
| SCALE_BLOCKED            | Bị chặn scale               | Không                |
| SCALE_PAUSED             | Tạm dừng scale              | Không                |
| SCALE_ROLLBACK_REQUIRED  | Cần rollback scale          | Không                |

### 21.4. ADS Scale Blockers

ADS Scale bị BLOCK nếu:

1.  SKU không active.

2.  SKU không sellable.

3.  SKU bị recall.

4.  SKU bị sale lock.

5.  Stock Guard không PASS.

6.  Revenue chưa verified.

7.  ROAS/CPA/AOV không đạt ngưỡng owner đặt ra.

8.  Data quality không đạt.

9.  Attribution conflict chưa giải quyết.

10. Diamond revenue conflict chưa giải quyết.

11. COD Fail vượt ngưỡng chưa review.

12. Quote/Order data không trace được.

13. Payment verified không khớp doanh thu.

14. Pilot 7–14 ngày chưa đủ evidence.

15. Không có owner approval.

16. Gateway chưa PASS nhưng campaign cần Gateway.

17. Payment/Shipping/Order gate chưa PASS nhưng campaign dẫn đến chốt đơn.

18. Recall/Stop Sale negative smoke chưa PASS.

### 21.5. ADS Scale Approval Rule

ADS chỉ được SCALE_APPROVED khi:

1.  REL-ADS-001 PASS.

2.  REL-PAS-001 PASS cho SKU.

3.  REL-RCL-001 không có active lock.

4.  REL-ORD-001 PASS nếu campaign có chốt đơn.

5.  REL-PMT-001 PASS nếu campaign có thu tiền.

6.  REL-SHP-001 PASS nếu campaign có giao hàng.

7.  REL-GTW-001 PASS nếu campaign dùng Gateway/Messenger.

8.  Verified revenue đạt.

9.  Data quality đạt.

10. Pilot 7–14 ngày evidence ACCEPTED.

11. owner_signoff_id hợp lệ.

Không có owner_signoff_id thì không scale.

## 22. MC AI LIVE GATE CONTROL

### 22.1. MC AI Live Gate Purpose

MC AI Live Gate kiểm soát việc MC AI tham gia hỗ trợ nội dung live để tránh:

1.  Nói sai SKU.

2.  Nói SKU không nằm trong board.

3.  Nói giá khi chưa có runtime hợp lệ.

4.  Tạo fake urgency.

5.  Nói hàng còn khi chưa có stock guard.

6.  Tiếp tục bán SKU bị recall/sale lock.

7.  Làm rối Gateway/Messenger handoff.

8.  Vượt ranh giới claim/safety.

### 22.2. MC AI Live Required Inputs

Trước mỗi phiên live, MC AI phải có:

1.  live_session_id.

2.  daily_live_product_board_id.

3.  mc_ai_script_brief_id.

4.  hero_sku list.

5.  support_sku list.

6.  restricted_sku list.

7.  program_runtime_status.

8.  quote_boundary_policy.

9.  stock_guard_status.

10. recall_hold_status.

11. sale_lock_status.

12. fake_urgency_policy.

13. moderation_policy.

14. audit_id.

15. correlation_id.

Thiếu một input P0 thì MC AI Live Gate BLOCK.

### 22.3. MC AI Allowed Actions

MC AI chỉ được:

1.  Gợi ý lời dẫn theo script brief hợp lệ.

2.  Nhắc đúng SKU trong board.

3.  Nhắc đúng điểm mạnh public-safe.

4.  Dẫn khách về Messenger theo policy.

5.  Hỗ trợ nhịp live trong boundary.

6.  Dừng nói SKU khi guard BLOCK.

7.  Cảnh báo nội bộ khi board/stock/recall/sale lock thay đổi.

MC AI không được:

1.  Tự thêm SKU ngoài board.

2.  Tự tạo giá.

3.  Tự quote riêng cho khách.

4.  Tự chốt đơn.

5.  Tự xác nhận thanh toán.

6.  Tự nói còn hàng nếu Stock Guard chưa PASS.

7.  Tự nói “sắp hết” nếu runtime không xác nhận.

8.  Tự dùng claim điều trị.

9.  Tự bỏ qua recall/sale lock.

10. Tự mở chương trình live ngoài board.

### 22.4. MC AI Live Stop Rule

MC AI phải dừng nói/bán SKU ngay khi:

1.  SKU bị remove khỏi Daily Live Product Board.

2.  Program Runtime không còn active.

3.  Stock Guard BLOCK.

4.  Sellable Guard BLOCK.

5.  Recall Hold active.

6.  Sale Lock active.

7.  Stop Sale active.

8.  Claim Guard BLOCK.

9.  Moderation Guard yêu cầu suppress.

10. Owner pause live SKU.

MC AI không được chờ đến hết phiên live mới dừng.

## 23. RECALL / STOP-SALE CONTROL

### 23.1. Recall / Stop-Sale Purpose

Recall / Stop-Sale Control là lớp bảo vệ cao nhất đối với sản phẩm, khách hàng, thương hiệu và pháp lý vận hành.

Khi Recall / Stop Sale active, mọi sales action phải dừng trong scope bị ảnh hưởng.

### 23.2. Stop-Sale Scope Types

Stop Sale có thể áp dụng theo:

1.  SKU.

2.  Batch.

3.  Lot.

4.  Trade item.

5.  Channel.

6.  Program.

7.  Live session.

8.  ADS campaign.

9.  Landing Page.

10. Customer segment.

11. Region.

12. Time window.

13. Full product line.

Scope phải được xác định rõ bằng trace ID.

### 23.3. Stop-Sale Required Trace IDs

Mỗi Stop-Sale decision phải trace được:

1.  recall_case_id nếu phát sinh từ recall.

2.  sale_lock_id.

3.  affected_sku_id.

4.  affected_batch_id nếu có.

5.  affected_lot_id nếu có.

6.  affected_channel_id nếu có.

7.  affected_program_id nếu có.

8.  impact_analysis_id.

9.  suppression_event_id.

10. evidence_id.

11. audit_id.

12. correlation_id.

13. owner_signoff_id nếu cần owner decision.

Không có trace ID thì Stop Sale không đạt release evidence.

### 23.4. Stop-Sale Consumer Suppression Matrix

| **Consumer** | **Khi Stop Sale active phải làm gì**                                    |
|--------------|-------------------------------------------------------------------------|
| AI Advisor   | Không tư vấn bán, không quote, không tạo order draft cho SKU/lô bị lock |
| Gateway      | Không kéo chốt SKU bị lock, không public CTA mua                        |
| CRM          | Dừng message gợi ý/chốt mua SKU bị lock                                 |
| ADS          | Dừng campaign hoặc loại SKU bị lock khỏi campaign                       |
| MC AI        | Dừng nói/bán SKU bị lock trong live                                     |
| Landing Page | Gỡ/ẩn CTA mua hoặc hiển thị trạng thái không bán theo policy            |
| Order        | Chặn order mới hoặc yêu cầu review với order đang dở                    |
| Payment      | Không tạo payment mới cho order bị chặn                                 |
| Shipping     | Không đẩy giao nếu order bị hold theo policy                            |
| IVR          | Không gọi xác nhận đơn chưa đủ điều kiện                                |
| Admin UI     | Hiển thị lock rõ cho operator                                           |
| Reporting    | Ghi nhận impact và revenue affected                                     |

### 23.5. Recall / Stop-Sale Release Blockers

Release bị BLOCK nếu:

1.  Recall không chặn được quote.

2.  Recall không chặn được order.

3.  Recall không chặn được ADS.

4.  Recall không chặn được CRM.

5.  Recall không chặn được MC AI.

6.  Recall không chặn được Landing Page CTA.

7.  Recall không chặn được Gateway chốt đơn.

8.  Stop Sale không trace được scope.

9.  Consumer không nhận được suppression.

10. Không có negative path evidence.

11. Không có audit.

12. Không có owner decision cho case nghiêm trọng.

13. Closed with residual risk nhưng thiếu residual note.

14. Recovery chưa evidence nhưng đã mở bán lại.

### 23.6. Reopen After Stop-Sale Rule

SKU/lô/channel/program chỉ được mở bán lại khi:

1.  Recall/Hold/Sale Lock được giải quyết.

2.  Recovery evidence ACCEPTED.

3.  QC/Operational owner xác nhận.

4.  Traceability không còn gap nghiêm trọng.

5.  Product Activation/Sellable PASS lại.

6.  Stock Guard PASS lại.

7.  Consumer suppression được gỡ có audit.

8.  Owner sign-off hợp lệ.

9.  Release decision record được cập nhật.

10. E2E negative path được rerun nếu scope P0.

Không được mở bán lại bằng thao tác thủ công không audit.

## 24. PRODUCTION READINESS FINAL MATRIX

### 24.1. Readiness Decision Levels

| **Level**                            | **Ý nghĩa**                     | **Điều kiện tối thiểu**             |
|--------------------------------------|---------------------------------|-------------------------------------|
| Level 0 — Documentation Ready        | Tài liệu governance/pack đã sẵn | Không đủ production                 |
| Level 1 — Implementation Candidate   | Có triển khai sơ bộ             | Chưa đủ release                     |
| Level 2 — Smoke Ready                | Smoke chính PASS                | Chưa đủ nếu thiếu evidence accepted |
| Level 3 — Evidence Ready             | Evidence ACCEPTED               | Cần owner review                    |
| Level 4 — Production Ready Candidate | Đủ điều kiện kỹ thuật sơ bộ     | Chưa release                        |
| Level 5 — Production Ready           | Đủ production readiness         | Chưa go-live                        |
| Level 6 — Release Approved           | Owner duyệt release             | Chưa go-live nếu chưa final gate    |
| Level 7 — Go-live Approved           | Được vận hành thật              | Có thể live trong scope             |
| Level 8 — Live                       | Đang vận hành                   | Phải monitoring                     |
| Level 9 — Scale Approved             | Được scale                      | Chỉ áp dụng scope scale             |
| Level 10 — Rollback / Stop Required  | Cần dừng/rollback               | Chặn release/scale/live             |

### 24.2. Minimum Gates For Production Ready

Một release candidate chỉ được đánh dấu Production Ready khi tối thiểu các gate sau đạt theo scope:

1.  REL-GOV-001.

2.  REL-OPR-001 nếu có sản phẩm/vận hành.

3.  REL-PAS-001 nếu có bán hàng/hiển thị SKU.

4.  REL-RCL-001 nếu có sản phẩm thật.

5.  REL-SEC-001 nếu có dữ liệu/kênh/integration.

6.  REL-ORD-001 nếu có chốt đơn.

7.  REL-PMT-001 nếu có thu tiền.

8.  REL-SHP-001 nếu có giao hàng.

9.  REL-GTW-001 nếu có Gateway.

10. REL-AIA-001 nếu có AI Advisor.

11. REL-CRM-001 nếu có CRM.

12. REL-ADS-001 nếu có ADS.

13. REL-MCA-001 nếu có MC AI Live.

14. REL-IVR-001 nếu có IVR.

15. REL-FUT-001 nếu có future extension.

### 24.3. Minimum Gates For Go-live Approved

Go-live Approved chỉ được cấp khi:

1.  Production Ready = YES.

2.  Release Approved = YES.

3.  Completion Gate PASS.

4.  Security PASS trong scope.

5.  Payment PASS nếu thu tiền.

6.  Shipping PASS nếu giao hàng.

7.  Order PASS nếu chốt đơn.

8.  Product Activation / Sellable PASS nếu bán SKU.

9.  Recall / Stop-Sale PASS nếu có sản phẩm.

10. Gateway PASS nếu mở channel.

11. ADS Scale Gate PASS nếu scale ADS.

12. MC AI Live Gate PASS nếu live có MC AI.

13. IVR ORDER_CONFIRMATION_ONLY PASS nếu gọi tự động.

14. Monitoring sẵn sàng.

15. Rollback sẵn sàng.

16. Final Owner sign-off.

## 25. PHẦN 3/4 DONE GATE

PHẦN 3/4 được xem là đạt governance scope khi đã khóa đủ:

1.  Production Readiness Matrix Principles.

2.  Global Production Readiness Decision Matrix.

3.  Required Decision Output.

4.  E2E Release Smoke Model.

5.  E2E Smoke Status.

6.  Operational Core To Sellable Smoke.

7.  Quote To Order To CustomerConfirmation Smoke.

8.  Payment / Bank Transfer / Accounting Review Smoke.

9.  Shipping / COD / ETA / Tracking Smoke.

10. Gateway Public Comment To Messenger Handoff Smoke.

11. Shipping Eligibility Cross-Pack Smoke.

12. Recall / Stop Sale / Consumer Suppression Smoke.

13. ADS Scale Gate Smoke.

14. MC AI Live Board / Script Brief Smoke.

15. IVR ORDER_CONFIRMATION_ONLY Smoke.

16. ADS Scale Gate Control.

17. MC AI Live Gate Control.

18. Recall / Stop-Sale Control.

19. Production Readiness Final Matrix.

20. Minimum Gates For Production Ready.

21. Minimum Gates For Go-live Approved.

## 26. PHẦN 3/4 FINAL CONCLUSION

PHẦN 3/4 của MASTER-07 khóa cơ chế đánh giá Production Readiness, E2E Release Smoke, ADS Scale Gate, MC AI Live Gate và Recall / Stop-Sale Control.

Từ điểm này trở đi, không domain nào được gọi Production Ready nếu chỉ pass test đơn lẻ. Các domain trọng yếu phải chứng minh bằng E2E smoke có trace, audit, evidence, negative path và owner sign-off.

Đặc biệt:

1.  Operational Core quyết định sự thật sản phẩm.

2.  Product Activation / Sellable quyết định SKU có được bán hay không.

3.  Recall / Stop Sale thắng mọi hành vi sales.

4.  ADS không được scale nếu thiếu verified revenue, data quality, pilot evidence và owner approval.

5.  MC AI không được live nếu thiếu Daily Live Product Board, mc_ai_script_brief_id, stock guard, recall guard và fake urgency guard.

6.  IVR chỉ được vận hành trong phạm vi ORDER_CONFIRMATION_ONLY.

7.  Gateway không được PASS nếu Completion Report còn PENDING_EVIDENCE.

8.  Go-live chỉ được xét khi Production Ready, Release Approved, Completion Gate, Security, Payment, Shipping, Order, Recall/Stop-Sale, Gateway, ADS, MC AI, IVR và Owner Sign-off đạt đúng scope.

Mọi quyết định release thật phải đi qua chuỗi:

**Gate PASS → Evidence ACCEPTED → E2E Smoke PASS → Negative Path PASS → Security PASS nếu thuộc scope → Owner Sign-off → Completion Gate PASS → Release Approved → Go-live Approved**.

**PHẦN 4/4 — FINAL GLOBAL RELEASE DONE GATE / GO-LIVE DECISION / ROLLBACK CONTROL / MASTER-07 FINAL CONCLUSION**

**27. FINAL GLOBAL RELEASE DONE GATE PRINCIPLES**

**27.1. Final Global Release Done Gate Purpose**

Final Global Release Done Gate là điểm kiểm soát cuối cùng trước khi một release, domain, pack, channel, campaign, capability hoặc future extension được phép chuyển sang trạng thái Release Approved hoặc Go-live Approved.

Gate này không thay thế các gate domain ở PHẦN 2/4 và không thay thế E2E Smoke ở PHẦN 3/4.

Final Global Release Done Gate chỉ được dùng để tổng hợp toàn bộ trạng thái đã được chứng minh bằng:

1.  Source-of-Truth.

2.  Owner Core.

3.  Runtime Resolver.

4.  Guard.

5.  Traceability ID.

6.  Audit.

7.  Evidence ACCEPTED.

8.  Smoke PASS.

9.  Negative Path PASS.

10. Security PASS nếu thuộc scope.

11. Owner Sign-off.

12. Completion Gate PASS.

13. Rollback readiness.

14. Monitoring readiness.

15. Go-live decision.

Nếu thiếu một thành phần P0, Final Global Release Done Gate mặc định BLOCKED.

**27.2. Final Gate Is Not A Checklist Text**

Final Global Release Done Gate không phải là một checklist chữ để đánh dấu thủ công.

Gate này phải được chứng minh bằng evidence có trace.

Các nội dung sau không đủ điều kiện gọi Final Gate PASS:

1.  Tài liệu đã viết xong.

2.  Dev báo đã làm xong.

3.  Demo chạy được một lần.

4.  Owner nói đồng ý nhưng chưa có owner_signoff_id.

5.  Completion Report nhưng còn PENDING_EVIDENCE.

6.  Smoke không có log.

7.  Evidence chưa ACCEPTED.

8.  Security chưa PASS.

9.  Payment chưa có Accounting Review evidence.

10. Shipping chưa có Shipping Core evidence.

11. Gateway chưa có Completion Gate PASS.

12. ADS chưa có verified revenue và owner approval.

13. MC AI chưa có Daily Live Product Board và Script Brief hợp lệ.

14. IVR chưa chứng minh ORDER_CONFIRMATION_ONLY.

**27.3. Final Gate Default Status**

Trạng thái mặc định của Final Global Release Done Gate là:

| **Item**                 | **Default Status** |
|--------------------------|--------------------|
| GLOBAL_RELEASE_DONE_GATE | BLOCKED            |
| PRODUCTION_READY         | NO                 |
| RELEASE_APPROVED         | NO                 |
| GO_LIVE_APPROVED         | NO                 |
| GATEWAY_STATUS           | BLOCKED            |
| COMPLETION_REPORT_STATUS | PENDING_EVIDENCE   |
| ADS_SCALE_STATUS         | NOT_APPROVED       |
| MC_AI_LIVE_STATUS        | BLOCKED            |
| IVR_RELEASE_STATUS       | PENDING_EVIDENCE   |
| FUTURE_EXTENSION_STATUS  | BLOCKED            |

Chỉ được thay đổi trạng thái khi có đủ evidence, smoke, audit, owner sign-off và Completion Gate tương ứng.

**28. FINAL GLOBAL RELEASE DONE GATE MATRIX**

**28.1. Required Final Gate Conditions**

Một release chỉ được Final Gate PASS khi đồng thời đạt đủ:

| **Nhóm điều kiện** | **Điều kiện bắt buộc**                                     | **Nếu thiếu** |
|--------------------|------------------------------------------------------------|---------------|
| Governance         | MASTER/PACK registry rõ, Source-of-Truth rõ, Owner Core rõ | BLOCK         |
| Dependency         | Cross-pack dependency đã map đủ                            | BLOCK         |
| Runtime            | Resolver bắt buộc hoạt động                                | BLOCK         |
| Guard              | Guard bắt buộc hoạt động                                   | BLOCK         |
| Traceability       | P0 ID trace được                                           | BLOCK         |
| Audit              | Audit đầy đủ                                               | BLOCK         |
| Evidence           | Evidence ACCEPTED                                          | BLOCK         |
| Smoke              | Smoke PASS                                                 | BLOCK         |
| Negative Path      | Negative path PASS                                         | BLOCK         |
| Security           | Security PASS nếu thuộc scope                              | BLOCK         |
| Operational        | Operational Core PASS nếu có sản phẩm thật                 | BLOCK         |
| Product Sellable   | Product Activation / Sellable PASS nếu có bán SKU          | BLOCK         |
| Recall / Stop Sale | Recall / Stop-Sale PASS nếu có sản phẩm thật               | BLOCK         |
| Order              | Quote / Order / CustomerConfirmation PASS nếu có chốt đơn  | BLOCK         |
| Payment            | Payment PASS nếu có thu tiền                               | BLOCK         |
| Shipping           | Shipping PASS nếu có giao hàng                             | BLOCK         |
| Gateway            | Gateway PASS nếu mở kênh                                   | BLOCK         |
| CRM                | CRM PASS nếu gửi chăm sóc / trigger                        | BLOCK         |
| AI Advisor         | AI Advisor PASS nếu AI tư vấn/chốt                         | BLOCK         |
| ADS                | ADS Scale PASS nếu scale quảng cáo                         | BLOCK         |
| MC AI              | MC AI Live PASS nếu dùng trong live                        | BLOCK         |
| IVR                | IVR ORDER_CONFIRMATION_ONLY PASS nếu gọi tự động           | BLOCK         |
| Future Extension   | ACTIVE_GOVERNED_EXTENSION nếu extension ảnh hưởng runtime  | BLOCK         |
| Owner              | Owner sign-off hợp lệ                                      | BLOCK         |
| Rollback           | Rollback path sẵn sàng                                     | BLOCK         |
| Monitoring         | Monitoring / incident control sẵn sàng                     | BLOCK         |
| Completion Gate    | Completion Gate PASS                                       | BLOCK         |

**28.2. Final Gate Decision States**

| **State**             | **Ý nghĩa**           | **Cho phép đi tiếp**        |
|-----------------------|-----------------------|-----------------------------|
| NOT_STARTED           | Chưa bắt đầu đánh giá | Không                       |
| UNDER_REVIEW          | Đang đánh giá         | Không                       |
| PENDING_EVIDENCE      | Thiếu evidence        | Không                       |
| PENDING_SMOKE         | Thiếu smoke           | Không                       |
| PENDING_SECURITY      | Thiếu security        | Không                       |
| PENDING_OWNER_SIGNOFF | Thiếu owner sign-off  | Không                       |
| BLOCKED               | Có blocker            | Không                       |
| READY_CANDIDATE       | Có thể xét tiếp       | Chưa                        |
| FINAL_GATE_PASS       | Đạt Final Gate        | Có thể xét Release Approved |
| FINAL_GATE_REJECTED   | Không đạt             | Không                       |
| ROLLBACK_REQUIRED     | Cần rollback          | Không                       |
| SUPERSEDED            | Bị thay thế           | Không                       |

**28.3. Final Gate PASS Rule**

Final Global Release Done Gate chỉ PASS khi:

1.  Tất cả gate P0 trong scope đều PASS.

2.  Tất cả evidence P0 đều ACCEPTED.

3.  Tất cả smoke P0 đều PASS.

4.  Tất cả negative path P0 đều PASS.

5.  Security PASS nếu domain có dữ liệu, kênh public, payment, integration hoặc admin access.

6.  Completion Gate PASS.

7.  Owner sign-off đầy đủ.

8.  Không còn blocker.

9.  Không còn conflict chưa xử lý.

10. Không có future extension chưa approved nhưng đang ảnh hưởng runtime.

11. Rollback path sẵn sàng.

12. Monitoring sẵn sàng.

13. Audit đầy đủ.

Nếu một trong các điều kiện trên không đạt, Final Gate không được PASS.

**29. PRODUCTION READY DECISION CONTROL**

**29.1. Production Ready Decision Purpose**

Production Ready Decision xác nhận một release candidate đủ điều kiện kỹ thuật và vận hành để chạy trong production-controlled environment.

Production Ready không đồng nghĩa Release Approved.

Production Ready không đồng nghĩa Go-live Approved.

**29.2. Production Ready Required Inputs**

Production Ready Decision phải có:

1.  production_readiness_decision_id.

2.  release_candidate_id.

3.  domain_scope.

4.  required_gate_result.

5.  evidence_result.

6.  smoke_result.

7.  negative_path_result.

8.  security_result nếu thuộc scope.

9.  operational_result nếu thuộc scope.

10. rollback_readiness_result.

11. monitoring_readiness_result.

12. owner_review_result.

13. unresolved_blocker list.

14. audit_id.

15. correlation_id.

**29.3. Production Ready PASS Conditions**

Một release candidate chỉ được đánh dấu PRODUCTION_READY khi:

1.  Final Gate chưa BLOCK.

2.  Required domain gate đã PASS.

3.  Evidence đã ACCEPTED.

4.  Smoke đã PASS.

5.  Negative path đã PASS.

6.  Security đã PASS nếu thuộc scope.

7.  Operational readiness đã PASS nếu có sản phẩm thật.

8.  Payment readiness đã PASS nếu có thu tiền.

9.  Shipping readiness đã PASS nếu có giao hàng.

10. Order readiness đã PASS nếu có chốt đơn.

11. Gateway readiness đã PASS nếu có kênh.

12. ADS readiness đã PASS nếu có ADS.

13. MC AI readiness đã PASS nếu có live.

14. IVR readiness đã PASS nếu có gọi tự động.

15. Owner review không còn blocker.

16. Rollback path sẵn sàng.

17. Monitoring sẵn sàng.

**29.4. Production Ready Block Conditions**

Production Ready bắt buộc là NO nếu:

1.  Implementation chưa có evidence.

2.  Evidence chưa ACCEPTED.

3.  Smoke chưa PASS.

4.  Negative path thiếu.

5.  Security chưa PASS trong scope security.

6.  Owner sign-off thiếu.

7.  Completion Gate chưa PASS.

8.  Product Sellable chưa PASS nhưng Consumer có bán.

9.  Recall / Stop Sale chưa có negative path.

10. Payment chưa qua Payment Core / Accounting Review.

11. Shipping chưa qua Shipping Core.

12. Gateway còn BLOCKED.

13. ADS chưa có verified revenue nhưng muốn scale.

14. MC AI chưa có board/script brief hợp lệ.

15. IVR chưa chứng minh ORDER_CONFIRMATION_ONLY.

16. Future extension chưa ACTIVE_GOVERNED_EXTENSION.

17. Có hardcode runtime data.

18. Consumer tự suy luận rule kinh doanh.

19. Không audit được action P0.

**30. RELEASE APPROVED DECISION CONTROL**

**30.1. Release Approved Purpose**

Release Approved là quyết định cho phép một release candidate được đưa vào kế hoạch phát hành.

Release Approved chỉ được xét sau khi Production Ready đạt.

Release Approved không tự động cho phép Go-live.

**30.2. Release Approved Required Inputs**

Release Approved Decision phải có:

1.  release_approval_id.

2.  production_readiness_decision_id.

3.  final_gate_result.

4.  business_risk_assessment.

5.  operational_risk_assessment.

6.  security_risk_assessment.

7.  payment_risk_assessment nếu thuộc scope.

8.  shipping_risk_assessment nếu thuộc scope.

9.  recall_stop_sale_readiness_result nếu thuộc scope.

10. rollback_plan_result.

11. monitoring_plan_result.

12. support_readiness_result.

13. owner_signoff_id.

14. release_window.

15. release_scope.

16. audit_id.

17. correlation_id.

**30.3. Release Approved PASS Conditions**

Release chỉ được RELEASE_APPROVED khi:

1.  Production Ready = YES.

2.  Final Global Release Done Gate PASS.

3.  Business Owner chấp nhận scope release.

4.  Technical Owner xác nhận triển khai đủ điều kiện.

5.  Security Owner xác nhận security nếu thuộc scope.

6.  Operational Owner xác nhận operational readiness nếu có sản phẩm thật.

7.  Payment Owner xác nhận payment readiness nếu có thu tiền.

8.  Shipping Owner xác nhận shipping readiness nếu có giao hàng.

9.  Gateway Owner xác nhận channel readiness nếu có Gateway.

10. ADS Owner xác nhận nếu release có ADS.

11. MC AI Owner xác nhận nếu release có live support.

12. IVR Owner xác nhận nếu release có IVR.

13. Rollback plan sẵn sàng.

14. Monitoring sẵn sàng.

15. Không còn P0 blocker.

16. owner_signoff_id hợp lệ.

**30.4. Release Approved Block Conditions**

Release Approved bắt buộc là NO nếu:

1.  Production Ready = NO.

2.  Final Gate chưa PASS.

3.  Owner sign-off thiếu.

4.  Có blocker chưa đóng bằng evidence.

5.  Completion Gate chưa PASS.

6.  Gateway còn BLOCKED nhưng release cần Gateway.

7.  Payment chưa PASS nhưng release có thu tiền.

8.  Shipping chưa PASS nhưng release có giao hàng.

9.  Order chưa PASS nhưng release có chốt đơn.

10. Recall / Stop Sale chưa PASS nhưng release có SKU thật.

11. ADS Scale Gate chưa PASS nhưng release yêu cầu scale.

12. MC AI Live Gate chưa PASS nhưng release có MC AI Live.

13. IVR Gate chưa PASS nhưng release có gọi tự động.

14. Future extension chưa approved nhưng nằm trong release scope.

15. Rollback không sẵn sàng.

16. Monitoring không sẵn sàng.

**31. GO-LIVE APPROVED DECISION CONTROL**

**31.1. Go-live Approved Purpose**

Go-live Approved là quyết định cuối cùng cho phép hệ thống, domain, channel, campaign, capability hoặc extension vận hành thật với khách hàng thật, dữ liệu thật, giao dịch thật hoặc tác động vận hành thật.

Go-live Approved chỉ được xét sau khi Release Approved đạt.

**31.2. Go-live Required Inputs**

Go-live Decision phải có:

1.  go_live_approval_id.

2.  release_approval_id.

3.  go_live_scope.

4.  go_live_time_window.

5.  production_environment_status.

6.  monitoring_status.

7.  rollback_status.

8.  incident_response_status.

9.  support_owner_status.

10. customer_impact_assessment.

11. revenue_impact_assessment nếu có bán hàng.

12. payment_readiness_status nếu có thu tiền.

13. shipping_readiness_status nếu có giao hàng.

14. gateway_status nếu có kênh.

15. ADS scale status nếu có scale.

16. MC AI live status nếu có live.

17. IVR status nếu có gọi tự động.

18. final_owner_signoff_id.

19. audit_id.

20. correlation_id.

**31.3. Go-live Approved PASS Conditions**

Go-live chỉ được APPROVED khi:

1.  Release Approved = YES.

2.  Production environment sẵn sàng.

3.  Monitoring active.

4.  Rollback path active.

5.  Incident response sẵn sàng.

6.  Support owner sẵn sàng.

7.  Payment sẵn sàng nếu thu tiền.

8.  Shipping sẵn sàng nếu giao hàng.

9.  Order flow sẵn sàng nếu chốt đơn.

10. Product Activation / Sellable PASS nếu bán SKU.

11. Recall / Stop Sale control PASS nếu có sản phẩm thật.

12. Gateway PASS nếu mở kênh.

13. CRM PASS nếu gửi message.

14. AI Advisor PASS nếu AI tư vấn/chốt.

15. ADS Scale Gate PASS nếu scale.

16. MC AI Live Gate PASS nếu live.

17. IVR ORDER_CONFIRMATION_ONLY PASS nếu gọi tự động.

18. Future Extension PASS nếu extension nằm trong scope.

19. Final Owner sign-off hợp lệ.

20. Không còn blocker P0.

**31.4. Go-live Block Conditions**

Go-live bắt buộc BLOCK nếu:

1.  Release Approved = NO.

2.  Completion Gate chưa PASS.

3.  GATEWAY_STATUS = BLOCKED trong scope cần Gateway.

4.  COMPLETION_REPORT_STATUS = PENDING_EVIDENCE trong scope cần Gateway.

5.  PRODUCTION_READY = NO.

6.  Payment chưa PASS nhưng có thu tiền.

7.  Shipping chưa PASS nhưng có giao hàng.

8.  Product Sellable chưa PASS nhưng có bán.

9.  Recall / Stop Sale chưa PASS nhưng có sản phẩm thật.

10. Order chưa PASS nhưng có chốt đơn.

11. Security chưa PASS.

12. Monitoring chưa active.

13. Rollback chưa active.

14. Owner sign-off thiếu.

15. ADS muốn scale nhưng chưa SCALE_APPROVED.

16. MC AI muốn live nhưng chưa MC_AI_LIVE_APPROVED.

17. IVR muốn gọi nhưng chưa IVR_ORDER_CONFIRMATION_ONLY_PASS.

18. Future extension muốn runtime nhưng chưa ACTIVE_GOVERNED_EXTENSION.

19. Có hardcode runtime data.

20. Có Consumer tự suy luận rule kinh doanh ngoài boundary.

**32. ROLLBACK CONTROL**

**32.1. Rollback Control Purpose**

Rollback Control dùng để dừng, quay lui, vô hiệu hóa hoặc cô lập release khi phát hiện lỗi, rủi ro, blocker hoặc tác động ngoài phạm vi được approved.

Rollback không chỉ là thao tác kỹ thuật.

Rollback là quyết định governance có trace, audit, owner và evidence.

**32.2. Rollback Required Triggers**

Rollback bắt buộc được xét khi xảy ra một trong các tình huống:

1.  Payment sai trạng thái.

2.  Order tạo không có CustomerConfirmation.

3.  AI báo giá sai do thiếu QuoteSnapshot.

4.  Shipping ETA/phí ship/tracking bị bịa hoặc sai nguồn.

5.  Product bị recall nhưng Consumer vẫn bán.

6.  ADS scale khi revenue chưa verified.

7.  MC AI nói SKU ngoài board hoặc SKU bị sale lock.

8.  Gateway public PII, giá, payment instruction trái policy.

9.  IVR bán hàng, upsell hoặc xác nhận payment.

10. Security leak.

11. Secret bị lộ hoặc hardcode.

12. Customer identity bị nhầm.

13. Member/Diamond benefit tính sai nghiêm trọng.

14. Commission tạo sai khi chưa PAID hoặc không bind.

15. Future extension ảnh hưởng runtime khi chưa approved.

16. Completion Gate bị gọi PASS sai.

17. Go-live ngoài scope đã ký.

18. Monitoring phát hiện lỗi P0.

**32.3. Rollback Scope Types**

Rollback có thể áp dụng theo:

1.  Full system.

2.  Domain.

3.  Pack.

4.  Channel.

5.  Page.

6.  Live session.

7.  ADS campaign.

8.  SKU.

9.  Batch.

10. Lot.

11. Payment method.

12. Shipping method.

13. CRM journey.

14. AI Advisor capability.

15. MC AI script.

16. IVR call flow.

17. Future extension.

Rollback scope phải được xác định rõ, không rollback mơ hồ.

**32.4. Rollback Decision Record**

Mỗi rollback phải có:

1.  rollback_decision_id.

2.  rollback_trigger.

3.  affected_scope.

4.  affected_domain_id.

5.  affected_release_gate_id.

6.  affected_consumer list.

7.  severity.

8.  customer_impact.

9.  revenue_impact nếu có.

10. operational_impact nếu có.

11. suppression_required.

12. stop_sale_required nếu có.

13. owner_decision.

14. rollback_action.

15. rollback_started_at.

16. rollback_completed_at nếu hoàn tất.

17. evidence_id.

18. audit_id.

19. correlation_id.

Không có Rollback Decision Record thì không được xem là rollback hợp lệ.

**33. ROLLBACK MATRIX BY DOMAIN**

**33.1. Operational / Sellable Rollback**

Rollback Operational / Sellable bắt buộc nếu:

1.  Sản phẩm bị mở bán khi chưa đủ Base Sellable Gate.

2.  Stock available sai.

3.  Giá active sai.

4.  SKU bị hold/recall/sale lock vẫn bán.

5.  Channel block không có hiệu lực.

Rollback action:

1.  Stop Sale SKU/channel liên quan.

2.  Suppress AI/CRM/ADS/MC AI/Gateway/Landing Page.

3.  Chặn quote/order mới.

4.  Owner review.

5.  Re-run Operational Core To Sellable Smoke.

**33.2. Order / Quote Rollback**

Rollback Order / Quote bắt buộc nếu:

1.  Quote không có QuoteSnapshot.

2.  Quote hết hạn vẫn được dùng.

3.  Order tạo trước CustomerConfirmation.

4.  OrderCode tạo sai.

5.  Duplicate order không bị chặn.

6.  VAT hiển thị sai hoặc mơ hồ.

7.  Member/Diamond benefit tính sai nghiêm trọng.

Rollback action:

1.  Pause order creation trong scope lỗi.

2.  Review affected order.

3.  Suppress payment request nếu order chưa hợp lệ.

4.  Notify customer service queue nếu cần.

5.  Re-run Quote To Order To CustomerConfirmation Smoke.

**33.3. Payment Rollback**

Rollback Payment bắt buộc nếu:

1.  PaymentReference bị hiểu sai là PAID.

2.  PAID được set khi chưa có Payment Core / Accounting Review.

3.  Bank account bị hardcode.

4.  Transfer memo/payment_reference sai.

5.  Reconcile sai.

6.  AI/Gateway/IVR xác nhận thanh toán sai.

Rollback action:

1.  Freeze payment confirmation trong scope lỗi.

2.  Route Accounting Review.

3.  Void hoặc review payment status sai theo governance.

4.  Suppress AI/IVR/Gateway payment confirmation.

5.  Re-run Payment / Bank Transfer / Accounting Review Smoke.

**33.4. Shipping Rollback**

Rollback Shipping bắt buộc nếu:

1.  ETA bị bịa.

2.  Fee sai nguồn.

3.  COD eligibility sai.

4.  Tracking sai.

5.  International shipping bị mở khi chưa approved.

6.  Shipping eligibility không qua Shipping Core.

Rollback action:

1.  Suppress ETA/fee/tracking statement.

2.  Route Customer Service review.

3.  Pause shipping confirmation trong scope lỗi.

4.  Re-run Shipping / COD / ETA / Tracking Smoke.

5.  Re-run MAS-SMK-006 nếu lỗi liên quan dependency pack.

**33.5. Gateway Rollback**

Rollback Gateway bắt buộc nếu:

1.  Public comment báo giá trái policy.

2.  Public comment lộ PII.

3.  Handoff fail nhưng AI nói đã gửi.

4.  Payment instruction public trái policy.

5.  Complaint thật bị xử như troll.

6.  Completion Report còn PENDING_EVIDENCE nhưng Gateway bị gọi PASS.

7.  Webhook/security fail.

Rollback action:

1.  Disable affected gateway automation.

2.  Suppress risky public replies.

3.  Route to manual moderation / CSKH.

4.  Re-run Gateway Public Comment To Messenger Handoff Smoke.

5.  Re-open Completion Gate review.

**33.6. CRM Rollback**

Rollback CRM bắt buộc nếu:

1.  CRM gửi khi không có trigger.

2.  CRM gửi khi đang suppression.

3.  CRM spam.

4.  CRM gợi ý SKU không sellable.

5.  CRM gửi SKU bị recall/sale lock.

6.  CRM dùng sai customer memory.

7.  CRM bỏ qua privacy opt-out.

Rollback action:

1.  Pause affected CRM journey.

2.  Suppress message jobs.

3.  Review customer memory / identity.

4.  Re-run CRM smoke.

5.  Audit impacted customers.

**33.7. AI Advisor Rollback**

Rollback AI Advisor bắt buộc nếu:

1.  AI tự suy luận giá/quyền lợi/tồn kho.

2.  AI nói công dụng như thuốc.

3.  AI bán SKU bị stop sale.

4.  AI báo giá không QuoteSnapshot.

5.  AI tạo order không CustomerConfirmation.

6.  AI xác nhận PAID sai.

7.  AI bịa shipping.

8.  AI gửi contact không qua resolver.

9.  AI xử lý complaint sai.

Rollback action:

1.  Disable affected AI capability.

2.  Force handoff nếu cần.

3.  Suppress quote/order/payment/shipping statements trong scope lỗi.

4.  Re-run AI Advisor Release Smoke.

5.  Owner review claim/runtime boundary.

**33.8. ADS Rollback**

Rollback ADS bắt buộc nếu:

1.  ADS scale khi revenue chưa verified.

2.  ADS scale khi data quality không đạt.

3.  ADS đẩy SKU không active/sellable.

4.  ADS đẩy SKU bị recall/sale lock.

5.  Attribution conflict chưa xử lý.

6.  Diamond revenue conflict chưa xử lý.

7.  COD Fail vượt ngưỡng mà chưa review.

8.  Không có owner approval trước scale.

Rollback action:

1.  Pause campaign hoặc giảm scale trong scope lỗi.

2.  Freeze new scale decisions.

3.  Re-run ADS Scale Gate Smoke.

4.  Reconcile revenue/attribution.

5.  Owner review.

**33.9. MC AI Rollback**

Rollback MC AI bắt buộc nếu:

1.  MC AI nói SKU ngoài Daily Live Product Board.

2.  MC AI dùng script brief không hợp lệ.

3.  MC AI nói SKU restricted.

4.  MC AI nói giá khi thiếu QuoteSnapshot / Program Runtime.

5.  MC AI tạo fake urgency.

6.  MC AI nói còn hàng khi Stock Guard chưa PASS.

7.  MC AI tiếp tục nói SKU bị recall/sale lock.

Rollback action:

1.  Pause MC AI for live session.

2.  Remove affected script brief.

3.  Force board re-resolve.

4.  Suppress SKU statement.

5.  Re-run MC AI Live Board / Script Brief Smoke.

**33.10. IVR Rollback**

Rollback IVR bắt buộc nếu:

1.  IVR bán hàng.

2.  IVR upsell.

3.  IVR xác nhận payment.

4.  IVR gọi khi order chưa đủ điều kiện.

5.  IVR đổi order state ngoài phạm vi xác nhận đơn.

6.  IVR không có call log.

7.  IVR không có confirmation result.

Rollback action:

1.  Pause IVR call flow.

2.  Disable affected call campaign.

3.  Review call logs.

4.  Re-run IVR ORDER_CONFIRMATION_ONLY Smoke.

5.  Owner sign-off lại trước khi mở.

**33.11. Future Extension Rollback**

Rollback Future Extension bắt buộc nếu:

1.  Extension ảnh hưởng runtime hiện tại khi chưa ACTIVE_GOVERNED_EXTENSION.

2.  Extension tự thành Source-of-Truth.

3.  Extension tự làm Owner Core.

4.  Extension bypass resolver/guard.

5.  Extension hardcode runtime data.

6.  Extension gây conflict chưa suppress.

7.  Extension mở rộng scope không owner approve.

Rollback action:

1.  Disable extension.

2.  Suppress extension output.

3.  Restore current governed rule.

4.  Re-run Future Extension Gate.

5.  Owner review trước khi xét lại activation.

**34. GO-LIVE MONITORING / INCIDENT CONTROL**

**34.1. Monitoring Purpose**

Monitoring dùng để phát hiện lỗi sau Go-live và đảm bảo release không vượt khỏi scope đã approved.

Monitoring là điều kiện bắt buộc của Go-live Approved.

**34.2. Required Monitoring Areas**

Tối thiểu phải monitoring:

1.  Gateway handoff success/fail.

2.  Public reply policy violation.

3.  AI quote/order/payment/shipping boundary.

4.  Product sellable state.

5.  Recall / Sale Lock active.

6.  Order creation failure.

7.  Payment confirmation mismatch.

8.  Shipping ETA/tracking mismatch.

9.  CRM suppression violation.

10. ADS revenue verification.

11. ADS data quality.

12. MC AI board/script violation.

13. IVR call result / retry / violation.

14. Security alert.

15. PII leakage.

16. Customer complaint escalation.

17. Future extension conflict.

**34.3. Incident Severity**

| **Severity** | **Ý nghĩa**                                              | **Action**                    |
|--------------|----------------------------------------------------------|-------------------------------|
| S0           | Rủi ro nghiêm trọng: payment/security/recall/privacy lớn | Stop / Rollback ngay          |
| S1           | Ảnh hưởng khách hàng hoặc giao dịch thật                 | Pause scope lỗi, owner review |
| S2           | Lỗi vận hành có workaround                               | Fix có kiểm soát, monitor     |
| S3           | Lỗi nhỏ không ảnh hưởng P0                               | Ghi nhận, xử lý theo backlog  |
| S4           | Quan sát / cải tiến                                      | Không ảnh hưởng release       |

**34.4. Incident Response Requirements**

Mỗi incident phải có:

1.  incident_id.

2.  severity.

3.  affected_scope.

4.  affected_customer_count nếu có.

5.  affected_order_count nếu có.

6.  affected_revenue nếu có.

7.  affected_sku/batch/lot nếu có.

8.  root cause preliminary.

9.  containment action.

10. rollback_required.

11. owner_assigned.

12. evidence_id.

13. audit_id.

14. correlation_id.

15. closure decision.

Incident P0/S0/S1 không được đóng nếu thiếu evidence và owner sign-off.

**35. GLOBAL NO-HARDCODE RELEASE CONTROL**

**35.1. No-Hardcode Purpose**

No-Hardcode Release Control đảm bảo không domain nào đưa dữ liệu runtime, rule kinh doanh hoặc trạng thái release vào code, content, template, prompt, UI, Gateway, CRM, AI, ADS, MC AI hoặc IVR dưới dạng cố định.

Hardcode runtime data là blocker.

Hardcode PASS / READY / RELEASE / GO-LIVE là blocker nghiêm trọng.

**35.2. No-Hardcode Blocked Items**

Không được hardcode:

1.  Giá bán.

2.  Giảm giá chương trình.

3.  Quyền lợi member.

4.  Quyền lợi Diamond.

5.  Tài khoản ngân hàng.

6.  Payment status.

7.  Shipping fee.

8.  ETA.

9.  Tracking.

10. Stock.

11. Sellable status.

12. Recall status.

13. Sale lock status.

14. Daily Live Product Board.

15. MC AI script brief active state.

16. ADS scale decision.

17. Gateway PASS.

18. Completion Gate PASS.

19. Production Ready.

20. Release Approved.

21. Go-live Approved.

22. Future extension active state.

23. Official contact ngoài registry.

24. Public trace field ngoài whitelist.

**35.3. No-Hardcode Release Evidence**

Mỗi release phải có evidence chứng minh:

1.  Runtime data được lấy qua resolver.

2.  Business rule do Owner Core quyết định.

3.  Consumer chỉ tiêu thụ trong boundary.

4.  Guard có quyền block/suppress.

5.  No-hardcode scan hoặc review có evidence.

6.  Owner sign-off không có hardcode P0.

7.  Negative path chứng minh hardcode không bypass được guard.

Không có no-hardcode evidence thì release không được PASS.

**36. FINAL GLOBAL RELEASE DECISION RECORD**

**36.1. Required Record**

Mỗi quyết định release cuối phải có Final Global Release Decision Record.

Record này phải có:

1.  final_release_decision_id.

2.  release_candidate_id.

3.  release_scope.

4.  included_domains.

5.  excluded_domains.

6.  required_gate_results.

7.  production_ready_result.

8.  release_approved_result.

9.  go_live_approved_result.

10. completion_gate_result.

11. evidence_package_id.

12. smoke_package_id.

13. security_result.

14. payment_result nếu thuộc scope.

15. shipping_result nếu thuộc scope.

16. operational_result nếu thuộc scope.

17. recall_stop_sale_result nếu thuộc scope.

18. ADS_scale_result nếu thuộc scope.

19. MC_AI_live_result nếu thuộc scope.

20. IVR_result nếu thuộc scope.

21. future_extension_result nếu thuộc scope.

22. rollback_plan_id.

23. monitoring_plan_id.

24. incident_response_plan_id.

25. owner_signoff_id.

26. audit_id.

27. correlation_id.

28. final_decision.

29. decision_reason.

30. decided_at.

**36.2. Final Decision Values**

| **Final Decision**    | **Ý nghĩa**                           |
|-----------------------|---------------------------------------|
| BLOCKED               | Không được release                    |
| PENDING_EVIDENCE      | Chờ evidence                          |
| PENDING_SMOKE         | Chờ smoke                             |
| PENDING_SECURITY      | Chờ security                          |
| PENDING_OWNER_SIGNOFF | Chờ owner ký                          |
| PRODUCTION_READY_ONLY | Chỉ đủ Production Ready, chưa release |
| RELEASE_APPROVED_ONLY | Đã duyệt release, chưa go-live        |
| GO_LIVE_APPROVED      | Được go-live trong scope              |
| LIVE                  | Đã live                               |
| SCALE_APPROVED        | Được scale trong scope                |
| PAUSED                | Tạm dừng                              |
| ROLLBACK_REQUIRED     | Cần rollback                          |
| ROLLED_BACK           | Đã rollback                           |
| REJECTED              | Không đạt                             |
| SUPERSEDED            | Bị thay thế                           |

**37. MASTER-07 FINAL GLOBAL DONE GATE CHECKLIST**

**37.1. Governance Checklist**

MASTER-07 đạt governance checklist khi:

1.  Đã xác định rõ vai trò Global Release Governance.

2.  Đã khóa Production Readiness Model.

3.  Đã khóa Go-live Boundary.

4.  Đã khóa Owner Authority.

5.  Đã khóa Release Gate Registry.

6.  Đã khóa Production Readiness Matrix.

7.  Đã khóa E2E Release Smoke.

8.  Đã khóa ADS Scale Gate.

9.  Đã khóa MC AI Live Gate.

10. Đã khóa Recall / Stop-Sale Control.

11. Đã khóa Final Global Release Done Gate.

12. Đã khóa Go-live Decision.

13. Đã khóa Rollback Control.

14. Đã khóa No-Hardcode Release Control.

15. Đã khóa Final Global Release Decision Record.

**37.2. Domain Coverage Checklist**

MASTER-07 đã bao phủ đầy đủ:

1.  MASTER governance.

2.  PACK documentation.

3.  Operational Core.

4.  Production.

5.  Warehouse.

6.  Inventory.

7.  Product Activation.

8.  Sellable.

9.  Traceability.

10. Recall.

11. Sale Lock.

12. Stop Sale.

13. Security.

14. Gateway.

15. Payment.

16. Shipping.

17. CRM.

18. Customer Identity.

19. Customer Memory.

20. Member Lifecycle.

21. Diamond / Affiliate / Commission.

22. Order.

23. Quote.

24. CustomerConfirmation.

25. AI Advisor.

26. IVR ORDER_CONFIRMATION_ONLY.

27. ADS / Attribution / ROAS / CPA / AOV / Scale Gate.

28. MC AI / Live Board / Script Brief.

29. Health Boundary.

30. Complaint.

31. Privacy.

32. Official Contact.

33. Future Extension.

**37.3. Final Blocker Checklist**

Release bắt buộc BLOCK nếu tồn tại một trong các blocker sau:

1.  Không có evidence.

2.  Không có smoke.

3.  Không có audit.

4.  Không có owner sign-off.

5.  Completion Gate chưa PASS.

6.  Completion Report còn PENDING_EVIDENCE nhưng bị gọi PASS.

7.  Gateway còn BLOCKED.

8.  Production Ready = NO.

9.  Release Approved = NO.

10. Security chưa PASS trong scope.

11. Payment chưa PASS khi có thu tiền.

12. Shipping chưa PASS khi có giao hàng.

13. Order chưa PASS khi có chốt đơn.

14. Product Activation / Sellable chưa PASS khi có bán SKU.

15. Recall / Stop-Sale chưa PASS khi có sản phẩm thật.

16. ADS Scale chưa PASS khi có scale.

17. MC AI Live chưa PASS khi có live.

18. IVR chưa PASS khi có gọi tự động.

19. Future Extension chưa ACTIVE_GOVERNED_EXTENSION.

20. Hardcode runtime data.

21. Consumer tự suy luận rule kinh doanh.

22. Không trace được P0 ID.

23. Không audit được P0 action.

24. Không có rollback path.

25. Không có monitoring.

26. Có unresolved P0 blocker.

**38. MASTER-07 RELEASE CONTROL SUMMARY**

**38.1. Production Ready Summary Rule**

Production Ready chỉ được gọi khi:

**Implementation Evidence + Runtime Resolver + Guard + Traceability + Audit + Evidence ACCEPTED + Smoke PASS + Negative Path PASS + Security PASS nếu thuộc scope + Owner Sign-off + Completion Gate PASS**

Nếu thiếu một yếu tố P0, Production Ready = NO.

**38.2. Release Approved Summary Rule**

Release Approved chỉ được gọi khi:

**Production Ready = YES + Final Global Release Done Gate PASS + Owner chấp nhận scope/risk + Rollback sẵn sàng + Monitoring sẵn sàng + Không còn blocker**

Nếu thiếu owner_signoff_id, Release Approved = NO.

**38.3. Go-live Approved Summary Rule**

Go-live Approved chỉ được gọi khi:

**Release Approved = YES + Production Environment Ready + Monitoring Active + Rollback Active + Incident Response Ready + Final Owner Sign-off + No P0 Blocker**

Nếu thiếu Completion Gate PASS, Go-live Approved = NO.

**38.4. Gateway Summary Rule**

Gateway chỉ được PASS khi:

**Gateway Evidence PASS + Security PASS + Public/Messenger/Handoff/Moderation Smoke PASS + Completion Gate PASS**

Nếu Completion Report còn PENDING_EVIDENCE, Gateway vẫn BLOCKED.

**38.5. ADS Scale Summary Rule**

ADS chỉ được SCALE_APPROVED khi:

**SKU active/sellable + không recall/sale lock + verified revenue + ROAS/CPA/AOV + funnel quality + COD Fail review + data quality + pilot 7–14 ngày + owner approval**

Nếu thiếu verified revenue hoặc owner approval, ADS Scale BLOCKED.

**38.6. MC AI Live Summary Rule**

MC AI chỉ được LIVE_APPROVED khi:

**Daily Live Product Board hợp lệ + mc_ai_script_brief_id hợp lệ + SKU nằm trong board + program runtime hợp lệ + stock/sellable guard PASS + recall/sale lock guard PASS + fake urgency guard PASS**

Nếu MC AI nói SKU ngoài board, MC AI Live BLOCKED.

**38.7. IVR Summary Rule**

IVR chỉ được release khi:

**PACK-09 IVR_ORDER_CONFIRMATION + INTERNAL_SIM_GATEWAY_SERVER + ORDER_CONFIRMATION_ONLY + Order đủ điều kiện + Call Log + Confirmation Result + Retry Policy + Audit + Owner Sign-off**

Nếu IVR bán hàng, upsell hoặc xác nhận payment, IVR Release BLOCKED.

**38.8. Future Extension Summary Rule**

Future Extension chỉ được runtime khi:

**Integration Intake + Impact Classification + Owner Approval + Source-of-Truth + Resolver + Guard + Trace ID + Evidence + Smoke + Security nếu thuộc scope + Completion Gate PASS + ACTIVE_GOVERNED_EXTENSION**

Nếu chưa ACTIVE_GOVERNED_EXTENSION, Future Extension BLOCKED.

**39. MASTER-07 FINAL DONE GATE**

MASTER-07 V1.0 CLEAN FINAL được xem là hoàn thành ở tầng governance khi đã khóa đủ:

1.  Global Release Principles.

2.  Production Readiness Model.

3.  Go-live Boundary.

4.  Owner Authority.

5.  Release Gate Registry by Domain.

6.  Operational Core Release Gate.

7.  Production Readiness Gate.

8.  Warehouse / Inventory Readiness Gate.

9.  Product Activation / Sellable / Stock Gate.

10. Traceability Gate.

11. Recall / Sale Lock / Stop Sale Gate.

12. Security Release Gate.

13. Gateway Release Gate.

14. Payment Release Gate.

15. Shipping Release Gate.

16. CRM Release Gate.

17. Order / Quote / CustomerConfirmation Release Gate.

18. AI Advisor Release Gate.

19. IVR ORDER_CONFIRMATION_ONLY Release Gate.

20. ADS / Attribution / ROAS / CPA / AOV / Scale Gate.

21. MC AI / Live Board / Script Brief Release Gate.

22. Customer Identity / Customer Memory Gate.

23. Member Lifecycle / Rights Gate.

24. Diamond / Affiliate / Commission Gate.

25. Health / Complaint / Privacy Priority Gate.

26. Official Contact Registry Gate.

27. Future Governed Extension Gate.

28. Production Readiness Matrix.

29. E2E Release Smoke Matrix.

30. ADS Scale Gate Control.

31. MC AI Live Gate Control.

32. Recall / Stop-Sale Control.

33. Final Global Release Done Gate.

34. Production Ready Decision Control.

35. Release Approved Decision Control.

36. Go-live Approved Decision Control.

37. Rollback Control.

38. Go-live Monitoring / Incident Control.

39. No-Hardcode Release Control.

40. Final Global Release Decision Record.

MASTER-07 hoàn thành ở tầng governance không đồng nghĩa hệ thống đã Production Ready.

MASTER-07 hoàn thành không đồng nghĩa Release Approved.

MASTER-07 hoàn thành không đồng nghĩa Go-live Approved.

MASTER-07 chỉ là chuẩn governance bắt buộc để xét release thật.

**40. MASTER-07 FINAL CONCLUSION**

MASTER-07 khóa lớp quản trị release toàn cục cho hệ thống Ginsengfood.

Từ điểm này trở đi, mọi quyết định mở production, mở kênh, mở bán, chạy Gateway, chạy ADS, scale ADS, bật MC AI Live, bật AI Advisor, bật CRM, bật Payment, bật Shipping, bật IVR hoặc kích hoạt future extension đều phải đi qua chuỗi kiểm soát:

**Source-of-Truth → Owner Core → Runtime Resolver → Guard → Traceability ID → Audit → Evidence ACCEPTED → Smoke PASS → Negative Path PASS → Security PASS nếu thuộc scope → Owner Sign-off → Completion Gate PASS → Final Global Release Done Gate → Production Ready → Release Approved → Go-live Approved**

Không có đường tắt.

Không có Consumer nào được tự suy luận rule kinh doanh.

Không có pack nào được tự gọi PASS.

Không có Completion Report nào thay thế Completion Gate.

Không có Gateway nào được PASS khi Completion Report còn PENDING_EVIDENCE.

Không có ADS nào được scale khi thiếu verified revenue, data quality, pilot evidence và owner approval.

Không có MC AI nào được live nếu thiếu Daily Live Product Board, mc_ai_script_brief_id, stock guard, recall guard và fake urgency guard.

Không có IVR nào được vượt khỏi ORDER_CONFIRMATION_ONLY.

Không có Payment nào được PAID nếu thiếu Payment Core / Accounting Review.

Không có Shipping nào được bịa ETA, phí ship, COD hoặc tracking.

Không có sản phẩm nào được bán nếu chưa đạt Product Activation / Sellable / Stock Gate.

Không có SKU, batch, lot hoặc channel nào được tiếp tục bán khi Recall / Hold / Sale Lock / Stop Sale active.

Không có future extension nào được ảnh hưởng runtime hiện tại nếu chưa ACTIVE_GOVERNED_EXTENSION.

MASTER-07 là lớp khóa cuối để toàn bộ MASTER, PACK, Operational Core, Production, Warehouse, Inventory, Traceability, Recall, Sale Lock, ADS, MC AI, Gateway, Security, Payment, Shipping, CRM, Order, AI Advisor, IVR và Future Extension được xét release thật theo một chuẩn thống nhất, có evidence, có smoke, có audit, có owner và có rollback.

**MASTER-07 — V1.0 CLEAN FINAL**

**GLOBAL RELEASE GOVERNANCE / PRODUCTION READINESS / GO-LIVE CONTROL**

**FINAL STATUS: GOVERNANCE COMPLETE**

**PRODUCTION_READY: NO UNTIL EVIDENCE PASS**

**RELEASE_APPROVED: NO UNTIL OWNER SIGN-OFF**

**GO_LIVE_APPROVED: NO UNTIL FINAL GLOBAL RELEASE DONE GATE PASS**

**GATEWAY_STATUS: BLOCKED UNTIL COMPLETION GATE PASS**

**COMPLETION_REPORT_STATUS: PENDING_EVIDENCE UNTIL ACCEPTED EVIDENCE PACKAGE**
