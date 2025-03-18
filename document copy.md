### Yêu cầu chức năng (Functional Requirements)

Yêu cầu chức năng mô tả những gì hệ thống phải làm được, dựa trên các use case mày cung cấp.

### 1. Quản lý Tài liệu

- **Xem tài liệu**: Hệ thống phải cho phép người dùng xem tài liệu.
- **Tạo tài liệu mới**: Người dùng phải có thể tạo tài liệu mới từ nhiều mẫu khác nhau (ví dụ: Markdown, văn bản phong phú, mã code).
- **Chỉnh sửa tài liệu**: Hệ thống phải cho phép người dùng chỉnh sửa nội dung, định dạng và cấu trúc của tài liệu.
- **Xem lịch sử phiên bản**: Người dùng phải có thể xem và khôi phục các phiên bản trước của tài liệu.
- **Tải tài liệu lên**: Người dùng phải có thể tải tài liệu lên theo file hoặc list file.

### 2. Tổ chức Tài liệu

- Danh sách tài liệu hiện theo 3 kiểu: cấu trúc cây, grid, list column
- **Sắp xếp tài liệu theo cấu trúc cây**: Hệ thống phải cho phép người dùng tạo, di chuyển và tổ chức tài liệu trong cấu trúc phân cấp.
- **Tìm kiếm tài liệu**: Người dùng phải có thể tìm kiếm tài liệu bằng từ khóa, thẻ hoặc bộ lọc.
- **Gắn thẻ và phân loại**: Hệ thống phải cho phép người dùng thêm thẻ để phân loại và tham chiếu chéo tài liệu.
- **Đánh dấu yêu thích**: Người dùng phải có thể đánh dấu tài liệu để truy cập nhanh.
- **Hoạt động gần đây**: Hệ thống phải hiển thị các hoạt động gần đây liên quan đến không gian làm việc.

### 3. Quản lý Quyền và Người dùng

- **Đăng ký và đăng nhập**: Hệ thống phải cho phép người dùng tạo tài khoản và đăng nhập.
- **Tạo không gian làm việc**: Người dùng có quyền hệ thống (quản trị viên hệ thống, quản lý) phải có thể tạo không gian làm việc mới cho nhóm.
- **Xóa không gian làm việc**: Người dùng có quyền hệ thống (quản trị viên hệ thống hoặc chủ sở hữu) phải có thể xóa không gian làm việc.
- **Quản lý không gian làm việc**: Người dùng có quyền hệ thống phải có thể chỉnh sửa cài đặt chung hoặc thực hiện các tác vụ quản lý cấp cao cho không gian làm việc.
- **Mời thành viên**: Quản trị viên không gian làm việc có thể mời người dùng khác tham gia không gian làm việc.
- **Cấp quyền tài liệu**: Người dùng phải có thể cấp quyền (xem, bình luận, chỉnh sửa, quản lý) cho người khác đối với từng tài liệu cụ thể.
- **Quản lý vai trò trong không gian làm việc**:
    - **Quyền hệ thống cho người dùng với không gian làm việc**: Hệ thống phải cho phép một số người dùng (ví dụ: quản trị viên hệ thống) có các quyền hệ thống, bao gồm:
        - Tạo không gian làm việc mới.
        - Xóa không gian làm việc.
        - Quản lý cài đặt không gian làm việc ở cấp hệ thống.
    - **Phân quyền trong không gian làm việc bởi quản trị viên**: Quản trị viên không gian làm việc phải có thể gán vai trò cho thành viên trong không gian làm việc, bao gồm:
        - **Người xem**: Chỉ có thể xem nội dung.
        - **Thành viên**: Có thể xem và chỉnh sửa nội dung trong giới hạn nhất định
        - **Quản trị viên**: Có thể quản lý thành viên, gán vai trò và điều chỉnh cài đặt không gian làm việc.
        - **Chủ sở hữu**: Có toàn quyền kiểm soát không gian làm việc, bao gồm xóa nó hoặc thay đổi quyền của thành viên.

### 4. Hỗ trợ AI cho tài liệu

