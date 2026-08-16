import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { GameMenu } from "./components/GameMenu/GameMenu.tsx";
import { FocusMode } from "./components/Timer/FocusMode.tsx";
import { useTimer } from "./components/Timer/useTimer.ts";
import { set, get } from 'idb-keyval';

import "./App.css";
import "./index.css";

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
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);
  const [isStartingPage, setIsStartingPage] = useState<boolean>(true);
  const [isGameMenuPage, setIsGameMenuPage] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [hasFolder, setHasFolder] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<string>("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const filesRef = useRef<File[]>([]);
  const currentUrlRef = useRef<string>("");

  useEffect(() => {
    async function loadStoredFolder() {
      try {
        const retrievedFolder = await get<File[]>('current-folder');
        if (retrievedFolder && retrievedFolder.length > 0) {
          filesRef.current = retrievedFolder;
          setHasFolder(true);
        }
      } 
      catch (error) {
        console.error("Failed to load folder from IndexedDB:", error);
      }
    }
    loadStoredFolder();
  }, []);

  const revokeCurrentUrl = useCallback(() => {
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = "";
    }
  }, []);

  const playRandomTrack = useCallback(function playRandomTrack() {
    const audio = audioRef.current;
    const files = filesRef.current;

    if (files.length === 0 || !audio) return;

    try {
      const randomIndex = Math.floor(Math.random() * files.length);
      const randomFile = files[randomIndex];
      revokeCurrentUrl();

      currentUrlRef.current = URL.createObjectURL(randomFile);
      audio.src = currentUrlRef.current;
      setCurrentTrack(randomFile.name);

      audio.play().catch((err) => {
        console.error("Playback interrupted or blocked by browser:", err);
      });
      setIsPlaying(true);
    } catch (error) {
      console.error("Playback setup failed, skipping track:", error);
      playRandomTrack();
    }
  }, [revokeCurrentUrl]);

  const handleMusicFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const foundFiles: File[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const nameLower = file.name.toLowerCase();
      if (nameLower.endsWith(".mp3") || nameLower.endsWith(".mp4")) {
        foundFiles.push(file);
      }
    }

    if (foundFiles.length === 0) {
      alert("No mp3 or mp4 files found in this folder!");
      return;
    }

    filesRef.current = foundFiles;
    try {
      await set('current-folder', foundFiles);
      setHasFolder(true);
    } 
    catch (error) {
      console.error("Failed to save folder to IndexedDB:", error);
      alert("Failed to securely store folder index in browser cache storage.");
    }
  };

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (!currentUrlRef.current) {
      playRandomTrack();
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, [isPlaying, playRandomTrack]);

  const skipMusic = useCallback(() => {
    if (!audioRef.current || !currentUrlRef.current) return;

    audioRef.current.pause();
    revokeCurrentUrl();
    playRandomTrack();
  }, [playRandomTrack, revokeCurrentUrl]);

  const timer = useTimer(1500);
  const displayName = useMemo(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  }, []);

  useEffect(() => {
    audioRef.current = new Audio();

    const handleTrackEnd = () => {
      playRandomTrack();
    };

    audioRef.current.addEventListener("ended", handleTrackEnd);

    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("ended", handleTrackEnd);
      revokeCurrentUrl();
    };
  }, [playRandomTrack, revokeCurrentUrl]);

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
      />
    );
  }

  return (
    <div className="app-container">
      <div className="header"></div>
    </div>  
  )
}
  
export default App;
