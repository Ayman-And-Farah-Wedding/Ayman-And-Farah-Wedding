import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const PRESETS = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { y: 0, x: 36 },
  right: { y: 0, x: -36 },
  zoom: { y: 0, x: 0, scale: 0.94 },
  none: { y: 0, x: 0 },
};

// Shared scroll-reveal wrapper so every section animates in consistently.
// Automatically collapses to a simple fade when the user prefers reduced
// motion, and only plays once per element.
export function Reveal({
  as = "div",
  children,
  className,
  direction = "up",
  delay = 0,
  duration,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const preset = PRESETS[direction] || PRESETS.up;

  if (reducedMotion) {
    return (
      <Component
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.4 }}
        {...rest}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, scale: 1, ...preset }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{
        duration: duration ?? 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}
