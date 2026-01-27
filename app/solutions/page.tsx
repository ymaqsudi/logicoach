import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { CorporateSolution } from "@/components/sections/solutions/CorporateSolution";
import { InstitutionalSolution } from "@/components/sections/solutions/InstitutionalSolution";
import { IndividualSolution } from "@/components/sections/solutions/IndividualSolution";
import { DeploymentModel } from "@/components/sections/solutions/DeploymentModel";
import { CTASection } from "@/components/sections/solutions/CTASection";

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <CorporateSolution />
      <InstitutionalSolution />
      <IndividualSolution />
      <DeploymentModel />
      <CTASection />
    </main>
  );
}
