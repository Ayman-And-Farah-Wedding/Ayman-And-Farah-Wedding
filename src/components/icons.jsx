// Minimal line-style icon set (no icon library needed) — matches the
// thin, gold, editorial feel of the rest of the site.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCalendar(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconVenue(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M4 21V10.5L12 4l8 6.5V21" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.3H9.3v2.8h2.5V21" />
    </svg>
  );
}

export function IconHashtag(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <line x1="9" y1="4" x2="7" y2="20" />
      <line x1="16" y1="4" x2="14" y2="20" />
      <line x1="4.5" y1="9.5" x2="19.5" y2="9.5" />
      <line x1="3.5" y1="15.5" x2="18.5" y2="15.5" />
    </svg>
  );
}
