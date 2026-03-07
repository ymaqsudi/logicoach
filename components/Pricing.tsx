"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";

// ─── Standard price IDs ───────────────────────────────────────────────────────
const PRICE_IDS = {
  Student: {
    threeMonth: "price_1T5G3tEYQwsylCFWt5EzzCw9",
    sixMonth: "price_1T5G4DEYQwsylCFWkrKwkIRZ",
  },
  Professional: {
    threeMonth: "price_1T5G4gEYQwsylCFWTWFdFLbK",
    sixMonth: "price_1T5G4sEYQwsylCFWPC7kPAeP",
  },
  Executive: {
    threeMonth: "price_1T5G53EYQwsylCFW4VPIuH8R",
    sixMonth: "price_1T5G5IEYQwsylCFW5L0OYudP",
  },
};

// ─── Company promo codes ──────────────────────────────────────────────────────
// Each code maps to a single overriding price ID (flat custom price).
// Add the price_ IDs from Stripe once you've created the products.
const COMPANY_CODES: Record<string, { priceId: string; label: string }> = {
  ACEOFCLOUD: {
    priceId: "price_1T8QnWEYQwsylCFWAYqJkpoR", // $549 / 3 months
    label: "Ace of Cloud — 3 Month ($549)",
  },
  VIANOVA: {
    priceId: "price_1T8QnjEYQwsylCFWefYYOser", // $999 / 6 months
    label: "Vianova — 6 Month ($999)",
  },
};

