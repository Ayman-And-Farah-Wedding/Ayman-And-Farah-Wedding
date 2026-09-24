// canvas-confetti is lazy-loaded here (dynamic import) so it never adds to
// the initial bundle — only fetched the moment a guest actually taps
// "Open Invitation".
let confettiPromise = null;
function loadConfetti() {
  if (!confettiPromise) {
    confettiPromise = import("canvas-confetti").then((m) => m.default);
  }
  return confettiPromise;
}

const GOLD_PALETTE = ["#b8944f", "#d9bd82", "#8f6f34", "#fbf8f2", "#6b7c5e"];
// Above the opening overlay (z-index 100) so it's visible while that
// screen is still mid fade-out.
const Z_INDEX = 300;

export async function fireConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const confetti = await loadConfetti();

  // Big celebratory center burst...
  confetti({
    particleCount: 130,
    spread: 100,
    startVelocity: 45,
    origin: { y: 0.45 },
    colors: GOLD_PALETTE,
    scalar: 1.1,
    zIndex: Z_INDEX,
  });

  // ...followed by a couple of side cannons for a couple of seconds.
  const end = Date.now() + 1600;
  (function frame() {
    confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.4 }, colors: GOLD_PALETTE, zIndex: Z_INDEX });
    confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.4 }, colors: GOLD_PALETTE, zIndex: Z_INDEX });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
