interface RitualCardProps {
  phase: string;
  title: string;
  summary: string;
  artifacts: string[];
}

export function RitualCard({ phase, title, summary, artifacts }: RitualCardProps) {
  return (
    <article className="relative grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="absolute left-6 top-6 text-sm font-semibold text-ink-400/70">{phase}</div>
      <h3 className="mt-8 font-display text-2xl text-white">{title}</h3>
      <p className="text-white/70">{summary}</p>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Artifacts</p>
        <ul className="mt-3 space-y-1 text-sm text-white/80">
          {artifacts.map((artifact) => (
            <li key={artifact} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-glow" />
              {artifact}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
