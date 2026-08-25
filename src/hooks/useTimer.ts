import { useState, useRef, useEffect, useCallback } from "react";
import type { Session } from "../App";

const workerCode = `
  let timerId = null;
  self.onmessage = function(e) {
    if (e.data === 'START') {
      if (timerId) clearInterval(timerId);
      timerId = setInterval(() => {
        self.postMessage('TICK');
      }, 1000);
    } 
    if (e.data === 'STOP') {
      if (timerId) clearInterval(timerId);
    }
  };
`;

const moodColors = {
  "⚡ ENERGETIC": ["#ff6b6b", "#ff9f43", "#f0932b", "#ff7979"],
  "◉ CALM": ["#00ffff", "#4d96ff", "#00d2d3", "#7bed9f"],
  "✦ CREATIVE": ["#ff6bd6", "#a66bff", "#ff00ff", "#7b2ffc"],
  "◎ FOCUSED": ["#6bcb77", "#00d4ff", "#7dd3fc", "#fcd34d"],
};

export function useTimer(
  initialTime: number = 1500,
  initialBreakTime = 300,
  onSessionComplete: (newSession: Session, activeQuestDifficulty: "trivial" | "guarded" | "perilous") => void = () => {},
  onFocusComplete?: () => void,
  autoStartBreak = false,
  autoStartFocus = false,
  activeQuestDifficulty: "trivial" | "guarded" | "perilous" = "guarded",
) {
  const savedFocusDuration = localStorage.getItem("focus-duration");
  const savedShortBreakDuration = localStorage.getItem("short-break-duration");
  const savedLongBreakDuration = localStorage.getItem("long-break-duration");
  const savedBreakInterval = localStorage.getItem("long-break-interval");
  const focusDurationDefault = savedFocusDuration
    ? Number(savedFocusDuration)
    : initialTime;
  const shortBreakDurationDefault = savedShortBreakDuration
    ? Number(savedShortBreakDuration)
    : initialBreakTime;
  const longBreakDurationDefault = savedLongBreakDuration
    ? Number(savedLongBreakDuration)
    : 900;
  const breakIntervalDefault = savedBreakInterval
    ? Number(savedBreakInterval)
    : 4;

  const [focusDuration, setFocusDuration] =
    useState<number>(focusDurationDefault);
  const [shortBreakDuration, setShortBreakDuration] = useState<number>(
    shortBreakDurationDefault,
  );
  const [longBreakDuration, setLongBreakDuration] = useState<number>(
    longBreakDurationDefault,
  );
  const [breakInterval, setBreakInterval] =
    useState<number>(breakIntervalDefault);

  const [time, setTime] = useState<number>(() => {
    const savedTime = localStorage.getItem("timer-time");
    return savedTime ? Number(savedTime) : focusDurationDefault;
  });

  const [breakTime, setBreakTime] = useState<number>(() => {
    const savedBreak = localStorage.getItem("timer-break");
    return savedBreak ? Number(savedBreak) : shortBreakDurationDefault;
  });

  const [numPomos, setNumPomos] = useState<number>(() => {
    const saved = localStorage.getItem("numPomos");
    return saved ? parseInt(saved, 10) : 1;
  });
  const [numBreaks, setNumBreaks] = useState<number>(0);
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isRunningBreak, setIsRunningBreak] = useState<boolean>(false);
  const [currentMood, setCurrentMood] = useState<
    "⚡ ENERGETIC" | "◉ CALM" | "✦ CREATIVE" | "◎ FOCUSED"
  >("◉ CALM");
  const [glowColor, setGlowColor] = useState<string>("#00ffff");
  const [glowIntensity, setGlowIntensity] = useState<number>(0.6);
  const [glowBlur, setGlowBlur] = useState<number>(25);
  const [glowSpread, setGlowSpread] = useState<number>(5);

  const workerRef = useRef<Worker | null>(null);
  const endTimeRef = useRef<number | null>(null);
  const stateRef = useRef({
    isOnBreak,
    focusDuration,
    shortBreakDuration,
    longBreakDuration,
    breakInterval,
    numBreaks,
    autoStartBreak,
    autoStartFocus,
  });

  const onFocusCompleteRef = useRef(onFocusComplete);
  const onSessionCompleteRef = useRef(onSessionComplete);
  const activeQuestDifficultyRef = useRef(activeQuestDifficulty);

  useEffect(() => {
    stateRef.current = {
      isOnBreak,
      focusDuration,
      shortBreakDuration,
      longBreakDuration,
      breakInterval,
      numBreaks,
      autoStartBreak,
      autoStartFocus,
    };
  }, [
    isOnBreak,
    focusDuration,
    shortBreakDuration,
    longBreakDuration,
    breakInterval,
    numBreaks,
    autoStartBreak,
    autoStartFocus,
  ]);

  useEffect(() => {
    onSessionCompleteRef.current = onSessionComplete;
  }, [onSessionComplete])

  useEffect(() => {
    onFocusCompleteRef.current = onFocusComplete;
  }, [onFocusComplete]);

  useEffect(() => {
    activeQuestDifficultyRef.current = activeQuestDifficulty;
  }, [activeQuestDifficulty]);

  const formatTime = useCallback((totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, []);

  const getOpacityHex = useCallback((intensity: number) => {
    const opacity = Math.round(intensity * 255);
    return opacity.toString(16).padStart(2, "0").toUpperCase();
  }, []);

  const getRandomColor = useCallback(() => {
    const newColor =
      moodColors[currentMood][
        Math.floor(Math.random() * moodColors[currentMood].length)
      ];
    setGlowColor(newColor);
    setGlowIntensity(0.4 + Math.random() * 0.4);
    setGlowBlur(15 + Math.random() * 25);
    setGlowSpread(3 + Math.random() * 8);
  }, [currentMood]);

  const toggleMood = useCallback(() => {
    const moods = ["⚡ ENERGETIC", "◉ CALM", "✦ CREATIVE", "◎ FOCUSED"];
    const currentIndex = moods.indexOf(currentMood);
    setCurrentMood(
      moods[(currentIndex + 1) % moods.length] as typeof currentMood,
    );
    getRandomColor();
  }, [currentMood, getRandomColor]);

  const startTimer = useCallback(() => {
    endTimeRef.current = Date.now() + time * 1000;
    setIsRunning(true);
    workerRef.current?.postMessage("START");
  }, [time]);

  const stopTimer = useCallback(() => {
    endTimeRef.current = null;
    setIsRunning(false);
    workerRef.current?.postMessage("STOP");
  }, []);

  const startBreakTimer = useCallback(() => {
    endTimeRef.current = Date.now() + breakTime * 1000;
    setIsRunningBreak(true);
    workerRef.current?.postMessage("START");
  }, [breakTime]);

  const stopBreakTimer = useCallback(() => {
    endTimeRef.current = null;
    setIsRunningBreak(false);
    workerRef.current?.postMessage("STOP");
  }, []);

  const handleStartPause = useCallback(() => {
    if (!isOnBreak) {
      if (isRunning) stopTimer();
      else startTimer();
    } else {
      if (isRunningBreak) stopBreakTimer();
      else startBreakTimer();
    }
  }, [
    isOnBreak,
    isRunning,
    isRunningBreak,
    startTimer,
    stopTimer,
    startBreakTimer,
    stopBreakTimer,
  ]);

  const handleReset = useCallback(() => {
    if (!workerRef.current) return;
    workerRef.current?.postMessage("STOP");
    endTimeRef.current = null;

    if (!isOnBreak) {
      setIsRunning(false);
      setTime(focusDuration);
    } else {
      setIsRunningBreak(false);
      if (numBreaks > 0 && numBreaks % breakInterval === 0) {
        setBreakTime(longBreakDuration);
      } else {
        setBreakTime(shortBreakDuration);
      }
    }
  }, [
    breakInterval,
    focusDuration,
    isOnBreak,
    longBreakDuration,
    numBreaks,
    shortBreakDuration,
  ]);

  const skipSession = useCallback(() => {
    if (!workerRef.current) return;
    workerRef.current?.postMessage("STOP");
    endTimeRef.current = null;

    if (!isOnBreak) {
      setIsRunning(false);
      setIsOnBreak(true);
      setIsRunningBreak(false);
      setNumBreaks((prevNumBreaks) => prevNumBreaks + 1);
      setNumPomos((prevNumPomos) => prevNumPomos + 1);
      if (numBreaks > 0 && (numBreaks + 1) % breakInterval === 0) {
        setBreakTime(longBreakDuration);
      } else {
        setBreakTime(shortBreakDuration);
      }
    } else {
      setIsOnBreak(false);
      setIsRunningBreak(false);
      setIsRunning(false);
      setTime(focusDuration);
    }
  }, [
    breakInterval,
    focusDuration,
    isOnBreak,
    longBreakDuration,
    numBreaks,
    shortBreakDuration,
  ]);

  const presetTime = useCallback((seconds: number) => {
    if (!workerRef.current) return;

    workerRef.current.postMessage("STOP");
    endTimeRef.current = null;
    setTime(seconds);
    setIsRunning(false);
  }, []);

  const updateFocusDuration = useCallback(
    (seconds: number) => {
      const nextDuration = Math.max(1, Math.floor(seconds));
      setFocusDuration(nextDuration);
      localStorage.setItem("focus-duration", String(nextDuration));
      if (!isOnBreak && !isRunning) setTime(nextDuration);
    },
    [isOnBreak, isRunning],
  );

  const updateShortBreakDuration = useCallback(
    (seconds: number) => {
      const nextDuration = Math.max(1, Math.floor(seconds));
      setShortBreakDuration(nextDuration);
      localStorage.setItem("short-break-duration", String(nextDuration));
      if (isOnBreak && !isRunningBreak) setBreakTime(nextDuration);
    },
    [isOnBreak, isRunningBreak],
  );

  const updateLongBreakDuration = useCallback((seconds: number) => {
    const nextDuration = Math.max(1, Math.floor(seconds));
    setLongBreakDuration(nextDuration);
    localStorage.setItem("long-break-duration", String(nextDuration));
  }, []);

  const updateBreakInterval = useCallback((interval: number) => {
    const nextInterval = Math.max(1, Math.floor(interval));
    setBreakInterval(nextInterval);
    localStorage.setItem("long-break-interval", String(nextInterval));
  }, []);

  const resetToDefaults = useCallback(() => {
    workerRef.current?.postMessage("STOP");
    endTimeRef.current = null;
    localStorage.removeItem("timer-time");
    localStorage.removeItem("timer-break");
    localStorage.removeItem("timeRemaining");
    setTime(initialTime);
    setBreakTime(initialBreakTime);
    setFocusDuration(initialTime);
    setShortBreakDuration(initialBreakTime);
    setLongBreakDuration(900);
    setBreakInterval(4);
    localStorage.removeItem("focus-duration");
    localStorage.removeItem("short-break-duration");
    localStorage.removeItem("long-break-duration");
    localStorage.removeItem("long-break-interval");
    setNumBreaks(0);
    setIsOnBreak(false);
    setIsRunning(false);
    setIsRunningBreak(false);
  }, [initialBreakTime, initialTime]);

  const resetCompletedSessions = useCallback(() => {
    setNumPomos(0);
    localStorage.removeItem("numPomos");
  }, []);

  useEffect(() => {
    localStorage.setItem("timer-time", time.toString());
  }, [time]);

  useEffect(() => {
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));
    workerRef.current = worker;
    return () => {
      worker.postMessage("STOP");
      worker.terminate();
    };
  }, []);

  useEffect(() => {
    if (!workerRef.current) return;

    workerRef.current.onmessage = (e: MessageEvent<string>) => {
      if (e.data !== "TICK" || !endTimeRef.current) return;

      const {
        isOnBreak: activeBreak,
        focusDuration: currentFocusDuration,
        shortBreakDuration: currentShortBreakDuration,
        longBreakDuration: currentLongBreakDuration,
        breakInterval: currentBreakInterval,
        numBreaks: completedBreaks,
        autoStartBreak: shouldAutoStartBreak,
        autoStartFocus: shouldAutoStartFocus,
      } = stateRef.current;
      const timeRemaining = Math.max(
        0,
        Math.ceil((endTimeRef.current - Date.now()) / 1000),
      );
      if (!activeBreak) {
        if (timeRemaining <= 0) {
          workerRef.current?.postMessage("STOP");

          onSessionCompleteRef.current?.({
            id: crypto.randomUUID(),
            type: "focus",
            duration: currentFocusDuration,
            timestamp: Date.now(),
          }, activeQuestDifficultyRef.current);

          onFocusCompleteRef.current?.();
          setNumPomos((prevNumPomos) => prevNumPomos + 1);
          setNumBreaks((prevNumBreaks) => prevNumBreaks + 1);
          setIsOnBreak(true);
          setIsRunning(false);
          const nextBreakNumber = completedBreaks + 1;
          const nextBreakDuration =
            nextBreakNumber % currentBreakInterval === 0
              ? currentLongBreakDuration
              : currentShortBreakDuration;
          setTime(nextBreakDuration);
          setBreakTime(nextBreakDuration);
          if (shouldAutoStartBreak) {
            endTimeRef.current = Date.now() + nextBreakDuration * 1000;
            setIsRunningBreak(true);
            workerRef.current?.postMessage("START");
          } else {
            endTimeRef.current = null;
            setIsRunningBreak(false);
          }
        } else {
          localStorage.setItem("timeRemaining", timeRemaining.toString());
          setTime(timeRemaining);
        }
      } else {
        if (timeRemaining <= 0) {
          workerRef.current?.postMessage("STOP");

          const isLongBreak = completedBreaks % currentBreakInterval === 0;
          onSessionCompleteRef.current?.({
            id: crypto.randomUUID(),
            type: isLongBreak ? "longBreak" : "shortBreak",
            duration: isLongBreak
              ? currentLongBreakDuration
              : currentShortBreakDuration,
            timestamp: Date.now(),
          }, activeQuestDifficultyRef.current);

          setIsOnBreak(false);
          setIsRunningBreak(false);
          setTime(currentFocusDuration);
          if (shouldAutoStartFocus) {
            endTimeRef.current = Date.now() + currentFocusDuration * 1000;
            setIsRunning(true);
            workerRef.current?.postMessage("START");
          } else {
            endTimeRef.current = null;
            setIsRunning(false);
          }
        } else {
          localStorage.setItem("timeRemaining", timeRemaining.toString());
          setTime(timeRemaining);
        }
        setBreakTime(timeRemaining);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("numPomos", String(numPomos));
  }, [numPomos]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (isTypingTarget) {
        return;
      }

      if (e.key === " ") {
        e.preventDefault();
        handleStartPause();
      }
      if ((e.key === "r" || e.key === "R") && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        handleReset();
      }
      if ((e.key === "s" || e.key === "S") && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        skipSession();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleStartPause, handleReset, skipSession]);

  useEffect(() => {
    const mode = isOnBreak ? "Break" : "Focus";
    const remaining = isOnBreak ? breakTime : time;
    const isRunningCurrentTimer = isOnBreak ? isRunningBreak : isRunning;
    const status = isRunningCurrentTimer ? "Running" : "Paused";
    document.title = `${mode} ${formatTime(remaining)} | ${status}`;
  }, [breakTime, time, formatTime, isOnBreak, isRunning, isRunningBreak]);

  return {
    time,
    isRunning,
    glowColor,
    glowIntensity,
    glowBlur,
    glowSpread,
    currentMood,
    isOnBreak,
    breakTime,
    isRunningBreak,
    numBreaks,
    numPomos,
    formatTime,
    getOpacityHex,
    handleStartPause,
    skipSession,
    handleReset,
    presetTime,
    resetToDefaults,
    resetCompletedSessions,
    focusDuration,
    shortBreakDuration,
    longBreakDuration,
    breakInterval,
    updateFocusDuration,
    updateShortBreakDuration,
    updateLongBreakDuration,
    updateBreakInterval,
    toggleMood,
    startBreakTimer,
    stopBreakTimer,
    startTimer,
    stopTimer,
  };
}
