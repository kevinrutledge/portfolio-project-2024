import { crimsonPro, utopia } from "@/config/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Rutledge Personal Website",
  description: "A personal website for Kevin Rutledge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${utopia.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-text">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
