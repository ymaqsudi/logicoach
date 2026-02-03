export default function DashboardCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid gap-10 lg:grid-cols-3">{children}</div>;
}
