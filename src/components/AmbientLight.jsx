import { useReducedMotion } from "../hooks/useReducedMotion";
import "./AmbientLight.css";

// A soft glowing band that continuously sweeps from the top of the page to
// the bottom, looping forever — a gentle ambient touch rather than a loud
// effect. Purely decorative, so it's skipped entirely for guests who
// prefer reduced motion.
export function AmbientLight() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return <div className="ambient-light" aria-hidden="true" />;
}
