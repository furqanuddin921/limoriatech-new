import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { getSiteConfig } from "@/lib/data/site";

export default function HeroSection() {
  const siteConfig = getSiteConfig();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-blue-50/50 via-white to-white">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-200/30 to-indigo-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" className="py-1 px-3.5 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 inline mr-1" />
                Partner Transformasi Digital
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Konsultan IT untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Mengembangkan Bisnis Anda
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Kami mendampingi Anda dalam <strong className="text-slate-800 font-semibold">perencanaan, pemilihan teknologi, pengembangan, implementasi, hingga pemeliharaan solusi IT</strong> yang tepat sesuai kebutuhan dan tujuan bisnis Anda.
            </p>

            {/* Value checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-sm font-medium text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Solusi Inovatif & Aman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Berorientasi Bisnis & Pengguna</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Teknologi Modern Teruji</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Konsultasikan Kebutuhan Anda
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services/" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Eksplorasi Solusi Kami
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Hero Graphic / Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl border border-slate-200/90 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-xl">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 leading-tight">Limoria Tech Hub</h3>
                    <p className="text-xs text-slate-500">Enterprise IT Architecture</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                  Ready to Deploy
                </span>
              </div>

              {/* Stats showcase inside hero */}
              <div className="grid grid-cols-2 gap-4 my-6">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="block text-2xl sm:text-3xl font-black text-blue-600">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 leading-tight block mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                <strong>Pendekatan Kami:</strong> Menggabungkan pengalaman, inovasi, dan teknologi terkini untuk menciptakan nilai nyata bagi efisiensi perusahaan Anda.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
