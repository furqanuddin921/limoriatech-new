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

### Global Metadata (`src/app/layout.tsx`)
- Judul default dan template: `%s | Limoria Tech`
- Meta deskripsi, keywords, author, OpenGraph umum
- Locale: `id_ID`, `<html lang="id">`
- `metadataBase` — **wajib diset ke domain produksi** agar OG image tidak menggunakan `localhost:3000`:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL("https://limoriatech.com"),
  // ...
};
```

> ⚠️ Saat build, ada warning `metadataBase is not set` jika ini belum dikonfigurasi — update sebelum deploy ke production.

### Per-Page Metadata (`src/app/<route>/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Judul Halaman",
  description: "Deskripsi khusus halaman ini...",
};
```

### Dynamic Route Metadata (`src/app/portfolio/[slug]/page.tsx` & `src/app/services/[slug]/page.tsx`)
- Menggunakan `generateMetadata({ params })` untuk menarik data langsung dari JSON data layer.
- Judul dan deskripsi otomatis per slug proyek/layanan.

---

## 2. Dynamic Sitemap & Robots

**`src/app/sitemap.ts`** — menggunakan `export const dynamic = "force-static"`:
- Secara otomatis mencantumkan semua rute statis **dan** semua slug portfolio & services.
- Setiap kali portfolio/services baru ditambahkan ke JSON, URL sitemap ter-update otomatis saat `npm run build`.

**`src/app/robots.ts`** — konfigurasi saat ini:
- Allow: semua crawler ke semua halaman publik.
- Disallow: `/api/` (PHP contact script).

---

## 3. Schema.org JSON-LD (Structured Data)

Untuk rich snippet Google Knowledge Graph, sematkan di `src/app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Limoria Tech",
  "legalName": "PT Limoria Teknologi Indonesia",
  "url": "https://limoriatech.com",
  "logo": "https://limoriatech.com/assets/logo.png",
  "description": "Konsultan IT & Solusi Digital untuk Mengembangkan Bisnis Anda.",
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

Untuk halaman detail portfolio, tambahkan schema `CreativeWork` di `PortfolioDetailContent.tsx`.

---

## 4. OpenGraph & Social Cards

Setiap gambar portfolio di `public/assets/portfolio/*.png` secara otomatis bisa digunakan sebagai OG image jika `metadataBase` sudah dikonfigurasi dengan benar.

Ukuran ideal OG image: **1200×630px** (rasio 16:9 yang digunakan saat ini sudah kompatibel).

---

## 5. Checklist SEO Sebelum Deploy

- [ ] `metadataBase` di `layout.tsx` sudah diset ke `https://limoriatech.com`.
- [ ] Jalankan `npm run build`, periksa `out/sitemap.xml` — pastikan semua slug portfolio & services tercantum.
- [ ] Periksa `out/robots.txt` — pastikan `Disallow: /api/` ada.
- [ ] Semua gambar `<Image>` punya atribut `alt` yang deskriptif.
- [ ] Heading hierarki benar: satu `h1` per halaman, diikuti `h2`, `h3`.
- [ ] Uji OG preview: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) atau [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
- [ ] Submit sitemap ke [Google Search Console](https://search.google.com/search-console): `https://limoriatech.com/sitemap.xml`.
