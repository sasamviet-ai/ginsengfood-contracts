**PACK-07 — ADS / ROAS / ATTRIBUTION / VERIFIED REVENUE MEASUREMENT PACK**

**ADS MEASUREMENT / CHANNEL ATTRIBUTION / VERIFIED REVENUE / SCALE GATE / DATA QUALITY GOVERNANCE**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — ADS MEASUREMENT PRINCIPLES / SOURCE-OF-TRUTH BOUNDARY / PACK-06–PACK-05–COMMERCE DEPENDENCY**

**1. MỤC TIÊU CỦA PACK-07**

PACK-07 thiết lập lớp quản trị đo lường quảng cáo, phân bổ nguồn doanh thu, kiểm soát ROAS, kiểm soát CPA, đánh giá chất lượng dữ liệu và quyết định scale/stop quảng cáo cho hệ thống Ginsengfood.

PACK-07 không tạo ra doanh thu.

PACK-07 không xác nhận đơn hàng.

PACK-07 không xác nhận thanh toán.

PACK-07 không xác nhận giao hàng.

PACK-07 không quyết định sản phẩm có được bán hay không.

PACK-07 không thay thế Commerce Runtime, Payment Core, Order Core, AI Advisor, Facebook Channel Gateway, CRM, Diamond Referral, MISA hoặc Finance.

PACK-07 chỉ đo lường dựa trên dữ liệu hợp lệ, có nguồn rõ, có trace, có rule attribution, có evidence và có kết quả kiểm tra chất lượng dữ liệu.

Mục tiêu cốt lõi của PACK-07 là trả lời các câu hỏi vận hành sau:

1.  Chi phí quảng cáo đến từ nguồn nào.

2.  Khách hàng đến từ campaign, ad set, ad, live, page, comment hay Messenger nào.

3.  Tương tác nào là paid, organic, CRM, referral, Diamond, live hay mixed-source.

4.  Comment nào chuyển được sang Messenger.

5.  Messenger nào đi đến tư vấn sản phẩm.

6.  Tư vấn nào tạo quote.

7.  Quote nào chuyển thành cart draft.

8.  Cart draft nào được khách xác nhận.

9.  Xác nhận nào tạo official order.

10. Official order nào được thanh toán hoặc COD thành công.

11. Đơn nào đạt trạng thái doanh thu verified theo policy.

12. Doanh thu nào được tính ROAS.

13. Doanh thu nào phải loại trừ do hủy, hoàn, đổi, COD fail, payment fail, recall, sale lock, complaint hoặc data issue.

14. ROAS, CPA, AOV có đủ tin cậy để scale hay không.

15. Khi nào phải pause, stop, giảm ngân sách hoặc yêu cầu owner review.

PACK-07 là lớp đo lường và quyết định vận hành dựa trên dữ liệu đã được kiểm soát, không phải lớp tạo nghiệp vụ.

**2. TRẠNG THÁI TÀI LIỆU**

Trạng thái của PACK-07 sau khi hoàn tất tài liệu:

**GOVERNANCE_DOCUMENTATION_COMPLETE — PENDING IMPLEMENTATION / TEST / SMOKE / DATA QUALITY EVIDENCE / OWNER SIGN-OFF / SCALE DECISION / RELEASE DECISION**

Trạng thái này có nghĩa:

1.  Tài liệu governance/domain đã hoàn chỉnh.

2.  Ranh giới owner và source-of-truth đã được khóa.

3.  Nguyên tắc đo lường Ads/ROAS/Attribution/Verified Revenue đã được xác lập.

4.  Các điều kiện Data Quality, Scale Gate và Stop Gate đã được định nghĩa.

5.  Chưa được xem là triển khai xong.

6.  Chưa được xem là có dashboard production.

7.  Chưa được xem là ROAS PASS.

8.  Chưa được xem là đủ điều kiện scale.

9.  Chưa được gọi Production Ready.

10. Chưa được gọi Release Approved nếu chưa có implementation, test, smoke, accepted evidence, owner sign-off và release decision.

**3. VAI TRÒ CỦA PACK-07 TRONG HỆ THỐNG GINSENGFOOD**

PACK-07 giữ vai trò:

**Ads Measurement & Attribution Governance Owner**

PACK-07 làm chủ các lớp sau:

1.  Ads measurement principles.

2.  Campaign/ad/adset identity governance.

3.  Paid/organic/live/CRM/referral attribution governance.

4.  Funnel measurement governance.

5.  ROAS/CPA/AOV measurement governance.

6.  Verified revenue measurement dependency.

7.  Data quality control before reporting.

8.  Scale Gate governance.

9.  Stop/Pause Gate governance.

10. Dashboard reliability governance.

11. Decision evidence governance.

PACK-07 không làm chủ:

1.  Facebook Page, Webhook, Messenger, Live routing.

2.  AI tư vấn, AI trả lời, AI chốt đơn.

3.  Product Master.

4.  SKU sellable status.

5.  Inventory.

6.  Sale Lock.

7.  QuoteSnapshot.

8.  Official Order.

9.  Payment confirmation.

10. COD success.

11. Delivery success.

12. Invoice.

13. MISA sync.

14. Accounting revenue.

15. Commission.

16. Tax/Voucher.

17. Customer membership benefit.

18. Diamond benefit.

19. CRM message eligibility.

20. Recall/Stop-sale.

PACK-07 chỉ được đo lường từ sự kiện hợp lệ do các owner pack phát hành hoặc được owner phê duyệt.

**4. NGUYÊN TẮC CỐT LÕI**

**4.1. Ads Measurement không phải Commerce**

Ads có thể tạo traffic.

Ads có thể tạo comment.

Ads có thể tạo inbox.

Ads có thể tạo lead.

Ads có thể tạo quote request.

Ads không tự tạo đơn hàng chính thức.

Ads không tự tạo doanh thu.

Ads không tự xác nhận thanh toán.

Ads không tự xác nhận COD thành công.

Ads không tự xác nhận giao hàng thành công.

Ads không tự tạo verified revenue.

Do đó, PACK-07 không được tính doanh thu chỉ từ:

1.  Click.

2.  Landing view.

3.  Comment.

4.  Inbox.

5.  Messenger conversation.

6.  Khách nói “lấy 2 hộp”.

7.  Khách gửi thông tin nhận hàng.

8.  QuoteSnapshot.

9.  Cart draft.

10. Checkout form chưa xác nhận.

11. Ảnh chuyển khoản chưa đối chiếu.

12. Đơn chưa có official order/order_code.

13. Đơn chưa đạt payment/COD/delivery/verified revenue theo policy.

Một tương tác quảng cáo chỉ được đi vào doanh thu khi có linkage đầy đủ đến owner runtime xác nhận trạng thái doanh thu hợp lệ.

**4.2. Không có Verified Revenue thì không có ROAS chính thức**

ROAS chính thức không được tính bằng doanh thu ước đoán.

ROAS chính thức không được tính bằng doanh thu từ comment.

ROAS chính thức không được tính bằng tổng quote.

ROAS chính thức không được tính bằng cart draft.

ROAS chính thức không được tính bằng đơn khách nói miệng.

ROAS chính thức chỉ được tính khi doanh thu đã đạt trạng thái verified theo rule của owner pack.

PACK-07 được phép hiển thị nhiều lớp doanh thu, nhưng phải phân biệt rõ:

1.  Gross order value.

2.  Confirmed order value.

3.  Paid revenue.

4.  COD successful revenue.

5.  Delivered revenue.

6.  Verified revenue.

7.  Net revenue sau hủy/hoàn/đổi nếu policy yêu cầu.

8.  Revenue pending verification.

9.  Revenue excluded from ROAS.

ROAS production chỉ được dùng **Verified Revenue** hoặc revenue class được owner policy phê duyệt rõ.

**4.3. Data Quality phải đi trước ROAS**

PACK-07 không được đưa ROAS đẹp ra dashboard nếu dữ liệu chưa sạch.

Trước khi tính ROAS chính thức, hệ thống phải kiểm tra tối thiểu:

1.  Ads spend source có hợp lệ không.

2.  Campaign/adset/ad mapping có rõ không.

3.  Event có đi qua nguồn được phê duyệt không.

4.  Channel event có trace từ PACK-06 không.

5.  AI event có trace từ PACK-05 không.

6.  Quote event có liên kết đến conversation không.

7.  Order event có official order/order_code không.

8.  Payment/COD/delivery/verified revenue có hợp lệ không.

9.  Refund/cancel/return đã được loại trừ chưa.

10. Duplicate event đã được xử lý chưa.

11. Bot/spam/suppressed event đã được loại chưa.

12. Organic/Paid/CRM/Diamond/referral conflict đã được xử lý chưa.

13. Missing data có được đánh dấu không.

14. Privacy-blocked event có bị loại không.

15. Attribution rule có được ghi nhận không.

16. Dashboard có phân biệt raw/clean/verified/excluded/pending/missing không.

Nếu Data Quality không đạt, PACK-07 phải hiển thị trạng thái:

**ROAS_NOT_RELIABLE — SCALE_BLOCKED — OWNER_REVIEW_REQUIRED**

**4.4. Attribution không được suy diễn cảm tính**

PACK-07 không được kết luận doanh thu thuộc Ads nếu thiếu attribution rule.

PACK-07 không được kết luận doanh thu thuộc Diamond nếu thiếu referral bind.

PACK-07 không được kết luận doanh thu thuộc CRM nếu thiếu CRM event linkage.

PACK-07 không được kết luận doanh thu thuộc Organic nếu sự kiện có paid context chưa xử lý.

PACK-07 không được tính trùng một đơn cho nhiều nguồn doanh thu.

Các tình huống bắt buộc có conflict resolution:

1.  Ads click trước, Diamond link sau.

2.  Diamond link trước, Ads remarketing sau.

3.  Live comment từ post được boost.

4.  Organic comment trong bài đang chạy ads.

5.  CRM nhắc mua lại cho khách từng đến từ ads.

6.  Khách cũ mua lại sau khi thấy ads.

7.  Khách tự gõ Messenger không có ad context.

8.  Khách vào từ landing page rồi quay lại Messenger.

9.  Khách vào từ link người giới thiệu rồi comment trên live.

10. Khách nhiều lần tương tác qua nhiều campaign.

Không có attribution rule thì không được tính ROAS chính thức theo nguồn.

**4.5. Ads Performance và AI Performance phải tách riêng**

PACK-07 phải phân biệt hiệu quả quảng cáo và hiệu quả AI tư vấn.

Ads Performance đo:

1.  Spend.

2.  Impression.

3.  Reach.

4.  Click.

5.  CTR.

6.  CPC.

7.  CPM.

8.  Comment rate.

9.  Inbox rate.

10. Lead rate.

11. Cost per qualified conversation.

12. CPA.

13. ROAS.

14. Campaign/adset/ad creative performance.

AI Advisor Performance đo:

1.  Intent recognition.

2.  Response quality.

3.  Product recommendation accuracy.

4.  Quote request handling.

5.  Quote generation rate.

6.  Cart/order capture rate.

7.  Handoff rate.

8.  Guard block count.

9.  Complaint detection.

10. CRM response rate.

11. Conversion from AI consult.

12. Fail-closed count.

Không đổ lỗi cho Ads nếu AI tư vấn sai.

Không đổ lỗi cho AI nếu Ads đưa traffic kém.

Không đổ lỗi cho Facebook Gateway nếu Commerce chặn sellable.

Không đổ lỗi cho Commerce nếu channel event thiếu trace.

Không đổ lỗi cho dashboard nếu upstream chưa gửi verified revenue.

**5. SOURCE-OF-TRUTH BOUNDARY**

**5.1. Bảng ranh giới source-of-truth**

| **Lớp nghiệp vụ**                             | **Source-of-truth owner**         | **PACK-07 được làm gì**                           | **PACK-07 không được làm gì**                 |
|-----------------------------------------------|-----------------------------------|---------------------------------------------------|-----------------------------------------------|
| Facebook Page / Webhook / Messenger / Live    | PACK-06                           | Consume channel event đã kiểm soát                | Không tự đọc raw event để kết luận production |
| AI tư vấn / intent / response / quote request | PACK-05                           | Consume AI event hợp lệ                           | Không viết lại logic AI                       |
| Product / SKU / Recipe / Formula              | Product Master / Operational Core | Consume product identity public/measurement field | Không sửa product master, không lộ BOM        |
| Sellable / Stock / Sale Lock                  | Operational/Commerce owner        | Consume sellable checkpoint                       | Không bán vượt sale lock                      |
| QuoteSnapshot                                 | Commerce Runtime                  | Consume quote event                               | Không tự tính giá/khuyến mãi                  |
| Official Order                                | Order/Commerce owner              | Consume order event                               | Không tự tạo đơn                              |
| Payment / COD                                 | Payment/Order owner               | Consume payment/COD event                         | Không tự xác nhận paid/COD success            |
| Delivery                                      | Fulfillment/Shipping owner        | Consume delivery event                            | Không tự xác nhận giao hàng                   |
| Verified Revenue                              | Commerce/Finance owner            | Consume verified revenue event                    | Không tự gọi doanh thu chính thức             |
| MISA / Accounting                             | PACK-04 / Finance                 | Consume accounting checkpoint nếu được phép       | Không sync MISA, không tạo chứng từ           |
| CRM                                           | CRM/AI/Commerce owner tùy rule    | Consume CRM event                                 | Không tự gửi CRM                              |
| Diamond Referral                              | Referral/Commerce owner           | Consume referral bind/event                       | Không tự tính hoa hồng                        |
| Ads Spend                                     | Approved Ads source               | Consume spend record hợp lệ                       | Không tự bịa spend                            |
| Scale Decision                                | Owner decision + PACK-07 gate     | Đề xuất scale/stop theo gate                      | Không tự scale nếu thiếu approval             |

**5.2. Nguyên tắc không tạo parallel truth**

PACK-07 không được tạo bảng sự thật song song cho:

1.  Doanh thu.

2.  Đơn hàng.

3.  Thanh toán.

4.  Giao hàng.

5.  Tồn kho.

6.  Sellable.

7.  Giá.

8.  Khuyến mãi.

9.  Member benefit.

10. Diamond benefit.

11. Commission.

12. MISA accounting.

13. Official customer status.

14. Complaint resolution.

15. Recall/sale lock.

PACK-07 chỉ được tạo lớp measurement projection, dashboard projection hoặc attribution analysis từ event hợp lệ.

Measurement projection không phải business truth.

Dashboard metric không được ghi ngược làm nghiệp vụ gốc.

ROAS metric không được sửa order.

CPA metric không được sửa payment.

Attribution result không được sửa official revenue nếu owner pack chưa cho phép.

**6. PHỤ THUỘC BẮT BUỘC VỚI PACK-06**

**6.1. PACK-06 là Channel Event Truth cho Facebook/Messenger/Live**

Đối với Facebook, Messenger và Live, PACK-07 phải dùng PACK-06 làm nguồn channel event đã được kiểm soát.

PACK-07 không được dùng trực tiếp Facebook raw event thiếu guard để báo cáo production nếu event đó chưa qua các bước:

1.  Page Registry validation.

2.  App/Permission validation.

3.  Webhook verification.

4.  Deduplication.

5.  Channel identity resolution.

6.  Public/private routing classification.

7.  Comment → Messenger trace.

8.  Live session context.

9.  Spam/rate-limit suppression check.

10. Privacy guard.

11. Human takeover flag nếu có.

12. Channel evidence.

Event không qua PACK-06 phải được đánh dấu:

**UNCONTROLLED_CHANNEL_EVENT — NOT_FOR_PRODUCTION_ROAS**

**6.2. Channel context bắt buộc**

PACK-07 cần tối thiểu các nhóm context sau từ PACK-06:

1.  Page context.

2.  Post context.

3.  Comment context.

4.  Messenger thread context.

5.  Live session context.

6.  Public-to-private routing context.

7.  Handoff context.

8.  Human takeover context.

9.  Spam/rate-limit status.

10. Privacy guard status.

11. Channel error status.

12. Evidence/correlation context.

Không có channel context thì không được kết luận nguồn tương tác.

Không có comment-to-Messenger trace thì không được gán Messenger order về comment/live/ad một cách chính thức.

Không có Page Registry thì không được đo production performance theo Page.

Không có Live session identity thì không được gán doanh thu về phiên live.

**6.3. Public comment không phải order signal đầy đủ**

PACK-07 có thể đo comment là funnel event.

PACK-07 không được gọi comment là order.

PACK-07 không được gọi live comment “chốt” là doanh thu.

PACK-07 không được gọi public reply là tư vấn hoàn chỉnh nếu policy yêu cầu private.

Comment chỉ là một lớp trong funnel:

**Comment → Qualified Comment → Private Handoff → Messenger Conversation → Product Consult → Quote → Cart Draft → Customer Confirmation → Official Order → Payment/COD/Delivery → Verified Revenue**

Comment không được nhảy thẳng thành revenue.

**7. PHỤ THUỘC BẮT BUỘC VỚI PACK-05**

**7.1. PACK-05 là AI Advisor Runtime Owner**

PACK-07 được đo lường hiệu quả AI, nhưng không được viết lại hoặc override AI Advisor.

PACK-07 chỉ consume AI event hợp lệ từ PACK-05:

1.  Intent event.

2.  Entity recognition event.

3.  Product recommendation event.

4.  Guard block event.

5.  Response event.

6.  Quote request event.

7.  Cart/order capture event.

8.  Complaint detection event.

9.  Handoff event.

10. CRM event.

11. Fail-closed event.

PACK-07 không được tự quyết định AI trả lời đúng hay sai nếu thiếu test/evidence rule.

PACK-07 có thể đánh dấu metric để owner review, nhưng không được tự sửa behavior production của AI.

**7.2. Handoff theo policy không phải AI failure**

Một số tình huống bắt buộc phải handoff:

1.  Khi cần xác nhận riêng tư.

2.  Khi có dữ liệu cá nhân.

3.  Khi có đơn hàng/hóa đơn/thanh toán.

4.  Khi có complaint/rủi ro chất lượng.

5.  Khi có câu hỏi vượt claim/safety.

6.  Khi có yêu cầu pháp lý.

7.  Khi có kênh public nhưng nội dung cần private.

8.  Khi AI không đủ runtime để trả lời an toàn.

Trong các trường hợp này, handoff đúng policy không được tính là AI failure.

PACK-07 phải phân biệt:

1.  Policy-required handoff.

2.  Risk handoff.

3.  Human takeover.

4.  AI failure handoff.

5.  Data-missing handoff.

6.  Channel-required private handoff.

Nếu không phân biệt handoff, dashboard sẽ đánh giá sai hiệu quả AI.

**7.3. Complaint không tính là sales conversion**

Complaint, quality issue, refund issue, delivery issue, invoice issue hoặc payment dispute không được tính là sales conversion.

Nếu khách đang trong complaint flow, PACK-07 phải đánh dấu conversion bị chặn theo rule.

Không được tính upsell từ khách đang có complaint mở nếu CRM/AI policy đã block.

Không được dùng complaint conversation để nâng tỷ lệ tư vấn bán hàng.

Complaint event cần đi vào risk metric, không đi vào sales performance như một lead bình thường.

**8. PHỤ THUỘC BẮT BUỘC VỚI COMMERCE RUNTIME**

**8.1. Commerce Runtime là nguồn Quote/Order/Revenue hợp lệ**

PACK-07 không được tự tính:

1.  Listed price.

2.  Program discount.

3.  Member discount.

4.  Diamond benefit.

5.  Final total.

6.  Shipping fee.

7.  COD fee.

8.  VAT display.

9.  Quote expiry.

10. Order total.

11. Refund amount.

12. Revenue amount.

13. Commission.

Các giá trị này phải đến từ owner runtime.

PACK-07 chỉ được đo lường khi có event/record hợp lệ từ Commerce/Order/Payment/Revenue owner.

**8.2. QuoteSnapshot không phải revenue**

QuoteSnapshot là báo giá có kiểm soát.

QuoteSnapshot không phải đơn hàng.

QuoteSnapshot không phải thanh toán.

QuoteSnapshot không phải doanh thu.

QuoteSnapshot chỉ có thể là một funnel event.

PACK-07 được đo:

1.  Quote request rate.

2.  Quote generation rate.

3.  Quote-to-confirmation rate.

4.  Quote-to-order rate.

5.  Quote-to-verified-revenue rate.

6.  Quote expiry rate.

PACK-07 không được tính tổng QuoteSnapshot thành doanh thu.

**8.3. Official Order là điều kiện tối thiểu để đo order**

Không có official order/order_code thì không được gọi là order chính thức.

Các trạng thái chưa đủ để gọi order:

1.  Khách comment “lấy 2 hộp”.

2.  Khách inbox “chốt”.

3.  Khách gửi tên/số điện thoại/địa chỉ.

4.  AI tạo cart draft.

5.  AI gửi form xác nhận.

6.  Khách gửi ảnh chuyển khoản.

7.  Nhân viên ghi chú ngoài hệ thống.

PACK-07 chỉ ghi nhận order khi owner runtime phát hành official order event hợp lệ.

**8.4. Payment/COD/Delivery/Verified Revenue phải theo owner policy**

Một đơn hàng có thể đi qua nhiều lớp:

1.  Official order created.

2.  Customer confirmed.

3.  Payment pending.

4.  Payment confirmed.

5.  COD pending.

6.  COD success.

7.  Delivery pending.

8.  Delivery success.

9.  Return/refund/cancel.

10. ORDER_VERIFIED.

11. Revenue verified.

12. Revenue excluded.

PACK-07 phải dùng đúng revenue class.

Không được gọi order created là paid revenue.

Không được gọi payment pending là verified revenue.

Không được gọi delivery pending là delivered revenue.

Không được gọi COD pending là COD successful revenue.

Không được gọi revenue pending verification là ROAS revenue chính thức.

**9. PHỤ THUỘC BẮT BUỘC VỚI PACK-04 / MISA / FINANCE**

**9.1. PACK-07 không sync MISA**

PACK-07 không được:

1.  Tạo chứng từ kế toán.

2.  Gửi chứng từ sang MISA.

3.  Sửa mapping MISA.

4.  Tự đối chiếu kế toán bằng dữ liệu không hợp lệ.

5.  Ghi ngược doanh thu vào MISA.

6.  Gọi một doanh thu là doanh thu kế toán nếu thiếu checkpoint.

Nếu cần số liệu kế toán hoặc đối chiếu MISA, PACK-07 chỉ được consume checkpoint/evidence hợp lệ từ PACK-04 hoặc Finance owner.

**9.2. ROAS revenue không mặc định là accounting revenue**

Doanh thu dùng cho ROAS và doanh thu kế toán có thể khác nhau về thời điểm ghi nhận.

PACK-07 phải phân biệt:

1.  Marketing verified revenue.

2.  Commerce verified revenue.

3.  Payment confirmed revenue.

4.  COD successful revenue.

5.  Delivered revenue.

6.  Accounting posted revenue.

7.  Reconciled accounting revenue.

8.  Net revenue after adjustment.

Không được dùng từ “doanh thu chính thức” nếu không chỉ rõ class.

Nếu dashboard dùng verified revenue cho ROAS, phải hiển thị rõ:

**Revenue Basis = VERIFIED_REVENUE_FOR_MARKETING_MEASUREMENT**

Nếu dùng kế toán đã post, phải hiển thị rõ:

**Revenue Basis = ACCOUNTING_RECONCILED_REVENUE**

**10. PHÂN TÁCH ADS / AI / COMMERCE / CRM / REFERRAL**

**10.1. Ads Performance**

Ads Performance là hiệu quả tạo traffic, tạo tương tác và tạo cơ hội bán hàng từ ngân sách quảng cáo.

Các chỉ số thuộc Ads Performance:

1.  Spend.

2.  Impression.

