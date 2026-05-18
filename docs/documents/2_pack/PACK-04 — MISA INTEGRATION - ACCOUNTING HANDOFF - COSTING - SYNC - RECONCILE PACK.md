**PACK-04 — MISA INTEGRATION / ACCOUNTING HANDOFF / COSTING / SYNC / RECONCILE PACK**

**MISA INTEGRATION LAYER / ACCOUNTING HANDOFF / COSTING CONTROL / SYNC GOVERNANCE**

**V1.0 CLEAN FINAL**

**PHẦN 1/4 — MISA INTEGRATION PRINCIPLES / ACCOUNTING TRUTH VS OPERATIONAL TRUTH / OWNER BOUNDARY / CHECKPOINT GOVERNANCE**

**1. MỤC TIÊU CỦA PACK-04**

PACK-04 xác lập lớp quản trị tích hợp giữa hệ thống vận hành Ginsengfood và phần mềm kế toán MISA.

PACK-04 không thay thế nghiệp vụ vận hành nhà máy, không điều khiển sản xuất, không điều khiển kho, không điều khiển QC, không điều khiển truy xuất, không điều khiển bán hàng.

PACK-04 có mục tiêu chính:

1.  Khóa ranh giới giữa dữ liệu vận hành và dữ liệu kế toán.

2.  Khóa nguyên tắc MISA chỉ nhận dữ liệu tại các checkpoint hợp lệ.

3.  Khóa lớp MISA Integration Layer là cổng tích hợp duy nhất với MISA.

4.  Khóa nguyên tắc mapping trước khi đồng bộ.

5.  Khóa nguyên tắc sync, retry, reconcile, audit, evidence.

6.  Khóa cách bàn giao dữ liệu kế toán từ các phiếu vận hành hợp lệ.

7.  Khóa nguyên tắc giá thành nội bộ và hạch toán kế toán không được trộn lẫn.

8.  Khóa điều kiện để một nghiệp vụ vận hành được phép tạo accounting handoff.

9.  Khóa nguyên tắc không module nào được sync MISA riêng lẻ.

10. Khóa nguyên tắc MISA không được sửa ngược sự thật vận hành của Ginsengfood.

PACK-04 là pack quản trị tích hợp kế toán, không phải pack viết code, không phải thiết kế giao diện, không phải tài liệu cấu trúc database chi tiết.

**2. PHẠM VI CỦA PACK-04**

PACK-04 quản trị các lớp sau:

**2.1. Accounting Handoff**

Accounting Handoff là quá trình chuyển một nghiệp vụ vận hành đã đủ điều kiện sang dạng dữ liệu kế toán có thể đồng bộ sang MISA.

Accounting Handoff chỉ được tạo khi nghiệp vụ vận hành đã đi qua đúng checkpoint.

Ví dụ:

- Nguyên liệu đầu vào đã được đánh giá đủ điều kiện ghi nhận.

- Nguyên liệu đã được xuất cho sản xuất theo lệnh hợp lệ.

- Thành phẩm đã được release và nhập kho thành phẩm.

- Nguyên liệu, bao bì, vật tư đã được duyệt hủy và ghi giảm hợp lệ.

- Chi phí sản xuất nội bộ đã đủ điều kiện tổng hợp theo checkpoint được duyệt.

Accounting Handoff không được tạo từ dữ liệu nháp, dữ liệu chưa duyệt, dữ liệu scan tạm, dữ liệu nhập tay rời, dữ liệu chưa đủ evidence hoặc dữ liệu chưa có mapping kế toán.

**2.2. MISA Integration Layer**

MISA Integration Layer là lớp tích hợp duy nhất giữa Ginsengfood và MISA.

Mọi dữ liệu đi MISA phải qua lớp này.

Không module vận hành nào được tự gọi MISA.

Không Field App, Admin UI, Production Module, Warehouse Module, QC Module, Traceability Module, Recall Module, AI Advisor, Commerce, Gateway, ADS, CRM hoặc Landing Page nào được sync MISA trực tiếp.

**2.3. Mapping Registry**

Mapping Registry là sổ đăng ký ánh xạ giữa mã nội bộ Ginsengfood và mã kế toán/MISA.

Không có mapping thì không sync.

Mapping Registry áp dụng tối thiểu cho:

- Kho.

- Vị trí kho nếu có.

- Nguyên liệu.

- Bao bì.

- Vật tư.

- Thành phẩm.

- SKU.

- Đơn vị tính.

- Nhà cung cấp.

- Khách hàng nếu có.

- Nhân sự/bộ phận nếu dùng tính chi phí.

- Tài khoản kế toán.

- Mã chi phí.

- Cost center.

- Đối tượng tập hợp chi phí.

- Mã nghiệp vụ kế toán.

- Mã chứng từ.

- Mã hạch toán liên quan.

**2.4. Sync Governance**

Sync Governance quản trị vòng đời đồng bộ:

- Chuẩn bị dữ liệu.

- Kiểm tra mapping.

- Kiểm tra điều kiện checkpoint.

- Tạo accounting handoff.

- Gửi sang MISA.

- Nhận trạng thái.

- Retry nếu lỗi có thể thử lại.

- Chặn nếu lỗi nghiệp vụ.

- Đưa vào manual review nếu cần.

- Reconcile giữa Ginsengfood và MISA.

- Lưu audit, evidence, log.

**2.5. Reconcile Governance**

Reconcile Governance là lớp đối chiếu giữa dữ liệu vận hành của Ginsengfood và dữ liệu kế toán trên MISA.

Reconcile không được sửa ngược Operational Truth.

Reconcile dùng để phát hiện:

- Chứng từ chưa sync.

- Chứng từ sync lỗi.

- Chứng từ lệch số lượng.

- Chứng từ lệch đơn vị tính.

- Chứng từ lệch mã kho.

- Chứng từ lệch tài khoản.

- Chứng từ lệch đối tượng chi phí.

- Chứng từ đã sync nhưng bị sửa thủ công bên MISA.

- Chứng từ bên MISA tồn tại nhưng không có nguồn vận hành hợp lệ.

**3. NGUYÊN TẮC CỐT LÕI**

**3.1. Operational Truth thuộc Ginsengfood**

Ginsengfood là nguồn sự thật cho toàn bộ nghiệp vụ vận hành.

Operational Truth bao gồm:

- Nguồn gốc vùng trồng.

- Thu hoạch Sâm Savigin.

- Nhập nguyên liệu.

- Kiểm tra đầu vào.

- Trạng thái lô nguyên liệu.

- READY_FOR_PRODUCTION.

- Demand Board.

- MRP Run.

- Material Requirement Board.

- Procurement Suppression.

- Production Order.

- Formula Resolution.

- Production BOM Snapshot.

- Material Issue.

- Theo dõi sản xuất.

- Theo dõi sấy thăng hoa.

- Đóng gói cấp 1.

- Đóng gói cấp 2.

- QC thành phẩm.

- Batch Release.

- Lệnh nhập kho thành phẩm.

- Inventory Ledger.

- Traceability.

- Recall.

- Sale Lock.

- Sellable Gate.

MISA không sở hữu các sự thật này.

MISA không quyết định các trạng thái này.

MISA không được dùng để thay đổi các trạng thái này.

**3.2. Accounting Truth thuộc MISA**

MISA là nguồn sự thật kế toán chính thức sau khi dữ liệu đã được đồng bộ hợp lệ.

Accounting Truth bao gồm:

- Chứng từ kế toán.

- Bút toán kế toán.

- Sổ kế toán.

- Tài khoản kế toán.

- Hạch toán nhập kho.

- Hạch toán xuất kho.

- Hạch toán ghi giảm.

- Hạch toán giá thành nếu cấu hình áp dụng.

- Báo cáo kế toán.

- Báo cáo thuế nếu thuộc phạm vi MISA.

- Dữ liệu tài chính chính thức theo chuẩn kế toán.

Ginsengfood không thay thế MISA để trở thành phần mềm kế toán chính thức.

Ginsengfood chỉ tạo nguồn dữ liệu vận hành và accounting handoff đủ điều kiện để MISA ghi nhận.

**3.3. Không trộn Operational Truth và Accounting Truth**

Operational Truth và Accounting Truth phải được phân tách rõ.

Một nghiệp vụ có thể đúng về vận hành nhưng chưa đủ điều kiện kế toán.

Một chứng từ có thể tồn tại bên MISA nhưng không được phép sửa ngược nghiệp vụ vận hành nếu không có quy trình reconcile và owner review.

Ví dụ:

- Một batch đã QC_PASS nhưng chưa RELEASED thì chưa được nhập kho thành phẩm.

- Một batch đã RELEASED nhưng chưa Warehouse Receipt Confirmed thì inventory thành phẩm chưa tăng.

- Một phiếu xuất nguyên liệu cho sản xuất chưa được xác nhận kế toán thì chưa tạo handoff kế toán.

- Một dữ liệu nhà cung cấp chưa có mapping MISA thì không được sync chính thức.

- Một chứng từ ghi giảm chưa có Disposal Approval thì không được gửi sang MISA.

**4. RANH GIỚI CHỦ SỞ HỮU DỮ LIỆU**

**4.1. PACK-01 giữ Operational Core Truth**

PACK-01 giữ sự thật vận hành chuỗi nhà máy.

PACK-01 quyết định:

- Trạng thái lô nguyên liệu.

- Trạng thái readiness.

- Trạng thái sản xuất.

- Trạng thái QC.

- Trạng thái release.

- Trạng thái nhập kho thành phẩm.

- Inventory ledger vận hành.

- Truy xuất nguồn gốc.

- Recall.

- Sale Lock.

- Sellable Gate.

PACK-04 chỉ nhận checkpoint hợp lệ từ PACK-01.

PACK-04 không được thay đổi logic vận hành của PACK-01.

**4.2. PACK-02 giữ Product / SKU / Formula Truth**

PACK-02 giữ sự thật sản phẩm, SKU, nguyên liệu, công thức, formula version và cấu hình vận hành sản phẩm.

PACK-02 quyết định:

- SKU canonical.

- Ingredient canonical.

- Recipe/BOM version.

- G1 Approved Operational Formula.

- Formula Version sau G1.

- Product Master.

- Packaging config.

- Print config.

- QC config.

- HSD config.

- Trade item config nếu có.

- Public Product Knowledge khác Recipe/BOM nội bộ.

PACK-04 chỉ sử dụng Product/SKU/Ingredient data sau khi đã được mapping kế toán hợp lệ.

PACK-04 không được tự tạo mã sản phẩm, mã nguyên liệu, mã thành phẩm, mã bao bì hoặc mã vật tư để sync MISA nếu chưa có mapping.

**4.3. PACK-03 giữ Demand / MRP / Procurement / Stock Planning Truth**

PACK-03 giữ sự thật về demand, MRP, formula scaling, procurement planning, stock alert, threshold, suppression và disposal/write-off control.

PACK-03 quyết định:

- Demand Board.

- Formula Resolution cho sản xuất.

- Production BOM Snapshot đã scale.

- MRP Run.

- Material Requirement Board.

- Procurement Suppression.

- Harvest Requirement cho Sâm Savigin.

- Purchase Requirement cho nguyên liệu mua ngoài.

- Packaging Requirement.

- Dynamic suppression threshold.

- Strategic reserve cho Sâm Savigin.

- Disposal Request.

- Write-off Control.

PACK-04 chỉ nhận các checkpoint đã đủ điều kiện kế toán từ PACK-03 và các phiếu liên quan.

PACK-04 không được biến nhu cầu mua sắm, demand hoặc MRP result thành chứng từ kế toán nếu chưa có nghiệp vụ thực tế được xác nhận.

**4.4. PACK-04 giữ MISA Integration / Accounting Handoff Truth**

PACK-04 giữ sự thật về:

- Mapping với MISA.

- Accounting handoff.

- Sync status.

- Sync retry.

- Sync error.

- Sync evidence.

- Reconcile.

- Manual review.

- MISA checkpoint governance.

- MISA integration layer.

- Điều kiện dữ liệu được phép đi MISA.

PACK-04 không giữ sự thật sản xuất, công thức, QC, trace, recall, sale lock hoặc sellable gate.

**5. NGUYÊN TẮC MISA KHÔNG ĐIỀU KHIỂN NGHIỆP VỤ NHÀ MÁY**

MISA không được điều khiển các nghiệp vụ sau:

1.  Không điều khiển Demand Board.

2.  Không điều khiển MRP.

3.  Không điều khiển Formula Resolution.

4.  Không điều khiển Production BOM Snapshot.

5.  Không điều khiển công thức G1.

6.  Không điều khiển Formula Version.

7.  Không điều khiển Production Order.

8.  Không điều khiển cấp nguyên liệu cho sản xuất.

9.  Không điều khiển QC đầu vào.

10. Không điều khiển QC sau sấy.

11. Không điều khiển QC thành phẩm.

12. Không quyết định Batch Release.

13. Không quyết định READY_FOR_PRODUCTION.

14. Không quyết định READY_FOR_PACKAGING.

15. Không quyết định Warehouse Receipt Confirmed.

16. Không quyết định Inventory Ledger vận hành.

17. Không quyết định Traceability.

18. Không quyết định Recall.

19. Không quyết định Sale Lock.

20. Không quyết định Sellable Gate.

21. Không quyết định AI được bán sản phẩm nào.

22. Không quyết định Commerce được quote sản phẩm nào.

23. Không quyết định Gateway được mở sản phẩm nào.

24. Không quyết định Landing Page được hiển thị sản phẩm nào.

MISA chỉ ghi nhận kế toán sau khi hệ thống vận hành Ginsengfood đã tạo checkpoint hợp lệ.

**6. NGUYÊN TẮC KHÔNG MODULE NÀO SYNC MISA RIÊNG LẺ**

Mọi tích hợp MISA phải đi qua MISA Integration Layer.

Các module sau không được sync MISA trực tiếp:

- Source Origin.

- Raw Material Intake.

- Incoming QC.

- Raw Material Lot.

- Product Master.

- Formula.

- Demand Board.

- MRP.

- Procurement.

- Production.

- Packaging.

- Printing.

- QC.

- Release.

- Warehouse.

- Inventory.

- Traceability.

- Recall.

- Sale Lock.

- Commerce.

- AI Advisor.

- Facebook Gateway.

- ADS.

- MC AI.

- CRM.

- Landing Page.

- Payment.

- Shipping.

- Finance/KPI/Reward nếu chưa qua pack owner tương ứng.

Lý do khóa nguyên tắc này:

1.  Tránh nhiều nguồn sync gây lệch dữ liệu.

2.  Tránh mỗi module tự map mã MISA theo cách riêng.

3.  Tránh sync trùng chứng từ.

4.  Tránh chứng từ kế toán không có nguồn vận hành hợp lệ.

5.  Tránh MISA bị dùng như nơi lưu dữ liệu vận hành thô.

6.  Tránh sai lệch giữa inventory vận hành và số liệu kế toán.

7.  Tránh mất audit trail.

8.  Tránh không reconcile được.

9.  Tránh dev tạo đường tắt kỹ thuật làm hỏng kiến trúc tổng thể.

10. Tránh phát sinh chi phí sửa chữa lớn khi mở rộng hệ thống.

**7. NGUYÊN TẮC CHECKPOINT GOVERNANCE**

**7.1. Checkpoint là điểm giao hợp lệ giữa vận hành và kế toán**

Checkpoint là điểm mà một nghiệp vụ vận hành đã đạt đủ điều kiện để có thể tạo accounting handoff.

Một checkpoint hợp lệ phải có:

1.  Nghiệp vụ nguồn rõ ràng.

2.  Owner nghiệp vụ rõ ràng.

3.  Trạng thái nghiệp vụ hợp lệ.

4.  Phiếu vận hành hợp lệ nếu có.

5.  Số lượng hợp lệ.

6.  Đơn vị tính hợp lệ.

7.  Đối tượng hàng hóa/vật tư/thành phẩm hợp lệ.

8.  Kho hoặc location hợp lệ nếu có.

9.  Mapping MISA hợp lệ.

10. Evidence hợp lệ.

11. Audit hợp lệ.

12. Idempotency key hoặc cơ chế chống sync trùng.

13. Sync policy hợp lệ.

14. Quyền phê duyệt hợp lệ nếu nghiệp vụ yêu cầu.

15. Không có trạng thái bị chặn như HOLD, REJECTED, VOIDED, CANCELLED, PENDING_REVIEW.

**7.2. Không có checkpoint thì không accounting handoff**

Không được tạo accounting handoff từ:

- Dữ liệu nháp.

- Dữ liệu scan tạm.

- Dữ liệu nhập tay chưa xác nhận.

- Demand chưa duyệt.

- MRP run chưa duyệt.

- Purchase requirement chưa thành nghiệp vụ nhập thực tế.

- QC chưa PASS.

- Batch chưa RELEASED.

- Lệnh nhập kho chưa xác nhận.

- Phiếu hủy chưa duyệt.

- Phiếu ghi giảm chưa thực hiện.

- Dữ liệu thiếu mapping MISA.

- Dữ liệu thiếu evidence.

- Dữ liệu thiếu audit.

- Dữ liệu đang tranh chấp.

- Dữ liệu đang reconcile lỗi.

- Dữ liệu thuộc recall/hold chưa xử lý xong nếu nghiệp vụ đó bị ảnh hưởng.

**7.3. Checkpoint không được dùng để bỏ qua nghiệp vụ**

Checkpoint chỉ là điểm bàn giao kế toán.

Checkpoint không được dùng để bỏ qua:

- QC.

- Release.

- Warehouse receipt.

- Material issue.

- Disposal approval.

- Write-off execution.

- Owner approval.

- Mapping registry.

- Evidence packet.

- Audit trail.

- Reconcile.

Nếu nghiệp vụ vận hành chưa hoàn tất, PACK-04 không được tạo cảm giác rằng nghiệp vụ đã hợp lệ chỉ vì cần đồng bộ kế toán.

**8. CÁC CHECKPOINT KẾ TOÁN NỀN TRONG PACK-04**

PACK-04 khóa các nhóm checkpoint nền sau.

**8.1. Raw Material Intake Approved Checkpoint**

Dùng cho nghiệp vụ nhập nguyên liệu đầu vào đã đủ điều kiện kế toán.

Checkpoint này gắn với:

- Phiếu đánh giá và nhập kho nguyên liệu đầu vào.

- Kết quả kiểm tra đầu vào.

- Supplier/source evidence.

- Lot information.

- Warehouse/location.

- Mapping nguyên liệu.

- Mapping nhà cung cấp nếu có.

- Mapping kho.

- Accounting handoff.

Checkpoint này không có nghĩa là nguyên liệu đã READY_FOR_PRODUCTION nếu quy trình readiness chưa hoàn tất.

**8.2. Material Issue Confirmed Checkpoint**

Dùng cho nghiệp vụ xuất nguyên liệu cho sản xuất.

Checkpoint này gắn với:

- Production Order hợp lệ.

- Production BOM Snapshot.

- Phiếu đề nghị cấp nguyên liệu.

- Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất.

- Phiếu kế toán xuất nguyên liệu cho sản xuất.

- Inventory ledger debit.

- Usage link vào batch/production order.

- Mapping nguyên liệu.

- Mapping kho.

- Mapping đối tượng tập hợp chi phí nếu có.

- Accounting handoff.

Checkpoint này không được tạo nếu nguyên liệu chưa được cấp phát hợp lệ hoặc đang nằm trong trạng thái không được xuất.

**8.3. Disposal Write-off Confirmed Checkpoint**

Dùng cho nghiệp vụ hủy/ghi giảm nguyên liệu, bao bì, vật tư hoặc hàng hóa không còn được tính vào tồn khả dụng.

Checkpoint này gắn với:

- Disposal Request.

- QA/Owner Review.

- Disposal Approval.

- Disposal Execution.

- Inventory Ledger Write-off.

- Phiếu ghi giảm tồn kho.

- Evidence hủy/ghi giảm.

- Mapping vật tư/nguyên liệu/bao bì.

- Mapping kho.

- Mapping tài khoản ghi giảm nếu có.

- Accounting handoff.

Checkpoint này không được tạo từ thao tác xóa tay tồn kho.

**8.4. Finished Goods Warehouse Receipt Confirmed Checkpoint**

Dùng cho nghiệp vụ nhập kho thành phẩm.

Checkpoint này gắn với:

- Production Order.

- Batch.

- QC thành phẩm.

- Batch Release.

- Lệnh nhập kho thành phẩm.

- Warehouse Receipt Confirmed.

- Finished Goods Inventory Ledger credit.

- SKU/thành phẩm mapping.

- Kho thành phẩm mapping.

- Costing data nếu có.

- Accounting handoff.

Checkpoint này chỉ được tạo sau khi thành phẩm đã RELEASED và lệnh nhập kho thành phẩm đã được xác nhận.

Packaging hoặc Printing không được tạo checkpoint nhập kho thành phẩm.

**8.5. Internal Costing Checkpoint**

Dùng cho nghiệp vụ tổng hợp chi phí sản xuất nội bộ nếu hệ thống kích hoạt quản trị giá thành.

Checkpoint này có thể nhận dữ liệu từ:

- Nguyên liệu xuất cho sản xuất.

- Bao bì xuất cho sản xuất.

- Vật tư phụ.

- Nhân công nếu có check-in/out được dùng cho costing.

- Công đoạn sản xuất.

- Hao hụt.

- Batch yield.

- QC result.

- Thành phẩm nhập kho.

- Cost center.

- Đối tượng tập hợp chi phí.

Internal Costing Checkpoint không tự động trở thành hạch toán chính thức nếu chưa qua mapping, approval và MISA handoff policy.

Giá thành nội bộ của Ginsengfood phục vụ quản trị vận hành.

Hạch toán chính thức thuộc MISA.

**8.6. Sales / Revenue / Discount / Commission Checkpoint**

Các checkpoint liên quan đến bán hàng, doanh thu, chiết khấu, hoa hồng, voucher, quyền lợi thành viên, Diamond referral, ROAS, KPI hoặc thuế không được mở rộng tùy tiện trong PACK-04 nếu chưa có owner pack liên quan.

Nhóm này chỉ được kết nối khi có pack tương ứng khóa nguồn sự thật và điều kiện hạch toán.

Nguyên tắc nền:

- Commerce Runtime Core giữ quote/order/payment/shipping/business program truth.

- Finance/KPI/Reward/Tax/Voucher pack giữ các rule tài chính liên quan nếu được kích hoạt.

- PACK-04 chỉ là lớp integration kế toán, không tự tính doanh thu, chiết khấu, hoa hồng hoặc quyền lợi thành viên.

- Không có checkpoint từ owner pack thì không sync MISA.

**9. PHIẾU VẬN HÀNH CÓ NGÕ KẾ TOÁN**

PACK-04 gắn chặt với các phiếu vận hành có khả năng tạo accounting handoff.

Các phiếu nền gồm:

1.  FRM-09 — Phiếu đánh giá và nhập kho nguyên liệu đầu vào.

2.  FRM-14 — Phiếu kế toán xuất nguyên liệu cho sản xuất.

3.  FRM-22 — Lệnh nhập kho thành phẩm.

4.  FRM-24 — Phiếu ghi giảm tồn kho / Inventory Write-off.

5.  FRM-25 — MISA Accounting Handoff Record.

Các phiếu liên quan có thể cung cấp evidence hoặc điều kiện nền:

1.  FRM-03 — Formula Resolution / Production BOM Snapshot Record.

2.  FRM-04 — MRP Run / Material Requirement Board.

3.  FRM-05 — Procurement Suppression Result.

4.  FRM-09 — Phiếu đánh giá và nhập kho nguyên liệu đầu vào.

5.  FRM-10 — Phiếu nhập bao bì / vật tư đóng gói.

6.  FRM-11 — Lệnh sản xuất.

7.  FRM-12 — Phiếu đề nghị cấp nguyên liệu cho sản xuất.

8.  FRM-13 — Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất.

9.  FRM-17 — Phiếu kiểm chất lượng sau sấy thăng hoa.

10. FRM-20 — Phiếu QC thành phẩm.

11. FRM-21 — Phiếu Batch Release.

12. FRM-23 — Phiếu yêu cầu hủy / ghi giảm nguyên liệu, bao bì, vật tư.

13. FRM-26 — Operational Evidence Packet.

14. FRM-27 — Operational Smoke Run Record.

Nguyên tắc bắt buộc:

- Phiếu kế toán không được tách khỏi nguồn nghiệp vụ.

- Phiếu kế toán không được nhập lại dữ liệu nền bằng tay nếu dữ liệu đã có từ phiếu trước.

- Phiếu kế toán phải kế thừa dữ liệu từ checkpoint hợp lệ.

- Phiếu kế toán phải có mapping MISA trước khi sync.

- Phiếu kế toán phải có audit và evidence.

- Phiếu kế toán không được tạo chứng từ nếu nghiệp vụ nguồn chưa hợp lệ.

**10. NGUYÊN TẮC DỮ LIỆU ĐƯỢC PHÉP ĐI MISA**

Một bản ghi được phép đi MISA khi thỏa toàn bộ điều kiện sau:

1.  Có nghiệp vụ nguồn hợp lệ.

2.  Có checkpoint hợp lệ.

3.  Có owner nghiệp vụ.

4.  Có trạng thái nghiệp vụ đạt điều kiện kế toán.

5.  Không bị hold/reject/void/cancel.

6.  Có mapping MISA đầy đủ.

7.  Có đơn vị tính hợp lệ.

8.  Có số lượng hợp lệ.

9.  Có kho/location hợp lệ nếu áp dụng.

10. Có đối tượng hàng hóa/vật tư/thành phẩm hợp lệ.

11. Có nhà cung cấp/khách hàng/đối tượng liên quan nếu nghiệp vụ yêu cầu.

12. Có tài khoản kế toán hoặc mã nghiệp vụ kế toán nếu nghiệp vụ yêu cầu.

13. Có audit trail.

14. Có evidence.

15. Có idempotency control.

16. Có sync policy.

17. Có quyền phê duyệt nếu nghiệp vụ cần duyệt.

18. Không vi phạm source-of-truth boundary.

19. Không tạo sync trùng.

20. Không mâu thuẫn với dữ liệu reconcile trước đó.

Nếu thiếu một trong các điều kiện trên, bản ghi không được sync chính thức sang MISA.

**11. NGUYÊN TẮC FAIL-CLOSED**

PACK-04 áp dụng nguyên tắc fail-closed.

Khi có lỗi hoặc thiếu điều kiện, hệ thống phải dừng sync thay vì tự đoán.

Các trường hợp phải fail-closed:

1.  Thiếu mapping MISA.

2.  Mapping bị trùng.

3.  Mapping hết hiệu lực.

4.  SKU chưa có mapping thành phẩm.

5.  Nguyên liệu chưa có mapping.

6.  Bao bì/vật tư chưa có mapping.

7.  Kho chưa có mapping.

8.  Nhà cung cấp chưa có mapping nếu nghiệp vụ cần.

9.  Đơn vị tính không khớp.

10. Số lượng âm bất thường.

11. Số lượng vượt nghiệp vụ nguồn.

12. Checkpoint chưa hợp lệ.

13. Evidence thiếu.

14. Audit thiếu.

15. Dữ liệu đang bị HOLD.

16. Dữ liệu đang bị REJECTED.

17. Dữ liệu đang bị VOIDED.

18. Dữ liệu đang bị CANCELLED.

19. Reconcile phát hiện lệch chưa xử lý.

20. Không xác định được owner phê duyệt.

Fail-closed không phải lỗi vận hành.

Fail-closed là cơ chế bảo vệ dữ liệu kế toán và dữ liệu vận hành.

**12. NGUYÊN TẮC IDEMPOTENCY VÀ CHỐNG SYNC TRÙNG**

