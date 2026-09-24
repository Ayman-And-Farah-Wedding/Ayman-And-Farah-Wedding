import "./Ornament.css";

// Original, hand-drawn-style botanical line art (no external assets) used
// throughout the site for that soft, illustrated stationery feel — a
// laurel-style sprig divider under section titles, and a corner flourish
// framing photos.

export function SprigDivider({ className = "" }) {
  return (
    <svg viewBox="0 0 220 28" className={`sprig-divider ${className}`} aria-hidden="true">
      <g transform="translate(110,14)">
        <circle r="2.1" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="-4.4" cy="0" r="1.3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="4.4" cy="0" r="1.3" fill="none" stroke="currentColor" strokeWidth="0.8" />
      </g>

      <path
        d="M104 14 C 86 12, 70 16, 48 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="0.9" fill="none">
        <ellipse cx="91" cy="10.2" rx="5" ry="2.1" transform="rotate(-18 91 10.2)" />
        <ellipse cx="75" cy="15.6" rx="4.4" ry="1.9" transform="rotate(16 75 15.6)" />
        <ellipse cx="58" cy="11.2" rx="3.8" ry="1.7" transform="rotate(-22 58 11.2)" />
      </g>

      <path
        d="M116 14 C 134 12, 150 16, 172 11"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="0.9" fill="none">
        <ellipse cx="129" cy="10.2" rx="5" ry="2.1" transform="rotate(18 129 10.2)" />
        <ellipse cx="145" cy="15.6" rx="4.4" ry="1.9" transform="rotate(-16 145 15.6)" />
        <ellipse cx="162" cy="11.2" rx="3.8" ry="1.7" transform="rotate(22 162 11.2)" />
      </g>
    </svg>
  );
}

export function CornerFlourish({ className = "" }) {
  return (
    <svg viewBox="0 0 56 56" className={`corner-flourish ${className}`} aria-hidden="true">
      <path
        d="M3 3 C 3 18, 3 34, 3 50 M3 3 C 18 3, 34 3, 50 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="0.9" fill="none">
        <ellipse cx="3" cy="16" rx="4.6" ry="2" transform="rotate(90 3 16)" />
        <ellipse cx="3" cy="30" rx="4" ry="1.8" transform="rotate(90 3 30)" />
        <ellipse cx="16" cy="3" rx="4.6" ry="2" />
        <ellipse cx="30" cy="3" rx="4" ry="1.8" />
      </g>
    </svg>
  );
}
