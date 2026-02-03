import Image from "next/image";

export default function RevenueAnalyticalPanel() {
  return (
    <div className="lg:col-span-2 rounded-[28px] bg-[#E9EEF4] p-10">
      <h3 className="text-2xl font-semibold text-slate-900">
        Session Analytics
      </h3>

      <p className="mt-2 max-w-md text-slate-600">
        Review pacing, delivery, and engagement patterns across recent sessions
        to understand what’s improving — and what’s consistent.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        {/* Analytics visual */}
        <div className="relative overflow-hidden rounded-xl bg-slate-50">
          <Image
            src="/images/analytics.svg"
            alt="LogiCoach session analytics visualization"
            width={800}
            height={400}
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
