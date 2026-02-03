"use client";

import { motion } from "framer-motion";

export default function InsightMetricCard({
  title,
  metric,
  note,
  accent = "indigo",
}: {
  title: string;
  metric: string;
  note: string;
  accent?: "indigo" | "violet" | "teal";
}) {
  const colors = {
    indigo: "text-indigo-400 bg-indigo-500/10",
    violet: "text-violet-400 bg-violet-500/10",
    teal: "text-teal-400 bg-teal-500/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
    >
      <div
        className={`inline-block rounded-full px-3 py-1 text-sm ${colors[accent]}`}
      >
        {title}
      </div>

      <div className="mt-4 text-2xl font-semibold text-white">{metric}</div>

      <p className="mt-3 text-sm text-slate-300">{note}</p>
    </motion.div>
  );
}
