import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "../context/MusicContext";
import { useLanguage } from "../context/LanguageContext";
import "./MusicPlayer.css";

export function MusicPlayer() {
  const { enabled, isPlaying, isMuted, hasStarted, toggle, toggleMute } = useMusic();
  const { t } = useLanguage();

  if (!enabled || !hasStarted) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="music-player"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        role="group"
        aria-label={isPlaying ? t.musicPlaying : t.musicPaused}
      >
        <button
          type="button"
          className="music-player__btn"
          onClick={toggle}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? t.musicPaused : t.musicPlaying}
        >
          <span className={`music-player__note ${isPlaying ? "music-player__note--live" : ""}`}>
            {isPlaying ? "♪" : "♫"}
          </span>
        </button>
        <button
          type="button"
          className="music-player__btn music-player__btn--mute"
          onClick={toggleMute}
          aria-pressed={isMuted}
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
