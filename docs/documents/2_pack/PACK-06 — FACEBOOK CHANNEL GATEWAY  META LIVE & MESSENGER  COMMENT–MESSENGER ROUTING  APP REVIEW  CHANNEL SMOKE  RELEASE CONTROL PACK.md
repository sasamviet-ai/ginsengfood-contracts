**PACK-06 — FACEBOOK CHANNEL GATEWAY / META LIVE & MESSENGER / COMMENT–MESSENGER ROUTING / APP REVIEW / CHANNEL SMOKE / RELEASE CONTROL PACK**

**CỔNG KÊNH FACEBOOK / META LIVE / MESSENGER / PUBLIC–PRIVATE ROUTING / CHANNEL GOVERNANCE**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — FACEBOOK CHANNEL GATEWAY PRINCIPLES / META APP–PAGE–WEBHOOK BOUNDARY / PACK-05 DEPENDENCY**

**1. MỤC TIÊU CỦA PACK-06**

PACK-06 xác lập lớp **Facebook Channel Gateway** cho hệ thống Ginsengfood.

PACK-06 quản trị cách hệ thống kết nối, tiếp nhận, định tuyến và phản hồi trên các kênh Facebook/Meta như:

1.  Facebook Page.

2.  Public comment.

3.  Live comment.

4.  Messenger/private chat.

5.  Private reply từ comment nếu channel policy cho phép.

6.  Webhook sự kiện kênh.

7.  Human takeover.

8.  Page/channel evidence.

9.  App Review / Permission / UAT / Pilot / Release Control.

PACK-06 không phải pack viết lại AI tư vấn.

PACK-06 không phải bộ câu trả lời bán hàng.

PACK-06 không phải nơi tính giá, tạo đơn, xét quyền lợi khách hàng hoặc xử lý kế toán.

PACK-06 là lớp gateway/channel, có nhiệm vụ bảo đảm:

- Đúng Page.

- Đúng App.

- Đúng quyền kênh.

- Đúng public/private boundary.

- Đúng comment → Messenger routing.

- Đúng Meta policy.

- Đúng channel context.

- Đúng human takeover.

- Đúng evidence.

- Đúng smoke.

- Đúng release control.

**2. VỊ TRÍ CỦA PACK-06 TRONG TOÀN BỘ HỆ THỐNG**

PACK-06 đứng sau các pack nền sau:

1.  PACK-01 — Operational Core.

2.  PACK-02 — Product / SKU / Ingredient / Recipe / Formula Version.

3.  PACK-03 — Demand / MRP / Procurement / Stock Alert / Material & Packaging Control.

4.  PACK-04 — MISA Integration / Accounting Handoff / Costing / Sync / Reconcile.

5.  PACK-05 — AI Advisor Channel / Customer Consulting / Sales Runtime / Customer Memory / Quote–Order Handoff.

PACK-06 không thay thế PACK-05.

PACK-06 chỉ đưa hội thoại từ Facebook/Meta vào đúng lõi AI Advisor đã khóa ở PACK-05.

Nguyên tắc trung tâm:

**PACK-05 quyết định AI nói gì và tư vấn như thế nào.  
PACK-06 quyết định Facebook/Messenger nhận — gửi — định tuyến — kiểm soát kênh như thế nào.**

**3. PHẠM VI CỦA PACK-06**

PACK-06 quản trị các phạm vi sau:

**3.1. Meta App / Facebook App Governance**

Quản trị App dùng để kết nối với Facebook/Meta.

Bao gồm:

- App identity.

- Business ownership.

- App mode.

- Permission scope.

- App Review requirement.

- Webhook subscription.

- Security setting.

- Token/credential governance.

- Development / staging / production boundary.

- Release approval.

PACK-06 không đi vào cấu hình kỹ thuật chi tiết nếu chưa có tài liệu triển khai riêng.

**3.2. Facebook Page Governance**

Quản trị Page nào được kết nối AI.

Bao gồm:

- Official Page.

- Test Page.

- Live Page.

- Sales Page.

- CRM Page nếu có.

- Page role.

- Page status.

- AI enabled/disabled.

- Comment auto-reply enabled/disabled.

- Messenger AI enabled/disabled.

- Live AI enabled/disabled.

- Human takeover owner.

Không có Page Registry thì không bật AI production.

**3.3. Public Comment Governance**

Quản trị cách AI xử lý comment công khai.

Bao gồm:

- Comment hỏi thông tin.

- Comment hỏi giá.

- Comment muốn mua.

- Comment mơ hồ.

- Comment chứa số điện thoại.

- Comment chứa địa chỉ.

- Comment chứa MST/email/hóa đơn.

- Comment khiếu nại.

- Comment spam.

- Comment tiêu cực.

- Comment cần chuyển Messenger.

- Comment cần human takeover.

Public comment không phải nơi chốt đơn đầy đủ.

**3.4. Messenger / Private Chat Governance**

Quản trị cách AI xử lý hội thoại riêng.

Bao gồm:

- Tư vấn sâu.

- Nhận diện intent.

- Product recommendation.

- Quote theo runtime.

- Order capture.

- Customer prefill.

- Invoice flow.

- Complaint flow.

- CRM follow-up.

- Human takeover.

- Evidence capture.

Messenger vẫn phải tuân thủ PACK-05, Commerce Runtime, Claim Guard, privacy guard và channel policy.

**3.5. Live Comment Governance**

Quản trị comment trong phiên live.

Bao gồm:

- Live session identity.

- Comment volume.

- Comment rate.

- Hero product context.

- Product scope của live.

- Offer context nếu runtime xác nhận.

- Comment-to-private routing.

- Spam suppression.

- Human moderator handoff.

- Evidence capture.

- Live smoke.

- Pilot monitoring.

Live comment không được biến thành luồng bán hàng thiếu kiểm soát.

**3.6. Channel Evidence Governance**

Mọi hành vi quan trọng trên Facebook/Messenger phải có evidence.

Evidence tối thiểu gồm:

- Incoming message/comment.

- Channel context.

- Public/private state.

- AI response.

- Guard result.

- Runtime values used nếu có.

- Routing decision.

- Handoff decision nếu có.

- Customer confirmation nếu có.

- Complaint/invoice evidence nếu có.

- Delivery status của message nếu channel cung cấp.

- Human takeover log nếu có.

**4. PACK-06 KHÔNG PHẢI SOURCE-OF-TRUTH**

PACK-06 không phải source-of-truth cho:

1.  Product Master.

2.  Product Knowledge.

3.  Công thức.

4.  Tồn kho.

5.  Sellable status.

6.  Sale Lock.

7.  Recall.

8.  Giá.

9.  Khuyến mãi.

10. Member benefit.

11. Diamond/referral benefit.

12. Quote.

13. Order.

14. Payment.

15. Delivery.

16. Invoice issued.

17. CRM eligibility.

18. Complaint final decision.

19. MISA sync.

20. Accounting truth.

21. Verified revenue.

22. Commission.

23. Tax/voucher.

24. ROAS.

PACK-06 chỉ là gateway/channel.

Nếu PACK-06 thiếu dữ liệu từ owner pack, PACK-06 phải fail-closed hoặc route/handoff đúng quy định.

**5. OWNER BOUNDARY CỦA PACK-06**

**5.1. PACK-05 giữ AI Advisor Behavior**

PACK-05 quyết định:

- Intent Recognition.

- Need Mapping.

- Response Mode.

- Product Knowledge usage.

- Customer Memory usage.

- Claim Guard.

- Quote / Cart / Order Capture behavior.

- Invoice Flow.

- Complaint Flow.

- CRM Flow.

- Handoff packet.

- AI audit/evidence.

PACK-06 không được viết lại các logic này.

**5.2. PACK-06 giữ Facebook Channel Gateway Truth**

PACK-06 quyết định:

- Page nào được kết nối.

- Page nào được test.

- Page nào được production.

- App nào được dùng.

- Quyền kênh nào được yêu cầu.

- Webhook nào được nhận.

- Comment nào được auto-reply.

- Comment nào cần private routing.

- Messenger thread nào được AI xử lý.

- Live session nào được AI xử lý.

- Khi nào cần human takeover ở channel.

- Khi nào phải rate limit.

- Khi nào phải spam suppression.

- Khi nào phải pause/disable channel.

- Evidence channel cần lưu gì.

- Channel smoke pass/fail ra sao.

- Gateway release được mở hay không.

**5.3. Commerce Runtime giữ Quote / Order / Payment Dependency**

PACK-06 không được tự tính giá hoặc tạo đơn.

Khi khách hỏi giá/mua/chốt đơn trên Facebook/Messenger:

- PACK-06 chỉ chuyển channel context vào PACK-05.

- PACK-05 gọi Commerce Runtime theo đúng boundary.

- Commerce Runtime trả quote/cart/order state nếu đủ điều kiện.

- PACK-06 chỉ chịu trách nhiệm gửi câu trả lời qua đúng kênh nếu channel policy cho phép.

**5.4. Claim/Safety Owner giữ Claim Boundary**

PACK-06 không được mở claim riêng cho Facebook.

Mọi claim trên public comment, Messenger, live, landing, CRM đều phải qua Claim Guard.

PACK-06 phải chặn:

- Claim chữa bệnh.

- Claim điều trị.

- Claim thay thuốc.

- Claim khoa học chưa duyệt.

- Claim vượt evidence.

- Claim không được nói ở public.

- Claim sai channel policy.

**5.5. PACK-04 giữ MISA Boundary**

PACK-06 không được sync MISA.

Facebook comment, Messenger message, live order intent, ad lead, CRM message không được tạo chứng từ kế toán.

Nếu phát sinh nghiệp vụ kế toán, phải đi qua owner pack và PACK-04.

**6. NGUYÊN TẮC PHỤ THUỘC PACK-05**

PACK-06 bắt buộc phụ thuộc PACK-05.

**6.1. PACK-06 không tạo AI Advisor riêng**

PACK-06 không được tạo:

- Prompt riêng ngoài PACK-05.

- Bộ câu trả lời sản phẩm riêng.

- Logic giá riêng.

- Logic chốt đơn riêng.

- Logic complaint riêng.

- Logic invoice riêng.

- Logic CRM riêng.

- Logic Diamond/referral riêng.

- Logic member benefit riêng.

- Logic claim riêng.

- Logic product alternative riêng.

- Logic OOS/sale lock riêng.

Nếu cần AI trả lời, PACK-06 phải gọi AI Advisor Core theo PACK-05.

**6.2. PACK-06 phải truyền channel context cho PACK-05**

Để AI Advisor trả lời đúng, PACK-06 phải truyền đủ context kênh.

Tối thiểu gồm:

1.  Channel type.

2.  Public/private state.

3.  Page identity.

4.  Comment identity nếu là comment.

5.  Messenger thread/session nếu là private.

6.  Live session nếu có.

7.  Parent comment nếu có.

8.  Message timestamp.

9.  Customer channel identity reference.

10. Entry source.

11. Ads/campaign reference nếu có.

12. Diamond/referral reference nếu có.

13. Handoff state.

14. Permission state.

15. Allowed response type.

16. Public price allowed flag nếu có.

17. Personal data collection allowed flag nếu có.

18. Quiet hours / rate limit state nếu áp dụng.

19. Human owner nếu cần takeover.

20. Evidence reference.

Nếu thiếu channel context, AI có thể trả lời sai public/private boundary.

**6.3. PACK-06 phải nhận lại response instruction từ PACK-05**

PACK-05 trả về hành vi tư vấn hoặc response instruction.

PACK-06 phải tôn trọng:

- Trả lời public hay private.

- Có được báo giá không.

- Có cần chuyển Messenger không.

- Có cần human takeover không.

- Có cần dừng vì guard không.

- Có cần xin evidence không.

- Có cần order capture không.

- Có cần invoice flow không.

- Có cần CRM suppression không.

- Có cần không gửi gì không.

PACK-06 không được tự sửa response theo hướng vi phạm PACK-05.

**7. NGUYÊN TẮC FACEBOOK CHANNEL GATEWAY**

**7.1. Gateway chỉ điều phối kênh**

Gateway không tự tư vấn.

Gateway không tự quyết giá.

Gateway không tự quyết sản phẩm.

Gateway không tự quyết order.

Gateway không tự quyết claim.

Gateway không tự quyết CRM.

Gateway nhận sự kiện kênh, gắn context, gọi đúng lõi xử lý, nhận kết quả và gửi lại đúng kênh nếu được phép.

**7.2. Gateway phải fail-closed khi thiếu điều kiện**

PACK-06 phải fail-closed khi:

- Page chưa được registry.

- App chưa được duyệt.

- Permission chưa đủ.

- Webhook chưa xác nhận.

- Channel policy không rõ.

- Không xác định public/private state.

- Không xác định quyền gửi reply.

- Không xác định customer identity reference.

- Không có PACK-05 behavior response.

- Runtime thiếu dữ liệu quan trọng.

- Meta policy block.

- Spam/rate limit block.

- Human takeover required.

Fail-closed nghĩa là không tự gửi bừa.

**7.3. Gateway phải lưu evidence**

Không có evidence thì không được gọi Gateway Pass.

Evidence phải đủ để trả lời:

- Sự kiện đến từ Page nào?

- Là comment hay Messenger?

- Là public hay private?

- AI đã nhận context gì?

- AI đã trả lời gì?

- Guard nào đã pass/block?

- Có chuyển private không?

- Có handoff không?

- Có lỗi channel không?

- Có vi phạm privacy không?

- Có owner review không?

**8. FACEBOOK PAGE REGISTRY GOVERNANCE**

Page Registry là điều kiện bắt buộc trước khi bật AI trên Facebook.

**8.1. Page Registry phải quản trị**

Mỗi Page cần có:

1.  Page name.

2.  Page ID hoặc channel reference.

3.  Vai trò Page.

4.  Owner Page.

5.  Business owner.

6.  AI status.

7.  Comment automation status.

8.  Messenger automation status.

9.  Live automation status.

10. CRM allowed status.

11. Test/production status.

12. Human takeover owner.

13. Escalation owner.

14. Risk level.

15. Release status.

16. Evidence status.

**8.2. Không có Page Registry thì không bật AI**

Không được bật AI cho Page chưa có registry.

Không được dùng nhầm Page test như Page production.

Không được dùng Page production để test rủi ro nếu chưa có owner approval.

Không được bật live automation nếu Page chưa pass live smoke.

**8.3. Page status**

Page có thể có trạng thái:

1.  DRAFT.

2.  TEST_ONLY.

3.  STAGING_READY.

4.  PILOT_READY.

5.  PRODUCTION_CANDIDATE.

6.  PRODUCTION_ENABLED.

7.  PAUSED.

8.  SUSPENDED.

9.  DEPRECATED.

Chỉ Page có trạng thái phù hợp và owner approval mới được bật automation thật.

**9. META APP GOVERNANCE**

Meta App là lớp kỹ thuật/kênh để kết nối Facebook/Meta.

PACK-06 quản trị nguyên tắc, không đi vào cấu hình API chi tiết.

**9.1. App phải có owner rõ**

Mỗi App phải có:

1.  Business owner.

2.  Technical owner.

3.  Security owner nếu có.

4.  App environment.

5.  App mode.

6.  Permission scope.

7.  Page binding.

8.  Webhook binding.

9.  Review status.

10. Release status.

**9.2. Không dùng App chưa duyệt cho production**

Không được production nếu:

- App chưa owner review.

- Permission chưa đủ.

- App Review chưa đạt nếu cần.

- Business verification chưa đạt nếu policy yêu cầu.

- Webhook chưa pass.

- Security chưa pass.

- Token/credential chưa được quản trị.

- Evidence chưa accepted.

**9.3. App environment**

App phải phân biệt:

1.  Development.

2.  Staging.

3.  Pilot.

4.  Production.

Không dùng credential production cho development test.

Không dùng test App để xử lý khách thật nếu chưa có policy cho phép.

Không trộn dữ liệu test và dữ liệu khách thật.

**10. WEBHOOK BOUNDARY GOVERNANCE**

Webhook là cửa nhận sự kiện từ Facebook/Meta.

Webhook không phải nơi tự quyết nghiệp vụ.

**10.1. Webhook được phép làm**

Webhook được phép:

- Nhận sự kiện.

- Xác thực sự kiện theo policy.

- Gắn channel context.

- Phân loại event type.

- Ghi audit/evidence.

- Đưa vào routing.

- Gọi AI Advisor Core nếu đủ điều kiện.

- Chuyển human takeover nếu cần.

- Chặn nếu spam/rate limit/policy block.

**10.2. Webhook không được làm**

Webhook không được:

- Tự tính giá.

- Tự tư vấn sản phẩm.

- Tự chốt đơn.

- Tự tạo order.

- Tự xác nhận payment.

- Tự xử lý invoice issued.

- Tự sync MISA.

- Tự bỏ qua Claim Guard.

- Tự public dữ liệu cá nhân.

- Tự gửi response khi channel policy chặn.

**10.3. Event phải được phân loại**

Mỗi event cần phân loại tối thiểu:

1.  Public comment.

2.  Comment reply.

3.  Private message.

4.  Live comment.

5.  Message delivery/callback nếu có.

6.  Page event nếu có.

7.  Human takeover event nếu có.

8.  Opt-out/stop message nếu có.

9.  Error event nếu có.

10. Unknown event.

Unknown event không được tự động trả lời nếu không có policy.

**11. PUBLIC COMMENT GOVERNANCE**

Public comment là môi trường rủi ro cao vì mọi người đều nhìn thấy.

**11.1. AI được làm ở public comment**

AI được:

- Trả lời thông tin public-safe.

- Gợi mở tư vấn.

- Trả lời câu hỏi đơn giản đã duyệt.

- Dùng locked response public-safe.

- Nhận diện khách muốn mua.

- Kích hoạt private routing nếu policy cho phép.

- Chuyển human takeover nếu comment nhạy cảm.

**11.2. AI không được làm ở public comment**

AI không được public:

- Số điện thoại khách.

- Địa chỉ.

- Email.

- MST.

- Thông tin hóa đơn.

- Thông tin đơn hàng.

- Trạng thái thanh toán.

- Trạng thái giao hàng.

- Member tier.

- Quyền lợi riêng.

- Diamond/referral owner.

- Commission.

- Quote cá nhân hóa nếu policy chặn.

- Complaint detail.

- Quality case detail.

- Payment proof.

- Thông tin nội bộ.

- Mã lô/batch nội bộ nếu không public.

**11.3. Comment hỏi giá**

Khi khách hỏi giá ở public comment, PACK-06 phải kiểm tra channel policy.

Nếu policy cho phép báo giá public chung, AI chỉ được nói nội dung public-safe và không cá nhân hóa quyền lợi riêng.

Nếu policy yêu cầu private cho giá/quote cá nhân hóa, PACK-06 phải route sang private/Messenger.

Không được yêu cầu khách public số điện thoại/địa chỉ để báo giá.

**11.4. Comment mơ hồ**

Các comment như:

- “Giá?”

- “Ib”

- “Tư vấn”

- “Mua sao?”

- “Loại nào?”

- “Có tốt không?”

- “Còn hàng không?”

phải được xử lý ngắn, an toàn và route đúng.

PACK-06 không được để AI hỏi dồn ở public.

**12. COMMENT → MESSENGER ROUTING GOVERNANCE**

Comment → Messenger Routing là luồng quan trọng của PACK-06.

**12.1. Khi nào cần chuyển private**

Cần chuyển private khi:

1.  Khách hỏi giá cá nhân hóa.

2.  Khách muốn chốt đơn.

3.  Khách gửi thông tin cá nhân.

4.  Khách cần tư vấn sâu.

5.  Khách hỏi quyền lợi member.

6.  Khách vào từ Diamond/referral.

7.  Khách cần hóa đơn.

8.  Khách có complaint.

9.  Khách hỏi đơn hàng.

10. Khách cần payment/delivery support.

11. Nội dung có rủi ro public.

**12.2. Không đẩy trách nhiệm sang khách nếu channel có cơ chế private**

Nếu channel có cơ chế mở private hợp lệ, PACK-06 nên dùng cơ chế đó thay vì chỉ nói “Mình nhắn tin cho Em”.

Câu public phải nhẹ, tự nhiên, không làm yếu lực tư vấn.

Nguyên tắc:

- Không yêu cầu khách public thông tin cá nhân.

- Không làm khách phải kể lại từ đầu.

- Không báo thông tin riêng ở public.

- Sau khi private handoff thành công, context tiếp theo mặc định là private nếu runtime xác nhận.

**12.3. Private routing fail**

Nếu không thể chuyển private:

- Không tiếp tục hỏi thông tin riêng ở public.

- Không chốt đơn ở public nếu policy chặn.

- Có thể trả lời public-safe.

- Có thể handoff human moderator.

- Phải lưu evidence lỗi routing.

- Phải có fallback policy.

**13. MESSENGER GOVERNANCE**

Messenger là kênh private, nhưng không có nghĩa AI được vượt quyền.

**13.1. AI được làm trong Messenger**

Messenger có thể xử lý:

- Tư vấn sâu.

- Product recommendation.

- Quote theo runtime.

- Order capture.

- Customer prefill.

- Invoice request.

- Complaint evidence.

- Quality case flow.

- Payment follow-up.

- Delivery follow-up.

- CRM conversation nếu runtime cho phép.

- Human takeover.

**13.2. AI không được làm trong Messenger**

AI không được:

- Tự tính giá.

- Tự tạo promotion.

- Tự hứa free ship.

- Tự chốt sản phẩm bị sale lock.

- Tự nói đơn chính thức khi chưa có order_code.

- Tự nói paid/delivered/issued khi runtime chưa xác nhận.

- Tự quyết refund/return/exchange.

- Tự nói claim vượt whitelist.

- Tự sync MISA.

- Tự bỏ qua complaint.

Messenger là private, nhưng vẫn phải qua runtime và guard.

**14. LIVE GOVERNANCE**

Live là môi trường tốc độ cao, nhiều comment và dễ rủi ro.

**14.1. Live Session Registry**

Mỗi phiên live cần có registry:

1.  Live ID/reference.

2.  Page.

3.  Thời gian bắt đầu/kết thúc.

4.  Owner live.

5.  Human moderator.

6.  Product hero nếu có.

7.  Product support nếu có.

8.  Product not allowed nếu có.

9.  Offer context nếu runtime xác nhận.

10. AI automation status.

11. Comment routing policy.

12. Messenger routing policy.

13. Spam/rate limit policy.

14. Evidence status.

15. Release status.

**14.2. AI trong live được làm**

AI có thể:

- Trả lời comment public-safe.

- Nhận diện mua hàng.

- Route khách vào private.

- Giữ context live.

- Nhận diện sản phẩm hero.

- Nhận diện khách hỏi giá.

- Nhận diện khách chốt.

- Nhận diện complaint.

- Handoff moderator khi cần.

**14.3. AI trong live không được làm**

AI không được:

- Public thông tin đơn hàng.

- Public quote cá nhân hóa nếu policy chặn.

- Public quyền lợi riêng.

- Gợi ý sản phẩm không thuộc phạm vi live nếu live policy chặn.

- Tự áp dụng offer live nếu runtime không xác nhận.

- Trả lời lặp vô hạn.

- Spam comment.

- Bỏ qua human moderator.

- Bỏ qua complaint.

**15. CHANNEL CONTEXT OBJECT GOVERNANCE**

PACK-06 phải tạo channel context cho mỗi sự kiện gửi vào PACK-05.

Channel context không phải dữ liệu tùy chọn.

Nếu thiếu channel context, AI Advisor có thể nhầm public/private, nhầm Page, nhầm live, nhầm quyền trả lời hoặc nhầm chính sách giá.

**15.1. Channel context tối thiểu**

Một channel context tối thiểu cần:

1.  channel_type.

2.  visibility_state.

3.  page_reference.

4.  event_reference.

5.  conversation_reference.

6.  customer_channel_reference.

7.  source_type.

8.  live_reference nếu có.

9.  comment_reference nếu có.

10. message_reference nếu có.

11. parent_reference nếu có.

12. ads_reference nếu có.

13. campaign_reference nếu có.

14. referral_reference nếu có.

15. timestamp.

16. channel_policy_flags.

17. permission_state.

18. routing_state.

19. human_takeover_state.

20. evidence_reference.

Tên trường chi tiết do dev quyết định ở tài liệu triển khai, nhưng ý nghĩa governance phải giữ.

**16. HUMAN TAKEOVER GOVERNANCE**

Human takeover là cơ chế bắt buộc.

**16.1. Khi nào phải takeover**

PACK-06 phải hỗ trợ takeover khi:

1.  Khách yêu cầu gặp người thật.

2.  Khách khiếu nại nghiêm trọng.

3.  Nghi hàng giả.

4.  Vấn đề pháp lý/truyền thông.

5.  Khách tức giận.

6.  Khách gửi thông tin nhạy cảm.

7.  AI confidence thấp.

8.  Runtime thiếu dữ liệu quan trọng.

9.  Payment đối chiếu khó.

10. Invoice phức tạp.

11. Refund/return/exchange.

12. Meta channel lỗi.

13. Spam/abuse.

14. Owner yêu cầu manual mode.

**16.2. Takeover phải giữ context**

Human takeover packet cần có:

1.  Page.

2.  Channel.

3.  Customer reference.

4.  Conversation thread.

5.  Public/private state.

6.  Intent.

7.  Nội dung khách gần nhất.

8.  AI response gần nhất.

9.  Runtime/guard result nếu có.

10. Quote/order reference nếu có.

11. Complaint/invoice/payment issue nếu có.

12. Evidence đã nhận.

13. Lý do takeover.

14. Mức độ ưu tiên.

15. Owner cần xử lý.

Khách không nên phải kể lại từ đầu.

**17. SPAM / RATE LIMIT / FREQUENCY GOVERNANCE**

Facebook/Messenger là kênh dễ phát sinh spam nếu AI tự động quá mạnh.

