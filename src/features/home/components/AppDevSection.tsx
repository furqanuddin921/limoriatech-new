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
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getAppDevServices } from "@/lib/data/services";

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
  const { t } = useLanguage();

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
                className="flex flex-col justify-between border-slate-200/90"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    {t("appDev.techStack", "Teknologi & Framework")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
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
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {t(
                  "appDev.bannerTitle",
                  "Siap Membangun Solusi Software Khusus untuk Bisnis Anda?"
                )}
              </h3>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                {t(
                  "appDev.bannerDesc",
                  "Kami siap mendampingi Anda dari tahap perancangan arsitektur, implementasi sistem, hingga pemeliharaan jangka panjang. Semua dikembangkan secara transparan dan berstandar internasional."
                )}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-blue-200">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t("appDev.perf", "Kinerja Tinggi")}</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t("appDev.sec", "Keamanan Ketat")}</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t("appDev.scal", "Skalabilitas Mudah")}</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/contact/">
                <Button size="lg" variant="white" className="w-full sm:w-auto">
                  {t("appDev.bannerCta", "Diskusikan Proyek Anda")}
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
