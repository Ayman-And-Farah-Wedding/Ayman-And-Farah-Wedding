import { wedding } from "../config/wedding";
import { useLanguage } from "../context/LanguageContext";
import { useCountdown } from "../hooks/useCountdown";
import { Reveal } from "./Reveal";
import "./Countdown.css";

export function Countdown() {
  const { t } = useLanguage();
  const time = useCountdown(wedding.dateISO);

  const units = [
    { label: t.days, value: time.days },
    { label: t.hours, value: time.hours },
    { label: t.minutes, value: time.minutes },
    { label: t.seconds, value: time.seconds },
  ];

  return (
    <div className="countdown">
      <Reveal className="countdown__title">
        <span className="eyebrow">{t.countdownTitle}</span>
      </Reveal>

      {time.done ? (
        <Reveal className="countdown__today" delay={0.15}>
          {t.todayMessage} <span aria-hidden="true">❤</span>
        </Reveal>
      ) : (
        <div className="countdown__grid" role="timer" aria-live="polite">
          {units.map((unit, index) => (
            <Reveal
              as="div"
              key={unit.label}
              className="countdown__unit"
              delay={index * 0.08}
              direction="up"
            >
              <span className="countdown__value">{String(unit.value).padStart(2, "0")}</span>
              <span className="countdown__label">{unit.label}</span>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
