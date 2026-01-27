"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-36">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Pricing built around
            <span className="block text-indigo-600">
              how teams actually deploy training
            </span>
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-slate-600">
            Start small. Prove impact. Scale when performance improves.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          {/* Individual */}
          <Plan
            tag="Individual"
            title="Personal practice"
            price="$49 / month"
            description="For professionals who want private, structured practice and objective feedback."
            bullets={[
              "Scenario-based practice",
              "AI performance scoring",
              "Progress tracking over time",
              "Private, self-paced use",
            ]}
            cta="Get started"
            href="/demo"
          />

          {/* University */}
          <Plan
            tag="University & Programs"
            title="Cohort-based learning"
            price="Seat-based pricing"
            description="Designed for courses, bootcamps, and professional programs."
            bullets={[
              "Rotating seat access",
              "Instructor dashboards",
              "Structured evaluation cycles",
              "Capstone performance reviews",
            ]}
            cta="View program options"
            href="/demo"
            featured
          />

          {/* Team / Enterprise */}
          <Plan
            tag="Teams & Enterprise"
            title="Sales & leadership enablement"
            price="Contact sales"
            description="For organizations training communication where outcomes matter."
            bullets={[
              "Live coaching integration",
              "Custom scenarios & rubrics",
              "Team & cohort analytics",
              "SSO, security, and data controls",
            ]}
            cta="Contact sales"
            href="/demo"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper ---------- */

function Plan({
  tag,
  title,
  price,
  description,
  bullets,
  cta,
  href,
  featured,
}: {
  tag: string;
  title: string;
  price: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border p-10 ${
        featured
          ? "border-indigo-600 bg-indigo-50/40 shadow-lg"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Tag */}
      <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {tag}
      </span>

      <h3 className="text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-3xl font-semibold text-slate-900">{price}</p>

      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        {description}
      </p>

      <ul className="mt-8 space-y-3 text-base text-slate-700">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>

      <div className="mt-auto pt-10">
        <Button
          asChild
          size="lg"
          className={
            featured
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }
        >
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </div>
  );
}
