import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: "slow" | "normal" | "fast";
}

const speedToDuration: Record<Required<MarqueeProps>["speed"], number> = {
  slow: 45,
  normal: 30,
  fast: 18,
};

export function Marquee({ children, speed = "normal" }: MarqueeProps) {
  const duration = speedToDuration[speed];
  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="marquee-track flex min-h-[3rem] items-center gap-6 whitespace-nowrap text-sm uppercase tracking-[0.4em] text-white/40"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="flex items-center gap-6">
            {children}
            <span className="h-1 w-1 rounded-full bg-white/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