3.  Reach.

4.  CPM.

5.  Click.

6.  CTR.

7.  CPC.

8.  Landing view.

9.  Comment rate.

10. Inbox rate.

11. Cost per comment.

12. Cost per qualified comment.

13. Cost per Messenger conversation.

14. Cost per qualified conversation.

15. Cost per quote request.

16. Cost per official order.

17. Cost per verified order.

18. ROAS theo verified revenue.

19. Creative performance.

20. Campaign/adset/ad performance.

Ads Performance không tự chứng minh AI tốt.

Ads Performance không tự chứng minh doanh thu tốt nếu revenue chưa verified.

**10.2. AI Advisor Performance**

AI Advisor Performance là hiệu quả tư vấn, điều hướng nhu cầu, đề xuất sản phẩm, quote/order handoff và xử lý tình huống khách hàng.

Các chỉ số thuộc AI Performance:

1.  Intent recognition rate.

2.  Correct product recommendation rate.

3.  Claim guard pass/fail.

4.  Quote request handling.

5.  Quote generation support.

6.  Order capture completion.

7.  Handoff correctness.

8.  Complaint detection.

9.  Guard block correctness.

10. CRM response quality.

11. Conversion after AI consult.

12. AI-to-human escalation quality.

AI Performance phải tách khỏi Ads Performance để xác định đúng nguyên nhân tăng/giảm doanh thu.

**10.3. Commerce Performance**

Commerce Performance phản ánh việc quote, giá, order, payment, delivery, stock, sellable và verified revenue có vận hành đúng hay không.

Các vấn đề Commerce có thể ảnh hưởng ROAS:

1.  SKU hero hết hàng.

2.  SKU bị sale lock.

3.  Quote không tạo được.

4.  Giá runtime lỗi.

5.  Program không active.

6.  Member benefit không resolve được.

7.  Order không tạo được.

8.  Payment confirmation chậm.

9.  COD fail cao.

10. Delivery fail cao.

11. Refund/return cao.

12. Revenue verification chậm.

PACK-07 phải đánh dấu nguyên nhân đến từ Commerce, không gán sai cho Ads hoặc AI.

**10.4. CRM Performance**

CRM Performance phản ánh doanh thu từ chăm sóc lại, mua lại, duy trì thành viên, nâng hạng, quà tặng, seasonal suggestion hoặc after-sales.

CRM revenue không được tính trùng với Ads revenue nếu attribution policy không cho phép.

Một khách từng đến từ Ads nhưng mua lại sau CRM không mặc định là Ads revenue.

Một khách thấy remarketing Ads sau CRM phải có attribution rule rõ.

CRM rebuy revenue phải có classification riêng nếu dùng trong dashboard.

**10.5. Diamond / Referral Performance**

Diamond/referral revenue phải dựa trên referral bind hợp lệ.

Không có referral bind thì không được gọi là Diamond revenue.

PACK-07 không tự tính hoa hồng.

PACK-07 chỉ đo:

1.  Referral entry.

2.  Referral bind.

3.  Referral conflict.

4.  Referral-attributed order.

5.  Referral-attributed verified revenue.

6.  Commission eligibility event nếu owner pack phát hành.

7.  Commission status nếu Finance/Commerce owner cung cấp.

Revenue từ Diamond/referral phải tách khỏi Ads revenue nếu policy yêu cầu.

**11. ATTRIBUTION GOVERNANCE PRINCIPLES**

**11.1. Attribution là rule-governed, không phải cảm tính**

Attribution phải dựa trên rule được owner phê duyệt.

PACK-07 không được dùng cách nhìn thủ công để kết luận “đơn này do ads”.

Mỗi conversion cần có:

1.  Customer identity hoặc session identity hợp lệ.

2.  Channel identity.

3.  Campaign/ad/adset identity nếu có.

4.  Entry event.

5.  Touchpoint chain.

6.  Quote/order/revenue linkage.

7.  Attribution model used.

8.  Conflict resolution nếu có.

9.  Evidence.

10. Data quality result.

**11.2. Attribution model phải khai báo rõ**

PACK-07 có thể hỗ trợ nhiều mô hình attribution, nhưng mỗi báo cáo phải nêu rõ model đang dùng.

Các mô hình có thể có:

1.  First touch.

2.  Last touch.

3.  Last paid touch.

4.  Last non-direct touch.

5.  Session-based attribution.

6.  Campaign-bound attribution.

7.  Live-session attribution.

8.  Diamond referral priority attribution.

9.  CRM rebuy attribution.

10. Owner-approved custom attribution.

Không được trộn nhiều model trong cùng một chỉ số mà không khai báo.

**11.3. Attribution conflict phải được đánh dấu**

Khi một order có nhiều nguồn nhận công, PACK-07 phải đánh dấu conflict.

Ví dụ conflict:

1.  Paid Ads + Organic Comment.

2.  Paid Ads + Live Session.

3.  Paid Ads + Diamond Referral.

4.  Diamond Referral + CRM.

5.  CRM + Remarketing Ads.

6.  Organic Messenger + Ads Click cũ.

7.  Member rebuy + Ads view.

8.  MC AI Live + Facebook Ads.

9.  Landing Page + Messenger.

10. Human telesales + AI Advisor.

Conflict chưa xử lý không được đưa vào ROAS chính thức.

Trạng thái bắt buộc:

**ATTRIBUTION_CONFLICT — OWNER_RULE_REQUIRED**  
hoặc  
**ATTRIBUTION_CONFLICT_RESOLVED — RULE_APPLIED**

**12. DATA QUALITY PRINCIPLES**

**12.1. Các lớp dữ liệu phải phân biệt rõ**

PACK-07 dashboard phải phân biệt:

1.  Raw data.

2.  Normalized data.

3.  Clean data.

4.  Verified data.

5.  Excluded data.

6.  Pending data.

7.  Missing data.

8.  Duplicated data.

9.  Conflict data.

10. Suppressed data.

11. Privacy-blocked data.

12. Owner-review data.

Không được gom tất cả thành số tổng.

Không được ẩn data issue.

Không được hiển thị ROAS như PASS nếu dữ liệu chưa đạt.

**12.2. Data Quality status**

Mỗi tập dữ liệu đo lường phải có trạng thái chất lượng.

Các trạng thái tối thiểu:

1.  DATA_RAW.

2.  DATA_NORMALIZED.

3.  DATA_CLEAN_PENDING.

4.  DATA_CLEAN_PASS.

5.  DATA_QUALITY_WARNING.

6.  DATA_QUALITY_FAIL.

7.  DATA_MISSING_REQUIRED_FIELD.

8.  DATA_DUPLICATE_DETECTED.

9.  DATA_PRIVACY_BLOCKED.

10. DATA_SPAM_SUPPRESSED.

11. DATA_ATTRIBUTION_CONFLICT.

12. DATA_REVENUE_NOT_VERIFIED.

13. DATA_OWNER_REVIEW_REQUIRED.

Khi data quality chưa PASS, dashboard chỉ được hiển thị dạng cảnh báo, không được dùng để scale chính thức.

**12.3. Missing data không được im lặng**

Nếu thiếu dữ liệu, PACK-07 phải hiển thị rõ thiếu gì.

Ví dụ:

1.  Thiếu campaign id.

2.  Thiếu adset id.

3.  Thiếu ad id.

4.  Thiếu Page context.

5.  Thiếu comment-to-Messenger trace.

6.  Thiếu quote id.

7.  Thiếu order code.

8.  Thiếu payment status.

9.  Thiếu delivery status.

10. Thiếu verified revenue event.

11. Thiếu attribution rule.

12. Thiếu owner approval.

Missing data không được tự lấp bằng suy luận.

Missing data không được chuyển thành organic mặc định.

Missing data không được chuyển thành Ads mặc định.

**13. ADS SPEND SOURCE GOVERNANCE**

**13.1. Ads spend phải có nguồn hợp lệ**

PACK-07 chỉ được đo ROAS nếu Ads spend đến từ nguồn hợp lệ.

Ads spend source phải có:

1.  Nguồn dữ liệu được owner phê duyệt.

2.  Campaign identity.

3.  Adset identity.

4.  Ad identity nếu áp dụng.

5.  Time window.

6.  Currency.

7.  Spend amount.

8.  Account/page/business context.

9.  Import/sync status.

10. Evidence snapshot.

11. Data quality status.

Không có spend source hợp lệ thì không được tính ROAS.

**13.2. Spend không được tự nhập tay tùy tiện**

Nếu có cơ chế nhập tay spend tạm thời, phải có:

1.  Owner approval.

2.  Evidence đính kèm.

3.  Người nhập.

4.  Lý do nhập.

5.  Ngày giờ nhập.

6.  Phạm vi áp dụng.

7.  Reconcile sau đó.

8.  Cảnh báo dashboard.

Spend nhập tay chưa reconcile không được dùng cho ROAS PASS nếu owner policy không cho phép.

**14. VERIFIED REVENUE DEPENDENCY**

**14.1. Revenue phải đi từ owner event**

PACK-07 chỉ consume revenue từ owner runtime.

Các nguồn không hợp lệ để tự tính revenue:

1.  Comment public.

2.  Messenger text.

3.  QuoteSnapshot.

4.  Cart draft.

5.  Excel ngoài hệ thống.

6.  Nhân viên báo miệng.

7.  Ảnh chuyển khoản chưa đối chiếu.

8.  Mã vận đơn chưa giao thành công.

9.  MISA record không có link về order nếu policy yêu cầu.

10. Dashboard Ads tự nhập doanh thu.

Revenue phải có trace đến official order và trạng thái verification hợp lệ.

**14.2. Revenue exclusion bắt buộc**

Các trường hợp phải loại khỏi ROAS revenue nếu policy quy định:

1.  Order canceled.

2.  Payment failed.

3.  COD failed.

4.  Delivery failed.

5.  Returned order.

6.  Refunded order.

7.  Duplicate order.

8.  Test order.

9.  Internal staff order nếu không tính.

10. Sample/gift order nếu không tính.

11. Complaint unresolved.

12. Recall/sale lock impacted order.

13. Fraud/spam order.

14. Attribution conflict unresolved.

15. Revenue pending verification.

Không có exclusion rule thì không được báo ROAS chính thức.

**15. SALE LOCK / STOCK / FULFILLMENT DEPENDENCY**

PACK-07 không được scale quảng cáo nếu sản phẩm hero đang bị chặn bởi:

1.  Out of stock.

2.  Not sellable.

3.  Sale Lock.

4.  Recall.

5.  Quality hold.

6.  Warehouse hold.

7.  Channel hold.

8.  Program inactive.

9.  Price inactive.

10. Quote unavailable.

11. Fulfillment overload.

12. Payment/COD failure vượt ngưỡng.

13. Delivery delay vượt ngưỡng.

14. Complaint tăng bất thường.

PACK-07 phải consume trạng thái từ owner pack.

Nếu Ads đang tốt nhưng stock/sellable bị chặn, Scale Gate phải block.

Nếu Sale Lock đang ảnh hưởng SKU hero, Stop Gate phải kích hoạt theo policy.

**16. OWNER DECISION PRINCIPLES**

**16.1. PACK-07 đề xuất, owner quyết định**

PACK-07 có thể đưa khuyến nghị:

1.  Scale allowed.

2.  Scale blocked.

3.  Pause recommended.

4.  Stop required.

5.  Owner review required.

6.  Data quality fix required.

7.  Attribution rule required.

8.  Revenue verification pending.

9.  Fulfillment constraint warning.

10. Stock/sellable constraint warning.

PACK-07 không tự tăng ngân sách nếu chưa có owner approval hoặc rule automation được owner phê duyệt.

PACK-07 không tự tắt campaign production nếu chưa có Stop Gate policy hoặc owner decision.

**16.2. Scale không được dựa trên cảm tính**

Không được scale vì:

1.  Nhiều comment.

2.  Nhiều inbox.

3.  Live đông.

4.  Cảm giác khách thích.

5.  ROAS tạm tính đẹp nhưng revenue chưa verified.

6.  Một vài đơn lớn chưa đối chiếu.

7.  AI báo khách quan tâm nhiều.

8.  Dashboard raw data tăng nhưng data quality chưa pass.

Scale chỉ được xét khi Data Quality, Attribution, Verified Revenue, CPA, ROAS, fulfillment, stock/sellable và owner approval đạt điều kiện.

**17. QUY TẮC FAIL-CLOSED CỦA PACK-07**

PACK-07 phải fail-closed trong các trường hợp:

1.  Thiếu Ads spend source.

2.  Thiếu campaign/adset/ad identity.

3.  Thiếu channel trace.

4.  Thiếu comment-to-Messenger trace.

5.  Thiếu AI event khi đo AI performance.

6.  Thiếu quote/order linkage.

7.  Thiếu official order.

8.  Thiếu verified revenue.

9.  Revenue pending verification.

10. Attribution conflict chưa xử lý.

11. Duplicate event chưa xử lý.

12. Spam/bot event chưa loại.

13. Refund/cancel/return chưa loại.

14. Sale Lock ảnh hưởng SKU.

15. Privacy incident.

16. Claim incident.

17. Dashboard data mismatch.

18. Owner approval missing.

Fail-closed nghĩa là:

1.  Không tính ROAS chính thức.

2.  Không cho Scale PASS.

3.  Không gọi số liệu là verified.

4.  Không ẩn cảnh báo.

5.  Chuyển owner review nếu cần.

**18. MINIMUM GOVERNANCE OUTPUT CỦA PACK-07**

PACK-07 phải tạo được các lớp output governance sau:

1.  Ads Measurement Status.

2.  Attribution Status.

3.  Funnel Data Quality Status.

4.  Revenue Verification Status.

5.  ROAS Reliability Status.

6.  CPA Reliability Status.

7.  Dashboard Reliability Status.

8.  Scale Gate Status.

9.  Stop/Pause Gate Status.

10. Owner Decision Status.

11. Evidence Status.

12. Release Readiness Status.

Các output này không thay thế nghiệp vụ gốc.

Các output này dùng để kiểm soát đo lường, quyết định ads và cảnh báo vận hành.

**19. DONE CONDITION CỦA PHẦN 1/4**

PHẦN 1/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Mục tiêu PACK-07.

2.  Trạng thái tài liệu.

3.  Vai trò PACK-07 trong hệ thống.

4.  Ranh giới Ads Measurement không phải Commerce.

5.  Không có Verified Revenue thì không có ROAS chính thức.

6.  Data Quality đi trước ROAS.

7.  Attribution không suy diễn cảm tính.

8.  Ads Performance tách khỏi AI Performance.

9.  Source-of-truth boundary.

10. Phụ thuộc PACK-06.

11. Phụ thuộc PACK-05.

12. Phụ thuộc Commerce Runtime.

13. Phụ thuộc PACK-04/MISA/Finance.

14. Phân tách Ads/AI/Commerce/CRM/Referral.

15. Attribution governance principles.

16. Data quality principles.

17. Ads spend source governance.

18. Verified revenue dependency.

19. Sale Lock/Stock/Fulfillment dependency.

20. Owner decision principles.

21. Fail-closed rule.

PHẦN 1/4 chưa định nghĩa đầy đủ Event Taxonomy, Funnel Metrics, Attribution Model chi tiết, Dashboard KPI, Scale Gate, Stop Gate, Smoke Matrix hoặc Release Control. Các nội dung đó thuộc PHẦN 2/4, PHẦN 3/4 và PHẦN 4/4.

**KẾT LUẬN PHẦN 1/4**

PACK-07 là lớp đo lường Ads/ROAS/Attribution/Verified Revenue của hệ thống Ginsengfood.

PACK-07 không phải lớp tạo doanh thu.

PACK-07 không phải lớp chốt đơn.

PACK-07 không phải lớp xác nhận thanh toán.

PACK-07 không phải lớp kế toán.

PACK-07 không phải lớp AI tư vấn.

PACK-07 không phải Facebook Channel Gateway.

PACK-07 chỉ được đo lường từ dữ liệu hợp lệ, có trace, có owner source-of-truth, có attribution rule, có data quality pass và có evidence.

Nguyên tắc cốt lõi của PACK-07 là:

**Không có Data Quality thì không có ROAS đáng tin cậy.**  
**Không có Verified Revenue thì không có ROAS chính thức.**  
**Không có Attribution Rule thì không có kết luận nguồn doanh thu.**  
**Không có Owner Approval thì không scale production.**  
**Không có Evidence thì không PASS.**

**PHẦN 2/4 — EVENT TAXONOMY / ATTRIBUTION MODEL / FUNNEL METRICS / VERIFIED REVENUE RULES**

**20. MỤC TIÊU CỦA PHẦN 2/4**

PHẦN 2/4 thiết lập hệ quy chiếu đo lường sự kiện, phễu chuyển đổi, phân bổ nguồn doanh thu và quy tắc xác nhận doanh thu được dùng cho PACK-07.

Mục tiêu của phần này là khóa rõ:

1.  Event nào được phép dùng để đo Ads.

2.  Event nào chỉ là tín hiệu tương tác.

3.  Event nào là tín hiệu tư vấn.

4.  Event nào là tín hiệu quote.

5.  Event nào là tín hiệu order.

6.  Event nào là tín hiệu payment.

7.  Event nào đủ điều kiện đi vào verified revenue.

8.  Event nào phải loại khỏi ROAS.

9.  Event nào cần owner review.

10. Event nào có conflict attribution.

11. Event nào không đủ data quality để đưa vào dashboard chính thức.

12. Event nào có thể dùng cho scale decision.

PHẦN 2/4 không thiết kế database, API, UI hay code.

PHẦN 2/4 chỉ khóa logic governance/domain để dev triển khai đúng theo source-of-truth và owner boundary.

**21. NGUYÊN TẮC EVENT TAXONOMY**

**21.1. Event là dấu vết đo lường, không mặc định là sự thật nghiệp vụ**

Một event trong PACK-07 là dấu vết đo lường.

Event không mặc định là đơn hàng.

Event không mặc định là doanh thu.

Event không mặc định là thanh toán.

Event không mặc định là giao hàng thành công.

Event không mặc định là ROAS hợp lệ.

Một event chỉ được dùng để kết luận nghiệp vụ khi event đó đến từ owner pack hoặc được owner pack xác nhận.

Ví dụ:

1.  COMMENT_EVENT chỉ chứng minh có comment.

2.  MESSENGER_EVENT chỉ chứng minh có tương tác Messenger.

3.  QUOTE_EVENT chỉ chứng minh có quote.

4.  CART_EVENT chỉ chứng minh có cart draft hoặc cart action.

5.  ORDER_EVENT chỉ chứng minh có order khi đến từ owner Order/Commerce.

6.  PAYMENT_EVENT chỉ chứng minh payment khi đến từ owner Payment.

7.  VERIFIED_REVENUE_EVENT mới là cơ sở doanh thu verified nếu policy xác nhận.

8.  ATTRIBUTION_EVENT chỉ có ý nghĩa khi có rule attribution hợp lệ.

9.  DATA_QUALITY_EVENT quyết định dữ liệu có đủ điều kiện dùng hay không.

Không được dùng event ở tầng thấp để suy diễn kết quả ở tầng cao.

**21.2. Event phải có nguồn, chủ sở hữu và phạm vi sử dụng**

Mỗi event dùng trong PACK-07 phải xác định tối thiểu:

1.  Event family.

2.  Event owner.

3.  Event source.

4.  Event timestamp.

5.  Event scope.

6.  Event correlation.

7.  Event identity.

8.  Event data quality status.

9.  Event evidence.

10. Event allowed usage.

Nếu thiếu owner hoặc source hợp lệ, event không được dùng để tính ROAS production.

Nếu thiếu correlation, event không được dùng để nối phễu conversion chính thức.

Nếu thiếu evidence, event không được dùng để PASS.

**21.3. Event phải được chống trùng**

PACK-07 không được tính lặp event.

Các tình huống trùng phải xử lý:

1.  Một comment được gửi webhook nhiều lần.

2.  Một Messenger event được retry nhiều lần.

3.  Một khách gửi nhiều tin giống nhau.

4.  Một quote được tạo lại do hết hạn.

5.  Một cart draft được sửa nhiều lần.

6.  Một order có nhiều trạng thái payment.

7.  Một order có nhiều trạng thái delivery.

8.  Một revenue event được cập nhật nhiều lần.

9.  Một campaign spend được import nhiều lần.

10. Một khách xuất hiện ở nhiều touchpoint.

Nếu chưa chống trùng, metric phải ở trạng thái:

**DATA_DUPLICATE_DETECTED — ROAS_NOT_RELIABLE**

**22. EVENT TAXONOMY REGISTRY**

**22.1. Danh mục event family tối thiểu**

| **Event family**       | **Vai trò đo lường**                                 | **Owner/source bắt buộc**                 | **Không được dùng để**                             |
|------------------------|------------------------------------------------------|-------------------------------------------|----------------------------------------------------|
| CHANNEL_EVENT          | Ghi nhận sự kiện kênh tổng quát                      | PACK-06 hoặc nguồn channel được phê duyệt | Không tự tính order/revenue                        |
| AD_EVENT               | Ghi nhận ads impression/click/spend/campaign context | Ads source được owner phê duyệt           | Không tự tính doanh thu                            |
| COMMENT_EVENT          | Ghi nhận comment public                              | PACK-06                                   | Không gọi là đơn hàng                              |
| MESSENGER_EVENT        | Ghi nhận tương tác Messenger/private                 | PACK-06                                   | Không gọi là order nếu chưa có owner order         |
| LIVE_EVENT             | Ghi nhận phiên live/live comment/live routing        | PACK-06                                   | Không gọi là revenue nếu chưa verified             |
| AI_INTENT_EVENT        | Ghi nhận intent AI nhận diện                         | PACK-05                                   | Không kết luận conversion                          |
| AI_RESPONSE_EVENT      | Ghi nhận phản hồi AI/guard/handoff                   | PACK-05                                   | Không tự chứng minh doanh thu                      |
| QUOTE_EVENT            | Ghi nhận quote request/QuoteSnapshot                 | Commerce Runtime/PACK-05 handoff          | Không gọi là revenue                               |
| CART_EVENT             | Ghi nhận cart draft/cart update                      | Commerce/Order owner                      | Không gọi là official order                        |
| ORDER_EVENT            | Ghi nhận official order/order status                 | Order/Commerce owner                      | Không gọi là paid revenue nếu chưa payment         |
| PAYMENT_EVENT          | Ghi nhận payment/COD status                          | Payment/Order owner                       | Không gọi là verified revenue nếu chưa policy pass |
| DELIVERY_EVENT         | Ghi nhận shipping/delivery status                    | Fulfillment/Shipping owner                | Không gọi là verified revenue nếu thiếu rule       |
| VERIFIED_REVENUE_EVENT | Ghi nhận doanh thu đủ điều kiện đo lường             | Commerce/Finance/Revenue owner            | Không tự tạo từ dashboard                          |
| CRM_EVENT              | Ghi nhận CRM interaction/rebuy campaign              | CRM/AI/Commerce owner                     | Không tự gán Ads revenue                           |
| COMPLAINT_EVENT        | Ghi nhận complaint/quality/payment/delivery issue    | AI/CSKH/Quality owner                     | Không tính sales conversion                        |
| HANDOFF_EVENT          | Ghi nhận chuyển người thật/handoff private           | PACK-05/PACK-06                           | Không mặc định là AI failure                       |
| REFERRAL_EVENT         | Ghi nhận Diamond/referral bind/touchpoint            | Referral/Commerce owner                   | Không tự tính commission                           |
| ATTRIBUTION_EVENT      | Ghi nhận kết quả phân bổ nguồn                       | PACK-07 theo owner-approved rule          | Không sửa revenue gốc                              |
| DATA_QUALITY_EVENT     | Ghi nhận chất lượng dữ liệu                          | PACK-07                                   | Không thay thế event gốc                           |
| SCALE_DECISION_EVENT   | Ghi nhận quyết định scale/stop/pause                 | Owner decision + PACK-07 gate             | Không tự scale nếu thiếu approval                  |

