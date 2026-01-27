import { ProductHero } from "@/components/sections/product/ProductHero";
import { ProductOverview } from "@/components/sections/product/ProductOverview";
import { PracticeExperience } from "@/components/sections/product/PracticeExperience";
import { AIFeedback } from "@/components/sections/product/AIFeedback";
import { CoachLayer } from "@/components/sections/product/CoachLayer";
import { ReportingAndVisibility } from "@/components/sections/product/ReportingandVisibility";
import { ProductCTA } from "@/components/sections/product/ProductCTA";

export default function ProductPage() {
  return (
    <main>
      <ProductHero />
      <ProductOverview />
      <PracticeExperience />
      <AIFeedback />
      <CoachLayer />
      <ReportingAndVisibility />
      <ProductCTA />
    </main>
  );
}
