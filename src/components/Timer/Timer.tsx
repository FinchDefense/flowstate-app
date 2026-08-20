import { useTimer } from "./useTimer";
import "./Timer.css";
import { TimerDisplay } from "./TimerDisplay";
import { TimerPresets } from "./TimerPresets";
import { PomodoroCounter } from "./PomodoroCounter";
import { MoodToggle } from "./MoodToggle";
import { PrimaryControls } from "./PrimaryControls";

interface TimerProps {
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
  timer: ReturnType<typeof useTimer>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTimer: React.Dispatch<React.SetStateAction<boolean>>;
  compactMode: boolean;
}

export function Timer({
  setInFocusMode,
  timer,
  setIsGameMenuPage,
  setShowTimer,
  compactMode,
}: TimerProps) {
  return (
    <div className={`timer-container${compactMode ? " compact-mode" : ""}`}>
      {!compactMode && (
        <button
          className="back-to-menu-btn"
          onClick={() => {
            setIsGameMenuPage(true);
            setShowTimer(false);
          }}
        >
          ← Main Menu
        </button>
      )}

      <TimerDisplay
        time={timer.time}
        isOnBreak={timer.isOnBreak}
        breakTime={timer.breakTime}
        formatTime={timer.formatTime}
        glowColor={timer.glowColor}
        glowIntensity={timer.glowIntensity}
        glowBlur={timer.glowBlur}
        glowSpread={timer.glowSpread}
        getOpacityHex={timer.getOpacityHex}
        onSkip={timer.skipSession}
      />

      <div className="timer-buttons-main-controls">
        <PrimaryControls
          handleStartPause={timer.handleStartPause}
          isRunning={timer.isRunning}
          time={timer.time}
          setInFocusMode={setInFocusMode}
        />
        {!compactMode && (
          <MoodToggle
            toggleMood={timer.toggleMood}
            glowColor={timer.glowColor}
            currentMood={timer.currentMood}
          />
        )}
      </div>

      {!compactMode && <TimerPresets presetTime={timer.presetTime} />}

      {!compactMode && (
        <PomodoroCounter numPomos={timer.numPomos} glowColor={timer.glowColor} />
      )}
    </div>
  );
}
