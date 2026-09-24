// One-time helper used to generate elegant demo placeholder photos
// (SVG) so the site is fully functional before real photos are added.
// Safe to delete once you've added your own photos to public/images/gallery/.
import { writeFileSync, mkdirSync } from "node:fs";

const palettes = [
  ["#2b2420", "#4a3b2f", "#c9a961"],
  ["#1f1d1a", "#3d332a", "#d4b483"],
  ["#241f1c", "#463a2e", "#c2a06c"],
  ["#211c19", "#40342a", "#cfa96a"],
  ["#26211d", "#453729", "#d1ab6d"],
  ["#1e1a17", "#3a2f26", "#c6a165"],
  ["#231e1a", "#42352a", "#d3ae72"],
  ["#201b18", "#3e3227", "#c9a361"],
];

function monogramSvg({ w, h, colors, initials, seed }) {
  const [dark, mid, gold] = colors;
  const rand = (n) => {
    const x = Math.sin(seed * 9301 + n * 49297) * 233280;
    return x - Math.floor(x);
  };
  let lines = "";
  for (let i = 0; i < 5; i++) {
    const x1 = rand(i) * w;
    const y1 = rand(i + 10) * h;
    const x2 = rand(i + 20) * w;
    const y2 = rand(i + 30) * h;
    lines += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${gold}" stroke-opacity="0.06" stroke-width="1"/>`;
  }
  const cx = w / 2;
  const cy = h / 2;
  const frameInset = Math.min(w, h) * 0.045;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="38%" r="75%">
      <stop offset="0%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${dark}"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  ${lines}
  <rect x="${frameInset}" y="${frameInset}" width="${w - frameInset * 2}" height="${h - frameInset * 2}" fill="none" stroke="${gold}" stroke-opacity="0.35" stroke-width="1.5"/>
  <g fill="none" stroke="${gold}" stroke-opacity="0.55" stroke-width="1">
    <line x1="${cx - 70}" y1="${cy}" x2="${cx - 26}" y2="${cy}"/>
    <line x1="${cx + 26}" y1="${cy}" x2="${cx + 70}" y2="${cy}"/>
  </g>
  <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
    font-family="'Playfair Display', 'Georgia', serif" font-size="${Math.min(w, h) * 0.09}"
    fill="${gold}" fill-opacity="0.85" letter-spacing="6">${initials}</text>
</svg>`;
}

mkdirSync("public/images/gallery", { recursive: true });

const shots = [
  { name: "photo-01", w: 1600, h: 2000 },
  { name: "photo-02", w: 1600, h: 1067 },
  { name: "photo-03", w: 1600, h: 2000 },
  { name: "photo-04", w: 1200, h: 1500 },
  { name: "photo-05", w: 1200, h: 1500 },
  { name: "photo-06", w: 1200, h: 1500 },
  { name: "photo-07", w: 1600, h: 1067 },
  { name: "photo-08", w: 1600, h: 2000 },
];

shots.forEach((shot, i) => {
  const svg = monogramSvg({
    w: shot.w,
    h: shot.h,
    colors: palettes[i % palettes.length],
    initials: "A · S",
    seed: i + 1,
  });
  writeFileSync(`public/images/gallery/${shot.name}.svg`, svg, "utf8");
});

console.log(`Generated ${shots.length} placeholder photos in public/images/gallery/`);
