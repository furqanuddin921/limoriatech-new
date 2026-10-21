# Panduan Sistem Multi-Bahasa (i18n Localization Guide)

Dokumentasi ini menjelaskan arsitektur sistem internasionalisasi (i18n), struktur tipe data dwibahasa, pengelolaan konteks React, dan tata cara menambahkan teks terjemahan baru pada platform **PT Limoria Teknologi Indonesia (Limoria Tech)**.

---

## 1. Arsitektur i18n & Tumpukan Teknologi

Sistem multi-bahasa di platform Limoria Tech dirancang dengan pendekatan **Client-side Context Provider** yang ringan dan kompatibel penuh dengan **Next.js Static Site Generation (SSG)** (`output: "export"`):

| Komponen | Berkas Sumber | Peran & Deskripsi |
| :--- | :--- | :--- |
| **Provider & Context** | [`src/context/LanguageContext.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/context/LanguageContext.tsx) | Mengelola state bahasa aktif (`id` / `en`), fungsi saklar `toggleLanguage()`, dan persistensi `localStorage` |
| **Tipe Data Generik** | [`src/types/service.types.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/types/service.types.ts) | Definisi tipe `Localized<T> = T \| { id: T; en: T }` untuk seluruh string di data layer |
| **Helper Ekstraksi** | [`src/lib/utils.ts`](file:///D:/Limoria%20Tech/limoriatech-compro/src/lib/utils.ts) | Fungsi utilitas `getLocalized(val, lang)` untuk mengekstrak string sesuai bahasa aktif |
| **Komponen Pemilih** | [`src/components/layout/Navbar.tsx`](file:///D:/Limoria%20Tech/limoriatech-compro/src/components/layout/Navbar.tsx) | Tombol saklar bahasa interaktif di desktop header dan mobile drawer |

---

## 2. Mengapa Client-Side Context Dipilih untuk SSG?

1. **Integritas Rute Tunggal (Single URL Structure)**:
   * Menghindari keharusan memecah folder menjadi rute bahasa ganda (`/id/services/...` vs `/en/services/...`).
   * Seluruh 41 rute statis tetap memiliki URL kanonikal bersih dan terpusat (`https://limoriatech.com/services/...`).
2. **Kecepatan Beralih Bahasa**:
   * Pergantian bahasa berlangsung instan (< 16ms) di sisi klien tanpa perlu me-reload halaman dari awal (*zero network overhead*).
3. **Persistensi Preferensi**:
   * Saat pengunjung mengubah bahasa menjadi Bahasa Inggris (`en`), preferensi tersebut disimpan ke `localStorage.getItem("limoria_lang")` sehingga tetap aktif saat berpindah ke halaman lain.

---

## 3. Cara Penggunaan di Komponen Visual

### A. Menggunakan Hook `useLanguage()`
```tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HeroGreeting() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div>
      {/* Opsi 1: Pengecekan kondisi bahasa aktif */}
      <h2>
        {language === "id"
          ? "Mitra Solusi Konsultan IT Enterprise Terpercaya"
          : "Enterprise IT Consulting & Solutions Partner"}
      </h2>

      {/* Opsi 2: Menggunakan fungsi terjemahan kamus t() */}
      <button onClick={toggleLanguage}>
        {t("common.switchLang", "Ganti Bahasa")}
      </button>
    </div>
  );
}
```

### B. Menggunakan Helper `getLocalized()` untuk Data JSON
Seluruh konten layanan, portofolio, dan nilai perusahaan disimpan dalam bentuk objek `{ id: string, en: string }`:

```tsx
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/utils";
import type { ServiceItem } from "@/types/service.types";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const { language } = useLanguage();

  // Otomatis mengambil bahasa yang sesuai ('id' atau 'en')
  const title = getLocalized(service.title, language);
  const description = getLocalized(service.shortDescription, language);

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

---

## 4. Panduan Menambah Teks Terjemahan Baru pada Model Data

Saat menambahkan field baru pada file JSON di `src/data/`:
1. Bungkus selalu teks dalam format objek:
   ```json
   "callToAction": {
     "id": "Jadwalkan Konsultasi Sekarang",
     "en": "Schedule a Consultation Now"
   }
   ```
2. Pastikan tipe datanya menggunakan `Localized<string>` di interface TypeScript yang bersangkutan.
