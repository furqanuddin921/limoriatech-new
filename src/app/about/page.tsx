import type { Metadata } from "next";
import AboutContent from "@/features/about/components/AboutContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { getSiteConfig } from "@/lib/data/site";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
  alternates: {
    canonical: `${siteConfig.url}/about/`,
  },
  openGraph: {
    title: "Tentang Kami | Limoria Tech",
    description:
      "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
    url: `${siteConfig.url}/about/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami | Limoria Tech",
    description:
      "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about/" },
  ]);

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about/#webpage`,
    url: `${siteConfig.url}/about/`,
    name: "Tentang Kami | Limoria Tech",
    description:
      "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, pageSchema]} />
      <AboutContent />
    </>
  );
}
