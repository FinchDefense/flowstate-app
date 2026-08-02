import './Timer.css'

export function Timer() {
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
    </div>
  );
}
