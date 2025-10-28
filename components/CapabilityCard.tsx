interface CapabilityCardProps {
  title: string;
  description: string;
  highlights: string[];
  index: number;
}

export function CapabilityCard({ title, description, highlights, index }: CapabilityCardProps) {
  return (
    <article className="gradient-border h-full">
      <div className="flex h-full flex-col gap-6 p-8">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.4em] text-ink-400">
          <span>Cluster</span>
          <span>{index.toString().padStart(2, "0")}</span>
        </div>
        <h3 className="font-display text-2xl text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
        <ul className="mt-auto space-y-2 text-sm text-ink-100/90">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
