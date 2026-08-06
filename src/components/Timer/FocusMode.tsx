import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import { getRandomQuote } from "./quotes";
import type { Quote } from "./quotes";
import './FocusMode.css'

interface FocusModeProps {
  time: number;
  numPomos: number;
  formatTime: (totalSeconds: number) => string;
  setInFocusMode: Dispatch<SetStateAction<boolean>>;
}

export function FocusMode({ 
  setInFocusMode, 
  time, 
  formatTime, 
  numPomos
 }: FocusModeProps) {
    const [quote, setQuote] = useState<Quote>(() => getRandomQuote());

    const exitFocusMode = () => {
      setInFocusMode(false);
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setQuote(getRandomQuote());
      }, 30000)

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="Focus-Mode-container">
      <div className="Focus-Mode-Quote">{quote.text}</div>
      <div className="Focus-Mode-Quote-Author">{quote.author}</div>
      <div className="timer-display-time">{formatTime(time)}</div>
      <div className="Focus-Mode-footer">
        <div className="number-of-pomodoros">#{numPomos}</div>
        <button className="Focus-Mode-exit-button" onClick={exitFocusMode}>✕</button>
      </div>
    </div>
  )
}