---
name: cpanel-deployment-guide
description: >-
  Guides the build, packaging, verification, and deployment process for Rumahweb
  Shared Hosting (cPanel / LiteSpeed). Use this skill when preparing production
  bundles, troubleshooting Apache/LiteSpeed .htaccess rewrites, configuring
  cPanel contact form email forwarding, or uploading files to public_html.
---

# Rumahweb cPanel Deployment Skill

Prosedur standar untuk melakukan build, packaging, dan deployment website Limoria Tech ke Shared Hosting cPanel Rumahweb.

---

## 1. Stack & Konfigurasi Build

| Properti | Nilai |
| :--- | :--- |
| Framework | Next.js 16.3.6 (Turbopack) |
| Output Mode | `output: "export"` — 100% Static HTML |
| Direktori Output | `out/` |
| Bundle Deploy | `deploy-cpanel.zip` |
| Jumlah Rute Statis | ~40 rute (termasuk semua slug portfolio & services) |

---

## 2. Otomasi Build & Bundling (Satu Perintah)

```bash
npm run bundle:cpanel
```

**Alur kerja:**
1. Menjalankan `next build` → menghasilkan HTML statis di `out/`.
2. Menyalin `.htaccess` dan `api/contact.php` dari `public/` ke `out/` secara otomatis.
3. Mengompres seluruh isi `out/` menjadi `deploy-cpanel.zip` di root project.

**Catatan penting:**
- Harus dijalankan di **Windows PowerShell** (perintah `Compress-Archive` adalah PowerShell).
- Jika dev server sedang berjalan di port 3000, Next.js otomatis mencoba port 3001 — tidak mempengaruhi build.

---

## 3. Checklist Verifikasi Bundle (Wajib Sebelum Upload)

Jalankan script verifikasi otomatis:

```powershell
.\.agents\skills\cpanel-deployment-guide\scripts\verify-bundle.ps1
```

Atau verifikasi manual:

- [ ] `deploy-cpanel.zip` ada di root, ukuran wajar (5–15 MB dengan gambar portfolio PNG).
- [ ] `out/.htaccess` ada (gunakan perintah: `Test-Path out\.htaccess`).
- [ ] `out/api/contact.php` ada.
- [ ] `out/sitemap.xml` dan `out/robots.txt` ada.
- [ ] Semua slug portfolio baru ter-generate: `out/portfolio/<slug>/index.html`.
- [ ] Semua slug services ter-generate: `out/services/<slug>/index.html`.

---

## 4. Langkah Upload ke cPanel Rumahweb

1. **Login cPanel** → `https://namadomain.com:2083` atau via client area Rumahweb.
2. **File Manager** → masuk ke direktori `public_html`.
3. Jika **update** (bukan install baru): backup atau hapus file lama kecuali folder sistem cPanel (`cgi-bin`, SSL cert, dll).
4. **Upload** → pilih file `deploy-cpanel.zip`.
5. Setelah upload 100%, **klik kanan** ZIP → **Extract** → ekstrak ke `/public_html`.
6. **Hapus** `deploy-cpanel.zip` dari server setelah diekstrak.
7. Verifikasi permission:
   - File `.html`, `.css`, `.js`, `.htaccess` → **644**
   - Folder / direktori → **755**
   - `api/contact.php` → **644**

---

## 5. Konfigurasi Form Kontak Email (Webmail cPanel)

Formulir kontak mengirim POST ke `/api/contact.php`. Pastikan:

```php
$to = 'info@limoriatech.com';
$headers .= "From: Limoria Tech Webmail <noreply@limoriatech.com>\r\n";
```

Aktifkan **SPF**, **DKIM**, dan **DMARC** di menu **Email Deliverability** cPanel Rumahweb agar email tidak masuk spam.

---

## 6. Troubleshooting Masalah Umum

| Gejala | Penyebab | Solusi |
| :--- | :--- | :--- |
| **404 saat refresh sub-route** | `.htaccess` tidak ter-upload | Aktifkan *Show Hidden Files* di File Manager, pastikan `.htaccess` ada di `public_html` |
| **403 Forbidden pada `_next/static` (CSS/JS tidak load)** | Permission folder `_next` atau subfoldernya bukan 755 (misal 700/644 sehingga Apache tidak bisa membaca file) | Ubah permission folder `_next`, `_next/static`, `chunks`, `media` menjadi **755** dan file di dalamnya menjadi **644**. Atau gunakan `npm run bundle:cpanel` versi baru yang otomatis mengatur POSIX permissions. |
| **404 pada `__next...__PAGE__.txt` (RSC prefetch)** | Bug Next.js 16 di Windows: path separator segment cache menggunakan backslash sehingga membuat subfolder bukannya file ber-titik | Skrip `bundle:cpanel` otomatis menduplikasi file nested menjadi flat file (`__next.route.__PAGE__.txt`) dan `.htaccess` memiliki fallback rewrite. Cukup jalankan `npm run bundle:cpanel` dan upload ulang. |
| **Gambar portfolio tidak muncul** | File PNG besar (1–2 MB per gambar) tidak ter-upload sempurna | Cek ukuran tiap file di `public_html/assets/portfolio/`, re-upload jika perlu |
| **CSS/JS tidak update setelah deploy** | LiteSpeed Cache atau browser cache lama | cPanel → **Flush LiteSpeed Cache**, atau buka via Incognito |
| **Email kontak tidak masuk** | `mail()` PHP dibatasi hosting | Periksa kuota email atau gunakan *Forwarders* cPanel |
| **Build error: TypeScript** | Error tipe data JSON baru | Jalankan `npx tsc --noEmit` dan perbaiki error sebelum build |