PACK-06 phải khóa spam/rate limit.

**17.1. Chống spam public comment**

AI không được:

- Trả lời lặp cùng một nội dung quá nhiều lần.

- Trả lời mọi comment không liên quan.

- Tự tranh luận dài.

- Spam CTA.

- Gửi quá nhiều public reply cho cùng một người.

- Kéo private quá mức.

- Trả lời bot/spam đã nhận diện.

- Tự kích hoạt vòng lặp AI–AI.

**17.2. Chống spam Messenger**

AI không được:

- Gửi tin quá dày.

- Follow-up ngoài CRM eligibility.

- Gửi CRM khi opt-out.

- Gửi lại cùng nội dung nhiều lần.

- Nhắn ngoài khung giờ nếu policy chặn.

- Đeo bám khách khi khách im lặng nếu frequency cap chặn.

- Tiếp tục bán khi khách đang complaint.

**17.3. Rate limit phải fail-safe**

Khi rate limit kích hoạt:

- Không gửi thêm tin ngoài policy.

- Ghi audit.

- Không làm mất conversation state.

- Có thể handoff moderator nếu cần.

- Có thể queue nếu policy cho phép.

- Không gửi bù hàng loạt gây spam.

**18. PRIVACY / PERSONAL DATA GOVERNANCE**

PACK-06 phải bảo vệ dữ liệu cá nhân trên kênh Facebook/Messenger.

**18.1. Dữ liệu cá nhân gồm**

- Tên khách nếu dùng định danh riêng.

- Số điện thoại.

- Địa chỉ.

- Email.

- MST.

- Thông tin công ty.

- Thông tin đơn hàng.

- Thông tin thanh toán.

- Ảnh chứng từ.

- Complaint evidence.

- Lịch sử mua.

- Member tier.

- Quyền lợi riêng.

- Diamond/referral data.

**18.2. Nguyên tắc bảo vệ**

PACK-06 phải bảo đảm:

1.  Không lặp lại dữ liệu cá nhân ở public.

2.  Không yêu cầu khách gửi thông tin riêng ở public.

3.  Không đưa thông tin private ra comment.

4.  Không gửi nhầm khách.

5.  Không dùng customer memory khi identity chưa chắc.

6.  Không cho human không đúng quyền xem dữ liệu.

7.  Không lưu evidence rời rạc thiếu kiểm soát.

8.  Không public invoice data.

9.  Không public complaint detail.

10. Không public payment proof.

**19. CHANNEL AUDIT / EVIDENCE GOVERNANCE**

Mọi sự kiện quan trọng phải có audit/evidence.

**19.1. Audit cần ghi**

Audit cần ghi:

1.  Sự kiện đến từ đâu.

2.  Ai/khách nào theo channel reference.

3.  Page nào.

4.  Public hay private.

5.  Event type.

6.  Thời điểm.

7.  Routing decision.

8.  AI core được gọi hay không.

9.  Guard result.

10. Response đã gửi hay bị chặn.

11. Lý do block nếu có.

12. Handoff nếu có.

13. Human takeover nếu có.

14. Error nếu có.

15. Evidence reference.

**19.2. Evidence cần lưu**

Evidence cần lưu:

- Incoming message/comment.

- AI response.

- Channel context.

- Runtime references nếu có.

- Private routing result.

- Messenger thread result nếu có.

- Human takeover packet.

- Complaint/invoice/payment evidence nếu có.

- Error log.

- Smoke evidence.

- Release evidence.

Không có evidence thì không được gọi Gateway Pass.

**20. ENVIRONMENT GOVERNANCE**

PACK-06 phải phân biệt môi trường.

**20.1. Development**

Development dùng để kiểm tra kỹ thuật.

Không dùng dữ liệu khách thật nếu chưa được phép.

Không gửi reply production.

Không dùng production token/credential nếu không có policy.

**20.2. Staging**

Staging dùng để test gần thực tế.

Cần có:

- Test Page.

- Test App hoặc chế độ kiểm thử.

- Test user.

- Test comment.

- Test Messenger.

- Test live nếu cần.

- Test evidence.

- Test runtime.

- Smoke data.

Staging không phải production.

**20.3. Pilot**

Pilot dùng để mở trong phạm vi kiểm soát.

Cần có:

- Page được chọn.

- Intent scope.

- Product scope.

- Human takeover.

- Monitoring.

- Pause/disable path.

- Owner theo dõi.

- Evidence capture.

**20.4. Production**

Production chỉ được mở khi:

1.  App/Page permission đủ.

2.  App Review/permission review đạt nếu cần.

3.  Page Registry active.

4.  PACK-05 behavior pass trong phạm vi mở.

5.  Webhook pass.

6.  Public/private routing pass.

7.  Privacy smoke pass.

8.  Rate limit/spam suppression pass.

9.  Human takeover pass.

10. Evidence accepted.

11. Owner sign-off.

12. No P0 issue open.

13. Release decision hợp lệ.

**21. GATEWAY PAUSE / DISABLE GOVERNANCE**

PACK-06 phải có khả năng tạm dừng kênh.

**21.1. Khi nào phải pause**

Phải pause khi:

- AI trả sai claim nghiêm trọng.

- AI public dữ liệu riêng.

- AI báo giá sai do runtime lỗi.

- AI bán SKU bị sale lock.

- AI spam comment/Messenger.

- Webhook lỗi hàng loạt.

- Meta permission bị lỗi.

- Human takeover không hoạt động.

- Complaint không được handoff.

- Rate limit không kiểm soát.

- Owner yêu cầu dừng.

**21.2. Pause không được làm mất dữ liệu**

Khi pause:

- Không mất conversation state.

- Không mất evidence.

- Không mất handoff packet.

- Không xóa log.

- Không xóa comment/message history.

- Có lý do pause.

- Có owner quyết định.

- Có điều kiện mở lại.

**22. PACK-06 P0 RULE REGISTRY — PHẦN 1/4**

| **Mã P0** | **Quy tắc**                                                                       |
|-----------|-----------------------------------------------------------------------------------|
| FB-P0-01  | PACK-06 là Facebook Channel Gateway, không phải AI Advisor Core                   |
| FB-P0-02  | PACK-06 không được viết lại logic tư vấn của PACK-05                              |
| FB-P0-03  | PACK-06 không được tự tính giá/khuyến mãi/quyền lợi                               |
| FB-P0-04  | PACK-06 không được tự tạo order/payment/delivery/invoice                          |
| FB-P0-05  | PACK-06 không được sync MISA                                                      |
| FB-P0-06  | Không có Page Registry thì không bật AI production                                |
| FB-P0-07  | Không có App/permission hợp lệ thì không mở production channel                    |
| FB-P0-08  | Webhook không được tự quyết nghiệp vụ                                             |
| FB-P0-09  | Public comment không được public dữ liệu cá nhân/đơn hàng/hóa đơn                 |
| FB-P0-10  | Comment cần thông tin riêng phải route private/handoff theo policy                |
| FB-P0-11  | Messenger private vẫn phải tuân thủ runtime và guard                              |
| FB-P0-12  | Live comment không được spam hoặc chốt đơn thiếu kiểm soát                        |
| FB-P0-13  | Channel context bắt buộc trước khi gọi PACK-05                                    |
| FB-P0-14  | Human takeover bắt buộc khi vượt quyền hoặc rủi ro cao                            |
| FB-P0-15  | Rate limit/spam suppression là bắt buộc                                           |
| FB-P0-16  | Không có channel evidence thì không Gateway Pass                                  |
| FB-P0-17  | Không dùng production credential trong test trái policy                           |
| FB-P0-18  | Channel pause/disable path là bắt buộc                                            |
| FB-P0-19  | Gateway không được gọi Production Ready nếu chưa có smoke/evidence/owner sign-off |
| FB-P0-20  | PACK-06 không được gọi Gateway PASS khi còn P0 issue mở                           |

**23. DONE GATE CỦA PHẦN 1/4**

PHẦN 1/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa mục tiêu của PACK-06.

2.  Đã khóa vị trí PACK-06 trong toàn hệ thống.

3.  Đã khóa phạm vi Facebook Channel Gateway.

4.  Đã khóa PACK-06 không phải source-of-truth.

5.  Đã khóa owner boundary với PACK-05.

6.  Đã khóa owner boundary với Commerce Runtime.

7.  Đã khóa owner boundary với Claim/Safety.

8.  Đã khóa owner boundary với PACK-04/MISA.

9.  Đã khóa nguyên tắc phụ thuộc PACK-05.

10. Đã khóa Gateway không tự tư vấn/tính giá/chốt đơn.

11. Đã khóa Page Registry Governance.

12. Đã khóa Meta App Governance.

13. Đã khóa Webhook Boundary Governance.

14. Đã khóa Public Comment Governance.

15. Đã khóa Comment → Messenger Routing Governance.

16. Đã khóa Messenger Governance.

17. Đã khóa Live Governance.

18. Đã khóa Channel Context Object Governance.

19. Đã khóa Human Takeover Governance.

20. Đã khóa Spam / Rate Limit / Frequency Governance.

21. Đã khóa Privacy / Personal Data Governance.

22. Đã khóa Channel Audit / Evidence Governance.

23. Đã khóa Environment Governance.

24. Đã khóa Gateway Pause / Disable Governance.

25. Đã khóa P0 Rule Registry phần 1.

26. Chưa đi vào code, API, DB hoặc UI chi tiết.

27. Chưa gọi Gateway PASS.

28. Chưa gọi Production Ready.

29. Chưa gọi Release Approved.

30. Chưa gọi Go-live Approved.

**24. KẾT LUẬN PHẦN 1/4**

PACK-06 thiết lập Facebook Channel Gateway như lớp kênh chuyên trách cho Facebook Page, public comment, Messenger, live comment, webhook, private routing, human takeover, channel evidence và release control.

PACK-06 không viết lại AI Advisor.

PACK-06 không tự tính giá.

PACK-06 không tự chốt đơn.

PACK-06 không tự xử lý claim.

PACK-06 không tự sync MISA.

PACK-06 không tự quyết quyền lợi member/Diamond.

PACK-06 chỉ làm đúng vai trò gateway: nhận sự kiện kênh, gắn channel context, kiểm tra permission/policy, gọi đúng AI Advisor Core theo PACK-05, gửi phản hồi đúng public/private boundary, handoff khi cần, lưu evidence và kiểm soát release.

**TRẠNG THÁI PHẦN 1/4:**  
**FACEBOOK_CHANNEL_GATEWAY_PRINCIPLES_AND_PACK05_DEPENDENCY_LOCKED — PENDING PART 2/4**

PHẦN 2/4 sẽ khóa: **PUBLIC COMMENT / MESSENGER / LIVE ROUTING / PRIVATE HANDOFF / CHANNEL POLICY / HUMAN TAKEOVER**.

**PHẦN 2/4 — PUBLIC COMMENT / MESSENGER / LIVE ROUTING / PRIVATE HANDOFF / CHANNEL POLICY / HUMAN TAKEOVER**

**25. MỤC TIÊU CỦA PHẦN 2/4**

PHẦN 2/4 khóa cách Facebook Channel Gateway xử lý các luồng hội thoại thực tế trên Facebook, Messenger và Live.

Mục tiêu chính:

1.  Khóa public comment routing.

2.  Khóa Messenger/private chat routing.

3.  Khóa live comment routing.

4.  Khóa comment → private/Messenger handoff.

5.  Khóa channel policy cho public/private.

6.  Khóa cơ chế không public dữ liệu riêng.

7.  Khóa cơ chế không chốt đơn đầy đủ ở public comment.

8.  Khóa human takeover.

9.  Khóa cách giữ context sau khi chuyển private.

10. Khóa cách xử lý comment mơ hồ, hỏi giá, muốn mua, khiếu nại, hóa đơn, chuyển khoản, hỏi đơn.

11. Khóa cách xử lý spam/rate limit ở public và Messenger.

12. Khóa cách PACK-06 gọi PACK-05 mà không viết lại logic tư vấn.

**26. NGUYÊN TẮC ROUTING TỔNG QUÁT**

PACK-06 phải định tuyến mọi sự kiện Facebook/Messenger theo nguyên tắc:

**Nhận sự kiện → xác định kênh → xác định public/private → gắn channel context → kiểm tra channel policy → gọi PACK-05 nếu đủ điều kiện → gửi phản hồi đúng kênh → lưu evidence → handoff nếu cần.**

PACK-06 không tự trả lời theo logic riêng.

PACK-06 không tự chọn nội dung tư vấn ngoài PACK-05.

PACK-06 không tự tính giá, không tự chốt đơn, không tự xử lý hóa đơn, không tự xử lý khiếu nại ngoài channel routing.

**27. PHÂN LOẠI SỰ KIỆN KÊNH**

Mỗi sự kiện đi vào PACK-06 phải được phân loại trước khi xử lý.

Nhóm sự kiện tối thiểu gồm:

1.  Public comment.

2.  Public comment reply.

3.  Live comment.

4.  Messenger/private message.

5.  Private reply from comment nếu channel hỗ trợ.

6.  Customer reaction.

7.  Customer opt-out/stop.

8.  Customer sends phone/address/email/MST.

9.  Customer asks price.

10. Customer asks product information.

11. Customer wants to buy.

12. Customer complains.

13. Customer asks invoice.

14. Customer asks payment/order/delivery status.

15. Spam/irrelevant content.

16. Abuse/toxic/legal risk.

17. Human takeover request.

18. Unknown event.

Unknown event không được tự động trả lời nếu không có policy.

**28. PUBLIC COMMENT GOVERNANCE**

Public comment là môi trường mở, có rủi ro cao về quyền riêng tư, claim, giá cá nhân hóa và tranh luận công khai.

PACK-06 phải kiểm soát public comment theo các nguyên tắc:

1.  Trả lời ngắn.

2.  Không hỏi thông tin cá nhân.

3.  Không lặp lại thông tin riêng khách đã gửi.

4.  Không public thông tin đơn hàng.

5.  Không public hóa đơn/MST/email/địa chỉ.

6.  Không public quyền lợi member/Diamond riêng.

7.  Không public commission/referral owner.

8.  Không public quote cá nhân hóa nếu policy chặn.

9.  Không tranh luận dài.

10. Không claim vượt whitelist.

11. Không chốt đơn đầy đủ.

12. Khi cần tư vấn sâu, route sang private theo cơ chế kênh.

**29. NHÓM COMMENT PUBLIC CẦN XỬ LÝ**

**29.1. Comment hỏi thông tin sản phẩm**

Ví dụ:

- “Sâm gì vậy?”

- “Thành phần gồm gì?”

- “Có chất bảo quản không?”

- “Sấy thăng hoa là gì?”

- “Sâm trồng ở đâu?”

- “Có bán giống không?”

- “Có bằng chứng không?”

Cách xử lý:

- Gọi PACK-05 Direct Answer / Education Mode.

- Chỉ dùng public-safe content.

- Không kéo bán hàng quá sớm nếu khách chỉ hỏi thông tin.

- Không tiết lộ công thức, tỷ lệ, BOM nội bộ.

- Nếu claim nhạy cảm, kiểm Claim Guard.

**29.2. Comment hỏi giá**

Ví dụ:

- “Giá?”

- “Bao nhiêu?”

- “Nhiêu hộp?”

- “Có giảm không?”

- “Mua mấy hộp free ship?”

Cách xử lý:

- Kiểm channel policy.

- Nếu được phép báo giá public chung, chỉ nói thông tin public-safe theo runtime.

- Nếu cần quote cá nhân hóa, quyền lợi member, Diamond, phí ship theo địa chỉ hoặc số lượng, phải route private.

- Không yêu cầu khách public số điện thoại/địa chỉ.

- Không tự tính giá.

- Không hardcode ưu đãi.

**29.3. Comment muốn mua**

Ví dụ:

- “Mua sao?”

- “Chốt 2 hộp.”

- “Cho 1 hộp.”

- “Ship về…”

- “Lấy loại này.”

Cách xử lý:

- Không chốt đơn đầy đủ ở public.

- Không thu số điện thoại/địa chỉ ở public.

- Route private/Messenger theo channel policy.

- Gắn context sản phẩm/comment/live nếu có.

- Sau khi private handoff thành công, tiếp tục Order Capture theo PACK-05.

- Không nói đơn đã ghi nhận khi chưa có order_code.

**29.4. Comment mơ hồ**

Ví dụ:

- “Ib”

- “Tư vấn”

- “Quan tâm”

- “Loại nào?”

- “Có tốt không?”

- “Còn không?”

- “Ok”

- “.”

Cách xử lý:

- Không hỏi dồn.

- Trả lời ngắn, tự nhiên.

- Kích hoạt private tư vấn nếu policy cho phép.

- Gắn context bài viết/live/sản phẩm.

- Không tự suy đoán quá mức.

- Không báo giá hoặc chốt đơn nếu chưa đủ context.

**29.5. Comment chứa thông tin cá nhân**

Ví dụ khách public:

- Số điện thoại.

- Địa chỉ.

- Email.

- MST.

- Thông tin công ty.

- Ảnh chuyển khoản.

- Mã đơn.

- Thông tin khiếu nại chi tiết.

Cách xử lý:

- Không lặp lại thông tin đó.

- Không quote lại thông tin cá nhân.

- Không xác nhận chi tiết public.

- Chuyển private/handoff theo policy.

- Lưu privacy event evidence.

- Nếu cần human moderation, chuyển người phụ trách.

**29.6. Comment khiếu nại**

Ví dụ:

- “Sản phẩm lỗi.”

- “QR không quét được.”

- “Giao sai hàng.”

- “Thiếu hàng.”

- “Có mùi lạ.”

- “Nghi hàng giả.”

- “Tôi muốn đổi trả.”

Cách xử lý:

- Dừng bán.

- Không upsell.

- Trả lời public ngắn, xin lỗi và chuyển private để lấy thông tin/evidence.

- Không kết luận lỗi.

- Không hứa bồi hoàn public.

- Chuyển Complaint / Quality Case Flow theo PACK-05.

- Human takeover nếu nghiêm trọng.

**30. PUBLIC COMMENT RESPONSE MODE**

PACK-06 phải chọn response mode theo channel policy, nhưng nội dung vẫn do PACK-05 quyết định.

Các mode public gồm:

1.  Public Direct Answer.

2.  Public Safe Education.

3.  Public Soft CTA.

4.  Public-to-Private Routing.

5.  Public Complaint Acknowledgement.

6.  Public Privacy Protection.

7.  Public Human Takeover.

8.  No Response / Suppress nếu spam hoặc rủi ro.

**31. PUBLIC COMMENT — CÁC CÂU KHÔNG ĐƯỢC DÙNG**

PACK-06 không được để AI dùng các câu làm yếu lực tư vấn hoặc sai channel policy.

Không dùng kiểu:

- “Bạn tự nhắn vào Messenger để được tư vấn.”

- “Bạn inbox cho shop nhé” nếu kênh đã có cơ chế private routing.

- “Để lại số điện thoại/địa chỉ tại đây.”

- “Cho shop xin MST ở comment.”

- “Đơn của bạn đang…”

- “Bạn là hạng Diamond/Gold…”

- “Bạn được giảm riêng…”

- “Hoa hồng của người giới thiệu là…”

- “Em đã ghi nhận đơn” khi chưa có order_code.

- “Em đã xác nhận thanh toán” khi chưa có Payment Confirmation.

Nếu có cơ chế private routing hợp lệ, public response phải hỗ trợ kéo khách vào private một cách tự nhiên, không đẩy trách nhiệm sang khách.

**32. PUBLIC COMMENT — ĐỊNH HƯỚNG CÂU TRẢ LỜI AN TOÀN**

Các câu public nên ngắn, tự nhiên, không lộ dữ liệu riêng.

Ví dụ định hướng:

- “Dạ Em tư vấn riêng cho Mình để chọn đúng dòng phù hợp ạ.”

- “Dạ dòng này bên Em sẽ tư vấn kỹ hơn theo nhu cầu của Mình ạ.”

- “Dạ để chọn đúng dòng cho Mình, Em sẽ hỗ trợ Mình trong phần tư vấn riêng ạ.”

- “Dạ thông tin này Em sẽ hỗ trợ Mình ở phần riêng để bảo mật thông tin ạ.”

- “Dạ Em ghi nhận phản hồi của Mình và sẽ chuyển bộ phận phụ trách hỗ trợ Mình ạ.”

Không dùng câu public để báo đầy đủ giá cá nhân hóa, thu địa chỉ, thu hóa đơn hoặc xử lý khiếu nại chi tiết.

**33. COMMENT → PRIVATE / MESSENGER HANDOFF**

Comment → Private / Messenger Handoff là luồng trọng tâm của PACK-06.

**33.1. Điều kiện kích hoạt handoff private**

Kích hoạt khi:

1.  Khách hỏi giá cần quote cá nhân hóa.

2.  Khách muốn mua.

3.  Khách cần tư vấn sâu.

4.  Khách để lại thông tin cá nhân.

5.  Khách cần hóa đơn.

6.  Khách hỏi đơn.

7.  Khách gửi/chờ chuyển khoản.

8.  Khách khiếu nại.

9.  Khách có Diamond/member quyền lợi riêng.

10. Khách cần đổi trả/hoàn tiền.

11. Comment public có rủi ro claim/privacy.

12. AI cần hỏi thêm thông tin không nên hỏi public.

**33.2. Dữ liệu phải chuyển sang private**

Khi handoff private, PACK-06 phải chuyển context:

1.  Page.

2.  Bài viết/live.

3.  Comment gốc.

4.  Sản phẩm được nhắc.

5.  Intent dự kiến.

6.  Khách/channel reference.

7.  Thời điểm.

8.  Campaign/ads/referral nếu có.

9.  Public response đã gửi.

10. Guard/routing reason.

11. Evidence reference.

Khách không nên phải kể lại từ đầu.

**33.3. Sau khi private handoff thành công**

Sau khi handoff thành công:

- Context mặc định chuyển sang private.

- PACK-05 được phép tư vấn sâu hơn theo private policy.

- Có thể quote nếu runtime đủ.

- Có thể order capture nếu khách muốn mua.

- Có thể invoice flow nếu khách cần hóa đơn.

- Có thể complaint flow nếu khách khiếu nại.

- Public comment không tiếp tục hỏi thông tin riêng.

**33.4. Khi private handoff thất bại**

Nếu không thể mở private:

- Không hỏi thông tin cá nhân ở public.

- Không chốt đơn public nếu policy chặn.

- Không public quyền lợi riêng.

- Có thể trả lời public-safe.

- Có thể human takeover.

- Có thể ghi nhận lỗi channel.

- Phải lưu evidence handoff fail.

**34. MESSENGER ROUTING GOVERNANCE**

Messenger là kênh private, nhưng vẫn phải có routing và guard.

**34.1. Messenger inbound routing**

Khi khách gửi Messenger, PACK-06 phải xác định:

1.  Thread/conversation reference.

2.  Customer channel reference.

3.  Page.

4.  Entry source.

5.  Có đến từ comment không.

6.  Có đến từ live không.

7.  Có đến từ ads không.

8.  Có đến từ referral/Diamond link không.

9.  Khách mới hay có identity mapping.

10. Channel policy hiện tại.

11. Human takeover state.

12. Opt-out state.

13. Rate limit state.

Sau đó mới gọi PACK-05.

**34.2. Messenger được xử lý các luồng**

Messenger có thể xử lý:

- Tư vấn sản phẩm.

- Gợi ý sản phẩm.

- Quote.

- Cart.

- Order capture.

- Prefill khách cũ.

- Xác nhận thông tin đơn.

- Hóa đơn.

- Khiếu nại.

- Chuyển khoản/payment follow-up.

- Delivery follow-up.

- CRM.

- Handoff.

Tất cả phải theo PACK-05 và runtime owner.

**34.3. Messenger không được vượt quyền**

Messenger không được:

- Tự tính giá.

- Tự hardcode ưu đãi.

- Tự xác nhận đơn khi chưa có order_code.

- Tự xác nhận thanh toán.

- Tự xác nhận giao hàng.

- Tự xác nhận đã xuất hóa đơn.

- Tự quyết đổi trả/hoàn tiền.

- Tự sync MISA.

- Tự nói claim vượt whitelist.

- Tự gửi CRM khi khách opt-out hoặc có issue mở.

**35. MESSENGER SESSION STATE GOVERNANCE**

Mỗi hội thoại Messenger cần có session state.

Các trạng thái session có thể gồm:

1.  NEW_CONVERSATION.

2.  PRODUCT_INFO.

3.  CONSULTING.

4.  PRICE_REQUEST.

5.  QUOTE_IN_PROGRESS.

6.  CART_DRAFT.

7.  ORDER_CAPTURE.

8.  WAITING_CUSTOMER_CONFIRMATION.

9.  ORDER_CREATED.

10. PAYMENT_PENDING.

11. DELIVERY_FOLLOW_UP.

12. INVOICE_FLOW.

13. COMPLAINT_FLOW.

14. QUALITY_CASE_OPEN.

15. HUMAN_TAKEOVER.

16. CRM_CARE.

17. OPT_OUT.

18. CLOSED.

Session state giúp AI không trả lời rời rạc.

Không có session state thì dễ mất ngữ cảnh.

**36. MESSENGER ORDER CAPTURE ROUTING**

Khi Messenger session chuyển sang Order Capture:

PACK-06 phải bảo đảm:

1.  Kênh private hợp lệ.

2.  Có sản phẩm/cart context.

3.  Có runtime sellable pass.

4.  Có quote nếu cần.

5.  Có customer identity hoặc order capture form.

6.  Có customer confirmation.

7.  Có audit/evidence.

8.  Có handoff nếu vượt quyền.

PACK-06 không tự tạo order.

PACK-06 chỉ chuyển dữ liệu theo PACK-05 sang Commerce Runtime nếu điều kiện đủ.

**37. MESSENGER INVOICE ROUTING**

