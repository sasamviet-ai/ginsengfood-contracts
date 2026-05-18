**MASTER-02 — CROSS-PACK DEPENDENCY MAP**

**SOURCE-DRIVEN DEPENDENCY / PACK RELATIONSHIP / BUSINESS-RULE-DRIVEN RUNTIME DEPENDENCY / RELEASE DEPENDENCY CONTROL**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — DEPENDENCY PRINCIPLES / BUSINESS-RULE-DRIVEN DEPENDENCY MODEL / SOURCE BOUNDARY**

**0. VAI TRÒ CỦA MASTER-02**

MASTER-02 là tài liệu quản trị bản đồ phụ thuộc liên pack của hệ thống Ginsengfood.

MASTER-02 quy định cách các domain nghiệp vụ, source-of-truth, owner core, runtime resolver, consumer pack, evidence và release gate phụ thuộc lẫn nhau trong toàn bộ hệ thống.

MASTER-02 không phải tài liệu implementation chi tiết.

MASTER-02 không viết code, API, DTO, database, worker, UI hoặc template nội dung hoàn chỉnh.

Các pack chi tiết chịu trách nhiệm triển khai sâu theo boundary và dependency đã được MASTER-02 khóa.

MASTER-02 có vai trò bắt buộc trong việc ngăn dev, AI Advisor, Gateway, CRM, Landing Page, ADS, Admin UI hoặc các consumer khác tự suy luận rule kinh doanh, tự hardcode dữ liệu runtime hoặc tự vượt quyền owner core.

**1. MỤC ĐÍCH CỦA MASTER-02**

MASTER-02 khóa bản đồ phụ thuộc giữa các domain nghiệp vụ và các pack kỹ thuật trong hệ thống Ginsengfood.

Mục tiêu của MASTER-02 là đảm bảo:

1.  Mỗi dữ liệu quan trọng đều có source-of-truth.

2.  Mỗi quyết định nghiệp vụ đều có owner core.

3.  Mỗi consumer chỉ được sử dụng dữ liệu trong phạm vi cho phép.

4.  Mọi quyết định runtime phải đi qua resolver hoặc core tương ứng.

5.  Mọi hành vi customer-facing phải qua guard phù hợp.

6.  Mọi protected operation phải có permission, audit và evidence.

7.  Mọi rule ảnh hưởng nhiều pack phải được khóa ở tầng dependency governance.

8.  Mọi dữ liệu runtime có tính quyết định không được hardcode trong AI, Gateway, CRM, Landing Page, Admin UI, ADS hoặc template tĩnh.

9.  Mọi release phải có evidence.

10. Gateway không được mở nếu Completion Report chưa PASS.

11. Production Ready không được gọi nếu chưa có smoke, evidence và owner sign-off.

12. Các pack chi tiết không được tự suy luận rule kinh doanh ngoài MASTER-02.

MASTER-02 giúp toàn hệ thống vận hành theo một nguyên tắc thống nhất:

Source-of-Truth quyết định dữ liệu.  
Owner Core quyết định nghiệp vụ.  
Runtime Resolver quyết định tại thời điểm thực thi.  
Consumer chỉ tiêu thụ trong boundary.  
Guard kiểm soát điều kiện an toàn.  
Evidence chứng minh dependency đã hoạt động.  
Release Gate quyết định được phép mở hay chưa.

**2. PHẠM VI CỦA MASTER-02**

MASTER-02 bao phủ dependency giữa các nhóm domain sau:

1.  Governance / Source-of-Truth.

2.  Product Knowledge / Claim / Brand / Scientific Proof.

3.  Customer Identity / Customer Memory.

4.  Segment Recommendation / Product Recommendation.

5.  CRM 12-Month / Message Trigger / Suppression.

6.  Member Lifecycle / Rights / Downgrade / Dispute.

7.  Diamond / Affiliate / Entrepreneurship / Distributor Boundary.

8.  Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot.

9.  Program / Sellable / Product Activation / Production Signal.

10. Payment / Bank Transfer / Accounting Review.

11. Shipping / Tracking / ETA / COD.

12. Order / OrderDraft / CustomerConfirmation / IVR.

13. Gateway / Public Comment / Messenger Handoff / Moderation.

14. Official Contact / Phone Number Registry.

15. Health Boundary / Complaint / Priority Conflict.

16. Evidence / Completion Report / Gateway Gate / Security.

MASTER-02 chỉ khóa dependency governance.

Chi tiết API, DTO, database, worker, UI, content block, message template, test case và deployment thuộc pack chi tiết.

**3. NON-SCOPE CỦA MASTER-02**

MASTER-02 không làm các việc sau:

1.  Không viết API endpoint chi tiết.

2.  Không viết DTO.

3.  Không viết database schema.

4.  Không viết migration.

5.  Không viết service class.

6.  Không viết worker.

7.  Không viết UI component.

8.  Không viết full content block.

9.  Không viết toàn bộ tin nhắn CRM.

10. Không viết toàn bộ test script.

11. Không viết cấu hình Meta App.

12. Không viết Page Token.

13. Không viết webhook secret.

14. Không viết tích hợp ngân hàng chi tiết.

15. Không viết tích hợp đơn vị vận chuyển chi tiết.

16. Không viết MISA mapping chi tiết.

17. Không viết code để dev copy-paste.

18. Không thay thế pack implementation.

19. Không thay thế Evidence Package.

20. Không thay thế Completion Report.

MASTER-02 chỉ xác định:

Source nào quyết định.  
Owner nào chịu trách nhiệm.  
Consumer nào được dùng.  
Resolver nào bắt buộc.  
Guard nào bắt buộc.  
Thiếu gì thì bị chặn.  
Evidence nào phải có.  
Pack nào triển khai chi tiết.  
Done Gate nào phải đạt.

**4. TRẠNG THÁI TOÀN HỆ**

MASTER-02 là tài liệu governance.

MASTER-02 không làm thay đổi trạng thái production.

Trạng thái toàn hệ phải giữ:

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

Ý nghĩa:

1.  Viết xong MASTER-02 không đồng nghĩa Gateway được mở.

2.  Viết xong MASTER-02 không đồng nghĩa Completion Report PASS.

3.  Viết xong MASTER-02 không đồng nghĩa hệ thống production-ready.

4.  Viết xong MASTER-02 không đồng nghĩa release được phê duyệt.

5.  Viết xong MASTER-02 không đồng nghĩa go-live được phê duyệt.

6.  Mọi trạng thái PASS phải dựa trên smoke, evidence, runtime trace và owner sign-off.

7.  Không được dùng tài liệu governance thay cho evidence triển khai.

8.  Không được dùng câu trả lời AI nghe tốt để thay cho DecisionEnvelope, resolver trace, guard trace hoặc audit evidence.

**5. NGUYÊN TẮC DEPENDENCY CỐT LÕI**

**5.1. Source-of-Truth quyết định dữ liệu**

Mọi dữ liệu quan trọng phải có nguồn sự thật rõ ràng.

Consumer không được tự quyết định dữ liệu.

Consumer không được biến bản copy dữ liệu thành nguồn quyết định.

Consumer không được lấy dữ liệu từ prompt, template, cache cũ, file tĩnh hoặc nội dung hiển thị để ra quyết định runtime.

Mô hình đúng:

Source-of-Truth  
→ Owner Core / Owner Pack  
→ Runtime Resolver / Guard  
→ Consumer Pack  
→ Action / Display / Decision  
→ Evidence  
→ Done Gate

Mô hình sai:

Consumer  
→ tự tính  
→ tự quyết định  
→ tự ghi trạng thái  
→ tự render cho khách

Ví dụ bị cấm:

1.  AI tự tính giá.

2.  CRM tự gửi quyền lợi thành viên.

3.  Gateway tự xác nhận đơn.

4.  Landing Page hardcode miễn phí ship.

5.  Admin UI tự set PAID.

6.  IVR tự đổi order state.

7.  ADS tự chọn SKU mở bán.

8.  MC AI nói SKU ngoài board.

9.  CRM tự tạo trigger tin nhắn.

10. AI tự gửi số điện thoại ngoài Official Contact Registry.

**5.2. Owner Core quyết định, Consumer chỉ tiêu thụ**

Owner Core là nơi có quyền quyết định nghiệp vụ.

Consumer chỉ được tiêu thụ kết quả đã được owner core hoặc resolver trả về.

Ví dụ:

Commerce Pricing Core quyết định giá.  
AI chỉ hiển thị giá từ QuoteSnapshot.

Shipping Core quyết định ETA/COD/phí ship.  
Landing Page chỉ hiển thị kết quả shipping được phép.

Payment Core / Accounting Review quyết định PAID.  
Admin UI không được tự set PAID.

Order Core quyết định trạng thái đơn.  
Gateway, AI, IVR không được tự đổi order state.

Member Lifecycle Core quyết định hạng, duy trì, ân hạng, hạ hạng.  
CRM không được tự nói khách bị hạ hạng nếu runtime chưa trả.

Official Contact Registry quyết định số điện thoại được gửi.  
AI không được tự nhớ hoặc tự bịa số điện thoại.

**5.3. Runtime Resolver là bắt buộc cho quyết định tại thời điểm thực thi**

Các quyết định sau bắt buộc phải qua resolver hoặc core:

1.  Customer identity.

2.  Customer memory.

3.  Last purchase.

4.  Member tier.

5.  Member lifecycle.

6.  Diamond referral bind.

7.  Commission eligibility.

8.  CRM eligibility.

9.  Message trigger.

10. Message dedup.

11. Product recommendation.

12. Segment recommendation.

13. Product sellable status.

14. Program activation.

15. 24/7 price.

16. Golden Hour active status.

17. Early access.

18. QuoteSnapshot.

19. OrderDraft.

20. CustomerConfirmation.

21. Payment eligibility.

22. Bank transfer instruction.

23. Payment state.

24. Shipping eligibility.

25. Tracking status.

26. Official contact.

27. Health guard.

28. Claim guard.

29. Handoff status.

30. Moderation action.

31. Evidence gate.

32. Completion Report gate.

Nếu resolver thiếu, consumer không được suy đoán.

**5.4. Rule kinh doanh ảnh hưởng nhiều pack phải được khóa trong MASTER-02**

Bất kỳ quy tắc kinh doanh nào ảnh hưởng từ hai pack trở lên phải được đưa vào MASTER-02 ở tầng dependency governance.

Ví dụ:

Customer Identity ảnh hưởng AI, CRM, Pricing, Order, Member, Diamond, Gateway.

CRM 12 tháng ảnh hưởng Customer Memory, Order History, Product Knowledge, Member Lifecycle, Messaging, CRM Suppression.

Member Lifecycle ảnh hưởng AI, CRM, Quote, Pricing, Message, Outcome Logger.

Giờ Vàng ảnh hưởng Pricing, Availability, Live, Gateway, QuoteSnapshot, IVR, CRM, ADS, Order.

Quy tắc mở bán ảnh hưởng Operational Core, Availability, Pricing, Program, Gateway, AI, Landing Page, ADS, CRM, Order và Production Planning.

Các rule này không được để ẩn trong content, phụ lục, test hoặc note kỹ thuật rời rạc.

MASTER-02 phải biết rule gốc.

Pack chi tiết mới triển khai sâu.

**6. BUSINESS-RULE-DRIVEN DEPENDENCY MODEL**

MASTER-02 sử dụng mô hình:

Business Rule  
→ Source-of-Truth  
→ Owner Core / Owner Pack  
→ Runtime Resolver / Guard  
→ Consumer Pack  
→ Allowed Action  
→ Blocked-if-missing  
→ Evidence  
→ Done Gate

Ví dụ với Customer Memory:

Khách cũ phải hỏi thăm trước khi bán  
→ Customer Memory Source  
→ Customer Memory Core / CRM Lifecycle Core  
→ LastPurchaseResolver / CareBeforeNextSaleGuard  
→ AI Advisor / CRM  
→ Hỏi thăm trải nghiệm  
→ Thiếu last purchase thì không nhắc cụ thể  
→ Evidence returning customer care  
→ Done Gate khách cũ không bị bán ngay

Ví dụ với mở bán SKU:

SKU chỉ được mở bán khi sellable  
→ Sellable Availability Source / Operational Core / Pricing Source  
→ Commerce Availability Core  
→ AvailabilityResolver / ProgramActivationResolver  
→ AI / Gateway / CRM / Landing / ADS / Order  
→ Tư vấn / quote / order SKU active  
→ Thiếu sellable thì không bán  
→ Evidence availability + quote/order guard  
→ Done Gate không SKU not sellable nào được bán

Ví dụ với Giờ Vàng:

Giờ Vàng mở theo tồn kho và chương trình  
→ Program Policy Source / Availability Source  
→ Golden Hour Engine  
→ GoldenHourResolver / EarlyAccessResolver / QuoteLockResolver  
→ AI / Gateway / CRM / Order / IVR  
→ Quote Giờ Vàng trong private  
→ Thiếu resolver thì không nói active / không giữ giá  
→ Evidence GoldenHourResolver + QuoteSnapshot  
→ Done Gate Giờ Vàng runtime pass

Ví dụ với Message Trigger:

Tin nhắn chỉ được gửi theo trigger đã duyệt  
→ Message Trigger Registry  
→ Messaging Core / CRM Lifecycle Core  
→ MessageTriggerResolver / MessageTextImmutableGuard / DedupGuard  
→ CRM / Messenger / SMS / Email  
→ Gửi đúng tin, đúng kênh, đúng hạng  
→ Thiếu trigger thì không gửi  
→ Evidence message job + send log  
→ Done Gate không gửi sai trigger, sai hạng, trùng tháng

**7. CUSTOMER CONTEXT FIRST PRINCIPLE**

AI Advisor không được tư vấn như một chatbot không biết khách là ai.

Trước khi tư vấn có tính cá nhân hóa, báo quyền lợi, CRM, quote, Diamond, referral hoặc member lifecycle, hệ thống phải resolve:

1.  Khách mới hay khách cũ.

2.  Có lịch sử mua hay chưa.

3.  Có phải member không.

4.  Hạng thành viên hiện tại.

5.  Có phải Diamond không.

6.  Có đi qua link Diamond không.

7.  Link Diamond có bind hợp lệ không.

8.  Doanh số tích lũy.

9.  Chu kỳ thành viên.

10. Có đang trong ân hạng không.

11. Lần gần nhất mua sản phẩm gì.

12. Mua cho ai.

13. Có open case không.

14. Có opt-out CRM không.

15. Có dispute quyền lợi không.

Nếu thiếu Customer Context:

AI không được khẳng định khách là member.  
AI không được nói khách là Diamond.  
AI không được nói quyền lợi hạng.  
AI không được nhắc lịch sử mua cụ thể.  
AI không được cá nhân hóa sâu.  
CRM không được gửi tin lifecycle.  
Quote không được áp member benefit.  
Diamond benefit không được áp.

Customer Context First là P0 dependency.

**8. CUSTOMER MEMORY / CARE BEFORE NEXT SALE PRINCIPLE**

Khách đã mua quay lại không được bị bán tiếp ngay.

AI phải hỏi thăm trải nghiệm trước:

1.  Dùng có ngon không.

2.  Có hợp không.

3.  Có vừa ý không.

4.  Người nhận dùng có hợp không.

5.  Dịch vụ có tốt không.

6.  Có hài lòng không.

7.  Có vấn đề gì cần hỗ trợ không.

Nếu runtime có dữ liệu, AI phải nhắc đúng sản phẩm mua gần nhất.

Nếu runtime có dữ liệu người nhận, AI phải nhắc đúng người nhận.

Nếu khách phản hồi tích cực, AI mới bắt cầu sang tư vấn sản phẩm tiếp theo.

Nếu khách phản hồi chưa hài lòng, AI phải ưu tiên chăm sóc hoặc xử lý trải nghiệm, không được nhảy sang upsell.

Consumer bị cấm:

1.  Không bán ngay khi khách cũ chỉ mới chào.

2.  Không hỏi lại dữ liệu đã có.

3.  Không bịa lịch sử mua.

4.  Không bịa người nhận.

5.  Không nhắc sản phẩm mua gần nhất nếu runtime không trả.

6.  Không tiếp tục bán khi khách đang có open case.

7.  Không dùng phản hồi tiêu cực làm cơ hội upsell.

Customer Memory / Care Before Next Sale là P0 dependency.

**9. CRM 12-MONTH LIFECYCLE PRINCIPLE**

CRM là năng lực chăm sóc vòng đời khách hàng.

CRM không phải tin nhắn khuyến mãi.

CRM không phải spam bán thêm.

CRM phải dựa trên:

1.  Customer Identity.

2.  Customer Memory.

3.  Order History.

4.  Product Effectiveness.

5.  Member Lifecycle.

6.  Event Calendar.

7.  Suppression Policy.

8.  Product Recommendation.

9.  Feedback.

10. Consent.

11. Channel history.

12. Frequency cap.

13. Quiet hours.

CRM 12 tháng gồm các lớp:

D0 — Post Purchase Welcome  
D1 — Usage Guide  
D3 — First Experience Check  
D7 — Taste/Fit Check  
D14 — Reorder Soft Suggestion  
D21 — Next Product Suggestion  
D30 — First Month Review  
M2 — Next Need Care  
M3 — Family/Gift/Seasonal Care  
M4 — Product Education  
M5 — Growth Order Care  
M6 — Mid-cycle Review  
M7 — Member Lifecycle Care  
M8 — Gift/Family Care  
M9 — Maintain/Upgrade Reminder  
M10 — Retention Event Care  
M11 — Pre-cycle / Winback  
M12 — Annual Review

CRM không được gửi nếu:

1.  Khách opt-out.

2.  Có open case.

3.  Message fatigue exceeded.

4.  Quiet hour fail.

5.  Missing customer memory.

6.  Missing Product Effectiveness khi có gợi ý sản phẩm.

7.  Missing member lifecycle runtime khi nói hạng/quyền lợi.

8.  ClaimGuard fail.

9.  FinalGuard fail.

CRM 12-Month Lifecycle là P0 dependency.

**10. MEMBER LIFECYCLE PRINCIPLE**

Member không chỉ là discount.

Member Lifecycle gồm:

1.  Chu kỳ 12 tháng.

2.  Doanh số hợp lệ.

3.  Silver / Gold / Platinum / Diamond.

4.  Quyền lợi theo hạng.

5.  Duy trì hạng.

6.  Nâng hạng.

7.  Ân hạng.

8.  Hạ hạng.

9.  Tranh chấp hạng.

10. Outcome logger.

11. CRM chăm sóc thành viên.

Hệ thống phải resolve:

member_tier_display  
accumulated_valid_revenue_display  
amount_to_maintain_tier_display  
amount_to_next_tier_display  
next_member_tier_display  
days_to_cycle_end_display  
grace_status  
days_left_in_grace_display

AI không được:

1.  Tự tính hạng.

2.  Tự tính doanh số.

3.  Tự tính số còn thiếu.

4.  Tự nói ngày còn lại.

5.  Tự hạ hạng.

6.  Tự nâng hạng.

7.  Tự bù quyền lợi.

8.  Tự xử lý tranh chấp.

Hạ hạng phải nói nhẹ, không làm khách xấu hổ.

Member dispute phải mở case, không tranh luận.

Member Lifecycle là P0 dependency.

**11. PRODUCT RECOMMENDATION PRINCIPLE**

AI không được gợi ý sản phẩm ngẫu nhiên.

AI không được dùng cùng một bộ sản phẩm cho mọi khách.

AI không được chỉ gợi ý một sản phẩm nếu ngữ cảnh yêu cầu deep recommendation.

Gợi ý sâu mặc định phải theo:

01 sản phẩm theo mùa  
01 sản phẩm chức năng  
01 sản phẩm bổ dưỡng  
01 sản phẩm chăm sóc người thân theo giới/ngữ cảnh gia đình

Mỗi sản phẩm phải có:

1.  Product public name.

2.  Eastern effectiveness summary.

3.  Hero ingredients.

4.  Ingredient synergy effect.

5.  Suitable context.

6.  Safety boundary.

AI phải biết tư vấn theo:

1.  Cha.

2.  Mẹ.

3.  Chồng.

4.  Vợ.

5.  Con.

6.  Người lớn tuổi.

7.  Gia đình.

8.  Văn phòng.

9.  Sinh viên.

10. Du học sinh.

11. Việt kiều.

12. Công ty.

13. Trường học.

14. Bệnh viện / khu chăm sóc.

15. Quà biếu.

16. Công ty mua cho nhân viên.

17. Đối tác.

18. HR / Admin / Procurement.

19. Người bận rộn.

20. Người ở xa.

Product Recommendation phải qua Product Knowledge, Claim Policy, Availability, Pricing và Order Core khi chuyển sang quote/order.

Product Recommendation là P0 dependency.

**12. SEGMENT RECOMMENDATION PRINCIPLE**

Segment Recommendation là dependency chính thức.

AI, CRM, ADS và Landing Page phải phân biệt các segment:

1.  Cá nhân dùng hằng ngày.

2.  Gia đình.

3.  Văn phòng.

4.  Sinh viên.

5.  Du học sinh.

6.  Việt kiều.

7.  Công ty.

8.  Trường học.

9.  Bệnh viện / khu chăm sóc.

10. Cơ quan / đoàn thể.

11. HR / Admin / Procurement.

12. Quà sếp.

13. Quà đối tác.

14. Quà thăm bệnh.

15. Quà doanh nghiệp.

16. Người bận rộn.

17. Người đi công tác.

18. Người ở xa.

19. Khách mua số lượng lớn.

20. Khách mua gửi cho người thân.

Segment Recommendation phải đi qua:

SegmentRecommendationResolver  
ProductKnowledgeResolver  
ClaimPolicyResolver  
AvailabilityResolver  
PricingResolver  
ShippingEligibilityResolver nếu có giao hàng  
OrderDraftResolver nếu chuyển sang đơn

Không được mặc định công ty / trường học / bệnh viện là đại lý.

Không được hứa giao quốc tế nếu Shipping / Export Eligibility chưa pass.

Không được quote số lượng lớn nếu chưa có Bulk / Corporate Policy.

Segment Recommendation là P0 dependency.

**13. DIAMOND / AFFILIATE / DISTRIBUTOR BOUNDARY PRINCIPLE**

MASTER-02 khóa ranh giới:

Diamond / Affiliate / Khởi nghiệp  
≠ Đại lý  
≠ Nhà phân phối  
≠ Mua sỉ  
≠ Công ty mua quà  
≠ Khách mua lẻ

Affiliate / khởi nghiệp gắn với Diamond.

Đại lý / nhà phân phối / mua sỉ đi theo Partner / Distributor / Wholesale Policy.

AI không được:

1.  Gộp Diamond với đại lý.

2.  Gộp khách mua số lượng lớn với nhà phân phối.

3.  Hứa hoa hồng nếu commission runtime chưa xác nhận.

4.  Tự nói khách đủ điều kiện khởi nghiệp nếu chưa có runtime.

5.  Tự gửi sai số điện thoại.

6.  Tự tính hoa hồng.

7.  Public commission/payout khi không đúng surface.

8.  Tự xử lý dispute hoa hồng.

Diamond / Affiliate / Distributor Boundary là P0 dependency.

**14. MESSAGE TRIGGER / IMMUTABLE TEXT PRINCIPLE**

Tin nhắn không được sinh tự do.

Mỗi tin nhắn phải có:

1.  Trigger.

2.  Đối tượng.

3.  Hạng thành viên nếu liên quan.

4.  Kênh gửi.

5.  Điều kiện gửi.

6.  Điều kiện chặn.

7.  Nội dung đã duyệt.

8.  Snapshot biến.

9.  Dedup.

10. Log.

Không được:

1.  Tự tạo trigger mới.

2.  Gửi sai hạng.

3.  Gửi trùng trong tháng nếu rule cấm.

4.  Rewrite/paraphrase nội dung đã duyệt.

5.  Gửi trên kênh chưa có lịch sử tương tác hoặc chưa được phép.

6.  Gửi khi opt-out.

7.  Gửi khi open case.

8.  Gửi khi fatigue fail.

9.  Gửi ngoài quiet hours nếu policy không cho.

10. Gửi email sai event.

Message Trigger / Immutable Text là P0 dependency.

**15. PUBLIC COMMENT / MESSENGER HANDOFF PRINCIPLE**

Public comment / live comment là public surface.

Không được:

1.  Báo final price.

2.  Quote line-by-line.

3.  Xác nhận đơn.

4.  Lặp số điện thoại.

5.  Xin địa chỉ.

6.  Gửi tài khoản.

7.  Tư vấn bệnh dài.

8.  Gửi invoice detail.

9.  Public Diamond commission.

10. Chốt đơn public.

Các tình huống phải kéo vào Messenger / private nếu policy cho phép:

1.  Hỏi giá.

2.  Muốn mua.

3.  Chốt / lấy hàng.

4.  Để số điện thoại.

5.  Để địa chỉ.

6.  Hỏi thanh toán.

7.  Hỏi hóa đơn.

8.  Hỏi bệnh / kiêng cữ / sức khỏe nhạy cảm.

9.  Hỏi Diamond / referral.

10. Cần tư vấn sâu.

Handoff success mới được nói đã gửi/chuyển Messenger.

Handoff fail không được nói đã gửi.

Không được kêu khách tự nhắn Messenger nếu flow cho phép hệ thống chủ động handoff.

Public Comment / Messenger Handoff là P0 dependency.

**16. HEALTH BOUNDARY PRINCIPLE**

Nếu khách không nêu bệnh:

AI không được tự hỏi:

1.  Mình có bệnh gì không?

2.  Có kiêng cữ gì không?

3.  Đang điều trị gì không?

4.  Có dùng thuốc gì không?

Không được kéo hội thoại thực dưỡng thông thường sang y khoa.

Nếu khách nêu bệnh hoặc tình trạng sức khỏe:

1.  Bật HealthSafetyGuard.

2.  Không quote/order nếu health unresolved.

3.  Tư vấn theo hướng bữa ăn thực dưỡng.

4.  Không nói chữa bệnh.

5.  Không thay thuốc.

6.  Không cam kết khỏi bệnh.

7.  Không khuyên ngưng thuốc.

8.  Không tư vấn chi tiết ở public comment.

Health Boundary là P0 dependency.

**17. BRAND SOUL / SCIENTIFIC EVIDENCE PRINCIPLE**

MASTER-02 khóa brand và khoa học như dependency.

Các trục bắt buộc:

1.  “Ngon như Mẹ nấu — thương ngay từ vị đầu tiên”.

2.  Sâm Savigin / Vietnam Ocean Ginseng.

3.  Sản phẩm khoa học.

4.  Bài báo khoa học quốc tế nếu Evidence Registry approved.

5.  Product Effectiveness.

6.  Y thực đồng nguyên kết hợp kiến thức ẩm thực phương Đông.

7.  Không thuốc hóa.

8.  Không bịa link/kết luận khoa học.

9.  Không hạ thấp bằng chứng khoa học đã có thành “tài liệu nội bộ”.

10. Không bán củ Sâm Savigin / giống Sâm Savigin nếu đã khóa không bán.

11. Không dùng claim khoa học để hứa điều trị.

12. Không dùng mã SKU nội bộ với khách.

Brand Soul / Scientific Evidence là P0 dependency.

**18. OFFICIAL CONTACT REGISTRY PRINCIPLE**

Số điện thoại không được là text tự do trong AI.

MASTER-02 khóa Official Contact Registry.

Các contact purpose phải có source:

1.  Tham quan / sắp lịch / đón tiếp.

2.  Liên hệ công ty.

3.  Gặp / trao đổi với lãnh đạo.

4.  Xin số cá nhân lãnh đạo.

5.  Đại lý.

6.  Nhà phân phối.

7.  Hợp tác kinh doanh.

8.  Mua số lượng nhiều.

9.  Affiliate / Diamond / khởi nghiệp.

10. CSKH / khiếu nại nếu có.

Nếu thiếu OfficialContactResolver:

AI không được gửi số điện thoại.  
Gateway không được public số điện thoại.  
CRM không được gửi contact.  
Landing Page không được hardcode contact.

Official Contact Registry là P0 dependency.

**19. PROGRAM / SELLABLE / PRODUCT ACTIVATION PRINCIPLE**

Quy tắc mở bán là P0 domain riêng.

Không được để rule mở bán nằm rải rác trong Pricing / Availability / Program.

MASTER-02 khóa domain:

PROGRAM / SELLABLE / PRODUCT ACTIVATION DEPENDENCY

Domain này gồm 6 lớp.

**19.1. Base Sellable Gate**

SKU chỉ được mở bán khi:

