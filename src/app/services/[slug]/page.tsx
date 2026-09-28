import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { getLocalized } from "@/lib/utils";
import ServiceDetailContent from "@/features/services/components/ServiceDetailContent";

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
