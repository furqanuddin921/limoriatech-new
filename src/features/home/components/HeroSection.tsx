"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
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
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/60 via-white to-slate-50/40">
      {/* Background Decorative Blur & Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-emerald-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" className="py-1 px-3.5 text-xs font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 inline mr-1" />
                {t("hero.badge", "Partner Transformasi Digital")}
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                20+ Enterprise Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              {t("hero.headlineStart", "Konsultan IT untuk")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                {t("hero.headlineHighlight", "Mengembangkan Bisnis Anda")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t(
                "hero.subheadline",
                "Kami mendampingi Anda dalam perencanaan, pemilihan teknologi, pengembangan, implementasi, hingga pemeliharaan solusi IT yang tepat sesuai kebutuhan dan tujuan bisnis Anda."
              )}
            </p>

            {/* Value checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-6 text-sm font-semibold text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                <span>{t("hero.check1", "Solusi Inovatif & Aman")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                <span>{t("hero.check2", "Berorientasi Bisnis & Pengguna")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                <span>{t("hero.check3", "Teknologi Modern Teruji")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto font-bold shadow-lg shadow-blue-600/25">
                  {t("hero.ctaConsult", "Konsultasikan Kebutuhan Anda")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6282375371268?text=Halo%20Limoria%20Tech,%20saya%20tertarik%20dengan%20layanan%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <Link href="/services/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  {t("hero.ctaExplore", "Eksplorasi Solusi Kami")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic / Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/15 transition-shadow">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-600/25">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">
                      {t("hero.hubTitle", "Limoria Tech Hub")}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t("hero.hubSubtitle", "Arsitektur IT Enterprise")}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("hero.hubBadge", "Ready to Deploy")}
                </span>
              </div>

              {/* Stats showcase inside hero */}
              <div className="grid grid-cols-2 gap-3.5 my-6">
                {siteConfig.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100/90 hover:bg-blue-50/50 hover:border-blue-100 transition-colors"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-blue-600">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 leading-tight block mt-1">
                      {getLocalized(stat.label, language)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack pills */}
              <div className="pt-2 pb-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">FastAPI</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">Next.js</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">React</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">Redis</span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100">Docker</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                {t(
                  "hero.hubApproach",
                  "Pendekatan Kami: Menggabungkan pengalaman, inovasi, dan teknologi terkini untuk menciptakan nilai nyata bagi efisiensi perusahaan Anda."
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
