"use client";

import { useState, useMemo } from "react";
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
  CheckCircle2,
  Sparkles,
  SearchX,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getTechServices, getFinancialServices, getAppDevServices } from "@/lib/data/services";
import { getLocalized, cn } from "@/lib/utils";

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

  const [activeTab, setActiveTab] = useState<"all" | "tech" | "financial" | "appdev">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered services based on search query
  const filteredTech = useMemo(() => {
    if (!searchQuery.trim()) return techServices;
    const q = searchQuery.toLowerCase();
    return techServices.filter((s) => {
      const title = getLocalized(s.title, language).toLowerCase();
      const desc = getLocalized(s.shortDescription, language).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [techServices, searchQuery, language]);

  const filteredFinancial = useMemo(() => {
    if (!searchQuery.trim()) return financialServices;
    const q = searchQuery.toLowerCase();
    return financialServices.filter((s) => {
      const title = getLocalized(s.title, language).toLowerCase();
      const desc = getLocalized(s.shortDescription, language).toLowerCase();
      return title.includes(q) || desc.includes(q);
    });
  }, [financialServices, searchQuery, language]);

  const filteredAppDev = useMemo(() => {
    if (!searchQuery.trim()) return appDevOfferings;
    const q = searchQuery.toLowerCase();
    return appDevOfferings.filter((a) => {
      const title = getLocalized(a.title, language).toLowerCase();
      const desc = getLocalized(a.description, language).toLowerCase();
      const tech = a.technologies.join(" ").toLowerCase();
      return title.includes(q) || desc.includes(q) || tech.includes(q);
    });
  }, [appDevOfferings, searchQuery, language]);

  const totalResults =
    (activeTab === "all" || activeTab === "tech" ? filteredTech.length : 0) +
    (activeTab === "all" || activeTab === "financial" ? filteredFinancial.length : 0) +
    (activeTab === "all" || activeTab === "appdev" ? filteredAppDev.length : 0);

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <Container>
        {/* Main Header with Visual Accents */}
        <div className="relative mb-14 text-center max-w-4xl mx-auto">
          <SectionHeader
            badge={t("services.catalogBadge", "Katalog Layanan Lengkap")}
            title={t("services.catalogTitle", "Solusi Teknologi & Layanan Keuangan Digital")}
            subtitle={t(
              "services.catalogSubtitle",
              "Dua pilar keahlian utama Limoria Tech yang siap mendampingi operasional, transformasi digital, dan tata kelola finansial perusahaan Anda."
            )}
          />

          {/* Interactive Search & Live Filter Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "id"
                    ? "Cari layanan (contoh: Website, Audit, Tax, ERP)..."
                    : "Search services (e.g. Website, Audit, Tax, ERP)..."
                }
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 rounded-md bg-slate-100"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer",
              activeTab === "all"
                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span>
              {language === "id" ? "Semua Layanan" : "All Services"} (
              {techServices.length + financialServices.length + appDevOfferings.length})
            </span>
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer",
              activeTab === "tech"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]"
                : "bg-white text-blue-700 hover:bg-blue-50/70 border border-blue-200"
            )}
          >
            <Cpu className="w-4 h-4" />
            <span>{t("services.techTab", "Tech Services")} ({techServices.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("financial")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer",
              activeTab === "financial"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-[1.02]"
                : "bg-white text-emerald-700 hover:bg-emerald-50/70 border border-emerald-200"
            )}
          >
            <Calculator className="w-4 h-4" />
            <span>
              {t("services.financialTab", "Digital Financial Services")} ({financialServices.length})
            </span>
          </button>

          <button
            onClick={() => setActiveTab("appdev")}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all cursor-pointer",
              activeTab === "appdev"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                : "bg-white text-indigo-700 hover:bg-indigo-50/70 border border-indigo-200"
            )}
          >
            <Globe className="w-4 h-4" />
            <span>
              {t("services.appSpec", "Spesialisasi Aplikasi")} ({appDevOfferings.length})
            </span>
          </button>
        </div>

        {/* Empty Search State */}
        {totalResults === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm">
            <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-slate-800 mb-1">
              {language === "id" ? "Layanan Tidak Ditemukan" : "No Services Found"}
            </h4>
            <p className="text-sm text-slate-500 mb-6">
              {language === "id"
                ? `Tidak ada layanan yang cocok dengan kata kunci "${searchQuery}". Coba kata kunci lain atau hubungi konsultan kami.`
                : `No services matching "${searchQuery}". Please try another keyword or contact our consultants.`}
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              {language === "id" ? "Reset Pencarian" : "Clear Search"}
            </button>
          </div>
        )}

        {/* ========================================== */}
        {/* SECTION 1: TECH SERVICES                    */}
        {/* ========================================== */}
        {(activeTab === "all" || activeTab === "tech") && filteredTech.length > 0 && (
          <section id="tech-services" className="scroll-mt-24 mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-l-4 border-blue-600 pl-5 mb-10 gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider inline-flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  {t("services.pilar1Badge", "Pilar 01")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t("services.pilar1Title", "Tech Services — We Provide Solutions On Your Business")}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  {t(
                    "services.pilar1Desc",
                    "Layanan konsultasi arsitektur teknologi, riset bisnis, perencanaan strategis, dan rekayasa software terintegrasi."
                  )}
                </p>
              </div>
              <div className="shrink-0 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
                {filteredTech.length} {language === "id" ? "Layanan Aktif" : "Active Services"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTech.map((service) => {
                const Icon = iconMap[service.icon] || Cpu;
                const title = getLocalized(service.title, language);
                const shortDesc = getLocalized(service.shortDescription, language);
                const badge = service.badge ? getLocalized(service.badge, language) : null;
                const categoryName = getLocalized(service.categoryName, language);

                return (
                  <Card
                    key={service.id}
                    hoverEffect
                    className="flex flex-col justify-between border-slate-200/90 hover:border-blue-400/80 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 group bg-white"
                  >
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        {badge && (
                          <Badge variant="primary" className="py-1 px-2.5 text-xs font-semibold">
                            {badge}
                          </Badge>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                        {title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                        {shortDesc}
                      </p>

                      {/* 2 Key Feature Highlights Preview */}
                      {service.features && service.features.length > 0 && (
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                          {service.features.slice(0, 2).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              <span className="truncate">{getLocalized(feat.title, language)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {categoryName}
                      </span>
                      <Link
                        href={`/services/${service.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                      >
                        <span>{t("services.detailSpec", "Detail Spesifikasi")}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* SECTION 2: DIGITAL FINANCIAL SERVICES       */}
        {/* ========================================== */}
        {(activeTab === "all" || activeTab === "financial") && filteredFinancial.length > 0 && (
          <section id="financial-services" className="scroll-mt-24 mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-l-4 border-emerald-600 pl-5 mb-10 gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider inline-flex items-center gap-1.5 mb-1">
                  <Calculator className="w-3.5 h-3.5" />
                  {t("services.pilar2Badge", "Pilar 02")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t(
                    "services.pilar2Title",
                    "Digital Financial Services — Comprehensive Financial Reporting Expertise"
                  )}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  {t(
                    "services.pilar2Desc",
                    "Layanan profesional akuntansi, perpajakan, audit independen, valuasi aset, investigasi forensik, likuidasi, dan platform keuangan modern."
                  )}
                </p>
              </div>
              <div className="shrink-0 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                {filteredFinancial.length} {language === "id" ? "Layanan Finansial" : "Financial Services"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFinancial.map((service) => {
                const Icon = iconMap[service.icon] || Calculator;
                const title = getLocalized(service.title, language);
                const shortDesc = getLocalized(service.shortDescription, language);
                const badge = service.badge ? getLocalized(service.badge, language) : null;
                const categoryName = getLocalized(service.categoryName, language);

                return (
                  <Card
                    key={service.id}
                    hoverEffect
                    className="flex flex-col justify-between border-slate-200/90 hover:border-emerald-400/80 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 group bg-white"
                  >
                    <div>
                      {/* Top icon and badge */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        {badge && (
                          <Badge variant="success" className="py-1 px-2.5 text-xs font-semibold">
                            {badge}
                          </Badge>
                        )}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-emerald-700 transition-colors">
                        {title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                        {shortDesc}
                      </p>

                      {/* 2 Key Feature Highlights Preview */}
                      {service.features && service.features.length > 0 && (
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                          {service.features.slice(0, 2).map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span className="truncate">{getLocalized(feat.title, language)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {categoryName}
                      </span>
                      <Link
                        href={`/services/${service.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors group/link"
                      >
                        <span>{t("services.detailSpec", "Detail Spesifikasi")}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* SECTION 3: APP DEVELOPMENT SPECIALTIES     */}
        {/* ========================================== */}
        {(activeTab === "all" || activeTab === "appdev") && filteredAppDev.length > 0 && (
          <section id="app-development" className="scroll-mt-24 mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-l-4 border-indigo-600 pl-5 mb-10 gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-indigo-600 tracking-wider inline-flex items-center gap-1.5 mb-1">
                  <Globe className="w-3.5 h-3.5" />
                  {t("services.appDevBadge", "Klasifikasi Aplikasi")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t("services.appDevTitle", "Spesialisasi Pengembangan Aplikasi Kami")}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
                  {t(
                    "services.appDevSubtitle",
                    "Kami membantu mengembangkan berbagai jenis aplikasi dengan standar kinerja, keamanan, skalabilitas, dan kemudahan penggunaan."
                  )}
                </p>
              </div>
              <div className="shrink-0 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-200">
                {filteredAppDev.length} {language === "id" ? "Spesialisasi" : "Specialties"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAppDev.map((offering, idx) => {
                const Icon = iconMap[offering.icon] || Globe;
                const title = getLocalized(offering.title, language);
                const desc = getLocalized(offering.description, language);

                return (
                  <Card
                    key={idx}
                    hoverEffect
                    className="p-6 sm:p-7 flex flex-col justify-between border-slate-200/90 hover:border-indigo-400/80 hover:shadow-xl transition-all duration-300 group bg-white"
                  >
                    <div>
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold mb-5 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2.5 group-hover:text-indigo-600 transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {offering.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom Dual Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              {language === "id" ? "Konsultasi Strategis Bebas Biaya" : "Complimentary Strategic Advisory"}
            </span>

            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {t("services.ctaTitle", "Butuh Solusi Tech atau Financial Services?")}
            </h3>

            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              {t(
                "services.ctaDesc",
                "Tim konsultan teknologi dan ahli keuangan kami siap mendiskusikan kebutuhan unik perusahaan Anda."
              )}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="white" className="w-full sm:w-auto text-blue-950 font-bold shadow-lg shadow-white/10">
                  {t("services.ctaButton", "Jadwalkan Konsultasi Gratis")}
                  <ArrowRight className="w-4 h-4 text-blue-950" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6282375371268?text=Halo%20Limoria%20Tech,%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp (0823-7537-1268)</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
