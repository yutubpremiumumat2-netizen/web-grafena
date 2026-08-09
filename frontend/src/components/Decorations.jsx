import { useMemo } from "react";

// Decorative twinkling star field + floating planets
export const StarField = ({ count = 40, className = "" }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 3,
        dur: Math.random() * 2 + 2,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
};

export const OrbitRing = ({ size = 400, className = "", reverse = false }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute rounded-full border border-white/15 ${
      reverse ? "spin-slow-rev" : "spin-slow"
    } ${className}`}
    style={{ width: size, height: size }}
  >
    <span
      className="absolute rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
      style={{ width: 8, height: 8, top: -4, left: "50%" }}
    />
  </div>
);
