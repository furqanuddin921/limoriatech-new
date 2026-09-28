import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ContactForm from "@/features/contact/components/ContactForm";
import { getSiteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
};

export default function ContactPage() {
  const siteConfig = getSiteConfig();

  return (
    <div className="py-16 lg:py-24">
      <Container>
        <SectionHeader
          badge="Hubungi Konsultan Kami"
          title="Mari Berdiskusi Mengenai Kebutuhan Teknologi Anda"
          subtitle="Kami siap mendampingi Anda dalam perencanaan, pemilihan teknologi, pengembangan, hingga pemeliharaan solusi IT yang tepat."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 bg-slate-900 text-white border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Limoria Tech Headquarters</h3>
                  <p className="text-xs text-slate-400">Technology & Advisory Center</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Alamat Kantor</span>
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Email Resmi</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs text-blue-300 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Telepon Kantor</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-xs text-blue-300 hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Jam Operasional</span>
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
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Cepat via WhatsApp
                </a>
              </div>
            </Card>

            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed">
              <strong className="block mb-1 font-semibold text-blue-950">
                Kerahasiaan Data (NDA):
              </strong>
              Kami menghormati kerahasiaan ide dan data bisnis Anda. Kami siap menandatangani Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA) sebelum sesi diskusi mendalam dimulai.
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-10 border-slate-200/90 shadow-lg shadow-blue-500/5">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  Kirimkan Pesan atau Permintaan Proposal
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Isi formulir berikut dan konsultan IT kami akan merespons dalam 1x24 jam kerja.
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
