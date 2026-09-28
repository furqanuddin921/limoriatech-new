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
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getTechServices, getFinancialServices } from "@/lib/data/services";
import { cn } from "@/lib/utils";

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
  const { t } = useLanguage();
  const techServices = getTechServices();
  const financialServices = getFinancialServices();

  const currentServices = activeTab === "tech" ? techServices : financialServices;

  return (
    <section id="services-overview" className="py-20 bg-slate-50/60 border-y border-slate-200/60">
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
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
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
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              <Calculator className="w-4 h-4" />
              <span>{t("services.financialTab", "Digital Financial Services")} ({financialServices.length})</span>
            </button>
          </div>
        </div>

        {/* Category Header Banner */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          {activeTab === "tech" ? (
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
                Tech Service
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {t("services.techHeading", "We Provide Solutions On Your Business")}
              </h3>
              <p className="text-sm text-slate-600">
                {t(
                  "services.techSubtitle",
                  "Layanan riset, strategi, arsitektur, dan rekayasa perangkat lunak untuk akselerasi pertumbuhan bisnis Anda."
                )}
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">
                Digital Financial Services
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {t("services.financialHeading", "Comprehensive Financial Reporting Expertise")}
              </h3>
              <p className="text-sm text-slate-600">
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
                      <Badge variant={activeTab === "financial" ? "success" : "primary"}>
                        {service.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    {service.categoryName}
                  </span>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group"
                  >
                    <span>{t("services.learnMore", "Pelajari")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/services/">
            <Button size="lg" variant="outline">
              {t("services.viewAll", "Jelajahi Seluruh Layanan Tech & Financial →")}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
