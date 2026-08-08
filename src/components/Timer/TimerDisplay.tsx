interface TimerDisplayProps {
  time: number;
  breakTime: number;
  isOnBreak: boolean;
  formatTime: (totalSeconds: number) => string;
  glowColor: string;
  glowIntensity: number;
  glowBlur: number;
  glowSpread: number;
  getOpacityHex: (intensity: number) => string;
}

export function TimerDisplay({
  time,
  formatTime,
  glowColor,
  glowIntensity,
  glowBlur,
  glowSpread,
  getOpacityHex,
  breakTime,
  isOnBreak,
}: TimerDisplayProps) {
  const timerDisplayStyle = {
    borderColor: glowColor,
    boxShadow: `0 0 ${glowBlur}px ${glowSpread}px ${glowColor}${getOpacityHex(glowIntensity)}`,
  };
  
  return (
    <div className="timer-display" style={timerDisplayStyle}>
      <div className="timer-display-time">{isOnBreak ? formatTime(breakTime) : formatTime(time)}</div>
    </div>
  )
}