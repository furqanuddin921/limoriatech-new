"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown, Cpu, Calculator } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getNavigation, getSiteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const navData = getNavigation();
  const siteConfig = getSiteConfig();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                Limoria <span className="text-blue-600">Tech</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider mt-1">
                Tech & Financial Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navData.mainNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.children && item.children.length > 0) {
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/70 transition-colors group/item"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                              {child.title.includes("Tech") ? (
                                <Cpu className="w-4 h-4" />
                              ) : (
                                <Calculator className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <strong className="block text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                                {child.title}
                              </strong>
                              {child.description && (
                                <p className="text-xs text-slate-500 leading-snug mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20LimoriaTech,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="primary" className="gap-1.5">
                WhatsApp Us!
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-1 bg-white animate-in fade-in slide-in-from-top-2">
            {navData.mainNav.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              if (item.children && item.children.length > 0) {
                return (
                  <div key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-2 rounded-lg text-sm font-semibold",
                        isActive ? "text-blue-600" : "text-slate-900"
                      )}
                    >
                      {item.title}
                    </Link>
                    <div className="pl-6 space-y-1">
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
                        >
                          &bull; {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-3 px-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Halo%20LimoriaTech,%20saya%20tertarik%20dengan%20layanan%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button size="md" variant="primary" className="w-full justify-center">
                  WhatsApp Us!
                </Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
