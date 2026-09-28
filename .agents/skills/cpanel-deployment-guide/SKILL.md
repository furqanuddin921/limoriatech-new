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

## 1. Otomasi Build & Bundling

Project ini dilengkapi dengan perintah satu pintu untuk menghasilkan file ZIP siap upload:

```bash
npm run bundle:cpanel
```

**Alur Kerja Perintah Ini:**
1. Menjalankan `next build` dengan konfigurasi `output: "export"`.
2. Menghasilkan file HTML murni di direktori `out/` untuk semua rute.
3. Otomatis menyalin konfigurasi server dari `public/.htaccess` dan `public/api/contact.php`.
4. Mengompres seluruh isi `out/` menjadi arsip **`deploy-cpanel.zip`** di root direktori project.

---

## 2. Checklist Pemeriksaan Sebelum Deploy

Sebelum mengunggah ke cPanel, pastikan integritas file bundle:
- [ ] File `deploy-cpanel.zip` telah terbuat dan ukurannya wajar (~700KB - 2MB).
- [ ] Folder `out/` memiliki file `.htaccess` (tersembunyi secara default).
- [ ] Folder `out/api/contact.php` tersedia untuk menerima pesan formulir kontak.
- [ ] File `out/sitemap.xml` dan `out/robots.txt` berhasil dibuat.

---

## 3. Langkah Upload ke cPanel Rumahweb

1. **Buka cPanel:** Login ke panel hosting Rumahweb Anda (`https://namadomain.com:2083` atau melalui client area Rumahweb).
2. **Masuk ke File Manager:**
   - Masuk ke direktori **`public_html`**.
   - Jika ini adalah update website: backup atau hapus file versi lama (kecuali folder sistem cPanel seperti `cgi-bin` atau sertifikat SSL jika ada).
3. **Upload Bundle:**
   - Klik tombol **Upload** di toolbar atas.
   - Pilih file `deploy-cpanel.zip`.
4. **Ekstrak File:**
   - Setelah upload selesai (indikator hijau 100%), kembali ke File Manager.
   - Klik kanan pada `deploy-cpanel.zip`, pilih **Extract** &rarr; ekstrak ke `/public_html`.
   - Hapus file `deploy-cpanel.zip` dari server setelah diekstrak untuk menghemat ruang disk.
5. **Verifikasi Izin File (Permissions):**
   - File `.html`, `.css`, `.js`, `.htaccess` &rarr; permission **644**.
   - Folder / direktori &rarr; permission **755**.
   - Script PHP (`api/contact.php`) &rarr; permission **644**.

---

## 4. Konfigurasi Form Kontak Email (Webmail cPanel)

Formulir kontak di frontend mengirim data via POST ke `/api/contact.php`.
Untuk memastikan email terkirim dengan lancar tanpa masuk folder spam:
1. Buka file `public_html/api/contact.php` di File Manager cPanel.
2. Pastikan variabel `$to` diisi dengan email domain aktif:
   ```php
   $to = 'info@limoriatech.com';
   ```
3. Pastikan header `From` menggunakan alamat email dari domain yang sama:
   ```php
   $headers .= "From: Limoria Tech Webmail <noreply@limoriatech.com>\r\n";
   ```
4. Pastikan fitur **SPF**, **DKIM**, dan **DMARC** sudah aktif di menu **Email Deliverability** pada cPanel Rumahweb.

---

## 5. Troubleshooting Masalah Umum di Shared Hosting

| Gejala | Penyebab Umum | Solusi |
| :--- | :--- | :--- |
| **Error 404 saat refresh halaman sub-route** | File `.htaccess` tidak ter-upload ke `public_html`. | Pastikan fitur *Show Hidden Files (dotfiles)* diaktifkan di File Manager cPanel, lalu pastikan file `.htaccess` ada di `public_html`. |
| **Email kontak tidak masuk** | Fungsi `mail()` bawaan PHP dibatasi oleh firewall hosting. | Periksa kuota email cPanel atau gunakan email forwarder di menu *Forwarders* cPanel Rumahweb. |
| **Tampilan CSS/JS tidak terupdate setelah deploy** | LiteSpeed Cache atau Browser Cache masih menyimpan aset lama. | Buka cPanel &rarr; klik **Flush LiteSpeed Cache**, atau buka website via mode *Incognito* (`Ctrl + Shift + N`). |
