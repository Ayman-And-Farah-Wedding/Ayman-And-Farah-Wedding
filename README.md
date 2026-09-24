# Ayman & Farah — Wedding Invitation

A premium, cinematic, single-page wedding invitation. Full-screen opening
sequence, cinematic scroll-driven photo story, live countdown, bilingual
(English / Arabic with RTL), background music with a floating control, and
zero backend — it's a static site you can host for free.

Everything you personalize lives in two files:

- **[src/config/wedding.js](src/config/wedding.js)** — names, date, venue, RSVP link, story, gallery photo list
- **[src/config/translations.js](src/config/translations.js)** — the English/Arabic UI strings

See **[WEDDING-CONTENT-GUIDE.md](WEDDING-CONTENT-GUIDE.md)** for a plain-language walkthrough of every change you're likely to want to make.

---

## Step 1 — Install dependencies

```bash
npm install
```

## Step 2 — Run locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). You'll see the
full working demo immediately — placeholder photos, demo names ("Ayman &
Farah"), and a working countdown — no configuration required to try it out.

## Step 3 — Add your photos

Put your photos here:

```
public/images/gallery/
```

Then list the filenames (in the order you want them to appear) in
**[src/config/wedding.js](src/config/wedding.js)**:

```js
export const gallery = [
  "photo-01.jpg",
  "photo-02.jpg",
  "photo-03.jpg",
];
```

The demo ships with 8 generated placeholder images already wired up so the
site looks complete before you add anything — just overwrite the filenames
(or the files themselves) with your own. JPG, PNG, WEBP and SVG all work.
Missing or broken photos automatically fall back to an elegant placeholder
frame instead of a broken-image icon, so the site never looks broken.

## Step 4 — Add your music

Put your song here, named exactly:

```
public/audio/wedding-song.mp3
```

(Or change `music.src` in `wedding.js` if you'd rather use a different
filename/format.) Music never autoplays — it only starts the moment a guest
taps **Open Invitation**, per browser autoplay rules and good manners.

## Step 5 — Edit your wedding information

Everything else — names, date, time, venue, address, Google Maps link,
RSVP link, message, hashtag, social links, and your story timeline — is in:

```
src/config/wedding.js
```

## Step 6 — Build

```bash
npm run build
```

Output goes to `dist/`. `npm run preview` serves that build locally so you
can do one last check before deploying.

## Step 7 — Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. If you're deploying as a **project site**
   (`https://your-username.github.io/your-repo-name/`), open
   [vite.config.js](vite.config.js) and change:
   ```js
   base: "/",
   ```
   to:
   ```js
   base: "/your-repo-name/",
   ```
   (Skip this step if you're using a custom domain or a
   `your-username.github.io` root/user site.)
3. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch using the
   `gh-pages` package (already configured in `package.json`).
4. In your GitHub repo, go to **Settings → Pages** and set the source to
   the `gh-pages` branch (root).

Your invitation will be live at:

```
https://your-username.github.io/your-repo-name/
```

or at your custom domain, if you've configured one.

---

## What you get

- **Opening screen** — full-screen cinematic reveal with the couple's names,
  date, and an "Open Invitation" button. No music or animation plays until
  the guest taps it.
- **Cinematic photo story** — hero photo, photo+quote pairing, full-bleed
  photo, a staggered grid, and a closing photo, each with scroll-triggered
  fade/zoom/parallax reveals.
- **Our Story timeline** — configurable, can be turned off entirely.
- **Wedding details** — date, time, venue, address, with a "Get Directions"
  button linking to your Google Maps URL.
- **Live countdown** — days/hours/minutes/seconds, timezone-safe, switches
  to "Today is the day ❤" automatically.
- **Location** — an embedded, no-API-key Google Map plus an "Open in Google
  Maps" button.
- **RSVP** — opens an on-site popup with your photo, a thank-you message,
  and an embedded free Google Form so guests can confirm attendance and
  leave a written wish without leaving the site — every response saves
  automatically to a Google Sheet you own. Falls back to a plain link, or
  hides itself if left unconfigured.
- **Social** — Instagram/Facebook/hashtag, each shown only if you fill it in.
- **Floating music control** — play/pause and mute/unmute, persists across
  scrolling, fails gracefully if the browser blocks autoplay or no song has
  been added yet.
- **Language toggle (EN/AR)** — full right-to-left layout switch, not just
  translated words.
- **Mobile-first, accessible, fast** — no horizontal scroll at any size,
  lazy-loaded images, keyboard-navigable, honors `prefers-reduced-motion`,
  and the opening overlay is `inert` (unreachable by keyboard/screen reader)
  until opened.

## Customization quick reference

| What to change | File |
|---|---|
| Names, date, time, venue, address | `src/config/wedding.js` |
| Google Maps link (+ optional precise pin) | `src/config/wedding.js` → `mapsUrl` / `mapsEmbedUrl` |
| RSVP popup + saved guest wishes | `src/config/wedding.js` → `rsvpFormEmbedUrl` (see content guide) |
| Our Story timeline (or turn it off) | `src/config/wedding.js` → `story` / `showStory` |
| Photos | `public/images/gallery/` + `src/config/wedding.js` → `gallery` |
| Music | `public/audio/wedding-song.mp3` |
| UI text / Arabic translations | `src/config/translations.js` |
| Colors | `src/styles/variables.css` |
| Fonts | `src/styles/variables.css` (font variables) + the Google Fonts `<link>` in `index.html` |
| Browser tab title & WhatsApp link preview | `index.html` (`<title>`, `og:title`, `og:description`) |

## Tech stack

React + Vite, [framer-motion](https://www.framer.com/motion/) for scroll
and transition animations, plain CSS (no UI framework). No backend, no
database, no paid services — it's a fully static site.

## Project structure

```
src/
├── components/      One component per section (Hero, Story, Gallery, ...)
├── config/          wedding.js (your content) + translations.js (EN/AR strings)
├── context/         Language + music global state
├── hooks/           useCountdown, useReducedMotion
├── styles/          variables.css (colors/fonts), global.css, animations.css
└── App.jsx

public/
├── images/gallery/  Your photos go here
└── audio/           Your song goes here
```