export default function Pricing() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<{
    priceId: string;
    label: string;
  } | null>(null);

  function handleApplyCode() {
    const code = promoCode.trim().toUpperCase();
    if (COMPANY_CODES[code]) {
      setAppliedPromo(COMPANY_CODES[code]);
      setPromoError("");
    } else {
      setAppliedPromo(null);
      setPromoError("Code not recognised. Check with your company contact.");
    }
  }

  function handleRemoveCode() {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  }

  async function handleCheckout(priceId: string) {
    setLoadingId(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: appliedPromo ? appliedPromo.priceId : priceId,
          allowPromotionCodes: true,
        }),
      });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      setLoadingId(null);
    }
  }

  return (
    <section className="bg-[#F5F7FA] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Serious coaching, tailored by level."
          subtitle="LogiCoach.ai is priced for commitment to skill-building — from individual mastery to organization-wide training."
        />

        {/* =======================
           INDIVIDUAL COACHING
        ======================= */}
        <div className="mt-16">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Individual Coaching
          </h3>

          <div className="grid gap-10 lg:grid-cols-3">
            <TierCard
              title="Student"
              bestFor="Students & early career"
              coreValue="Confidence & Foundations"
              threeMonths="$449 / 3 months"
              sixMonths="$749 / 6 months"
              priceIds={PRICE_IDS.Student}
              loadingId={loadingId}
              onCheckout={handleCheckout}
              companyOverride={appliedPromo}
            />
            <TierCard
              title="Professional"
              bestFor="Working professionals"
              coreValue="Performance & Results"
              threeMonths="$679 / 3 months"
              sixMonths="$1,299 / 6 months"
              priceIds={PRICE_IDS.Professional}
              loadingId={loadingId}
              onCheckout={handleCheckout}
              featured
              companyOverride={appliedPromo}
            />
            <TierCard
              title="Executive"
              bestFor="Leaders & founders"
              coreValue="Influence & Leadership"
              threeMonths="$799 / 3 months"
              sixMonths="$1,499 / 6 months"
              priceIds={PRICE_IDS.Executive}
              loadingId={loadingId}
              onCheckout={handleCheckout}
              companyOverride={appliedPromo}
            />
          </div>

          {/* =======================
            COMPANY CODE — subtle, tucked at the bottom
        ======================= */}
          <div className="mt-16 flex flex-col items-center gap-2">
            {appliedPromo ? (
              <div className="flex items-center gap-3 rounded-full bg-green-50 border border-green-200 px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-700">
                  {appliedPromo.label} applied
                </span>
                <button
                  onClick={handleRemoveCode}
                  className="ml-2 text-xs text-green-500 hover:text-green-700 underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCode()}
                  placeholder="Have a company code?"
                  className="rounded-full border border-slate-200 bg-transparent px-4 py-1.5 text-xs text-slate-400 placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-slate-300 w-44"
                />
                <button
                  onClick={handleApplyCode}
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-500 transition"
                >
                  Apply
                </button>
              </div>
            )}
            {promoError && <p className="text-xs text-red-400">{promoError}</p>}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            All individual plans include{" "}
            <strong>2 hours of live coaching per month</strong>, plus
            coach-calibrated AI feedback between sessions.
          </p>
        </div>

        {/* =======================
           KEY DIFFERENCES
        ======================= */}
        <div className="mt-20 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
          <div className="px-8 py-6 border-b border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Key differences by tier
            </h3>
          </div>
          <div className="grid grid-cols-4 text-sm">
            <TableHeader />
            <TableRow
              label="Coaching focus"
              student="Fundamentals"
              professional="Work performance"
              executive="Strategic influence"
            />
            <TableRow
              label="AI feedback style"
              student="Guided"
              professional="Applied"
              executive="Strategized"
            />
            <TableRow
              label="Session style"
              student="Instructional"
              professional="Goal-driven"
              executive="Advisory"
            />
            <TableRow
              label="Async feedback"
              student="—"
              professional="—"
              executive="✓ Included"
            />
            <TableRow
              label="Pre-session prep"
              student="—"
              professional="—"
              executive="✓ Included"
            />
            <TableRow
              label="Priority scheduling"
              student="—"
              professional="—"
              executive="✓ Included"
            />
          </div>
        </div>

        {/* =======================
           INSTITUTIONS & TEAMS
        ======================= */}
        <div className="mt-28">
          <h3 className="mb-6 text-xl font-semibold text-slate-900">
            Institutions & Organizations
          </h3>
          <div className="grid gap-10 md:grid-cols-2">
            <OrgCard
              title="Universities & Education"
              description="Curriculum-aligned communication training for courses, debate teams, and academic programs."
              features={[
                "Curriculum-aligned roleplays",
                "Student & cohort dashboards",
                "Faculty & coach access",
                "Live showcases & evaluations",
              ]}
            />
            <OrgCard
              title="Corporate Teams"
              description="Standardized communication training for sales, leadership, compliance, and technical teams."
              features={[
                "Roleplays tailored to your domain",
                "Consistent evaluation across teams",
                "Advanced analytics & reporting",
                "Live Tech Duels showcases",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================
   TIER CARD
====================== */

function TierCard({
  title,
  bestFor,
  coreValue,
  threeMonths,
  sixMonths,
  priceIds,
  loadingId,
  onCheckout,
  companyOverride,
  featured = false,
}: {
  title: string;
  bestFor: string;
  coreValue: string;
  threeMonths: string;
  sixMonths: string;
  priceIds: { threeMonth: string; sixMonth: string };
  loadingId: string | null;
  onCheckout: (priceId: string) => void;
  companyOverride: { priceId: string; label: string } | null;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl bg-white p-8 ring-1 transition ${
        featured
          ? "ring-indigo-400 shadow-lg"
          : "ring-slate-200 hover:ring-indigo-300"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-medium text-white">
          Most popular
        </div>
      )}

      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{bestFor}</p>

      <p className="mt-4 text-sm font-medium text-slate-700">Core value</p>
      <p className="text-slate-600">{coreValue}</p>

      <div className="mt-6 space-y-3">
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xl font-semibold text-slate-900">{threeMonths}</p>
        </div>
        <div className="rounded-xl bg-indigo-50 px-4 py-3">
          <p className="text-xl font-semibold text-indigo-700">{sixMonths}</p>
          <p className="text-xs text-indigo-400 mt-0.5">Best value</p>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {companyOverride ? (
          <button
            onClick={() => onCheckout(companyOverride.priceId)}
            disabled={loadingId !== null}
            className="w-full rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loadingId === companyOverride.priceId
              ? "Redirecting…"
              : `Checkout — ${companyOverride.label}`}
          </button>
        ) : (
          <>
            <button
              onClick={() => onCheckout(priceIds.threeMonth)}
              disabled={loadingId !== null}
              className="w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loadingId === priceIds.threeMonth
                ? "Redirecting…"
                : "Start 3-month plan"}
            </button>
            <button
              onClick={() => onCheckout(priceIds.sixMonth)}
              disabled={loadingId !== null}
              className="w-full rounded-full border border-indigo-300 px-6 py-3 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loadingId === priceIds.sixMonth
                ? "Redirecting…"
                : "Start 6-month plan"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ======================
   ORG CARD
====================== */

function OrgCard({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="mt-8 block w-full rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-medium text-slate-900 transition hover:border-indigo-400 hover:text-indigo-600"
      >
        Contact sales
      </a>
    </div>
  );
}

/* ======================
   TABLE
====================== */

function TableHeader() {
  return (
    <>
      <Cell header />
      <Cell header>Student</Cell>
      <Cell header>Professional</Cell>
      <Cell header>Executive</Cell>
    </>
  );
}

function TableRow({
  label,
  student,
  professional,
  executive,
}: {
  label: string;
  student: string;
  professional: string;
  executive: string;
}) {
  return (
    <>
      <Cell>{label}</Cell>
      <Cell muted>{student}</Cell>
      <Cell muted>{professional}</Cell>
      <Cell muted>{executive}</Cell>
    </>
  );
}

function Cell({
  children,
  header = false,
  muted = false,
}: {
  children?: React.ReactNode;
  header?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`px-8 py-4 border-b border-slate-100 ${
        header
          ? "font-semibold text-slate-900 bg-slate-50"
          : muted
            ? "text-slate-600"
            : "text-slate-900"
      }`}
    >
      {children}
    </div>
  );
}