**22.2. Event family không được vượt quyền**

Mỗi event family chỉ được dùng đúng phạm vi.

COMMENT_EVENT không được vượt lên thành ORDER_EVENT.

QUOTE_EVENT không được vượt lên thành VERIFIED_REVENUE_EVENT.

PAYMENT_EVENT pending không được vượt lên thành VERIFIED_REVENUE_EVENT.

CRM_EVENT không được vượt lên thành Ads revenue nếu attribution chưa xử lý.

REFERRAL_EVENT không được vượt lên thành commission nếu owner Finance/Commerce chưa xác nhận eligibility.

ATTRIBUTION_EVENT không được sửa order/revenue gốc.

DATA_QUALITY_EVENT không được xóa event gốc, chỉ được đánh dấu dữ liệu có đủ điều kiện dùng hay không.

**23. EVENT LIFECYCLE**

**23.1. Trạng thái vòng đời event**

Mỗi event đo lường cần đi qua các trạng thái tối thiểu:

1.  RAW_RECEIVED.

2.  SOURCE_VALIDATED.

3.  NORMALIZED.

4.  DEDUP_CHECKED.

5.  IDENTITY_RESOLVED.

6.  CORRELATION_LINKED.

7.  DATA_QUALITY_CHECKED.

8.  ATTRIBUTION_CHECKED nếu cần.

9.  ELIGIBILITY_CHECKED.

10. INCLUDED hoặc EXCLUDED.

11. EVIDENCE_ATTACHED.

12. READY_FOR_REPORTING nếu đạt.

13. OWNER_REVIEW_REQUIRED nếu chưa đủ điều kiện.

Không phải event nào cũng cần đi đến reporting.

Một event bị fail ở bất kỳ chặng P0 nào phải được giữ lịch sử nhưng không được dùng cho ROAS chính thức.

**23.2. Event bị loại không được xóa**

Event bị loại khỏi ROAS không được xóa khỏi hệ thống đo lường.

Event bị loại phải có lý do loại trừ.

Các lý do loại trừ tối thiểu:

1.  DUPLICATE.

2.  SPAM.

3.  BOT_SUSPECTED.

4.  PRIVACY_BLOCKED.

5.  CHANNEL_ERROR.

6.  MISSING_CAMPAIGN_CONTEXT.

7.  MISSING_CHANNEL_TRACE.

8.  MISSING_QUOTE_LINKAGE.

9.  MISSING_ORDER_CODE.

10. PAYMENT_NOT_CONFIRMED.

11. DELIVERY_NOT_CONFIRMED nếu policy yêu cầu.

12. REVENUE_NOT_VERIFIED.

13. ORDER_CANCELLED.

14. ORDER_REFUNDED.

15. ORDER_RETURNED.

16. TEST_ORDER.

17. INTERNAL_ORDER.

18. ATTRIBUTION_CONFLICT_UNRESOLVED.

19. OWNER_POLICY_EXCLUDED.

20. SALE_LOCK_IMPACTED.

21. COMPLAINT_UNRESOLVED.

Loại trừ phải có evidence/audit.

**24. FUNNEL MEASUREMENT PRINCIPLES**

**24.1. Funnel là chuỗi chuyển đổi, không phải một bước nhảy**

PACK-07 phải đo funnel theo từng chặng.

Không được gọi comment là đơn hàng.

Không được gọi inbox là doanh thu.

Không được gọi quote là order.

Không được gọi cart draft là order chính thức.

Không được gọi order created là paid revenue.

Không được gọi paid pending là verified revenue.

Chuỗi funnel chuẩn tối thiểu:

**Impression → Reach → Click → Landing View → Comment → Qualified Comment → Private Handoff → Messenger Conversation → Qualified Conversation → Product Consult → Quote Request → Quote Generated → Cart Draft → Customer Confirmation → Official Order → Payment/COD Confirmation → Delivery Success nếu policy yêu cầu → ORDER_VERIFIED → Verified Revenue**

**24.2. Funnel stage registry**

| **Funnel stage**         | **Ý nghĩa**                          | **Điều kiện tối thiểu**      | **Không được kết luận**                          |
|--------------------------|--------------------------------------|------------------------------|--------------------------------------------------|
| Impression               | Quảng cáo được hiển thị              | Ads source hợp lệ            | Không kết luận quan tâm                          |
| Reach                    | Người dùng được tiếp cận             | Ads source hợp lệ            | Không kết luận lead                              |
| Click                    | Có click                             | Campaign/ad context          | Không kết luận khách chất lượng                  |
| Landing View             | Có xem trang/đích                    | Landing/channel event hợp lệ | Không kết luận quote                             |
| Comment                  | Có comment                           | PACK-06 comment event        | Không kết luận order                             |
| Qualified Comment        | Comment có ý định đủ đo              | Rule qualification           | Không kết luận revenue                           |
| Private Handoff          | Kéo/điều hướng private hợp lệ        | PACK-06 routing trace        | Không kết luận AI success nếu chưa consult       |
| Messenger Conversation   | Có hội thoại private                 | PACK-06 Messenger event      | Không kết luận quote                             |
| Qualified Conversation   | Hội thoại đủ chất lượng              | Qualification rule           | Không kết luận order                             |
| Product Consult          | Có tư vấn sản phẩm                   | PACK-05 event                | Không kết luận chốt                              |
| Quote Request            | Khách có nhu cầu báo giá             | PACK-05/Commerce event       | Không kết luận revenue                           |
| Quote Generated          | QuoteSnapshot được tạo               | Commerce Runtime             | Không kết luận order                             |
| Cart Draft               | Giỏ/đơn nháp                         | Commerce/Order owner         | Không kết luận official order                    |
| Customer Confirmation    | Khách xác nhận                       | Order/Commerce owner         | Không kết luận paid                              |
| Official Order           | Đơn chính thức/order_code            | Order owner                  | Không kết luận verified revenue                  |
| Payment/COD Confirmation | Thanh toán/COD đạt trạng thái policy | Payment/Order owner          | Không kết luận net revenue nếu còn return/refund |
| Delivery Success         | Giao thành công nếu policy yêu cầu   | Fulfillment owner            | Không kết luận kế toán nếu chưa reconcile        |
| ORDER_VERIFIED           | Đơn được xác minh theo policy        | Commerce/Order owner         | Không mặc định là accounting posted              |
| Verified Revenue         | Doanh thu đủ điều kiện đo ROAS       | Revenue owner                | Chỉ dùng theo revenue basis đã khai báo          |

**25. COMMENT → MESSENGER → QUOTE → ORDER → VERIFIED REVENUE**

**25.1. Comment chỉ là điểm vào funnel**

Comment public là tín hiệu tương tác.

Comment có thể là:

1.  Hỏi giá.

2.  Hỏi sản phẩm.

3.  Hỏi thành phần.

4.  Hỏi Sâm Savigin.

5.  Hỏi ship.

6.  Đòi tư vấn riêng.

7.  Muốn mua.

8.  Chốt mơ hồ.

9.  Spam.

10. Khiếu nại.

11. Trêu đùa.

12. Không liên quan.

PACK-07 chỉ được nâng comment thành Qualified Comment khi rule qualification pass.

Comment “chốt”, “lấy 2”, “ib”, “giá sao”, “mua thế nào” không phải order.

Comment có nhu cầu riêng phải route private theo PACK-06/PACK-05 policy.

**25.2. Messenger là môi trường tư vấn/order capture, không tự là order**

Messenger conversation có thể chứa:

1.  Tư vấn sản phẩm.

2.  Hỏi giá.

3.  Hỏi chương trình.

4.  Hỏi thành viên.

5.  Hỏi ship.

6.  Cung cấp thông tin nhận hàng.

7.  Xác nhận quote.

8.  Gửi ảnh chuyển khoản.

9.  Khiếu nại.

10. Hủy đơn.

11. Thay đổi đơn.

PACK-07 không được gọi Messenger conversation là order nếu chưa có ORDER_EVENT hợp lệ.

Messenger text không được tự tạo revenue.

Messenger chỉ là một tầng trong funnel nếu chưa có owner order/payment/revenue event.

**25.3. Quote là chặng giá, không phải doanh thu**

QUOTE_EVENT phải phân biệt:

1.  Quote requested.

2.  Quote generated.

3.  Quote shown.

4.  Quote accepted by customer.

5.  Quote expired.

6.  Quote cancelled.

7.  Quote superseded.

8.  Quote blocked due to sellable/stock/sale lock.

9.  Quote failed due to runtime missing.

10. Quote owner review required.

Quote generated không phải revenue.

Quote accepted không phải paid.

Quote expired không được tính conversion.

Quote blocked do sale lock không được tính là AI failure nếu PACK-05/PACK-06 xử lý đúng policy.

**25.4. Cart draft không phải official order**

Cart draft có thể được tạo trong quá trình chốt đơn.

Cart draft không được tính là order chính thức nếu chưa có Customer Confirmation và owner Order tạo official order/order_code.

PACK-07 có thể đo:

1.  Quote-to-cart rate.

2.  Cart completion rate.

3.  Cart abandonment rate.

4.  Cart blocked rate.

5.  Cart-to-order rate.

PACK-07 không được tính cart draft vào revenue.

**25.5. Official Order là chặng order chính thức**

Official order phải đến từ owner Order/Commerce.

Official order cần có order identity hợp lệ.

Không có order_code thì không gọi là đơn đã ghi nhận chính thức.

ORDER_EVENT phải cho biết tối thiểu:

1.  Order created.

2.  Order confirmed.

3.  Order cancelled.

4.  Order changed.

5.  Order payment status.

6.  Order delivery status.

7.  Order verification status.

8.  Order exclusion status nếu có.

PACK-07 chỉ consume trạng thái này để đo funnel.

PACK-07 không được sửa order.

**25.6. Verified Revenue là chặng doanh thu đủ điều kiện đo ROAS**

Verified Revenue phải đến từ owner revenue policy.

Một order chỉ được đi vào ROAS chính thức khi đạt điều kiện verified revenue theo rule.

Verified Revenue có thể phụ thuộc vào:

1.  Payment confirmed.

2.  COD success.

3.  Delivery success.

4.  No cancellation.

5.  No refund.

6.  No return.

7.  No duplicate.

8.  No test order.

9.  No unresolved complaint nếu policy yêu cầu.

10. No attribution conflict unresolved.

11. No revenue exclusion rule triggered.

12. Owner revenue verification pass.

Nếu thiếu Verified Revenue event, PACK-07 phải giữ doanh thu ở trạng thái pending.

**26. REVENUE CLASSIFICATION RULES**

**26.1. Các lớp doanh thu bắt buộc phân biệt**

PACK-07 phải phân biệt tối thiểu các lớp doanh thu sau:

1.  Gross Order Value.

2.  Confirmed Order Value.

3.  Payment Pending Value.

4.  Paid Revenue.

5.  COD Pending Value.

6.  COD Successful Revenue.

7.  Delivery Pending Value.

8.  Delivered Revenue.

9.  Verified Revenue.

10. Net Verified Revenue.

11. Revenue Pending Verification.

12. Revenue Excluded From ROAS.

13. Refund/Return Adjustment.

14. Accounting Reconciled Revenue nếu có.

15. Marketing Measurement Revenue.

Không được gom các lớp trên thành một dòng “doanh thu” chung.

**26.2. Gross Order Value**

Gross Order Value là tổng giá trị đơn trước khi hoàn tất các điều kiện xác nhận sau cùng.

Gross Order Value không dùng để tính ROAS chính thức nếu policy yêu cầu verified revenue.

Gross Order Value chỉ dùng để quan sát pipeline hoặc forecast.

**26.3. Confirmed Order Value**

Confirmed Order Value là giá trị đơn đã được khách xác nhận và owner Order ghi nhận.

Confirmed Order Value chưa phải paid revenue.

Confirmed Order Value chưa phải verified revenue.

Confirmed Order Value có thể bị hủy, đổi, hoàn, COD fail hoặc payment fail.

**26.4. Paid Revenue**

Paid Revenue là doanh thu đã có payment confirmation hợp lệ.

Paid Revenue phải đến từ Payment owner.

Ảnh chuyển khoản chưa đối chiếu không phải Paid Revenue.

Khách nói “đã chuyển khoản” không phải Paid Revenue.

Nhân viên thấy tin nhắn chuyển khoản nhưng chưa đối chiếu không phải Paid Revenue.

**26.5. COD Successful Revenue**

COD Successful Revenue là doanh thu COD đạt trạng thái thành công theo owner policy.

COD pending không phải COD Successful Revenue.

Đơn đang giao không phải COD Successful Revenue.

Đơn giao thất bại không phải COD Successful Revenue.

Đơn hoàn về không phải COD Successful Revenue.

**26.6. Delivered Revenue**

Delivered Revenue chỉ được dùng khi Fulfillment/Shipping owner xác nhận giao thành công.

Nếu policy yêu cầu delivery success trước khi verified, Delivered Revenue là điều kiện trung gian.

Nếu payment đã thành công nhưng giao thất bại/hoàn hàng, revenue phải xử lý theo exclusion/adjustment rule.

**26.7. Verified Revenue**

Verified Revenue là lớp doanh thu được phép dùng làm cơ sở ROAS chính thức nếu owner policy xác nhận.

Verified Revenue phải có:

1.  Official order.

2.  Payment/COD/delivery status đạt điều kiện.

3.  No active exclusion.

4.  Attribution đủ điều kiện.

5.  Data quality pass.

6.  Revenue owner confirmation.

7.  Evidence.

Verified Revenue không tự sinh từ Ads dashboard.

**26.8. Net Verified Revenue**

Net Verified Revenue là Verified Revenue sau khi trừ các điều chỉnh hợp lệ nếu policy yêu cầu.

Các điều chỉnh có thể gồm:

1.  Refund.

2.  Return.

3.  Partial refund.

4.  Discount correction.

5.  Cancelled line item.

6.  Failed COD adjustment.

7.  Duplicate correction.

8.  Owner-approved adjustment.

Nếu báo cáo dùng Net Verified Revenue, phải ghi rõ revenue basis.

**27. REVENUE EXCLUSION RULES**

**27.1. Nguyên tắc loại trừ doanh thu**

Một order không được đưa vào ROAS chính thức nếu có exclusion rule đang active.

Revenue exclusion không xóa order.

Revenue exclusion chỉ loại order khỏi chỉ số đo lường ROAS theo policy.

Mỗi exclusion phải có:

1.  Lý do.

2.  Event nguồn.

3.  Owner.

4.  Timestamp.

5.  Evidence.

6.  Review status nếu cần.

**27.2. Danh mục exclusion tối thiểu**

Các trường hợp phải có rule loại trừ:

1.  Order cancelled.

2.  Payment failed.

3.  Bank transfer not reconciled.

4.  COD failed.

5.  Delivery failed.

6.  Order returned.

7.  Order refunded.

8.  Partial refund.

9.  Duplicate order.

10. Test order.

11. Internal order.

12. Staff order nếu policy loại trừ.

13. Gift/sample order nếu policy loại trừ.

14. Fraud suspected.

15. Spam/bot order.

16. Complaint unresolved.

17. Recall impacted.

18. Sale Lock impacted.

19. Data quality fail.

20. Attribution conflict unresolved.

21. Missing verified revenue event.

22. Owner policy excluded.

**27.3. Revenue pending không được tính ROAS chính thức**

Revenue pending verification phải tách riêng.

Không được đưa pending revenue vào ROAS chính thức.

Có thể hiển thị pending revenue trong dashboard nếu ghi rõ:

**REVENUE_PENDING_VERIFICATION — NOT_INCLUDED_IN_OFFICIAL_ROAS**

**28. ATTRIBUTION MODEL GOVERNANCE**

**28.1. Mỗi báo cáo phải có attribution model**

PACK-07 không được hiển thị doanh thu theo nguồn nếu không khai báo attribution model.

Attribution model phải trả lời:

1.  Đơn này gán về nguồn nào.

2.  Vì sao gán về nguồn đó.

3.  Touchpoint nào được tính.

4.  Touchpoint nào bị loại.

5.  Có conflict không.

6.  Rule nào đã dùng.

7.  Evidence nào chứng minh.

8.  Revenue basis là gì.

9.  Data quality có pass không.

10. Owner approval có cần không.

**28.2. Các mô hình attribution được phép định nghĩa**

PACK-07 có thể hỗ trợ các mô hình sau, tùy owner phê duyệt:

1.  First Touch Attribution.

2.  Last Touch Attribution.

3.  Last Paid Touch Attribution.

4.  Last Non-Direct Touch Attribution.

5.  Session-Based Attribution.

6.  Campaign-Bound Attribution.

7.  Live-Session Attribution.

8.  Messenger-Thread Attribution.

9.  CRM-Rebuy Attribution.

10. Diamond Referral Attribution.

11. Multi-Touch Attribution.

12. Owner-Approved Custom Attribution.

Không được tự chọn model khác khi chưa có owner approval.

Không được dùng một model cho dashboard này và model khác cho dashboard kia mà không ghi rõ.

**28.3. First Touch Attribution**

First Touch gán conversion về touchpoint đầu tiên đủ điều kiện.

First Touch phù hợp để đo nguồn mở đầu hành trình khách.

First Touch không mặc định phù hợp để quyết định scale ngắn hạn nếu khách có nhiều tương tác sau đó.

First Touch phải có entry event rõ.

Nếu entry event thiếu hoặc conflict, First Touch không được dùng chính thức.

**28.4. Last Touch Attribution**

Last Touch gán conversion về touchpoint cuối cùng trước conversion.

Last Touch phù hợp để đo chặng chốt.

Last Touch có thể làm sai lệch vai trò của Ads đầu phễu hoặc CRM trước đó.

Nếu khách có Diamond/referral bind hoặc CRM event gần conversion, phải xử lý conflict theo policy.

**28.5. Last Paid Touch Attribution**

Last Paid Touch gán conversion về paid touchpoint gần nhất đủ điều kiện.

Mô hình này phù hợp để đo quảng cáo trả phí.

Tuy nhiên, Last Paid Touch không được dùng nếu:

1.  Paid event thiếu campaign/ad identity.

2.  Paid event không qua approved source.

3.  Order/revenue không có linkage.

4.  Conflict với Diamond/referral chưa xử lý.

5.  Data quality fail.

**28.6. Live-Session Attribution**

Live-Session Attribution gán conversion về phiên live khi có live context hợp lệ.

Điều kiện tối thiểu:

1.  Live session identity.

2.  Page identity.

3.  Live comment hoặc live entry event.

4.  Comment-to-Messenger hoặc live-to-private trace.

5.  Quote/order/revenue linkage.

6.  Data quality pass.

7.  Attribution rule pass.

Không có live session identity thì không được gán doanh thu cho live.

Không có private trace thì không được gán Messenger order về live comment.

**28.7. Diamond Referral Attribution**

Diamond Referral Attribution chỉ hợp lệ khi có referral bind/event hợp lệ từ owner.

Không có bind thì không có Diamond attribution.

Không có owner eligibility thì không có commission measurement.

PACK-07 không tự tính hoa hồng.

PACK-07 chỉ đo nguồn referral và trạng thái attribution nếu event hợp lệ.

**28.8. CRM-Rebuy Attribution**

CRM-Rebuy Attribution dùng cho doanh thu mua lại/chăm sóc lại.

Một khách từng đến từ Ads nhưng mua lại sau CRM không mặc định là Ads revenue.

CRM rebuy phải có CRM_EVENT hợp lệ và rule attribution rõ.

Nếu khách vừa nhận CRM vừa click Ads remarketing, phải đánh dấu conflict và xử lý theo owner-approved rule.

**28.9. Multi-Touch Attribution**

Multi-Touch Attribution dùng khi owner muốn phân bổ công cho nhiều touchpoint.

Multi-Touch phải có rule rõ về trọng số hoặc cách ghi nhận.

Không được tự chia phần trăm doanh thu nếu chưa có owner approval.

Nếu chưa có weight rule, chỉ được hiển thị touchpoint chain, không được phân bổ revenue chính thức.

**29. ATTRIBUTION CONFLICT RESOLUTION**

**29.1. Nguyên tắc conflict**

Khi một conversion có nhiều nguồn có thể nhận công, PACK-07 phải tạo trạng thái conflict.

Conflict không phải lỗi.

Conflict là tín hiệu cần rule xử lý.

Nếu chưa có rule xử lý, conversion không được đưa vào ROAS chính thức theo nguồn.

Trạng thái mặc định:

**ATTRIBUTION_CONFLICT_UNRESOLVED — EXCLUDED_FROM_SOURCE_ROAS**

**29.2. Các nhóm conflict bắt buộc nhận diện**

PACK-07 phải nhận diện tối thiểu:

1.  Ads click trước, Diamond link sau.

2.  Diamond link trước, Ads remarketing sau.

3.  Paid live boost + organic live comment.

4.  Organic comment trong post đang chạy Ads.

5.  CRM message trước, Ads click sau.

6.  Ads click trước, CRM rebuy sau.

7.  Messenger direct không có ad context nhưng cùng khách từng click ads.

8.  Landing page visit trước, Messenger order sau.

9.  Human telesales can thiệp sau AI tư vấn.

10. AI Advisor tạo quote, nhân viên chốt ngoài hệ thống.

11. Khách chuyển page khác trong cùng hệ thống.

12. Khách dùng nhiều số điện thoại/tài khoản.

13. Khách mua lại cho người nhận khác.

14. Khách vào từ MC AI Live và Facebook Ads cùng lúc.

15. Khách có nhiều campaign touchpoints trong thời gian ngắn.

**29.3. Conflict status**

Các trạng thái conflict tối thiểu:

1.  NO_CONFLICT.

2.  CONFLICT_DETECTED.

3.  RULE_REQUIRED.

4.  OWNER_REVIEW_REQUIRED.

5.  RULE_APPLIED.

6.  CONFLICT_RESOLVED.

7.  EXCLUDED_DUE_TO_UNRESOLVED_CONFLICT.

8.  SPLIT_ATTRIBUTION_PENDING.

9.  MULTI_TOUCH_ALLOWED.

10. ATTRIBUTION_LOCKED.

Nếu trạng thái chưa đạt CONFLICT_RESOLVED hoặc ATTRIBUTION_LOCKED, không được đưa vào báo cáo ROAS chính thức theo nguồn.

**30. PAID / ORGANIC / CRM / DIAMOND / LIVE CLASSIFICATION**

**30.1. Paid revenue**

Paid revenue theo Ads chỉ được ghi nhận khi có:

1.  Paid source hợp lệ.

2.  Campaign/adset/ad identity.

3.  Customer/session linkage.

4.  Channel trace.

5.  Quote/order/revenue linkage.

6.  Attribution rule pass.

7.  Verified revenue.

8.  Data quality pass.

Thiếu một trong các điều kiện P0 thì không được gọi là Ads revenue chính thức.

**30.2. Organic revenue**

Organic revenue là doanh thu từ nguồn không trả phí hoặc không có paid attribution hợp lệ.

Không được gán Organic mặc định chỉ vì thiếu ad_id.

Nếu thiếu dữ liệu campaign, trạng thái phải là:

**SOURCE_UNKNOWN — DATA_QUALITY_WARNING**

Không được biến missing data thành Organic revenue.

**30.3. CRM revenue**

CRM revenue phải có CRM_EVENT hợp lệ.

CRM revenue phải tách khỏi Ads revenue nếu attribution policy không cho phép cộng dồn.

CRM revenue không được tính vào Ads ROAS nếu conversion đến từ chăm sóc lại và không có paid attribution hợp lệ.

