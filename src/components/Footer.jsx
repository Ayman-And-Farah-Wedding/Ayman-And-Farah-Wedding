import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { IconInstagram, IconFacebook, IconHashtag } from "./icons";
import "./Footer.css";

export function Footer() {
  const { t } = useLanguage();
  const hasSocial = wedding.instagramUrl || wedding.facebookUrl || wedding.hashtag;

  return (
    <footer className="footer section--dark">
      <div className="container footer__inner">
        <p className="footer__names">
          {wedding.groom} <span aria-hidden="true">&amp;</span> {wedding.bride}
        </p>
        <div className="divider divider--center" aria-hidden="true" />
        <p className="footer__thanks">{t.footerThanks}</p>

        {hasSocial && (
          <div className="footer__social">
            {wedding.instagramUrl && (
              <a href={wedding.instagramUrl} target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <IconInstagram className="footer__icon" />
              </a>
            )}
            {wedding.facebookUrl && (
              <a href={wedding.facebookUrl} target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <IconFacebook className="footer__icon" />
              </a>
            )}
            {wedding.hashtag && (
              <span className="footer__hashtag">
                <IconHashtag className="footer__icon footer__icon--static" />
                {wedding.hashtag.replace(/^#/, "")}
              </span>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
