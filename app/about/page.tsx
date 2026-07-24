export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">path: /biography</h2>
        <h1 className="text-4xl font-bold text-white">About the Engineer</h1>
      </div>
      <div className="prose prose-invert text-slate-400 space-y-4 leading-relaxed">
        <p>
          I design robust front-end architectures that bridge computational AI logic with consumer-facing platforms. With an emphasis on clean structures and type-safe infrastructure, my workflows map exactly to business criteria.
        </p>
        <p>
          Prioritizing light system metrics, strict code standards, and fluid layout responsiveness, I craft digital environments meant to perform smoothly across every modern display size.
        </p>
      </div>
    </div>
  );
}