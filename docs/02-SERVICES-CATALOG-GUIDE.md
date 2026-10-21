# Panduan Katalog Layanan & FAQ (Services Catalog Guide)

Dokumentasi ini memandu cara mengelola, menambah, memperbarui, dan menyusun data 20 katalog layanan teknologi dan finansial digital, deliverables, manfaat, serta tanya-jawab (FAQ) dwibahasa di [`src/data/services.json`](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/services.json).

---

## 1. Pembagian Kategori Layanan

Platform membagi solusi bisnis Limoria Tech ke dalam dua pilar utama (`ServiceCategory`):

1. **`tech` (Layanan Teknologi - 8 Layanan)**:
   * `business-research`: Riset Bisnis
   * `strategic-planning`: Perencanaan Strategis
   * `market-analysis`: Analisis Pasar
   * `website-applications`: Aplikasi Website Enterprise
   * `mobile-applications`: Aplikasi Mobile (Android & iOS)
   * `desktop-applications`: Aplikasi Desktop
   * `solusi-it-inovatif`: Solusi IT Inovatif & Cloud
   * `transformasi-digital`: Transformasi Digital Perusahaan

2. **`financial` (Digital Financial Services - 12 Layanan)**:
   * `accounting`: Akuntansi & Laporan Keuangan
   * `tax`: Perpajakan & Kepatuhan Fiskal
   * `investigation`: Investigasi Forensik Keuangan
   * `litigation`: Litigasi Keuangan
   * `liquidator`: Likuidator Pembubaran Perseroan
   * `digital-platform`: Platform Keuangan Digital
   * `curator`: Kurator & Pengurus PKPU
   * `audit`: Audit Laporan Keuangan Independen
   * `appraisal`: Penilaian & Valuasi Aset
   * `actuarial`: Perhitungan Aktuaria (PSAK 24)
   * `merger`: Merger & Penggabungan Korporasi
   * `acquisition`: Akuisisi Perusahaan

---

## 2. Struktur Objek Data Layanan (`ServiceItem`)

Didefinisikan pada [`src/types/service.types.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/types/service.types.ts):

```json
{
  "id": "website-applications",
  "slug": "website-applications",
  "title": {
    "id": "Aplikasi Website",
    "en": "Website Applications"
  },
  "category": "tech",
  "categoryName": {
    "id": "Layanan Teknologi",
    "en": "Tech Service"
  },
  "badge": {
    "id": "Web & Cloud",
    "en": "Web & Cloud"
  },
  "icon": "Globe",
  "shortDescription": {
    "id": "Kami merancang dan mengembangkan aplikasi web berstandar enterprise...",
    "en": "We architect and develop enterprise web applications..."
  },
  "fullDescription": {
    "id": "Penjelasan mendalam mengenai arsitektur sistem dan skalabilitas...",
    "en": "In-depth description of the system architecture and scalability..."
  },
  "features": [
    {
      "title": { "id": "Arsitektur Skalabel", "en": "Scalable Architecture" },
      "description": { "id": "Menggunakan cloud microservices...", "en": "Engineered with microservices..." }
    }
  ],
  "benefits": {
    "id": ["Efisiensi operasional hingga 40%", "Keamanan data berstandar enterprise"],
    "en": ["Up to 40% operational efficiency", "Enterprise-grade data security"]
  },
  "deliverables": {
    "id": ["Source Code Repository Lengkap", "Dokumentasi Arsitektur & API", "SLA Garansi 3 Bulan"],
    "en": ["Full Source Code Repository", "Architecture & API Documentation", "3-Month SLA Warranty"]
  },
  "faqs": [
    {
      "question": {
        "id": "Berapa lama estimasi pengerjaan proyek aplikasi website?",
        "en": "How long does a web application project take?"
      },
      "answer": {
        "id": "Estimasi waktu pengerjaan berkisar antara 4 hingga 12 minggu...",
        "en": "Project timelines typically range from 4 to 12 weeks..."
      }
    }
  ]
}
```

---

## 3. Panduan Menambah Layanan Baru

Untuk menambahkan layanan baru ke dalam sistem:
1. Buka berkas [`src/data/services.json`](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/services.json).
2. Tambahkan objek JSON baru di akhir array.
3. Pastikan `slug` bersifat unik dan menggunakan huruf kecil dipisah tanda hubung (misal: `cyber-security-audit`). Slug ini akan secara otomatis menjadi rute SSG: `https://limoriatech.com/services/cyber-security-audit/`.
4. Pilih ikon yang valid dari pustaka Lucide React (misal: `ShieldCheck`, `Cpu`, `Globe`, `Database`, `Briefcase`).
5. Tambahkan minimal 2–3 item `faqs` terjemahan dwibahasa (ID & EN).
6. Simpan file. Jalankan `npm run build` untuk memverifikasi halaman baru ter-prerender dan terindeks otomatis pada sitemap.

---

## 4. Standar Penulisan FAQ Layanan (Untuk Google Rich Snippets)

* **Fokus Jawaban**: Berikan jawaban langsung, spesifik, dan transparan mengenai estimasi durasi, arsitektur teknologi, jaminan garansi/SLA, kepatuhan regulasi (PSAK/Undang-Undang), dan proteksi kerahasiaan data (NDA).
* **Format Dwibahasa**: Selalu sertakan objek `id` dan `en` pada setiap `question` dan `answer`.
* **Google Schema**: FAQ yang ditulis di berkas JSON akan otomatis diekstrak menjadi Schema.org `@type: "FAQPage"` di dalam tag `<head>` halaman oleh generator [`src/lib/seo/schema.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/lib/seo/schema.ts).
