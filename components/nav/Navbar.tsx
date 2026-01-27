"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            LogiCoach
          </span>
        </Link>

        {/* Minimal Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#solution"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            About
          </Link>

          <Link
            href="#pricing"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <Link href="#cta">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            Book a demo
          </Button>
        </Link>
      </div>
    </header>
  );
}
