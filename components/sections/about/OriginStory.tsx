"use client";

import Image from "next/image";

export function OriginStory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-36">
        <div className="grid gap-24 md:grid-cols-12 md:items-start">
          {/* Left: Story + imagery */}
          <div className="md:col-span-7">
            <div className="mb-8 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />

            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">
              Where LogiCoach comes from
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-[1.6] text-slate-700">
              LogiCoach is built on the methodology developed through Tech Duels
              — a competitive communication platform used by universities,
              companies, and professional programs to train real-time thinking
              under pressure.
            </p>

            <p className="mt-6 max-w-2xl text-xl leading-[1.6] text-slate-700">
              Over years of live events, coaching sessions, and institutional
              partnerships, one pattern became clear: structured, competitive
              training consistently produced stronger communicators than
              traditional presentation or role-play formats.
            </p>

            {/* Image cluster */}
            <div className="mt-14 grid grid-cols-12 gap-6">
              {/* Large anchor image */}
              <div className="relative col-span-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/images/techduels/TechDuels-0272.jpg"
                    alt="Live Tech Duels event under evaluation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Supporting images */}
              <div className="relative col-span-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/techduels/DSC_3200.JPG"
                    alt="Audience and judges observing live performance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative col-span-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/techduels/TechDuels-0106.jpg"
                    alt="Participants responding under pressure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Proven insights */}
          <div className="md:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-[var(--soft-50)] p-10">
              {/* Accent rail */}
              <div className="absolute left-10 top-0 h-1.5 w-20 rounded-full bg-[var(--accent-600)]" />

              <h3 className="text-xl font-semibold text-slate-950">
                What Tech Duels proved
              </h3>

              <ul className="mt-8 space-y-5 text-lg text-slate-700">
                <li>• Pressure reveals real communication habits</li>
                <li>• Structure outperforms scripts every time</li>
                <li>• Competition increases engagement and retention</li>
                <li>
                  • Coaching is most effective when paired with feedback loops
                </li>
              </ul>

              <p className="mt-10 text-base leading-relaxed text-slate-600">
                LogiCoach operationalizes these insights into a scalable,
                repeatable system — without losing the rigor that made the
                methodology work in live environments.
              </p>

              <div className="mt-10 h-1.5 w-16 rounded-full bg-[var(--accent-600)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
