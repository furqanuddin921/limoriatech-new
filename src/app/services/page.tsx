import type { Metadata } from "next";
import ServicesCatalog from "@/features/services/components/ServicesCatalog";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { getSiteConfig } from "@/lib/data/site";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "Layanan Tech & Financial Services",
  description:
    "Layanan lengkap Limoria Tech mencakup solusi teknologi informasi terintegrasi (Tech Services) dan keahlian pelaporan keuangan komprehensif (Digital Financial Services).",
  alternates: {
    canonical: `${siteConfig.url}/services/`,
  },
  openGraph: {
    title: "Layanan IT & Financial Services | Limoria Tech",
    description:
      "Layanan lengkap Limoria Tech mencakup solusi teknologi informasi terintegrasi (Tech Services) dan keahlian pelaporan keuangan komprehensif (Digital Financial Services).",
    url: `${siteConfig.url}/services/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan IT & Financial Services | Limoria Tech",
    description:
      "Layanan lengkap Limoria Tech mencakup solusi teknologi informasi terintegrasi (Tech Services) dan keahlian pelaporan keuangan komprehensif (Digital Financial Services).",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services/" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/services/#webpage`,
    url: `${siteConfig.url}/services/`,
    name: "Layanan Tech & Digital Financial Services | Limoria Tech",
    description:
      "Layanan lengkap Limoria Tech mencakup solusi teknologi informasi terintegrasi (Tech Services) dan keahlian pelaporan keuangan komprehensif (Digital Financial Services).",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, collectionSchema]} />
      <ServicesCatalog />
    </>
  );
}
