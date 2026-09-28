import type { Metadata } from "next";
import ContactContent from "@/features/contact/components/ContactContent";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi tim konsultan IT Limoria Tech untuk mendiskusikan kebutuhan arsitektur sistem, transformasi digital, dan pengembangan software perusahaan Anda.",
};

export default function ContactPage() {
  return <ContactContent />;
}
