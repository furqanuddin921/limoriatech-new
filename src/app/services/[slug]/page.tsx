import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { getLocalized } from "@/lib/utils";

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

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  const title = getLocalized(service.title, "id");
  const categoryName = getLocalized(service.categoryName, "id");
  const description = getLocalized(service.shortDescription, "id");

  return {
    title: `${title} - ${categoryName}`,
    description: description,
    openGraph: {
      title: `${title} | Limoria Tech`,
      description: description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailContent service={service} />;
}
