import HeroSection from "@/features/home/components/HeroSection";
import ServicesOverview from "@/features/home/components/ServicesOverview";
import AppDevSection from "@/features/home/components/AppDevSection";
import ValueSection from "@/features/home/components/ValueSection";
import CtaSection from "@/features/home/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AppDevSection />
      <ValueSection />
      <CtaSection />
    </>
  );
}