Thành phẩm đã hoàn tất sản xuất.  
Thành phẩm đã nhập kho hợp lệ.  
stock_available \> 0.  
sellable_status = SELLABLE.  
listed_price_status = ACTIVE.  
Không quality hold.  
Không recall hold.  
Không sale lock.  
Không channel block.  
Runtime Core cho phép bán.

Nếu thiếu bất kỳ điều kiện nào, SKU không được mở bán.

**19.2. Auto Stop Sale Gate**

SKU tự động ngưng bán khi:

Hết hàng.  
stock_available = 0.  
quality hold.  
recall hold.  
sale lock.  
channel block.  
listed_price inactive.  
product hidden.  
sellable_status != SELLABLE.

Khi SKU không sellable:

Không báo quote.  
Không tạo đơn.  
Không public tồn kho.  
Không nói “chỉ còn vài hộp”.  
Không gợi ý thay thế nếu sản phẩm thay thế chưa qua guard.

**19.3. Program 24/7 Activation**

24/7 phải theo ProgramPolicyResolver:

SKU mở bán lần đầu → giảm 9%.  
successful_sales_count \< 50/ngày → giảm 12% ngày tiếp theo.  
successful_sales_count \>= 50/ngày → giảm 9% ngày tiếp theo.

Chỉ tính đơn hợp lệ.

Không tính:

1.  Quote.

2.  Giỏ hàng.

3.  Đơn nháp.

4.  Đơn chưa xác nhận.

5.  Đơn hủy.

6.  Đơn hoàn.

7.  Đơn test.

8.  Đơn lỗi.

9.  Đơn trùng.

**19.4. Golden Hour Activation**

Giờ Vàng phải theo GoldenHourResolver và Availability:

sellable_stock \< 300 → không mở Giờ Vàng.  
300 \<= sellable_stock \< 500 → mở 1 phiên tối.  
sellable_stock \>= 500 → mở 2 phiên/ngày.  
session_quota = 2.000 sản phẩm / phiên.  
Không bán vượt tồn kho khả dụng.

Phiên Giờ Vàng chỉ được kích hoạt nếu:

1.  SKU sellable.

2.  Có stock_available hợp lệ.

3.  Có listed price active.

4.  Có program eligibility.

5.  Không quality hold.

6.  Không recall hold.

7.  Không sale lock.

8.  Không channel block.

9.  Runtime Core cho phép bán.

**19.5. Channel / Board / AI Activation**

AI, Gateway, CRM, Landing Page, ADS, MC AI chỉ được nói hoặc bán SKU khi SKU:

1.  Active trong chương trình/kênh.

2.  Sellable.

3.  Có giá active.

4.  Có content/claim public-safe.

5.  Không ngoài board live nếu đang ở live board.

6.  Không ngoài program active list.

7.  Không bị hold/recall/lock.

MC AI không được nói SKU ngoài Daily Live Product Board.

ADS không được chạy SKU ngoài active list nếu campaign là campaign bán hàng theo chương trình.

CRM không được gửi SKU không active nếu message gắn chương trình.

Landing Page không được hardcode danh sách chương trình.

Gateway không được tự chọn SKU chương trình.

**19.6. Sales / Stock Movement → Production Planning Signal**

Dữ liệu bán hàng và tồn kho phải tạo tín hiệu sản xuất:

SKU bán nhanh.  
SKU tồn cao.  
SKU active trong 24/7.  
SKU active trong Giờ Vàng.  
SKU có tốc độ giảm tồn cao.  
SKU cần sản xuất bổ sung.  
SKU cần đẩy bán trước khi sản xuất mới.

Production Planning Signal không tự động thành Production Order nếu chưa qua Operational Core / Owner Review.

Program / Sellable / Product Activation là P0 dependency.

**20. PAYMENT / BANK TRANSFER PRINCIPLE**

Payment phải đi qua Payment Core và Accounting Review.

Khi khách chọn chuyển khoản:

payment_method = BANK_TRANSFER  
payment_channel = VIETQR_OR_BANK_ACCOUNT  
payment_status = BANK_TRANSFER_PENDING  
accounting_review_status = WAITING_BANK_TRANSFER  
payment_reference = unique_payment_reference  
payment_verification_source = PENDING_RECONCILIATION

AI chỉ được nói đã thanh toán khi Payment Core trả PAID hoặc PAID_BY_BANK_TRANSFER.

Ảnh giao dịch không tự động bằng đã thanh toán.

Khách nói “đã chuyển khoản” không tự động bằng PAID.

Kế toán xác nhận thủ công phải có audit.

Payment / Bank Transfer là P0 dependency.

**21. SHIPPING / TRACKING PRINCIPLE**

Shipping phải theo Shipping Core.

Hệ thống chỉ được nói:

1.  ETA.

2.  COD.

3.  Phí ship.

4.  Tracking.

5.  Carrier status.

6.  Fallback delivery time.

khi Shipping Core hoặc resolver tương ứng trả kết quả.

Nếu có tracking realtime → trả trạng thái/link.

Nếu không có tracking → fallback theo vùng nếu policy cho phép.

Không hỏi lại địa chỉ nếu order đã có shipping info.

Không bịa trạng thái vận chuyển.

Không cam kết ngày nhận tuyệt đối nếu chưa có carrier tracking.

Shipping / Tracking là P0 dependency.

**22. PRIORITY CONFLICT / SUPPRESSION PRINCIPLE**

Các case sau thắng CRM / member sales / upsell:

Complaint  
Refund  
Privacy  
Payment dispute  
Delivery issue  
Health review  
Counterfeit  
Quality case  
Member dispute  
Commission dispute

Nếu có open case:

1.  Không gửi CRM bán hàng.

2.  Không nhắc duy trì/nâng hạng.

3.  Không upsell.

4.  Không gửi Diamond commission promo.

5.  Không tranh luận.

6.  Không tự sửa hạng/quyền lợi.

7.  Mở case / human review.

Priority Conflict / Suppression là P0 dependency.

**23. CROSS-CHANNEL DEDUP / OUTCOME LOGGER PRINCIPLE**

Không gửi cùng message family đa kênh trong 12 giờ.

Không gửi cùng trigger nhiều lần.

Không gửi lại message đã gửi trong tháng nếu rule không cho.

Member lifecycle outcome phải log:

MAINTAIN_SUCCESS  
MAINTAIN_RISK  
GRACE_STARTED  
GRACE_RECOVERED  
DOWNGRADED  
UPGRADE_SUCCESS  
MEMBER_RETAINED  
MEMBER_WINBACK  
MEMBER_DISPUTE_OPENED  
MEMBER_CRM_SUPPRESSED

Outcome dùng cho dashboard / BI / learning có kiểm soát.

Outcome không public.

Outcome không dùng để ép khách.

Cross-channel Dedup / Outcome Logger là P0 dependency.

**24. LIVE MODERATION / BRAND RISK PRINCIPLE**

Comment chửi thề, troll, brand attack, phá live phải được xử lý qua moderation.

Nguyên tắc:

1.  Hide / no reply / no Messenger khi là abuse rõ.

2.  Không kéo troll vào Messenger.

3.  Không đôi co.

4.  Không quote/order.

5.  Không mở CRM.

6.  Không auto blacklist khi là complaint thật.

7.  Nếu có mã đơn/mã lô/bằng chứng → chuyển CSKH/case.

8.  Có fuzzy matching tiếng Việt.

9.  Có moderation evidence.

Live Moderation / Brand Risk là P0 dependency.

**25. COMPLETION REPORT / GATEWAY RELEASE PRINCIPLE**

Completion Report là release gate, không phải tài liệu tham khảo.

Completion Report mặc định:

PENDING_EVIDENCE — NOT GATEWAY PASS

Gateway chỉ được xem xét production khi:

1.  GATE-01 đến GATE-12 đều PASS.

2.  Không còn P0 open issue.

3.  Có evidence cho từng P0.

4.  Có DecisionEnvelope.

5.  Có resolver trace.

6.  Có guard trace.

7.  Có handoff delivery log.

8.  Có QuoteSnapshot.

9.  Có order_code.

10. Có duplicate/idempotency test.

11. Có CRM suppression evidence.

12. Có ROAS internal-only evidence.

13. Có E2E smoke PASS.

14. Có owner sign-off.

Không được gọi “Ready” chỉ vì tài liệu đã viết xong.

Không được gọi PASS nếu chưa có evidence.

Completion Report / Gateway Release là P0 dependency.

**26. SOURCE BOUNDARY MODEL**

MASTER-02 sử dụng 4 lớp source boundary.

**26.1. Governance Source**

Governance Source quyết định rule cấp cao.

Bao gồm:

1.  MASTER-00.

2.  MASTER-01.

3.  MASTER-02.

4.  Completion Report.

5.  Evidence Standard.

6.  Smoke Matrix.

7.  Owner decision log.

Governance Source không thay thế runtime.

Governance Source khóa rule, boundary, condition, dependency, done gate.

**26.2. Runtime Decision Source**

Runtime Decision Source quyết định trạng thái tại thời điểm chạy.

Bao gồm:

1.  Customer Identity.

2.  Customer Memory.

3.  Member Lifecycle.

4.  Pricing.

5.  Program.

6.  QuoteSnapshot.

7.  Availability.

8.  Payment.

9.  Shipping.

10. Order State.

11. IVR.

12. CRM Eligibility.

13. Message Trigger.

14. Open Case.

15. Handoff Status.

16. Completion Evidence.

Consumer không được tự tính thay Runtime Decision Source.

**26.3. Approved Content / Public-Safe Source**

Approved Content Source quyết định câu chữ được render.

Bao gồm:

1.  Product Knowledge.

2.  Claim Policy.

3.  Brand Voice.

4.  Scientific Evidence.

5.  Approved Publication Link.

6.  Message Text Immutable Source.

7.  Official Contact Registry.

8.  Content Block Registry.

Content không quyết định runtime.

Content chỉ render khi runtime/guard pass.

**26.4. Evidence Source**

Evidence Source quyết định release.

Bao gồm:

1.  Evidence item.

2.  DecisionEnvelope.

3.  Resolver trace.

4.  Guard trace.

5.  QuoteSnapshot sample.

6.  OrderDraft sample.

7.  OrderCode sample.

8.  Handoff delivery log.

9.  CRM job log.

10. Message send log.

11. Dedup log.

12. Outcome log.

13. Completion gate status.

14. Owner sign-off.

Thiếu evidence thì không release.

**27. NO-HARDCODE BOUNDARY**

Không được hardcode dữ liệu quyết định trong AI, Gateway, CRM, Landing Page, Admin UI, ADS, MC AI, content block, frontend component hoặc static template.

Không được hardcode:

1.  Giá.

2.  Chương trình.

3.  Quyền lợi thành viên.

4.  Hoa hồng Diamond.

5.  Buyer link Diamond.

6.  Hạng thành viên.

7.  Doanh số tích lũy.

8.  Số còn thiếu để nâng/duy trì hạng.

9.  Ngày còn lại trong chu kỳ.

10. Grace period.

11. CRM trigger.

12. Message text.

13. Message send channel.

14. Số điện thoại chính thức.

15. Link bài báo khoa học.

16. Payment reference.

17. Bank account.

18. Shipping ETA.

19. Tracking status.

20. SKU active trong 24/7.

21. SKU active trong Giờ Vàng.

22. Live board SKU.

23. Outcome log.

24. Completion PASS.

25. Gateway PASS.

26. Production Ready.

27. Official contact.

28. IVR result interpretation.

29. Order state.

30. PAID state.

31. Recall / hold status.

32. Public trace field.

33. Permission.

34. Audit bypass.

No-hardcode không có nghĩa không được hiển thị dữ liệu.

No-hardcode có nghĩa dữ liệu hiển thị phải đến từ source / resolver / core được phép.

**28. FALLBACK PRINCIPLE**

Fallback không phải suy đoán.

Fallback chỉ được dùng khi:

1.  Có policy cho phép.

2.  Không tạo cam kết sai.

3.  Không thay thế source-of-truth.

4.  Không thay thế runtime resolver.

5.  Không bypass guard.

6.  Không ảnh hưởng giá, đơn, thanh toán, shipping, hạng, quyền lợi, claim, order state hoặc release gate.

Không được fallback bằng suy đoán cho:

1.  Giá.

2.  Quote.

3.  Member tier.

4.  Diamond benefit.

5.  Commission.

6.  Payment.

7.  Bank account.

8.  PAID.

9.  Shipping ETA.

10. COD.

11. Sellable status.

12. Product active trong chương trình.

13. Order state.

14. IVR state.

15. Message trigger.

16. Health-sensitive recommendation.

17. Scientific evidence.

18. Official contact.

19. Completion PASS.

20. Gateway PASS.

Nếu thiếu dữ liệu, phải chặn hoặc hỏi thêm trong phạm vi an toàn.

**29. EVIDENCE PRINCIPLE**

Mọi dependency P0 phải có evidence.

Evidence có thể gồm:

1.  DecisionEnvelope.

2.  Resolver trace.

3.  Guard trace.

4.  Runtime result.

5.  QuoteSnapshot.

6.  OrderDraft.

7.  CustomerConfirmation.

8.  OrderCode.

9.  Payment record.

10. Bank transfer queue.

11. Accounting review audit.

12. Shipping tracking record.

13. CRM job log.

14. Message send log.

15. Dedup log.

16. Outcome log.

17. Handoff delivery log.

18. Moderation action log.

19. Completion gate evidence.

20. Owner sign-off.

Không dùng:

1.  Lời xác nhận miệng.

2.  Screenshot câu trả lời hay.

3.  Nội dung tài liệu đã viết.

4.  Demo rời rạc.

5.  Log thiếu source.

6.  Test không có trace.

7.  UI nhìn có vẻ chạy.

để thay thế evidence P0.

**30. PART 1 DONE GATE**

PHẦN 1/4 đạt khi:

1.  Đã xác định vai trò MASTER-02 là Cross-Pack Dependency Governance.

2.  Đã xác định MASTER-02 không viết implementation chi tiết.

3.  Đã khóa Source-of-Truth quyết định dữ liệu.

4.  Đã khóa Owner Core quyết định nghiệp vụ.

5.  Đã khóa Consumer chỉ tiêu thụ trong boundary.

6.  Đã khóa Runtime Resolver cho quyết định runtime.

7.  Đã khóa Business-rule-driven dependency model.

8.  Đã khóa Customer Context First.

9.  Đã khóa Customer Memory / Care Before Sale.

10. Đã khóa CRM 12 tháng là dependency chính thức.

11. Đã khóa Member Lifecycle là dependency chính thức.

12. Đã khóa Product Recommendation 3 trụ + người thân.

13. Đã khóa Segment Recommendation.

14. Đã khóa Diamond / Affiliate / Distributor separation.

15. Đã khóa Message Trigger / Immutable Text.

16. Đã khóa Public Comment → Messenger Handoff.

17. Đã khóa Health Boundary.

18. Đã khóa Brand Soul / Scientific Evidence.

19. Đã khóa Official Contact Registry.

20. Đã khóa Program / Sellable / Product Activation là P0 domain riêng.

21. Đã khóa Payment / Bank Transfer.

22. Đã khóa Shipping / Tracking.

23. Đã khóa Priority Conflict.

24. Đã khóa Dedup / Outcome Logger.

25. Đã khóa Live Moderation.

26. Đã khóa Completion Report / Gateway Release Gate.

27. Đã khóa Source Boundary Model.

28. Đã khóa No-hardcode Boundary.

29. Đã khóa Fallback Principle.

30. Đã khóa Evidence Principle.

31. Không gọi Gateway PASS.

32. Không gọi Production Ready.

33. Không cho consumer tự suy luận rule kinh doanh.

**31. TRẠNG THÁI SAU PHẦN 1/4**

MASTER-02 PHẦN 1/4 = COMPLETED  
MASTER-02 CLEAN FINAL = IN_PROGRESS  
GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**32. PHẦN TIẾP THEO**

Phần tiếp theo:

PHẦN 2/4 — CROSS-PACK DEPENDENCY REGISTRY BY BUSINESS DOMAIN / OWNER CORE / CONSUMER PACK / BLOCKED-IF-MISSING RULE

PHẦN 2/4 sẽ khóa registry dependency theo 16 domain:

01\. Governance / Source-of-Truth  
02. Product Knowledge / Claim / Brand / Scientific Proof  
03. Customer Identity / Customer Memory  
04. Segment Recommendation / Product Recommendation  
05. CRM 12-Month / Message Trigger / Suppression  
06. Member Lifecycle / Rights / Downgrade / Dispute  
07. Diamond / Affiliate / Entrepreneurship / Distributor Boundary  
08. Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot  
09. Program / Sellable / Product Activation / Production Signal  
10. Payment / Bank Transfer / Accounting Review  
11. Shipping / Tracking / ETA / COD  
12. Order / OrderDraft / CustomerConfirmation / IVR  
13. Gateway / Public Comment / Messenger Handoff / Moderation  
14. Official Contact / Phone Number Registry  
15. Health Boundary / Complaint / Priority Conflict  
16. Evidence / Completion Report / Gateway Gate / Security

**PHẦN 2/4 — CROSS-PACK DEPENDENCY REGISTRY BY BUSINESS DOMAIN / OWNER CORE / CONSUMER PACK / BLOCKED-IF-MISSING RULE**

**0. MỤC ĐÍCH CỦA PHẦN 2/4**

PHẦN 2/4 khóa registry dependency theo từng business domain của hệ thống Ginsengfood.

Mỗi domain trong phần này xác định rõ:

1.  Source-of-Truth nào quyết định.

2.  Owner Core / Owner Pack nào chịu trách nhiệm.

3.  Consumer Pack nào được phép tiêu thụ.

4.  Consumer được làm gì.

5.  Consumer bị cấm làm gì.

6.  Runtime Resolver / Guard nào bắt buộc.

7.  Thiếu dữ liệu thì phải chặn gì.

8.  Evidence nào phải có.

9.  Done Gate nào bắt buộc.

10. Pack chi tiết nào triển khai sâu.

PHẦN 2/4 không viết API, DTO, DB, UI, worker, code hoặc template chi tiết.

PHẦN 2/4 chỉ khóa dependency governance để các pack chi tiết không tự suy luận rule kinh doanh.

**1. CHUẨN ĐỌC MỖI DOMAIN DEPENDENCY**

Mỗi domain dependency trong MASTER-02 phải được đọc theo cấu trúc:

Domain ID  
Domain Name  
Business Purpose  
Source ID  
Owner Core / Owner Pack  
Consumer Pack  
Dependency Type  
Required Resolver / Guard  
Allowed Use  
Forbidden Use  
Blocked If Missing  
Evidence Required  
Done Gate  
Pack Detail Mapping

**1.1. Domain ID**

Domain ID dùng để định danh nhóm dependency ở tầng governance.

Ví dụ:

DEP-DOM-01-GOV  
DEP-DOM-02-PROD-CLAIM-BRAND  
DEP-DOM-03-CUSTOMER  
DEP-DOM-04-RECOMMENDATION

Domain ID không phải API endpoint.

Domain ID không phải database table.

Domain ID không phải service class.

Domain ID là mã governance để trace rule, source, pack và evidence.

**1.2. Source ID**

Source ID là nguồn sự thật của dữ liệu hoặc rule.

Source ID có thể thuộc:

1.  Master governance.

2.  Runtime Core.

3.  Product Knowledge.

4.  Claim Policy.

5.  Customer Profile.

6.  Customer Memory.

7.  CRM.

8.  Member Lifecycle.

9.  Pricing.

10. Program.

11. Availability.

12. Payment.

13. Shipping.

14. Order.

15. Gateway.

16. Evidence.

17. Security.

Consumer không được tự tạo Source ID mới.

Nếu một domain cần Source ID chưa có trong MASTER-01, MASTER-02 phải khai báo source đó ở tầng governance để pack chi tiết triển khai sau.

**1.3. Owner Core / Owner Pack**

Owner Core là nơi có quyền quyết định dữ liệu hoặc trạng thái.

Ví dụ:

1.  Customer Profile Core quyết định customer identity.

2.  Customer Memory Core quyết định lịch sử mua và trải nghiệm khách.

3.  Member Lifecycle Core quyết định nâng hạng, duy trì, ân hạng, hạ hạng.

4.  Commerce Pricing Core quyết định giá.

5.  Program Policy Core quyết định 24/7 và Giờ Vàng.

6.  Commerce Availability Core quyết định sellable.

7.  Payment Core quyết định thanh toán.

8.  Shipping Core quyết định giao hàng.

9.  Order Core quyết định order state.

10. Gateway Pack quyết định normalized event / handoff status.

11. Evidence Registry quyết định completion evidence.

12. Security Pack quyết định permission/audit.

Consumer không được vượt quyền owner.

**1.4. Consumer Pack**

Consumer Pack là pack được phép tiêu thụ dữ liệu từ owner.

Consumer có thể là:

1.  AI Advisor.

2.  Gateway.

3.  CRM.

4.  Messaging.

5.  Landing Page.

6.  ADS.

7.  MC AI.

8.  Admin UI.

9.  Order Core.

10. Payment Core.

11. Shipping Core.

12. MISA.

13. Evidence Pack.

14. Completion Report.

15. BI / Dashboard.

Consumer chỉ được dùng dữ liệu trong phạm vi allowed use.

Consumer không được biến dữ liệu tiêu thụ thành source-of-truth mới.

**1.5. Blocked-if-missing**

Mỗi domain P0 phải có blocked-if-missing.

Nguyên tắc:

Thiếu source → không khẳng định.  
Thiếu resolver → không hứa.  
Thiếu guard → không hành động.  
Thiếu evidence → không release.  
Thiếu permission → không protected action.  
Thiếu owner approval → không active scope.

**2. DOMAIN REGISTRY OVERVIEW**

MASTER-02 khóa 16 business domain dependency chính:

01\. Governance / Source-of-Truth  
02. Product Knowledge / Claim / Brand / Scientific Proof  
03. Customer Identity / Customer Memory  
04. Segment Recommendation / Product Recommendation  
05. CRM 12-Month / Message Trigger / Suppression  
06. Member Lifecycle / Rights / Downgrade / Dispute  
07. Diamond / Affiliate / Entrepreneurship / Distributor Boundary  
08. Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot  
09. Program / Sellable / Product Activation / Production Signal  
10. Payment / Bank Transfer / Accounting Review  
11. Shipping / Tracking / ETA / COD  
12. Order / OrderDraft / CustomerConfirmation / IVR  
13. Gateway / Public Comment / Messenger Handoff / Moderation  
14. Official Contact / Phone Number Registry  
15. Health Boundary / Complaint / Priority Conflict  
16. Evidence / Completion Report / Gateway Gate / Security

**3. DEP-DOM-01-GOV — GOVERNANCE / SOURCE-OF-TRUTH DEPENDENCY**

**3.1. Business Purpose**

Domain này khóa nguồn quản trị cấp cao của toàn hệ thống.

Mục tiêu là đảm bảo mọi pack chi tiết đều bám theo source-of-truth, không tạo nguồn song song, không tự suy luận rule và không bypass governance.

**3.2. Source ID**

SRC-GOV-001 — MASTER GOVERNANCE SOURCE  
SRC-EVD-001 — EVIDENCE REGISTRY SOURCE  
SRC-SEC-001 — SECURITY / PERMISSION / AUDIT SOURCE  
SRC-COMP-001 — COMPLETION REPORT SOURCE

**3.3. Owner Core / Owner Pack**

Master Governance Owner  
Evidence Registry Owner  
Security / Permission / Audit Owner  
Release Governance Owner  
Owner Sign-off Authority

**3.4. Consumer Pack**

All packs  
AI Advisor  
Gateway  
CRM  
Commerce Core  
Operational Core  
Payment Core  
Shipping Core  
Order Core  
Admin UI  
Landing Page  
ADS  
MC AI  
Evidence Pack  
Completion Report

**3.5. Dependency Type**

GOVERNANCE  
SOURCE_OF_TRUTH  
RELEASE_GATE  
EVIDENCE  
SECURITY

**3.6. Required Resolver / Guard**

SourceOfTruthResolver  
GovernanceConflictResolver  
EvidenceRegistryResolver  
ReleaseGateResolver  
OwnerSignOffResolver  
SecurityPermissionResolver  
AuditResolver

**3.7. Allowed Use**

Consumer được dùng Governance Source để:

1.  Xác định source-of-truth.

2.  Xác định owner core.

3.  Xác định consumer boundary.

4.  Xác định rule nào là P0.

5.  Xác định dependency nào chặn release.

6.  Xác định evidence bắt buộc.

7.  Xác định pack nào được phép triển khai chi tiết.

8.  Xác định trạng thái Gateway / Completion / Production / Release / Go-live.

**3.8. Forbidden Use**

Consumer không được:

1.  Tạo source-of-truth song song.

2.  Tự sửa rule governance.

3.  Tự gọi dependency PASS khi thiếu evidence.

4.  Tự mở Gateway.

5.  Tự gọi production-ready.

6.  Tự bỏ qua source boundary.

7.  Tự dùng tài liệu content thay runtime.

8.  Tự dùng screenshot thay evidence.

9.  Tự bypass permission/audit.

**3.9. Blocked If Missing**

Nếu thiếu Governance Source:

1.  Pack chi tiết không được tự quyết rule.

2.  Không được release.

3.  Không được Gateway PASS.

4.  Không được Production Ready.

5.  Không được Go-live.

Nếu thiếu Evidence Registry:

1.  Completion Report giữ PENDING_EVIDENCE.

2.  Release giữ NOT APPROVED.

3.  Gateway giữ BLOCKED.

**3.10. Evidence Required**

EVD-GOV-001 — Source-of-truth mapping  
EVD-GOV-002 — Owner core mapping  
EVD-GOV-003 — Consumer boundary mapping  
EVD-GOV-004 — Governance conflict resolution  
EVD-GOV-005 — Release gate status  
EVD-GOV-006 — Owner sign-off record

**3.11. Done Gate**

PASS khi mọi pack chi tiết đều trace được rule về source-of-truth, không có source song song, không có consumer vượt quyền owner, và mọi release state dựa trên evidence.

**3.12. Pack Detail Mapping**

MASTER-00  
MASTER-01  
MASTER-02  
Evidence Pack  
Security Pack  
Completion Report  
Release Governance

**4. DEP-DOM-02-PROD-CLAIM-BRAND — PRODUCT KNOWLEDGE / CLAIM / BRAND / SCIENTIFIC PROOF DEPENDENCY**

**4.1. Business Purpose**

Domain này khóa tri thức sản phẩm, claim, brand voice, bằng chứng khoa học và Product Effectiveness.

Mục tiêu là để AI, CRM, Landing Page, ADS, Gateway và MC AI tư vấn đúng sản phẩm, đúng hồn thương hiệu, đúng claim, không thuốc hóa và không bịa bằng chứng khoa học.

**4.2. Source ID**

SRC-PROD-001 — PRODUCT KNOWLEDGE MASTER  
SRC-CLAIM-001 — CLAIM WHITELIST SOURCE  
SRC-BRAND-001 — BRAND VOICE SOURCE  
SRC-SCI-001 — SCIENTIFIC EVIDENCE SOURCE  
SRC-PUB-001 — APPROVED PUBLICATION LINK SOURCE  
SRC-EVD-001 — EVIDENCE REGISTRY SOURCE

**4.3. Owner Core / Owner Pack**

Product Knowledge Pack  
Claim Policy Pack  
Brand Voice Pack  
Scientific Evidence Registry  
Approved Public Link Registry  
Content Approval Pack

**4.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
ADS  
MC AI  
Content Blocks  
Public Trace if applicable  
Admin Preview

**4.5. Dependency Type**

PRODUCT_KNOWLEDGE  
CLAIM_GUARD  
BRAND_VOICE  
SCIENTIFIC_PROOF  
PUBLIC_SAFE  
CONTENT_RENDER

**4.6. Required Resolver / Guard**

ProductKnowledgeResolver  
ProductEffectivenessResolver  
ProductPublicNameGuard  
ClaimPolicyResolver  
ClaimGuard  
BrandVoiceResolver  
ScientificEvidenceResolver  
ApprovedPublicationLinkResolver  
SaviginScienceClaimGuard  
FinalGuard

**4.7. Allowed Use**

Consumer được dùng domain này để:

1.  Tư vấn đúng sản phẩm.

2.  Render tên sản phẩm public đầy đủ.

3.  Giải thích Product Effectiveness.

4.  Giữ trục “Ngon như Mẹ nấu — thương ngay từ vị đầu tiên”.

5.  Trình bày Sâm Savigin / Vietnam Ocean Ginseng đúng bằng chứng.

6.  Nói về sản phẩm khoa học khi evidence approved.

