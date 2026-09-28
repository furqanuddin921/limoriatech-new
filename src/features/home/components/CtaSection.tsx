import Link from "next/link";
import { MessageSquare, ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getSiteConfig } from "@/lib/data/site";

export default function CtaSection() {
  const siteConfig = getSiteConfig();

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-8 sm:p-14 text-white shadow-2xl shadow-blue-500/25">
          {/* Background circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/50 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-indigo-500/50 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
              <MessageSquare className="w-3.5 h-3.5" /> Konsultasi Tanpa Biaya
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Mulai Transformasi Digital & Kembangkan Bisnis Anda Bersama Kami
            </h2>

            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Diskusikan tantangan teknologi perusahaan Anda dengan tim konsultan IT kami. Kami siap memberikan solusi yang terukur, tepat waktu, dan efisien.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact/" className="w-full sm:w-auto">
                <Button size="lg" variant="white" className="w-full sm:w-auto">
                  Hubungi Kami Sekarang
                  <ArrowRight className="w-4 h-4 text-blue-900" />
                </Button>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20Limoria%20Tech,%20saya%20ingin%20konsultasi%20layanan%20IT.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white border-white/40 hover:bg-white/10 hover:border-white"
                >
                  <PhoneCall className="w-4 h-4" />
                  Chat via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
