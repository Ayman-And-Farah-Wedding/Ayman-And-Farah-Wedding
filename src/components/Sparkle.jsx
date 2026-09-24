import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./Sparkle.css";

// A small four-point sparkle/star that twinkles in when it scrolls into
// view — original hand-coded SVG, no assets. Used as a light celebratory
// accent near section headers, not a literal fireworks explosion (keeps
// the site's elegant tone).
function Star({ delay = 0 }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <svg viewBox="0 0 24 24" className="sparkle__star" aria-hidden="true">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="sparkle__star"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0, rotate: -25 }}
      whileInView={{ opacity: [0, 1, 0.85], scale: [0, 1.15, 1], rotate: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
    </motion.svg>
  );
}

export function Sparkle({ className = "" }) {
  return (
    <span className={`sparkle ${className}`} aria-hidden="true">
      <Star delay={0} />
      <Star delay={0.25} />
    </span>
  );
}