7.  Gửi link bài báo khoa học nếu ApprovedPublicationLinkResolver pass.

8.  Dùng y thực đồng nguyên kết hợp kiến thức ẩm thực phương Đông trong phạm vi public-safe.

9.  Render content CRM, combo, proposal, quote line reason nếu đủ Product Effectiveness.

**4.8. Forbidden Use**

Consumer không được:

1.  Tự tạo claim mới.

2.  Tự tạo hiệu dụng mới.

3.  Tự bịa bằng chứng khoa học.

4.  Tự bịa link bài báo.

5.  Tự nói sản phẩm chữa bệnh.

6.  Tự diễn giải nghiên cứu thành claim điều trị.

7.  Gọi sản phẩm bằng mã SKU nội bộ với khách.

8.  Gọi tên sản phẩm rút gọn trong quote/order/CRM.

9.  Bỏ Product Effectiveness khi gợi ý sản phẩm.

10. Bán củ Sâm Savigin hoặc giống Sâm Savigin nếu không thuộc scope bán.

11. Dùng “Ngon như Mẹ nấu” như tagline rời rạc, không gắn với bữa ăn/chăm sóc/gia đình.

12. Hạ claim khoa học đã approved thành “tài liệu nội bộ”.

**4.9. Blocked If Missing**

Nếu thiếu ProductKnowledgeResolver:

1.  AI không được gợi ý SKU cụ thể.

2.  CRM không được gửi product recommendation.

3.  Landing Page không được publish product block.

4.  ADS không được chạy creative SKU cụ thể.

Nếu thiếu ClaimPolicyResolver:

1.  Không được nói hiệu dụng cụ thể.

2.  Không được render claim health/nourishment.

3.  Không được chạy ADS claim.

Nếu thiếu ScientificEvidenceResolver:

1.  Không được nói có bài báo khoa học cụ thể.

2.  Không được gửi link bài báo.

3.  Không được bịa tên bài/DOI/link/kết luận.

Nếu thiếu ProductEffectiveness:

1.  Không được render CRM recommendation.

2.  Không được render combo/growth proposal.

3.  Không được render quote line reason nếu block yêu cầu.

**4.10. Evidence Required**

EVD-PROD-001 — Product public name full  
EVD-PROD-002 — Product Effectiveness present  
EVD-PROD-003 — ClaimGuard pass  
EVD-PROD-004 — No treatment claim  
EVD-PROD-005 — Scientific evidence uses approved source  
EVD-PROD-006 — Approved publication link resolver used  
EVD-PROD-007 — No internal SKU customer-facing  
EVD-PROD-008 — Brand voice rendered correctly

**4.11. Done Gate**

PASS khi mọi nội dung sản phẩm, claim, brand, science, CRM, combo, quote line và public wording đều lấy từ Product Knowledge / Claim / Brand / Scientific Evidence source, không bịa, không thuốc hóa, không hardcode và không dùng mã nội bộ với khách.

**4.12. Pack Detail Mapping**

FILE 02 — Product Knowledge  
FILE 03 — Product Knowledge Schema / Views  
FILE 06 — Claim Whitelist / Safety  
FILE 07 — Common Content Blocks  
FILE 08 — SKU Content  
FILE 09 — Test Matrix  
FILE 10 — Situation Registry  
FILE 12 — Sales Behavior  
Evidence Registry

**5. DEP-DOM-03-CUSTOMER — CUSTOMER IDENTITY / CUSTOMER MEMORY DEPENDENCY**

**5.1. Business Purpose**

Domain này khóa việc AI, CRM, Pricing, Order, Diamond, Gateway và Messaging phải biết khách là ai trước khi tư vấn, báo quyền lợi, CRM, quote hoặc chốt đơn.

**5.2. Source ID**

SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CUSTMEM-001 — CUSTOMER MEMORY SOURCE  
SRC-MEMBER-001 — MEMBER BENEFIT SOURCE  
SRC-CRM-001 — CRM LIFECYCLE SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-CASE-001 — CUSTOMER CASE / COMPLAINT SOURCE

**5.3. Owner Core / Owner Pack**

Customer Profile Core  
Customer Memory Core  
Member Benefit Core  
Order Core  
CRM Lifecycle Core  
Case Management Core  
Commerce Pricing Core

**5.4. Consumer Pack**

AI Advisor  
CRM  
Gateway  
Commerce Pricing  
Order Core  
Messaging  
Admin UI  
Evidence Pack

**5.5. Dependency Type**

CUSTOMER_IDENTITY  
CUSTOMER_MEMORY  
PERSONALIZATION  
CARE_BEFORE_SALE  
CRM_CONTEXT  
QUOTE_CONTEXT

**5.6. Required Resolver / Guard**

CustomerIdentityResolver  
CustomerStageResolver  
CustomerMemoryResolver  
LastPurchaseResolver  
LastPurchasedProductResolver  
RecipientMemoryResolver  
CustomerExperienceResolver  
ProductFeedbackResolver  
ServiceSatisfactionResolver  
CareBeforeNextSaleGuard  
OpenCaseStatusResolver  
OpenCaseBeforeSaleGuard  
CustomerConsentResolver

**5.7. Allowed Use**

Consumer được dùng domain này để:

1.  Xác định khách mới hay khách cũ.

2.  Xác định khách có phải member không.

3.  Xác định lịch sử mua.

4.  Xác định lần gần nhất mua sản phẩm gì.

5.  Xác định mua cho ai nếu có dữ liệu.

6.  Hỏi thăm trải nghiệm trước khi bán tiếp.

7.  Cá nhân hóa CRM.

8.  Cá nhân hóa tư vấn.

9.  Xác định khách có open case không.

10. Chặn CRM/bán hàng khi có open case.

11. Gắn Customer Context vào quote/order nếu hợp lệ.

**5.8. Forbidden Use**

Consumer không được:

1.  Bịa khách là khách cũ.

2.  Bịa khách là member.

3.  Bịa hạng khách.

4.  Bịa lịch sử mua.

5.  Bịa sản phẩm đã mua.

6.  Bịa người nhận.

7.  Bỏ qua hỏi thăm khách cũ.

8.  Bán tiếp khi khách đang có open case.

9.  Dùng lịch sử chat không xác thực thay Customer Memory.

10. Gửi CRM như khách cũ nếu CustomerMemoryResolver không trả dữ liệu.

**5.9. Blocked If Missing**

Nếu thiếu CustomerIdentityResolver:

1.  Không cá nhân hóa chắc chắn.

2.  Không nói khách là member.

3.  Không nói khách là Diamond.

4.  Không áp quyền lợi member.

5.  Không kích hoạt Diamond benefit.

Nếu thiếu LastPurchaseResolver:

1.  Không nói “lần trước Mình mua…”.

2.  Chỉ được hỏi thăm chung.

Nếu thiếu OpenCaseStatusResolver trong ngữ cảnh nhạy cảm:

1.  Không gửi CRM bán hàng.

2.  Không upsell.

3.  Không member lifecycle sales.

Nếu khách phản hồi chưa hài lòng:

1.  Không chốt đơn tiếp.

2.  Chuyển sang CSKH / case flow.

**5.10. Evidence Required**

EVD-CUST-001 — New customer resolved  
EVD-CUST-002 — Returning customer resolved  
EVD-CUST-003 — Last purchase resolved  
EVD-CUST-004 — Last recipient resolved if source exists  
EVD-CUST-005 — Care-before-sale rendered  
EVD-CUST-006 — Negative feedback opens care flow  
EVD-CUST-007 — Open case blocks sales  
EVD-CUST-008 — Unknown customer does not receive fake personalization

**5.11. Done Gate**

PASS khi AI/CRM/Gateway biết khách là ai trước khi cá nhân hóa; khách cũ được hỏi thăm trước khi bán tiếp; không bịa lịch sử; open case chặn bán hàng; Customer Memory được dùng đúng source.

**5.12. Pack Detail Mapping**

FILE 01 — Parent Logic  
FILE 04 — Resolver / Guard  
FILE 07 — Customer care wording  
FILE 09 — Customer memory tests  
FILE 10 — Customer situations  
FILE 12 — Human-level sales behavior  
CRM / Customer Memory Pack  
Case Management Pack

**6. DEP-DOM-04-RECOMMENDATION — SEGMENT RECOMMENDATION / PRODUCT RECOMMENDATION DEPENDENCY**

**6.1. Business Purpose**

Domain này khóa logic gợi ý sản phẩm theo nhu cầu, người nhận, segment, 3 trụ sản phẩm, gia đình, quà tặng, khách hàng tổ chức và Product Effectiveness.

**6.2. Source ID**

SRC-PROD-001 — PRODUCT KNOWLEDGE MASTER  
SRC-CLAIM-001 — CLAIM WHITELIST SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CUSTMEM-001 — CUSTOMER MEMORY SOURCE  
SRC-CRM-001 — CRM LIFECYCLE SOURCE  
SRC-AVAIL-001 — SELLABLE AVAILABILITY SOURCE  
SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-SHIP-001 — SHIPPING ELIGIBILITY SOURCE  
SRC-ADS-001 — ADS TRACKING SIGNAL SOURCE

**6.3. Owner Core / Owner Pack**

Product Knowledge Pack  
AI Advisor Logic Pack  
CRM Lifecycle Core  
Customer Memory Core  
Claim Policy Pack  
Commerce Availability Core  
Commerce Pricing Core  
Shipping Core  
ADS Context Pack

**6.4. Consumer Pack**

AI Advisor  
CRM  
Gateway  
Landing Page  
ADS  
MC AI if live board context allows  
Order Core if converted to quote/order

**6.5. Dependency Type**

PRODUCT_RECOMMENDATION  
SEGMENT_RECOMMENDATION  
PRODUCT_TRIAD  
FAMILY_ADDON  
GIFT_RECOMMENDATION  
PUBLIC_SAFE  
SALES_GUARD

**6.6. Required Resolver / Guard**

ProductKnowledgeResolver  
ProductEffectivenessResolver  
ProductPillarResolver  
ThreePillarRecommendationResolver  
ProductTriadFamilyAddOnResolver  
SegmentRecommendationResolver  
OfficeUseCaseResolver  
StudentUseCaseResolver  
InstitutionBuyerResolver  
CorporateProcurementResolver  
OverseasVietnameseContextResolver  
InternationalStudentContextResolver  
GiftIntentResolver  
GiftRecipientResolver  
BulkGiftRoutingGuard  
PillarAvailabilityFallbackResolver  
AvailabilityResolver  
PricingResolver  
QuoteSnapshotResolver  
ClaimGuard

**6.7. Allowed Use**

Consumer được dùng domain này để:

1.  Gợi ý sản phẩm theo nhu cầu khách.

2.  Gợi ý 3 trụ: theo mùa, chức năng, bổ dưỡng.

3.  Gợi ý thêm sản phẩm chăm sóc người thân nếu context có.

4.  Gợi ý theo cha/mẹ/chồng/vợ/con/người lớn tuổi.

5.  Gợi ý theo văn phòng/sinh viên/du học sinh/Việt kiều.

6.  Gợi ý theo công ty/trường học/bệnh viện/cơ quan.

7.  Gợi ý quà sếp/quà đối tác/quà doanh nghiệp/quà thăm bệnh.

8.  Gợi ý sản phẩm theo Product Effectiveness.

9.  Chuyển sang quote khi khách chọn sản phẩm và Pricing/Quote pass.

10. Chuyển sang OrderDraft khi khách có buying signal và đủ dữ liệu.

**6.8. Forbidden Use**

Consumer không được:

1.  Gợi ý sản phẩm ngẫu nhiên.

2.  Dùng cùng bộ sản phẩm cho mọi khách.

3.  Gợi ý SKU mặn cho khách thuần chay.

4.  Gợi ý SKU dị ứng với khách có allergy signal.

5.  Gợi ý SKU health-sensitive khi health unresolved.

6.  Gợi ý SKU not sellable nếu có ý định bán.

7.  Báo giá khi thiếu QuoteSnapshot.

8.  Gọi combo là ưu đãi giá nếu Pricing chưa trả.

9.  Ép combo.

10. Nói “đổi món để không ngán”.

11. Mặc định công ty/trường học là đại lý.

12. Hứa giao quốc tế nếu Shipping/Export chưa pass.

13. Dùng ADS signal để ép SKU trái nhu cầu khách.

**6.9. Blocked If Missing**

Nếu thiếu ProductKnowledgeResolver:

1.  Không gợi ý SKU cụ thể.

2.  Không render proposal.

Nếu thiếu ProductPillarResolver:

1.  Không gợi ý 3 trụ.

2.  Không phân loại seasonal/functional/nourishing.

Nếu thiếu SegmentRecommendationResolver:

1.  Không cá nhân hóa sâu theo segment.

2.  Chỉ được hỏi thêm ngắn.

Nếu thiếu Availability:

1.  Không chốt bán.

2.  Không mở quote.

3.  Chỉ được tư vấn định hướng nếu an toàn.

Nếu thiếu Pricing/Quote:

1.  Không báo giá.

2.  Không gọi combo giá.

**6.10. Evidence Required**

EVD-RECO-001 — Seasonal product selected  
EVD-RECO-002 — Functional product selected  
EVD-RECO-003 — Nourishing product selected  
EVD-RECO-004 — Family add-on selected when context exists  
EVD-RECO-005 — Office scenario  
EVD-RECO-006 — Student scenario  
EVD-RECO-007 — Overseas Vietnamese scenario  
EVD-RECO-008 — Corporate gift scenario  
EVD-RECO-009 — Hospital/care context  
EVD-RECO-010 — Vegan guard  
EVD-RECO-011 — Allergy guard  
EVD-RECO-012 — Availability guard  
EVD-RECO-013 — Product Effectiveness per item

**6.11. Done Gate**

PASS khi AI/CRM/ADS/Landing Page gợi ý đúng sản phẩm theo Product Knowledge, segment, 3 trụ, người thân, claim, availability và pricing; không random, không ép combo, không chọn SKU sai guard.

**6.12. Pack Detail Mapping**

FILE 01 — Recommendation decision  
FILE 02 — Product Knowledge  
FILE 03 — Product schema/views  
FILE 04 — Resolvers/guards  
FILE 07 — Proposal blocks  
FILE 08 — SKU content  
FILE 09 — Tests  
FILE 10 — Situations  
FILE 12 — Sales behavior  
CRM / ADS / Landing Page Pack

**7. DEP-DOM-05-CRM-MESSAGE — CRM 12-MONTH / MESSAGE TRIGGER / SUPPRESSION DEPENDENCY**

**7.1. Business Purpose**

Domain này khóa CRM 12 tháng, message trigger, immutable text, đa kênh, dedup, suppression, quiet hours, frequency cap và CRM evidence.

**7.2. Source ID**

SRC-CRM-001 — CRM LIFECYCLE SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CUSTMEM-001 — CUSTOMER MEMORY SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-PROD-001 — PRODUCT KNOWLEDGE MASTER  
SRC-MEMBER-001 — MEMBER BENEFIT SOURCE  
SRC-MSG-001 — MESSAGE TRIGGER REGISTRY SOURCE  
SRC-MSG-002 — MESSAGE TEXT IMMUTABLE SOURCE  
SRC-MSG-003 — CHANNEL SEND POLICY SOURCE  
SRC-SUPPRESS-001 — CRM SUPPRESSION POLICY SOURCE  
SRC-DEDUPE-001 — CROSS-CHANNEL DEDUP SOURCE

**7.3. Owner Core / Owner Pack**

CRM Lifecycle Core  
Messaging Core  
Customer Memory Core  
Member Lifecycle Core  
Product Knowledge Pack  
CRM Suppression Core  
Channel Send Policy Core  
Dedup Core

**7.4. Consumer Pack**

CRM  
AI Advisor  
Messaging  
Messenger  
Zalo / SMS / Email / Instagram if configured  
Member Lifecycle  
Evidence Pack  
BI / Dashboard

**7.5. Dependency Type**

CRM_LIFECYCLE  
MESSAGE_TRIGGER  
IMMUTABLE_TEXT  
MULTI_CHANNEL  
SUPPRESSION  
DEDUP  
OUTCOME_LOG

**7.6. Required Resolver / Guard**

CRMLifecycleResolver  
CRMEligibilityGuard  
CustomerMemoryResolver  
OrderHistoryResolver  
CRMProductRecommendationResolver  
ProductEffectivenessResolver  
MessageTriggerResolver  
MessageTemplateResolver  
MessageTextImmutableGuard  
MessageTriggerOnlyGuard  
TierMessageEligibilityGuard  
MonthlyDuplicateGuard  
CrossChannelDedupGuard  
ChannelPreferenceResolver  
QuietHoursGuard  
MessageFatigueGuard  
FrequencyCapGuard  
EmailRuleGuard  
CRMJobLogger  
MessageSendLogger

**7.7. Allowed Use**

CRM/Messaging được dùng domain này để:

1.  Chăm sóc khách sau mua.

2.  Hướng dẫn sử dụng.

3.  Hỏi trải nghiệm.

4.  Gợi ý mua lại.

5.  Gợi ý sản phẩm kế tiếp.

6.  Chăm sóc theo mùa.

7.  Chăm sóc member lifecycle.

8.  Nhắc duy trì/nâng hạng nếu runtime cho phép.

9.  Gửi tin theo trigger đã duyệt.

10. Gửi đúng kênh có lịch sử tương tác/xác thực.

11. Ghi log send / suppress / outcome.

**7.8. Forbidden Use**

CRM/Messaging không được:

1.  Gửi khi opt-out.

2.  Gửi khi open case.

3.  Gửi khi message fatigue exceeded.

4.  Gửi ngoài quiet hours nếu policy không cho.

5.  Gửi sai hạng.

6.  Gửi sai trigger.

7.  Tự tạo trigger.

8.  Rewrite message text đã duyệt.

9.  Gửi trùng nội dung trong tháng nếu rule cấm.

10. Gửi cùng message family đa kênh trong dedup window.

11. Bịa lịch sử mua.

12. Bịa quyền lợi member.

13. Bịa giá nếu thiếu QuoteSnapshot.

14. Gửi product recommendation thiếu Product Effectiveness.

**7.9. Blocked If Missing**

Nếu thiếu CRMEligibilityGuard:

1.  Không gửi CRM.

2.  Không tạo CRM job.

Nếu thiếu MessageTriggerResolver:

1.  Không gửi tin.

2.  Không tạo message event.

Nếu thiếu MessageTextImmutableSource:

1.  Không render message.

2.  Không để AI tự viết lại.

Nếu thiếu ProductEffectiveness khi có product recommendation:

1.  Không gửi recommendation.

Nếu thiếu MemberLifecycleRuntime khi nói hạng/quyền lợi:

1.  Không gửi member lifecycle message.

**7.10. Evidence Required**

EVD-CRM-001 — CRM lifecycle trigger  
EVD-CRM-002 — CRM eligibility pass  
EVD-CRM-003 — Opt-out suppression  
EVD-CRM-004 — Open case suppression  
EVD-CRM-005 — Quiet hour respected  
EVD-CRM-006 — Frequency cap respected  
EVD-CRM-007 — Message text not rewritten  
EVD-CRM-008 — Correct tier message  
EVD-CRM-009 — Same-month duplicate blocked  
EVD-CRM-010 — Cross-channel dedup  
EVD-CRM-011 — Product Effectiveness present  
EVD-CRM-012 — Message send log

**7.11. Done Gate**

PASS khi CRM vận hành như chăm sóc vòng đời 12 tháng, không spam, không bịa, không gửi sai trigger/hạng/kênh, có suppression, có dedup, có Product Effectiveness và có log/evidence.

**7.12. Pack Detail Mapping**

FILE 01 — CRM decision  
FILE 04 — CRM/message resolvers/guards  
FILE 07 — CRM/message blocks  
FILE 09 — Tests  
FILE 10 — Situations  
FILE 12 — CRM behavior  
CRM Pack  
Messaging Pack  
Evidence Pack

**8. DEP-DOM-06-MEMBER — MEMBER LIFECYCLE / RIGHTS / DOWNGRADE / DISPUTE DEPENDENCY**

**8.1. Business Purpose**

Domain này khóa vòng đời thành viên, quyền lợi, nâng hạng, duy trì, ân hạng, hạ hạng, tranh chấp và outcome logging.

**8.2. Source ID**

SRC-MEMBER-001 — MEMBER BENEFIT SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CUSTMEM-001 — CUSTOMER MEMORY SOURCE  
SRC-CRM-001 — CRM LIFECYCLE SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-CASE-001 — CUSTOMER CASE / COMPLAINT SOURCE  
SRC-OUTCOME-001 — BUSINESS OUTCOME LOGGER SOURCE

**8.3. Owner Core / Owner Pack**

Member Lifecycle Core  
Member Benefit Core  
Customer Profile Core  
Order Core  
CRM Lifecycle Core  
Commerce Pricing Core  
Case Management Core  
Outcome Logger

**8.4. Consumer Pack**

AI Advisor  
CRM  
Commerce Pricing  
Order Core  
Messaging  
Admin UI  
BI / Dashboard  
Evidence Pack

**8.5. Dependency Type**

MEMBER_LIFECYCLE  
MEMBER_RIGHTS  
TIER_UPGRADE  
TIER_MAINTAIN  
GRACE_PERIOD  
DOWNGRADE  
DISPUTE  
OUTCOME_LOG

**8.6. Required Resolver / Guard**

MemberLifecycleResolver  
RuntimeRightsResolver  
MemberMaintainResolver  
MemberUpgradeResolver  
MemberGracePeriodResolver  
MemberDowngradeResolver  
MemberDisputeEscalationResolver  
MemberLifecycleOutcomeLogger  
QuoteBenefitResolver  
CRMEligibilityGuard  
OpenCaseSuppressionGuard

**8.7. Allowed Use**

Consumer được dùng domain này để:

1.  Nói hạng thành viên nếu runtime xác nhận.

2.  Nói quyền lợi hạng nếu runtime xác nhận.

3.  Nói doanh số tích lũy hợp lệ nếu runtime xác nhận.

4.  Nói số còn thiếu để duy trì/nâng hạng nếu runtime xác nhận.

5.  Nói ngày còn lại trong chu kỳ nếu runtime xác nhận.

6.  Nói grace period nếu runtime xác nhận.

7.  Chăm sóc duy trì/nâng hạng.

8.  Hạ hạng an toàn nếu runtime xác nhận.

9.  Áp quyền lợi vào QuoteSnapshot nếu Pricing Core cho phép.

10. Ghi outcome lifecycle.

**8.8. Forbidden Use**

Consumer không được:

1.  Tự tính hạng.

2.  Tự tính doanh số.

3.  Tự tính số còn thiếu.

4.  Tự nói ngày còn lại.

5.  Tự nâng hạng.

6.  Tự hạ hạng.

7.  Tự áp discount.

8.  Tự cộng dồn quyền lợi.

9.  Gửi member message khi thiếu runtime.

10. Dọa khách hạ hạng.

11. Tranh luận khi khách dispute.

12. Tiếp tục upsell khi đang member dispute.

**8.9. Blocked If Missing**

Nếu thiếu MemberLifecycleResolver:

1.  Không nói maintain/upgrade/downgrade.

2.  Không gửi member lifecycle CRM.

3.  Không nói số còn thiếu.

4.  Không nói grace period.

Nếu thiếu QuoteSnapshot:

1.  Không nói quyền lợi đã áp vào giá cuối cùng.

Nếu có member dispute:

1.  Không tranh luận.

2.  Không tự sửa hạng.

3.  Mở case.

4.  Chặn CRM bán hàng nếu dispute open.

**8.10. Evidence Required**

EVD-MEMBER-001 — Member tier resolved  
EVD-MEMBER-002 — Maintain amount resolved  
EVD-MEMBER-003 — Upgrade amount resolved  
EVD-MEMBER-004 — Grace period resolved  
EVD-MEMBER-005 — Downgrade safe wording  
EVD-MEMBER-006 — Quote benefit from runtime  
EVD-MEMBER-007 — Member dispute opens case  
EVD-MEMBER-008 — Outcome logged  
EVD-MEMBER-009 — CRM suppressed during dispute

**8.11. Done Gate**

PASS khi member lifecycle không còn là discount text, mà là runtime-managed lifecycle có hạng, doanh số, duy trì, nâng hạng, ân hạng, hạ hạng, dispute, CRM và outcome evidence.

**8.12. Pack Detail Mapping**

FILE 01 — Member lifecycle decision  
FILE 04 — Member resolvers/guards  
FILE 07 — Member content blocks  
FILE 09 — Tests  
FILE 10 — Situations  
FILE 12 — Member care behavior  
CRM / Messaging Pack  
BI / Outcome Logger

**9. DEP-DOM-07-DIAMOND-PARTNER — DIAMOND / AFFILIATE / ENTREPRENEURSHIP / DISTRIBUTOR BOUNDARY DEPENDENCY**

**9.1. Business Purpose**

Domain này khóa ranh giới giữa Diamond, affiliate, nhà đồng hành khởi nghiệp, đại lý, nhà phân phối, mua sỉ, công ty mua quà và khách mua lẻ.

**9.2. Source ID**

SRC-MEMBER-001 — MEMBER BENEFIT SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-DIAMOND-001 — DIAMOND REFERRAL / AFFILIATE SOURCE  
SRC-PARTNER-001 — PARTNER / DISTRIBUTOR / WHOLESALE POLICY SOURCE  
SRC-CONTACT-001 — OFFICIAL CONTACT REGISTRY SOURCE  
SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-MISA-001 — MISA / ACCOUNTING INTEGRATION SOURCE

**9.3. Owner Core / Owner Pack**

Diamond Referral Core  
Affiliate / Entrepreneurship Policy Core  
Partner / Distributor Policy Core  
Member Lifecycle Core  
Commerce Pricing Core  
Order Core  
Accounting / Commission Core  
Official Contact Registry

**9.4. Consumer Pack**

AI Advisor  
CRM  
Gateway  
Commerce Pricing  
Order Core  
Accounting / Commission  
Admin UI  
Messaging  
Evidence Pack

**9.5. Dependency Type**

DIAMOND_REFERRAL  
AFFILIATE  
ENTREPRENEURSHIP  
COMMISSION  
PARTNER_ROUTING  
DISTRIBUTOR_BOUNDARY  
WHOLESALE_BOUNDARY  
OFFICIAL_CONTACT

**9.6. Required Resolver / Guard**

DiamondReferralResolver  
DiamondLinkAttributionResolver  
DiamondCommissionResolver  
AffiliateEligibilityResolver  
EntrepreneurshipEligibilityResolver  
DistributorRoutingResolver  
WholesaleRoutingResolver  
PartnerPolicyResolver  
OfficialContactResolver  
CommissionEligibilityResolver  
OrderVerifiedResolver  
SelfPurchaseGuard

**9.7. Allowed Use**

Consumer được dùng domain này để:

1.  Xác định khách là Diamond.

2.  Xác định link Diamond hợp lệ.

3.  Xác định buyer từ link Diamond.

4.  Xác định quyền lợi buyer từ link Diamond.

5.  Xác định hoa hồng Diamond.

6.  Trả lời chính sách khởi nghiệp nếu đủ điều kiện.

7.  Route đại lý/nhà phân phối/mua sỉ đúng nguồn.

8.  Route công ty mua quà đúng flow.

9.  Gửi số liên hệ chính thức nếu Contact Registry cho phép.

10. Ghi commission nếu order đủ điều kiện.

**9.8. Forbidden Use**

Consumer không được:

1.  Gộp Diamond với đại lý.

2.  Gộp khách mua số lượng lớn với nhà phân phối.

3.  Tự nói khách đủ điều kiện khởi nghiệp khi chưa có runtime.

4.  Tự tính hoa hồng.

5.  Tự ghi commission.

6.  Public commission/payout sai surface.

7.  Chặn mua thường khi Diamond bind invalid.

8.  Tự gửi số điện thoại ngoài registry.

9.  Tự xử lý commission dispute.

**9.9. Blocked If Missing**

Nếu thiếu DiamondReferralResolver:

1.  Không nói quyền lợi Diamond.

2.  Không nói buyer từ link Diamond.

3.  Không ghi commission.

Nếu thiếu CommissionEligibilityResolver:

1.  Không nói hoa hồng phát sinh.

2.  Không gửi commission message.

3.  Không tạo commission ledger.

Nếu thiếu PartnerPolicyResolver:

1.  Không báo chính sách đại lý/sỉ.

2.  Chỉ route contact nếu OfficialContactResolver pass.

**9.10. Evidence Required**

