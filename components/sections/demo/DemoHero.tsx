export function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,var(--soft-50)_85%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
            Demo
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950">
            See LogiCoach in action
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Walk through a real practice scenario, review AI scoring, and see
            how LogiCoach fits into your sales or training environment.
          </p>
        </div>
      </div>
    </section>
  );
}