Mỗi accounting handoff phải có cơ chế chống đồng bộ trùng.

Không được tạo nhiều chứng từ MISA cho cùng một nghiệp vụ nguồn nếu không có lý do hợp lệ và không có liên kết điều chỉnh.

Idempotency phải bảo vệ các trường hợp:

- Người dùng bấm sync nhiều lần.

- Worker chạy lại.

- MISA timeout nhưng đã nhận chứng từ.

- Callback chậm.

- Retry sau lỗi mạng.

- Một checkpoint được xử lý lại sau sự cố.

- Reconcile phát hiện chưa rõ trạng thái.

- Manual review cho phép gửi lại.

Nguyên tắc xử lý:

1.  Cùng một nghiệp vụ nguồn chỉ có một accounting handoff chính thức cho cùng một loại checkpoint.

2.  Retry không được tạo chứng từ mới nếu chứng từ cũ đã được MISA nhận.

3.  Nếu cần điều chỉnh, phải tạo nghiệp vụ điều chỉnh có liên kết với chứng từ gốc.

4.  Không xóa lịch sử sync.

5.  Không sửa lặng trạng thái sync đã có audit.

6.  Mọi thay đổi phải có log, reason và người/tiến trình thực hiện.

**13. NGUYÊN TẮC AUDIT VÀ EVIDENCE**

Mọi accounting handoff phải có audit và evidence.

Audit trả lời các câu hỏi:

- Ai tạo nghiệp vụ nguồn?

- Ai xác nhận nghiệp vụ?

- Ai phê duyệt?

- Dữ liệu đến từ phiếu nào?

- Dữ liệu đi qua checkpoint nào?

- Khi nào tạo accounting handoff?

- Khi nào sync MISA?

- Sync trạng thái gì?

- Có retry không?

- Có lỗi không?

- Ai xử lý lỗi?

- Có reconcile không?

- Reconcile kết quả gì?

Evidence trả lời các câu hỏi:

- Có phiếu vận hành không?

- Có bằng chứng QC không?

- Có bằng chứng release không?

- Có bằng chứng nhập kho không?

- Có bằng chứng xuất kho không?

- Có bằng chứng hủy/ghi giảm không?

- Có chứng từ hoặc phản hồi từ MISA không?

- Có log đối chiếu không?

- Có owner review nếu cần không?

Không có audit và evidence thì không được tính là checkpoint kế toán hoàn chỉnh.

**14. NGUYÊN TẮC GIÁ THÀNH NỘI BỘ VÀ HẠCH TOÁN CHÍNH THỨC**

Ginsengfood có thể quản trị giá thành nội bộ để phục vụ điều hành.

MISA giữ hạch toán kế toán chính thức.

Hai lớp này không được trộn lẫn.

**14.1. Giá thành nội bộ của Ginsengfood**

Giá thành nội bộ có thể dùng cho:

- Theo dõi chi phí sản xuất.

- Theo dõi chi phí nguyên liệu.

- Theo dõi chi phí bao bì.

- Theo dõi chi phí vật tư.

- Theo dõi chi phí nhân công nếu có.

- Theo dõi hao hụt.

- Theo dõi batch yield.

- So sánh chi phí giữa các batch.

- Ước tính biên lợi nhuận.

- Phục vụ dashboard quản trị.

- Phục vụ phân tích cải tiến sản xuất.

Giá thành nội bộ không tự động là sổ kế toán chính thức.

**14.2. Hạch toán chính thức của MISA**

Hạch toán chính thức thuộc MISA.

MISA dùng để:

- Ghi nhận chứng từ kế toán.

- Ghi nhận bút toán.

- Lập sổ kế toán.

- Lập báo cáo tài chính.

- Lập báo cáo thuế nếu áp dụng.

- Theo dõi giá trị hàng tồn kho theo chuẩn kế toán.

- Theo dõi chi phí theo tài khoản kế toán.

- Theo dõi đối tượng tập hợp chi phí nếu cấu hình.

Ginsengfood không được tự thay MISA quyết định bút toán kế toán chính thức nếu chưa qua MISA Integration Layer và mapping hợp lệ.

**15. NGUYÊN TẮC RECONCILE GIỮA GINSENGFOOD VÀ MISA**

Reconcile là bắt buộc để đảm bảo dữ liệu vận hành và kế toán không lệch nhau.

Reconcile phải kiểm tra tối thiểu:

1.  Nghiệp vụ nguồn.

2.  Checkpoint.

3.  Số chứng từ MISA.

4.  Trạng thái sync.

5.  Mã kho.

6.  Mã hàng.

7.  Đơn vị tính.

8.  Số lượng.

9.  Giá trị nếu có.

10. Ngày chứng từ.

11. Đối tượng liên quan.

12. Tài khoản kế toán nếu có.

13. Cost center nếu có.

14. Đối tượng tập hợp chi phí nếu có.

15. Trạng thái chứng từ bên MISA.

16. Lệch sửa tay bên MISA nếu phát hiện được.

17. Lệch chứng từ thiếu nguồn vận hành.

Reconcile không được tự sửa Operational Truth.

Nếu phát hiện lệch, phải đưa vào trạng thái review, có owner xử lý và evidence.

**16. QUY TẮC ƯU TIÊN KHI CÓ XUNG ĐỘT DỮ LIỆU**

Khi có xung đột giữa Ginsengfood và MISA, áp dụng nguyên tắc sau:

**16.1. Với dữ liệu vận hành**

Operational Core là nguồn đúng.

Ví dụ:

- Trạng thái batch.

- Trạng thái release.

- Trạng thái tồn kho vận hành.

- Trạng thái recall.

- Trạng thái sale lock.

- Traceability.

- Production BOM Snapshot.

- Material issue thực tế.

- Warehouse receipt thực tế.

MISA không được sửa ngược các dữ liệu này.

**16.2. Với dữ liệu kế toán**

MISA là nguồn kế toán chính thức.

Ví dụ:

- Số chứng từ kế toán.

- Bút toán.

- Tài khoản.

- Sổ kế toán.

- Báo cáo kế toán.

- Báo cáo thuế nếu có.

Ginsengfood không tự sửa sổ kế toán chính thức bên MISA ngoài quy trình tích hợp và reconcile.

**16.3. Với dữ liệu mapping**

Mapping Registry là nguồn kiểm soát ánh xạ.

Nếu mapping sai, phải sửa mapping theo quy trình owner review.

Không được sửa trực tiếp dữ liệu nguồn để ép khớp MISA.

Không được tạo mapping tạm không audit.

Không được sync bằng mã tự đoán.

**17. CÁC TRẠNG THÁI KHÔNG ĐƯỢC SYNC CHÍNH THỨC**

Dữ liệu thuộc các trạng thái sau không được sync MISA chính thức:

1.  DRAFT.

2.  PENDING_APPROVAL.

3.  PENDING_QC.

4.  QC_HOLD.

5.  QC_REJECTED.

6.  PENDING_RELEASE.

7.  RELEASE_REJECTED.

8.  PENDING_WAREHOUSE_RECEIPT.

9.  HOLD.

10. RECALL_HOLD.

11. SALE_LOCKED.

12. VOIDED.

13. CANCELLED.

14. DISPOSAL_REQUESTED nhưng chưa approved.

15. DISPOSAL_APPROVED nhưng chưa execution.

16. WRITE_OFF_PENDING.

17. MAPPING_MISSING.

18. MAPPING_CONFLICT.

19. RECONCILE_ERROR.

20. MANUAL_REVIEW_REQUIRED.

Các trạng thái trên có thể được ghi nhận trong hệ thống vận hành, nhưng không được chuyển thành chứng từ kế toán chính thức nếu chưa đủ điều kiện.

**18. QUY TẮC P0 CỦA PACK-04**

Các quy tắc sau là P0, không được vi phạm.

**P0-01 — MISA Integration Layer là cổng duy nhất**

Không module nào được sync MISA trực tiếp.

Mọi sync phải đi qua MISA Integration Layer.

**P0-02 — Không mapping thì không sync**

Nếu thiếu mapping hoặc mapping sai, dữ liệu phải fail-closed.

Không được tự đoán mã MISA.

**P0-03 — Operational Truth không bị MISA sửa ngược**

MISA không được sửa ngược production, QC, release, inventory ledger vận hành, trace, recall, sale lock hoặc sellable gate.

**P0-04 — Checkpoint hợp lệ mới được accounting handoff**

Không có checkpoint hợp lệ thì không được tạo accounting handoff.

**P0-05 — Không sync dữ liệu nháp**

Draft, pending, hold, rejected, voided, cancelled không được sync chính thức.

**P0-06 — Accounting handoff phải có audit và evidence**

Không audit, không evidence thì không được tính là đủ điều kiện kế toán.

**P0-07 — Chống sync trùng là bắt buộc**

Một nghiệp vụ nguồn không được tạo chứng từ trùng bên MISA.

Retry không được sinh chứng từ trùng.

**P0-08 — Reconcile là bắt buộc**

Mọi sync quan trọng phải có khả năng đối chiếu.

Không reconcile được thì không được gọi là hoàn tất tích hợp.

**P0-09 — Giá thành nội bộ không tự động là hạch toán chính thức**

Costing nội bộ phục vụ quản trị.

Hạch toán chính thức thuộc MISA.

**P0-10 — Không gọi Production Ready khi chưa có evidence**

PACK-04 ở tầng tài liệu không đồng nghĩa hệ thống đã production ready.

Không được gọi Gateway PASS, Completion PASS, Production Ready, Release Approved hoặc Go-live Approved nếu chưa có evidence, smoke, owner sign-off và release decision hợp lệ.

**19. DONE GATE CỦA PHẦN 1/4**

PHẦN 1/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa ranh giới Operational Truth và Accounting Truth.

2.  Đã khóa vai trò của Ginsengfood là nguồn sự thật vận hành.

3.  Đã khóa vai trò của MISA là nguồn sự thật kế toán chính thức.

4.  Đã khóa MISA không điều khiển nghiệp vụ nhà máy.

5.  Đã khóa MISA Integration Layer là cổng tích hợp duy nhất.

6.  Đã khóa không module nào sync MISA riêng lẻ.

7.  Đã khóa checkpoint governance.

8.  Đã khóa nguyên tắc không checkpoint thì không accounting handoff.

9.  Đã khóa nguyên tắc không mapping thì không sync.

10. Đã khóa fail-closed.

11. Đã khóa audit, evidence, idempotency.

12. Đã khóa nguyên tắc giá thành nội bộ khác hạch toán chính thức.

13. Đã khóa reconcile là bắt buộc.

14. Đã khóa các trạng thái không được sync chính thức.

15. Đã khóa các quy tắc P0 nền của PACK-04.

16. Chưa gọi Production Ready, Release Approved hoặc Go-live Approved.

**20. KẾT LUẬN PHẦN 1/4**

PACK-04 thiết lập lớp quản trị tích hợp MISA theo nguyên tắc: Ginsengfood giữ sự thật vận hành, MISA giữ sự thật kế toán chính thức, còn MISA Integration Layer là cổng kiểm soát duy nhất giữa hai hệ thống.

MISA không điều khiển nhà máy.

MISA không quyết định sản phẩm được sản xuất.

MISA không quyết định nguyên liệu được đưa vào sản xuất.

MISA không quyết định batch được release.

MISA không quyết định tồn kho vận hành.

MISA không quyết định sản phẩm được bán.

MISA chỉ nhận dữ liệu tại các checkpoint đã đủ điều kiện kế toán, có mapping, có audit, có evidence và đi qua lớp tích hợp được kiểm soát.

PHẦN 1/4 khóa nền nguyên tắc và owner boundary cho PACK-04.

PHẦN 2/4 sẽ tiếp tục khóa MISA Mapping Registry, Accounting Handoff Checkpoints, Costing Data và Form-to-MISA Matrix.

**PHẦN 2/4 — MISA MAPPING REGISTRY / ACCOUNTING HANDOFF CHECKPOINTS / COSTING DATA / FORM-TO-MISA MATRIX**

**21. MỤC TIÊU CỦA PHẦN 2/4**

PHẦN 2/4 khóa lớp mapping, checkpoint bàn giao kế toán, dữ liệu giá thành và ma trận phiếu vận hành có ngõ đi MISA.

Mục tiêu chính:

1.  Xác định nhóm dữ liệu bắt buộc phải mapping trước khi sync MISA.

2.  Khóa nguyên tắc không có mapping thì không tạo chứng từ kế toán chính thức.

3.  Khóa danh mục checkpoint được phép tạo accounting handoff.

4.  Khóa mối liên kết giữa phiếu vận hành và MISA Accounting Handoff Record.

5.  Khóa nguyên tắc dữ liệu giá thành nội bộ phục vụ costing.

6.  Khóa nguyên tắc form-to-MISA matrix.

7.  Ngăn việc nhập tay lại dữ liệu kế toán không có nguồn vận hành.

8.  Ngăn việc module vận hành tự tạo mã MISA.

9.  Ngăn việc sync chứng từ thiếu evidence, thiếu audit hoặc thiếu owner approval.

10. Tạo nền cho sync lifecycle, retry, error, reconcile ở PHẦN 3/4.

**22. NGUYÊN TẮC MISA MAPPING REGISTRY**

**22.1. Mapping Registry là điều kiện trước sync**

MISA Mapping Registry là sổ kiểm soát ánh xạ giữa dữ liệu nội bộ Ginsengfood và dữ liệu tương ứng trên MISA.

Không có mapping thì không sync.

Mapping không hợp lệ thì không sync.

Mapping bị trùng thì không sync.

Mapping hết hiệu lực thì không sync.

Mapping chưa được owner duyệt thì không sync.

Hệ thống không được tự đoán mã MISA để tạo chứng từ.

**22.2. Mapping Registry không phải dữ liệu vận hành gốc**

Mapping Registry chỉ dùng để ánh xạ.

Mapping Registry không được thay đổi sự thật vận hành.

Ví dụ:

- Mã nguyên liệu nội bộ thuộc Product/Ingredient Master.

- Mã kho vận hành thuộc Operational Core.

- Mã SKU/thành phẩm thuộc Product Master.

- Mã lô, batch, trace thuộc Operational Core.

- Mã kế toán, mã vật tư MISA, tài khoản, cost center thuộc lớp mapping kế toán.

Không được sửa mã vận hành chỉ để khớp MISA.

Nếu mapping sai, phải sửa mapping theo quy trình review.

**22.3. Mapping phải có trạng thái hiệu lực**

Mỗi mapping phải có trạng thái quản trị.

Các trạng thái nền gồm:

1.  DRAFT.

2.  PENDING_REVIEW.

3.  ACTIVE.

4.  SUSPENDED.

5.  EXPIRED.

6.  CONFLICT.

7.  DEPRECATED.

8.  REPLACED.

9.  REJECTED.

Chỉ mapping trạng thái ACTIVE mới được dùng để sync chính thức.

**22.4. Mapping phải có owner**

Mỗi nhóm mapping phải có owner rõ ràng.

Owner chịu trách nhiệm:

- Tạo mapping.

- Kiểm tra mapping.

- Duyệt mapping.

- Khóa mapping.

- Ngưng mapping.

- Thay thế mapping.

- Xử lý mapping conflict.

- Cung cấp evidence mapping nếu cần.

Không có owner thì mapping không được ACTIVE.

**23. NHÓM MAPPING BẮT BUỘC**

**23.1. Mapping kho**

Kho vận hành trong Ginsengfood phải được ánh xạ sang kho tương ứng trên MISA nếu nghiệp vụ đó cần hạch toán kho.

Nhóm kho tối thiểu:

1.  Kho nguyên liệu.

2.  Kho bao bì.

3.  Kho vật tư phụ.

4.  Kho bán thành phẩm nếu có.

5.  Kho thành phẩm.

6.  Kho chờ hủy nếu có.

7.  Kho cách ly / HOLD nếu có.

8.  Kho Bến Tre nếu là kho thật đang vận hành.

9.  Kho khác nếu được mở sau này qua Warehouse Registry.

Nguyên tắc:

- Kho thật phải nằm trong registry.

- Không hardcode tên kho.

- Không sync chứng từ nhập/xuất nếu kho chưa mapping.

- Không dùng một mã kho MISA cho nhiều kho vận hành khác nhau nếu gây mất kiểm soát.

- Không dùng kho kế toán để thay thế trạng thái vận hành.

**23.2. Mapping location**

Nếu hệ thống vận hành quản lý location trong kho, location có thể cần mapping hoặc quy tắc chuyển đổi sang MISA tùy khả năng cấu hình MISA.

Location có thể gồm:

- Khu nguyên liệu chờ QC.

- Khu nguyên liệu đạt QC.

- Khu READY_FOR_PRODUCTION.

- Khu bao bì.

- Khu thành phẩm chờ nhập kho.

- Khu thành phẩm đã nhập kho.

- Khu HOLD.

- Khu hủy/ghi giảm.

Nguyên tắc:

- Location vận hành không được bị xóa khi MISA không hỗ trợ location tương ứng.

- Nếu MISA không nhận location, PACK-04 phải giữ location ở evidence/audit nội bộ.

- Không được làm mất trạng thái HOLD/RECALL/SALE_LOCK chỉ vì MISA không có location tương ứng.

**23.3. Mapping nguyên liệu**

Mỗi nguyên liệu canonical trong Product/Ingredient Master phải có mapping MISA nếu có phát sinh kế toán.

Nguyên liệu gồm:

- Sâm Savigin.

- Gạo lúa tôm.

- Nước dừa.

- Nấm.

- Rong biển.

- Rau củ.

- Hạt.

- Đậu.

- Dược liệu/thực vật khác nếu là ingredient canonical.

- Nguyên liệu phụ.

- Nguyên liệu mua ngoài.

- Nguyên liệu công ty tự trồng/thu hoạch nếu có hạch toán tồn kho.

Nguyên tắc:

- Không dùng dòng gom nhóm mơ hồ.

- Không gộp Sâm Savigin vào nhóm dược liệu chung.

- Không dùng một mapping cho nhiều nguyên liệu khác nhau nếu làm mất truy xuất kế toán.

- Đơn vị tính phải khớp hoặc có conversion rule được duyệt.

- Nguyên liệu hết hiệu lực không được tiếp tục sync nếu mapping bị đóng.

**23.4. Mapping bao bì**

Bao bì phải có mapping riêng khi có nhập, xuất, tồn hoặc ghi giảm kế toán.

Nhóm bao bì gồm:

1.  Bao bì cấp 1.

2.  Bao bì cấp 2.

3.  Màng/gói.

4.  Hộp.

5.  Thùng.

6.  Tem.

7.  Nhãn.

8.  Túi.

9.  Vật liệu in ấn nếu hạch toán riêng.

10. Bao bì phụ trợ khác.

Nguyên tắc:

- Bao bì không được gộp chung nếu khác SKU, khác quy cách, khác đơn vị hoặc khác mục đích hạch toán.

- Bao bì theo SKU phải mapping theo đúng trade/packaging config nếu có.

- Bao bì dùng chung phải có mapping dùng chung được owner duyệt.

- Bao bì chờ hủy không được tính vào available_stock hoặc ready_stock.

**23.5. Mapping vật tư phụ**

Vật tư phụ phải có mapping nếu được theo dõi kế toán.

Vật tư phụ có thể gồm:

- Vật tư sản xuất.

- Vật tư đóng gói.

- Vật tư vệ sinh.

- Vật tư tiêu hao.

- Dụng cụ nhỏ nếu quản lý tồn.

- Phụ kiện liên quan sản xuất nếu có.

Nguyên tắc:

- Vật tư phụ phải có category rõ.

- Không trộn vật tư phụ với nguyên liệu sản xuất.

- Không trộn vật tư phụ với bao bì nếu báo cáo kế toán cần tách.

- Ghi giảm vật tư phụ phải đi qua Disposal/Write-off Control.

**23.6. Mapping thành phẩm / SKU**

Mỗi SKU thành phẩm được hạch toán kho phải có mapping MISA.

SKU mapping phải bám theo Product Master và trạng thái product/SKU hợp lệ.

Nguyên tắc:

- SKU Active không đồng nghĩa sellable.

- SKU có mapping MISA không đồng nghĩa được bán.

- SKU được nhập kho kế toán không đồng nghĩa Sellable Gate mở.

- Sellable Gate vẫn thuộc Operational/Commerce runtime liên quan.

- MISA không quyết định SKU được bán.

- Thành phẩm chỉ được tạo checkpoint nhập kho sau Batch Release và Warehouse Receipt Confirmed.

**23.7. Mapping đơn vị tính**

Đơn vị tính là nhóm mapping bắt buộc.

Ví dụ:

- kg.

- g\.

- lít.

- ml\.

- gói.

- hộp.

- thùng.

- cái.

- bộ.

- lô nếu có.

- batch nếu dùng cho báo cáo nội bộ, không thay đơn vị tính vật tư.

Nguyên tắc:

- Không sync nếu đơn vị tính không khớp.

- Không tự quy đổi nếu chưa có conversion rule.

- Quy đổi phải có nguồn, công thức, owner approval và audit.

- Đơn vị sản xuất và đơn vị kế toán phải được phân biệt rõ nếu khác nhau.

- Output gói/hộp/thùng không được quy đổi tùy tiện sang kg nếu không có rule được duyệt.

**23.8. Mapping nhà cung cấp**

Nhà cung cấp cần mapping nếu nghiệp vụ nhập mua, công nợ, hóa đơn hoặc kế toán yêu cầu.

Nhà cung cấp có thể gồm:

- Nhà cung cấp nguyên liệu.

- Nhà cung cấp bao bì.

- Nhà cung cấp vật tư.

- Nhà cung cấp dịch vụ nếu liên quan giá thành.

- Đơn vị vận chuyển nếu hạch toán riêng.

- Đơn vị in ấn nếu hạch toán riêng.

Nguyên tắc:

- Supplier evidence không tự PASS QC.

- Supplier mapping không tự xác nhận hàng được nhập kho.

- Không có supplier mapping thì không sync nghiệp vụ mua/nhập có yêu cầu supplier.

- Nhà cung cấp bị khóa không được sync chứng từ mới nếu không có owner override.

**23.9. Mapping nguồn công ty / Company Source**

Sâm Savigin là Company Source theo mùa vụ.

Company Source không xử lý giống supplier material thông thường.

Nguyên tắc:

- Sâm Savigin có thể có mapping tồn kho kế toán nếu cần hạch toán.

- Không ép Sâm Savigin vào quy trình supplier purchase nếu không phải hàng mua ngoài.

- Harvest Requirement không tự thành chứng từ kế toán.

- Harvest/Intake/QC/Lot/Readiness phải đi theo Operational Core.

- Accounting handoff chỉ phát sinh tại checkpoint hợp lệ.

- Strategic reserve của Sâm Savigin không bị purchase suppression giống hàng mua ngoài.

**23.10. Mapping nhân sự / bộ phận**

Nếu check-in/out nhân sự được dùng cho tính chi phí nhân công, nhân sự hoặc bộ phận phải có mapping phù hợp.

Nhóm mapping có thể gồm:

- Nhân sự.

- Tổ sản xuất.

- Bộ phận sản xuất.

- Bộ phận QC.

- Bộ phận kho.

- Cost center.

- Đối tượng tập hợp chi phí.

Nguyên tắc:

- Check-in/out không tự tạo hạch toán lương.

- Dữ liệu nhân sự phục vụ costing phải qua policy.

- Không dùng dữ liệu nhân sự cho kế toán nếu chưa có mapping và quyền sử dụng.

- Chi phí nhân công chỉ đi MISA nếu pack tài chính/kế toán liên quan đã khóa rule.

**23.11. Mapping tài khoản kế toán**

Tài khoản kế toán thuộc lớp Accounting Truth.

PACK-04 không tự định nghĩa hệ thống tài khoản kế toán thay MISA.

Tuy nhiên, PACK-04 phải giữ mapping để xác định nghiệp vụ nào đi vào nhóm tài khoản nào nếu MISA Integration Layer cần truyền dữ liệu.

Nhóm tài khoản có thể gồm:

- Tài khoản nguyên liệu.

- Tài khoản bao bì.

- Tài khoản vật tư.

- Tài khoản thành phẩm.

- Tài khoản chi phí sản xuất.

- Tài khoản ghi giảm.

- Tài khoản giá vốn nếu có.

- Tài khoản doanh thu nếu pack commerce/finance mở rộng.

- Tài khoản chiết khấu nếu pack finance mở rộng.

- Tài khoản hoa hồng nếu pack finance mở rộng.

Nguyên tắc:

- Không hardcode tài khoản kế toán trong module vận hành.

- Không để dev tự chọn tài khoản kế toán theo cảm tính.

- Tài khoản phải do kế toán/owner duyệt.

- Nếu tài khoản chưa mapping, checkpoint phải fail-closed.

**23.12. Mapping cost center và đối tượng tập hợp chi phí**

Cost center và đối tượng tập hợp chi phí là nhóm quan trọng cho costing.

Có thể áp dụng theo:

- Production Order.

- Batch.

- SKU.

- Dòng sản phẩm.

- Tổ sản xuất.

- Xưởng.

- Công đoạn.

- Campaign sản xuất nếu có.

- Lô nguyên liệu đặc biệt nếu cần truy xuất chi phí.

Nguyên tắc:

- Cost center không thay thế Production Order.

- Batch không thay thế chứng từ kế toán.

- Đối tượng tập hợp chi phí phải có policy rõ.

- Không có cost center bắt buộc thì không tạo costing checkpoint chính thức.

- Costing data phải có nguồn từ operational checkpoint.

**24. MISA MAPPING REGISTRY — TRƯỜNG QUẢN TRỊ BẮT BUỘC**

Mỗi mapping record tối thiểu phải quản trị các nhóm thông tin sau:

**24.1. Nhóm định danh nội bộ**

- Mã nội bộ.

- Tên nội bộ.

- Loại đối tượng.

- Pack owner.

- Module owner.

- Phiên bản nếu có.

- Trạng thái nội bộ.

- Ngày hiệu lực nội bộ.

**24.2. Nhóm định danh MISA**

- Mã MISA.

- Tên MISA.

- Loại đối tượng MISA.

- Nhóm kế toán nếu có.

- Tài khoản kế toán nếu áp dụng.

- Đơn vị tính MISA.

- Kho MISA nếu áp dụng.

- Cost center MISA nếu áp dụng.

- Đối tượng tập hợp chi phí MISA nếu áp dụng.

**24.3. Nhóm kiểm soát hiệu lực**

- Trạng thái mapping.

- Ngày bắt đầu hiệu lực.

- Ngày hết hiệu lực nếu có.

- Mapping thay thế nếu có.

- Lý do thay đổi.

- Người đề xuất.

- Người duyệt.

- Thời điểm duyệt.

- Evidence duyệt mapping.

**24.4. Nhóm kiểm soát rủi ro**

- Có trùng mapping không.

- Có conflict không.

- Có đang bị suspend không.

- Có đang reconcile lỗi không.

- Có nghiệp vụ đang phụ thuộc không.

- Có cần kế toán review không.

- Có cần owner review không.

- Có cho sync production không.

**25. NGUYÊN TẮC QUẢN TRỊ MAPPING CHANGE**

Mapping thay đổi có thể ảnh hưởng kế toán, tồn kho, giá thành và reconcile.

Do đó, mọi thay đổi mapping phải có kiểm soát.

**25.1. Không sửa mapping âm thầm**

Không được sửa mapping đang ACTIVE mà không có audit.

Không được thay mã MISA bằng cách chỉnh trực tiếp không lưu lịch sử.

Không được thay mapping để “ép sync” một chứng từ đang lỗi.

**25.2. Mapping mới phải qua review**

