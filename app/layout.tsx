// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LogiCoach.ai",
    template: "%s · LogiCoach.ai",
  },
  description:
    "LogiCoach.ai is an AI-powered debate and communication coach built by experts — designed to diagnose patterns, adapt over time, and drive real mastery.",
  applicationName: "LogiCoach.ai",
  metadataBase: new URL("https://logicoach.ai"), // change if needed
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#1e293b", // slate-800 vibe, safe + premium
  openGraph: {
    title: "LogiCoach.ai",
    description:
      "Train how elite communicators actually improve. Debate-trained coaching powered by AI.",
    url: "https://logicoach.ai",
    siteName: "LogiCoach.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LogiCoach.ai",
    description: "AI debate and communication coaching built by real experts.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
