export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">LogiCoach</p>
            <p className="mt-1 text-sm text-slate-600">
              Competitive communication training rooted in debate + AI
              analytics.
            </p>
          </div>

          <div className="text-sm text-slate-600">
            <span className="text-slate-400">© {new Date().getFullYear()}</span>{" "}
            LogiCoach.ai
          </div>
        </div>
      </div>
    </footer>
  );
}