Mapping mới phải qua các bước:

1.  Tạo mapping proposal.

2.  Kiểm tra dữ liệu nội bộ.

3.  Kiểm tra dữ liệu MISA tương ứng.

4.  Kiểm tra đơn vị tính.

5.  Kiểm tra kho/tài khoản/cost center nếu có.

6.  Kiểm tra trùng mapping.

7.  Owner review.

8.  Kế toán review nếu cần.

9.  Kích hoạt mapping.

10. Lưu evidence.

**25.3. Mapping thay thế phải giữ lịch sử**

Khi mapping cũ không còn dùng, phải:

- Đóng mapping cũ.

- Ghi lý do.

- Ghi mapping thay thế.

- Ghi thời điểm hiệu lực.

- Không phá lịch sử chứng từ đã sync.

- Không sửa ngược chứng từ đã sync nếu chưa qua điều chỉnh/reconcile.

**26. ACCOUNTING HANDOFF CHECKPOINTS**

Accounting handoff checkpoint là điểm nghiệp vụ được phép tạo MISA Accounting Handoff Record.

Các checkpoint nền của PACK-04 gồm:

1.  Raw Material Intake Approved.

2.  Packaging / Material Intake Approved.

3.  Material Issue Confirmed.

4.  Packaging / Material Issue Confirmed nếu áp dụng.

5.  Disposal Write-off Confirmed.

6.  Finished Goods Warehouse Receipt Confirmed.

7.  Internal Costing Checkpoint.

8.  Sales / Revenue / Discount / Commission Checkpoint khi có pack owner tương ứng.

**27. CHECKPOINT 01 — RAW MATERIAL INTAKE APPROVED**

**27.1. Mục tiêu**

Checkpoint này ghi nhận nguyên liệu đầu vào đã đủ điều kiện để tạo accounting handoff.

**27.2. Điều kiện bắt buộc**

Raw Material Intake Approved chỉ hợp lệ khi có:

1.  Phiếu đánh giá và nhập kho nguyên liệu đầu vào.

2.  Nguồn nguyên liệu rõ ràng.

3.  Supplier hoặc Company Source rõ ràng.

4.  Lot nguyên liệu.

5.  Số lượng.

6.  Đơn vị tính.

7.  Kho nhận.

8.  Kết quả kiểm tra đầu vào theo policy.

9.  Evidence.

10. Audit.

11. Mapping nguyên liệu.

12. Mapping kho.

13. Mapping supplier nếu là hàng mua ngoài.

14. Mapping đơn vị tính.

15. Approval nếu nghiệp vụ yêu cầu.

**27.3. Không được tạo checkpoint khi**

- Dữ liệu mới là phiếu nháp.

- Hàng mới scan nhưng chưa xác nhận.

- Supplier evidence chưa được kiểm tra.

- QC chưa có kết quả cần thiết.

- Lot đang PENDING_QC.

- Lot bị HOLD.

- Lot bị REJECTED.

- Thiếu mapping nguyên liệu.

- Thiếu mapping kho.

- Thiếu đơn vị tính.

- Thiếu evidence.

- Thiếu audit.

**27.4. Kết quả checkpoint**

Khi hợp lệ, checkpoint có thể tạo:

- MISA Accounting Handoff Record.

- Sync candidate cho chứng từ nhập nguyên liệu.

- Evidence packet cho kế toán.

- Reconcile reference.

Checkpoint này không tự xác nhận nguyên liệu READY_FOR_PRODUCTION nếu quy trình readiness chưa hoàn tất.

**28. CHECKPOINT 02 — PACKAGING / MATERIAL INTAKE APPROVED**

**28.1. Mục tiêu**

Checkpoint này ghi nhận bao bì, vật tư, vật tư phụ đã đủ điều kiện để tạo accounting handoff nhập kho.

**28.2. Điều kiện bắt buộc**

Checkpoint hợp lệ khi có:

1.  Phiếu nhập bao bì / vật tư đóng gói.

2.  Nhà cung cấp hoặc nguồn cấp rõ ràng.

3.  Mã bao bì/vật tư canonical.

4.  Số lượng.

5.  Đơn vị tính.

6.  Kho nhận.

7.  Kết quả kiểm tra nhập nếu policy yêu cầu.

8.  Evidence.

9.  Audit.

10. Mapping bao bì/vật tư.

11. Mapping kho.

12. Mapping supplier nếu là hàng mua ngoài.

13. Mapping đơn vị tính.

**28.3. Không được tạo checkpoint khi**

- Bao bì chưa được kiểm tra nếu policy yêu cầu.

- Bao bì sai quy cách.

- Bao bì chưa mapping.

- Kho chưa mapping.

- Đơn vị tính chưa mapping.

- Hàng đang tranh chấp.

- Hàng đang chờ trả lại.

- Hàng đang chờ hủy.

- Phiếu chưa xác nhận.

**28.4. Kết quả checkpoint**

Checkpoint có thể tạo accounting handoff nhập bao bì/vật tư.

Checkpoint này không tự xác nhận bao bì READY_FOR_PACKAGING nếu quy trình readiness bao bì còn yêu cầu kiểm tra riêng.

**29. CHECKPOINT 03 — MATERIAL ISSUE CONFIRMED**

**29.1. Mục tiêu**

Checkpoint này ghi nhận nguyên liệu đã được xuất cho sản xuất theo Production Order và Production BOM Snapshot hợp lệ.

**29.2. Điều kiện bắt buộc**

Material Issue Confirmed chỉ hợp lệ khi có:

1.  Production Order hợp lệ.

2.  Formula Resolution hợp lệ.

3.  Production BOM Snapshot đã scale.

4.  Phiếu đề nghị cấp nguyên liệu cho sản xuất.

5.  Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất.

6.  Phiếu kế toán xuất nguyên liệu cho sản xuất.

7.  Lot nguyên liệu được phép xuất.

8.  Số lượng xuất.

9.  Đơn vị tính.

10. Kho xuất.

11. Usage link vào Production Order hoặc batch.

12. Inventory ledger debit.

13. Mapping nguyên liệu.

14. Mapping kho.

15. Mapping đơn vị tính.

16. Cost center hoặc đối tượng tập hợp chi phí nếu policy yêu cầu.

17. Evidence.

18. Audit.

**29.3. Không được tạo checkpoint khi**

- Production Order chưa hợp lệ.

- BOM Snapshot chưa khóa.

- Nguyên liệu chưa READY_FOR_PRODUCTION.

- Nguyên liệu đang HOLD.

- Nguyên liệu đang chờ hủy.

- Số lượng xuất vượt số lượng được duyệt.

- Phiếu cấp nguyên liệu chưa xác nhận.

- Thiếu usage link.

- Thiếu inventory ledger debit.

- Thiếu mapping.

- Thiếu evidence.

- Thiếu audit.

**29.4. Kết quả checkpoint**

Checkpoint này có thể tạo:

- Accounting handoff xuất nguyên liệu cho sản xuất.

- Costing input cho Production Order/batch.

- Reconcile reference cho chứng từ xuất kho.

- Evidence packet cho kế toán.

**30. CHECKPOINT 04 — PACKAGING / MATERIAL ISSUE CONFIRMED**

**30.1. Mục tiêu**

Checkpoint này ghi nhận bao bì, vật tư đóng gói hoặc vật tư phụ đã được xuất cho sản xuất/đóng gói.

**30.2. Điều kiện bắt buộc**

Checkpoint hợp lệ khi có:

1.  Production Order hoặc packaging order hợp lệ.

2.  Packaging requirement từ BOM/packaging config hoặc kế hoạch được duyệt.

3.  Phiếu xuất/cấp bao bì hoặc vật tư.

4.  Số lượng xuất.

5.  Đơn vị tính.

6.  Kho xuất.

7.  Usage link vào batch/SKU/packaging run.

8.  Inventory ledger debit.

9.  Mapping bao bì/vật tư.

10. Mapping kho.

11. Mapping đơn vị tính.

12. Evidence.

13. Audit.

**30.3. Không được tạo checkpoint khi**

- Bao bì chưa đạt điều kiện sử dụng.

- Bao bì sai SKU/quy cách.

- Bao bì đang HOLD.

- Bao bì đang chờ hủy.

- Số lượng xuất vượt requirement.

- Không có usage link.

- Thiếu mapping.

- Thiếu ledger debit.

- Thiếu evidence.

**30.4. Kết quả checkpoint**

Checkpoint có thể tạo accounting handoff xuất bao bì/vật tư.

Dữ liệu này có thể được dùng cho costing nếu policy giá thành yêu cầu.

**31. CHECKPOINT 05 — DISPOSAL WRITE-OFF CONFIRMED**

**31.1. Mục tiêu**

Checkpoint này ghi nhận nghiệp vụ hủy/ghi giảm tồn kho đã được duyệt và đã thực hiện.

**31.2. Điều kiện bắt buộc**

Disposal Write-off Confirmed chỉ hợp lệ khi có:

1.  Phiếu yêu cầu hủy / ghi giảm.

2.  Lý do hủy/ghi giảm.

3.  QA/Owner Review.

4.  Disposal Approval.

5.  Disposal Execution.

6.  Phiếu ghi giảm tồn kho / Inventory Write-off.

7.  Inventory ledger write-off.

8.  Evidence hủy/ghi giảm.

9.  Đối tượng ghi giảm rõ ràng.

10. Số lượng ghi giảm.

11. Đơn vị tính.

12. Kho/location.

13. Mapping vật tư/nguyên liệu/bao bì/thành phẩm.

14. Mapping kho.

15. Mapping tài khoản ghi giảm nếu policy yêu cầu.

16. Audit.

**31.3. Không được tạo checkpoint khi**

- Mới yêu cầu hủy nhưng chưa duyệt.

- Đã duyệt nhưng chưa thực hiện.

- Chỉ xóa tay tồn kho.

- Không có evidence hủy.

- Không có ledger write-off.

- Không rõ nguyên nhân.

- Không rõ owner approval.

- Thiếu mapping.

- Thiếu audit.

**31.4. Kết quả checkpoint**

Checkpoint có thể tạo:

- Accounting handoff ghi giảm.

- Evidence packet cho kế toán.

- Reconcile reference.

- Cost adjustment input nếu policy áp dụng.

**32. CHECKPOINT 06 — FINISHED GOODS WAREHOUSE RECEIPT CONFIRMED**

**32.1. Mục tiêu**

Checkpoint này ghi nhận thành phẩm đã đủ điều kiện nhập kho và tạo accounting handoff.

**32.2. Điều kiện bắt buộc**

Finished Goods Warehouse Receipt Confirmed chỉ hợp lệ khi có:

1.  Production Order.

2.  Batch.

3.  QC thành phẩm.

4.  Batch Release.

5.  Lệnh nhập kho thành phẩm.

6.  Warehouse Receipt Confirmed.

7.  Finished Goods Inventory Ledger credit.

8.  SKU/thành phẩm.

9.  Số lượng thành phẩm.

10. Đơn vị tính.

11. Kho thành phẩm.

12. Batch yield.

13. Traceability reference.

14. Mapping SKU/thành phẩm.

15. Mapping kho.

16. Mapping đơn vị tính.

17. Costing reference nếu policy yêu cầu.

18. Evidence.

19. Audit.

**32.3. Không được tạo checkpoint khi**

- Chỉ mới đóng gói.

- Chỉ mới in tem/QR.

- Chưa QC thành phẩm.

- Chưa Batch Release.

- Chưa Warehouse Receipt Confirmed.

- Chưa có ledger credit.

- SKU chưa mapping.

- Kho chưa mapping.

- Thành phẩm đang HOLD.

- Batch đang bị recall hold.

- Thiếu evidence.

- Thiếu audit.

**32.4. Kết quả checkpoint**

Checkpoint có thể tạo:

- Accounting handoff nhập kho thành phẩm.

- Costing close candidate nếu policy áp dụng.

- Reconcile reference cho chứng từ nhập kho.

- Evidence packet cho kế toán.

**33. CHECKPOINT 07 — INTERNAL COSTING CHECKPOINT**

**33.1. Mục tiêu**

Internal Costing Checkpoint tổng hợp dữ liệu chi phí sản xuất nội bộ phục vụ quản trị giá thành.

**33.2. Dữ liệu có thể tham gia costing**

Costing có thể nhận dữ liệu từ:

1.  Nguyên liệu xuất cho sản xuất.

2.  Bao bì xuất cho sản xuất.

3.  Vật tư phụ.

4.  Nhân công nếu có policy.

5.  Thời gian công đoạn nếu có policy.

6.  Hao hụt.

7.  Batch yield.

8.  Sản lượng đạt.

9.  Sản lượng lỗi.

10. Sản lượng ghi giảm.

11. Chi phí dịch vụ ngoài nếu có mapping.

12. Chi phí phân bổ nếu pack tài chính quy định.

13. Cost center.

14. Đối tượng tập hợp chi phí.

15. Production Order.

16. Batch.

17. SKU.

**33.3. Không được dùng cho costing khi**

- Dữ liệu chưa có checkpoint.

- Dữ liệu chưa có ledger.

- Dữ liệu chưa xác nhận.

- Dữ liệu chưa mapping nếu cần mapping.

- Dữ liệu chưa có audit.

- Dữ liệu chưa có policy phân bổ.

- Dữ liệu thuộc batch bị void/cancel.

- Dữ liệu bị tranh chấp.

- Dữ liệu chưa owner review nếu policy yêu cầu.

**33.4. Nguyên tắc costing**

- Costing nội bộ không tự động là hạch toán chính thức.

- Costing phải bám Production Order và batch.

- Costing không được sửa BOM Snapshot.

- Costing không được sửa công thức G1.

- Costing không được sửa số lượng xuất kho đã xác nhận.

- Costing không được tự tạo batch yield.

- Costing không được tự mở Sellable Gate.

- Costing không được tự tạo doanh thu hoặc giá vốn chính thức nếu chưa có pack owner liên quan.

**34. CHECKPOINT 08 — SALES / REVENUE / DISCOUNT / COMMISSION CHECKPOINT**

**34.1. Phạm vi kiểm soát**

Nhóm này liên quan đến bán hàng, doanh thu, chiết khấu, voucher, hoa hồng, quyền lợi thành viên, Diamond referral, COD, payment, shipping, tax, reward, KPI và ROAS.

PACK-04 không tự mở nhóm checkpoint này nếu chưa có owner pack tương ứng.

**34.2. Nguyên tắc bắt buộc**

- Quote thuộc Commerce Runtime Core.

- Order thuộc Commerce Runtime Core.

- Payment confirmation thuộc Payment Core hoặc pack liên quan.

- Commission thuộc Finance/KPI/Reward pack nếu được kích hoạt.

- Member benefit thuộc Commerce Runtime Core.

- Diamond referral eligibility thuộc Commerce Runtime Core hoặc pack owner đã khóa.

- ROAS thuộc Ads/measurement pack.

- Tax/VAT thuộc Finance/Tax pack nếu có.

- PACK-04 chỉ nhận checkpoint đã được owner pack phát hành hợp lệ.

**34.3. Không được tự tính**

PACK-04 không được tự tính:

- Giá bán cuối.

- Chiết khấu.

- Voucher.

- Quyền lợi thành viên.

- Hoa hồng Diamond.

- Commission.

- Doanh thu verified.

- ROAS.

- AOV.

- CPA.

- Thuế.

- Shipping fee.

- COD status.

- Payment status.

PACK-04 chỉ tích hợp kế toán khi checkpoint hợp lệ từ pack owner đã tồn tại.

**35. COSTING DATA GOVERNANCE**

**35.1. Costing data là dữ liệu quản trị**

Costing data trong Ginsengfood phục vụ quản trị nội bộ.

Costing data không thay thế báo cáo kế toán chính thức.

Costing data có thể phục vụ:

- Tính giá thành batch.

- So sánh chi phí SKU.

- Theo dõi hao hụt.

- Phân tích yield.

- Phân tích chi phí nguyên liệu.

- Phân tích chi phí bao bì.

- Phân tích hiệu quả công đoạn.

- Phân tích hiệu quả sản xuất.

- Dự báo giá thành cho kế hoạch sản xuất.

- Hỗ trợ quyết định giá bán nội bộ nếu owner pack cho phép.

**35.2. Costing data phải có nguồn**

Costing data không được nhập tay rời nếu dữ liệu đã có nguồn vận hành.

Nguồn costing hợp lệ gồm:

- Material Issue Confirmed.

- Packaging Issue Confirmed.

- Finished Goods Warehouse Receipt Confirmed.

- Disposal Write-off Confirmed nếu ảnh hưởng chi phí.

- Check-in/out nhân sự nếu policy cho phép.

- Production execution record nếu policy cho phép.

- Batch yield.

- QC outcome.

- Cost allocation rule đã duyệt.

**35.3. Costing data không sửa nghiệp vụ nguồn**

Costing không được sửa:

- Production BOM Snapshot.

- Formula Version.

- Material Issue.

- Ledger debit.

- Ledger credit.

- QC result.

- Batch Release.

- Warehouse Receipt.

- Disposal Write-off.

- Traceability.

- Recall.

- Sale Lock.

Nếu costing phát hiện lệch, phải tạo review/reconcile, không sửa âm thầm.

**36. COSTING OBJECT GOVERNANCE**

**36.1. Đối tượng tập hợp chi phí**

Đối tượng tập hợp chi phí có thể là:

1.  Production Order.

2.  Batch.

3.  SKU.

4.  Product line.

5.  Công đoạn.

6.  Tổ sản xuất.

7.  Cost center.

8.  Campaign sản xuất nếu có.

Đối tượng tập hợp chi phí phải được owner duyệt trước khi dùng.

**36.2. Production Order là trục chi phí vận hành**

Production Order là trục quan trọng để gom chi phí sản xuất.

Production Order liên kết:

- Demand Board.

- Formula Resolution.

- Production BOM Snapshot.

- Material Issue.

- Packaging Issue.

- Production execution.

- QC.

- Batch.

- Warehouse Receipt.

- Costing.

- Accounting handoff.

Không được tính giá thành batch nếu mất liên kết Production Order.

**36.3. Batch là trục chi phí thực tế**

Batch phản ánh kết quả sản xuất thực tế.

Batch có thể liên kết:

- Nguyên liệu đã dùng.

- Bao bì đã dùng.

- Vật tư đã dùng.

- Kết quả QC.

- Yield.

- Thành phẩm đạt.

- Thành phẩm lỗi.

- Thành phẩm nhập kho.

- Traceability.

- Recall impact nếu có.

- Costing result.

Không được gom batch khác nhau thành một costing record nếu mất khả năng truy xuất.

**37. COSTING INPUT CONTROL**

**37.1. Nguyên liệu**

Nguyên liệu đưa vào costing phải đến từ Material Issue Confirmed.

Không dùng số lượng MRP để tính chi phí thực tế.

Không dùng nhu cầu sản xuất để thay thế số lượng xuất thực tế.

Không dùng BOM kế hoạch để thay số lượng đã cấp phát thực tế.

**37.2. Bao bì**

Bao bì đưa vào costing phải đến từ Packaging / Material Issue Confirmed.

Không dùng packaging requirement kế hoạch để thay số lượng bao bì xuất thực tế.

Không tính bao bì đã hủy/chờ hủy vào chi phí sử dụng nếu chưa có policy xử lý.

**37.3. Nhân công**

Nhân công chỉ đưa vào costing khi có policy và mapping.

Check-in/out nhân sự chỉ là dữ liệu thời gian.

Check-in/out không tự động là chi phí nhân công kế toán.

**37.4. Hao hụt**

Hao hụt phải được phân biệt:

- Hao hụt kế hoạch.

- Hao hụt thực tế.

- Hao hụt trong ngưỡng.

- Hao hụt vượt ngưỡng.

- Hao hụt do lỗi sản xuất.

- Hao hụt do QC reject.

- Hao hụt do hủy/ghi giảm.

Hao hụt vượt ngưỡng phải có review.

Không tự phân bổ hao hụt vượt ngưỡng vào giá thành nếu chưa có approval.

**37.5. Thành phẩm nhập kho**

Thành phẩm nhập kho đưa vào costing phải đến từ Finished Goods Warehouse Receipt Confirmed.

Không dùng số lượng đóng gói để thay thế số lượng nhập kho.

Không dùng số lượng in tem/QR để thay thế số lượng thành phẩm.

Không dùng batch chưa release để đóng costing.

**38. FORM-TO-MISA MATRIX**

**38.1. Nguyên tắc ma trận**

Form-to-MISA Matrix xác định phiếu nào có khả năng tạo accounting handoff.

Không phải mọi phiếu vận hành đều đi MISA.

Không phải mọi phiếu có số lượng đều tạo chứng từ kế toán.

Không phải mọi nghiệp vụ có scan đều tạo accounting handoff.

Phiếu chỉ tạo accounting handoff khi đạt checkpoint hợp lệ.

**39. FORM-TO-MISA MATRIX — NHÓM PHIẾU NỀN**

| **Mã phiếu** | **Tên phiếu**                                            | **Có ngõ MISA không** | **Vai trò kế toán**       | **Điều kiện chính**                                 |
|--------------|----------------------------------------------------------|-----------------------|---------------------------|-----------------------------------------------------|
| FRM-01       | Phiếu kế hoạch / nhu cầu sản xuất                        | Không trực tiếp       | Nguồn kế hoạch            | Không tạo chứng từ kế toán                          |
| FRM-02       | Production Demand Board Record                           | Không trực tiếp       | Nguồn demand              | Không tạo chứng từ kế toán                          |
| FRM-03       | Formula Resolution / Production BOM Snapshot Record      | Không trực tiếp       | Nguồn định mức/snapshot   | Là evidence cho issue/costing                       |
| FRM-04       | MRP Run / Material Requirement Board                     | Không trực tiếp       | Nguồn nhu cầu vật tư      | Không tạo chứng từ kế toán                          |
| FRM-05       | Procurement Suppression Result                           | Không trực tiếp       | Nguồn kiểm soát mua       | Không tạo chứng từ kế toán                          |
| FRM-06       | Phiếu yêu cầu mua nguyên liệu / vật tư                   | Không trực tiếp       | Nguồn yêu cầu mua         | Không tự thành chứng từ kế toán                     |
| FRM-07       | Phiếu yêu cầu thu hoạch Sâm Savigin                      | Không trực tiếp       | Nguồn harvest requirement | Không tự thành chứng từ kế toán                     |
| FRM-08       | Phiếu yêu cầu mua bao bì / vật tư đóng gói               | Không trực tiếp       | Nguồn yêu cầu mua bao bì  | Không tự thành chứng từ kế toán                     |
| FRM-09       | Phiếu đánh giá và nhập kho nguyên liệu đầu vào           | Có điều kiện          | Nhập nguyên liệu          | Chỉ khi intake approved + mapping + evidence        |
| FRM-10       | Phiếu nhập bao bì / vật tư đóng gói                      | Có điều kiện          | Nhập bao bì/vật tư        | Chỉ khi intake approved + mapping + evidence        |
| FRM-11       | Lệnh sản xuất                                            | Không trực tiếp       | Nguồn Production Order    | Không tự tạo chứng từ                               |
| FRM-12       | Phiếu đề nghị cấp nguyên liệu cho sản xuất               | Không trực tiếp       | Nguồn đề nghị xuất        | Không tự tạo chứng từ                               |
| FRM-13       | Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất  | Không trực tiếp       | Điều kiện issue           | Là điều kiện trước FRM-14                           |
| FRM-14       | Phiếu kế toán xuất nguyên liệu cho sản xuất              | Có điều kiện          | Xuất nguyên liệu          | Chỉ khi issue confirmed + ledger debit + mapping    |
| FRM-15       | Phiếu check-in / check-out nhân sự                       | Có điều kiện          | Costing input             | Chỉ dùng nếu policy nhân công kích hoạt             |
| FRM-16       | Phiếu theo dõi sơ chế                                    | Không trực tiếp       | Evidence sản xuất         | Không tự tạo chứng từ                               |
| FRM-17       | Phiếu kiểm chất lượng sau sấy thăng hoa                  | Không trực tiếp       | QC evidence               | Không tự tạo chứng từ                               |
| FRM-18       | Phiếu theo dõi đóng gói cấp 1                            | Không trực tiếp       | Packaging evidence        | Không tự tạo chứng từ                               |
| FRM-19       | Phiếu theo dõi đóng gói cấp 2                            | Không trực tiếp       | Packaging evidence        | Không tự tạo chứng từ                               |
| FRM-20       | Phiếu QC thành phẩm                                      | Không trực tiếp       | QC evidence               | Không tự tạo chứng từ                               |
| FRM-21       | Phiếu Batch Release                                      | Không trực tiếp       | Release evidence          | Là điều kiện trước nhập kho thành phẩm              |
| FRM-22       | Lệnh nhập kho thành phẩm                                 | Có điều kiện          | Nhập kho thành phẩm       | Chỉ khi Warehouse Receipt Confirmed + ledger credit |
| FRM-23       | Phiếu yêu cầu hủy / ghi giảm nguyên liệu, bao bì, vật tư | Không trực tiếp       | Nguồn disposal request    | Không tự tạo chứng từ                               |
| FRM-24       | Phiếu ghi giảm tồn kho / Inventory Write-off             | Có điều kiện          | Ghi giảm tồn kho          | Chỉ khi disposal execution + ledger write-off       |
| FRM-25       | MISA Accounting Handoff Record                           | Có                    | Handoff sang MISA         | Chỉ sinh từ checkpoint hợp lệ                       |
| FRM-26       | Operational Evidence Packet                              | Không trực tiếp       | Evidence                  | Đính kèm/đối chiếu                                  |
| FRM-27       | Operational Smoke Run Record                             | Không trực tiếp       | Evidence kiểm thử         | Không tạo chứng từ                                  |

**40. FRM-25 — MISA ACCOUNTING HANDOFF RECORD**

**40.1. Vai trò**

FRM-25 là phiếu trung gian kế toán giữa Ginsengfood và MISA.

FRM-25 không phải phiếu vận hành gốc.

FRM-25 không thay thế phiếu nguồn.

FRM-25 không được tạo nếu không có checkpoint hợp lệ.

**40.2. Nguồn tạo FRM-25**

FRM-25 chỉ được tạo từ:

1.  Raw Material Intake Approved.

2.  Packaging / Material Intake Approved.

3.  Material Issue Confirmed.

4.  Packaging / Material Issue Confirmed.

5.  Disposal Write-off Confirmed.

6.  Finished Goods Warehouse Receipt Confirmed.

7.  Internal Costing Checkpoint nếu policy cho phép.

8.  Sales/Revenue/Discount/Commission checkpoint nếu pack owner liên quan cho phép.

**40.3. FRM-25 phải chứa tối thiểu**

FRM-25 phải thể hiện:

1.  Checkpoint type.

2.  Nghiệp vụ nguồn.

3.  Phiếu nguồn.

4.  Owner nghiệp vụ.

5.  Đối tượng hàng hóa/vật tư/thành phẩm.

6.  Số lượng.

7.  Đơn vị tính.

8.  Kho/location.

9.  Mapping MISA.

10. Tài khoản/cost center nếu áp dụng.

11. Evidence reference.

12. Audit reference.

13. Sync eligibility.

14. Sync status.

15. Idempotency reference.

16. Reconcile reference nếu có.

17. Manual review flag nếu có.

18. Error reason nếu có.

**40.4. FRM-25 không được**

FRM-25 không được:

- Nhập tay thay phiếu nguồn.

- Sửa số lượng khác phiếu nguồn.

- Đổi SKU/nguyên liệu khác phiếu nguồn.

- Đổi kho khác phiếu nguồn nếu không có nghiệp vụ điều chỉnh.

- Bỏ qua mapping.

- Bỏ qua audit.

