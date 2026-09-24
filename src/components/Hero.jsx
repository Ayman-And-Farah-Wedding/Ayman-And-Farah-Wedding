import { motion } from "framer-motion";
import { gallery } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { SprigDivider, CornerFlourish } from "./Ornament";
import "./Hero.css";

export function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <section className="hero section" aria-label={`${t.heroKicker} ${t.heroTitle}`}>
      <div className="container container--narrow hero__inner">
        <motion.div
          className="hero__frame"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <CornerFlourish className="corner-flourish--tl" />
          <CornerFlourish className="corner-flourish--br" />
          <motion.div
            className="hero__media-inner"
            initial={{ scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reducedMotion ? 0 : 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhotoFrame
              src={galleryPhotoPath(gallery[0])}
              alt="The couple"
              className="hero__photo"
              eager
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__kicker">{t.heroKicker}</span>
          <h2 className="hero__title">{t.heroTitle}</h2>
          <SprigDivider className="hero__divider" />
        </motion.div>
      </div>
    </section>
  );
}