EVD-DIAMOND-001 — Diamond resolved  
EVD-DIAMOND-002 — Diamond link bind pass  
EVD-DIAMOND-003 — Invalid bind still allows normal purchase  
EVD-DIAMOND-004 — Commission only after eligible order  
EVD-DIAMOND-005 — Self-purchase blocked if policy requires  
EVD-DIAMOND-006 — Affiliate vs distributor separated  
EVD-DIAMOND-007 — Wholesale routed correctly  
EVD-DIAMOND-008 — Official contact returned correctly

**9.11. Done Gate**

PASS khi AI/CRM/Commerce/Accounting phân biệt đúng Diamond, affiliate, nhà đồng hành khởi nghiệp, đại lý, nhà phân phối, mua sỉ và công ty mua quà; không hardcode hoa hồng/quyền lợi/số điện thoại.

**9.12. Pack Detail Mapping**

FILE 01 — Routing decision  
FILE 04 — Diamond/partner resolvers  
FILE 07 — Diamond/partner wording  
FILE 09 — Tests  
FILE 10 — Situations  
FILE 12 — Affiliate behavior  
Accounting / Commission Pack  
Official Contact Registry

**10. DEP-DOM-08-PRICING-PROGRAM — PRICING / PROGRAM / 24-7 / GOLDEN HOUR / QUOTESNAPSHOT DEPENDENCY**

**10.1. Business Purpose**

Domain này khóa giá, chương trình 24/7, Giờ Vàng, quyền mua sớm, policy priority, QuoteSnapshot và thời hạn giữ giá.

**10.2. Source ID**

SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-PRICE-002 — PROGRAM POLICY SOURCE  
SRC-MEMBER-001 — MEMBER BENEFIT SOURCE  
SRC-DIAMOND-001 — DIAMOND REFERRAL / AFFILIATE SOURCE  
SRC-AVAIL-001 — SELLABLE AVAILABILITY SOURCE  
SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-IVR-001 — IVR ORDER CONFIRMATION SOURCE  
SRC-OPS-001 — OPERATIONAL CORE SOURCE

**10.3. Owner Core / Owner Pack**

Commerce Pricing Core  
Program Policy Core  
24/7 Program Engine  
Golden Hour Engine  
Member Benefit Core  
Diamond Referral Core  
Commerce Availability Core  
Order Core  
IVR Confirmation Core

**10.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
ADS  
Order Core  
IVR  
Admin UI  
Evidence Pack

**10.5. Dependency Type**

PRICING  
PROGRAM_POLICY  
24_7_PROGRAM  
GOLDEN_HOUR  
EARLY_ACCESS  
QUOTE_SNAPSHOT  
QUOTE_LOCK  
POLICY_PRIORITY

**10.6. Required Resolver / Guard**

PricingResolver  
ProgramPolicyResolver  
Program24_7Resolver  
GoldenHourResolver  
GoldenHourSessionResolver  
EarlyAccessResolver  
QuoteSnapshotResolver  
QuoteLockResolver  
ProgramPriceResolver  
SuccessfulSalesCountResolver  
AvailabilityResolver  
QuotaResolver  
PolicyPriorityResolver  
PriceLockGuard

**10.7. Allowed Use**

Consumer được dùng domain này để:

1.  Báo giá khi có QuoteSnapshot.

2.  Hiển thị giá niêm yết nếu runtime trả.

3.  Hiển thị giá chương trình nếu runtime trả.

4.  Hiển thị quyền lợi member nếu QuoteSnapshot áp.

5.  Hiển thị buyer link Diamond benefit nếu QuoteSnapshot áp.

6.  Nói Giờ Vàng active nếu GoldenHourResolver pass.

7.  Nói quyền mua sớm nếu EarlyAccessResolver pass.

8.  Nói quote hold time nếu QuoteLockResolver pass.

9.  Tạo order từ quote còn hiệu lực.

**10.8. Forbidden Use**

Consumer không được:

1.  Tự tính giá.

2.  Tự tính discount.

3.  Tự cộng member benefit.

4.  Tự cộng Diamond benefit.

5.  Tự nói Giờ Vàng active.

6.  Tự nói quyền mua sớm.

7.  Tự kéo dài quote.

8.  Tự báo final total thiếu QuoteSnapshot.

9.  Public final price ở live/comment.

10. Tạo order từ quote hết hạn.

11. Tự chọn policy priority.

12. Tính doanh số 24/7 từ quote/giỏ/đơn nháp.

**10.9. Blocked If Missing**

Nếu thiếu PricingResolver:

1.  Không báo giá.

Nếu thiếu QuoteSnapshot:

1.  Không render final price.

2.  Không tạo OrderDraft.

Nếu thiếu GoldenHourResolver:

1.  Không nói Giờ Vàng active.

2.  Không nói giá Giờ Vàng.

3.  Không nói quyền mua sớm.

Nếu thiếu QuoteLockResolver:

1.  Không nói giữ giá 5 phút/15 phút.

Nếu quote expired:

1.  Không tạo order.

2.  Revalidate quote.

**10.10. Evidence Required**

EVD-PRICE-001 — Pricing resolver pass  
EVD-PRICE-002 — QuoteSnapshot sample  
EVD-PRICE-003 — 24/7 initial 9%  
EVD-PRICE-004 — 24/7 \<50 =\> 12%  
EVD-PRICE-005 — 24/7 \>=50 =\> 9%  
EVD-PRICE-006 — Golden Hour active resolver  
EVD-PRICE-007 — Early access by tier  
EVD-PRICE-008 — Quote hold 5 min Golden Hour  
EVD-PRICE-009 — Quote hold 15 min 24/7  
EVD-PRICE-010 — Expired quote revalidation  
EVD-PRICE-011 — Policy priority applied

**10.11. Done Gate**

PASS khi mọi giá/chương trình/quyền lợi/quote/hold time/policy priority đều từ runtime source, không hardcode, không public giá sai surface, không order từ quote hết hạn.

**10.12. Pack Detail Mapping**

Commerce Pricing Core  
Program Policy Core  
Order Core  
AI Advisor FILE 04 / 07 / 09 / 10  
Gateway  
CRM  
ADS  
Evidence Pack

**11. DEP-DOM-09-ACTIVATION — PROGRAM / SELLABLE / PRODUCT ACTIVATION / PRODUCTION SIGNAL DEPENDENCY**

**11.1. Business Purpose**

Domain này khóa quy tắc mở bán, ngưng bán, kích hoạt sản phẩm chương trình, kiểm soát SKU active theo kênh và tạo tín hiệu kế hoạch sản xuất.

**11.2. Source ID**

SRC-OPS-001 — OPERATIONAL CORE SOURCE  
SRC-AVAIL-001 — SELLABLE AVAILABILITY SOURCE  
SRC-PRICE-001 — COMMERCE PRICING SOURCE  
SRC-PRICE-002 — PROGRAM POLICY SOURCE  
SRC-PROD-001 — PRODUCT KNOWLEDGE MASTER  
SRC-CLAIM-001 — CLAIM WHITELIST SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-ADS-001 — ADS TRACKING SIGNAL SOURCE

Cần sử dụng source bổ sung:

SRC-PROD-ACT-001 — PRODUCT ACTIVATION SOURCE  
SRC-PROD-PLAN-001 — PRODUCTION PLANNING SIGNAL SOURCE  
SRC-LIVE-BOARD-001 — DAILY LIVE PRODUCT BOARD SOURCE

**11.3. Owner Core / Owner Pack**

Operational Core  
Commerce Availability Core  
Commerce Pricing Core  
Program Policy Core  
Product Knowledge Pack  
Claim Policy Pack  
Daily Live Product Board Owner  
Production Planning Core  
Order Core

**11.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
ADS  
MC AI  
Order Core  
Admin UI  
Production Planning  
Evidence Pack

**11.5. Dependency Type**

SELLABLE_GATE  
AUTO_OPEN_SALE  
AUTO_STOP_SALE  
PROGRAM_ACTIVATION  
CHANNEL_ACTIVATION  
LIVE_BOARD_ACTIVATION  
PRODUCTION_SIGNAL

**11.6. Required Resolver / Guard**

AvailabilityResolver  
SellableStatusResolver  
OperationalReleaseResolver  
WarehouseReceiptResolver  
ListedPriceStatusResolver  
QualityHoldResolver  
RecallHoldResolver  
SaleLockResolver  
ChannelBlockResolver  
ProgramActivationResolver  
GoldenHourActivationResolver  
DailyLiveProductBoardResolver  
MCBoardValidationGuard  
ProductContentReadinessResolver  
ClaimPolicyResolver  
SalesVelocityResolver  
StockMovementResolver  
ProductionPlanningSignalResolver  
OwnerReviewResolver

**11.7. Allowed Use**

Consumer được dùng domain này để:

1.  Biết SKU có được mở bán không.

2.  Biết SKU có phải ngưng bán không.

3.  Biết SKU có active trong 24/7 không.

4.  Biết SKU có active trong Giờ Vàng không.

5.  Biết SKU có thuộc board live không.

6.  Bật/tắt CTA mua hàng.

7.  Chặn quote/order SKU not sellable.

8.  Chặn ADS/CRM/Landing/MC AI nói SKU ngoài active list.

9.  Ghi tín hiệu bán/tồn kho cho Production Planning.

10. Gợi ý sản phẩm thay thế nếu replacement pass guard.

**11.8. Forbidden Use**

Consumer không được:

1.  Bán SKU chưa nhập kho hợp lệ.

2.  Bán SKU chưa có giá active.

3.  Bán SKU stock_available \<= 0.

4.  Bán SKU quality hold.

5.  Bán SKU recall hold.

6.  Bán SKU sale lock.

7.  Bán SKU channel block.

8.  Public số lượng tồn kho.

9.  Nói “chỉ còn vài hộp” tạo khan hiếm giả.

10. Gợi ý SKU not sellable.

11. ADS tự chọn SKU mở bán.

12. MC AI nói SKU ngoài board.

13. Landing Page hardcode active SKU.

14. Production signal tự thành Production Order.

**11.9. Blocked If Missing**

Nếu thiếu AvailabilityResolver:

1.  Không chốt bán.

2.  Không quote.

3.  Không tạo order.

Nếu thiếu ListedPriceStatusResolver:

1.  Không mở bán.

2.  Không quote.

Nếu thiếu ProgramActivationResolver:

1.  Không nói SKU thuộc chương trình.

2.  Không gửi CRM chương trình.

3.  Không chạy ADS chương trình.

Nếu thiếu DailyLiveProductBoardResolver:

1.  MC AI không nói SKU live.

2.  Gateway không xử lý offer theo board.

3.  ADS/Live không dùng board-specific SKU.

Nếu thiếu ProductionPlanningSignalResolver:

1.  Không tạo tín hiệu sản xuất.

2.  Không tự tạo production order.

**11.10. Evidence Required**

EVD-ACT-001 — SKU sellable gate pass  
EVD-ACT-002 — SKU auto stop when out of stock  
EVD-ACT-003 — Quality hold blocks sale  
EVD-ACT-004 — Recall hold blocks sale  
EVD-ACT-005 — Listed price active required  
EVD-ACT-006 — 24/7 active SKU list  
EVD-ACT-007 — Golden Hour active SKU list  
EVD-ACT-008 — Daily Live Board SKU validation  
EVD-ACT-009 — MC AI no non-board SKU  
EVD-ACT-010 — ADS only active SKU  
EVD-ACT-011 — CRM only active SKU  
EVD-ACT-012 — Production planning signal logged

**11.11. Done Gate**

PASS khi SKU chỉ được bán nếu sellable, giá active, stock hợp lệ, không hold/lock; chương trình chỉ dùng active list; AI/Gateway/CRM/Landing/ADS/MC AI không nói SKU ngoài active boundary; dữ liệu bán/tồn kho tạo Production Planning Signal nhưng không tự tạo production order.

**11.12. Pack Detail Mapping**

Operational Core  
Commerce Availability Core  
Program Policy Core  
Product Knowledge  
Daily Live Product Board  
MC AI Pack  
ADS Pack  
CRM Pack  
Order Core  
Production Planning Pack  
FILE 04 / FILE 07 / FILE 09 / FILE 10 / FILE 12

**12. DEP-DOM-10-PAYMENT — PAYMENT / BANK TRANSFER / ACCOUNTING REVIEW DEPENDENCY**

**12.1. Business Purpose**

Domain này khóa thanh toán, chuyển khoản ngân hàng, VietQR, payment reference, queue kế toán, đối soát thủ công/tự động và PAID state.

**12.2. Source ID**

SRC-PAY-001 — PAYMENT ELIGIBILITY SOURCE  
SRC-PAY-002 — PAYMENT STATE SOURCE  
SRC-BANK-001 — COMPANY BANK ACCOUNT REGISTRY SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-MISA-001 — MISA / ACCOUNTING INTEGRATION SOURCE  
SRC-EVD-001 — EVIDENCE REGISTRY SOURCE

**12.3. Owner Core / Owner Pack**

Payment Core  
Company Bank Account Registry  
Accounting Review Core  
Order Core  
MISA / Accounting Integration  
Admin UI

**12.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
Order Core  
Admin UI  
Accounting Queue  
Evidence Pack

**12.5. Dependency Type**

PAYMENT_ELIGIBILITY  
BANK_TRANSFER  
VIETQR  
PAYMENT_REFERENCE  
ACCOUNTING_REVIEW  
PAYMENT_STATE  
PAID_CONTROL

**12.6. Required Resolver / Guard**

PaymentEligibilityResolver  
PaymentInstructionResolver  
BankAccountRegistryResolver  
BankTransferTaggingResolver  
PaymentReferenceResolver  
AccountingBankTransferQueueResolver  
ManualReconciliationResolver  
BankWebhookResolver  
PaymentProofResolver  
PaymentStateResolver  
OrderPaymentLinkageResolver  
PaymentStatusGuard  
AccountingPermissionGuard  
AuditResolver

**12.7. Allowed Use**

Consumer được dùng domain này để:

1.  Hiển thị phương thức thanh toán hợp lệ.

2.  Gửi payment instruction trong private nếu Payment Core cho phép.

3.  Gắn payment_method khi khách chọn chuyển khoản.

4.  Sinh payment_reference.

5.  Đưa đơn vào Accounting Bank Transfer Queue.

6.  Nhận proof giao dịch nếu policy cho phép.

7.  Đối soát thủ công qua kế toán.

8.  Đối soát tự động qua webhook nếu có.

9.  Cập nhật PAID khi Payment Core / Accounting Review xác nhận.

**12.8. Forbidden Use**

Consumer không được:

1.  Hardcode bank account.

2.  Hardcode QR.

3.  Gửi bank instruction thiếu payment_reference.

4.  Để khách tự ghi nội dung chuyển khoản tùy ý nếu đã có reference.

5.  AI xác nhận PAID.

6.  Gateway xác nhận PAID.

7.  CRM xác nhận PAID.

8.  Admin UI set PAID nếu thiếu permission/audit.

9.  Xem ảnh giao dịch là đã paid.

10. Xem khách nói “đã chuyển” là paid.

11. Trộn đơn COD và bank transfer trong queue không phân loại.

**12.9. Blocked If Missing**

Nếu thiếu PaymentEligibilityResolver:

1.  Không hứa phương thức thanh toán.

Nếu thiếu BankRegistry:

1.  Không gửi bank account.

2.  Không render VietQR.

Nếu thiếu payment_reference:

1.  Không gửi hướng dẫn chuyển khoản.

Nếu thiếu AccountingReview:

1.  Không PAID_BY_BANK_TRANSFER.

2.  Không release fulfillment nếu payment required.

Nếu khách nói đã chuyển khoản nhưng Payment Core chưa xác nhận:

1.  Không nói đã thanh toán.

2.  Ghi nhận chờ đối soát.

3.  Yêu cầu proof nếu policy cho phép.

**12.10. Evidence Required**

EVD-PAY-001 — Payment eligibility pass  
EVD-PAY-002 — Bank transfer tagged  
EVD-PAY-003 — Unique payment_reference  
EVD-PAY-004 — Bank instruction from registry  
EVD-PAY-005 — Accounting queue record  
EVD-PAY-006 — Payment proof attached  
EVD-PAY-007 — Manual reconciliation audit  
EVD-PAY-008 — Bank webhook reconciliation if available  
EVD-PAY-009 — AI no paid before Core confirms  
EVD-PAY-010 — PAID_BY_BANK_TRANSFER after confirmation

**12.11. Done Gate**

PASS khi thanh toán chỉ đi qua Payment Core / Bank Registry / Accounting Review; chuyển khoản có payment_reference và queue kế toán; không PAID nếu chưa có xác nhận hợp lệ; AI/Gateway/CRM không xác nhận thanh toán thay core.

**12.12. Pack Detail Mapping**

COM-06 — Payment / Bank Transfer / Accounting Queue  
Payment Core  
Accounting Review  
Order Core  
Admin UI  
FILE 04 / FILE 07 / FILE 09 / FILE 10  
Evidence Pack  
Security Pack

**13. DEP-DOM-11-SHIPPING — SHIPPING / TRACKING / ETA / COD DEPENDENCY**

**13.1. Business Purpose**

Domain này khóa vận chuyển, COD, phí ship, tracking, ETA realtime và fallback thời gian giao hàng.

**13.2. Source ID**

SRC-SHIP-001 — SHIPPING ELIGIBILITY SOURCE  
SRC-SHIP-002 — SHIPPING STATE SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE

**13.3. Owner Core / Owner Pack**

Shipping Core  
Order Core  
Delivery Tracking Core  
Carrier Integration  
CRM Lifecycle Core

**13.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
Admin UI  
Order Core  
Evidence Pack

**13.5. Dependency Type**

SHIPPING_ELIGIBILITY  
COD_ELIGIBILITY  
SHIPPING_FEE  
TRACKING  
ETA  
REGION_FALLBACK  
SHIPPING_STATE

**13.6. Required Resolver / Guard**

ShippingResolver  
ShippingEligibilityResolver  
CODEligibilityResolver  
ShippingFeeResolver  
ShippingStateResolver  
DeliveryTrackingResolver  
CarrierTrackingLinkResolver  
DeliveryETAResolver  
DeliveryRegionFallbackResolver  
ShippingInfoAvailabilityGuard  
TrackingDataFreshnessGuard

**13.7. Allowed Use**

Consumer được dùng domain này để:

1.  Nói có ship hay không.

2.  Nói COD nếu eligible.

3.  Nói phí ship nếu resolver trả.

4.  Nói ETA nếu resolver trả.

5.  Gửi tracking link nếu có.

6.  Dùng fallback vùng nếu không có tracking realtime và policy cho phép.

7.  Không hỏi lại địa chỉ nếu order đã có shipping info.

8.  Cập nhật CRM shipping state nếu Shipping State cho phép.

**13.8. Forbidden Use**

Consumer không được:

1.  Tự hứa ETA.

2.  Tự hứa miễn ship.

3.  Tự hứa COD.

4.  Tự tính phí ship.

5.  Tự bịa tracking status.

6.  Tự bịa carrier link.

7.  Hỏi lại địa chỉ nếu order có shipping info.

8.  Hứa giao quốc tế nếu không thuộc active scope.

9.  Dùng Landing Page text thay Shipping Core.

10. Dùng CRM template cũ làm shipping source.

**13.9. Blocked If Missing**

Nếu thiếu ShippingEligibilityResolver:

1.  Không hứa ship/ETA/COD/phí ship.

Nếu thiếu ShippingStateResolver:

1.  Không nói trạng thái giao hàng cụ thể.

Nếu thiếu Tracking realtime:

1.  Dùng fallback vùng nếu policy cho phép.

2.  Không bịa trạng thái carrier.

Nếu thiếu shipping info:

1.  Hỏi thêm trong private.

2.  Không quote ETA chắc chắn.

**13.10. Evidence Required**

EVD-SHIP-001 — Shipping eligibility  
EVD-SHIP-002 — COD eligibility  
EVD-SHIP-003 — Shipping fee from core  
EVD-SHIP-004 — Tracking link returned  
EVD-SHIP-005 — Fallback ETA by region  
EVD-SHIP-006 — No fake tracking status  
EVD-SHIP-007 — No address re-ask when order has info  
EVD-SHIP-008 — MAS-SMK-006 pass

**13.11. Done Gate**

PASS khi shipping/ETA/COD/tracking chỉ đến từ Shipping Core hoặc fallback được phép; không hardcode, không bịa trạng thái, không hỏi lại dữ liệu đã có.

**13.12. Pack Detail Mapping**

COM-07 — Shipping / Tracking / COD / ETA  
Shipping Core  
Order Core  
CRM Pack  
FILE 04 / FILE 07 / FILE 09 / FILE 10  
Evidence Pack

**14. DEP-DOM-12-ORDER-IVR — ORDER / ORDERDRAFT / CUSTOMERCONFIRMATION / IVR DEPENDENCY**

**14.1. Business Purpose**

Domain này khóa Sales-to-Order, QuoteCart, QuoteSnapshot, OrderConfirmationDraft, CustomerConfirmation, OrderCreation, order_code, idempotency và IVR confirmation.

**14.2. Source ID**

SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-ORDER-002 — ORDER CONFIRMATION DRAFT SOURCE  
SRC-ORDER-003 — ORDER STATE MACHINE SOURCE  
SRC-IVR-001 — IVR ORDER CONFIRMATION SOURCE  
SRC-PAY-001 — PAYMENT ELIGIBILITY SOURCE  
SRC-SHIP-001 — SHIPPING ELIGIBILITY SOURCE  
SRC-AVAIL-001 — SELLABLE AVAILABILITY SOURCE

**14.3. Owner Core / Owner Pack**

Order Core  
QuoteSnapshot Core  
Payment Core  
Shipping Core  
Commerce Availability Core  
IVR Order Confirmation Pack  
AI Advisor Sales-to-Order Logic

**14.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Order Core  
Payment Core  
Shipping Core  
IVR  
Admin UI  
Evidence Pack

**14.5. Dependency Type**

SALES_TO_ORDER  
QUOTE_CART  
QUOTE_SNAPSHOT  
ORDER_DRAFT  
CUSTOMER_CONFIRMATION  
ORDER_CREATION  
ORDER_STATE  
IVR_CONFIRMATION  
IDEMPOTENCY

**14.6. Required Resolver / Guard**

QuoteCartResolver  
QuoteSnapshotResolver  
QuoteLockResolver  
OrderDraftResolver  
CustomerConfirmationResolver  
OrderCreationResolver  
OrderCodeGuard  
CartChangeRevalidationResolver  
CustomerPrefillResolver  
PaymentEligibilityResolver  
ShippingEligibilityResolver  
InventorySellableGuard  
OrderStateResolver  
IVREligibilityResolver  
IVRConfirmationResolver  
IVRQuotaReleaseGuard  
IdempotencyResolver  
AuditResolver

**14.7. Allowed Use**

Consumer được dùng domain này để:

1.  Mở QuoteCart khi đủ điều kiện.

2.  Tạo QuoteSnapshot.

3.  Render quote.

4.  Render OrderConfirmationDraft.

5.  Prefill thông tin khách cũ nếu policy cho phép.

6.  Chờ CustomerConfirmation.

7.  Tạo order từ quote còn hiệu lực.

8.  Nói Order Success khi có order_code.

9.  Gửi IVR confirmation khi resolver yêu cầu.

10. Ghi audit/idempotency.

**14.8. Forbidden Use**

Consumer không được:

1.  Tạo order khi khách chỉ nói “mua” nhưng chưa xác nhận draft.

2.  Báo giá thiếu QuoteSnapshot.

3.  Render Order Success thiếu order_code.

4.  Tạo order từ quote hết hạn.

5.  Tạo order public comment.

6.  Tự tạo order_code.

7.  Tự đổi order state.

8.  IVR tự đổi order state.

9.  SIM Gateway cập nhật order trực tiếp.

10. Duplicate retry tạo nhiều order.

11. OrderDraft bị render như Order Success.

**14.9. Blocked If Missing**

Nếu thiếu QuoteSnapshot:

1.  Không báo giá.

2.  Không tạo OrderDraft.

Nếu thiếu OrderDraft:

1.  Không xin xác nhận đơn.

2.  Không nói đơn sẵn sàng.

Nếu thiếu CustomerConfirmation:

1.  Không tạo order chính thức.

Nếu thiếu order_code:

1.  Không nói đơn đã ghi nhận.

Nếu IVR required nhưng chưa pass:

1.  Không release fulfillment nếu policy yêu cầu.

2.  Giữ order ở trạng thái chờ xác nhận.

**14.10. Evidence Required**

EVD-ORDER-001 — QuoteCart sample  
EVD-ORDER-002 — QuoteSnapshot sample  
EVD-ORDER-003 — OrderDraft form  
EVD-ORDER-004 — Prefill old customer  
EVD-ORDER-005 — CustomerConfirmation  
EVD-ORDER-006 — Order created from confirmed quote  
EVD-ORDER-007 — order_code  
EVD-ORDER-008 — Expired quote revalidation  
EVD-ORDER-009 — Duplicate idempotency  
EVD-ORDER-010 — IVR result handled by Order Core  
EVD-ORDER-011 — IVR technical error not no-answer

**14.11. Done Gate**

PASS khi order flow đi đúng tư vấn → QuoteSnapshot → OrderDraft → CustomerConfirmation → OrderCreation → order_code; IVR chỉ gửi result, Order Core quyết định state; duplicate không tạo nhiều đơn.

**14.12. Pack Detail Mapping**

Order Core  
QuoteSnapshot Core  
IVR Pack  
Payment Core  
Shipping Core  
AI Advisor FILE 04 / FILE 07 / FILE 09 / FILE 10 / FILE 12  
Gateway  
CRM  
Evidence Pack

**15. DEP-DOM-13-GATEWAY-HANDOFF-MODERATION — GATEWAY / PUBLIC COMMENT / MESSENGER HANDOFF / MODERATION DEPENDENCY**

**15.1. Business Purpose**

Domain này khóa xử lý channel, public/private boundary, live/comment, Messenger handoff, handoff success/fail, duplicate event, attribution preservation và live moderation.

**15.2. Source ID**

SRC-CHANNEL-001 — CHANNEL POLICY SOURCE  
SRC-HANDOFF-001 — MESSENGER HANDOFF SOURCE  
SRC-META-001 — META POLICY / GATEWAY EVENT SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-ORDER-001 — QUOTE SNAPSHOT SOURCE  
SRC-SEC-001 — SECURITY / PERMISSION / AUDIT SOURCE  
SRC-EVD-001 — EVIDENCE REGISTRY SOURCE  
SRC-MOD-001 — LIVE MODERATION POLICY SOURCE  
SRC-BRANDRISK-001 — BRAND RISK CLASSIFICATION SOURCE

**15.3. Owner Core / Owner Pack**

Facebook Channel Gateway Pack  
AI Advisor Channel Policy Pack  
Messenger Handoff Runtime  
Meta Event Gateway  
AI Advisor Orchestrator  
Gateway Moderation Core  
Evidence Pack

**15.4. Consumer Pack**

Gateway  
AI Advisor  
CRM  
Order Core  
Pricing Core  
Messenger  
Admin Moderation UI  
Evidence Pack

**15.5. Dependency Type**

CHANNEL_CONTEXT  
PUBLIC_PRIVATE_BOUNDARY  
MESSENGER_HANDOFF  
HANDOFF_DELIVERY  
ATTRIBUTION_PRESERVATION  
DUPLICATE_EVENT  
LIVE_MODERATION  
BRAND_RISK

**15.6. Required Resolver / Guard**

ChannelContextResolver  
PublicPrivateSurfaceResolver  
MessengerHandoffResolver  
HandoffDeliveryStatusResolver  
LiveCommentIntentResolver  
PrivacyPIIGuard  
MetaDuplicateEventResolver  
AttributionContextResolver  
HandoffContextRestorationResolver  
LiveAbuseClassifier  
ProfanityNormalizer  
BrandAttackClassifier  
TrollSpamBurstGuard  
ComplaintEvidenceGuard  
ModerationActionResolver  
NoMessengerHandoffForAbuseGuard  
FinalGuard

**15.7. Allowed Use**

Gateway/AI được dùng domain này để:

1.  Nhận public comment/live comment.

2.  Phân loại intent.

3.  Chặn public price/order/PII/payment/health detail.

4.  Chủ động handoff Messenger nếu policy cho phép.

5.  Nói đã gửi/chuyển Messenger khi handoff success.

6.  Dùng fallback an toàn khi handoff fail.

7.  Giữ context page/live/comment/ads/diamond nếu có.

8.  Dedup webhook/comment/message.

9.  Hide/no reply/no Messenger khi abuse rõ.

10. Route complaint thật vào case.

**15.8. Forbidden Use**

Gateway/AI không được:

1.  Public final price.

