import { wedding, gallery } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { SprigDivider, CornerFlourish } from "./Ornament";
import { Sparkle } from "./Sparkle";
import "./Gallery.css";

export function Gallery() {
  const { t } = useLanguage();

  if (!wedding.showGallery || gallery.length === 0) return null;

  const photos = gallery.map(galleryPhotoPath);
  const duoPhoto = photos[0];
  // Grid takes everything between the duo photo and the closing photo
  // below, so nothing repeats twice regardless of how many photos are
  // actually in the gallery.
  const gridPhotos = photos.slice(1, Math.max(1, photos.length - 1));
  const finalPhoto = photos[photos.length - 1];

  return (
    <>
      {duoPhoto && (
        <section className="photo-duo section" aria-label={t.galleryTitle}>
          <div className="container photo-duo__inner">
            <Reveal className="photo-duo__frame" direction="right">
              <CornerFlourish className="corner-flourish--tl" />
              <CornerFlourish className="corner-flourish--br" />
              <PhotoFrame src={duoPhoto} alt="A moment together" className="photo-duo__img" />
            </Reveal>
            <Reveal className="photo-duo__copy" direction="left" delay={0.15}>
              <span className="eyebrow">{wedding.hashtag || t.galleryTitle}</span>
              <p className="photo-duo__quote">&ldquo;{wedding.message}&rdquo;</p>
            </Reveal>
          </div>
        </section>
      )}

      {gridPhotos.length > 0 && (
        <section className="photo-grid section" aria-label={t.galleryTitle}>
          <div className="container">
            <Reveal className="photo-grid__title">
              <span className="eyebrow">
                {t.galleryTitle}
                <Sparkle />
              </span>
              <SprigDivider className="photo-grid__divider" />
            </Reveal>
            <div className="photo-grid__items">
              {gridPhotos.map((photo, index) => (
                <Reveal
                  as="div"
                  key={photo + index}
                  className={`photo-grid__cell ${index % 2 === 1 ? "photo-grid__cell--shift" : ""}`}
                  delay={index * 0.12}
                  direction="up"
                >
                  <CornerFlourish className="corner-flourish--tl" />
                  <CornerFlourish className="corner-flourish--br" />
                  <div className="photo-grid__item">
                    <PhotoFrame src={photo} alt={`Wedding moment ${index + 1}`} className="photo-grid__img" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {finalPhoto && (
        <section className="photo-final section">
          <div className="container container--narrow">
            <Reveal className="photo-final__frame" direction="zoom" duration={1.2}>
              <CornerFlourish className="corner-flourish--tl" />
              <CornerFlourish className="corner-flourish--br" />
              <PhotoFrame src={finalPhoto} alt="The couple" className="photo-final__img" />
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