Khi khách yêu cầu hóa đơn:

PACK-06 phải bảo đảm:

1.  Xử lý trong private.

2.  Không public thông tin hóa đơn.

3.  Thu đúng form theo PACK-05.

4.  Gắn order reference nếu có.

5.  Gắn invoice request evidence.

6.  Handoff kế toán nếu cần.

7.  Không nói đã xuất hóa đơn nếu invoice runtime chưa issued.

Nếu khách đã gửi thông tin hóa đơn ở public, không lặp lại trong phản hồi public.

**38. MESSENGER COMPLAINT ROUTING**

Khi khách khiếu nại trong Messenger:

PACK-06 phải:

1.  Chuyển PACK-05 Complaint Mode.

2.  Dừng upsell.

3.  Xin evidence.

4.  Gắn case/session/order nếu có.

5.  Handoff QA/CSKH/Anti-counterfeit nếu cần.

6.  Lưu evidence.

7.  Không kết luận lỗi.

8.  Không hứa bồi hoàn khi chưa có policy.

Complaint session có ưu tiên cao hơn mọi session bán hàng.

**39. LIVE ROUTING GOVERNANCE**

Live comment có tốc độ cao, cần routing riêng.

**39.1. Live event phải có context**

Mỗi live event cần:

1.  Live reference.

2.  Page.

3.  Time window.

4.  Comment reference.

5.  Customer reference.

6.  Product context nếu có.

7.  Hero product nếu có.

8.  Offer runtime reference nếu có.

9.  Moderator owner.

10. AI automation status.

11. Spam/rate limit state.

12. Private routing eligibility.

13. Evidence reference.

**39.2. Live comment nhóm thông tin**

Nếu khách hỏi:

- “Sản phẩm gì?”

- “Thành phần?”

- “Sâm gì?”

- “Có ngon không?”

- “Dùng sao?”

AI có thể trả lời public-safe theo PACK-05 nếu không vi phạm claim/channel policy.

**39.3. Live comment hỏi giá**

Nếu khách hỏi giá trong live:

- Kiểm policy live.

- Nếu giá public chung được phép, trả lời theo runtime hoặc content live đã duyệt.

- Nếu quote phụ thuộc quyền lợi/số lượng/phí ship/member/Diamond, route private.

- Không tự tính.

- Không hardcode ưu đãi live.

- Không public quyền lợi riêng.

**39.4. Live comment muốn mua**

Nếu khách comment “chốt”, “lấy”, “1 hộp”, “2 hộp”:

- Không hoàn tất order ở public live.

- Route private/Messenger nếu policy cho phép.

- Gắn live context.

- Gắn product hero nếu comment không nêu rõ sản phẩm nhưng live context xác định được.

- Order Capture tiếp tục theo PACK-05 trong private.

- Không nói order created nếu chưa có order_code.

**39.5. Live comment khiếu nại**

Nếu có khiếu nại trong live:

- Không tranh luận public.

- Không xóa/ẩn theo cảm tính nếu chưa có moderation policy.

- Trả lời ngắn, nghiêm túc.

- Route private/handoff.

- Lưu evidence.

- Human takeover nếu nghiêm trọng.

**40. LIVE MODERATOR HANDOFF**

Live phải có human moderator hoặc owner trực.

Human takeover trong live cần khi:

1.  Comment tiêu cực lan nhanh.

2.  Khách khiếu nại nghiêm trọng.

3.  Nghi hàng giả.

4.  Khách public thông tin nhạy cảm.

5.  AI bị rate limit.

6.  AI không hiểu intent.

7.  Live offer/rules thay đổi.

8.  Comment có yếu tố pháp lý.

9.  Khách yêu cầu người thật.

10. Owner yêu cầu manual mode.

Handoff phải giữ live context và comment evidence.

**41. CHANNEL POLICY MATRIX**

| **Tình huống**         | **Public comment**               | **Messenger/private**                         | **Live comment**             |
|------------------------|----------------------------------|-----------------------------------------------|------------------------------|
| Hỏi thông tin sản phẩm | Được trả lời public-safe         | Được tư vấn sâu                               | Được trả lời ngắn            |
| Hỏi thành phần         | Chỉ public-safe                  | Có thể giải thích kỹ hơn                      | Public-safe                  |
| Hỏi claim khoa học     | Chỉ claim được duyệt             | Có thể gửi nội dung được duyệt nếu guard pass | Public-safe, ngắn            |
| Hỏi giá chung          | Theo policy                      | Theo runtime                                  | Theo live policy             |
| Quote cá nhân hóa      | Không nếu policy chặn            | Được nếu runtime đủ                           | Route private                |
| Muốn mua               | Route private                    | Order capture                                 | Route private                |
| Gửi số điện thoại      | Không lặp lại, route private     | Được xử lý theo policy                        | Không lặp lại, route private |
| Gửi địa chỉ            | Không public lại                 | Được xử lý theo policy                        | Không public lại             |
| Hóa đơn/MST            | Không public                     | Invoice flow                                  | Route private                |
| Hỏi đơn hàng           | Không public                     | Order runtime                                 | Route private                |
| Khiếu nại              | Trả lời ngắn + route/handoff     | Complaint flow                                | Route/handoff                |
| Chuyển khoản           | Không public chi tiết            | Payment follow-up                             | Route private                |
| Member/Diamond         | Không public quyền lợi riêng     | Nói nếu runtime xác nhận                      | Route private                |
| CRM                    | Không áp dụng như comment thường | Theo CRM runtime                              | Không spam live              |
| Handoff người thật     | Có thể kích hoạt                 | Có thể kích hoạt                              | Bắt buộc khi rủi ro cao      |

**42. PRIVATE HANDOFF POLICY**

Private handoff phải đảm bảo:

1.  Đúng khách.

2.  Đúng comment/source.

3.  Đúng sản phẩm/context.

4.  Đúng intent.

5.  Không mất lịch sử.

6.  Không hỏi lại thông tin đã có.

7.  Không public dữ liệu riêng.

8.  Có evidence.

9.  Có fallback nếu thất bại.

10. Có human takeover nếu cần.

Private handoff không phải chỉ gửi một câu “inbox”.

Private handoff là luồng routing có context.

**43. PUBLIC COMMENT MƠ HỒ — ROUTING MATRIX**

| **Comment**       | **Cách hiểu**           | **Routing**                                 |
|-------------------|-------------------------|---------------------------------------------|
| “Giá?”            | Price intent            | Private nếu cần quote cá nhân hóa           |
| “Ib”              | Wants private consult   | Trigger private routing nếu policy cho phép |
| “Tư vấn”          | Need advice             | Private consult                             |
| “Mua sao?”        | Buy/order intent        | Private order capture                       |
| “Loại nào?”       | Need mapping            | Private hoặc hỏi ngắn public-safe           |
| “Có tốt không?”   | Product info/claim risk | Public-safe hoặc private consult            |
| “Còn hàng không?” | Stock/sellable intent   | Runtime; không tiết lộ tồn chi tiết         |
| “Chốt”            | Buy intent              | Private order capture                       |
| “SĐT đây…”        | Personal data           | Không lặp lại, private/handoff              |
| “Xuất hóa đơn…”   | Invoice intent          | Private invoice flow                        |
| “Tôi bị lỗi…”     | Complaint               | Complaint flow + handoff nếu cần            |

**44. COMMENT CHỨA SỐ ĐIỆN THOẠI / ĐỊA CHỈ**

Khi khách để số điện thoại/địa chỉ public:

PACK-06 phải:

1.  Không lặp lại số/địa chỉ.

2.  Không xác nhận lại ở public.

3.  Không báo “số điện thoại của mình là…”.

4.  Không đưa vào câu trả lời công khai.

5.  Route private nếu có thể.

6.  Có thể tạo privacy alert nếu policy yêu cầu.

7.  Lưu evidence rằng khách đã gửi thông tin public.

8.  Handoff nếu cần moderator xử lý.

Câu public nên an toàn:

“Dạ Em sẽ hỗ trợ Mình ở phần riêng để bảo mật thông tin ạ.”

**45. COMMENT HỎI ĐƠN HÀNG**

Khi khách hỏi đơn hàng ở public:

Ví dụ:

- “Đơn tôi tới đâu rồi?”

- “Sao chưa giao?”

- “Tôi chuyển khoản rồi.”

- “Đơn mã…”

- “SĐT tôi là…”

PACK-06 phải route private.

Không public:

- Order status.

- Delivery status.

- Payment status.

- Mã đơn.

- Số điện thoại.

- Địa chỉ.

- Shipper.

- COD.

- Payment proof.

Messenger xử lý theo PACK-05 Order/Payment/Delivery Runtime.

**46. COMMENT HÓA ĐƠN / MST**

Khi khách hỏi hoặc gửi thông tin hóa đơn ở public:

PACK-06 phải:

1.  Không lặp MST/email/địa chỉ.

2.  Route private.

3.  Chuyển Invoice Flow theo PACK-05.

4.  Lưu privacy evidence.

5.  Handoff kế toán nếu phức tạp.

Không public:

- Tên công ty.

- MST.

- Email hóa đơn.

- Địa chỉ xuất hóa đơn.

- Số điện thoại nhận hóa đơn.

**47. COMMENT CHUYỂN KHOẢN**

Khi khách nói đã chuyển khoản ở public:

PACK-06 phải:

1.  Không xác nhận đã paid.

2.  Không yêu cầu public ảnh chuyển khoản.

3.  Không lặp thông tin giao dịch.

4.  Route private.

5.  Messenger xử lý Payment Follow-up theo PACK-05.

6.  Handoff kế toán/payment owner nếu cần.

Câu public nên an toàn:

“Dạ Em sẽ hỗ trợ Mình kiểm tra phần này ở phần riêng để bảo mật thông tin giao dịch ạ.”

**48. COMMENT KHIẾU NẠI / TIÊU CỰC**

Khi khách khiếu nại hoặc tiêu cực ở public:

PACK-06 phải phân loại:

1.  Khiếu nại chất lượng.

2.  Khiếu nại giao hàng.

3.  Khiếu nại thanh toán.

4.  Khiếu nại tư vấn.

5.  Nghi hàng giả.

6.  Chửi bới.

7.  Pháp lý/truyền thông.

8.  Spam/đối thủ/phá hoại.

Nguyên tắc:

- Không tranh cãi.

- Không đổ lỗi.

- Không xóa/ẩn nếu chưa có moderation policy.

- Không hứa bồi hoàn.

- Route private/handoff.

- Lưu evidence.

- Human takeover với rủi ro cao.

**49. MESSENGER HUMAN TAKEOVER**

Messenger cần human takeover khi:

1.  Khách yêu cầu gặp người thật.

2.  Khách phản ứng tiêu cực.

3.  AI không đủ dữ liệu.

4.  Khách có vấn đề pháp lý.

5.  Khách khiếu nại chất lượng.

6.  Khách yêu cầu đổi trả/hoàn tiền.

7.  Payment cần đối chiếu.

8.  Invoice phức tạp.

9.  Delivery issue phức tạp.

10. Khách nói thông tin sức khỏe nhạy cảm.

11. AI confidence thấp.

12. Owner policy yêu cầu.

Sau takeover, AI không tự tiếp tục quyết định phần vượt quyền.

**50. HUMAN TAKEOVER STATE**

Human takeover cần có trạng thái:

1.  NOT_REQUIRED.

2.  REQUIRED.

3.  REQUESTED.

4.  ASSIGNED.

5.  IN_PROGRESS.

6.  RESOLVED.

7.  RETURNED_TO_AI.

8.  CLOSED.

9.  ESCALATED.

AI chỉ được quay lại xử lý nếu state cho phép RETURNED_TO_AI hoặc policy tương đương.

**51. HUMAN TAKEOVER PACKET**

Handoff packet tối thiểu gồm:

1.  Page.

2.  Channel.

3.  Conversation/thread.

4.  Customer reference.

5.  Public/private state.

6.  Intent.

7.  Message/comment gốc.

8.  AI response gần nhất.

9.  Runtime/guard result nếu có.

10. Product/quote/order reference nếu có.

11. Complaint/invoice/payment/delivery issue nếu có.

12. Evidence đã thu.

13. Lý do handoff.

14. Mức ưu tiên.

15. Owner cần xử lý.

16. Hạn xử lý nếu policy có.

17. Trạng thái hiện tại.

Không có handoff packet thì human takeover chưa đạt.

**52. CHANNEL POLICY — AI REPLY / NO REPLY / HANDOFF**

PACK-06 phải biết khi nào AI được trả lời, khi nào không nên trả lời và khi nào handoff.

**52.1. AI được trả lời**

AI được trả lời khi:

- Channel allowed.

- Permission pass.

- Rate limit pass.

- Intent rõ hoặc có thể hỏi thêm an toàn.

- Không rủi ro cao.

- PACK-05 response instruction pass.

- Không có human takeover required.

- Không có privacy risk không kiểm soát.

**52.2. AI không nên trả lời**

AI không nên trả lời khi:

- Spam rõ.

- Nội dung không liên quan.

- Event duplicate.

- Comment từ bot nghi ngờ.

- Khách đã opt-out.

- Human takeover đang active.

- Rate limit block.

- Meta policy block.

- Không xác định public/private.

- Không xác định Page/permission.

- PACK-05 guard block “no response”.

**52.3. AI phải handoff**

AI phải handoff khi:

- Complaint nghiêm trọng.

- Legal/truyền thông.

- Payment/invoice/order issue phức tạp.

- Refund/return/exchange.

- Khách yêu cầu người thật.

- AI confidence thấp.

- Runtime xung đột.

- Privacy risk.

- Meta channel lỗi.

- Owner policy yêu cầu.

**53. RATE LIMIT / SPAM SUPPRESSION CHI TIẾT**

**53.1. Public comment rate limit**

PACK-06 phải hạn chế:

- Số lần trả lời cùng một người trong một khoảng thời gian.

- Số lần trả lời cùng một nội dung lặp.

- Số comment AI trả lời trong live theo ngưỡng.

- Số lần kéo private cùng một khách.

- Số lần trả lời thread con.

- Số lần phản hồi khi khách không tương tác tiếp.

Ngưỡng cụ thể lấy từ channel runtime/config, không hardcode trong AI.

**53.2. Messenger rate limit**

PACK-06 phải hạn chế:

- Tin liên tiếp khi khách chưa phản hồi.

- CRM follow-up ngoài eligibility.

- Message lặp.

- Message ngoài quiet hours.

- Message khi khách opt-out.

- Message khi thread đang human takeover.

- Message khi issue chưa xử lý.

**53.3. Spam classification**

Spam có thể gồm:

- Comment lặp.

- Link lạ.

- Nội dung không liên quan.

- Bot pattern.

- Chửi bới không có yêu cầu xử lý.

- Seeding phá hoại.

- Nội dung bán hàng của bên khác.

- Emoji/dấu chấm lặp vô nghĩa.

Spam không nhất thiết phải trả lời.

Có thể suppress hoặc handoff moderator theo policy.

**54. OPT-OUT / STOP MESSAGE GOVERNANCE**

Nếu khách yêu cầu không nhắn nữa, dừng nhận tin, không tư vấn nữa:

PACK-06 phải:

1.  Ghi nhận opt-out.

2.  Dừng CRM.

3.  Dừng follow-up tự động.

4.  Không tiếp tục kéo private.

5.  Không gửi tin bán hàng.

6.  Có thể gửi xác nhận ngắn nếu policy cho phép.

7.  Lưu audit/evidence.

8.  Cho phép opt-in lại nếu policy có.

Opt-out thắng CRM, sales follow-up và rebuy reminder.

**55. RETURN TO AI AFTER HUMAN TAKEOVER**

AI chỉ được quay lại sau human takeover khi:

1.  Human owner đánh dấu resolved hoặc returned_to_AI.

2.  Issue không còn vượt quyền.

3.  Customer không yêu cầu chỉ làm việc với người thật.

4.  Runtime cho phép.

5.  Context được cập nhật.

6.  Không còn complaint/payment/invoice/order issue chặn.

7.  Channel policy cho phép.

AI không tự giành lại hội thoại khi human đang xử lý.

**56. CHANNEL ERROR HANDLING**

PACK-06 phải xử lý lỗi kênh rõ ràng.

Nhóm lỗi gồm:

1.  Webhook lỗi.

2.  Permission lỗi.

3.  Token/credential lỗi.

4.  Page binding lỗi.

5.  Messenger send fail.

6.  Private reply fail.

7.  Comment reply fail.

8.  Live event delay.

9.  Duplicate event.

10. Rate limit exceeded.

11. Meta policy block.

12. Unknown event.

13. Human takeover fail.

14. Evidence capture fail.

Lỗi kênh không được làm AI gửi bừa.

**57. ROUTING STATUS**

Mỗi event cần có routing status.

Các trạng thái gợi ý:

1.  RECEIVED.

2.  CLASSIFIED.

3.  CONTEXT_READY.

4.  POLICY_CHECKED.

5.  ROUTE_TO_AI.

6.  ROUTE_TO_PRIVATE.

7.  ROUTE_TO_HUMAN.

8.  SUPPRESSED.

9.  BLOCKED_BY_POLICY.

10. BLOCKED_BY_RATE_LIMIT.

11. BLOCKED_BY_PRIVACY.

12. SENT_PUBLIC_REPLY.

13. SENT_PRIVATE_REPLY.

14. HANDOFF_REQUESTED.

15. HANDOFF_ASSIGNED.

16. FAILED.

17. CLOSED.

Trạng thái chi tiết do dev thiết kế, nhưng ý nghĩa governance phải giữ.

**58. ROUTING EVIDENCE REQUIREMENT**

Mỗi routing decision quan trọng phải có evidence:

1.  Event gốc.

2.  Channel context.

3.  Classification result.

4.  Policy result.

5.  PACK-05 response instruction nếu có.

6.  Routing decision.

7.  Sent result nếu có.

8.  Handoff result nếu có.

9.  Block reason nếu bị chặn.

10. Error nếu có.

11. Owner review nếu có.

Không có evidence thì không pass smoke.

**59. PUBLIC TO PRIVATE TRACEABILITY**

Một khách từ public comment sang Messenger phải truy vết được:

Public comment → Routing decision → Private handoff → Messenger thread → AI consult → Quote/cart/order/complaint/invoice nếu có.

Không được mất:

- Comment gốc.

- Sản phẩm/live context.

- Campaign/ads context.

- Referral context.

- Public response đã gửi.

- Lý do chuyển private.

- Message private đầu tiên.

- Session state mới.

**60. LIVE TO PRIVATE TRACEABILITY**

Một khách từ live sang Messenger phải truy vết được:

Live session → Live comment → Product hero/context → Routing decision → Messenger thread → AI consult/order capture → Result.

Không được mất live context.

Nếu khách comment “chốt 2” trong live, private session phải biết “2” đang gắn với sản phẩm nào nếu live context xác định hợp lệ.

Nếu không xác định được sản phẩm, AI phải hỏi lại ở private, không tự đoán.

**61. ADS TO MESSENGER TRACEABILITY**

Nếu khách đến từ quảng cáo:

PACK-06 phải giữ:

1.  Ads source nếu có.

2.  Campaign reference nếu có.

3.  Creative/ad reference nếu có.

4.  Landing/post reference nếu có.

5.  Entry timestamp.

6.  Customer/channel reference.

7.  Referral/Diamond reference nếu có.

8.  Messenger thread.

AI Advisor dùng context này để tư vấn đúng, nhưng không tự áp dụng offer nếu runtime không xác nhận.

**62. DIAMOND / REFERRAL CHANNEL ROUTING**

Khi event có referral/Diamond context:

PACK-06 chỉ truyền referral context vào runtime/PACK-05.

PACK-06 không tự xác nhận quyền lợi.

PACK-06 không public referral owner.

PACK-06 không public commission.

PACK-06 không tự bind nếu resolver không pass.

Nếu runtime xác nhận buyer benefit, PACK-05 quyết định câu nói phù hợp.

**63. CHANNEL-SPECIFIC CRM ROUTING**

CRM qua Messenger/Facebook phải tuân thủ cả PACK-05 và PACK-06.

Điều kiện:

1.  CRM eligibility pass từ PACK-05/CRM runtime.

2.  Channel permission pass.

3.  Customer not opt-out.

4.  Frequency cap pass.

5.  Quiet hours pass.

6.  No complaint/order/invoice issue open.

7.  Message content approved.

8.  Page/channel allowed.

9.  Rate limit pass.

10. Evidence capture ready.

Nếu một trong các điều kiện chặn, không gửi CRM.

**64. CHANNEL MODERATION GOVERNANCE**

PACK-06 cần có moderation policy cho public comment/live.

Moderation có thể gồm:

1.  Không phản hồi.

2.  Trả lời public-safe.

3.  Route private.

4.  Human takeover.

5.  Hide/delete/report nếu policy và quyền cho phép.

6.  Escalate owner.

7.  Crisis handling.

AI không tự hide/delete comment nếu chưa có policy.

**65. CRISIS / LEGAL / MEDIA ESCALATION**

Khi comment có dấu hiệu khủng hoảng:

- Pháp lý.

- Báo chí/truyền thông.

- Tố cáo hàng giả nghiêm trọng.

- Tố cáo gây hại sức khỏe.

- Tấn công thương hiệu.

- Lan truyền tiêu cực.

- Threat/blackmail.

- Chủ đề nhạy cảm.

PACK-06 phải:

1.  Dừng auto-reply nếu policy yêu cầu.

2.  Human takeover khẩn.

3.  Lưu evidence.

4.  Escalate owner.

5.  Không tranh luận public.

6.  Không xóa nếu chưa có moderation policy.

7.  Không hứa bồi thường.

8.  Không đưa claim phản bác chưa duyệt.

**66. CHANNEL POLICY CONFIG GOVERNANCE**

PACK-06 phải có channel policy được owner duyệt.

Các policy cần có:

1.  Public price allowed.

2.  Personalized quote public allowed.

3.  Public product info allowed.

4.  Public claim allowed.

5.  Private routing allowed.

6.  Private reply allowed.

7.  Messenger order capture allowed.

8.  Invoice info private only.

9.  Complaint private routing.

10. Human takeover triggers.

11. Rate limit.

12. Spam suppression.

13. Quiet hours.

14. CRM allowed.

15. Live automation allowed.

16. Page-specific rules.

17. Campaign-specific rules.

18. Diamond/referral public wording.

19. Moderation rules.

20. Disable/pause rules.

Không có policy thì fail-closed.

**67. P0 RULE REGISTRY — PHẦN 2/4**

| **Mã P0** | **Quy tắc**                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| FB-P0-21  | Public comment không được chốt đơn đầy đủ                                               |
| FB-P0-22  | Public comment không được hỏi hoặc lặp thông tin cá nhân                                |
| FB-P0-23  | Comment hỏi quote cá nhân hóa phải route private nếu policy chặn public                 |
| FB-P0-24  | Comment chứa SĐT/địa chỉ/MST/email phải được bảo vệ privacy                             |
| FB-P0-25  | Comment khiếu nại phải dừng upsell và route complaint/handoff                           |
| FB-P0-26  | Comment → Messenger handoff phải giữ context                                            |
| FB-P0-27  | Private handoff fail thì không được tiếp tục thu thông tin riêng ở public               |
| FB-P0-28  | Messenger private vẫn không được vượt runtime/guard                                     |
| FB-P0-29  | Messenger order capture phải có Customer Confirmation trước official order              |
| FB-P0-30  | Live comment muốn mua phải route private/order capture, không chốt đầy đủ ở public live |
| FB-P0-31  | Live offer không được tự áp dụng nếu runtime không xác nhận                             |
| FB-P0-32  | Human takeover phải có packet, không làm mất ngữ cảnh                                   |
| FB-P0-33  | AI không được tiếp tục tự quyết khi human takeover đang active                          |
| FB-P0-34  | Rate limit/spam suppression phải chặn gửi lặp/spam                                      |
| FB-P0-35  | Opt-out thắng CRM/follow-up                                                             |
| FB-P0-36  | Channel error không được làm AI gửi bừa                                                 |
| FB-P0-37  | Public-to-private traceability là bắt buộc                                              |
| FB-P0-38  | Live-to-private traceability là bắt buộc                                                |
| FB-P0-39  | Crisis/legal/media escalation phải handoff owner                                        |
| FB-P0-40  | Không có channel policy thì fail-closed                                                 |

**68. DONE GATE CỦA PHẦN 2/4**

PHẦN 2/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa routing tổng quát.

2.  Đã khóa phân loại sự kiện kênh.

3.  Đã khóa Public Comment Governance.

4.  Đã khóa các nhóm comment public cần xử lý.

5.  Đã khóa Public Comment Response Mode.

6.  Đã khóa các câu không được dùng ở public.

7.  Đã khóa định hướng câu trả lời public an toàn.

8.  Đã khóa Comment → Private / Messenger Handoff.

9.  Đã khóa Messenger Routing Governance.

10. Đã khóa Messenger Session State Governance.

11. Đã khóa Messenger Order Capture Routing.

12. Đã khóa Messenger Invoice Routing.

13. Đã khóa Messenger Complaint Routing.

14. Đã khóa Live Routing Governance.

15. Đã khóa Live Moderator Handoff.

16. Đã khóa Channel Policy Matrix.

17. Đã khóa Private Handoff Policy.

18. Đã khóa Public Comment Mơ Hồ Routing Matrix.

19. Đã khóa comment chứa thông tin cá nhân.

20. Đã khóa comment hỏi đơn hàng.

21. Đã khóa comment hóa đơn/MST.

22. Đã khóa comment chuyển khoản.

23. Đã khóa comment khiếu nại/tiêu cực.

24. Đã khóa Messenger Human Takeover.

25. Đã khóa Human Takeover State.

26. Đã khóa Human Takeover Packet.

27. Đã khóa AI Reply / No Reply / Handoff.

