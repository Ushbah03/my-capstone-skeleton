export default function ProjectsPage() {
  const sampleProjects = [
    { title: "NeuroFlow Dashboard", desc: "Real-time AI telemetry rendering engine built via server components.", tech: "Next.js / Tailwind" },
    { title: "Vault-Auth Pipeline", desc: "Secure environment orchestration layer passing zero security leaks.", tech: "TypeScript / Node" }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400">path: /production-artifacts</h2>
        <h1 className="text-4xl font-bold text-white">Selected Works</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleProjects.map((p, idx) => (
          <div key={idx} className="p-6 bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl hover:border-slate-700 transition-all group">
            <span className="text-xs font-mono text-slate-600 block mb-2">0{idx + 1} // STABLE RELEASE</span>
            <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            <span className="inline-block mt-4 text-xs font-mono px-2 py-1 bg-slate-800 text-slate-400 rounded">{p.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}