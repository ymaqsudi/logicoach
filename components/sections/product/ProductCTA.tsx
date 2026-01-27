import { Button } from "@/components/ui/button";

export function ProductCTA() {
  return (
    <section className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            See LogiCoach in action
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Walk through a real scenario, see sample scoring, and understand how
            LogiCoach fits your environment.
          </p>
        </div>

        <Button className="bg-[var(--brand-700)] text-white hover:bg-[var(--brand-900)]">
          Book a Demo
        </Button>
      </div>
    </section>
  );
}