2.  Public order confirmation.

3.  Public payment instruction.

4.  Public invoice detail.

5.  Repeat PII.

6.  Tư vấn health-sensitive dài ở public.

7.  Kêu khách tự inbox nếu system handoff có thể chạy.

8.  Nói đã gửi Messenger khi handoff fail.

9.  Gateway tự quote/order/CRM.

10. Handoff duplicate do webhook retry.

11. Kéo troll/abuse vào Messenger.

12. Đôi co với brand attack.

13. Chặn nhầm complaint thật có evidence.

**15.9. Blocked If Missing**

Nếu thiếu Channel Policy:

1.  Không tự chọn public/private.

2.  Chỉ safe acknowledgement hoặc no-action.

Nếu thiếu HandoffDeliveryStatus:

1.  Không nói đã gửi Messenger.

Nếu thiếu Attribution preservation:

1.  Không tính attribution live/ads/referral.

2.  Evidence fail.

Nếu abuse classification rõ:

1.  Không handoff.

2.  Không quote/order.

3.  Hide/no reply theo policy.

**15.10. Evidence Required**

EVD-GW-001 — Public price blocked  
EVD-GW-002 — Public order blocked  
EVD-GW-003 — PII not repeated  
EVD-GW-004 — Payment public blocked  
EVD-GW-005 — Health public blocked  
EVD-GW-006 — Handoff success event  
EVD-GW-007 — Handoff failed event  
EVD-GW-008 — Public reply after success  
EVD-GW-009 — Public reply after fail  
EVD-GW-010 — Context preserved  
EVD-GW-011 — Duplicate webhook no duplicate reply  
EVD-GW-012 — Abuse no Messenger  
EVD-GW-013 — Real complaint routed

**15.11. Done Gate**

PASS khi public comment/live chỉ là cổng điều hướng an toàn; tư vấn sâu, giá, quote, order, payment, shipping, health, Diamond đều chuyển private đúng policy; abuse không vào Messenger; context và evidence được giữ.

**15.12. Pack Detail Mapping**

Gateway Pack  
AI Advisor FILE 04  
FILE 07 — CB-LIVE / CB-HANDOFF / moderation wording  
FILE 09 — Tests  
FILE 10 — Live/comment situations  
Completion Report  
Evidence Pack  
Security Pack

**16. DEP-DOM-14-CONTACT — OFFICIAL CONTACT / PHONE NUMBER REGISTRY DEPENDENCY**

**16.1. Business Purpose**

Domain này khóa số điện thoại chính thức, mục đích gửi, kênh gửi và ranh giới không cung cấp số cá nhân hoặc số ngoài registry.

**16.2. Source ID**

SRC-CONTACT-001 — OFFICIAL CONTACT REGISTRY SOURCE  
SRC-CONTACT-002 — CONTACT PURPOSE POLICY SOURCE  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CRM-001 — CRM LIFECYCLE SOURCE  
SRC-SEC-001 — SECURITY / PERMISSION / AUDIT SOURCE

**16.3. Owner Core / Owner Pack**

Official Contact Registry  
Contact Purpose Policy Pack  
Customer Service Routing  
Partner / Distributor Routing  
Executive Privacy Policy

**16.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
Messenger  
Public Comment  
Admin UI

**16.5. Dependency Type**

OFFICIAL_CONTACT  
CONTACT_PURPOSE  
PHONE_NUMBER_USAGE  
EXECUTIVE_PRIVACY  
PARTNER_ROUTING  
PUBLIC_PRIVATE_CONTACT

**16.6. Required Resolver / Guard**

OfficialContactResolver  
ContactPurposeResolver  
VisitRequestRoutingGuard  
ExecutivePrivacyGuard  
DistributorContactRoutingGuard  
PartnerContactResolver  
AffiliateVsDistributorRoutingGuard  
ContactSurfaceGuard  
FinalGuard

**16.7. Allowed Use**

Consumer được dùng domain này để:

1.  Gửi số điện thoại chính thức theo đúng mục đích.

2.  Route tham quan / sắp lịch.

3.  Route gặp công ty / lãnh đạo qua kênh chính thức.

4.  Chặn xin số cá nhân lãnh đạo.

5.  Route đại lý / nhà phân phối / mua sỉ.

6.  Phân biệt affiliate/Diamond với distributor.

7.  Gửi contact trên surface được phép.

**16.8. Forbidden Use**

Consumer không được:

1.  Tự nhớ số điện thoại.

2.  Tự bịa số điện thoại.

3.  Gửi số cá nhân lãnh đạo.

4.  Gửi số không đúng mục đích.

5.  Route affiliate sang đại lý khi khách hỏi khởi nghiệp Diamond.

6.  Route khách mua quà nhỏ sang wholesale.

7.  Hardcode số trong Landing Page/CRM/template nếu không qua registry.

8.  Public contact nếu ContactSurfaceGuard không cho.

**16.9. Blocked If Missing**

Nếu thiếu OfficialContactResolver:

1.  Không gửi số điện thoại.

2.  Dùng fallback an toàn nếu được duyệt.

Nếu thiếu ContactPurposeResolver:

1.  Hỏi thêm ngắn.

2.  Không route tùy tiện.

Nếu khách xin số cá nhân lãnh đạo:

1.  Không cung cấp.

2.  Route kênh chính thức.

**16.10. Evidence Required**

EVD-CONTACT-001 — Visit request returns approved contact  
EVD-CONTACT-002 — Company/leader contact returns approved contact  
EVD-CONTACT-003 — Personal leader phone blocked  
EVD-CONTACT-004 — Distributor/wholesale contact route  
EVD-CONTACT-005 — Affiliate not misrouted  
EVD-CONTACT-006 — No unapproved phone number  
EVD-CONTACT-007 — Contact surface allowed

**16.11. Done Gate**

PASS khi mọi số điện thoại customer-facing đều đến từ Official Contact Registry, đúng mục đích, đúng kênh, không hardcode, không lộ số cá nhân, không route sai affiliate/distributor.

**16.12. Pack Detail Mapping**

Official Contact Registry  
FILE 04 — Contact resolvers/guards  
FILE 07 — Contact wording  
FILE 09 — Tests  
FILE 10 — Contact situations  
Gateway / CRM / Landing Page

**17. DEP-DOM-15-HEALTH-CASE-CONFLICT — HEALTH BOUNDARY / COMPLAINT / PRIORITY CONFLICT DEPENDENCY**

**17.1. Business Purpose**

Domain này khóa ranh giới health-sensitive, disease mention, recovery, allergy/dietary, complaint, refund, privacy, counterfeit, member dispute và priority conflict.

**17.2. Source ID**

SRC-CLAIM-001 — CLAIM WHITELIST SOURCE  
SRC-PROD-001 — PRODUCT KNOWLEDGE MASTER  
SRC-CUSTOMER-001 — CUSTOMER PROFILE SOURCE  
SRC-CASE-001 — CUSTOMER CASE / COMPLAINT SOURCE  
SRC-SUPPRESS-001 — CRM SUPPRESSION POLICY SOURCE  
SRC-PAY-002 — PAYMENT STATE SOURCE  
SRC-RECALL-001 — RECALL / RECOVERY SOURCE  
SRC-SEC-001 — SECURITY / PERMISSION / AUDIT SOURCE

**17.3. Owner Core / Owner Pack**

Claim Policy Pack  
Health Safety Pack  
Product Knowledge Pack  
Case Management Core  
CRM Suppression Core  
Customer Service Core  
Payment Dispute Core  
Privacy Request Core  
Counterfeit / Quality Case Core  
Member Dispute Core

**17.4. Consumer Pack**

AI Advisor  
Gateway  
CRM  
Landing Page  
ADS  
Order Core  
Messaging  
Admin UI  
Evidence Pack

**17.5. Dependency Type**

HEALTH_INTENT  
DISEASE_BOUNDARY  
RECOVERY_CONTEXT  
ALLERGY_DIETARY  
CLAIM_BOUNDARY  
COMPLAINT  
PRIVACY  
PAYMENT_DISPUTE  
COUNTERFEIT  
PRIORITY_CONFLICT  
SUPPRESSION

**17.6. Required Resolver / Guard**

HealthIntentResolver  
DiseaseMentionResolver  
HealthSafetyResolver  
HealthSafetyGuard  
ConditionSensitiveClaimGuard  
RecoveryContextResolver  
MedicationTreatmentContextResolver  
AllergyDietaryGuard  
PregnancySensitiveGuard  
ChildSensitiveGuard  
PriorityConflictResolver  
OpenCaseStatusResolver  
OpenCaseSuppressionGuard  
CRMOpenCaseSuppressionGuard  
RefundDisputeGuard  
PrivacyRequestGuard  
PaymentDisputeGuard  
DeliveryIssueGuard  
HealthReviewSuppressionGuard  
CounterfeitCaseGuard  
MemberDisputeEscalationResolver  
FinalGuard

**17.7. Allowed Use**

Consumer được dùng domain này để:

1.  Nhận diện health-sensitive.

2.  Không tự hỏi bệnh khi khách không nêu.

3.  Kích hoạt guard khi khách nêu bệnh.

4.  Tư vấn theo thực dưỡng, không thuốc hóa.

5.  Chặn quote/order nếu health unresolved.

6.  Chặn CRM khi complaint/open case.

7.  Chặn upsell khi refund/payment/privacy/counterfeit dispute.

8.  Mở case/human review khi cần.

9.  Route complaint thật.

10. Không xử lý hàng nghi giả như đổi trả thường khi chưa xác minh.

**17.8. Forbidden Use**

Consumer không được:

1.  Chủ động hỏi bệnh khi khách không nêu.

2.  Chủ động hỏi kiêng cữ khi không có tín hiệu liên quan.

3.  Chẩn đoán.

4.  Nói chữa bệnh.

5.  Nói thay thuốc.

6.  Cam kết khỏi bệnh.

7.  Quote khi health unresolved.

8.  Upsell khi complaint open.

9.  Gửi CRM member/upgrade khi dispute open.

10. Tự kết luận hàng giả.

11. Tự sửa hạng/quyền lợi khi dispute.

12. Tự bỏ suppression để bán tiếp.

**17.9. Blocked If Missing**

Nếu thiếu HealthSafetyGuard trong tình huống health-sensitive:

1.  Không quote.

2.  Không order.

3.  Không tư vấn sản phẩm cụ thể nếu cần làm rõ.

Nếu thiếu OpenCaseStatusResolver trong tình huống case-sensitive:

1.  Không gửi CRM bán hàng.

2.  Không upsell.

3.  Không member lifecycle promotion.

Nếu có complaint/refund/privacy/payment/counterfeit/member dispute:

1.  Priority conflict chặn sales.

2.  Mở case/human review.

**17.10. Evidence Required**

EVD-HEALTH-001 — No unsolicited disease question  
EVD-HEALTH-002 — Disease mention triggers guard  
EVD-HEALTH-003 — Health unresolved blocks quote  
EVD-HEALTH-004 — No treatment claim  
EVD-HEALTH-005 — Public health detail blocked  
EVD-CASE-001 — Complaint suppresses CRM  
EVD-CASE-002 — Refund suppresses upsell  
EVD-CASE-003 — Privacy request suppresses CRM  
EVD-CASE-004 — Payment dispute suppresses sales  
EVD-CASE-005 — Counterfeit opens case  
EVD-CASE-006 — Member dispute opens case

**17.11. Done Gate**

PASS khi health-sensitive, complaint, refund, privacy, payment dispute, counterfeit and member dispute always override sales/CRM/member promotion; no diagnosis, no treatment claim, no upsell during open case.

**17.12. Pack Detail Mapping**

FILE 04 — Resolvers/guards  
FILE 06 — Claim Policy  
FILE 07 — Health/case wording  
FILE 09 — Tests  
FILE 10 — Situations  
FILE 12 — Safe sales behavior  
Case Management Pack  
CRM Suppression Pack  
Evidence Pack

**18. DEP-DOM-16-EVIDENCE-SECURITY — EVIDENCE / COMPLETION REPORT / GATEWAY GATE / SECURITY DEPENDENCY**

**18.1. Business Purpose**

Domain này khóa evidence, Completion Report, Gateway transition, production readiness, security, permission, audit, owner sign-off và release gate.

**18.2. Source ID**

SRC-EVD-001 — EVIDENCE REGISTRY SOURCE  
SRC-GOV-001 — MASTER GOVERNANCE SOURCE  
SRC-SEC-001 — SECURITY / PERMISSION / AUDIT SOURCE  
SRC-COMP-001 — AI ADVISOR FACEBOOK COMPLETION REPORT SOURCE  
SRC-GATEWAY-001 — FACEBOOK CHANNEL GATEWAY READINESS SOURCE  
SRC-MC-001 — MC AI / DAILY LIVE BOARD READINESS SOURCE

**18.3. Owner Core / Owner Pack**

Evidence Registry  
Completion Report Owner  
Gateway Readiness Owner  
Security / Permission / Audit Pack  
Release Governance  
QA  
Owner Sign-off Authority  
MC AI / Daily Live Board Owner

**18.4. Consumer Pack**

Release Governance  
Gateway Pack  
AI Advisor  
MC AI  
ADS / ROAS  
CRM  
Order Core  
Payment Core  
Shipping Core  
Admin UI  
Evidence Pack  
Owner Review

**18.5. Dependency Type**

EVIDENCE  
COMPLETION_GATE  
GATEWAY_TRANSITION  
SECURITY  
PERMISSION  
AUDIT  
OWNER_SIGNOFF  
PRODUCTION_READY

**18.6. Required Resolver / Guard**

CompletionGateResolver  
EvidenceRegistryResolver  
GatewayTransitionResolver  
P0GateStatusResolver  
DecisionEnvelopeEvidenceResolver  
ResolverTraceEvidenceResolver  
GuardTraceEvidenceResolver  
HandoffDeliveryLogResolver  
QuoteSnapshotEvidenceResolver  
OrderCodeEvidenceResolver  
CRMSuppressionEvidenceResolver  
DuplicateIdempotencyEvidenceResolver  
SecurityPermissionResolver  
AuditResolver  
OwnerSignOffResolver

**18.7. Allowed Use**

Release Governance được dùng domain này để:

1.  Đánh giá Completion Report.

2.  Đánh giá Gateway readiness.

3.  Đánh giá production readiness.

4.  Kiểm evidence P0.

5.  Kiểm DecisionEnvelope.

6.  Kiểm resolver trace.

7.  Kiểm guard trace.

8.  Kiểm handoff delivery log.

9.  Kiểm QuoteSnapshot.

10. Kiểm order_code.

11. Kiểm CRM suppression.

12. Kiểm duplicate/idempotency.

13. Kiểm security/permission/audit.

14. Kiểm owner sign-off.

**18.8. Forbidden Use**

Không được:

1.  Gọi PASS khi thiếu evidence.

2.  Gọi Ready vì tài liệu đã viết.

3.  Dùng screenshot câu trả lời hay thay evidence.

4.  Dùng demo miệng thay trace.

5.  Mở Gateway khi P0 pending/fail.

6.  Gọi Production Ready khi Completion Report pending.

7.  Cho protected action thiếu permission.

8.  Bỏ audit.

9.  Cho Admin UI bypass backend permission.

10. Cho Gateway tự quote/order/CRM.

11. Cho MC AI live khi board/script/video chưa pass.

**18.9. Blocked If Missing**

Nếu bất kỳ P0 gate PENDING/FAIL:

Gateway production = BLOCKED  
Completion Report = PENDING_EVIDENCE hoặc FAIL  
Production Ready = NO  
Release Approved = NO  
Go-live Approved = NO

Nếu thiếu owner sign-off:

1.  Không release.

2.  Không go-live.

3.  Không Gateway transition.

Nếu thiếu permission/audit:

1.  Protected action bị chặn.

2.  Release evidence fail.

**18.10. Evidence Required**

EVD-COMP-001 — DecisionEnvelope sample  
EVD-COMP-002 — Resolver trace  
EVD-COMP-003 — Guard trace  
EVD-COMP-004 — Handoff delivery log  
EVD-COMP-005 — QuoteSnapshot sample  
EVD-COMP-006 — OrderDraft sample  
EVD-COMP-007 — CustomerConfirmation sample  
EVD-COMP-008 — order_code sample  
EVD-COMP-009 — CRM suppression evidence  
EVD-COMP-010 — Duplicate/idempotency test  
EVD-COMP-011 — MC AI board/script evidence  
EVD-COMP-012 — ROAS internal-only evidence  
EVD-COMP-013 — Security/permission/audit evidence  
EVD-COMP-014 — Owner sign-off

**18.11. Done Gate**

PASS khi Completion Report có đủ evidence thật cho tất cả P0 gate, không còn P0 open issue, protected actions có permission/audit, Gateway transition được owner sign-off; nếu thiếu, Gateway và Production vẫn BLOCKED.

**18.12. Pack Detail Mapping**

Completion Report  
Evidence Pack  
Gateway Pack  
Security Pack  
AI Advisor FILE 04 / FILE 05 / FILE 09  
MC AI / Daily Live Board Pack  
CRM Pack  
Order Core  
Payment Core  
Shipping Core  
QA / Release Governance

**19. CROSS-DOMAIN PRIORITY ORDER**

Khi nhiều domain cùng áp dụng, hệ thống xử lý theo thứ tự ưu tiên:

01\. Security / Permission / Audit  
02. Completion / Release Gate  
03. Priority Conflict / Open Case / Complaint / Privacy / Payment Dispute / Health Review  
04. Customer Identity / Customer Memory  
05. Health / Allergy / Dietary Safety  
06. Product Knowledge / Claim / Brand / Scientific Proof  
07. Sellable / Availability / Program Activation  
08. Pricing / Program / QuoteSnapshot  
09. Payment / Shipping / Order  
10. CRM / Messaging / Member Lifecycle  
11. Recommendation / Segment / Growth / Combo  
12. ADS / Gateway / Landing / Public Display  
13. BI / Outcome / Learning Signal

Nguyên tắc:

1.  Safety và case conflict thắng sales.

2.  Availability thắng Product Recommendation.

3.  Claim Policy thắng Product Knowledge wording nếu có rủi ro.

4.  QuoteSnapshot thắng AI/CRM/Gateway text.

5.  Payment Core thắng ảnh giao dịch/khách nói đã chuyển.

6.  Shipping Core thắng template/landing copy.

7.  Order Core thắng Gateway/AI/IVR raw result.

8.  Evidence Registry thắng lời xác nhận miệng.

9.  Gateway không được vượt AI Advisor / Runtime Core.

10. CRM không được vượt suppression.

**20. PART 2 DONE GATE**

PHẦN 2/4 đạt khi:

1.  Đã khóa đủ 16 business domain dependency.

2.  Mỗi domain có Source ID.

3.  Mỗi domain có Owner Core / Owner Pack.

4.  Mỗi domain có Consumer Pack.

5.  Mỗi domain có Required Resolver / Guard.

6.  Mỗi domain có Allowed Use.

7.  Mỗi domain có Forbidden Use.

8.  Mỗi domain có Blocked-if-missing.

9.  Mỗi domain có Evidence Required.

10. Mỗi domain có Done Gate.

11. Mỗi domain có Pack Detail Mapping.

12. Quy tắc mở bán là domain riêng.

13. CRM 12 tháng là domain chính thức.

14. Member Lifecycle là domain chính thức.

15. Message Trigger / Immutable Text là domain chính thức.

16. Gateway / Handoff / Moderation là domain chính thức.

17. Completion Report / Evidence / Security là release domain chính thức.

18. Không domain nào cho phép consumer tự suy luận rule kinh doanh.

19. Không domain nào cho phép hardcode runtime data.

20. Gateway vẫn BLOCKED.

21. Completion Report vẫn PENDING_EVIDENCE.

22. Production Ready vẫn NO.

**21. TRẠNG THÁI SAU PHẦN 2/4**

MASTER-02 PHẦN 2/4 = COMPLETED  
MASTER-02 CLEAN FINAL = IN_PROGRESS  
GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**22. PHẦN TIẾP THEO**

Phần tiếp theo:

PHẦN 3/4 — RUNTIME CONTROL / CONFLICT RESOLUTION / SUPPRESSION / FALLBACK / NO-HARDCODE ENFORCEMENT

PHẦN 3/4 sẽ khóa:

1\. Runtime result status model  
2. Cross-domain conflict resolution  
3. Priority conflict / open case suppression  
4. Customer identity conflict  
5. Customer memory conflict  
6. Member / Diamond / commission conflict  
7. Recommendation vs Availability conflict  
8. Program activation vs stock conflict  
9. Payment proof vs Payment Core conflict  
10. Shipping tracking vs fallback ETA conflict  
11. Health intent vs sales intent conflict  
12. Brand science vs Claim Policy conflict  
13. Public comment vs Messenger private conflict  
14. Message trigger vs CRM content conflict  
15. Completion Report vs missing evidence conflict  
16. Expanded no-hardcode enforcement  
17. Safe fallback rules  
18. Future extension boundary

**PHẦN 3/4 — RUNTIME CONTROL / CONFLICT RESOLUTION / SUPPRESSION / FALLBACK / NO-HARDCODE ENFORCEMENT**

**0. MỤC ĐÍCH CỦA PHẦN 3/4**

PHẦN 3/4 khóa cách hệ thống xử lý khi dữ liệu runtime chưa đủ, source mâu thuẫn, resolver lỗi, consumer muốn hành động nhưng thiếu quyền, hoặc rule kinh doanh bị xung đột giữa nhiều pack.

PHẦN 3/4 trả lời các câu hỏi:

1.  Runtime resolver phải trả trạng thái như thế nào.

2.  Consumer được hành động khi runtime trả kết quả gì.

3.  Khi source thiếu thì AI / CRM / Gateway / Landing Page / Admin UI phải dừng ở đâu.

4.  Khi rule xung đột thì source nào thắng.

5.  Khi khách có open case thì CRM và member sales bị chặn thế nào.

6.  Khi customer identity chưa rõ thì có được cá nhân hóa không.

7.  Khi customer memory thiếu thì có được nói lịch sử mua không.

8.  Khi member lifecycle thiếu runtime thì có được nói nâng/hạ hạng không.

9.  Khi Diamond link chưa bind thì có được nói quyền lợi Diamond không.

10. Khi sản phẩm chưa sellable thì có được quote/order không.

11. Khi payment chưa xác nhận thì có được nói PAID không.

12. Khi shipping chưa có tracking thì có được hứa ETA không.

13. Khi public comment hỏi giá thì có được báo giá không.

14. Khi thiếu evidence thì có được Gateway PASS không.

15. Khi fallback được dùng và khi nào fallback bị cấm.

16. Dữ liệu nào tuyệt đối không được hardcode.

17. Domain nào phải giữ BLOCKED nếu missing source, missing resolver hoặc missing evidence.

PHẦN 3/4 không viết implementation chi tiết.

PHẦN 3/4 không viết API, DTO, DB, worker, UI hoặc code.

**1. RUNTIME RESULT STATUS MODEL**

Mọi Runtime Resolver trong hệ thống Ginsengfood phải trả trạng thái rõ ràng.

Consumer không được tự diễn giải kết quả mơ hồ.

Các trạng thái runtime chuẩn:

RESOLVED  
NOT_ELIGIBLE  
BLOCKED  
MISSING_SOURCE  
RESOLVER_TIMEOUT  
CONFLICT  
STALE  
PENDING_REVIEW  
PENDING_EVIDENCE  
PERMISSION_DENIED  
AUDIT_REQUIRED  
OWNER_DECISION_REQUIRED

**1.1. RESOLVED**

RESOLVED nghĩa là resolver đã trả kết quả hợp lệ.

Consumer chỉ được sử dụng kết quả trong phạm vi allowed use.

Ví dụ:

1.  CustomerIdentityResolver trả khách là Diamond.

2.  QuoteSnapshotResolver trả quote hợp lệ.

3.  AvailabilityResolver trả SKU sellable.

4.  GoldenHourResolver trả phiên active.

5.  PaymentStateResolver trả PAID.

6.  ShippingStateResolver trả tracking hợp lệ.

Consumer được hành động nhưng vẫn phải qua guard tương ứng.

**1.2. NOT_ELIGIBLE**

NOT_ELIGIBLE nghĩa là có dữ liệu nhưng không đủ điều kiện.

Ví dụ:

1.  Khách chưa đủ hạng Diamond.

2.  SKU không đủ điều kiện Giờ Vàng.

3.  Khách không đủ quyền mua sớm.

4.  Order không đủ điều kiện commission.

5.  Kênh không đủ điều kiện gửi CRM.

6.  Địa chỉ không đủ điều kiện COD.

Consumer phải trả lời theo hướng không áp dụng / chưa đủ điều kiện, không được tự override.

**1.3. BLOCKED**

BLOCKED nghĩa là rule chặn hành động.

Ví dụ:

1.  SKU bị recall hold.

2.  Khách có open complaint case.

3.  Payment chưa được xác nhận.

4.  Health-sensitive chưa qua guard.

5.  Public comment không được báo giá.

6.  Completion Report chưa đủ evidence.

Consumer phải dừng hành động bị chặn.

Không được dùng fallback để vượt BLOCKED.

**1.4. MISSING_SOURCE**

MISSING_SOURCE nghĩa là thiếu nguồn sự thật.

Ví dụ:

1.  Không có Product Knowledge.

2.  Không có Customer Memory.

3.  Không có Member Lifecycle source.

4.  Không có Official Contact Registry.

5.  Không có Scientific Evidence source.

6.  Không có Message Trigger source.

Consumer không được khẳng định.

Consumer không được bịa.

Consumer không được lấy dữ liệu từ cache cũ hoặc prompt.

**1.5. RESOLVER_TIMEOUT**

RESOLVER_TIMEOUT nghĩa là resolver không trả kết quả trong giới hạn.

Consumer không được hiểu timeout là “không có quyền” hoặc “không đủ điều kiện”.

Timeout không đồng nghĩa NOT_ELIGIBLE.

Timeout không đồng nghĩa BLOCKED.

Timeout nghĩa là chưa có dữ liệu chắc chắn.

Consumer chỉ được dùng fallback an toàn nếu fallback đó không tạo cam kết nghiệp vụ.

**1.6. CONFLICT**

CONFLICT nghĩa là có hai hoặc nhiều source trả kết quả mâu thuẫn.

Ví dụ:

1.  Product Knowledge nói SKU có thể tư vấn, nhưng Availability nói not sellable.

2.  Member Core nói Gold, Customer Profile cache nói Silver.

3.  CRM muốn gửi tin, nhưng OpenCaseSuppressionGuard chặn.

4.  Landing Page nói sản phẩm đang mở bán, ProgramActivationResolver nói không active.

5.  Admin UI thấy ảnh chuyển khoản, Payment Core chưa PAID.

6.  MC AI script có SKU ngoài Daily Live Product Board.

Khi CONFLICT, consumer phải dừng quyết định và dùng conflict resolution order.

**1.7. STALE**

STALE nghĩa là dữ liệu đã hết hạn hoặc không còn hiệu lực.

Ví dụ:

1.  QuoteSnapshot hết hạn.

2.  Golden Hour session đã kết thúc.

3.  Handoff context quá hạn.

4.  Member benefit snapshot cũ.

5.  CRM trigger đã hết window.

6.  Tracking status quá cũ.

Consumer không được dùng dữ liệu stale để chốt, quote, order hoặc gửi CRM.

**1.8. PENDING_REVIEW**

PENDING_REVIEW nghĩa là cần human/admin/owner/accounting/CSKH review.

Ví dụ:

1.  Payment proof cần kế toán đối soát.

2.  Member dispute cần review.

3.  Counterfeit case cần QA/CSKH.

4.  Corporate / distributor request cần routing.

5.  Claim khoa học chưa approved.

6.  Production Planning Signal cần owner review.

Consumer không được tự kết luận.

**1.9. PENDING_EVIDENCE**

PENDING_EVIDENCE nghĩa là thiếu bằng chứng để PASS.

Ví dụ:

1.  Completion Report chưa đủ evidence.

2.  Gateway chưa đủ handoff delivery log.

3.  CRM chưa có suppression evidence.

4.  Quote/order flow chưa có sample.

5.  Security action thiếu audit evidence.

Không được release.

Không được Gateway PASS.

Không được production-ready.

**1.10. PERMISSION_DENIED**

PERMISSION_DENIED nghĩa là actor không có quyền.

Admin UI, backend, worker, Gateway, CRM, AI đều phải tôn trọng.

Không được bypass bằng UI.

Không được bypass bằng prompt.

Không được bypass bằng role text.

**1.11. AUDIT_REQUIRED**

AUDIT_REQUIRED nghĩa là action cần audit/reason/correlation nhưng chưa đủ.

