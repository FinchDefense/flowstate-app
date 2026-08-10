import { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { useTimer } from "../Timer/useTimer.ts";
import { Timer } from "../Timer/Timer.tsx";
import "./GameMenu.css";

interface GameMenuProps {
  timer: ReturnType<typeof useTimer>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GameMenu({ timer, setInFocusMode, setIsGameMenuPage }: GameMenuProps) {
  const [showTimer, setShowTimer] = useState<boolean>(false);

  if (showTimer) {
    return (<Timer setShowTimer={setShowTimer} setInFocusMode={setInFocusMode} timer={timer} setIsGameMenuPage={setIsGameMenuPage}/>)
  }

  return (
    <div className="game-menu-container">
      <div className="game-menu-sidebar">
        <div className="game-title">AGE QUOD <br /> AGIS</div>
        <div className="game-title-motivation">Own the hour, or the hour owns you.</div>
        <div className="game-menu-nav">
          <button className="menu-btn" onClick={() => setShowTimer(true)}>ENTER THE ZONE</button>
          <button className="menu-btn">SESSIONS</button>
          <button className="menu-btn">STATISTICS</button>
          <button className="menu-btn">OPTIONS</button>
          <button className="menu-btn">CREDITS</button>
        </div>        
        <div className="menu-footer-tool">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
