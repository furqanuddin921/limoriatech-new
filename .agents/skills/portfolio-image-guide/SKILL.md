---
name: portfolio-image-guide
description: >-
  Standard guide for creating, generating, and placing portfolio marketing banner
  images for Limoria Tech's company profile. Use this skill whenever adding a new
  portfolio project that needs a visual thumbnail, or when regenerating an existing
  portfolio image to match the standard format.
---

# Portfolio Image Guide — Limoria Tech

Standar pembuatan gambar thumbnail portfolio yang konsisten untuk semua proyek di `src/data/portfolio.json`.

---

## Format Standar

Semua gambar portfolio menggunakan format **marketing banner landscape** dengan struktur 2 bagian:

```
┌─────────────────────────────────────────────────────┐
│  [Header Gelap]                                     │
│  [Ikon] Nama Aplikasi    [Badge 1]  [Badge 2]       │
│         Tagline singkat                             │
├─────────────────────────────────────────────────────┤
│  [Latar Terang]                                     │
│                                                     │
│   [Device 1]     [Device 2]     [Device 3]          │
│   iPhone/Phone   iPad/Tablet    iPhone/Browser      │
│                                                     │
│  [Label 1]       [Label 2]      [Label 3]           │
└─────────────────────────────────────────────────────┘
```

| Properti | Nilai |
| :--- | :--- |
| **Rasio** | 16:9 (landscape) |
| **Format file** | `.png` (disimpan di `public/assets/portfolio/`) |
| **Nama file** | `<slug>.png` — sama persis dengan slug di `portfolio.json` |
| **Header** | Gradient gelap `#0f172a` → `#1e293b` (slate-900 → slate-950) |
| **Badge fitur** | 2 pill berwarna — highlight fitur utama proyek |
| **Device** | 3 device mockup: biasanya Phone + Tablet/Desktop + Phone |
| **Label device** | Pill hitam bulat di bawah setiap device |

---

## Contoh Proyek & Referensi

| Portfolio | Device Combo | Badge Contoh |
| :--- | :--- | :--- |
| LMS Sekolah | iPhone + MacBook + iPad | `⚡ CBT Ujian Online` · `📊 Rapor & Analitik` |
| Aplikasi Kasir AI | iPhone + MacBook + iPad | `⚡ Transaksi Cepat` · `🧠 AI Analytics` |
| Mobile Field Ops | iPhone + MacBook + iPad | `📍 GPS Geotagging` · `🔄 Auto-Sync Offline` |
| Kasir AI Mobile | iPhone + iPad + iPhone | `⚡ Offline-First` · `🖨️ Bluetooth Print` |

---

## Cara Generate Gambar (AI Image Generation)

Gunakan prompt template berikut dengan tool `generate_image`:

```
Professional app portfolio marketing banner, 16:9 landscape ratio.

HEADER (top ~20% height):
- Dark navy gradient background (#0f172a to #1e293b)
- Left: [emoji] + "[App Name]" in large bold white font + subtitle "[tagline]" in smaller white text
- Right: Two rounded pill badges — "[emoji] Feature 1" in green, "[emoji] Feature 2" in blue

BODY (bottom ~80% height):
- Light gray/white background
- Three device mockups centered side by side:
  LEFT: iPhone 15 Pro showing [screen description]
  CENTER: iPad Pro 12.9" landscape showing [screen description]
  RIGHT: iPhone 15 Pro showing [screen description]
- Under each device, a black rounded pill label: "[Label 1]", "[Label 2]", "[Label 3]"

Style: Clean, modern, professional tech product showcase. Photorealistic device frames.
```

**Tips:**
- Sertakan file screenshot asli proyek sebagai `ImagePaths` (max 3 gambar) agar AI menggunakan UI yang benar.
- Iterasikan prompt jika hasilnya kurang sesuai — terutama konten di dalam device frame.

---

## Prosedur Lengkap Menambah Gambar Portfolio

1. **Siapkan screenshot** — ambil dari mockup, APK, atau live URL proyek.
2. **Generate banner** dengan `generate_image` menggunakan template prompt di atas.
3. **Simpan hasil** ke `public/assets/portfolio/<slug>.png` (overwrite jika sudah ada).
4. **Verifikasi** di browser via `http://localhost:3000/portfolio` bahwa gambar muncul di card.
5. **Pastikan** halaman detail juga menampilkan gambar dengan benar di `/portfolio/<slug>/`.

---

## Lokasi File

```
public/
└── assets/
    └── portfolio/
        ├── lms-sekolah.png               ← ~560 KB
        ├── restoqr.png                   ← ~612 KB
        ├── enterprise-resource-planning.png
        ├── mobile-field-operations.png
        ├── banking-integration-gateway.png
        ├── aplikasi-kasir-ai.png
        ├── event-eo-ai.png
        └── kasir-ai-mobile.png           ← Flutter POS mobile app
```

---

## Catatan Teknis

- Gambar menggunakan **Next.js `<Image>`** dengan `fill` + `object-cover object-top`.
- Di halaman **daftar portfolio**: aspect-ratio `aspect-video` (16:9).
- Di halaman **detail portfolio**: wrapped dalam browser mockup frame.
- Ekstensi **harus `.png`** — komponen memeriksa `project.image?.endsWith(".png")` untuk menentukan apakah menampilkan gambar atau placeholder gradient.
- Jika file gambar belum tersedia, card akan otomatis menampilkan **placeholder gradient** berdasarkan `placeholderConfig` di `PortfolioContent.tsx`.
