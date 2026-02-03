"use client";

import { motion, type Variants } from "framer-motion";
import StatsPill from "@/components/StatsPill";

/* ------------------------------
   Animation variants (TS-safe)
------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1], // ✅ FIX
    },
  },
};

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-20">
      {/* Animated background accents */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 top-24 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-80px] h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"
          animate={{ y: [0, 24, 0] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-200"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-600" />
          Built for real improvement
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Progress you can see.
          <span className="block text-slate-400">Feedback you can trust.</span>
        </motion.h2>

        {/* Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants}>
            <StatsPill
              accent="indigo"
              title="Longitudinal Improvement"
              description="Track how communication patterns evolve across sessions — not just single performances."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatsPill
              accent="violet"
              title="Coach-Calibrated Feedback"
              description="Evaluation criteria designed by debate coaches, not generic AI heuristics."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatsPill
              accent="sky"
              title="Multi-Dimension Analysis"
              description="Delivery, listening, and word choice analyzed together — the way coaches actually assess speakers."
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatsPill
              accent="teal"
              title="Structured Practice Loops"
              description="Practice, feedback, adjustment, and repetition — with clear next steps every session."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
