import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Vision />
      <Mission />
      <Projects />
      <Stats />
      <CTASection />
    </>
  );
}
