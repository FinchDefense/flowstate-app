import { useState } from 'react';
import './Timer.css'

export function Timer() {
  const [time, setTime] = useState<number>(1500);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds/60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    return `${paddedMinutes}:${paddedSeconds}`;
  }

  return (
    <div className="timer-container">
      <div className="timer-display">
        <div className="timer-display-time">{formatTime(time)}</div>
      </div>
      <div className="timer-buttons">
        <div className="timer-buttons-main-controls">
          <button>▶ Start</button>
          <button>⏹ Stop</button>
          <button>⟳ Reset</button>
        </div>
        <div className="timer-buttons-secondary-controls">
          <button>⏭ Skip</button>
          <button>+ 5</button>
          <button>- 5 </button>
        </div>
      </div>
      <div className="timer-buttons-time-options">
          <button onClick={() => setTime(300)}>5m</button>
          <button onClick={() => setTime(900)}>15m</button>
          <button onClick={() => setTime(1500)}>25m</button>
          <button onClick={() => setTime(1800)}>30m</button>
          <button onClick={() => setTime(2700)}>45m</button>
          <button onClick={() => setTime(3600)}>60m</button>
        </div>
    </div>
  );
}
