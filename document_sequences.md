# Biểu đồ Sequence cho Chức năng Tài liệu

Tài liệu này chứa các biểu đồ tuần tự (sequence diagram) mô tả các luồng xử lý chính liên quan đến quản lý tài liệu trong hệ thống. Biểu đồ được phân chia theo các chức năng khác nhau từ việc xem, tạo, chỉnh sửa đến tìm kiếm và sử dụng AI với tài liệu.

## Vai trò trong Hệ thống (System Roles)

Hệ thống có 3 vai trò chính:

1. **System Admin**: Có toàn quyền quản lý hệ thống, tất cả workspace và người dùng.
   - Truy cập tất cả tài liệu trong hệ thống
   - Quản lý người dùng và phân quyền
   - Tạo, sửa, xóa workspace và cài đặt hệ thống

2. **Manager**: Có quyền quản lý một số workspace và chức năng hệ thống giới hạn.
   - Quản lý các workspace được gán
   - Phân quyền cho thành viên trong workspace được quản lý
   - Kiểm soát tài liệu, task và issue trong phạm vi quản lý

3. **Member**: Người dùng thông thường với các quyền cơ bản.
   - Truy cập workspace và tài liệu được phân quyền
   - Tạo và chỉnh sửa tài liệu trong phạm vi được cấp quyền
   - Tham gia xử lý task và issue được giao

## 1. Xem Tài liệu

### 1.1. Xem tất cả Tài liệu (Global)

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant Dashboard as Trang chủ
    participant DocList as Danh sách tài liệu Tổng
    participant DB as Cơ sở dữ liệu
    participant DocViewer as Trình xem tài liệu
    participant Auth as Kiểm tra quyền
    
    User->>Dashboard: Truy cập trang chủ
    Dashboard->>User: Hiển thị trang chủ
    User->>DocList: Chọn "Danh sách tài liệu Tổng"
    
    Note over DocList,DB: Không cần kiểm tra quyền khi truy cập danh sách tài liệu tổng
    DocList->>DB: Truy vấn danh sách workspace của người dùng
    DB->>DocList: Trả về danh sách workspace
    DocList->>DB: Truy vấn tài liệu từ các workspace
    DB->>DocList: Trả về danh sách tài liệu theo từng workspace
    DocList->>User: Hiển thị danh sách tài liệu phân theo workspace
    
    User->>DocList: Chọn tài liệu để xem
    DocList->>Auth: Kiểm tra quyền với tài liệu cụ thể
    Auth->>DB: Truy vấn quyền đối với tài liệu
    DB->>Auth: Trả về quyền đối với tài liệu
    Auth->>DocList: Xác nhận quyền xem
    DocList->>DocViewer: Mở tài liệu
    DocViewer->>DB: Truy vấn nội dung tài liệu
    DB->>DocViewer: Trả về nội dung tài liệu
    DocViewer->>User: Hiển thị nội dung tài liệu
```

### 1.2. Xem Tài liệu Workspace

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant WS as Workspace
    participant DocList as Danh sách tài liệu Workspace
    participant Auth as Kiểm tra quyền
    participant DB as Cơ sở dữ liệu
    participant DocViewer as Trình xem tài liệu
    
    User->>WS: Truy cập workspace
    WS->>User: Hiển thị trang workspace
    User->>DocList: Chọn "Danh sách tài liệu workspace"
    DocList->>DB: Truy vấn tài liệu trong workspace
    DB->>DocList: Trả về danh sách tài liệu
    DocList->>User: Hiển thị danh sách tài liệu
    
    User->>DocList: Chọn tài liệu để xem
    DocList->>DocViewer: Mở tài liệu
    DocViewer->>DB: Truy vấn nội dung tài liệu
    DB->>DocViewer: Trả về nội dung tài liệu
    DocViewer->>User: Hiển thị nội dung tài liệu
```

