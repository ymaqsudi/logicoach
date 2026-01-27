"use client";

import { ArgumentFlowDiagram } from "@/components/svg/ArgumentFlowDiagram";

export function DebateToSales() {
  return (
    <section className="bg-[var(--soft-50)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 md:grid-cols-12 md:items-center">
          {/* Left: Conceptual mapping */}
          <div className="md:col-span-6">
            <div className="mb-6 h-1.5 w-14 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              From competitive reasoning to
              <span className="block text-[var(--brand-700)]">
                real sales conversations
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-700">
              Competitive communication trains how people think, respond, and
              adjust under pressure. Sales requires the same mental discipline —
              applied to buyers, objections, and alternatives.
            </p>

            <div className="mt-12 space-y-6">
              <MapRow
                left="Claim"
                right="Value proposition"
                desc="A clear, defensible statement about why a buyer should care."
              />
              <MapRow
                left="Warrant"
                right="Reasoning"
                desc="The logic, proof, and framing that make the value believable."
              />
              <MapRow
                left="Impact"
                right="Business outcome"
                desc="Why the decision matters now — cost, risk, or opportunity."
              />
              <MapRow
                left="Refutation"
                right="Objection handling"
                desc="Directly addressing counter-arguments and alternatives."
              />
            </div>
          </div>

          {/* Right: Diagram anchor */}
          <div className="md:col-span-6">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <p className="mb-6 text-sm font-semibold text-slate-900">
                Argument flow under pressure
              </p>

              <div className="overflow-x-auto">
                <ArgumentFlowDiagram />
              </div>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-600">
                This structure is trained explicitly — not assumed — so clarity
                holds even when conversations turn adversarial.
              </p>

              <div className="mt-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function MapRow({
  left,
  right,
  desc,
}: {
  left: string;
  right: string;
  desc: string;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Top accent */}
      <div className="mb-3 h-1 w-10 rounded-full bg-[var(--accent-600)]" />

      <p className="text-lg font-semibold text-slate-950">
        {left} <span className="mx-2 text-slate-400">→</span> {right}
      </p>

      <p className="mt-2 text-base leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}
