"use client";

export function TrustSection() {
  return (
    <section className="bg-[var(--soft-50)] border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-36">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Positioning */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Built for serious communication
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              LogiCoach is designed for organizations and individuals who care
              about how ideas perform under pressure — not just how confident
              they sound in rehearsal.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              If communication matters to outcomes, trust requires evidence —
              not vibes.
            </p>
          </div>

          {/* Right: Contrast block */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                What LogiCoach is — and isn’t
              </h3>

              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    It isn’t
                  </p>
                  <ul className="mt-3 space-y-2 text-lg text-slate-600">
                    <li>• A presentation skills workshop</li>
                    <li>• Generic sales role-play</li>
                    <li>• AI for AI’s sake</li>
                  </ul>
                </div>

                <div className="h-px w-full bg-slate-200" />

                <div>
                  <p className="text-base font-semibold text-slate-900">
                    It is
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">
                    A performance enablement system built on competitive
                    communication — where structure, pressure, and measurement
                    determine readiness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
