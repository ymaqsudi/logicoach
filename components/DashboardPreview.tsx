export default function DashboardPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#F5F7FA] px-6 py-32">
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