28. Đã khóa Rate Limit / Spam Suppression.

29. Đã khóa Opt-out / Stop Message Governance.

30. Đã khóa Return to AI After Human Takeover.

31. Đã khóa Channel Error Handling.

32. Đã khóa Routing Status.

33. Đã khóa Routing Evidence Requirement.

34. Đã khóa Public-to-Private Traceability.

35. Đã khóa Live-to-Private Traceability.

36. Đã khóa Ads-to-Messenger Traceability.

37. Đã khóa Diamond/Referral Channel Routing.

38. Đã khóa Channel-specific CRM Routing.

39. Đã khóa Channel Moderation Governance.

40. Đã khóa Crisis / Legal / Media Escalation.

41. Đã khóa Channel Policy Config Governance.

42. Đã khóa P0 Rule Registry phần 2.

43. Chưa đi vào code, API, DB hoặc UI chi tiết.

44. Chưa gọi Gateway PASS.

45. Chưa gọi Production Ready.

46. Chưa gọi Release Approved.

47. Chưa gọi Go-live Approved.

**69. KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 khóa toàn bộ luồng routing thực chiến cho Facebook Channel Gateway.

Public comment phải ngắn, an toàn, không lộ dữ liệu riêng và không chốt đơn đầy đủ.

Messenger/private là nơi tư vấn sâu, quote, order capture, invoice, complaint và CRM, nhưng vẫn phải tuân thủ PACK-05, runtime và guard.

Live comment phải xử lý theo tốc độ cao nhưng không được spam, không public quyền lợi riêng, không chốt đơn thiếu kiểm soát và phải giữ live context khi chuyển private.

Human takeover là bắt buộc khi có rủi ro, khiếu nại, pháp lý, payment/invoice/order issue phức tạp hoặc khi AI vượt quyền.

PACK-06 không viết lại logic tư vấn của PACK-05. PACK-06 chỉ nhận event, định tuyến đúng kênh, giữ context, bảo vệ privacy, kiểm soát rate limit, handoff khi cần và lưu evidence.

**TRẠNG THÁI PHẦN 2/4:**  
**FACEBOOK_CHANNEL_ROUTING_AND_PRIVATE_HANDOFF_GOVERNANCE_LOCKED — PENDING PART 3/4**

PHẦN 3/4 sẽ khóa: **META APP REVIEW / PERMISSION / SECURITY / RATE LIMIT / SPAM SUPPRESSION / EVIDENCE / UAT**.

**PHẦN 3/4 — META APP REVIEW / PERMISSION / SECURITY / RATE LIMIT / SPAM SUPPRESSION / EVIDENCE / UAT**

**70. MỤC TIÊU CỦA PHẦN 3/4**

PHẦN 3/4 khóa lớp điều kiện kỹ thuật–quản trị để Facebook Channel Gateway được phép vận hành trên môi trường thật.

Mục tiêu chính:

1.  Khóa Meta App Governance.

2.  Khóa App Review / Permission Boundary.

3.  Khóa Facebook Page Binding.

4.  Khóa Webhook Verification Governance.

5.  Khóa Token / Credential / Secret Governance.

6.  Khóa Security / Privacy / Data Handling.

7.  Khóa Rate Limit / Spam Suppression ở tầng kênh.

8.  Khóa Evidence Requirement cho App, Page, Webhook, Permission, Routing, UAT.

9.  Khóa UAT / Pilot Readiness.

10. Khóa điều kiện không được gọi Gateway PASS nếu chưa đủ App Review, Permission, Smoke, Evidence, Owner Sign-off.

11. Chuẩn bị nền cho PHẦN 4/4 về Smoke Matrix, Gateway Done Gate, Fail Gate và Release Control.

**71. META APP GOVERNANCE**

Meta App là điểm kết nối chính thức giữa hệ thống Ginsengfood và các tài sản Facebook/Meta như Page, Messenger, Comment, Live, Webhook.

Meta App không phải AI Advisor.

Meta App không phải Commerce Runtime.

Meta App không phải nơi quyết định giá, order, payment, invoice, CRM, MISA.

Meta App chỉ là lớp kênh kỹ thuật có kiểm soát.

**72. META APP REGISTRY**

Mỗi Meta App phải nằm trong App Registry trước khi dùng.

App Registry tối thiểu phải có:

1.  App name.

2.  App ID hoặc app reference.

3.  Business owner.

4.  Technical owner.

5.  Security owner nếu có.

6.  App environment.

7.  App mode.

8.  Permission scope.

9.  Page binding list.

10. Webhook subscription list.

11. Review status.

12. Business verification status nếu áp dụng.

13. Credential status.

14. Release status.

15. Evidence status.

16. Owner sign-off status.

Không có App Registry thì không production.

**73. META APP ENVIRONMENT**

Meta App phải phân biệt môi trường.

Các môi trường gồm:

1.  DEV.

2.  STAGING.

3.  PILOT.

4.  PRODUCTION.

Nguyên tắc:

- DEV dùng để kiểm tra kỹ thuật nội bộ.

- STAGING dùng để test gần thực tế.

- PILOT dùng cho phạm vi kiểm soát.

- PRODUCTION dùng cho khách thật sau khi đủ evidence và owner sign-off.

Không được dùng production credential cho DEV nếu không có chính sách bảo mật rõ.

Không được dùng test app để xử lý khách thật nếu chưa có owner approval.

Không được trộn dữ liệu test với dữ liệu khách thật.

**74. META APP MODE GOVERNANCE**

Meta App có thể có các trạng thái vận hành:

1.  DEVELOPMENT_MODE.

2.  REVIEW_PENDING.

3.  REVIEW_APPROVED.

4.  PILOT_ENABLED.

5.  PRODUCTION_ENABLED.

6.  PAUSED.

7.  SUSPENDED.

8.  DEPRECATED.

Nguyên tắc:

- DEVELOPMENT_MODE không được xử lý khách production.

- REVIEW_PENDING không được gọi production ready.

- REVIEW_APPROVED chưa đồng nghĩa Gateway PASS.

- PILOT_ENABLED chỉ trong phạm vi pilot.

- PRODUCTION_ENABLED cần đủ App, Page, Webhook, Permission, Smoke, Evidence, Owner Sign-off.

- PAUSED/SUSPENDED không được tiếp tục auto-reply production.

**75. APP REVIEW GOVERNANCE**

App Review là điều kiện quản trị khi Meta yêu cầu duyệt quyền.

PACK-06 phải xác định quyền nào cần review, bằng chứng nào cần chuẩn bị, ai chịu trách nhiệm và kết quả review là gì.

App Review không thay thế smoke nội bộ.

App Review được duyệt không đồng nghĩa AI Advisor vận hành đúng.

App Review chỉ chứng minh Meta cho phép App dùng một số quyền nhất định.

**76. APP REVIEW PACKET**

App Review Packet phải có tối thiểu:

1.  App identity.

2.  Business identity nếu cần.

3.  Page use case.

4.  Messenger use case.

5.  Comment reply use case.

6.  Live comment use case nếu có.

7.  Webhook use case.

8.  Data access purpose.

9.  Data storage purpose.

10. User data protection statement.

11. Human takeover policy.

12. Opt-out/stop handling nếu có CRM.

13. Permission list.

14. Screencast/demo evidence nếu Meta yêu cầu.

15. Test credentials/test user nếu Meta yêu cầu.

16. Privacy policy reference nếu cần.

17. Terms/owner approval nếu cần.

18. Review submission status.

19. Review result.

20. Evidence record.

**77. APP REVIEW RESULT STATUS**

App Review có thể có trạng thái:

1.  NOT_REQUIRED.

2.  REQUIRED_NOT_SUBMITTED.

3.  SUBMITTED.

4.  NEED_MORE_INFO.

5.  APPROVED.

6.  REJECTED.

7.  EXPIRED.

8.  RESUBMIT_REQUIRED.

Chỉ APPROVED hoặc NOT_REQUIRED theo owner review mới được xem là pass điều kiện App Review.

Nếu NEED_MORE_INFO hoặc REJECTED, không được mở production.

**78. PERMISSION GOVERNANCE**

Permission là quyền App/Page được phép dùng.

PACK-06 phải quản trị permission theo nguyên tắc tối thiểu cần thiết.

Không xin quyền dư nếu chưa có use case.

Không dùng quyền chưa được duyệt.

Không để permission thiếu mà vẫn mở production.

**79. NHÓM PERMISSION CẦN QUẢN TRỊ**

Tùy phạm vi triển khai, các nhóm quyền có thể gồm:

1.  Quyền đọc Page/comment.

2.  Quyền trả lời comment.

3.  Quyền gửi hoặc quản lý Messenger/private message.

4.  Quyền nhận webhook event.

5.  Quyền quản trị Page ở mức cần thiết.

6.  Quyền liên quan live comment nếu áp dụng.

7.  Quyền đọc basic profile/channel identity nếu áp dụng.

8.  Quyền dùng private reply nếu áp dụng.

9.  Quyền liên quan Ads context nếu pack liên quan cho phép.

10. Quyền liên quan CRM/messaging nếu policy cho phép.

Tên quyền cụ thể phụ thuộc Meta tại thời điểm triển khai và phải được dev/technical owner xác nhận bằng tài liệu chính thức của Meta.

PACK-06 khóa governance, không hardcode tên quyền nếu chưa có implementation pack.

**80. PERMISSION STATUS**

Mỗi permission phải có trạng thái:

1.  NOT_REQUESTED.

2.  REQUESTED.

3.  UNDER_REVIEW.

4.  APPROVED.

5.  REJECTED.

6.  REVOKED.

7.  EXPIRED.

8.  LIMITED.

9.  TEST_ONLY.

Chỉ permission APPROVED và đúng môi trường mới được dùng cho production.

Nếu permission REVOKED/EXPIRED/LIMITED, channel phải fail-closed hoặc pause.

**81. PAGE BINDING GOVERNANCE**

Page Binding là việc liên kết Meta App với Facebook Page.

Không có Page Binding hợp lệ thì không xử lý event production của Page.

**81.1. Page Binding phải có**

1.  Page reference.

2.  App reference.

3.  Environment.

4.  Binding status.

5.  Page owner.

6.  App owner.

7.  Permission scope.

8.  AI enabled flag.

9.  Comment enabled flag.

10. Messenger enabled flag.

11. Live enabled flag.

12. CRM enabled flag nếu có.

13. Human takeover owner.

14. Evidence.

15. Owner approval.

**81.2. Page Binding status**

Trạng thái có thể gồm:

1.  NOT_BOUND.

2.  BOUND_TEST.

3.  BOUND_STAGING.

4.  BOUND_PILOT.

5.  BOUND_PRODUCTION.

6.  PAUSED.

7.  REVOKED.

8.  ERROR.

Chỉ BOUND_PRODUCTION với owner sign-off mới được xử lý khách thật ở production.

**82. WEBHOOK GOVERNANCE**

Webhook là cửa nhận sự kiện từ Facebook/Meta.

Webhook phải được kiểm soát chặt vì đây là nơi sự kiện bên ngoài đi vào hệ thống.

**82.1. Webhook phải xác thực**

PACK-06 phải yêu cầu webhook có cơ chế xác thực/kiểm tra tính hợp lệ theo chuẩn kỹ thuật được owner duyệt.

Webhook không xác thực thì không xử lý production.

Không được nhận event không rõ nguồn.

Không được để event giả tạo trigger AI reply.

**82.2. Webhook subscription phải có registry**

Mỗi webhook subscription phải có:

1.  App.

2.  Page.

3.  Event type.

4.  Environment.

5.  Subscription status.

6.  Verification status.

7.  Owner.

8.  Evidence.

9.  Test result.

10. Release status.

**82.3. Webhook event phải có audit**

Mỗi event quan trọng phải ghi:

1.  Event received time.

2.  Event type.

3.  Page reference.

4.  App reference.

5.  Customer/channel reference.

6.  Public/private state nếu xác định được.

7.  Verification result.

8.  Routing decision.

9.  Error nếu có.

10. Evidence reference.

**83. WEBHOOK EVENT DEDUPLICATION**

Facebook/Meta có thể gửi event lặp, callback trễ hoặc retry.

PACK-06 phải chống xử lý trùng.

Nguyên tắc:

1.  Cùng một event không được tạo nhiều phản hồi sai.

2.  Duplicate event phải được nhận diện.

3.  Retry event không được làm AI gửi nhiều lần.

4.  Private handoff không được tạo lặp vô hạn.

5.  Order intent từ cùng comment không được tạo nhiều order draft trùng.

6.  Complaint event không được tạo nhiều case trùng nếu cùng nguồn.

7.  Evidence phải giữ được event gốc và event lặp.

Nếu không deduplicate được, phải fail-closed hoặc đưa manual review.

**84. TOKEN / CREDENTIAL / SECRET GOVERNANCE**

Token, credential, secret là tài sản nhạy cảm.

PACK-06 phải bảo vệ tuyệt đối.

**84.1. Nguyên tắc bảo mật**

Không được:

- Ghi token trong tài liệu public.

- Gửi token qua chat.

- Lưu token trong file không bảo mật.

- Dùng chung token production cho test.

- Cho người không có quyền truy cập token.

- Đưa token vào log.

- Đưa token vào evidence gửi owner không đúng quyền.

- Hardcode token trong code hoặc config không bảo mật.

**84.2. Credential status**

Credential phải có trạng thái:

1.  NOT_CREATED.

2.  CREATED_TEST.

3.  CREATED_STAGING.

4.  CREATED_PRODUCTION.

5.  ACTIVE.

6.  ROTATION_REQUIRED.

7.  EXPIRED.

8.  REVOKED.

9.  COMPROMISED.

10. DISABLED.

Nếu credential EXPIRED/REVOKED/COMPROMISED thì channel phải pause hoặc fail-closed.

**84.3. Credential rotation**

PACK-06 phải có nguyên tắc rotation:

1.  Ai có quyền tạo.

2.  Ai có quyền thay.

3.  Khi nào phải thay.

4.  Thay xong test lại gì.

5.  Evidence rotation.

6.  Rollback nếu credential mới lỗi.

7.  Owner approval.

8.  Audit.

Không thay credential âm thầm.

**85. SECURITY GOVERNANCE**

PACK-06 phải đảm bảo bảo mật ở tầng kênh.

Nhóm bảo mật cần kiểm soát:

1.  App permission.

2.  Page access.

3.  Webhook authenticity.

4.  Token/credential.

5.  User access.

6.  Human takeover permission.

7.  Evidence storage.

8.  Personal data handling.

9.  Logging policy.

10. Error exposure.

11. Rate limit abuse.

12. Bot/spam abuse.

13. Production switch.

14. Pause/disable control.

**86. ACCESS CONTROL GOVERNANCE**

Không phải ai cũng có quyền cấu hình hoặc vận hành Facebook Gateway.

Các vai trò cần phân tách:

1.  Business owner.

2.  Technical owner.

3.  Page admin.

4.  Moderator.

5.  AI operator.

6.  CSKH owner.

7.  QA owner.

8.  Kế toán owner nếu invoice/payment handoff.

9.  Security owner.

10. Release owner.

Nguyên tắc:

- Người vận hành Page không tự sửa Claim Guard.

- Moderator không tự đổi giá/runtime.

- AI operator không tự mở permission production.

- Kế toán không sửa channel routing nếu không được phân quyền.

- Dev không tự bật production khi chưa owner sign-off.

**87. PRIVACY GOVERNANCE**

Facebook/Messenger chứa nhiều dữ liệu cá nhân.

PACK-06 phải khóa nguyên tắc bảo vệ privacy.

**87.1. Dữ liệu privacy-sensitive**

Gồm:

- Tên khách nếu định danh.

- Số điện thoại.

- Địa chỉ.

- Email.

- MST.

- Tên công ty.

- Thông tin hóa đơn.

- Thông tin đơn hàng.

- Mã đơn.

- Thanh toán/chuyển khoản.

- Ảnh chuyển khoản.

- Complaint evidence.

- Ảnh/video sản phẩm lỗi.

- Lịch sử mua.

- Member tier.

- Diamond/referral context.

- Nội dung private chat.

**87.2. Privacy guard**

PACK-06 phải chặn:

1.  Lặp lại dữ liệu cá nhân ở public.

2.  Gửi nhầm thông tin khách này cho khách khác.

3.  Public order status.

4.  Public invoice information.

5.  Public payment proof.

6.  Public complaint details.

7.  Public member tier.

8.  Public Diamond/referral owner.

9.  Ghi log chứa dữ liệu nhạy cảm không kiểm soát.

10. Cho human không đúng quyền xem dữ liệu.

**88. DATA RETENTION GOVERNANCE**

PACK-06 phải có nguyên tắc lưu giữ dữ liệu kênh.

Các nhóm cần retention policy:

1.  Comment/message raw.

2.  AI response.

3.  Channel context.

4.  Routing decision.

5.  Private handoff.

6.  Human takeover packet.

7.  Complaint evidence.

8.  Invoice information.

9.  Payment proof.

10. CRM records.

11. Error logs.

12. Smoke evidence.

Retention cụ thể do policy doanh nghiệp và pháp lý xác định.

PACK-06 chỉ khóa nguyên tắc: không lưu tùy tiện, không xóa bừa, không giữ dữ liệu nhạy cảm quá phạm vi nếu policy không cho phép.

**89. RATE LIMIT GOVERNANCE**

Rate Limit là điều kiện chống spam và chống vượt giới hạn kênh.

**89.1. Rate limit theo khách**

Cần kiểm soát:

- Số tin gửi cho một khách trong một khoảng thời gian.

- Số lần kéo private.

- Số lần hỏi lại khi khách không phản hồi.

- Số CRM follow-up.

- Số lần AI trả lời cùng intent lặp.

**89.2. Rate limit theo Page**

Cần kiểm soát:

- Tổng số public reply.

- Tổng số Messenger reply.

- Tổng số private handoff.

- Tổng số live comment reply.

- Tổng số error retry.

- Tổng số CRM gửi ra.

**89.3. Rate limit theo Live**

Live cần kiểm soát riêng:

- Số comment AI trả lời mỗi phút.

- Số reply cho cùng một người.

- Số private routing trong một khoảng thời gian.

- Số lần trả lời comment giống nhau.

- Số lần AI trả lời trong thread con.

- Rate limit khi comment tăng đột biến.

Ngưỡng cụ thể phải do channel runtime/config quản lý, không hardcode trong AI.

**90. SPAM SUPPRESSION GOVERNANCE**

Spam suppression là cơ chế chặn nội dung không cần AI trả lời.

**90.1. Spam signal**

Spam signal có thể gồm:

- Comment lặp.

- Nội dung vô nghĩa.

- Link lạ.

- Từ khóa phá hoại.

- Bot pattern.

- Nội dung bán hàng bên ngoài.

- Comment không liên quan.

- Ký tự/emoji lặp.

- Câu hỏi đã trả lời nhiều lần trong cùng thread.

- User gửi quá nhiều tin trong thời gian ngắn.

**90.2. Spam action**

Action có thể gồm:

1.  SUPPRESS_NO_REPLY.

2.  RATE_LIMIT.

3.  HUMAN_MODERATION.

4.  PRIVATE_ROUTE nếu có nhu cầu thật.

5.  BLOCK_BY_POLICY nếu nghiêm trọng.

6.  LOG_ONLY.

7.  ESCALATE nếu có rủi ro.

AI không tự tranh luận với spam.

**91. QUIET HOURS / FREQUENCY GOVERNANCE**

Nếu channel policy có quiet hours hoặc frequency cap, PACK-06 phải tuân thủ.

Nguyên tắc:

- Không gửi CRM ngoài giờ cho phép.

- Không follow-up khi khách im lặng nếu frequency cap chặn.

- Không gửi tin bán hàng sau opt-out.

- Không gửi lại cùng nội dung nhiều lần.

- Không gửi dồn khi hệ thống hết lỗi.

- Không gửi bù hàng loạt sau pause nếu policy không cho phép.

**92. MESSAGE DELIVERY GOVERNANCE**

Nếu kênh trả trạng thái gửi tin, PACK-06 phải ghi nhận.

Các trạng thái có thể gồm:

1.  SENT.

2.  DELIVERED.

3.  FAILED.

4.  BLOCKED.

5.  RATE_LIMITED.

6.  POLICY_BLOCKED.

7.  USER_UNAVAILABLE.

8.  UNKNOWN.

SENT không đồng nghĩa khách đã đọc.

FAILED không được retry mù nếu có nguy cơ spam.

POLICY_BLOCKED không được bypass bằng kênh khác nếu chưa có owner approval.

**93. ERROR HANDLING GOVERNANCE**

PACK-06 phải phân loại lỗi.

Nhóm lỗi gồm:

1.  App error.

2.  Permission error.

3.  Token/credential error.

4.  Webhook verification error.

5.  Page binding error.

6.  Message send error.

7.  Comment reply error.

8.  Private routing error.

9.  Live event error.

10. Rate limit error.

11. Spam detection error.

12. Privacy guard error.

13. AI core unavailable.

14. Runtime unavailable.

15. Human takeover unavailable.

16. Evidence capture error.

17. Unknown error.

Mỗi lỗi phải có action phù hợp.

Không gom tất cả thành “Facebook lỗi”.

**94. ERROR ACTION MATRIX**

| **Loại lỗi**               | **Hành động bắt buộc**                                   |
|----------------------------|----------------------------------------------------------|
| App error                  | Pause channel nếu ảnh hưởng production, technical review |
| Permission error           | Không gửi, đưa admin/technical review                    |
| Token error                | Pause, credential review                                 |
| Webhook verification error | Không xử lý event                                        |
| Page binding error         | Không xử lý Page đó                                      |
| Send error                 | Ghi evidence, retry theo policy nếu an toàn              |
| Private routing error      | Không hỏi public thông tin riêng, fallback/handoff       |
| Live event delay           | Không trả lời nếu context đã lỗi thời                    |
| Rate limit error           | Dừng gửi, không retry dồn                                |
| Privacy guard error        | Chặn gửi, owner/security review                          |
| AI core unavailable        | Fallback/handoff, không tự tạo response riêng            |
| Runtime unavailable        | Fail-closed, không quote/order                           |
| Human takeover unavailable | Escalate owner, không tự xử lý vượt quyền                |
| Evidence capture error     | Không gọi smoke pass/release pass                        |

**95. UAT GOVERNANCE**

UAT là kiểm thử chấp nhận người dùng trước khi pilot/production.

UAT của PACK-06 phải kiểm tra cả kênh và luồng AI Advisor tích hợp.

UAT không phải chỉ kiểm tra “comment có trả lời không”.

UAT phải kiểm tra:

1.  Page đúng.

2.  App đúng.

3.  Permission đúng.

4.  Webhook nhận đúng.

5.  Public/private routing đúng.

6.  PACK-05 behavior được gọi đúng.

7.  Không public dữ liệu riêng.

8.  Không trả sai claim.

9.  Không quote sai channel.

10. Comment → Messenger giữ context.

11. Messenger order capture đúng.

12. Complaint handoff đúng.

13. Invoice routing đúng.

14. Human takeover đúng.

15. Spam/rate limit đúng.

16. Evidence đầy đủ.

**96. UAT SCOPE**

UAT scope cần xác định rõ:

1.  Page nào.

2.  App nào.

3.  Kênh nào.

4.  Loại event nào.

5.  Sản phẩm nào.

6.  Intent nào.

7.  User test nào.

8.  Runtime nào.

9.  Claim nào.

10. Order/quote flow nào.

11. Complaint/invoice flow nào.

12. CRM flow nào nếu có.

13. Live flow nào nếu có.

14. Ads/referral flow nào nếu có.

15. Owner nào review.

Không có UAT scope thì không UAT pass.

**97. UAT TEST DATA**

UAT cần dữ liệu kiểm thử có kiểm soát:

1.  Khách mới.

2.  Khách cũ.

3.  Member.

4.  Diamond/referral context.

5.  Khách ăn chay.

6.  Khách mua tặng.

7.  Khách hỏi giá.

8.  Khách muốn mua.

9.  Khách khiếu nại.

10. Khách yêu cầu hóa đơn.

11. Khách gửi số điện thoại public.

12. Khách gửi MST public.

13. Khách chuyển khoản.

14. Khách hỏi đơn hàng.

15. Khách opt-out.

16. Spam/irrelevant comment.

17. Live high-volume comment.

18. Permission error simulation.

19. Webhook duplicate simulation.

20. Private routing fail simulation.

**98. UAT ACCEPTANCE CRITERIA**

UAT chỉ đạt khi:

1.  Tất cả P0 UAT pass.

2.  Không có privacy leakage.

3.  Không có claim violation.

4.  Không có auto-reply sai Page.

5.  Không có public quote cá nhân hóa sai policy.

6.  Không có order capture ở public.

7.  Không có CRM gửi sai điều kiện.

8.  Không có AI tự xử lý khi human takeover required.

9.  Không có duplicate reply nghiêm trọng.

10. Không có rate-limit spam.

11. Evidence đầy đủ.

12. Owner review đạt.

UAT pass không đồng nghĩa Gateway PASS production nếu chưa có release decision.

**99. EVIDENCE GOVERNANCE**

PACK-06 phải có Evidence Governance riêng cho channel.

Evidence phải chứng minh:

1.  App hợp lệ.

2.  Permission hợp lệ.

3.  Page binding hợp lệ.

4.  Webhook hợp lệ.

5.  Routing đúng.

6.  PACK-05 được gọi đúng.

7.  Channel policy được áp dụng đúng.

8.  Public/private boundary đúng.

9.  Privacy guard đúng.

10. Human takeover đúng.

11. Rate limit/spam đúng.

12. UAT pass.

13. Owner review.

14. Release decision.

**100. EVIDENCE PACKET CHO META APP**

Meta App Evidence Packet gồm:

1.  App Registry record.

2.  App owner approval.

3.  App environment.

4.  App mode.

