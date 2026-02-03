"use client";

import { motion } from "framer-motion";

type Insight = {
  label: string;
  value: string;
  note: string;
  accent: string;
};

const INSIGHTS: Insight[] = [
  {
    label: "Argument Effectiveness",
    value: "4.1 / 5",
    note: "Core claim was persuasive. Strong warrants, but impact framing can be sharpened for broader audience buy-in.",
    accent: "ring-violet-400/40",
  },
  {
    label: "Structure & Clarity",
    value: "Coach flag",
    note: "Lead with the claim before supporting detail to improve logical flow.",
    accent: "ring-indigo-400/40",
  },
  {
    label: "Conciseness",
    value: "42% excess",
    note: "Trim repetition and filler to sharpen the core argument.",
    accent: "ring-teal-400/40",
  },
  {
    label: "Pacing",
    value: "187 WPM",
    note: "Delivery was fast. Coaches recommend slowing below 170 WPM.",
    accent: "ring-sky-400/40",
  },
  {
    label: "Tone Control",
    value: "Mostly confident",
    note: "Clear tone overall, but moments of uncertainty softened emphasis.",
    accent: "ring-amber-400/40",
  },
  {
    label: "Eye Contact",
    value: "Inconsistent",
    note: "Frequent downward glances reduced audience connection.",
    accent: "ring-rose-400/40",
  },
  {
    label: "Body Language",
    value: "Reserved",
    note: "Limited gesture range. More intentional movement can reinforce key points.",
    accent: "ring-indigo-400/40",
  },
  {
    label: "Responsiveness",
    value: "Moderate",
    note: "Answers addressed prompts, but could engage counterpoints more directly.",
    accent: "ring-teal-400/40",
  },
  {
    label: "Audience Adaptation",
    value: "Developing",
    note: "Message clarity was strong, but framing could better match audience priorities.",
    accent: "ring-violet-400/40",
  },
];

export default function CoachInsightsSection() {
  return (
    <section className="relative bg-slate-900 py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[180px]" />
        <div className="absolute right-[-160px] bottom-1/4 h-[520px] w-[520px] rounded-full bg-violet-500/15 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-white px-4 py-2 text-sm font-medium text-white">
            Coach-Calibrated Insight
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white">
            Feedback coaches actually give.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white">
            LogiCoach.ai doesn’t just analyze speech — it applies real debate
            philosophy to evaluate persuasion, presence, and clarity over time.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INSIGHTS.map((insight) => (
            <motion.div
              key={insight.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl bg-slate-800 p-6 ring-1 ${insight.accent}`}
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-white">
                {insight.label}
              </div>

              <div className="mt-2 text-2xl font-bold text-white">
                {insight.value}
              </div>

              <p className="mt-4 text-sm leading-relaxed font-bold text-">
                {insight.note}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white">
            These metrics mirror how debate coaches evaluate speakers — refined
            through years of live competition and training.
          </p>
        </div>
      </div>
    </section>
  );
}
