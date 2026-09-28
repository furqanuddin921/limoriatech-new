---
name: seo-and-schema-optimizer
description: >-
  Guides search engine optimization (SEO), metadata configuration, OpenGraph
  social sharing cards, and Schema.org JSON-LD structured data for Limoria Tech.
  Use this skill when auditing SEO, updating sitemaps/robots directives, or
  configuring rich snippets for Google search results.
---

# Limoria Tech SEO & Structured Data Skill

Prosedur standar optimasi SEO, metadata OpenGraph, dan Schema.org JSON-LD untuk website Company Profile Limoria Tech.

---

## 1. Arsitektur Metadata Next.js

Seluruh metadata halaman dikelola melalui API metadata Next.js:

1. **Global Metadata (`src/app/layout.tsx`):**
   - Menentukan judul default dan template (`%s | Limoria Tech`).
   - Meta deskripsi, kata kunci (keywords), author, dan OpenGraph umum.
   - Locale bahasa (`id_ID`) dan language tag (`<html lang="id">`).

2. **Per-Page Metadata (`src/app/<route>/page.tsx`):**
   - Setiap halaman statis mengekspor objek `metadata`:
     ```typescript
     export const metadata: Metadata = {
       title: "Judul Halaman",
       description: "Deskripsi khusus halaman...",
     };
     ```

3. **Dynamic Route Metadata (`src/app/services/[slug]/page.tsx`):**
   - Menggunakan fungsi `generateMetadata({ params })` untuk menarik data langsung dari `src/data/services.json`.

---

## 2. Dynamic Sitemap & Robots Configuration

- **Sitemap XML (`src/app/sitemap.ts`):**
  Menggunakan `export const dynamic = "force-static"` untuk menyusun daftar seluruh URL statis dan dynamic slug layanan secara otomatis saat `npm run build`.
- **Robots Directives (`src/app/robots.ts`):**
  Mengizinkan semua crawler untuk mengindeks halaman publik, dan mengecualikan `/api/` (script internal).

---

## 3. Schema.org (JSON-LD Structured Data)

Untuk memaksimalkan kehadiran perusahaan di Google Knowledge Graph dan Google Maps, struktur data `Organization` dan `ProfessionalService` dapat disematkan pada `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Limoria Tech",
  "legalName": "PT Limoria Teknologi Indonesia",
  "url": "https://limoriatech.com",
  "logo": "https://limoriatech.com/assets/logo.png",
  "description": "Konsultan IT untuk Mengembangkan Bisnis Anda.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gedung Cyber 2 Tower, Jl. H. R. Rasuna Said",
    "addressLocality": "Jakarta Selatan",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-812-3456-7890",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian", "English"]
  }
}
```

---

## 4. Checklist Uji Kelayakan SEO Sebelum Rilis

- [ ] Jalankan `npm run build` dan periksa `out/sitemap.xml` & `out/robots.txt`.
- [ ] Uji OpenGraph preview menggunakan simulator (misal: Facebook Sharing Debugger atau LinkedIn Post Inspector).
- [ ] Pastikan seluruh gambar memiliki atribut `alt` yang deskriptif.
- [ ] Pastikan heading hierarki berjalan teratur (`h1` unik per halaman, diikuti `h2` dan `h3`).
