"use client";

const tabs = [
  { label: "How it works", href: "#how-it-works" },
  { label: "For individuals", href: "#individuals" },
  { label: "For teams & orgs", href: "#organizations" },
  { label: "Expert coaching", href: "#expert-coaching" },
  { label: "Live showcase", href: "#live-showcase" },
];

export default function ProductTabsNav() {
  return (
    <div className="mx-auto flex max-w-fit gap-2 rounded-full bg-slate-900/90 p-1 shadow-lg">
      {tabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          className="rounded-full px-5 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
        >
          {tab.label}
        </a>
      ))}
    </div>
  );
}
