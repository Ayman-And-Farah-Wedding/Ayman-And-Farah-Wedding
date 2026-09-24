import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import "./Nav.css";

export function Nav() {
  const { t } = useLanguage();

  const links = [
    { href: "#story", label: t.ourStory },
    { href: "#details", label: t.weddingDetails },
    { href: "#rsvp", label: t.rsvpButton },
  ];

  return (
    <nav className="site-nav" aria-label="Section navigation">
      <div className="site-nav__inner">
        <a href="#main-content" className="site-nav__monogram">
          {wedding.groom?.[0]}
          <span aria-hidden="true">&amp;</span>
          {wedding.bride?.[0]}
        </a>
        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
