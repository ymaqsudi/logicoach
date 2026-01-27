"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const scenarios = [
  {
    title: "Buyer objection",
    body: "“Why should we change vendors now?”",
  },
  {
    title: "Coach intervention",
    body: "Clarify impact. Tighten structure. Remove filler.",
  },
  {
    title: "Improved response",
    body: "Clear value, controlled delivery, confident close.",
  },
];

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % scenarios.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-32 grid gap-20 md:grid-cols-12 items-center">
        {/* LEFT: message + subtle visual treatment */}
        <div className="relative md:col-span-6">
          {/* subtle background design */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* soft radial glow */}
            <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#4F46E5]/10 blur-3xl" />

            {/* faint grid texture */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* fade to clean white */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-transparent to-transparent" />
          </div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-[#0F172A]"
          >
            Professional communication,
            <span className="block text-[#4F46E5]">
              trained for real conversations.
            </span>
          </motion.h1>

          <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#475569]">
            LogiCoach helps teams turn coaching into performance through
            structured practice, live feedback, and objective measurement.
          </p>

          <div className="mt-10 flex gap-4">
            <Button
              size="lg"
              className="bg-[#4F46E5] text-white hover:bg-[#4338CA]"
            >
              Book a demo
            </Button>

            <Button size="lg" variant="outline">
              See how it works
            </Button>
          </div>
        </div>

        {/* RIGHT: visual system */}
        <div className="md:col-span-6">
          <div className="relative rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <p className="mb-6 text-sm font-semibold text-[#475569]">
              Live coaching loop
            </p>

            <div className="grid gap-6">
              {/* Scenario cards */}
              <div className="relative h-[140px]">
                {scenarios.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={false}
                    animate={{
                      opacity: active === i ? 1 : 0,
                      y: active === i ? 0 : 12,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <ScenarioCard
                      title={s.title}
                      body={s.body}
                      highlighted={i === active}
                    />
                  </motion.div>
                ))}
              </div>

              {/* SVG illustration */}
              <div className="relative mx-auto w-full max-w-sm">
                <Image
                  src="/images/svg/undraw_device-sync_d9ei.svg"
                  alt="System in sync illustration"
                  width={420}
                  height={280}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helper ---------- */

function ScenarioCard({
  title,
  body,
  highlighted,
}: {
  title: string;
  body: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 transition ${
        highlighted
          ? "border-[#4F46E5] bg-[#EEF2FF]"
          : "border-[#E5E7EB] bg-white"
      }`}
    >
      <p className="text-sm font-semibold text-[#0F172A]">{title}</p>
      <p className="mt-2 text-base text-[#475569]">{body}</p>
    </div>
  );
}