- Bỏ qua evidence.

- Tạo chứng từ cho dữ liệu nháp.

- Tạo chứng từ cho dữ liệu đang HOLD.

- Tạo chứng từ trùng.

- Làm thay quyết định kế toán chính thức của MISA.

**41. MA TRẬN CHECKPOINT — ACCOUNTING HANDOFF — MISA**

| **Checkpoint**                             | **Phiếu nguồn chính**           | **Handoff record** | **Nhóm chứng từ kế toán dự kiến**         | **Điều kiện khóa**                            |
|--------------------------------------------|---------------------------------|--------------------|-------------------------------------------|-----------------------------------------------|
| Raw Material Intake Approved               | FRM-09                          | FRM-25             | Nhập nguyên liệu                          | Intake approved, mapping, evidence            |
| Packaging / Material Intake Approved       | FRM-10                          | FRM-25             | Nhập bao bì/vật tư                        | Intake approved, mapping, evidence            |
| Material Issue Confirmed                   | FRM-14                          | FRM-25             | Xuất nguyên liệu cho sản xuất             | Issue confirmed, ledger debit, usage link     |
| Packaging / Material Issue Confirmed       | Phiếu xuất/cấp vật tư liên quan | FRM-25             | Xuất bao bì/vật tư                        | Issue confirmed, ledger debit, usage link     |
| Disposal Write-off Confirmed               | FRM-24                          | FRM-25             | Ghi giảm tồn kho                          | Disposal executed, ledger write-off, evidence |
| Finished Goods Warehouse Receipt Confirmed | FRM-22                          | FRM-25             | Nhập kho thành phẩm                       | Release, receipt confirmed, ledger credit     |
| Internal Costing Checkpoint                | Costing packet                  | FRM-25 nếu áp dụng | Giá thành nội bộ / hạch toán nếu cấu hình | Policy, mapping, owner approval               |
| Sales / Revenue / Discount / Commission    | Pack owner liên quan            | FRM-25 nếu áp dụng | Doanh thu/chiết khấu/hoa hồng             | Chỉ khi owner pack phát hành checkpoint       |

**42. MA TRẬN DỮ LIỆU BẮT BUỘC THEO CHECKPOINT**

| **Nhóm dữ liệu** | **Intake nguyên liệu** | **Intake bao bì/vật tư** | **Issue sản xuất** | **Write-off** | **Nhập kho thành phẩm** | **Costing**         |
|------------------|------------------------|--------------------------|--------------------|---------------|-------------------------|---------------------|
| Phiếu nguồn      | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Checkpoint type  | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Mã hàng nội bộ   | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Tùy nguồn           |
| Mapping MISA     | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Theo policy         |
| Số lượng         | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Đơn vị tính      | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Kho/location     | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Theo policy         |
| Supplier/source  | Bắt buộc nếu có        | Bắt buộc nếu có          | Không chính        | Theo nguồn    | Không chính             | Theo policy         |
| Production Order | Không chính            | Không chính              | Bắt buộc           | Theo nguồn    | Bắt buộc                | Bắt buộc            |
| Batch            | Không chính            | Không chính              | Theo policy        | Theo nguồn    | Bắt buộc                | Bắt buộc            |
| Ledger           | Theo policy            | Theo policy              | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc theo nguồn |
| Evidence         | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Audit            | Bắt buộc               | Bắt buộc                 | Bắt buộc           | Bắt buộc      | Bắt buộc                | Bắt buộc            |
| Owner approval   | Theo policy            | Theo policy              | Theo policy        | Bắt buộc      | Theo policy             | Theo policy         |

**43. NGUYÊN TẮC KHÔNG TẠO CHỨNG TỪ TỪ PHIẾU KẾ HOẠCH**

Các phiếu kế hoạch không tạo chứng từ kế toán.

Không tạo chứng từ kế toán từ:

- FRM-01.

- FRM-02.

- FRM-03.

- FRM-04.

- FRM-05.

- FRM-06.

- FRM-07.

- FRM-08.

Lý do:

- Kế hoạch sản xuất chưa phải sản xuất thực tế.

- Demand chưa phải nghiệp vụ nhập/xuất.

- MRP chưa phải mua hàng thật.

- Procurement requirement chưa phải hàng đã nhập.

- Harvest requirement chưa phải hàng đã thu hoạch và đủ điều kiện.

- Suppression result chỉ là điều kiện kiểm soát mua, không phải chứng từ kế toán.

- BOM Snapshot là định mức/snapshot, không phải chứng từ nhập/xuất.

- Phiếu yêu cầu mua chưa phải chứng từ nhập kho.

**44. NGUYÊN TẮC KHÔNG TẠO CHỨNG TỪ TỪ SCAN**

Scan không đồng nghĩa confirm.

Không tạo chứng từ kế toán chỉ vì:

- Đã scan mã nguyên liệu.

- Đã scan bao bì.

- Đã scan QR.

- Đã scan batch.

- Đã scan thành phẩm.

- Đã scan nhân sự.

- Đã scan vị trí kho.

Scan chỉ là hành vi capture dữ liệu.

Chứng từ kế toán chỉ được tạo khi nghiệp vụ đã xác nhận, có checkpoint hợp lệ, có mapping, có audit và evidence.

**45. NGUYÊN TẮC KHÔNG NHẬP LẠI DỮ LIỆU NỀN**

Dữ liệu kế toán handoff phải kế thừa từ phiếu nguồn.

Không được nhập lại bằng tay các dữ liệu đã có trong hệ thống:

- Mã nguyên liệu.

- Mã SKU.

- Batch.

- Lot.

- Số lượng.

- Đơn vị tính.

- Kho.

- Production Order.

- Phiếu nguồn.

- Kết quả QC.

- Batch Release.

- Warehouse Receipt.

- Ledger debit.

- Ledger credit.

- Ledger write-off.

Nếu cần điều chỉnh, phải tạo nghiệp vụ điều chỉnh, không sửa trực tiếp FRM-25.

**46. NGUYÊN TẮC MAPPING CHO KHO BẾN TRE**

Kho Bến Tre là kho thật ban đầu nếu được cấu hình trong Warehouse Registry.

Nguyên tắc:

- Kho Bến Tre phải nằm trong registry.

- Kho Bến Tre phải có mapping MISA nếu phát sinh chứng từ kế toán.

- Không hardcode Kho Bến Tre trong MISA Integration Layer.

- Nếu sau này có thêm kho, hệ thống mở rộng qua registry và mapping.

- Không dùng tên kho trong text để quyết định sync.

- Không sync nếu kho chưa ACTIVE mapping.

**47. NGUYÊN TẮC MAPPING CHO SÂM SAVIGIN**

Sâm Savigin là Company Source theo mùa vụ, là ingredient canonical riêng.

Nguyên tắc kế toán:

- Không gộp Sâm Savigin vào nhóm dược liệu chung.

- Không xử lý Sâm Savigin như supplier material nếu là nguồn công ty trồng.

- Nếu Sâm Savigin phát sinh tồn kho kế toán, phải có mapping riêng.

- Harvest Requirement không tự tạo chứng từ kế toán.

- Intake/QC/Lot/Readiness phải đi theo Operational Core.

- Strategic reserve không phải hàng mua ngoài.

- MISA không quyết định thời điểm harvest.

- MISA không quyết định Sâm đủ điều kiện sản xuất.

- MRP chỉ cảnh báo thiếu theo threshold; không tự tạo chứng từ kế toán.

**48. NGUYÊN TẮC MAPPING CHO G1 FORMULA / BOM SNAPSHOT**

G1 Formula và Production BOM Snapshot thuộc Product/Operational Truth, không phải chứng từ kế toán.

Nguyên tắc:

- G1 Formula không sync sang MISA như một chứng từ.

- BOM Snapshot không tạo bút toán kế toán.

- BOM Snapshot là evidence/định mức cho Material Issue và Costing.

- Material Issue thực tế mới tạo accounting handoff.

- Scale theo anchor rice không làm thay đổi công thức G1.

- Buffer MRP không làm thay đổi công thức sản xuất.

- Costing không được sửa BOM Snapshot.

**49. NGUYÊN TẮC MAPPING CHO DISPOSAL / WRITE-OFF**

Disposal và Write-off phải được kiểm soát chặt vì ảnh hưởng tồn kho và kế toán.

Nguyên tắc:

- Không xóa tay tồn kho.

- Không ghi giảm nếu chưa có Disposal Approval.

- Không sync write-off nếu chưa Disposal Execution.

- Không sync nếu thiếu evidence hủy/ghi giảm.

- Không sync nếu thiếu ledger write-off.

- Không tính hàng chờ hủy vào available_stock.

- Không tính hàng đã duyệt hủy vào suppression threshold.

- Không dùng MISA để hợp thức hóa việc xóa tồn kho không có evidence.

**50. NGUYÊN TẮC MAPPING CHO THÀNH PHẨM**

Thành phẩm chỉ được hạch toán nhập kho khi đã đủ điều kiện.

Điều kiện:

1.  Có Production Order.

2.  Có batch.

3.  Có QC thành phẩm.

4.  Có Batch Release.

5.  Có Warehouse Receipt Confirmed.

6.  Có ledger credit.

7.  Có SKU/thành phẩm mapping.

8.  Có kho thành phẩm mapping.

9.  Có đơn vị tính mapping.

10. Có evidence và audit.

Không tạo accounting handoff từ:

- Sản lượng dự kiến.

- Số lượng đang đóng gói.

- Số lượng đã in tem.

- Số lượng QR đã in.

- Số lượng QC chưa release.

- Số lượng chờ nhập kho.

- Số lượng bị HOLD.

- Số lượng bị recall hold.

**51. NGUYÊN TẮC MAPPING CHO NHÂN CÔNG**

Nhân công chỉ tham gia costing khi có chính sách rõ.

Nguyên tắc:

- FRM-15 không tự tạo chứng từ kế toán.

- Check-in/out chỉ là dữ liệu vận hành.

- Nhân công chỉ đưa vào costing khi có cost policy.

- Nếu cần hạch toán chính thức, phải có pack tài chính/kế toán tương ứng.

- Không dùng dữ liệu check-in/out để tính lương chính thức nếu chưa có owner pack và policy.

**52. NGUYÊN TẮC OWNER APPROVAL THEO CHECKPOINT**

Mỗi checkpoint có thể yêu cầu owner approval khác nhau.

| **Checkpoint**                             | **Owner nghiệp vụ**         | **Owner kế toán**     | **Owner cuối nếu lệch**        |
|--------------------------------------------|-----------------------------|-----------------------|--------------------------------|
| Raw Material Intake Approved               | Kho/QC/Operational owner    | Kế toán               | Owner vận hành + kế toán       |
| Packaging / Material Intake Approved       | Kho/QC nếu có               | Kế toán               | Owner vận hành + kế toán       |
| Material Issue Confirmed                   | Sản xuất/Kho                | Kế toán               | Owner vận hành + kế toán       |
| Packaging Issue Confirmed                  | Sản xuất/Kho                | Kế toán               | Owner vận hành + kế toán       |
| Disposal Write-off Confirmed               | QA/Owner/Kho                | Kế toán               | Giám đốc/Owner được phân quyền |
| Finished Goods Warehouse Receipt Confirmed | QC/Kho/Operational owner    | Kế toán               | Owner vận hành + kế toán       |
| Internal Costing Checkpoint                | Sản xuất/Tài chính quản trị | Kế toán nếu hạch toán | Owner tài chính/quản trị       |
| Sales/Revenue/Commission                   | Commerce/Finance owner      | Kế toán               | Owner pack liên quan           |

Không có owner rõ thì checkpoint không được chuyển sync chính thức.

**53. NGUYÊN TẮC EVIDENCE THEO CHECKPOINT**

**53.1. Evidence cho intake**

Evidence có thể gồm:

- Phiếu nhập.

- Ảnh hàng.

- Biên bản kiểm tra.

- Supplier document nếu có.

- QC evidence.

- Lot evidence.

- Cân đo số lượng.

- Người xác nhận.

- Thời điểm xác nhận.

**53.2. Evidence cho issue**

Evidence có thể gồm:

- Production Order.

- BOM Snapshot.

- Phiếu đề nghị cấp.

- Phiếu chấp thuận cấp.

- Phiếu kế toán xuất.

- Scan lot nếu có.

- Ledger debit.

- Người xuất.

- Người nhận.

- Thời điểm giao nhận.

**53.3. Evidence cho write-off**

Evidence có thể gồm:

- Disposal request.

- Review note.

- Approval.

- Ảnh/video hủy nếu có.

- Biên bản hủy.

- Ledger write-off.

- Người thực hiện.

- Người chứng kiến nếu policy yêu cầu.

- Lý do ghi giảm.

**53.4. Evidence cho nhập kho thành phẩm**

Evidence có thể gồm:

- Production Order.

- Batch record.

- QC thành phẩm.

- Batch Release.

- Lệnh nhập kho.

- Warehouse Receipt Confirmed.

- Ledger credit.

- Số lượng thành phẩm.

- Traceability reference.

- Người xác nhận nhập kho.

**53.5. Evidence cho costing**

Evidence có thể gồm:

- Material issue.

- Packaging issue.

- Batch yield.

- Thành phẩm nhập kho.

- Hao hụt.

- QC result.

- Cost center.

- Cost allocation policy.

- Owner approval nếu cần.

**54. NGUYÊN TẮC FAIL-CLOSED TRONG FORM-TO-MISA MATRIX**

Một phiếu có ngõ MISA vẫn phải fail-closed nếu thiếu điều kiện.

Ví dụ:

- FRM-09 có thể đi MISA nhưng thiếu mapping thì không sync.

- FRM-14 có thể đi MISA nhưng thiếu ledger debit thì không sync.

- FRM-22 có thể đi MISA nhưng chưa Warehouse Receipt Confirmed thì không sync.

- FRM-24 có thể đi MISA nhưng chưa Disposal Execution thì không sync.

- FRM-25 tồn tại nhưng trạng thái không eligible thì không sync.

Phiếu có ngõ MISA không đồng nghĩa luôn được sync.

**55. TRẠNG THÁI HANDOFF ELIGIBILITY**

FRM-25 có thể có các trạng thái eligibility:

1.  NOT_ELIGIBLE.

2.  WAITING_MAPPING.

3.  WAITING_EVIDENCE.

4.  WAITING_APPROVAL.

5.  WAITING_REVIEW.

6.  ELIGIBLE_FOR_SYNC.

7.  BLOCKED_BY_RECONCILE.

8.  BLOCKED_BY_POLICY.

9.  CANCELLED.

10. VOIDED.

Chỉ ELIGIBLE_FOR_SYNC mới được chuyển sang sync lifecycle.

**56. TRẠNG THÁI HANDOFF THEO CHECKPOINT**

| **Trạng thái**       | **Ý nghĩa**                  | **Có được sync không** |
|----------------------|------------------------------|------------------------|
| NOT_ELIGIBLE         | Chưa đủ điều kiện            | Không                  |
| WAITING_MAPPING      | Thiếu mapping                | Không                  |
| WAITING_EVIDENCE     | Thiếu evidence               | Không                  |
| WAITING_APPROVAL     | Chờ phê duyệt                | Không                  |
| WAITING_REVIEW       | Chờ review nghiệp vụ/kế toán | Không                  |
| ELIGIBLE_FOR_SYNC    | Đủ điều kiện sync            | Có                     |
| BLOCKED_BY_RECONCILE | Bị chặn do lệch đối chiếu    | Không                  |
| BLOCKED_BY_POLICY    | Bị chặn do policy            | Không                  |
| CANCELLED            | Đã hủy                       | Không                  |
| VOIDED               | Vô hiệu                      | Không                  |

**57. QUY TẮC P0 CỦA PHẦN 2/4**

**P0-11 — Mapping Registry bắt buộc trước sync**

Không có mapping ACTIVE thì không sync.

**P0-12 — Không tự đoán mã MISA**

Không module nào được tự đoán mã kho, mã hàng, mã tài khoản, mã cost center hoặc mã đối tượng MISA.

**P0-13 — Phiếu kế hoạch không tạo chứng từ kế toán**

Demand, MRP, procurement requirement, harvest requirement và suppression result không tự tạo chứng từ kế toán.

**P0-14 — FRM-25 chỉ sinh từ checkpoint hợp lệ**

Không tạo MISA Accounting Handoff Record từ dữ liệu nháp hoặc dữ liệu chưa đủ điều kiện.

**P0-15 — Sâm Savigin phải mapping riêng nếu đi kế toán**

Không gộp Sâm Savigin vào nhóm dược liệu chung.

**P0-16 — Production BOM Snapshot không phải chứng từ kế toán**

BOM Snapshot là evidence/định mức, không phải chứng từ kế toán.

**P0-17 — Costing không sửa nghiệp vụ nguồn**

Costing không được sửa BOM, issue, ledger, QC, release, receipt hoặc trace.

**P0-18 — Write-off phải có disposal execution**

Không sync ghi giảm nếu chưa có Disposal Execution và ledger write-off.

**P0-19 — Thành phẩm chỉ sync sau Warehouse Receipt Confirmed**

Packaging, printing, QC_PASS hoặc Batch Release chưa đủ để tạo accounting handoff nhập kho thành phẩm nếu chưa Warehouse Receipt Confirmed.

**P0-20 — Sales/Revenue/Commission không tự mở trong PACK-04**

PACK-04 không tự tính hoặc tự sync doanh thu, chiết khấu, hoa hồng nếu chưa có owner pack liên quan phát hành checkpoint hợp lệ.

**58. DONE GATE CỦA PHẦN 2/4**

PHẦN 2/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa Mapping Registry là điều kiện trước sync.

2.  Đã khóa nhóm mapping bắt buộc.

3.  Đã khóa trạng thái mapping.

4.  Đã khóa owner của mapping.

5.  Đã khóa mapping change governance.

6.  Đã khóa accounting handoff checkpoints.

7.  Đã khóa Raw Material Intake Approved checkpoint.

8.  Đã khóa Packaging / Material Intake Approved checkpoint.

9.  Đã khóa Material Issue Confirmed checkpoint.

10. Đã khóa Packaging / Material Issue Confirmed checkpoint.

11. Đã khóa Disposal Write-off Confirmed checkpoint.

12. Đã khóa Finished Goods Warehouse Receipt Confirmed checkpoint.

13. Đã khóa Internal Costing Checkpoint.

14. Đã khóa Sales/Revenue/Discount/Commission checkpoint chỉ mở khi có owner pack.

15. Đã khóa Costing Data Governance.

16. Đã khóa Costing Object Governance.

17. Đã khóa Form-to-MISA Matrix.

18. Đã khóa vai trò FRM-25.

19. Đã khóa fail-closed theo phiếu.

20. Đã khóa handoff eligibility.

21. Chưa gọi Production Ready, Release Approved hoặc Go-live Approved.

**59. KẾT LUẬN PHẦN 2/4**

PHẦN 2/4 khóa lớp mapping và checkpoint kế toán cho PACK-04.

Nguyên tắc trung tâm là: mọi dữ liệu đi MISA phải có nguồn vận hành hợp lệ, checkpoint hợp lệ, mapping ACTIVE, evidence, audit, owner boundary và handoff eligibility rõ ràng.

Phiếu kế hoạch không tạo chứng từ kế toán.

MRP không tạo chứng từ kế toán.

Demand không tạo chứng từ kế toán.

Harvest Requirement không tạo chứng từ kế toán.

Production BOM Snapshot không tạo chứng từ kế toán.

Scan không tạo chứng từ kế toán.

Chỉ các checkpoint đã đủ điều kiện mới được tạo FRM-25 — MISA Accounting Handoff Record.

FRM-25 là cầu nối kế toán, không phải phiếu vận hành gốc và không thay thế MISA.

PHẦN 3/4 sẽ khóa vòng đời sync, trạng thái sync, retry, error, dead-letter, manual review, reconcile, idempotency, audit và evidence control.

**PHẦN 3/4 — SYNC LIFECYCLE / STATUS / RETRY / ERROR / RECONCILE / IDEMPOTENCY / AUDIT / EVIDENCE**

**60. MỤC TIÊU CỦA PHẦN 3/4**

PHẦN 3/4 khóa vòng đời đồng bộ giữa Ginsengfood và MISA.

Phần này tập trung vào:

1.  Vòng đời sync từ FRM-25 sang MISA.

2.  Trạng thái sync chuẩn.

3.  Nguyên tắc retry.

4.  Nguyên tắc xử lý lỗi.

5.  Nguyên tắc dead-letter và manual review.

6.  Nguyên tắc reconcile giữa Ginsengfood và MISA.

7.  Nguyên tắc idempotency chống sync trùng.

8.  Nguyên tắc audit bắt buộc.

9.  Nguyên tắc evidence bắt buộc.

10. Nguyên tắc không sửa ngược Operational Truth.

11. Nguyên tắc không tự hợp thức hóa chứng từ lỗi.

12. Nguyên tắc không gọi sync thành công nếu chưa có đối chiếu hợp lệ.

**61. NGUYÊN TẮC TỔNG QUÁT VỀ SYNC LIFECYCLE**

Sync lifecycle là vòng đời kiểm soát một accounting handoff từ lúc đủ điều kiện sync đến khi MISA ghi nhận, đối chiếu và đóng vòng.

Một bản ghi chỉ được đi vào sync lifecycle khi:

1.  Có FRM-25 hợp lệ.

2.  Có checkpoint hợp lệ.

3.  Có mapping ACTIVE.

4.  Có evidence.

5.  Có audit.

6.  Có idempotency reference.

7.  Có trạng thái ELIGIBLE_FOR_SYNC.

8.  Không bị chặn bởi reconcile.

9.  Không bị chặn bởi policy.

10. Không thuộc trạng thái hold/reject/void/cancel.

Nếu thiếu một điều kiện, bản ghi không được bước vào sync lifecycle chính thức.

**62. VÒNG ĐỜI SYNC CHUẨN**

Vòng đời sync chuẩn gồm các giai đoạn:

1.  Handoff Created.

2.  Eligibility Checked.

3.  Mapping Validated.

4.  Payload Prepared.

5.  Ready for Sync.

6.  Dispatching.

7.  Sent to MISA.

8.  MISA Response Received.

9.  Sync Accepted hoặc Sync Failed.

10. Reconcile Pending.

11. Reconcile Completed.

12. Closed.

Không được rút gọn vòng đời bằng cách gọi MISA xong là hoàn tất nếu chưa có trạng thái, audit, evidence và reconcile phù hợp.

**63. GIAI ĐOẠN 01 — HANDOFF CREATED**

**63.1. Ý nghĩa**

Handoff Created là trạng thái FRM-25 được tạo từ checkpoint hợp lệ.

FRM-25 không được tạo từ dữ liệu nháp, dữ liệu chưa đủ điều kiện hoặc phiếu kế hoạch.

**63.2. Điều kiện**

Handoff Created chỉ được ghi nhận khi có:

1.  Checkpoint type.

2.  Phiếu nguồn.

3.  Nghiệp vụ nguồn.

4.  Owner nghiệp vụ.

5.  Đối tượng kế toán dự kiến.

6.  Dữ liệu số lượng.

7.  Dữ liệu đơn vị tính.

8.  Dữ liệu kho/location nếu có.

9.  Evidence reference.

10. Audit reference.

11. Idempotency reference.

**63.3. Không được làm**

Không được tạo FRM-25 trước rồi chờ bổ sung nghiệp vụ sau.

Không được dùng FRM-25 để hợp thức hóa phiếu nguồn thiếu dữ liệu.

Không được tạo FRM-25 để sửa lỗi vận hành.

**64. GIAI ĐOẠN 02 — ELIGIBILITY CHECKED**

**64.1. Ý nghĩa**

Eligibility Checked là bước xác định FRM-25 có đủ điều kiện bước vào sync hay không.

**64.2. Điều kiện kiểm tra**

Eligibility phải kiểm tra:

1.  Checkpoint hợp lệ.

2.  Phiếu nguồn hợp lệ.

3.  Trạng thái nghiệp vụ hợp lệ.

4.  Không HOLD.

5.  Không REJECTED.

6.  Không VOIDED.

7.  Không CANCELLED.

8.  Không PENDING_REVIEW.

9.  Không bị recall hold nếu nghiệp vụ bị ảnh hưởng.

10. Không bị sale lock nếu nghiệp vụ liên quan sellable.

11. Có mapping.

12. Có evidence.

13. Có audit.

14. Có owner approval nếu cần.

15. Có idempotency reference.

**64.3. Kết quả**

Kết quả eligibility có thể là:

- ELIGIBLE_FOR_SYNC.

- WAITING_MAPPING.

- WAITING_EVIDENCE.

- WAITING_APPROVAL.

- WAITING_REVIEW.

- BLOCKED_BY_POLICY.

- BLOCKED_BY_RECONCILE.

- NOT_ELIGIBLE.

Chỉ ELIGIBLE_FOR_SYNC mới được đi tiếp.

**65. GIAI ĐOẠN 03 — MAPPING VALIDATED**

**65.1. Ý nghĩa**

Mapping Validated xác nhận toàn bộ mapping liên quan đang ACTIVE và phù hợp với nghiệp vụ.

**65.2. Nhóm mapping phải kiểm tra**

Tùy checkpoint, hệ thống phải kiểm tra:

1.  Mapping kho.

2.  Mapping location nếu áp dụng.

3.  Mapping nguyên liệu.

4.  Mapping bao bì.

5.  Mapping vật tư.

6.  Mapping thành phẩm/SKU.

7.  Mapping đơn vị tính.

8.  Mapping supplier nếu áp dụng.

9.  Mapping Company Source nếu áp dụng.

10. Mapping tài khoản kế toán nếu áp dụng.

11. Mapping cost center nếu áp dụng.

12. Mapping đối tượng tập hợp chi phí nếu áp dụng.

13. Mapping nhân sự/bộ phận nếu áp dụng.

**65.3. Fail-closed**

Nếu mapping thiếu, trùng, xung đột, hết hiệu lực hoặc chưa được duyệt, bản ghi phải fail-closed.

Không được tự đoán mã MISA.

Không được dùng mapping gần đúng.

Không được sửa dữ liệu vận hành để ép khớp mapping.

**66. GIAI ĐOẠN 04 — PAYLOAD PREPARED**

**66.1. Ý nghĩa**

Payload Prepared là bước chuẩn hóa dữ liệu kế toán dự kiến trước khi gửi MISA.

Đây không phải bước thiết kế API.

Đây là bước quản trị nội dung dữ liệu được phép rời khỏi Ginsengfood sang MISA.

**66.2. Payload phải bám nguồn**

Payload phải lấy dữ liệu từ:

- Phiếu nguồn.

- Checkpoint.

- Mapping Registry.

- Evidence Packet.

- Audit Trail.

- Costing Policy nếu áp dụng.

- Owner Approval nếu áp dụng.

Không lấy dữ liệu từ nhập tay rời.

Không lấy dữ liệu từ dữ liệu nháp.

Không lấy dữ liệu từ MRP để thay số lượng thực tế.

Không lấy dữ liệu từ scan để thay confirm.

**67. GIAI ĐOẠN 05 — READY FOR SYNC**

**67.1. Ý nghĩa**

Ready for Sync là trạng thái bản ghi đã đủ điều kiện để được MISA Integration Layer xử lý.

**67.2. Điều kiện**

Ready for Sync yêu cầu:

1.  FRM-25 hợp lệ.

2.  Eligibility = ELIGIBLE_FOR_SYNC.

3.  Mapping Validated.

4.  Payload Prepared.

5.  Idempotency ready.

6.  Evidence complete.

7.  Audit complete.

8.  Không có policy block.

9.  Không có reconcile block.

10. Không có manual hold.

