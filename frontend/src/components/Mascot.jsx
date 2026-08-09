import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { StarField, OrbitRing } from "./Decorations";

const ASTRO_WAVE = "https://static.prod-images.emergentagent.com/jobs/f89c3aee-9bef-4cf3-8466-6d7ea87f037a/images/2945a2e86351b38245a305ac6489ca802b49d9aa4b49166f7f58f3494982e68b.jpeg";

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
            alt="Astro — maskot astronot chibi GRAFENA"
            data-testid="mascot-image"
            className="float-y relative z-10 w-64 rounded-[2.5rem] border border-white/20 shadow-2xl sm:w-72"
          />
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#f72585]">Maskot</p>
        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Halo, aku <span className="aurora-text">Astro</span>!
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/75">
          Astronot chibi ini akan jadi pemandu perjalananmu sepanjang GRAFENA 2026. Ia menemani
          setiap maba melintasi 8 gerbang orbit — dari peluncuran pertama hingga titik terjauh
          di luar angkasa.
        </p>
        <p className="mt-4 text-base leading-relaxed text-white/75">
          Ikuti Astro, kumpulkan kunci orbit setiap minggu, dan saksikan bagaimana perjalanan yang
          dimulai sendirian berakhir sebagai satu angkatan yang utuh.
        </p>
        <p className="mt-6 inline-block rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-widest text-white/50">
          *Nama "Astro" masih placeholder
        </p>
      </Reveal>
    </div>
  </section>
);
