// components/ProductNavSection.tsx
import ProductTabsNav from "@/components/ProductTabsNav";

export default function ProductNavSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative bg-[#F5F7FA]">
      {/* Sticky nav */}
      <div className="sticky top-[96px] z-40 bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <ProductTabsNav />
        </div>
      </div>

      {/* Product content */}
      <div>{children}</div>
    </section>
  );
}
