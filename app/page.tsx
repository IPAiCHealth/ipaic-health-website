import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IPAiCIntroduction } from "@/components/IPAiCIntroduction";
import { AriaCapabilities } from "@/components/AriaCapabilities";
import { ProductPreview } from "@/components/ProductPreview";
import { WhyIPAIC } from "@/components/WhyIPAIC";
import { TrustSection } from "@/components/TrustSection";
import { UseCases } from "@/components/UseCases";
import { MissionSection } from "@/components/MissionSection";
import { PilotProgram } from "@/components/PilotProgram";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IPAiCIntroduction />
        <AriaCapabilities />
        <ProductPreview />
        <WhyIPAIC />
        <TrustSection />
        <UseCases />
        <MissionSection />
        <PilotProgram />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
