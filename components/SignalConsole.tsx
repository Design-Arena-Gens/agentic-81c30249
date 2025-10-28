"use client";

import { useMemo, useState } from "react";

interface SignalPreset {
  id: string;
  name: string;
  frequency: string;
  description: string;
}

interface SignalConsoleProps {
  presets: SignalPreset[];
}

const COLOR_SETS = [
  ["#5360ff", "#f8d3ff"],
  ["#7b86ff", "#ffb4e6"],
  ["#2938ff", "#9fd8ff"],
];

export function SignalConsole({ presets }: SignalConsoleProps) {
  const [activePreset, setActivePreset] = useState(presets[0]);
  const [intensity, setIntensity] = useState(60);

  const gradient = useMemo(() => {
    const colors = COLOR_SETS[presets.findIndex((preset) => preset.id === activePreset.id)] ?? COLOR_SETS[0];
    const [start, end] = colors;
    return `radial-gradient(circle at center, ${start} ${30 + intensity / 4}%, rgba(6, 7, 26, 0.2) 80%), radial-gradient(circle at top left, ${end} ${20 + intensity / 10}%, transparent 80%)`;
  }, [activePreset.id, intensity, presets]);

  return (
    <div className="grid gap-6 lg:grid-cols-[2fr,3fr]">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Presets</p>
        <div className="flex flex-wrap gap-3">
          {presets.map((preset) => {
            const isActive = preset.id === activePreset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => setActivePreset(preset)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-glow bg-white/10 text-white shadow-[0_0_25px_rgba(248,211,255,0.3)]"
                    : "border-white/10 text-white/70 hover:border-white/30"
                }`}
              >
                {preset.name}
              </button>
            );
          })}
        </div>
        <div className="gradient-border">
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Frequency</span>
              <span className="font-mono text-white">{activePreset.frequency}</span>
            </div>
            <p className="text-sm text-white/80">{activePreset.description}</p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-ink-300">
              <span>Intensity</span>
              <input
                type="range"
                min={0}
                max={100}
                value={intensity}
                onChange={(event) => setIntensity(Number(event.target.value))}
                className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10"
              />
              <span className="w-12 text-right font-mono text-white/60">{intensity}</span>
            </label>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
        <div
          className="h-full w-full rounded-2xl transition-all duration-700 ease-out"
          style={{
            backgroundImage: gradient,
            boxShadow: `0 0 ${30 + intensity / 2}px rgba(123, 134, 255, 0.25)`,
            filter: `saturate(${1 + intensity / 90})`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-20" />
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />
      </div>
    </div>
  );
}
