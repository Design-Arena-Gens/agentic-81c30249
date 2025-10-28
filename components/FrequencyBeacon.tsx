interface FrequencyBeaconProps {
  label: string;
  description: string;
}

export function FrequencyBeacon({ label, description }: FrequencyBeaconProps) {
  return (
    <div className="glow-ring relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8">
      <div className="relative space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-glow">Beacon</p>
        <h3 className="font-display text-xl text-white">{label}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
