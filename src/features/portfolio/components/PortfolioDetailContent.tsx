"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Calendar,
  Building2,
  ChevronRight,
  MessageCircle,
  Globe,
  Sparkles,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/utils";
import { getPortfolioProjects } from "@/lib/data/portfolio";
import type { ProjectItem } from "@/types/portfolio.types";

interface PortfolioDetailContentProps {
  project: ProjectItem;
}

export default function PortfolioDetailContent({ project }: PortfolioDetailContentProps) {
  const { language } = useLanguage();
  const allProjects = getPortfolioProjects();

  const title = getLocalized(project.title, language);
  const client = getLocalized(project.client, language);
  const category = getLocalized(project.category, language);
  const summary = getLocalized(project.summary, language);
  const challenge = getLocalized(project.challenge, language);
  const solution = getLocalized(project.solution, language);
  const impactList = getLocalized(project.impact, language) ?? [];
  const modules = project.modules ?? [];

  const relatedProjects = allProjects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const waMessage = encodeURIComponent(
    `Halo Limoria Tech, saya ingin berkonsultasi mengenai proyek serupa seperti ${title}.`
  );

  return (
    <div className="pt-5 sm:pt-6 lg:pt-8 pb-16 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <Container>
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-3.5 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            {language === "id" ? "Beranda" : "Home"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <Link href="/portfolio/" className="hover:text-blue-600 transition-colors">
            {language === "id" ? "Portofolio" : "Portfolio"}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
          <span className="text-slate-900 font-semibold truncate max-w-xs">{title}</span>
        </nav>

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/portfolio/"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all bg-white hover:bg-slate-50/80 px-3.5 py-1.5 rounded-lg border border-slate-200/90 hover:border-blue-300 shadow-2xs hover:shadow-xs w-fit"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-translate-x-0.5 transition-all" />
            <span>{language === "id" ? "Kembali ke Semua Portofolio" : "Back to All Portfolio"}</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mb-12 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="primary" className="py-1 px-3 text-xs font-bold">
              {category}
            </Badge>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <Building2 className="w-3.5 h-3.5" />
              {client}
            </span>
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Production
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {summary}
          </p>
        </div>

        {/* Hero Image / Browser Mockup */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900">
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-4 py-1 rounded-md border border-slate-700">
              {project.liveUrl ?? `https://limoriatech.com/portfolio/${project.slug}/`}
            </div>
            <div className="w-12" />
          </div>
          {/* Image */}
          <div className="relative w-full aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
            <Image
              src={project.image}
              alt={title}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-7 rounded-3xl bg-rose-50/60 border border-rose-100 space-y-3">
                <div className="flex items-center gap-2.5 text-rose-700 font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>{language === "id" ? "Tantangan" : "Challenge"}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{challenge}</p>
              </div>
              <div className="p-7 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-3">
                <div className="flex items-center gap-2.5 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>{language === "id" ? "Solusi Kami" : "Our Solution"}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{solution}</p>
              </div>
            </div>

            {/* Key Modules (optional) */}
            {modules.length > 0 && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {language === "id" ? "Modul & Fitur Utama" : "Key Modules & Features"}
                  </h3>
                  <span className="text-xs font-bold text-slate-400">
                    {modules.length} {language === "id" ? "Modul" : "Modules"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {modules.map((mod, idx) => (
                    <Card
                      key={idx}
                      hoverEffect
                      className="p-6 bg-white border-slate-200 hover:border-blue-300 transition-all shadow-sm"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-base mb-1.5">
                            {getLocalized(mod.title, language)}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {getLocalized(mod.description, language)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Impact & Results */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  {language === "id" ? "Dampak & Hasil Nyata" : "Impact & Measurable Results"}
                </h3>
                <span className="text-xs font-semibold text-slate-500">{impactList.length} Metrics</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {impactList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-slate-800 text-xs font-semibold transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Outcome Card */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">
                  <Layers className="w-4 h-4" />
                  Enterprise Outcome
                </span>
                <h4 className="text-xl font-bold leading-snug">
                  {language === "id" ? "Solusi Andal & Berkelanjutan" : "Reliable & Scalable Solution"}
                </h4>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                  {language === "id"
                    ? "Sistem dirancang modular dengan pemantauan uptime dan kepatuhan standar keamanan data perusahaan."
                    : "System is architected with modular design, uptime monitoring, and enterprise data security compliance."}
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="md"
                      variant="white"
                      className="w-full justify-center text-blue-950 font-bold shadow-md cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      {language === "id" ? "Kunjungi Aplikasi (Live)" : "Visit Live App"}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                )}
                <a
                  href={`https://wa.me/6282375371268?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === "id" ? "Konsultasi via WhatsApp" : "Chat on WhatsApp"}</span>
                </a>
                <Link href="/contact/" className="block">
                  <Button
                    size="md"
                    variant="outline"
                    className="w-full justify-center font-bold border-slate-700 text-slate-200 hover:bg-slate-800 cursor-pointer"
                  >
                    {language === "id" ? "Bangun Solusi Serupa" : "Build Similar Solution"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Project Meta */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
              <h5 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
                {language === "id" ? "Detail Proyek" : "Project Details"}
              </h5>
              <dl className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between">
                  <dt className="font-semibold text-slate-500">{language === "id" ? "Klien" : "Client"}</dt>
                  <dd className="font-medium text-slate-900 text-right max-w-[60%]">{client}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-slate-500">{language === "id" ? "Kategori" : "Category"}</dt>
                  <dd className="font-medium text-slate-900 text-right max-w-[60%]">{category}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-slate-500">{language === "id" ? "Tahun" : "Year"}</dt>
                  <dd className="font-medium text-slate-900">{project.year}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-slate-500">Tech Stack</dt>
                  <dd className="font-medium text-slate-900 text-right max-w-[60%]">
                    {project.techStack.slice(0, 3).join(", ")}
                    {project.techStack.length > 3 && ` +${project.techStack.length - 3}`}
                  </dd>
                </div>
                {project.liveUrl && (
                  <div className="flex justify-between">
                    <dt className="font-semibold text-slate-500">Status</dt>
                    <dd className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t border-slate-200 pt-16">
            <div className="mb-8">
              <span className="text-xs uppercase font-extrabold text-blue-600 tracking-wider">
                {language === "id" ? "Eksplorasi Lebih Lanjut" : "Explore More"}
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                {language === "id" ? "Studi Kasus Lainnya" : "Other Case Studies"}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rel) => {
                const relTitle = getLocalized(rel.title, language);
                const relSummary = getLocalized(rel.summary, language);
                const relCategory = getLocalized(rel.category, language);
                return (
                  <Card
                    key={rel.id}
                    hoverEffect
                    className="p-6 bg-white border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between gap-4"
                  >
                    {rel.image && rel.image.endsWith(".png") && (
                      <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video relative">
                        <Image
                          src={rel.image}
                          alt={relTitle}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <Badge variant="primary" className="mb-2 text-xs">{relCategory}</Badge>
                      <h4 className="font-bold text-slate-900 text-base mb-2 line-clamp-2">{relTitle}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{relSummary}</p>
                    </div>
                    <Link
                      href={`/portfolio/${rel.slug}/`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-auto"
                    >
                      <span>{language === "id" ? "Lihat Studi Kasus" : "View Case Study"}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
