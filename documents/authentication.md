# Flow quản lý authentication

## Ở phần Next.js Cơ bản

### Cách login

1. **Client component** gọi API login đến **Server Backend** để nhận về token.
2. **Client** lấy token này để gọi tiếp 1 API là `/auth` đến **Next.js Server** để Next.js Server lưu token vào cookie client.

> **Lưu ý**: Muốn thao tác với cookie ở domain front-end (thêm, sửa, xóa) thì phải thông qua Route Handler Next.js Server.

---

## Ở dự án Quản lý quán ăn

Mình sẽ làm khác một chút, thay vì khai báo một route handler là `/auth` thì mình sẽ khai báo route handler cho login luôn.

1. **Client component** gọi API login route handler là `/auth/login`.
2. **Route handler** này sẽ gọi tiếp API login đến **Server Backend** để nhận về token, sau đó lưu token vào cookie client, cuối cùng trả kết quả về cho client component.

> **Cách này gọi là**: Dùng Next.js Server làm proxy trung gian.

- Tương tự với **logout** cũng vậy.

---

## Nhận biết trạng thái login

- **Ở Server Component**: Nhận biết được login hay chưa dựa vào cookie mà browser gửi lên.
- **Ở Client Component**: Nhận biết được login hay chưa dựa vào local storage.
