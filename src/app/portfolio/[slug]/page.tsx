import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getProjectBySlug, getAllPortfolioSlugs } from "@/lib/data/portfolio";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getProjectSchema } from "@/lib/seo/schema";

// Lazy-load the heavy interactive client component into its own chunk
// Reduces initial JS parse cost on first page load
const PortfolioDetailContent = dynamic(
  () => import("@/features/portfolio/components/PortfolioDetailContent"),
  {
    loading: () => (
      <div className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-8">
          <div className="h-4 w-48 bg-slate-200 rounded-full" />
          <div className="h-10 w-2/3 bg-slate-200 rounded-xl" />
          <div className="h-4 w-full bg-slate-200 rounded-full" />
          <div className="h-4 w-5/6 bg-slate-200 rounded-full" />
          <div className="aspect-video w-full bg-slate-200 rounded-2xl" />
        </div>
      </div>
    ),
  }
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  const title = getLocalized(project.title, "id");
  const description = getLocalized(project.summary, "id");
  const client = getLocalized(project.client, "id");
  const imageUrl = project.image || siteConfig.ogImage || "/assets/og-image.png";

  return {
    title: `${title} — Studi Kasus`,
    description,
    openGraph: {
      title: `${title} | Limoria Tech Portfolio`,
      description,
      url: `${siteConfig.url}/portfolio/${slug}/`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${client}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — Studi Kasus | Limoria Tech`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${siteConfig.url}/portfolio/${slug}/`,
    },
    keywords: [
      client,
      ...project.techStack,
      "Limoria Tech",
      "studi kasus",
      "portfolio software",
      "pengembangan aplikasi",
    ],
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const siteConfig = getSiteConfig();

  if (!project) {
    notFound();
  }

  const title = getLocalized(project.title, "id");
  const breadcrumbSchema = getBreadcrumbSchema(siteConfig.url, [
    { name: "Beranda", path: "/" },
    { name: "Portofolio", path: "/portfolio/" },
    { name: title, path: `/portfolio/${slug}/` },
  ]);
  const projectSchema = getProjectSchema(project, siteConfig.url);

  return (
    <>
      <JsonLd schema={[breadcrumbSchema, projectSchema]} />
      <PortfolioDetailContent project={project} />
    </>
  );
}
