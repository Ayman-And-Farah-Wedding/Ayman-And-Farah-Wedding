import { useMemo } from "react";
import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import "./OpeningScreen.css";

function useParticles(count = 16) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 137.5) % 100}%`,
        top: `${(i * 61.8) % 100}%`,
        delay: (i % 7) * 0.6,
        duration: 6 + (i % 5),
        size: i % 3 === 0 ? 3 : 2,
      })),
    [count]
  );
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export function OpeningScreen({ onOpen }) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const particles = useParticles();

  return (
    <motion.div
      className="opening"
      exit={{ opacity: 0, scale: 1.06, filter: "blur(18px)" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="opening__backdrop" aria-hidden="true" />
      {!reducedMotion && (
        <div className="opening__particles" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="opening__particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="opening__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="opening__eyebrow" variants={item}>
          {t.invitationHint}
        </motion.span>

        <motion.div className="opening__names" variants={item}>
          <span className="opening__name">{wedding.groom}</span>
          <span className="opening__amp" aria-hidden="true">
            &amp;
          </span>
          <span className="opening__name">{wedding.bride}</span>
        </motion.div>

        <motion.div className="opening__divider" variants={item} aria-hidden="true" />

        <motion.p className="opening__date" variants={item}>
          {wedding.date}
        </motion.p>

        <motion.p className="opening__message" variants={item}>
          {wedding.invitationLine}
        </motion.p>

        <motion.button
          type="button"
          className="opening__button"
          variants={item}
          onClick={onOpen}
          whileHover={reducedMotion ? undefined : { y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="opening__button-icon" aria-hidden="true">
            &#128140;
          </span>
          {t.openInvitation}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
