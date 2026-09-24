import { useEffect, useState } from "react";

function getTimeParts(targetMs) {
  const diff = targetMs - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, done: false };
}

// Reliable countdown driven by a fixed target timestamp (parsed once).
// Re-derives the remaining time every tick from Date.now() rather than
// decrementing state, so it can't drift and stays correct after tab
// throttling, sleep, or a page refresh.
export function useCountdown(dateISO) {
  const targetMs = new Date(dateISO).getTime();
  const [time, setTime] = useState(() => getTimeParts(targetMs));

  useEffect(() => {
    if (Number.isNaN(targetMs)) return undefined;
    const tick = () => setTime(getTimeParts(targetMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  return time;
}
