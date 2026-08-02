import { useState } from 'react';
import './Timer.css'

export function Timer() {
  const [time, setTime] = useState<number>()

  return (
    <div className="timer-container">
      <div className="timer-display">
        <div className="timer-display-time">25:00</div>
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
          <button>5m</button>
          <button>15m</button>
          <button>25m</button>
          <button>30m</button>
          <button>45m</button>
          <button>60m</button>
        </div>
    </div>
  );
}