**67.3. Không đồng nghĩa đã sync**

Ready for Sync không có nghĩa là MISA đã ghi nhận.

Ready for Sync chỉ là trạng thái được phép gửi.

**68. GIAI ĐOẠN 06 — DISPATCHING**

**68.1. Ý nghĩa**

Dispatching là trạng thái MISA Integration Layer đang xử lý bản ghi để gửi sang MISA.

**68.2. Nguyên tắc**

Trong Dispatching:

- Không tạo thêm FRM-25 mới cho cùng nghiệp vụ.

- Không cho sửa dữ liệu nguồn.

- Không cho đổi mapping.

- Không cho thao tác gửi song song gây trùng.

- Không cho user bấm gửi nhiều lần tạo nhiều chứng từ.

- Không được bỏ qua idempotency.

**68.3. Lỗi trong Dispatching**

Nếu lỗi kỹ thuật tạm thời, có thể đưa vào retry.

Nếu lỗi nghiệp vụ, phải chặn và đưa review.

Nếu lỗi mapping, phải quay về WAITING_MAPPING hoặc MAPPING_ERROR.

**69. GIAI ĐOẠN 07 — SENT TO MISA**

**69.1. Ý nghĩa**

Sent to MISA là trạng thái dữ liệu đã được gửi đi.

Trạng thái này chưa được xem là thành công hoàn chỉnh.

**69.2. Không được hiểu sai**

Sent không đồng nghĩa MISA đã ghi nhận.

Sent không đồng nghĩa đã có chứng từ hợp lệ.

Sent không đồng nghĩa reconcile đã khớp.

Sent không đồng nghĩa kế toán đã hoàn tất.

**70. GIAI ĐOẠN 08 — MISA RESPONSE RECEIVED**

**70.1. Ý nghĩa**

MISA Response Received là trạng thái hệ thống đã nhận phản hồi từ MISA.

Phản hồi có thể là:

1.  Accepted.

2.  Rejected.

3.  Duplicate.

4.  Validation Error.

5.  Mapping Error.

6.  Permission Error.

7.  Timeout.

8.  Unknown.

9.  Partial Success nếu nghiệp vụ MISA hỗ trợ.

10. Manual Review Required.

**70.2. Nguyên tắc**

Phản hồi từ MISA phải được lưu audit.

Không được chỉ hiển thị lỗi rồi mất log.

Không được sửa chứng từ nguồn âm thầm để gửi lại.

Không được coi timeout là thất bại hoàn toàn nếu chưa xác định MISA có nhận hay chưa.

Timeout phải được xử lý bằng idempotency và reconcile.

**71. GIAI ĐOẠN 09 — SYNC ACCEPTED / SYNC FAILED**

**71.1. Sync Accepted**

Sync Accepted là trạng thái MISA đã chấp nhận bản ghi ở mức tích hợp.

Sync Accepted chưa nhất thiết là reconcile completed.

Nếu cần đối chiếu chứng từ, số chứng từ, số lượng, giá trị hoặc trạng thái hạch toán, bản ghi phải chuyển sang Reconcile Pending.

**71.2. Sync Failed**

Sync Failed là trạng thái bản ghi không được MISA chấp nhận hoặc không thể hoàn thành gửi.

Sync Failed phải phân loại:

1.  Failed Retryable.

2.  Failed Non-Retryable.

3.  Failed Mapping.

4.  Failed Policy.

5.  Failed Validation.

6.  Failed Permission.

7.  Failed Duplicate.

8.  Failed Unknown.

9.  Manual Review Required.

10. Dead-letter.

Không được gom mọi lỗi thành một dòng “sync lỗi”.

**72. GIAI ĐOẠN 10 — RECONCILE PENDING**

**72.1. Ý nghĩa**

Reconcile Pending là trạng thái cần đối chiếu giữa Ginsengfood và MISA.

**72.2. Khi nào cần Reconcile Pending**

Reconcile Pending áp dụng khi:

- MISA đã nhận chứng từ.

- MISA trả số chứng từ.

- Có giá trị/số lượng cần đối chiếu.

- Có khả năng user sửa tay bên MISA.

- Có timeout chưa rõ MISA đã nhận chưa.

- Có duplicate warning.

- Có partial success.

- Có dữ liệu cần kế toán xác nhận.

- Có costing checkpoint liên quan.

**72.3. Không được đóng vòng khi chưa reconcile**

Nếu checkpoint yêu cầu reconcile, không được gọi sync hoàn tất nếu chưa reconcile completed.

**73. GIAI ĐOẠN 11 — RECONCILE COMPLETED**

**73.1. Ý nghĩa**

Reconcile Completed là trạng thái đối chiếu đã hoàn thành.

**73.2. Kết quả reconcile**

Kết quả có thể là:

1.  MATCHED.

2.  MATCHED_WITH_NOTE.

3.  MISMATCH_QUANTITY.

4.  MISMATCH_UOM.

5.  MISMATCH_WAREHOUSE.

6.  MISMATCH_ITEM.

7.  MISMATCH_VALUE.

8.  MISMATCH_ACCOUNT.

9.  MISMATCH_COST_CENTER.

10. MISA_DOCUMENT_MISSING.

11. OPERATIONAL_SOURCE_MISSING.

12. MANUAL_CHANGE_DETECTED.

13. NEED_ACCOUNTING_REVIEW.

14. NEED_OPERATIONAL_REVIEW.

15. BLOCKED.

Chỉ MATCHED hoặc MATCHED_WITH_NOTE được xem là reconcile đạt.

**74. GIAI ĐOẠN 12 — CLOSED**

**74.1. Ý nghĩa**

Closed là trạng thái vòng sync đã đóng.

**74.2. Điều kiện đóng**

Chỉ được Closed khi:

1.  Sync đã accepted hoặc được xử lý hợp lệ.

2.  Reconcile đạt nếu checkpoint yêu cầu.

3.  Không còn lỗi mở.

4.  Không còn manual review mở.

5.  Evidence đã lưu.

6.  Audit đã lưu.

7.  Trạng thái cuối rõ ràng.

8.  Không có duplicate chưa xử lý.

9.  Không có mismatch chưa xử lý.

10. Owner sign-off nếu policy yêu cầu.

**75. BẢNG TRẠNG THÁI SYNC CHUẨN**

| **Trạng thái**             | **Ý nghĩa**                        | **Có gửi MISA không** | **Có được xem hoàn tất không** |
|----------------------------|------------------------------------|-----------------------|--------------------------------|
| NOT_READY                  | Chưa đủ điều kiện                  | Không                 | Không                          |
| READY_FOR_SYNC             | Đủ điều kiện gửi                   | Chưa                  | Không                          |
| DISPATCHING                | Đang xử lý gửi                     | Đang xử lý            | Không                          |
| SENT                       | Đã gửi                             | Có                    | Không                          |
| ACCEPTED_BY_MISA           | MISA đã chấp nhận                  | Đã gửi                | Chưa chắc                      |
| REJECTED_BY_MISA           | MISA từ chối                       | Không tiếp            | Không                          |
| FAILED_RETRYABLE           | Lỗi có thể thử lại                 | Có thể                | Không                          |
| FAILED_NON_RETRYABLE       | Lỗi không được retry               | Không                 | Không                          |
| WAITING_MAPPING_FIX        | Chờ sửa mapping                    | Không                 | Không                          |
| WAITING_POLICY_REVIEW      | Chờ review policy                  | Không                 | Không                          |
| WAITING_ACCOUNTING_REVIEW  | Chờ kế toán review                 | Không                 | Không                          |
| WAITING_OPERATIONAL_REVIEW | Chờ vận hành review                | Không                 | Không                          |
| DEAD_LETTER                | Lỗi bị đưa vào hàng xử lý đặc biệt | Không tự động         | Không                          |
| RECONCILE_PENDING          | Chờ đối chiếu                      | Không cần gửi mới     | Không                          |
| RECONCILED_MATCHED         | Đối chiếu khớp                     | Không cần gửi mới     | Có thể                         |
| RECONCILED_MISMATCH        | Đối chiếu lệch                     | Không                 | Không                          |
| CLOSED                     | Đã đóng vòng hợp lệ                | Không                 | Có                             |
| CANCELLED                  | Đã hủy                             | Không                 | Không                          |
| VOIDED                     | Vô hiệu                            | Không                 | Không                          |

**76. NGUYÊN TẮC RETRY**

**76.1. Retry chỉ dùng cho lỗi kỹ thuật tạm thời**

Retry được phép với lỗi:

- Mất kết nối tạm thời.

- Timeout kỹ thuật.

- MISA tạm thời không phản hồi.

- Lỗi rate limit tạm thời.

- Lỗi worker tạm thời.

- Lỗi callback chậm.

- Lỗi đồng bộ tạm thời không do dữ liệu sai.

**76.2. Retry không dùng cho lỗi nghiệp vụ**

Không retry tự động với lỗi:

- Thiếu mapping.

- Mapping sai.

- Mapping trùng.

- Thiếu evidence.

- Thiếu audit.

- Thiếu owner approval.

- Sai đơn vị tính.

- Sai mã hàng.

- Sai kho.

- Sai tài khoản kế toán.

- Sai cost center.

- Checkpoint chưa hợp lệ.

- Dữ liệu bị HOLD.

- Dữ liệu bị REJECTED.

- Dữ liệu bị VOIDED.

- Dữ liệu bị CANCELLED.

- Dữ liệu vượt số lượng nguồn.

- Dữ liệu không có phiếu nguồn.

- MISA từ chối do validation nghiệp vụ.

Các lỗi này phải đưa về review hoặc fail-closed.

**77. CHÍNH SÁCH RETRY MẶC ĐỊNH**

Retry mặc định áp dụng cho lỗi kỹ thuật tạm thời:

1.  Lần 1: thử lại sau khoảng ngắn.

2.  Lần 2: thử lại sau khoảng dài hơn.

3.  Lần 3: thử lại sau khoảng dài hơn nữa.

4.  Sau số lần retry tối đa: chuyển FAILED hoặc DEAD_LETTER theo policy.

Nguyên tắc:

- Số lần retry phải cấu hình được.

- Khoảng cách retry phải cấu hình được.

- Retry phải có audit.

- Retry không được tạo chứng từ trùng.

- Retry phải dùng idempotency reference.

- Retry không được sửa payload âm thầm.

- Retry không được bỏ qua lỗi validation.

**78. DEAD-LETTER GOVERNANCE**

**78.1. Dead-letter là gì**

Dead-letter là trạng thái bản ghi không thể xử lý tự động sau khi đã thử theo policy hoặc phát hiện lỗi cần can thiệp.

Dead-letter không phải thùng rác.

Dead-letter là hàng chờ xử lý đặc biệt có audit.

**78.2. Khi nào đưa vào dead-letter**

Đưa vào dead-letter khi:

- Retry kỹ thuật vượt giới hạn.

- Trạng thái MISA không xác định sau nhiều lần kiểm tra.

- Duplicate không thể tự phân giải.

- Mismatch nghiêm trọng.

- Mapping conflict chưa xử lý.

- MISA từ chối không rõ nguyên nhân.

- Có nghi ngờ chứng từ bị sửa tay bên MISA.

- Có lỗi dữ liệu cần owner review.

- Có lỗi idempotency cần kiểm tra.

- Có rủi ro tạo chứng từ trùng.

**78.3. Xử lý dead-letter**

Dead-letter phải có:

1.  Lý do vào dead-letter.

2.  Thời điểm.

3.  Nghiệp vụ nguồn.

4.  Checkpoint.

5.  Payload reference.

6.  Error detail.

7.  Retry history.

8.  Người/đơn vị được giao xử lý.

9.  Kết quả xử lý.

10. Evidence xử lý.

Không được xóa dead-letter để làm sạch báo cáo.

**79. MANUAL REVIEW GOVERNANCE**

**79.1. Khi nào cần manual review**

Manual review cần khi hệ thống không được tự quyết.

Các trường hợp gồm:

- Mapping conflict.

- Reconcile mismatch.

- MISA duplicate warning.

- Timeout không rõ MISA đã nhận chưa.

- Số lượng lệch.

- Đơn vị tính lệch.

- Kho lệch.

- Tài khoản kế toán lệch.

- Cost center lệch.

- Evidence chưa đủ.

- Dữ liệu nguồn bị nghi ngờ sai.

- MISA có chứng từ không có nguồn vận hành.

- Nghiệp vụ cần owner override.

**79.2. Manual review không phải sửa tay tùy tiện**

Manual review phải có:

1.  Người review.

2.  Vai trò review.

3.  Nội dung review.

4.  Quyết định.

5.  Lý do.

6.  Evidence.

7.  Audit.

8.  Tác động đến sync.

9.  Tác động đến reconcile.

10. Tác động đến nghiệp vụ nguồn nếu có.

Manual review không được sửa ngược Operational Truth nếu không có quy trình nghiệp vụ hợp lệ.

**80. ERROR CLASSIFICATION**

Lỗi sync phải được phân loại rõ.

**80.1. Mapping Error**

Mapping Error gồm:

- Thiếu mapping.

- Mapping chưa ACTIVE.

- Mapping trùng.

- Mapping xung đột.

- Mapping hết hiệu lực.

- Mapping sai loại đối tượng.

- Mapping sai đơn vị tính.

- Mapping sai kho.

- Mapping sai tài khoản.

- Mapping sai cost center.

Xử lý: fail-closed, chờ sửa mapping, không retry tự động.

**80.2. Policy Error**

Policy Error gồm:

- Checkpoint chưa hợp lệ.

- Dữ liệu không được phép đi MISA.

- Thiếu approval.

- Trạng thái nghiệp vụ bị chặn.

- Nghiệp vụ thuộc phạm vi pack khác chưa có checkpoint.

- Vi phạm owner boundary.

- Vi phạm source-of-truth.

- Vượt policy ghi nhận.

Xử lý: chờ owner review hoặc chặn.

**80.3. Validation Error**

Validation Error gồm:

- Thiếu số lượng.

- Số lượng không hợp lệ.

- Đơn vị tính không hợp lệ.

- Mã hàng không hợp lệ.

- Mã kho không hợp lệ.

- Ngày chứng từ không hợp lệ.

- Thiếu đối tượng liên quan.

- Dữ liệu vượt nguồn.

- Dữ liệu không khớp phiếu nguồn.

Xử lý: không retry tự động, đưa review.

**80.4. Technical Error**

Technical Error gồm:

- Mất kết nối.

- Timeout.

- Lỗi hệ thống tạm thời.

- MISA tạm thời không phản hồi.

- Callback chậm.

- Worker tạm thời lỗi.

- Rate limit.

Xử lý: retry theo policy, sau đó dead-letter nếu không xử lý được.

**80.5. Permission Error**

Permission Error gồm:

- MISA từ chối quyền.

- Token/credential lỗi.

- Cấu hình môi trường sai.

- Tài khoản tích hợp không đủ quyền.

- Chứng từ không được phép tạo theo quyền hiện tại.

Xử lý: chặn, đưa technical/admin review, không retry mù.

**80.6. Duplicate Error**

Duplicate Error gồm:

- Cùng checkpoint tạo nhiều yêu cầu sync.

- MISA báo chứng từ đã tồn tại.

- Timeout lần trước nhưng MISA đã nhận.

- User bấm sync nhiều lần.

- Worker xử lý lặp.

- Manual send trùng.

Xử lý: dùng idempotency và reconcile, không tạo chứng từ mới.

**80.7. Reconcile Error**

Reconcile Error gồm:

- Lệch số lượng.

- Lệch đơn vị tính.

- Lệch kho.

- Lệch mã hàng.

- Lệch giá trị.

- Lệch tài khoản.

- Lệch cost center.

- Chứng từ MISA thiếu nguồn.

- Nguồn vận hành thiếu chứng từ MISA.

- Chứng từ bị sửa tay bên MISA.

Xử lý: đưa reconcile review, không đóng vòng sync.

**81. IDEMPOTENCY GOVERNANCE**

**81.1. Mục tiêu**

Idempotency bảo vệ hệ thống khỏi sync trùng.

Mỗi nghiệp vụ nguồn chỉ được tạo một kết quả sync chính thức cho cùng checkpoint, trừ khi có nghiệp vụ điều chỉnh hợp lệ.

**81.2. Idempotency reference**

Mỗi sync phải có idempotency reference gắn với:

- Pack.

- Checkpoint type.

- Phiếu nguồn.

- Nghiệp vụ nguồn.

- Handoff record.

- Đối tượng hàng hóa/vật tư/thành phẩm.

- Kho.

- Đợt sync.

- Phiên bản payload nếu có.

**81.3. Nguyên tắc**

- Retry dùng lại idempotency reference.

- Timeout không được tự tạo reference mới.

- Duplicate phải reconcile trước khi gửi lại.

- Manual resend phải có owner approval.

- Điều chỉnh phải tạo adjustment reference, không ghi đè chứng từ cũ.

- Không xóa idempotency history.

**82. PAYLOAD VERSIONING GOVERNANCE**

**82.1. Khi nào cần version payload**

Payload cần version khi:

- Mapping thay đổi trước khi sync.

- Dữ liệu nguồn được điều chỉnh hợp lệ.

- Chứng từ bị MISA từ chối vì validation.

- Owner yêu cầu sửa handoff.

- Reconcile yêu cầu điều chỉnh.

- Manual review cho phép gửi lại.

**82.2. Nguyên tắc version**

- Không sửa payload cũ âm thầm.

- Payload mới phải ghi version.

- Payload mới phải có lý do.

- Payload mới phải liên kết payload cũ.

- Payload mới phải không phá audit.

- Payload mới phải không làm mất chứng từ đã sync.

- Payload mới phải tôn trọng idempotency policy.

**83. RECONCILE GOVERNANCE**

**83.1. Mục tiêu reconcile**

Reconcile đảm bảo dữ liệu giữa Ginsengfood và MISA được đối chiếu.

Reconcile không thay thế audit.

Reconcile không sửa ngược Operational Truth.

Reconcile là cơ chế phát hiện lệch và đưa vào xử lý.

**83.2. Đối tượng reconcile**

Reconcile áp dụng cho:

1.  Nhập nguyên liệu.

2.  Nhập bao bì/vật tư.

3.  Xuất nguyên liệu cho sản xuất.

4.  Xuất bao bì/vật tư cho sản xuất.

5.  Ghi giảm tồn kho.

6.  Nhập kho thành phẩm.

7.  Costing checkpoint nếu áp dụng.

8.  Sales/revenue/commission checkpoint nếu pack owner liên quan kích hoạt.

**83.3. Trục reconcile**

Reconcile phải đối chiếu theo các trục:

- Nghiệp vụ nguồn.

- Checkpoint.

- FRM-25.

- Số chứng từ MISA.

- Ngày chứng từ.

- Kho.

- Mã hàng.

- Đơn vị tính.

- Số lượng.

- Giá trị nếu có.

- Tài khoản nếu có.

- Cost center nếu có.

- Đối tượng tập hợp chi phí nếu có.

- Supplier/customer nếu có.

- Trạng thái chứng từ.

- Evidence.

- Audit.

**84. RECONCILE RESULT**

Kết quả reconcile gồm:

| **Kết quả**                | **Ý nghĩa**                  | **Hành động**                        |
|----------------------------|------------------------------|--------------------------------------|
| MATCHED                    | Khớp                         | Có thể đóng vòng                     |
| MATCHED_WITH_NOTE          | Khớp nhưng có ghi chú        | Có thể đóng vòng nếu owner chấp nhận |
| MISMATCH_QUANTITY          | Lệch số lượng                | Review                               |
| MISMATCH_UOM               | Lệch đơn vị tính             | Review                               |
| MISMATCH_WAREHOUSE         | Lệch kho                     | Review                               |
| MISMATCH_ITEM              | Lệch mã hàng                 | Review                               |
| MISMATCH_VALUE             | Lệch giá trị                 | Kế toán review                       |
| MISMATCH_ACCOUNT           | Lệch tài khoản               | Kế toán review                       |
| MISMATCH_COST_CENTER       | Lệch cost center             | Kế toán/owner review                 |
| MISA_DOCUMENT_MISSING      | MISA thiếu chứng từ          | Kiểm tra sync                        |
| OPERATIONAL_SOURCE_MISSING | MISA có chứng từ thiếu nguồn | Review nghiêm trọng                  |
| DUPLICATE_FOUND            | Phát hiện trùng              | Review/idempotency                   |
| MANUAL_CHANGE_DETECTED     | Có sửa tay bên MISA          | Review                               |
| BLOCKED                    | Không thể đối chiếu          | Chặn                                 |
| NEED_RETRY                 | Cần retry kỹ thuật           | Retry theo policy                    |
| NEED_MANUAL_REVIEW         | Cần xử lý thủ công           | Manual review                        |

**85. NGUYÊN TẮC XỬ LÝ RECONCILE MISMATCH**

**85.1. Không tự sửa Operational Truth**

Nếu MISA lệch với Ginsengfood, không được tự sửa dữ liệu vận hành để khớp MISA.

Operational Truth vẫn thuộc Ginsengfood.

**85.2. Không tự sửa MISA nếu chưa có quyền**

Nếu MISA sai, phải xử lý qua kế toán hoặc quy trình điều chỉnh được duyệt.

Không được tự tạo bút toán đảo, chứng từ điều chỉnh hoặc chứng từ mới nếu chưa có owner approval.

**85.3. Không đóng vòng khi còn lệch**

Nếu reconcile mismatch chưa xử lý, bản ghi không được Closed.

**85.4. Phải phân loại lệch**

Mỗi lệch phải xác định:

1.  Lệch do Ginsengfood.

2.  Lệch do MISA.

3.  Lệch do mapping.

4.  Lệch do đơn vị tính.

5.  Lệch do chứng từ sửa tay.

6.  Lệch do sync trùng.

7.  Lệch do timeout.

8.  Lệch do dữ liệu thiếu.

**86. MANUAL CHANGE DETECTION**

**86.1. Ý nghĩa**

Manual Change Detection là cơ chế phát hiện chứng từ bên MISA bị thay đổi thủ công sau sync.

**86.2. Trường hợp cần phát hiện**

- Số lượng bên MISA bị sửa.

- Đơn vị tính bị sửa.

- Kho bị sửa.

- Mã hàng bị sửa.

- Giá trị bị sửa.

- Tài khoản bị sửa.

- Cost center bị sửa.

- Chứng từ bị xóa/hủy bên MISA.

- Chứng từ bị thay đổi trạng thái.

- Chứng từ bị tách/gộp.

**86.3. Nguyên tắc xử lý**

Nếu phát hiện manual change:

1.  Không sửa ngược Ginsengfood.

2.  Đưa vào reconcile review.

3.  Ghi audit.

4.  Thông báo owner/kế toán theo policy.

5.  Yêu cầu quyết định xử lý.

6.  Lưu evidence kết quả.

**87. AUDIT GOVERNANCE**

**87.1. Audit là bắt buộc**

Mọi bước trong sync lifecycle phải có audit.

Không audit thì không được gọi là sync hợp lệ.

**87.2. Audit phải ghi nhận**

Audit phải ghi nhận:

1.  Ai tạo nghiệp vụ nguồn.

2.  Ai xác nhận phiếu nguồn.

3.  Ai duyệt checkpoint nếu có.

4.  Khi nào tạo FRM-25.

5.  Mapping nào được dùng.

6.  Payload version nào được dùng.

7.  Khi nào gửi MISA.

8.  Gửi bởi tiến trình/người nào.

9.  MISA phản hồi gì.

10. Có retry không.

11. Retry bao nhiêu lần.

12. Có lỗi gì.

13. Có dead-letter không.

14. Ai review.

15. Reconcile kết quả gì.

16. Khi nào đóng vòng.

17. Lý do điều chỉnh nếu có.

**88. EVIDENCE GOVERNANCE**

**88.1. Evidence là bắt buộc**

Mọi accounting handoff phải có evidence.

Evidence không chỉ là file đính kèm.

Evidence là tập hợp bằng chứng để chứng minh nghiệp vụ nguồn có thật, hợp lệ, được duyệt và đủ điều kiện kế toán.

**88.2. Evidence theo vòng đời sync**

Evidence phải bao gồm:

- Evidence phiếu nguồn.

- Evidence checkpoint.

- Evidence mapping nếu cần.

- Evidence owner approval nếu cần.

- Evidence payload.

- Evidence MISA response.

- Evidence retry nếu có.

- Evidence error nếu có.

- Evidence reconcile.

- Evidence manual review nếu có.

- Evidence close.

**88.3. Không có evidence thì không gọi hoàn tất**

Nếu thiếu evidence ở bước bắt buộc, trạng thái không được Closed.

**89. QUY TẮC EVIDENCE PACKET**

Evidence Packet phải liên kết được:

1.  Pack.

2.  Checkpoint.

3.  Phiếu nguồn.

4.  FRM-25.

5.  Sync run.

6.  Mapping used.

7.  MISA response.

8.  Reconcile result.

9.  Owner review nếu có.

10. Final status.

Evidence Packet không được rời rạc.

Không được để chứng từ MISA không truy ngược được về phiếu nguồn.

Không được để phiếu nguồn không biết đã đi MISA chưa.

**90. SYNC ENVIRONMENT GOVERNANCE**

**90.1. Môi trường DEV**

DEV dùng để kiểm tra kỹ thuật, không tạo chứng từ kế toán chính thức.

DEV có thể dùng dữ liệu giả, mapping giả và MISA sandbox/dry-run nếu có.

Không dùng DEV làm bằng chứng Production Ready.

**90.2. Môi trường STAGING**

STAGING dùng để kiểm thử gần thực tế.

STAGING phải có:

- Mapping kiểm thử.

- Dữ liệu kiểm thử có kiểm soát.

- Dry-run hoặc sandbox.

- Smoke evidence.

- Reconcile thử.

- Error handling thử.

- Owner review nếu cần.

STAGING không đồng nghĩa production.

**90.3. Môi trường PRODUCTION**

PRODUCTION chỉ được mở khi có:

1.  Mapping thật.

2.  Credential thật được quản trị.

3.  Owner approval.

4.  Smoke pass.

5.  Evidence accepted.

6.  Reconcile policy.

7.  Rollback/disable policy.

8.  Monitoring.

9.  Security review.

10. Release decision hợp lệ.

Không được bật production sync chỉ vì tài liệu đã viết xong.

**91. DRY-RUN GOVERNANCE**

**91.1. Vai trò của dry-run**

Dry-run dùng để kiểm tra payload, mapping, checkpoint và logic sync mà không tạo chứng từ chính thức.

**91.2. Dry-run không phải sync thật**

Dry-run không được tính là kế toán đã ghi nhận.

Dry-run không tạo accounting truth chính thức.

Dry-run không thay thế production smoke.

**91.3. Dry-run phải có evidence**

Dry-run vẫn phải lưu:

- Payload thử.

- Mapping dùng thử.

- Kết quả kiểm tra.

- Error nếu có.

- Người review.

- Kết luận.

**92. PRODUCTION SYNC CONTROL**

**92.1. Điều kiện mở production sync**

Production sync chỉ được mở khi:

1.  Mapping production ACTIVE.

2.  MISA credential hợp lệ.

3.  MISA Integration Layer được owner duyệt.

4.  Checkpoint policy được khóa.

5.  Smoke pass.

6.  Error handling pass.

7.  Retry policy pass.

8.  Reconcile pass.

9.  Evidence accepted.

10. Owner sign-off.

11. Release decision hợp lệ.

**92.2. Điều kiện tạm dừng production sync**

Phải tạm dừng production sync khi:

- Mapping lỗi diện rộng.

- MISA từ chối hàng loạt.

- Reconcile mismatch nghiêm trọng.

- Duplicate phát sinh.

- Credential nghi ngờ rủi ro.