## 2. Tạo Tài liệu Mới

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant WS as Workspace
    participant DocList as Danh sách tài liệu Workspace
    participant Auth as Kiểm tra quyền
    participant Editor as Trình soạn thảo
    participant DB as Cơ sở dữ liệu
    
    User->>WS: Truy cập workspace
    WS->>User: Hiển thị trang workspace
    User->>DocList: Chọn "Danh sách tài liệu workspace"
    DocList->>User: Hiển thị danh sách tài liệu
    
    User->>DocList: Nhấn "Tạo tài liệu mới"
    DocList->>Auth: Kiểm tra quyền tạo tài liệu
    Auth->>DB: Truy vấn quyền trong workspace
    DB->>Auth: Trả về quyền trong workspace
    Auth->>DocList: Xác nhận quyền tạo tài liệu
    
    DocList->>User: Hiện hộp thoại chọn loại tài liệu
    User->>DocList: Chọn loại tài liệu (Markdown, Rich Text, etc.)
    DocList->>Editor: Mở trình soạn thảo mới
    Editor->>User: Hiển thị giao diện soạn thảo trống
    
    User->>Editor: Nhập tiêu đề và nội dung
    User->>Editor: Nhấn "Lưu"
    Editor->>DB: Lưu tài liệu mới
    DB->>Editor: Xác nhận lưu thành công
    Editor->>User: Thông báo tạo tài liệu thành công
    Editor->>DocList: Cập nhật danh sách tài liệu
    DocList->>User: Hiển thị danh sách đã cập nhật
```

## 3. Chỉnh sửa Tài liệu

### 3.1. Chỉnh sửa Tài liệu Workspace

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant DocList as Danh sách tài liệu Workspace
    participant Auth as Kiểm tra quyền
    participant DB as Cơ sở dữ liệu
    participant DocViewer as Trình xem tài liệu
    participant Editor as Trình soạn thảo
    participant Version as Quản lý phiên bản
    
    User->>DocList: Chọn tài liệu để chỉnh sửa
    DocList->>Auth: Kiểm tra quyền chỉnh sửa
    Auth->>DB: Truy vấn quyền với tài liệu
    DB->>Auth: Trả về quyền với tài liệu
    Auth->>DocList: Xác nhận quyền chỉnh sửa
    
    DocList->>DocViewer: Mở tài liệu
    DocViewer->>DB: Truy vấn nội dung tài liệu
    DB->>DocViewer: Trả về nội dung tài liệu
    DocViewer->>User: Hiển thị nội dung tài liệu
    
    User->>DocViewer: Nhấn "Chỉnh sửa"
    DocViewer->>Editor: Chuyển sang chế độ chỉnh sửa
    Editor->>User: Hiển thị giao diện chỉnh sửa
    
    User->>Editor: Thực hiện các thay đổi
    User->>Editor: Nhấn "Lưu"
    
    Editor->>Version: Tạo bản ghi phiên bản mới
    Version->>DB: Lưu phiên bản hiện tại
    DB->>Version: Xác nhận lưu phiên bản
    
    Editor->>DB: Lưu thay đổi
    DB->>Editor: Xác nhận lưu thành công
    Editor->>DocViewer: Chuyển về chế độ xem
    DocViewer->>User: Hiển thị nội dung đã cập nhật
```

### 3.2. Chỉnh sửa Tài liệu Tổng và Đồng bộ

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant GlobalList as Danh sách tài liệu Tổng
    participant Auth as Kiểm tra quyền
    participant DB as Cơ sở dữ liệu
    participant Editor as Trình soạn thảo
    participant Version as Quản lý phiên bản
    participant WSDoc as Tài liệu trong Workspace
    
    User->>GlobalList: Chọn tài liệu để chỉnh sửa
    GlobalList->>Auth: Kiểm tra quyền chỉnh sửa
    Auth->>DB: Truy vấn quyền với tài liệu
    DB->>Auth: Trả về quyền với tài liệu
    Auth->>GlobalList: Xác nhận quyền chỉnh sửa
    
    GlobalList->>Editor: Mở tài liệu để chỉnh sửa
    Editor->>DB: Truy vấn nội dung tài liệu
    DB->>Editor: Trả về nội dung tài liệu
    Editor->>User: Hiển thị giao diện chỉnh sửa
    
    User->>Editor: Thực hiện các thay đổi
    User->>Editor: Nhấn "Lưu"
    
    Editor->>Version: Tạo bản ghi phiên bản mới
    Version->>DB: Lưu phiên bản hiện tại
    DB->>Version: Xác nhận lưu phiên bản
    
    Editor->>DB: Lưu thay đổi vào DB
    DB->>Editor: Xác nhận lưu thành công
    
    Note over DB,WSDoc: Đồng bộ hóa
    DB->>WSDoc: Cập nhật tài liệu trong workspace
    WSDoc->>DB: Xác nhận cập nhật thành công
    
    Editor->>User: Thông báo lưu và đồng bộ thành công
