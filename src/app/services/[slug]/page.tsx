import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getServiceSchema, getFaqSchema } from "@/lib/seo/schema";

// Lazy-load the heavy service detail client component into its own chunk
const ServiceDetailContent = dynamic(
  () => import("@/features/services/components/ServiceDetailContent"),
  {
    loading: () => (
      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-8">
          <div className="h-4 w-48 bg-slate-200 rounded-full" />
          <div className="h-10 w-2/3 bg-slate-200 rounded-xl" />
          <div className="h-4 w-full bg-slate-200 rounded-full" />
          <div className="h-4 w-5/6 bg-slate-200 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-slate-200 rounded-2xl" />
            <div className="h-40 bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    ),
  }
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  const title = getLocalized(service.title, "id");
  const categoryName = getLocalized(service.categoryName, "id");
  const rawDescription = getLocalized(service.shortDescription, "id");
  const description = `${rawDescription} Diskusikan kebutuhan Anda dengan konsultan Limoria Tech. Hubungi WhatsApp: ${siteConfig.contact.phone}.`;

  const isTech = service.category === "tech";
  const pageTitle = isTech
    ? `Jasa ${title} & Solusi Enterprise Jakarta`
    : `Jasa Konsultan ${title} Perusahaan Jakarta`;

  return {
    title: pageTitle,
    description: description,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}/`,
    },
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description: description,
      url: `${siteConfig.url}/services/${slug}/`,
      images: [
        {
          url: siteConfig.ogImage || "/assets/og-image.png",
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageTitle} | ${siteConfig.name}`,
      description: description,
      images: [siteConfig.ogImage || "/assets/og-image.png"],
    },
    keywords: [
      `Jasa ${title}`,
      `Konsultan ${title} Jakarta`,
      categoryName,
      "Konsultan IT Indonesia",
      "Software House Jakarta",
      "Solusi Digital Enterprise",
      "Limoria Tech",
    ],
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!service) {
    notFound();
  }

  const title = getLocalized(service.title, "id");
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Layanan", path: "/services/" },
    { name: title, path: `/services/${slug}/` },
  ]);
  const serviceSchema = getServiceSchema(service, siteConfig.url);
  const faqSchema = getFaqSchema(service.faqs, "id");

  const activeSchemas = [
    breadcrumbSchema,
    serviceSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  return (
    <>
      <JsonLd schema={activeSchemas} />
      <ServiceDetailContent service={service} />
    </>
  );
}