- Manual change không kiểm soát.

- Chứng từ kế toán lệch nguồn vận hành.

- Có P0 issue mở.

- Owner yêu cầu đóng sync.

**93. SYNC DISABLE / PAUSE GOVERNANCE**

MISA Integration Layer phải có nguyên tắc tạm dừng sync.

Tạm dừng sync không được làm mất nghiệp vụ nguồn.

Khi tạm dừng:

- Nghiệp vụ vận hành vẫn có thể tiếp tục nếu không phụ thuộc MISA.

- FRM-25 có thể chờ sync nếu đủ điều kiện.

- Không được tạo chứng từ MISA mới.

- Phải ghi lý do pause.

- Phải ghi thời điểm pause.

- Phải ghi owner quyết định.

- Khi mở lại phải có review.

**94. ADJUSTMENT GOVERNANCE**

**94.1. Khi nào cần điều chỉnh**

Điều chỉnh cần khi:

- Chứng từ đã sync nhưng phát hiện sai.

- MISA đã nhận chứng từ nhưng số lượng cần điều chỉnh.

- Mapping trước đó sai.

- Đơn vị tính sai.

- Kho sai.

- Giá trị sai.

- Ghi giảm cần điều chỉnh.

- Kế toán yêu cầu điều chỉnh.

- Reconcile xác nhận cần điều chỉnh.

**94.2. Nguyên tắc điều chỉnh**

- Không sửa âm thầm chứng từ gốc.

- Không xóa audit cũ.

- Không xóa evidence cũ.

- Không sửa Operational Truth nếu nghiệp vụ nguồn đúng.

- Nếu nghiệp vụ nguồn sai, phải xử lý bằng nghiệp vụ vận hành điều chỉnh hợp lệ.

- Nếu kế toán sai, xử lý bằng chứng từ điều chỉnh hoặc quy trình MISA hợp lệ.

- Mọi điều chỉnh phải có reason, owner approval và evidence.

**95. ROLLBACK GOVERNANCE**

Rollback trong PACK-04 không có nghĩa là xóa sạch chứng từ.

Rollback phải được hiểu là quy trình xử lý có kiểm soát khi sync sai hoặc release sync gặp sự cố.

Rollback có thể gồm:

1.  Tạm dừng sync.

2.  Chặn checkpoint liên quan.

3.  Đưa bản ghi vào manual review.

4.  Reconcile toàn bộ bản ghi liên quan.

5.  Tạo chứng từ điều chỉnh nếu được duyệt.

6.  Ghi nhận incident.

7.  Lưu evidence.

8.  Owner sign-off trước khi mở lại.

Không được rollback bằng cách xóa dữ liệu vận hành hoặc xóa log sync.

**96. SECURITY / ACCESS CONTROL GOVERNANCE**

**96.1. Quyền truy cập sync**

Không phải mọi người dùng đều được sync MISA.

Các quyền phải phân tách:

- Người tạo nghiệp vụ nguồn.

- Người xác nhận vận hành.

- Người duyệt checkpoint.

- Người review kế toán.

- Người xử lý mapping.

- Người vận hành sync.

- Người xử lý lỗi.

- Người reconcile.

- Người phê duyệt điều chỉnh.

**96.2. Không dùng chung quyền**

Không dùng một tài khoản chung không kiểm soát cho mọi thao tác.

Không để user xưởng có quyền sửa mapping kế toán.

Không để kế toán sửa Operational Truth.

Không để AI, CRM, Gateway hoặc ADS có quyền tạo sync MISA.

**97. MONITORING GOVERNANCE**

MISA Integration Layer phải có monitoring ở tầng vận hành.

Monitoring phải theo dõi:

1.  Số bản ghi chờ sync.

2.  Số bản ghi sync thành công.

3.  Số bản ghi sync lỗi.

4.  Số bản ghi retry.

5.  Số bản ghi dead-letter.

6.  Số bản ghi waiting mapping.

7.  Số bản ghi waiting evidence.

8.  Số bản ghi reconcile pending.

9.  Số bản ghi reconcile mismatch.

10. Thời gian xử lý trung bình.

11. Tỷ lệ lỗi theo checkpoint.

12. Tỷ lệ lỗi theo mapping.

13. Tỷ lệ lỗi theo MISA response.

14. Số duplicate warning.

15. Số manual review đang mở.

Monitoring không thay thế evidence.

**98. ALERT GOVERNANCE**

Alert phải phát sinh khi có rủi ro.

Các alert nền gồm:

1.  Mapping missing alert.

2.  Mapping conflict alert.

3.  Sync failed alert.

4.  Retry exceeded alert.

5.  Dead-letter alert.

6.  Reconcile mismatch alert.

7.  Duplicate warning alert.

8.  MISA permission error alert.

9.  Manual change detected alert.

10. Production sync paused alert.

11. High failure rate alert.

12. Evidence missing alert.

13. Owner approval overdue alert.

Alert phải có owner nhận xử lý.

Alert không được chỉ hiện rồi bỏ qua.

**99. REPORTING GOVERNANCE**

Báo cáo tích hợp MISA phải phân biệt rõ:

1.  Số nghiệp vụ nguồn.

2.  Số checkpoint đủ điều kiện.

3.  Số FRM-25 đã tạo.

4.  Số bản ghi chờ mapping.

5.  Số bản ghi đủ điều kiện sync.

6.  Số bản ghi đã gửi.

7.  Số bản ghi MISA accepted.

8.  Số bản ghi reconcile matched.

9.  Số bản ghi mismatch.

10. Số bản ghi dead-letter.

11. Số bản ghi manual review.

12. Số bản ghi closed.

Không được báo cáo “đã sync xong” chỉ dựa trên số bản ghi đã gửi.

**100. QUY TẮC KHÓA CHỐNG DIỄN GIẢI SAI**

**100.1. Sent không phải synced**

Đã gửi không có nghĩa MISA đã ghi nhận.

**100.2. Accepted không phải reconciled**

MISA chấp nhận không có nghĩa đối chiếu đã khớp.

**100.3. Reconciled mismatch không phải completed**

Còn lệch thì chưa hoàn tất.

**100.4. Retry không phải tạo chứng từ mới**

Retry phải dùng idempotency, không tạo trùng.

**100.5. Manual review không phải sửa tay tùy tiện**

Manual review phải có audit, reason và evidence.

**100.6. Dry-run không phải production sync**

Dry-run không chứng minh đã sẵn sàng vận hành thật nếu chưa có production evidence.

**101. QUY TẮC P0 CỦA PHẦN 3/4**

**P0-21 — Chỉ FRM-25 đủ điều kiện mới vào sync lifecycle**

Không có FRM-25 hợp lệ thì không sync.

**P0-22 — Sent không được gọi là hoàn tất**

Gửi dữ liệu sang MISA không đồng nghĩa đã hoàn tất kế toán.

**P0-23 — Retry không được tạo chứng từ trùng**

Retry bắt buộc dùng idempotency và reconcile.

**P0-24 — Lỗi nghiệp vụ không được retry mù**

Thiếu mapping, sai dữ liệu, thiếu evidence, thiếu approval phải fail-closed hoặc review.

**P0-25 — Dead-letter không được xóa để che lỗi**

Dead-letter phải được giữ audit và xử lý có owner.

**P0-26 — Reconcile mismatch không được đóng vòng**

Còn lệch thì không được Closed.

**P0-27 — MISA manual change phải được phát hiện và review**

Nếu chứng từ MISA bị sửa tay, phải đưa vào reconcile review.

**P0-28 — Payload không được sửa âm thầm**

Mọi thay đổi payload phải có version, reason, audit và evidence.

**P0-29 — Production sync phải có smoke, evidence, owner sign-off**

Không được bật sync thật nếu chưa đạt điều kiện production control.

**P0-30 — Rollback không được xóa lịch sử**

Rollback phải giữ audit, evidence, chứng từ nguồn và lịch sử sync.

**102. DONE GATE CỦA PHẦN 3/4**

PHẦN 3/4 được xem là hoàn chỉnh ở tầng governance khi đạt các điều kiện sau:

1.  Đã khóa sync lifecycle chuẩn.

2.  Đã khóa trạng thái sync.

3.  Đã khóa điều kiện vào sync lifecycle.

4.  Đã khóa phân biệt Sent, Accepted, Reconciled, Closed.

5.  Đã khóa retry policy.

6.  Đã khóa lỗi được retry và lỗi không được retry.

7.  Đã khóa dead-letter governance.

8.  Đã khóa manual review governance.

9.  Đã khóa error classification.

10. Đã khóa idempotency governance.

11. Đã khóa payload versioning.

12. Đã khóa reconcile governance.

13. Đã khóa reconcile result.

14. Đã khóa xử lý mismatch.

15. Đã khóa manual change detection.

16. Đã khóa audit governance.

17. Đã khóa evidence governance.

18. Đã khóa environment governance.

19. Đã khóa dry-run governance.

20. Đã khóa production sync control.

21. Đã khóa pause/disable governance.

22. Đã khóa adjustment governance.

23. Đã khóa rollback governance.

24. Đã khóa security/access control governance.

25. Đã khóa monitoring, alert, reporting.

26. Chưa gọi Production Ready, Release Approved hoặc Go-live Approved.

**103. KẾT LUẬN PHẦN 3/4**

PHẦN 3/4 khóa toàn bộ vòng đời đồng bộ MISA cho PACK-04.

Nguyên tắc trung tâm là: một checkpoint kế toán không chỉ cần được gửi sang MISA, mà phải đi qua đủ điều kiện eligibility, mapping, payload, idempotency, sync, response, retry nếu cần, reconcile, audit, evidence và close.

Gửi sang MISA chưa phải hoàn tất.

MISA chấp nhận chưa phải đối chiếu xong.

Đối chiếu lệch thì chưa được đóng vòng.

Retry không được tạo chứng từ trùng.

Manual review không được sửa tay tùy tiện.

Rollback không được xóa lịch sử.

PACK-04 chỉ được xem là hoàn chỉnh ở tầng governance khi vòng đời sync được kiểm soát từ đầu đến cuối, có evidence, có audit, có reconcile và có owner boundary rõ ràng.

PHẦN 4/4 sẽ khóa Smoke Matrix, Done Gate, Release Control và kết luận cuối của PACK-04.

**PHẦN 4/4 — SMOKE MATRIX / DONE GATE / RELEASE CONTROL / PACK-04 FINAL CONCLUSION**

**104. MỤC TIÊU CỦA PHẦN 4/4**

PHẦN 4/4 khóa lớp kiểm thử, bằng chứng, điều kiện hoàn tất tài liệu, điều kiện triển khai, điều kiện mở đồng bộ và kết luận cuối của PACK-04.

Mục tiêu chính:

1.  Khóa Smoke Matrix cho MISA Integration Layer.

2.  Khóa Done Gate theo tầng tài liệu, triển khai, kiểm thử, evidence và release.

3.  Khóa điều kiện không được gọi Production Ready khi chưa đủ bằng chứng.

4.  Khóa điều kiện không được mở production sync nếu chưa có owner sign-off.

5.  Khóa tiêu chí đánh giá mapping, checkpoint, handoff, sync, retry, error, reconcile.

6.  Khóa điều kiện fail gate.

7.  Khóa ranh giới giữa tài liệu hoàn chỉnh và hệ thống đã vận hành thật.

8.  Khóa kết luận cuối của PACK-04.

**105. NGUYÊN TẮC SMOKE CỦA PACK-04**

Smoke test trong PACK-04 không chỉ kiểm tra “gửi được sang MISA”.

Smoke test phải chứng minh:

1.  Dữ liệu đi MISA có nguồn vận hành hợp lệ.

2.  Checkpoint hợp lệ mới sinh FRM-25.

3.  Không mapping thì không sync.

4.  Mapping lỗi thì fail-closed.

5.  Dữ liệu nháp không sync.

6.  Phiếu kế hoạch không tạo chứng từ kế toán.

7.  Scan không tạo chứng từ kế toán.

8.  Retry không tạo chứng từ trùng.

9.  Timeout không tự tạo chứng từ mới.

10. Reconcile phát hiện lệch.

11. Manual change bên MISA không sửa ngược Operational Truth.

12. Evidence và audit được lưu đầy đủ.

13. Dry-run không bị gọi là sync production.

14. MISA không điều khiển nghiệp vụ nhà máy.

15. Không module nào sync MISA riêng lẻ.

**106. PHẠM VI SMOKE MATRIX**

Smoke Matrix của PACK-04 bao phủ các nhóm chính:

1.  Mapping Registry Smoke.

2.  Checkpoint Eligibility Smoke.

3.  FRM-25 Accounting Handoff Smoke.

4.  Sync Lifecycle Smoke.

5.  Retry / Timeout / Duplicate Smoke.

6.  Error Classification Smoke.

7.  Reconcile Smoke.

8.  Manual Review Smoke.

9.  Evidence / Audit Smoke.

10. Costing Smoke.

11. MISA Boundary Smoke.

12. Production Sync Control Smoke.

13. Security / Access Control Smoke.

14. Reporting / Monitoring / Alert Smoke.

15. Fail Gate Smoke.

**107. MISA SMOKE MATRIX — NHÓM MAPPING REGISTRY**

| **Mã smoke** | **Tình huống kiểm thử**                     | **Kết quả bắt buộc**                    |
|--------------|---------------------------------------------|-----------------------------------------|
| MISA-SMK-001 | Nguyên liệu chưa có mapping MISA            | Không sync, trạng thái WAITING_MAPPING  |
| MISA-SMK-002 | Kho chưa có mapping MISA                    | Không sync, fail-closed                 |
| MISA-SMK-003 | SKU thành phẩm chưa có mapping              | Không tạo sync nhập kho thành phẩm      |
| MISA-SMK-004 | Đơn vị tính không khớp mapping              | Không sync, đưa review                  |
| MISA-SMK-005 | Mapping trùng mã MISA                       | Không sync, trạng thái MAPPING_CONFLICT |
| MISA-SMK-006 | Mapping hết hiệu lực                        | Không sync, chờ mapping ACTIVE          |
| MISA-SMK-007 | Mapping mới chưa owner review               | Không sync production                   |
| MISA-SMK-008 | Sửa mapping đang ACTIVE không audit         | Bị chặn                                 |
| MISA-SMK-009 | Sâm Savigin bị gộp vào dược liệu chung      | Bị chặn, yêu cầu mapping riêng          |
| MISA-SMK-010 | Kho Bến Tre chưa nằm trong registry/mapping | Không sync chứng từ liên quan kho này   |

**108. MISA SMOKE MATRIX — NHÓM CHECKPOINT ELIGIBILITY**

| **Mã smoke** | **Tình huống kiểm thử**                                    | **Kết quả bắt buộc**           |
|--------------|------------------------------------------------------------|--------------------------------|
| MISA-SMK-011 | FRM-09 intake approved, đủ mapping/evidence                | Được tạo FRM-25 eligible       |
| MISA-SMK-012 | FRM-09 mới draft                                           | Không tạo accounting handoff   |
| MISA-SMK-013 | Nguyên liệu PENDING_QC                                     | Không sync                     |
| MISA-SMK-014 | Nguyên liệu QC_REJECTED                                    | Không sync                     |
| MISA-SMK-015 | FRM-10 nhập bao bì đủ điều kiện                            | Được tạo FRM-25 eligible       |
| MISA-SMK-016 | Bao bì sai quy cách/chờ review                             | Không sync                     |
| MISA-SMK-017 | FRM-14 issue confirmed, có ledger debit                    | Được tạo accounting handoff    |
| MISA-SMK-018 | Issue thiếu ledger debit                                   | Không sync                     |
| MISA-SMK-019 | Issue vượt số lượng được duyệt                             | Không sync, đưa review         |
| MISA-SMK-020 | FRM-22 nhập kho thành phẩm sau release + receipt confirmed | Được tạo accounting handoff    |
| MISA-SMK-021 | Batch chỉ QC_PASS nhưng chưa RELEASED                      | Không sync nhập kho thành phẩm |
| MISA-SMK-022 | Batch RELEASED nhưng chưa Warehouse Receipt Confirmed      | Không sync nhập kho thành phẩm |
| MISA-SMK-023 | FRM-24 write-off có disposal execution + ledger write-off  | Được tạo accounting handoff    |
| MISA-SMK-024 | Disposal request chưa approved                             | Không sync                     |
| MISA-SMK-025 | Disposal approved nhưng chưa execution                     | Không sync                     |

**109. MISA SMOKE MATRIX — NHÓM PHIẾU KHÔNG ĐƯỢC TẠO CHỨNG TỪ**

| **Mã smoke** | **Tình huống kiểm thử**               | **Kết quả bắt buộc**               |
|--------------|---------------------------------------|------------------------------------|
| MISA-SMK-026 | FRM-01 kế hoạch sản xuất              | Không tạo chứng từ kế toán         |
| MISA-SMK-027 | FRM-02 Demand Board                   | Không tạo chứng từ kế toán         |
| MISA-SMK-028 | FRM-03 BOM Snapshot                   | Không tạo chứng từ kế toán         |
| MISA-SMK-029 | FRM-04 MRP Run                        | Không tạo chứng từ kế toán         |
| MISA-SMK-030 | FRM-05 Procurement Suppression Result | Không tạo chứng từ kế toán         |
| MISA-SMK-031 | FRM-06 yêu cầu mua                    | Không tạo chứng từ kế toán         |
| MISA-SMK-032 | FRM-07 yêu cầu thu hoạch Sâm          | Không tạo chứng từ kế toán         |
| MISA-SMK-033 | FRM-08 yêu cầu mua bao bì             | Không tạo chứng từ kế toán         |
| MISA-SMK-034 | FRM-12 đề nghị cấp nguyên liệu        | Không tạo chứng từ kế toán         |
| MISA-SMK-035 | FRM-13 chấp thuận cấp nguyên liệu     | Không tạo chứng từ kế toán độc lập |
| MISA-SMK-036 | Scan QR/thành phẩm/nguyên liệu        | Không tạo chứng từ kế toán         |
| MISA-SMK-037 | Printing/Packaging completed          | Không tự nhập kho thành phẩm       |
| MISA-SMK-038 | QC_PASS                               | Không tự tạo nhập kho kế toán      |

**110. MISA SMOKE MATRIX — NHÓM FRM-25 ACCOUNTING HANDOFF**

| **Mã smoke** | **Tình huống kiểm thử**                                  | **Kết quả bắt buộc**                                   |
|--------------|----------------------------------------------------------|--------------------------------------------------------|
| MISA-SMK-039 | Checkpoint hợp lệ sinh FRM-25                            | FRM-25 có source, checkpoint, mapping, audit, evidence |
| MISA-SMK-040 | FRM-25 thiếu phiếu nguồn                                 | NOT_ELIGIBLE                                           |
| MISA-SMK-041 | FRM-25 thiếu evidence                                    | WAITING_EVIDENCE                                       |
| MISA-SMK-042 | FRM-25 thiếu owner approval bắt buộc                     | WAITING_APPROVAL                                       |
| MISA-SMK-043 | FRM-25 bị policy block                                   | BLOCKED_BY_POLICY                                      |
| MISA-SMK-044 | FRM-25 bị reconcile block                                | BLOCKED_BY_RECONCILE                                   |
| MISA-SMK-045 | FRM-25 đủ điều kiện                                      | ELIGIBLE_FOR_SYNC                                      |
| MISA-SMK-046 | Người dùng sửa tay số lượng trên FRM-25 khác phiếu nguồn | Bị chặn                                                |
| MISA-SMK-047 | FRM-25 tạo trùng cho cùng checkpoint                     | Bị chặn bởi idempotency                                |
| MISA-SMK-048 | FRM-25 voided/cancelled                                  | Không sync                                             |

**111. MISA SMOKE MATRIX — NHÓM SYNC LIFECYCLE**

| **Mã smoke** | **Tình huống kiểm thử** | **Kết quả bắt buộc**                            |
|--------------|-------------------------|-------------------------------------------------|
| MISA-SMK-049 | READY_FOR_SYNC          | Chưa được xem là sync thành công                |
| MISA-SMK-050 | DISPATCHING             | Không cho gửi song song trùng                   |
| MISA-SMK-051 | SENT                    | Chưa được xem là hoàn tất                       |
| MISA-SMK-052 | ACCEPTED_BY_MISA        | Chuyển Reconcile Pending nếu checkpoint yêu cầu |
| MISA-SMK-053 | REJECTED_BY_MISA        | Phân loại lỗi, không đóng vòng                  |
| MISA-SMK-054 | RECONCILE_PENDING       | Chưa Closed                                     |
| MISA-SMK-055 | RECONCILED_MATCHED      | Có thể Closed nếu đủ evidence                   |
| MISA-SMK-056 | RECONCILED_MISMATCH     | Không Closed                                    |
| MISA-SMK-057 | CLOSED                  | Có audit, evidence, reconcile result            |
| MISA-SMK-058 | CANCELLED/VOIDED        | Không sync                                      |

**112. MISA SMOKE MATRIX — NHÓM RETRY / TIMEOUT / DUPLICATE**

| **Mã smoke** | **Tình huống kiểm thử**        | **Kết quả bắt buộc**                     |
|--------------|--------------------------------|------------------------------------------|
| MISA-SMK-059 | Timeout khi gửi MISA           | Không tạo chứng từ mới, dùng idempotency |
| MISA-SMK-060 | Retry lần 1                    | Không đổi payload âm thầm                |
| MISA-SMK-061 | Retry nhiều lần vượt policy    | Chuyển FAILED/DEAD_LETTER                |
| MISA-SMK-062 | MISA báo duplicate             | Không gửi chứng từ mới, chuyển reconcile |
| MISA-SMK-063 | User bấm sync nhiều lần        | Chặn trùng bằng idempotency              |
| MISA-SMK-064 | Worker chạy lại cùng bản ghi   | Không tạo chứng từ trùng                 |
| MISA-SMK-065 | Callback MISA đến chậm         | Cập nhật theo idempotency, không tạo mới |
| MISA-SMK-066 | Manual resend                  | Chỉ cho phép khi có owner approval       |
| MISA-SMK-067 | Retry lỗi mapping              | Không retry tự động                      |
| MISA-SMK-068 | Retry lỗi validation nghiệp vụ | Không retry tự động                      |

**113. MISA SMOKE MATRIX — NHÓM ERROR CLASSIFICATION**

| **Mã smoke** | **Tình huống kiểm thử**     | **Kết quả bắt buộc**                 |
|--------------|-----------------------------|--------------------------------------|
| MISA-SMK-069 | Thiếu mapping               | Mapping Error                        |
| MISA-SMK-070 | Checkpoint chưa hợp lệ      | Policy Error                         |
| MISA-SMK-071 | Thiếu số lượng              | Validation Error                     |
| MISA-SMK-072 | Mất kết nối tạm thời        | Technical Error, được retry          |
| MISA-SMK-073 | MISA permission denied      | Permission Error, đưa admin review   |
| MISA-SMK-074 | Chứng từ trùng              | Duplicate Error                      |
| MISA-SMK-075 | Lệch số lượng khi reconcile | Reconcile Error                      |
| MISA-SMK-076 | MISA response unknown       | Manual Review hoặc retry theo policy |
| MISA-SMK-077 | Evidence thiếu              | WAITING_EVIDENCE, không sync         |
| MISA-SMK-078 | Audit thiếu                 | Không đủ điều kiện sync              |

**114. MISA SMOKE MATRIX — NHÓM RECONCILE**

| **Mã smoke** | **Tình huống kiểm thử**                       | **Kết quả bắt buộc**                            |
|--------------|-----------------------------------------------|-------------------------------------------------|
| MISA-SMK-079 | Ginsengfood và MISA khớp số lượng/kho/mã hàng | MATCHED                                         |
| MISA-SMK-080 | Khớp nhưng có ghi chú kế toán                 | MATCHED_WITH_NOTE                               |
| MISA-SMK-081 | Lệch số lượng                                 | MISMATCH_QUANTITY, review                       |
| MISA-SMK-082 | Lệch đơn vị tính                              | MISMATCH_UOM, review                            |
| MISA-SMK-083 | Lệch kho                                      | MISMATCH_WAREHOUSE, review                      |
| MISA-SMK-084 | Lệch mã hàng                                  | MISMATCH_ITEM, review                           |
| MISA-SMK-085 | Lệch giá trị                                  | MISMATCH_VALUE, kế toán review                  |
| MISA-SMK-086 | Lệch tài khoản                                | MISMATCH_ACCOUNT, kế toán review                |
| MISA-SMK-087 | Lệch cost center                              | MISMATCH_COST_CENTER, review                    |
| MISA-SMK-088 | MISA thiếu chứng từ sau accepted              | MISA_DOCUMENT_MISSING                           |
| MISA-SMK-089 | MISA có chứng từ không có nguồn vận hành      | OPERATIONAL_SOURCE_MISSING, review nghiêm trọng |
| MISA-SMK-090 | Chứng từ bị sửa tay bên MISA                  | MANUAL_CHANGE_DETECTED                          |

**115. MISA SMOKE MATRIX — NHÓM MANUAL REVIEW / DEAD-LETTER**

| **Mã smoke** | **Tình huống kiểm thử**                | **Kết quả bắt buộc**                |
|--------------|----------------------------------------|-------------------------------------|
| MISA-SMK-091 | Mapping conflict                       | Manual review, không sync           |
| MISA-SMK-092 | Retry vượt giới hạn                    | Dead-letter                         |
| MISA-SMK-093 | Duplicate không tự phân giải           | Dead-letter hoặc manual review      |
| MISA-SMK-094 | Mismatch nghiêm trọng                  | Manual review bắt buộc              |
| MISA-SMK-095 | Dead-letter bị xóa                     | Bị chặn, phải giữ audit             |
| MISA-SMK-096 | Manual review thiếu reason             | Không hợp lệ                        |
| MISA-SMK-097 | Manual review thiếu người duyệt        | Không hợp lệ                        |
| MISA-SMK-098 | Manual review tự sửa Operational Truth | Bị chặn                             |
| MISA-SMK-099 | Manual review cho phép resend          | Phải có approval + audit + evidence |
| MISA-SMK-100 | Dead-letter xử lý xong                 | Phải có kết quả xử lý và evidence   |

**116. MISA SMOKE MATRIX — NHÓM COSTING**

| **Mã smoke** | **Tình huống kiểm thử**                         | **Kết quả bắt buộc**    |
|--------------|-------------------------------------------------|-------------------------|
| MISA-SMK-101 | Costing lấy dữ liệu từ Material Issue Confirmed | Hợp lệ                  |
| MISA-SMK-102 | Costing lấy từ MRP thay số lượng xuất thực tế   | Bị chặn                 |
| MISA-SMK-103 | Costing lấy từ BOM kế hoạch thay ledger debit   | Bị chặn                 |
| MISA-SMK-104 | Costing lấy từ Warehouse Receipt Confirmed      | Hợp lệ                  |
| MISA-SMK-105 | Costing lấy từ số lượng đóng gói chưa nhập kho  | Bị chặn                 |
| MISA-SMK-106 | Costing sửa BOM Snapshot                        | Bị chặn                 |
| MISA-SMK-107 | Costing sửa công thức G1                        | Bị chặn                 |
| MISA-SMK-108 | Costing tự mở Sellable Gate                     | Bị chặn                 |
| MISA-SMK-109 | Costing nội bộ bị gọi là hạch toán chính thức   | Bị chặn                 |
| MISA-SMK-110 | Costing thiếu cost policy                       | Không chuyển chính thức |

**117. MISA SMOKE MATRIX — NHÓM SALES / REVENUE / COMMISSION BOUNDARY**

