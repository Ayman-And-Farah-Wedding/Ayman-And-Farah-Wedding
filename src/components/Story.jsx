import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { SprigDivider, CornerFlourish } from "./Ornament";
import "./Story.css";

export function Story() {
  const { t } = useLanguage();

  if (!wedding.showStory || !wedding.story) return null;

  const paragraphs = wedding.story
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section className="story section" id="story" aria-labelledby="story-title">
      <div className="container container--narrow">
        <Reveal className="story__intro">
          <span className="eyebrow">{t.ourStory}</span>
          <h2 className="section-title" id="story-title">
            {t.storyKicker}
          </h2>
          <SprigDivider className="story__divider" />
        </Reveal>

        <Reveal className="story__text" delay={0.1}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        {wedding.storyPhoto && (
          <Reveal className="story__photo" delay={0.2} direction="zoom">
            <CornerFlourish className="corner-flourish--tl" />
            <CornerFlourish className="corner-flourish--br" />
            <PhotoFrame
              src={galleryPhotoPath(wedding.storyPhoto)}
              alt={`${wedding.groom} & ${wedding.bride}`}
              className="story__photo-img"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
