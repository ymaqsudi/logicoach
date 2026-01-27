import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/sections/home/Footer";

export const metadata: Metadata = {
  title: "LogiCoach",
  description:
    "AI-powered sales enablement built on debate-trained coaching + measurable analytics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
