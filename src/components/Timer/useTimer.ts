import { useState, useRef, useEffect, useCallback } from "react";

export function useTimer(initialTime: number = 1500) {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [numPomos, setNumPomos] = useState<number>(1);
  const [glowColor, setGlowColor] = useState<string>("#00ffff");
  const [glowIntensity, setGlowIntensity] = useState<number>(0.6);
  const [glowBlur, setGlowBlur] = useState<number>(25);
  const [glowSpread, setGlowSpread] = useState<number>(5);
  const [currentMood, setCurrentMood] = useState<"⚡ ENERGETIC" | "◉ CALM" | "✦ CREATIVE" | "◎ FOCUSED">("◉ CALM");
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasCompletedRef = useRef<boolean>(false);

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

  const startTimer = useCallback(() => {
    if (timerRef.current !== null) return;
    hasCompletedRef.current = false;
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            setNumPomos((prev) => prev + 1);
          }
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
  }, []);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      getRandomColor();
      stopTimer();
    } else {
      if (time <= 0) setTime(1500);
      if (time > 0) getRandomColor();
      startTimer();
    }
  }, [isRunning, time, getRandomColor, stopTimer, startTimer]);

  const handleReset = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    hasCompletedRef.current = false;
    setGlowColor("#00ffff");
    setIsRunning(false);
    setTime(1500);
  }, []);

  const addFiveMinutes = useCallback(() => setTime((prev) => prev + 300), []);
  const minusFiveMinutes = useCallback(() => setTime((prev) => (prev >= 300 ? prev - 300 : 0)), []);

  const presetTime = useCallback((seconds: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    hasCompletedRef.current = false;
    setIsRunning(false);
    setTime(seconds);
    getRandomColor();
  }, [getRandomColor]);

  const toggleMood = useCallback(() => {
    const moods = ["⚡ ENERGETIC", "◉ CALM", "✦ CREATIVE", "◎ FOCUSED"];
    const currentIndex = moods.indexOf(currentMood);
    setCurrentMood(moods[(currentIndex + 1) % moods.length] as typeof currentMood);
    getRandomColor();
  }, [currentMood, getRandomColor]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        handleStartPause();
      }
      
      if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        handleReset();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleStartPause, handleReset]);

  useEffect(() => {
    document.title = isRunning
      ? `⏱️ ${formatTime(time)} - FlowState`
      : "FlowState - Focus Timer";
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
    formatTime,
    getOpacityHex,
    handleStartPause,
    handleReset,
    addFiveMinutes,
    minusFiveMinutes,
    presetTime,
    toggleMood,
  };
}