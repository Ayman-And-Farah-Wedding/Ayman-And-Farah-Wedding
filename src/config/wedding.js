// ============================================================================
// WEDDING CONFIGURATION
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to turn this into YOUR invitation.
// Every visible piece of text, date, link and photo on the site is read
// from this file. See WEDDING-CONTENT-GUIDE.md for a plain-language walkthrough.
// ============================================================================

export const wedding = {
  // ---- The couple -----------------------------------------------------
  groom: "Ayman",
  bride: "Farah",

  // ---- Date & time ------------------------------------------------------
  // "date" is shown to guests. "dateISO" drives the countdown timer and
  // MUST be in YYYY-MM-DDTHH:mm:ss format (24h clock, local wedding time).
  date: "17 October 2026",
  dateISO: "2026-10-17T19:00:00",
  ceremonyTime: "7:00 PM",

  // ---- Venue --------------------------------------------------------------
  venue: "Dar Dobbat Al-Madfa'eya",
  address: "Cairo, Egypt",
  mapsUrl:
    "https://www.google.com/maps/place/%D8%AF%D8%A7%D8%B1+%D8%B6%D8%A8%D8%A7%D8%B7+%D8%A7%D9%84%D9%85%D8%AF%D9%81%D8%B9%D9%8A%D8%A9%E2%80%AD/@30.0803783,31.3541828,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e1b58b407ff:0xfd07431ae98a939e!8m2!3d30.0803783!4d31.3541828!16s%2Fg%2F1vnrh9vt",

  // Optional: for a pixel-precise map pin (instead of a text search for
  // venue+address, which usually works fine but can be off for venues with
  // generic names). In Google Maps: search your venue -> Share -> Embed a
  // map -> Copy HTML -> paste ONLY the src="..." URL here. Leave empty to
  // use the automatic text-search map.
  // Set directly from the exact coordinates in the Maps link you shared.
  mapsEmbedUrl: "https://www.google.com/maps?q=30.0803783,31.3541828&z=17&output=embed",

  // ---- Messages -----------------------------------------------------------
  invitationLine: "You are invited to celebrate our wedding",
  message:
    "We would be honored to have you celebrate this special day with us. Your presence would mean the world as we begin our forever.",

  // ---- RSVP & Guest Book ----------------------------------------------------
  // The RSVP section is a native Guest Book right on the page — guests type
  // their name, confirm attendance, and leave a wish, all without Google
  // Forms. It needs a free Firebase project (no credit card) to store the
  // messages. Exact click-by-click steps in WEDDING-CONTENT-GUIDE.md ->
  // "Guest Book setup". Fill in src/config/firebase.js to turn it on.
  //
  // rsvpUrl is only used as a fallback link if you never set up Firebase —
  // leave it empty ("") to hide the RSVP section entirely until you do.
  rsvpUrl: "",

  // ---- Social ---------------------------------------------------------------
  // Leave any value empty ("") to hide that element automatically.
  hashtag: "#AymanAndFarah",
  instagramUrl: "",
  facebookUrl: "",

  // ---- Music ------------------------------------------------------------------
  music: {
    enabled: true,
    src: "audio/wedding-song.mp3",
    volume: 0.65,
  },

  // ---- Our Story ----------------------------------------------------------------
  // Set `showStory: false` below to hide this section entirely.
  // "story" is a free-form paragraph (or a few, separated by a blank line).
  // "storyPhoto" is a single photo shown under the text — a filename from
  // public/images/gallery/, same as the gallery list below.
  showStory: true,
  story: `Ayman and Farah were friends in school, but fate had something more beautiful written for them. They met again at university, and that's where the spark began. From friends to lovers, Ayman saw Farah in a different light for the first time, and from that moment, he knew she was the one. And here comes the day to celebrate their happily ever after.`,
  storyPhoto: "engagement-formal.jpg",

  // ---- Gallery toggle -------------------------------------------------------------
  showGallery: true,
};

// ============================================================================
// GALLERY PHOTOS
// ----------------------------------------------------------------------------
// Add your own photos to:  public/images/gallery/
// Then list the filenames here, in the order you want them to appear.
// The first photo becomes the big cinematic opener, the last becomes the
// closing photo before the wedding details — everything in between forms
// the scrolling story. JPG, PNG, WEBP or SVG all work.
// ============================================================================

export const gallery = [
  "engagement-neon.jpg", // hero opener — top of the site
  "engagement-elegant.jpg", // photo + quote pairing
  "rooftop-night.jpg", // full-bleed
  "casual-selfie.jpg", // grid
  "snow-day.jpg", // grid
  "painted-portrait.jpg", // closing photo before wedding details
];
