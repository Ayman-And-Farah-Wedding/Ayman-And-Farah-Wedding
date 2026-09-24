import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding, gallery } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import "./RSVP.css";

export function RSVP() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const hasEmbed = Boolean(wedding.rsvpFormEmbedUrl);
  const hasAnyRsvp = hasEmbed || wedding.rsvpUrl;
  const thankYouPhoto = gallery[gallery.length - 1];

  useEffect(() => {
    if (!open) return undefined;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClick = () => {
    if (hasEmbed) {
      setOpen(true);
    } else if (wedding.rsvpUrl) {
      window.open(wedding.rsvpUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="rsvp section section--cream-deep" id="rsvp" aria-labelledby="rsvp-title">
      <div className="container container--narrow rsvp__inner">
        <Reveal>
          <div className="divider divider--center" aria-hidden="true" />
          <h2 className="section-title" id="rsvp-title">
            {t.rsvpTitle}
          </h2>
          <p className="section-lede rsvp__subtitle">{t.rsvpSubtitle}</p>
        </Reveal>

        {hasAnyRsvp && (
          <Reveal delay={0.15}>
            <button type="button" className="btn btn--solid rsvp__button" onClick={handleClick}>
              {t.rsvpButton}
            </button>
          </Reveal>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="rsvp-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="rsvp-modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="rsvp-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                ref={closeButtonRef}
                className="rsvp-modal__close"
                onClick={() => setOpen(false)}
                aria-label={t.rsvpModalClose}
              >
                &times;
              </button>

              <div className="rsvp-modal__photo">
                <PhotoFrame
                  src={galleryPhotoPath(thankYouPhoto)}
                  alt={`${wedding.groom} & ${wedding.bride}`}
                />
              </div>

              <div className="rsvp-modal__body">
                <span className="eyebrow">
                  {wedding.groom} &amp; {wedding.bride}
                </span>
                <h3 className="rsvp-modal__title" id="rsvp-modal-title">
                  {t.rsvpModalTitle}
                </h3>
                <p className="rsvp-modal__message">{t.rsvpModalMessage}</p>

                <div className="rsvp-modal__form">
                  <iframe src={wedding.rsvpFormEmbedUrl} title="RSVP form" loading="lazy">
                    Loading…
                  </iframe>
                </div>

                {wedding.rsvpUrl && (
                  <a
                    href={wedding.rsvpUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rsvp-modal__fullpage"
                  >
                    {t.rsvpOpenFullForm} &#8599;
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
