import type { Metadata } from "next";
import PortfolioContent from "@/features/portfolio/components/PortfolioContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { getSiteConfig } from "@/lib/data/site";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus",
  description:
    "Lihat bagaimana Limoria Tech membantu berbagai institusi dan perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi, LMS sekolah, dan sistem enterprise.",
  alternates: {
    canonical: `${siteConfig.url}/portfolio/`,
  },
  openGraph: {
    title: "Portofolio & Studi Kasus | Limoria Tech",
    description:
      "Lihat bagaimana Limoria Tech membantu berbagai institusi dan perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi, LMS sekolah, dan sistem enterprise.",
    url: `${siteConfig.url}/portfolio/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio & Studi Kasus | Limoria Tech",
    description:
      "Lihat bagaimana Limoria Tech membantu berbagai institusi dan perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi, LMS sekolah, dan sistem enterprise.",
  },
};

export default function PortfolioPage() {
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Portofolio", path: "/portfolio/" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/portfolio/#webpage`,
    url: `${siteConfig.url}/portfolio/`,
    name: "Portofolio & Studi Kasus Solusi IT | Limoria Tech",
    description:
      "Lihat bagaimana Limoria Tech membantu berbagai institusi dan perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi, LMS sekolah, dan sistem enterprise.",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, collectionSchema]} />
      <PortfolioContent />
    </>
  );
}
