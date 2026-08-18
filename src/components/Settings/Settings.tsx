import { useState } from "react";
import './Settings.css';

interface SettingsProps {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Settings({ setShowSettings }: SettingsProps) {
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
      <div className="audio-and-alerts"></div>
      <div className="visuals"></div>
    </div>
  );
}
