import { useState, useRef } from "react";
import { ImageUploader } from "./ImageUploader";
import { useTimer } from "../../hooks/useTimer";
import { Timer } from "../Timer/Timer.tsx";
import { TaskList } from "../TaskList/TaskList.tsx";
import { Credits } from "../Credits/Credits.tsx";
import { Settings } from "../Settings/Settings.tsx";
import { Statistics } from "../Statistics/Statistics.tsx";
import { FlowMusicButton } from "../FlowMusicButton.tsx";
import "./GameMenu.css";
import type { UseBreakSoundResult } from "../../hooks/useBreakSound";
import type { Session } from "../../App.tsx";
import type { QuestDifficulty } from "../../hooks/usePlayerStats";

const RANK_BRACKETS = [
  { max: 3, title: "Ashen Exile" },
  { max: 7, title: "Hedge-Stalker" },
  { max: 11, title: "Ironbound" },
  { max: 15, title: "Vileblood" },
  { max: 19, title: "Sellsword" },
  { max: 24, title: "Grave-Warden" },
  { max: 29, title: "Cinder-Born" },
  { max: 34, title: "Blood-Saint" },
  { max: 39, title: "Hollow Knight" },
  { max: 44, title: "Oath-Breaker" },
  { max: 49, title: "Ashen Vanguard" },
  { max: 54, title: "Crucible Knight" },
  { max: 59, title: "Wyrm-Breaker" },
  { max: 64, title: "Eclipse Vanguard" },
  { max: 69, title: "Abyss-Walker" },
  { max: 74, title: "Cinder Lord" },
  { max: 79, title: "Sorrow-Bringer" },
  { max: 84, title: "Crownless King" },
  { max: 89, title: "Apex Wraith" },
  { max: 94, title: "Void-Weaver" },
  { max: 99, title: "The Wild Hunt" },
  { max: Infinity, title: "Primordial Will" },
];

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
  sessionLog: Session[];
  displayName: string;
  setDisplayName: (name: string) => void;
  activeQuestId: string | null;
  setActiveQuestId: React.Dispatch<React.SetStateAction<string | null>>;
  activeQuestTitle: string;
  setActiveQuestTitle: React.Dispatch<React.SetStateAction<string>>;
  setActiveQuestDifficulty: React.Dispatch<
    React.SetStateAction<QuestDifficulty>
  >;
  currentLevel: number;
  currentXp: number;
  xpNeededForNextValue: number;
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
  sessionLog,
  displayName,
  setDisplayName,
  activeQuestId,
  setActiveQuestId,
  activeQuestTitle,
  setActiveQuestTitle,
  setActiveQuestDifficulty,
  currentLevel,
  currentXp,
  xpNeededForNextValue,
}: GameMenuProps) {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [showTaskList, setShowTaskList] = useState<boolean>(false);
  const [showCredits, setShowCredits] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showImageUploader, setShowImageUploader] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);

  const [imageUrl, setImageUrl] = useState<string | null>(() =>
    localStorage.getItem("savedImage"),
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const playerRank = RANK_BRACKETS.find(
    (bracket) => currentLevel <= bracket.max,
  )?.title ?? "Ashen Exile";

  const handleToggleQuest = (
    id: string,
    title: string,
    difficulty: QuestDifficulty,
  ) => {
    if (activeQuestId === id) {
      setActiveQuestId(null);
      setActiveQuestTitle("");
      setActiveQuestDifficulty("guarded");
    } else {
      setActiveQuestId(id);
      setActiveQuestTitle(title);
      setActiveQuestDifficulty(difficulty);
    }
  };

  if (showTimer) {
    return (
      <Timer
        setShowTimer={setShowTimer}
        setInFocusMode={setInFocusMode}
        timer={timer}
        setIsGameMenuPage={setIsGameMenuPage}
        compactMode={compactMode}
        activeQuestTitle={activeQuestTitle}
      />
    );
  }

  if (showTaskList) {
    return (
      <TaskList
        setShowTaskList={setShowTaskList}
        handleToggleQuest={handleToggleQuest}
        activeQuestId={activeQuestId}
      />
    );
  }

  if (showCredits) {
    return <Credits setShowCredits={setShowCredits} />;
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
        hasMusicFolder={hasFolder}
        onMusicFolderChange={onMusicFileChange}
        displayName={displayName}
        setDisplayName={setDisplayName}
      />
    );
  }

  if (showImageUploader) {
    return (
      <ImageUploader
        setShowImageUploader={setShowImageUploader}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        fileInputRef={fileInputRef}
      />
    );
  }

  if (showStatistics) {
    return (
      <Statistics
        sessionLog={sessionLog}
        setShowStatistics={setShowStatistics}
        showStatistics={showStatistics}
      />
    );
  }

  const localBackgroundStyle = imageUrl
    ? {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }
    : {};

  return (
    <div className="game-menu-container" style={localBackgroundStyle}>
      <div className="game-menu-sidebar">
        <div className="game-title">
          AGE QUOD <br /> AGIS
        </div>
        <div className="game-title-motivation">
          Own the hour, or the hour owns you.
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
        <div className="game-menu-nav">
          <div
            className="player-profile"
            aria-label={`Level ${currentLevel}, ${currentXp} of ${xpNeededForNextValue} XP`}
          >
            <div className="player-profile-heading">
              <span className="player-level-label">LEVEL</span>
              <strong className="player-level-number">{currentLevel}</strong>
              <span className="player-rank">{playerRank}</span>
            </div>
            <div
              className="xp-bar"
              role="progressbar"
              aria-valuenow={currentXp}
              aria-valuemin={0}
              aria-valuemax={xpNeededForNextValue}
            >
              <span
                style={{
                  width: `${Math.min(100, (currentXp / xpNeededForNextValue) * 100)}%`,
                }}
              />
            </div>
            <div className="xp-label">
              {currentXp} / {xpNeededForNextValue} XP TO NEXT LEVEL
            </div>
          </div>

          <button className="menu-btn" onClick={() => setShowTimer(true)}>
            ENTER THE ZONE
          </button>
          <button className="menu-btn" onClick={() => setShowTaskList(true)}>
            QUEST LOG
          </button>
          <button className="menu-btn" onClick={() => setShowStatistics(true)}>
            STATISTICS
          </button>
          <button className="menu-btn" onClick={() => setShowSettings(true)}>
            OPTIONS
          </button>
          <button className="menu-btn" onClick={() => setShowCredits(true)}>
            CREDITS
          </button>
          <button
            className="menu-btn"
            onClick={() => setShowImageUploader(true)}
          >
            CHANGE WALLPAPER
          </button>
        </div>
      </div>
    </div>
  );
}
