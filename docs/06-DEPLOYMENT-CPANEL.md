# Panduan Deployment cPanel & LiteSpeed (Deployment Guide)

Dokumentasi ini menjelaskan langkah-langkah kompilasi, pemaketan (*bundling*), konfigurasi server Apache/LiteSpeed, dan deployment website Company Profile **PT Limoria Teknologi Indonesia** ke Shared Hosting cPanel (Rumahweb).

---

## 1. Alur Otomasi Pemaketan (Packaging)

Proyek ini telah dilengkapi script otomasi Python [`scripts/bundle-cpanel.py`](file:///D:/Limoria%20Tech/limoriatech-compro/scripts/bundle-cpanel.py) yang terhubung ke npm scripts.

### Perintah Bundling:
```bash
npm run bundle:cpanel
```

### Tahapan yang Dijalankan:
1. Menjalankan `next build` untuk mengompilasi static export ke folder `out/`.
2. **Memperbaiki RSC Segment Cache di Windows**:
   Pada sistem operasi Windows, Next.js membuat struktur subdirektori untuk payload RSC (misal `contact/__next.contact/__PAGE__.txt`). Script Python menduplikasi file tersebut ke format dot-notated (`contact/__next.contact.__PAGE__.txt`) agar permintaan browser prefetch mendapatkan respon **200 OK** pada server Linux cPanel.
3. Mengemas seluruh isi direktori `out/` ke dalam file arsip:
   **[`deploy-cpanel.zip`](file:///D:/Limoria%20Tech/limoriatech-compro/deploy-cpanel.zip)** dengan atribut izin file POSIX standar Unix (`755` untuk direktori, `644` untuk file).

---

## 2. Konfigurasi Apache & LiteSpeed (`public/.htaccess`)

File [`.htaccess`](file:///D:/Limoria%20Tech/limoriatech-compro/public/.htaccess) telah disiapkan secara komprehensif di root folder dan otomatis ikut ter-copy saat build:

### Poin Konfigurasi Utama:
* **HTTPS Enforcement**:
  Mengalihkan seluruh traffic HTTP ke HTTPS secara otomatis (301 Permanent Redirect):
  ```apache
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```
* **Clean URLs & Trailing Slash**:
  Memastikan rute statis (seperti `/about/` atau `/services/website-applications/`) langsung menemukan file `index.html` yang sesuai tanpa error 404.
* **MIME Types & Public Access**:
  Membuka akses publik untuk aset `.css`, `.js`, font `.woff2`, gambar `.png/.jpg/.webp`, dan file data RSC `.txt`.
* **LiteSpeed / Browser Cache**:
  * CSS, JS, Fonts, dan Gambar: Cache hingga 1 tahun (*long-term immutable cache*).
  * HTML dan JSON: Cache 0 detik (*no-cache*) agar perubahan teks/konten selalu langsung tampil bagi pengunjung.
* **Security Headers**:
  Menyematkan `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, dan `Referrer-Policy: strict-origin-when-cross-origin`.

---

## 3. Integrasi Formulir Kontak (`public/api/contact.php`)

Formulir pada halaman kontak ([`src/app/contact/page.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/contact/page.tsx)) mengirimkan data via POST ke endpoint `/api/contact.php`.

### Konfigurasi Email Penerima:
Buka berkas [`public/api/contact.php`](file:///D:/Limoria%20Tech/limoriatech-compro/public/api/contact.php) dan sesuaikan:
```php
$to_email = "limoriatech@gmail.com"; // Email tujuan notifikasi inquiry
$subject_prefix = "[Limoria Tech Inquiry] ";
```

> [!TIP]
> Jika hosting membatasi fungsi PHP `mail()`, Anda dapat mengonfigurasi autentikasi SMTP cPanel menggunakan library PHPMailer di dalam file ini.

---

## 4. Langkah-Langkah Deploy ke cPanel

1. **Jalankan Perintah Build Lokal**:
   ```bash
   npm run bundle:cpanel
   ```
   Pastikan muncul pesan:
   `Success! Created '.../deploy-cpanel.zip' (...) with POSIX 755/644 permissions.`

2. **Login ke cPanel**:
   Buka dashboard cPanel akun hosting Anda (misal: `https://limoriatech.com:2083`).

3. **Buka File Manager**:
   Navigasikan ke direktori web root:
   * **Domain Utama**: `public_html/`
   * **Subdomain / Addon Domain**: Direktori document root yang dikonfigurasikan.

4. **Upload File Zip**:
   * Klik tombol **Upload** di bagian atas menu File Manager cPanel.
   * Pilih file [`deploy-cpanel.zip`](file:///D:/Limoria%20Tech/limoriatech-compro/deploy-cpanel.zip) dari komputer Anda.

5. **Ekstrak File**:
   * Setelah proses upload 100% selesai, klik kanan pada `deploy-cpanel.zip` di cPanel, lalu pilih **Extract** ke direktori `public_html/`.
   * Hapus file zip setelah berhasil diekstrak untuk menghemat kuota hosting.

---

## 5. Checklist Verifikasi Pasca-Deploy

Setelah file berhasil diekstrak di cPanel:

- [ ] Buka `https://limoriatech.com` — pastikan homepage terbuka dengan layout sempurna dan favicon tampil.
- [ ] Buka `https://limoriatech.com/services/website-applications/` — pastikan judul halaman baru berformat komersial dan section FAQ dapat dibuka/tutup.
- [ ] Buka `https://limoriatech.com/sitemap.xml` — pastikan 41 rute XML sitemap muncul.
- [ ] Buka `https://limoriatech.com/robots.txt` — pastikan aturan `Allow: /` dan `Disallow: /api/` muncul.
- [ ] Buka `https://limoriatech.com/google57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o.html` — pastikan file verifikasi mengembalikan string token Google.
- [ ] Uji form kontak di halaman `/contact/` — pastikan notifikasi terkirim ke email admin.
- [ ] Uji sharing link ke WhatsApp / LinkedIn — pastikan kartu pratinjau banner 1200x630 muncul sempurna.
