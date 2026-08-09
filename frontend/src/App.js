import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import "@/App.css";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Mascot } from "./components/Mascot";
import { RevealKelompok } from "./components/RevealKelompok";
import { KunciOrbit } from "./components/KunciOrbit";
import { Gallery } from "./components/Gallery";
import { VideoTeaser } from "./components/VideoTeaser";
import { Contact } from "./components/Contact";
import { Marquee } from "./components/Marquee";

const NAV = [
  { id: "tentang", label: "Tentang" },
  { id: "maskot", label: "Orbi" },
  { id: "reveal-kelompok", label: "Kelompok" },
  { id: "kunci-orbit", label: "Kunci Orbit" },
  { id: "galeri", label: "Galeri" },
  { id: "kontak", label: "Kontak" },
];

function App() {
  const lenisRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    lenis.on("scroll", ({ scroll }) => setScrolled(scroll > 40));
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) lenisRef.current.scrollTo(el, { offset: -10 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App grain">
      <Toaster position="top-center" theme="dark" richColors />

      {/* Navbar */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-testid="navbar"
            className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0A1A]/80 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <button
                onClick={() => scrollTo("hero")}
                data-testid="nav-logo"
                className="font-heading text-lg font-semibold aurora-text"
              >
                GRAFENA 2026
              </button>
              <div className="hidden items-center gap-6 md:flex">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => scrollTo(n.id)}
                    data-testid={`nav-${n.id}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo("kunci-orbit")}
                data-testid="nav-cta"
                className="rounded-full bg-white px-5 py-2 font-heading text-sm font-medium text-[#1e1240] transition-transform hover:scale-105"
              >
                Buka Orbit
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <main>
        <Hero onStart={() => scrollTo("tentang")} />
        <Marquee text="EMBRACE THE PROCESS, ACHIEVE YOUR PROGRESS" />
        <About />
        <Mascot />
        <RevealKelompok />
        <KunciOrbit />
        <Gallery />
        <VideoTeaser />
        <Contact />
      </main>
    </div>
  );
}

export default App;
