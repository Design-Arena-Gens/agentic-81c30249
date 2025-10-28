import { CapabilityCard } from "@/components/CapabilityCard";
import { FrequencyBeacon } from "@/components/FrequencyBeacon";
import { Marquee } from "@/components/Marquee";
import { RitualCard } from "@/components/RitualCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SignalConsole } from "@/components/SignalConsole";
import {
  capabilityClusters,
  frequencyBeacons,
  ritualTimeline,
  signalPresets,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 mx-auto h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(83,96,255,0.25),_transparent_65%)] blur-3xl" />
      <div className="section-container flex flex-col items-center text-center">
        <div className="mb-10 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/60">
          Ofkhn Studio • Emergent Creative Systems
        </div>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Designing rituals for the interfaces that do not yet exist.
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/70 md:text-lg">
          Ofkhn is a speculative creative studio weaving narrative architectures, signal-reactive visuals, and generative tooling into immersive worlds you can feel. We translate liminal concepts into embodied experiences tuned for curious minds.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:sound@ofkhn.me"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_20px_60px_rgba(83,96,255,0.25)] transition hover:border-white/40 hover:bg-white/20"
          >
            Initiate Brief
          </a>
          <a
            href="#console"
            className="rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white/70 transition hover:border-white/30 hover:text-white"
          >
            Preview Signals
          </a>
        </div>
      </div>

      <section className="section-container">
        <SectionHeading
          kicker="Studioscopes"
          title="What Ofkhn engineers"
          description="A modular toolkit for future-facing storytelling, live visuals, and systemized creativity "
        />
        <div className="grid gap-6 md:grid-cols-3">
          {capabilityClusters.map((cluster, index) => (
            <CapabilityCard key={cluster.title} index={index + 1} {...cluster} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          kicker="Continuum"
          title="Rituals that move the work forward"
          description="Every engagement is a living experiment. We architect the path while leaving room for serendipitous signals."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {ritualTimeline.map((entry) => (
            <RitualCard key={entry.phase} {...entry} />
          ))}
        </div>
      </section>

      <section className="section-container" id="console">
        <SectionHeading
          kicker="Signal Console"
          title="Tune into the field"
          description="Dial through presets and feel how each program shapes the space. This is a live preview of the palettes we deploy across installations."
        />
        <SignalConsole presets={signalPresets} />
      </section>

      <section className="section-container">
        <SectionHeading
          kicker="Transmission"
          title="Where the signals travel"
          description="We maintain three enduring channels for collaborators to plug into the Ofkhn frequency."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {frequencyBeacons.map((beacon) => (
            <FrequencyBeacon key={beacon.label} {...beacon} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <Marquee speed="slow">Ofkhn • Emergent Creative Systems • Liminal Rituals • Signal Architecture</Marquee>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">Open Transmission Window</p>
          <h2 className="font-display text-3xl text-white">Ready to orchestrate the next experience?</h2>
          <p className="max-w-xl text-sm text-white/70">
            Share your coordinates and we will calibrate a bespoke session. Remote, in-residence, or embedded within your existing teams—we adapt to the velocity you require.
          </p>
          <a
            href="https://cal.com/ofkhn/studio"
            className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-white transition hover:border-white/30 hover:bg-white/20"
          >
            Schedule Transmission
          </a>
        </div>
      </section>
    </main>
  );
}
