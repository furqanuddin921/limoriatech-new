# Panduan Studi Kasus Portofolio (Portfolio Guide)

Dokumentasi ini memandu cara mengelola, menambah, dan memperbarui studi kasus proyek implementasi software, integrasi perbankan, dan transformasi digital di [`src/data/portfolio.json`](file:///D:/Limoria%20Tech/limoriatech-compro/src/data/portfolio.json).

---

## 1. Daftar 9 Portofolio Studi Kasus Unggulan

Platform Limoria Tech menampilkan 9 studi kasus proyek nyata lintas industri:

| Slug Proyek | Judul Solusi | Sektor Klien | Tech Stack Kunci |
| :--- | :--- | :--- | :--- |
| `lms-sekolah` | Sistem Informasi Akademik & LMS Sekolah | Edukasi / Yayasan Sekolah | Next.js, TypeScript, PostgreSQL |
| `restoqr` | RestoQR — Self-Order & POS Restoran | F&B / FnB Enterprise | React, Node.js, WebSockets |
| `enterprise-resource-planning` | Sistem Enterprise Resource Planning (ERP) | Manufaktur & Distribusi | Next.js, Node.js, Docker, MySQL |
| `banking-integration-gateway` | Banking Integration & Payment Gateway | Financial Tech & Retail | Go, Redis, Microservices, TLS |
| `mobile-field-operations` | Mobile Field Operations & Tracking | Logistik & Survei Lapangan | Flutter, Dart, Firebase, Maps |
| `aplikasi-kasir-ai` | Aplikasi Kasir Pintar Berbasis AI | Retail & Grosir | React Native, Python, PyTorch |
| `event-eo-ai` | Platform Manajemen Event & Ticketing AI | Event Organizer & Hiburan | Next.js, Tailwind, Stripe API |
| `kasir-ai-mobile` | Kasir AI Mobile Point of Sales | UMKM & Waralaba | Flutter, SQLite, Cloud Firestore |
| `black-auto-rental` | Portal Reservasi Armada & Sewa Mobil | Transportasi & Pariwisata | Next.js SSG, Tailwind, TypeScript |

---

## 2. Struktur Objek Portofolio (`ProjectItem`)

Didefinisikan pada [`src/types/portfolio.types.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/types/portfolio.types.ts):

```json
{
  "id": "lms-sekolah",
  "slug": "lms-sekolah",
  "title": {
    "id": "Sistem Informasi Akademik & LMS Sekolah",
    "en": "School Information System & LMS"
  },
  "client": {
    "id": "Institusi Pendidikan Swasta Jakarta",
    "en": "Private Educational Institution Jakarta"
  },
  "category": {
    "id": "Web & Mobile App",
    "en": "Web & Mobile App"
  },
  "year": "2024",
  "summary": {
    "id": "Platform pembelajaran daring terintegrasi untuk ribuan siswa...",
    "en": "Integrated e-learning platform serving thousands of students..."
  },
  "challenge": {
    "id": "Tantangan inefisiensi pencatatan nilai manual dan absensi...",
    "en": "The challenge of manual grade tracking and attendance..."
  },
  "solution": {
    "id": "Membangun sistem akademik berbasis cloud terpadu...",
    "en": "Engineered an integrated cloud-native academic platform..."
  },
  "impact": {
    "id": [
      "Menghemat 60% waktu administrasi guru",
      "Akurasi pencatatan absensi & nilai mencapai 99.8%",
      "Adopsi 100% oleh lebih dari 2.500 siswa aktif"
    ],
    "en": [
      "Saved 60% of teachers' administrative hours",
      "99.8% grade & attendance accuracy",
      "100% adoption across 2,500+ active students"
    ]
  },
  "techStack": ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  "image": "/assets/portfolio/lms-sekolah.png",
  "liveUrl": "https://limoriatech.com"
}
```

---

## 3. Standar Metrik Dampak Kuantitatif (*Impact Metrics*)

Setiap studi kasus wajib memuat minimal 3 metrik dampak nyata (*tangible ROI*) yang dirasakan klien:
1. **Efisiensi Waktu / Biaya**: misal: *"Menghemat 60% waktu administrasi operasional"*.
2. **Akurasi & Keandalan**: misal: *"Uptime 99.9% dan akurasi rekonsiliasi data 99.8%"*.
3. **Skalabilitas & Adopsi**: misal: *"Digunakan aktif oleh 2.500+ pengguna simultan"*.

---

## 4. Standar Gambar Portofolio (Visual Asset Guidelines)

* **Rasio Aspek**: Wajib **16:9** horizontal.
* **Resolusi**: Rekomendasi **1280×720px** atau **1920×1080px**.
* **Format**: `.png` (direkomendasikan) atau `.jpg` berkualitas tinggi.
* **Ukuran Berkas**: Kompresi di bawah **400 KB** per gambar agar waktu muat tetap instan.
* **Direktori File**: Letakkan gambar langsung pada:
  `public/assets/portfolio/<slug-proyek>.png`
* Nilai pada JSON cukup berupa path absolut: `"/assets/portfolio/<slug-proyek>.png"`.