Ví dụ:

1.  Manual payment confirmation.

2.  Member correction.

3.  Hold / release / recall.

4.  Refund approval.

5.  Override.

6.  Admin correction.

Nếu audit thiếu, action không được xem là hợp lệ.

**1.12. OWNER_DECISION_REQUIRED**

OWNER_DECISION_REQUIRED nghĩa là cần owner quyết định.

Áp dụng cho:

1.  Future extension.

2.  International shipping/payment.

3.  New partner policy.

4.  New commission policy.

5.  New claim.

6.  New product activation rule.

7.  Production order from planning signal.

Consumer không được tự kích hoạt.

**2. RUNTIME ACTION CONTROL**

Mỗi consumer chỉ được hành động khi runtime trả trạng thái phù hợp.

**2.1. AI Advisor**

AI Advisor chỉ được:

1.  Tư vấn sản phẩm khi Product Knowledge resolved.

2.  Tư vấn hiệu dụng khi ClaimGuard pass.

3.  Cá nhân hóa khi Customer Identity resolved.

4.  Nhắc lịch sử mua khi Customer Memory resolved.

5.  Hỏi thăm khách cũ khi LastPurchase resolved hoặc hỏi chung nếu chưa có.

6.  Báo giá khi QuoteSnapshot resolved.

7.  Nói quyền lợi member khi RuntimeRights resolved.

8.  Nói Diamond benefit khi DiamondBind resolved.

9.  Tạo OrderDraft khi quote còn hiệu lực.

10. Nói Order Success khi có order_code.

AI Advisor không được:

1.  Tự tính giá.

2.  Tự tạo order.

3.  Tự xác nhận PAID.

4.  Tự nói shipping ETA.

5.  Tự nói khách là Diamond.

6.  Tự nói khách mua qua link Diamond.

7.  Tự nói khách từng mua sản phẩm cụ thể khi thiếu memory.

8.  Tự hỏi bệnh khi khách không nêu bệnh.

9.  Tự gửi số điện thoại ngoài registry.

10. Tự nói Gateway/Completion đã PASS.

**2.2. CRM / Messaging**

CRM chỉ được gửi khi:

1.  CRMEligibilityGuard pass.

2.  Customer identity resolved.

3.  MessageTrigger resolved.

4.  Message text source available.

5.  Customer consent/channel policy pass.

6.  Open case suppression pass.

7.  Frequency cap pass.

8.  Quiet hours pass.

9.  Dedup pass.

10. Product Effectiveness present nếu gợi ý sản phẩm.

CRM không được:

1.  Gửi khi opt-out.

2.  Gửi khi open case.

3.  Gửi sai trigger.

4.  Gửi sai hạng.

5.  Gửi trùng trong tháng nếu rule cấm.

6.  Rewrite message.

7.  Bịa lịch sử mua.

8.  Bịa quyền lợi.

9.  Gửi member lifecycle khi thiếu runtime.

10. Gửi giá khi thiếu QuoteSnapshot.

**2.3. Gateway**

Gateway chỉ được:

1.  Nhận normalized event.

2.  Phân loại channel/surface.

3.  Dedup webhook/comment.

4.  Public safe reply.

5.  Chủ động handoff Messenger nếu policy cho phép.

6.  Ghi handoff status.

7.  Preserve page/live/comment/attribution context.

8.  Chuyển context sang AI Advisor / Order / CRM trong boundary.

Gateway không được:

1.  Tự quote.

2.  Tự order.

3.  Tự CRM.

4.  Tự báo giá public.

5.  Tự xác nhận đơn public.

6.  Tự gửi payment instruction.

7.  Tự lặp PII.

8.  Tự nói đã gửi Messenger khi handoff fail.

9.  Tự kéo abuse/troll vào Messenger.

10. Tự mở Gateway production khi Completion Report chưa PASS.

**2.4. Landing Page / ADS / MC AI**

Landing Page, ADS, MC AI chỉ được dùng SKU khi:

1.  SKU sellable.

2.  SKU active theo chương trình/kênh.

3.  Có Product Knowledge.

4.  Có Claim Policy.

5.  Có price/program nếu hiển thị giá.

6.  Có board nếu live/MC AI.

7.  Không hold/recall/lock.

8.  Không ngoài active list.

Không được:

1.  Hardcode SKU active.

2.  Hardcode giá.

3.  Hardcode shipping.

4.  Hardcode payment.

5.  Nói SKU ngoài board.

6.  Public tồn kho.

7.  Tạo khan hiếm giả.

8.  Dùng ADS signal để ép SKU trái nhu cầu khách.

**2.5. Admin UI**

Admin UI chỉ được:

1.  Hiển thị dữ liệu từ core.

2.  Gửi command đến core.

3.  Thực hiện protected action khi permission pass.

4.  Ghi audit khi action yêu cầu.

5.  Hiển thị internal fields nếu RBAC pass.

Admin UI không được:

1.  Tự set PAID.

2.  Tự đổi order state.

3.  Tự sửa member tier.

4.  Tự release hold.

5.  Tự override quote.

6.  Tự xác nhận IVR.

7.  Tự xác nhận payment khi thiếu accounting review.

8.  Dùng UI state làm source-of-truth.

**3. CROSS-DOMAIN CONFLICT RESOLUTION ORDER**

Khi có conflict giữa nhiều domain, hệ thống xử lý theo thứ tự ưu tiên:

01\. Security / Permission / Audit  
02. Completion / Release Gate  
03. Priority Conflict / Open Case / Complaint / Privacy / Payment Dispute / Health Review  
04. Customer Identity / Customer Memory  
05. Health / Allergy / Dietary Safety  
06. Product Knowledge / Claim / Brand / Scientific Proof  
07. Sellable / Availability / Program Activation  
08. Pricing / Program / QuoteSnapshot  
09. Payment / Shipping / Order  
10. CRM / Messaging / Member Lifecycle  
11. Recommendation / Segment / Growth / Combo  
12. ADS / Gateway / Landing / Public Display  
13. BI / Outcome / Learning Signal

Nguyên tắc:

1.  Safety và case conflict thắng sales.

2.  Availability thắng Product Recommendation.

3.  Claim Policy thắng Product Knowledge wording nếu có rủi ro.

4.  QuoteSnapshot thắng AI/CRM/Gateway text.

5.  Payment Core thắng ảnh giao dịch/khách nói đã chuyển.

6.  Shipping Core thắng template/landing copy.

7.  Order Core thắng Gateway/AI/IVR raw result.

8.  Evidence Registry thắng lời xác nhận miệng.

9.  Gateway không được vượt AI Advisor / Runtime Core.

10. CRM không được vượt suppression.

**4. CUSTOMER IDENTITY CONFLICT CONTROL**

**4.1. Conflict examples**

Customer identity conflict xảy ra khi:

1.  Customer Profile nói khách là Gold nhưng Member Lifecycle nói khách đã lên Platinum.

2.  AI memory nói khách cũ nhưng Customer Profile không xác nhận.

3.  Khách nói “tôi là Diamond” nhưng runtime không xác nhận.

4.  Khách vào qua link Diamond nhưng bind status không hợp lệ.

5.  CRM nói khách là member nhưng Order History không có doanh số hợp lệ.

6.  Admin UI cache còn dữ liệu cũ.

**4.2. Resolution rule**

Runtime Customer Identity thắng:

CustomerIdentityResolver  
→ MemberLifecycleResolver  
→ CustomerMemoryResolver  
→ OrderHistoryResolver  
→ Consumer display

Khách tự khai không thay thế runtime.

Chat history không thay thế Customer Profile.

CRM cache không thay thế Member Lifecycle.

**4.3. Blocked actions**

Nếu identity conflict:

1.  Không áp quyền lợi member.

2.  Không nói hạng.

3.  Không nói khách là Diamond.

4.  Không báo quyền lợi Diamond.

5.  Không cá nhân hóa lịch sử mua cụ thể.

6.  Không gửi member lifecycle message.

7.  Không tạo QuoteSnapshot có benefit cho đến khi runtime resolve.

**5. CUSTOMER MEMORY CONFLICT CONTROL**

**5.1. Conflict examples**

Customer memory conflict xảy ra khi:

1.  Khách nói từng mua nhưng Order History không có.

2.  Customer Memory nói mua A, Order History nói mua B.

3.  CRM nói mua cho mẹ, Recipient Memory không có.

4.  AI muốn hỏi “dùng dòng đó có hợp không” nhưng chưa biết dòng nào.

5.  Khách phản hồi không hài lòng nhưng CRM muốn gửi mua lại.

**5.2. Resolution rule**

Order History và Customer Memory verified thắng lời suy đoán.

Nếu thiếu LastPurchase:

1.  AI hỏi thăm chung.

2.  Không nhắc tên sản phẩm cụ thể.

Nếu có negative feedback:

1.  Service recovery thắng sales.

2.  Không quote/order mới nếu vấn đề chưa xử lý.

**5.3. Blocked actions**

Nếu customer memory conflict:

1.  Không nói “lần trước Mình mua…” nếu chưa chắc.

2.  Không nói “Mình mua cho mẹ…” nếu chưa có recipient source.

3.  Không gửi CRM mua lại theo sản phẩm cũ.

4.  Không member upsell khi trải nghiệm cũ chưa được xử lý.

**6. MEMBER LIFECYCLE CONFLICT CONTROL**

**6.1. Conflict examples**

Member lifecycle conflict xảy ra khi:

1.  Member Benefit nói Gold nhưng Member Lifecycle đang grace.

2.  CRM muốn gửi nâng hạng nhưng member runtime thiếu amount.

3.  Khách dispute doanh số tích lũy.

4.  QuoteSnapshot chưa áp member benefit nhưng AI nói đã giảm theo hạng.

5.  Khách đang grace nhưng CRM gửi hạ hạng ngay.

6.  Khách hết grace nhưng downgrade chưa được runtime xác nhận.

**6.2. Resolution rule**

Member Lifecycle Core thắng mọi consumer text.

QuoteSnapshot thắng lời AI/CRM về giá cuối.

Member dispute mở case, không tranh luận.

**6.3. Blocked actions**

Nếu thiếu MemberLifecycleResolver:

1.  Không nói duy trì/nâng/hạ hạng.

2.  Không nói số tiền còn thiếu.

3.  Không nói ngày còn lại.

4.  Không gửi member lifecycle CRM.

5.  Không downgrade.

6.  Không upgrade.

Nếu dispute open:

1.  Không upsell.

2.  Không gửi CRM duy trì/nâng hạng.

3.  Không nói “dữ liệu đúng rồi”.

4.  Mở case/human review.

**7. DIAMOND / AFFILIATE / COMMISSION CONFLICT CONTROL**

**7.1. Conflict examples**

1.  Khách nói mua qua link Diamond nhưng bind fail.

2.  Attribution có referral_link_id nhưng order không verified.

3.  Khách vừa là member vừa mua qua link Diamond.

4.  Diamond tự mua qua link của mình.

5.  CRM muốn gửi commission nhưng order chưa đủ điều kiện.

6.  Khách hỏi đại lý nhưng intent thực tế là Diamond affiliate.

7.  Khách mua số lượng lớn nhưng không phải nhà phân phối.

**7.2. Resolution rule**

DiamondReferralResolver và CommissionEligibilityResolver quyết định.

OrderVerifiedResolver quyết định đơn có tính commission không.

PartnerPolicyResolver quyết định đại lý/nhà phân phối/mua sỉ.

OfficialContactResolver quyết định số liên hệ.

**7.3. Blocked actions**

Nếu Diamond bind missing/fail:

1.  Không nói quyền lợi Diamond.

2.  Không tính commission.

3.  Vẫn cho mua thường nếu sản phẩm sellable.

Nếu commission eligibility missing:

1.  Không nói hoa hồng phát sinh.

2.  Không gửi Diamond commission message.

3.  Không tạo payout/ledger.

Nếu partner intent chưa rõ:

1.  Không route nhầm.

2.  Hỏi thêm ngắn hoặc dùng Official Contact Registry nếu đủ intent.

**8. RECOMMENDATION VS AVAILABILITY CONFLICT CONTROL**

**8.1. Conflict examples**

1.  Product Knowledge nói sản phẩm phù hợp nhưng Availability nói hết hàng.

2.  Segment Recommendation chọn SKU nhưng SKU bị quality hold.

3.  Product Triad chọn đủ 3 trụ nhưng một SKU not sellable.

4.  CRM muốn gợi ý sản phẩm đã mua lại nhưng SKU đang sale lock.

5.  ADS đang chạy SKU nhưng Product Activation đã tắt.

**8.2. Resolution rule**

Availability / Sellable Status thắng Product Recommendation.

Product Recommendation chỉ là đề xuất.

Sellable quyết định có được bán hay không.

**8.3. Blocked actions**

Nếu SKU not sellable:

1.  Không quote.

2.  Không order.

3.  Không chốt.

4.  Không ADS bán hàng.

5.  Không Landing CTA mua.

6.  Không CRM chương trình.

7.  Chỉ gợi ý thay thế nếu replacement pass guard.

**9. PROGRAM ACTIVATION VS STOCK CONFLICT CONTROL**

**9.1. Conflict examples**

1.  Program Policy muốn mở Giờ Vàng nhưng stock \< 300.

2.  Landing Page hiển thị SKU Giờ Vàng nhưng GoldenHourActivationResolver không active.

3.  ADS chạy SKU 24/7 nhưng ProgramActivationResolver tắt.

4.  MC AI script có SKU ngoài board.

5.  24/7 discount tính từ đơn chưa verified.

6.  Golden Hour session đã hết nhưng quote vẫn dùng giá cũ.

**9.2. Resolution rule**

ProgramActivationResolver + AvailabilityResolver + QuoteSnapshot thắng mọi display.

Daily Live Product Board thắng MC AI script.

QuoteLockResolver quyết định quote còn hạn.

SuccessfulSalesCountResolver chỉ tính đơn hợp lệ.

**9.3. Blocked actions**

Nếu thiếu ProgramActivationResolver:

1.  Không nói SKU thuộc chương trình.

2.  Không gửi CRM chương trình.

3.  Không chạy ADS chương trình.

4.  Không Landing active list.

Nếu stock không đủ:

1.  Không mở Giờ Vàng.

2.  Không quote Giờ Vàng.

3.  Không tạo khan hiếm giả.

Nếu board mismatch:

1.  MC AI không được phát script.

2.  Segment phải REVALIDATION_REQUIRED.

**10. QUOTE / ORDER CONFLICT CONTROL**

**10.1. Conflict examples**

1.  AI báo giá nhưng QuoteSnapshot thiếu.

2.  QuoteSnapshot hết hạn nhưng khách xác nhận.

3.  Customer sửa số lượng sau khi quote.

4.  OrderDraft không khớp QuoteSnapshot.

5.  Khách nói “chốt” ở public comment.

6.  Duplicate webhook tạo order trùng.

7.  IVR result gửi sau khi order đã expired.

**10.2. Resolution rule**

QuoteSnapshot thắng AI text.

OrderDraft phải dựa trên quote còn hiệu lực.

CustomerConfirmation bắt buộc.

Order Core quyết định order state.

IdempotencyResolver chặn duplicate.

**10.3. Blocked actions**

Nếu thiếu QuoteSnapshot:

1.  Không báo giá.

2.  Không OrderDraft.

Nếu quote expired:

1.  Không tạo order.

2.  Revalidate quote.

Nếu thiếu CustomerConfirmation:

1.  Không order chính thức.

Nếu thiếu order_code:

1.  Không Order Success.

2.  Không post-purchase CRM.

**11. PAYMENT PROOF VS PAYMENT CORE CONFLICT CONTROL**

**11.1. Conflict examples**

1.  Khách gửi ảnh chuyển khoản nhưng Payment Core chưa xác nhận.

2.  Admin thấy giao dịch nhưng chưa đối soát.

3.  CRM muốn gửi “đã thanh toán” nhưng payment pending.

4.  Order state muốn fulfillment nhưng bank transfer đang WAITING_BANK_TRANSFER.

5.  Bank webhook fail nhưng khách nói đã chuyển.

**11.2. Resolution rule**

Payment Core / Accounting Review thắng ảnh giao dịch, lời khách và UI display.

PAID chỉ hợp lệ khi PaymentStateResolver trả PAID hoặc Accounting Review xác nhận theo rule.

**11.3. Blocked actions**

Nếu chưa Payment Core confirmation:

1.  Không nói đã thanh toán.

2.  Không PAID.

3.  Không gửi payment success CRM.

4.  Không release fulfillment nếu payment required.

5.  Ghi chờ đối soát.

Nếu thiếu payment_reference:

1.  Không gửi bank instruction.

2.  Không tạo VietQR.

**12. SHIPPING TRACKING VS FALLBACK ETA CONFLICT CONTROL**

**12.1. Conflict examples**

1.  Carrier tracking chưa có nhưng AI muốn nói ngày nhận.

2.  CRM gửi ETA cũ nhưng Shipping Core có status mới.

3.  Order đã có địa chỉ nhưng AI hỏi lại.

4.  Landing Page hardcode “2–3 ngày”.

5.  Carrier status stale.

**12.2. Resolution rule**

ShippingStateResolver thắng CRM/template/Landing Page.

CarrierTrackingLinkResolver thắng fallback.

Fallback chỉ dùng khi policy cho phép và không có tracking realtime.

**12.3. Blocked actions**

Nếu thiếu ShippingEligibility:

1.  Không hứa ship/ETA/COD/phí ship.

Nếu thiếu tracking:

1.  Không bịa trạng thái.

2.  Dùng fallback vùng nếu policy cho phép.

Nếu order có shipping info:

1.  Không hỏi lại địa chỉ.

**13. HEALTH INTENT VS SALES INTENT CONFLICT CONTROL**

**13.1. Conflict examples**

1.  Khách nói bệnh nhưng cũng muốn mua ngay.

2.  Khách nói mua cho người đang điều trị.

3.  Khách hỏi sản phẩm có chữa bệnh không.

4.  Live comment hỏi bệnh nền.

5.  AI muốn quote nhưng HealthSafetyGuard chưa pass.

**13.2. Resolution rule**

HealthSafetyGuard thắng Sales Intent.

Claim Policy thắng Product Recommendation.

Private surface thắng public surface khi health-sensitive.

**13.3. Blocked actions**

Nếu health unresolved:

1.  Không quote.

2.  Không order.

3.  Không claim cụ thể nếu thiếu ClaimGuard.

4.  Hỏi thêm trong private nếu cần.

5.  Public comment phải handoff.

Nếu khách không nêu bệnh:

1.  Không tự hỏi bệnh.

2.  Không tự hỏi kiêng cữ.

3.  Tư vấn theo bữa ăn thực dưỡng bình thường.

**14. BRAND SCIENCE VS CLAIM POLICY CONFLICT CONTROL**

**14.1. Conflict examples**

1.  Product Knowledge có bằng chứng khoa học nhưng Claim Policy không cho wording mạnh.

2.  AI muốn nói bài báo khoa học nhưng ApprovedPublicationLinkResolver thiếu.

3.  ADS muốn dùng claim mạnh để tăng conversion.

4.  CRM diễn giải nghiên cứu thành hiệu quả điều trị.

5.  Landing Page nói “chữa” dựa trên thành phần.

**14.2. Resolution rule**

Claim Policy thắng mọi wording public.

Scientific Evidence Source quyết định bằng chứng.

ApprovedPublicationLinkResolver quyết định link public.

Brand Voice không được tạo claim y tế.

**14.3. Blocked actions**

Nếu thiếu ScientificEvidenceResolver:

1.  Không nói có bài báo cụ thể.

2.  Không gửi link cụ thể.

Nếu thiếu ClaimGuard:

1.  Không diễn giải hiệu dụng cụ thể.

Nếu có risk treatment claim:

1.  Chặn render.

2.  Chuyển wording thực dưỡng/public-safe.

**15. MESSAGE TRIGGER VS CRM CONTENT CONFLICT CONTROL**

**15.1. Conflict examples**

1.  CRM muốn gửi tin nhưng trigger chưa có.

2.  Message text đã duyệt nhưng AI paraphrase lại.

3.  Khách đã nhận message cùng tháng.

4.  Member tier chưa resolved nhưng message theo hạng muốn gửi.

5.  Email được dùng sai event.

6.  Quiet hour đang active.

**15.2. Resolution rule**

MessageTriggerRegistry thắng CRM content.

MessageTextImmutableSource thắng AI wording.

TierMessageEligibilityGuard thắng CRM personalization.

QuietHoursGuard / FrequencyCapGuard / DedupGuard thắng send intent.

**15.3. Blocked actions**

Nếu thiếu trigger:

1.  Không gửi tin.

2.  Không tạo CRM job.

Nếu thiếu message text source:

1.  Không render message.

2.  Không rewrite.

Nếu dedup fail:

1.  Không gửi.

2.  Log suppression.

**16. PUBLIC COMMENT VS MESSENGER PRIVATE CONFLICT CONTROL**

**16.1. Conflict examples**

1.  Public comment hỏi giá.

2.  Public comment để số điện thoại.

3.  Public comment muốn mua.

4.  Public comment hỏi bệnh.

5.  Public comment hỏi thanh toán/hóa đơn.

6.  Public comment hỏi Diamond/commission.

7.  Handoff fail nhưng template nói đã gửi.

**16.2. Resolution rule**

PublicPrivateSurfaceGuard thắng content intent.

MessengerHandoffResolver quyết định có handoff được không.

HandoffDeliveryStatusResolver quyết định có được nói “đã gửi” không.

**16.3. Blocked actions**

Public surface không được:

1.  Báo final price.

2.  Render quote.

3.  Xác nhận order.

4.  Lặp PII.

5.  Gửi payment instruction.

6.  Tư vấn health-sensitive dài.

7.  Gửi commission/referral detail.

Nếu handoff fail:

1.  Không nói đã gửi.

2.  Dùng fallback an toàn.

**17. LIVE MODERATION VS SALES CONFLICT CONTROL**

**17.1. Conflict examples**

1.  Comment chửi thề.

2.  Comment phá live.

3.  Brand attack.

4.  Spam liên tục.

5.  Comment có vẻ troll nhưng kèm mã đơn/mã lô.

6.  Comment khiếu nại thật.

**17.2. Resolution rule**

LiveAbuseClassifier / ComplaintEvidenceGuard quyết định.

Abuse rõ → no sales, no Messenger, moderation action.

Complaint thật → case/CSKH, không bỏ qua.

**17.3. Blocked actions**

Nếu abuse rõ:

1.  Không quote.

2.  Không order.

3.  Không CRM.

4.  Không handoff Messenger.

5.  Hide/no reply theo policy.

Nếu complaint thật có evidence:

1.  Không hide tùy tiện.

2.  Route case.

3.  Không upsell.

**18. COMPLETION REPORT VS MISSING EVIDENCE CONFLICT CONTROL**

**18.1. Conflict examples**

1.  Tài liệu đã viết nhưng evidence thiếu.

2.  AI trả lời tốt một lần nhưng chưa có DecisionEnvelope.

3.  UI chạy demo nhưng không có DB/audit trace.

4.  Gateway handoff hoạt động nhưng không có delivery log.

5.  Quote hiển thị nhưng không có QuoteSnapshot.

6.  Order success hiển thị nhưng không có order_code sample.

7.  CRM suppression nói đã có nhưng không có log.

8.  Owner chưa sign-off.

**18.2. Resolution rule**

Evidence Registry thắng cảm tính “đã ổn”.

CompletionGateResolver quyết định PASS/PENDING/FAIL.

OwnerSignOffResolver quyết định release approval.

**18.3. Blocked actions**

Nếu thiếu P0 evidence:

1.  Completion Report không PASS.

2.  Gateway không mở.

3.  Production Ready = NO.

4.  Release Approved = NO.

5.  Go-live Approved = NO.

Không được thay evidence bằng:

1.  Screenshot câu trả lời hay.

2.  Demo miệng.

3.  Tài liệu đã viết.

4.  UI nhìn có vẻ chạy.

5.  Log không có trace.

**19. SUPPRESSION CONTROL**

Suppression là cơ chế chặn hành động khi điều kiện không an toàn hoặc không phù hợp.

Suppression không phải lỗi.

Suppression là rule bảo vệ khách, thương hiệu và hệ thống.

**19.1. CRM Suppression**

CRM bị chặn nếu:

1.  Opt-out.

2.  Open complaint.

3.  Refund case.

4.  Payment dispute.

5.  Privacy request.

6.  Delivery issue.

7.  Health review.

8.  Counterfeit/quality case.

9.  Member dispute.

10. Commission dispute.

11. Message fatigue exceeded.

12. Quiet hour fail.

13. Missing Product Effectiveness.

14. Missing runtime member data.

15. Missing trigger.

16. Dedup fail.

**19.2. Sales Suppression**

Sales bị chặn nếu:

1.  SKU not sellable.

2.  Health unresolved.

3.  Open complaint.

4.  Payment dispute.

5.  Counterfeit case.

6.  Quote expired.

7.  Missing QuoteSnapshot.

8.  Missing CustomerConfirmation.

9.  Public surface.

10. Permission denied.

**19.3. Member Lifecycle Suppression**

Member lifecycle message bị chặn nếu:

1.  Member runtime missing.

2.  Open case.

3.  Member dispute.

4.  Amount data missing.

5.  Tier data missing.

6.  Grace status missing.

7.  Quiet hour fail.

8.  Message frequency exceeded.

**19.4. Program Suppression**

Program communication bị chặn nếu:

1.  Program inactive.

2.  SKU not active.

3.  SKU not sellable.

4.  Stock below threshold.

5.  Quote expired.

6.  Golden Hour ended.

7.  Missing early access resolver.

8.  Missing program eligibility.

9.  Missing board validation.

**19.5. Handoff Suppression**

Messenger handoff bị chặn hoặc fallback nếu:

1.  Handoff delivery fail.

2.  Meta policy not allowed.

3.  Duplicate event.

4.  Abuse comment.

5.  Missing channel context.

6.  Missing customer/session context.

7.  Missing page permission.

**20. FALLBACK CONTROL**

Fallback chỉ được dùng khi không tạo cam kết sai.

Fallback không được thay thế source-of-truth.

Fallback không được thay resolver.

Fallback không được bypass guard.

**20.1. Fallback được phép**

Fallback được phép trong các tình huống:

1.  Thiếu Product Knowledge chi tiết nhưng có thể hỏi thêm nhu cầu.

2.  Thiếu Customer Memory cụ thể nhưng có thể hỏi thăm chung.

3.  Handoff fail nhưng có thể trả public safe fallback.

4.  Tracking thiếu nhưng có thể nói fallback vùng nếu policy cho phép.

5.  Missing health detail nhưng có thể hỏi thêm trong private.

6.  Missing segment nhưng có thể hỏi thêm một câu ngắn.

7.  Missing official contact purpose nhưng có thể hỏi rõ mục đích liên hệ.

**20.2. Fallback bị cấm**

Không được fallback bằng suy đoán cho:

1.  Final price.

2.  QuoteSnapshot.

3.  Member tier.

4.  Member rights.

5.  Diamond benefit.

6.  Commission.

7.  Payment instruction.

8.  Bank account.

9.  Payment state.

10. Shipping ETA chính xác.

11. COD eligibility.

12. Sellable status.

13. Program active list.

14. Golden Hour active.

15. Early access.

16. Order state.

17. IVR result.

18. Message trigger.

19. Official phone number.

20. Scientific publication link.

21. Completion PASS.

22. Gateway PASS.

23. Production Ready.

**20.3. Fallback wording principle**

Fallback customer-facing phải:

1.  Không nói lỗi kỹ thuật.

2.  Không lộ resolver/guard.

3.  Không nói “hệ thống lỗi”.

4.  Không bịa dữ liệu.

5.  Không cam kết sai.

6.  Không làm khách hoang mang.

7.  Không làm mất vai trò tư vấn.

8.  Không chuyển trách nhiệm cho khách nếu kênh có thể xử lý private.

**21. NO-HARDCODE ENFORCEMENT**

Không được hardcode dữ liệu quyết định trong:

1.  AI prompt.

2.  Gateway template.

3.  CRM template.

4.  Landing Page.

5.  Admin UI.

6.  ADS config.

7.  MC AI script.

8.  Static content.

9.  Frontend component.

10. Worker logic.

11. Test seed dùng nhầm production.

**21.1. No-hardcode runtime data**

Không được hardcode:

1.  Giá.

2.  Discount.

3.  Member benefit.

4.  Diamond benefit.

5.  Commission.

6.  Program active status.

7.  Golden Hour session.

8.  Early access.

9.  Quote hold time nếu không từ resolver.

