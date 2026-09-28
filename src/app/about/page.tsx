import type { Metadata } from "next";
import AboutContent from "@/features/about/components/AboutContent";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal lebih dekat Limoria Tech, konsultan IT terpercaya yang siap menjadi technology partner untuk pertumbuhan bisnis Anda.",
};

export default function AboutPage() {
  return <AboutContent />;
}
