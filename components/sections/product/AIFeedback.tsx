"use client";

import { BarChart3, Mic, Gauge, Layers } from "lucide-react";

export function AIFeedback() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: AI explanation */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Objective AI feedback
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Each response is analyzed using consistent scoring criteria —
              reinforcing coaching with clear, repeatable performance signals.
            </p>

            <div className="mt-12 space-y-6">
              <Signal
                icon={Layers}
                title="Clarity & structure"
                body="Evaluates organization, reasoning flow, and message coherence."
              />
              <Signal
                icon={Mic}
                title="Confidence & delivery"
                body="Measures pacing, tone stability, and verbal control."
              />
              <Signal
                icon={Gauge}
                title="Hesitation & filler"
                body="Identifies overuse of filler words and hesitation patterns."
              />
              <Signal
                icon={BarChart3}
                title="Message discipline"
                body="Tracks deviation from core narrative under pressure."
              />
            </div>
          </div>

          {/* Right: Why it matters */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Why this matters
              </h3>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
                Feedback is consistent across users, sessions, and cohorts —
                removing subjective variance and allowing progress to be
                measured objectively over time.
              </p>

              <div className="mt-8 space-y-4 text-base text-slate-700">
                <p>• Comparable scores across participants</p>
                <p>• Clear readiness signals for coaches and leaders</p>
                <p>• Reliable trend analysis across programs</p>
              </div>

              {/* AI Signal Snapshot */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Sample signal snapshot
                </p>

                <svg viewBox="0 0 420 180" className="w-full" aria-hidden>
                  {/* Axes */}
                  <line x1="50" y1="140" x2="380" y2="140" stroke="#CBD5E1" />
                  <line x1="50" y1="30" x2="50" y2="140" stroke="#CBD5E1" />

                  {/* Bars */}
                  {[
                    { x: 80, h: 65 },
                    { x: 150, h: 90 },
                    { x: 220, h: 50 },
                    { x: 290, h: 100 },
                  ].map((b, i) => (
                    <rect
                      key={i}
                      x={b.x}
                      y={140 - b.h}
                      width="32"
                      height={b.h}
                      rx="6"
                      fill="var(--accent-600)"
                      opacity={0.85}
                    />
                  ))}

                  {/* X labels */}
                  <text x="78" y="165" className="fill-slate-500 text-xs">
                    Clarity
                  </text>
                  <text x="142" y="165" className="fill-slate-500 text-xs">
                    Delivery
                  </text>
                  <text x="214" y="165" className="fill-slate-500 text-xs">
                    Filler
                  </text>
                  <text x="278" y="165" className="fill-slate-500 text-xs">
                    Discipline
                  </text>

                  {/* Y-axis label */}
                  <text
                    x="18"
                    y="95"
                    transform="rotate(-90 18 95)"
                    className="fill-slate-500 text-xs"
                  >
                    Signal strength
                  </text>
                </svg>
              </div>

              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Signal({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-600)]/10 text-[var(--accent-600)]">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <p className="text-lg font-semibold text-slate-950">{title}</p>
        <p className="mt-2 text-base leading-relaxed text-slate-600">{body}</p>
      </div>
    </div>
  );
}
