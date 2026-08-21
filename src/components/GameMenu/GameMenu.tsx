import { useEffect, useState, useRef } from "react";
import { ImageUploader } from "./ImageUploader";
import { useTimer } from "../Timer/useTimer.ts";
import { Timer } from "../Timer/Timer.tsx";
import { TaskList } from "../TaskList/TaskList.tsx"
import { Credits } from "../Credits/Credits.tsx";
import { Settings } from "../Settings/Settings.tsx";
import "./GameMenu.css";
import { FlowMusicButton } from "../FlowMusicButton.tsx";
import type { UseBreakSoundResult } from "../Settings/useBreakSound";

interface GameMenuProps {
  timer: ReturnType<typeof useTimer>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
  hasFolder: boolean;
  isPlaying: boolean;
  currentTrack: string;
  onMusicFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMusic: () => void;
  onSkipMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  alarmVolume: number;
  setAlarmVolume: React.Dispatch<React.SetStateAction<number>>;
  alarmPlayCount: number;
  setAlarmPlayCount: React.Dispatch<React.SetStateAction<number>>;
  autoStartBreak: boolean;
  setAutoStartBreak: React.Dispatch<React.SetStateAction<boolean>>;
  autoStartFocus: boolean;
  setAutoStartFocus: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  compactMode: boolean;
  setCompactMode: React.Dispatch<React.SetStateAction<boolean>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  resetToDefaults: () => void;
  resetCompletedSessions: () => void;
  musicVolume: number;
  setMusicVolume: React.Dispatch<React.SetStateAction<number>>;
  breakSound: UseBreakSoundResult;
}

export function GameMenu({
  timer,
  setInFocusMode,
  setIsGameMenuPage,
  hasFolder,
  isPlaying,
  currentTrack,
  onMusicFileChange,
  onToggleMusic,
  onSkipMusic,
  audioRef,
  alarmVolume,
  setAlarmVolume,
  alarmPlayCount,
  setAlarmPlayCount,
  autoStartBreak,
  setAutoStartBreak,
  autoStartFocus,
  setAutoStartFocus,
  darkMode,
  setDarkMode,
  compactMode,
  setCompactMode,
  isMuted,
  setIsMuted,
  resetToDefaults,
  resetCompletedSessions,
  musicVolume,
  setMusicVolume,
  breakSound,
}: GameMenuProps) {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [showTaskList, setShowTaskList] = useState<boolean>(false);
  const [showCredits, setShowCredits] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showImageUploader, setShowImageUploader] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImageUrl(savedImage);
    }
  }, []);

  if (showTimer) {
    return (
      <Timer
        setShowTimer={setShowTimer}
        setInFocusMode={setInFocusMode}
        timer={timer}
        setIsGameMenuPage={setIsGameMenuPage}
        compactMode={compactMode}
      />
    )
  }

  if (showTaskList) {
    return <TaskList setShowTaskList={setShowTaskList} />
  }

  if (showCredits) {
    return <Credits setShowCredits={setShowCredits} />
  }

  if (showSettings) {
    return (
      <Settings
        setShowSettings={setShowSettings}
        timer={timer}
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
        resetToDefaults={resetToDefaults}
        resetCompletedSessions={resetCompletedSessions}
        breakSound={breakSound}
      />
    )
  }

  if (showImageUploader) {
    return <ImageUploader setShowImageUploader={setShowImageUploader} imageUrl={imageUrl} setImageUrl={setImageUrl} fileInputRef={fileInputRef} />
  }

  const localBackgroundStyle = imageUrl ? {
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  } : {};

  return (
    <div className="game-menu-container" style={localBackgroundStyle}>
      <div className="game-menu-sidebar">
        <div className="game-title">AGE QUOD <br /> AGIS</div>
        <div className="game-title-motivation">Own the hour, or the hour owns you.</div>
        <div className="game-menu-nav">
          <button className="menu-btn" onClick={() => setShowTimer(true)}>ENTER THE ZONE</button>
          <button className="menu-btn" onClick={() => setShowTaskList(true)}>QUEST LOG</button>
          <button className="menu-btn">STATISTICS</button>
          <button className="menu-btn" onClick={() => setShowSettings(true)}>OPTIONS</button>
          <button className="menu-btn" onClick={() => setShowCredits(true)}>CREDITS</button>
          <button className="menu-btn" onClick={() => setShowImageUploader(true)}>CHANGE WALLPAPER</button>
        </div>        
        <div className="FlowMusicButton">
          <FlowMusicButton
            hasFolder={hasFolder}
            isPlaying={isPlaying}
            currentTrack={currentTrack}
            onMusicFileChange={onMusicFileChange}
            onToggleMusic={onToggleMusic}
            onSkipMusic={onSkipMusic}
            audioRef={audioRef}
            isMuted={isMuted}
            musicVolume={musicVolume}
            setMusicVolume={setMusicVolume}
          />
        </div>
      </div>
    </div>
  );
}
