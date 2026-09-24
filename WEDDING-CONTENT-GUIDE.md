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

**Basic setup (works immediately, no extra steps):**

1. Open Google Maps, search for your venue, click **Share**, and copy the link.
2. Paste it here in `src/config/wedding.js`:

```js
mapsUrl: "https://maps.google.com/?q=Grand+Hotel+Cairo",
```

This is used by the "Get Directions" and "Open in Google Maps" buttons. The
embedded map preview on the page also builds itself automatically from your
`venue` + `address` text — nothing else to do.

**For a pixel-precise pin** (if the automatic map isn't landing exactly on
your venue — common for venues with generic names):

1. In Google Maps, search your venue, click **Share** → **Embed a map**.
2. Click **Copy HTML**. You'll get something like
   `<iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>`.
3. Copy only the part inside `src="..."` and paste it here:

```js
mapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
```

Leave it as `""` to keep using the automatic text-search map.

---

## RSVP & Guest Book setup

**What does "RSVP" mean?** It's short for the French *répondez s'il vous
plaît* — "please respond." It's just the standard way of asking a guest to
confirm whether they're coming.

The RSVP section is a real **Guest Book right on the page** — no Google
Forms, no popup, no redirect. Guests type their name and a written wish,
and everyone can scroll down and read the wall of wishes other guests have
left (a bit like a real paper guest book at the venue). It needs a free
place to store those messages, which is what the steps below set up.

**Why Firebase?** It's Google's free app-backend service — free tier, no
credit card, and its free quota (about 20,000 writes/day) is far more than
any wedding will ever use. This is a one-time setup; once it's done, it
just works.

### Step-by-step (about 10 minutes)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
   and sign in with any Google account.
2. Click **Create a project** (or **Add project**). Name it anything, e.g.
   `ayman-farah-wedding`. You can skip/disable Google Analytics when asked —
   it isn't needed.
3. Once the project is created, click the **Web** icon (`</>`) on the
   project overview page to register a web app. Give it any nickname and
   click **Register app**. You do *not* need Firebase Hosting.
4. You'll see a code block with a `firebaseConfig` object like this:

   ```js
   const firebaseConfig = {
     apiKey: "AIza...",
     authDomain: "ayman-farah-wedding.firebaseapp.com",
     projectId: "ayman-farah-wedding",
     storageBucket: "ayman-farah-wedding.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef123456",
   };
   ```

   Copy those exact values into **`src/config/firebase.js`** in this
   project, replacing the empty `""` strings.

5. Back in the Firebase console, open **Build → Firestore Database** in the
   left sidebar → click **Create database** → choose a region close to your
   guests → start in **test mode** (we'll lock it down properly in the next
   step).
6. Once created, click the **Rules** tab and replace everything with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /guestbookMessages/{messageId} {
         allow read: if true;
         allow create: if request.resource.data.name is string
                       && request.resource.data.name.size() > 0
                       && request.resource.data.name.size() <= 60
                       && request.resource.data.message is string
                       && request.resource.data.message.size() > 0
                       && request.resource.data.message.size() <= 500;
         allow update, delete: if false;
       }
     }
   }
   ```

   Click **Publish**. This is what keeps the Guest Book safe: anyone can
   read and post a wish, but nobody (including guests) can edit or delete
   an existing message from the site itself.

7. Save `src/config/firebase.js` and reload the site — the Guest Book
   section will now appear, form and all.

**Where do messages go / how do I moderate them?** In the Firebase console,
go to **Firestore Database → Data** — every submission appears there as a
row, in real time, with the guest's name and message. If something
inappropriate gets posted, you can delete that one row directly there
(deleting isn't possible from the public site itself, by design).

**Optional fallback:** if you don't want to set up Firebase right now,
leave `src/config/firebase.js` untouched and instead set `rsvpUrl` in
`src/config/wedding.js` to any link (a Google Form, WhatsApp, etc.) — the
RSVP button will just open that link instead. Leave both unset to hide the
RSVP section entirely.

---

## Change your "Our Story" text

```js
story: `Write your story here. You can use a blank line to start a new
paragraph, like this.

This becomes a second paragraph.`,
storyPhoto: "your-photo.jpg", // a filename from public/images/gallery/
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
--color-cream: #fbf8f2;   /* main light background (warm ivory) */
--color-sage-tint: #edf0e2; /* muted section background (details, footer) */
--color-ink: #3f4a38;     /* heading/text color (deep sage) */
--color-gold: #b8944f;    /* accent color — buttons, dividers, icons */
```

The whole site uses a soft, airy, botanical-stationery palette — no dark
sections anywhere — so any color you pick here should stay on the light,
elegant side to match.

---

## Change fonts

Also in `src/styles/variables.css`:

```css
--font-serif: "Playfair Display", "Georgia", serif;   /* section headings */
--font-script: "Parisienne", "Cormorant Garamond", cursive; /* the couple's names */
--font-sans: "Jost", "Helvetica Neue", Arial, sans-serif; /* body text & buttons */
```

`--font-script` is the flowing signature-style font used for your names on
the opening screen and in the footer. To use a different Google Font, pick
one at [fonts.google.com](https://fonts.google.com), update the
`<link href="...">` in `index.html` to load it, then change the font name
above to match.

**The botanical flourishes** (the small leaf-sprig dividers under section
titles, and the corner decorations framing photos) are original hand-coded
vector line art in `src/components/Ornament.jsx` — no images to manage, and
their color follows `--color-gold` automatically.

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
- [ ] `src/config/firebase.js` filled in (or `rsvpUrl` set as a fallback)
- [ ] Opened the Guest Book yourself and submitted a test wish — check it appears on the wall and in the Firebase console
- [ ] Opened the site on your own phone once to double check
