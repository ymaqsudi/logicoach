import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { SolutionSection } from "@/components/sections/home/SolutionSection";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { OutcomesSection } from "@/components/sections/home/OutcomesSection";
import { WhoItsFor } from "@/components/sections/home/WhoItsFor";
import { Pricing } from "@/components/sections/home/Pricing";
import { CTASection } from "@/components/sections/home/CTASection";
import { Footer } from "@/components/sections/home/Footer";
import { CredibilitySection } from "@/components/sections/home/CredibilitySection";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Problem */}
      <section id="problem">
        <ProblemSection />
      </section>

      {/* Solution / About */}
      <section id="solution">
        <SolutionSection />
        <CredibilitySection />
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Outcomes */}
      <section id="outcomes">
        <OutcomesSection />
      </section>

      {/* Who it's for */}
      <section id="who-its-for">
        <WhoItsFor />
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* CTA */}
      <section id="cta">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
