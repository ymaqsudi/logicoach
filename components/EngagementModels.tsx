"use client";

import { motion } from "framer-motion";

export default function EngagementModels() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-6 py-32">
      {/* Background color pops */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-indigo-300/40 blur-[140px]" />
        <div className="absolute right-[-160px] bottom-32 h-[460px] w-[460px] rounded-full bg-teal-300/40 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 inline-flex items-center rounded-full  px-4 py-2 text-sm font-medium text-white">
            How LogiCoach.ai is used
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            One platform.
            <span className="block text-indigo-600">
              Many roles, industries, and goals.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            LogiCoach.ai supports communication training across education,
            business, government, and technical fields — adapting to the
            audience, stakes, and context.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          <EngagementCard
            color="indigo"
            title="Students & Early-Career"
            description="Build argumentation, clarity, and confidence through structured practice and coach-designed feedback."
            tags={[
              "High school & university",
              "Debate & public speaking",
              "Career fairs & interviews",
              "STEM & policy students",
            ]}
          />

          <EngagementCard
            color="teal"
            title="Professionals & Teams"
            description="Standardize communication training with repeatable roleplays, shared evaluation, and measurable growth."
            tags={[
              "Sales & revenue teams",
              "Healthcare & compliance",
              "Security & policy orgs",
              "Engineering & product teams",
            ]}
          />

          <EngagementCard
            color="violet"
            title="Executives & Specialists"
            description="Refine persuasion, presence, and decision-making in high-stakes conversations and public forums."
            tags={[
              "Executives & founders",
              "Technical leaders",
              "Public sector & government",
              "Conference & media speakers",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function EngagementCard({
  title,
  description,
  tags,
  color,
}: {
  title: string;
  description: string;
  tags: string[];
  color: "indigo" | "teal" | "violet";
}) {
  const COLOR_MAP = {
    indigo: {
      bg: "bg-indigo-600",
      soft: "bg-indigo-100",
      text: "text-indigo-700",
      ring: "ring-indigo-300",
    },
    teal: {
      bg: "bg-teal-600",
      soft: "bg-teal-100",
      text: "text-teal-700",
      ring: "ring-teal-300",
    },
    violet: {
      bg: "bg-violet-600",
      soft: "bg-violet-100",
      text: "text-violet-700",
      ring: "ring-violet-300",
    },
  };

  const c = COLOR_MAP[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl bg-white p-8 shadow-lg ring-1 ${c.ring}`}
    >
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 h-full w-2 rounded-l-3xl ${c.bg}`}
      />

      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-4 text-slate-700">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-3 py-1 text-sm font-medium ${c.soft} ${c.text}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
