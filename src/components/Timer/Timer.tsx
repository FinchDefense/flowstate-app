import { useTimer } from "./useTimer";
import "./Timer.css";
import { TimerDisplay } from "./TimerDisplay";
import { TimerPresets } from "./TimerPresets";
import { PomodoroCounter } from "./PomodoroCounter";
import { MoodToggle } from "./MoodToggle";
import { PrimaryControls } from "./PrimaryControls";
import { SecondaryControls } from "./SecondaryControls";

export function Timer() {
  const timer = useTimer();

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
          handleStartPause={timer.handleStartPause}
          handleReset={timer.handleReset}
          isRunning={timer.isRunning}
          time={timer.time}
        />
        <MoodToggle
          toggleMood={timer.toggleMood}
          glowColor={timer.glowColor}
          currentMood={timer.currentMood}
        />
      </div>
      
      <SecondaryControls
        addFiveMinutes={timer.addFiveMinutes}
        minusFiveMinutes={timer.minusFiveMinutes}
      />
      
      <TimerPresets presetTime={timer.presetTime} />
    </div>
  );
}