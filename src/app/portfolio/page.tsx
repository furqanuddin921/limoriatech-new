import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, ExternalLink, Layers } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getPortfolioProjects } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus",
  description:
    "Lihat bagaimana Limoria Tech membantu berbagai perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi dan sistem enterprise.",
};

export default function PortfolioPage() {
  const projects = getPortfolioProjects();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          badge="Portofolio & Studi Kasus"
          title="Solusi Nyata yang Memberikan Dampak Positif"
          subtitle="Kumpulan studi kasus keberhasilan implementasi solusi teknologi informasi dan transformasi digital bersama mitra kami."
        />

        <div className="space-y-12 mb-20">
          {projects.map((project) => (
            <Card key={project.id} className="p-8 sm:p-12 hover:border-blue-200 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="primary">{project.category}</Badge>
                    <span className="text-xs font-semibold text-slate-400">
                      Tahun: {project.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      Klien: {project.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {project.summary}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1.5">
                        Tantangan
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5">
                        Solusi Kami
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Dampak & Hasil Nyata:
                    </h4>
                    <div className="space-y-1.5">
                      {project.impact.map((imp, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 mr-1">
                      Tech Stack:
                    </span>
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                      <Layers className="w-4 h-4" /> Enterprise Outcome
                    </span>
                    <h3 className="text-xl font-bold leading-snug">
                      Solusi Andal & Berkelanjutan
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Sistem dirancang modular dengan pemantauan uptime dan kepatuhan standar keamanan data perusahaan.
                    </p>
                  </div>

                  <Link href="/contact/">
                    <Button size="md" variant="white" className="w-full justify-center">
                      Bangun Solusi Serupa
                      <ArrowRight className="w-4 h-4 text-blue-900" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-blue-50 border border-blue-200/60 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Ingin Melihat Studi Kasus di Industri Spesifik Anda?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Kami memiliki rekam jejak di bidang logistik, manufaktur, fintech, dan healthcare. Hubungi konsultan kami untuk presentasi portofolio privat.
          </p>
          <div className="pt-2">
            <Link href="/contact/">
              <Button size="lg" variant="primary">
                Jadwalkan Presentasi Portofolio
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
