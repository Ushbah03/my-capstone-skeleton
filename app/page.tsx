import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20 pt-4">
      {/* 1. Hero Block */}
      <section className="max-w-3xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 font-mono">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Available for Frontend Architecture roles</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Engineering digital interfaces with <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400">precision & performance.</span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          I'm a Frontend AI Engineer specializing in building scalable systems, automated pipelines, and interactive user experiences optimized for production performance metrics.
        </p>

        <div className="flex space-x-4 pt-2">
          <Link href="/projects" className="px-5 py-2.5 bg-cyan-500 text-slate-950 font-medium rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
            Explore Artifacts
          </Link>
          <Link href="/contact" className="px-5 py-2.5 bg-slate-900 text-slate-300 border border-slate-800 font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Read Docs / Resume
          </Link>
        </div>
      </section>

      {/* 2. Core Stack Split Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800/60 pt-16">
        <div className="md:col-span-1 space-y-2">
          <h2 className="text-xs uppercase tracking-widest text-slate-500 font-mono">01 // Tech Stack</h2>
          <p className="text-xl font-bold text-slate-200">The toolkits I deploy to production.</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <h3 className="font-mono text-sm text-cyan-400 font-bold mb-1">Architecture</h3>
            <p className="text-xs text-slate-400">Next.js, React Server Components, TypeScript, Webpack</p>
          </div>
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl">
            <h3 className="font-mono text-sm text-indigo-400 font-bold mb-1">Styling Frameworks</h3>
            <p className="text-xs text-slate-400">Tailwind CSS, PostCSS, Radix Primitives, Motion</p>
          </div>
        </div>
      </section>
    </div>
  );
}