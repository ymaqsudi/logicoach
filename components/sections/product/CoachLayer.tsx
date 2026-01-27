"use client";

import { UserCheck, Sliders, Focus } from "lucide-react";

export function CoachLayer() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Coaching value */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Coaching amplifies the system
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              AI reinforces patterns. Coaches change behavior. LogiCoach
              combines both to ensure improvement translates into real
              performance.
            </p>

            <div className="mt-12 space-y-6">
              <Item
                icon={UserCheck}
                title="Live intervention"
                body="Coaches deliver feedback between rounds — while decisions and reasoning are still fresh."
              />
              <Item
                icon={Sliders}
                title="Framework-based feedback"
                body="Coaching is grounded in shared standards and structure, not personal preference."
              />
              <Item
                icon={Focus}
                title="Targeted improvement"
                body="Interventions focus on the highest-impact communication gaps, not surface-level polish."
              />
            </div>
          </div>

          {/* Right: Deployment control */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Configurable by deployment
              </h3>

              <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
                Coaching intensity adapts to the environment — enterprise,
                institutional, or individual — without changing the underlying
                performance standards.
              </p>

              <div className="mt-8 space-y-4 text-base text-slate-700">
                <p>• Corporate programs: targeted live intervention</p>
                <p>• Academic programs: structured evaluation cycles</p>
                <p>• Individual use: optional coaching checkpoints</p>
              </div>

              {/* Coach + AI Loop Diagram */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Human judgment + machine consistency
                </p>

                <svg viewBox="0 0 420 160" className="w-full" aria-hidden>
                  {/* Nodes */}
                  <rect
                    x="40"
                    y="50"
                    rx="12"
                    ry="12"
                    width="120"
                    height="60"
                    fill="#ffffff"
                    stroke="#CBD5E1"
                  />
                  <text
                    x="100"
                    y="85"
                    textAnchor="middle"
                    className="fill-slate-800 text-sm font-medium"
                  >
                    Coach
                  </text>

                  <rect
                    x="260"
                    y="50"
                    rx="12"
                    ry="12"
                    width="120"
                    height="60"
                    fill="#ffffff"
                    stroke="#CBD5E1"
                  />
                  <text
                    x="320"
                    y="85"
                    textAnchor="middle"
                    className="fill-slate-800 text-sm font-medium"
                  >
                    AI signals
                  </text>

                  {/* Arrows */}
                  <line
                    x1="160"
                    y1="80"
                    x2="260"
                    y2="80"
                    stroke="var(--accent-600)"
                    strokeWidth="2"
                  />
                  <polygon
                    points="255,75 265,80 255,85"
                    fill="var(--accent-600)"
                  />

                  <line
                    x1="260"
                    y1="105"
                    x2="160"
                    y2="105"
                    stroke="var(--accent-600)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <polygon
                    points="165,100 155,105 165,110"
                    fill="var(--accent-600)"
                    opacity="0.6"
                  />

                  {/* Caption */}
                  <text
                    x="210"
                    y="145"
                    textAnchor="middle"
                    className="fill-slate-500 text-xs"
                  >
                    Shared standards reinforce behavior change
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

function Item({
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
