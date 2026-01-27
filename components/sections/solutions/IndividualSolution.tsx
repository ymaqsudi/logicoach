"use client";

import { User, Brain, TrendingUp } from "lucide-react";

export function IndividualSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Narrative */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Individuals
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Focused 1:1 skill development
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              Designed for professionals, executives, and students who want
              private, structured practice — without the pressure of public
              evaluation.
            </p>

            <div className="mt-12 space-y-8">
              <Benefit
                icon={User}
                title="Private practice"
                body="No public showcases by default. Progress happens privately, at your own pace."
              />
              <Benefit
                icon={Brain}
                title="AI reinforcement"
                body="Clear, objective feedback loops without requiring constant live coaching."
              />
              <Benefit
                icon={TrendingUp}
                title="Transferable mastery"
                body="Clarity, persuasion, and confidence apply across interviews, leadership, and high-stakes conversations."
              />
            </div>
          </div>

          {/* Right: Progression + Fit */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-[var(--soft-50)] p-10">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Personal mastery progression
              </h3>

              {/* Progression SVG */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
                <svg viewBox="0 0 520 160" className="w-full" aria-hidden>
                  {[
                    { x: 20, label: "Private practice" },
                    { x: 145, label: "AI feedback" },
                    { x: 270, label: "Refinement" },
                    { x: 395, label: "Confidence" },
                  ].map((n, i) => (
                    <g key={n.label}>
                      <rect
                        x={n.x}
                        y="50"
                        rx="12"
                        ry="12"
                        width="110"
                        height="60"
                        fill="#ffffff"
                        stroke="#CBD5E1"
                      />
                      <text
                        x={n.x + 55}
                        y="85"
                        textAnchor="middle"
                        className="fill-slate-800 text-sm font-medium"
                      >
                        {n.label}
                      </text>

                      {i < 3 && (
                        <>
                          <line
                            x1={n.x + 110}
                            y1="80"
                            x2={n.x + 125}
                            y2="80"
                            stroke="var(--accent-600)"
                            strokeWidth="2"
                          />
                          <polygon
                            points={`${n.x + 120},75 ${n.x + 130},80 ${
                              n.x + 120
                            },85`}
                            fill="var(--accent-600)"
                          />
                        </>
                      )}
                    </g>
                  ))}

                  <text
                    x="260"
                    y="145"
                    textAnchor="middle"
                    className="fill-slate-500 text-xs"
                  >
                    Progress compounds through structured repetition
                  </text>
                </svg>
              </div>

              {/* Best fit */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-slate-900">
                  Best fit for
                </p>

                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  <li>• Early-career professionals</li>
                  <li>• MBA & graduate students</li>
                  <li>• Founders and executives</li>
                  <li>• Career switchers</li>
                </ul>

                <p className="mt-6 text-sm text-slate-600">
                  Individuals can later transition into corporate or
                  institutional programs.
                </p>
              </div>

              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Benefit({
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
