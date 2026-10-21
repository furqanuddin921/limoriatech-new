# 📚 Dokumentasi Resmi — PT Limoria Teknologi Indonesia

Selamat datang di repositori dokumentasi teknis, pengelolaan katalog layanan bisnis, dan operasional deployment untuk platform **PT Limoria Teknologi Indonesia (Limoria Tech)** berbasis **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

Seluruh dokumen di dalam folder ini disusun secara berurutan (*numbered-order*) agar mudah dipelajari dari konsep arsitektur hingga penerapan di hosting live.

---

## 🧭 Panduan Berdasarkan Peran (Reading Path)

| Peran Tim | Dokumen Rekomendasi Utama | Fokus Utama |
| :--- | :--- | :--- |
| 💻 **Frontend Developer** | [**`01`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/01-ARCHITECTURE.md) $\rightarrow$ [**`04`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/04-I18N-LOCALIZATION.md) $\rightarrow$ [**`02`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/02-SERVICES-CATALOG-GUIDE.md) $\rightarrow$ [**`05`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/05-SEO-AND-METADATA.md) | Memahami SSG Next.js 16, DAO layer, sistem dwibahasa, dan metadata komersial |
| 📦 **Admin / Content Manager** | [**`02`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/02-SERVICES-CATALOG-GUIDE.md) $\rightarrow$ [**`03`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/03-PORTFOLIO-CASE-STUDIES.md) | Menambah layanan baru, memperbarui FAQ dwibahasa, dan mengelola portofolio |
| 🚀 **DevOps / SysAdmin** | [**`06`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/06-DEPLOYMENT-CPANEL.md) $\rightarrow$ [**`07`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/07-GOOGLE-SEARCH-CONSOLE.md) | Build SSG, bundling ZIP otomatis, konfigurasi `.htaccess`, dan submit sitemap |

---

## 📑 Daftar Lengkap Berkas Panduan

```
docs/
├── README.md                      # [Anda Berada di Sini] Peta navigasi dokumentasi
├── 01-ARCHITECTURE.md             # Arsitektur sistem, SSG Next.js 16, Data Layer & WhatsApp Flow
├── 02-SERVICES-CATALOG-GUIDE.md   # Panduan kelola 20 layanan, deliverables & FAQ dwibahasa
├── 03-PORTFOLIO-CASE-STUDIES.md   # Panduan kelola 9 studi kasus portofolio, metrics & foto 16:9
├── 04-I18N-LOCALIZATION.md        # Panduan sistem bilingual (ID/EN), generic Localized & useLanguage
├── 05-SEO-AND-METADATA.md         # Panduan SEO, Schema.org ProfessionalService/FAQPage & sitemap
├── 06-DEPLOYMENT-CPANEL.md        # Panduan build, script packaging Python, .htaccess & cPanel
└── 07-GOOGLE-SEARCH-CONSOLE.md    # Panduan verifikasi domain Google & submit sitemap.xml
```

### Ringkasan Tiap Panduan:

1. 🏛️ [**`01-ARCHITECTURE.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/01-ARCHITECTURE.md)  
   Penjelasan arsitektur menyeluruh, stack teknologi (Next.js 16.3.6, Tailwind CSS v4, TypeScript), pola Static Site Generation (SSG), Data Access Object (DAO) JSON, dan diagram alur konsultasi WhatsApp / Webmail.
2. 📦 [**`02-SERVICES-CATALOG-GUIDE.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/02-SERVICES-CATALOG-GUIDE.md)  
   Panduan praktis mengelola dan menambah 20 layanan (8 Tech & 12 Financial) di `src/data/services.json`, menyusun deliverables, benefits, dan tanya-jawab (FAQ) dwibahasa.
3. 💼 [**`03-PORTFOLIO-CASE-STUDIES.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/03-PORTFOLIO-CASE-STUDIES.md)  
   Panduan mengelola 9 portofolio studi kasus di `src/data/portfolio.json`, perumusan metrik dampak kuantitatif (*impact metrics*), dan standar rasio visual gambar 16:9.
4. 🌐 [**`04-I18N-LOCALIZATION.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/04-I18N-LOCALIZATION.md)  
   Standar multi-bahasa (Bahasa Indonesia & English), cara kerja hook `useLanguage()`, tipe generic `Localized<T>`, helper `getLocalized()`, dan persistensi preferensi di `localStorage`.
5. 🔍 [**`05-SEO-AND-METADATA.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/05-SEO-AND-METADATA.md)  
   Konfigurasi metadata global, formula judul intent komersial, spesifikasi kartu Open Graph 1200×630px, struktur Schema.org (`ProfessionalService`, `Service`, `FAQPage`), serta generator sitemap 41 URL dan `robots.txt`.
6. 📦 [**`06-DEPLOYMENT-CPANEL.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/06-DEPLOYMENT-CPANEL.md)  
   Prosedur kompilasi paket statis, cara kerja skrip otomasi `scripts/bundle-cpanel.py` untuk sanitasi Windows RSC cache, konfigurasi rewrite `.htaccess` Apache/LiteSpeed, dan checklist verifikasi hosting cPanel Rumahweb.
7. 🌐 [**`07-GOOGLE-SEARCH-CONSOLE.md`**](file:///D:/Limoria%20Tech/limoriatech-compro/docs/07-GOOGLE-SEARCH-CONSOLE.md)  
   Tata cara verifikasi kepemilikan domain menggunakan kode resmi `57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o` (DNS TXT, HTML Meta Tag, atau file standalone), serta prosedur pengiriman sitemap ke Googlebot.

---

## 🛠️ Standar Pembaruan Dokumentasi

* **Konsistensi Data:** Setiap kali terjadi perubahan arsitektur data pada `src/data/` atau penambahan rute baru pada `src/app/`, pastikan dokumen terkait di folder ini segera disinkronkan.
* **Validasi Tautan:** Pastikan tautan clickable markdown menggunakan format path yang valid dan tidak terputus.
