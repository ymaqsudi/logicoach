import ProductTabsNav from "@/components/ProductTabsNav";

export default function ProductIntro() {
  return (
    <>
      {/* Intro copy */}
      <section className="bg-[#F5F7FA] pt-24 pb-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-medium text-indigo-600">
            How Logicoach works
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">
            Practice the way coaches actually train speakers.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Logicoach combines expert-designed debate frameworks with adaptive
            AI roleplays — so every session builds on the last.
          </p>
        </div>
      </section>
    </>
  );
}
