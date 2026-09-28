---
name: ui-component-system
description: >-
  Reference guide for all reusable UI components in Limoria Tech compro project.
  Use this skill when building new pages or features, modifying existing components,
  or ensuring design consistency across the codebase. Covers Button, Badge, Card,
  SectionHeader, Container, Input, Textarea, and the bilingual language system.
---

# Limoria Tech UI Component System

Panduan referensi lengkap untuk semua komponen UI yang tersedia di project ini. Selalu gunakan komponen yang sudah ada sebelum membuat yang baru.

---

## Lokasi & Import

Semua komponen UI berada di `src/components/ui/` dan dapat di-import via alias:

```typescript
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
```

Helper utilities dari `src/lib/utils.ts`:
```typescript
import { cn, getLocalized } from "@/lib/utils";
```

---

## Komponen Tersedia

### `Button`

```typescript
<Button
  variant="primary" // "primary" | "secondary" | "outline" | "ghost" | "white"
  size="md"         // "sm" | "md" | "lg"
  loading={false}   // boolean — tampilkan spinner & disable
>
  Teks Button
</Button>
```

| Variant | Kegunaan |
| :--- | :--- |
| `primary` | CTA utama — biru solid |
| `secondary` | CTA sekunder — slate gelap |
| `outline` | Aksi tersier — border slate |
| `ghost` | Aksi ringan — transparan |
| `white` | Di atas latar gelap/biru |

---

### `Badge`

```typescript
<Badge
  variant="primary" // "primary" | "secondary" | "success" | "outline" | "blue"
  className=""      // override tambahan
>
  Label
</Badge>
```

| Variant | Warna |
| :--- | :--- |
| `primary` | Biru muda (bg-blue-50, text-blue-700) |
| `secondary` | Abu (bg-slate-100) |
| `success` | Hijau (bg-emerald-50) |
| `outline` | Transparan + border |
| `blue` | Biru solid (bg-blue-600, text-white) |

---

### `Card`

```typescript
<Card
  padding={true}       // boolean — padding p-6 sm:p-8 otomatis
  hoverEffect={false}  // boolean — hover: lift + shadow biru + border biru
  className=""
>
  {children}
</Card>
```

---

### `SectionHeader`

Digunakan di awal setiap section untuk konsistensi heading:

```typescript
<SectionHeader
  badge="✦ Label Badge"       // opsional — tampil sebagai Badge di atas judul
  title="Judul Section"        // wajib
  subtitle="Deskripsi panjang" // opsional
  align="center"               // "center" (default) | "left"
  className=""
/>
```

---

### `Container`

Wrapper lebar konten dengan `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`:

```typescript
<Container className="">
  {children}
</Container>
```

---

### `Input` & `Textarea`

Digunakan di halaman kontak:

```typescript
<Input
  label="Nama"
  error="Pesan error opsional"
  // ... semua HTML input props
/>

<Textarea
  label="Pesan"
  rows={5}
  error="..."
  // ... semua HTML textarea props
/>
```

---

## Helper Utilities

### `cn(...classNames)` — Class Merger

Menggabungkan Tailwind class dengan benar (via `clsx` + `tailwind-merge`):

```typescript
cn("px-4 py-2", isActive && "bg-blue-600", className)
```

### `getLocalized(value, lang)` — Bilingual Field Reader

Mengambil nilai sesuai bahasa dari field `Localized<T>`:

```typescript
// value bisa berupa: string langsung, atau { id: string, en: string }
const title = getLocalized(project.title, language); // language: "id" | "en"
const impact = getLocalized(project.impact, language); // bisa juga string[]
```

---

## Sistem Bahasa (i18n)

### Hook `useLanguage()`

Digunakan di semua Client Component untuk bilingual:

```typescript
"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function MyComponent() {
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <div>
      {/* Teks dari kamus locales/id.json atau en.json */}
      {t("hero.title", "Default jika key tidak ada")}

      {/* Inline bilingual langsung */}
      {language === "id" ? "Teks Indonesia" : "English Text"}
    </div>
  );
}
```

### Kamus Terjemahan

- `src/data/locales/id.json` — Bahasa Indonesia
- `src/data/locales/en.json` — English
- Key hierarkis, contoh: `t("portfolio.badge")`, `t("hero.headlineStart")`
- Preferensi bahasa user disimpan di `localStorage` dengan key `limoria_locale`.

---

## Pola Layout Halaman

Semua halaman mengikuti pola standar:

```typescript
// src/app/halaman-baru/page.tsx (Server Component)
import type { Metadata } from "next";
import HalamanBaruContent from "@/features/halaman-baru/components/HalamanBaruContent";

export const metadata: Metadata = {
  title: "Judul Halaman",
  description: "Deskripsi halaman...",
};

export default function HalamanBaruPage() {
  return <HalamanBaruContent />;
}

// src/features/halaman-baru/components/HalamanBaruContent.tsx ("use client")
// — semua logika, state, useLanguage() ada di sini
```

---

## Ikon

Project menggunakan **`lucide-react`** versi `^1.48.0`. Import langsung dari paket:

```typescript
import { ArrowRight, Globe, Sparkles, Smartphone } from "lucide-react";
```

Lihat semua ikon yang tersedia di [lucide.dev](https://lucide.dev).

---

## Design Tokens (Tailwind)

| Token | Nilai | Kegunaan |
| :--- | :--- | :--- |
| Warna utama | `blue-600` | CTA, highlight, link hover |
| Warna teks | `slate-900` (heading), `slate-600` (body) | Teks utama |
| Background | `slate-50`, `white` | Latar halaman & card |
| Border | `slate-200` | Border card default |
| Success | `emerald-600` | Live badge, dampak positif |
| Error/Challenge | `rose-500` | Tantangan, error state |
| Shadow hover | `hover:shadow-xl hover:-translate-y-1` | Card interaktif |
