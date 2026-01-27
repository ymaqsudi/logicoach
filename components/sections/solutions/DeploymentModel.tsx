"use client";

import { Users, Layers, BarChart3 } from "lucide-react";

export function DeploymentModel() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

          <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
            A deployment model built for scale
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-700">
            LogiCoach is designed to deploy efficiently across teams, cohorts,
            and institutions — without sacrificing rigor or visibility.
          </p>
        </div>

        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Models */}
          <div className="md:col-span-7 space-y-8">
            <Model
              index="01"
              icon={Users}
              title="Seat-based access"
              body="Licenses are assigned to active participants — not total headcount — allowing rotation across larger groups without increasing cost."
            />
            <Model
              index="02"
              icon={Layers}
              title="Blended delivery"
              body="Live coaching creates behavior change. AI practice reinforces it between sessions — without adding facilitator overhead."
            />
            <Model
              index="03"
              icon={BarChart3}
              title="Outcome visibility"
              body="Scores, trends, and showcases provide leaders with confidence that readiness is real — not assumed."
            />
          </div>

          {/* Right: Visual flow */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                How deployment scales
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                The same system supports small pilots, semester programs, and
                enterprise rollouts — without reconfiguration.
              </p>

              {/* SVG Flow */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-[var(--soft-50)] p-6">
                <svg viewBox="0 0 520 160" className="w-full" aria-hidden>
                  {[
                    { x: 20, label: "Pilot cohort" },
                    { x: 185, label: "Scaled rotation" },
                    { x: 350, label: "Org-wide visibility" },
                  ].map((n, i) => (
                    <g key={n.label}>
                      <rect
                        x={n.x}
                        y="50"
                        rx="14"
                        ry="14"
                        width="150"
                        height="60"
                        fill="#ffffff"
                        stroke="#CBD5E1"
                      />
                      <text
                        x={n.x + 75}
                        y="85"
                        textAnchor="middle"
                        className="fill-slate-800 text-sm font-medium"
                      >
                        {n.label}
                      </text>

                      {i < 2 && (
                        <>
                          <line
                            x1={n.x + 150}
                            y1="80"
                            x2={n.x + 165}
                            y2="80"
                            stroke="var(--accent-600)"
                            strokeWidth="2"
                          />
                          <polygon
                            points={`${n.x + 160},75 ${n.x + 170},80 ${
                              n.x + 160
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
                    Scale increases without increasing coaching load
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

function Model({
  index,
  icon: Icon,
  title,
  body,
}: {
  index: string;
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="relative flex gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Index */}
      <div className="absolute right-6 top-6 text-sm font-semibold text-slate-300">
        {index}
      </div>

      {/* Icon */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-600)]/10 text-[var(--accent-600)]">
        <Icon className="h-7 w-7" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{body}</p>
        <div className="mt-4 h-1 w-14 rounded-full bg-[var(--accent-600)]" />
      </div>
    </div>
  );
}
