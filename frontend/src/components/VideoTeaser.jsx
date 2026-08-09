import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField, OrbitRing } from "./Decorations";

export const VideoTeaser = () => (
  <section
    id="teaser"
    data-testid="video-teaser-section"
    className="relative overflow-hidden bg-gradient-to-b from-[#0d0a24] to-[#0A0A1A] px-6 py-24 sm:py-32"
  >
    <StarField count={45} />
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <Reveal>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#f72585]">Teaser</p>
        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Intip <span className="aurora-text">perjalanannya</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative mx-auto mt-12 flex max-w-[300px] items-center justify-center">
          <OrbitRing size={420} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#7209b7] opacity-30 blur-[90px]" />
          <div
            data-testid="video-embed-placeholder"
            className="group relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#2d1a5e] to-[#120e33]"
          >
            <StarField count={20} />
            <button
              className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4"
              data-testid="video-play-button"
              aria-label="Putar teaser"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(247,37,133,0.7)]">
                <Play className="ml-1 h-8 w-8 fill-[#1e1240] text-[#1e1240]" />
              </span>
              <span className="text-xs uppercase tracking-widest text-white/60">Reels 9:16 · Placeholder</span>
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
