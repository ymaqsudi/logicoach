"use client";

import { Users, Target, TrendingUp } from "lucide-react";

export function CorporateSolution() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-start">
          {/* Left: Narrative */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Corporate
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Sales & pre-sales enablement
            </h2>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700">
              LogiCoach gives enablement teams a repeatable system for
              developing confident, structured communicators — with clear
              visibility into whether training translates into performance.
            </p>

            <div className="mt-12 space-y-8">
              <Benefit
                icon={Target}
                title="Enablement that sticks"
                body="Live coaching creates behavior change. AI verifies whether it holds across calls, reps, and cohorts."
              />
              <Benefit
                icon={TrendingUp}
                title="Manager-friendly visibility"
                body="Objective scoring surfaces readiness signals without managers needing to sit in every deal review."
              />
              <Benefit
                icon={Users}
                title="Adoption through competition"
                body="Structured competitive formats drive engagement without superficial gamification."
              />
            </div>
          </div>

          {/* Right: Deployment + visual */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-10">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                Typical corporate deployment
              </h3>

              <ul className="mt-6 space-y-4 text-lg text-slate-700">
                <li>• 10–20 active seats using a rotation model</li>
                <li>• Monthly coached scenarios tied to live deals</li>
                <li>• AI scoring visible to reps and enablement leaders</li>
                <li>• Capstone showcase for leadership visibility</li>
              </ul>

              {/* Enablement Loop SVG */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Enablement feedback loop
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
                    Practice
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
                    Readiness
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
                    Coaching and AI reinforce performance standards
                  </text>
                </svg>
              </div>

              {/* Use cases */}
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Common use cases
                </p>
                <p className="mt-2 text-base leading-relaxed text-slate-600">
                  Competitive positioning • objection handling • executive
                  presence • demo narrative discipline
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

/* ---------- Helper ---------- */

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