**30.4. Diamond / Referral revenue**

Diamond/referral revenue phải có referral event/bind hợp lệ.

Không có referral bind thì không được gọi là Diamond revenue.

Diamond revenue không tự động là Ads revenue.

Nếu Ads và Diamond cùng xuất hiện, phải dùng conflict resolution.

**30.5. Live revenue**

Live revenue phải có live session context.

Live revenue có thể là:

1.  Organic live revenue.

2.  Paid live boost revenue.

3.  Live-to-Messenger revenue.

4.  Live-to-Quote revenue.

5.  Live-to-Order revenue.

6.  Live verified revenue.

Nếu live được chạy Ads/boost, attribution phải phân biệt Paid Live và Organic Live.

**31. METRIC DEFINITIONS — FUNNEL**

**31.1. Impression, Reach, Click**

Impression, Reach và Click chỉ phản ánh hoạt động quảng cáo đầu phễu.

Các chỉ số này không đủ để kết luận doanh thu.

Chỉ số liên quan:

1.  CPM.

2.  CTR.

3.  CPC.

4.  Click-to-comment rate.

5.  Click-to-inbox rate.

6.  Click-to-qualified-conversation rate.

**31.2. Comment metrics**

Comment metrics phải phân biệt:

1.  Total comments.

2.  Unique commenters.

3.  Qualified comments.

4.  Buying intent comments.

5.  Price inquiry comments.

6.  Product question comments.

7.  Spam comments.

8.  Complaint comments.

9.  Hidden/deleted/suppressed comments nếu có.

10. Comment-to-Messenger handoff rate.

Không được dùng total comments để kết luận lead quality nếu chưa lọc spam/duplicate/irrelevant.

**31.3. Messenger metrics**

Messenger metrics phải phân biệt:

1.  New conversations.

2.  Existing customer conversations.

3.  Qualified conversations.

4.  Product consult conversations.

5.  Quote request conversations.

6.  Complaint conversations.

7.  Human takeover conversations.

8.  AI blocked/guarded conversations.

9.  Conversation-to-quote rate.

10. Conversation-to-order rate.

11. Conversation-to-verified-revenue rate.

Messenger volume cao không đồng nghĩa doanh thu cao.

**31.4. Quote metrics**

Quote metrics tối thiểu:

1.  Quote requests.

2.  Quotes generated.

3.  Quotes failed.

4.  Quotes blocked by sellable/stock/sale lock.

5.  Quotes expired.

6.  Quotes accepted.

7.  Quote-to-cart rate.

8.  Quote-to-order rate.

9.  Quote-to-verified-revenue rate.

10. Average quote value.

Quote value không phải revenue.

**31.5. Order metrics**

Order metrics tối thiểu:

1.  Official orders created.

2.  Orders confirmed.

3.  Orders cancelled.

4.  Orders payment pending.

5.  Orders payment confirmed.

6.  Orders COD pending.

7.  Orders COD success.

8.  Orders delivery pending.

9.  Orders delivery success.

10. Orders returned.

11. Orders refunded.

12. Orders verified.

13. Orders excluded from ROAS.

Official order count không phải verified order count.

**31.6. Revenue metrics**

Revenue metrics tối thiểu:

1.  Gross order value.

2.  Confirmed order value.

3.  Paid revenue.

4.  COD successful revenue.

5.  Delivered revenue.

6.  Verified revenue.

7.  Net verified revenue.

8.  Pending revenue.

9.  Excluded revenue.

10. Refunded value.

11. Returned value.

12. Revenue by source.

13. Revenue by campaign.

14. Revenue by live session.

15. Revenue by product.

16. Revenue by customer class nếu policy cho phép.

Revenue by source chỉ được hiển thị khi attribution pass.

**32. METRIC DEFINITIONS — ADS PERFORMANCE**

**32.1. CPA**

CPA phải khai báo rõ mẫu số đang dùng.

Các biến thể CPA:

1.  Cost per comment.

2.  Cost per qualified comment.

3.  Cost per Messenger conversation.

4.  Cost per qualified conversation.

5.  Cost per quote request.

6.  Cost per quote generated.

7.  Cost per official order.

8.  Cost per verified order.

9.  Cost per verified customer.

10. Cost per verified revenue event.

Không được gọi chung “CPA” nếu không nói rõ conversion basis.

CPA dùng cho scale nên ưu tiên dựa trên official order hoặc verified revenue theo owner policy.

**32.2. ROAS**

ROAS phải khai báo rõ revenue basis.

Các biến thể ROAS:

1.  ROAS by gross order value.

2.  ROAS by confirmed order value.

3.  ROAS by paid revenue.

4.  ROAS by COD successful revenue.

5.  ROAS by delivered revenue.

6.  ROAS by verified revenue.

7.  ROAS by net verified revenue.

8.  ROAS by accounting reconciled revenue nếu có.

ROAS production mặc định không được dùng gross/confirmed/pending revenue nếu owner chưa phê duyệt.

ROAS chính thức phải dựa trên verified revenue hoặc revenue basis được owner policy khóa.

**32.3. AOV**

AOV phải khai báo rõ order basis.

Các biến thể AOV:

1.  AOV by confirmed order.

2.  AOV by paid order.

3.  AOV by COD successful order.

4.  AOV by delivered order.

5.  AOV by verified order.

6.  AOV by net verified revenue.

Không được dùng AOV từ cart draft làm AOV chính thức.

Không được dùng AOV từ quote làm AOV doanh thu.

**33. DATA QUALITY EVENT RULES**

**33.1. DATA_QUALITY_EVENT bắt buộc trước reporting**

Mỗi batch đo lường hoặc dashboard snapshot phải có DATA_QUALITY_EVENT.

DATA_QUALITY_EVENT phải cho biết:

1.  Dữ liệu có đủ nguồn không.

2.  Event có duplicate không.

3.  Attribution có conflict không.

4.  Revenue đã verified chưa.

5.  Exclusion đã áp dụng chưa.

6.  Spend có hợp lệ không.

7.  Campaign mapping có đủ không.

8.  Channel trace có đủ không.

9.  Quote/order linkage có đủ không.

10. Missing data có tồn tại không.

11. Privacy/spam/suppression có ảnh hưởng không.

12. Dữ liệu có đủ điều kiện dùng cho scale không.

**33.2. Data Quality outcome**

Các outcome tối thiểu:

1.  DQ_PASS.

2.  DQ_PASS_WITH_WARNING.

3.  DQ_PENDING.

4.  DQ_FAIL.

5.  DQ_OWNER_REVIEW_REQUIRED.

6.  DQ_EXCLUDED_FROM_ROAS.

7.  DQ_SCALE_BLOCKED.

8.  DQ_REPORTING_ONLY.

9.  DQ_NOT_FOR_PRODUCTION_DECISION.

Chỉ DQ_PASS hoặc trạng thái được owner policy cho phép mới được dùng cho scale decision.

**34. MEASUREMENT WINDOW GOVERNANCE**

**34.1. Time window phải rõ**

Mọi báo cáo PACK-07 phải khai báo time window.

Time window tối thiểu:

1.  Start time.

2.  End time.

3.  Timezone.

4.  Campaign window.

5.  Conversion window.

6.  Revenue verification window.

7.  Attribution lookback window.

8.  Data refresh timestamp.

9.  Late event handling.

10. Owner cutoff rule nếu có.

Không được so ROAS hai dashboard có time window khác nhau mà không cảnh báo.

**34.2. Late event handling**

Một số event có thể đến muộn:

1.  Payment confirmation.

2.  COD success.

3.  Delivery success.

4.  Refund.

5.  Return.

6.  Complaint.

7.  Reconcile.

8.  Verified revenue.

9.  MISA/accounting checkpoint nếu dùng.

PACK-07 phải cho phép trạng thái metric thay đổi từ pending sang verified hoặc excluded khi late event đến.

Không được khóa ROAS quá sớm nếu revenue verification window chưa kết thúc.

**35. CUSTOMER / SESSION / ORDER LINKAGE GOVERNANCE**

**35.1. Linkage là điều kiện sống còn của attribution**

PACK-07 chỉ đo chính xác khi nối được:

1.  Ads touchpoint.

2.  Channel event.

3.  Messenger thread.

4.  AI consult.

5.  Quote.

6.  Cart.

7.  Official order.

8.  Payment/COD.

9.  Delivery.

10. Verified revenue.

11. Customer identity hoặc session identity.

12. Attribution rule.

Nếu chuỗi bị đứt, metric phải chuyển cảnh báo.

**35.2. Không nối được khách thì không gán nguồn chính thức**

Nếu không nối được customer/session/order, PACK-07 không được gán doanh thu về nguồn cụ thể.

Trạng thái phải là:

**UNLINKED_REVENUE — ATTRIBUTION_NOT_ALLOWED**

hoặc

**UNLINKED_EVENT — FUNNEL_INCOMPLETE**

Không được tự nối bằng tên giống nhau, số điện thoại mơ hồ hoặc suy luận thủ công nếu owner policy chưa cho phép.

**36. PRODUCT / SKU MEASUREMENT GOVERNANCE**

**36.1. Đo theo sản phẩm phải dùng product identity hợp lệ**

PACK-07 có thể đo performance theo sản phẩm/SKU nếu nhận được product identity hợp lệ từ owner pack.

PACK-07 không được dùng mã SKU nội bộ trong customer-facing dashboard nếu policy không cho phép.

PACK-07 không được public BOM/công thức/tỷ lệ nội bộ.

Product performance chỉ được đo theo thông tin được phép:

1.  Product public name.

2.  Product group.

3.  Campaign product tag.

4.  Hero product flag nếu owner cung cấp.

5.  Sellable status từ owner.

6.  Stock/sale lock status từ owner.

7.  Verified revenue by product nếu order/revenue owner cung cấp.

Không được đo product revenue từ comment “mua dòng A” nếu thiếu order line verified.

**36.2. Hero product bị chặn thì attribution vẫn giữ, scale phải block**

Nếu sản phẩm hero hết hàng/not sellable/sale lock, PACK-07 vẫn có thể ghi nhận Ads/AI interest.

Tuy nhiên, Scale Gate phải block nếu sản phẩm không đủ điều kiện bán.

Dashboard phải tách:

1.  Demand signal.

2.  Sellable capacity.

3.  Stock constraint.

4.  Sale lock constraint.

5.  Fulfillment constraint.

6.  Revenue conversion.

Không được đánh giá Ads kém nếu demand tốt nhưng Commerce chặn bán vì stock/sale lock.

**37. COMPLAINT / QUALITY / RISK EVENT GOVERNANCE**

**37.1. Complaint event phải tách khỏi sales conversion**

Complaint conversation không được tính là lead bán hàng.

Complaint event phải đi vào risk metric.

Nếu complaint liên quan tới sản phẩm/campaign/live/AI reply, PACK-07 phải đánh dấu ảnh hưởng.

Các loại complaint tối thiểu:

1.  Product quality complaint.

2.  Taste/texture complaint.

3.  Delivery complaint.

4.  Payment complaint.

5.  Price/program complaint.

6.  Claim/safety complaint.

7.  Privacy complaint.

8.  Wrong product complaint.

9.  Late delivery complaint.

10. Refund/return complaint.

Complaint tăng bất thường có thể kích hoạt Stop/Pause Gate ở PHẦN 3/4.

**37.2. Claim/privacy incident phải chặn scale**

Nếu có claim incident hoặc privacy incident liên quan ads/live/comment/Messenger, PACK-07 không được cho Scale PASS nếu chưa được xử lý.

Trạng thái:

**RISK_INCIDENT_OPEN — SCALE_BLOCKED**

**38. EVENT EVIDENCE REQUIREMENTS**

**38.1. Evidence tối thiểu cho event**

Mỗi event dùng cho reporting chính thức phải có evidence tối thiểu:

1.  Event source.

2.  Event owner.

3.  Event timestamp.

4.  Event identity.

5.  Correlation identity.

6.  Data quality result.

7.  Attribution result nếu dùng.

8.  Revenue basis nếu dùng.

9.  Exclusion status nếu có.

10. Review status nếu cần.

Không có evidence thì event chỉ được xem là raw/pending, không được dùng cho PASS.

**38.2. Evidence cho Verified Revenue**

Verified Revenue event phải có evidence:

1.  Official order identity.

2.  Customer confirmation nếu policy yêu cầu.

3.  Payment/COD/delivery status theo policy.

4.  Refund/cancel/return status.

5.  Revenue amount.

6.  Revenue class.

7.  Attribution status.

8.  Data quality status.

9.  Owner confirmation.

10. Timestamp.

11. Audit/correlation.

Không có đủ evidence thì revenue phải ở trạng thái pending.

**39. DONE CONDITION CỦA PHẦN 2/4**

PHẦN 2/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Event taxonomy principles.

2.  Event family registry.

3.  Event lifecycle.

4.  Event exclusion rules.

5.  Funnel measurement principles.

6.  Comment → Messenger → Quote → Cart → Order → Payment/COD → Verified Revenue chain.

7.  Revenue classification.

8.  Revenue exclusion.

9.  Attribution model governance.

10. Attribution conflict resolution.

11. Paid/Organic/CRM/Diamond/Live classification.

12. Funnel metric definitions.

13. Ads metric definitions.

14. Data Quality Event rules.

15. Measurement window governance.

16. Customer/session/order linkage governance.

17. Product/SKU measurement governance.

18. Complaint/quality/risk event governance.

19. Event evidence requirements.

PHẦN 2/4 chưa định nghĩa chi tiết Dashboard Governance, KPI presentation, ROAS/CPA/AOV decision display, Scale Gate, Stop Gate, Owner Decision Matrix, Smoke Matrix, Done Gate, Fail Gate hoặc Release Control. Các nội dung đó thuộc PHẦN 3/4 và PHẦN 4/4.

**KẾT LUẬN PHẦN 2/4**

PACK-07 chỉ được đo lường bằng event hợp lệ.

Event phải có owner, source, correlation, data quality và evidence.

Comment không phải đơn hàng.

Messenger không phải doanh thu.

Quote không phải revenue.

Cart draft không phải official order.

Official order chưa chắc là paid revenue.

Payment pending chưa chắc là verified revenue.

Verified Revenue là điều kiện trọng yếu để tính ROAS chính thức.

Attribution phải có rule.

Conflict phải được đánh dấu.

Missing data không được suy diễn.

Pending revenue không được đưa vào ROAS production.

Data Quality Event là lớp bắt buộc trước reporting, dashboard và scale decision.

Nguyên tắc khóa của PHẦN 2/4 là:

**Đo đúng từng chặng funnel.**  
**Không nhảy tầng dữ liệu.**  
**Không tính trùng nguồn doanh thu.**  
**Không biến tín hiệu tương tác thành doanh thu.**  
**Không có Verified Revenue thì không có ROAS chính thức.**  
**Không có Attribution Rule thì không có kết luận nguồn.**

**PHẦN 3/4 — DASHBOARD / KPI / ROAS / CPA / AOV / SCALE GATE / STOP GATE / OWNER DECISION**

**40. MỤC TIÊU CỦA PHẦN 3/4**

PHẦN 3/4 thiết lập lớp quản trị dashboard, chỉ số đo lường, ROAS, CPA, AOV, Scale Gate, Stop/Pause Gate và Owner Decision cho PACK-07.

Mục tiêu của phần này là khóa rõ:

1.  Dashboard được phép hiển thị gì.

2.  Dashboard không được phép kết luận gì khi dữ liệu chưa đủ.

3.  KPI phải được định nghĩa theo đúng revenue basis và conversion basis.

4.  ROAS chỉ được dùng khi data quality và verified revenue đạt điều kiện.

5.  CPA phải khai báo rõ conversion basis.

6.  AOV phải khai báo rõ order/revenue basis.

7.  Scale Gate phải kiểm tra đủ Ads, AI, Commerce, stock, fulfillment, revenue và data quality.

8.  Stop/Pause Gate phải chặn kịp thời khi rủi ro tăng.

9.  Owner Decision là điều kiện bắt buộc trước khi scale production.

10. Dashboard không được che giấu data issue, attribution conflict, revenue pending hoặc sale lock.

PHẦN 3/4 không thiết kế UI chi tiết, không thiết kế API, không thiết kế database và không viết code.

**41. DASHBOARD GOVERNANCE PRINCIPLES**

**41.1. Dashboard là lớp quan sát, không phải source-of-truth**

Dashboard PACK-07 chỉ là lớp hiển thị và phân tích dữ liệu đo lường.

Dashboard không phải source-of-truth cho:

1.  Đơn hàng.

2.  Doanh thu.

3.  Thanh toán.

4.  COD.

5.  Giao hàng.

6.  Tồn kho.

7.  Sellable status.

8.  Sale Lock.

9.  Giá.

10. Khuyến mãi.

11. Member benefit.

12. Diamond benefit.

13. Commission.

14. MISA accounting.

15. Complaint resolution.

Dashboard chỉ được hiển thị dữ liệu đã lấy từ owner source hợp lệ hoặc projection đo lường có kiểm soát.

Dashboard không được ghi ngược dữ liệu nghiệp vụ gốc.

Dashboard không được tự sửa doanh thu.

Dashboard không được tự sửa attribution.

Dashboard không được tự xác nhận ROAS PASS.

Dashboard không được tự quyết định scale nếu thiếu owner rule/approval.

**41.2. Dashboard phải phân biệt các lớp dữ liệu**

Dashboard PACK-07 phải luôn phân biệt:

1.  Raw data.

2.  Normalized data.

3.  Clean data.

4.  Verified data.

5.  Excluded data.

6.  Pending data.

7.  Missing data.

8.  Duplicate data.

9.  Conflict data.

10. Suppressed data.

11. Privacy-blocked data.

12. Owner-review data.

Không được gom toàn bộ dữ liệu thành một số tổng.

Không được hiển thị “doanh thu” mà không nói rõ revenue class.

Không được hiển thị “ROAS” mà không nói rõ revenue basis.

Không được hiển thị “CPA” mà không nói rõ conversion basis.

Không được hiển thị “AOV” mà không nói rõ order/revenue basis.

**41.3. Dashboard phải có cảnh báo độ tin cậy**

Mỗi dashboard snapshot phải có trạng thái độ tin cậy.

Các trạng thái tối thiểu:

1.  DASHBOARD_READY_FOR_VIEW.

2.  DASHBOARD_READY_FOR_DECISION.

3.  DASHBOARD_WARNING.

4.  DASHBOARD_DATA_PENDING.

5.  DASHBOARD_DATA_QUALITY_FAIL.

6.  DASHBOARD_ATTRIBUTION_CONFLICT.

7.  DASHBOARD_REVENUE_NOT_VERIFIED.

8.  DASHBOARD_SCALE_BLOCKED.

9.  DASHBOARD_OWNER_REVIEW_REQUIRED.

10. DASHBOARD_NOT_FOR_PRODUCTION_DECISION.

Nếu dashboard chưa đạt READY_FOR_DECISION, không được dùng để scale production.

Nếu dashboard có data quality fail, không được hiển thị trạng thái tốt/màu xanh cho ROAS chính thức.

Nếu dashboard có attribution conflict chưa xử lý, doanh thu theo nguồn phải chuyển sang owner review.

**42. DASHBOARD DATA LAYERS**

**42.1. Raw Dashboard**

Raw Dashboard dùng để quan sát dữ liệu gốc.

Raw Dashboard có thể hiển thị:

1.  Raw spend.

2.  Raw impression.

3.  Raw reach.

4.  Raw click.

5.  Raw comment.

6.  Raw inbox.

7.  Raw event count.

8.  Raw order count nếu nguồn gửi.

9.  Raw revenue nếu nguồn gửi.

Raw Dashboard không được dùng để quyết định scale.

Raw Dashboard không được gọi là performance chính thức.

Raw Dashboard phải có cảnh báo:

**RAW_DATA — NOT_FOR_SCALE_DECISION**

**42.2. Clean Dashboard**

Clean Dashboard chỉ hiển thị dữ liệu đã qua:

1.  Source validation.

2.  Normalization.

3.  Deduplication.

4.  Spam/bot suppression.

5.  Privacy guard.

6.  Required field check.

7.  Event correlation check.

8.  Data quality check.

Clean Dashboard có thể dùng để phân tích funnel.

Clean Dashboard chưa chắc được dùng để tính ROAS nếu revenue chưa verified.

**42.3. Verified Dashboard**

Verified Dashboard chỉ hiển thị dữ liệu đã đạt:

1.  Clean data.

2.  Attribution rule pass.

3.  Quote/order linkage pass.

4.  Official order validation nếu dùng order metric.

5.  Payment/COD/delivery validation nếu dùng revenue metric.

6.  Verified revenue pass.

7.  Revenue exclusion applied.

8.  Owner policy pass.

9.  Evidence available.

Verified Dashboard là dashboard chính để xét ROAS production, Scale Gate và Stop Gate.

**42.4. Excluded Dashboard**

Excluded Dashboard phải hiển thị dữ liệu bị loại khỏi ROAS hoặc decision.

Các nhóm bị loại:

1.  Duplicate.

2.  Spam.

3.  Bot suspected.

4.  Privacy blocked.

5.  Channel error.

6.  Missing campaign context.

7.  Missing channel trace.

8.  Missing quote/order linkage.

9.  Payment not confirmed.

10. COD failed.

11. Delivery failed.

12. Cancelled order.

13. Refunded order.

14. Returned order.

15. Test order.

16. Internal order nếu policy loại.

17. Attribution conflict unresolved.

18. Revenue not verified.

19. Sale Lock impacted.

20. Complaint unresolved.

21. Owner policy excluded.

Dashboard không được ẩn dữ liệu bị loại, vì dữ liệu bị loại giúp owner hiểu rủi ro và nguyên nhân sai lệch.

**42.5. Pending Dashboard**

Pending Dashboard dùng cho dữ liệu đang chờ xác minh.

Các nhóm pending:

1.  Payment pending.

2.  COD pending.

3.  Delivery pending.

4.  Revenue verification pending.

5.  Attribution rule pending.

6.  Owner review pending.

7.  Refund/return window pending.

8.  MISA/accounting reconcile pending nếu có dùng.

9.  Data refresh pending.

10. Late event pending.

Pending revenue không được tính vào ROAS chính thức.

Pending data có thể hiển thị để quan sát pipeline nhưng phải có cảnh báo rõ.

**43. DASHBOARD STRUCTURE GOVERNANCE**

**43.1. Executive Measurement Dashboard**

Executive Measurement Dashboard dành cho owner xem nhanh tình hình tổng thể.

Các nhóm hiển thị tối thiểu:

1.  Ads spend.

2.  Verified revenue.

3.  Net verified revenue nếu policy dùng.

4.  Official ROAS status.

5.  CPA by verified order.

6.  AOV by verified order.

7.  Qualified conversation rate.

8.  Quote-to-order rate.

9.  Order-to-verified-revenue rate.

10. Data quality status.

11. Attribution conflict status.

12. Scale Gate status.

13. Stop/Pause Gate status.

14. Owner decision pending.

15. Top risk alerts.

Executive Dashboard không được hiển thị ROAS chính thức nếu revenue basis chưa verified.

**43.2. Ads Performance Dashboard**

Ads Performance Dashboard đo hiệu quả quảng cáo.

Các nhóm chỉ số tối thiểu:

1.  Spend.

2.  Impression.

3.  Reach.

4.  CPM.

5.  Click.

6.  CTR.

7.  CPC.

8.  Landing view nếu có.

9.  Comment.

10. Qualified comment.

11. Inbox/Messenger conversation.

12. Qualified conversation.

13. Quote request.

14. Official order.

15. Verified revenue.

16. ROAS by verified revenue.

17. CPA by selected conversion basis.

18. Campaign/adset/ad creative performance.

19. Data quality warning.

