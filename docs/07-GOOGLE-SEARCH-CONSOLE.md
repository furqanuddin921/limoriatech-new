# Panduan Integrasi Google Search Console & Peta Situs (Search Console Guide)

Dokumentasi ini memandu proses verifikasi kepemilikan domain `limoriatech.com` dan pengiriman `sitemap.xml` pada **Google Search Console (GSC)** untuk memastikan seluruh halaman layanan, portofolio, dan profil bisnis terindeks sempurna di Google.

---

## 1. Kode Verifikasi Resmi

Kode verifikasi kepemilikan Google Search Console untuk domain ini adalah:
```text
google-site-verification=57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o
```

---

## 2. Cara Verifikasi Kepemilikan Domain

Tersedia tiga metode yang didukung penuh oleh platform ini:

### Metode A: Verifikasi Melalui DNS TXT di cPanel (Direkomendasikan untuk Domain Property)
Metode ini digunakan jika Anda menambahkan properti bertipe **Domain** (`limoriatech.com`):

1. Login ke **cPanel Rumahweb** Anda.
2. Di dashboard cPanel, cari dan klik menu **Zone Editor** (di bawah kategori *DOMAINS*).
3. Pada baris domain `limoriatech.com`, klik tombol **Manage**.
4. Klik tombol **+ Add Record** (pilih tipe **TXT**):
   * **Name / Host:** `limoriatech.com.` (atau ketik `@` jika menggunakan DNS Manager)
   * **TTL:** `14400` (atau gunakan nilai default `3600`)
   * **Type:** `TXT`
   * **Record / Text:** `google-site-verification=57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o`
5. Klik tombol **Save Record**.
6. Kembali ke layar Google Search Console, lalu klik tombol biru **VERIFY**.

---

### Metode B: Verifikasi Melalui HTML Meta Tag (URL Prefix Property)
Metode ini digunakan jika Anda menambahkan properti bertipe **URL Prefix** (`https://limoriatech.com`):

1. Kode meta tag verifikasi telah ditanamkan secara permanen di [`src/app/layout.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/layout.tsx):
   ```html
   <meta name="google-site-verification" content="57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o" />
   ```
2. Pastikan paket [`deploy-cpanel.zip`](file:///D:/Limoria%20Tech/limoriatech-compro/deploy-cpanel.zip) terbaru telah diekstrak ke dalam direktori `public_html/`.
3. Pada layar Google Search Console, pilih metode **Tag HTML**, lalu klik tombol **Verifikasi**. Google akan langsung mengonfirmasi status kepemilikan secara instan.

---

### Metode C: Verifikasi Melalui File HTML Standalone
1. Berkas file verifikasi resmi telah dibuat di root proyek:
   [`public/google57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o.html`](file:///D:/Limoria%20Tech/limoriatech-compro/public/google57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o.html)
2. Setelah diekstrak ke `public_html/`, file dapat diakses publik di:
   `https://limoriatech.com/google57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o.html`
3. Pilih metode **File HTML** di Google Search Console lalu klik **Verifikasi**.

---

## 3. Langkah Pengiriman Peta Situs (`sitemap.xml`)

Setelah verifikasi domain berhasil dan tombol **"Go to property"** diklik:

1. Buka menu di bilah navigasi sebelah kiri Google Search Console.
2. Cari bagian kelompok **Pengindeksan** (*Indexing*).
3. Klik menu **Peta Situs** (*Sitemaps*).
4. Di bagian formulir **Tambahkan peta situs baru** (*Add a new sitemap*):
   * Di samping URL `https://limoriatech.com/`, ketik: **`sitemap.xml`**
   * Klik tombol **Kirim** (*Submit*).
5. Googlebot akan merayapi seluruh 41 URL halaman website Limoria Tech secara bertahap.

---

## 4. Pengujian Rich Results (Rich Snippets Test)

Untuk memvalidasi bahwa Google mengenali schema data terstruktur `ProfessionalService`, `Service`, `CreativeWork`, dan `FAQPage`:
1. Buka [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Masukkan URL:
   * Homepage: `https://limoriatech.com/`
   * Layanan: `https://limoriatech.com/services/website-applications/`
   * Portofolio: `https://limoriatech.com/portfolio/lms-sekolah/`
3. Klik **Test URL**. Google akan menampilkan hasil deteksi hijau untuk *Organization*, *Service*, *FAQ*, dan *Breadcrumbs*.
