export default async function HealthPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {
    cache: "no-store",
  });
  
  if (!res.ok) throw new Error("Connection fault detected");
  const users = await res.json();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400">runtime_metrics: live</h2>
        <h1 className="text-4xl font-bold text-white">System Diagnostics</h1>
      </div>

      <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs space-y-4 shadow-2xl">
        <div className="flex items-center space-x-2 text-emerald-400 border-b border-slate-900 pb-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>[OK] REMOTE API DATAPIPE PIPELINE SYNCED SUCCESSFUL</span>
        </div>
        
        <div className="space-y-3 pt-1">
          {users.map((user: any) => (
            <div key={user.id} className="p-3 bg-slate-900/60 border border-slate-800/40 rounded flex items-center justify-between">
              <div>
                <span className="text-slate-500">record_id: {user.id} // </span>
                <span className="text-slate-200 font-semibold">{user.name}</span>
              </div>
              <span className="text-cyan-400 text-[11px]">{user.email}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}