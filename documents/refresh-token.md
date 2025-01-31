# Refresh token trong Next.js

Các API yêu cầu Authentication có thể được gọi ở 2 nơi:

1. **Server Component**: Ví dụ page `/account/me` cần gọi API `/me` ở server component để lấy thông tin profile của user.
2. **Client Component**: Ví dụ page `/account/me` cần gọi API `/me` ở client component để lấy thông tin profile của user.

=> **Hết hạn token** có thể xảy ra ở cả **Server Component** và **Client Component**.

---

## Các trường hợp hết hạn access token

### 1. Đang dùng thì hết hạn

- **Giải pháp**: Chúng ta sẽ không để trường hợp này xảy ra bằng cách sử dụng một `setInterval` để kiểm tra token liên tục và refresh token trước khi nó hết hạn.

### 2. Lâu ngày không vào web, vào lại thì hết hạn

- **Giải pháp**: Khi vào lại website, `middleware.ts` sẽ được gọi đầu tiên. Chúng ta sẽ kiểm tra xem access token còn không (vì access token sẽ bị xóa khi hết hạn). Nếu không còn, chúng ta sẽ redirect về một page client component có nhiệm vụ gọi API refresh token và redirect ngược về trang cũ.

---

## Lưu ý để tránh bug khi thực hiện refresh token

- **Không để refresh token bị gọi duplicate**.
- **Khi refresh token bị lỗi ở route handler**: Trả về `401` bất kể lỗi gì.
- **Khi refresh token bị lỗi ở `useEffect` client**: Ngừng `interval` ngay lập tức.
- **Đưa logic check vào layout ở trang authenticated**: Không cho chạy refresh token ở những trang unauthenticated như: login, logout.
- **Kiểm tra logic flow trong middleware**: Đảm bảo logic hoạt động chính xác.
