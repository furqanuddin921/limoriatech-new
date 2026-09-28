import HeroSection from "@/features/home/components/HeroSection";
import TechStackBar from "@/features/home/components/TechStackBar";
import ServicesOverview from "@/features/home/components/ServicesOverview";
import AppDevSection from "@/features/home/components/AppDevSection";
import ValueSection from "@/features/home/components/ValueSection";
import CtaSection from "@/features/home/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackBar />
      <ServicesOverview />
      <AppDevSection />
      <ValueSection />
      <CtaSection />
    </>
  );
}
