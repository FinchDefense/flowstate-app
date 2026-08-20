import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { GameMenu } from "./components/GameMenu/GameMenu.tsx";
import { FocusMode } from "./components/Timer/FocusMode.tsx";
import { useTimer } from "./components/Timer/useTimer.ts";
import { useBreakSound } from "./components/Settings/useBreakSound";
import { set, get } from "idb-keyval";

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
  const [alarmVolume, setAlarmVolume] = useState<number>(() => {
    const savedVolume = localStorage.getItem("alarm-volume");
    return savedVolume ? Number(savedVolume) : 7;
  });
  const [alarmPlayCount, setAlarmPlayCount] = useState<number>(() => {
    const savedPlayCount = localStorage.getItem("alarm-play-count");
    return savedPlayCount ? Number(savedPlayCount) : 1;
  });
  const [autoStartBreak, setAutoStartBreak] = useState<boolean>(() => {
    return localStorage.getItem("auto-start-break") === "true";
  });
  const [autoStartFocus, setAutoStartFocus] = useState<boolean>(() => {
    return localStorage.getItem("auto-start-focus") === "true";
  });
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme === null ? true : savedTheme === "true";
  });
  const [compactMode, setCompactMode] = useState<boolean>(() => {
    return localStorage.getItem("compact-mode") === "true";
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filesRef = useRef<File[]>([]);
  const currentUrlRef = useRef<string>("");
  const musicWasPlayingForAlarmRef = useRef(false);

  useEffect(() => {
    async function loadStoredFolder() {
      try {
        const retrievedFolder = await get<File[]>("current-folder");
        if (retrievedFolder && retrievedFolder.length > 0) {
          filesRef.current = retrievedFolder;
          setHasFolder(true);
        }
      } catch (error) {
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

  const playRandomTrack = useCallback(
    function playRandomTrack() {
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
    },
    [revokeCurrentUrl],
  );

  const handleMusicFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
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
      await set("current-folder", foundFiles);
      setHasFolder(true);
    } catch (error) {
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

  const pauseMusicForAlarm = useCallback(() => {
    const audio = audioRef.current;
    musicWasPlayingForAlarmRef.current = Boolean(
      audio && !audio.paused && currentUrlRef.current,
    );

    if (musicWasPlayingForAlarmRef.current && audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const resumeMusicAfterAlarm = useCallback(() => {
    const audio = audioRef.current;
    if (!musicWasPlayingForAlarmRef.current || !audio) return;

    musicWasPlayingForAlarmRef.current = false;
    audio.play().catch((error: Error) => {
      console.error("Music playback was blocked after the alarm:", error);
    });
    setIsPlaying(true);
  }, []);

  const breakSound = useBreakSound(
    alarmVolume,
    alarmPlayCount,
    pauseMusicForAlarm,
    resumeMusicAfterAlarm,
  );
  const timer = useTimer(
    1500,
    300,
    breakSound.playBreakSound,
    autoStartBreak,
    autoStartFocus,
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("phase-focus", "phase-break");
    root.classList.add(timer.isOnBreak ? "phase-break" : "phase-focus");

    return () => {
      root.classList.remove("phase-focus", "phase-break");
    };
  }, [timer.isOnBreak]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-dark", darkMode);
    root.classList.toggle("theme-light", !darkMode);
    root.classList.toggle("compact-mode", compactMode);
  }, [darkMode, compactMode]);

  const displayName = useMemo(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  }, []);

  useEffect(() => {
    localStorage.setItem("alarm-volume", String(alarmVolume));
  }, [alarmVolume]);

  useEffect(() => {
    localStorage.setItem("alarm-play-count", String(alarmPlayCount));
  }, [alarmPlayCount]);

  useEffect(() => {
    localStorage.setItem("auto-start-break", String(autoStartBreak));
  }, [autoStartBreak]);

  useEffect(() => {
    localStorage.setItem("auto-start-focus", String(autoStartFocus));
  }, [autoStartFocus]);

  useEffect(() => {
    localStorage.setItem("dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("compact-mode", String(compactMode));
  }, [compactMode]);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleTrackEnd = () => {
      playRandomTrack();
    };

    audio.addEventListener("ended", handleTrackEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleTrackEnd);
      revokeCurrentUrl();
      audioRef.current = null;
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
        breakSound={breakSound}
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
