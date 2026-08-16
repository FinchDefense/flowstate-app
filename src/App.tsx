import { useState, useEffect } from "react";
import { GameMenu } from "./components/GameMenu/GameMenu.tsx";
import { FocusMode } from "./components/Timer/FocusMode.tsx";
import { useTimer } from "./components/Timer/useTimer.ts";

import "./App.css";
import "./index.css";

export function App() {
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);
  const [isStartingPage, setIsStartingPage] = useState<boolean>(true);
  const [isGameMenuPage, setIsGameMenuPage] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const timer = useTimer(1500);

  useEffect(() => {
    if (!isStartingPage) return;

    const handleKeyDown = () => {
      setIsGameMenuPage(true);
      setIsExiting(true);
      setTimeout(() => {
        setIsStartingPage(false);
      }, 1200);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStartingPage]);

  if (isStartingPage) {
    const flameColors = [
      "#FFE808", // White Hot Center
      "#FFCE00", // Molten Gold
      "#FC6400", // Cadmium Orange
      "#FF5A00", // Fire Orange
      "#FF0000", // Deep Red
      "#801100", // Dark Cherry
      "#1A0F0A", // Cinematic Charcoal
    ];

    const getRandomEmberFormatting = () => {
      const randomEmberColor =
        flameColors[Math.floor(Math.random() * flameColors.length)];
      const randomOpacity = (Math.random() * 0.5 + 0.4).toFixed(2);
      const randomGlow = Math.floor(Math.random() * 10) + 6;

      return {
        "--ember-color": randomEmberColor,
        "--ember-opacity": randomOpacity,
        "--ember-glow": randomGlow,
      } as React.CSSProperties;
    };

    return (
      <div className={`welcome-message ${isExiting ? "exiting" : ""}`}>
        <div className="cinder-container left-edge">
          <div className="cinder c1" style={getRandomEmberFormatting()}></div>
          <div className="cinder c2" style={getRandomEmberFormatting()}></div>
          <div className="cinder c3" style={getRandomEmberFormatting()}></div>
          <div className="cinder c4" style={getRandomEmberFormatting()}></div>
          <div className="cinder c5" style={getRandomEmberFormatting()}></div>
          <div className="cinder c6" style={getRandomEmberFormatting()}></div>
        </div>

        <div className="main-intro">Welcome Back {displayName || "Guest"}</div>

        <div className="cinder-container right-edge">
          <div className="cinder c7" style={getRandomEmberFormatting()}></div>
          <div className="cinder c8" style={getRandomEmberFormatting()}></div>
          <div className="cinder c9" style={getRandomEmberFormatting()}></div>
          <div className="cinder c10" style={getRandomEmberFormatting()}></div>
          <div className="cinder c11" style={getRandomEmberFormatting()}></div>
          <div className="cinder c12" style={getRandomEmberFormatting()}></div>
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
    return <GameMenu timer={timer} setInFocusMode={setInFocusMode} setIsGameMenuPage={setIsGameMenuPage} />;
  }

  return (
    <div className="app-container">
      <div className="header">
      </div>
    </div>  
  )
}
  
export default App;
