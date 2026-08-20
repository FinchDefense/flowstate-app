import { useState } from "react";
import BreakAudioView from "./BreakAudioView";
import type { UseBreakSoundResult } from "./useBreakSound";
import "./Settings.css";
import "../../App";

interface SettingsProps {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  alarmVolume: number;
  setAlarmVolume: React.Dispatch<React.SetStateAction<number>>;
  alarmPlayCount: number;
  setAlarmPlayCount: React.Dispatch<React.SetStateAction<number>>;
  autoStartBreak: boolean;
  setAutoStartBreak: React.Dispatch<React.SetStateAction<boolean>>;
  autoStartFocus: boolean;
  setAutoStartFocus: React.Dispatch<React.SetStateAction<boolean>>;
  breakSound: UseBreakSoundResult;
}

export function Settings({
  setShowSettings,
  alarmVolume,
  setAlarmVolume,
  alarmPlayCount,
  setAlarmPlayCount,
  autoStartBreak,
  setAutoStartBreak,
  autoStartFocus,
  setAutoStartFocus,
  breakSound,
}: SettingsProps) {
  const [inputName, setInputName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  const [displayName, setDisplayName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleDisplayChange = () => {
    if (inputName.trim() === "") {
      alert("Please enter a name");
      return;
    }

    setDisplayName(inputName);
    localStorage.setItem("flowstate_userName", inputName);
    setInputName("");
  };

  return (
    <div className="settings-container">
      <button className="back-button" onClick={() => setShowSettings(false)}>
        ← Back to Menu
      </button>
      <div className="settings-title">SETTINGS</div>
      <div className="timer-config">
        <div className="row-wrapper">
          <span>Focus Length: </span>
          <input className="focus-length-input" />
        </div>
        <div className="row-wrapper">
          <span>Short Break: </span>
          <input className="short-break-length-input" />
        </div>
        <div className="row-wrapper">
          <span>Long Break: </span>
          <input className="long-break-length-input" />
        </div>
        <div className="row-wrapper">
          <span>Long Break interval: </span>
          <input className="long-break-interval-input" />
        </div>
      </div>
      <div className="audio-and-alerts">
        <BreakAudioView
          {...breakSound}
        />
        <div className="alarm-volume">
          <span>Alarm Volume</span>
          <input
            type="range"
            className="volume-slider"
            min={1}
            max={10}
            value={alarmVolume}
            onChange={(e) => setAlarmVolume(Number(e.target.value))}
          />
        </div>
        <div className="alarm-repeat">
          <label htmlFor="alarm-play-count">Alarm Plays</label>
          <input
            id="alarm-play-count"
            type="number"
            min={1}
            max={10}
            step={1}
            value={alarmPlayCount}
            onChange={(e) => {
              const nextCount = Number(e.target.value);
              if (Number.isFinite(nextCount)) {
                setAlarmPlayCount(Math.min(10, Math.max(1, nextCount)));
              }
            }}
          />
        </div>
        <label className="settings-toggle">
          <input
            type="checkbox"
            checked={autoStartBreak}
            onChange={(e) => setAutoStartBreak(e.target.checked)}
          />
          <span>Auto-start breaks</span>
        </label>
        <label className="settings-toggle">
          <input
            type="checkbox"
            checked={autoStartFocus}
            onChange={(e) => setAutoStartFocus(e.target.checked)}
          />
          <span>Auto-start focus</span>
        </label>
      </div>
      <div className="visuals"></div>
    </div>
  );
}
