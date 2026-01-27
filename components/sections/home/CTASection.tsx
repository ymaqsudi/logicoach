"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            See LogiCoach
            <span className="block text-indigo-600">
              before performance is tested.
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            Experience how structured practice, live coaching, and objective
            measurement work together — in the same conditions where real
            decisions are made.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-10"
            >
              <Link href="/demo">Book a demo</Link>
            </Button>

            <span className="text-sm text-slate-500">
              See the system live. No pressure.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
