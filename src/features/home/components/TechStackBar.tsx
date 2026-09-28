"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import { Cpu, Database, Server, Code2, ShieldCheck, Box, Cloud, Terminal } from "lucide-react";

interface TechItem {
  name: string;
  category: { id: string; en: string };
  icon: any;
  color: string;
  bgGlow: string;
}

const techItems: TechItem[] = [
  {
    name: "Next.js & React",
    category: { id: "Frontend Enterprise", en: "Enterprise Frontend" },
    icon: Code2,
    color: "text-blue-600",
    bgGlow: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    name: "FastAPI & Python",
    category: { id: "High-Speed Microservices", en: "High-Speed Microservices" },
    icon: Terminal,
    color: "text-emerald-600",
    bgGlow: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
  },
  {
    name: "TypeScript",
    category: { id: "Strict Type Safety", en: "Strict Type Safety" },
    icon: Cpu,
    color: "text-indigo-600",
    bgGlow: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
  },
  {
    name: "PostgreSQL",
    category: { id: "Enterprise Relational DB", en: "Enterprise Relational DB" },
    icon: Database,
    color: "text-sky-600",
    bgGlow: "bg-sky-50 border-sky-200 hover:border-sky-400",
  },
  {
    name: "Docker & Linux",
    category: { id: "Container Orchestration", en: "Container Orchestration" },
    icon: Box,
    color: "text-cyan-600",
    bgGlow: "bg-cyan-50 border-cyan-200 hover:border-cyan-400",
  },
  {
    name: "Redis",
    category: { id: "In-Memory Cache", en: "In-Memory Cache" },
    icon: Server,
    color: "text-rose-600",
    bgGlow: "bg-rose-50 border-rose-200 hover:border-rose-400",
  },
  {
    name: "Cloudflare & Nginx",
    category: { id: "Edge Security & CDN", en: "Edge Security & CDN" },
    icon: Cloud,
    color: "text-amber-600",
    bgGlow: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
  {
    name: "Security & Audit",
    category: { id: "Enterprise Hardening", en: "Enterprise Hardening" },
    icon: ShieldCheck,
    color: "text-teal-600",
    bgGlow: "bg-teal-50 border-teal-200 hover:border-teal-400",
  },
];

export default function TechStackBar() {
  const { language } = useLanguage();

  return (
    <section className="py-12 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background Subtle Gradient Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />

      <Container>
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-8">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full inline-block mb-3">
            {language === "id"
              ? "Ekosistem & Arsitektur Teknologi Modern"
              : "Modern Enterprise Technology Ecosystem"}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {language === "id"
              ? "Dibangun Menggunakan Standar Rekayasa Perangkat Lunak Teruji"
              : "Engineered with World-Class Industry Proven Standards"}
          </h2>
        </div>

        {/* Tech Grid Showcase */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            const categoryText = language === "id" ? item.category.id : item.category.en;

            return (
              <div
                key={idx}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center text-center group bg-white shadow-2xs hover:shadow-lg hover:-translate-y-1 ${item.bgGlow}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 bg-white shadow-xs group-hover:scale-110 transition-transform ${item.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-xs text-slate-900 leading-tight block mb-1">
                  {item.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-1">
                  {categoryText}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
