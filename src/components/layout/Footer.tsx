import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight, ExternalLink, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import { getSiteConfig, getNavigation } from "@/lib/data/site";

export default function Footer() {
  const siteConfig = getSiteConfig();
  const navData = getNavigation() as any;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Top glowing gradient divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent absolute top-0 left-0" />

      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Limoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.legalName} — {siteConfig.tagline}. Solusi teknologi informasi komprehensif dan layanan pelaporan keuangan digital terintegrasi untuk pertumbuhan bisnis Anda.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Jam Kerja: {siteConfig.contact.workingHours}</p>
              <div className="flex items-center gap-2 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold">Sistem & Konsultasi Beroperasi Aktif</span>
              </div>
            </div>
          </div>

          {/* Column 2: Tech Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Tech Services
            </h3>
            <ul className="space-y-2 text-sm">
              {(navData.footer.techLinks || []).map((link: any) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://lms.limoriatech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Project: LMS Sekolah</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Financial Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Financial Services
            </h3>
            <ul className="space-y-2 text-sm">
              {(navData.footer.financialLinks || []).slice(0, 7).map((link: any) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-xs sm:text-sm"
                  >
                    <span>{link.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/#financial-services"
                  className="text-blue-400 hover:text-blue-300 text-xs font-semibold inline-block pt-1"
                >
                  Lihat Seluruh 12 Layanan Finansial &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak Kami (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <span className="leading-snug text-xs">{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20LimoriaTech,%20saya%20ingin%20konsultasi%20layanan%20IT`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LimoriaTech. All Rights Reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>•</span>
            <Link href="/services/" className="hover:text-slate-300 transition-colors">Services</Link>
            <span>•</span>
            <Link href="/portfolio/" className="hover:text-slate-300 transition-colors">Portfolio</Link>
            <span>•</span>
            <Link href="/about/" className="hover:text-slate-300 transition-colors">About</Link>
            <span>•</span>
            <Link href="/contact/" className="hover:text-slate-300 transition-colors">Contact</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
