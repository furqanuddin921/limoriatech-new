"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink, Layers, Globe } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getPortfolioProjects } from "@/lib/data/portfolio";
import { getLocalized } from "@/lib/utils";

export default function PortfolioContent() {
  const projects = getPortfolioProjects();
  const { t, language } = useLanguage();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          badge={t("portfolio.badge", "Portofolio & Studi Kasus")}
          title={t("portfolio.title", "Solusi Nyata yang Memberikan Dampak Positif")}
          subtitle={t(
            "portfolio.subtitle",
            "Kumpulan studi kasus keberhasilan implementasi solusi teknologi informasi dan transformasi digital bersama mitra kami."
          )}
        />

        <div className="space-y-12 mb-20">
          {projects.map((project) => {
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
                className="p-8 sm:p-12 hover:border-blue-200 transition-all border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="primary">{category}</Badge>
                      <span className="text-xs font-semibold text-slate-400">
                        {t("portfolio.yearLabel", "Tahun:")} {project.year}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {t("portfolio.clientLabel", "Klien:")} {client}
                      </span>
                      {project.liveUrl && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Production
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {summary}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1.5">
                          {t("portfolio.challenge", "Tantangan")}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5">
                          {t("portfolio.solution", "Solusi Kami")}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {solution}
                        </p>
                      </div>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        {t("portfolio.impact", "Dampak & Hasil Nyata:")}
                      </h4>
                      <div className="space-y-1.5">
                        {impactList.map((imp, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & Live URL */}
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
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>{t("portfolio.visitLive", "Kunjungi Aplikasi (Live)")}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Card */}
                  <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                        <Layers className="w-4 h-4" /> Enterprise Outcome
                      </span>
                      <h3 className="text-xl font-bold leading-snug">
                        {t("portfolio.outcomeTitle", "Solusi Andal & Berkelanjutan")}
                      </h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
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
                            className="w-full justify-center text-blue-900"
                          >
                            <ExternalLink className="w-4 h-4 text-blue-900" />
                            {t("portfolio.visitLive", "Kunjungi Aplikasi (Live)")}
                          </Button>
                        </a>
                      )}
                      <Link href="/contact/" className="block">
                        <Button
                          size="md"
                          variant={project.liveUrl ? "outline" : "white"}
                          className={`w-full justify-center ${
                            project.liveUrl
                              ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                              : "text-blue-900"
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
        <div className="rounded-3xl bg-blue-50 border border-blue-200/60 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            {t("portfolio.ctaTitle", "Ingin Melihat Studi Kasus di Industri Spesifik Anda?")}
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            {t(
              "portfolio.ctaDesc",
              "Kami memiliki rekam jejak di bidang edukasi, logistik, manufaktur, fintech, dan healthcare. Hubungi konsultan kami untuk presentasi portofolio privat."
            )}
          </p>
          <div className="pt-2">
            <Link href="/contact/">
              <Button size="lg" variant="primary">
                {t("portfolio.ctaBtn", "Jadwalkan Presentasi Portofolio")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
