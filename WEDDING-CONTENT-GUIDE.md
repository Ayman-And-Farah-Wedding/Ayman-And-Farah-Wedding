# Wedding Content Guide

A plain-language guide to changing everything on your invitation. You don't
need to know how to code — just find the file, find the line, change the
text between the quotes, and save.

---

## Change the names

Open:

```
src/config/wedding.js
```

Change:

```js
groom: "Ayman",
bride: "Farah",
```

---

## Add your photos

Put your photo files here:

```
public/images/gallery/
```

Example — if you copy in `beach-proposal.jpg`, `family-dinner.jpg`, and
`engagement-01.jpg`, your folder looks like:

```
public/
└── images/
    └── gallery/
        ├── beach-proposal.jpg
        ├── family-dinner.jpg
        └── engagement-01.jpg
```

Then open `src/config/wedding.js` and list those exact filenames, in the
order you want them to appear on the site:

```js
export const gallery = [
  "beach-proposal.jpg",
  "family-dinner.jpg",
  "engagement-01.jpg",
];
```

That's it — no HTML to touch. The first photo becomes the big opening
photograph, the last one becomes the closing photograph before the wedding
details, and everything in between forms the scrolling story in order.

**Tip:** photos taken on a phone are often huge (5-10MB). The site will
still work, but it'll load faster for your guests if you resize/compress
them to around 1500-2000px wide first (any free online image compressor
works fine).

---

## Add your music

Put your song file here, named exactly `wedding-song.mp3`:

```
public/audio/wedding-song.mp3
```

If your file is a different format (like `.m4a` or `.ogg`), you can use
that instead — just update this line in `src/config/wedding.js`:

```js
music: {
  enabled: true,
  src: "audio/your-file-name.mp3",
  volume: 0.65,
},
```

Set `enabled: false` if you don't want music at all.

---

## Change the wedding date

Open `src/config/wedding.js` and change both of these — they need to match:

```js
date: "15 May 2027",                    // what guests SEE
dateISO: "2027-05-15T19:00:00",         // what the countdown timer USES
```

`dateISO` must stay in this exact format: `YYYY-MM-DDTHH:mm:ss` (year-month-day,
then the time in 24-hour format). This is what makes the countdown accurate.

---

## Change the ceremony time

```js
ceremonyTime: "7:00 PM",
```

---

## Change the venue

```js
venue: "Grand Hotel Cairo",
address: "Cairo, Egypt",
```

---

## Change the Google Maps location

1. Open Google Maps, search for your venue, click **Share**, and copy the link.
2. Paste it here in `src/config/wedding.js`:

```js
mapsUrl: "https://maps.google.com/?q=Grand+Hotel+Cairo",
```

This is used both by the "Get Directions" button and the "Open in Google
Maps" button. The embedded map preview on the page updates automatically
based on your `venue` and `address` — no separate setup needed.

---

## Change the RSVP link

The easiest option is a free Google Form:

1. Go to [forms.google.com](https://forms.google.com), create a form asking
   guests to confirm attendance.
2. Click **Send**, copy the link.
3. Paste it here:

```js
rsvpUrl: "https://forms.google.com/your-form-link",
```

Leave it as `""` (empty quotes) if you don't want an RSVP button shown at all.

---

## Change your "Our Story" timeline

```js
story: [
  {
    year: "2019",
    title: "The Beginning",
    text: "A chance meeting, a long conversation...",
  },
  // add, remove, or edit as many entries as you like
],
```

Don't want this section at all? Change this line:

```js
showStory: false,
```

---

## Change social links / hashtag

```js
hashtag: "#AymanAndFarah",
instagramUrl: "",   // paste your Instagram link, or leave empty to hide it
facebookUrl: "",    // same for Facebook
```

---

## Change colors

Open:

```
src/styles/variables.css
```

Every color on the site is defined once at the top of this file — change a
value there and it updates everywhere automatically. The main ones:

```css
--color-cream: #faf6ef;   /* main light background */
--color-charcoal: #17140f; /* dark sections (opening screen, details, footer) */
--color-gold: #b8944f;     /* accent color — buttons, dividers, icons */
```

---

## Change fonts

Also in `src/styles/variables.css`:

```css
--font-serif: "Playfair Display", "Georgia", serif;   /* names & headings */
--font-sans: "Jost", "Helvetica Neue", Arial, sans-serif; /* body text & buttons */
```

To use a different Google Font, pick one at [fonts.google.com](https://fonts.google.com),
update the `<link href="...">` in `index.html` to load it, then change the
font name above to match.

---

## Change the browser tab title & WhatsApp link preview

Since most guests will open this link from WhatsApp, it's worth updating
`index.html` (near the top) so the link preview looks right when shared:

```html
<title>Ayman &amp; Farah — 15 May 2027</title>
<meta property="og:title" content="Ayman & Farah — 15 May 2027" />
<meta property="og:description" content="You are invited to celebrate our wedding." />
```

(These need updating manually here, separately from `wedding.js`, because
WhatsApp reads this raw HTML directly — it doesn't run the site's code.)

---

## Change EN/AR text (buttons, labels)

All the small interface text — button labels, section titles like "Our
Story" or "Wedding Details" — lives in:

```
src/config/translations.js
```

It's split into an `en` block and an `ar` block. Edit either language
independently; the site switches the whole layout to right-to-left
automatically when Arabic is selected.

---

## Quick checklist before sending the link to guests

- [ ] Names, date, time, venue correct in `src/config/wedding.js`
- [ ] Real photos added to `public/images/gallery/` and listed in `gallery`
- [ ] Real song added to `public/audio/wedding-song.mp3`
- [ ] `mapsUrl` points to your actual venue
- [ ] `rsvpUrl` points to your actual form
- [ ] Opened the site on your own phone once to double check
