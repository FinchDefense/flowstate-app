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
import {
  usePlayerStats,
  type QuestDifficulty,
} from "./hooks/usePlayerStats.ts";
import { Toaster, toast } from "sonner";

import "./App.css";
import "./index.css";
import { useCallback, useEffect, useState } from "react";

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
  const [currentLevel, setCurrentLevel] = useState<number>(() => {
    const savedCurrentLevel = localStorage.getItem("user-level");
    return savedCurrentLevel ? +savedCurrentLevel : 1;
  });
  const [currentXp, setCurrentXp] = useState<number>(() => {
    const savedCurrentXp = localStorage.getItem("user-xp");
    return savedCurrentXp ? +savedCurrentXp : 0;
  });

  const [activeQuestId, setActiveQuestId] = useState<string | null>(null);
  const [activeQuestTitle, setActiveQuestTitle] = useState<string>(() => {
    const savedActiveQuestTitle = localStorage.getItem("active-quest-title");
    return savedActiveQuestTitle ? savedActiveQuestTitle : "";
  });
  const [activeQuestDifficulty, setActiveQuestDifficulty] =
    useState<QuestDifficulty>(() => {
      const savedActiveQuestDifficulty = localStorage.getItem(
        "active-quest-difficulty",
      );
      return savedActiveQuestDifficulty === "trivial" ||
        savedActiveQuestDifficulty === "perilous"
        ? savedActiveQuestDifficulty
        : "guarded";
    });

  const { handleUserGainXp, xpNeededForNextLevel } = usePlayerStats(
    currentLevel,
    currentXp,
    setCurrentLevel,
    setCurrentXp,
  );

  useEffect(() => {
    localStorage.setItem("user-level", String(currentLevel));
    localStorage.setItem("user-xp", String(currentXp));
  }, [currentLevel, currentXp]);

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

  const handleSessionComplete = useCallback(
    (newSession: Session, difficulty: QuestDifficulty) => {
      setSessionLog((prev) => {
        const updatedLog = [...prev, newSession];
        localStorage.setItem("session-log", JSON.stringify(updatedLog));
        return updatedLog;
      });

      if (newSession.type === "focus" && activeQuestTitle !== "") {
        const result = handleUserGainXp(newSession.duration / 60, difficulty);
        toast.success(`🎉 +${result.xpGained} XP Gained!`, {
          description: "Great focus session. Keep it up!",
          duration: 4000,
        });

        if (result.leveledUp) {
          setTimeout(() => {
            toast.info(`🚀 LEVEL UP!`, {
              description: `You just reached Level ${result.finalLevel}!`,
              duration: 6000,
            });
          }, 800);
        }
      }
    },
    [activeQuestTitle, handleUserGainXp],
  );

  const timer = useTimer(
    1500,
    300,
    handleSessionComplete,
    breakSound.playBreakSound,
    autoStartBreak,
    autoStartFocus,
    activeQuestDifficulty,
  );

  useThemeEffect(timer.isOnBreak);

  const notifications = (
    <Toaster
      position="bottom-right"
      closeButton
      toastOptions={{
        className: "flowstate-toast",
        duration: 4000,
      }}
    />
  );

  if (isStartingPage) {
    return (
      <>
        {notifications}
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
      </>
    );
  }

  if (inFocusMode) {
    return (
      <>
        {notifications}
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
      </>
    );
  }

  if (isGameMenuPage) {
    return (
      <>
        {notifications}
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
          activeQuestId={activeQuestId}
          setActiveQuestId={setActiveQuestId}
          activeQuestTitle={activeQuestTitle}
          setActiveQuestTitle={setActiveQuestTitle}
          setActiveQuestDifficulty={setActiveQuestDifficulty}
          currentLevel={currentLevel}
          currentXp={currentXp}
          xpNeededForNextValue={xpNeededForNextLevel}
        />
      </>
    );
  }

  return (
    <>
      {notifications}
      <div className="app-container">
        <div className="header"></div>
      </div>
    </>
  );
}

export default App;
