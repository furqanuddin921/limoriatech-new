import type { Metadata } from "next";
import ServicesCatalog from "@/features/services/components/ServicesCatalog";

export const metadata: Metadata = {
  title: "Layanan Tech & Financial Services",
  description:
    "Layanan lengkap Limoria Tech mencakup solusi teknologi informasi terintegrasi (Tech Services) dan keahlian pelaporan keuangan komprehensif (Digital Financial Services).",
};

export default function ServicesPage() {
  return <ServicesCatalog />;
}
