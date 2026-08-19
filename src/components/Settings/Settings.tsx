import { useState } from "react";
import "./Settings.css";
import "../../App";

interface SettingsProps {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  onMusicFileChange: (
    event: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
}

export function Settings({
  setShowSettings,
  onMusicFileChange,
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
        <div className="alarm-sound">
          <span>Alarm Sound</span>
          <label htmlFor="music-upload" className="upload-btn">
            ⚔️ CHOOSE MUSIC FOLDER
            <input
              type="file"
              id="music-upload"
              accept="audio/*" 
              onChange={onMusicFileChange}
              style={{
                display: "none",
              }} 
            />
          </label>
        </div>
      </div>
      <div className="visuals"></div>
    </div>
  );
}
