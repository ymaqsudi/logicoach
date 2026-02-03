"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA]">
      {/* Soft background color accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-1/4 top-1/4 h-[700px] w-[700px] rounded-full bg-indigo-300/30 blur-[140px]" />
        <div className="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-300/25 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-[40%_60%]">
          {/* LEFT — COPY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Train how elite communicators
              <span className="block text-slate-400">actually improve.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600">
              <strong>LogiCoach.ai</strong> is an AI-powered debate and
              communication coach built by real experts — designed to diagnose
              patterns, adapt over time, and build lasting mastery.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#contact"
                className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Start Practicing
              </a>

              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-500 hover:text-slate-700"
              >
                See how it works →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs text-slate-400">
              <span>Powered by</span>
              <Image
                src="/images/techduels/TDLogo.gif"
                alt="Tech Duels"
                width={90}
                height={24}
                className="opacity-70"
              />
            </div>
          </motion.div>

          {/* RIGHT — UNDRAW ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative scale-[1.1] lg:translate-x-6">
              <Image
                src="/images/hero-image-undraw.svg"
                alt="Illustration representing coaching, practice, and improvement"
                width={1600}
                height={900}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
