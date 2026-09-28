"use client";

import { Lightbulb, ShieldCheck, Target, Handshake, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";

const valueConfigMap: Record<
  string,
  { icon: any; gradient: string; borderHover: string; glow: string; accentColor: string }
> = {
  Lightbulb: {
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-600",
    borderHover: "hover:border-amber-400",
    glow: "shadow-amber-500/25",
    accentColor: "bg-amber-500",
  },
  ShieldCheck: {
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-600",
    borderHover: "hover:border-emerald-400",
    glow: "shadow-emerald-500/25",
    accentColor: "bg-emerald-500",
  },
  Target: {
    icon: Target,
    gradient: "from-blue-500 to-indigo-600",
    borderHover: "hover:border-blue-400",
    glow: "shadow-blue-500/25",
    accentColor: "bg-blue-500",
  },
  Handshake: {
    icon: Handshake,
    gradient: "from-purple-500 to-indigo-600",
    borderHover: "hover:border-purple-400",
    glow: "shadow-purple-500/25",
    accentColor: "bg-purple-500",
  },
};

export default function ValueSection() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white border-t border-slate-200/60 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <Container>
        <SectionHeader
          badge={t("values.badge", "Nilai & Komitmen Kami")}
          title={t("values.title", "Mengapa Memilih Limoria Tech sebagai Technology Partner?")}
          subtitle={t(
            "values.subtitle",
            "Kami percaya bahwa teknologi bukan hanya sekadar alat, tetapi merupakan bagian penting dari strategi pertumbuhan bisnis."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {siteConfig.values.map((value, idx) => {
            const config = valueConfigMap[value.icon] || {
              icon: Lightbulb,
              gradient: "from-blue-500 to-indigo-600",
              borderHover: "hover:border-blue-400",
              glow: "shadow-blue-500/25",
              accentColor: "bg-blue-500",
            };
            const Icon = config.icon;

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 flex flex-col items-center text-center bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${config.borderHover} group overflow-hidden`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${config.accentColor} opacity-80 group-hover:h-1.5 transition-all`} />

                {/* Ambient Glow on Hover */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} ${config.glow} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {getLocalized(value.title, language)}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {getLocalized(value.description, language)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
