import { useEffect, useState, useRef } from "react";
import { ImageUploader } from "./ImageUploader";
import { useTimer } from "../Timer/useTimer.ts";
import { Timer } from "../Timer/Timer.tsx";
import { TaskList } from "../TaskList/TaskList.tsx"
import { Credits } from "../Credits/Credits.tsx";
import { Settings } from "../Settings/Settings.tsx";
import "./GameMenu.css";
import { FlowMusicButton } from "../FlowMusicButton.tsx";

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

  useEffect(() => {
    if (imageUrl) {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.background = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.background = "";
    };
  }, [imageUrl]);


  if (showTimer) {
    return (<Timer setShowTimer={setShowTimer} setInFocusMode={setInFocusMode} timer={timer} setIsGameMenuPage={setIsGameMenuPage} />)
  }

  if (showTaskList) {
    return <TaskList setShowTaskList={setShowTaskList} />
  }

  if (showCredits) {
    return <Credits setShowCredits={setShowCredits} />
  }

  if (showSettings) {
    return <Settings setShowSettings={setShowSettings} />
  }

  if (showImageUploader) {
    return <ImageUploader setShowImageUploader={setShowImageUploader} imageUrl={imageUrl} setImageUrl={setImageUrl} fileInputRef={fileInputRef} />
  }

  return (
    <div className="game-menu-container">
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
          />
        </div>
      </div>
    </div>
  );
}
