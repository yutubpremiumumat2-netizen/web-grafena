import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";

const ASTRO_FLOAT = "https://customer-assets-lqy194kg.emergentagent.net/job_orbit-unlock/artifacts/8dajwirv_ORBI.png";

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
          className="float-y mx-auto mb-8 w-32 rounded-[2rem] border border-white/15 sm:w-40"
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
            href="https://instagram.com/grafena.unpad"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="instagram-link"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f72585] to-[#7209b7] px-7 py-4 font-heading text-base font-medium text-white transition-transform duration-300 hover:scale-105"
          >
            <Instagram className="h-5 w-5" />
            @grafena.unpad
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:panitia.grafena@gmail.com"
            data-testid="contact-email-link"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-heading text-base font-medium text-white transition-colors duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
            Kontak Panitia
          </a>
        </div>
      </Reveal>
    </div>

    <div className="relative z-10 mx-auto mt-20 max-w-6xl border-t border-white/10 pt-8 text-center">
      <p className="font-heading text-xl font-semibold aurora-text">GRAFENA 2026</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
        Teknologi Industri Kimia D4 · Universitas Padjadjaran
      </p>
      <p className="mt-1 text-xs text-white/30">*Semua tautan & kontak masih placeholder</p>
    </div>
  </section>
);
