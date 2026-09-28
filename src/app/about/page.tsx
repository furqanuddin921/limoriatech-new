import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Target, Users, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { getSiteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
};

export default function AboutPage() {
  const siteConfig = getSiteConfig();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader
            badge="Tentang Limoria Tech"
            title="Konsultan IT untuk Mengembangkan Bisnis Anda"
            subtitle="Kami menyediakan layanan konsultasi dan solusi teknologi informasi secara menyeluruh untuk membantu perusahaan mengidentifikasi, memahami, dan menyelesaikan berbagai tantangan di bidang teknologi informasi."
          />
        </div>

        {/* Main Story & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pendamping Transformasi Digital dari Awal hingga Pemeliharaan
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Kami siap mendampingi Anda dalam <strong className="text-slate-800 font-semibold">perencanaan, pemilihan teknologi, pengembangan, implementasi, hingga pemeliharaan solusi IT</strong> yang tepat sesuai kebutuhan dan tujuan bisnis Anda.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Dengan menggabungkan pengalaman, inovasi, dan teknologi terkini, kami membantu bisnis meningkatkan efisiensi operasional, mempercepat transformasi digital, serta menciptakan solusi teknologi yang memberikan nilai nyata bagi perusahaan.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Inovatif & Berkualitas:</strong> Pendekatan berorientasi pada kebutuhan pengguna dan tujuan bisnis jangka panjang.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Terukur & Terintegrasi:</strong> Menghubungkan proses bisnis, pengelolaan data, dan sistem platform digital.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">
                  <strong>Strategic Technology Partner:</strong> Memastikan teknologi terus berkembang mengikuti ekspansi bisnis Anda.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-600 text-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <Target className="w-8 h-8 text-blue-200 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Visi Kami</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    Menjadi mitra konsultasi teknologi informasi terdepan dan terpercaya yang mendorong akselerasi bisnis di Asia Tenggara.
                  </p>
                </div>
              </Card>

              <Card className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <Zap className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Misi Kami</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Menghadirkan solusi IT berkualitas tinggi, aman, dan tepat guna melalui pemanfaatan teknologi mutakhir dan tim berintegritas.
                  </p>
                </div>
              </Card>

              <Card className="col-span-2 bg-slate-50 border-slate-200 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Technology Partner untuk Pertumbuhan</h3>
                    <p className="text-xs text-slate-500">Kemitraan Jangka Panjang</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Kami percaya bahwa teknologi bukan hanya sekadar alat, tetapi merupakan bagian penting dari strategi pertumbuhan bisnis. Kami hadir mendampingi Anda dari merancang strategi hingga memastikan teknologi dapat terus berkembang mengikuti kebutuhan bisnis.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block text-3xl sm:text-4xl font-extrabold text-blue-600">
                  {stat.value}
                </span>
                <span className="block text-sm font-bold text-slate-800">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="block text-xs text-slate-500">
                    {stat.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Ingin Berdiskusi dengan Konsultan Kami?
          </h3>
          <p className="text-sm text-slate-600">
            Jadwalkan sesi konsultasi untuk memetakan arsitektur dan kebutuhan IT bisnis Anda.
          </p>
          <div className="pt-2">
            <Link href="/contact/">
              <Button size="lg" variant="primary">
                Hubungi Kami Sekarang
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