- **Tạo nội dung với AI**: Hệ thống phải cho phép người dùng nhập yêu cầu để AI tạo nội dung tài liệu.
- **Tóm tắt tài liệu**: AI phải có thể tóm tắt nội dung dài thành các điểm chính.
- **Tạo tài liệu từ gợi ý**: Người dùng phải có thể nhập một gợi ý, và AI sẽ tạo tài liệu mới từ đó.
- **Tự động đề xuất nội dung**: Khi người dùng nhập văn bản, AI phải có thể gợi ý mở rộng nội dung hoặc bổ sung ý.
- **Chỉnh sửa thông minh**: AI phải đề xuất sửa lỗi chính tả, ngữ pháp và tối ưu cách diễn đạt.
- **Tạo bảng & biểu đồ tự động**: AI phải phân tích nội dung và tự động tạo bảng, biểu đồ minh họa.

### 5. Chatbot Hỏi Đáp từ Tài liệu

- **Truy vấn tài liệu tự nhiên**: Người dùng phải có thể đặt câu hỏi (ví dụ: "Hướng dẫn setup dự án là gì?"), và chatbot sẽ trích xuất câu trả lời từ tài liệu.
- **Hiểu ngữ cảnh và theo dõi hội thoại**: Chatbot phải hiểu câu hỏi theo ngữ cảnh trước đó để tiếp tục hội thoại.
- **Hỗ trợ nhiều ngôn ngữ**: Chatbot phải trả lời bằng nhiều ngôn ngữ khác nhau.
- **Trích dẫn nguồn tài liệu**: Khi trả lời, chatbot phải cung cấp liên kết hoặc đoạn văn bản từ tài liệu gốc.
- **Hỗ trợ tìm kiếm nâng cao**: Người dùng phải có thể tìm kiếm theo từ khóa, tác giả hoặc ngày tạo tài liệu.
- **Hỗ trợ phản hồi ngữ cảnh theo nhóm**: Chatbot phải hiểu và trả lời dựa trên nội dung từ nhiều tài liệu liên quan.

### 6. Phân tích và Đề xuất Thông Minh

- **Đề xuất tài liệu liên quan**: Hệ thống phải gợi ý các tài liệu khác có nội dung liên quan khi người dùng đang xem tài liệu.
- **Gợi ý tài liệu quan trọng**: AI phải đề xuất các tài liệu hữu ích dựa trên vai trò và lịch sử tìm kiếm của người dùng.
- **Theo dõi hoạt động AI**: Hệ thống phải hiển thị lịch sử các câu hỏi và câu trả lời của chatbot để người dùng xem lại.

### 7. Bảng Kanban

- **Tạo bảng Kanban**: Hệ thống phải cho phép người dùng tạo bảng Kanban trong không gian làm việc để quản lý công việc.
- **Thêm cột Kanban**: Người dùng phải có thể thêm, xóa hoặc đổi tên các cột trong bảng Kanban (ví dụ: "Đang chờ", "Đang làm", "Hoàn thành").
- **Thêm thẻ công việc**: Người dùng phải có thể tạo thẻ công việc (task card) trong các cột, bao gồm tiêu đề, mô tả, ngày hết hạn và người phụ trách.
- **Di chuyển thẻ**: Hệ thống phải cho phép người dùng kéo và thả thẻ công việc giữa các cột để cập nhật trạng thái.
- **Lọc và tìm kiếm thẻ**: Người dùng phải có thể lọc hoặc tìm kiếm thẻ công việc theo từ khóa, người phụ trách hoặc trạng thái.
- **Liên kết tài liệu**: Người dùng phải có thể gắn thẻ công việc với tài liệu liên quan trong hệ thống.

### 8. Quản lý Issue

- **Tạo Issue**: Hệ thống phải cho phép người dùng tạo issue (vấn đề) trong không gian làm việc, bao gồm tiêu đề, mô tả, mức độ ưu tiên (cao, trung bình, thấp) và người phụ trách.
- **Cập nhật trạng thái Issue**: Người dùng phải có thể thay đổi trạng thái của issue (ví dụ: "Mới", "Đang xử lý", "Đã giải quyết", "Đóng").
- **Bình luận trên Issue**: Người dùng phải có thể thêm bình luận hoặc ghi chú vào issue để trao đổi thông tin.
- **Gắn thẻ cho Issue**: Hệ thống phải cho phép người dùng thêm thẻ (tag) để phân loại issue (ví dụ: "lỗi", "yêu cầu mới").
- **Lịch sử thay đổi Issue**: Hệ thống phải ghi lại lịch sử thay đổi của issue (ví dụ: ai thay đổi trạng thái, khi nào).
- **Thông báo Issue**: Hệ thống phải gửi thông báo cho người phụ trách hoặc thành viên liên quan khi issue được tạo hoặc cập nhật.

