"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Activity,
  Terminal,
  Server,
  Cpu,
  Layers,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";

export default function HeroSection() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/70 via-slate-50/30 to-white">
      {/* Background Tech Grid & Ambient Aurora Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-cyan-300/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <Badge variant="primary" className="py-1 px-3.5 text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 inline mr-1 animate-spin" style={{ animationDuration: '6s' }} />
                {t("hero.badge", "Partner Transformasi Digital")}
              </Badge>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                20+ Enterprise Modules
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-200">
                <Activity className="w-3 h-3 text-blue-600" />
                99.9% SLA Ready
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {t("hero.headlineStart", "Konsultan IT untuk")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                {t("hero.headlineHighlight", "Mengembangkan Bisnis Anda")}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              {t(
                "hero.subheadline",
                "Kami mendampingi Anda dalam perencanaan arsitektur, pemilihan teknologi modern, pengembangan sistem teruji, hingga pemeliharaan solusi IT yang terukur dan berkelanjutan."
              )}
            </p>

            {/* Value checklist pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-4 text-xs sm:text-sm font-semibold text-slate-700 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("hero.check1", "Solusi Inovatif & Aman")}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("hero.check2", "Berorientasi Bisnis & Pengguna")}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t("hero.check3", "Teknologi Modern Teruji")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all">
                  {t("hero.ctaConsult", "Konsultasikan Kebutuhan Anda")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6282375371268?text=Halo%20Limoria%20Tech,%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/25 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>WhatsApp Us</span>
              </a>
              <Link href="/services/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold hover:bg-white hover:border-slate-400">
                  {t("hero.ctaExplore", "Eksplorasi Solusi Kami")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic / Interactive Command Console */}
          <div className="lg:col-span-5 relative">
            {/* Glow halo behind console */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-20 -z-10" />

            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-blue-600/10">
              {/* Console Window Header (Traffic lights + node status) */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] font-semibold text-slate-500">
                    limoria-core-v2.6 // node
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Cluster
                </span>
              </div>

              {/* Brand Title Row */}
              <div className="flex items-center gap-3.5 my-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-600/25">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 leading-tight text-base sm:text-lg">
                    {t("hero.hubTitle", "Limoria Enterprise Hub")}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t("hero.hubSubtitle", "Arsitektur IT & Layanan Finansial Terpadu")}
                  </p>
                </div>
              </div>

              {/* Data Flow Pipeline Visualization */}
              <div className="p-3.5 rounded-2xl bg-slate-900 text-white my-4 font-mono text-[11px] space-y-2 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>SYSTEM_PIPELINE</span>
                  </span>
                  <span className="text-[10px] text-slate-400">STATUS: HEALTHY</span>
                </div>
                <div className="flex items-center justify-between gap-1 text-[11px] text-slate-300">
                  <span className="text-blue-400">Client UI</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="text-cyan-400">API Gateway</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="text-indigo-400">Core Services</span>
                  <span className="text-slate-500">&rarr;</span>
                  <span className="text-emerald-400">DB / Cache</span>
                </div>
                <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1">
                  <span>FastAPI + Next.js + Postgres</span>
                  <span className="text-emerald-400 font-bold">&bull; latency: 12ms</span>
                </div>
              </div>

              {/* Stats showcase inside hero */}
              <div className="grid grid-cols-2 gap-3 my-4">
                {siteConfig.stats.slice(0, 2).map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/60 hover:border-blue-200 transition-colors"
                  >
                    <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold text-slate-700 leading-tight block mt-0.5">
                      {getLocalized(stat.label, language)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Live Portfolio Highlight: LMS Sekolah */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/50 to-emerald-50/50 border border-blue-200/80 text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Production Project:
                  </span>
                  <a
                    href="https://lms.limoriatech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
                  >
                    <span>Buka LMS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-slate-600 text-[11px] leading-snug">
                  LMS Sekolah Terintegrasi (Next.js, FastAPI & PostgreSQL) aktif melayani institusi pendidikan.
                </p>
              </div>

              {/* Tech stack pills */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">FastAPI</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">Next.js</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">React</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">Redis</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