20. Attribution warning.

Ads Dashboard không được kết luận doanh thu nếu conversion chưa đi đến verified revenue.

**43.3. Funnel Dashboard**

Funnel Dashboard đo từng chặng chuyển đổi.

Funnel chuẩn:

**Impression → Reach → Click → Landing View → Comment → Qualified Comment → Private Handoff → Messenger Conversation → Qualified Conversation → Product Consult → Quote Request → Quote Generated → Cart Draft → Customer Confirmation → Official Order → Payment/COD Confirmation → Delivery Success nếu policy yêu cầu → ORDER_VERIFIED → Verified Revenue**

Funnel Dashboard phải hiển thị drop-off ở từng chặng.

Nếu chặng nào thiếu dữ liệu, dashboard phải đánh dấu missing.

Không được nhảy từ comment sang order.

Không được nhảy từ quote sang revenue.

Không được gộp cart draft với official order.

**43.4. Attribution Dashboard**

Attribution Dashboard hiển thị nguồn phân bổ doanh thu.

Các lớp tối thiểu:

1.  Paid Ads.

2.  Organic.

3.  Live.

4.  Paid Live/Boosted Live nếu có.

5.  Messenger Direct.

6.  CRM Rebuy.

7.  Diamond Referral.

8.  Member Rebuy.

9.  Landing Page.

10. Mixed Source.

11. Unknown Source.

12. Conflict Source.

13. Owner Review Required.

Attribution Dashboard chỉ được hiển thị source revenue chính thức khi attribution rule pass.

Nếu conflict chưa xử lý, revenue phải nằm ở nhóm conflict/pending.

**43.5. Revenue Dashboard**

Revenue Dashboard phải phân biệt:

1.  Gross order value.

2.  Confirmed order value.

3.  Payment pending value.

4.  Paid revenue.

5.  COD pending value.

6.  COD successful revenue.

7.  Delivered revenue.

8.  Verified revenue.

9.  Net verified revenue.

10. Pending revenue.

11. Excluded revenue.

12. Refund/return adjustment.

13. Accounting reconciled revenue nếu có.

Revenue Dashboard phải hiển thị revenue basis rõ ràng.

Không được gọi chung là “doanh thu” nếu chưa nêu class.

**43.6. Data Quality Dashboard**

Data Quality Dashboard là dashboard bắt buộc.

Các nhóm chỉ số tối thiểu:

1.  Total events received.

2.  Valid source events.

3.  Invalid source events.

4.  Duplicate events.

5.  Missing required fields.

6.  Missing campaign mapping.

7.  Missing channel trace.

8.  Missing quote/order linkage.

9.  Missing verified revenue.

10. Attribution conflicts.

11. Spam/bot suppressed.

12. Privacy-blocked events.

13. Excluded events.

14. Pending owner review.

15. Data quality pass rate.

16. Data quality fail rate.

17. Scale eligible data ratio.

18. Dashboard reliability status.

Không có Data Quality Dashboard thì PACK-07 không đủ điều kiện scale governance.

**43.7. Risk Dashboard**

Risk Dashboard hiển thị các vấn đề ảnh hưởng scale/stop.

Các nhóm rủi ro tối thiểu:

1.  Complaint increase.

2.  Claim/safety incident.

3.  Privacy incident.

4.  Spam/comment abuse increase.

5.  Payment fail increase.

6.  COD fail increase.

7.  Delivery fail increase.

8.  Refund/return increase.

9.  Sale Lock impacted SKU.

10. Stockout/not sellable.

11. Fulfillment overload.

12. AI handoff overload.

13. Human takeover overload.

14. Attribution conflict spike.

15. Data mismatch.

16. Dashboard data quality fail.

17. Owner decision pending.

Risk Dashboard là đầu vào bắt buộc cho Stop/Pause Gate.

**44. KPI GOVERNANCE PRINCIPLES**

**44.1. KPI phải có định nghĩa chính thức**

Mỗi KPI trong PACK-07 phải có:

1.  Tên KPI.

2.  Mục đích sử dụng.

3.  Công thức logic.

4.  Tử số.

5.  Mẫu số.

6.  Data source.

7.  Owner source.

8.  Time window.

9.  Revenue basis nếu có.

10. Conversion basis nếu có.

11. Data quality requirement.

12. Exclusion rule.

13. Attribution model nếu có.

14. Decision usage.

15. Warning condition.

Không được dùng KPI không có định nghĩa.

Không được dùng cùng một tên KPI cho nhiều cách tính khác nhau mà không ghi rõ basis.

**44.2. KPI phải phân biệt observation và decision**

Observation KPI dùng để quan sát.

Decision KPI dùng để ra quyết định scale/stop.

Ví dụ:

1.  Total comments là observation KPI.

2.  Qualified conversation rate là decision-support KPI.

3.  Verified revenue ROAS là decision KPI.

4.  Gross order ROAS chỉ là observation nếu policy không cho phép dùng để scale.

5.  Pending revenue là observation KPI.

6.  Data quality pass rate là decision KPI.

7.  Attribution conflict rate là decision KPI.

8.  COD fail rate là decision KPI.

9.  Complaint rate là decision KPI.

Không được dùng observation KPI để scale nếu decision KPI chưa đạt.

**44.3. KPI phải đi kèm time window**

KPI không có time window là KPI không đủ điều kiện quyết định.

Mỗi KPI phải nêu rõ:

1.  Ngày bắt đầu.

2.  Ngày kết thúc.

3.  Timezone.

4.  Campaign window.

5.  Conversion window.

6.  Revenue verification window.

7.  Late event handling window.

8.  Data refresh timestamp.

Không được so sánh KPI khác time window mà không cảnh báo.

**45. ROAS GOVERNANCE**

**45.1. ROAS phải khai báo revenue basis**

ROAS không được hiển thị chung chung.

Các loại ROAS có thể tồn tại:

1.  ROAS by Gross Order Value.

2.  ROAS by Confirmed Order Value.

3.  ROAS by Paid Revenue.

4.  ROAS by COD Successful Revenue.

5.  ROAS by Delivered Revenue.

6.  ROAS by Verified Revenue.

7.  ROAS by Net Verified Revenue.

8.  ROAS by Accounting Reconciled Revenue nếu policy cho phép.

ROAS dùng cho scale production phải là ROAS theo revenue basis được owner phê duyệt.

Mặc định, ROAS chính thức của PACK-07 phải dựa trên Verified Revenue hoặc Net Verified Revenue nếu policy yêu cầu.

**45.2. ROAS không được tính khi thiếu spend hợp lệ**

Không có Ads spend source hợp lệ thì không tính ROAS.

Spend hợp lệ phải có:

1.  Source được owner phê duyệt.

2.  Campaign/adset/ad identity.

3.  Time window.

4.  Currency.

5.  Spend amount.

6.  Account/Page/Business context.

7.  Import/sync status.

8.  Evidence snapshot.

9.  Data quality status.

Spend nhập tay chưa reconcile không được dùng cho ROAS PASS nếu owner policy không cho phép.

**45.3. ROAS không được tính khi thiếu attribution**

ROAS theo nguồn chỉ được tính khi attribution pass.

Nếu revenue đã verified nhưng chưa biết thuộc nguồn nào, doanh thu đó không được đưa vào ROAS theo nguồn.

Trạng thái bắt buộc:

**VERIFIED_REVENUE_WITHOUT_ATTRIBUTION — SOURCE_ROAS_NOT_ALLOWED**

Nếu có attribution conflict chưa xử lý:

**ATTRIBUTION_CONFLICT — SOURCE_ROAS_BLOCKED**

**45.4. ROAS không được tính khi revenue chưa verified**

Các lớp không dùng cho ROAS chính thức nếu owner chưa phê duyệt:

1.  Quote value.

2.  Cart draft value.

3.  Gross order value.

4.  Confirmed order value.

5.  Payment pending value.

6.  COD pending value.

7.  Revenue pending verification.

8.  Revenue with unresolved refund/return.

9.  Revenue with unresolved attribution conflict.

10. Revenue with data quality fail.

Dashboard có thể hiển thị các lớp này dưới dạng pipeline, nhưng phải ghi rõ không phải ROAS chính thức.

**45.5. ROAS phải có trạng thái tin cậy**

Các trạng thái ROAS tối thiểu:

1.  ROAS_RAW.

2.  ROAS_PIPELINE_ONLY.

3.  ROAS_PENDING_VERIFICATION.

4.  ROAS_DATA_QUALITY_WARNING.

5.  ROAS_ATTRIBUTION_CONFLICT.

6.  ROAS_VERIFIED.

7.  ROAS_NET_VERIFIED.

8.  ROAS_ACCOUNTING_RECONCILED nếu có.

9.  ROAS_NOT_RELIABLE.

10. ROAS_SCALE_ELIGIBLE.

11. ROAS_SCALE_BLOCKED.

Chỉ ROAS_VERIFIED, ROAS_NET_VERIFIED hoặc trạng thái owner-approved mới được đưa vào Scale Gate.

**46. CPA GOVERNANCE**

**46.1. CPA phải khai báo conversion basis**

CPA không được hiển thị chung chung.

Các loại CPA tối thiểu:

1.  Cost per comment.

2.  Cost per qualified comment.

3.  Cost per Messenger conversation.

4.  Cost per qualified conversation.

5.  Cost per quote request.

6.  Cost per quote generated.

7.  Cost per cart draft.

8.  Cost per customer confirmation.

9.  Cost per official order.

10. Cost per payment confirmed order.

11. Cost per COD successful order.

12. Cost per delivered order.

13. Cost per verified order.

14. Cost per repeat purchase.

15. Cost per verified revenue event.

CPA dùng cho scale phải dùng conversion basis được owner phê duyệt.

**46.2. CPA tầng thấp không đủ để scale**

CPA comment thấp không có nghĩa campaign tốt.

CPA inbox thấp không có nghĩa doanh thu tốt.

CPA quote thấp không có nghĩa order tốt.

CPA order thấp không có nghĩa revenue verified tốt.

Scale production phải ưu tiên CPA ở tầng:

1.  Official order.

2.  Payment/COD confirmed order.

3.  Verified order.

4.  Verified revenue.

Nếu chỉ có CPA comment/inbox tốt nhưng quote-to-order hoặc order-to-verified revenue thấp, Scale Gate phải cảnh báo.

**46.3. CPA phải có data quality pass**

CPA không được dùng cho decision nếu:

1.  Spend chưa hợp lệ.

2.  Event trùng chưa xử lý.

3.  Spam/bot chưa loại.

4.  Comment chưa qualified.

5.  Messenger thread thiếu trace.

6.  Quote/order linkage thiếu.

7.  Official order thiếu.

8.  Verified revenue thiếu nếu dùng CPA verified.

9.  Attribution conflict chưa xử lý.

10. Time window không rõ.

**47. AOV GOVERNANCE**

**47.1. AOV phải khai báo order/revenue basis**

AOV có thể tính theo nhiều basis:

1.  AOV by cart draft.

2.  AOV by confirmed order.

3.  AOV by paid order.

4.  AOV by COD successful order.

5.  AOV by delivered order.

6.  AOV by verified order.

7.  AOV by net verified revenue.

AOV by cart draft không phải AOV doanh thu.

AOV by quote không phải AOV doanh thu.

AOV dùng cho scale phải dựa trên official order/verified revenue theo owner policy.

**47.2. AOV phải tách theo nguồn nếu attribution pass**

AOV theo campaign/adset/ad chỉ được hiển thị khi attribution pass.

Nếu attribution conflict chưa xử lý, AOV theo nguồn phải bị chặn.

AOV tổng có thể hiển thị nếu revenue verified, nhưng AOV theo nguồn cần attribution rõ.

**47.3. AOV phải cảnh báo khi lệch do đơn bất thường**

AOV có thể bị méo bởi:

1.  Đơn số lượng lớn bất thường.

2.  Đơn B2B.

3.  Đơn quà tặng.

4.  Đơn nội bộ.

5.  Đơn test.

6.  Đơn hoàn/hủy một phần.

7.  Đơn combo đặc biệt.

8.  Đơn từ Diamond/referral.

9.  Đơn từ CRM rebuy.

10. Đơn từ live chương trình đặc biệt.

Dashboard phải có outlier warning nếu AOV bị ảnh hưởng bởi đơn bất thường.

**48. CORE KPI REGISTRY**

**48.1. Nhóm KPI đầu phễu Ads**

| **KPI**    | **Ý nghĩa**            | **Decision usage**        |
|------------|------------------------|---------------------------|
| Spend      | Chi phí quảng cáo      | Cần cho ROAS/CPA          |
| Impression | Lượt hiển thị          | Quan sát reach đầu phễu   |
| Reach      | Số người tiếp cận      | Quan sát độ phủ           |
| CPM        | Chi phí 1.000 hiển thị | Tối ưu media              |
| Click      | Lượt click             | Quan sát quan tâm ban đầu |
| CTR        | Tỷ lệ click            | Đánh giá creative/offer   |
| CPC        | Chi phí click          | Tối ưu traffic            |

Các KPI này không đủ để scale nếu không có conversion và revenue.

**48.2. Nhóm KPI comment/Messenger**

| **KPI**                     | **Ý nghĩa**              | **Decision usage**       |
|-----------------------------|--------------------------|--------------------------|
| Total Comments              | Tổng comment             | Observation only         |
| Qualified Comments          | Comment đủ điều kiện     | Decision-support         |
| Spam Comment Rate           | Tỷ lệ comment rác        | Stop/Pause risk          |
| Comment-to-Messenger Rate   | Tỷ lệ kéo private        | Đánh giá PACK-06 routing |
| Messenger Conversations     | Số hội thoại             | Observation              |
| Qualified Conversations     | Hội thoại đủ chất lượng  | Decision-support         |
| Conversation-to-Quote Rate  | Chuyển tư vấn sang quote | Đánh giá AI/offer        |
| Complaint Conversation Rate | Tỷ lệ khiếu nại          | Stop/Pause risk          |

Không được dùng Total Comments làm cơ sở scale chính thức.

**48.3. Nhóm KPI quote/order/revenue**

| **KPI**                        | **Ý nghĩa**                       | **Decision usage**                |
|--------------------------------|-----------------------------------|-----------------------------------|
| Quote Request Rate             | Tỷ lệ yêu cầu báo giá             | Đánh giá nhu cầu                  |
| Quote Generated Rate           | Tỷ lệ tạo quote thành công        | Đánh giá Commerce Runtime         |
| Quote Blocked Rate             | Tỷ lệ quote bị chặn               | Cảnh báo stock/sellable/sale lock |
| Quote-to-Order Rate            | Tỷ lệ quote thành order           | Decision-support                  |
| Official Order Count           | Số đơn chính thức                 | Decision-support                  |
| Order-to-Payment Rate          | Tỷ lệ đơn thanh toán              | Decision KPI                      |
| COD Success Rate               | Tỷ lệ COD thành công              | Decision KPI                      |
| Order-to-Verified-Revenue Rate | Tỷ lệ đơn thành revenue verified  | Decision KPI                      |
| Verified Revenue               | Doanh thu đủ điều kiện            | ROAS basis                        |
| Net Verified Revenue           | Doanh thu verified sau điều chỉnh | ROAS basis nếu policy dùng        |

**48.4. Nhóm KPI quality/risk**

| **KPI**                     | **Ý nghĩa**                         | **Decision usage** |
|-----------------------------|-------------------------------------|--------------------|
| Data Quality Pass Rate      | Tỷ lệ dữ liệu đạt                   | Scale Gate         |
| Attribution Conflict Rate   | Tỷ lệ conflict nguồn                | Scale/Review Gate  |
| Missing Linkage Rate        | Tỷ lệ đứt trace                     | Scale Block        |
| Payment Fail Rate           | Tỷ lệ payment fail                  | Stop/Pause         |
| COD Fail Rate               | Tỷ lệ COD fail                      | Stop/Pause         |
| Refund/Return Rate          | Tỷ lệ hoàn/đổi/trả                  | Stop/Pause         |
| Complaint Rate              | Tỷ lệ khiếu nại                     | Stop/Pause         |
| Privacy Incident Count      | Số sự cố privacy                    | Stop/Block         |
| Claim Incident Count        | Số sự cố claim                      | Stop/Block         |
| Sale Lock Impact Count      | Số SKU/order bị sale lock ảnh hưởng | Stop/Block         |
| Fulfillment Overload Signal | Tín hiệu quá tải vận hành           | Scale Block        |

**49. SCALE GATE GOVERNANCE**

**49.1. Scale Gate là điều kiện bắt buộc trước khi tăng ngân sách**

Không được scale quảng cáo chỉ vì nhiều comment.

Không được scale quảng cáo chỉ vì inbox tăng.

Không được scale quảng cáo chỉ vì live đông.

Không được scale quảng cáo chỉ vì ROAS raw đẹp.

Không được scale quảng cáo nếu revenue chưa verified.

Không được scale quảng cáo nếu data quality chưa đạt.

Không được scale quảng cáo nếu owner chưa phê duyệt hoặc rule automation chưa được khóa.

Scale Gate là chốt kiểm soát bắt buộc trước mọi quyết định tăng ngân sách, mở rộng campaign, mở rộng adset, mở thêm page, mở thêm live boost hoặc nhân bản creative ở quy mô lớn.

**49.2. Điều kiện Scale Gate tối thiểu**

Scale Gate chỉ được PASS khi các nhóm điều kiện sau đạt:

1.  Ads spend source hợp lệ.

2.  Campaign/adset/ad identity rõ.

3.  Channel event từ PACK-06 hợp lệ.

4.  AI event từ PACK-05 hợp lệ nếu đo AI-assisted conversion.

5.  Quote/order linkage hợp lệ.

6.  Official order hợp lệ.

7.  Verified revenue đạt.

8.  Refund/cancel/return đã xử lý.

9.  Attribution rule pass.

10. Data quality pass.

11. ROAS đạt ngưỡng owner policy.

12. CPA đạt ngưỡng owner policy.

13. AOV đạt ngưỡng owner policy nếu dùng.

14. COD/payment fail trong giới hạn.

15. Refund/return trong giới hạn.

16. Complaint trong giới hạn.

17. AI handoff không quá tải.

18. CSKH không quá tải.

19. Warehouse/fulfillment đáp ứng được.

20. Stock/sellable đủ điều kiện.

21. Sale Lock không ảnh hưởng sản phẩm hero.

22. Privacy/claim incident không mở.

23. Dashboard reliability đạt.

24. Owner approval có hiệu lực.

Thiếu bất kỳ điều kiện P0 nào thì Scale Gate không được PASS.

**49.3. Scale Gate status**

Các trạng thái Scale Gate tối thiểu:

1.  SCALE_NOT_EVALUATED.

2.  SCALE_DATA_PENDING.

3.  SCALE_DATA_QUALITY_FAIL.

4.  SCALE_ATTRIBUTION_BLOCKED.

5.  SCALE_REVENUE_NOT_VERIFIED.

6.  SCALE_STOCK_BLOCKED.

7.  SCALE_SALE_LOCK_BLOCKED.

8.  SCALE_FULFILLMENT_BLOCKED.

9.  SCALE_RISK_BLOCKED.

10. SCALE_OWNER_REVIEW_REQUIRED.

11. SCALE_ALLOWED_LIMITED.

12. SCALE_ALLOWED.

13. SCALE_APPROVED_BY_OWNER.

14. SCALE_EXECUTED nếu owner policy cho phép ghi nhận execution.

PACK-07 không được tự chuyển sang SCALE_EXECUTED nếu thiếu owner decision hoặc execution evidence từ owner vận hành Ads.

**49.4. Scale Allowed Limited**

Scale Allowed Limited dùng khi dữ liệu đủ tốt nhưng còn giới hạn vận hành.

Ví dụ:

1.  ROAS đạt nhưng stock không đủ cho scale lớn.

2.  CPA đạt nhưng CSKH gần quá tải.

3.  Verified revenue đạt nhưng COD fail bắt đầu tăng.

4.  Campaign tốt nhưng chỉ tốt ở một page/live cụ thể.

5.  AOV cao nhưng do một số đơn lớn bất thường.

6.  Data quality pass nhưng sample size còn nhỏ.

7.  Fulfillment đáp ứng được mức tăng nhỏ, chưa đáp ứng tăng lớn.

Trạng thái này chỉ cho phép owner xét scale có giới hạn, không tự động mở rộng mạnh.

**49.5. Scale Blocked**

Scale Blocked bắt buộc khi:

1.  Data quality fail.

2.  ROAS chưa verified.

3.  Attribution conflict chưa xử lý.

4.  CPA vượt ngưỡng.

5.  COD/payment fail cao.

6.  Refund/return cao.

7.  Complaint tăng.

8.  Privacy/claim incident mở.

9.  Hero SKU hết hàng.

10. Hero SKU not sellable.

11. Sale Lock/Recall ảnh hưởng SKU.

12. Fulfillment quá tải.

13. AI/human handoff quá tải.

14. Owner approval thiếu.

15. Dashboard mismatch.

16. Spend source không hợp lệ.

17. Order/revenue linkage thiếu.

**50. STOP / PAUSE GATE GOVERNANCE**

**50.1. Stop/Pause Gate bảo vệ hệ thống**

Stop/Pause Gate dùng để dừng, pause, giảm ngân sách hoặc yêu cầu owner review khi chiến dịch có rủi ro.

Stop/Pause Gate không chỉ dựa vào ROAS.

Một chiến dịch có ROAS tốt vẫn có thể phải pause nếu:

1.  Sale Lock ảnh hưởng sản phẩm.

2.  Sản phẩm hết hàng.

3.  Khiếu nại tăng.

4.  Claim/privacy incident xuất hiện.

5.  COD fail cao.

6.  Fulfillment quá tải.

7.  AI/human handoff quá tải.

8.  Data quality fail.

9.  Attribution conflict quá cao.

10. Revenue mismatch.

11. Owner yêu cầu.

**50.2. Điều kiện Stop/Pause Gate tối thiểu**

Stop/Pause Gate phải được kích hoạt khi có một trong các nhóm sau:

1.  ROAS không đủ tin cậy.

2.  ROAS tụt dưới ngưỡng owner policy.

3.  CPA vượt ngưỡng owner policy.

4.  Conversion tụt bất thường.

5.  Comment spam tăng cao.

6.  Qualified conversation giảm mạnh.

7.  Quote-to-order tụt bất thường.

8.  Payment fail tăng cao.

9.  COD fail tăng cao.

10. Delivery fail tăng cao.

11. Refund/return tăng cao.

12. Complaint tăng cao.

13. Fulfillment quá tải.

14. AI Advisor quá tải hoặc fail-closed tăng mạnh.

15. Human takeover quá tải.

16. Hero SKU hết hàng.

17. Hero SKU not sellable.

18. Sale Lock/Recall ảnh hưởng sản phẩm.

19. Data mismatch.

20. Attribution conflict tăng.

21. Privacy incident.

22. Claim/safety incident.

23. App/page/webhook/channel incident.

24. Owner yêu cầu.

**50.3. Stop/Pause Gate status**

Các trạng thái tối thiểu:

1.  STOP_NOT_EVALUATED.

2.  STOP_MONITORING.

3.  PAUSE_RECOMMENDED.

4.  PAUSE_REQUIRED.

5.  STOP_RECOMMENDED.

6.  STOP_REQUIRED.

7.  BUDGET_REDUCTION_RECOMMENDED.

8.  OWNER_REVIEW_REQUIRED.

9.  RISK_INCIDENT_OPEN.

10. DATA_QUALITY_STOP.

11. STOCK_STOP.

12. SALE_LOCK_STOP.

13. FULFILLMENT_STOP.

14. PRIVACY_CLAIM_STOP.

15. OWNER_STOPPED.

16. RESUME_REVIEW_REQUIRED.

