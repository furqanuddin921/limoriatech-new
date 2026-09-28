# Limoria Tech — Website Company Profile

Website resmi Company Profile **PT Limoria Teknologi Indonesia (Limoria Tech)** dengan arsitektur modern berstandar enterprise (*Next.js SSG + TypeScript + Tailwind CSS*).

Project ini dirancang menggunakan konsep **Feature-Driven Architecture** dan **Modular JSON Data Layer** (mengadopsi standar `pattern-code`), sehingga sangat mudah di-maintain, memiliki performa loading mendekati 0ms, dan 100% siap di-deploy ke **Shared Hosting Rumahweb (cPanel / LiteSpeed)** tanpa memerlukan runtime Node.js di server.

---

## 🚀 Fitur Utama

- **Zero-Server Overhead (SSG):** Seluruh halaman diekspor menjadi HTML statis (`output: 'export'`), aman dari masalah limit resource server (*Error 508 Resource Limit Reached*).
- **Modular Data Layer (JSON):** Seluruh konten (Layanan, 7 Spesialisasi Aplikasi, Nilai Perusahaan, Portofolio, Kontak) dipisah secara rapi dalam folder `src/data/` dan dibungkus dengan TypeScript types.
- **Enterprise SEO & OpenGraph:** Menghasilkan `sitemap.xml` dinamis, `robots.txt`, dan meta tags teroptimasi untuk Google, LinkedIn, dan WhatsApp share preview.
- **Form Kontak Terintegrasi:** Dilengkapi form interaktif yang terhubung ke script `public/api/contact.php` untuk pengiriman email via Webmail / SMTP cPanel.
- **LiteSpeed & Apache Caching:** File `.htaccess` bawaan siap pakai untuk konfigurasi HTTPS otomatis, clean URLs, dan Gzip/Brotli compression.

---

## 📁 Struktur Direktori

```
limoriatech-compro/
├── public/                       # Aset publik statis
│   ├── .htaccess                 # Konfigurasi Apache / LiteSpeed cPanel
│   └── api/
│       └── contact.php           # Script handler pengiriman email form kontak
│
├── src/
│   ├── app/                      # Next.js App Router (Page views & layouts)
│   │   ├── layout.tsx            # Global layout (Navbar, Footer, SEO metadata)
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # Halaman Tentang Kami
│   │   ├── services/             # Daftar Layanan & Detail [slug]
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── portfolio/page.tsx    # Halaman Portofolio & Studi Kasus
│   │   ├── contact/page.tsx      # Halaman Kontak & Form Inquiry
│   │   ├── sitemap.ts            # Generator otomatis sitemap.xml
│   │   └── robots.ts             # Generator otomatis robots.txt
│   │
│   ├── data/                     # [MODULAR CONTENT LAYER]
│   │   ├── site-config.json      # Profil PT, kontak, jam kerja, statistik
│   │   ├── services.json         # 5 Pilar solusi strategis IT
│   │   ├── app-development.json  # 7 Spesialisasi pengembangan aplikasi
│   │   ├── portfolio.json        # Studi kasus & impact metrics proyek
│   │   └── navigation.json       # Menu header & footer links
│   │
│   ├── lib/
│   │   ├── utils.ts              # cn() Tailwind helper
│   │   └── data/                 # Data Access Layer / Repository Helper
│   │       ├── site.ts
│   │       ├── services.ts
│   │       └── portfolio.ts
│   │
│   ├── components/
│   │   ├── ui/                   # Primitive atomic components (Button, Card, Badge, etc.)
│   │   └── layout/               # Navbar & Footer
│   │
│   ├── features/                 # Modular Feature components
│   │   ├── home/components/     # HeroSection, ServicesOverview, AppDevSection, etc.
│   │   └── contact/components/  # ContactForm
│   │
│   └── types/                    # TypeScript Data Contracts
│       ├── site.types.ts
│       ├── service.types.ts
│       ├── portfolio.types.ts
│       └── navigation.types.ts
│
├── next.config.ts                # Konfigurasi Static Export
└── package.json
```

---

## 🛠️ Panduan Penggunaan Lokal

### 1. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Memperbarui Konten Website
Untuk mengubah teks, kontak, atau menambah layanan, cukup edit file di folder `src/data/`:
- **Profil Perusahaan & Kontak:** [src/data/site-config.json](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/site-config.json)
- **Layanan IT:** [src/data/services.json](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/services.json)
- **Kategori Aplikasi:** [src/data/app-development.json](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/app-development.json)
- **Studi Kasus / Portofolio:** [src/data/portfolio.json](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/portfolio.json)

---

## 🌐 Panduan Deploy ke Shared Hosting Rumahweb

Kami telah menyediakan skrip otomatis untuk menghasilkan file bundle ZIP siap upload:

### Langkah 1: Buat Bundle Deployment
Jalankan perintah berikut di terminal:
```bash
npm run bundle:cpanel
```
Perintah ini akan melakukan kompilasi statis ke folder `out/` dan langsung mengompres seluruh isinya ke dalam file **`deploy-cpanel.zip`**.

### Langkah 2: Upload ke cPanel Rumahweb
1. Login ke **cPanel Rumahweb** Anda.
2. Buka menu **File Manager**, lalu masuk ke folder **`public_html`**.
3. Klik tombol **Upload** di bagian atas, pilih file `deploy-cpanel.zip`.
4. Setelah proses upload selesai, klik kanan file `deploy-cpanel.zip` di File Manager lalu pilih **Extract**.
5. Pastikan seluruh file (termasuk `.htaccess`, `index.html`, folder `_next`, `services`, `api`, dll) berada langsung di dalam folder `public_html`.
6. Website Limoria Tech sudah live!

### Langkah 3: Konfigurasi Email Form Kontak
Buka file `public_html/api/contact.php` di cPanel File Manager, lalu pastikan variabel `$to` di baris 48 diatur ke alamat email tujuan Anda (misal: `info@limoriatech.com` atau `cs@limoriatech.com`).
