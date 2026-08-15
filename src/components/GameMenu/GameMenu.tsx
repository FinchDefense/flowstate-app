import { useState } from "react";
import { ImageUploader } from "./ImageUploader";
import { useTimer } from "../Timer/useTimer.ts";
import { Timer } from "../Timer/Timer.tsx";
import { TaskList } from "../TaskList/TaskList.tsx"
import { Credits } from "../Credits/Credits.tsx";
import "./GameMenu.css";

interface GameMenuProps {
  timer: ReturnType<typeof useTimer>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GameMenu({ timer, setInFocusMode, setIsGameMenuPage }: GameMenuProps) {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [showTaskList, setShowTaskList] = useState<boolean>(false);
  const [showCredits, setShowCredits] = useState<boolean>(false);

  if (showTimer) {
    return (<Timer setShowTimer={setShowTimer} setInFocusMode={setInFocusMode} timer={timer} setIsGameMenuPage={setIsGameMenuPage} />)
  }

  if (showTaskList) {
    return <TaskList setShowTaskList={setShowTaskList} />
  }

  if (showCredits) {
    return <Credits setShowCredits={setShowCredits} />
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
          <button className="menu-btn">OPTIONS</button>
          <button className="menu-btn" onClick={() => setShowCredits(true)}>CREDITS</button>
        </div>        
        <div className="menu-footer-tool">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
