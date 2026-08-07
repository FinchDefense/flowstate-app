interface TimerPresetsProps {
  presetTime: (seconds: number) => void;
}

export function TimerPresets({ presetTime }: TimerPresetsProps) {
  return (
    <div className="timer-buttons-time-options">
      <button onClick={() => presetTime(5)}>test</button>
      <button onClick={() => presetTime(300)}>5m</button>
      <button onClick={() => presetTime(900)}>15m</button>
      <button onClick={() => presetTime(1500)}>25m</button>
      <button onClick={() => presetTime(1800)}>30m</button>
      <button onClick={() => presetTime(2700)}>45m</button>
      <button onClick={() => presetTime(3600)}>60m</button>
    </div>
  )
}