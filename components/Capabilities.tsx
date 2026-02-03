"use client";

import { motion } from "framer-motion";

export default function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-36">
      {/* Ambient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[160px]" />
        <div className="absolute right-[-180px] bottom-32 h-[480px] w-[480px] rounded-full bg-violet-300/30 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full  px-4 py-2 text-sm font-medium text-white">
            Our Philosophy
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            How great communicators are actually built.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            LogiCoach.ai is grounded in debate coaching philosophy — where skill
            is developed through deliberate practice, guided feedback, and
            performance under real pressure.
          </p>
        </div>

        {/* Philosophy pillars */}
        <div className="grid gap-14 md:grid-cols-3">
          <PhilosophyPillar
            step="01"
            color="indigo"
            title="Coach the skill"
            description="Skills don’t improve through exposure alone. They improve through targeted coaching that identifies patterns, diagnoses weaknesses, and sets clear priorities."
            bullets={[
              "Coach-designed evaluation criteria",
              "Human judgment encoded into AI",
              "Focus on why an argument works — not just how it sounds",
            ]}
          />

          <PhilosophyPillar
            step="02"
            color="teal"
            title="Practice deliberately"
            description="Improvement comes from repetition with intent. LogiCoach.ai enables focused, repeatable practice that builds habits — not one-off performances."
            bullets={[
              "Structured roleplays, not generic prompts",
              "Feedback that evolves session to session",
              "Low-pressure repetition before high-stakes use",
            ]}
          />

          <PhilosophyPillar
            step="03"
            color="violet"
            title="Present under pressure"
            description="Skills aren’t real until they hold up under pressure. LogiCoach.ai connects practice to live showcases, debates, and real-world performance."
            bullets={[
              "Live debates and coached showcases",
              "Performance feedback tied to preparation",
              "Clear transfer from practice to presentation",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PhilosophyPillar({
  step,
  title,
  description,
  bullets,
  color,
}: {
  step: string;
  title: string;
  description: string;
  bullets: string[];
  color: "indigo" | "teal" | "violet";
}) {
  const COLORS = {
    indigo: {
      bar: "bg-indigo-600",
      soft: "bg-indigo-100",
      text: "text-indigo-700",
    },
    teal: {
      bar: "bg-teal-600",
      soft: "bg-teal-100",
      text: "text-teal-700",
    },
    violet: {
      bar: "bg-violet-600",
      soft: "bg-violet-100",
      text: "text-violet-700",
    },
  };

  const c = COLORS[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="relative rounded-3xl bg-white p-10 shadow-lg ring-1 ring-slate-200"
    >
      {/* Step indicator */}
      <div
        className={`mb-6 inline-flex items-center rounded-full ${c.soft} px-4 py-2 text-sm font-semibold ${c.text}`}
      >
        {step}
      </div>

      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-4 text-slate-700">{description}</p>

      <ul className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className={`mt-1.5 h-2 w-2 rounded-full ${c.bar}`} />
            <span className="text-slate-700">{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
