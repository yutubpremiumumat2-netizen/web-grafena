import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { StarField, OrbitRing } from "./Decorations";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MaskLine = ({ children, i, className }) => (
  <span className="block overflow-hidden">
    <motion.span variants={line} custom={i} initial="hidden" animate="show" className={`block ${className}`}>
      {children}
    </motion.span>
  </span>
);

export const Hero = ({ onStart }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPlanet = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const yStars = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      data-testid="hero-section"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#2a1b4a] via-[#3a2a6b] to-[#1e2a5e] px-6 pt-24 text-center"
    >
      <motion.div style={{ y: yStars }} className="absolute inset-0">
        <StarField count={70} />
      </motion.div>

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#7209b7] opacity-40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#4cc9f0] opacity-30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[#f72585] opacity-25 blur-[120px]" />

      <OrbitRing size={520} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <OrbitRing size={760} reverse className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      {/* Earth glow at bottom */}
      <motion.div
        style={{ y: yPlanet }}
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-[#4361ee] via-[#7209b7]/60 to-transparent blur-2xl"
      />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#4cc9f0]" />
          Orientasi Mahasiswa Baru D4 Teknologi Industri Kimia Universitas Padjadjaran
        </motion.div>

        <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <MaskLine i={0} className="aurora-text">GRAFENA</MaskLine>
          <MaskLine i={1} className="text-white">2026</MaskLine>
        </h1>

        <div className="mx-auto mt-8 max-w-2xl overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-body text-base leading-relaxed text-white/75 sm:text-lg"
          >
            "Embrace the Process, Achieve Your Progress"
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            data-testid="hero-cta-button"
            onClick={onStart}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-heading text-base font-medium text-[#1e1240] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(76,201,240,0.6)]"
          >
            Mulai Perjalanan
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
