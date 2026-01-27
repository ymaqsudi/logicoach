import { MethodHero } from "@/components/sections/methodology/MethodHero";
import { DebateToSales } from "@/components/sections/methodology/DebateToSales";
import { ScoringFramework } from "@/components/sections/methodology/ScoringFramework";
import { CoachingPrinciples } from "@/components/sections/methodology/CoachingPrinciples";
import { WhyItWorks } from "@/components/sections/methodology/WhyItWorks";

export default function MethodologyPage() {
  return (
    <main>
      <MethodHero />
      <DebateToSales />
      <ScoringFramework />
      <CoachingPrinciples />
      <WhyItWorks />
    </main>
  );
}