```

## 4. Tìm kiếm Tài liệu

### 4.1. Tìm kiếm Tài liệu Tổng

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant GlobalList as Danh sách tài liệu Tổng
    participant Search as Công cụ tìm kiếm
    participant Auth as Kiểm tra quyền
    participant DB as Cơ sở dữ liệu
    participant AI as AI tìm kiếm
    
    User->>GlobalList: Truy cập danh sách tài liệu Tổng
    GlobalList->>User: Hiển thị giao diện tìm kiếm
    
    User->>Search: Nhập từ khóa tìm kiếm
    Search->>Auth: Kiểm tra quyền tìm kiếm
    Auth->>DB: Truy vấn quyền người dùng
    DB->>Auth: Trả về danh sách workspace được phép
    
    Search->>AI: Gửi truy vấn và danh sách workspace
    AI->>DB: Tìm kiếm ngữ nghĩa trong các workspace
    DB->>AI: Trả về kết quả thô
    AI->>Search: Xử lý, sắp xếp, và lọc kết quả
    Search->>User: Hiển thị kết quả tìm kiếm
    
    User->>Search: Áp dụng bộ lọc (workspace, loại, ngày)
    Search->>DB: Truy vấn dựa trên bộ lọc
    DB->>Search: Trả về kết quả đã lọc
    Search->>User: Hiển thị kết quả tinh chỉnh
```

### 4.2. Tìm kiếm Tài liệu Workspace

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant WS as Workspace
    participant DocList as Danh sách tài liệu Workspace
    participant Search as Công cụ tìm kiếm
    participant DB as Cơ sở dữ liệu
    participant AI as AI tìm kiếm
    
    User->>WS: Truy cập workspace
    WS->>DocList: Mở danh sách tài liệu
    DocList->>User: Hiển thị giao diện tìm kiếm
    
    User->>Search: Nhập từ khóa tìm kiếm
    Search->>AI: Gửi truy vấn với context workspace
    AI->>DB: Tìm kiếm ngữ nghĩa trong workspace
    DB->>AI: Trả về kết quả thô
    AI->>Search: Xử lý và sắp xếp kết quả
    Search->>User: Hiển thị kết quả tìm kiếm
    
    User->>Search: Áp dụng bộ lọc (thư mục, loại, thẻ)
    Search->>DB: Truy vấn dựa trên bộ lọc
    DB->>Search: Trả về kết quả đã lọc
    Search->>User: Hiển thị kết quả tinh chỉnh
```


## 6. Liên kết Tài liệu với Kanban và Issue

### 6.1. Liên kết Tài liệu với Thẻ Kanban

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant DocViewer as Trình xem tài liệu
    participant LinkPanel as Panel liên kết
    participant DB as Cơ sở dữ liệu
    participant KanbanBoard as Bảng Kanban
    participant KanbanCard as Thẻ Kanban
    
    User->>DocViewer: Xem tài liệu
    DocViewer->>User: Hiển thị tài liệu
    
    User->>DocViewer: Nhấn "Liên kết với Kanban"
    DocViewer->>LinkPanel: Mở panel liên kết
    LinkPanel->>DB: Truy vấn bảng Kanban trong workspace
    DB->>LinkPanel: Trả về danh sách bảng Kanban
    LinkPanel->>User: Hiển thị danh sách bảng Kanban
    
    User->>LinkPanel: Chọn bảng Kanban
    LinkPanel->>DB: Truy vấn thẻ Kanban trong bảng đã chọn
    DB->>LinkPanel: Trả về danh sách thẻ Kanban
    LinkPanel->>User: Hiển thị danh sách thẻ Kanban
    
    User->>LinkPanel: Chọn thẻ Kanban cần liên kết
    User->>LinkPanel: Nhấn "Liên kết"
    LinkPanel->>DB: Lưu liên kết giữa tài liệu và thẻ Kanban
    DB->>LinkPanel: Xác nhận lưu thành công
    
    LinkPanel->>DocViewer: Cập nhật thông tin liên kết
    DocViewer->>User: Hiển thị thông tin thẻ Kanban đã liên kết
    
    User->>KanbanBoard: Mở bảng Kanban
    KanbanBoard->>User: Hiển thị bảng Kanban
    User->>KanbanCard: Xem thẻ Kanban đã liên kết
    KanbanCard->>DB: Truy vấn thông tin tài liệu liên kết
    DB->>KanbanCard: Trả về thông tin tài liệu liên kết
    KanbanCard->>User: Hiển thị liên kết đến tài liệu
```