5.  Permission list.

6.  Review status.

7.  Credential status.

8.  Security review.

9.  App test result.

10. Release status.

**101. EVIDENCE PACKET CHO PAGE**

Page Evidence Packet gồm:

1.  Page Registry record.

2.  Page owner approval.

3.  App binding.

4.  AI enabled status.

5.  Comment/Messenger/Live enabled status.

6.  Human takeover owner.

7.  Page test result.

8.  Pilot/production status.

9.  Evidence status.

**102. EVIDENCE PACKET CHO WEBHOOK**

Webhook Evidence Packet gồm:

1.  Webhook subscription.

2.  Event type.

3.  Verification result.

4.  Test event.

5.  Received event log.

6.  Deduplication test.

7.  Error test.

8.  Routing result.

9.  Owner review.

**103. EVIDENCE PACKET CHO ROUTING**

Routing Evidence Packet gồm:

1.  Incoming event.

2.  Channel context.

3.  Classification.

4.  Policy check.

5.  PACK-05 instruction.

6.  Routing decision.

7.  Response result.

8.  Private handoff result nếu có.

9.  Human takeover result nếu có.

10. Block reason nếu có.

11. Evidence reference.

**104. EVIDENCE PACKET CHO PRIVACY**

Privacy Evidence Packet gồm:

1.  Public comment chứa thông tin riêng.

2.  AI không lặp lại dữ liệu riêng.

3.  Private routing hoặc handoff.

4.  Privacy block result.

5.  Owner/security review nếu cần.

6.  Retest evidence nếu có lỗi.

**105. EVIDENCE PACKET CHO HUMAN TAKEOVER**

Human Takeover Evidence Packet gồm:

1.  Trigger.

2.  Conversation context.

3.  Handoff packet.

4.  Assigned owner.

5.  Time of takeover.

6.  Resolution state.

7.  Return-to-AI state nếu có.

8.  Evidence khách không phải kể lại từ đầu.

9.  Owner review.

**106. EVIDENCE PACKET CHO UAT**

UAT Evidence Packet gồm:

1.  UAT scope.

2.  UAT test cases.

3.  Test data.

4.  Expected result.

5.  Actual result.

6.  Screenshot/log/evidence nếu có.

7.  Issue list.

8.  Retest result.

9.  Reviewer.

10. Pass/fail conclusion.

**107. MONITORING GOVERNANCE**

PACK-06 cần monitoring để giám sát gateway.

Các chỉ số tối thiểu:

1.  Số event nhận.

2.  Số event public comment.

3.  Số event Messenger.

4.  Số live comment.

5.  Số event route AI.

6.  Số event route private.

7.  Số event handoff human.

8.  Số event suppressed.

9.  Số event blocked by privacy.

10. Số event blocked by rate limit.

11. Số reply gửi thành công.

12. Số reply gửi lỗi.

13. Số webhook duplicate.

14. Số permission/token error.

15. Số policy block.

16. Số privacy incident.

17. Số claim block.

18. Số complaint routed.

19. Số invoice routed.

20. Số order capture routed.

**108. ALERT GOVERNANCE**

PACK-06 phải phát alert khi có rủi ro.

Alert tối thiểu:

1.  App permission error.

2.  Token expired/revoked.

3.  Webhook verification fail.

4.  Page binding error.

5.  Message send failure spike.

6.  Private routing fail spike.

7.  Privacy leakage risk.

8.  Public personal data detected.

9.  Claim risk detected.

10. Rate limit spike.

11. Spam surge.

12. Human takeover unavailable.

13. Complaint surge.

14. Live comment overload.

15. Evidence capture failure.

16. P0 issue detected.

Alert phải có owner.

Alert không được chỉ hiện rồi bỏ qua.

**109. INCIDENT GOVERNANCE**

Incident là sự cố cần xử lý có kiểm soát.

Nhóm incident của PACK-06 gồm:

1.  AI public dữ liệu riêng.

2.  AI trả claim sai ở public.

3.  AI báo giá sai ở Facebook.

4.  AI chốt sai sản phẩm bị sale lock.

5.  AI spam comment/Messenger.

6.  Webhook nhận nhầm Page.

7.  App permission bị revoke.

8.  Token lộ/rủi ro.

9.  Human takeover không hoạt động.

10. Complaint không được chuyển.

11. Invoice data bị public.

12. Payment proof bị public.

13. Gateway trả lời nhầm khách.

14. Live automation lỗi diện rộng.

15. Evidence mất/không lưu.

Incident P0 phải chặn release hoặc pause production.

**110. INCIDENT RESPONSE**

Khi có incident, PACK-06 phải:

1.  Xác định incident type.

2.  Xác định severity.

3.  Pause channel nếu cần.

4.  Chặn automation liên quan.

5.  Lưu evidence.

6.  Gán owner.

7.  Điều tra nguồn lỗi.

8.  Sửa lỗi.

9.  Retest.

10. Owner review.

11. Ghi kết luận.

12. Chỉ mở lại khi đủ điều kiện.

Không được xóa log để che lỗi.

**111. UAT OWNER SIGN-OFF**

UAT cần owner sign-off theo từng khu vực.

| **Khu vực** | **Owner ký duyệt**                | **Nội dung duyệt**                       |
|-------------|-----------------------------------|------------------------------------------|
| Page        | Page owner                        | Đúng Page, đúng trạng thái, đúng phạm vi |
| App         | Technical owner                   | App/permission/webhook đúng              |
| Security    | Security owner                    | Token, webhook, privacy, access đúng     |
| AI behavior | PACK-05 owner                     | AI dùng đúng behavior                    |
| Claim       | Claim/Safety owner                | Không claim sai                          |
| Commerce    | Commerce owner                    | Quote/order routing đúng                 |
| CSKH/QA     | CSKH/QA owner                     | Complaint handoff đúng                   |
| Kế toán     | Finance/Kế toán owner nếu áp dụng | Invoice/payment handoff đúng             |
| CRM         | CRM owner nếu áp dụng             | Frequency/opt-out đúng                   |
| Release     | Release owner                     | Đủ điều kiện pilot/production            |

**112. PILOT READINESS GOVERNANCE**

PACK-06 chỉ được pilot khi:

1.  App/Page/Permission đủ cho pilot.

2.  Webhook pass.

3.  PACK-05 integration pass trong phạm vi pilot.

4.  Public/private routing pass.

5.  Human takeover ready.

6.  Rate limit/spam suppression ready.

7.  Evidence capture ready.

8.  UAT P0 pass.

9.  Owner sign-off pilot.

10. Pause/disable path ready.

Pilot không đồng nghĩa Gateway PASS.

Pilot chỉ là thử trong phạm vi kiểm soát.

**113. PILOT SCOPE CONTROL**

Pilot phải giới hạn rõ:

1.  Page nào.

2.  Kênh nào.

3.  Thời gian nào.

4.  Intent nào AI được trả lời.

5.  Intent nào phải handoff.

6.  Sản phẩm nào được tư vấn.

7.  Có quote hay không.

8.  Có order capture hay không.

9.  Có CRM hay không.

10. Có live hay không.

11. Human owner trực là ai.

12. Monitoring ai theo dõi.

13. Tiêu chí dừng pilot.

14. Tiêu chí pass pilot.

Không có scope thì không pilot.

**114. PILOT STOP CRITERIA**

Pilot phải dừng nếu:

1.  Có privacy leakage.

2.  Có claim violation.

3.  Có báo giá sai.

4.  Có chốt SKU bị chặn.

5.  Có order sai trạng thái.

6.  Có spam nghiêm trọng.

7.  Có complaint không handoff.

8.  Có human takeover fail.

9.  Có App/permission/token issue.

10. Có evidence capture fail nghiêm trọng.

11. Owner yêu cầu dừng.

12. P0 issue mở.

**115. PRODUCTION READINESS CONTROL**

PACK-06 không được production nếu thiếu một trong các điều kiện:

1.  App approved hoặc not required được owner xác nhận.

2.  Permission đủ.

3.  Page binding production.

4.  Webhook production verified.

5.  PACK-05 behavior integration pass.

6.  Channel policy approved.

7.  Public/private routing pass.

8.  Privacy smoke pass.

9.  Rate limit/spam suppression pass.

10. Human takeover pass.

11. UAT pass.

12. Pilot pass nếu policy yêu cầu.

13. Evidence accepted.

14. No P0 open.

15. Owner sign-off.

16. Release decision.

**116. PACK-06 P0 RULE REGISTRY — PHẦN 3/4**

| **Mã P0** | **Quy tắc**                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| FB-P0-41  | Meta App phải có registry trước khi dùng                                                |
| FB-P0-42  | App Review/Permission chưa đạt thì không mở production channel                          |
| FB-P0-43  | Permission thiếu/revoked/expired thì channel phải fail-closed hoặc pause                |
| FB-P0-44  | Page Binding production bắt buộc trước khi xử lý khách thật                             |
| FB-P0-45  | Webhook phải xác thực trước khi xử lý event                                             |
| FB-P0-46  | Webhook duplicate không được tạo reply/order/case trùng                                 |
| FB-P0-47  | Token/credential/secret không được hardcode hoặc lộ trong log/evidence sai quyền        |
| FB-P0-48  | Credential compromised thì phải pause channel                                           |
| FB-P0-49  | Access control phải phân quyền rõ, dev/operator không tự bật production                 |
| FB-P0-50  | Privacy guard bắt buộc cho dữ liệu cá nhân                                              |
| FB-P0-51  | Rate limit theo khách/Page/Live là bắt buộc                                             |
| FB-P0-52  | Spam suppression không được để AI tranh luận/spam                                       |
| FB-P0-53  | Quiet hours/frequency cap phải được tôn trọng nếu policy có                             |
| FB-P0-54  | Channel error không được retry/gửi bù gây spam                                          |
| FB-P0-55  | UAT không đạt P0 thì không pilot/production                                             |
| FB-P0-56  | Không có evidence packet thì không Gateway PASS                                         |
| FB-P0-57  | Monitoring/alert phải có owner xử lý                                                    |
| FB-P0-58  | Incident P0 phải pause hoặc chặn release                                                |
| FB-P0-59  | Pilot phải có scope và stop criteria                                                    |
| FB-P0-60  | Production readiness phải có evidence accepted, no P0, owner sign-off, release decision |

**117. DONE GATE CỦA PHẦN 3/4**

PHẦN 3/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa Meta App Governance.

2.  Đã khóa Meta App Registry.

3.  Đã khóa App Environment.

4.  Đã khóa App Mode Governance.

5.  Đã khóa App Review Governance.

6.  Đã khóa App Review Packet.

7.  Đã khóa App Review Result Status.

8.  Đã khóa Permission Governance.

9.  Đã khóa nhóm Permission cần quản trị.

10. Đã khóa Permission Status.

11. Đã khóa Page Binding Governance.

12. Đã khóa Webhook Governance.

13. Đã khóa Webhook Event Deduplication.

14. Đã khóa Token / Credential / Secret Governance.

15. Đã khóa Credential Rotation.

16. Đã khóa Security Governance.

17. Đã khóa Access Control Governance.

18. Đã khóa Privacy Governance.

19. Đã khóa Data Retention Governance.

20. Đã khóa Rate Limit Governance.

21. Đã khóa Spam Suppression Governance.

22. Đã khóa Quiet Hours / Frequency Governance.

23. Đã khóa Message Delivery Governance.

24. Đã khóa Error Handling Governance.

25. Đã khóa Error Action Matrix.

26. Đã khóa UAT Governance.

27. Đã khóa UAT Scope.

28. Đã khóa UAT Test Data.

29. Đã khóa UAT Acceptance Criteria.

30. Đã khóa Evidence Governance.

31. Đã khóa Evidence Packet cho Meta App.

32. Đã khóa Evidence Packet cho Page.

33. Đã khóa Evidence Packet cho Webhook.

34. Đã khóa Evidence Packet cho Routing.

35. Đã khóa Evidence Packet cho Privacy.

36. Đã khóa Evidence Packet cho Human Takeover.

37. Đã khóa Evidence Packet cho UAT.

38. Đã khóa Monitoring Governance.

39. Đã khóa Alert Governance.

40. Đã khóa Incident Governance.

41. Đã khóa Incident Response.

42. Đã khóa UAT Owner Sign-off.

43. Đã khóa Pilot Readiness Governance.

44. Đã khóa Pilot Scope Control.

45. Đã khóa Pilot Stop Criteria.

46. Đã khóa Production Readiness Control.

47. Đã khóa P0 Rule Registry phần 3.

48. Chưa đi vào code, API, DB hoặc UI chi tiết.

49. Chưa gọi Gateway PASS.

50. Chưa gọi Production Ready.

51. Chưa gọi Release Approved.

52. Chưa gọi Go-live Approved.

**118. KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 khóa điều kiện nền để Facebook Channel Gateway có thể được kiểm thử, pilot và chuẩn bị production một cách có kiểm soát.

Meta App phải có registry.

Permission phải đúng.

Page Binding phải hợp lệ.

Webhook phải xác thực.

Token/credential phải được bảo mật.

Rate limit và spam suppression phải có.

Privacy guard phải chặn rò dữ liệu cá nhân.

UAT phải có scope, test data, expected result, evidence và owner review.

Pilot phải có phạm vi, điều kiện dừng và người chịu trách nhiệm.

Production readiness không được gọi nếu thiếu App Review/Permission, Page Binding, Webhook, PACK-05 behavior integration, Privacy smoke, Human takeover, Evidence accepted, No P0, Owner sign-off và Release decision.

**TRẠNG THÁI PHẦN 3/4:**  
**META_APP_PERMISSION_SECURITY_EVIDENCE_UAT_GOVERNANCE_LOCKED — PENDING PART 4/4**

PHẦN 4/4 sẽ khóa: **Smoke Matrix / Gateway Done Gate / Fail Gate / Release Control / PACK-06 Final Conclusion**.

**PHẦN 4/4 — SMOKE MATRIX / GATEWAY DONE GATE / FAIL GATE / RELEASE CONTROL / PACK-06 FINAL CONCLUSION**

**119. MỤC TIÊU CỦA PHẦN 4/4**

PHẦN 4/4 khóa lớp kiểm thử, bằng chứng, điều kiện hoàn tất, điều kiện fail, điều kiện release và kết luận cuối cho PACK-06.

Mục tiêu chính:

1.  Khóa Smoke Matrix cho Facebook Channel Gateway.

2.  Khóa smoke cho Meta App, Page, Webhook, Permission.

3.  Khóa smoke cho public comment, Messenger, Live, private handoff.

4.  Khóa smoke cho privacy, human takeover, rate limit, spam suppression.

5.  Khóa smoke cho dependency với PACK-05.

6.  Khóa smoke cho quote/order/invoice/complaint/CRM routing qua kênh Facebook.

7.  Khóa Gateway Done Gate theo từng tầng.

8.  Khóa Fail Gate cho các lỗi không được chấp nhận.

9.  Khóa Release Control cho DEV / STAGING / PILOT / PRODUCTION.

10. Khóa kết luận cuối của PACK-06.

**120. NGUYÊN TẮC SMOKE CỦA PACK-06**

Smoke test của PACK-06 không chỉ kiểm tra “Facebook có trả lời được comment hay không”.

Smoke test phải chứng minh:

1.  App đúng.

2.  Page đúng.

3.  Permission đúng.

4.  Webhook nhận đúng.

5.  Event phân loại đúng.

6.  Public/private boundary đúng.

7.  Comment → Messenger giữ context.

8.  Messenger xử lý đúng routing.

9.  Live comment không spam.

10. Human takeover hoạt động.

11. Privacy guard chặn rò dữ liệu.

12. Rate limit hoạt động.

13. Spam suppression hoạt động.

14. PACK-05 được gọi đúng.

15. AI không tự tính giá.

16. AI không tự chốt đơn ở public.

17. AI không public dữ liệu cá nhân.

18. AI không nói claim sai.

19. Evidence đầy đủ.

20. Không gọi Gateway PASS nếu chưa có owner sign-off.

**121. PHẠM VI SMOKE MATRIX CỦA PACK-06**

Smoke Matrix bao phủ các nhóm:

1.  Meta App / Permission / App Review.

2.  Page Registry / Page Binding.

3.  Webhook / Event Verification / Deduplication.

4.  Public Comment Routing.

5.  Comment → Messenger / Private Handoff.

6.  Messenger Routing / Session State.

7.  Live Comment Routing.

8.  Human Takeover.

9.  Privacy / Personal Data Protection.

10. Rate Limit / Spam Suppression / Quiet Hours.

11. PACK-05 Dependency / AI Advisor Behavior.

12. Quote / Order / Payment / Delivery / Invoice Routing.

13. Complaint / Quality Case Routing.

14. CRM / Opt-out / Follow-up.

15. Ads / Campaign / Diamond Referral Context.

16. Evidence / Audit / Traceability.

17. UAT / Pilot / Release Control.

18. Fail-closed / Pause / Disable.

**122. FB SMOKE MATRIX — META APP / PERMISSION / APP REVIEW**

| **Mã smoke** | **Tình huống kiểm thử**               | **Kết quả bắt buộc**                                  |
|--------------|---------------------------------------|-------------------------------------------------------|
| FB-SMK-001   | Meta App chưa có App Registry         | Không được dùng cho production                        |
| FB-SMK-002   | App ở DEVELOPMENT_MODE                | Không xử lý khách thật                                |
| FB-SMK-003   | App Review REQUIRED nhưng chưa submit | Không mở production                                   |
| FB-SMK-004   | App Review NEED_MORE_INFO             | Không gọi Gateway PASS                                |
| FB-SMK-005   | App Review APPROVED                   | Chỉ pass điều kiện App Review, chưa phải Gateway PASS |
| FB-SMK-006   | Permission thiếu                      | Channel fail-closed                                   |
| FB-SMK-007   | Permission bị REVOKED/EXPIRED         | Pause channel liên quan                               |
| FB-SMK-008   | Permission TEST_ONLY                  | Không dùng production                                 |
| FB-SMK-009   | Business/Page owner chưa approve      | Không production                                      |
| FB-SMK-010   | App evidence packet thiếu             | Không pass UAT/release                                |

**123. FB SMOKE MATRIX — PAGE REGISTRY / PAGE BINDING**

| **Mã smoke** | **Tình huống kiểm thử**             | **Kết quả bắt buộc**                       |
|--------------|-------------------------------------|--------------------------------------------|
| FB-SMK-011   | Page chưa có Page Registry          | Không bật AI                               |
| FB-SMK-012   | Page TEST_ONLY                      | Không xử lý khách production               |
| FB-SMK-013   | Page production chưa owner sign-off | Không production                           |
| FB-SMK-014   | Page Binding NOT_BOUND              | Không nhận/gửi event                       |
| FB-SMK-015   | Page Binding BOUND_TEST             | Chỉ xử lý test                             |
| FB-SMK-016   | Page Binding BOUND_PRODUCTION       | Được xét production nếu các gate khác pass |
| FB-SMK-017   | Page bị PAUSED                      | Không auto-reply                           |
| FB-SMK-018   | Page bị SUSPENDED                   | Không xử lý event                          |
| FB-SMK-019   | Page thiếu human takeover owner     | Không mở live/production automation        |
| FB-SMK-020   | Nhầm Page test/production           | Fail P0                                    |

**124. FB SMOKE MATRIX — WEBHOOK / EVENT / DEDUPLICATION**

| **Mã smoke** | **Tình huống kiểm thử**            | **Kết quả bắt buộc**                  |
|--------------|------------------------------------|---------------------------------------|
| FB-SMK-021   | Webhook chưa verify                | Không xử lý event                     |
| FB-SMK-022   | Webhook nhận event hợp lệ          | Ghi audit, phân loại event            |
| FB-SMK-023   | Event không xác định nguồn Page    | Fail-closed                           |
| FB-SMK-024   | Event giả/không xác thực           | Không xử lý                           |
| FB-SMK-025   | Duplicate event                    | Không gửi reply trùng                 |
| FB-SMK-026   | Callback trễ                       | Không tạo routing sai ngữ cảnh        |
| FB-SMK-027   | Webhook lỗi hàng loạt              | Pause/technical review                |
| FB-SMK-028   | Unknown event                      | Không auto-reply nếu chưa có policy   |
| FB-SMK-029   | Event live bị delay quá lâu        | Không trả lời nếu context đã lỗi thời |
| FB-SMK-030   | Deduplication fail tạo nhiều reply | Fail P0                               |

**125. FB SMOKE MATRIX — PUBLIC COMMENT ROUTING**

| **Mã smoke** | **Tình huống kiểm thử**        | **Kết quả bắt buộc**                          |
|--------------|--------------------------------|-----------------------------------------------|
| FB-SMK-031   | Comment hỏi “Sâm gì?”          | Gọi PACK-05, trả public-safe                  |
| FB-SMK-032   | Comment hỏi “Sâm trồng ở đâu?” | Dùng locked response public-safe              |
| FB-SMK-033   | Comment hỏi thành phần         | Không lộ BOM/tỷ lệ nội bộ                     |
| FB-SMK-034   | Comment hỏi giá chung          | Xử lý theo channel policy                     |
| FB-SMK-035   | Comment hỏi quote cá nhân hóa  | Route private nếu public bị chặn              |
| FB-SMK-036   | Comment “chốt 2 hộp”           | Không chốt public, route private              |
| FB-SMK-037   | Comment mơ hồ “Ib/tư vấn/giá?” | Trả ngắn, route private nếu hợp lệ            |
| FB-SMK-038   | Comment chứa số điện thoại     | Không lặp lại, route private/privacy handling |
| FB-SMK-039   | Comment chứa MST/email hóa đơn | Không lặp lại, route invoice private          |
| FB-SMK-040   | Comment khiếu nại              | Dừng upsell, route complaint/handoff          |

**126. FB SMOKE MATRIX — COMMENT → MESSENGER / PRIVATE HANDOFF**

| **Mã smoke** | **Tình huống kiểm thử**         | **Kết quả bắt buộc**                         |
|--------------|---------------------------------|----------------------------------------------|
| FB-SMK-041   | Comment hỏi giá cần private     | Tạo private handoff có context               |
| FB-SMK-042   | Comment muốn mua                | Private handoff sang Order Capture           |
| FB-SMK-043   | Comment hỏi hóa đơn             | Private handoff sang Invoice Flow            |
| FB-SMK-044   | Comment hỏi đơn hàng            | Private handoff sang Order/Delivery Runtime  |
| FB-SMK-045   | Comment khiếu nại               | Private handoff sang Complaint Flow          |
| FB-SMK-046   | Private handoff thành công      | Messenger session giữ comment/source context |
| FB-SMK-047   | Private handoff fail            | Không thu thông tin riêng ở public           |
| FB-SMK-048   | Handoff mất context sản phẩm    | Fail                                         |
| FB-SMK-049   | Handoff mất comment gốc         | Fail                                         |
| FB-SMK-050   | Handoff tạo nhiều session trùng | Bị chặn bởi dedup/routing guard              |

**127. FB SMOKE MATRIX — MESSENGER ROUTING / SESSION STATE**

| **Mã smoke** | **Tình huống kiểm thử**               | **Kết quả bắt buộc**                           |
|--------------|---------------------------------------|------------------------------------------------|
| FB-SMK-051   | Messenger inbound từ comment          | Giữ public comment context                     |
| FB-SMK-052   | Messenger inbound trực tiếp           | Tạo session context mới                        |
| FB-SMK-053   | Session PRICE_REQUEST                 | Gọi PACK-05 Quote Mode/runtime                 |
| FB-SMK-054   | Session CART_DRAFT                    | Không tạo order nếu chưa Customer Confirmation |
| FB-SMK-055   | Session ORDER_CAPTURE                 | Thu thông tin theo PACK-05                     |
| FB-SMK-056   | Session WAITING_CUSTOMER_CONFIRMATION | Không tạo order trước xác nhận                 |
| FB-SMK-057   | Session INVOICE_FLOW                  | Không public hóa đơn, ghi invoice evidence     |
| FB-SMK-058   | Session COMPLAINT_FLOW                | Dừng bán, xin evidence                         |
| FB-SMK-059   | Session HUMAN_TAKEOVER                | AI không tự quyết phần vượt quyền              |
| FB-SMK-060   | Session OPT_OUT                       | Không gửi CRM/follow-up                        |

**128. FB SMOKE MATRIX — LIVE COMMENT ROUTING**

| **Mã smoke** | **Tình huống kiểm thử**            | **Kết quả bắt buộc**                                   |
|--------------|------------------------------------|--------------------------------------------------------|
| FB-SMK-061   | Live chưa có Live Session Registry | Không bật live automation                              |
| FB-SMK-062   | Live có hero product hợp lệ        | Comment “chốt 2” giữ product context nếu xác định được |
| FB-SMK-063   | Live comment hỏi sản phẩm          | Public-safe answer theo PACK-05                        |
| FB-SMK-064   | Live comment hỏi giá               | Theo live/channel policy và runtime                    |
| FB-SMK-065   | Live comment muốn mua              | Route private, không chốt public                       |
| FB-SMK-066   | Live comment volume cao            | Rate limit kích hoạt                                   |
| FB-SMK-067   | Live comment spam                  | Suppress/no reply/handoff moderator                    |
| FB-SMK-068   | Live comment khiếu nại             | Human moderator/complaint route                        |
| FB-SMK-069   | Live offer không có runtime        | Không tự áp dụng offer                                 |
| FB-SMK-070   | Live-to-private mất live context   | Fail                                                   |

**129. FB SMOKE MATRIX — HUMAN TAKEOVER**

