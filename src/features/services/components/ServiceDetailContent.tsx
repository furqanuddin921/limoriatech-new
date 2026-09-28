"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/utils";
import type { ServiceItem } from "@/types/service.types";

interface ServiceDetailContentProps {
  service: ServiceItem;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const { t, language } = useLanguage();
  const isFinancial = service.category === "financial";

  const title = getLocalized(service.title, language);
  const categoryName = getLocalized(service.categoryName, language);
  const badge = service.badge ? getLocalized(service.badge, language) : null;
  const shortDescription = getLocalized(service.shortDescription, language);
  const fullDescription = getLocalized(service.fullDescription, language);
  const deliverables = getLocalized(service.deliverables, language) || [];
  const benefits = getLocalized(service.benefits, language) || [];

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
            <span>{t("services.backToServices", "Kembali ke Seluruh Layanan")}</span>
          </Link>
        </div>

        {/* Hero Section of Service */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={isFinancial ? "success" : "primary"}>
              {categoryName}
            </Badge>
            {badge && (
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {shortDescription}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t("services.approachTitle", "Pendekatan & Gambaran Layanan")}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                {t("services.featuresTitle", "Fitur & Kapabilitas Utama")}
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
                          {getLocalized(feat.title, language)}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {getLocalized(feat.description, language)}
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
                {t("services.deliverablesTitle", "Apa yang Anda Dapatkan (Deliverables):")}
              </h3>
              <ul className="space-y-2.5">
                {deliverables.map((item, idx) => (
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
                {t("services.benefitsTitle", "Nilai Tambah Bisnis")}
              </h4>
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

              <div className="pt-4 border-t border-slate-200">
                <Link href="/contact/" className="block">
                  <Button size="md" variant="primary" className="w-full justify-center">
                    {t("services.startConsultation", "Mulai Konsultasi Ini")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3">
              <h5 className="font-semibold text-slate-900 text-sm">
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
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-block"
              >
                {t("services.contactConsultant", "Hubungi Konsultan")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
