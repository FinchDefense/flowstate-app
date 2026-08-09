interface PomodoroCounterProps {
  numPomos: number;
  glowColor: string;
}

export function PomodoroCounter({ numPomos, glowColor }: PomodoroCounterProps) {
  return (
    <div 
      className="number-of-pomodoros"
      style={{
          color: glowColor,
        }}
    >
      🍅 Focus Session #{numPomos}
    </div>
  )
}