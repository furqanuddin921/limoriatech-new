"use client";

import Link from "next/link";
import { MessageSquare, ArrowRight, MessageCircle, ShieldCheck, Zap, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";

export default function CtaSection() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-white relative">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-14 lg:p-16 text-white shadow-2xl border border-blue-900/40">
          {/* Background Ambient Glowing Orbs & Tech Grid */}
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-cyan-300 border border-blue-400/30 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t("cta.badge", "Konsultasi Tanpa Biaya")}</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {t(
                "cta.title",
                "Mulai Transformasi Digital & Kembangkan Bisnis Anda Bersama Kami"
              )}
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              {t(
                "cta.desc",
                "Diskusikan tantangan teknologi perusahaan Anda dengan tim konsultan IT kami. Kami siap memberikan solusi yang terukur, tepat waktu, dan efisien."
              )}
            </p>

            {/* Trust commitments */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Respon &lt; 24 Jam</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Arsitektur Skalabel</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="white"
                  className="w-full sm:w-auto font-bold text-slate-950 shadow-lg shadow-white/10 hover:bg-slate-100 hover:scale-[1.02] transition-all"
                >
                  {t("cta.btnContact", "Hubungi Kami Sekarang")}
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Limoria%20Tech,%20saya%20ingin%20konsultasi%20layanan%20IT.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>{t("cta.btnWa", "Chat via WhatsApp")}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
