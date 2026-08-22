import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Users, Sparkles, X, KeyRound, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { StarField, OrbitRing } from "./Decorations";
import { GROUPS, REVEAL_TARGET, PANITIA_PASSWORD } from "../data/groups";

const TARGET_MS = new Date(REVEAL_TARGET).getTime();

const getRemaining = () => {
  const diff = TARGET_MS - Date.now();
  if (diff <= 0) return { done: true, d: 0, h: 0, m: 0, s: 0 };
  return {
    done: false,
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
};

const TimeBox = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="glass flex h-20 w-20 items-center justify-center rounded-2xl sm:h-24 sm:w-24">
      <span className="font-heading text-3xl font-semibold tabular-nums text-white sm:text-4xl">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="mt-2 text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">{label}</span>
  </div>
);

const LockedView = ({ time }) => (
  <div className="relative mx-auto mt-12 max-w-2xl text-center" data-testid="kelompok-locked">
    <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center">
      <OrbitRing size={160} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="pointer-events-none absolute h-24 w-24 rounded-full bg-[#c05cff] opacity-40 blur-2xl" />
      <div className="glass float-y relative z-10 flex h-20 w-20 items-center justify-center rounded-full">
        <Lock className="h-8 w-8 text-white" />
      </div>
    </div>
    <p className="font-heading text-lg text-white/80 sm:text-xl">Kelompokmu akan terungkap dalam...</p>
    <div className="mt-8 flex items-start justify-center gap-3 sm:gap-5" data-testid="kelompok-countdown">
      <TimeBox value={time.d} label="Hari" />
      <span className="font-heading pt-6 text-3xl text-white/30 sm:pt-7 sm:text-4xl">:</span>
      <TimeBox value={time.h} label="Jam" />
      <span className="font-heading pt-6 text-3xl text-white/30 sm:pt-7 sm:text-4xl">:</span>
      <TimeBox value={time.m} label="Menit" />
      <span className="font-heading pt-6 text-3xl text-white/30 sm:pt-7 sm:text-4xl">:</span>
      <TimeBox value={time.s} label="Detik" />
    </div>
    <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-widest text-white/50">
      <Sparkles className="h-3.5 w-3.5 text-[#4cc9f0]" /> 56 maba · {GROUPS.length} kelompok
    </p>
  </div>
);

const RevealView = () => (
  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="kelompok-reveal">
    {GROUPS.map((g, i) => (
      <motion.div
        key={g.id}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        data-testid={`kelompok-card-${g.id}`}
        className={`relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br ${g.gradient} p-6`}
        style={{ boxShadow: `0 0 40px ${g.glow}44` }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/70">{g.name}</p>
            <h3 className="font-heading text-xl font-semibold leading-tight text-white">{g.codename}</h3>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs text-white">
            <Users className="h-3.5 w-3.5" />
            {g.members.length}
          </span>
        </div>
        <ul className="mt-5 space-y-2">
          {g.members.map((m, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-white/90">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25 text-[11px] font-medium tabular-nums">
                {idx + 1}
              </span>
              {m}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

export const RevealKelompok = () => {
  const [time, setTime] = useState(getRemaining);
  const [panitiaUnlocked, setPanitiaUnlocked] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  useEffect(() => {
    if (time.done) return;
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, [time.done]);

  // Session-only override (tidak disimpan di localStorage). Reset saat refresh.
  const revealed = time.done || panitiaUnlocked;

  const submitPw = (e) => {
    e.preventDefault();
    if (pw.trim() === PANITIA_PASSWORD) {
      setPanitiaUnlocked(true);
      setShowPw(false);
      setPw("");
      setPwError(false);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 2500);
    }
  };

  return (
    <section
      id="reveal-kelompok"
      data-testid="reveal-kelompok-section"
      className="relative overflow-hidden bg-gradient-to-b from-[#4a2170] via-[#43206e] to-[#4a2170] px-6 py-24 sm:py-32"
    >
      <StarField count={40} />

      {/* Akses panitia — gembok subtle di pojok section */}
      {!revealed && (
        <div className="absolute right-4 top-4 z-20">
          <button
            onClick={() => setShowPw((v) => !v)}
            data-testid="panitia-lock-button"
            aria-label="Akses panitia"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-colors duration-300 hover:border-white/30 hover:text-white/80"
          >
            <Lock className="h-4 w-4" />
          </button>

          <AnimatePresence>
            {showPw && (
              <motion.form
                onSubmit={submitPw}
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                data-testid="panitia-form"
                className="glass absolute right-0 mt-2 w-64 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-white/70">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#4cc9f0]" /> Akses Panitia
                  </span>
                  <button type="button" onClick={() => setShowPw(false)} aria-label="Tutup" className="text-white/40 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative mt-3">
                  <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  <input
                    type="password"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="Password panitia"
                    autoFocus
                    data-testid="panitia-input"
                    className={`w-full rounded-full border bg-white/10 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[#4cc9f0] ${
                      pwError ? "border-[#f72585]" : "border-white/20"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  data-testid="panitia-submit"
                  className="mt-3 w-full rounded-full bg-[#4cc9f0] py-2.5 font-heading text-sm font-medium text-[#0A0A1A] transition-transform duration-300 hover:scale-[1.02]"
                >
                  Buka Reveal
                </button>
                <AnimatePresence>
                  {pwError && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      data-testid="panitia-error"
                      className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#f72585]"
                    >
                      <X className="h-3.5 w-3.5" /> Password salah.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-[#c05cff]">Reveal Kelompok</p>
          <h2 className="font-heading text-center text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {revealed ? (
              <>Ini <span className="aurora-text">angkatanmu</span></>
            ) : (
              <>Siapa <span className="aurora-text">kelompokmu?</span></>
            )}
          </h2>
          {panitiaUnlocked && !time.done && (
            <p data-testid="panitia-badge" className="mt-3 flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-[#4cc9f0]">
              <ShieldCheck className="h-3.5 w-3.5" /> Mode panitia — preview
            </p>
          )}
        </Reveal>

        <AnimatePresence mode="wait">
          {revealed ? (
            <motion.div key="reveal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <RevealView />
            </motion.div>
          ) : (
            <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LockedView time={time} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
