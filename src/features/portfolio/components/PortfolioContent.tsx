"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  SearchX,
  Layers,
  Smartphone,
  Cpu,
  Globe,
  Database,
  Car,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioProjects } from "@/lib/data/portfolio";
import { getLocalized, cn } from "@/lib/utils";

export default function PortfolioContent() {
  const projects = getPortfolioProjects();
  const { t, language } = useLanguage();
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return [
      { id: "all", label: language === "id" ? "🗂️ Semua Proyek" : "🗂️ All Projects" },
      { id: "enterprise", label: language === "id" ? "🌐 Web & Enterprise" : "🌐 Web & Enterprise" },
      { id: "mobile", label: language === "id" ? "📱 Aplikasi Mobile" : "📱 Mobile Apps" },
      { id: "api", label: language === "id" ? "⚡ API & Integrasi" : "⚡ API & Integration" },
    ];
  }, [language]);

  const filteredProjects = useMemo(() => {
    if (filterCategory === "all") return projects;
    if (filterCategory === "enterprise") {
      return projects.filter(
        (p) =>
          p.slug === "lms-sekolah" ||
          p.slug === "restoqr" ||
          p.slug === "enterprise-resource-planning" ||
          p.slug === "aplikasi-kasir-ai" ||
          p.slug === "event-eo-ai" ||
          p.slug === "black-auto-rental"
      );
    }
    if (filterCategory === "mobile") {
      return projects.filter(
        (p) =>
          p.slug === "mobile-field-operations" ||
          p.slug === "kasir-ai-mobile"
      );
    }
    if (filterCategory === "api") {
      return projects.filter((p) => p.slug === "banking-integration-gateway");
    }
    return projects;
  }, [projects, filterCategory]);

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge={t("portfolio.badge", "✦ Portofolio & Studi Kasus")}
          title={t("portfolio.title", "Karya Nyata, Dampak Terukur")}
          subtitle={t(
            "portfolio.subtitle",
            "Setiap proyek adalah bukti komitmen kami — dari tantangan bisnis yang kompleks hingga solusi digital yang bekerja nyata di lapangan."
          )}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer",
                filterCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Card Grid */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400 gap-4">
            <SearchX className="w-12 h-12 opacity-40" />
            <p className="text-sm font-medium">
              {language === "id" ? "Tidak ada proyek ditemukan." : "No projects found."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredProjects.map((project) => {
              const title = getLocalized(project.title, language);
              const category = getLocalized(project.category, language);
              const summary = getLocalized(project.summary, language);
              const client = getLocalized(project.client, language);
              const isPng = project.image?.endsWith(".png");

              // Pick placeholder gradient & icon based on slug/category
              const placeholderConfig: Record<string, { gradient: string; icon: React.ReactNode; accent: string }> = {
                "enterprise-resource-planning": {
                  gradient: "from-violet-600 via-purple-700 to-indigo-800",
                  icon: <Database className="w-12 h-12 text-white/80" />,
                  accent: "ERP System",
                },
                "mobile-field-operations": {
                  gradient: "from-emerald-500 via-teal-600 to-cyan-700",
                  icon: <Smartphone className="w-12 h-12 text-white/80" />,
                  accent: "Mobile App",
                },
                "kasir-ai-mobile": {
                  gradient: "from-green-500 via-emerald-600 to-teal-700",
                  icon: <Smartphone className="w-12 h-12 text-white/80" />,
                  accent: "Flutter POS App",
                },
                "banking-integration-gateway": {
                  gradient: "from-orange-500 via-amber-600 to-yellow-700",
                  icon: <Cpu className="w-12 h-12 text-white/80" />,
                  accent: "API Gateway",
                },
                "black-auto-rental": {
                  gradient: "from-amber-600 via-orange-600 to-slate-900",
                  icon: <Car className="w-12 h-12 text-white/80" />,
                  accent: "Car Rental Platform",
                },
              };

              const placeholder = placeholderConfig[project.slug] ?? {
                gradient: "from-blue-600 via-indigo-700 to-slate-800",
                icon: <Layers className="w-12 h-12 text-white/80" />,
                accent: "Enterprise Solution",
              };

              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}/`}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Image Area */}
                  {isPng ? (
                    <div className="relative w-full aspect-video overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={project.image}
                        alt={title}
                        fill
                        className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    /* Default Placeholder — gradient + icon + label */
                    <div className={`relative w-full aspect-video overflow-hidden shrink-0 bg-gradient-to-br ${placeholder.gradient} flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity`}>
                      {/* Decorative circles */}
                      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
                      <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full bg-white/5 blur-2xl" />
                      {/* Grid dots pattern */}
                      <div className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {placeholder.icon}
                        </div>
                        <div>
                          <p className="text-white font-extrabold text-base tracking-tight leading-tight">
                            {project.techStack.slice(0, 2).join(" · ")}
                          </p>
                          <p className="text-white/60 text-xs font-medium mt-0.5">
                            {placeholder.accent}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    {/* Category Badge + Live badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="primary" className="text-xs font-semibold uppercase tracking-wide px-3 py-1">
                        {category}
                      </Badge>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Client + Year meta */}
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                      <Globe className="w-3 h-3 shrink-0" />
                      <span className="truncate">{client}</span>
                      <span className="text-slate-300">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      {title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
                      {summary}
                    </p>

                    {/* Tech Stack pills — compact, max 3 */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-400 text-[11px] font-medium">
                          +{project.techStack.length - 3} lainnya
                        </span>
                      )}
                    </div>

                    {/* CTA Link */}
                    <div className="pt-3 border-t border-slate-100 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all duration-200">
                        {language === "id" ? "Baca Studi Kasus →" : "Read Case Study →"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Konsultasi Portofolio Privat
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("portfolio.ctaTitle", "Ada Tantangan Bisnis yang Belum Terpecahkan?")}
            </h3>
            <p className="text-sm text-blue-100/90 max-w-xl mx-auto leading-relaxed">
              {t(
                "portfolio.ctaDesc",
                "Kami berpengalaman di berbagai industri — edukasi, logistik, manufaktur, fintech, hingga F&B. Ceritakan kebutuhan Anda, dan kami akan siapkan studi kasus yang relevan khusus untuk bisnis Anda."
              )}
            </p>
            <div className="pt-2">
              <Link href="/contact/">
                <Button size="lg" variant="white" className="font-bold text-blue-950 shadow-lg">
                  {t("portfolio.ctaBtn", "Diskusikan Proyek Anda Sekarang")}
                  <ArrowRight className="w-4 h-4 text-blue-950" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
