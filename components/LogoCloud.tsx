// components/social-proof/LogoCloud.tsx
export default function LogoCloud() {
  const logos = ["Toyota", "Audi", "Honda", "Volkswagen", "Acura", "Suburban"];

  return (
    <section className="py-12">
      <p className="mb-6 text-center text-sm text-slate-400">
        Hundreds of dealerships already run on Logicoach
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {logos.map((logo) => (
          <span key={logo} className="text-sm font-medium text-slate-500">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
