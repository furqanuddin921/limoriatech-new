import type { Metadata } from "next";
import PortfolioContent from "@/features/portfolio/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Portofolio & Studi Kasus",
  description:
    "Lihat bagaimana Limoria Tech membantu berbagai institusi dan perusahaan memecahkan masalah kompleks melalui solusi software terintegrasi, LMS sekolah, dan sistem enterprise.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
