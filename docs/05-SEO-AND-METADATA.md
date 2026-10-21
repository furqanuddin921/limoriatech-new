# Panduan SEO, Metadata & Structured Data (SEO Guide)

Dokumentasi ini merinci implementasi teknis Search Engine Optimization (SEO), kartu media sosial Open Graph / Twitter Card, Schema.org JSON-LD, sitemap XML, dan robots.txt pada **[https://limoriatech.com](https://limoriatech.com)**.

---

## 1. Arsitektur Metadata Next.js

### A. Root Layout Metadata ([`src/app/layout.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/layout.tsx))
Metadata global dikonfigurasi menggunakan:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "https://limoriatech.com"),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "https://limoriatech.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "57jJrZwvruJGTkVT0geNcXupCRT1-xR0N_D3_r1AM4o",
  },
  // ... Open Graph & Twitter Cards
};
```

> [!IMPORTANT]
> `metadataBase` **wajib selalu mengarah ke domain produksi** (`https://limoriatech.com`) agar Next.js tidak menggunakan fallback `http://localhost:3000` saat mengekspor gambar Open Graph dan canonical tag.

### B. Formula Judul & Deskripsi Komersial (Intent-Based)
Pada halaman rute dinamis [`src/app/services/[slug]/page.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/services/[slug]/page.tsx), metadata disusun untuk memaksimalkan *commercial search intent*:
* **Layanan Teknologi**:
  * *Formula*: `Jasa ${title} & Solusi Enterprise Jakarta`
  * *Hasil di Browser*: `Jasa Aplikasi Website & Solusi Enterprise Jakarta | Limoria Tech`
* **Layanan Finansial**:
  * *Formula*: `Jasa Konsultan ${title} Perusahaan Jakarta`
  * *Hasil di Browser*: `Jasa Konsultan Akuntansi Perusahaan Jakarta | Limoria Tech`
* **Meta Description Ber-CTA**:
  Menyertakan ringkasan spesifikasi, target wilayah korporat, dan nomor WhatsApp resmi:
  `"... Diskusikan kebutuhan Anda dengan konsultan Limoria Tech. Hubungi WhatsApp: +62 823-7537-1268."`

---

## 2. Open Graph & Social Sharing Cards

Setiap tautan yang dibagikan ke WhatsApp, LinkedIn, Facebook, Slack, atau Twitter/X akan menampilkan pratinjau kartu beresolusi tinggi **1200×630px**:

* **Lokasi Berkas**: [`public/assets/og-image.png`](file:///D:/Limoria%20Tech/limoriatech-compro/public/assets/og-image.png) (dan `.jpg`).
* **Spesifikasi Kartu**:
  * Resolusi: 1200 × 630 px (Rasio standar 1.91:1)
  * Visual: Background slate-950 dengan glowing mesh gradient, logo resmi Limoria Tech, badge konsultan enterprise, judul layanan, dan domain `limoriatech.com`.
* **Generator Otomatis**:
  Dapat di-generate ulang kapan saja menggunakan script Python Pillow:
  ```bash
  python scripts/generate-og-image.py
  ```

---

## 3. Schema.org JSON-LD (Data Terstruktur)

Seluruh entitas schema dibangun secara modular melalui [`src/lib/seo/schema.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/lib/seo/schema.ts) dan disuntikkan via komponen [`src/components/seo/JsonLd.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/components/seo/JsonLd.tsx).

### A. Root Layout (Global Entitas)
Disuntikkan langsung di dalam tag `<head>`:
1. **`ProfessionalService` & `Organization`**:
   * Legal Name: *PT Limoria Teknologi Indonesia*
   * Alamat: Ruko Kebayoran Centre, Jl. Raya Kebayoran Baru, Jakarta Selatan
   * Kontak: WhatsApp & Telepon `+62 823-7537-1268`, email `limoriatech@gmail.com`
   * Jam Operasional: Senin - Jumat (08:30 - 17:30 WIB)
   * Profil Sosial: LinkedIn, Instagram, GitHub
2. **`WebSite`**:
   * Menjelaskan entitas situs resmi, publisher, dan dukungan bahasa (`id-ID`, `en-US`).

### B. Halaman Layanan (`/services/[slug]/`)
1. **`Service`**: Menjelaskan nama layanan, penyedia (*provider*), kategori (*serviceType*), dan wilayah cakupan (*Indonesia*).
2. **`BreadcrumbList`**: Memungkinkan Google menampilkan hierarki link: `Beranda > Layanan > [Nama Layanan]`.
3. **`FAQPage`**: Merender tanya jawab terstruktur dari data JSON ke dalam format Google Rich Snippets:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [
       {
         "@type": "Question",
         "name": "Berapa lama estimasi pengerjaan proyek...",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Estimasi waktu pengerjaan berkisar antara..."
         }
       }
     ]
   }
   ```

### C. Halaman Portofolio (`/portfolio/[slug]/`)
1. **`CreativeWork`**: Menjelaskan nama proyek studi kasus, rangkuman dampak, nama klien/sponsor, tautan live URL, dan tumpukan teknologi (*techStack*).
2. **`BreadcrumbList`**: Hierarki `Beranda > Portofolio > [Nama Proyek]`.

---

## 4. Dynamic Sitemap & Robots.txt

### Sitemap XML ([`src/app/sitemap.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/sitemap.ts))
Menggunakan `export const dynamic = "force-static"` untuk mengompilasi sitemap statis saat build:
* **Frekuensi Perayapan & Prioritas**:
  * Beranda (`/`): Priority `1.0`, Daily
  * Katalog Layanan (`/services/`): Priority `0.9`, Weekly
  * Rute Dinamis Layanan (`/services/[slug]/`): Priority `0.8`, Weekly (20 URLs)
  * Katalog Portofolio (`/portfolio/`): Priority `0.8`, Weekly
  * Rute Dinamis Portofolio (`/portfolio/[slug]/`): Priority `0.8`, Monthly (9 URLs)
  * Tentang Kami (`/about/`) & Kontak (`/contact/`): Priority `0.7 - 0.8`, Monthly
* **Total URL Terindeks**: **41 halaman**.

### Robots TXT ([`src/app/robots.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/app/robots.ts))
```text
User-Agent: *
Allow: /
Disallow: /api/

Sitemap: https://limoriatech.com/sitemap.xml
```
