import { AboutHero } from "@/components/sections/about/AboutHero";
import { OriginStory } from "@/components/sections/about/OriginStory";
import { WhyLogiCoach } from "@/components/sections/about/WhyLogiCoach";
import { TeamPhilosophy } from "@/components/sections/about/TeamPhilosophy";
import { TrustSection } from "@/components/sections/about/TrustSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OriginStory />
      <WhyLogiCoach />
      <TeamPhilosophy />
      <TrustSection />
    </main>
  );
}