| **Mã smoke** | **Tình huống kiểm thử**                  | **Kết quả bắt buộc**                      |
|--------------|------------------------------------------|-------------------------------------------|
| FB-SMK-071   | Khách yêu cầu người thật                 | Human takeover REQUIRED                   |
| FB-SMK-072   | Khiếu nại nghiêm trọng                   | Handoff QA/CSKH                           |
| FB-SMK-073   | Payment đối chiếu khó                    | Handoff payment/kế toán owner             |
| FB-SMK-074   | Invoice phức tạp                         | Handoff kế toán                           |
| FB-SMK-075   | Refund/return/exchange                   | Handoff CSKH/owner                        |
| FB-SMK-076   | Legal/media risk                         | Escalate owner, không tranh luận public   |
| FB-SMK-077   | Human takeover packet thiếu              | Không pass                                |
| FB-SMK-078   | AI tiếp tục tự quyết khi takeover active | Fail P0                                   |
| FB-SMK-079   | Human resolved, returned_to_AI           | AI được xử lý lại nếu policy pass         |
| FB-SMK-080   | Human takeover unavailable               | Alert/escalate, không tự xử lý vượt quyền |

**130. FB SMOKE MATRIX — PRIVACY / PERSONAL DATA**

| **Mã smoke** | **Tình huống kiểm thử**                   | **Kết quả bắt buộc**                                 |
|--------------|-------------------------------------------|------------------------------------------------------|
| FB-SMK-081   | Khách public số điện thoại                | Không lặp lại, route private                         |
| FB-SMK-082   | Khách public địa chỉ                      | Không lặp lại, route private                         |
| FB-SMK-083   | Khách public MST/email hóa đơn            | Không lặp lại, invoice private                       |
| FB-SMK-084   | Khách public ảnh chuyển khoản             | Không xác nhận paid, route private/payment follow-up |
| FB-SMK-085   | Khách hỏi order status public             | Không public order status                            |
| FB-SMK-086   | Khách hỏi member tier public              | Không public quyền lợi riêng                         |
| FB-SMK-087   | Referral/Diamond owner bị hỏi public      | Không public owner/commission                        |
| FB-SMK-088   | Complaint detail public                   | Không tranh luận, route/handoff                      |
| FB-SMK-089   | AI gửi nhầm khách                         | Fail P0                                              |
| FB-SMK-090   | Log/evidence lộ token hoặc data sai quyền | Fail P0                                              |

**131. FB SMOKE MATRIX — RATE LIMIT / SPAM / QUIET HOURS**

| **Mã smoke** | **Tình huống kiểm thử**              | **Kết quả bắt buộc**               |
|--------------|--------------------------------------|------------------------------------|
| FB-SMK-091   | Một khách comment lặp nhiều lần      | Rate limit/suppress                |
| FB-SMK-092   | Comment spam link lạ                 | Suppress hoặc moderation           |
| FB-SMK-093   | Live comment tăng đột biến           | Rate limit theo live               |
| FB-SMK-094   | AI gửi nhiều Messenger liên tiếp     | Chặn theo frequency cap            |
| FB-SMK-095   | CRM ngoài quiet hours                | Không gửi nếu policy chặn          |
| FB-SMK-096   | Khách opt-out                        | Dừng CRM/follow-up                 |
| FB-SMK-097   | System gửi bù hàng loạt sau lỗi      | Bị chặn                            |
| FB-SMK-098   | Duplicate reply trong thread         | Bị chặn                            |
| FB-SMK-099   | Spam suppression nhầm complaint thật | Handoff/manual review nếu nghi ngờ |
| FB-SMK-100   | Rate limit không có audit            | Không pass                         |

**132. FB SMOKE MATRIX — PACK-05 DEPENDENCY / AI ADVISOR BEHAVIOR**

| **Mã smoke** | **Tình huống kiểm thử**                             | **Kết quả bắt buộc** |
|--------------|-----------------------------------------------------|----------------------|
| FB-SMK-101   | Gateway tự trả lời không qua PACK-05                | Fail                 |
| FB-SMK-102   | Gateway tự tính giá                                 | Fail P0              |
| FB-SMK-103   | Gateway tự tạo order                                | Fail P0              |
| FB-SMK-104   | Gateway bỏ Claim Guard                              | Fail P0              |
| FB-SMK-105   | Gateway tự viết prompt sản phẩm riêng               | Fail                 |
| FB-SMK-106   | Gateway không truyền channel context                | Fail                 |
| FB-SMK-107   | PACK-05 trả no-response nhưng Gateway vẫn gửi       | Fail                 |
| FB-SMK-108   | PACK-05 yêu cầu private nhưng Gateway public        | Fail P0              |
| FB-SMK-109   | PACK-05 yêu cầu handoff nhưng Gateway không handoff | Fail                 |
| FB-SMK-110   | PACK-05 guard block được tôn trọng                  | Pass                 |

**133. FB SMOKE MATRIX — QUOTE / ORDER / PAYMENT / DELIVERY / INVOICE ROUTING**

| **Mã smoke** | **Tình huống kiểm thử**         | **Kết quả bắt buộc**                               |
|--------------|---------------------------------|----------------------------------------------------|
| FB-SMK-111   | Comment hỏi giá cá nhân hóa     | Route private, quote qua PACK-05/Commerce Runtime  |
| FB-SMK-112   | Messenger hỏi giá               | Gọi runtime, không tự tính                         |
| FB-SMK-113   | Messenger chốt đơn đủ thông tin | Chuyển Commerce Runtime, cần Customer Confirmation |
| FB-SMK-114   | Chưa có order_code              | Không nói đơn đã ghi nhận                          |
| FB-SMK-115   | Khách nói đã chuyển khoản       | Không nói paid, route payment follow-up            |
| FB-SMK-116   | Payment runtime chưa xác nhận   | Nói chờ đối chiếu/kiểm tra                         |
| FB-SMK-117   | Khách hỏi giao hàng             | Kiểm Delivery Runtime, không bịa                   |
| FB-SMK-118   | Khách yêu cầu hóa đơn           | Invoice private flow                               |
| FB-SMK-119   | Invoice chưa issued             | Không nói đã xuất hóa đơn                          |
| FB-SMK-120   | Gateway sync MISA               | Fail P0                                            |

**134. FB SMOKE MATRIX — COMPLAINT / QUALITY CASE ROUTING**

| **Mã smoke** | **Tình huống kiểm thử**                  | **Kết quả bắt buộc**                                  |
|--------------|------------------------------------------|-------------------------------------------------------|
| FB-SMK-121   | Comment sản phẩm lỗi                     | Public acknowledgement ngắn + private complaint route |
| FB-SMK-122   | Messenger phản ánh mùi/vị bất thường     | Complaint Flow, dừng upsell                           |
| FB-SMK-123   | Nghi hàng giả                            | Trace/QA/anti-counterfeit handoff                     |
| FB-SMK-124   | QR không quét được                       | Xin QR/mã lô/NSX-HSD/evidence                         |
| FB-SMK-125   | Complaint evidence gửi trong Messenger   | Gắn case/session/order nếu có                         |
| FB-SMK-126   | Complaint chưa có order                  | Gắn session/customer reference                        |
| FB-SMK-127   | Khách đòi hoàn tiền                      | Không tự hứa, handoff owner                           |
| FB-SMK-128   | Complaint đang mở nhưng CRM gửi bán hàng | Fail P0                                               |
| FB-SMK-129   | AI kết luận lỗi khi chưa QA              | Fail P0                                               |
| FB-SMK-130   | Complaint handoff không có packet        | Fail                                                  |

**135. FB SMOKE MATRIX — CRM / OPT-OUT / FOLLOW-UP**

| **Mã smoke** | **Tình huống kiểm thử**            | **Kết quả bắt buộc**             |
|--------------|------------------------------------|----------------------------------|
| FB-SMK-131   | CRM eligibility pass               | Được gửi nếu channel policy pass |
| FB-SMK-132   | CRM eligibility fail               | Không gửi                        |
| FB-SMK-133   | Khách opt-out                      | Không gửi                        |
| FB-SMK-134   | Complaint mở                       | Không gửi CRM bán hàng           |
| FB-SMK-135   | Invoice pending                    | Ưu tiên invoice, không upsell    |
| FB-SMK-136   | Order issue mở                     | Không rebuy reminder             |
| FB-SMK-137   | Quiet hours block                  | Không gửi                        |
| FB-SMK-138   | Frequency cap exceeded             | Không gửi                        |
| FB-SMK-139   | CRM message thiếu approved content | Không gửi                        |
| FB-SMK-140   | CRM evidence thiếu eligibility     | Không pass                       |

**136. FB SMOKE MATRIX — ADS / CAMPAIGN / DIAMOND REFERRAL CONTEXT**

| **Mã smoke** | **Tình huống kiểm thử**                   | **Kết quả bắt buộc**                       |
|--------------|-------------------------------------------|--------------------------------------------|
| FB-SMK-141   | Khách từ ads vào Messenger                | Giữ ads/campaign context                   |
| FB-SMK-142   | Ads context thiếu runtime offer           | Không tự áp ưu đãi                         |
| FB-SMK-143   | Khách từ live campaign                    | Giữ live/campaign context                  |
| FB-SMK-144   | Diamond/referral context có               | Truyền resolver/runtime, không tự xác nhận |
| FB-SMK-145   | Diamond resolver pass                     | PACK-05 nói quyền lợi nếu channel cho phép |
| FB-SMK-146   | Diamond resolver fail                     | Không nói quyền lợi                        |
| FB-SMK-147   | Public hỏi commission                     | Không public commission                    |
| FB-SMK-148   | Gateway tự bind referral                  | Fail                                       |
| FB-SMK-149   | Ads/campaign context mất khi sang private | Fail                                       |
| FB-SMK-150   | Offer conflict                            | Fail-closed hoặc owner review              |

**137. FB SMOKE MATRIX — EVIDENCE / AUDIT / TRACEABILITY**

| **Mã smoke** | **Tình huống kiểm thử** | **Kết quả bắt buộc**                  |
|--------------|-------------------------|---------------------------------------|
| FB-SMK-151   | Incoming comment        | Có raw event/channel context evidence |
| FB-SMK-152   | AI response public      | Có response/evidence                  |
| FB-SMK-153   | Private handoff         | Có trace comment → Messenger          |
| FB-SMK-154   | Live-to-private         | Có trace live comment → Messenger     |
| FB-SMK-155   | Human takeover          | Có handoff packet                     |
| FB-SMK-156   | Privacy block           | Có block reason/evidence              |
| FB-SMK-157   | Rate limit block        | Có audit                              |
| FB-SMK-158   | UAT test                | Có expected/actual/reviewer           |
| FB-SMK-159   | Pilot release           | Có scope/owner/evidence               |
| FB-SMK-160   | Evidence missing        | Không pass smoke/gateway              |

**138. FB SMOKE MATRIX — UAT / PILOT / RELEASE CONTROL**

| **Mã smoke** | **Tình huống kiểm thử**                | **Kết quả bắt buộc**        |
|--------------|----------------------------------------|-----------------------------|
| FB-SMK-161   | UAT thiếu scope                        | Không UAT pass              |
| FB-SMK-162   | UAT thiếu test data                    | Không UAT pass              |
| FB-SMK-163   | UAT P0 fail                            | Không pilot                 |
| FB-SMK-164   | Pilot thiếu Page scope                 | Không pilot                 |
| FB-SMK-165   | Pilot thiếu stop criteria              | Không pilot                 |
| FB-SMK-166   | Pilot có privacy leakage               | Dừng pilot                  |
| FB-SMK-167   | Pilot có claim violation               | Dừng pilot                  |
| FB-SMK-168   | Production thiếu owner sign-off        | Không production            |
| FB-SMK-169   | Production còn P0 issue                | Không production            |
| FB-SMK-170   | Gateway PASS chưa có evidence accepted | Không được gọi Gateway PASS |

**139. SMOKE DONE GATE CỦA PACK-06**

Smoke của PACK-06 chỉ được xem là đạt khi:

1.  Tất cả P0 smoke pass.

2.  Không còn P0 issue mở.

3.  App Registry pass.

4.  Permission/App Review pass.

5.  Page Registry pass.

6.  Page Binding pass.

7.  Webhook verification pass.

8.  Webhook deduplication pass.

9.  Public comment routing pass.

10. Private handoff pass.

11. Messenger routing pass.

12. Live routing pass nếu mở live.

13. Human takeover pass.

14. Privacy guard pass.

15. Rate limit pass.

16. Spam suppression pass.

17. PACK-05 dependency pass.

18. Quote/order/invoice/complaint/CRM routing pass trong phạm vi mở.

19. Evidence đầy đủ.

20. Owner review smoke evidence.

Smoke pass không đồng nghĩa Gateway PASS nếu chưa có release decision hợp lệ.

**140. GATEWAY DONE GATE TỔNG THỂ**

PACK-06 có các tầng Done Gate:

1.  Documentation Done.

2.  Handoff Ready.

3.  Implementation Ready.

4.  App/Page Setup Ready.

5.  Webhook Ready.

6.  UAT Ready.

7.  Smoke Ready.

8.  Evidence Ready.

9.  Pilot Ready.

10. Gateway Release Candidate.

11. Gateway PASS.

12. Production Ready.

Không được gom tất cả thành một chữ “xong”.

**141. GATE 01 — DOCUMENTATION DONE**

PACK-06 đạt Documentation Done khi:

1.  Đã khóa mục tiêu Facebook Channel Gateway.

2.  Đã khóa dependency với PACK-05.

3.  Đã khóa Page Registry.

4.  Đã khóa Meta App Governance.

5.  Đã khóa Webhook Boundary.

6.  Đã khóa Public Comment Governance.

7.  Đã khóa Comment → Messenger Routing.

8.  Đã khóa Messenger Governance.

9.  Đã khóa Live Governance.

10. Đã khóa Human Takeover.

11. Đã khóa Privacy Governance.

12. Đã khóa Permission/App Review Governance.

13. Đã khóa Security/Token/Credential Governance.

14. Đã khóa Rate Limit/Spam Suppression.

15. Đã khóa UAT/Pilot Governance.

16. Đã khóa Smoke Matrix.

17. Đã khóa Done Gate / Fail Gate / Release Control.

18. Không mâu thuẫn PACK-05.

19. Không mâu thuẫn PACK-01/02/03/04.

20. Không gọi Gateway PASS.

Trạng thái này chỉ chứng minh tài liệu đã hoàn chỉnh ở tầng governance.

**142. GATE 02 — HANDOFF READY**

PACK-06 đạt Handoff Ready khi có thể giao cho dev phân tích triển khai mà không phải đoán nghiệp vụ.

Điều kiện:

1.  Dev hiểu PACK-06 là gateway/channel.

2.  Dev hiểu PACK-06 không viết lại AI Advisor.

3.  Dev hiểu mọi response behavior đến từ PACK-05.

4.  Dev hiểu phải truyền channel context.

5.  Dev hiểu public/private boundary.

6.  Dev hiểu comment → Messenger phải giữ context.

7.  Dev hiểu không public dữ liệu riêng.

8.  Dev hiểu không tự tính giá/chốt đơn.

9.  Dev hiểu không sync MISA.

10. Dev hiểu phải có App/Page/Webhook evidence.

11. Dev hiểu phải có rate limit/spam suppression.

12. Dev hiểu human takeover bắt buộc.

13. Dev hiểu UAT/smoke/evidence là điều kiện release.

Handoff Ready không đồng nghĩa đã code xong.

**143. GATE 03 — IMPLEMENTATION READY**

PACK-06 chỉ đạt Implementation Ready khi có thêm bộ triển khai chi tiết được owner kỹ thuật duyệt.

Điều kiện tối thiểu:

1.  Có implementation plan.

2.  Có App/Page binding plan.

3.  Có webhook plan.

4.  Có event classification plan.

5.  Có routing plan.

6.  Có PACK-05 integration plan.

7.  Có privacy/security plan.

8.  Có token/credential plan.

9.  Có rate limit/spam plan.

10. Có human takeover plan.

11. Có evidence/audit plan.

12. Có UAT plan.

13. Có smoke plan.

14. Có rollback/pause plan.

15. Có owner review.

PACK-06 bản governance không tự tạo Implementation Ready.

**144. GATE 04 — APP / PAGE SETUP READY**

PACK-06 đạt App/Page Setup Ready khi:

1.  Meta App Registry có đủ.

2.  App owner approve.

3.  Page Registry có đủ.

4.  Page owner approve.

5.  Page Binding đúng environment.

6.  Permission list xác định rõ.

7.  App Review status rõ.

8.  Credential status rõ.

9.  Human takeover owner rõ.

10. Evidence setup có đủ.

**145. GATE 05 — WEBHOOK READY**

PACK-06 đạt Webhook Ready khi:

1.  Webhook subscription rõ.

2.  Event type rõ.

3.  Verification pass.

4.  Event audit pass.

5.  Deduplication pass.

6.  Error handling pass.

7.  Unknown event handling pass.

8.  Routing pipeline sẵn sàng.

9.  Evidence capture sẵn sàng.

10. Security review pass.

Webhook Ready không đồng nghĩa UAT pass.

**146. GATE 06 — UAT READY**

PACK-06 đạt UAT Ready khi:

1.  UAT scope rõ.

2.  Test Page/App rõ.

3.  Test users rõ.

4.  Test event set rõ.

5.  Test data đủ public comment/Messenger/live.

6.  Test data đủ privacy/claim/complaint/invoice/order/payment.

7.  Expected result rõ.

8.  Evidence capture sẵn sàng.

9.  Owner reviewer rõ.

10. Issue tracking sẵn sàng.

UAT Ready không đồng nghĩa UAT pass.

**147. GATE 07 — SMOKE READY**

PACK-06 đạt Smoke Ready khi:

1.  Smoke Matrix đã chuyển thành test case.

2.  App/Page/Webhook test data sẵn sàng.

3.  Public comment test data sẵn sàng.

4.  Messenger test data sẵn sàng.

5.  Live test data sẵn sàng nếu mở live.

6.  Privacy test data sẵn sàng.

7.  Rate limit/spam test data sẵn sàng.

8.  Human takeover test data sẵn sàng.

9.  PACK-05 integration test sẵn sàng.

10. Evidence capture sẵn sàng.

Smoke Ready không đồng nghĩa Smoke Pass.

**148. GATE 08 — EVIDENCE READY**

PACK-06 đạt Evidence Ready khi:

1.  Mỗi smoke có evidence.

2.  Evidence gắn mã smoke.

3.  Evidence có input event.

4.  Evidence có channel context.

5.  Evidence có routing decision.

6.  Evidence có PACK-05 instruction nếu có.

7.  Evidence có response/handoff/block result.

8.  Evidence có privacy/rate limit/claim guard result nếu có.

9.  Evidence có owner reviewer.

10. Evidence đủ để audit lại.

Evidence Ready không đồng nghĩa Evidence Accepted nếu chưa review.

**149. GATE 09 — PILOT READY**

PACK-06 đạt Pilot Ready khi:

1.  UAT P0 pass.

2.  Smoke P0 pass trong phạm vi pilot.

3.  App/Page scope pilot rõ.

4.  Intent scope rõ.

5.  Product scope rõ.

6.  Public/private routing pass.

7.  Human takeover ready.

8.  Monitoring ready.

9.  Pause/disable ready.

10. Stop criteria rõ.

11. Evidence capture ready.

12. Owner sign-off pilot.

Pilot Ready không đồng nghĩa Gateway PASS.

**150. GATE 10 — GATEWAY RELEASE CANDIDATE**

PACK-06 đạt Gateway Release Candidate khi:

1.  Pilot đạt trong phạm vi được duyệt.

2.  No P0 open.

3.  P1 không còn chặn.

4.  Evidence quan trọng accepted.

5.  App/Permission/Page/Webhook pass.

6.  PACK-05 integration pass.

7.  Privacy smoke pass.

8.  Human takeover pass.

9.  Rate limit/spam suppression pass.

10. Monitoring/alert pass.

11. Owner sign-off release candidate.

Release Candidate chưa phải Gateway PASS.

**151. GATE 11 — GATEWAY PASS**

PACK-06 chỉ được gọi Gateway PASS khi:

1.  Gateway Release Candidate đạt.

2.  Production-scope smoke pass.

3.  Evidence Registry ghi ACCEPTED cho P0.

4.  No P0 issue open.

5.  App permission hợp lệ.

6.  Page Binding production hợp lệ.

7.  Webhook production verified.

8.  PACK-05 integration production-scope pass.

9.  Privacy/security pass.

10. Public/private routing pass.

11. Human takeover pass.

12. Rate limit/spam suppression pass.

13. Monitoring/alert hoạt động.

14. Pause/disable path xác nhận.

15. Owner sign-off.

16. Release decision chính thức.

Không được gọi Gateway PASS chỉ vì tài liệu đã viết xong hoặc pilot đã chạy thử.

**152. GATE 12 — PRODUCTION READY**

PACK-06 chỉ được gọi Production Ready khi:

1.  Gateway PASS đạt.

2.  Controlled production chạy đúng.

3.  Production evidence accepted.

4.  Không có privacy incident mở.

5.  Không có claim violation mở.

6.  Không có spam/rate-limit incident mở.

7.  Không có human takeover failure mở.

8.  Không có P0/P1 issue chặn.

9.  Owner sign-off.

10. Channel owner sign-off.

11. Security owner sign-off.

12. PACK-05 behavior owner sign-off.

13. Release decision chính thức.

14. Post-release monitoring hoạt động.

Gateway PASS là điều kiện cần, nhưng Production Ready còn cần bằng chứng vận hành production được chấp nhận.

**153. FAIL GATE CỦA PACK-06**

PACK-06 phải FAIL nếu xảy ra một trong các điều kiện sau:

1.  Gateway tự viết logic tư vấn riêng thay PACK-05.

2.  Gateway tự tính giá.

3.  Gateway tự tạo order.

4.  Gateway tự xác nhận payment/delivery/invoice.

5.  Gateway sync MISA.

6.  Bật AI cho Page chưa registry.

7.  Bật production khi App/permission chưa đủ.

8.  Webhook không xác thực vẫn xử lý event.

9.  Event duplicate tạo reply trùng.

10. Public comment hỏi thông tin cá nhân.

11. Public comment lặp lại số điện thoại/địa chỉ/MST/email.

12. Public comment chốt đơn đầy đủ.

13. Public quote cá nhân hóa sai policy.

14. Comment chứa thông tin riêng không được bảo vệ.

15. Comment khiếu nại vẫn bị upsell.

16. Messenger vượt runtime/guard.

17. Live comment spam.

18. Live chốt đơn public thiếu kiểm soát.

19. Human takeover thiếu packet.

20. AI tự xử lý khi human takeover active.

21. Rate limit không hoạt động.

22. CRM gửi khi opt-out.

23. Privacy leakage.

24. Claim violation.

25. Token/credential lộ.

26. Evidence thiếu.

27. UAT P0 fail nhưng vẫn pilot.

28. Pilot P0 fail nhưng vẫn production.

29. Gateway PASS khi còn P0 issue.

30. Production Ready khi chưa có evidence accepted và owner sign-off.

**154. RELEASE CONTROL CỦA PACK-06**

Release Control bảo đảm Facebook Gateway không được mở production bằng một bước nhảy.

Các mức release gồm:

1.  Documentation Release.

2.  Dev Handoff Release.

3.  Internal Implementation Release.

4.  App/Page Setup Release.

5.  Webhook Staging Release.

6.  UAT Release.

7.  Pilot Release.

8.  Gateway Release Candidate.

9.  Controlled Production Release.

10. Gateway PASS.

11. Production Acceptance.

12. Post-release Monitoring.

**155. RELEASE 01 — DOCUMENTATION RELEASE**

Documentation Release chỉ xác nhận:

- PACK-06 đã hoàn chỉnh tài liệu governance.

- Ranh giới owner rõ.

- Dependency PACK-05 rõ.

- P0 rules rõ.

- Smoke Matrix rõ.

- Done Gate rõ.

- Fail Gate rõ.

- Release Control rõ.

Documentation Release không xác nhận:

- App đã duyệt.

- Page đã binding.

- Webhook đã chạy.

- AI đã trả lời thật.

- UAT đã pass.

- Gateway PASS.

- Production Ready.

**156. RELEASE 02 — DEV HANDOFF RELEASE**

Dev Handoff Release xác nhận tài liệu đủ để giao dev phân tích triển khai.

Điều kiện:

1.  Dev nhận đúng PACK-06.

2.  Dev nhận đúng dependency PACK-05.

3.  Dev hiểu không viết prompt riêng.

4.  Dev hiểu cần channel context.

5.  Dev hiểu comment → Messenger routing.

6.  Dev hiểu privacy guard.

7.  Dev hiểu App/Page/Webhook evidence.

8.  Dev hiểu App Review/permission.

9.  Dev hiểu rate limit/spam.

10. Dev hiểu human takeover.

11. Dev hiểu UAT/smoke/release gate.

Dev Handoff Release không đồng nghĩa đã có hệ thống chạy.

**157. RELEASE 03 — INTERNAL IMPLEMENTATION RELEASE**

Internal Implementation Release chỉ xét khi dev đã triển khai nội bộ theo đúng boundary.

Điều kiện:

1.  App/Page registry layer đã có.

2.  Webhook receive/verify đã có.

3.  Event classification đã có.

4.  Channel context builder đã có.

5.  Routing engine đã có.

6.  PACK-05 integration đã có.

7.  Public/private guard đã có.

8.  Privacy guard đã có.

9.  Rate limit/spam suppression đã có.

10. Human takeover đã có.

11. Evidence/audit đã có.

12. Pause/disable path đã có.

Trạng thái này cần technical evidence.

**158. RELEASE 04 — APP / PAGE SETUP RELEASE**

App/Page Setup Release chỉ đạt khi:

1.  Meta App Registry đủ.

2.  Permission scope rõ.

3.  App Review status rõ.

4.  Page Registry đủ.

5.  Page Binding đúng.

6.  Token/credential được quản trị.

7.  Human owner rõ.

8.  Security review ban đầu đạt.

9.  Evidence setup đủ.

10. Owner approve setup.

