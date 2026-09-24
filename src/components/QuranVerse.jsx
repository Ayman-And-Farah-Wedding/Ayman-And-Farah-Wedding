import { wedding } from "../config/wedding";
import { Reveal } from "./Reveal";
import { SprigDivider } from "./Ornament";
import "./QuranVerse.css";

// Always rendered in Arabic script, regardless of the site's current
// language — Quranic text is quoted in its original Arabic, not
// translated, even on the English version of the page.
export function QuranVerse() {
  if (!wedding.quranVerse) return null;

  return (
    <section className="quran section" aria-label="Quranic verse">
      <div className="container container--narrow quran__inner">
        <Reveal>
          <p className="quran__text" lang="ar" dir="rtl">
            &#64831;{wedding.quranVerse}&#64830;
          </p>
          <SprigDivider className="quran__divider" />
          {wedding.quranReference && (
            <p className="quran__reference" lang="ar" dir="rtl">
              {wedding.quranReference}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
