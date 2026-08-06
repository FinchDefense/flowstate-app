import { useState } from "react";
import { useTimer } from "./useTimer";
import "./Timer.css";
import { TimerDisplay } from "./TimerDisplay";
import { TimerPresets } from "./TimerPresets";
import { PomodoroCounter } from "./PomodoroCounter";
import { MoodToggle } from "./MoodToggle";
import { PrimaryControls } from "./PrimaryControls";
import { FocusMode } from "./FocusMode"

export function Timer() {
  const timer = useTimer();
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);

  if (inFocusMode) {
    return <FocusMode
      time={timer.time}
      formatTime={timer.formatTime}
      numPomos={timer.numPomos}
      setInFocusMode={setInFocusMode}
     />
  }

  return (
    <div className="timer-container">
      <TimerDisplay
        time={timer.time}
        formatTime={timer.formatTime}
        glowColor={timer.glowColor}
        glowIntensity={timer.glowIntensity}
        glowBlur={timer.glowBlur}
        glowSpread={timer.glowSpread}
        getOpacityHex={timer.getOpacityHex}
      />
      
      <PomodoroCounter numPomos={timer.numPomos} glowColor={timer.glowColor} />
      
      <div className="timer-buttons-main-controls">
        <PrimaryControls
          handleReset={timer.handleReset}
          handleStartPause={timer.handleStartPause}
          isRunning={timer.isRunning}
          time={timer.time}
        />
        <MoodToggle
          toggleMood={timer.toggleMood}
          glowColor={timer.glowColor}
          currentMood={timer.currentMood}
        />
      </div>
      
      <TimerPresets presetTime={timer.presetTime} />

      <button onClick={() => setInFocusMode(true)}>
        🧘 Focus
      </button>
    </div>
  );
}