17. RESUME_ALLOWED.

18. RESUME_APPROVED_BY_OWNER.

PACK-07 không tự resume campaign nếu chưa có owner decision hoặc rule automation được phê duyệt.

**50.4. Pause không xóa dữ liệu đo lường**

Khi campaign bị pause/stop, PACK-07 vẫn phải giữ dữ liệu:

1.  Spend trước pause.

2.  Funnel trước pause.

3.  Revenue pending.

4.  Late payment/COD/delivery event.

5.  Refund/return event.

6.  Complaint event.

7.  Attribution result.

8.  Data quality result.

9.  Owner decision.

10. Resume review evidence.

Pause/stop không được làm mất trace.

**51. OWNER DECISION GOVERNANCE**

**51.1. Owner Decision là điều kiện kiểm soát cuối**

PACK-07 có thể đề xuất.

Owner quyết định.

Các quyết định bắt buộc cần owner hoặc delegated owner approval:

1.  Scale budget.

2.  Reduce budget.

3.  Pause campaign.

4.  Stop campaign.

5.  Resume campaign.

6.  Change attribution model.

7.  Change revenue basis.

8.  Accept manual spend.

9.  Accept manual revenue correction.

10. Accept unresolved warning.

11. Override scale block nếu policy cho phép.

12. Approve experimental campaign.

13. Approve creative with risk warning.

14. Approve new source/channel measurement.

15. Approve dashboard for production decision.

Không có owner decision thì không được gọi Scale Approved.

**51.2. Owner Decision phải có evidence**

Mỗi quyết định owner phải có:

1.  Decision type.

2.  Decision scope.

3.  Campaign/adset/ad/page/live scope.

4.  Time window.

5.  Dashboard snapshot.

6.  Data quality result.

7.  ROAS/CPA/AOV basis.

8.  Attribution status.

9.  Revenue verification status.

10. Risk status.

11. Stock/sellable status.

12. Fulfillment status.

13. Reason.

14. Owner identity.

15. Timestamp.

16. Effective period.

17. Review date nếu cần.

18. Audit/correlation.

Không có evidence thì quyết định không được dùng cho PASS.

**51.3. Owner override phải bị kiểm soát**

Owner có thể override một số cảnh báo nếu policy cho phép, nhưng không được override các chặn P0 tuyệt đối.

Các chặn không được override nếu chưa có owner policy cấp cao:

1.  Privacy incident chưa xử lý.

2.  Claim/safety incident nghiêm trọng.

3.  Sale Lock/Recall active.

4.  Not sellable SKU.

5.  Revenue chưa verified nhưng vẫn gọi ROAS chính thức.

6.  Spend source không hợp lệ nhưng vẫn scale.

7.  Attribution conflict chưa xử lý nhưng vẫn công bố source ROAS chính thức.

8.  Payment/COD fail nghiêm trọng.

9.  Fulfillment không đáp ứng.

10. Data quality fail nghiêm trọng.

Override phải để lại audit và evidence.

**52. SCALE DECISION MATRIX**

**52.1. Matrix quyết định scale**

| **Điều kiện**                                                    | **Trạng thái**         | **Quyết định**           |
|------------------------------------------------------------------|------------------------|--------------------------|
| ROAS verified đạt, CPA đạt, data quality pass, stock đủ, no risk | Healthy                | Scale Allowed            |
| ROAS verified đạt nhưng stock giới hạn                           | Stock constrained      | Scale Allowed Limited    |
| ROAS raw đẹp nhưng revenue chưa verified                         | Pending                | Scale Blocked            |
| CPA comment tốt nhưng order thấp                                 | Funnel weak            | Scale Blocked / Optimize |
| Quote cao nhưng order thấp                                       | Offer/order issue      | Owner Review             |
| Order cao nhưng payment/COD fail cao                             | Payment/COD risk       | Pause/Review             |
| Revenue tốt nhưng complaint tăng                                 | Risk rising            | Pause/Review             |
| Sale Lock ảnh hưởng SKU hero                                     | Blocked                | Stop/Pause Required      |
| Attribution conflict cao                                         | Measurement unreliable | Scale Blocked            |
| Data quality fail                                                | Unreliable             | Scale Blocked            |
| Fulfillment quá tải                                              | Operational constraint | Scale Blocked            |
| Privacy/claim incident                                           | Critical risk          | Stop Required            |

**52.2. Matrix quyết định stop/pause**

| **Tín hiệu**                         | **Mức độ**  | **Quyết định**        |
|--------------------------------------|-------------|-----------------------|
| ROAS tụt nhẹ nhưng data quality pass | Medium      | Review/Optimize       |
| ROAS tụt mạnh                        | High        | Pause Recommended     |
| CPA vượt ngưỡng                      | High        | Pause/Reduce Budget   |
| COD fail tăng mạnh                   | High        | Pause Required        |
| Complaint tăng mạnh                  | High        | Pause Required        |
| Privacy incident                     | Critical    | Stop Required         |
| Claim/safety incident                | Critical    | Stop Required         |
| Sale Lock/Recall                     | Critical    | Stop Required         |
| Stockout hero SKU                    | Critical    | Stop/Pause Required   |
| Fulfillment overload                 | High        | Scale Blocked / Pause |
| Data mismatch nghiêm trọng           | High        | Decision Blocked      |
| Attribution conflict chưa xử lý      | Medium/High | Source ROAS Blocked   |
| Owner yêu cầu dừng                   | Critical    | Stop Required         |

**53. DATA RELIABILITY WARNING**

**53.1. Dashboard phải cảnh báo khi dữ liệu không đủ tin cậy**

Các cảnh báo bắt buộc:

1.  Revenue not verified.

2.  Spend not reconciled.

3.  Attribution conflict.

4.  Missing campaign mapping.

5.  Missing channel trace.

6.  Missing quote/order linkage.

7.  Duplicate events detected.

8.  Spam/bot suppression high.

9.  Payment pending high.

10. COD pending high.

11. Refund/return pending.

12. Complaint spike.

13. Stock/sellable blocked.

14. Sale Lock active.

15. Dashboard refresh delayed.

16. Late event window not closed.

17. Owner review pending.

18. Sample size too small.

19. Manual data included.

20. Accounting reconcile pending nếu có dùng.

Không được dùng màu sắc/trạng thái “tốt” cho KPI có cảnh báo P0.

**53.2. Warning phải gắn vào từng KPI**

Không chỉ cảnh báo chung ở đầu dashboard.

Mỗi KPI bị ảnh hưởng phải có warning riêng.

Ví dụ:

1.  ROAS bị ảnh hưởng bởi revenue pending.

2.  CPA bị ảnh hưởng bởi duplicate comments.

3.  AOV bị ảnh hưởng bởi outlier order.

4.  Quote-to-order bị ảnh hưởng bởi Sale Lock.

5.  Order-to-revenue bị ảnh hưởng bởi COD pending.

6.  Campaign performance bị ảnh hưởng bởi missing attribution.

7.  Live revenue bị ảnh hưởng bởi thiếu live session trace.

8.  CRM revenue bị ảnh hưởng bởi conflict với paid remarketing.

**54. CAMPAIGN / ADSET / AD DECISION GOVERNANCE**

**54.1. Campaign level**

Campaign-level decision được dùng để quyết định ngân sách tổng.

Campaign không được scale nếu:

1.  Campaign spend source chưa hợp lệ.

2.  Campaign attribution chưa pass.

3.  Campaign verified revenue chưa đạt.

4.  Campaign data quality fail.

5.  Campaign có risk incident.

6.  Campaign đẩy SKU not sellable.

7.  Campaign fulfillment không đáp ứng.

8.  Campaign owner approval thiếu.

**54.2. Adset level**

Adset-level decision dùng để tối ưu nhóm đối tượng, placement, ngân sách nhánh.

Adset không được đánh giá chỉ bằng CTR/CPC.

Adset phải đo đến ít nhất:

1.  Qualified conversation.

2.  Quote request.

3.  Official order.

4.  Verified revenue nếu đủ thời gian.

5.  CPA by selected conversion basis.

6.  ROAS by approved revenue basis.

7.  Data quality.

8.  Attribution status.

**54.3. Ad creative level**

Creative-level decision dùng để đánh giá thông điệp, hình ảnh, live hook, offer, CTA.

Creative tốt không chỉ là CTR cao.

Creative phải kiểm tra:

1.  Comment quality.

2.  Qualified conversation.

3.  Claim/safety risk.

4.  Privacy risk.

5.  Complaint signal.

6.  Product expectation mismatch.

7.  Quote/order conversion.

8.  Verified revenue contribution.

9.  Return/refund/complaint after purchase.

Creative tạo nhiều comment nhưng nhiều hiểu nhầm/claim risk không được scale mạnh.

**55. LIVE / GOLDEN HOUR / PROGRAM MEASUREMENT GOVERNANCE**

**55.1. Live measurement phải có live session identity**

Live performance chỉ được đo khi có live session identity hợp lệ.

Live Dashboard phải phân biệt:

1.  Live organic reach.

2.  Paid live boost nếu có.

3.  Live comment.

4.  Qualified live comment.

5.  Live-to-Messenger handoff.

6.  Live quote request.

7.  Live official order.

8.  Live verified revenue.

9.  Live complaint.

10. Live fulfillment pressure.

11. Live stock/sellable status.

12. Live attribution conflict.

Không có live session identity thì không được gán revenue về phiên live.

**55.2. Golden Hour measurement phải theo runtime**

Nếu đo chương trình Giờ Vàng, PACK-07 không được tự xác nhận giá/chương trình.

PACK-07 chỉ consume program context từ owner runtime.

Dashboard phải phân biệt:

1.  Session status.

2.  Program price basis.

3.  QuoteSnapshot generated.

4.  Official order created.

5.  Payment/COD confirmed.

6.  Verified revenue.

7.  Quota/stock constraint nếu owner cung cấp.

8.  Early access effect nếu có runtime.

9.  Member/Diamond effect nếu policy cho phép.

10. Revenue excluded do hết phiên/hết hiệu lực quote nếu có.

Không được tự gọi một order là Golden Hour revenue nếu thiếu program/session linkage.

**55.3. 24/7 program measurement phải theo runtime**

Nếu đo chương trình 24/7, PACK-07 chỉ consume program context từ Commerce Runtime.

PACK-07 không tự tính mức giảm.

PACK-07 không tự xác định khách đủ quyền lợi.

PACK-07 chỉ đo:

1.  Program-attributed quote.

2.  Program-attributed order.

3.  Program-attributed verified revenue.

4.  Program conflict với member/Diamond nếu owner event cung cấp.

5.  Program conversion.

6.  Program ROAS nếu attribution pass.

**56. CRM / REBUY / MEMBER MEASUREMENT GOVERNANCE**

**56.1. CRM revenue phải tách khỏi Ads revenue nếu policy yêu cầu**

CRM revenue đo mua lại, chăm sóc sau mua, member retention, seasonal suggestion, combo, quà sức khỏe hoặc upgrade.

CRM revenue không được tự cộng vào Ads revenue nếu attribution policy không cho phép.

Dashboard phải phân biệt:

1.  New customer from Ads.

2.  Existing customer from CRM.

3.  Member rebuy.

4.  Diamond/referral revenue.

5.  Ads-assisted rebuy.

6.  CRM-assisted rebuy.

7.  Mixed-source rebuy.

8.  Owner-review attribution.

**56.2. Member performance không được tự tính quyền lợi**

PACK-07 có thể đo performance theo member class nếu runtime cung cấp.

PACK-07 không tự xác định:

1.  Member tier.

2.  Member eligibility.

3.  Member discount.

4.  Upgrade/downgrade.

5.  Maintain tier.

6.  Benefit status.

Các giá trị này phải đến từ Commerce/Member owner.

PACK-07 chỉ đo outcome theo runtime value hợp lệ.

**57. PRODUCT / STOCK / SELLABLE DECISION GOVERNANCE**

**57.1. Product performance phải gắn với sellable reality**

Một sản phẩm có thể có demand cao nhưng không scale được nếu:

1.  Hết hàng.

2.  Not sellable.

3.  Sale Lock.

4.  Recall.

5.  Quality hold.

6.  Warehouse hold.

7.  Channel hold.

8.  Program price inactive.

9.  Quote unavailable.

10. Fulfillment không đáp ứng.

Dashboard phải hiển thị rõ:

1.  Demand signal.

2.  Sellable capacity.

3.  Stock constraint.

4.  Sale Lock constraint.

5.  Fulfillment constraint.

6.  Verified revenue outcome.

**57.2. Hero SKU blocked thì Scale Gate blocked**

Nếu campaign đang đẩy hero SKU nhưng SKU bị chặn, Scale Gate phải blocked.

Không được scale campaign chỉ vì lead tốt nếu sản phẩm không đủ điều kiện bán.

Nếu cần chuyển hướng sang sản phẩm thay thế, đó là quyết định của owner/Commerce/AI Advisor, không phải PACK-07 tự quyết định.

PACK-07 chỉ ghi nhận:

1.  Hero SKU blocked.

2.  Alternative product conversion nếu owner event cung cấp.

3.  Revenue attribution sau khi product substitution được owner xử lý.

4.  Impact on campaign performance.

**58. FULFILLMENT / CSKH CAPACITY GOVERNANCE**

**58.1. Scale phải xét năng lực vận hành**

Ads có thể tạo nhu cầu nhanh hơn năng lực xử lý.

Scale Gate phải kiểm tra:

1.  AI Advisor load.

2.  Human takeover capacity.

3.  CSKH capacity.

4.  Order processing capacity.

5.  Warehouse picking/packing capacity.

6.  Delivery handoff capacity.

7.  COD handling capacity.

8.  Complaint handling capacity.

9.  Payment reconciliation capacity.

10. Inventory availability.

11. Production replenishment signal nếu owner cung cấp.

Nếu vận hành quá tải, Scale Gate phải block hoặc chỉ cho Scale Allowed Limited.

**58.2. Fulfillment overload không được quy lỗi cho Ads hoặc AI đơn giản**

Nếu funnel tốt nhưng fulfillment fail, dashboard phải phân loại đúng nguyên nhân.

Ví dụ:

1.  Ads tạo qualified lead tốt.

2.  AI quote/order tốt.

3.  Order tăng.

4.  Fulfillment chậm.

5.  COD fail tăng do giao trễ.

6.  Complaint tăng.

Trường hợp này không được kết luận Ads kém hoặc AI kém nếu bằng chứng chỉ ra fulfillment là điểm nghẽn.

**59. OWNER REVIEW QUEUE**

**59.1. Các trường hợp bắt buộc vào Owner Review Queue**

PACK-07 phải đưa vào Owner Review Queue khi:

1.  Attribution conflict chưa có rule.

2.  Revenue basis chưa được duyệt.

3.  Manual spend được nhập.

4.  Manual correction xuất hiện.

5.  Data quality warning ảnh hưởng decision.

6.  ROAS verified đạt nhưng sample size nhỏ.

7.  AOV bị outlier.

8.  CPA tốt nhưng complaint tăng.

9.  Campaign tốt nhưng stock hạn chế.

10. Campaign tốt nhưng fulfillment gần quá tải.

11. CRM/Ads/Diamond conflict.

12. Live/Paid/Organic conflict.

13. Claim/privacy risk.

14. Scale override request.

15. Resume after stop request.

16. New campaign source cần phê duyệt.

17. Dashboard mismatch.

18. Revenue mismatch.

**59.2. Owner Review Queue status**

Các trạng thái tối thiểu:

1.  REVIEW_NOT_REQUIRED.

2.  REVIEW_REQUIRED.

3.  REVIEW_PENDING_DATA.

4.  REVIEW_PENDING_OWNER.

5.  REVIEW_APPROVED.

6.  REVIEW_REJECTED.

7.  REVIEW_ESCALATED.

8.  REVIEW_EXPIRED.

9.  REVIEW_LOCKED.

10. REVIEW_REOPENED.

Không có REVIEW_APPROVED thì không được coi owner đã phê duyệt.

**60. DECISION EVIDENCE REQUIREMENTS**

**60.1. Evidence cho Scale Decision**

Scale Decision phải có evidence:

1.  Dashboard snapshot.

2.  Time window.

3.  Spend source.

4.  Campaign/adset/ad identity.

5.  Channel trace result.

6.  AI event trace result nếu có.

7.  Quote/order linkage result.

8.  Verified revenue result.

9.  Revenue basis.

10. Attribution model.

11. Attribution conflict status.

12. Data quality result.

13. ROAS result.

14. CPA result.

15. AOV result nếu dùng.

16. Stock/sellable status.

17. Sale Lock status.

18. Fulfillment capacity status.

19. Risk status.

20. Owner approval.

21. Effective scale scope.

Không có evidence thì không có Scale PASS.

**60.2. Evidence cho Stop/Pause Decision**

Stop/Pause Decision phải có evidence:

1.  Trigger reason.

2.  Campaign/adset/ad/page/live scope.

3.  Risk metric.

4.  Data quality state.

5.  Revenue state.

6.  Attribution state.

7.  Stock/sellable state.

8.  Sale Lock/Recall state nếu có.

9.  Complaint/claim/privacy state nếu có.

10. Fulfillment state nếu có.

11. Owner decision hoặc policy auto-stop rule.

12. Timestamp.

13. Review/resume condition.

Không có evidence thì không được gọi Stop/Pause Gate completed.

**61. DASHBOARD RELEASE RULES**

**61.1. Dashboard production không được mở nếu thiếu Data Quality**

Dashboard chỉ được dùng production decision khi có:

1.  Data quality check.

2.  Attribution check.

3.  Revenue verification check.

4.  Spend validation.

5.  Exclusion handling.

6.  Pending/missing data display.

7.  Owner review flow.

8.  Scale/Stop status.

9.  Evidence snapshot.

Dashboard chỉ hiển thị raw data thì chưa đủ để làm production decision dashboard.

**61.2. Dashboard không được che rủi ro bằng chỉ số đẹp**

Các chỉ số đẹp không được che các vấn đề P0.

Ví dụ:

1.  ROAS cao nhưng revenue pending nhiều.

2.  CPA thấp nhưng spam comment cao.

3.  AOV cao nhưng do một đơn outlier.

4.  Quote cao nhưng order thấp.

5.  Order cao nhưng COD fail cao.

6.  Revenue cao nhưng refund/return cao.

7.  Live đông nhưng complaint tăng.

8.  Ads tốt nhưng SKU hero sale lock.

9.  AI conversion tốt nhưng privacy incident mở.

10. CRM rebuy tốt nhưng attribution conflict chưa xử lý.

Dashboard phải hiển thị song song performance và risk.

**62. DONE CONDITION CỦA PHẦN 3/4**

PHẦN 3/4 được xem là hoàn thành về mặt tài liệu khi đã khóa được:

1.  Dashboard governance principles.

2.  Dashboard data layers.

3.  Executive Measurement Dashboard.

4.  Ads Performance Dashboard.

5.  Funnel Dashboard.

6.  Attribution Dashboard.

7.  Revenue Dashboard.

8.  Data Quality Dashboard.

9.  Risk Dashboard.

10. KPI governance principles.

11. ROAS governance.

12. CPA governance.

13. AOV governance.

14. Core KPI Registry.

15. Scale Gate governance.

16. Stop/Pause Gate governance.

17. Owner Decision governance.

18. Scale Decision Matrix.

19. Stop/Pause Decision Matrix.

20. Data Reliability Warning.

21. Campaign/adset/ad decision governance.

22. Live/Golden Hour/24/7 measurement governance.

23. CRM/rebuy/member measurement governance.

24. Product/stock/sellable decision governance.

25. Fulfillment/CSKH capacity governance.

26. Owner Review Queue.

27. Decision evidence requirements.

28. Dashboard release rules.

PHẦN 3/4 chưa định nghĩa Smoke Matrix, Done Gate tổng thể, Fail Gate tổng thể, Release Control, Evidence Acceptance và PACK-07 Final Conclusion. Các nội dung đó thuộc PHẦN 4/4.

**KẾT LUẬN PHẦN 3/4**

PACK-07 Dashboard là lớp đo lường và hỗ trợ quyết định, không phải source-of-truth nghiệp vụ.

ROAS phải có revenue basis rõ.

CPA phải có conversion basis rõ.

AOV phải có order/revenue basis rõ.

Dashboard phải phân biệt raw, clean, verified, excluded, pending, missing và conflict data.

Scale Gate không được PASS nếu thiếu data quality, verified revenue, attribution, stock/sellable, fulfillment readiness hoặc owner approval.

Stop/Pause Gate phải kích hoạt khi ROAS không tin cậy, CPA xấu, conversion tụt, complaint tăng, COD/payment fail cao, stock/sellable bị chặn, Sale Lock/Recall ảnh hưởng, privacy/claim incident mở hoặc owner yêu cầu.

Nguyên tắc khóa của PHẦN 3/4 là:

**Dashboard không thay thế source-of-truth.**  
**ROAS đẹp nhưng dữ liệu chưa sạch thì không được scale.**  
**Comment nhiều không đồng nghĩa bán tốt.**  
**Quote nhiều không đồng nghĩa có doanh thu.**  
**Order nhiều không đồng nghĩa revenue verified.**  
**Scale phải đi qua Data Quality, Verified Revenue, Attribution, Stock/Sellable, Fulfillment và Owner Decision.**

**63. MỤC TIÊU CỦA PHẦN 4/4**

PHẦN 4/4 thiết lập lớp kiểm chứng cuối cho PACK-07, bao gồm Smoke Matrix, Evidence, Done Gate, Fail Gate, Release Control và kết luận hoàn tất tài liệu.

Mục tiêu của phần này là khóa rõ:

1.  PACK-07 phải được kiểm thử bằng smoke nào.

2.  Điều kiện nào được xem là đo lường hợp lệ.

3.  Điều kiện nào được xem là ROAS đáng tin cậy.

4.  Điều kiện nào được xem là đủ dữ liệu để Scale Gate.

5.  Điều kiện nào buộc phải Fail Gate.

6.  Evidence nào bắt buộc trước khi gọi PASS.

7.  Ai có quyền review và sign-off.

8.  Trạng thái nào được phép gọi là hoàn tất tài liệu.

9.  Trạng thái nào chưa được gọi là Production Ready.

10. Điều kiện nào cần đạt trước khi PACK-07 được dùng cho quyết định scale production.

PHẦN 4/4 không thiết kế code, API, database, UI hoặc schema chi tiết.

PHẦN 4/4 là lớp governance kiểm soát chất lượng triển khai PACK-07.

**64. NGUYÊN TẮC SMOKE CỐT LÕI**

**64.1. Smoke không phải test hình thức**

Smoke trong PACK-07 không phải kiểm tra dashboard có hiển thị hay không.

Smoke phải chứng minh dữ liệu đi đúng từ nguồn đến quyết định.

Smoke phải chứng minh:

1.  Ads spend có nguồn hợp lệ.

2.  Campaign/adset/ad identity được nhận diện đúng.

3.  Channel event đi qua PACK-06.

4.  AI event đi qua PACK-05.

5.  Quote/order/revenue đi qua owner runtime.

6.  Revenue chưa verified thì không tính ROAS chính thức.

7.  Attribution conflict được phát hiện.

8.  Exclusion rule hoạt động.

9.  Data Quality chặn được dữ liệu không đủ tin cậy.

10. Scale Gate không PASS khi thiếu điều kiện.

11. Stop/Pause Gate kích hoạt khi có rủi ro.

12. Dashboard không che giấu pending/missing/conflict data.

13. Evidence được ghi nhận đầy đủ.

14. Owner Decision được audit.

Smoke phải kiểm tra đúng nghiệp vụ, không chỉ kiểm tra màn hình.

**64.2. Không có smoke pass thì không có ROAS PASS**

PACK-07 không được gọi ROAS PASS nếu chưa có smoke pass.

