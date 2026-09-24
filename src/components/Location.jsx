import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SprigDivider } from "./Ornament";
import { Sparkle } from "./Sparkle";
import { IconPin } from "./icons";
import "./Location.css";

function embedUrl() {
  // If you pasted a precise embed link into wedding.js -> mapsEmbedUrl, use
  // that (pixel-accurate pin). Otherwise fall back to a text search built
  // from venue + address, which works with zero setup but can be a little
  // less precise for venues with generic names.
  if (wedding.mapsEmbedUrl) return wedding.mapsEmbedUrl;
  const query = encodeURIComponent(`${wedding.venue}, ${wedding.address}`);
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function Location() {
  const { t } = useLanguage();

  return (
    <section className="location section" id="location" aria-labelledby="location-title">
      <div className="container container--narrow">
        <Reveal className="location__intro">
          <span className="eyebrow">
            <IconPin className="location__pin" /> {t.locationTitle}
            <Sparkle />
          </span>
          <h2 className="section-title" id="location-title">
            {wedding.venue}
          </h2>
          <SprigDivider className="location__divider" />
          <p className="section-lede">{wedding.address}</p>
        </Reveal>

        <Reveal className="location__map" delay={0.15} direction="zoom">
          <iframe
            title={`Map to ${wedding.venue}`}
            src={embedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>

        {wedding.mapsUrl && (
          <Reveal delay={0.25}>
            <a href={wedding.mapsUrl} target="_blank" rel="noreferrer noopener" className="btn btn--solid">
              {t.openInMaps}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