| **Mã smoke** | **Tình huống kiểm thử**                          | **Kết quả bắt buộc**         |
|--------------|--------------------------------------------------|------------------------------|
| MISA-SMK-111 | PACK-04 tự tính doanh thu                        | Bị chặn                      |
| MISA-SMK-112 | PACK-04 tự tính chiết khấu                       | Bị chặn                      |
| MISA-SMK-113 | PACK-04 tự tính hoa hồng Diamond                 | Bị chặn                      |
| MISA-SMK-114 | PACK-04 tự xác định member benefit               | Bị chặn                      |
| MISA-SMK-115 | PACK-04 tự tính shipping fee                     | Bị chặn                      |
| MISA-SMK-116 | PACK-04 tự xác nhận payment status               | Bị chặn                      |
| MISA-SMK-117 | Commerce checkpoint hợp lệ phát hành             | PACK-04 được nhận để handoff |
| MISA-SMK-118 | Finance/KPI checkpoint hợp lệ phát hành          | PACK-04 được nhận để handoff |
| MISA-SMK-119 | Không có owner pack checkpoint                   | Không sync                   |
| MISA-SMK-120 | Revenue sync thiếu verified order/payment source | Không sync                   |

**118. MISA SMOKE MATRIX — NHÓM SECURITY / ACCESS CONTROL**

| **Mã smoke** | **Tình huống kiểm thử**              | **Kết quả bắt buộc**          |
|--------------|--------------------------------------|-------------------------------|
| MISA-SMK-121 | User xưởng sửa mapping kế toán       | Bị chặn                       |
| MISA-SMK-122 | Kế toán sửa Operational Truth        | Bị chặn                       |
| MISA-SMK-123 | AI Advisor gọi sync MISA             | Bị chặn                       |
| MISA-SMK-124 | CRM/Gateway/ADS gọi sync MISA        | Bị chặn                       |
| MISA-SMK-125 | Người không có quyền resend          | Bị chặn                       |
| MISA-SMK-126 | Người không có quyền approve mapping | Bị chặn                       |
| MISA-SMK-127 | Tài khoản tích hợp thiếu quyền       | Permission Error              |
| MISA-SMK-128 | Credential production dùng trong DEV | Bị chặn                       |
| MISA-SMK-129 | Tắt sync production                  | Ghi audit và không mất FRM-25 |
| MISA-SMK-130 | Mở lại sync production               | Cần review và owner approval  |

**119. MISA SMOKE MATRIX — NHÓM ENVIRONMENT / DRY-RUN / PRODUCTION CONTROL**

| **Mã smoke** | **Tình huống kiểm thử**               | **Kết quả bắt buộc**              |
|--------------|---------------------------------------|-----------------------------------|
| MISA-SMK-131 | DEV sync test                         | Không tạo chứng từ chính thức     |
| MISA-SMK-132 | STAGING dry-run                       | Có evidence, không gọi production |
| MISA-SMK-133 | Dry-run thành công                    | Không gọi là kế toán đã ghi nhận  |
| MISA-SMK-134 | Production sync thiếu mapping thật    | Bị chặn                           |
| MISA-SMK-135 | Production sync thiếu credential thật | Bị chặn                           |
| MISA-SMK-136 | Production sync thiếu smoke evidence  | Bị chặn                           |
| MISA-SMK-137 | Production sync thiếu owner sign-off  | Bị chặn                           |
| MISA-SMK-138 | Production sync có P0 issue mở        | Bị chặn                           |
| MISA-SMK-139 | Production sync bị pause              | Không tạo chứng từ mới            |
| MISA-SMK-140 | Production sync mở lại sau pause      | Cần review, evidence, approval    |

**120. MISA SMOKE MATRIX — NHÓM MONITORING / ALERT / REPORTING**

| **Mã smoke** | **Tình huống kiểm thử**                      | **Kết quả bắt buộc**         |
|--------------|----------------------------------------------|------------------------------|
| MISA-SMK-141 | Có bản ghi WAITING_MAPPING                   | Dashboard/alert thể hiện rõ  |
| MISA-SMK-142 | Có bản ghi WAITING_EVIDENCE                  | Dashboard/alert thể hiện rõ  |
| MISA-SMK-143 | Có sync failed                               | Alert đúng owner             |
| MISA-SMK-144 | Có retry vượt giới hạn                       | Dead-letter alert            |
| MISA-SMK-145 | Có reconcile mismatch                        | Reconcile alert              |
| MISA-SMK-146 | Có duplicate warning                         | Duplicate alert              |
| MISA-SMK-147 | Có manual change bên MISA                    | Manual change alert          |
| MISA-SMK-148 | Báo cáo chỉ dựa trên SENT                    | Bị chặn, không gọi hoàn tất  |
| MISA-SMK-149 | Báo cáo phân biệt accepted/reconciled/closed | Hợp lệ                       |
| MISA-SMK-150 | Không có owner xử lý alert                   | Alert chưa được xem là xử lý |

**121. SMOKE DONE GATE**

Smoke của PACK-04 chỉ được xem là đạt ở tầng kiểm thử khi:

1.  Tất cả P0 smoke pass.

2.  Không còn P0 issue mở.

3.  Mapping smoke pass.

4.  Checkpoint smoke pass.

5.  FRM-25 smoke pass.

6.  Sync lifecycle smoke pass.

7.  Retry/idempotency smoke pass.

8.  Reconcile smoke pass.

9.  Manual review/dead-letter smoke pass.

10. Evidence/audit smoke pass.

11. Security/access control smoke pass.

12. Dry-run/staging smoke có evidence.

13. Không có chứng từ trùng.

14. Không có sync từ module ngoài MISA Integration Layer.

15. Không có dữ liệu nháp được sync.

16. Không có phiếu kế hoạch tạo chứng từ kế toán.

17. Không có trạng thái Sent bị gọi là Completed.

18. Không có reconcile mismatch bị đóng vòng.

19. Owner review smoke evidence.

20. Evidence Registry ghi nhận đầy đủ.

Smoke pass không đồng nghĩa Production Ready nếu chưa có release decision hợp lệ.

**122. DONE GATE TỔNG THỂ CỦA PACK-04**

PACK-04 có nhiều tầng Done Gate.

Không được gom tất cả thành một chữ “xong”.

Các tầng gồm:

1.  Documentation Done.

2.  Handoff Ready.

3.  Implementation Ready.

4.  Test Ready.

5.  Smoke Ready.

6.  Evidence Ready.

7.  Owner Review Ready.

8.  Release Candidate.

9.  Production Sync Ready.

10. Production Ready.

Mỗi tầng có điều kiện riêng.

**123. GATE 01 — DOCUMENTATION DONE**

PACK-04 đạt Documentation Done khi:

1.  Phạm vi pack rõ.

2.  Owner boundary rõ.

3.  Operational Truth và Accounting Truth được phân tách.

4.  MISA Integration Layer được khóa là cổng duy nhất.

5.  Mapping Registry được định nghĩa.

6.  Accounting Handoff Checkpoints được định nghĩa.

7.  Form-to-MISA Matrix được khóa.

8.  Sync lifecycle được định nghĩa.

9.  Error classification được định nghĩa.

10. Retry/idempotency/reconcile được định nghĩa.

11. Audit/evidence được định nghĩa.

12. Smoke Matrix được định nghĩa.

13. Done Gate và Fail Gate được định nghĩa.

14. Không có phần mâu thuẫn với PACK-01/02/03.

15. Không gọi Production Ready.

Trạng thái này chỉ chứng minh tài liệu đã hoàn chỉnh ở tầng governance.

**124. GATE 02 — HANDOFF READY**

PACK-04 đạt Handoff Ready khi có thể giao cho dev phân tích triển khai mà không phải đoán nghiệp vụ.

Điều kiện:

1.  Dev hiểu MISA chỉ đi qua Integration Layer.

2.  Dev hiểu không module nào sync MISA riêng lẻ.

3.  Dev hiểu checkpoint nào được phép sinh FRM-25.

4.  Dev hiểu phiếu nào không được tạo chứng từ.

5.  Dev hiểu không mapping thì không sync.

6.  Dev hiểu retry không tạo chứng từ trùng.

7.  Dev hiểu reconcile là bắt buộc.

8.  Dev hiểu cost nội bộ khác hạch toán chính thức.

9.  Dev hiểu sales/revenue/commission chỉ mở khi có owner pack.

10. Dev hiểu không được viết shortcut để “gửi nhanh sang MISA”.

Handoff Ready không đồng nghĩa đã code xong.

**125. GATE 03 — IMPLEMENTATION READY**

PACK-04 chỉ đạt Implementation Ready khi có thêm bộ triển khai chi tiết tương ứng do dev lập và được owner kỹ thuật duyệt.

Điều kiện tối thiểu:

1.  Có implementation plan.

2.  Có module ownership.

3.  Có mapping ownership.

4.  Có checkpoint implementation plan.

5.  Có sync worker/integration plan.

6.  Có error handling plan.

7.  Có idempotency plan.

8.  Có reconcile plan.

9.  Có monitoring/alert plan.

10. Có security/access control plan.

11. Có environment plan.

12. Có rollback/disable plan.

13. Có test plan.

14. Có smoke plan.

15. Có evidence plan.

PACK-04 bản governance không tự tạo Implementation Ready nếu chưa có các tài liệu triển khai này.

**126. GATE 04 — TEST READY**

PACK-04 đạt Test Ready khi:

1.  Test cases được tạo từ Smoke Matrix.

2.  Test data được chuẩn bị.

3.  Mapping test được chuẩn bị.

4.  Checkpoint test được chuẩn bị.

5.  MISA sandbox/dry-run hoặc môi trường tương đương được chuẩn bị.

6.  Dữ liệu test không lẫn với production.

7.  Test có owner.

8.  Test có expected result.

9.  Test có evidence capture.

10. Test có issue tracking.

11. Test có retest rule.

12. Test có pass/fail criteria.

Test Ready không đồng nghĩa smoke đã pass.

**127. GATE 05 — SMOKE READY**

PACK-04 đạt Smoke Ready khi:

1.  Các luồng smoke nền đã có dữ liệu.

2.  Các trường hợp fail-closed đã có dữ liệu.

3.  Các trường hợp retry/duplicate đã có dữ liệu.

4.  Các trường hợp reconcile mismatch đã có dữ liệu.

5.  Các trường hợp dead-letter đã có dữ liệu.

6.  Các trường hợp manual review đã có dữ liệu.

7.  Các trường hợp permission/security đã có dữ liệu.

8.  Dry-run environment sẵn sàng.

9.  MISA test/sandbox/dry-run sẵn sàng nếu có.

10. Evidence capture sẵn sàng.

Smoke Ready không đồng nghĩa smoke pass.

**128. GATE 06 — EVIDENCE READY**

PACK-04 đạt Evidence Ready khi:

1.  Mỗi smoke có evidence.

2.  Evidence có mã tham chiếu.

3.  Evidence gắn với checkpoint.

4.  Evidence gắn với FRM-25 nếu có.

5.  Evidence gắn với sync run nếu có.

6.  Evidence gắn với MISA response nếu có.

7.  Evidence gắn với reconcile result nếu có.

8.  Evidence gắn với issue/retest nếu có.

9.  Evidence có người review.

10. Evidence có trạng thái.

11. Evidence không rời rạc.

12. Evidence đủ để audit lại.

Evidence Ready không đồng nghĩa evidence đã được ACCEPTED nếu chưa có review.

**129. GATE 07 — OWNER REVIEW READY**

PACK-04 đạt Owner Review Ready khi:

1.  Tài liệu governance đã hoàn chỉnh.

2.  Test/smoke evidence đã gom đủ.

3.  P0 issue đã được phân loại.

4.  Lỗi còn mở đã có owner.

5.  Reconcile mismatch đã có xử lý.

6.  Mapping conflict đã có xử lý.

7.  Dead-letter đã có xử lý.

8.  Security issue đã có xử lý.

9.  Báo cáo smoke có kết luận.

10. Owner có đủ thông tin để duyệt hoặc yêu cầu sửa.

Owner Review Ready không đồng nghĩa owner đã sign-off.

**130. GATE 08 — RELEASE CANDIDATE**

PACK-04 chỉ đạt Release Candidate khi:

1.  Owner review đã hoàn tất.

2.  P0 smoke pass.

3.  Không còn P0 issue mở.

4.  Evidence quan trọng đã accepted.

5.  Mapping production đã chuẩn bị.

6.  Environment production đã kiểm soát.

7.  Credential production đã quản trị.

8.  Rollback/disable policy đã kiểm tra.

9.  Monitoring/alert đã kiểm tra.

10. Reconcile policy đã kiểm tra.

11. Security review đã đạt.

12. Owner cho phép đưa vào release queue.

Release Candidate vẫn chưa phải Production Ready.

**131. GATE 09 — PRODUCTION SYNC READY**

PACK-04 chỉ đạt Production Sync Ready khi:

1.  Release Candidate đạt.

2.  MISA production credential hợp lệ.

3.  Mapping production ACTIVE.

4.  Checkpoint production policy active.

5.  FRM-25 production policy active.

6.  Sync worker/integration layer production ready.

7.  Retry/idempotency production ready.

8.  Reconcile production ready.

9.  Monitoring production ready.

10. Alert production ready.

11. Disable/pause control ready.

12. Owner sign-off mở sync production.

13. Kế toán sign-off nếu thuộc phạm vi.

14. Security sign-off nếu thuộc phạm vi.

15. Không có P0/P1 issue chặn.

Production Sync Ready chỉ là sẵn sàng mở sync, chưa phải kết luận hệ thống toàn bộ Production Ready.

**132. GATE 10 — PRODUCTION READY**

PACK-04 chỉ được xem là Production Ready khi:

1.  Production Sync Ready đạt.

2.  Production smoke có evidence accepted.

3.  First-run production sync được kiểm tra.

4.  Reconcile production khớp.

5.  Không có chứng từ trùng.

6.  Không có mismatch chưa xử lý.

7.  Không có dead-letter nghiêm trọng chưa xử lý.

8.  Không có security issue mở.

9.  Không có P0 issue mở.

10. Owner sign-off.

11. Kế toán sign-off nếu thuộc phạm vi.

12. Release decision chính thức.

13. Rollback/disable path đã xác nhận.

14. Monitoring hoạt động.

15. Alert hoạt động.

16. Evidence Registry ghi nhận ACCEPTED.

Không được gọi Production Ready chỉ vì PACK-04 đã viết xong.

**133. FAIL GATE CỦA PACK-04**

PACK-04 phải FAIL nếu xảy ra một trong các điều kiện sau:

1.  Có module sync MISA trực tiếp, bỏ qua MISA Integration Layer.

2.  Không có Mapping Registry.

3.  Thiếu mapping nhưng vẫn sync.

4.  Mapping conflict nhưng vẫn sync.

5.  Dữ liệu nháp vẫn sync.

6.  Phiếu kế hoạch vẫn tạo chứng từ kế toán.

7.  MRP tạo chứng từ kế toán.

8.  Harvest Requirement tạo chứng từ kế toán.

9.  BOM Snapshot tạo chứng từ kế toán.

10. Scan tạo chứng từ kế toán.

11. QC_PASS tự nhập kho thành phẩm.

12. Packaging/Printing tự nhập kho thành phẩm.

13. Batch chưa Warehouse Receipt Confirmed nhưng đã sync nhập kho.

14. Disposal chưa execution nhưng đã sync write-off.

15. Retry tạo chứng từ trùng.

16. Timeout tạo chứng từ mới không reconcile.

17. Reconcile mismatch bị Closed.

18. Dead-letter bị xóa.

19. Manual review sửa Operational Truth không đúng quy trình.

20. MISA sửa ngược trạng thái vận hành.

21. Costing sửa BOM Snapshot hoặc G1 Formula.

22. PACK-04 tự tính doanh thu/chiết khấu/hoa hồng.

23. AI/CRM/Gateway/ADS có quyền sync MISA.

24. Không có audit.

25. Không có evidence.

26. Không có owner sign-off khi mở production sync.

27. Gọi Production Ready khi chưa đủ evidence.

28. Gọi Release Approved khi chưa có release decision.

29. Gọi Go-live Approved khi chưa có owner sign-off.

30. Có P0 issue mở nhưng vẫn mở production sync.

**134. RELEASE CONTROL**

Release Control của PACK-04 nhằm đảm bảo việc mở tích hợp MISA được kiểm soát theo từng tầng.

Không được chuyển từ tài liệu sang production bằng một bước nhảy.

Các mức release gồm:

1.  Documentation Release.

2.  Dev Handoff Release.

3.  Internal Implementation Release.

4.  STAGING Dry-run Release.

5.  STAGING Smoke Release.

6.  Production Candidate Release.

7.  Controlled Production Sync Release.

8.  Production Acceptance.

9.  Post-release Monitoring.

**135. RELEASE 01 — DOCUMENTATION RELEASE**

Documentation Release chỉ xác nhận:

- PACK-04 đã hoàn chỉnh nội dung governance.

- Ranh giới owner đã rõ.

- Smoke Matrix đã có.

- Done Gate đã có.

- Fail Gate đã có.

Documentation Release không xác nhận:

- Dev đã triển khai.

- MISA đã kết nối.

- Mapping đã có.

- Sync đã chạy.

- Smoke đã pass.

- Production đã sẵn sàng.

**136. RELEASE 02 — DEV HANDOFF RELEASE**

Dev Handoff Release xác nhận tài liệu đủ để giao cho dev phân tích triển khai.

Điều kiện:

1.  Dev nhận đúng pack.

2.  Dev nhận đúng owner boundary.

3.  Dev không được tự suy diễn nghiệp vụ.

4.  Dev không được tự thêm đường sync MISA riêng.

5.  Dev không được hardcode mapping.

6.  Dev không được bỏ retry/idempotency/reconcile.

7.  Dev phải tạo test/smoke/evidence theo matrix.

Dev Handoff Release không đồng nghĩa đã có phần mềm chạy thật.

**137. RELEASE 03 — INTERNAL IMPLEMENTATION RELEASE**

Internal Implementation Release chỉ được xét khi dev đã triển khai xong phần nội bộ.

Điều kiện:

1.  MISA Integration Layer đã tồn tại.

2.  Mapping Registry đã tồn tại.

3.  Checkpoint eligibility đã tồn tại.

4.  FRM-25 flow đã tồn tại.

5.  Sync lifecycle đã tồn tại.

6.  Retry/idempotency đã tồn tại.

7.  Error classification đã tồn tại.

8.  Reconcile flow đã tồn tại.

9.  Audit/evidence đã tồn tại.

10. Security/access control đã tồn tại.

Trạng thái này phải có technical evidence.

**138. RELEASE 04 — STAGING DRY-RUN RELEASE**

STAGING Dry-run Release cho phép chạy thử không tạo chứng từ chính thức.

Điều kiện:

1.  Có dữ liệu staging.

2.  Có mapping staging.

3.  Có checkpoint staging.

4.  Có FRM-25 staging.

5.  Có payload dry-run.

6.  Có MISA sandbox/dry-run hoặc cơ chế mô phỏng được duyệt.

7.  Có evidence.

8.  Có kết quả lỗi/thành công.

9.  Có owner review nếu cần.

Dry-run không được gọi là production sync.

**139. RELEASE 05 — STAGING SMOKE RELEASE**

STAGING Smoke Release chỉ đạt khi các smoke quan trọng đã pass trên staging.

Điều kiện:

1.  Mapping smoke pass.

2.  Checkpoint smoke pass.

3.  FRM-25 smoke pass.

4.  Sync lifecycle smoke pass.

5.  Retry/duplicate smoke pass.

6.  Reconcile smoke pass.

7.  Error handling smoke pass.

8.  Manual review/dead-letter smoke pass.

9.  Evidence/audit smoke pass.

10. Security smoke pass.

11. Không có P0 issue mở.

12. Evidence được review.

Staging pass chưa phải production ready.

**140. RELEASE 06 — PRODUCTION CANDIDATE RELEASE**

Production Candidate Release là trạng thái đề xuất mở production sync có kiểm soát.

Điều kiện:

1.  Staging smoke pass.

2.  Evidence accepted.

3.  Mapping production chuẩn bị xong.

4.  Credential production chuẩn bị xong.

5.  Security review đạt.

6.  Kế toán review đạt nếu thuộc phạm vi.

7.  Owner review đạt.

8.  Rollback/disable plan sẵn sàng.

9.  Monitoring/alert sẵn sàng.

10. Không có P0 issue mở.

Production Candidate chưa được tự động mở sync.

**141. RELEASE 07 — CONTROLLED PRODUCTION SYNC RELEASE**

Controlled Production Sync Release là giai đoạn mở sync thật có kiểm soát.

Nguyên tắc:

1.  Mở theo checkpoint được duyệt.

2.  Không mở tất cả cùng lúc nếu chưa có kiểm soát.

3.  Có thể mở trước cho một nhóm nghiệp vụ ít rủi ro.

4.  Có giám sát trực tiếp.

5.  Có reconcile sau first-run.

6.  Có pause/disable path.

7.  Có kế toán theo dõi.

8.  Có owner theo dõi.

9.  Có log/evidence production.

10. Không bỏ qua alert.

Controlled Production Sync không đồng nghĩa toàn bộ hệ thống đã Production Ready.

**142. RELEASE 08 — PRODUCTION ACCEPTANCE**

Production Acceptance chỉ đạt khi:

1.  Controlled production sync chạy đúng.

2.  First-run evidence accepted.

3.  Reconcile production matched.

4.  Không có duplicate.

5.  Không có mismatch mở.

6.  Không có dead-letter nghiêm trọng.

7.  Không có P0/P1 issue chặn.

8.  Monitoring hoạt động.

9.  Alert hoạt động.

10. Owner sign-off.

11. Kế toán sign-off nếu thuộc phạm vi.

12. Release decision được ghi nhận.

**143. RELEASE 09 — POST-RELEASE MONITORING**

Sau khi production sync được chấp nhận, vẫn phải theo dõi.

Theo dõi tối thiểu:

1.  Tỷ lệ sync thành công.

2.  Tỷ lệ lỗi mapping.

3.  Tỷ lệ lỗi validation.

4.  Tỷ lệ retry.

5.  Số dead-letter.

6.  Số reconcile mismatch.

7.  Số duplicate warning.

8.  Số manual change detected.

9.  Thời gian xử lý trung bình.

10. Chứng từ chưa closed.

11. Alert chưa xử lý.

12. Feedback từ kế toán.

13. Feedback từ vận hành.

Post-release không được bỏ giám sát.

**144. OWNER SIGN-OFF MATRIX**

| **Khu vực**                    | **Owner chính**             | **Điều kiện sign-off**                        |
|--------------------------------|-----------------------------|-----------------------------------------------|
| Operational checkpoint         | Owner vận hành              | Checkpoint đúng nghiệp vụ, không bỏ qua state |
| Product/SKU/Ingredient mapping | Product/Operational owner   | Mapping không sai sản phẩm, nguyên liệu, SKU  |
| Warehouse mapping              | Warehouse/Operational owner | Kho/location đúng registry                    |
| Accounting mapping             | Kế toán/Finance owner       | Mã kế toán, tài khoản, đối tượng đúng         |
| MISA Integration Layer         | Technical owner             | Sync đi đúng layer, không shortcut            |
| Reconcile                      | Kế toán + vận hành          | Đối chiếu khớp hoặc có review                 |
| Security/access                | Technical/Security owner    | Quyền đúng, credential đúng                   |
| Production sync                | Owner được phân quyền       | Evidence accepted, không P0 issue             |
| Release                        | Owner cấp release           | Có đủ smoke, evidence, sign-off               |

**145. EVIDENCE ACCEPTANCE MATRIX**

| **Nhóm evidence**      | **Bắt buộc cho**   | **Tiêu chí accepted**                       |
|------------------------|--------------------|---------------------------------------------|
| Mapping evidence       | Mapping Registry   | Có owner review, trạng thái ACTIVE          |
| Checkpoint evidence    | FRM-25             | Có phiếu nguồn, trạng thái hợp lệ           |
| Sync evidence          | Sync lifecycle     | Có payload, response, status                |
| Retry evidence         | Retry/timeout      | Có lịch sử retry, không trùng chứng từ      |
| Reconcile evidence     | Reconcile          | Có kết quả đối chiếu                        |
| Error evidence         | Failed/dead-letter | Có error type, owner xử lý                  |
| Manual review evidence | Review case        | Có người review, quyết định, reason         |
| Production evidence    | Production sync    | Có chứng từ thật, reconcile, owner sign-off |
| Release evidence       | Release decision   | Có kết luận release chính thức              |

Evidence chỉ được dùng cho PASS khi trạng thái được review và accepted.

**146. ISSUE SEVERITY MATRIX**

| **Mức lỗi** | **Ý nghĩa**                                               | **Tác động gate**                           |
|-------------|-----------------------------------------------------------|---------------------------------------------|
| P0          | Vi phạm nguyên tắc lõi, gây sai kế toán hoặc sai vận hành | Chặn release                                |
| P1          | Lỗi nghiêm trọng ảnh hưởng sync/reconcile/evidence        | Chặn production sync nếu chưa xử lý         |
| P2          | Lỗi trung bình, có workaround có kiểm soát                | Có thể cho staging tiếp tục nếu owner duyệt |
| P3          | Lỗi nhẹ, không ảnh hưởng dữ liệu lõi                      | Theo dõi                                    |
| Observation | Ghi nhận cải tiến                                         | Không chặn nếu không ảnh hưởng P0/P1        |

**147. P0 ISSUE LIST CỦA PACK-04**

Các lỗi sau luôn là P0:

1.  Sync trực tiếp từ module ngoài MISA Integration Layer.

2.  Sync khi thiếu mapping.

3.  Sync khi mapping conflict.

4.  Sync dữ liệu nháp.

5.  Sync phiếu kế hoạch.

6.  Sync MRP/procurement requirement như chứng từ thật.

7.  Sync thành phẩm chưa Warehouse Receipt Confirmed.

8.  Sync write-off chưa disposal execution.

9.  Retry tạo chứng từ trùng.

10. Reconcile mismatch bị Closed.

11. MISA sửa ngược Operational Truth.

12. AI/CRM/Gateway/ADS có quyền sync.

13. Không audit.

14. Không evidence.

15. Không idempotency.

16. Không reconcile.

17. Gọi Production Ready khi chưa đủ điều kiện.

18. Mở production sync khi còn P0 issue.

19. Không có rollback/disable path.

20. Không có owner sign-off.

**148. PACK-04 TRACEABILITY REQUIREMENT**

Mọi nghiệp vụ đi MISA phải truy vết được theo chuỗi:

Nguồn nghiệp vụ → Phiếu nguồn → Checkpoint → FRM-25 → Mapping → Payload → Sync run → MISA response → Reconcile → Evidence → Final status.

Không có traceability thì không được gọi là hoàn tất.

Traceability phải đảm bảo:

1.  Từ chứng từ MISA truy về được phiếu nguồn.

2.  Từ phiếu nguồn biết đã đi MISA hay chưa.

3.  Từ FRM-25 biết mapping nào đã dùng.

4.  Từ sync run biết response nào nhận được.

5.  Từ reconcile biết khớp hay lệch.

6.  Từ closed status biết evidence nào chứng minh.

7.  Từ issue biết ai xử lý và xử lý thế nào.

**149. PACK-04 KHÔNG ĐƯỢC LÀM GÌ**

PACK-04 không được:

1.  Làm chủ nghiệp vụ sản xuất.

2.  Làm chủ công thức sản phẩm.

3.  Làm chủ Demand Board.

4.  Làm chủ MRP.

5.  Làm chủ Procurement Suppression.

6.  Làm chủ QC.

7.  Làm chủ Batch Release.

8.  Làm chủ Inventory Ledger vận hành.

9.  Làm chủ Traceability.

