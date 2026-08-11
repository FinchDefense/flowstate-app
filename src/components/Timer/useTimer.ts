import dayjs from 'dayjs';
import { useState, useRef, useEffect, useCallback } from "react";

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

export function useTimer(initialTime: number = 1500, initalBreakTime = 300) {
  const [time, setTime] = useState<number>(initialTime);
  const [breakTime, setBreakTime] = useState<number>(initalBreakTime);
  const [numPomos, setNumPomos] = useState<number>(() => {
    const saved = localStorage.getItem("numPomos");
    return saved ? parseInt(saved, 10) : 1;
  });
  const [numBreaks, setNumBreaks] = useState<number>(0);
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isRunningBreak, setIsRunningBreak] = useState<boolean>(false);
  const [currentMood, setCurrentMood] = useState<"⚡ ENERGETIC" | "◉ CALM" | "✦ CREATIVE" | "◎ FOCUSED">("◉ CALM");
  const [glowColor, setGlowColor] = useState<string>("#00ffff");
  const [glowIntensity, setGlowIntensity] = useState<number>(0.6);
  const [glowBlur, setGlowBlur] = useState<number>(25);
  const [glowSpread, setGlowSpread] = useState<number>(5);

  const workerRef = useRef<Worker | null>(null);
  const endTimeRef = useRef<number | null>(null);

  const moodColors = {
    "⚡ ENERGETIC": ["#ff6b6b", "#ff9f43", "#f0932b", "#ff7979"],
    "◉ CALM": ["#00ffff", "#4d96ff", "#00d2d3", "#7bed9f"],
    "✦ CREATIVE": ["#ff6bd6", "#a66bff", "#ff00ff", "#7b2ffc"],
    "◎ FOCUSED": ["#6bcb77", "#00d4ff", "#7dd3fc", "#fcd34d"],
  };

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
    const newColor = moodColors[currentMood][Math.floor(Math.random() * moodColors[currentMood].length)];
    setGlowColor(newColor);
    setGlowIntensity(0.4 + Math.random() * 0.4);
    setGlowBlur(15 + Math.random() * 25);
    setGlowSpread(3 + Math.random() * 8);
  }, [currentMood]);

  const toggleMood = useCallback(() => {
    const moods = ["⚡ ENERGETIC", "◉ CALM", "✦ CREATIVE", "◎ FOCUSED"];
    const currentIndex = moods.indexOf(currentMood);
    setCurrentMood(moods[(currentIndex + 1) % moods.length] as typeof currentMood);
    getRandomColor();
  }, [currentMood, getRandomColor]);

  const startTimer = useCallback(() => {
    endTimeRef.current = Date.now() + (time * 1000);
    setIsRunning(true);
    workerRef.current?.postMessage("START");
  }, [time]);

  const stopTimer = useCallback (() => {
    endTimeRef.current = null;
    setIsRunning(false);
    workerRef.current?.postMessage("STOP");
  }, []);

  const startBreakTimer = useCallback (() => {
    endTimeRef.current = Date.now() + (breakTime * 1000);
    setIsRunningBreak(true);
    workerRef.current?.postMessage("START");
  }, [breakTime]);

  const stopBreakTimer = useCallback (() => {
    endTimeRef.current = null;
    setIsRunningBreak(false);
    workerRef.current?.postMessage("STOP");
  }, []);

  const handleStartPause = useCallback (() => {
    if (!isOnBreak) {
      if (isRunning) stopTimer();
      else startTimer();
    }
    else {
      if (isRunningBreak) stopBreakTimer();
      else startBreakTimer();
    }
  }, [isOnBreak, isRunning, isRunningBreak, startTimer, stopTimer, startBreakTimer, stopBreakTimer]);

  const handleReset = useCallback (() => {
    if (!workerRef.current) return;
    workerRef.current?.postMessage("STOP");
    endTimeRef.current = null;

    if (!isOnBreak) {
      setIsRunning(false);
      setTime(1500);
    }
    else {
      setIsRunningBreak(false);
      if (numBreaks > 0 && numBreaks % 4 === 0) {
        setBreakTime(900);
      }
      else {
        setBreakTime(300);
      }
    }
  }, [isOnBreak, numBreaks]);

  const skipSession = useCallback (() => {
    if (!workerRef.current) return;
    workerRef.current?.postMessage("STOP");
    endTimeRef.current = null;

    if (!isOnBreak) {
      setIsRunning(false);
      setIsOnBreak(true);
      setIsRunningBreak(false);
      setNumBreaks((prevNumBreaks) => prevNumBreaks + 1);
      setNumPomos((prevNumPomos) => prevNumPomos + 1);
      if (numBreaks > 0 && (numBreaks + 1) % 4 === 0) {
        setBreakTime(900);
      }
      else {
        setBreakTime(300);
      }
    }
    else {
      setIsOnBreak(false);
      setIsRunningBreak(false);
      setIsRunning(false);
      setTime(1500);
    }
    console.log(numBreaks);
  }, [isOnBreak, numBreaks]);

  const presetTime = useCallback ((seconds: number) => {
    if (!workerRef.current) return;

    workerRef.current.postMessage("STOP");
    endTimeRef.current = null;
    setTime(seconds);
    setIsRunning(false);
  }, []);

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
      
      const timeRemaining = Math.max(0, Math.ceil((endTimeRef.current - Date.now()) / 1000));
      if (!isOnBreak) {
        if (timeRemaining <= 0) {
          workerRef.current?.postMessage("STOP");
          setNumPomos((prevNumPomos) => prevNumPomos + 1);
          setNumBreaks((prevNumBreaks) => prevNumBreaks + 1);
          setIsOnBreak(true);
          setIsRunning(false);
          setTime(initalBreakTime);
        }
        else { setTime(timeRemaining); }
      }
      else {
        if (timeRemaining <= 0) {
          workerRef.current?.postMessage("STOP");
          setIsOnBreak(false);
          setIsRunningBreak(false);
          setTime(initialTime);
        }
        else { setBreakTime(timeRemaining); }
      }
    }
  }, [isOnBreak, initialTime, initalBreakTime]);

  useEffect(() => {
    if (numBreaks > 0 && numBreaks % 4 === 0) {
      setBreakTime(900);
    } else {
      setBreakTime(300);
    }
  }, [numBreaks]);

  useEffect(() => {
    localStorage.setItem("numPomos", String(numPomos));
  }, [numPomos])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === " " && e.target === document.body) {
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
    document.title = !isOnBreak ? `FlowState - ${formatTime(time)}` : `Take a Break - ${formatTime(breakTime)}`;
  }, [breakTime, time, formatTime, isOnBreak]);

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
    toggleMood,
    startBreakTimer,
    stopBreakTimer,
    startTimer,
    stopTimer,
  };
}
