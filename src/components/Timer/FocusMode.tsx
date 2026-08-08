import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect, useRef } from "react";
import { getRandomQuote } from "./quotes";
import type { Quote } from "./quotes";
import "./FocusMode.css";
import "./Timer.css";

interface FocusModeProps {
  time: number;
  numPomos: number;
  formatTime: (totalSeconds: number) => string;
  setInFocusMode: Dispatch<SetStateAction<boolean>>;
  handleStartPause: () => void;
  isRunning: boolean;
  isOnBreak: boolean;
  breakTime: number;
}

export function FocusMode({
  setInFocusMode,
  time,
  formatTime,
  numPomos,
  handleStartPause,
  isRunning,
  isOnBreak,
  breakTime,
}: FocusModeProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());

  const exitFocusMode = () => {
    setInFocusMode(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        exitFocusMode();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const buttonContent = isRunning
    ? { icon: "⏸", text: "Pause" }
    : time === 0
      ? { icon: "🔄", text: "Restart" }
      : { icon: "▶", text: "Start" };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const animationOnClick = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add("animate-click");

      const handleAnimationEnd = () => {
        button.classList.remove("animate-click");
        button.removeEventListener("animationend", handleAnimationEnd);
      };

      button.addEventListener("animationend", handleAnimationEnd);
    }
  };

  return (
    <div className="Focus-Mode-container">
      <div className="Focus-Mode-Quote">{quote.text}</div>
      <div className="Focus-Mode-Quote-Author">{quote.author}</div>

      <div className="Focus-Mode-timer">
        <span className="timer-emoji">
          {isOnBreak ? '🌿' : '🎯'}
        </span>
        <div className="timer-display-time">
          {isOnBreak ? formatTime(breakTime) : formatTime(time)}
        </div>
      </div>

      <button
        onClick={() => {
          handleStartPause();
          animationOnClick();
        }}
        className="start-pause-button"
        ref={buttonRef}
      >
        <span className="button-icon">{buttonContent.icon}</span>
        <span>{buttonContent.text}</span>
      </button>

      <div className="Focus-Mode-footer">
        <div className="number-of-pomodoros">Focus Session #{numPomos}</div>
        <button
          className="Focus-Mode-exit-button"
          onClick={() => {
            exitFocusMode();
            animationOnClick();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
