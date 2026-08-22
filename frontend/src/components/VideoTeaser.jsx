import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Clapperboard, Hourglass } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField, OrbitRing } from "./Decorations";

// === GANTI LINK REELS DI SINI ===
// Cukup ubah nilai `url` (format: https://www.instagram.com/reel/XXXXXXXXX/)
const TEASER_URL = ""; // TODO: link reel Teaser GRAFENA 2026 (menyusul)
const AFTERMOVIE_URL = "https://www.instagram.com/reel/DbDj1vMKhF5/";

const REELS = [
  { subtitle: "Teaser", title: "GRAFENA 2026", url: TEASER_URL },
  { subtitle: "After Movie", title: "GRAFENA 2025", url: AFTERMOVIE_URL },
];

const toEmbed = (url) => {
  if (!url) return "";
  const clean = url.split("?")[0].replace(/\/$/, "");
  return `${clean}/embed`;
};

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export const VideoTeaser = () => {
  const [[index, dir], setPage] = useState([0, 0]);
  const [activated, setActivated] = useState({});

  const paginate = (nd) => setPage(([i]) => [(i + nd + REELS.length) % REELS.length, nd]);
  const goTo = (i) => setPage(([cur]) => [i, i > cur ? 1 : -1]);

  const reel = REELS[index];
  const embed = toEmbed(reel.url);
  const isActive = activated[index] && !!embed;

  return (
    <section
      id="teaser"
      data-testid="video-teaser-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#0d0a24] to-[#0A0A1A] px-6 py-24 sm:py-32"
    >
      <StarField count={45} />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#f72585]">Video</p>
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Intip <span className="aurora-text">perjalanannya</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Judul slide */}
          <div
            className="mt-10 flex items-center justify-center gap-2 text-sm text-white/80"
            data-testid="video-slide-title"
          >
            <Clapperboard className="h-4 w-4 text-[#4cc9f0]" />
            <span className="font-heading font-medium">
              {reel.subtitle} <span className="text-white/50">·</span> {reel.title}
            </span>
          </div>

          <div className="relative mx-auto mt-5 max-w-[320px]">
            <OrbitRing size={440} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7209b7] opacity-30 blur-[90px]" />

            {/* Frame 9:16 */}
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#2d1a5e] to-[#120e33]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  drag={isActive ? false : "x"}
                  dragDirectionLock
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -70) paginate(1);
                    else if (offset.x > 70) paginate(-1);
                  }}
                  className="absolute inset-0"
                  data-testid={`video-slide-${index}`}
                >
                  {isActive ? (
                    <iframe
                      src={embed}
                      title={`${reel.subtitle} ${reel.title}`}
                      className="h-full w-full"
                      frameBorder="0"
                      scrolling="no"
                      allow="autoplay; encrypted-media; picture-in-picture; clipboard-write"
                      allowFullScreen
                      data-testid={`video-iframe-${index}`}
                    />
                  ) : embed ? (
                    <button
                      onClick={() => setActivated((a) => ({ ...a, [index]: true }))}
                      className="group absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#2d1a5e] to-[#120e33]"
                      data-testid={`video-play-${index}`}
                      aria-label={`Putar ${reel.subtitle}`}
                    >
                      <StarField count={18} />
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(247,37,133,0.7)]">
                        <Play className="ml-1 h-8 w-8 fill-[#1e1240] text-[#1e1240]" />
                      </span>
                      <span className="text-xs uppercase tracking-widest text-white/70">Putar Reel · 9:16</span>
                    </button>
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#2d1a5e] to-[#120e33]"
                      data-testid={`video-coming-soon-${index}`}
                    >
                      <StarField count={18} />
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <Hourglass className="h-7 w-7 text-white/70" />
                      </span>
                      <span className="font-heading text-base text-white/80">Segera Hadir</span>
                      <span className="px-8 text-center text-xs text-white/50">Reel teaser akan tayang sebentar lagi</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Panah navigasi */}
            <button
              onClick={() => paginate(-1)}
              data-testid="video-prev"
              aria-label="Video sebelumnya"
              className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0A0A1A]/70 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[#4cc9f0] sm:-left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              data-testid="video-next"
              aria-label="Video berikutnya"
              className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0A0A1A]/70 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[#4cc9f0] sm:-right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dot indikator */}
          <div className="mt-6 flex items-center justify-center gap-2.5" data-testid="video-dots">
            {REELS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                data-testid={`video-dot-${i}`}
                aria-label={`Ke slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-[#4cc9f0]" : "w-2.5 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <p className="mt-3 text-xs uppercase tracking-widest text-white/40">Geser atau gunakan panah</p>
        </Reveal>
      </div>
    </section>
  );
};
