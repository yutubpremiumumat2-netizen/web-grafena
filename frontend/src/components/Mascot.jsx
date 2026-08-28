import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { StarField, OrbitRing } from "./Decorations";

const ASTRO_WAVE = `${process.env.PUBLIC_URL}/orbi.png`;

export const Mascot = () => (
  <section
    id="maskot"
    data-testid="mascot-section"
    className="relative overflow-hidden bg-gradient-to-b from-[#2b2f7a] via-[#3a2a6b] to-[#4a2170] px-6 py-24 sm:py-32"
  >
    <StarField count={35} className="opacity-70" />
    <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <Reveal>
        <div className="relative mx-auto flex max-w-sm items-center justify-center">
          <OrbitRing size={360} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <OrbitRing size={480} reverse className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
          <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#c05cff] opacity-40 blur-[80px]" />
          <motion.img
            src={ASTRO_WAVE}
            alt="Orbi — maskot astronot GRAFENA"
            data-testid="mascot-image"
            className="float-y relative z-10 w-64 drop-shadow-[0_15px_45px_rgba(192,92,255,0.5)] sm:w-72"
          />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#f72585]">Maskot</p>
        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Halo, aku <span className="aurora-text">Orbi</span>!
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/75">
          Astronot chibi ini akan jadi pemandu perjalananmu sepanjang Grafena 2026. Ia menemani
          setiap maba melintasi 8 gerbang orbit — dari peluncuran pertama hingga titik terjauh
          di luar angkasa.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          Ikuti Orbi, kumpulkan kunci orbit setiap minggu, dan saksikan bagaimana perjalanan yang
          dimulai sendirian berakhir sebagai satu angkatan yang utuh.
        </p>
      </Reveal>
    </div>
  </section>
);
