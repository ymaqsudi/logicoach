import { DemoHero } from "@/components/sections/demo/DemoHero";
import { WhatToExpect } from "@/components/sections/demo/WhatToExpect";
import { DemoAgenda } from "@/components/sections/demo/DemoAgenda";
import { WhoItsFor } from "@/components/sections/demo/WhoItsFor";
import { AfterTheDemo } from "@/components/sections/demo/AfterTheDemo";
import { DemoCTA } from "@/components/sections/demo/DemoCTA";
import { PricingOverview } from "@/components/sections/demo/PricingOverview";
import { Pricing } from "@/components/sections/home/Pricing";

export default function DemoPage() {
  return (
    <main>
      <DemoHero />
      <WhatToExpect />
      <DemoAgenda />
      <Pricing />
      <WhoItsFor />
      <AfterTheDemo />
      <DemoCTA />
    </main>
  );
}