10. Làm chủ Recall.

11. Làm chủ Sale Lock.

12. Làm chủ Sellable Gate.

13. Làm chủ giá bán.

14. Làm chủ chiết khấu.

15. Làm chủ quyền lợi thành viên.

16. Làm chủ hoa hồng.

17. Làm chủ doanh thu verified.

18. Làm chủ payment status.

19. Làm chủ shipping status.

20. Làm chủ ROAS.

21. Thay thế MISA để làm sổ kế toán chính thức.

22. Cho phép sync không qua Integration Layer.

23. Cho phép hardcode mapping.

24. Cho phép dev tự đoán mã kế toán.

25. Cho phép xóa log sync.

26. Cho phép xóa dead-letter.

27. Cho phép sửa payload âm thầm.

28. Cho phép retry tạo trùng.

29. Cho phép reconcile lệch nhưng vẫn đóng vòng.

30. Cho phép gọi Production Ready khi chưa có evidence.

**150. PACK-04 ĐƯỢC PHÉP LÀM GÌ**

PACK-04 được phép quản trị:

1.  MISA Integration Layer.

2.  Mapping Registry.

3.  Accounting Handoff Checkpoint.

4.  FRM-25.

5.  Sync eligibility.

6.  Payload governance.

7.  Sync lifecycle.

8.  Retry policy.

9.  Idempotency.

10. Error classification.

11. Dead-letter.

12. Manual review.

13. Reconcile.

14. Audit.

15. Evidence.

16. Dry-run.

17. Production sync control.

18. Pause/disable sync.

19. Adjustment governance.

20. Rollback governance.

21. Monitoring.

22. Alert.

23. Reporting.

24. Release control cho tích hợp MISA.

25. Done Gate cho pack tích hợp MISA.

**151. PACK-04 P0 RULE REGISTRY**

| **Mã P0** | **Quy tắc**                                             |
|-----------|---------------------------------------------------------|
| P0-01     | MISA Integration Layer là cổng duy nhất                 |
| P0-02     | Không mapping thì không sync                            |
| P0-03     | Operational Truth không bị MISA sửa ngược               |
| P0-04     | Checkpoint hợp lệ mới được accounting handoff           |
| P0-05     | Không sync dữ liệu nháp                                 |
| P0-06     | Accounting handoff phải có audit và evidence            |
| P0-07     | Chống sync trùng là bắt buộc                            |
| P0-08     | Reconcile là bắt buộc                                   |
| P0-09     | Giá thành nội bộ không tự động là hạch toán chính thức  |
| P0-10     | Không gọi Production Ready khi chưa có evidence         |
| P0-11     | Mapping Registry bắt buộc trước sync                    |
| P0-12     | Không tự đoán mã MISA                                   |
| P0-13     | Phiếu kế hoạch không tạo chứng từ kế toán               |
| P0-14     | FRM-25 chỉ sinh từ checkpoint hợp lệ                    |
| P0-15     | Sâm Savigin phải mapping riêng nếu đi kế toán           |
| P0-16     | Production BOM Snapshot không phải chứng từ kế toán     |
| P0-17     | Costing không sửa nghiệp vụ nguồn                       |
| P0-18     | Write-off phải có disposal execution                    |
| P0-19     | Thành phẩm chỉ sync sau Warehouse Receipt Confirmed     |
| P0-20     | Sales/Revenue/Commission không tự mở trong PACK-04      |
| P0-21     | Chỉ FRM-25 đủ điều kiện mới vào sync lifecycle          |
| P0-22     | Sent không được gọi là hoàn tất                         |
| P0-23     | Retry không được tạo chứng từ trùng                     |
| P0-24     | Lỗi nghiệp vụ không được retry mù                       |
| P0-25     | Dead-letter không được xóa để che lỗi                   |
| P0-26     | Reconcile mismatch không được đóng vòng                 |
| P0-27     | MISA manual change phải được phát hiện và review        |
| P0-28     | Payload không được sửa âm thầm                          |
| P0-29     | Production sync phải có smoke, evidence, owner sign-off |
| P0-30     | Rollback không được xóa lịch sử                         |

**152. FINAL PACK DONE GATE**

PACK-04 được xem là hoàn chỉnh ở tầng tài liệu governance khi:

1.  PHẦN 1/4 đã khóa nguyên tắc tích hợp, owner boundary, checkpoint governance.

2.  PHẦN 2/4 đã khóa mapping registry, accounting handoff checkpoint, costing data và form-to-MISA matrix.

3.  PHẦN 3/4 đã khóa sync lifecycle, retry, error, reconcile, idempotency, audit và evidence.

4.  PHẦN 4/4 đã khóa smoke matrix, done gate, fail gate, release control và kết luận cuối.

5.  Tài liệu không mâu thuẫn PACK-01.

6.  Tài liệu không mâu thuẫn PACK-02.

7.  Tài liệu không mâu thuẫn PACK-03 V2.0.

8.  Không biến MISA thành owner vận hành.

9.  Không biến MISA thành nơi điều khiển nhà máy.

10. Không mở đường sync riêng cho từng module.

11. Không hardcode mapping.

12. Không tự tính doanh thu/chiết khấu/hoa hồng.

13. Không gọi Production Ready.

14. Không gọi Release Approved.

15. Không gọi Go-live Approved.

16. Có đủ P0 Rule Registry.

17. Có đủ Smoke Matrix.

18. Có đủ Fail Gate.

19. Có đủ Release Control.

20. Có đủ Traceability Requirement.

Trạng thái phù hợp của PACK-04 sau khi hoàn tất tài liệu là:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

Không phải:

- IMPLEMENTATION_COMPLETE.

- SMOKE_PASS.

- EVIDENCE_ACCEPTED.

- RELEASE_APPROVED.

- PRODUCTION_READY.

- GO_LIVE_APPROVED.

**153. ĐIỀU KIỆN CHUYỂN SANG PACK TIẾP THEO**

Có thể chuyển sang pack tiếp theo khi PACK-04 đạt:

1.  Documentation Done.

2.  Owner đọc hiểu ranh giới.

3.  Không còn mâu thuẫn với PACK-01/02/03.

4.  Pack tiếp theo biết PACK-04 là MISA Integration Layer, không phải owner nghiệp vụ.

5.  Các pack sau không được tự sync MISA riêng.

6.  Các pack sau nếu có doanh thu, chiết khấu, hoa hồng, thuế, voucher, KPI phải phát hành checkpoint hợp lệ trước khi PACK-04 nhận handoff.

7.  Các pack sau phải giữ nguyên nguyên tắc không hardcode runtime business values.

8.  Các pack sau phải giữ nguyên nguyên tắc evidence, audit, smoke, done gate.

**154. PACK-04 FINAL CONCLUSION**

PACK-04 khóa lớp tích hợp MISA cho hệ thống Ginsengfood theo nguyên tắc: vận hành thuộc Ginsengfood, kế toán chính thức thuộc MISA, còn MISA Integration Layer là cổng duy nhất để chuyển dữ liệu giữa hai hệ thống.

Ginsengfood giữ Operational Truth.

MISA giữ Accounting Truth.

PACK-04 giữ Integration Truth.

MISA không điều khiển nhà máy.

MISA không quyết định sản xuất.

MISA không quyết định công thức.

MISA không quyết định nguyên liệu sẵn sàng sản xuất.

MISA không quyết định QC.

MISA không quyết định batch release.

MISA không quyết định nhập kho vận hành.

MISA không quyết định truy xuất.

MISA không quyết định recall.

MISA không quyết định sale lock.

MISA không quyết định sản phẩm được bán.

MISA chỉ ghi nhận kế toán từ các checkpoint vận hành hợp lệ, có mapping ACTIVE, có FRM-25, có audit, có evidence, có idempotency, có sync lifecycle và có reconcile.

PACK-04 cũng khóa rõ rằng dữ liệu kế hoạch không phải chứng từ kế toán.

Demand không phải chứng từ kế toán.

MRP không phải chứng từ kế toán.

Procurement Requirement không phải chứng từ kế toán.

Harvest Requirement không phải chứng từ kế toán.

BOM Snapshot không phải chứng từ kế toán.

Scan không phải chứng từ kế toán.

Packaging không phải nhập kho.

Printing không phải nhập kho.

QC_PASS không phải RELEASED.

RELEASED chưa đủ nếu chưa Warehouse Receipt Confirmed.

Write-off chưa đủ nếu chưa Disposal Execution và Inventory Ledger Write-off.

Retry không được tạo chứng từ trùng.

Sent không phải Completed.

Accepted không phải Reconciled.

Reconciled mismatch không được Closed.

Dead-letter không được xóa.

Manual review không được sửa tay tùy tiện.

Rollback không được xóa lịch sử.

PACK-04 hoàn tất ở tầng governance khi toàn bộ 4 phần được khóa, nhưng vẫn phải tiếp tục qua implementation, test, smoke, evidence, owner review và release decision trước khi được gọi production sync thật.

**KẾT LUẬN CUỐI:**  
PACK-04 là pack kiểm soát MISA Integration / Accounting Handoff / Costing / Sync / Reconcile của Ginsengfood. Pack này không làm thay MISA, không làm thay Operational Core, không làm thay Product Master, không làm thay MRP, không làm thay Commerce/Finance. Pack này bảo đảm mọi dữ liệu đi MISA đều đúng nguồn, đúng checkpoint, đúng mapping, đúng audit, đúng evidence, đúng idempotency và đúng reconcile.

**TRẠNG THÁI PACK-04:**  
**GOVERNANCE_DOCUMENTATION_COMPLETE — PENDING IMPLEMENTATION / TEST / SMOKE / EVIDENCE / OWNER SIGN-OFF / RELEASE DECISION**.

**PACK-04 — POST-COMPLETION HANDOFF NOTE**

**MISA INTEGRATION / ACCOUNTING HANDOFF / COSTING / SYNC / RECONCILE**

**GOVERNANCE COMPLETION & NEXT-PACK DEPENDENCY CONTROL**

**V1.0 CLEAN FINAL**

**1. MỤC TIÊU CỦA BẢN CHUYỂN TIẾP**

Bản chuyển tiếp này được dùng để khóa trạng thái sau khi PACK-04 đã hoàn tất đủ 4 phần ở tầng tài liệu governance.

Mục tiêu chính:

1.  Xác nhận PACK-04 đã hoàn chỉnh về mặt tài liệu governance.

2.  Khóa rõ PACK-04 chưa phải implementation complete.

3.  Khóa rõ PACK-04 chưa phải smoke pass.

4.  Khóa rõ PACK-04 chưa phải evidence accepted.

5.  Khóa rõ PACK-04 chưa phải release approved.

6.  Khóa rõ PACK-04 chưa phải production ready.

7.  Xác định các pack sau phải phụ thuộc PACK-04 như thế nào.

8.  Ngăn các pack sau tự sync MISA riêng lẻ.

9.  Ngăn việc hardcode mapping, tài khoản kế toán, mã kho, mã hàng, mã chi phí.

10. Làm cầu nối để viết tiếp pack sau mà không phá ranh giới đã khóa.

**2. TRẠNG THÁI CHÍNH THỨC CỦA PACK-04**

PACK-04 sau khi hoàn tất 4 phần được xác định ở trạng thái:

**GOVERNANCE_DOCUMENTATION_COMPLETE**

Trạng thái này có nghĩa:

- Tài liệu governance đã hoàn chỉnh.

- Owner boundary đã rõ.

- MISA Integration Layer đã được khóa.

- Mapping Registry đã được khóa.

- Accounting Handoff Checkpoint đã được khóa.

- FRM-25 đã được khóa vai trò.

- Sync lifecycle đã được khóa.

- Retry, idempotency, dead-letter, reconcile đã được khóa.

- Smoke Matrix đã được khóa.

- Done Gate và Fail Gate đã được khóa.

- Release Control đã được khóa.

Trạng thái này không có nghĩa:

- Dev đã triển khai xong.

- MISA đã kết nối thật.

- Mapping production đã hoàn tất.

- Smoke đã pass.

- Evidence đã accepted.

- Owner đã sign-off.

- Kế toán đã sign-off.

- Production sync đã được mở.

- Hệ thống đã production ready.

- Hệ thống đã go-live.

**3. PACK-04 ĐÃ KHÓA NHỮNG GÌ**

PACK-04 đã khóa các nhóm nguyên tắc sau:

**3.1. Ranh giới vận hành và kế toán**

Ginsengfood giữ Operational Truth.

MISA giữ Accounting Truth.

PACK-04 giữ Integration Truth.

MISA không điều khiển nhà máy.

MISA không quyết định sản xuất, công thức, QC, release, warehouse receipt, traceability, recall, sale lock hoặc sellable gate.

**3.2. MISA Integration Layer là cổng duy nhất**

Mọi dữ liệu đi MISA phải đi qua MISA Integration Layer.

Không module nào được sync MISA trực tiếp.

Các module bị cấm sync riêng gồm:

- Operational Core.

- Product Master.

- Demand/MRP.

- Procurement.

- Production.

- QC.

- Warehouse.

- Traceability.

- Recall.

- Commerce.

- AI Advisor.

- Facebook Gateway.

- ADS.

- MC AI.

- CRM.

- Landing Page.

- Payment.

- Shipping.

- Finance/KPI nếu chưa qua owner pack và checkpoint hợp lệ.

**3.3. Không mapping thì không sync**

Mọi bản ghi đi MISA phải có mapping ACTIVE.

Mapping bắt buộc tối thiểu gồm:

- Kho.

- Location nếu áp dụng.

- Nguyên liệu.

- Bao bì.

- Vật tư.

- Thành phẩm/SKU.

- Đơn vị tính.

- Supplier nếu áp dụng.

- Company Source nếu áp dụng.

- Tài khoản kế toán nếu áp dụng.

- Cost center nếu áp dụng.

- Đối tượng tập hợp chi phí nếu áp dụng.

Không có mapping thì fail-closed.

Không tự đoán mã MISA.

Không hardcode mapping.

**3.4. Checkpoint hợp lệ mới tạo Accounting Handoff**

Không phải mọi phiếu đều đi MISA.

Không phải mọi scan đều đi MISA.

Không phải mọi kế hoạch đều đi MISA.

Chỉ checkpoint hợp lệ mới tạo FRM-25 — MISA Accounting Handoff Record.

Các checkpoint nền đã khóa:

1.  Raw Material Intake Approved.

2.  Packaging / Material Intake Approved.

3.  Material Issue Confirmed.

4.  Packaging / Material Issue Confirmed.

5.  Disposal Write-off Confirmed.

6.  Finished Goods Warehouse Receipt Confirmed.

7.  Internal Costing Checkpoint nếu policy cho phép.

8.  Sales / Revenue / Discount / Commission checkpoint nếu owner pack liên quan phát hành hợp lệ.

**3.5. Phiếu kế hoạch không tạo chứng từ kế toán**

Các phiếu sau không tạo chứng từ kế toán trực tiếp:

- FRM-01 — Phiếu kế hoạch / nhu cầu sản xuất.

- FRM-02 — Production Demand Board Record.

- FRM-03 — Formula Resolution / Production BOM Snapshot Record.

- FRM-04 — MRP Run / Material Requirement Board.

- FRM-05 — Procurement Suppression Result.

- FRM-06 — Phiếu yêu cầu mua nguyên liệu / vật tư.

- FRM-07 — Phiếu yêu cầu thu hoạch Sâm Savigin.

- FRM-08 — Phiếu yêu cầu mua bao bì / vật tư đóng gói.

- FRM-11 — Lệnh sản xuất.

- FRM-12 — Phiếu đề nghị cấp nguyên liệu cho sản xuất.

- FRM-13 — Phiếu chấp thuận nguyên liệu được phép đưa vào sản xuất.

- FRM-16 → FRM-21 nếu chưa phát sinh checkpoint kế toán hợp lệ.

- FRM-23 nếu mới là yêu cầu hủy/ghi giảm, chưa disposal execution.

- FRM-26 / FRM-27 là evidence, không phải chứng từ kế toán.

**3.6. Sync lifecycle không được rút gọn**

Một bản ghi đi MISA phải qua vòng đời:

Nguồn nghiệp vụ → Phiếu nguồn → Checkpoint → FRM-25 → Mapping → Payload → Sync run → MISA response → Reconcile → Evidence → Final status.

Không được gọi hoàn tất chỉ vì đã gửi.

Không được gọi hoàn tất chỉ vì MISA accepted.

Không được Closed nếu reconcile mismatch.

Không được retry tạo chứng từ trùng.

Không được xóa dead-letter.

Không được rollback bằng cách xóa lịch sử.

**4. CÁC PACK SAU PHẢI PHỤ THUỘC PACK-04 NHƯ THẾ NÀO**

Các pack sau nếu có phát sinh dữ liệu kế toán, tài chính, doanh thu, chiết khấu, hoa hồng, thuế, voucher, hàng tồn, giá vốn hoặc chi phí thì phải tuân thủ PACK-04.

Nguyên tắc:

1.  Pack sau không được tự sync MISA.

2.  Pack sau không được tự tạo mapping MISA.

3.  Pack sau không được tự hardcode mã kế toán.

4.  Pack sau không được tự tạo chứng từ kế toán.

5.  Pack sau nếu cần MISA phải phát hành checkpoint hợp lệ.

6.  PACK-04 chỉ nhận checkpoint hợp lệ từ pack owner.

7.  Không có owner checkpoint thì không accounting handoff.

8.  Không có mapping thì không sync.

9.  Không có evidence thì không sync.

10. Không có audit thì không sync.

**5. RANH GIỚI VỚI COMMERCE / ORDER / PAYMENT / SHIPPING**

Các nghiệp vụ commerce, order, payment, shipping không thuộc quyền quyết định của PACK-04.

PACK-04 không được tự tính:

- Giá bán cuối.

- Giá niêm yết.

- Giá chương trình.

- Chiết khấu.

- Voucher.

- Quyền lợi thành viên.

- Diamond referral benefit.

- Shipping fee.

- COD status.

- Payment status.

- Verified revenue.

- Order status.

- Commission.

Các giá trị này phải đến từ owner pack tương ứng.

PACK-04 chỉ nhận dữ liệu khi có checkpoint hợp lệ.

Ví dụ:

- Không có Customer Confirmation thì không có official order.

- Không có Payment Confirmation thì không có paid status.

- Không có ORDER_VERIFIED thì không có verified revenue.

- Không có checkpoint doanh thu hợp lệ thì PACK-04 không sync doanh thu sang MISA.

- Không có checkpoint hoa hồng hợp lệ thì PACK-04 không sync commission sang MISA.

**6. RANH GIỚI VỚI FINANCE / KPI / REWARD / TAX / VOUCHER**

Các nghiệp vụ finance mở rộng phải có owner pack riêng.

PACK-04 không tự làm:

- KPI.

- Thưởng.

- Hoa hồng.

- Thuế.

- VAT.

- Voucher.

- Chiết khấu.

- Công nợ.

- Doanh thu verified.

- ROAS.

- CPA.

- AOV.

- Member tier benefit.

- Diamond commission.

PACK-04 chỉ quản trị đường đi MISA sau khi pack owner phát hành checkpoint hợp lệ.

Nếu chưa có pack owner hoặc chưa có checkpoint, PACK-04 phải fail-closed.

**7. RANH GIỚI VỚI AI ADVISOR / CHANNEL / FACEBOOK / ADS / MC AI**

AI Advisor, Facebook Gateway, ADS, MC AI, CRM, Landing Page không được sync MISA.

Các hệ này không được:

- Tạo chứng từ kế toán.

- Tạo mapping MISA.

- Gọi MISA trực tiếp.

- Đánh dấu đã hạch toán.

- Đánh dấu đã ghi nhận doanh thu.

- Đánh dấu đã paid nếu chưa có Payment Core.

- Đánh dấu đã verified revenue nếu chưa có Order/Finance checkpoint.

- Tính hoa hồng chính thức.

- Tính thuế chính thức.

- Sửa dữ liệu kế toán.

Các hệ này chỉ được dùng runtime values từ owner pack.

Nếu cần dữ liệu kế toán, phải đi qua checkpoint và PACK-04.

**8. RANH GIỚI VỚI OPERATIONAL CORE**

PACK-04 không thay đổi PACK-01.

PACK-04 chỉ tiêu thụ checkpoint hợp lệ từ Operational Core.

PACK-04 không được sửa:

- Source Origin.

- Raw Material Intake.

- Incoming QC.

- Raw Material Lot.

- READY_FOR_PRODUCTION.

- Production Order.

- Production BOM Snapshot.

- Material Issue.

- Production Execution.

- Packaging.

- Printing.

- QC thành phẩm.

- Batch Release.

- Warehouse Receipt Confirmed.

- Inventory Ledger vận hành.

- Traceability.

- Recall.

- Sale Lock.

- Sellable Gate.

Nếu reconcile phát hiện lệch, phải đưa review, không sửa ngược Operational Truth.

**9. RANH GIỚI VỚI PRODUCT MASTER / FORMULA**

PACK-04 không thay đổi PACK-02.

PACK-04 không được sửa:

- SKU canonical.

- Ingredient canonical.

- Recipe/BOM.

- G1 Approved Operational Formula.

- Formula Version.

- Packaging config.

- Print config.

- QC config.

- HSD config.

- Trade item config.

- Public Product Knowledge.

- Production BOM Snapshot.

BOM Snapshot không phải chứng từ kế toán.

G1 Formula không phải chứng từ kế toán.

Costing không được sửa công thức.

MISA không được sửa công thức.

**10. RANH GIỚI VỚI DEMAND / MRP / PROCUREMENT**

PACK-04 không thay đổi PACK-03.

PACK-04 không được sửa:

- Demand Board.

- MRP Run.

- Material Requirement Board.

- Procurement Suppression.

- Harvest Requirement.

- Purchase Requirement.

- Packaging Requirement.

- Dynamic suppression threshold.

- Strategic reserve.

- Disposal Request.

- Write-off Control.

MRP không phải chứng từ kế toán.

Procurement Requirement không phải chứng từ kế toán.

Harvest Requirement không phải chứng từ kế toán.

Disposal Request chưa phải write-off kế toán nếu chưa approved, execution và ledger write-off.

**11. ĐIỀU KIỆN ĐỂ PACK SAU ĐƯỢC GẮN VỚI PACK-04**

Một pack sau chỉ được gắn với PACK-04 khi có đủ:

1.  Owner pack rõ ràng.

2.  Nghiệp vụ nguồn rõ ràng.

3.  Checkpoint rõ ràng.

4.  Phiếu nguồn hoặc event nguồn rõ ràng.

5.  Mapping requirement rõ ràng.

6.  Audit requirement rõ ràng.

7.  Evidence requirement rõ ràng.

8.  Sync eligibility rõ ràng.

9.  Reconcile requirement rõ ràng.

10. Fail gate rõ ràng.

Nếu thiếu các điều kiện trên, PACK-04 không nhận sync.

**12. NEXT-PACK DEPENDENCY RULE**

Các pack viết sau phải thêm mục dependency với PACK-04 nếu có liên quan kế toán.

Mẫu dependency bắt buộc:

**Dependency với PACK-04 — MISA Integration Layer**

Pack này không sync MISA trực tiếp.

Nếu phát sinh dữ liệu cần hạch toán hoặc đồng bộ kế toán, pack này phải phát hành checkpoint hợp lệ cho PACK-04.

PACK-04 chịu trách nhiệm:

- Mapping.

- Accounting handoff.

- Sync eligibility.

- Sync lifecycle.

- Retry.

- Idempotency.

- Error handling.

- Reconcile.

- Audit.

- Evidence.

- Release control cho đường MISA.

Pack này chịu trách nhiệm:

- Nghiệp vụ nguồn.

- Rule nguồn.

- Trạng thái nguồn.

- Owner approval nguồn.

- Evidence nguồn.

- Checkpoint nguồn.

Không có checkpoint hợp lệ thì không có sync MISA.

**13. QUY TẮC CHỐNG RỐI KHI MỞ RỘNG**

Khi mở rộng hệ thống, không được vá trực tiếp vào PACK-04 bằng cách thêm logic của pack khác.

Nguyên tắc mở rộng:

1.  Pack nào sở hữu nghiệp vụ thì pack đó định nghĩa rule nguồn.

2.  PACK-04 chỉ nhận checkpoint.

3.  Không đưa logic bán hàng vào PACK-04.

4.  Không đưa logic giá vào PACK-04.

5.  Không đưa logic member vào PACK-04.

6.  Không đưa logic hoa hồng vào PACK-04.

7.  Không đưa logic quảng cáo vào PACK-04.

8.  Không đưa logic AI tư vấn vào PACK-04.

9.  Không đưa logic sản xuất vào PACK-04.

10. Không đưa logic công thức vào PACK-04.

PACK-04 chỉ giữ đường tích hợp kế toán.

**14. CÂU KHÓA CHO DEV KHI TRIỂN KHAI PACK-04**

Dev không được hiểu PACK-04 là “viết API gửi MISA”.

PACK-04 là lớp governance cho:

- Source-of-truth boundary.

- Mapping.

- Checkpoint.

- Accounting handoff.

- Sync lifecycle.

- Idempotency.

- Retry.

- Error.

- Reconcile.

- Audit.

- Evidence.

- Security.

- Release control.

Một hệ thống thực tế không thể làm bằng cách copy vài đoạn code gửi MISA rồi xem như xong.

Ví dụ: một phiếu xuất nguyên liệu cho sản xuất không đơn giản là gửi mã hàng, số lượng, kho sang MISA.

Thực tế phải biết:

- Production Order nào.

- BOM Snapshot nào.

- Nguyên liệu nào.

- Lot nào.

- Có được phép xuất không.

- Đã có ledger debit chưa.

- Có mapping chưa.

- Đơn vị tính có khớp không.

- Có cost center không.

- Có evidence không.

- Có audit không.

- Có retry/idempotency không.

- MISA phản hồi gì.

- Có reconcile không.

- Nếu lệch thì ai xử lý.

Vì vậy dev không được tự làm shortcut kỹ thuật để “gửi nhanh sang MISA”.

**15. TRẠNG THÁI ĐỂ ĐI TIẾP**

Sau bản chuyển tiếp này, trạng thái phù hợp là:

**PACK-04 — GOVERNANCE_DOCUMENTATION_COMPLETE**

Và hệ thống sẵn sàng chuyển sang pack tiếp theo ở tầng tài liệu.

Pack tiếp theo phải đọc PACK-04 như một dependency bắt buộc nếu có bất kỳ dữ liệu nào liên quan đến:

- Kế toán.

- Hạch toán.

- Chi phí.

- Giá thành.

- Doanh thu.

- Chiết khấu.

- Hoa hồng.

- Thuế.

- Voucher.

- Công nợ.

- MISA.

- Reconcile.

- Evidence tài chính.

**16. KẾT LUẬN BẢN CHUYỂN TIẾP**

PACK-04 đã hoàn tất vai trò khóa lớp MISA Integration cho Ginsengfood.

Từ sau PACK-04, mọi pack phát sinh dữ liệu kế toán phải đi theo nguyên tắc:

**Owner pack phát hành checkpoint hợp lệ → PACK-04 kiểm mapping → tạo accounting handoff → sync MISA → reconcile → audit → evidence → close.**

Không có checkpoint thì không sync.

Không có mapping thì không sync.

Không có evidence thì không sync.

Không có audit thì không sync.

Không có reconcile thì không gọi hoàn tất.

Không có owner sign-off thì không mở production sync.

**TRẠNG THÁI CUỐI:**  
**PACK-04 LOCKED AT GOVERNANCE DOCUMENTATION LEVEL — READY TO BE USED AS DEPENDENCY FOR NEXT PACK — NOT PRODUCTION READY.**
