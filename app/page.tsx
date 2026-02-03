import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ProductIntro from "@/components/ProductIntro";
import ProductShowcase from "@/components/ProductShowcase";
import ProductNavSection from "@/components/ProductNavSection";
import DashboardPreview from "@/components/DashboardPreview";
import DashboardCanvas from "@/components/DashboardCanvas";
import DashboardHeader from "@/components/DashboardHeader";
import RevenueAnalyticalPanel from "@/components/RevenueAnalyticalPanel";
import AlertsPanel from "@/components/AlertsPanel";
import CoachInsightsSection from "@/components/CoachInsightsSection";
import EngagementModels from "@/components/EngagementModels";
import Pricing from "@/components/Pricing";
import Capabilities from "@/components/Capabilities";
import SupportSection from "@/components/SupportSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="product">
        <Hero />
      </section>

      {/* PROOF */}
      <StatsSection />

      {/* SYSTEM INTRO */}
      <section id="how-it-works">
        <ProductIntro />
      </section>

      {/* PRODUCT STORY */}
      <ProductNavSection>
        {/* HOW IT WORKS */}
        <ProductShowcase
          id="how-it-works-detail"
          eyebrow="The System"
          title="A complete training system — not a one-off tool"
          description={
            <>
              LogiCoach.ai is a structured communication training system built
              on deliberate practice. Sessions compound, feedback adapts, and
              habits evolve — the same way elite speakers are trained in{" "}
              <a
                href="https://techduels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-medium text-indigo-600 hover:underline"
              >
                Tech Duels
              </a>
              .
            </>
          }
          domains={[
            "Deliberate practice loops",
            "Coach-defined evaluation criteria",
            "Pattern diagnosis across sessions",
            "Live-debate-tested training philosophy",
          ]}
          imageSrc="/images/showcase/how-it-works.svg"
        />

        {/* INDIVIDUALS */}
        <ProductShowcase
          id="individuals"
          eyebrow="For Individuals"
          title="Train like an athlete. Perform when it counts."
          description={
            <>
              LogiCoach.ai helps individuals train communication the way
              athletes train performance — repetition, feedback, recovery, and
              refinement. When ready, skills can be tested in live{" "}
              <a
                href="https://techduels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-medium text-indigo-600 hover:underline"
              >
                Tech Duels
              </a>{" "}
              showcases.
            </>
          }
          domains={[
            "Skill-by-skill mastery",
            "Low-pressure repetition",
            "Clear, coach-aligned feedback",
            "Optional live debate showcases",
          ]}
          imageSrc="/images/showcase/individuals.svg"
        />

        {/* ORGANIZATIONS */}
        <ProductShowcase
          id="organizations"
          eyebrow="For Teams & Organizations"
          title="Standardize communication training — without lowering the bar"
          description={
            <>
              Teams use LogiCoach.ai to deliver consistent, high-rigor
              communication training at scale. Shared roleplays, standardized
              evaluation, and live{" "}
              <a
                href="https://techduels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-medium text-indigo-600 hover:underline"
              >
                Tech Duels
              </a>{" "}
              events ensure skills actually transfer to real work.
            </>
          }
          domains={[
            "Sales & revenue teams",
            "Healthcare & compliance",
            "Policy & security organizations",
            "Enterprise training programs",
          ]}
          imageSrc="/images/showcase/teamwork.svg"
        />

        {/* COACHING ENGINE */}
        <ProductShowcase
          id="expert-coaching"
          eyebrow="The Coaching Engine"
          title="Debate philosophy — encoded"
          description={
            <>
              LogiCoach.ai is built on over a decade of live debate coaching
              through{" "}
              <a
                href="https://techduels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-medium text-indigo-600 hover:underline"
              >
                Tech Duels
              </a>
              . Every metric, framework, and roleplay reflects how expert
              coaches diagnose, train, and evaluate real communicators.
            </>
          }
          domains={[
            "Claims, warrants, and impacts",
            "Pressure-tested argument frameworks",
            "Coach-designed evaluation rubrics",
            "Live-event insights baked into AI",
          ]}
          imageSrc="/images/showcase/expert.svg"
        />

        {/* LIVE SHOWCASE */}
        <ProductShowcase
          id="live-showcase"
          eyebrow="The Proving Ground"
          title="Where practice meets pressure"
          description={
            <>
              LogiCoach.ai connects preparation to performance through live
              showcases, debates, and coached{" "}
              <a
                href="https://techduels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="italic font-medium text-indigo-600 hover:underline"
              >
                Tech Duels
              </a>{" "}
              events — creating accountability, confidence, and real-world
              transfer.
            </>
          }
          domains={[
            "Live debates",
            "Public speaking showcases",
            "Coached performance reviews",
            "Measured performance under pressure",
          ]}
          imageSrc="/images/showcase/showcase.svg"
        />
      </ProductNavSection>

      {/* DASHBOARD */}
      <DashboardPreview>
        <DashboardHeader />
        <DashboardCanvas>
          <RevenueAnalyticalPanel />
          <AlertsPanel />
        </DashboardCanvas>
      </DashboardPreview>

      {/* COACH INSIGHTS */}
      <CoachInsightsSection />

      {/* WHO USES IT */}
      <EngagementModels />

      {/* PRICING */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* PHILOSOPHY */}
      <Capabilities />

      {/* CONTACT */}
      <section id="contact">
        <SupportSection />
        <ContactSection />
      </section>
    </>
  );
}
