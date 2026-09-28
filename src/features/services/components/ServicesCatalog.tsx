"use client";

import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  PieChart,
  Globe,
  Smartphone,
  Monitor,
  Calculator,
  Landmark,
  Search,
  Gavel,
  Scale,
  Laptop,
  Archive,
  ClipboardCheck,
  DollarSign,
  LineChart,
  Handshake,
  Building,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getTechServices, getFinancialServices, getAppDevServices } from "@/lib/data/services";
import { getLocalized } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Cpu,
  Briefcase,
  Layers,
  TrendingUp,
  PieChart,
  Globe,
  Smartphone,
  Monitor,
  Calculator,
  Landmark,
  Search,
  Gavel,
  Scale,
  Laptop,
  Archive,
  ClipboardCheck,
  DollarSign,
  LineChart,
  Handshake,
  Building,
};

export default function ServicesCatalog() {
  const { t, language } = useLanguage();
  const techServices = getTechServices();
  const financialServices = getFinancialServices();
  const appDevOfferings = getAppDevServices();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        {/* Main Header */}
        <SectionHeader
          badge={t("services.catalogBadge", "Katalog Layanan Lengkap")}
          title={t("services.catalogTitle", "Solusi Teknologi & Layanan Keuangan Digital")}
          subtitle={t(
            "services.catalogSubtitle",
            "Dua pilar keahlian utama Limoria Tech yang siap mendampingi operasional, transformasi digital, dan tata kelola finansial perusahaan Anda."
          )}
        />

        {/* Quick Anchor Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#tech-services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm hover:bg-blue-100 transition-colors border border-blue-200"
          >
            <Cpu className="w-4 h-4" />
            <span>{t("services.techTab", "Tech Services")} ({techServices.length})</span>
          </a>
          <a
            href="#financial-services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm hover:bg-emerald-100 transition-colors border border-emerald-200"
          >
            <Calculator className="w-4 h-4" />
            <span>{t("services.financialTab", "Digital Financial Services")} ({financialServices.length})</span>
          </a>
          <a
            href="#app-development"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors border border-slate-200"
          >
            <Globe className="w-4 h-4" />
            <span>{t("services.appSpec", "Spesialisasi Aplikasi")} ({appDevOfferings.length})</span>
          </a>
        </div>

        {/* ========================================== */}
        {/* SECTION 1: TECH SERVICES                    */}
        {/* ========================================== */}
        <section id="tech-services" className="scroll-mt-24 mb-24">
          <div className="border-l-4 border-blue-600 pl-4 mb-8">
            <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
              {t("services.pilar1Badge", "Pilar 01")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t("services.pilar1Title", "Tech Services — We Provide Solutions On Your Business")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
              {t(
                "services.pilar1Desc",
                "Layanan konsultasi arsitektur teknologi, riset bisnis, perencanaan strategis, dan rekayasa software terintegrasi."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((service) => {
              const Icon = iconMap[service.icon] || Cpu;

              return (
                <Card
                  key={service.id}
                  hoverEffect
                  className="flex flex-col justify-between border-slate-200/90"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <Badge variant="primary">{getLocalized(service.badge, language)}</Badge>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {getLocalized(service.title, language)}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {getLocalized(service.shortDescription, language)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {getLocalized(service.categoryName, language)}
                    </span>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group"
                    >
                      <span>{t("services.detailSpec", "Detail Spesifikasi")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 2: DIGITAL FINANCIAL SERVICES       */}
        {/* ========================================== */}
        <section id="financial-services" className="scroll-mt-24 mb-24">
          <div className="border-l-4 border-emerald-600 pl-4 mb-8">
            <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">
              {t("services.pilar2Badge", "Pilar 02")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {t("services.pilar2Title", "Digital Financial Services — Comprehensive Financial Reporting Expertise")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
              {t(
                "services.pilar2Desc",
                "Layanan profesional akuntansi, perpajakan, audit independen, valuasi aset, investigasi forensik, likuidasi, dan platform keuangan modern."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices.map((service) => {
              const Icon = iconMap[service.icon] || Calculator;

              return (
                <Card
                  key={service.id}
                  hoverEffect
                  className="flex flex-col justify-between border-slate-200/90"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <Badge variant="success">{getLocalized(service.badge, language)}</Badge>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {getLocalized(service.title, language)}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {getLocalized(service.shortDescription, language)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {getLocalized(service.categoryName, language)}
                    </span>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 group"
                    >
                      <span>{t("services.detailSpec", "Detail Spesifikasi")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 3: APP DEVELOPMENT SPECIALTIES     */}
        {/* ========================================== */}
        <section id="app-development" className="scroll-mt-24 mb-20">
          <SectionHeader
            badge={t("services.appDevBadge", "Klasifikasi Aplikasi")}
            title={t("services.appDevTitle", "Spesialisasi Pengembangan Aplikasi Kami")}
            subtitle={t(
              "services.appDevSubtitle",
              "Kami membantu mengembangkan berbagai jenis aplikasi dengan standar kinerja, keamanan, skalabilitas, dan kemudahan penggunaan."
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appDevOfferings.map((offering, idx) => (
              <Card key={idx} hoverEffect className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {getLocalized(offering.title, language)}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {getLocalized(offering.description, language)}
                </p>
                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {offering.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center rounded-3xl bg-blue-600 p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            {t("services.ctaTitle", "Butuh Solusi Tech atau Financial Services?")}
          </h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            {t(
              "services.ctaDesc",
              "Tim konsultan teknologi dan ahli keuangan kami siap mendiskusikan kebutuhan unik perusahaan Anda."
            )}
          </p>
          <Link href="/contact/">
            <Button size="lg" variant="white">
              {t("services.ctaButton", "Jadwalkan Konsultasi Gratis")}
              <ArrowRight className="w-4 h-4 text-blue-900" />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