Không có smoke pass thì:

1.  Không được dùng dashboard cho scale production.

2.  Không được gọi data quality là production-grade.

3.  Không được gọi attribution là đáng tin cậy.

4.  Không được gọi verified revenue là cơ sở ROAS nếu chưa test linkage.

5.  Không được gọi Scale Gate PASS.

6.  Không được gọi Release Ready.

7.  Không được gọi Production Ready.

Smoke pass phải đi kèm evidence accepted.

**64.3. Smoke phải có positive path và negative path**

PACK-07 phải test cả trường hợp đúng và sai.

Positive path chứng minh luồng hợp lệ đi qua được.

Negative path chứng minh hệ thống chặn đúng khi dữ liệu sai, thiếu, trùng, pending, conflict hoặc rủi ro.

Nếu chỉ test positive path mà không test negative path, PACK-07 chưa đủ Done Gate.

**65. SMOKE MATRIX TỔNG THỂ**

**65.1. ADS-SMK-001 — Ads Spend Source Validation Smoke**

| **Hạng mục**    | **Nội dung**                                                                    |
|-----------------|---------------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-001                                                                     |
| Mục tiêu        | Kiểm tra Ads spend source hợp lệ trước khi tính ROAS                            |
| Input           | Spend record có campaign/adset/ad/time window/currency/source                   |
| Expected result | Spend được xác thực, có evidence, được phép dùng cho ROAS nếu data quality pass |
| Negative path   | Thiếu spend source, thiếu campaign id, spend nhập tay chưa duyệt                |
| Fail condition  | Dashboard vẫn tính ROAS chính thức khi spend source không hợp lệ                |
| Evidence        | Spend source snapshot, validation result, data quality event, audit             |

**65.2. ADS-SMK-002 — Campaign / Adset / Ad Identity Smoke**

| **Hạng mục**    | **Nội dung**                                                            |
|-----------------|-------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-002                                                             |
| Mục tiêu        | Kiểm tra campaign/adset/ad identity được nhận diện và map đúng          |
| Input           | Event có campaign, adset, ad context                                    |
| Expected result | Mapping rõ campaign → adset → ad → time window                          |
| Negative path   | Thiếu adset/ad, sai mapping, campaign không thuộc owner-approved source |
| Fail condition  | Revenue vẫn được gán về campaign khi mapping thiếu                      |
| Evidence        | Mapping snapshot, data quality result, attribution readiness result     |

**65.3. ADS-SMK-003 — PACK-06 Channel Event Trace Smoke**

| **Hạng mục**    | **Nội dung**                                                                         |
|-----------------|--------------------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-003                                                                          |
| Mục tiêu        | Kiểm tra channel event Facebook/Messenger/Live phải đi qua PACK-06                   |
| Input           | Comment, Messenger event, Live event                                                 |
| Expected result | Event có Page context, routing context, dedup, privacy/spam status, channel evidence |
| Negative path   | Raw Facebook event chưa qua PACK-06                                                  |
| Fail condition  | Raw event vẫn được dùng cho production ROAS                                          |
| Evidence        | PACK-06 channel trace, event correlation, privacy/spam status                        |

**65.4. ADS-SMK-004 — Comment → Messenger Trace Smoke**

| **Hạng mục**    | **Nội dung**                                                             |
|-----------------|--------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-004                                                              |
| Mục tiêu        | Kiểm tra trace từ comment public sang Messenger/private                  |
| Input           | Comment có ý định mua hoặc hỏi giá                                       |
| Expected result | Comment được phân loại, route private, giữ context sang Messenger        |
| Negative path   | Messenger order không có comment-to-Messenger trace                      |
| Fail condition  | Doanh thu Messenger vẫn gán về comment/live/ad khi trace đứt             |
| Evidence        | Comment event, private handoff event, Messenger event, correlation chain |

**65.5. ADS-SMK-005 — PACK-05 AI Event Trace Smoke**

| **Hạng mục**    | **Nội dung**                                                                 |
|-----------------|------------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-005                                                                  |
| Mục tiêu        | Kiểm tra AI Advisor event được consume đúng, không viết lại AI behavior      |
| Input           | Intent event, response event, product recommendation, quote request, handoff |
| Expected result | AI event có owner PACK-05, guard status, handoff status, correlation         |
| Negative path   | Dashboard tự suy luận AI success/failure không có event                      |
| Fail condition  | PACK-07 tự đánh giá AI conversion khi thiếu PACK-05 trace                    |
| Evidence        | AI event trace, guard result, handoff reason, correlation                    |

**65.6. ADS-SMK-006 — Quote Event Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | ADS-SMK-006                                                    |
| Mục tiêu        | Kiểm tra QuoteSnapshot chỉ là funnel event, không phải revenue |
| Input           | Quote request, QuoteSnapshot generated                         |
| Expected result | Quote được hiển thị ở tầng quote, không vào revenue            |
| Negative path   | Quote expired, quote blocked do sellable/stock/sale lock       |
| Fail condition  | Dashboard tính quote value vào ROAS chính thức                 |
| Evidence        | Quote event, quote status, sellable/stock/sale lock result     |

**65.7. ADS-SMK-007 — Cart Draft Smoke**

| **Hạng mục**    | **Nội dung**                                          |
|-----------------|-------------------------------------------------------|
| Smoke ID        | ADS-SMK-007                                           |
| Mục tiêu        | Kiểm tra cart draft không bị tính là official order   |
| Input           | Cart draft được tạo từ quote                          |
| Expected result | Cart nằm ở funnel cart, chưa vào order/revenue        |
| Negative path   | Cart bỏ dở, cart bị sửa, cart hết hạn                 |
| Fail condition  | Cart draft được tính là order hoặc revenue            |
| Evidence        | Cart event, cart status, customer confirmation status |

**65.8. ADS-SMK-008 — Official Order Smoke**

| **Hạng mục**    | **Nội dung**                                                  |
|-----------------|---------------------------------------------------------------|
| Smoke ID        | ADS-SMK-008                                                   |
| Mục tiêu        | Kiểm tra chỉ official order/order_code mới được tính là order |
| Input           | Customer confirmation và owner Order tạo order_code           |
| Expected result | ORDER_EVENT hợp lệ, có order identity                         |
| Negative path   | Khách nhắn “lấy 2 hộp” nhưng chưa có order_code               |
| Fail condition  | Dashboard gọi Messenger text/cart draft là order chính thức   |
| Evidence        | ORDER_EVENT, order_code, customer confirmation, audit         |

**65.9. ADS-SMK-009 — Payment / COD Smoke**

| **Hạng mục**    | **Nội dung**                                                       |
|-----------------|--------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-009                                                        |
| Mục tiêu        | Kiểm tra payment/COD status phải đến từ owner runtime              |
| Input           | Payment confirmed hoặc COD success                                 |
| Expected result | Payment/COD event hợp lệ, không tự xác nhận từ tin nhắn            |
| Negative path   | Ảnh chuyển khoản chưa đối chiếu, COD pending, payment failed       |
| Fail condition  | Dashboard tính paid revenue khi chưa có owner payment confirmation |
| Evidence        | Payment/COD event, reconciliation status, owner confirmation       |

**65.10. ADS-SMK-010 — Verified Revenue Smoke**

| **Hạng mục**    | **Nội dung**                                                                |
|-----------------|-----------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-010                                                                 |
| Mục tiêu        | Kiểm tra Verified Revenue là điều kiện cho ROAS chính thức                  |
| Input           | Order đạt verified revenue theo owner policy                                |
| Expected result | VERIFIED_REVENUE_EVENT được tạo, có revenue basis                           |
| Negative path   | Revenue pending, refund pending, return pending, complaint unresolved       |
| Fail condition  | ROAS chính thức tính từ revenue pending                                     |
| Evidence        | Verified revenue event, revenue basis, exclusion result, owner confirmation |

**65.11. ADS-SMK-011 — Revenue Exclusion Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | ADS-SMK-011                                                    |
| Mục tiêu        | Kiểm tra hủy/hoàn/đổi/COD fail/test order bị loại khỏi ROAS    |
| Input           | Order canceled/refunded/returned/COD failed/test/internal      |
| Expected result | Revenue bị đưa vào excluded bucket, không tính ROAS            |
| Negative path   | Partial refund hoặc late return sau khi revenue đã pending     |
| Fail condition  | Excluded revenue vẫn xuất hiện trong ROAS chính thức           |
| Evidence        | Exclusion event, reason, owner source, dashboard excluded view |

**65.12. ADS-SMK-012 — Attribution Conflict Smoke**

| **Hạng mục**    | **Nội dung**                                                               |
|-----------------|----------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-012                                                                |
| Mục tiêu        | Kiểm tra conflict Ads/CRM/Diamond/Organic/Live được phát hiện              |
| Input           | Một order có nhiều touchpoint nguồn                                        |
| Expected result | ATTRIBUTION_CONFLICT được tạo, không gán nguồn chính thức khi chưa có rule |
| Negative path   | Ads click trước, Diamond link sau; CRM trước, remarketing sau              |
| Fail condition  | Dashboard tự gán doanh thu về một nguồn khi conflict chưa xử lý            |
| Evidence        | Touchpoint chain, conflict status, attribution rule status                 |

**65.13. ADS-SMK-013 — Attribution Rule Applied Smoke**

| **Hạng mục**    | **Nội dung**                                               |
|-----------------|------------------------------------------------------------|
| Smoke ID        | ADS-SMK-013                                                |
| Mục tiêu        | Kiểm tra attribution rule được áp đúng khi owner phê duyệt |
| Input           | Conversion có đủ touchpoint, rule và verified revenue      |
| Expected result | ATTRIBUTION_LOCKED hoặc CONFLICT_RESOLVED                  |
| Negative path   | Rule thiếu, rule hết hiệu lực, rule không đúng scope       |
| Fail condition  | Attribution result không ghi rule/evidence                 |
| Evidence        | Rule used, model, owner approval, attribution result       |

**65.14. ADS-SMK-014 — Data Quality Gate Smoke**

| **Hạng mục**    | **Nội dung**                                                      |
|-----------------|-------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-014                                                       |
| Mục tiêu        | Kiểm tra Data Quality phải PASS trước reporting/scale             |
| Input           | Batch dữ liệu có valid, missing, duplicate, conflict, pending     |
| Expected result | Dữ liệu được phân lớp raw/clean/verified/excluded/pending/missing |
| Negative path   | Duplicate, missing campaign, missing quote/order linkage          |
| Fail condition  | Dashboard vẫn READY_FOR_DECISION khi data quality fail            |
| Evidence        | DATA_QUALITY_EVENT, DQ status, excluded/missing summary           |

**65.15. ADS-SMK-015 — Dashboard Layer Smoke**

| **Hạng mục**    | **Nội dung**                                                     |
|-----------------|------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-015                                                      |
| Mục tiêu        | Kiểm tra dashboard phân biệt raw/clean/verified/excluded/pending |
| Input           | Tập dữ liệu nhiều trạng thái                                     |
| Expected result | Dashboard hiển thị đúng từng bucket, không gộp sai               |
| Negative path   | Pending revenue, excluded revenue, missing attribution           |
| Fail condition  | Dashboard hiển thị một số tổng doanh thu không rõ class          |
| Evidence        | Dashboard snapshot, data layer result, warning display           |

**65.16. ADS-SMK-016 — ROAS Reliability Smoke**

| **Hạng mục**    | **Nội dung**                                                                   |
|-----------------|--------------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-016                                                                    |
| Mục tiêu        | Kiểm tra ROAS chỉ đáng tin cậy khi đủ spend, attribution, verified revenue, DQ |
| Input           | Campaign có spend và verified revenue hợp lệ                                   |
| Expected result | ROAS_VERIFIED hoặc ROAS_NET_VERIFIED nếu policy dùng                           |
| Negative path   | Spend thiếu, attribution conflict, revenue pending                             |
| Fail condition  | ROAS_SCALE_ELIGIBLE khi thiếu DQ/verified revenue                              |
| Evidence        | Spend source, revenue basis, attribution result, DQ result                     |

**65.17. ADS-SMK-017 — CPA / AOV Basis Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | ADS-SMK-017                                                    |
| Mục tiêu        | Kiểm tra CPA/AOV có conversion basis và revenue/order basis rõ |
| Input           | Campaign có nhiều funnel stages                                |
| Expected result | CPA và AOV hiển thị đúng basis                                 |
| Negative path   | CPA comment bị gọi chung CPA, AOV quote bị gọi AOV doanh thu   |
| Fail condition  | KPI không khai báo basis nhưng dùng cho scale                  |
| Evidence        | KPI definition, dashboard snapshot, basis label                |

**65.18. ADS-SMK-018 — Scale Gate Smoke**

| **Hạng mục**    | **Nội dung**                                                                    |
|-----------------|---------------------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-018                                                                     |
| Mục tiêu        | Kiểm tra Scale Gate chỉ PASS khi đủ điều kiện                                   |
| Input           | Campaign có ROAS verified, CPA đạt, DQ pass, stock/sellable pass                |
| Expected result | SCALE_ALLOWED hoặc SCALE_ALLOWED_LIMITED theo điều kiện                         |
| Negative path   | ROAS raw đẹp nhưng revenue pending; SKU hero not sellable; owner approval thiếu |
| Fail condition  | Scale Gate PASS khi thiếu điều kiện P0                                          |
| Evidence        | Scale evaluation, dashboard snapshot, owner decision                            |

**65.19. ADS-SMK-019 — Stop / Pause Gate Smoke**

| **Hạng mục**    | **Nội dung**                                                          |
|-----------------|-----------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-019                                                           |
| Mục tiêu        | Kiểm tra Stop/Pause Gate kích hoạt khi rủi ro                         |
| Input           | Campaign có complaint tăng, COD fail cao, sale lock, privacy incident |
| Expected result | PAUSE_REQUIRED, STOP_REQUIRED hoặc OWNER_REVIEW_REQUIRED              |
| Negative path   | ROAS tốt nhưng Sale Lock active                                       |
| Fail condition  | Campaign vẫn Scale Allowed khi có P0 risk                             |
| Evidence        | Risk dashboard, stop trigger, owner decision, audit                   |

**65.20. ADS-SMK-020 — Owner Decision Smoke**

| **Hạng mục**    | **Nội dung**                                                    |
|-----------------|-----------------------------------------------------------------|
| Smoke ID        | ADS-SMK-020                                                     |
| Mục tiêu        | Kiểm tra quyết định owner được ghi nhận trước scale/stop/resume |
| Input           | Scale/stop decision request                                     |
| Expected result | Có owner decision, scope, reason, effective period, evidence    |
| Negative path   | Dashboard tự chuyển sang Scale Approved                         |
| Fail condition  | Không có owner approval nhưng vẫn gọi Scale Approved            |
| Evidence        | Owner decision record, dashboard snapshot, audit                |

**65.21. ADS-SMK-021 — Live / Golden Hour Measurement Smoke**

| **Hạng mục**    | **Nội dung**                                                       |
|-----------------|--------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-021                                                        |
| Mục tiêu        | Kiểm tra live/Giờ Vàng đo theo live/session/program runtime        |
| Input           | Live event, Golden Hour session, quote/order/revenue linkage       |
| Expected result | Revenue chỉ gán live/program khi có session/program linkage hợp lệ |
| Negative path   | Comment live không trace sang Messenger; quote hết hiệu lực        |
| Fail condition  | Dashboard gán revenue về live/Giờ Vàng khi thiếu linkage           |
| Evidence        | Live session context, program context, quote/order/revenue trace   |

**65.22. ADS-SMK-022 — CRM / Diamond / Referral Conflict Smoke**

| **Hạng mục**    | **Nội dung**                                                   |
|-----------------|----------------------------------------------------------------|
| Smoke ID        | ADS-SMK-022                                                    |
| Mục tiêu        | Kiểm tra không tính trùng Ads, CRM, Diamond/referral           |
| Input           | Customer có Ads touchpoint, CRM event, Diamond referral bind   |
| Expected result | Conflict được phát hiện, rule áp dụng nếu có                   |
| Negative path   | Không có referral bind, CRM rebuy nhưng gán Ads                |
| Fail condition  | Một verified revenue được tính trùng nhiều nguồn               |
| Evidence        | Touchpoint chain, referral bind, CRM event, attribution result |

**65.23. ADS-SMK-023 — Stock / Sellable / Sale Lock Smoke**

| **Hạng mục**    | **Nội dung**                                                  |
|-----------------|---------------------------------------------------------------|
| Smoke ID        | ADS-SMK-023                                                   |
| Mục tiêu        | Kiểm tra Scale Gate bị chặn khi SKU không đủ điều kiện bán    |
| Input           | Campaign hero SKU hết hàng/not sellable/sale lock             |
| Expected result | SCALE_STOCK_BLOCKED hoặc SCALE_SALE_LOCK_BLOCKED              |
| Negative path   | Lead tốt nhưng SKU bị chặn                                    |
| Fail condition  | Campaign vẫn Scale Allowed khi Sale Lock active               |
| Evidence        | Sellable status, stock status, sale lock status, scale result |

**65.24. ADS-SMK-024 — Fulfillment Capacity Smoke**

| **Hạng mục**    | **Nội dung**                                                      |
|-----------------|-------------------------------------------------------------------|
| Smoke ID        | ADS-SMK-024                                                       |
| Mục tiêu        | Kiểm tra scale phải xét năng lực CSKH/kho/giao hàng               |
| Input           | Campaign có demand tăng, fulfillment gần quá tải                  |
| Expected result | SCALE_ALLOWED_LIMITED hoặc SCALE_FULFILLMENT_BLOCKED              |
| Negative path   | Fulfillment quá tải nhưng ROAS vẫn tốt                            |
| Fail condition  | Scale mạnh khi fulfillment không đáp ứng                          |
| Evidence        | Fulfillment signal, CSKH load, warehouse capacity, owner decision |

**66. EVIDENCE GOVERNANCE**

**66.1. Không có evidence thì không có PASS**

PACK-07 không được gọi PASS nếu thiếu evidence.

Evidence là điều kiện bắt buộc cho:

1.  Data Quality PASS.

2.  ROAS PASS.

3.  Attribution PASS.

4.  Dashboard READY_FOR_DECISION.

5.  Scale Gate PASS.

6.  Stop/Pause Gate completed.

7.  Owner Decision approved.

8.  Release Ready.

Evidence không phải ảnh chụp rời rạc không có trace.

Evidence phải có nguồn, trạng thái, reviewer, scope và correlation.

**66.2. Evidence Registry tối thiểu**

PACK-07 phải có Evidence Registry cho các nhóm:

1.  Ads spend source evidence.

2.  Campaign/adset/ad mapping evidence.

3.  PACK-06 channel trace evidence.

4.  PACK-05 AI event trace evidence.

5.  Quote event evidence.

6.  Cart event evidence.

7.  Official order evidence.

8.  Payment/COD evidence.

9.  Delivery evidence nếu policy dùng.

10. Verified revenue evidence.

11. Revenue exclusion evidence.

12. Attribution rule evidence.

13. Attribution result evidence.

14. Data quality evidence.

15. Dashboard snapshot evidence.

16. Scale Gate evidence.

17. Stop/Pause Gate evidence.

18. Owner Decision evidence.

19. Risk incident evidence.

20. Release review evidence.

**66.3. Evidence status**

Evidence phải có trạng thái tối thiểu:

1.  EVIDENCE_PENDING.

2.  EVIDENCE_SUBMITTED.

3.  EVIDENCE_ACCEPTED.

4.  EVIDENCE_REJECTED.

5.  EVIDENCE_NEEDS_RETEST.

6.  EVIDENCE_EXPIRED.

7.  EVIDENCE_SUPERSEDED.

8.  EVIDENCE_BLOCKED.

9.  EVIDENCE_OWNER_REVIEW_REQUIRED.

Chỉ **EVIDENCE_ACCEPTED** mới được dùng cho PASS.

Evidence pending không được dùng để gọi PASS.

Evidence rejected không được dùng cho release.

Evidence expired phải retest hoặc re-accept.

**66.4. Evidence phải có metadata**

Mỗi evidence record cần có:

1.  Evidence ID.

2.  Pack ID.

3.  Smoke ID hoặc Gate ID.

4.  Rule ID nếu áp dụng.

5.  Environment.

6.  Time window.

7.  Source system.

8.  Owner source.

9.  Test result.

10. Data quality status.

11. Reviewer.

12. Review timestamp.

13. Acceptance status.

14. Correlation ID.

15. Audit reference.

16. Notes nếu có.

17. Retest reference nếu có.

Không có metadata thì evidence chưa đủ chuẩn governance.

**67. DATA QUALITY DONE GATE**

**67.1. Điều kiện Data Quality Done Gate**

Data Quality Done Gate chỉ PASS khi:

1.  Ads spend source hợp lệ.

2.  Campaign/adset/ad identity hợp lệ.

3.  Channel event qua PACK-06.

4.  AI event qua PACK-05 nếu dùng.

5.  Event dedup pass.

6.  Spam/bot suppression pass.

7.  Privacy guard pass.

8.  Missing required field được xử lý.

9.  Quote/order linkage pass.

10. Payment/COD/revenue linkage pass nếu dùng.

11. Attribution conflict được xử lý hoặc đưa vào pending/excluded.

12. Revenue exclusion hoạt động.

13. Dashboard phân lớp dữ liệu đúng.

14. Evidence accepted.

**67.2. Data Quality Fail Gate**

Data Quality phải FAIL nếu:

1.  Spend source không hợp lệ.

2.  Campaign mapping thiếu.

3.  Channel trace thiếu.

4.  Event duplicate chưa xử lý.

5.  Spam/bot chưa loại.

6.  Privacy-blocked event vẫn dùng.

7.  Quote/order linkage đứt.

8.  Revenue pending bị tính verified.

9.  Attribution conflict chưa xử lý nhưng vẫn gán nguồn.

10. Excluded revenue vẫn đi vào ROAS.

11. Dashboard không hiển thị warning.

12. Evidence thiếu hoặc rejected.

**68. ATTRIBUTION DONE GATE**

**68.1. Điều kiện Attribution Done Gate**

Attribution Done Gate chỉ PASS khi:

1.  Attribution model được khai báo.

2.  Touchpoint chain có đủ dữ liệu.

3.  Customer/session/order linkage hợp lệ.

4.  Source classification rõ Paid/Organic/CRM/Diamond/Live/Mixed/Unknown.

5.  Conflict detection hoạt động.

6.  Conflict resolution rule được owner phê duyệt nếu dùng.

7.  Attribution result có evidence.

8.  Revenue không bị tính trùng nhiều nguồn.

9.  Dashboard hiển thị conflict/pending/excluded đúng.

10. Evidence accepted.

**68.2. Attribution Fail Gate**

Attribution phải FAIL nếu:

1.  Không có attribution model.

2.  Missing data bị gán Organic mặc định.

3.  Ads revenue được kết luận khi thiếu campaign/ad context.

4.  Diamond revenue được kết luận khi thiếu referral bind.

5.  CRM revenue bị gộp vào Ads revenue không có rule.

6.  Live revenue được gán khi thiếu live session identity.

7.  Một order được tính trùng nhiều nguồn.

8.  Conflict chưa xử lý nhưng vẫn đưa vào source ROAS.

9.  Attribution result thiếu evidence.

10. Owner rule thiếu hoặc hết hiệu lực.

**69. VERIFIED REVENUE DONE GATE**

**69.1. Điều kiện Verified Revenue Done Gate**

Verified Revenue Done Gate chỉ PASS khi:

1.  Có official order/order_code.

2.  Có Customer Confirmation nếu policy yêu cầu.

3.  Có payment/COD/delivery status đạt điều kiện.

4.  Có revenue owner confirmation.

5.  Có refund/cancel/return exclusion check.

