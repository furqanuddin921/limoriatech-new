"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Clock,
  FileText,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/utils";
import { getServices } from "@/lib/data/services";
import type { ServiceItem } from "@/types/service.types";

interface ServiceDetailContentProps {
  service: ServiceItem;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { t, language } = useLanguage();
  const allServices = getServices();
  const isFinancial = service.category === "financial";

  const title = getLocalized(service.title, language);
  const categoryName = getLocalized(service.categoryName, language);
  const badge = service.badge ? getLocalized(service.badge, language) : null;
  const shortDescription = getLocalized(service.shortDescription, language);
  const fullDescription = getLocalized(service.fullDescription, language);
  const deliverables = getLocalized(service.deliverables, language) || [];
  const benefits = getLocalized(service.benefits, language) || [];

  // Related services (exclude current, pick 3)
  const relatedServices = allServices
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const waMessage = encodeURIComponent(
    `Halo Limoria Tech, saya ingin berkonsultasi mengenai layanan ${title}.`
  );

  return (
    <div className="py-12 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            {t("nav.home", "Beranda")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/services/" className="hover:text-blue-600 transition-colors">
            {t("nav.services", "Layanan")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{title}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("services.backToServices", "Kembali ke Seluruh Layanan")}</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-4xl mb-14 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={isFinancial ? "success" : "primary"} className="py-1 px-3 text-xs font-bold">
              {categoryName}
            </Badge>
            {badge && (
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                {badge}
              </span>
            )}
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {language === "id" ? "Konsultasi Aktif" : "Active Consultation"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {shortDescription}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Left Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-xs uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>{language === "id" ? "Gambaran Menyeluruh" : "Comprehensive Overview"}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                {t("services.approachTitle", "Pendekatan & Gambaran Layanan")}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  {t("services.featuresTitle", "Fitur & Kapabilitas Utama")}
                </h3>
                <span className="text-xs font-bold text-slate-400">
                  {service.features.length} {language === "id" ? "Fitur Kunci" : "Key Capabilities"}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, idx) => (
                  <Card
                    key={idx}
                    hoverEffect
                    className="p-6 bg-white border-slate-200 hover:border-blue-300 transition-all shadow-sm"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          isFinancial
                            ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20"
                            : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                        }`}
                      >
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base mb-1.5">
                          {getLocalized(feat.title, language)}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {getLocalized(feat.description, language)}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  {t("services.deliverablesTitle", "Apa yang Anda Dapatkan (Deliverables):")}
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {deliverables.length} Items
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isFinancial ? "text-emerald-600" : "text-blue-600"
                      }`}
                    />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <Card
              className={
                isFinancial
                  ? "border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white p-6 sm:p-8 shadow-md"
                  : "border-blue-200 bg-gradient-to-b from-blue-50/60 to-white p-6 sm:p-8 shadow-md"
              }
            >
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck
                  className={`w-5 h-5 ${
                    isFinancial ? "text-emerald-600" : "text-blue-600"
                  }`}
                />
                <h4 className="font-bold text-slate-900 text-lg">
                  {t("services.benefitsTitle", "Nilai Tambah Bisnis")}
                </h4>
              </div>

              <ul className="space-y-3 mb-6">
                {benefits.map((b, idx) => (
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

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link href="/contact/" className="block">
                  <Button
                    size="md"
                    variant={isFinancial ? "secondary" : "primary"}
                    className="w-full justify-center font-bold shadow-md shadow-blue-500/10 cursor-pointer"
                  >
                    {t("services.startConsultation", "Mulai Konsultasi Ini")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <a
                  href={`https://wa.me/6282375371268?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === "id" ? "Chat WhatsApp Langsung" : "Chat on WhatsApp"}</span>
                </a>
              </div>
            </Card>

            {/* Custom Scope Card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
              <h5 className="font-bold text-slate-900 text-sm">
                {t("services.customScopeTitle", "Butuh Custom Scope?")}
              </h5>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t(
                  "services.customScopeDesc",
                  "Kami dapat menyusun proposal dan scope of work (SOW) yang disesuaikan dengan anggaran dan kebutuhan spesifik Anda."
                )}
              </p>
              <Link
                href="/contact/"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>{t("services.contactConsultant", "Hubungi Konsultan")}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* NDA Trust Card */}
            <div className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50 text-xs text-slate-600 flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-slate-900 mb-0.5">
                  {language === "id" ? "Respons Cepat 1x24 Jam" : "Fast 24h Response"}
                </strong>
                <span>
                  {language === "id"
                    ? "Kami siap menandatangani Non-Disclosure Agreement (NDA) sebelum diskusi mendalam dimulai."
                    : "We are ready to execute an NDA before technical discussions commence."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Recommendation Section */}
        {relatedServices.length > 0 && (
          <div className="border-t border-slate-200 pt-16">
            <div className="mb-8">
              <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">
                {language === "id" ? "Eksplorasi Lebih Lanjut" : "Further Exploration"}
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {language === "id" ? "Layanan Terkait Lainnya" : "Other Related Services"}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => {
                const relTitle = getLocalized(rel.title, language);
                const relDesc = getLocalized(rel.shortDescription, language);

                return (
                  <Card
                    key={rel.id}
                    hoverEffect
                    className="p-6 bg-white border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-2">
                        {relTitle}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {relDesc}
                      </p>
                    </div>
                    <Link
                      href={`/services/${rel.slug}/`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-auto"
                    >
                      <span>{t("services.detailSpec", "Detail Spesifikasi")}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
