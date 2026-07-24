export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">path: /connect</h2>
        <h1 className="text-4xl font-bold text-white">Initiate Integration</h1>
      </div>
      <p className="text-slate-400 text-sm"> Drop an inquiry route to start discussing architecture pipelines, design systems, or contract engineering roles. </p>
      
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Identity Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 text-sm" />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-slate-500 mb-1">Email Endpoint</label>
          <input type="email" placeholder="john@domain.com" className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 text-slate-200 rounded-lg focus:outline-none focus:border-cyan-500 text-sm" />
        </div>
        <button type="submit" className="w-full py-2.5 bg-slate-800 text-slate-300 font-mono text-xs uppercase font-bold rounded-lg border border-slate-700 hover:bg-slate-700 hover:text-white transition-all tracking-wider">
          Transmit Message --secure
        </button>
      </form>
    </div>
  );
}