### Yêu cầu phi chức năng (Non-Functional Requirements)

Yêu cầu phi chức năng định nghĩa các thuộc tính chất lượng và ràng buộc của hệ thống.

- **Hiệu suất**: Hệ thống phải xử lý số lượng lớn tài liệu và người dùng một cách hiệu quả, đảm bảo thời gian phản hồi nhanh (ví dụ: tìm kiếm nhanh, tạo nội dung AI nhanh).
- **Bảo mật**: Xác thực người dùng, phân quyền và truy cập tài liệu phải an toàn, có thể cần mã hóa dữ liệu để bảo vệ thông tin nhạy cảm.
- **Tính dễ sử dụng**: Giao diện phải trực quan và thân thiện, giúp người dùng dễ dàng điều hướng và hoàn thành công việc.
- **Khả năng mở rộng**: Hệ thống phải hỗ trợ số lượng người dùng và tài liệu ngày càng tăng mà không giảm hiệu suất.
- **Độ tin cậy**: Hệ thống phải luôn sẵn sàng và hoạt động chính xác, giảm thiểu thời gian ngừng hoạt động.
- **Khả năng bảo trì**: Hệ thống phải dễ cập nhật và bảo trì, đặc biệt với hỗ trợ plugin và tùy chỉnh.
- **Tính tương thích**: Hệ thống phải tích hợp được với các công cụ hoặc dịch vụ bên ngoài, hỗ trợ định dạng chuẩn và API.
- **Tính toàn vẹn dữ liệu**: Các chỉnh sửa tài liệu và lịch sử phiên bản phải được ghi lại chính xác và có thể khôi phục.
- **Khả năng truy cập**: Hệ thống phải tuân thủ các tiêu chuẩn truy cập để hỗ trợ người dùng khuyết tật.
- **Hỗ trợ đa ngôn ngữ**: Hệ thống phải hỗ trợ quốc tế hóa, đặc biệt vì chatbot xử lý nhiều ngôn ngữ.
- **Thời gian phản hồi**: Các tính năng AI (ví dụ: tạo nội dung, tóm tắt) phải trả kết quả trong khoảng thời gian chấp nhận được.
- **Đồng thời**: Hệ thống phải quản lý nhiều người dùng chỉnh sửa hoặc xem cùng một tài liệu mà không gây xung đột.


### Danh sách màn hình (Screens)

1. **Màn hình Đăng nhập/Đăng ký**
    - Form đăng nhập và đăng ký tài khoản.

2. **Thêm màn hình Welcome: Giới thiệu tổng quan, các tính năng nổi bật khi lần đầu đăng nhập**

3. **Màn hình Trang chủ (Dashboard)**
    - Tổng quan không gian làm việc, hoạt động gần đây, tài liệu yêu thích.
4. **Màn hình Danh sách không gian làm việc**
    - Danh sách không gian làm việc, nút tạo không gian làm việc mới (cho người có quyền).
5. **Màn hình Quản lý không gian làm việc**
    - Thông tin không gian làm việc, chức năng mời thành viên, quản lý vai trò, xóa không gian làm việc.
6. **Màn hình Danh sách tài liệu**
    - Hiển thị tài liệu theo cấu trúc cây, lưới, danh sách cột.
    - Thanh tìm kiếm tích hợp chatbot (đặt câu hỏi tự nhiên, tìm kiếm nâng cao).
7. **Màn hình Xem/Chỉnh sửa tài liệu**
    - Nội dung tài liệu, công cụ chỉnh sửa.
    - Tích hợp chatbot hỗ trợ viết (tạo nội dung, gợi ý, sửa lỗi).
    - Tab lịch sử phiên bản.
    - Màn hình Tải tài liệu đính kèm: Form tải file hoặc danh sách file.
8. **Màn hình Bảng Kanban** (trong workspace)
    - Các cột Kanban, thẻ công việc, chức năng thêm cột/thẻ, kéo thả.
9. **Màn hình Chi tiết thẻ Kanban** (trong workspace)
    - Chi tiết thẻ công việc (tiêu đề, mô tả, ngày hết hạn, người phụ trách, tài liệu liên kết).
