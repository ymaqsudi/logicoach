import Image from "next/image";
import { ReactNode } from "react";

type ProductShowcaseProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: ReactNode;
  domains?: string[];
  imageSrc?: string;
};

export default function ProductShowcase({
  id,
  eyebrow = "Expert Roleplay Library",
  title = "Endless practice scenarios, built by real coaches",
  description = "Logicoach is powered by a deep library of roleplays, frameworks, and training materials designed by debate coaches with over a decade of live, high-stakes experience.",
  domains = [],
  imageSrc = "/images/showcase.png",
}: ProductShowcaseProps) {
  return (
    <section id={id} className="relative scroll-mt-24 bg-[#F5F7FA] px-6 py-28">
      {/* Ambient depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute right-[-140px] bottom-1/4 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl rounded-[32px] bg-white p-14 shadow-sm ring-1 ring-slate-200">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />
              {eyebrow}
            </p>

            <h3 className="text-4xl font-semibold tracking-tight text-slate-900">
              {title}
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>

            {domains.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 text-sm font-medium text-slate-900">
                  This supports:
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-600">
                  {domains.map((domain) => (
                    <div key={domain} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {domain}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
              <Image
                src={imageSrc}
                alt={title}
                width={900}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
