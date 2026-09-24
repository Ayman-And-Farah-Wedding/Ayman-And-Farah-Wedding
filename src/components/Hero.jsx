import { motion } from "framer-motion";
import { gallery } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import "./Hero.css";

export function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero" aria-label={`${t.heroKicker} ${t.heroTitle}`}>
      <div className="hero__media">
        <motion.div
          className="hero__media-inner"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <PhotoFrame src={galleryPhotoPath(gallery[0])} alt="The couple" className="hero__photo" eager />
        </motion.div>
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <motion.div
        className="hero__text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="hero__kicker">{t.heroKicker}</span>
        <h2 className="hero__title">{t.heroTitle}</h2>
      </motion.div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
