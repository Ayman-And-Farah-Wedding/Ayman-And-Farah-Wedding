import { motion } from "framer-motion";
import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { SprigDivider } from "./Ornament";
import "./Hero.css";

export function Hero({ opened }) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-label={`${t.heroKicker} ${t.heroTitle}`}>
      {wedding.heroPhoto && (
        <motion.div
          className="hero__banner"
          initial={{ opacity: 0, scale: 1.15, filter: "blur(14px)" }}
          animate={opened ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: reducedMotion ? 0.01 : 1.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <PhotoFrame
            src={galleryPhotoPath(wedding.heroPhoto)}
            alt={`${wedding.groom} & ${wedding.bride}`}
            className="hero__banner-img"
            eager
          />
        </motion.div>
      )}

      <div className="container container--narrow">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 26 }}
          animate={opened ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reducedMotion ? 0.01 : 0.9,
            delay: reducedMotion ? 0 : 0.95,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="hero__kicker">{t.heroKicker}</span>
          <h2 className="hero__title">{t.heroTitle}</h2>
          <SprigDivider className="hero__divider" />
        </motion.div>
      </div>
    </section>
  );
}
