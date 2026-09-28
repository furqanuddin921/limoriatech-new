import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";

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

  return {
    title: `${service.title} - ${service.categoryName}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Limoria Tech`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isFinancial = service.category === "financial";

  return (
    <div className="py-16 lg:py-24">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Seluruh Layanan</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={isFinancial ? "success" : "primary"}>
              {service.categoryName}
            </Badge>
            {service.badge && (
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {service.badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Pendekatan & Gambaran Layanan
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Fitur & Kapabilitas Utama
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <Card key={idx} className="p-6 bg-slate-50 border-slate-200">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          isFinancial
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Apa yang Anda Dapatkan (Deliverables):
              </h3>
              <ul className="space-y-2.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2
                      className={`w-5 h-5 shrink-0 ${
                        isFinancial ? "text-emerald-600" : "text-blue-600"
                      }`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar: Benefits & Consultation CTA */}
          <div className="lg:col-span-4 space-y-6">
            <Card
              className={
                isFinancial
                  ? "border-emerald-200 bg-emerald-50/40 p-6 sm:p-8"
                  : "border-blue-100 bg-blue-50/40 p-6 sm:p-8"
              }
            >
              <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <ShieldCheck
                  className={`w-5 h-5 ${
                    isFinancial ? "text-emerald-600" : "text-blue-600"
                  }`}
                />
                Nilai Tambah Bisnis
              </h4>
              <ul className="space-y-3 mb-6">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                    <span
                      className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                        isFinancial ? "bg-emerald-600" : "bg-blue-600"
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <Link href="/contact/" className="block">
                  <Button size="md" variant="primary" className="w-full justify-center">
                    Mulai Konsultasi Ini
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3">
              <h5 className="font-semibold text-slate-900 text-sm">
                Butuh Custom Scope?
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kami dapat menyusun proposal dan scope of work (SOW) yang disesuaikan dengan anggaran dan kebutuhan spesifik Anda.
              </p>
              <Link
                href="/contact/"
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-block"
              >
                Hubungi Konsultan &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
