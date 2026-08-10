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
  onSkip?: () => void;
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
  onSkip,
}: TimerDisplayProps) {
  const displayColor = isOnBreak ? '#4ade80' : glowColor;
  
  const timerDisplayStyle = {
    borderColor: displayColor,
    boxShadow: `0 0 ${glowBlur}px ${glowSpread}px ${displayColor}${getOpacityHex(glowIntensity)}`,
    transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
    cursor: onSkip ? 'pointer' : 'default',
  };
  
  return (
    <div className="timer-display" style={timerDisplayStyle} onDoubleClick={onSkip}
      title="Double click or press 'S' to skip session">
      <div className="timer-status">
        {isOnBreak ? '☕ Break Time' : '🎯 Focus Session'}
      </div>
      <div className="timer-display-time">{isOnBreak ? formatTime(breakTime) : formatTime(time)}</div>
    </div>
  )
}