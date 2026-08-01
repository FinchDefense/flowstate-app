import './Timer.css'

export function Timer() {
  return (
    <div className="timer-container">
      <div className="timer-display">
        <div className="timer-display-time"></div>
      </div>
      <div className="timer-buttons">
        <button>Start</button>
        <button>Reset</button>
        <button>Stop</button>
      </div>
    </div>
  );
}
