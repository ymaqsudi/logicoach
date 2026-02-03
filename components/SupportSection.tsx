import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function SupportSection() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Support"
          title="Coaching is built in."
          subtitle="Logicoach is designed to work alongside real coaching — not replace it. Whether you’re practicing solo or inside a structured program, support is part of the system."
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* LEFT — COACHING PRINCIPLES */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Coach-built by design
              </h3>
              <p className="mt-2 text-slate-600">
                Every persona, roleplay, and feedback signal is created by
                debate coaches — not generated on the fly. The system reflects
                how real coaching actually works.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Focus one skill at a time
              </h3>
              <p className="mt-2 text-slate-600">
                Sessions are scoped deliberately. Practice pacing, listening, or
                clarity in isolation. Short reps. Clear intent. Repeat.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Accountability when you want it
              </h3>
              <p className="mt-2 text-slate-600">
                Optional coaching programs and showcases add real-world pressure
                — the kind that turns practice into performance.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-6">
              <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500">
                Book a demo
              </button>

              <button className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
                Ask a question →
              </button>
            </div>
          </div>

          {/* RIGHT — VISUAL + EXPECTATIONS */}
          <div className="rounded-2xl bg-slate-50 p-10 ring-1 ring-slate-200">
            {/* IMAGE */}
            <div className="mb-10 flex justify-center">
              <Image
                src="/images/svg/together.svg"
                alt="Coach and learner working together"
                width={220}
                height={180}
                className="opacity-90"
              />
            </div>

            <h3 className="text-lg font-semibold text-slate-900">
              What support looks like in practice
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-700">
              <li>• Feedback grounded in coaching frameworks</li>
              <li>• Trends tracked across sessions, not judged in isolation</li>
              <li>• Clear focus areas instead of vague scores</li>
              <li>• Progress that compounds over time</li>
              <li>• Optional human coaching when you’re ready</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
