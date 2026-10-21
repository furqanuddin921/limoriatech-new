# Limoria Tech — Website Company Profile & B2B Solutions Portal

Website resmi Company Profile **PT Limoria Teknologi Indonesia (Limoria Tech)** dengan arsitektur modern berstandar enterprise (*Next.js 16 App Router + TypeScript + Tailwind CSS v4*).

Domain Produksi Resmi: **[https://limoriatech.com](https://limoriatech.com)**

Platform ini dirancang menggunakan konsep **Feature-Driven Architecture**, **Modular JSON Data Layer**, dan **Enterprise SEO Engine (Schema.org JSON-LD + OpenGraph + FAQPage)**, sehingga memiliki performa loading mendekati 0ms, hemat resource server (*Zero-Server Overhead*), dan 100% siap di-deploy ke **Shared Hosting cPanel / LiteSpeed (Rumahweb)**.

---

## 🌟 Fitur Utama & Keunggulan

- **100% Static Site Generation (SSG):**
  Seluruh 41 rute diekspor menjadi berkas HTML statis (`output: "export"`), sepenuhnya aman dari *Error 508 Resource Limit Reached* pada hosting cPanel dan kebal dari celah keamanan server-side.
- **Katalog 20 Layanan Strategis:**
  - **8 Layanan Teknologi (Tech Services):** Riset Bisnis, Perencanaan Strategis, Analisis Pasar, Aplikasi Website, Aplikasi Mobile, Aplikasi Desktop, Solusi IT Inovatif, dan Transformasi Digital.
  - **12 Layanan Finansial Digital (Digital Financial Services):** Akuntansi, Perpajakan, Audit Independen, Platform Keuangan Digital, Investigasi Forensik, Litigasi, Likuidator, Kurator/PKPU, Penilaian Aset, Aktuaria, Merger, dan Akuisisi.
- **9 Studi Kasus & Portofolio Nyata:**
  Menampilkan studi kasus mendalam dengan matriks dampak kuantitatif (*impact metrics*), tantangan, solusi arsitektur, dan tumpukan teknologi (LMS Sekolah, RestoQR, ERP Enterprise, Banking Gateway, dll.).
- **Enterprise SEO & Rich Snippets Engine:**
  - `metadataBase` terkonfigurasi ke `https://limoriatech.com`.
  - Kartu Open Graph & Twitter Card beresolusi **1200×630px** (`public/assets/og-image.png`).
  - Schema.org JSON-LD lengkap: `ProfessionalService`, `Organization`, `WebSite`, `Service`, `CreativeWork`, `BreadcrumbList`, dan `FAQPage`.
  - Terintegrasi langsung dengan token verifikasi Google Search Console (`57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o`).
  - Generator otomatis `sitemap.xml` (41 URLs) dan `robots.txt`.
- **FAQ Interaktif Dwibahasa (Bilingual):**
  Setiap layanan dilengkapi modul tanya-jawab interaktif dwibahasa (Indonesia & Inggris) untuk mempermudah calon klien dan memicu *Google Expandable FAQ SERP Rich Results*.
- **Integrasi WhatsApp Hotline & Form PHP cPanel:**
  Tombol konsultasi instan WhatsApp ke hotline `+62 823-7537-1268` dengan template pesan otomatis per-layanan, serta form kontak yang terhubung ke script `public/api/contact.php`.

---

## 📚 Dokumentasi Lengkap Sistem

Seluruh panduan teknis mendalam telah disusun terpisah di dalam folder [`docs/`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/):

1. 🧭 **[`README.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/README.md) — Documentation Hub**:
   Beranda utama indeks dokumentasi dan peta panduan membaca berdasarkan peran tim (*Reading Paths*).
2. 🏛️ **[`01-ARCHITECTURE.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/01-ARCHITECTURE.md) — Arsitektur Teknis**:
   Penjelasan stack Next.js 16, Turbopack, SSG, Data Access Object (DAO), dan sistem dwibahasa.
3. 📦 **[`02-SERVICES-CATALOG-GUIDE.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/02-SERVICES-CATALOG-GUIDE.md) — Katalog Layanan & FAQ**:
   Panduan mengelola 20 layanan (8 Tech & 12 Financial), deliverables, benefits, dan FAQ dwibahasa.
4. 💼 **[`03-PORTFOLIO-CASE-STUDIES.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/03-PORTFOLIO-CASE-STUDIES.md) — Studi Kasus Portofolio**:
   Panduan mengelola 9 studi kasus portofolio, perumusan metrik dampak kuantitatif, dan rasio visual 16:9.
5. 🌐 **[`04-I18N-LOCALIZATION.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/04-I18N-LOCALIZATION.md) — Sistem Multi-Bahasa**:
   Standar multi-bahasa (ID/EN), generic `Localized<T>`, hook `useLanguage()`, dan helper ekstraksi teks.
6. 🔍 **[`05-SEO-AND-METADATA.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/05-SEO-AND-METADATA.md) — SEO & Structured Data**:
   Detail implementasi Schema.org JSON-LD, generator banner Open Graph, formula title tag dinamis, sitemap & robots.
7. 📦 **[`06-DEPLOYMENT-CPANEL.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/06-DEPLOYMENT-CPANEL.md) — Deployment cPanel**:
   Instruksi kompilasi, skrip otomatisasi `bundle-cpanel.py`, konfigurasi `.htaccess`, dan upload hosting cPanel.
8. 🌐 **[`07-GOOGLE-SEARCH-CONSOLE.md`](file:///D:/Limoria%20Tech/limoriatech-compro/docs/07-GOOGLE-SEARCH-CONSOLE.md) — Google Search Console**:
   Tata cara verifikasi kepemilikan domain (kode `57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o`) dan submit sitemap.

---

## 📁 Struktur Direktori Proyek

```
limoriatech-compro/
├── docs/                             # [DOKUMENTASI SISTEM & OPERASIONAL]
│   ├── README.md                     # Documentation Hub & Peta Panduan
│   ├── 01-ARCHITECTURE.md            # Arsitektur teknis, SSG, stack, & alur data
│   ├── 02-SERVICES-CATALOG-GUIDE.md  # Panduan 20 layanan, deliverables & FAQ dwibahasa
│   ├── 03-PORTFOLIO-CASE-STUDIES.md  # Panduan 9 studi kasus portofolio & metrics
│   ├── 04-I18N-LOCALIZATION.md       # Panduan sistem bilingual (ID/EN) & useLanguage
│   ├── 05-SEO-AND-METADATA.md        # Panduan SEO, Schema.org, & sitemap 41 rute
│   ├── 06-DEPLOYMENT-CPANEL.md       # Panduan packaging & deploy hosting cPanel
│   └── 07-GOOGLE-SEARCH-CONSOLE.md   # Panduan verifikasi domain Google & sitemap
│
├── public/                           # Aset publik statis
│   ├── .htaccess                     # Konfigurasi Apache / LiteSpeed cPanel & HTTPS
│   ├── favicon.ico, icon-192, 512    # Favicon & Web App Manifest Icons
│   ├── google[token].html            # File verifikasi Google Search Console
│   ├── api/contact.php               # Handler pengiriman email form kontak
│   └── assets/
│       ├── og-image.png              # Banner Social Card resmi (1200x630px)
│       └── portfolio/                # Banner proyek studi kasus (16:9 ratio)
│
├── scripts/                          # Otomasi & Utility Scripts
│   ├── bundle-cpanel.py              # Script bundler cPanel & Windows RSC fix
│   ├── generate-og-image.py          # Generator kartu OpenGraph via Pillow
│   └── add-service-faqs.py           # Generator data FAQ dwibahasa
│
├── src/
│   ├── app/                          # Next.js App Router (Halaman & Rute)
│   │   ├── layout.tsx                # Root Layout (Navbar, Footer, SEO & Schema)
│   │   ├── page.tsx                  # Beranda Utama
│   │   ├── about/page.tsx            # Halaman Tentang Kami
│   │   ├── contact/page.tsx          # Halaman Kontak & Form Inquiry
│   │   ├── services/                 # Katalog Layanan & Rute Dinamis [slug]
│   │   ├── portfolio/                # Portofolio & Rute Dinamis [slug]
│   │   ├── sitemap.ts                # Generator otomatis sitemap.xml
│   │   └── robots.ts                 # Generator otomatis robots.txt
│   │
│   ├── components/                   # Komponen Reusable (UI & Layout)
│   ├── context/                      # LanguageContext (Bilingual ID/EN)
│   ├── data/                         # JSON Data Layer (services, portfolio, site-config)
│   ├── features/                     # Fitur modular (home, about, services, portfolio, contact)
│   ├── lib/                          # DAO data repository & Schema.org generator
│   └── types/                        # TypeScript Interfaces
```

---

## 🛠️ Perintah Penggunaan Lokal (CLI)

### Menjalankan Server Pengembangan:
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### Menguji Build Produksi:
```bash
npm run build
```

### Membuat Paket Siap Deploy cPanel:
```bash
npm run bundle:cpanel
```
Perintah ini akan mengompilasi halaman statis, memperbaiki path RSC Windows, dan mengemas seluruh isi `out/` ke dalam file arsip:
**`deploy-cpanel.zip`** (siap di-upload dan diekstrak di `public_html/` cPanel hosting).
