import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { wedding } from "../config/wedding";
import { assetPath } from "../utils/assetPath";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!wedding.music.enabled) return;
    const audio = new Audio(assetPath(wedding.music.src));
    audio.loop = true;
    audio.volume = wedding.music.volume ?? 0.6;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const start = useCallback(async () => {
    if (!wedding.music.enabled || !audioRef.current) return;
    setHasStarted(true);
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setBlocked(false);
    } catch {
      // Autoplay/playback blocked by the browser, or the file failed to
      // load (e.g. no song has been added yet). Fail silently — the
      // floating control still lets the guest retry manually.
      setIsPlaying(false);
      setBlocked(true);
    }
  }, []);

  const toggle = useCallback(async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    const next = !isMuted;
    audioRef.current.muted = next;
    setIsMuted(next);
  }, [isMuted]);

  const value = useMemo(
    () => ({
      enabled: wedding.music.enabled,
      isPlaying,
      isMuted,
      blocked,
      hasStarted,
      start,
      toggle,
      toggleMute,
    }),
    [isPlaying, isMuted, blocked, hasStarted, start, toggle, toggleMute]
  );

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>;
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
}
