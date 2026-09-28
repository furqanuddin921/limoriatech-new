"use client";

import { Lightbulb, ShieldCheck, Target, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";

const valueIconMap: Record<string, any> = {
  Lightbulb,
  ShieldCheck,
  Target,
  Handshake,
};

export default function ValueSection() {
  const siteConfig = getSiteConfig();
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
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
            const Icon = valueIconMap[value.icon] || Lightbulb;

            return (
              <Card key={idx} hoverEffect className="text-center p-6 sm:p-8 flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
