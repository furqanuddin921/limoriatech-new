"use client";

import { Lightbulb, ShieldCheck, Target, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";

const valueConfigMap: Record<string, { icon: any; gradient: string }> = {
  Lightbulb: {
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-600 shadow-amber-500/25",
  },
  ShieldCheck: {
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-600 shadow-emerald-500/25",
  },
  Target: {
    icon: Target,
    gradient: "from-blue-500 to-indigo-600 shadow-blue-500/25",
  },
  Handshake: {
    icon: Handshake,
    gradient: "from-purple-500 to-indigo-600 shadow-purple-500/25",
  },
};

export default function ValueSection() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200/60">
      <Container>
        <SectionHeader
          badge={t("values.badge", "Nilai & Komitmen Kami")}
          title={t("values.title", "Mengapa Memilih Limoria Tech sebagai Technology Partner?")}
          subtitle={t(
            "values.subtitle",
            "Kami percaya bahwa teknologi bukan hanya sekadar alat, tetapi merupakan bagian penting dari strategi pertumbuhan bisnis."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.values.map((value, idx) => {
            const config = valueConfigMap[value.icon] || {
              icon: Lightbulb,
              gradient: "from-blue-500 to-indigo-600 shadow-blue-500/25",
            };
            const Icon = config.icon;

            return (
              <Card
                key={idx}
                hoverEffect
                className="text-center p-6 sm:p-8 flex flex-col items-center border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {getLocalized(value.title, language)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {getLocalized(value.description, language)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