10. Final total.

11. Stock.

12. Sellable status.

13. Bank account.

14. Payment instruction.

15. Payment reference.

16. Shipping fee.

17. ETA.

18. COD eligibility.

19. Order state.

20. PAID state.

21. IVR interpretation.

22. Customer tier.

23. Customer revenue.

24. Amount to next tier.

25. Grace period.

26. CRM trigger.

27. Message text.

28. Official phone.

29. Publication link.

30. Gateway PASS.

31. Completion PASS.

32. Production Ready.

**21.2. No-hardcode message and content**

Không được hardcode hoặc rewrite:

1.  Message trigger.

2.  Message text approved.

3.  Tier-specific message.

4.  Birthday message.

5.  Golden Hour message.

6.  Diamond commission message.

7.  Policy link.

8.  Scientific evidence wording nếu source yêu cầu.

9.  Official contact wording.

10. Claim-sensitive wording.

Content block chỉ render từ biến đã approved.

**21.3. No-hardcode business decision**

Không được hardcode:

1.  SKU 24/7 active list.

2.  SKU Golden Hour active list.

3.  Daily Live Product Board.

4.  Product triad selection.

5.  Segment recommendation.

6.  Affiliate eligibility.

7.  Distributor routing.

8.  Suppression.

9.  Dedup.

10. Outcome.

Các quyết định này phải qua resolver.

**22. CACHE / STALE DATA CONTROL**

Cache không được trở thành source-of-truth.

Cache chỉ dùng nếu:

1.  Có TTL.

2.  Có version.

3.  Có source reference.

4.  Không ảnh hưởng P0 runtime decision.

5.  Không stale.

Dữ liệu stale phải bị chặn cho:

1.  Quote.

2.  Price.

3.  Program active status.

4.  Member benefit.

5.  Diamond bind.

6.  Availability.

7.  Payment state.

8.  Shipping state.

9.  Customer memory.

10. Message trigger.

11. Daily Live Product Board.

12. Evidence status.

Nếu stale:

Revalidate  
hoặc  
Block  
hoặc  
PENDING_REVIEW

Không dùng stale để chốt.

**23. IDEMPOTENCY / DUPLICATE CONTROL**

Idempotency bắt buộc cho:

1.  Webhook.

2.  Comment event.

3.  Messenger handoff.

4.  Quote creation.

5.  Order creation.

6.  Payment callback.

7.  Bank webhook.

8.  CRM message job.

9.  Commission event.

10. Member lifecycle job.

11. IVR result.

12. Production planning signal.

Duplicate không được tạo:

1.  Nhiều public reply.

2.  Nhiều Messenger handoff.

3.  Nhiều QuoteSnapshot.

4.  Nhiều order.

5.  Nhiều CRM message.

6.  Nhiều commission.

7.  Nhiều outcome log sai.

8.  Nhiều IVR state update.

**24. FUTURE EXTENSION CONTROL**

Future extension không được hiểu là active scope.

Các nội dung sau chỉ được kích hoạt khi có owner approval và source governance mới:

1.  International shipping.

2.  International payment.

3.  New distributor policy.

4.  New commission model.

5.  New affiliate tier.

6.  New health claim.

7.  New product activation rule.

8.  New CRM channel.

9.  New IVR sales/CRM use case.

10. New product category.

Nếu chưa owner-approved:

1.  AI không được hứa.

2.  CRM không được gửi.

3.  Landing Page không được hiển thị.

4.  Gateway không được route như active.

5.  Dev không được tự bật feature.

6.  ADS không được chạy offer.

**25. PART 3 DONE GATE**

PHẦN 3/4 đạt khi:

1.  Runtime result status model đã khóa.

2.  AI action control đã khóa.

3.  CRM action control đã khóa.

4.  Gateway action control đã khóa.

5.  Landing/ADS/MC AI control đã khóa.

6.  Admin UI control đã khóa.

7.  Cross-domain priority order đã khóa.

8.  Customer identity conflict đã khóa.

9.  Customer memory conflict đã khóa.

10. Member lifecycle conflict đã khóa.

11. Diamond/affiliate/commission conflict đã khóa.

12. Recommendation vs Availability conflict đã khóa.

13. Program activation vs stock conflict đã khóa.

14. Quote/order conflict đã khóa.

15. Payment proof vs Payment Core conflict đã khóa.

16. Shipping tracking vs fallback conflict đã khóa.

17. Health intent vs sales intent conflict đã khóa.

18. Brand science vs Claim Policy conflict đã khóa.

19. Message trigger vs CRM content conflict đã khóa.

20. Public comment vs Messenger private conflict đã khóa.

21. Live moderation vs sales conflict đã khóa.

22. Completion vs missing evidence conflict đã khóa.

23. Suppression control đã khóa.

24. Fallback control đã khóa.

25. No-hardcode enforcement đã khóa.

26. Cache/stale data control đã khóa.

27. Idempotency/duplicate control đã khóa.

28. Future extension control đã khóa.

29. Không consumer nào được tự suy luận.

30. Không fallback nào được dùng để bypass P0 runtime source.

31. Không evidence thì không release.

32. Gateway vẫn BLOCKED.

33. Completion Report vẫn PENDING_EVIDENCE.

34. Production Ready vẫn NO.

**26. TRẠNG THÁI SAU PHẦN 3/4**

MASTER-02 PHẦN 3/4 = COMPLETED  
MASTER-02 CLEAN FINAL = IN_PROGRESS  
GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**27. PHẦN TIẾP THEO**

Phần tiếp theo:

PHẦN 4/4 — FINAL DONE GATE / SMOKE MAPPING / RELEASE CONTROL / MASTER-02 FINAL CONCLUSION

PHẦN 4/4 sẽ khóa:

1\. Final Done Gate theo 16 domain  
2. Smoke mapping bắt buộc  
3. Evidence mapping bắt buộc  
4. Completion Report condition  
5. Gateway transition condition  
6. Production Ready condition  
7. Release / Go-live boundary  
8. Pack handoff  
9. MASTER-02 final status

**PHẦN 4/4 — FINAL DONE GATE / SMOKE MAPPING / RELEASE CONTROL / MASTER-02 FINAL CONCLUSION**

**0. MỤC ĐÍCH CỦA PHẦN 4/4**

PHẦN 4/4 khóa điều kiện hoàn tất cuối cùng của MASTER-02.

Nếu PHẦN 1/4 khóa nguyên tắc dependency, PHẦN 2/4 khóa registry theo business domain, PHẦN 3/4 khóa runtime control, conflict, suppression, fallback và no-hardcode, thì PHẦN 4/4 khóa:

1.  Done Gate cuối cho từng domain.

2.  Smoke mapping bắt buộc.

3.  Evidence mapping bắt buộc.

4.  Điều kiện Completion Report.

5.  Điều kiện Gateway transition.

6.  Điều kiện Production Ready.

7.  Điều kiện Release / Go-live.

8.  Pack handoff.

9.  Trạng thái cuối của MASTER-02.

10. Kết luận final của MASTER-02.

PHẦN 4/4 không xác nhận hệ thống đã triển khai xong.

PHẦN 4/4 không xác nhận Gateway được mở.

PHẦN 4/4 không xác nhận production-ready.

PHẦN 4/4 chỉ xác nhận MASTER-02 đã hoàn tất vai trò **Cross-Pack Dependency Governance** nếu các domain, source, owner, consumer, resolver, blocked-if-missing, evidence và done gate đã được khóa đầy đủ.

**1. FINAL DONE GATE MODEL**

MASTER-02 chỉ đạt CLEAN FINAL ở tầng governance khi thỏa đủ 10 điều kiện sau.

**1.1. Gate 1 — Business Domain Coverage**

MASTER-02 phải bao phủ đủ 16 domain chính:

01\. Governance / Source-of-Truth  
02. Product Knowledge / Claim / Brand / Scientific Proof  
03. Customer Identity / Customer Memory  
04. Segment Recommendation / Product Recommendation  
05. CRM 12-Month / Message Trigger / Suppression  
06. Member Lifecycle / Rights / Downgrade / Dispute  
07. Diamond / Affiliate / Entrepreneurship / Distributor Boundary  
08. Pricing / Program / 24/7 / Golden Hour / QuoteSnapshot  
09. Program / Sellable / Product Activation / Production Signal  
10. Payment / Bank Transfer / Accounting Review  
11. Shipping / Tracking / ETA / COD  
12. Order / OrderDraft / CustomerConfirmation / IVR  
13. Gateway / Public Comment / Messenger Handoff / Moderation  
14. Official Contact / Phone Number Registry  
15. Health Boundary / Complaint / Priority Conflict  
16. Evidence / Completion Report / Gateway Gate / Security

Nếu thiếu bất kỳ domain nào, MASTER-02 không được gọi CLEAN FINAL.

**1.2. Gate 2 — Source ID Coverage**

Mỗi domain phải có Source ID rõ ràng.

Source ID phải xác định được:

1.  Source nào là nguồn sự thật.

2.  Source nào là runtime decision.

3.  Source nào là approved content.

4.  Source nào là evidence.

5.  Source nào là release gate.

Không được để domain dùng source mơ hồ như:

AI tự biết  
CRM tự biết  
Dev tự xử lý  
Frontend tự tính  
Landing Page tự hiển thị  
Admin tự xác nhận  
Gateway tự route

Nếu source không rõ, domain không đạt Done Gate.

**1.3. Gate 3 — Owner Core Coverage**

Mỗi domain phải có Owner Core / Owner Pack rõ ràng.

Owner Core quyết định nghiệp vụ.

Consumer không được vượt quyền owner.

Ví dụ:

Customer Profile Core quyết định customer identity.  
Customer Memory Core quyết định lịch sử mua.  
Member Lifecycle Core quyết định hạng, duy trì, ân hạng, hạ hạng.  
Commerce Pricing Core quyết định giá.  
Program Policy Core quyết định 24/7 và Giờ Vàng.  
Commerce Availability Core quyết định sellable.  
Payment Core quyết định thanh toán.  
Shipping Core quyết định vận chuyển.  
Order Core quyết định order state.  
Gateway Pack quyết định normalized event / handoff status.  
Evidence Registry quyết định evidence.  
Security Pack quyết định permission / audit.

Nếu owner không rõ, domain không đạt Done Gate.

**1.4. Gate 4 — Consumer Boundary Coverage**

Mỗi domain phải khóa consumer được làm gì và không được làm gì.

Consumer không được biến dữ liệu tiêu thụ thành source-of-truth mới.

Các consumer chính:

AI Advisor  
Gateway  
CRM  
Messaging  
Landing Page  
ADS  
MC AI  
Admin UI  
Order Core  
Payment Core  
Shipping Core  
Evidence Pack  
Completion Report  
BI / Dashboard

Nếu consumer có thể tự tính, tự quyết, tự ghi trạng thái hoặc tự bypass owner core, domain không đạt Done Gate.

**1.5. Gate 5 — Runtime Resolver / Guard Coverage**

Mỗi domain P0 phải có resolver / guard bắt buộc.

Các quyết định sau không được chạy nếu thiếu resolver/guard:

1.  Customer identity.

2.  Customer memory.

3.  Member lifecycle.

4.  Diamond/referral.

5.  CRM eligibility.

6.  Message trigger.

7.  Product recommendation.

8.  Product sellable.

9.  Program activation.

10. Pricing.

11. QuoteSnapshot.

12. OrderDraft.

13. Payment.

14. Shipping.

15. Public/private handoff.

16. Health boundary.

17. Official contact.

18. Moderation.

19. Evidence.

20. Permission/audit.

Nếu domain có runtime decision nhưng không có resolver/guard, domain không đạt Done Gate.

**1.6. Gate 6 — Blocked-if-missing Coverage**

Mỗi domain phải có blocked-if-missing.

Nguyên tắc:

Thiếu source → không khẳng định.  
Thiếu resolver → không hứa.  
Thiếu guard → không hành động.  
Thiếu evidence → không release.  
Thiếu permission → không protected action.  
Thiếu owner approval → không active scope.

Nếu domain thiếu blocked-if-missing, domain không đạt Done Gate.

**1.7. Gate 7 — Evidence Requirement Coverage**

Mỗi domain P0 phải có evidence requirement.

Evidence không được là cảm tính.

Evidence không được chỉ là câu trả lời nghe đúng.

Evidence phải có trace, log, snapshot, audit hoặc record phù hợp.

Các evidence bắt buộc có thể gồm:

DecisionEnvelope  
Resolver trace  
Guard trace  
QuoteSnapshot  
OrderDraft  
CustomerConfirmation  
order_code  
Handoff delivery log  
CRM job log  
Message send log  
Dedup log  
Outcome log  
Payment reference  
Accounting review audit  
Shipping tracking record  
Moderation action log  
Completion gate evidence  
Owner sign-off

Nếu domain P0 không có evidence requirement, domain không đạt Done Gate.

**1.8. Gate 8 — No-hardcode Coverage**

MASTER-02 phải chặn hardcode trong toàn hệ.

Không được hardcode:

1.  Giá.

2.  Discount.

3.  Member benefit.

4.  Diamond benefit.

5.  Commission.

6.  Program active status.

7.  Golden Hour session.

8.  Early access.

9.  Quote hold time nếu không từ resolver.

10. Final total.

11. Stock.

12. Sellable status.

13. Bank account.

14. Payment instruction.

15. Payment reference.

16. Shipping fee.

17. ETA.

18. COD eligibility.

19. Order state.

20. PAID state.

21. IVR interpretation.

22. Customer tier.

23. Customer revenue.

24. Amount to next tier.

25. Grace period.

26. CRM trigger.

27. Message text.

28. Official phone.

29. Publication link.

30. Gateway PASS.

31. Completion PASS.

32. Production Ready.

Nếu tài liệu cho phép hardcode bất kỳ dữ liệu runtime quyết định nào, MASTER-02 không đạt Clean Final.

**1.9. Gate 9 — Release State Integrity**

MASTER-02 phải giữ đúng trạng thái toàn hệ:

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

MASTER-02 không được tự chuyển trạng thái hệ thống.

Nếu MASTER-02 làm người đọc hiểu rằng viết xong tài liệu là được mở Gateway hoặc go-live, MASTER-02 không đạt Clean Final.

**1.10. Gate 10 — Pack Handoff Coverage**

MASTER-02 phải chỉ rõ pack chi tiết chịu trách nhiệm triển khai sâu.

Không được để dev tự đoán.

Mỗi domain phải map về các pack như:

FILE 01 — Parent Logic  
FILE 04 — Resolver / Guard / Runtime Contract  
FILE 05 — Implementation Layer  
FILE 07 — Common Content Blocks  
FILE 09 — Test Matrix  
FILE 10 — Situation Registry  
FILE 12 — Human-Level Sales Behavior  
Commerce Pricing Core  
Payment Core  
Shipping Core  
Order Core  
Gateway Pack  
CRM / Messaging Pack  
Evidence Pack  
Security Pack  
Operational Core  
Production Planning Pack

Nếu domain không có pack handoff, domain không đạt Done Gate.

**2. FINAL DONE GATE THEO 16 DOMAIN**

**2.1. DEP-DOM-01-GOV — Governance / Source-of-Truth**

PASS khi:

1.  Source-of-Truth rõ.

2.  Owner core rõ.

3.  Consumer boundary rõ.

4.  Runtime source không bị consumer override.

5.  Evidence source rõ.

6.  Release state không bị tự chuyển.

7.  Protected operations đi qua security/audit.

8.  Completion Report không PASS nếu thiếu evidence.

9.  Gateway vẫn BLOCKED nếu P0 evidence thiếu.

10. Không có source song song.

FAIL nếu:

1.  Pack chi tiết tự tạo source.

2.  Dev tự suy luận rule.

3.  Gateway tự mở.

4.  Completion tự PASS.

5.  Production Ready tự YES.

**2.2. DEP-DOM-02-PROD-CLAIM-BRAND — Product / Claim / Brand / Science**

PASS khi:

1.  Product Knowledge là source chính.

2.  Claim Whitelist kiểm soát public wording.

3.  Brand Voice giữ đúng “Ngon như Mẹ nấu — thương ngay từ vị đầu tiên”.

4.  Scientific Evidence chỉ dùng khi approved.

5.  Publication link chỉ từ approved resolver.

6.  Product Effectiveness có trong tư vấn, CRM, combo, proposal khi yêu cầu.

7.  Không dùng mã SKU nội bộ với khách.

8.  Không thuốc hóa sản phẩm.

9.  Không bịa link/kết luận khoa học.

10. Không bán nguyên liệu/cây giống nếu không thuộc scope.

FAIL nếu:

1.  AI tự tạo claim.

2.  Landing Page publish claim ngoài whitelist.

3.  CRM gợi ý sản phẩm thiếu Product Effectiveness.

4.  ADS dùng claim điều trị.

5.  AI nói bài báo khoa học khi thiếu source.

6.  Sản phẩm bị gọi bằng SKU nội bộ.

**2.3. DEP-DOM-03-CUSTOMER — Customer Identity / Customer Memory**

PASS khi:

1.  Customer identity resolved trước khi cá nhân hóa.

2.  Customer stage rõ: new / returning / member / Diamond.

3.  Customer memory không bị bịa.

4.  Last purchase chỉ nói khi resolver trả.

5.  Last recipient chỉ nói khi source có.

6.  Khách cũ được hỏi thăm trước khi bán tiếp.

7.  Negative feedback mở care flow.

8.  Open case chặn sales/CRM.

9.  Customer history không lấy từ chat không xác thực.

10. Quote benefit không áp nếu identity chưa rõ.

FAIL nếu:

1.  AI bịa khách cũ.

2.  AI bịa hạng.

3.  AI bịa lịch sử mua.

4.  AI bán ngay khi khách cũ quay lại.

5.  CRM gửi lifecycle khi chưa xác định khách.

6.  Open case vẫn upsell.

**2.4. DEP-DOM-04-RECOMMENDATION — Segment / Product Recommendation**

PASS khi:

1.  Product recommendation đi qua Product Knowledge.

2.  Deep recommendation có 3 trụ: mùa / chức năng / bổ dưỡng.

3.  Family add-on hoạt động theo ngữ cảnh.

4.  Segment recommendation hỗ trợ văn phòng, sinh viên, du học sinh, Việt kiều, công ty, trường học, bệnh viện, cơ quan, quà tặng.

5.  Product Effectiveness có từng item.

6.  Dietary/allergy/health guard pass.

7.  Availability pass nếu có ý định bán.

8.  QuoteSnapshot có nếu báo giá.

9.  Không ép combo.

10. Không dùng một bộ gợi ý cho mọi khách.

FAIL nếu:

1.  AI gợi ý ngẫu nhiên.

2.  Gợi ý SKU not sellable.

3.  Gợi ý sai chay/mặn.

4.  Gợi ý sản phẩm dị ứng.

5.  Gợi ý không có Product Effectiveness.

6.  Báo giá khi thiếu quote.

7.  Segment công ty bị route nhầm đại lý.

**2.5. DEP-DOM-05-CRM-MESSAGE — CRM 12-Month / Message Trigger / Suppression**

PASS khi:

1.  CRM là lifecycle 12 tháng.

2.  CRM trigger rõ.

3.  Message text immutable.

4.  Không tự tạo trigger.

5.  Không gửi sai hạng.

6.  Không gửi trùng trong tháng nếu rule cấm.

7.  Cross-channel dedup hoạt động.

8.  Quiet hours pass.

9.  Frequency cap pass.

10. Opt-out chặn gửi.

11. Open case chặn gửi.

12. Product recommendation trong CRM có Product Effectiveness.

13. CRM job log có evidence.

14. Message send log có evidence.

FAIL nếu:

1.  CRM gửi khi opt-out.

2.  CRM gửi khi complaint open.

3.  AI rewrite message text.

4.  Gửi sai hạng.

5.  Gửi sai trigger.

6.  Gửi trùng đa kênh.

7.  CRM bịa lịch sử mua.

8.  CRM bịa quyền lợi.

**2.6. DEP-DOM-06-MEMBER — Member Lifecycle / Rights / Downgrade / Dispute**

PASS khi:

1.  Member tier từ runtime.

2.  Doanh số tích lũy từ runtime.

3.  Amount to maintain từ runtime.

4.  Amount to next tier từ runtime.

5.  Days to cycle end từ runtime.

6.  Grace status từ runtime.

7.  Upgrade / maintain / downgrade từ Member Lifecycle Core.

8.  Downgrade safe tone.

9.  Member dispute mở case.

10. Quote benefit chỉ áp khi QuoteSnapshot ghi nhận.

11. Member outcome được log.

12. CRM member lifecycle bị suppress khi open case.

FAIL nếu:

1.  AI tự tính hạng.

2.  CRM tự nói số còn thiếu.

3.  AI tự hạ hạng.

4.  AI dọa khách hạ hạng.

5.  Member dispute vẫn upsell.

6.  Quote hiển thị benefit không có runtime.

**2.7. DEP-DOM-07-DIAMOND-PARTNER — Diamond / Affiliate / Distributor Boundary**

PASS khi:

1.  Diamond identity từ runtime.

2.  Diamond link bind pass mới áp quyền lợi.

3.  Buyer link invalid vẫn mua thường được nếu SKU sellable.

4.  Commission chỉ ghi khi order eligible.

5.  Commission không hardcode.

6.  Self-purchase guard áp dụng nếu policy yêu cầu.

7.  Affiliate/Diamond tách khỏi đại lý/nhà phân phối.

8.  Distributor/wholesale route đúng policy.

9.  Official contact đúng.

10. Commission dispute mở case.

FAIL nếu:

1.  AI gộp Diamond với đại lý.

2.  AI hardcode hoa hồng.

3.  AI nói quyền lợi Diamond khi bind chưa pass.

4.  Commission tính trước order eligible.

5.  Đại lý/mua sỉ bị xử lý như khách lẻ.

6.  Diamond hỏi khởi nghiệp bị trả lời vòng vo.

**2.8. DEP-DOM-08-PRICING-PROGRAM — Pricing / 24-7 / Golden Hour / QuoteSnapshot**

PASS khi:

1.  Giá từ Pricing Core.

2.  24/7 từ Program24_7Resolver.

3.  Giờ Vàng từ GoldenHourResolver.

4.  Early access từ EarlyAccessResolver.

5.  QuoteSnapshot có trước báo giá.

6.  Quote hold time từ QuoteLockResolver.

7.  Policy priority từ Runtime Core.

8.  Không cộng dồn quyền lợi tùy tiện.

9.  Quote expired phải revalidate.

10. Public comment không báo giá.

11. Order không tạo từ quote hết hạn.

FAIL nếu:

1.  AI tự tính giá.

2.  AI tự nói Giờ Vàng active.

3.  AI tự nói quyền mua sớm.

4.  CRM gửi giá thiếu quote.

5.  Quote hết hạn vẫn tạo order.

6.  Discount 24/7 tính từ đơn chưa hợp lệ.

7.  Policy priority bị consumer tự chọn.

**2.9. DEP-DOM-09-ACTIVATION — Program / Sellable / Product Activation / Production Signal**

PASS khi:

1.  SKU chỉ mở bán khi sellable.

2.  Thành phẩm nhập kho hợp lệ.

3.  stock_available \> 0.

4.  listed_price_status = ACTIVE.

5.  Không quality hold.

6.  Không recall hold.

7.  Không sale lock.

8.  Không channel block.

9.  SKU not sellable tự ngưng bán.

10. 24/7 active list từ resolver.

11. Golden Hour active list từ resolver.

12. Daily Live Product Board được validate.

13. MC AI không nói SKU ngoài board.

14. ADS/CRM/Landing không hardcode active SKU.

15. Sales / stock movement tạo Production Planning Signal.

16. Production signal không tự thành production order.

FAIL nếu:

1.  Bán SKU hết hàng.

2.  Bán SKU hold/recall.

3.  Báo quote SKU không sellable.

4.  MC AI nói SKU ngoài board.

5.  Landing Page hardcode Giờ Vàng.

6.  ADS chạy SKU không active.

7.  Production order tự tạo từ signal chưa review.

**2.10. DEP-DOM-10-PAYMENT — Payment / Bank Transfer / Accounting Review**

PASS khi:

1.  Payment method từ Payment Core.

2.  Bank account từ Bank Registry.

3.  Bank transfer có payment_reference.

4.  VietQR nếu có phải từ Payment Instruction.

5.  Bank transfer vào Accounting Queue.

6.  Payment proof không tự PAID.

7.  Manual reconciliation có audit.

8.  Bank webhook nếu có được trace.

9.  PAID chỉ khi Payment Core / Accounting Review xác nhận.

10. AI/Gateway/CRM không xác nhận thanh toán thay core.

FAIL nếu:

1.  Hardcode bank account.

2.  Thiếu payment_reference.

3.  AI nói đã thanh toán vì khách gửi ảnh.

4.  Admin UI set PAID không audit.

5.  Accounting queue thiếu.

6.  Fulfillment chạy khi payment pending và policy yêu cầu paid.

**2.11. DEP-DOM-11-SHIPPING — Shipping / Tracking / ETA / COD**

PASS khi:

1.  Shipping eligibility từ Shipping Core.

2.  COD eligibility từ Shipping Core.

3.  Shipping fee từ resolver.

4.  Tracking từ carrier/core.

5.  ETA từ resolver.

6.  Fallback vùng chỉ dùng khi policy cho phép.

7.  Không hỏi lại địa chỉ nếu order đã có shipping info.

8.  Không bịa carrier status.

9.  Không hứa giao quốc tế nếu không active scope.

10. MAS-SMK-006 pass.

FAIL nếu:

1.  AI tự hứa ETA.

2.  Landing Page hardcode miễn phí ship.

3.  CRM gửi tracking giả.

4.  Hỏi lại địa chỉ đã có.

5.  Hứa COD khi chưa eligible.

6.  Shipping fee từ frontend text.

**2.12. DEP-DOM-12-ORDER-IVR — Order / OrderDraft / CustomerConfirmation / IVR**

PASS khi:

1.  QuoteCart được tạo đúng.

2.  QuoteSnapshot có trước quote.

3.  OrderDraft là form xác nhận.

4.  Khách cũ có prefill nếu policy cho phép.

5.  CustomerConfirmation bắt buộc.

6.  Order tạo từ quote còn hiệu lực.

7.  Order Success chỉ khi có order_code.

8.  Duplicate không tạo nhiều order.

9.  IVR chỉ nhận queue từ Order Core.

10. IVR gửi result về Order Core.

11. IVR không đổi order state.

12. Technical error không tính là no-answer.

FAIL nếu:

1.  AI tạo order khi khách chưa xác nhận.

2.  Public comment tạo order.

3.  Order success thiếu order_code.

4.  Quote expired vẫn order.

5.  SIM Gateway tự cập nhật order.

6.  Duplicate webhook tạo nhiều order.

**2.13. DEP-DOM-13-GATEWAY-HANDOFF-MODERATION — Gateway / Public Comment / Handoff / Moderation**

PASS khi:

1.  Channel context resolved.

2.  Public/private surface resolved.

3.  Public hỏi giá không báo giá.

4.  Public muốn mua không xác nhận đơn.

5.  Public để PII không lặp PII.

6.  Public payment/invoice không gửi instruction.

7.  Public health không tư vấn dài.

8.  Handoff success mới nói đã gửi.

9.  Handoff fail không nói đã gửi.

10. Không kêu khách tự inbox nếu system handoff có thể chạy.

11. Context page/live/comment/attribution được giữ.

12. Duplicate webhook không tạo duplicate reply.

13. Abuse rõ không handoff.

14. Complaint thật route case.

FAIL nếu:

1.  Public final price.

2.  Public order confirmation.

3.  Public lặp PII.

4.  Handoff fail vẫn nói đã gửi.

5.  Comment troll được kéo Messenger.

6.  Gateway tự quote/order/CRM.

7.  Mất attribution sau handoff.

**2.14. DEP-DOM-14-CONTACT — Official Contact / Phone Number Registry**

PASS khi:

1.  Số điện thoại từ Official Contact Registry.

2.  Contact purpose resolved.

3.  Visit request route đúng.

4.  Company/leader contact route đúng.

5.  Personal leader phone blocked.

6.  Distributor/wholesale route đúng.

7.  Affiliate không route nhầm distributor.

8.  Contact surface pass.

9.  Không có số ngoài registry.

10. Không hardcode contact trong template/static page.

FAIL nếu:

1.  AI tự bịa số.

2.  AI gửi số cá nhân lãnh đạo.

3.  Đại lý/affiliate route sai.

4.  Landing Page hardcode contact.

5.  Contact không đúng mục đích.

**2.15. DEP-DOM-15-HEALTH-CASE-CONFLICT — Health / Complaint / Priority Conflict**

