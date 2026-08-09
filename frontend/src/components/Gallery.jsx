import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";

const IMAGES = [
  "https://images.unsplash.com/photo-1763889167811-9fdc12b8bda3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1773853430977-a24ed30f6f35?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1772723246503-6d8770130bf2?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1699730164892-d7c433524ff3?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1558442157-c6999dbf7edb?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
  "https://images.unsplash.com/photo-1495837174058-628aafc7d610?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
];

// Bento spans for Instagram-like variety
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "sm:col-span-2",
];

export const Gallery = () => (
  <section
    id="galeri"
    data-testid="gallery-section"
    className="relative overflow-hidden bg-gradient-to-b from-[#191345] via-[#120e33] to-[#0d0a24] px-6 py-24 sm:py-32"
  >
    <StarField count={40} />
    <div className="relative z-10 mx-auto max-w-6xl">
      <Reveal>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#4cc9f0]">Galeri</p>
        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Momen dari <span className="aurora-text">setiap orbit</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[200px]">
        {IMAGES.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08} className={`group relative overflow-hidden rounded-3xl ${spans[i]}`}>
            <div className="h-full w-full overflow-hidden rounded-3xl border border-white/10">
              <img
                src={src}
                alt={`Momen GRAFENA ${i + 1}`}
                loading="lazy"
                data-testid={`gallery-image-${i}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 font-heading text-sm text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                #GRAFENA2026
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-widest text-white/40">*Foto placeholder</p>
    </div>
  </section>
);
