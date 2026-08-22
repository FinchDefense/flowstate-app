import { GameMenu } from "./components/GameMenu/GameMenu.tsx";
import { FocusMode } from "./components/Timer/FocusMode.tsx";
import { useTimer } from "./hooks/useTimer";
import { useBreakSound } from "./hooks/useBreakSound";
import { useMusic } from "./hooks/useMusic";
import { useAppSettings } from "./hooks/useAppSettings";
import { useAlarmSettings } from "./hooks/useAlarmSettings";
import { useAutoStart } from "./hooks/useAutoStart";
import { useMusicVolume } from "./hooks/useMusicVolume";
import { useNavigation } from "./hooks/useNavigation";
import { useUsername } from "./hooks/useUsername";
import { useThemeEffect } from "./hooks/useThemeEffect";

import "./App.css";
import "./index.css";
import { useCallback, useState } from "react";

export interface Session {
  id: string;
  type: "focus" | "shortBreak" | "longBreak";
  duration: number;
  timestamp: number;
}

const FLAME_COLORS = [
  "#FFE808",
  "#FFCE00",
  "#FC6400",
  "#FF5A00",
  "#FF0000",
  "#801100",
  "#1A0F0A",
];

const EMBER_STYLES = FLAME_COLORS.map((color, index) => ({
  "--ember-color": color,
  "--ember-opacity": (0.4 + (index % 5) * 0.1).toFixed(2),
  "--ember-glow": 6 + (index % 10),
})) as React.CSSProperties[];

export function App() {
  const {
    isStartingPage,
    isGameMenuPage,
    setIsGameMenuPage,
    inFocusMode,
    setInFocusMode,
    isExiting,
  } = useNavigation();

  const {
    darkMode,
    setDarkMode,
    compactMode,
    setCompactMode,
    isMuted,
    setIsMuted,
  } = useAppSettings();
  const { alarmVolume, setAlarmVolume, alarmPlayCount, setAlarmPlayCount } =
    useAlarmSettings();
  const {
    autoStartBreak,
    setAutoStartBreak,
    autoStartFocus,
    setAutoStartFocus,
  } = useAutoStart();
  const { musicVolume, setMusicVolume } = useMusicVolume();

  const {
    hasFolder,
    isPlaying,
    currentTrack,
    audioRef,
    handleMusicFileChange,
    toggleMusic,
    skipMusic,
    pauseMusicForAlarm,
    resumeMusicAfterAlarm,
  } = useMusic(isMuted, musicVolume);

  const { displayName, setDisplayName } = useUsername();

  const breakSound = useBreakSound(
    alarmVolume,
    alarmPlayCount,
    pauseMusicForAlarm,
    resumeMusicAfterAlarm,
    isMuted,
  );

  const [sessionLog, setSessionLog] = useState<Session[]>(() => {
    const savedSessionLog = localStorage.getItem("session-log");
    return savedSessionLog ? JSON.parse(savedSessionLog) : [];
  });

  const handleSessionComplete = useCallback((newSession: Session) => {
    setSessionLog((prev) => {
      const updatedLog = [...prev, newSession];
      localStorage.setItem("session-log", JSON.stringify(updatedLog));
      return updatedLog;
    });
  }, []);

  const timer = useTimer(
    1500,
    300,
    breakSound.playBreakSound,
    autoStartBreak,
    autoStartFocus,
    handleSessionComplete,
  );
  useThemeEffect(timer.isOnBreak);

  if (isStartingPage) {
    return (
      <div className={`welcome-message ${isExiting ? "exiting" : ""}`}>
        <div className="cinder-container left-edge">
          {EMBER_STYLES.slice(0, 6).map((style, idx) => (
            <div key={idx} className={`cinder c${idx + 1}`} style={style}></div>
          ))}
        </div>

        <div className="main-intro">Welcome Back {displayName || "Guest"}</div>

        <div className="cinder-container right-edge">
          {EMBER_STYLES.slice(6, 12).map((style, idx) => (
            <div key={idx} className={`cinder c${idx + 7}`} style={style}></div>
          ))}
        </div>

        <div className="sub-intro">Ready to Focus?</div>
        <div className="press-any-key">Press any Key</div>
      </div>
    );
  }

  if (inFocusMode) {
    return (
      <FocusMode
        time={timer.time}
        formatTime={timer.formatTime}
        numPomos={timer.numPomos}
        setInFocusMode={setInFocusMode}
        handleStartPause={timer.handleStartPause}
        isRunning={timer.isRunning}
        isOnBreak={timer.isOnBreak}
        breakTime={timer.breakTime}
      />
    );
  }

  if (isGameMenuPage) {
    return (
      <GameMenu
        timer={timer}
        setInFocusMode={setInFocusMode}
        setIsGameMenuPage={setIsGameMenuPage}
        hasFolder={hasFolder}
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        onMusicFileChange={handleMusicFileChange}
        onToggleMusic={toggleMusic}
        onSkipMusic={skipMusic}
        audioRef={audioRef}
        alarmVolume={alarmVolume}
        setAlarmVolume={setAlarmVolume}
        alarmPlayCount={alarmPlayCount}
        setAlarmPlayCount={setAlarmPlayCount}
        autoStartBreak={autoStartBreak}
        setAutoStartBreak={setAutoStartBreak}
        autoStartFocus={autoStartFocus}
        setAutoStartFocus={setAutoStartFocus}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        compactMode={compactMode}
        setCompactMode={setCompactMode}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        resetToDefaults={timer.resetToDefaults}
        resetCompletedSessions={timer.resetCompletedSessions}
        musicVolume={musicVolume}
        setMusicVolume={setMusicVolume}
        breakSound={breakSound}
        sessionLog={sessionLog}
        displayName={displayName}
        setDisplayName={setDisplayName}
      />
    );
  }

  return (
    <div className="app-container">
      <div className="header"></div>
    </div>
  );
}

export default App;
