import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { StarField } from "./Decorations";
import { OrbitGate } from "./OrbitGate";
import { ORBITS, STORAGE_KEY } from "../data/orbits";

const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
};

export const KunciOrbit = () => {
  const [solved, setSolved] = useState([]);

  useEffect(() => {
    setSolved(loadProgress());
  }, []);

  const persist = (next) => {
    setSolved(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const handleUnlock = useCallback(
    (week) => {
      if (solved.includes(week)) return;
      const next = [...solved, week].sort((a, b) => a - b);
      persist(next);
      const o = ORBITS.find((x) => x.week === week);
      toast.success(`Gerbang Minggu ${week} terbuka! 🚀`, { description: o?.reveal.title });
    },
    [solved]
  );

  const highest = solved.length ? Math.max(...solved) : 0;
  const statusFor = (week) => {
    if (solved.includes(week)) return "unlocked";
    if (week === highest + 1) return "ready";
    return "locked";
  };

  const progressPct = (solved.length / ORBITS.length) * 100;

  const reset = () => {
    persist([]);
    toast("Progress orbit direset.", { description: "Kamu kembali ke titik peluncuran." });
  };

  return (
    <section
      id="kunci-orbit"
      data-testid="kunci-orbit-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#4a2170] via-[#2d1a5e] to-[#191345] px-6 py-24 sm:py-32"
    >
      <StarField count={50} />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#c05cff]">Fitur Utama</p>
          <h2 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Kunci <span className="aurora-text">Orbit</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Delapan gerbang orbit menantimu! Satu untuk tiap minggu. Buka setiap gerbang dengan kata
            sandi mingguan untuk mengungkap misi & outfit. Progres tersimpan otomatis di perangkat ini.
          </p>
        </Reveal>

        {/* Progress bar */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="flex items-center justify-between text-sm">
              <span className="font-heading text-white">Perjalananmu</span>
              <span data-testid="orbit-progress-count" className="text-white/70">
                {solved.length} / {ORBITS.length} gerbang
              </span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#4cc9f0] via-[#7209b7] to-[#f72585]"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                data-testid="orbit-progress-bar"
              />
            </div>
            {solved.length > 0 && (
              <button
                onClick={reset}
                data-testid="orbit-reset-button"
                className="mt-3 text-xs uppercase tracking-widest text-white/40 underline-offset-4 transition-colors hover:text-[#f72585] hover:underline"
              >
                Reset progress
              </button>
            )}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ORBITS.map((orbit, i) => (
            <OrbitGate
              key={orbit.week}
              orbit={orbit}
              index={i}
              status={statusFor(orbit.week)}
              onUnlock={handleUnlock}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