10. **Màn hình Danh sách Issue** (trong workspace)
    - Danh sách issue, bộ lọc theo trạng thái, người phụ trách, mức độ ưu tiên.
11. **Màn hình Chi tiết Issue** (trong workspace)
    - Chi tiết issue (tiêu đề, mô tả, trạng thái, bình luận, lịch sử thay đổi).
12. **Màn hình Quản lý thành viên** (trong workspace)
    - Danh sách thành viên, chức năng gán vai trò.
13. **Màn hình Đề xuất thông minh, search với AI**
    - Danh sách tài liệu liên quan hoặc quan trọng dựa trên AI.

---

### Danh sách chức năng (Functions)

### 1. Quản lý Tài liệu

- Xem nội dung tài liệu.
- Tạo tài liệu mới từ mẫu.
- Chỉnh sửa nội dung, định dạng, cấu trúc tài liệu.
- Tích hợp chatbot:
    - Đặt câu hỏi để tạo nội dung trong tài liệu.
    - Gợi ý mở rộng nội dung khi nhập văn bản.
    - Sửa lỗi chính tả, ngữ pháp, tối ưu cách diễn đạt.
- Xem và khôi phục phiên bản trước.
- Tải file hoặc danh sách file lên.
- Version comparison: So sánh trực quan giữa các phiên bản.


### 2. Tổ chức Tài liệu

- Hiển thị danh sách tài liệu theo 3 kiểu.
- Tạo, di chuyển, tổ chức tài liệu trong cấu trúc cây.
- Tìm kiếm tài liệu bằng từ khóa, thẻ, bộ lọc.
- Tích hợp chatbot:
    - Đặt câu hỏi tự nhiên để tìm tài liệu.
    - Hỗ trợ tìm kiếm nâng cao (từ khóa, tác giả, ngày tạo).
- Thêm thẻ để phân loại tài liệu.
- Đánh dấu tài liệu yêu thích.
- Xem hoạt động gần đây.

### 3. Quản lý Quyền và Người dùng

- Đăng ký tài khoản.
- Đăng nhập.
- Tạo, xóa, quản lý không gian làm việc (quyền hệ thống).
- Mời thành viên.
- Cấp quyền tài liệu (xem, bình luận, chỉnh sửa, quản lý).
- Gán vai trò: Người xem, Thành viên, Quản trị viên, Chủ sở hữu.
- Chức năng @mentions: Thông báo cho người dùng cụ thể trong comments.

### 4. Hỗ trợ AI cho tài liệu
- Nhập yêu cầu để AI tạo nội dung (trong màn hình chỉnh sửa).
- Tóm tắt nội dung tài liệu.
- Tạo tài liệu từ gợi ý.
- Tạo bảng, biểu đồ tự động.
- AI-powered formatting: Tự động format nội dung theo cấu trúc phù hợp.

### 7. Phân tích và Đề xuất Thông Minh

- Gợi ý tài liệu liên quan.
- Đề xuất tài liệu quan trọng.
- Tìm kiếm, tóm tắt về workspace

### 5. Bảng Kanban

- Tạo bảng Kanban.
- Thêm, xóa, đổi tên cột.
- Tạo, di chuyển thẻ công việc.
- Lọc/tìm kiếm thẻ.
- Liên kết tài liệu với thẻ.

### 6. Quản lý Issue

- Tạo issue.
- Cập nhật trạng thái issue.
- Thêm bình luận, gắn thẻ.
- Xem lịch sử thay đổi.
- Gửi thông báo issue.

# Tài liệu trong Hệ thống

Tài liệu là một trong những thành phần quan trọng nhất của hệ thống quản lý không gian làm việc. Hệ thống hỗ trợ hai loại hiển thị và quản lý tài liệu: **Tài liệu Tổng** (từ trang chủ) và **Tài liệu Workspace** (trong từng không gian làm việc).

## 1. Kiến trúc tài liệu

### 1.1. Tài liệu Tổng (Global Documents)

**Tài liệu Tổng** là chế độ xem và quản lý tất cả tài liệu từ mọi workspace mà người dùng có quyền truy cập. Đây là nơi tập trung để tìm kiếm, xem và quản lý tài liệu trên toàn hệ thống.

