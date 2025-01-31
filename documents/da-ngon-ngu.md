# Đa ngôn ngữ trong Next.js

Rộng hơn đa ngôn ngữ thì chúng ta có **"Quốc tế hóa"**: đa ngôn ngữ, đa múi giờ, đa định dạng số,...

- **Quốc tế hóa** = Internationalization = **i18n** (18 là số lượng ký tự giữa `i` và `n`).

Khi làm một website đa ngôn ngữ thì phải có sự phối hợp giữa **Frontend** và **Backend**:

- **Frontend**: Xử lý text cố định.
- **Backend**: Xử lý nội dung API.

---

## Trong Next.js có 2 cách làm đa ngôn ngữ

### 1. **i18n Routing**

- Mỗi ngôn ngữ sẽ có một route riêng. Ví dụ:

  - `duthanhduoc.com/en`
  - `duthanhduoc.com/vi`
  - Hoặc `en.duthanhduoc.com`, `vi.duthanhduoc.com`.

- **Ưu điểm**: Tốt hơn cho SEO, vì sẽ có mỗi version website riêng cho từng quốc gia.

### 2. **i18n không Routing**

- Mỗi ngôn ngữ sẽ không có route riêng, mà sẽ dựa vào ngôn ngữ hiện tại để hiển thị nội dung tương ứng.
- **Ưu điểm**: Dễ làm hơn, phù hợp nếu website chỉ phục vụ trong một quốc gia.
