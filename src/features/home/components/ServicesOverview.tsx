"use client";

import { useState } from "react";
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
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getTechServices, getFinancialServices } from "@/lib/data/services";
import { cn, getLocalized } from "@/lib/utils";

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

export default function ServicesOverview() {
  const [activeTab, setActiveTab] = useState<"tech" | "financial">("tech");
  const { t, language } = useLanguage();
  const techServices = getTechServices();
  const financialServices = getFinancialServices();

  const currentServices = activeTab === "tech" ? techServices : financialServices;
  const isFinancial = activeTab === "financial";

  return (
    <section id="services-overview" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-y border-slate-200/60">
      <Container>
        <SectionHeader
          badge={t("services.badge", "Layanan & Solusi Terintegrasi")}
          title={t("services.title", "Solusi Teknologi & Layanan Pelaporan Keuangan")}
          subtitle={t(
            "services.subtitle",
            "Limoria Tech menghadirkan keahlian ganda: konsultasi pengembangan software modern (Tech Service) serta layanan pelaporan keuangan digital komprehensif (Digital Financial Services)."
          )}
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("tech")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer",
                activeTab === "tech"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Cpu className="w-4 h-4" />
              <span>{t("services.techTab", "Tech Services")} ({techServices.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("financial")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer",
                activeTab === "financial"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Calculator className="w-4 h-4" />
              <span>{t("services.financialTab", "Digital Financial Services")} ({financialServices.length})</span>
            </button>
          </div>
        </div>

        {/* Category Header Banner */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          {activeTab === "tech" ? (
            <div className="space-y-1.5">
              <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider inline-flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Tech Service
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {t("services.techHeading", "We Provide Solutions On Your Business")}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  "services.techSubtitle",
                  "Layanan riset, strategi, arsitektur, dan rekayasa perangkat lunak untuk akselerasi pertumbuhan bisnis Anda."
                )}
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              <span className="text-xs uppercase font-extrabold text-emerald-600 tracking-wider inline-flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" /> Digital Financial Services
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {t("services.financialHeading", "Comprehensive Financial Reporting Expertise")}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t(
                  "services.financialSubtitle",
                  "Keahlian pelaporan keuangan, perpajakan, audit, litigasi, dan platform keuangan digital terpercaya."
                )}
              </p>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentServices.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Cpu;
            const title = getLocalized(service.title, language);
            const shortDesc = getLocalized(service.shortDescription, language);
            const badge = service.badge ? getLocalized(service.badge, language) : null;
            const categoryName = getLocalized(service.categoryName, language);

            return (
              <Card
                key={service.id}
                hoverEffect
                className={`flex flex-col justify-between border-slate-200/90 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 group bg-white ${
                  isFinancial ? "hover:border-emerald-400/80" : "hover:border-blue-400/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center font-bold text-white shadow-md group-hover:scale-105 transition-transform ${
                        isFinancial
                          ? "bg-gradient-to-br from-emerald-500 to-teal-600 shadow-emerald-500/25"
                          : "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-500/25"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {badge && (
                      <Badge variant={isFinancial ? "success" : "primary"} className="py-1 px-2.5 text-xs font-semibold">
                        {badge}
                      </Badge>
                    )}
                  </div>

                  <h3
                    className={`text-lg sm:text-xl font-bold text-slate-900 mb-2.5 transition-colors ${
                      isFinancial ? "group-hover:text-emerald-700" : "group-hover:text-blue-600"
                    }`}
                  >
                    {title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {shortDesc}
                  </p>

                  {/* Feature preview */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                      {service.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isFinancial ? "text-emerald-600" : "text-blue-600"
                            }`}
                          />
                          <span className="truncate">{getLocalized(feat.title, language)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {categoryName}
                  </span>
                  <Link
                    href={`/services/${service.slug}/`}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors group/link ${
                      isFinancial ? "text-emerald-700 hover:text-emerald-900" : "text-blue-600 hover:text-blue-800"
                    }`}
                  >
                    <span>{t("services.learnMore", "Pelajari")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/services/">
            <Button size="lg" variant="outline" className="font-semibold shadow-xs hover:border-slate-400">
              {t("services.viewAll", "Jelajahi Seluruh Layanan Tech & Financial →")}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
