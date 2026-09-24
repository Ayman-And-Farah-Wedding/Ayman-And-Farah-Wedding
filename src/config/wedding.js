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

  // ---- RSVP & guest wishes ----------------------------------------------------
  // RECOMMENDED: create a free Google Form with 3 questions — Name,
  // "Will you attend?", and "Leave your wishes for us" — then paste its
  // EMBED link here. When a guest clicks "RSVP" they'll see a popup with
  // your photo, a thank-you message, and that form right on the site —
  // every response (including their written wishes) is saved automatically
  // to a Google Sheet only you can see. Exact steps in
  // WEDDING-CONTENT-GUIDE.md -> "RSVP & saving guest wishes".
  rsvpFormEmbedUrl: "",

  // Fallback link (opens in a new tab). Used automatically if you leave
  // rsvpFormEmbedUrl empty above, and always offered as a secondary "open
  // full page" option inside the popup. Leave both empty ("") to hide the
  // RSVP button entirely.
  rsvpUrl: "https://forms.google.com/",

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
  showStory: true,
  story: [
    {
      year: "2019",
      title: "The Beginning",
      text: "A chance meeting, a long conversation, and the quiet feeling that something had just started.",
    },
    {
      year: "2022",
      title: "A New Chapter",
      text: "Two lives grew into one — new dreams, new adventures, and a promise to build a future together.",
    },
    {
      year: "2026",
      title: "Forever",
      text: "The day we say 'I do' and begin the story we've been writing for each other all along.",
    },
  ],

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
  "painted-portrait.jpg", // hero opener — the painted portrait
  "engagement-neon.jpg", // photo + quote pairing
  "rooftop-night.jpg", // full-bleed
  "casual-selfie.jpg", // grid
  "snow-day.jpg", // grid
  "engagement-elegant.jpg", // closing photo before wedding details
];
