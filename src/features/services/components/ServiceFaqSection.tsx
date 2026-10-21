"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalized } from "@/lib/utils";
import type { ServiceFaq } from "@/types/service.types";

interface ServiceFaqSectionProps {
  faqs?: ServiceFaq[];
  serviceTitle: string;
  whatsappNumber: string;
}

export default function ServiceFaqSection({
  faqs,
  serviceTitle,
  whatsappNumber,
}: ServiceFaqSectionProps) {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const waFaqMessage = encodeURIComponent(
    `Halo Limoria Tech, saya ingin bertanya lebih lanjut mengenai layanan ${serviceTitle}.`
  );

  return (
    <section className="mt-14 lg:mt-20 pt-10 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{language === "id" ? "TANYA JAWAB UMUM" : "FREQUENTLY ASKED QUESTIONS"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {language === "id"
              ? `Pertanyaan yang Sering Diajukan Seputar ${serviceTitle}`
              : `Frequently Asked Questions About ${serviceTitle}`}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {language === "id"
              ? "Informasi transparan mengenai proses kerja, implementasi, dan konsultasi bersama tim ahli kami."
              : "Transparent information about our delivery workflow, implementation, and consulting engagement."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = getLocalized(faq.question, language);
            const answer = getLocalized(faq.answer, language);

            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl bg-white shadow-2xs hover:border-blue-200 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-slate-900 hover:text-blue-600 transition-colors gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg leading-snug">
                    {question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-blue-600 text-white rotate-180"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 bg-slate-50/50">
                    <p className="whitespace-pre-line">{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <Card className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-0 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">
              {language === "id"
                ? "Punya pertanyaan khusus yang belum terjawab?"
                : "Have a specific project question?"}
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm">
              {language === "id"
                ? "Konsultan senior kami siap berdiskusi langsung dan memberikan solusi sesuai kebutuhan Anda."
                : "Our senior consultants are available for direct discussion and tailored solutions."}
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${waFaqMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-md shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === "id" ? "Konsultasi WhatsApp Sekarang" : "Consult on WhatsApp Now"}</span>
          </a>
        </Card>
      </div>
    </section>
  );
}
