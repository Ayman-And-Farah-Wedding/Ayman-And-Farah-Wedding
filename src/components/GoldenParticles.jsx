import { useMemo } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./GoldenParticles.css";

function useStars(count = 16) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 61.8) % 100}%`,
        delay: (i % 8) * 1.3,
        duration: 8 + (i % 6) * 1.6,
        size: 4 + (i % 4) * 2.5,
        drift: (i % 2 === 0 ? 1 : -1) * (14 + (i % 5) * 8),
      })),
    [count]
  );
}

function useButterflies(count = 3) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${18 + i * 26}%`,
        delay: i * 4.5,
        duration: 24 + i * 5,
        reverse: i % 2 === 1,
        size: 26 + (i % 2) * 8,
      })),
    [count]
  );
}

function Butterfly({ top, delay, duration, reverse, size }) {
  return (
    <svg
      viewBox="0 0 32 24"
      className={`golden-butterfly ${reverse ? "golden-butterfly--reverse" : ""}`}
      style={{
        "--start-top": top,
        width: size,
        height: size * 0.75,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <g className="golden-butterfly__wings">
        <path d="M16 12 C10 2 0 2 2 10 C4 16 12 14 16 12Z" />
        <path d="M16 12 C22 2 32 2 30 10 C28 16 20 14 16 12Z" />
        <path d="M16 12 C11 16 4 18 4 22 C8 22 14 18 16 12Z" opacity="0.75" />
        <path d="M16 12 C21 16 28 18 28 22 C24 22 18 18 16 12Z" opacity="0.75" />
      </g>
      <line x1="16" y1="7" x2="16" y2="18" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

// A continuous, gentle golden-hour ambience once the invitation is open —
// soft glowing particles drifting down like falling stars, plus a couple
// of butterflies wandering across the page. Purely decorative and behind
// all content, so it never blocks clicks; skipped entirely for guests who
// prefer reduced motion.
export function GoldenParticles() {
  const reducedMotion = useReducedMotion();
  const stars = useStars();
  const butterflies = useButterflies();

  if (reducedMotion) return null;

  return (
    <div className="golden-particles" aria-hidden="true">
      {stars.map((s) => (
        <span
          key={s.id}
          className="golden-star"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            "--drift": `${s.drift}px`,
          }}
        />
      ))}
      {butterflies.map((b) => (
        <Butterfly key={b.id} {...b} />
      ))}
    </div>
  );
}
