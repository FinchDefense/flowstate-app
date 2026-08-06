interface FocusModeProps {
  time: number;
  numPomos: number;
  formatTime: (totalSeconds: number) => string;
  inFocusMode: boolean;
  setInFocusMode:  Dispatch<SetStateAction<boolean>>;
}

export function FocusMode({ inFocusMode, setInFocusMode, time, formatTime, numPomos }: FocusModeProps) {
    const exitFocusMode = () => {
      setInFocusMode(false);
    }

  return (
    <div className="Focus-Mode-container">
      <div className="Focus-Mode-Quote"></div>
      <div className="Focus-Mode-Quote-Author"> </div>
      <div className="timer-display-time">{formatTime(time)}</div>
      <div className="Focus-Mode-footer">
        <div className="number-of-pomodoros">#{numPomos}</div>
        <button className="Focus-Mode-exit-button" onClick={exitFocusMode}>✕</button>
      </div>
    </div>
  )
}