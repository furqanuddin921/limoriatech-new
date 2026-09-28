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
| **Kategori Aplikasi** | `src/data/app-development.json` | `src/types/service.types.ts` | `getAppDevServices()` |
| **Portofolio** | `src/data/portfolio.json` | `src/types/portfolio.types.ts` | `getPortfolioProjects()`, `getProjectBySlug()`, `getFeaturedProjects(limit)`, `getAllPortfolioSlugs()` |
| **Navigasi** | `src/data/navigation.json` | `src/types/navigation.types.ts` | `getNavigation()` |
| **Terjemahan** | `src/data/locales/id.json` & `en.json` | — | `t("key.path", "default")` via `useLanguage()` |

---

## Sistem Bilingual (Localized Fields)

Hampir semua field teks pada `portfolio.json` dan `services.json` menggunakan tipe **`Localized<T>`** — yaitu objek dengan dua kunci bahasa:

```json
{
  "title": { "id": "Teks Indonesia", "en": "English Text" },
  "summary": { "id": "...", "en": "..." }
}
```

Untuk mengambil nilai sesuai bahasa aktif, gunakan helper `getLocalized(value, language)` dari `src/lib/utils.ts`:

```typescript
import { getLocalized } from "@/lib/utils";
const title = getLocalized(project.title, language); // language: "id" | "en"
```

---

## Prosedur Penambahan & Perubahan Konten

### 1. Menambah Portfolio / Studi Kasus Baru

1. Siapkan **gambar portfolio** (format marketing banner, landscape 16:9) dan simpan di `public/assets/portfolio/<slug>.png`.
2. Buka `src/data/portfolio.json` dan tambahkan objek baru dengan skema lengkap:

```json
{
  "id": "unique-slug",
  "slug": "unique-slug",
  "title": { "id": "Judul Proyek", "en": "Project Title" },
  "client": { "id": "Nama Klien / Industri", "en": "Client Name / Industry" },
  "category": {
    "id": "Aplikasi Web & Sistem Enterprise | Aplikasi Mobile | API & Integrasi",
    "en": "Web Application & Enterprise System | Mobile App | API & Integration"
  },
  "year": "2026",
  "summary": { "id": "Ringkasan 2-3 kalimat...", "en": "2-3 sentence summary..." },
  "challenge": { "id": "Tantangan bisnis...", "en": "Business challenge..." },
  "solution": { "id": "Solusi arsitektur...", "en": "Architecture solution..." },
  "impact": {
    "id": ["Dampak terukur 1", "Dampak terukur 2"],
    "en": ["Measurable impact 1", "Measurable impact 2"]
  },
  "techStack": ["Flutter", "FastAPI", "PostgreSQL"],
  "image": "/assets/portfolio/unique-slug.png",
  "liveUrl": "https://url-opsional.com",
  "modules": [
    {
      "title": { "id": "Nama Modul", "en": "Module Name" },
      "description": { "id": "Deskripsi modul...", "en": "Module description..." }
    }
  ],
  "gallery": ["/assets/portfolio/unique-slug-2.png"]
}
```

> **Field opsional:** `liveUrl`, `modules` (ditampilkan di halaman detail), `gallery`.

3. Update filter di `src/features/portfolio/components/PortfolioContent.tsx`:
   - Cari blok `if (filterCategory === "mobile")` / `"enterprise"` / `"api"`
   - Tambahkan slug baru ke filter yang sesuai.
   - Filter kategori saat ini: `enterprise`, `mobile`, `api`. Semua slug baru default tampil di filter `"all"`.

```typescript
// Contoh menambah ke filter mobile:
if (filterCategory === "mobile") {
  return projects.filter(
    (p) => p.slug === "mobile-field-operations" || p.slug === "slug-baru"
  );
}
```

4. Tambahkan entry `placeholderConfig` di `PortfolioContent.tsx` jika gambar belum ada (gradient fallback):

```typescript
"slug-baru": {
  gradient: "from-blue-600 via-indigo-700 to-slate-800",
  icon: <Smartphone className="w-12 h-12 text-white/80" />,
  accent: "Mobile App",
},
```

---

### 2. Menambah Layanan Baru

1. Buka `src/data/services.json`.
2. Tambahkan objek layanan baru dengan struktur:

```json
{
  "id": "nama-layanan-slug",
  "slug": "nama-layanan-slug",
  "title": "Nama Solusi IT / Finansial",
  "category": "tech",
  "categoryName": "Tech Service",
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

3. Jika menggunakan icon baru dari `lucide-react`, pastikan di-import pada:
   - `src/features/home/components/ServicesOverview.tsx`
   - `src/app/services/page.tsx`

---

### 3. Mengubah Kontak & Informasi Perusahaan

Buka `src/data/site-config.json` untuk memperbarui:
- Nomor WhatsApp (`contact.whatsapp`) dalam format internasional tanpa `+` (contoh: `6281234567890`).
- Alamat kantor, email, dan jam operasional.
- Nilai statistik perusahaan (`stats`) pada landing page.

---

### 4. Menambah / Mengubah Teks UI (i18n)

Teks antarmuka yang menggunakan `t("key", "default")` tersimpan di:
- `src/data/locales/id.json` — Bahasa Indonesia
- `src/data/locales/en.json` — English

Tambahkan atau ubah key yang sesuai di kedua file secara bersamaan.

---

## Verifikasi & Validasi

Setelah setiap perubahan pada file JSON:

```bash
npx tsc --noEmit   # cek TypeScript — harus 0 error
npm run build      # pastikan semua rute statis ter-generate
```

Pastikan jumlah halaman portfolio di output build bertambah sesuai entry baru, contoh:
```
/portfolio/slug-baru  ●  (SSG)
```
