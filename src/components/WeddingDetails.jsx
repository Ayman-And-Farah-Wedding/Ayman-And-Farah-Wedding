import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { Countdown } from "./Countdown";
import { SprigDivider } from "./Ornament";
import { Sparkle } from "./Sparkle";
import { IconCalendar, IconClock, IconVenue, IconHall, IconPin } from "./icons";
import "./WeddingDetails.css";

export function WeddingDetails() {
  const { t } = useLanguage();

  const items = [
    { icon: IconCalendar, label: t.dateLabel, value: wedding.date },
    { icon: IconClock, label: t.timeLabel, value: wedding.ceremonyTime },
    { icon: IconVenue, label: t.venueLabel, value: wedding.venue },
    ...(wedding.hall ? [{ icon: IconHall, label: t.hallLabel, value: wedding.hall }] : []),
    { icon: IconPin, label: t.locationLabel, value: wedding.address },
  ];

  return (
    <section className="details section section--dark" id="details">
      <div className="container container--narrow details__inner">
        <Reveal className="details__intro">
          <span className="eyebrow">
            {t.detailsKicker}
            <Sparkle />
          </span>
          <h2 className="section-title">{t.weddingDetails}</h2>
          <SprigDivider className="details__divider" />
        </Reveal>

        <div className="details__grid">
          {items.map(({ icon: Icon, label, value }, index) => (
            <Reveal as="div" key={label} className="details__card" delay={index * 0.08}>
              <Icon className="details__icon" />
              <span className="details__label">{label}</span>
              <span className="details__value">{value}</span>
            </Reveal>
          ))}
        </div>

        {wedding.mapsUrl && (
          <Reveal delay={0.2}>
            <a
              href={wedding.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn"
            >
              {t.getDirections}
            </a>
          </Reveal>
        )}

        <Reveal className="details__countdown" delay={0.3}>
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}
