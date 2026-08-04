import { useState, useRef, useEffect } from "react";
import "./Timer.css";

export function Timer() {
  const [time, setTime] = useState<number>(1500);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [glowColor, setGlowColor] = useState<string>('#00ffff');
  const[glowIntensity, setGlowIntensity] = useState<number>(0.6);
  const[glowBlur, setGlowBlur] = useState<number>(25);
  const[glowSpread, setGlowSpread] = useState<number>(5);
  const [currentMood, setCurrentMood] = useState<'energetic' | 'calm' | 'creative' | 'focused'>('calm');

  const moodColors = {
    energetic: ['#ff6b6b', '#ff9f43', '#f0932b', '#ff7979'],
    calm: ['#00ffff', '#4d96ff', '#00d2d3', '#7bed9f'],
    creative: ['#ff6bd6', '#a66bff', '#ff00ff', '#7b2ffc'],
    focused: ['#6bcb77', '#00d4ff', '#7dd3fc', '#fcd34d']
  };

  useEffect(() => {
    document.title = isRunning ? `⏱️ ${formatTime(time)} - FlowState` : "FlowState - Focus Timer"
  }, [isRunning, time]);

  function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60); 
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
}

  const getRandomColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    const newIntensity = 0.4 + Math.random() * 0.4; // 0.3-0.8
    const newBlur = 15 + Math.random() * 25; // 15px - 40px
    const newSpread = 3 + Math.random() * 8; // 3px - 11px
    setGlowColor(newColor);
    setGlowIntensity(newIntensity);
    setGlowBlur(newBlur);
    setGlowSpread(newSpread);
  };

  const toggleMood = () => {
    const moods = ['energetic', 'calm', 'creative', 'focused'];
    const currentIndex = moods.indexOf(currentMood);
    const nextIndex = (currentIndex + 1) % moods.length;
    setCurrentMood(moods[nextIndex] as typeof currentMood);
  }

  const startTimer = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          if (timerRef.current) { // Check if an active timer ID exists
            clearInterval(timerRef.current); // If an active timer ID does exist, clear it
            timerRef.current = null;
          }
          setIsRunning(false); // Clock has run out, set back to "start"
          return 0; 
        }
        return prevTime-1; // Decrement by 1 every second like an actual timer
      });
    }, 1000)
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null; // Reset the ref
    }
    setIsRunning(false);
  }

  const handleStartPause = () => {
    if (isRunning) {
      getRandomColor();
      stopTimer();
    }
    else {
      if (time <= 0) { // reset to standard 25:00
        setTime(1500);
      }
      if (time > 0) {
        getRandomColor();
      }
      setIsRunning(true);
      startTimer();
    }
  }

  const handleReset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setGlowColor('#00ffff');
    setIsRunning(false);
    setTime(1500);
  }

  const addFiveMinutes = () => {
    setTime((prevTime) => prevTime + 300);
  }

  const minusFiveMinutes = () => {
    if (time >= 300) {
      setTime((prevTime) => prevTime - 300);
    }
    else { setTime(0) }
  }

  const presetTime = (seconds: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRunning(false);
    setTime(seconds);
    getRandomColor();
  }

  useEffect(() => { // Clean up on mount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const getOpacityHex = (glowIntensity: number) => {
    const opacity = Math.round(glowIntensity * 255);
    return opacity.toString(16).padStart(2, '0').toUpperCase();
  };

  const timerDisplayStyle = {
    borderColor: glowColor,
    boxShadow: `0 0 ${glowBlur}px ${glowSpread}px ${glowColor}${getOpacityHex(glowIntensity)}` 
  };

  return (
    <div className="timer-container">
      <div className="timer-display" style={timerDisplayStyle}>
        <div className="timer-display-time">{formatTime(time)}</div>
        <div className="">Pomodoros</div>
      </div>
      <div className="timer-buttons">
        <div className="timer-buttons-main-controls">
          <button onClick={handleStartPause} className="start-pause-button">
            {isRunning ? "⏸️ Pause" : time === 0 ? "🔄 Restart" : "▶️ Start"}
          </button>
          <button onClick={handleReset} className="reset-button">⟳ Reset</button>
          <button onClick={toggleMood}>{currentMood}</button> 
        </div>
        <div className="timer-buttons-secondary-controls">
          <button>⏭ Skip</button>
          <button onClick={addFiveMinutes}>➕ 5</button>
          <button onClick={minusFiveMinutes}>➖ 5 </button>
        </div>
      </div>
      <div className="timer-buttons-time-options">
        <button onClick={() => presetTime(300)}>5m</button>
        <button onClick={() => presetTime(900)}>15m</button>
        <button onClick={() => presetTime(1500)}>25m</button>
        <button onClick={() => presetTime(1800)}>30m</button>
        <button onClick={() => presetTime(2700)}>45m</button>
        <button onClick={() => presetTime(3600)}>60m</button>
      </div>
    </div>
  );
}
