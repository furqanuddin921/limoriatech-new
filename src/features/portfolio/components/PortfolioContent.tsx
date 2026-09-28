"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Layers,
  Globe,
  Sparkles,
  SearchX,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
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
      { id: "all", label: language === "id" ? "Semua Proyek" : "All Projects" },
      { id: "enterprise", label: language === "id" ? "Web & Enterprise" : "Web & Enterprise" },
      { id: "mobile", label: language === "id" ? "Aplikasi Mobile" : "Mobile Apps" },
      { id: "api", label: language === "id" ? "API & Integrasi" : "API & Integration" },
    ];
  }, [language]);

  const filteredProjects = useMemo(() => {
    if (filterCategory === "all") return projects;
    if (filterCategory === "enterprise") {
      return projects.filter((p) => p.slug === "lms-sekolah" || p.slug === "enterprise-resource-planning");
    }
    if (filterCategory === "mobile") {
      return projects.filter((p) => p.slug === "mobile-field-operations");
    }
    if (filterCategory === "api") {
      return projects.filter((p) => p.slug === "banking-integration-gateway");
    }
    return projects;
  }, [projects, filterCategory]);

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <Container>
        <SectionHeader
          badge={t("portfolio.badge", "Portofolio & Studi Kasus")}
          title={t("portfolio.title", "Solusi Nyata yang Memberikan Dampak Positif")}
          subtitle={t(
            "portfolio.subtitle",
            "Kumpulan studi kasus keberhasilan implementasi solusi teknologi informasi dan transformasi digital bersama mitra kami."
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

        {/* Project Case Studies List */}
        <div className="space-y-12 mb-20">
          {filteredProjects.map((project) => {
            const title = getLocalized(project.title, language);
            const client = getLocalized(project.client, language);
            const category = getLocalized(project.category, language);
            const summary = getLocalized(project.summary, language);
            const challenge = getLocalized(project.challenge, language);
            const solution = getLocalized(project.solution, language);
            const impactList = getLocalized(project.impact, language) || [];

            return (
              <Card
                key={project.id}
                className="p-8 sm:p-12 hover:border-blue-300 hover:shadow-xl transition-all duration-300 border-slate-200/90 bg-white"
              >
                {/* Optional Top Browser Mockup for Live Apps like LMS Sekolah */}
                {project.image && project.image.endsWith(".png") && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-lg">
                    {/* Mockup Top Window Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-4 py-1 rounded-md border border-slate-700">
                        {project.liveUrl || "https://limoriatech.com"}
                      </div>
                      <div className="w-12" />
                    </div>
                    {/* Image Preview Container */}
                    <div className="relative aspect-video max-h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="primary" className="py-1 px-3 text-xs font-bold">
                        {category}
                      </Badge>
                      <span className="text-xs font-semibold text-slate-400">
                        {t("portfolio.yearLabel", "Tahun:")} {project.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        {t("portfolio.clientLabel", "Klien:")} {client}
                      </span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Production
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {summary}
                    </p>

                    {/* Challenge & Solution Side-by-Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100/80 space-y-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                          {t("portfolio.challenge", "Tantangan")}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {challenge}
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {t("portfolio.solution", "Solusi Kami")}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact / Results */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {t("portfolio.impact", "Dampak & Hasil Nyata:")}
                      </h4>
                      <div className="space-y-2">
                        {impactList.map((imp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & Direct Visit Button */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400 mr-1">
                          {t("portfolio.techStackLabel", "Tech Stack:")}
                        </span>
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/25"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{t("portfolio.visitLive", "Kunjungi Aplikasi (Live)")}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Sidebar Outcome Card */}
                  <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                        <Layers className="w-4 h-4" /> Enterprise Outcome
                      </span>
                      <h3 className="text-xl font-bold leading-snug">
                        {t("portfolio.outcomeTitle", "Solusi Andal & Berkelanjutan")}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                        {t(
                          "portfolio.outcomeDesc",
                          "Sistem dirancang modular dengan pemantauan uptime dan kepatuhan standar keamanan data perusahaan."
                        )}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            size="md"
                            variant="white"
                            className="w-full justify-center text-blue-950 font-bold shadow-md cursor-pointer"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-950" />
                            {t("portfolio.visitLive", "Kunjungi Aplikasi (Live)")}
                          </Button>
                        </a>
                      )}
                      <Link href="/contact/" className="block">
                        <Button
                          size="md"
                          variant={project.liveUrl ? "outline" : "white"}
                          className={`w-full justify-center font-bold cursor-pointer ${
                            project.liveUrl
                              ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                              : "text-blue-950"
                          }`}
                        >
                          {t("portfolio.btnBuild", "Bangun Solusi Serupa")}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Custom Architecture Presentation
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("portfolio.ctaTitle", "Ingin Melihat Studi Kasus di Industri Spesifik Anda?")}
            </h3>
            <p className="text-sm text-blue-100/90 max-w-xl mx-auto leading-relaxed">
              {t(
                "portfolio.ctaDesc",
                "Kami memiliki rekam jejak di bidang edukasi, logistik, manufaktur, fintech, dan healthcare. Hubungi konsultan kami untuk presentasi portofolio privat."
              )}
            </p>
            <div className="pt-2">
              <Link href="/contact/">
                <Button size="lg" variant="white" className="font-bold text-blue-950 shadow-lg">
                  {t("portfolio.ctaBtn", "Jadwalkan Presentasi Portofolio")}
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