**Đặc điểm:**
- Hiển thị tất cả tài liệu từ các workspace mà người dùng có quyền truy cập
- Có thể lọc theo workspace, loại tài liệu, tác giả, ngày tạo/sửa
- Hỗ trợ tìm kiếm tài liệu toàn cục
- Hiển thị thông tin về workspace nguồn cho mỗi tài liệu
- Có thể chỉnh sửa tài liệu (nếu có quyền), mọi thay đổi sẽ được đồng bộ với tài liệu trong workspace
- Hỗ trợ thống kê, báo cáo về tài liệu trên toàn hệ thống

### 1.2. Tài liệu Workspace

**Tài liệu Workspace** là chế độ xem và quản lý tài liệu trong phạm vi một workspace cụ thể. Đây là nơi làm việc chính với tài liệu trong bối cảnh của một dự án hoặc nhóm.

**Đặc điểm:**
- Chỉ hiển thị tài liệu thuộc workspace hiện tại
- Có thể sắp xếp tài liệu theo cấu trúc cây thư mục
- Hỗ trợ tìm kiếm trong phạm vi workspace
- Hỗ trợ tạo, chỉnh sửa, xóa tài liệu
- Dễ dàng liên kết với Kanban và Issue trong cùng workspace
- Hỗ trợ phân loại tài liệu bằng thẻ (tag) và thư mục

## 2. Hiển thị và Tổ chức

### 2.1. Chế độ hiển thị

Cả hai loại tài liệu đều hỗ trợ ba chế độ hiển thị:

- **Cấu trúc cây**: Tổ chức tài liệu theo phân cấp thư mục/nhóm
- **Grid**: Hiển thị dạng lưới với hình thu nhỏ của tài liệu
- **List Column**: Hiển thị dạng danh sách cột với các thông tin chi tiết

### 2.2. Tổ chức tài liệu

**Tài liệu Tổng:**
- Phân nhóm theo workspace
- Phân nhóm theo loại tài liệu
- Phân nhóm theo người tạo/sở hữu
- Phân nhóm theo ngày tạo/chỉnh sửa

**Tài liệu Workspace:**
- Phân nhóm theo thư mục
- Phân nhóm theo loại tài liệu
- Phân nhóm theo thẻ (tag)
- Phân nhóm theo trạng thái (nháp, đã xuất bản, lưu trữ)

## 3. Chức năng

### 3.1. Chức năng chung

Cả Tài liệu Tổng và Tài liệu Workspace đều hỗ trợ các chức năng cơ bản:

- **Xem tài liệu**: Mở và đọc nội dung tài liệu
- **Tìm kiếm**: Tìm kiếm tài liệu theo từ khóa, thẻ, người tạo, v.v.
- **Lọc**: Lọc tài liệu theo các tiêu chí khác nhau
- **Sắp xếp**: Sắp xếp tài liệu theo tên, ngày, kích thước, v.v.
- **Xem thông tin**: Xem metadata của tài liệu
- **Xem lịch sử phiên bản**: Theo dõi các thay đổi của tài liệu
- **Tải về**: Tải tài liệu về máy

### 3.2. Chức năng riêng của Tài liệu Tổng

- **Chuyển đổi workspace**: Chuyển trực tiếp đến tài liệu trong workspace nguồn
- **Báo cáo tổng hợp**: Tạo báo cáo về tài liệu trên toàn hệ thống
- **Tìm kiếm nâng cao**: Tìm kiếm trên nhiều workspace cùng lúc
- **So sánh tài liệu**: So sánh các tài liệu tương tự giữa các workspace
- **Tổng hợp nội dung**: Trích xuất và tổng hợp nội dung từ nhiều tài liệu

### 3.3. Chức năng riêng của Tài liệu Workspace

- **Tạo mới tài liệu**: Tạo tài liệu mới từ mẫu hoặc từ đầu
- **Tạo/quản lý thư mục**: Tổ chức tài liệu theo thư mục
- **Gắn thẻ**: Thêm thẻ để phân loại tài liệu
- **Đánh dấu yêu thích**: Đánh dấu tài liệu quan trọng
- **Liên kết với Kanban/Issue**: Kết nối tài liệu với công việc trong workspace
- **Bình luận**: Thảo luận về tài liệu với thành viên workspace

## 4. Tạo và Chỉnh sửa Tài liệu

