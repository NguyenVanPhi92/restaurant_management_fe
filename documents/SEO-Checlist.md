# SEO

## Cơ bản về SEO

- **SEO** là viết tắt của **Search Engine Optimization** => Tối ưu hóa công cụ tìm kiếm.
- **Mục tiêu**: Giúp website đạt thứ hạng cao khi người dùng tìm kiếm các từ khóa trên Google, Bing, Yahoo, ...
- SEO không chỉ tồn tại ở website, nó có thể là SEO Video YouTube, SEO App trên Google Play.

### SEO chia làm 2 loại:

1. **SEO Onpage**:
   - Tối ưu cấu trúc web (SSR, đi link thông minh, meta, title, h1, h2, h3, ảnh, video).
2. **SEO Offpage**:
   - Backlink, Traffic, ...

> **Content is King, Backlink is Queen**.

---

## Fact về SEO

- SEO được coi là một ngành nghề riêng biệt. Dev web nên biết về SEO để chọn công nghệ phù hợp, nhưng không cần chuyên sâu.
- Web quản lý thì không cần tập trung vào SEO.
- SEO onpage tốt nhưng content dở thì cũng không lên được TOP.
- SEO là miễn phí, nhưng để lên được TOP thì cần rất nhiều công sức, thời gian, tiền bạc => Hiện nay SEO không dành cho nhà nghèo.
- Việc bạn lên top hay không không chỉ phụ thuộc vào web bạn, mà còn phụ thuộc vào chính sách Google và sự cạnh tranh của từ khóa đó.
- **Client-side rendering** SEO không tốt, những trang cần SEO thì nên là **Server-side rendering**.
- Next.js PR là tốt cho SEO, nhưng thật sự chỉ là cải thiện SEO của React thôi. So với việc dùng Multiple page truyền thống thì Next.js kém hơn. Lý do chủ yếu nằm ở việc hạn chế kỹ thuật trong framework Next.js và tốc độ load trang chậm, JS bundle lớn.
- Đừng tin vào điểm SEO Google Lighthouse => Nó không mạnh về SEO.

---

## Checklist SEO

- Content nào muốn SEO thì viewsource phải thấy.
- Page phải đầy đủ các thẻ: title, meta description.
- Cung cấp Open Graph phục vụ các mạng xã hội Facebook, Twitter (cái này chỉ cần ở mức độ cơ bản là được).
- Thêm các metadata file: `robots.txt`, `sitemap.xml`, `favicon.ico`.
- Thêm website vào Google Search Console, Google Analytics.

## Note

1. Những page cần login mới vào được như /manage, gọi món, profile, detail,... thì không cần SEO: tức là không cần SSR, và noindex data. Nhưng nên có thẻ title, meta description
2. Page 'use client' thì không thêm meta data tag được, vậy nên phải để page là server side render
3. Canonial link nhớ thêm `/en` hay `/vi` vào

Sitemap.xml: là bản đồ website giúp search engine tìm kiêm bài viết nhanh hơn
