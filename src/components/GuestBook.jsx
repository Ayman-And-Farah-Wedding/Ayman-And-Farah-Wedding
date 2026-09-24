import { useState } from "react";
import { wedding, gallery } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useGuestbook } from "../hooks/useGuestbook";
import { galleryPhotoPath } from "../utils/assetPath";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { SprigDivider, CornerFlourish } from "./Ornament";
import "./GuestBook.css";

function timeAgo(date) {
  if (!date) return "";
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const units = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  for (const [unit, secs] of units) {
    const value = Math.floor(seconds / secs);
    if (value >= 1) return `${value} ${unit}${value > 1 ? "s" : ""} ago`;
  }
  return "just now";
}

export function GuestBook() {
  const { t } = useLanguage();
  const { messages, loading, enabled, submitMessage } = useGuestbook();
  const [form, setForm] = useState({ name: "", attending: "yes", message: "", honeypot: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  const thankYouPhoto = gallery[gallery.length - 1];

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      await submitMessage(form);
      setForm({ name: "", attending: "yes", message: "", honeypot: "" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (!enabled && !wedding.rsvpUrl) return null;

  return (
    <section className="guestbook section section--cream-deep" id="rsvp" aria-labelledby="guestbook-title">
      <div className="container container--narrow guestbook__inner">
        <Reveal className="guestbook__intro">
          {thankYouPhoto && (
            <div className="guestbook__photo">
              <CornerFlourish className="corner-flourish--tl" />
              <CornerFlourish className="corner-flourish--br" />
              <PhotoFrame
                src={galleryPhotoPath(thankYouPhoto)}
                alt={`${wedding.groom} & ${wedding.bride}`}
                className="guestbook__photo-img"
              />
            </div>
          )}
          <span className="eyebrow">{t.rsvpButton}</span>
          <h2 className="section-title" id="guestbook-title">
            {t.rsvpTitle}
          </h2>
          <SprigDivider className="guestbook__divider" />
          <p className="section-lede guestbook__subtitle">{t.rsvpSubtitle}</p>
        </Reveal>

        {enabled ? (
          <Reveal className="guestbook__form-wrap" delay={0.1}>
            {status === "done" ? (
              <div className="guestbook__thanks">
                <span className="guestbook__thanks-icon" aria-hidden="true">
                  &#10084;
                </span>
                <p>{t.guestbookThanks}</p>
                <button type="button" className="guestbook__again" onClick={() => setStatus("idle")}>
                  {t.guestbookWriteAnother}
                </button>
              </div>
            ) : (
              <form className="guestbook__form" onSubmit={handleSubmit}>
                <div className="guestbook__field">
                  <label htmlFor="gb-name">{t.guestbookName}</label>
                  <input
                    id="gb-name"
                    type="text"
                    required
                    maxLength={60}
                    value={form.name}
                    onChange={handleChange("name")}
                    autoComplete="name"
                  />
                </div>

                <div className="guestbook__field">
                  <span className="guestbook__field-label">{t.guestbookAttending}</span>
                  <div className="guestbook__pills" role="radiogroup" aria-label={t.guestbookAttending}>
                    <label className={`guestbook__pill ${form.attending === "yes" ? "is-active" : ""}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={form.attending === "yes"}
                        onChange={handleChange("attending")}
                      />
                      {t.guestbookYes}
                    </label>
                    <label className={`guestbook__pill ${form.attending === "no" ? "is-active" : ""}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={form.attending === "no"}
                        onChange={handleChange("attending")}
                      />
                      {t.guestbookNo}
                    </label>
                  </div>
                </div>

                <div className="guestbook__field">
                  <label htmlFor="gb-message">{t.guestbookMessage}</label>
                  <textarea
                    id="gb-message"
                    required
                    maxLength={500}
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                  />
                </div>

                {/* Honeypot: hidden from real guests via CSS, catches simple bots */}
                <input
                  type="text"
                  name="company"
                  className="guestbook__honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.honeypot}
                  onChange={handleChange("honeypot")}
                  aria-hidden="true"
                />

                <button type="submit" className="btn btn--solid guestbook__submit" disabled={status === "submitting"}>
                  {status === "submitting" ? t.guestbookSending : t.guestbookSubmit}
                </button>

                {status === "error" && <p className="guestbook__error">{t.guestbookError}</p>}
              </form>
            )}
          </Reveal>
        ) : (
          wedding.rsvpUrl && (
            <Reveal delay={0.1}>
              <a href={wedding.rsvpUrl} target="_blank" rel="noreferrer noopener" className="btn btn--solid">
                {t.rsvpButton}
              </a>
            </Reveal>
          )
        )}

        {enabled && (
          <Reveal className="guestbook__wall" delay={0.15}>
            <span className="eyebrow">{t.guestbookWallTitle}</span>
            <SprigDivider className="guestbook__wall-divider" />

            {loading && <p className="guestbook__empty">{t.guestbookLoading}</p>}
            {!loading && messages.length === 0 && <p className="guestbook__empty">{t.guestbookEmpty}</p>}

            <ul className="guestbook__list">
              {messages.map((m) => (
                <li key={m.id} className="guestbook__card">
                  <p className="guestbook__card-message">&ldquo;{m.message}&rdquo;</p>
                  <div className="guestbook__card-footer">
                    <span className="guestbook__card-name">{m.name}</span>
                    {m.createdAt?.toDate && (
                      <span className="guestbook__card-time">{timeAgo(m.createdAt.toDate())}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