### 4.1. Tạo tài liệu mới

Tài liệu mới chỉ có thể được tạo trong context của một workspace cụ thể (từ màn hình Tài liệu Workspace).

Các loại tài liệu hỗ trợ:
- Văn bản phong phú (Rich Text)
- Markdown
- Bảng tính
- Sơ đồ/Biểu đồ
- Mã nguồn (Code)
- Tài liệu từ file tải lên

### 4.2. Chỉnh sửa tài liệu

Tài liệu có thể được chỉnh sửa từ cả Tài liệu Tổng và Tài liệu Workspace (nếu người dùng có quyền thích hợp).

**Trình soạn thảo tích hợp:**
- Định dạng văn bản đầy đủ
- Chèn hình ảnh, bảng, liên kết
- Kiểm tra chính tả
- Chế độ xem trước
- Hỗ trợ đồng bộ hóa offline

## 5. Hỗ trợ AI

### 5.1. AI trong Tài liệu Tổng

- **Tìm kiếm nâng cao**: Tìm kiếm ngữ nghĩa trên toàn bộ workspace
- **Đề xuất tài liệu liên quan**: Gợi ý tài liệu liên quan đến nội dung đang xem
- **Tổng hợp nội dung**: Tóm tắt nội dung từ nhiều tài liệu khác nhau
- **Phân tích xu hướng**: Phát hiện xu hướng và chủ đề phổ biến trong tài liệu

### 5.2. AI trong Tài liệu Workspace

- **Hỗ trợ soạn thảo**: Đề xuất và tự động hoàn thành nội dung
- **Tạo nội dung**: Tạo nội dung từ gợi ý của người dùng
- **Tóm tắt tài liệu**: Tạo bản tóm tắt nội dung dài
- **Chỉnh sửa thông minh**: Sửa lỗi chính tả, ngữ pháp và cải thiện văn phong
- **Tự động tạo bảng & biểu đồ**: Phân tích dữ liệu và tạo bảng, biểu đồ minh họa

## 6. Quản lý Phiên bản

### 6.1. Lịch sử phiên bản

Cả Tài liệu Tổng và Tài liệu Workspace đều hỗ trợ xem và quản lý lịch sử phiên bản:

- Theo dõi tất cả các thay đổi
- Xem ai thực hiện thay đổi và khi nào
- So sánh các phiên bản khác nhau
- Khôi phục phiên bản trước

### 6.2. Đồng bộ hóa

Khi chỉnh sửa tài liệu từ Tài liệu Tổng, các thay đổi sẽ tự động đồng bộ với tài liệu trong Workspace tương ứng và ngược lại.

## 7. Phân quyền Tài liệu

### 7.1. Các cấp độ quyền

- **Quản lý**: Toàn quyền quản lý, có thể cấp quyền, xóa tài liệu
- **Chỉnh sửa**: Có thể xem và chỉnh sửa nội dung
- **Bình luận**: Có thể xem và thêm bình luận
- **Xem**: Chỉ có thể xem nội dung

### 7.2. Phân quyền trong Tài liệu Tổng

- Quản trị viên hệ thống: Toàn quyền với tất cả tài liệu
- Chủ sở hữu workspace: Toàn quyền với tài liệu trong workspace của mình
- Người dùng khác: Chỉ xem được tài liệu từ các workspace mà họ là thành viên

### 7.3. Phân quyền trong Tài liệu Workspace

- Theo vai trò trong workspace (Chủ sở hữu, Quản trị viên, Thành viên, Người xem)
- Có thể thiết lập quyền riêng cho từng tài liệu cụ thể

## 8. Tích hợp và Liên kết

### 8.1. Liên kết với Kanban

- Đính kèm tài liệu vào thẻ Kanban
- Tạo thẻ Kanban từ tài liệu
- Theo dõi trạng thái công việc từ tài liệu

### 8.2. Liên kết với Issue

- Đính kèm tài liệu vào issue
- Tạo issue từ tài liệu
- Theo dõi và cập nhật issue từ tài liệu

### 8.3. Tích hợp khác

- Tích hợp với email (gửi tài liệu qua email)
- Tích hợp với các công cụ bên ngoài (Google Drive, OneDrive, etc.)
- Chia sẻ tài liệu qua liên kết công khai hoặc riêng tư

