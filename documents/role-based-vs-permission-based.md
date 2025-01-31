# Sự khác nhau giữa Role Based Access Control và Permission Based Access Control

## Access Control

**Access Control** là kiểm soát quyền truy cập. Có 2 kiểu phổ biến là:

- **Role Based Access Control (RBAC)**: Kiểm soát quyền truy cập dựa trên vai trò của người dùng.
- **Permission Based Access Control (PBAC)**: Kiểm soát quyền truy cập dựa trên quyền hạn cụ thể của từng chức năng.

---

## Role Based Access Control (RBAC)

Hệ thống quản lý quán ăn sẽ có 3 role chính:

- **Admin**: Có quyền thao tác mọi chức năng trên hệ thống.
- **Employee**: Có quyền thao tác một số chức năng như tạo order, xem order nhưng không thể quản lý nhân viên khác.
- **Guest**: Chỉ có quyền xem menu, tạo order.

Các quyền hạn ở mỗi role thường được định nghĩa cố định khi code.

> **Lưu ý**: Bạn cũng có thể code một hệ thống thay đổi quyền hạn trên mỗi role một cách linh hoạt hơn. Tuy nhiên, điều này là thay đổi quyền hạn trên mỗi **role** chứ không phải trên mỗi **tài khoản**.

Mỗi account sẽ được gán với một role trên.

---

## Permission Based Access Control (PBAC)

Thay vì chia theo role, hệ thống sẽ chia theo từng quyền hạn cụ thể.

Ví dụ khi tạo tài khoản, bạn sẽ được gán vài quyền hạn cơ bản như:

- `READ_PROFILE`
- `WRITE_PROFILE`
- `READ_ORDER`
- `WRITE_ORDER`

Khi cần thêm quyền hạn mới, admin sẽ thêm quyền hạn đó cho tài khoản cụ thể.

### Ưu điểm và nhược điểm:

- **Ưu điểm**: Linh hoạt hơn RBAC vì có thể thêm quyền hạn mới mà không cần phải tạo role mới.
- **Nhược điểm**: Khó kiểm soát các tài khoản nếu có quá nhiều quyền hạn và quá nhiều tài khoản.