6.  Có complaint/risk exclusion check nếu policy yêu cầu.

7.  Có revenue class rõ.

8.  Có revenue basis rõ.

9.  Có attribution status.

10. Có data quality pass.

11. Có evidence accepted.

**69.2. Verified Revenue Fail Gate**

Verified Revenue phải FAIL nếu:

1.  Không có official order.

2.  Không có order_code.

3.  Payment pending bị tính paid revenue.

4.  COD pending bị tính COD success.

5.  Delivery pending bị tính delivered revenue.

6.  Revenue pending bị tính verified revenue.

7.  Refund/return/cancel chưa xử lý.

8.  Test/internal/sample order bị tính vào ROAS khi policy loại.

9.  Revenue source không phải owner runtime.

10. Evidence thiếu hoặc không accepted.

**70. DASHBOARD DONE GATE**

**70.1. Điều kiện Dashboard Done Gate**

Dashboard Done Gate chỉ PASS khi:

1.  Dashboard phân biệt raw/clean/verified/excluded/pending/missing/conflict.

2.  ROAS có revenue basis.

3.  CPA có conversion basis.

4.  AOV có order/revenue basis.

5.  Funnel không nhảy tầng.

6.  Data Quality status hiển thị rõ.

7.  Attribution status hiển thị rõ.

8.  Revenue verification status hiển thị rõ.

9.  Risk warning hiển thị rõ.

10. Scale/Stop status hiển thị rõ.

11. Owner Review Queue hoạt động.

12. Dashboard snapshot evidence accepted.

**70.2. Dashboard Fail Gate**

Dashboard phải FAIL nếu:

1.  Gộp mọi doanh thu thành một số tổng không rõ class.

2.  Hiển thị ROAS chính thức khi revenue chưa verified.

3.  Hiển thị CPA không có conversion basis.

4.  Hiển thị AOV không có order/revenue basis.

5.  Không hiển thị pending revenue.

6.  Không hiển thị excluded revenue.

7.  Không hiển thị attribution conflict.

8.  Không hiển thị data quality warning.

9.  Không hiển thị Sale Lock/stock/sellable risk.

10. Không có evidence snapshot.

11. Dashboard được dùng scale khi chưa READY_FOR_DECISION.

**71. SCALE GATE DONE / FAIL**

**71.1. Điều kiện Scale Gate Done**

Scale Gate chỉ PASS khi:

1.  Data Quality PASS.

2.  Attribution PASS.

3.  Verified Revenue PASS.

4.  ROAS đạt ngưỡng owner policy.

5.  CPA đạt ngưỡng owner policy.

6.  AOV đạt ngưỡng owner policy nếu dùng.

7.  COD/payment fail trong giới hạn.

8.  Refund/return trong giới hạn.

9.  Complaint trong giới hạn.

10. Privacy/claim incident không mở.

11. SKU hero sellable.

12. Stock đủ hoặc có constraint rõ.

13. Sale Lock/Recall không ảnh hưởng SKU.

14. Fulfillment/CSKH đáp ứng.

15. AI/human handoff không quá tải.

16. Dashboard READY_FOR_DECISION.

17. Owner approval có hiệu lực.

18. Scale evidence accepted.

**71.2. Scale Gate Fail**

Scale Gate phải FAIL hoặc BLOCKED khi:

1.  Data quality fail.

2.  Attribution conflict unresolved.

3.  Revenue chưa verified.

4.  ROAS không đáng tin cậy.

5.  CPA vượt ngưỡng.

6.  COD/payment fail cao.

7.  Refund/return cao.

8.  Complaint tăng cao.

9.  Privacy/claim incident mở.

10. Hero SKU hết hàng.

11. SKU not sellable.

12. Sale Lock/Recall active.

13. Fulfillment quá tải.

14. CSKH quá tải.

15. AI/human handoff quá tải.

16. Owner approval thiếu.

17. Dashboard mismatch.

18. Evidence thiếu hoặc rejected.

**72. STOP / PAUSE GATE DONE / FAIL**

**72.1. Điều kiện Stop/Pause Gate Done**

Stop/Pause Gate được xem là completed khi:

1.  Trigger reason được xác định.

2.  Campaign/adset/ad/page/live scope rõ.

3.  Risk metric được ghi nhận.

4.  Dashboard snapshot có evidence.

5.  Data quality state rõ.

6.  Attribution state rõ.

7.  Revenue state rõ.

8.  Stock/sellable/sale lock state rõ.

9.  Complaint/claim/privacy state rõ.

10. Fulfillment state rõ nếu liên quan.

11. Owner decision hoặc policy auto-stop rule có hiệu lực.

12. Pause/stop/resume condition được ghi nhận.

13. Audit/evidence accepted.

**72.2. Stop/Pause Gate Fail**

Stop/Pause Gate phải FAIL nếu:

1.  Risk trigger không được ghi nhận.

2.  Campaign có P0 risk nhưng vẫn Scale Allowed.

3.  Privacy incident không chặn scale.

4.  Claim/safety incident không chặn scale.

5.  Sale Lock active nhưng campaign không pause/stop.

6.  SKU not sellable nhưng campaign vẫn scale.

7.  COD/payment fail cao nhưng không cảnh báo.

8.  Complaint spike không vào risk dashboard.

9.  Owner stop request không được ghi nhận.

10. Evidence thiếu hoặc rejected.

**73. RELEASE CONTROL GOVERNANCE**

**73.1. PACK-07 không được Release Ready chỉ vì tài liệu xong**

Hoàn tất tài liệu PACK-07 không đồng nghĩa release.

PACK-07 chỉ được xem là Release Ready khi có đủ:

1.  Implementation hoàn tất theo governance.

2.  Smoke pass.

3.  Data Quality pass.

4.  Attribution pass.

5.  Verified Revenue linkage pass.

6.  Dashboard pass.

7.  Scale Gate pass.

8.  Stop/Pause Gate pass.

9.  Evidence accepted.

10. No P0 open.

11. Owner sign-off.

12. Release decision.

Trước khi đạt đủ các điều kiện trên, trạng thái vẫn là:

**GOVERNANCE_DOCUMENTATION_COMPLETE — PENDING IMPLEMENTATION / TEST / SMOKE / EVIDENCE / OWNER SIGN-OFF / RELEASE DECISION**

**73.2. Release status registry**

Các trạng thái release tối thiểu:

1.  RELEASE_NOT_STARTED.

2.  DOCUMENTATION_COMPLETE.

3.  IMPLEMENTATION_PENDING.

4.  IMPLEMENTATION_IN_PROGRESS.

5.  IMPLEMENTATION_COMPLETE_PENDING_TEST.

6.  SMOKE_PENDING.

7.  SMOKE_FAILED.

8.  SMOKE_PASS_PENDING_EVIDENCE.

9.  EVIDENCE_PENDING.

10. EVIDENCE_REJECTED.

11. EVIDENCE_ACCEPTED.

12. OWNER_REVIEW_PENDING.

13. OWNER_SIGNED_OFF.

14. RELEASE_DECISION_PENDING.

15. RELEASE_APPROVED.

16. RELEASE_BLOCKED.

17. RELEASE_ROLLBACK_REQUIRED nếu có sự cố sau release.

PACK-07 không được nhảy trạng thái.

**73.3. Release Blockers**

Các blocker P0:

1.  Không có Ads spend source hợp lệ.

2.  Không có campaign/adset/ad mapping.

3.  Không có PACK-06 channel trace.

4.  Không có PACK-05 AI event trace khi đo AI conversion.

5.  Không có quote/order/revenue linkage.

6.  Không có verified revenue event.

7.  Không có attribution rule.

8.  Attribution conflict chưa xử lý.

9.  Data quality fail.

10. Dashboard không phân biệt raw/clean/verified/excluded/pending.

11. ROAS tính từ revenue pending.

12. Excluded revenue vẫn vào ROAS.

13. Duplicate event chưa xử lý.

14. Privacy/claim incident chưa xử lý.

15. Scale Gate PASS khi thiếu owner approval.

16. Stop/Pause Gate không kích hoạt khi có P0 risk.

17. Evidence thiếu hoặc rejected.

18. P0 issue còn mở.

Chỉ cần một P0 blocker còn mở thì PACK-07 không được Release Approved.

**74. ROLLBACK / RECOVERY GOVERNANCE**

**74.1. Rollback không được xóa lịch sử đo lường**

Nếu PACK-07 dashboard, attribution hoặc ROAS bị lỗi, rollback không được xóa event lịch sử.

Rollback chỉ được:

1.  Dừng dùng metric lỗi cho decision.

2.  Đưa dashboard về trạng thái warning.

3.  Khóa Scale Gate.

4.  Chuyển owner review.

5.  Chạy lại data quality.

6.  Chạy lại attribution nếu rule sửa.

7.  Rebuild projection nếu cần.

8.  Gắn evidence mới.

9.  Ghi nhận audit.

Không được sửa tay số liệu cũ để làm đẹp dashboard.

Không được xóa dấu vết conflict.

Không được xóa event bị excluded.

**74.2. Khi nào cần rollback**

Rollback hoặc recovery bắt buộc khi:

1.  ROAS tính sai revenue basis.

2.  Pending revenue bị tính verified.

3.  Campaign attribution sai.

4.  Revenue bị tính trùng nhiều nguồn.

5.  Excluded revenue vào ROAS.

6.  Spend import trùng.

7.  Dashboard gộp sai dữ liệu.

8.  Scale Gate PASS sai.

9.  Stop Gate không kích hoạt khi có P0 risk.

10. Privacy/claim incident liên quan đo lường.

11. Owner yêu cầu.

**74.3. Recovery Done Gate**

Recovery chỉ done khi:

1.  Nguyên nhân lỗi được xác định.

2.  Dữ liệu ảnh hưởng được khoanh vùng.

3.  Metric bị lỗi được đánh dấu.

4.  Dashboard được cảnh báo hoặc tạm khóa.

5.  Data quality được chạy lại.

6.  Attribution được chạy lại nếu cần.

7.  Revenue basis được kiểm tra lại.

8.  Scale/Stop decision bị ảnh hưởng được review.

9.  Evidence mới accepted.

10. Owner sign-off recovery.

**75. SECURITY / PRIVACY / CLAIM CONTROL TRONG PACK-07**

**75.1. PACK-07 phải tôn trọng privacy**

PACK-07 không được public dữ liệu cá nhân của khách.

Dashboard chỉ được hiển thị dữ liệu theo quyền.

Các dữ liệu cần kiểm soát:

1.  Tên khách hàng.

2.  Số điện thoại.

3.  Địa chỉ.

4.  Nội dung Messenger.

5.  Thông tin đơn hàng cá nhân.

6.  Thông tin thanh toán.

7.  Tình trạng khiếu nại.

8.  Lịch sử mua hàng.

9.  Member status.

10. Referral relationship.

PACK-07 chỉ đo lường theo identity được phép và policy cho phép.

**75.2. Privacy incident chặn scale**

Nếu có privacy incident, PACK-07 phải:

1.  Đánh dấu incident.

2.  Chặn scale nếu incident P0.

3.  Đưa vào Risk Dashboard.

4.  Gửi Owner Review.

5.  Giữ evidence.

6.  Không che cảnh báo bằng KPI tốt.

Trạng thái:

**PRIVACY_INCIDENT_OPEN — SCALE_BLOCKED**

**75.3. Claim incident chặn scale**

Nếu Ads/Live/AI/CRM có claim/safety incident liên quan nội dung không được phép, PACK-07 phải chặn scale theo policy.

Không được scale campaign có claim risk chỉ vì ROAS đẹp.

Trạng thái:

**CLAIM_INCIDENT_OPEN — SCALE_BLOCKED / STOP_REQUIRED**

**76. ACCESS CONTROL / ROLE GOVERNANCE**

**76.1. Quyền xem dashboard**

PACK-07 phải phân quyền xem dữ liệu.

Nhóm quyền tối thiểu:

1.  Owner view.

2.  Ads operator view.

3.  Marketing analyst view.

4.  Finance/revenue view nếu được phép.

5.  CSKH/risk view nếu cần.

6.  Read-only auditor view.

7.  Restricted privacy view.

Không phải ai cũng được xem dữ liệu khách hàng, doanh thu, order, payment hoặc member/referral.

**76.2. Quyền quyết định**

Các hành động cần quyền:

1.  Approve attribution model.

2.  Approve revenue basis.

3.  Approve manual spend.

4.  Approve manual correction.

5.  Approve scale.

6.  Approve stop/pause.

7.  Approve resume.

8.  Approve override.

9.  Accept evidence.

10. Close P0 issue.

11. Release approval.

Không được để dashboard user tự thay đổi rule nguồn doanh thu nếu không có quyền.

**77. PACK-07 FINAL DONE GATE**

**77.1. Điều kiện PACK-07 Documentation Done**

PACK-07 được xem là hoàn tất tài liệu khi có đủ 4 phần:

1.  PHẦN 1/4 — Ads Measurement Principles / Source-of-Truth Boundary / Dependency.

2.  PHẦN 2/4 — Event Taxonomy / Attribution Model / Funnel Metrics / Verified Revenue Rules.

3.  PHẦN 3/4 — Dashboard / KPI / ROAS / CPA / AOV / Scale Gate / Stop Gate / Owner Decision.

4.  PHẦN 4/4 — Smoke Matrix / Done Gate / Fail Gate / Release Control / Final Conclusion.

Trạng thái tài liệu:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

**77.2. Điều kiện PACK-07 Implementation Done**

Implementation Done chỉ được gọi khi:

1.  Dev đã triển khai theo PACK-07.

2.  Không tạo parallel source-of-truth.

3.  Không tự tính revenue ngoài owner runtime.

4.  Không tự đọc raw Facebook event để đo production.

5.  Không tự xác nhận payment/COD/delivery.

6.  Không tự sync MISA.

7.  Không tự scale Ads khi thiếu owner decision.

8.  Event taxonomy vận hành đúng.

9.  Data quality vận hành đúng.

10. Attribution vận hành đúng.

11. Dashboard vận hành đúng.

12. Scale/Stop Gate vận hành đúng.

13. Audit/evidence vận hành đúng.

**77.3. Điều kiện PACK-07 Smoke Done**

Smoke Done chỉ được gọi khi:

1.  ADS-SMK-001 đến ADS-SMK-024 được test.

2.  Positive path pass.

3.  Negative path pass.

4.  No P0 smoke fail.

5.  Retest pass nếu có lỗi.

6.  Evidence accepted cho từng smoke.

7.  Owner review pass.

**77.4. Điều kiện PACK-07 ROAS PASS**

ROAS PASS chỉ được gọi khi:

1.  Ads spend source hợp lệ.

2.  Campaign/adset/ad mapping hợp lệ.

3.  Attribution pass.

4.  Verified revenue pass.

5.  Revenue exclusion pass.

6.  Data quality pass.

7.  Dashboard hiển thị revenue basis rõ.

8.  Pending/excluded/conflict data không bị tính sai.

9.  Evidence accepted.

10. Owner sign-off.

Không có Verified Revenue thì không có ROAS PASS.

Không có Data Quality PASS thì không có ROAS PASS.

Không có Attribution PASS thì không có source ROAS PASS.

**77.5. Điều kiện PACK-07 Scale PASS**

Scale PASS chỉ được gọi khi:

1.  ROAS PASS.

2.  CPA đạt owner threshold.

3.  AOV đạt owner threshold nếu dùng.

4.  Stock/sellable pass.

5.  Sale Lock/Recall clear.

6.  Fulfillment/CSKH capacity pass.

7.  Payment/COD fail trong giới hạn.

8.  Refund/return trong giới hạn.

9.  Complaint/risk trong giới hạn.

10. Privacy/claim incident không mở.

11. Dashboard READY_FOR_DECISION.

12. Owner approval có hiệu lực.

13. Scale evidence accepted.

Không có owner approval thì không có Scale PASS.

**77.6. Điều kiện PACK-07 Release Ready**

Release Ready chỉ được gọi khi:

1.  Documentation complete.

2.  Implementation complete.

3.  Smoke pass.

4.  Data Quality Done Gate pass.

5.  Attribution Done Gate pass.

6.  Verified Revenue Done Gate pass.

7.  Dashboard Done Gate pass.

8.  Scale Gate pass nếu release dùng cho scale decision.

9.  Stop/Pause Gate pass.

10. Evidence accepted.

11. No P0 open.

12. Security/privacy/claim review pass.

13. Owner sign-off.

14. Release decision approved.

**78. PACK-07 FAIL GATE TỔNG THỂ**

PACK-07 phải FAIL hoặc BLOCKED nếu có bất kỳ điều kiện sau:

1.  Tự tính revenue từ comment/inbox/quote/cart.

2.  Tính ROAS từ revenue chưa verified.

3.  Tính source ROAS khi attribution conflict chưa xử lý.

4.  Gán Organic mặc định cho missing campaign data.

5.  Gán Diamond revenue khi thiếu referral bind.

6.  Gộp CRM revenue vào Ads revenue không có rule.

7.  Dùng raw Facebook event thiếu PACK-06 trace.

8.  Đo AI performance thiếu PACK-05 event.

9.  Gọi cart draft là official order.

10. Gọi payment pending là paid revenue.

11. Gọi COD pending là COD successful revenue.

12. Không loại refund/cancel/return khỏi ROAS theo policy.

13. Không chống trùng event.

14. Không hiển thị data quality warning.

15. Dashboard che pending/excluded/missing/conflict data.

16. Scale khi SKU hero not sellable.

17. Scale khi Sale Lock/Recall active.

18. Scale khi fulfillment quá tải.

19. Scale khi privacy/claim incident mở.

20. Scale khi owner chưa approve.

21. Stop/Pause Gate không kích hoạt khi có P0 risk.

22. Evidence thiếu, rejected hoặc expired.

23. P0 issue còn mở.

24. Release decision thiếu.

Fail Gate phải ưu tiên an toàn hệ thống hơn chỉ số đẹp.

**79. PACK-07 HANDOFF CONTROL**

**79.1. Handoff sang triển khai**

Khi chuyển PACK-07 sang triển khai, dev phải nhận rõ:

1.  PACK-07 không phải nơi tạo source-of-truth mới.

2.  PACK-07 chỉ consume event/checkpoint từ owner pack.

3.  PACK-07 không tự tính giá, chiết khấu, quyền lợi, commission.

4.  PACK-07 không tự xác nhận payment/COD/delivery.

5.  PACK-07 không sync MISA.

6.  PACK-07 không tự scale Ads.

7.  PACK-07 phải fail-closed khi thiếu data.

8.  PACK-07 phải có smoke/evidence trước khi PASS.

**79.2. Handoff sang vận hành Marketing**

Marketing team chỉ được dùng dashboard PACK-07 theo trạng thái.

Nếu dashboard là RAW hoặc PENDING, chỉ dùng để quan sát.

Nếu dashboard là READY_FOR_DECISION, mới được dùng cho đề xuất scale/stop.

Nếu Scale Gate chưa PASS, không được tăng ngân sách production dựa trên cảm tính.

Nếu Stop Gate yêu cầu pause/stop, marketing phải xử lý theo owner policy.

**79.3. Handoff sang Owner Review**

Owner Review phải nhận được:

1.  Dashboard snapshot.

2.  Time window.

3.  Campaign/adset/ad scope.

4.  Revenue basis.

5.  Attribution model.

6.  Data quality status.

7.  ROAS/CPA/AOV.

8.  Risk status.

9.  Stock/sellable status.

10. Fulfillment capacity.

11. Scale/stop recommendation.

12. Evidence.

13. Pending issue.

14. Decision options.

Owner không nên quyết định chỉ dựa trên một chỉ số ROAS đơn lẻ.

**80. PACK-07 FINAL STATUS**

Sau khi hoàn tất 4 phần, trạng thái của PACK-07 là:

**PACK-07 — ADS / ROAS / ATTRIBUTION / VERIFIED REVENUE MEASUREMENT PACK**  
**ADS MEASUREMENT / CHANNEL ATTRIBUTION / VERIFIED REVENUE / SCALE GATE / DATA QUALITY GOVERNANCE**  
**V1.0 CLEAN FINAL**

Trạng thái tài liệu:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

Trạng thái triển khai:

**PENDING IMPLEMENTATION**

Trạng thái kiểm thử:

**PENDING TEST / SMOKE**

Trạng thái evidence:

**PENDING ACCEPTED EVIDENCE**

Trạng thái owner:

**PENDING OWNER SIGN-OFF**

Trạng thái release:

**PENDING RELEASE DECISION**

Trạng thái production:

**NOT PRODUCTION READY**

Trạng thái scale:

**NOT SCALE APPROVED UNTIL SCALE GATE PASS + OWNER APPROVAL**

Trạng thái ROAS:

**NOT ROAS PASS UNTIL VERIFIED REVENUE + ATTRIBUTION + DATA QUALITY + EVIDENCE PASS**

**KẾT LUẬN CUỐI PACK-07**

PACK-07 là pack quản trị đo lường Ads, ROAS, Attribution, Verified Revenue, Data Quality và Scale/Stop Decision cho hệ thống Ginsengfood.

PACK-07 không phải Facebook Gateway.

PACK-07 không phải AI Advisor.

PACK-07 không phải Commerce Runtime.

PACK-07 không phải Payment Core.

PACK-07 không phải MISA Integration.

PACK-07 không phải Finance Accounting.

PACK-07 không tự tạo đơn hàng.

PACK-07 không tự tạo doanh thu.

PACK-07 không tự xác nhận thanh toán.

PACK-07 không tự xác nhận COD thành công.

PACK-07 không tự xác nhận giao hàng.

PACK-07 không tự sync MISA.

PACK-07 không tự tính commission.

PACK-07 không tự scale Ads.

PACK-07 chỉ được đo lường khi có event hợp lệ, owner source hợp lệ, trace hợp lệ, attribution rule hợp lệ, verified revenue hợp lệ, data quality pass và evidence accepted.

Nguyên tắc khóa cuối cùng của PACK-07:

**Comment không phải đơn hàng.**  
**Inbox không phải doanh thu.**  
**Quote không phải revenue.**  
**Cart draft không phải official order.**  
**Order chưa chắc là paid revenue.**  
**Payment pending chưa phải verified revenue.**  
**Revenue pending không được tính ROAS chính thức.**  
**Attribution conflict không được gán nguồn cảm tính.**  
**Missing data không được tự suy diễn.**  
**ROAS đẹp nhưng dữ liệu chưa sạch thì không được scale.**  
**Data Quality đi trước Dashboard.**  
**Verified Revenue đi trước ROAS.**  
**Attribution Rule đi trước source revenue.**  
**Stock/Sellable/Sale Lock đi trước Scale.**  
**Fulfillment capacity đi trước Scale.**  
**Owner Approval đi trước Scale Production.**  
**Evidence Accepted đi trước PASS.**

PACK-07 hoàn tất về mặt governance/documentation, nhưng chưa được gọi là triển khai xong, chưa được gọi là ROAS PASS, chưa được gọi là Scale Approved, chưa được gọi là Release Approved và chưa được gọi là Production Ready nếu chưa có implementation, test, smoke, accepted evidence, owner sign-off và release decision.

**ĐỀ XUẤT TIẾP THEO**

Bước tiếp theo nên chuyển sang **PACK-08 — MC AI LIVE / LIVE SCRIPT / HOSTING ASSISTANT / REAL-TIME SALES ORCHESTRATION PACK**, vì PACK-07 đã khóa xong lớp đo lường Ads/ROAS/Attribution và cần tiếp tục khóa lớp vận hành MC AI Live theo đúng ranh giới: MC AI không tự tạo giá, không tự chốt doanh thu, không vượt PACK-05, không vượt PACK-06, không vượt Commerce Runtime, và toàn bộ live performance phải đo được qua PACK-07.
