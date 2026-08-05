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
      #{numPomos}
    </div>
  )
}