**159. RELEASE 05 — WEBHOOK STAGING RELEASE**

Webhook Staging Release cho phép test webhook trong môi trường staging.

Điều kiện:

1.  Webhook verification pass.

2.  Test event nhận được.

3.  Event audit pass.

4.  Deduplication pass.

5.  Error handling pass.

6.  Unknown event handling pass.

7.  Routing staging pass.

8.  Evidence capture pass.

Staging không phải production.

**160. RELEASE 06 — UAT RELEASE**

UAT Release chỉ đạt khi:

1.  UAT scope đủ.

2.  UAT test data đủ.

3.  UAT expected result rõ.

4.  Public comment UAT pass.

5.  Messenger UAT pass.

6.  Live UAT pass nếu mở live.

7.  Privacy UAT pass.

8.  Human takeover UAT pass.

9.  PACK-05 integration UAT pass.

10. No P0 issue open.

11. Owner UAT sign-off.

**161. RELEASE 07 — PILOT RELEASE**

Pilot Release mở kênh trong phạm vi kiểm soát.

Điều kiện:

1.  UAT pass.

2.  Pilot Page rõ.

3.  Pilot channel rõ.

4.  Pilot intent scope rõ.

5.  Pilot product scope rõ.

6.  Human owner trực.

7.  Monitoring hoạt động.

8.  Stop criteria rõ.

9.  Pause/disable path sẵn sàng.

10. Evidence capture sẵn sàng.

11. Owner sign-off pilot.

Pilot không phải Gateway PASS.

**162. RELEASE 08 — GATEWAY RELEASE CANDIDATE**

Gateway Release Candidate chỉ đạt khi:

1.  Pilot đạt.

2.  Evidence quan trọng accepted.

3.  No P0 open.

4.  P1 không còn chặn.

5.  App/permission pass.

6.  Page binding pass.

7.  Webhook pass.

8.  PACK-05 integration pass.

9.  Privacy pass.

10. Human takeover pass.

11. Rate limit/spam pass.

12. Owner sign-off candidate.

**163. RELEASE 09 — CONTROLLED PRODUCTION RELEASE**

Controlled Production Release mở production có kiểm soát.

Nguyên tắc:

1.  Mở theo Page được duyệt.

2.  Mở theo kênh được duyệt.

3.  Mở theo nhóm intent được duyệt.

4.  Không mở live nếu live smoke chưa pass.

5.  Không mở CRM nếu CRM channel smoke chưa pass.

6.  Không mở quote/order nếu Commerce Runtime smoke chưa pass.

7.  Có monitoring trực.

8.  Có human takeover trực.

9.  Có pause/disable ngay.

10. Có production evidence.

**164. RELEASE 10 — GATEWAY PASS**

Gateway PASS chỉ được ghi nhận khi:

1.  Controlled production trong phạm vi gateway đạt.

2.  P0 evidence accepted.

3.  App/Page/Webhook production pass.

4.  Public/private routing production pass.

5.  Privacy production pass.

6.  Human takeover production pass.

7.  Rate limit/spam production pass.

8.  PACK-05 behavior production pass.

9.  Không có P0 open.

10. Owner sign-off.

11. Release decision được ghi nhận.

**165. RELEASE 11 — PRODUCTION ACCEPTANCE**

Production Acceptance chỉ đạt khi:

1.  Gateway PASS đạt.

2.  Production monitoring ổn định.

3.  Không có privacy leakage.

4.  Không có claim violation.

5.  Không có spam incident.

6.  Không có human takeover failure mở.

7.  Không có App/permission/token incident mở.

8.  Customer-facing flow ổn định.

9.  Owner sign-off.

10. Evidence Registry accepted.

**166. RELEASE 12 — POST-RELEASE MONITORING**

Sau release, PACK-06 phải tiếp tục monitoring.

Theo dõi tối thiểu:

1.  Event volume.

2.  Public comment reply rate.

3.  Messenger routing rate.

4.  Private handoff success rate.

5.  Live comment response rate.

6.  Human takeover rate.

7.  Privacy block count.

8.  Claim block count.

9.  Rate limit count.

10. Spam suppression count.

11. Send failure count.

12. Permission/token error count.

13. Webhook duplicate count.

14. Complaint routing count.

15. Invoice routing count.

16. Order routing count.

17. CRM suppression count.

18. P0 incident count.

Post-release không được bỏ giám sát.

**167. OWNER SIGN-OFF MATRIX**

| **Khu vực**      | **Owner chính**           | **Điều kiện sign-off**                        |
|------------------|---------------------------|-----------------------------------------------|
| Meta App         | Technical owner           | App registry, permission, review, evidence đủ |
| Facebook Page    | Page owner                | Đúng Page, đúng phạm vi, đúng trạng thái      |
| Webhook          | Technical owner           | Verify, event, dedup, error handling đạt      |
| AI Behavior      | PACK-05 owner             | Gateway gọi đúng AI Advisor Core              |
| Claim/Safety     | Claim owner               | Không claim sai public/Messenger/live         |
| Privacy/Security | Security owner            | Không rò dữ liệu, token/credential an toàn    |
| Commerce Routing | Commerce owner            | Quote/order routing đúng runtime              |
| CSKH/QA          | CSKH/QA owner             | Complaint/handoff đúng                        |
| Kế toán/Finance  | Finance owner nếu áp dụng | Invoice/payment handoff đúng                  |
| CRM              | CRM owner nếu áp dụng     | Opt-out/frequency/suppression đúng            |
| Release          | Release owner             | Evidence accepted, no P0, sign-off đủ         |

**168. EVIDENCE ACCEPTANCE MATRIX**

| **Nhóm evidence**            | **Bắt buộc cho**    | **Tiêu chí accepted**                    |
|------------------------------|---------------------|------------------------------------------|
| App evidence                 | Meta App gate       | Registry, permission, review status rõ   |
| Page evidence                | Page gate           | Page binding, owner approval rõ          |
| Webhook evidence             | Webhook gate        | Verify, test event, dedup pass           |
| Routing evidence             | Public/private flow | Event → context → decision → response rõ |
| Privacy evidence             | Privacy smoke       | Không lặp dữ liệu riêng, block đúng      |
| Human takeover evidence      | Handoff smoke       | Packet đủ, owner nhận xử lý              |
| Live evidence                | Live smoke          | Live context, rate limit, handoff pass   |
| PACK-05 integration evidence | AI behavior smoke   | Gateway gọi đúng PACK-05                 |
| UAT evidence                 | UAT gate            | Expected/actual/reviewer rõ              |
| Pilot evidence               | Pilot gate          | Scope, stop criteria, monitoring rõ      |
| Release evidence             | Gateway PASS        | No P0, owner sign-off, release decision  |

Evidence chỉ được dùng cho PASS khi đã review và accepted.

**169. ISSUE SEVERITY MATRIX**

| **Mức lỗi** | **Ý nghĩa**                                                                                     | **Tác động gate**                    |
|-------------|-------------------------------------------------------------------------------------------------|--------------------------------------|
| P0          | Lỗi gây rò dữ liệu, claim sai, gateway sai source, tự tính giá, chốt đơn sai, spam nghiêm trọng | Chặn release/Gateway PASS            |
| P1          | Lỗi nghiêm trọng ảnh hưởng routing, handoff, webhook, permission, UAT                           | Chặn production nếu chưa xử lý       |
| P2          | Lỗi trung bình, có workaround được owner duyệt                                                  | Có thể pilot giới hạn                |
| P3          | Lỗi nhẹ về wording/trải nghiệm                                                                  | Theo dõi                             |
| Observation | Ghi nhận cải tiến                                                                               | Không chặn nếu không ảnh hưởng P0/P1 |

**170. P0 ISSUE LIST CỦA PACK-06**

Các lỗi sau luôn là P0:

1.  Gateway tự viết logic tư vấn riêng.

2.  Gateway tự tính giá.

3.  Gateway tự tạo order.

4.  Gateway sync MISA.

5.  Public dữ liệu cá nhân.

6.  Public thông tin đơn hàng.

7.  Public MST/email/địa chỉ hóa đơn.

8.  Public quyền lợi member/Diamond riêng.

9.  Public quote cá nhân hóa sai policy.

10. Claim sai hoặc claim chữa bệnh.

11. Page chưa registry nhưng bật AI.

12. App/permission chưa pass nhưng mở production.

13. Webhook không xác thực vẫn xử lý.

14. Duplicate event tạo reply trùng nghiêm trọng.

15. Comment → private mất context.

16. Live → private mất context.

17. Human takeover không hoạt động.

18. Complaint không handoff.

19. Rate limit/spam suppression không hoạt động.

20. CRM gửi khi opt-out.

21. Token/credential lộ.

22. Evidence thiếu nhưng gọi pass.

23. UAT P0 fail nhưng vẫn pilot.

24. Pilot P0 fail nhưng vẫn production.

25. Gateway PASS khi còn P0.

26. Production Ready khi chưa owner sign-off.

**171. PACK-06 TRACEABILITY REQUIREMENT**

Mọi hành vi quan trọng của Facebook Gateway phải truy vết được theo chuỗi:

Meta event → App → Page → Channel context → Event classification → Channel policy → PACK-05 instruction → Routing decision → Public/private response hoặc handoff → Evidence → Final status.

Traceability phải đảm bảo:

1.  Từ một comment biết Page nào, bài/live nào.

2.  Từ một Messenger thread biết nguồn vào từ comment/live/ads hay trực tiếp.

3.  Từ một public reply biết PACK-05 instruction nào được dùng.

4.  Từ một private handoff biết comment gốc nào.

5.  Từ một live order intent biết live session nào.

6.  Từ một complaint biết evidence nào.

7.  Từ một invoice flow biết privacy rule nào.

8.  Từ một blocked message biết guard nào chặn.

9.  Từ một human takeover biết ai nhận xử lý.

10. Từ một Gateway PASS biết evidence nào được accepted.

Không có traceability thì không gọi Gateway hoàn tất.

**172. PACK-06 KHÔNG ĐƯỢC LÀM GÌ**

PACK-06 không được:

1.  Viết lại AI Advisor logic.

2.  Tạo prompt bán hàng riêng bỏ qua PACK-05.

3.  Tự tính giá.

4.  Tự tạo khuyến mãi.

5.  Tự xác nhận member/Diamond benefit.

6.  Tự tạo quote.

7.  Tự tạo order.

8.  Tự xác nhận payment.

9.  Tự xác nhận delivery.

10. Tự xác nhận invoice issued.

11. Tự sync MISA.

12. Tự nói đã hạch toán.

13. Tự quyết refund/return/exchange.

14. Tự bỏ Claim Guard.

15. Tự public dữ liệu riêng.

16. Tự thu thông tin cá nhân ở public.

17. Tự chốt đơn ở public comment.

18. Tự spam comment/live/Messenger.

19. Tự bật Page production khi chưa owner sign-off.

20. Tự gọi Gateway PASS.

**173. PACK-06 ĐƯỢC PHÉP LÀM GÌ**

PACK-06 được phép quản trị:

1.  Meta App.

2.  Facebook Page.

3.  Page Registry.

4.  Page Binding.

5.  Webhook.

6.  Event classification.

7.  Channel context.

8.  Public comment routing.

9.  Messenger routing.

10. Live routing.

11. Comment → Messenger handoff.

12. Private handoff.

13. Human takeover.

14. Channel policy.

15. Rate limit.

16. Spam suppression.

17. Opt-out routing.

18. Privacy guard ở tầng channel.

19. Channel evidence.

20. UAT.

21. Pilot.

22. Gateway release control.

23. Pause/disable.

24. Monitoring/alert.

25. Incident response.

**174. PACK-06 P0 RULE REGISTRY**

| **Mã P0** | **Quy tắc**                                                                             |
|-----------|-----------------------------------------------------------------------------------------|
| FB-P0-01  | PACK-06 là Facebook Channel Gateway, không phải AI Advisor Core                         |
| FB-P0-02  | PACK-06 không được viết lại logic tư vấn của PACK-05                                    |
| FB-P0-03  | PACK-06 không được tự tính giá/khuyến mãi/quyền lợi                                     |
| FB-P0-04  | PACK-06 không được tự tạo order/payment/delivery/invoice                                |
| FB-P0-05  | PACK-06 không được sync MISA                                                            |
| FB-P0-06  | Không có Page Registry thì không bật AI production                                      |
| FB-P0-07  | Không có App/permission hợp lệ thì không mở production channel                          |
| FB-P0-08  | Webhook không được tự quyết nghiệp vụ                                                   |
| FB-P0-09  | Public comment không được public dữ liệu cá nhân/đơn hàng/hóa đơn                       |
| FB-P0-10  | Comment cần thông tin riêng phải route private/handoff theo policy                      |
| FB-P0-11  | Messenger private vẫn phải tuân thủ runtime và guard                                    |
| FB-P0-12  | Live comment không được spam hoặc chốt đơn thiếu kiểm soát                              |
| FB-P0-13  | Channel context bắt buộc trước khi gọi PACK-05                                          |
| FB-P0-14  | Human takeover bắt buộc khi vượt quyền hoặc rủi ro cao                                  |
| FB-P0-15  | Rate limit/spam suppression là bắt buộc                                                 |
| FB-P0-16  | Không có channel evidence thì không Gateway Pass                                        |
| FB-P0-17  | Không dùng production credential trong test trái policy                                 |
| FB-P0-18  | Channel pause/disable path là bắt buộc                                                  |
| FB-P0-19  | Gateway không được gọi Production Ready nếu chưa có smoke/evidence/owner sign-off       |
| FB-P0-20  | PACK-06 không được gọi Gateway PASS khi còn P0 issue mở                                 |
| FB-P0-21  | Public comment không được chốt đơn đầy đủ                                               |
| FB-P0-22  | Public comment không được hỏi hoặc lặp thông tin cá nhân                                |
| FB-P0-23  | Comment hỏi quote cá nhân hóa phải route private nếu policy chặn public                 |
| FB-P0-24  | Comment chứa SĐT/địa chỉ/MST/email phải được bảo vệ privacy                             |
| FB-P0-25  | Comment khiếu nại phải dừng upsell và route complaint/handoff                           |
| FB-P0-26  | Comment → Messenger handoff phải giữ context                                            |
| FB-P0-27  | Private handoff fail thì không được tiếp tục thu thông tin riêng ở public               |
| FB-P0-28  | Messenger private vẫn không được vượt runtime/guard                                     |
| FB-P0-29  | Messenger order capture phải có Customer Confirmation trước official order              |
| FB-P0-30  | Live comment muốn mua phải route private/order capture, không chốt đầy đủ ở public live |
| FB-P0-31  | Live offer không được tự áp dụng nếu runtime không xác nhận                             |
| FB-P0-32  | Human takeover phải có packet, không làm mất ngữ cảnh                                   |
| FB-P0-33  | AI không được tiếp tục tự quyết khi human takeover đang active                          |
| FB-P0-34  | Rate limit/spam suppression phải chặn gửi lặp/spam                                      |
| FB-P0-35  | Opt-out thắng CRM/follow-up                                                             |
| FB-P0-36  | Channel error không được làm AI gửi bừa                                                 |
| FB-P0-37  | Public-to-private traceability là bắt buộc                                              |
| FB-P0-38  | Live-to-private traceability là bắt buộc                                                |
| FB-P0-39  | Crisis/legal/media escalation phải handoff owner                                        |
| FB-P0-40  | Không có channel policy thì fail-closed                                                 |
| FB-P0-41  | Meta App phải có registry trước khi dùng                                                |
| FB-P0-42  | App Review/Permission chưa đạt thì không mở production channel                          |
| FB-P0-43  | Permission thiếu/revoked/expired thì channel phải fail-closed hoặc pause                |
| FB-P0-44  | Page Binding production bắt buộc trước khi xử lý khách thật                             |
| FB-P0-45  | Webhook phải xác thực trước khi xử lý event                                             |
| FB-P0-46  | Webhook duplicate không được tạo reply/order/case trùng                                 |
| FB-P0-47  | Token/credential/secret không được hardcode hoặc lộ trong log/evidence sai quyền        |
| FB-P0-48  | Credential compromised thì phải pause channel                                           |
| FB-P0-49  | Access control phải phân quyền rõ, dev/operator không tự bật production                 |
| FB-P0-50  | Privacy guard bắt buộc cho dữ liệu cá nhân                                              |
| FB-P0-51  | Rate limit theo khách/Page/Live là bắt buộc                                             |
| FB-P0-52  | Spam suppression không được để AI tranh luận/spam                                       |
| FB-P0-53  | Quiet hours/frequency cap phải được tôn trọng nếu policy có                             |
| FB-P0-54  | Channel error không được retry/gửi bù gây spam                                          |
| FB-P0-55  | UAT không đạt P0 thì không pilot/production                                             |
| FB-P0-56  | Không có evidence packet thì không Gateway PASS                                         |
| FB-P0-57  | Monitoring/alert phải có owner xử lý                                                    |
| FB-P0-58  | Incident P0 phải pause hoặc chặn release                                                |
| FB-P0-59  | Pilot phải có scope và stop criteria                                                    |
| FB-P0-60  | Production readiness phải có evidence accepted, no P0, owner sign-off, release decision |

**175. FINAL PACK DONE GATE**

PACK-06 được xem là hoàn chỉnh ở tầng tài liệu governance khi:

1.  PHẦN 1/4 đã khóa Facebook Channel Gateway Principles, Meta App–Page–Webhook Boundary và PACK-05 Dependency.

2.  PHẦN 2/4 đã khóa Public Comment, Messenger, Live Routing, Private Handoff, Channel Policy và Human Takeover.

3.  PHẦN 3/4 đã khóa Meta App Review, Permission, Security, Rate Limit, Spam Suppression, Evidence và UAT.

4.  PHẦN 4/4 đã khóa Smoke Matrix, Gateway Done Gate, Fail Gate, Release Control và Final Conclusion.

5.  Tài liệu không mâu thuẫn PACK-05.

6.  Tài liệu không mâu thuẫn PACK-01/02/03/04.

7.  Không biến Gateway thành AI Advisor Core.

8.  Không cho Gateway tự tính giá.

9.  Không cho Gateway tự chốt đơn.

10. Không cho Gateway tự sync MISA.

11. Không cho Gateway public dữ liệu riêng.

12. Không cho Gateway bỏ Claim Guard.

13. Không cho Gateway bỏ human takeover.

14. Không cho Gateway bỏ rate limit/spam suppression.

15. Có đủ P0 Rule Registry.

16. Có đủ Smoke Matrix.

17. Có đủ Fail Gate.

18. Có đủ Release Control.

19. Chưa gọi Implementation Complete.

20. Chưa gọi Gateway PASS.

21. Chưa gọi Production Ready.

22. Chưa gọi Go-live Approved.

Trạng thái phù hợp của PACK-06 sau khi hoàn tất tài liệu là:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

Không phải:

- IMPLEMENTATION_COMPLETE.

- UAT_PASS.

- SMOKE_PASS.

- EVIDENCE_ACCEPTED.

- GATEWAY_PASS.

- PRODUCTION_READY.

- GO_LIVE_APPROVED.

**176. ĐIỀU KIỆN CHUYỂN SANG PACK TIẾP THEO**

Có thể chuyển sang pack tiếp theo khi PACK-06 đạt:

1.  Documentation Done.

2.  Owner đọc hiểu ranh giới.

3.  Không còn mâu thuẫn với PACK-05.

4.  Không còn mâu thuẫn với PACK-01/02/03/04.

5.  Pack tiếp theo hiểu Facebook Gateway không phải AI Advisor Core.

6.  Pack tiếp theo hiểu Facebook Gateway chỉ cung cấp channel context/routing.

7.  Pack tiếp theo nếu liên quan Ads/ROAS phải tiêu thụ event hợp lệ, không tự thay quote/order/payment.

8.  Pack tiếp theo nếu liên quan MC AI Live phải dùng live context từ PACK-06, không tự bỏ routing guard.

9.  Pack tiếp theo nếu liên quan CRM phải giữ opt-out/frequency/suppression.

10. Pack tiếp theo nếu liên quan MISA phải đi qua PACK-04.

11. Pack tiếp theo không được gọi Gateway PASS khi PACK-06 chưa có evidence accepted.

**177. PACK-06 FINAL CONCLUSION**

PACK-06 khóa Facebook Channel Gateway của Ginsengfood như một lớp kênh chuyên trách cho Facebook Page, public comment, Messenger, live comment, webhook, private handoff, human takeover, channel privacy, rate limit, spam suppression, evidence, UAT, pilot và release control.

PACK-06 không phải AI Advisor Core.

PACK-06 không tư vấn thay PACK-05.

PACK-06 không tự tính giá.

PACK-06 không tự tạo đơn.

PACK-06 không tự xác nhận thanh toán.

PACK-06 không tự xác nhận giao hàng.

PACK-06 không tự xử lý hóa đơn chính thức.

PACK-06 không tự sync MISA.

PACK-06 không tự public dữ liệu riêng.

PACK-06 là gateway bảo đảm đúng kênh, đúng Page, đúng App, đúng permission, đúng webhook, đúng public/private boundary, đúng context, đúng routing, đúng handoff, đúng privacy, đúng evidence và đúng release gate.

Từ góc nhìn vận hành thực tế, một Facebook AI Gateway không thể chỉ là webhook cộng prompt. Nếu chỉ copy vài đoạn prompt vào webhook, hệ thống sẽ dễ gặp lỗi nghiêm trọng: public sai thông tin cá nhân, báo giá sai, chốt đơn sai, spam comment, vi phạm chính sách kênh, không handoff khi có khiếu nại, không có evidence và không thể release an toàn.

PACK-06 khẳng định: Facebook/Messenger/Live chỉ là kênh tiếp xúc. Logic tư vấn nằm ở PACK-05. Giá, quote, order nằm ở Commerce Runtime. MISA nằm ở PACK-04. Product và vận hành nằm ở PACK-01/02/03. Gateway phải tôn trọng toàn bộ ranh giới đó.

**KẾT LUẬN CUỐI:**  
PACK-06 là pack kiểm soát Facebook Channel Gateway / Meta Live & Messenger / Comment–Messenger Routing / App Review / Channel Smoke / Release Control của Ginsengfood. Pack này bảo đảm mọi tương tác Facebook được nhận đúng, định tuyến đúng, trả lời đúng, bảo mật đúng, handoff đúng, lưu evidence đúng và chỉ được release khi đầy đủ smoke, evidence, owner sign-off và release decision.

**TRẠNG THÁI PACK-06:**  
**GOVERNANCE_DOCUMENTATION_COMPLETE — PENDING IMPLEMENTATION / APP REVIEW / PERMISSION / UAT / TEST / SMOKE / EVIDENCE / OWNER SIGN-OFF / GATEWAY PASS / RELEASE DECISION.**

**PACK-06 — POST-COMPLETION HANDOFF NOTE**

**FACEBOOK CHANNEL GATEWAY / META LIVE & MESSENGER / COMMENT–MESSENGER ROUTING**

**GOVERNANCE COMPLETION & PACK-07 DEPENDENCY CONTROL**

**V1.0 CLEAN FINAL**

**1. MỤC TIÊU CỦA BẢN CHUYỂN TIẾP**

Bản chuyển tiếp này khóa trạng thái sau khi PACK-06 đã hoàn tất đủ 4 phần ở tầng tài liệu governance.

Mục tiêu chính:

1.  Xác nhận PACK-06 đã hoàn chỉnh ở tầng tài liệu governance.

2.  Khóa rõ PACK-06 chưa phải Gateway PASS.

3.  Khóa rõ PACK-06 chưa phải implementation complete.

4.  Khóa rõ PACK-06 chưa phải UAT pass.

5.  Khóa rõ PACK-06 chưa phải smoke pass.

6.  Khóa rõ PACK-06 chưa phải evidence accepted.

7.  Khóa rõ PACK-06 chưa phải production ready.

8.  Xác định cách PACK-07 phải kế thừa PACK-06.

9.  Ngăn Ads/ROAS pack tự thay thế order, payment, revenue, quote hoặc AI Advisor.

10. Làm cầu nối để viết PACK-07 đúng vai trò đo lường Ads/ROAS, không phá ranh giới đã khóa.

**2. TRẠNG THÁI CHÍNH THỨC CỦA PACK-06**

PACK-06 sau khi hoàn tất 4 phần được xác định ở trạng thái:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

Trạng thái này có nghĩa:

- Facebook Channel Gateway Principles đã khóa.

- Meta App / Page / Webhook Boundary đã khóa.

- PACK-05 Dependency đã khóa.

- Public Comment Governance đã khóa.

- Messenger Routing đã khóa.

- Live Routing đã khóa.

- Comment → Messenger Handoff đã khóa.

- Human Takeover đã khóa.

- Privacy / Personal Data Governance đã khóa.

- Meta App Review / Permission Governance đã khóa.

- Security / Token / Credential Governance đã khóa.

- Rate Limit / Spam Suppression đã khóa.

- Evidence / UAT / Pilot Governance đã khóa.

- Smoke Matrix đã khóa.

- Gateway Done Gate đã khóa.

- Fail Gate đã khóa.

- Release Control đã khóa.

Trạng thái này không có nghĩa:

- App đã được Meta duyệt.

- Permission đã đủ.

- Page đã binding production.

- Webhook đã chạy thật.

- AI đã live trên Facebook/Messenger.

- UAT đã pass.

- Smoke đã pass.

- Evidence đã accepted.

- Owner đã sign-off.

- Gateway PASS.

- Production Ready.

- Go-live Approved.

**3. PACK-06 ĐÃ KHÓA NHỮNG GÌ**

**3.1. PACK-06 là Facebook Channel Gateway**

PACK-06 giữ vai trò gateway/channel cho:

- Facebook Page.

- Public comment.

- Messenger/private chat.

- Live comment.

- Webhook.

- Comment → Messenger routing.

- Human takeover.

- Channel privacy.

- Rate limit.

