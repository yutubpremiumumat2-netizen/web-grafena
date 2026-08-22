import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";

const ASTRO_FLOAT = `${process.env.PUBLIC_URL}/orbi.png`;

export const Contact = () => (
  <section
    id="kontak"
    data-testid="contact-section"
    className="relative overflow-hidden bg-[#0A0A1A] px-6 pt-24 pb-16 sm:pt-32"
  >
    <StarField count={60} />
    <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#7209b7] opacity-25 blur-[120px]" />

    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <Reveal>
        <motion.img
          src={ASTRO_FLOAT}
          alt="Orbi melambai"
          className="float-y mx-auto mb-8 w-32 drop-shadow-[0_12px_35px_rgba(247,37,133,0.45)] sm:w-40"
          data-testid="contact-mascot"
        />
        <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Siap jadi bagian dari <span className="aurora-text">angkatan</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
          Ikuti perjalanan GRAFENA 2026 dan jangan lewatkan setiap orbitnya. Sampai jumpa di garis
          peluncuran! ✦
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://instagram.com/grafena.himatologika"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-link"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f72585] to-[#7209b7] px-7 py-4 font-heading text-base font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            @grafena.himatologika
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </div>

    <div className="relative z-10 mx-auto mt-20 max-w-6xl border-t border-white/10 pt-8 text-center">
      <p className="font-heading text-xl font-semibold aurora-text">GRAFENA 2026</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
        Teknologi Industri Kimia D4 · Universitas Padjadjaran
      </p>
    </div>
  </section>
);
