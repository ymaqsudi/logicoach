"use client";

import { TrendingUp, Users, Gauge, CheckCircle } from "lucide-react";

export function ReportingAndVisibility() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Leadership value */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Visibility for leaders
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              LogiCoach provides enablement leaders with clear insight into
              readiness — without needing to sit in on every conversation.
            </p>

            <div className="mt-12 space-y-6">
              <Signal
                icon={TrendingUp}
                title="Individual and cohort trends"
                body="Track improvement patterns across people, teams, and programs."
              />
              <Signal
                icon={Users}
                title="Skill-level breakdowns"
                body="Understand where clarity, structure, or delivery breaks down."
              />
              <Signal
                icon={Gauge}
                title="Pre- and post-program comparison"
                body="Measure gains against baseline performance, not intuition."
              />
              <Signal
                icon={CheckCircle}
                title="Capstone readiness signals"
                body="Identify who is prepared to perform in live environments."
              />
            </div>
          </div>

          {/* Right: Decision framing */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Built for enablement decisions
              </h3>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
                Reporting aligns with how leaders actually evaluate readiness —
                identifying who needs reinforcement, who is improving, and who
                is prepared to perform.
              </p>

              <div className="mt-8 space-y-4 text-base text-slate-700">
                <p>• Program-level health at a glance</p>
                <p>• Clear justification for coaching investment</p>
                <p>• Evidence-backed readiness assessments</p>
              </div>

              {/* Readiness Dashboard Snapshot */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Sample readiness overview
                </p>

                <svg viewBox="0 0 420 190" className="w-full" aria-hidden>
                  {/* Axes */}
                  <line x1="50" y1="150" x2="380" y2="150" stroke="#CBD5E1" />
                  <line x1="50" y1="30" x2="50" y2="150" stroke="#CBD5E1" />

                  {/* Trend line */}
                  <polyline
                    points="60,120 140,95 220,80 300,55"
                    fill="none"
                    stroke="var(--accent-600)"
                    strokeWidth="2.5"
                  />

                  {/* Points */}
                  {[
                    { x: 60, y: 120 },
                    { x: 140, y: 95 },
                    { x: 220, y: 80 },
                    { x: 300, y: 55 },
                  ].map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="5"
                      fill="var(--accent-600)"
                    />
                  ))}

                  {/* Bars */}
                  {[
                    { x: 330, h: 90 },
                    { x: 355, h: 65 },
                    { x: 380, h: 110 },
                  ].map((b, i) => (
                    <rect
                      key={i}
                      x={b.x}
                      y={150 - b.h}
                      width="14"
                      height={b.h}
                      rx="4"
                      fill="var(--accent-600)"
                      opacity="0.75"
                    />
                  ))}

                  {/* Labels */}
                  <text x="60" y="170" className="fill-slate-500 text-xs">
                    Week 1
                  </text>
                  <text x="140" y="170" className="fill-slate-500 text-xs">
                    Week 3
                  </text>
                  <text x="220" y="170" className="fill-slate-500 text-xs">
                    Week 6
                  </text>
                  <text x="300" y="170" className="fill-slate-500 text-xs">
                    Week 9
                  </text>

                  <text
                    x="18"
                    y="95"
                    transform="rotate(-90 18 95)"
                    className="fill-slate-500 text-xs"
                  >
                    Readiness
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