- Spam suppression.

- Evidence.

- UAT.

- Pilot.

- Gateway release control.

PACK-06 không phải AI Advisor Core.

PACK-06 không phải Commerce Runtime.

PACK-06 không phải MISA Integration.

PACK-06 không phải Ads/ROAS Measurement.

**3.2. PACK-06 phụ thuộc PACK-05**

PACK-06 không viết lại AI tư vấn.

PACK-06 phải dùng PACK-05 cho:

- Intent Recognition.

- Product Knowledge.

- Customer Memory.

- Claim Guard.

- Response Mode.

- Quote / Order Handoff.

- Complaint Flow.

- Invoice Flow.

- CRM Flow.

- Handoff Packet.

- AI audit/evidence.

PACK-06 chỉ cung cấp channel context, routing, permission, privacy và gateway evidence.

**3.3. PACK-06 không được tự tính giá, tự tạo đơn, tự xác nhận thanh toán**

PACK-06 không được:

- Tự tính giá.

- Tự hardcode khuyến mãi.

- Tự tạo quote.

- Tự tạo order.

- Tự xác nhận payment.

- Tự xác nhận delivery.

- Tự xác nhận invoice issued.

- Tự xác nhận revenue.

- Tự sync MISA.

- Tự tính commission.

- Tự tính ROAS.

Nếu khách hỏi giá/mua trên Facebook/Messenger, PACK-06 chỉ route vào PACK-05 và Commerce Runtime theo boundary.

**3.4. Public comment không phải nơi chốt đơn đầy đủ**

Public comment phải:

- Trả lời ngắn.

- Không public dữ liệu riêng.

- Không hỏi số điện thoại/địa chỉ/MST/email.

- Không public order/payment/delivery/invoice.

- Không public member tier/quyền lợi riêng.

- Không public Diamond/referral owner.

- Không chốt đơn đầy đủ.

- Không tranh luận khi có khiếu nại.

- Route private khi cần tư vấn sâu/quote/order/invoice/complaint.

**3.5. Comment → Messenger phải giữ context**

Khi khách từ comment hoặc live chuyển sang Messenger, PACK-06 phải giữ:

- Page.

- Post/live.

- Comment gốc.

- Product context.

- Campaign/ads context nếu có.

- Diamond/referral context nếu có.

- Public response đã gửi.

- Routing reason.

- Session state.

- Evidence reference.

Khách không nên phải kể lại từ đầu.

**3.6. Human takeover là bắt buộc khi rủi ro cao**

PACK-06 đã khóa human takeover cho:

- Khiếu nại nghiêm trọng.

- Nghi hàng giả.

- QR lỗi.

- Refund/return/exchange.

- Payment đối chiếu khó.

- Invoice phức tạp.

- Legal/media risk.

- Privacy risk.

- AI confidence thấp.

- Runtime thiếu dữ liệu.

- Meta channel lỗi.

- Owner yêu cầu manual mode.

Human takeover phải có packet đầy đủ, không làm mất ngữ cảnh.

**4. PACK-07 PHẢI PHỤ THUỘC PACK-06 NHƯ THẾ NÀO**

PACK-07 nếu là **ADS / ROAS / ATTRIBUTION / VERIFIED REVENUE MEASUREMENT PACK** thì phải xem PACK-06 là nguồn sự kiện kênh Facebook hợp lệ.

PACK-07 không được tự lấy dữ liệu thô rồi suy diễn doanh thu.

PACK-07 phải tiêu thụ event đã qua gateway và có evidence.

PACK-06 cung cấp:

1.  Channel event.

2.  Page context.

3.  Comment context.

4.  Messenger context.

5.  Live context.

6.  Ads/campaign context nếu có.

7.  Referral/Diamond entry context nếu có.

8.  Comment → Messenger trace.

9.  AI response evidence.

10. Private handoff evidence.

11. Human takeover evidence.

12. Channel routing result.

13. Channel privacy status.

14. Channel error status.

PACK-07 dùng các dữ liệu này để đo lường attribution/ROAS, nhưng không được biến channel event thành revenue nếu chưa có verified order/payment/revenue từ owner pack tương ứng.

**5. RANH GIỚI GIỮA PACK-06 VÀ PACK-07**

**5.1. PACK-06 làm chủ Channel Event Truth**

PACK-06 quyết định:

- Event đến từ Page nào.

- Event là public comment hay Messenger.

- Event thuộc live nào.

- Event có source từ ads/campaign không.

- Event có referral/Diamond context không.

- Event được route public/private thế nào.

- Event có handoff không.

- Event có bị spam/privacy/rate limit block không.

- Event có evidence không.

**5.2. PACK-07 làm chủ Measurement / Attribution Truth**

PACK-07 sẽ quyết định:

- Sự kiện nào được tính là lead.

- Sự kiện nào được tính là qualified conversation.

- Sự kiện nào được tính là quote intent.

- Sự kiện nào được tính là order intent.

- Sự kiện nào được gắn attribution với ads/campaign.

- Doanh thu nào được phép tính vào ROAS.

- Revenue nào là verified revenue.

- Chi phí quảng cáo nào được dùng.

- ROAS, CPA, AOV, CVR được tính từ nguồn nào.

- Khi nào được scale ads.

- Khi nào phải dừng campaign.

- Khi nào dữ liệu không đủ tin cậy.

**5.3. PACK-07 không làm chủ Order / Payment / Revenue**

PACK-07 không được tự làm chủ:

- Quote.

- Cart.

- Official order.

- Payment status.

- COD status.

- Delivery status.

- Verified revenue.

- Refund/return.

- Commission.

- MISA accounting.

- Tax/voucher.

Các dữ liệu này phải đến từ owner pack/runtime tương ứng.

Nếu chưa có ORDER_VERIFIED hoặc revenue checkpoint hợp lệ, PACK-07 không được gọi là doanh thu verified.

**6. PACK-07 PHẢI KẾ THỪA CÁC RULE TỪ PACK-06**

PACK-07 phải kế thừa các rule sau từ PACK-06:

1.  Không có Page Registry thì không dùng event production.

2.  Không có App/Permission hợp lệ thì event không đủ tin cậy.

3.  Không có Webhook verified thì event không được dùng làm source production.

4.  Duplicate event phải được loại trùng.

5.  Public-to-private traceability là bắt buộc.

6.  Live-to-private traceability là bắt buộc.

7.  Ads-to-Messenger traceability là bắt buộc nếu đo attribution.

8.  Privacy block không được tính là successful conversation.

9.  Spam/suppressed event không được tính như lead chất lượng nếu policy không cho.

10. Human takeover event phải được phân biệt với AI-handled event.

11. Channel error phải được loại khỏi conversion hoặc đánh dấu data quality issue.

12. Evidence missing thì không dùng cho PASS.

**7. PACK-07 PHẢI KẾ THỪA CÁC RULE TỪ PACK-05**

PACK-07 phải kế thừa PACK-05 khi đo AI performance.

Không được tự định nghĩa lại:

- Intent Recognition.

- Product Recommendation.

- Quote Mode.

- Order Capture Mode.

- Complaint Mode.

- Invoice Mode.

- CRM Mode.

- Handoff Mode.

- Customer Memory use.

- Claim Guard result.

PACK-07 chỉ được đo các kết quả sau khi PACK-05 đã phân loại hoặc phát sinh event hợp lệ.

Ví dụ:

- AI tư vấn đúng sản phẩm → đo từ AI recommendation event hợp lệ.

- Quote intent → đo từ Quote Runtime/AI response event hợp lệ.

- Order intent → đo từ customer confirmation/order capture event hợp lệ.

- Complaint → đo từ complaint flow, không tính là sales conversion.

- Handoff → đo riêng, không xem là AI failed nếu policy yêu cầu handoff.

**8. PACK-07 PHẢI KẾ THỪA COMMERCE RUNTIME**

PACK-07 muốn tính revenue, ROAS, AOV, CPA phải dùng dữ liệu từ Commerce Runtime hoặc owner pack tương ứng.

PACK-07 không được tính revenue từ:

- Comment “chốt”.

- Messenger “lấy 2 hộp”.

- QuoteSnapshot.

- Cart draft.

- Checkout form.

- Customer nói đã chuyển khoản.

- Shipper đang giao.

- AI nói đã lên đơn nếu chưa có order_code.

- Đơn chưa verified.

- Payment chưa confirmed nếu policy yêu cầu.

- COD chưa thành công nếu policy yêu cầu.

- Order bị hủy/hoàn/đổi chưa xử lý.

PACK-07 chỉ được tính verified revenue khi owner runtime xác nhận.

**9. PACK-07 PHẢI KẾ THỪA PACK-04 KHI LIÊN QUAN KẾ TOÁN**

Nếu PACK-07 cần đối chiếu doanh thu với kế toán hoặc MISA, phải đi qua PACK-04.

PACK-07 không được:

- Sync MISA.

- Tạo chứng từ kế toán.

- Tự gọi doanh thu kế toán chính thức.

- Tự sửa dữ liệu MISA.

- Tự xác nhận hạch toán.

PACK-07 chỉ được dùng accounting/reconcile data nếu PACK-04 hoặc owner finance cung cấp checkpoint hợp lệ.

**10. PACK-07 PHẢI KHÓA DATA QUALITY TRƯỚC KHI TÍNH ROAS**

Trước khi tính ROAS, PACK-07 phải đánh giá chất lượng dữ liệu.

Các câu hỏi bắt buộc:

1.  Ads spend có nguồn hợp lệ không?

2.  Campaign/ad/adset mapping có rõ không?

3.  Event từ Facebook có qua PACK-06 không?

4.  Comment → Messenger trace có giữ được không?

5.  Quote/order linkage có giữ được không?

6.  Revenue đã verified chưa?

7.  Refund/return/cancel đã loại trừ chưa?

8.  Duplicate event đã loại chưa?

9.  Spam/bot event đã loại chưa?

10. Diamond/referral conflict đã xử lý chưa?

11. Organic vs paid source có phân biệt không?

12. Multi-touch attribution có rule không?

13. Missing data có đánh dấu không?

14. Data quality có đủ để scale không?

Nếu data quality không đạt, không được dùng ROAS để quyết định scale.

**11. PACK-07 KHÔNG ĐƯỢC TỰ TỐI ƯU ADS NẾU CHƯA CÓ OWNER RULE**

PACK-07 có thể đo lường và gợi ý, nhưng không được tự động scale ads nếu chưa có owner approval.

Không được tự:

- Tăng ngân sách.

- Giảm ngân sách.

- Tắt campaign.

- Tăng bid.

- Đổi creative.

- Đổi targeting.

- Đổi landing.

- Đổi hero product.

- Gán doanh thu cho campaign khi chưa verified.

- Kết luận campaign thắng/thua nếu data thiếu.

PACK-07 có thể đưa ra Scale Gate, nhưng owner phải quyết định nếu chưa có automation policy riêng.

**12. PACK-07 PHẢI PHÂN BIỆT CÁC LOẠI REVENUE**

PACK-07 phải phân biệt:

1.  Gross order value.

2.  Confirmed order value.

3.  Paid revenue.

4.  Delivered revenue.

5.  Verified revenue.

6.  Net revenue sau hủy/hoàn/đổi nếu policy yêu cầu.

7.  COD successful revenue.

8.  Prepaid confirmed revenue.

9.  Revenue pending verification.

10. Revenue excluded from ROAS.

Không được gom tất cả là doanh thu.

**13. PACK-07 PHẢI PHÂN BIỆT CÁC LOẠI CONVERSION**

PACK-07 phải phân biệt:

1.  Impression.

2.  Reach.

3.  Click.

4.  Landing view.

5.  Comment.

6.  Qualified comment.

7.  Private handoff.

8.  Messenger conversation.

9.  Qualified conversation.

10. Product consult.

11. Quote request.

12. Quote generated.

13. Cart draft.

14. Customer confirmation.

15. Official order.

16. Payment confirmed.

17. Delivery success.

18. ORDER_VERIFIED.

19. Repeat purchase.

20. CRM revenue.

Không được gọi comment là đơn hàng.

Không được gọi quote là revenue.

Không được gọi cart draft là verified sale.

**14. PACK-07 PHẢI PHÂN BIỆT AI PERFORMANCE VÀ ADS PERFORMANCE**

PACK-07 cần tách:

**14.1. Ads Performance**

Đo:

- Spend.

- Reach.

- Impression.

- CTR.

- CPC.

- CPM.

- Comment rate.

- Inbox rate.

- Lead rate.

- CPA.

- ROAS.

- Campaign/adset/ad creative performance.

**14.2. AI Advisor Performance**

Đo:

- Intent recognition quality.

- Response quality.

- Quote rate.

- Order capture rate.

- Handoff rate.

- Complaint detection.

- Product recommendation accuracy.

- CRM response rate.

- Conversion from AI consult.

- Fail-closed count.

- Guard block count.

Không được đổ lỗi cho ads nếu AI tư vấn sai.

Không được đổ lỗi cho AI nếu ads đưa sai khách hoặc nguồn traffic kém.

**15. PACK-07 PHẢI PHÂN BIỆT ADS VÀ DIAMOND/REFERRAL**

Khi khách đến từ Ads và Diamond/referral link, PACK-07 phải có rule attribution rõ.

Không được tính trùng:

- Ads revenue.

- Diamond referral revenue.

- CRM revenue.

- Organic revenue.

- Live revenue.

- Member rebuy revenue.

PACK-07 phải có conflict resolution:

1.  Ads click trước, Diamond link sau.

2.  Diamond link trước, Ads remarketing sau.

3.  Live comment từ paid boost.

4.  Organic comment trong post có ads.

5.  CRM rebuy từ khách từng đến ads.

6.  Khách cũ mua lại sau khi thấy ads.

7.  Khách tự gõ Messenger không có ad context.

Không có attribution rule thì không được kết luận ROAS chính thức.

**16. PACK-07 PHẢI KHÓA EVENT TAXONOMY**

PACK-07 sẽ cần một event taxonomy thống nhất.

Event taxonomy phải gồm tối thiểu:

1.  CHANNEL_EVENT.

2.  AD_EVENT.

3.  COMMENT_EVENT.

4.  MESSENGER_EVENT.

5.  LIVE_EVENT.

6.  AI_INTENT_EVENT.

7.  AI_RESPONSE_EVENT.

8.  QUOTE_EVENT.

9.  CART_EVENT.

10. ORDER_EVENT.

11. PAYMENT_EVENT.

12. DELIVERY_EVENT.

13. VERIFIED_REVENUE_EVENT.

14. CRM_EVENT.

15. COMPLAINT_EVENT.

16. HANDOFF_EVENT.

17. REFERRAL_EVENT.

18. ATTRIBUTION_EVENT.

19. DATA_QUALITY_EVENT.

20. SCALE_DECISION_EVENT.

Tên kỹ thuật chi tiết sẽ do implementation pack quyết định, nhưng governance taxonomy phải giữ.

**17. PACK-07 PHẢI KHÓA DASHBOARD GOVERNANCE**

Dashboard PACK-07 không được chỉ hiển thị số đẹp.

Dashboard phải phân biệt:

- Raw data.

- Clean data.

- Verified data.

- Excluded data.

- Pending data.

- Missing data.

- Data quality warning.

- Owner decision pending.

- Scale allowed.

- Scale blocked.

Dashboard không được gọi ROAS đẹp nếu revenue chưa verified.

Dashboard không được ẩn P0 data issue.

**18. PACK-07 PHẢI KHÓA SCALE GATE**

PACK-07 phải có Scale Gate.

Scale Gate là điều kiện trước khi tăng ngân sách hoặc mở rộng campaign.

Scale Gate phải kiểm tra:

1.  Ads spend source hợp lệ.

2.  Event attribution hợp lệ.

3.  Quote/order linkage hợp lệ.

4.  Verified revenue đạt.

5.  CPA đạt ngưỡng.

6.  ROAS đạt ngưỡng.

7.  COD/payment fail trong giới hạn.

8.  Refund/return trong giới hạn.

9.  AI handoff không quá tải.

10. CSKH/warehouse/fulfillment đáp ứng được.

11. Stock/sellable không bị chặn.

12. Sale Lock không ảnh hưởng sản phẩm hero.

13. Data quality đạt.

14. Owner approval.

Không có Scale Gate thì không được scale dựa trên cảm tính.

**19. PACK-07 PHẢI KHÓA STOP / PAUSE GATE**

PACK-07 cũng phải có Stop/Pause Gate.

Dừng hoặc pause khi:

1.  ROAS chưa đủ tin cậy.

2.  CPA vượt ngưỡng.

3.  Conversion tụt bất thường.

4.  Comment spam tăng cao.

5.  Complaint tăng cao.

6.  Fulfillment quá tải.

7.  Sản phẩm hero hết hàng/not sellable.

8.  Sale Lock/Recall ảnh hưởng SKU.

9.  Payment/COD fail cao.

10. Refund/return cao.

11. Data mismatch.

12. Attribution conflict.

13. Privacy/claim incident.

14. Owner yêu cầu.

**20. PACK-07 PHẢI CÓ EVIDENCE**

PACK-07 không được gọi measurement pass nếu thiếu evidence.

Evidence tối thiểu gồm:

- Ads spend source.

- Campaign/ad/adset identity.

- Channel event trace từ PACK-06.

- AI event trace từ PACK-05.

- Quote event.

- Order event.

- Payment/verified revenue event.

- Refund/cancel exclusion nếu có.

- Attribution rule used.

- Dashboard snapshot.

- Data quality result.

- Scale/stop decision.

- Owner review.

Không có evidence thì không ROAS PASS.

**21. ĐIỀU KIỆN ĐỂ BẮT ĐẦU PACK-07**

PACK-07 có thể bắt đầu khi:

1.  PACK-06 đạt GOVERNANCE_DOCUMENTATION_COMPLETE.

2.  PACK-07 hiểu PACK-06 chỉ là channel event gateway.

3.  PACK-07 hiểu PACK-05 là AI behavior source.

4.  PACK-07 hiểu Commerce Runtime là owner quote/order/revenue.

5.  PACK-07 hiểu PACK-04 là owner MISA integration.

6.  PACK-07 không tự tính revenue từ comment/quote/cart.

7.  PACK-07 không tự gọi ROAS verified nếu thiếu ORDER_VERIFIED.

8.  PACK-07 khóa data quality trước ROAS.

9.  PACK-07 có attribution rule rõ.

10. PACK-07 có Scale Gate và Stop Gate.

**22. ĐỀ XUẤT TÊN PACK-07**

Tên pack đề xuất:

**PACK-07 — ADS / ROAS / ATTRIBUTION / VERIFIED REVENUE MEASUREMENT PACK**

**ADS MEASUREMENT / CHANNEL ATTRIBUTION / VERIFIED REVENUE / SCALE GATE / DATA QUALITY GOVERNANCE**

**V1.0 CLEAN FINAL**

Tên tiếng Việt có thể hiểu:

**PACK-07 — ĐO LƯỜNG QUẢNG CÁO / ROAS / PHÂN BỔ NGUỒN DOANH THU / DOANH THU XÁC MINH / CỔNG QUYẾT ĐỊNH SCALE**

**23. ĐỀ XUẤT CẤU TRÚC PACK-07**

PACK-07 nên viết 4 phần:

**PHẦN 1/4 — ADS MEASUREMENT PRINCIPLES / SOURCE-OF-TRUTH BOUNDARY / PACK-06–PACK-05–COMMERCE DEPENDENCY**

Khóa:

- Ads Measurement không phải Commerce.

- PACK-07 không tự tạo revenue.

- Event source dependency.

- Verified revenue dependency.

- Ads vs AI vs Commerce vs CRM separation.

- Attribution governance.

- Data quality principles.

**PHẦN 2/4 — EVENT TAXONOMY / ATTRIBUTION MODEL / FUNNEL METRICS / VERIFIED REVENUE RULES**

Khóa:

- Event taxonomy.

- Funnel conversion.

- Comment → Messenger → Quote → Order → Payment → Verified Revenue.

- Organic/Paid/Diamond/CRM conflict.

- Multi-touch attribution.

- Revenue classification.

- Exclusion rules.

- Data quality event.

**PHẦN 3/4 — DASHBOARD / KPI / ROAS / CPA / AOV / SCALE GATE / STOP GATE / OWNER DECISION**

Khóa:

- Dashboard governance.

- KPI definitions.

- ROAS/CPA/AOV rules.

- Scale Gate.

- Stop/Pause Gate.

- Owner approval.

- Decision evidence.

- Data reliability warning.

**PHẦN 4/4 — SMOKE MATRIX / DONE GATE / FAIL GATE / RELEASE CONTROL / PACK-07 FINAL CONCLUSION**

Khóa:

- Ads data smoke.

- Attribution smoke.

- Revenue verification smoke.

- Dashboard smoke.

- Scale/stop smoke.

- Fail gate.

- Evidence.

- Release control.

- Final conclusion.

**24. MẪU DEPENDENCY BẮT BUỘC CHO PACK-07**

**Dependency với PACK-06 — Facebook Channel Gateway**

PACK-07 không nhận dữ liệu Facebook thô không kiểm soát làm nguồn đo lường chính thức.

PACK-07 chỉ dùng channel event đã qua PACK-06 hoặc nguồn event được owner phê duyệt.

PACK-06 cung cấp:

- Page context.

- Comment context.

- Messenger context.

- Live context.

- Ads/campaign context nếu có.

- Public-to-private traceability.

- Live-to-private traceability.

- Channel routing result.

- Human takeover result.

- Privacy/rate limit/spam status.

- Channel evidence.

PACK-07 tiêu thụ các event này để đo attribution, nhưng không biến chúng thành doanh thu nếu thiếu Commerce/Payment/Verified Revenue source.

**Dependency với PACK-05 — AI Advisor Channel Core**

PACK-07 không tự đánh giá AI bằng cảm tính.

PACK-07 đo AI performance dựa trên event hợp lệ từ PACK-05:

- Intent event.

- Product recommendation event.

- Quote mode event.

- Order capture event.

- Complaint event.

- Handoff event.

- CRM event.

- Guard block event.

PACK-07 không viết lại AI behavior.

**Dependency với Commerce Runtime**

PACK-07 không tự tạo quote/order/revenue.

PACK-07 chỉ dùng:

- QuoteSnapshot.

- Cart event.

- Customer Confirmation.

- Official order.

- Order_code.

- Payment confirmation.

- Delivery status nếu liên quan.

- ORDER_VERIFIED.

- Refund/cancel/return exclusion nếu có.

Không có ORDER_VERIFIED thì không có verified revenue cho ROAS chính thức.

**Dependency với PACK-04 — MISA Integration**

PACK-07 không sync MISA.

Nếu cần đối chiếu kế toán, PACK-07 chỉ dùng checkpoint/evidence hợp lệ từ PACK-04 hoặc owner Finance.

**25. CÂU KHÓA CHO DEV KHI TRIỂN KHAI PACK-07**

Dev không được hiểu PACK-07 là “lấy tiền ads chia doanh thu là xong”.

ROAS trong hệ thống thực tế không thể tính bằng cách lấy doanh thu thô chia chi phí quảng cáo.

Ví dụ: một comment “chốt 2 hộp” từ quảng cáo chưa phải doanh thu.

Thực tế phải biết:

- Comment đó đến từ campaign nào.

- Có thật là paid ads hay organic.

- Có đi qua Messenger không.

- Có giữ trace không.

- AI có quote không.

- Khách có xác nhận đơn không.

- Có order_code không.

- Thanh toán/COD có thành công không.

- Đơn có bị hủy/hoàn/trả không.

- Revenue đã verified chưa.

- Có trùng với Diamond/referral không.

- Có phải khách cũ CRM mua lại không.

- Có data quality issue không.

- Có đủ evidence không.

Nếu không kiểm soát các điểm này, dashboard ROAS sẽ sai và quyết định scale ads sẽ gây lỗ.

PACK-07 phải là hệ thống đo lường attribution và verified revenue có gate, không phải bảng tính thủ công.

**26. TRẠNG THÁI ĐỂ ĐI TIẾP**

Sau bản chuyển tiếp này, trạng thái phù hợp là:

**PACK-06 — GOVERNANCE_DOCUMENTATION_COMPLETE**

Và có thể chuyển sang:

**PACK-07 — ADS / ROAS / ATTRIBUTION / VERIFIED REVENUE MEASUREMENT PACK**

PACK-07 phải viết theo hướng:

- Không tự làm Commerce.

- Không tự làm Payment.

- Không tự làm MISA.

- Không tự làm AI Advisor.

- Không tự làm Facebook Gateway.

- Chỉ đo lường trên event hợp lệ.

- Chỉ tính ROAS từ verified revenue.

- Có data quality.

- Có attribution rule.

- Có scale gate.

- Có stop gate.

- Có evidence.

- Có owner decision.

**27. KẾT LUẬN BẢN CHUYỂN TIẾP**

PACK-06 đã khóa lớp Facebook Channel Gateway.

Từ sau PACK-06, mọi event Facebook/Messenger/Live đưa vào đo lường phải đi qua gateway có context, routing, privacy, evidence và traceability.

PACK-07 sẽ không đo ROAS từ dữ liệu rời rạc.

PACK-07 sẽ không xem comment, inbox, quote hoặc cart là doanh thu.

PACK-07 phải chỉ tính ROAS chính thức khi có verified revenue từ owner runtime.

PACK-07 phải phân biệt Ads Performance, AI Advisor Performance, Commerce Conversion, CRM Revenue, Diamond Referral và Organic Revenue.

PACK-07 phải có data quality, attribution, scale gate, stop gate và evidence.

**TRẠNG THÁI CUỐI:**  
**PACK-06 LOCKED AT GOVERNANCE DOCUMENTATION LEVEL — READY TO BE USED AS CHANNEL EVENT DEPENDENCY FOR PACK-07 — NOT GATEWAY PASS / NOT PRODUCTION READY.**
