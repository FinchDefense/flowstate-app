interface PrimaryControlsProps {
  handleStartPause: () => void;
  isRunning: boolean;
  time: number;
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function PrimaryControls({ handleStartPause, setInFocusMode, isRunning, time}: PrimaryControlsProps) {
  const buttonContent = isRunning
      ? { icon: "⏸", text: "Pause" }
      : time === 0
      ? { icon: "🔄", text: "Restart" }
      : { icon: "▶", text: "Start" };

  return (
    <>
      <div className="timer-buttons-main-controls">
        <button onClick={handleStartPause} className="start-pause-button">
          <span className="button-icon">{buttonContent.icon}</span>
          <span>{buttonContent.text}</span>
        </button>
        <button onClick={() => setInFocusMode(true)}>
        🧘 Focus
      </button>
      </div>
    </>
  );
}