### 6.2. Liên kết Tài liệu với Issue

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant DocViewer as Trình xem tài liệu
    participant LinkPanel as Panel liên kết
    participant DB as Cơ sở dữ liệu
    participant IssueList as Danh sách Issue
    participant IssueDetail as Chi tiết Issue
    
    User->>DocViewer: Xem tài liệu
    DocViewer->>User: Hiển thị tài liệu
    
    User->>DocViewer: Nhấn "Liên kết với Issue"
    DocViewer->>LinkPanel: Mở panel liên kết
    LinkPanel->>DB: Truy vấn issues trong workspace
    DB->>LinkPanel: Trả về danh sách issues
    LinkPanel->>User: Hiển thị danh sách issues
    
    User->>LinkPanel: Chọn issue cần liên kết
    User->>LinkPanel: Nhấn "Liên kết"
    LinkPanel->>DB: Lưu liên kết giữa tài liệu và issue
    DB->>LinkPanel: Xác nhận lưu thành công
    
    LinkPanel->>DocViewer: Cập nhật thông tin liên kết
    DocViewer->>User: Hiển thị thông tin issue đã liên kết
    
    User->>IssueList: Mở danh sách issue
    IssueList->>User: Hiển thị danh sách issue
    User->>IssueDetail: Xem chi tiết issue đã liên kết
    IssueDetail->>DB: Truy vấn thông tin tài liệu liên kết
    DB->>IssueDetail: Trả về thông tin tài liệu liên kết
    IssueDetail->>User: Hiển thị liên kết đến tài liệu
```

## 7. Quản lý Phiên bản Tài liệu

```mermaid
sequenceDiagram
    actor User as Người dùng
    participant DocViewer as Trình xem tài liệu
    participant VersionPanel as Panel phiên bản
    participant DB as Cơ sở dữ liệu
    participant CompTool as Công cụ so sánh
    
    User->>DocViewer: Xem tài liệu
    DocViewer->>User: Hiển thị tài liệu
    
    User->>DocViewer: Nhấn "Lịch sử phiên bản"
    DocViewer->>VersionPanel: Mở panel lịch sử phiên bản
    VersionPanel->>DB: Truy vấn lịch sử phiên bản
    DB->>VersionPanel: Trả về danh sách phiên bản
    VersionPanel->>User: Hiển thị danh sách phiên bản
    
    User->>VersionPanel: Chọn một phiên bản cũ
    VersionPanel->>DB: Truy vấn nội dung phiên bản đã chọn
    DB->>VersionPanel: Trả về nội dung phiên bản
    VersionPanel->>DocViewer: Hiển thị nội dung phiên bản đã chọn
    DocViewer->>User: Hiển thị tài liệu theo phiên bản đã chọn
    
    User->>VersionPanel: Chọn "So sánh với phiên bản hiện tại"
    VersionPanel->>CompTool: Gửi yêu cầu so sánh phiên bản
    CompTool->>DB: Truy vấn phiên bản hiện tại
    DB->>CompTool: Trả về phiên bản hiện tại
    CompTool->>CompTool: So sánh nội dung hai phiên bản
    CompTool->>User: Hiển thị kết quả so sánh
    
    User->>VersionPanel: Nhấn "Khôi phục phiên bản này"
    VersionPanel->>DB: Sao chép phiên bản đã chọn làm phiên bản mới
    DB->>VersionPanel: Xác nhận khôi phục thành công
    VersionPanel->>DocViewer: Cập nhật nội dung tài liệu
    DocViewer->>User: Hiển thị tài liệu với nội dung đã khôi phục
``` 