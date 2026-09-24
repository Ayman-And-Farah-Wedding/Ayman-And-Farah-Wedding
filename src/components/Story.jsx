import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SprigDivider } from "./Ornament";
import "./Story.css";

export function Story() {
  const { t } = useLanguage();

  if (!wedding.showStory || !wedding.story?.length) return null;

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

        <ol className="story__timeline">
          {wedding.story.map((chapter, index) => (
            <Reveal
              as="li"
              key={chapter.year}
              className="story__item"
              delay={index * 0.08}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <span className="story__year">{chapter.year}</span>
              <div className="story__line" aria-hidden="true" />
              <div className="story__body">
                <h3 className="story__title">{chapter.title}</h3>
                <p className="story__text">{chapter.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