PASS khi:

1.  Khách không nêu bệnh thì AI không tự hỏi bệnh.

2.  Khách nêu bệnh thì HealthSafetyGuard chạy.

3.  Health unresolved chặn quote/order.

4.  Không treatment claim.

5.  Public health-sensitive kéo private.

6.  Allergy/dietary guard hoạt động.

7.  Complaint chặn CRM.

8.  Refund chặn upsell.

9.  Privacy request chặn CRM.

10. Payment dispute chặn sales.

11. Counterfeit mở case.

12. Member dispute mở case.

13. Priority conflict thắng sales.

FAIL nếu:

1.  AI tự hỏi bệnh khi khách không nêu.

2.  AI quote khi health unresolved.

3.  AI nói chữa bệnh.

4.  CRM gửi khi complaint open.

5.  Member dispute vẫn upsell.

6.  Counterfeit xử lý như đổi trả thường khi chưa xác minh.

**2.16. DEP-DOM-16-EVIDENCE-SECURITY — Evidence / Completion / Gateway / Security**

PASS khi:

1.  Evidence Registry đầy đủ.

2.  Completion gates có status.

3.  DecisionEnvelope sample có.

4.  Resolver trace có.

5.  Guard trace có.

6.  Handoff delivery log có.

7.  QuoteSnapshot sample có.

8.  OrderDraft sample có.

9.  CustomerConfirmation sample có.

10. order_code sample có.

11. CRM suppression evidence có.

12. Duplicate/idempotency evidence có.

13. MC AI board/script evidence có nếu scope có.

14. ROAS internal-only evidence có nếu scope có.

15. Permission/audit evidence có.

16. Owner sign-off có.

17. Gateway transition chỉ khi P0 pass.

FAIL nếu:

1.  Completion PASS thiếu evidence.

2.  Gateway mở khi P0 pending/fail.

3.  Screenshot thay DecisionEnvelope.

4.  Protected action thiếu permission/audit.

5.  Owner chưa sign-off.

6.  Production Ready tự YES.

**3. SMOKE MAPPING BẮT BUỘC**

MASTER-02 khóa các smoke group bắt buộc sau.

**3.1. MAS-SMK-001 — Source-of-Truth / Owner / Consumer Boundary**

**Mục tiêu**

Chứng minh consumer không tự tạo source-of-truth.

**Domain liên quan**

DEP-DOM-01  
Tất cả domain còn lại

**Expected Result**

Mọi consumer đọc từ owner core / resolver.

**Fail nếu**

1.  AI tự tính.

2.  CRM tự gửi quyền lợi.

3.  Gateway tự order.

4.  UI tự set state.

5.  Frontend hardcode runtime data.

**3.2. MAS-SMK-002 — Product / Claim / Brand / Science**

**Mục tiêu**

Chứng minh tư vấn sản phẩm đúng Product Knowledge, Claim Policy, Brand Voice và Scientific Evidence.

**Expected Result**

1.  Product public name đúng.

2.  Product Effectiveness có.

3.  ClaimGuard pass.

4.  Không thuốc hóa.

5.  Science proof dùng approved source.

6.  “Ngon như Mẹ nấu — thương ngay từ vị đầu tiên” dùng đúng ngữ cảnh.

**Fail nếu**

1.  Claim điều trị.

2.  Bịa bài báo.

3.  Thiếu Product Effectiveness.

4.  Dùng SKU nội bộ.

5.  Hạ thấp science proof thành tài liệu nội bộ.

**3.3. MAS-SMK-003 — Customer Identity / Customer Memory**

**Mục tiêu**

Chứng minh AI biết khách là ai và khách cũ được hỏi thăm trước khi bán tiếp.

**Expected Result**

1.  New customer không bị cá nhân hóa giả.

2.  Returning customer được care before sale.

3.  Last purchase đúng.

4.  Last recipient đúng nếu có.

5.  Negative feedback mở care flow.

6.  Open case chặn sales.

**Fail nếu**

1.  Bịa lịch sử mua.

2.  Bán ngay cho khách cũ.

3.  Nhắc sai sản phẩm cũ.

4.  Upsell khi khách chưa hài lòng.

**3.4. MAS-SMK-004 — CRM 12-Month / Message Trigger / Suppression**

**Mục tiêu**

Chứng minh CRM lifecycle, message trigger và suppression hoạt động đúng.

**Expected Result**

1.  CRM D0/D7/D21/M7/M12 đúng trigger.

2.  Message text không bị rewrite.

3.  Đúng hạng thành viên.

4.  Không gửi trùng tháng.

5.  Opt-out suppress.

6.  Open case suppress.

7.  Quiet hour respected.

8.  Product Effectiveness có trong recommendation.

**Fail nếu**

1.  CRM gửi sai trigger.

2.  CRM gửi sai hạng.

3.  CRM bịa history.

4.  CRM gửi khi opt-out/open case.

5.  CRM thiếu Product Effectiveness.

**3.5. MAS-SMK-005 — Member Lifecycle / Rights / Downgrade / Dispute**

**Mục tiêu**

Chứng minh member lifecycle chạy theo runtime.

**Expected Result**

1.  Member tier đúng.

2.  Maintain amount đúng.

3.  Upgrade amount đúng.

4.  Grace period đúng.

5.  Downgrade safe.

6.  Dispute opens case.

7.  Outcome logged.

**Fail nếu**

1.  AI tự tính hạng.

2.  AI tự nói còn thiếu.

3.  Hạ hạng dọa khách.

4.  Dispute vẫn upsell.

5.  Quote benefit không có runtime.

**3.6. MAS-SMK-006 — Recommendation / Segment / Product Triad**

**Mục tiêu**

Chứng minh gợi ý sản phẩm theo 3 trụ, người thân và segment.

**Expected Result**

1.  Có seasonal product.

2.  Có functional product.

3.  Có nourishing product.

4.  Có family add-on nếu context có.

5.  Office/student/overseas/company/school/hospital scenarios pass.

6.  Product Effectiveness per item.

7.  Availability guard pass.

**Fail nếu**

1.  Gợi ý ngẫu nhiên.

2.  Cùng một bộ sản phẩm cho mọi khách.

3.  Không có 3 trụ.

4.  SKU not sellable.

5.  Không claim guard.

6.  Báo giá thiếu QuoteSnapshot.

**3.7. MAS-SMK-007 — Diamond / Affiliate / Distributor / Wholesale**

**Mục tiêu**

Chứng minh Diamond, affiliate, distributor, wholesale được phân luồng đúng.

**Expected Result**

1.  Diamond resolved.

2.  Diamond bind pass.

3.  Invalid bind vẫn mua thường được.

4.  Commission only after eligible order.

5.  Affiliate không nhầm distributor.

6.  Distributor/wholesale contact route đúng.

7.  No hardcoded commission.

**Fail nếu**

1.  Hardcode hoa hồng.

2.  Tính commission trước order eligible.

3.  Diamond hỏi affiliate bị route đại lý.

4.  Mua số lượng lớn tự xem là distributor.

**3.8. MAS-SMK-008 — Pricing / 24-7 / Golden Hour / QuoteSnapshot**

**Mục tiêu**

Chứng minh giá và chương trình đi qua runtime.

**Expected Result**

1.  QuoteSnapshot có trước báo giá.

2.  24/7 initial 9%.

3.  24/7 \<50 sales → 12%.

4.  24/7 \>=50 sales → 9%.

5.  Golden Hour active từ resolver.

6.  Early access đúng hạng.

7.  Quote hold 5 phút Giờ Vàng.

8.  Quote hold 15 phút 24/7.

9.  Quote expired revalidate.

10. Public không báo giá.

**Fail nếu**

1.  AI tự tính giá.

2.  Public final price.

3.  Quote thiếu snapshot.

4.  Giờ Vàng active bị bịa.

5.  Quote hết hạn vẫn order.

**3.9. MAS-SMK-009 — Program / Sellable / Product Activation / Production Signal**

**Mục tiêu**

Chứng minh quy tắc mở bán, ngưng bán, active SKU và production signal.

**Expected Result**

1.  Sellable gate pass.

2.  Out of stock auto stop.

3.  Quality hold blocks sale.

4.  Recall hold blocks sale.

5.  Listed price active required.

6.  24/7 active SKU list from resolver.

7.  Golden Hour active SKU list from resolver.

8.  Daily Live Board validation.

9.  MC AI no non-board SKU.

10. Production planning signal logged.

**Fail nếu**

1.  Bán SKU not sellable.

2.  Báo quote SKU hold.

3.  MC AI nói SKU ngoài board.

4.  ADS chạy SKU không active.

5.  Landing hardcode active list.

6.  Production order tự tạo từ signal.

**3.10. MAS-SMK-010 — Payment / Bank Transfer / Accounting Review**

**Mục tiêu**

Chứng minh payment đi qua Payment Core và Accounting Review.

**Expected Result**

1.  Payment eligibility pass.

2.  Bank account from registry.

3.  Unique payment_reference.

4.  Bank transfer tagged.

5.  Accounting queue record.

6.  Payment proof attached if allowed.

7.  Manual reconciliation audit.

8.  AI no paid before Core confirms.

**Fail nếu**

1.  Hardcode bank account.

2.  Thiếu payment_reference.

3.  AI nói PAID vì khách gửi ảnh.

4.  Admin set PAID thiếu audit.

5.  Payment queue thiếu.

**3.11. MAS-SMK-011 — Shipping / Tracking / ETA / COD**

**Mục tiêu**

Chứng minh shipping theo Shipping Core.

**Expected Result**

1.  Shipping eligibility pass.

2.  COD eligibility pass.

3.  Shipping fee from core.

4.  Tracking link returned.

5.  Fallback ETA by region if allowed.

6.  No fake tracking status.

7.  No address re-ask when order has info.

**Fail nếu**

1.  AI tự hứa ETA.

2.  Landing hardcode free ship.

3.  CRM gửi tracking giả.

4.  Hỏi lại địa chỉ đã có.

5.  Hứa COD khi chưa eligible.

**3.12. MAS-SMK-012 — Order / OrderDraft / CustomerConfirmation / IVR**

**Mục tiêu**

Chứng minh sales-to-order đi đúng gate.

**Expected Result**

1.  QuoteCart sample.

2.  QuoteSnapshot sample.

3.  OrderDraft form.

4.  Prefill old customer if policy allows.

5.  CustomerConfirmation sample.

6.  Order created from confirmed quote.

7.  order_code sample.

8.  Duplicate idempotency.

9.  IVR result handled by Order Core.

10. Technical error not no-answer.

**Fail nếu**

1.  Order tạo khi chưa confirmation.

2.  Public comment tạo order.

3.  Order success thiếu order_code.

4.  IVR tự đổi order state.

5.  Duplicate tạo nhiều đơn.

**3.13. MAS-SMK-013 — Gateway / Handoff / Moderation**

**Mục tiêu**

Chứng minh public/private boundary, handoff và moderation hoạt động đúng.

**Expected Result**

1.  Public price blocked.

2.  Public order blocked.

3.  PII not repeated.

4.  Payment public blocked.

5.  Health public blocked.

6.  Handoff success event.

7.  Handoff failed event.

8.  Public reply after success/fail đúng.

9.  Context preserved.

10. Duplicate webhook no duplicate reply.

11. Abuse no Messenger.

12. Real complaint routed.

**Fail nếu**

1.  Public final price.

2.  Public order confirmation.

3.  Handoff fail vẫn nói đã gửi.

4.  Comment troll vào Messenger.

5.  Gateway tự quote/order.

6.  Mất attribution.

**3.14. MAS-SMK-014 — Official Contact Registry**

**Mục tiêu**

Chứng minh mọi số điện thoại theo registry.

**Expected Result**

1.  Visit request returns approved contact.

2.  Company/leader contact returns approved contact.

3.  Personal leader phone blocked.

4.  Distributor/wholesale route correct.

5.  Affiliate not misrouted.

6.  No unapproved phone.

**Fail nếu**

1.  AI tự bịa số.

2.  Số cá nhân lãnh đạo bị lộ.

3.  Contact hardcoded.

4.  Route sai mục đích.

**3.15. MAS-SMK-015 — Health / Complaint / Priority Conflict**

**Mục tiêu**

Chứng minh health boundary và priority conflict thắng sales.

**Expected Result**

1.  No unsolicited disease question.

2.  Disease mention triggers guard.

3.  Health unresolved blocks quote.

4.  No treatment claim.

5.  Public health detail blocked.

6.  Complaint suppresses CRM.

7.  Payment dispute suppresses sales.

8.  Counterfeit opens case.

9.  Member dispute opens case.

**Fail nếu**

1.  AI hỏi bệnh khi khách không nêu.

2.  Quote khi health unresolved.

3.  CRM gửi khi complaint open.

4.  Member dispute vẫn upsell.

5.  Counterfeit xử lý như đổi trả thường.

**3.16. MAS-SMK-016 — Evidence / Completion / Gateway / Security**

**Mục tiêu**

Chứng minh Completion Report, Gateway Gate, evidence và security đạt điều kiện release.

**Expected Result**

1.  DecisionEnvelope sample.

2.  Resolver trace.

3.  Guard trace.

4.  Handoff delivery log.

5.  QuoteSnapshot sample.

6.  OrderDraft sample.

7.  CustomerConfirmation sample.

8.  order_code sample.

9.  CRM suppression evidence.

10. Duplicate/idempotency evidence.

11. Security/permission/audit evidence.

12. Owner sign-off.

**Fail nếu**

1.  Completion PASS thiếu evidence.

2.  Gateway mở khi P0 pending/fail.

3.  Screenshot thay evidence.

4.  Protected action thiếu audit.

5.  Owner chưa sign-off.

6.  Production Ready tự YES.

**4. EVIDENCE MAPPING BẮT BUỘC**

Mọi smoke P0 phải có evidence item.

Evidence item tối thiểu gồm:

evidence_id  
domain_id  
smoke_id  
priority  
owner  
status  
tested_at  
tested_by  
request_payload_if_any  
response_payload_if_any  
DecisionEnvelope_if_AI_related  
resolver_trace_if_any  
guard_trace_if_any  
DB_snapshot_if_side_effect  
event_or_outbox_record_if_any  
handoff_delivery_log_if_any  
quote_snapshot_if_quote  
order_code_if_order  
screenshot_if_UI_or_ops  
owner_note_if_manual_review  
fail_reason_if_any  
required_fix_file_if_any  
owner_decision_required

Không được đánh PASS nếu thiếu evidence bắt buộc.

**5. COMPLETION REPORT CONDITION**

Completion Report chỉ được PASS khi:

1.  Tất cả P0 domain smoke PASS.

2.  Không còn P0 open issue.

3.  Có evidence cho từng P0.

4.  Có DecisionEnvelope mẫu.

5.  Có resolver trace.

6.  Có guard trace.

7.  Có handoff delivery log.

8.  Có QuoteSnapshot sample.

9.  Có OrderDraft sample.

10. Có CustomerConfirmation sample.

11. Có order_code sample.

12. Có CRM suppression evidence.

13. Có duplicate/idempotency test.

14. Có payment/accounting evidence nếu payment thuộc scope.

15. Có shipping evidence nếu shipping thuộc scope.

16. Có MC AI board/script/video evidence nếu MC AI thuộc scope.

17. Có ROAS internal-only evidence nếu ADS/ROAS thuộc scope.

18. Có security/permission/audit evidence.

19. Có owner sign-off.

Nếu thiếu bất kỳ P0 evidence nào:

COMPLETION_REPORT_STATUS = PENDING_EVIDENCE

Nếu có bất kỳ P0 fail:

COMPLETION_REPORT_STATUS = FAIL  
GATEWAY_STATUS = BLOCKED

**6. GATEWAY TRANSITION CONDITION**

Gateway production chỉ được xem xét khi:

COMPLETION_REPORT_STATUS = PASS  
ALL_P0_GATES = PASS  
EVIDENCE_PACKAGE = COMPLETE  
E2E_LIVE_TO_ORDER_SMOKE = PASS  
OWNER_SIGN_OFF = PASS

Gateway production bị chặn nếu:

1.  Any P0 gate PENDING.

2.  Any P0 gate FAIL.

3.  Missing evidence.

4.  Missing owner sign-off.

5.  Public/private boundary fail.

6.  Handoff fail evidence missing.

7.  QuoteSnapshot missing.

8.  CustomerConfirmation missing.

9.  CRM suppression missing.

10. Duplicate/idempotency fail.

11. Security/audit evidence missing.

12. MC AI board/script fail nếu thuộc scope.

13. ROAS internal-only fail nếu thuộc scope.

Gateway không được dùng để vá gap của AI Advisor.

Gateway không được tự quote/order/CRM.

**7. PRODUCTION READY CONDITION**

Production Ready chỉ được xem xét khi:

1.  MASTER governance pass.

2.  Pack implementation pass.

3.  Runtime resolvers hoạt động.

4.  Guards hoạt động.

5.  P0 smoke pass.

6.  Evidence package complete.

7.  Completion Report PASS.

8.  Gateway transition approved nếu có Gateway.

9.  Security / permission / audit pass.

10. Payment pass nếu thuộc scope.

11. Shipping pass nếu thuộc scope.

12. Order pass.

13. CRM pass.

14. Member lifecycle pass.

15. Product activation pass.

16. Official contact pass.

17. Health / priority conflict pass.

18. Owner sign-off.

19. Release approved.

20. Go-live approved.

Tại thời điểm MASTER-02 hoàn tất governance:

PRODUCTION_READY = NO

**8. RELEASE / GO-LIVE BOUNDARY**

MASTER-02 hoàn tất không đồng nghĩa release.

Release chỉ được duyệt khi:

1.  Pack implementation hoàn tất.

2.  Evidence đầy đủ.

3.  Completion Report PASS.

4.  Security pass.

5.  UAT/smoke pass.

6.  Owner sign-off.

7.  Release governance approve.

Go-live chỉ được duyệt khi:

1.  Release approved.

2.  Production checklist pass.

3.  Rollback plan có.

4.  Monitoring có.

5.  Incident handling có.

6.  Owner go-live sign-off.

Nếu thiếu một trong các điều kiện trên:

RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**9. PACK HANDOFF**

MASTER-02 handoff cho các pack chi tiết như sau.

**9.1. FILE 01 — Parent Logic / Global Decision Engine**

FILE 01 chịu trách nhiệm triển khai logic cha cho:

1.  Customer Context First.

2.  Care Before Sale.

3.  Product Recommendation.

4.  Segment Recommendation.

5.  CRM lifecycle decision.

6.  Member lifecycle decision.

7.  Diamond/affiliate/distributor routing.

8.  Program context.

9.  Public/private boundary.

10. Priority conflict.

11. Health boundary.

**9.2. FILE 04 — Resolver / Guard / Runtime Contract**

FILE 04 chịu trách nhiệm định nghĩa:

1.  Input/output resolver.

2.  Guard contract.

3.  DecisionEnvelope.

4.  Runtime status.

5.  Error/fallback contract.

6.  Resolver trace.

7.  Guard trace.

8.  Owner core boundary.

Các resolver P0 trong MASTER-02 phải có contract ở FILE 04.

**9.3. FILE 07 — Common Content Block Registry**

FILE 07 chịu trách nhiệm render:

1.  Public-safe wording.

2.  Messenger handoff wording.

3.  Customer care wording.

4.  CRM wording.

5.  Member lifecycle wording.

6.  Diamond/affiliate wording.

7.  Official contact wording.

8.  Health-safe wording.

9.  Quote/Order wording.

10. Payment/Shipping wording.

FILE 07 không tự quyết định nghiệp vụ.

FILE 07 chỉ render sau khi resolver/guard pass.

**9.4. FILE 09 — Test Matrix / Done Gate**

FILE 09 chịu trách nhiệm test:

1.  16 domain smoke.

2.  P0 negative path.

3.  Resolver missing.

4.  Guard fail.

5.  Public/private boundary.

6.  Quote/order/payment/shipping.

7.  CRM suppression.

8.  Member lifecycle.

9.  Message trigger.

10. Gateway handoff.

11. Evidence mapping.

**9.5. FILE 10 — Situation Registry**

FILE 10 chịu trách nhiệm mapping real-life situations:

1.  Khách mới.

2.  Khách cũ.

3.  Member.

4.  Diamond.

5.  Affiliate.

6.  Đại lý/nhà phân phối.

7.  Văn phòng/sinh viên/du học sinh/Việt kiều.

8.  Công ty/trường học/bệnh viện.

9.  Public comment hỏi giá.

10. Live abuse.

11. Health-sensitive.

12. Payment.

13. Shipping.

14. Complaint.

15. Official contact.

16. Program / Giờ Vàng / 24/7.

**9.6. FILE 12 — Human-Level Sales Behavior**

FILE 12 chịu trách nhiệm hành vi bán hàng:

1.  Hỏi thăm khách cũ.

2.  Không bán thô.

3.  Gợi ý 3 trụ + người thân.

4.  Không ép combo.

5.  Entry order không phải thất bại.

6.  Growth order có lý do.

7.  Member care proactive.

8.  Hạ hạng an toàn.

9.  Diamond trả lời trực tiếp.

10. Affiliate/distributor phân tách.

11. Segment selling.

12. Không dùng outcome để ép khách.

FILE 12 không được override Product Knowledge, Claim, Pricing, Availability, QuoteSnapshot, Order, Payment, Shipping hoặc Security.

**9.7. Commerce / Payment / Shipping / Order / Gateway / Evidence Packs**

Các pack kỹ thuật chịu trách nhiệm:

Commerce Pricing Core — giá, chương trình, quote pricing  
Commerce Availability Core — sellable, active product, stop sale  
Operational Core — sản xuất, nhập kho, hold, recall  
Payment Core / COM-06 — payment, bank transfer, accounting queue  
Shipping Core / COM-07 — shipping, tracking, ETA, COD  
Order Core — quote, draft, confirmation, order state  
IVR Pack — order confirmation only  
Gateway Pack — Meta event, handoff, dedup, moderation  
CRM / Messaging Pack — lifecycle, trigger, send, suppression, dedup  
Evidence Pack — evidence item, completion gate  
Security Pack — permission, audit, protected operation

**10. MASTER-02 FINAL STATUS**

MASTER-02 hoàn tất ở tầng governance khi:

1.  PHẦN 1/4 completed.

2.  PHẦN 2/4 completed.

3.  PHẦN 3/4 completed.

4.  PHẦN 4/4 completed.

5.  16 business domain đã khóa.

6.  Done Gate đã khóa.

7.  Smoke mapping đã khóa.

8.  Evidence mapping đã khóa.

9.  Release boundary đã khóa.

10. Pack handoff đã khóa.

Trạng thái MASTER-02:

MASTER-02 DOCUMENTATION STATUS = V1.0 CLEAN FINAL  
MASTER-02 GOVERNANCE COMPLETENESS = PASS  
MASTER-02 IMPLEMENTATION DETAIL = NOT INCLUDED  
MASTER-02 CODE = NOT INCLUDED  
MASTER-02 API / DTO / DB / UI / WORKER DETAIL = NOT INCLUDED  
MASTER-02 PACK DETAIL REPLACEMENT = NO

Trạng thái toàn hệ sau MASTER-02:

GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

Lý do:

MASTER-02 là governance document.

MASTER-02 không thay thế implementation, smoke, evidence, completion report, release approval hoặc go-live approval.

**11. MASTER-02 FINAL CONCLUSION**

MASTER-02 khóa bản đồ phụ thuộc liên pack của hệ thống Ginsengfood theo mô hình:

Business Rule  
→ Source-of-Truth  
→ Owner Core  
→ Runtime Resolver / Guard  
→ Consumer Pack  
→ Allowed Action  
→ Blocked-if-missing  
→ Evidence  
→ Done Gate

MASTER-02 xác định rằng hệ thống Ginsengfood không được vận hành bằng các đoạn logic rời rạc, template hardcode hoặc AI tự suy luận.

Mọi hành vi quan trọng phải đi qua source, resolver, guard và evidence.

Các nguyên tắc cuối cùng:

1.  Source-of-Truth quyết định dữ liệu.

2.  Owner Core quyết định nghiệp vụ.

3.  Runtime Resolver quyết định tại thời điểm thực thi.

4.  Consumer chỉ tiêu thụ trong boundary.

5.  Customer Context First là bắt buộc.

6.  Customer Memory là bắt buộc cho khách cũ.

7.  CRM 12 tháng là dependency chính thức.

8.  Member Lifecycle là dependency chính thức.

9.  Diamond / Affiliate / Distributor phải tách rõ.

10. Product Recommendation phải theo Product Knowledge, segment, 3 trụ và Product Effectiveness.

11. Message Trigger và Immutable Text phải được kiểm soát.

12. Public Comment chỉ là cổng handoff, không phải nơi chốt.

13. Health Boundary phải an toàn và không thuốc hóa.

14. Brand Soul và Scientific Evidence phải đúng source.

15. Official Contact phải qua registry.

16. Quy tắc mở bán là P0 domain riêng.

17. Payment phải qua Payment Core / Accounting Review.

18. Shipping phải qua Shipping Core.

19. Order phải qua QuoteSnapshot / OrderDraft / CustomerConfirmation / OrderCode.

20. IVR chỉ xác nhận đơn, không đổi order state.

21. Priority Conflict thắng sales.

22. Dedup và Outcome Logger là bắt buộc.

23. Live Moderation bảo vệ live và thương hiệu.

24. Evidence là điều kiện của release.

25. Gateway không được mở nếu Completion Report chưa PASS.

26. Production Ready không được YES nếu chưa có smoke/evidence/sign-off.

27. Không hardcode dữ liệu runtime.

28. Không fallback bằng suy đoán.

29. Không future extension nếu chưa owner-approved.

30. Không pack nào được tự suy luận ngoài MASTER-02.

**12. MASTER-02 FINAL LOCK**

Kể từ bản này, MASTER-02 được khóa làm tài liệu governance chính thức cho Cross-Pack Dependency Map.

Tên bản:

MASTER-02 — CROSS-PACK DEPENDENCY MAP  
SOURCE-DRIVEN DEPENDENCY / PACK RELATIONSHIP / BUSINESS-RULE-DRIVEN RUNTIME DEPENDENCY / RELEASE DEPENDENCY CONTROL  
V1.0 CLEAN FINAL

Phạm vi khóa:

Dependency Principles  
Business-rule-driven Dependency Model  
Source Boundary  
Cross-pack Dependency Registry by Business Domain  
Owner Core / Consumer Pack  
Blocked-if-missing Rule  
Runtime Control  
Conflict Resolution  
Suppression  
Fallback  
No-hardcode Enforcement  
Smoke Mapping  
Evidence Mapping  
Release Control  
Pack Handoff  
Final Conclusion

Trạng thái khóa:

MASTER-02 GOVERNANCE STATUS = PASS  
MASTER-02 CLEAN FINAL = YES  
IMPLEMENTATION DETAIL = NOT INCLUDED  
CODE = NOT INCLUDED  
GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO

**13. CẬP NHẬT HANDOFF**

Đã hoàn thành toàn bộ:

MASTER-02 — CROSS-PACK DEPENDENCY MAP  
SOURCE-DRIVEN DEPENDENCY / PACK RELATIONSHIP / BUSINESS-RULE-DRIVEN RUNTIME DEPENDENCY / RELEASE DEPENDENCY CONTROL  
V1.0 CLEAN FINAL

Gồm đủ 4 phần:

PHẦN 1/4 — DEPENDENCY PRINCIPLES / BUSINESS-RULE-DRIVEN DEPENDENCY MODEL / SOURCE BOUNDARY  
  
PHẦN 2/4 — CROSS-PACK DEPENDENCY REGISTRY BY BUSINESS DOMAIN / OWNER CORE / CONSUMER PACK / BLOCKED-IF-MISSING RULE  
  
PHẦN 3/4 — RUNTIME CONTROL / CONFLICT RESOLUTION / SUPPRESSION / FALLBACK / NO-HARDCODE ENFORCEMENT  
  
PHẦN 4/4 — FINAL DONE GATE / SMOKE MAPPING / RELEASE CONTROL / MASTER-02 FINAL CONCLUSION

Trạng thái cuối:

MASTER-02 GOVERNANCE STATUS = PASS  
MASTER-02 CLEAN FINAL = YES  
IMPLEMENTATION DETAIL = NOT INCLUDED  
CODE = NOT INCLUDED  
GATEWAY_STATUS = BLOCKED  
COMPLETION_REPORT_STATUS = PENDING_EVIDENCE  
PRODUCTION_READY = NO  
RELEASE_APPROVED = NO  
GO_LIVE_APPROVED = NO
