"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Users,
  Zap,
  Sparkles,
  Search,
  Compass,
  Code2,
  Rocket,
  MessageCircle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";
import { getLocalized } from "@/lib/utils";

export default function AboutContent() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  const workflowSteps = [
    {
      num: "01",
      icon: Search,
      title: language === "id" ? "Discovery & Audit" : "Discovery & Assessment",
      desc:
        language === "id"
          ? "Analisis menyeluruh proses bisnis, evaluasi infrastruktur sistem eksisting, dan pemetaan tantangan operasional."
          : "In-depth operational audit, evaluating legacy infrastructure, and pinpointing core business hurdles.",
    },
    {
      num: "02",
      icon: Compass,
      title: language === "id" ? "Blueprint & Arsitektur" : "Strategic Architecture",
      desc:
        language === "id"
          ? "Penyusunan arsitektur sistem modular, seleksi tech stack teruji, dan roadmap proyek terukur."
          : "Formulating modular system blueprints, selecting validated tech stacks, and drafting timeline roadmaps.",
    },
    {
      num: "03",
      icon: Code2,
      title: language === "id" ? "Rekayasa & Quality Audit" : "Agile Engineering & QA",
      desc:
        language === "id"
          ? "Pengembangan sistem dengan standar clean code, pengujian keamanan siber ketat, dan optimasi performa."
          : "Clean-code engineering, rigorous cybersecurity vulnerability audits, and stress testing.",
    },
    {
      num: "04",
      icon: Rocket,
      title: language === "id" ? "Deployment & Maintenance" : "Deployment & SLA Support",
      desc:
        language === "id"
          ? "Rilis ke lingkungan produksi, pemantauan uptime proaktif, transfer pengetahuan tim, dan pemeliharaan berkelanjutan."
          : "Production rollout, proactive uptime monitoring, team training, and continuous maintenance SLAs.",
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader
            badge={t("about.badge", "Tentang Limoria Tech")}
            title={t("about.title", "Konsultan IT untuk Mengembangkan Bisnis Anda")}
            subtitle={t(
              "about.subtitle",
              "Kami menyediakan layanan konsultasi dan solusi teknologi informasi secara menyeluruh untuk membantu perusahaan mengidentifikasi, memahami, dan menyelesaikan berbagai tantangan di bidang teknologi informasi."
            )}
          />
        </div>

        {/* Main Story & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {t(
                "about.heading",
                "Pendamping Transformasi Digital dari Awal hingga Pemeliharaan"
              )}
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              {t(
                "about.p1",
                "Kami siap mendampingi Anda dalam perencanaan, pemilihan teknologi, pengembangan, implementasi, hingga pemeliharaan solusi IT yang tepat sesuai kebutuhan dan tujuan bisnis Anda."
              )}
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              {t(
                "about.p2",
                "Dengan menggabungkan pengalaman, inovasi, dan teknologi terkini, kami membantu bisnis meningkatkan efisiensi operasional, mempercepat transformasi digital, serta menciptakan solusi teknologi yang memberikan nilai nyata bagi perusahaan."
              )}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-bold text-slate-900">
                    {t("about.check1Title", "Inovatif & Berkualitas:")}
                  </strong>{" "}
                  {t(
                    "about.check1Desc",
                    "Pendekatan berorientasi pada kebutuhan pengguna dan tujuan bisnis jangka panjang."
                  )}
                </span>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-bold text-slate-900">
                    {t("about.check2Title", "Terukur & Terintegrasi:")}
                  </strong>{" "}
                  {t(
                    "about.check2Desc",
                    "Menghubungkan proses bisnis, pengelolaan data, dan sistem platform digital."
                  )}
                </span>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong className="font-bold text-slate-900">
                    {t("about.check3Title", "Strategic Technology Partner:")}
                  </strong>{" "}
                  {t(
                    "about.check3Desc",
                    "Memastikan teknologi terus berkembang mengikuti ekspansi bisnis Anda."
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t("about.visionTitle", "Visi Kami")}
                  </h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    {t(
                      "about.visionDesc",
                      "Menjadi mitra konsultasi teknologi informasi terdepan dan terpercaya yang mendorong akselerasi bisnis di Asia Tenggara."
                    )}
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-slate-800">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {t("about.missionTitle", "Misi Kami")}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {t(
                      "about.missionDesc",
                      "Menghadirkan solusi IT berkualitas tinggi, aman, dan tepat guna melalui pemanfaatan teknologi mutakhir dan tim berintegritas."
                    )}
                  </p>
                </div>
              </Card>

              <Card className="col-span-2 bg-white border-slate-200 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                      {t("about.partnerTitle", "Technology Partner untuk Pertumbuhan")}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400">
                      {t("about.partnerSub", "Kemitraan Jangka Panjang")}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t(
                    "about.partnerDesc",
                    "Kami percaya bahwa teknologi bukan hanya sekadar alat, tetapi merupakan bagian penting dari strategi pertumbuhan bisnis. Kami hadir mendampingi Anda dari merancang strategi hingga memastikan teknologi dapat terus berkembang mengikuti kebutuhan bisnis."
                  )}
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* 4-Step Methodology Framework */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">
              {language === "id" ? "Metodologi Kerja" : "Our Methodology"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {language === "id"
                ? "Bagaimana Kami Membantu Bisnis Anda"
                : "How We Deliver Engineering Excellence"}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              {language === "id"
                ? "Alur kerja terstruktur yang memastikan setiap solusi diselesaikan tepat waktu, sesuai anggaran, dan teruji keandalannya."
                : "A proven structured delivery framework ensuring systems are deployed on-time, within budget, and built to scale."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;

              return (
                <Card
                  key={idx}
                  hoverEffect
                  className="p-6 bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-slate-200">{step.num}</span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 mb-20 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block text-3xl sm:text-4xl font-black text-blue-600">
                  {stat.value}
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  {getLocalized(stat.label, language)}
                </span>
                {stat.description && (
                  <span className="block text-xs text-slate-500">
                    {getLocalized(stat.description, language)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA with WhatsApp Option */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white p-8 sm:p-14 text-center max-w-3xl mx-auto space-y-5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              Strategic Partnership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("about.ctaTitle", "Ingin Berdiskusi dengan Konsultan Kami?")}
            </h3>
            <p className="text-sm text-blue-100/90 max-w-xl mx-auto leading-relaxed">
              {t(
                "about.ctaDesc",
                "Jadwalkan sesi konsultasi untuk memetakan arsitektur dan kebutuhan IT bisnis Anda."
              )}
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="white" className="w-full sm:w-auto font-bold text-blue-950 shadow-lg">
                  {t("about.ctaBtn", "Hubungi Kami Sekarang")}
                  <ArrowRight className="w-4 h-4 text-blue-950" />
                </Button>
              </Link>
              <a
                href="https://wa.me/6282375371268?text=Halo%20Limoria%20Tech,%20saya%20ingin%20berkonsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
