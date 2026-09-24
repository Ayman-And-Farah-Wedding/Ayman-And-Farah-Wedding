import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import "./RSVP.css";

export function RSVP() {
  const { t } = useLanguage();

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

        {wedding.rsvpUrl && (
          <Reveal delay={0.15}>
            <a
              href={wedding.rsvpUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--solid rsvp__button"
            >
              {t.rsvpButton}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
