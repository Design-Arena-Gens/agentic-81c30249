import type { ReactNode } from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ kicker, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 space-y-4 text-center md:text-left">
      {kicker ? (
        <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-ink-200">
          {kicker}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
