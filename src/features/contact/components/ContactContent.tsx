"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ContactForm from "@/features/contact/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { getSiteConfig } from "@/lib/data/site";

export default function ContactContent() {
  const siteConfig = getSiteConfig();
  const { t, language } = useLanguage();

  const mapsQuery = encodeURIComponent(
    "Ruko Kebayoran Centre, Jalan Raya Kebayoran Baru, Kebayoran Lama Blok A4 Ruang 301, Jakarta Selatan 12240"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeader
          badge={t("contact.badge", "Hubungi Konsultan Kami")}
          title={t("contact.title", "Mari Berdiskusi Mengenai Kebutuhan Teknologi Anda")}
          subtitle={t(
            "contact.subtitle",
            "Kami siap mendampingi Anda dalam perencanaan, pemilihan teknologi, pengembangan, hingga pemeliharaan solusi IT yang tepat."
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7 sm:p-9 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-slate-800 shadow-xl">
              <div className="flex items-center gap-3.5 mb-7 pb-6 border-b border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold shadow-md shadow-blue-500/25">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {t("contact.hq", "Limoria Tech Headquarters")}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t("contact.hqSub", "Pusat Teknologi & Konsultasi")}
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white mb-0.5">
                      {t("contact.address", "Alamat Kantor")}
                    </span>
                    <span className="text-xs text-slate-300 leading-relaxed block">
                      {siteConfig.contact.address}
                    </span>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-400 hover:text-blue-300 mt-1"
                    >
                      <span>{language === "id" ? "Buka di Google Maps" : "View on Google Maps"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white mb-0.5">
                      {t("contact.email", "Email Resmi")}
                    </span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-blue-300 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white mb-0.5">
                      {t("contact.phone", "Telepon Kantor")}
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs text-blue-300 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white mb-0.5">
                      {t("contact.hours", "Jam Operasional")}
                    </span>
                    <span className="text-xs text-slate-300">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Limoria%20Tech,%20saya%20ingin%20konsultasi%20langsung.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span>{t("contact.waChat", "Chat Cepat via WhatsApp")}</span>
                </a>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900 leading-relaxed space-y-1">
              <strong className="block font-bold text-blue-950">
                {t("contact.ndaTitle", "Kerahasiaan Data (NDA):")}
              </strong>
              <p>
                {t(
                  "contact.ndaDesc",
                  "Kami menghormati kerahasiaan ide dan data bisnis Anda. Kami siap menandatangani Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) sebelum sesi diskusi mendalam dimulai."
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-10 border-slate-200/90 shadow-xl shadow-slate-200/50 bg-white">
              <div className="mb-7 pb-5 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1.5">
                  {t("contact.formTitle", "Kirimkan Pesan atau Permintaan Proposal")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {t(
                    "contact.formSubtitle",
                    "Isi formulir berikut dan konsultan IT kami akan merespons dalam 1x24 jam kerja."
                  )}
                </p>
              </div>

              <ContactForm />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
