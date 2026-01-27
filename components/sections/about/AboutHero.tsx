"use client";

import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--soft-50)]">
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--soft-50)_0%,#ffffff_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-36">
        <div className="grid gap-24 md:grid-cols-12 md:items-center">
          {/* Left: Narrative */}
          <div className="md:col-span-6">
            <div className="mb-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              About LogiCoach
            </p>

            <h1 className="text-7xl font-semibold tracking-tight leading-[1.05] text-slate-950">
              Built from competition.
              <span className="mt-2 block text-[var(--brand-700)]">
                Designed for performance.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-2xl leading-[1.6] text-slate-800">
              LogiCoach grew out of a simple observation: the people who
              communicate best under pressure are not the ones who memorize
              scripts — they’re the ones trained to think, respond, and persuade
              in real time.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600">
              That insight was forged in live competitive environments — where
              reasoning, composure, and clarity are evaluated publicly and
              immediately.
            </p>
          </div>

          {/* Right: Real-world proof */}
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Primary image */}
              <div className="relative col-span-2 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/techduels/DSC_3227.JPG"
                    alt="Live Tech Duels evaluation environment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Supporting images */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/techduels/TechDuels-0105.jpg"
                    alt="Participants under live evaluation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/techduels/TechDuels-0056.jpg"
                    alt="Judges and audience engagement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-8 text-sm text-slate-500">
              Real environments. Real pressure. Real evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
