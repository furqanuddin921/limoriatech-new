"use client";

import Link from "next/link";
import {
  Globe,
  Smartphone,
  Monitor,
  Building2,
  Database,
  Network,
  Wrench,
  CheckCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getAppDevServices } from "@/lib/data/services";
import { getLocalized } from "@/lib/utils";

const appIconMap: Record<string, any> = {
  Globe,
  Smartphone,
  Monitor,
  Building2,
  Database,
  Network,
  Wrench,
};

export default function AppDevSection() {
  const appServices = getAppDevServices();
  const { t, language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <Container>
        <SectionHeader
          badge={t("appDev.badge", "Solusi Pengembangan Aplikasi")}
          title={t("appDev.title", "Pengembangan Aplikasi Berkualitas Tinggi & Skalabel")}
          subtitle={t(
            "appDev.subtitle",
            "Setiap aplikasi dikembangkan dengan memperhatikan kinerja, keamanan, skalabilitas, kemudahan penggunaan, dan kebutuhan bisnis agar menjadi solusi teknologi yang tepat dan berkelanjutan."
          )}
        />

        {/* 7 Application Development Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {appServices.map((item, idx) => {
            const Icon = appIconMap[item.icon] || Globe;

            return (
              <Card
                key={idx}
                hoverEffect
                className="flex flex-col justify-between border-slate-200/90 hover:border-indigo-400/80 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 group bg-white"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold mb-5 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                    {getLocalized(item.title, language)}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {getLocalized(item.description, language)}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {t("appDev.techStack", "Teknologi & Framework")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
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

        {/* Highlight Banner / Principles */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t(
                  "appDev.bannerTitle",
                  "Siap Membangun Solusi Software Khusus untuk Bisnis Anda?"
                )}
              </h3>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-2xl">
                {t(
                  "appDev.bannerDesc",
                  "Kami siap mendampingi Anda dari tahap perancangan arsitektur, implementasi sistem, hingga pemeliharaan jangka panjang. Semua dikembangkan secara transparan dan berstandar internasional."
                )}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-semibold text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
                  <span>{t("appDev.perf", "Kinerja Tinggi")}</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
                  <span>{t("appDev.sec", "Keamanan Ketat")}</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-400" />
                  <span>{t("appDev.scal", "Skalabilitas Mudah")}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:justify-end">
              <Link href="/contact/" className="w-full">
                <Button size="lg" variant="white" className="w-full justify-center font-bold text-blue-950 shadow-md">
                  {t("appDev.bannerCta", "Diskusikan Proyek Anda")}
                  <ArrowRight className="w-4 h-4 text-blue-950" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6282375371268?text=Halo%20Limoria%20Tech,%20saya%20tertarik%20dengan%20pengembangan%20aplikasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
