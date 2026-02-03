import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-sm">
          Testimonials
        </span>

        <h2 className="mt-6 text-5xl font-medium">
          Dealers just like you are already growing with Pam.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}
