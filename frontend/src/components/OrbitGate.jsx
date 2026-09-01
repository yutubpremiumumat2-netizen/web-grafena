import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Check, X, KeyRound, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const spVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const StarterpackCarousel = ({ images, week }) => {
  const [[i, dir], setPage] = useState([0, 0]);
  const paginate = (nd) => setPage(([c]) => [(c + nd + images.length) % images.length, nd]);
  const goTo = (idx) => setPage(([c]) => [idx, idx > c ? 1 : -1]);

  return (
    <div className="relative" data-testid={`orbit-starterpack-${week}`}>
      <div className="relative aspect-[1414/2000] w-full overflow-hidden rounded-2xl border border-white/25 bg-white/10">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.img
            key={i}
            src={images[i]}
            custom={dir}
            variants={spVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -60) paginate(1);
              else if (offset.x > 60) paginate(-1);
            }}
            draggable={false}
            alt={`Starterpack Week 1 — ${i + 1}`}
            data-testid={`orbit-sp-img-${week}`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Gambar sebelumnya"
          data-testid={`orbit-sp-prev-${week}`}
          className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0A0A1A]/60 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[#4cc9f0]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Gambar berikutnya"
          data-testid={`orbit-sp-next-${week}`}
          className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-[#0A0A1A]/60 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:border-[#4cc9f0]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2" data-testid={`orbit-sp-dots-${week}`}>
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => goTo(idx)}
            aria-label={`Ke gambar ${idx + 1}`}
            data-testid={`orbit-sp-dot-${week}-${idx}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === i ? "w-6 bg-[#4cc9f0]" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const OrbitGate = ({ orbit, status, onUnlock, index }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const isUnlocked = status === "unlocked";
  const isReady = status === "ready";
  const isLocked = status === "locked";

  const submit = (e) => {
    e.preventDefault();
    const ok = value.trim().toUpperCase() === orbit.password.toUpperCase();
    if (ok) {
      setError(false);
      onUnlock(orbit.week);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      data-testid={`orbit-gate-${orbit.week}`}
      data-status={status}
      className={`relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 ${
        isUnlocked
          ? `bg-gradient-to-br ${orbit.gradient} border-white/30`
          : isReady
          ? "border-[#4cc9f0]/60 bg-white/[0.07]"
          : "border-white/10 bg-white/[0.03]"
      }`}
      style={isUnlocked ? { boxShadow: `0 0 40px ${orbit.glow}55` } : {}}
    >
      {isReady && (
        <span className="absolute right-4 top-4 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4cc9f0] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4cc9f0]" />
        </span>
      )}

      {/* Header */}
      <div className={`flex items-center gap-3 ${isLocked ? "opacity-50" : ""}`}>
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
            isUnlocked ? "bg-white/25" : "bg-white/10"
          }`}
        >
          {isUnlocked ? (
            <Unlock className="h-5 w-5 text-white" />
          ) : (
            <Lock className="h-5 w-5 text-white/70" />
          )}
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">Week {orbit.week}</p>
          <h3 className="font-heading text-lg font-medium leading-tight text-white">{orbit.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="mt-5">
        <AnimatePresence mode="wait">
          {isUnlocked ? (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              data-testid={`orbit-reveal-${orbit.week}`}
            >
              {orbit.starterpackImages ? (
                <StarterpackCarousel images={orbit.starterpackImages} week={orbit.week} />
              ) : (
                <div className="flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/15">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/25">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="px-4 text-xs text-white/80">[ Placeholder foto outfit ]</p>
                  </div>
                </div>
              )}
              <h4 className="font-heading mt-4 text-base font-medium text-white">{orbit.reveal.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-white/85">{orbit.reveal.desc}</p>
            </motion.div>
          ) : isReady ? (
            <motion.form
              key="input"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              {orbit.clues && (
                <div
                  className="rounded-2xl border border-white/15 bg-white/[0.04] p-4"
                  data-testid={`orbit-clues-${orbit.week}`}
                >
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-[#4cc9f0]">
                    <MapPin className="h-3.5 w-3.5" /> Clue Tempat
                  </p>
                  <ul className="space-y-1.5">
                    {orbit.clues.map((c, i) => (
                      <li key={i} className="text-xs leading-relaxed text-white/70">
                        <span className="font-semibold text-white/90">{c.group}:</span> "{c.text}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="text-sm text-white/70">Masukkan kata sandi orbit untuk membuka gerbang ini.</p>
              <div className="relative">
                <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  data-testid={`orbit-input-${orbit.week}`}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Kata sandi..."
                  className={`w-full rounded-full border bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#4cc9f0] ${
                    error ? "border-[#f72585]" : "border-white/20"
                  }`}
                />
              </div>
              <button
                type="submit"
                data-testid={`orbit-submit-${orbit.week}`}
                className="w-full rounded-full bg-[#4cc9f0] py-3 font-heading text-sm font-medium text-[#0A0A1A] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(76,201,240,0.6)]"
              >
                Buka Gerbang
              </button>
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    data-testid={`orbit-error-${orbit.week}`}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#f72585]"
                  >
                    <X className="h-3.5 w-3.5" /> Kata sandi salah. Coba lagi!
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          ) : (
            <motion.div key="locked" className="flex h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-center backdrop-blur-sm">
              <Lock className="h-8 w-8 text-white/30" />
              <p className="mt-3 px-6 text-xs text-white/40">Terkunci. Selesaikan gerbang sebelumnya untuk membuka.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
