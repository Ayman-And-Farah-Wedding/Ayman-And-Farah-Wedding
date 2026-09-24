import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { wedding } from "./config/wedding";
import { LanguageProvider } from "./context/LanguageContext";
import { MusicProvider, useMusic } from "./context/MusicContext";
import { OpeningScreen } from "./components/OpeningScreen";
import { MusicPlayer } from "./components/MusicPlayer";
import { LanguageToggle } from "./components/LanguageToggle";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Gallery } from "./components/Gallery";
import { WeddingDetails } from "./components/WeddingDetails";
import { Location } from "./components/Location";
import { GuestBook } from "./components/GuestBook";
import { Footer } from "./components/Footer";

function Invitation() {
  const [opened, setOpened] = useState(false);
  const { start } = useMusic();

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const handleOpen = () => {
    start();
    setOpened(true);
  };

  useEffect(() => {
    document.title = `${wedding.groom} & ${wedding.bride} — ${wedding.date}`;
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AnimatePresence>{!opened && <OpeningScreen onOpen={handleOpen} />}</AnimatePresence>

      {/* inert keeps everything behind the opening overlay out of tab order
          and unclickable until the guest actually opens the invitation. */}
      <div inert={!opened}>
        <LanguageToggle />

        <main id="main-content">
          <Hero />
          <Story />
          <Gallery />
          <WeddingDetails />
          <Location />
          <GuestBook />
        </main>
        <Footer />
      </div>
      <MusicPlayer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MusicProvider>
        <Invitation />
      </MusicProvider>
    </LanguageProvider>
  );
}
