"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PLAN_NAMES: Record<string, string> = {
  price_1T5G3tEYQwsylCFWt5EzzCw9: "Student — 3 Month",
  price_1T5G4DEYQwsylCFWkrKwkIRZ: "Student — 6 Month",
  price_1T5G4gEYQwsylCFWTWFdFLbK: "Professional — 3 Month",
  price_1T5G4sEYQwsylCFWPC7kPAeP: "Professional — 6 Month",
  price_1T5G53EYQwsylCFW4VPIuH8R: "Executive — 3 Month",
  price_1T5G5IEYQwsylCFW5L0OYudP: "Executive — 6 Month",
};

const NEXT_STEPS = [
  {
    step: "01",
    title: "Check your inbox",
    description:
      "A confirmation email is on its way with your receipt and account details.",
  },
  {
    step: "02",
    title: "Complete your profile",
    description:
      "Tell us about your goals so your coach can tailor the first session to you.",
  },
  {
    step: "03",
    title: "Book your first session",
    description:
      "Use your scheduling link to lock in your first live coaching session.",
  },
  {
    step: "04",
    title: "Start practicing with AI",
    description:
      "Your AI feedback environment is ready — log in and run your first roleplay anytime.",
  },
];

// Separated into its own component so Suspense can wrap the useSearchParams call
function SuccessContent() {
  const searchParams = useSearchParams();
  const [planName, setPlanName] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const priceId = searchParams.get("price_id");
    if (priceId && PLAN_NAMES[priceId]) {
      setPlanName(PLAN_NAMES[priceId]);
    }
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [searchParams]);

  return (
    <div
      className={`w-full max-w-xl transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Checkmark */}
      <div className="flex justify-center mb-8">
        <div className="h-20 w-20 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg
            className="h-9 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Confirmation message */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
          You're in. Let's get to work.
        </h1>
        <p className="mt-3 text-slate-500 text-base leading-relaxed">
          Your payment was successful and your LogiCoach.ai coaching plan is now
          active.
        </p>

        {planName && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-sm font-medium text-indigo-700">
              {planName}
            </span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-slate-200" />

      {/* Next steps */}
      <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
        What happens next
      </h2>
      <div className="space-y-5">
        {NEXT_STEPS.map(({ step, title, description }, i) => (
          <div
            key={step}
            className={`flex gap-4 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${150 + i * 80}ms` }}
          >
            <div className="flex-shrink-0 h-9 w-9 rounded-full bg-white ring-1 ring-slate-200 flex items-center justify-center text-xs font-semibold text-indigo-600">
              {step}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{title}</p>
              <p className="text-sm text-slate-500 mt-0.5">{description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10">
        <Link
          href="/"
          className="block w-full rounded-full bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

// Default export wraps SuccessContent in Suspense — required by Next.js 14
// for any component that uses useSearchParams()
export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-start px-6 py-24">
      <Suspense
        fallback={<div className="text-slate-400 text-sm">Loading...</div>}
      >
        <SuccessContent />
      </Suspense>
    </main>
  );
}
