import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: LogiCoach.ai logo (links to top) */}
        <a
          href="#product"
          className="flex items-center transition hover:opacity-90"
          aria-label="Go to top"
        >
          <Image
            src="/images/clean-LC-Logo.png"
            alt="LogiCoach.ai"
            width={160}
            height={32}
            priority
          />
        </a>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#how-it-works" className="hover:text-slate-900">
            Product
          </a>
          <a href="#individuals" className="hover:text-slate-900">
            Individuals
          </a>
          <a href="#organizations" className="hover:text-slate-900">
            Organizations
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            Pricing
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>

        {/* Right: CTA + Tech Duels */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Book a Demo
          </a>

          <span className="hidden h-5 w-px bg-slate-200 sm:block" />

          <a
            href="https://techduels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-100"
            aria-label="Visit Tech Duels"
          >
            <Image
              src="/images/techduels/TDLogo.gif"
              alt="Tech Duels"
              width={100}
              height={40}
              className="opacity-80"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
