import Link from "next/link";
import React from "react";
import "./globals.css";

export const metadata = {
  title: "Dev Showcase",
  description: "Modern portfolio layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans antialiased flex flex-col">
        {/* Floating Glass Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#0B0F19]/70 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-mono tracking-tight text-slate-200 font-bold hover:text-cyan-400 transition-colors">
              &lt;Dev.Specs /&gt;
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                .bio()
              </Link>
              <Link href="/projects" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                .works()
              </Link>
              <Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors">
                .connect()
              </Link>
              <Link href="/health" className="text-xs font-mono px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                system_status: OK
              </Link>
            </div>
          </nav>
        </header>

        {/* Dynamic Content Section */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900 bg-[#070a12] py-6 text-center text-xs text-slate-600 font-mono">
          // built using next.js app architecture
        </footer>
      </body>
    </html>
  );
}