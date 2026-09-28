---
name: compro-content-manager
description: >-
  Manages Limoria Tech's modular JSON content layer, including site configuration,
  services, application development offerings, portfolio case studies, and navigation.
  Use this skill whenever adding, updating, or validating company profile content,
  service specifications, portfolio projects, or data access layer functions.
---

# Limoria Tech Content Management Skill

Panduan operasional dan prosedur standar untuk mengelola data konten website Company Profile Limoria Tech yang berbasis **Modular Data Layer (JSON + TypeScript)**.

---

## Arsitektur Data

Semua data tersimpan secara terpisah dalam direktori `src/data/` dan memiliki kontrak tipe data di `src/types/`:

| Data Domain | File JSON Sumber | Tipe Data TypeScript | Data Access Helper |
| :--- | :--- | :--- | :--- |
| **Site & Kontak** | `src/data/site-config.json` | `src/types/site.types.ts` | `getSiteConfig()` di `src/lib/data/site.ts` |
| **Pilar Solusi** | `src/data/services.json` | `src/types/service.types.ts` | `getServices()`, `getServiceBySlug()` |
| **Kategori Aplikasi** | `src/data/app-development.json`| `src/types/service.types.ts` | `getAppDevServices()` |
| **Portofolio** | `src/data/portfolio.json` | `src/types/portfolio.types.ts`| `getPortfolioProjects()`, `getProjectBySlug()` |
| **Navigasi** | `src/data/navigation.json` | `src/types/navigation.types.ts` | `getNavigation()` |

---

## Prosedur Penambahan & Perubahan Konten

### 1. Menambah Layanan Baru
1. Buka `src/data/services.json`.
2. Tambahkan objek layanan baru dengan struktur:
   ```json
   {
     "id": "nama-layanan-slug",
     "slug": "nama-layanan-slug",
     "title": "Nama Solusi IT / Finansial",
     "category": "tech" | "financial",
     "categoryName": "Tech Service" | "Digital Financial Service",
     "badge": "Kategori / Keunggulan",
     "icon": "NamaIconLucide",
     "shortDescription": "Ringkasan 1-2 kalimat untuk kartu preview...",
     "fullDescription": "Deskripsi lengkap pendekatan dan solusi...",
     "features": [
       { "title": "Nama Fitur", "description": "Penjelasan fitur..." }
     ],
     "benefits": ["Keuntungan 1", "Keuntungan 2"],
     "deliverables": ["Output 1", "Output 2"]
   }
   ```
3. Jika menggunakan icon baru dari `lucide-react`, pastikan icon tersebut di-import pada:
   - `src/features/home/components/ServicesOverview.tsx`
   - `src/app/services/page.tsx`
4. Jalankan `npm run build` untuk memverifikasi bahwa Next.js secara otomatis menghasilkan halaman statis `/services/<slug>/index.html` dan menambahkan URL-nya ke `sitemap.xml`.

---

### 2. Menambah Studi Kasus / Portofolio Baru
1. Buka `src/data/portfolio.json`.
2. Tambahkan objek proyek baru:
   ```json
   {
     "id": "unique-id",
     "slug": "nama-proyek-slug",
     "title": "Judul Sistem / Proyek",
     "client": "Nama Klien / Industri",
     "category": "Web Application" | "Mobile App" | "Enterprise System" | "API & Integration",
     "year": "2026",
     "summary": "Ringkasan proyek...",
     "challenge": "Tantangan bisnis yang dihadapi...",
     "solution": "Arsitektur atau teknologi solusi...",
     "impact": [
       "Metriks keberhasilan 1",
       "Metriks keberhasilan 2"
     ],
     "techStack": ["Next.js", "PostgreSQL", "Docker"],
     "image": "/assets/portfolio/project-name.jpg"
   }
   ```

---

### 3. Mengubah Kontak & Informasi Perusahaan
Buka `src/data/site-config.json` untuk memperbarui:
- Nomor WhatsApp (`contact.whatsapp`) dalam format angka internasional tanpa tanda tambah (contoh: `6281234567890`).
- Alamat kantor, email resmi, dan jam operasional.
- Nilai statistik perusahaan (`stats`) pada landing page.

---

## Verifikasi & Validasi
Setelah melakukan perubahan pada file data JSON:
1. Jalankan pengecekan TypeScript & build statis:
   ```bash
   npm run build
   ```
2. Pastikan tidak ada error kompilasi dan jumlah rute statis ter-generate sesuai jumlah data.
