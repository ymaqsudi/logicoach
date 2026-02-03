"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative bg-slate-900 px-6 py-28 text-white"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-140px] bottom-1/4 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Header */}
        <p className="mb-4 text-sm font-medium text-indigo-400">Contact</p>

        <h2 className="text-4xl font-semibold tracking-tight">
          Start the conversation.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Whether you’re an individual working on communication skills, a
          university exploring training tools, or an organization looking to
          scale coaching — we’re happy to talk.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          Tell us a bit about what you’re looking for and we’ll help you figure
          out the best next step.
        </p>

        {/* Form */}
        <div className="mx-auto mt-14 max-w-xl">
          {submitted ? (
            <div className="rounded-2xl bg-slate-800 p-8 ring-1 ring-slate-700">
              <h3 className="text-xl font-semibold">Thanks — we’ve got it.</h3>
              <p className="mt-3 text-sm text-slate-400">
                Someone from our team will follow up shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6 rounded-2xl bg-slate-800 p-8 ring-1 ring-slate-700"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <select
                required
                className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-white ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">What best describes you?</option>
                <option>Individual learner</option>
                <option>University / education program</option>
                <option>Company or organization</option>
                <option>Event or live showcase</option>
                <option>Something else</option>
              </select>

              <textarea
                placeholder="Anything you’d like us to know?"
                rows={4}
                className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 ring-1 ring-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
