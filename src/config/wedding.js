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
  date: "15 May 2027",
  dateISO: "2027-05-15T19:00:00",
  ceremonyTime: "7:00 PM",

  // ---- Venue --------------------------------------------------------------
  venue: "Grand Hotel Cairo",
  address: "Cairo, Egypt",
  mapsUrl: "https://maps.google.com/?q=Grand+Hotel+Cairo",

  // Optional: for a pixel-precise map pin (instead of a text search for
  // venue+address, which usually works fine but can be off for venues with
  // generic names). In Google Maps: search your venue -> Share -> Embed a
  // map -> Copy HTML -> paste ONLY the src="..." URL here. Leave empty to
  // use the automatic text-search map.
  mapsEmbedUrl: "",

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
      year: "2027",
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
  "photo-01.svg",
  "photo-02.svg",
  "photo-03.svg",
  "photo-04.svg",
  "photo-05.svg",
  "photo-06.svg",
  "photo-07.svg",
  "photo-08.svg",
];
