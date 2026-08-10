import dayjs from 'dayjs';
import { useState, useRef, useEffect, useCallback } from "react";

const workerCode = `
  let timerId = null;
  self.onmessage = function(e) {
    if (e.data === 'START') {
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
  const [numPomos, setNumPomos] = useState<number>(1);
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
  const timerRef = useRef<number>(null);
  const breakTimerRef = useRef<number>(null);
  const timerHasCompletedRef = useRef<boolean>(false);
  const breakTimerHasCompletedRef = useRef<boolean>(false);

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
    if (numBreaks > 0 && numBreaks % 4 === 0) {
      setBreakTime(900);
    } else {
      setBreakTime(300);
    }
  }, [numBreaks]);

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
    document.title = isRunning ? `${formatTime(time)} - FlowState` : "FlowState - Focus Timer";
  }, [isRunning, time, formatTime]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return {
    time,
    isRunning,
    numPomos,
    glowColor,
    glowIntensity,
    glowBlur,
    glowSpread,
    currentMood,
    isOnBreak,
    breakTime,
    isRunningBreak,
    numBreaks,
    formatTime,
    getOpacityHex,
    handleStartPause,
    handleReset,
    addFiveMinutes,
    minusFiveMinutes,
    presetTime,
    toggleMood,
    startBreakTimer,
    stopBreakTimer,
    startTimer,
    stopTimer,
    skipSession,
  };
}
