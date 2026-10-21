import type { Metadata } from "next";
import ContactContent from "@/features/contact/components/ContactContent";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { getSiteConfig } from "@/lib/data/site";

const siteConfig = getSiteConfig();

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: "Hubungi Kami | Limoria Tech",
    description:
      "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
    url: `${siteConfig.url}/contact/`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubungi Kami | Limoria Tech",
    description:
      "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Hubungi Kami", path: "/contact/" },
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact/#webpage`,
    url: `${siteConfig.url}/contact/`,
    name: "Hubungi Kami | Limoria Tech",
    description:
      "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, contactPageSchema]} />
      <ContactContent />
    </>
  );
}
