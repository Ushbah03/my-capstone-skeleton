import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Developer Portfolio & Engineering Showcase",
  description: "Senior Frontend AI Engineer Capstone Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans antialiased flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Global Floating Glass Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#0B0F19]/70 backdrop-blur-md">
          <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="group flex items-center space-x-2 font-mono tracking-tight">
              <span className="text-cyan-400 font-bold text-lg">&lt;</span>
              <span className="text-slate-200 font-bold group-hover:text-white transition-colors">Dev.Specs</span>
              <span className="text-cyan-400 font-bold text-lg">/&gt;</span>
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

        {/* Dynamic Content Wrapper */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12 relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900 bg-[#070a12] py-6 text-center text-xs text-slate-600 font-mono">
          // built using next.js app architecture & tailwind design tokens
        </footer>
      </body>
    </html>
  );
}