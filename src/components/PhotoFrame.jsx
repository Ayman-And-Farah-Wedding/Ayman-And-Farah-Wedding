import { useState } from "react";
import { wedding } from "../config/wedding";
import { assetPath } from "../utils/assetPath";
import "./PhotoFrame.css";

const monogram = `${wedding.groom?.[0] || ""} · ${wedding.bride?.[0] || ""}`;

// Wraps every gallery <img> so a missing/broken photo degrades to an
// elegant placeholder instead of a broken-image icon — the site stays
// beautiful even before real photos have been added.
export function PhotoFrame({ src, alt, className = "", eager = false, sizes }) {
  const [failed, setFailed] = useState(false);
  const resolved = src?.startsWith("http") ? src : assetPath(src || "");

  if (!src || failed) {
    return (
      <div className={`photo-frame photo-frame--empty ${className}`} role="img" aria-label={alt}>
        <span className="photo-frame__mark">{monogram}</span>
      </div>
    );
  }

  return (
    <img
      src={resolved}
      alt={alt}
      className={`photo-frame ${className}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
