"use client";

export function MethodHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--soft-50)]">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--soft-50)_0%,#ffffff_80%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-12 md:items-center">
          {/* Left: Narrative */}
          <div className="md:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Methodology
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              Competitive communication,
              <span className="mt-2 block text-[var(--brand-700)]">
                trained like a discipline
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-700">
              LogiCoach adapts competitive debate methodology for modern
              professional environments — training structure, pressure handling,
              and decision-making as repeatable skills.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Improvement is reinforced through practice and verified through
              objective AI signals — not self-assessment or presentation polish.
            </p>
          </div>

          {/* Right: Method signal */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <p className="text-sm font-semibold text-slate-900">
                What defines the methodology
              </p>

              <div className="mt-6 space-y-5 text-lg text-slate-700">
                <p>• Structured reasoning under time pressure</p>
                <p>• Adversarial prompts that surface weak thinking</p>
                <p>• Clear standards for clarity and persuasion</p>
                <p>• Repetition with measurable improvement</p>
              </div>

              {/* Visual divider */}
              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
