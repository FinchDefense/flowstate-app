import BreakAudioView from "./BreakAudioView";
import type { UseBreakSoundResult } from "../../hooks/useBreakSound";
import type { useTimer } from "../../hooks/useTimer";
import { Profile } from "./Profile";
import "./Settings.css";
import "../../App";
import { useState } from "react";

interface SettingsProps {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  timer: ReturnType<typeof useTimer>;
  alarmVolume: number;
  setAlarmVolume: React.Dispatch<React.SetStateAction<number>>;
  alarmPlayCount: number;
  setAlarmPlayCount: React.Dispatch<React.SetStateAction<number>>;
  autoStartBreak: boolean;
  setAutoStartBreak: React.Dispatch<React.SetStateAction<boolean>>;
  autoStartFocus: boolean;
  setAutoStartFocus: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  compactMode: boolean;
  setCompactMode: React.Dispatch<React.SetStateAction<boolean>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  resetToDefaults: () => void;
  resetCompletedSessions: () => void;
  breakSound: UseBreakSoundResult;
  displayName: string;
  setDisplayName: (name: string) => void;
}

export function Settings({
  setShowSettings,
  timer,
  alarmVolume,
  setAlarmVolume,
  alarmPlayCount,
  setAlarmPlayCount,
  autoStartBreak,
  setAutoStartBreak,
  autoStartFocus,
  setAutoStartFocus,
  darkMode,
  setDarkMode,
  compactMode,
  setCompactMode,
  isMuted,
  setIsMuted,
  resetToDefaults,
  resetCompletedSessions,
  breakSound,
  displayName,
  setDisplayName,
}: SettingsProps) {
  const [inputName, setInputName] = useState(displayName);

  return (
    <div className="settings-container">
      <button className="back-button settings" onClick={() => setShowSettings(false)}>
        ← Back to Menu
      </button>
      <div className="settings-title">SETTINGS</div>
      <section className="settings-section profile-section">
        <h2>Hero Profile</h2>
        <p className="profile-introduction">Choose the name that will greet you at the start of each session.</p>
        <Profile
          inputName={inputName}
          handleInputChange={(event) => setInputName(event.target.value)}
          handleDisplayChange={() => setDisplayName(inputName)}
        />
      </section>
      <section className="settings-section timer-config">
        <h2>Timer Durations</h2>
        <div className="row-wrapper"><label htmlFor="focus-length-input">Focus Length</label><input id="focus-length-input" className="focus-length-input" type="number" min={1} value={Math.floor(timer.focusDuration / 60)} onChange={(e) => timer.updateFocusDuration(Number(e.target.value) * 60)} /></div>
        <div className="row-wrapper"><label htmlFor="short-break-length-input">Short Break</label><input id="short-break-length-input" className="short-break-length-input" type="number" min={1} value={Math.floor(timer.shortBreakDuration / 60)} onChange={(e) => timer.updateShortBreakDuration(Number(e.target.value) * 60)} /></div>
        <div className="row-wrapper"><label htmlFor="long-break-length-input">Long Break</label><input id="long-break-length-input" className="long-break-length-input" type="number" min={1} value={Math.floor(timer.longBreakDuration / 60)} onChange={(e) => timer.updateLongBreakDuration(Number(e.target.value) * 60)} /></div>
        <div className="row-wrapper"><label htmlFor="long-break-interval-input">Long Break Interval</label><input id="long-break-interval-input" className="long-break-interval-input" type="number" min={1} value={timer.breakInterval} onChange={(e) => timer.updateBreakInterval(Number(e.target.value))} /></div>
      </section>

      <section className="settings-section audio-and-alerts">
        <h2>Alarm & Break Audio</h2>
        <BreakAudioView {...breakSound} />
        <div className="settings-control-row alarm-volume"><span>Alarm Volume</span><input type="range" className="volume-slider" min={1} max={10} value={alarmVolume} onChange={(e) => setAlarmVolume(Number(e.target.value))} /></div>
        <div className="settings-control-row alarm-repeat"><label htmlFor="alarm-play-count">Alarm Plays</label><input id="alarm-play-count" type="number" min={1} max={10} step={1} value={alarmPlayCount} onChange={(e) => { const nextCount = Number(e.target.value); if (Number.isFinite(nextCount)) setAlarmPlayCount(Math.min(10, Math.max(1, nextCount))); }} /></div>
        <label className="settings-toggle"><input type="checkbox" checked={isMuted} onChange={(e) => setIsMuted(e.target.checked)} /><span>Mute all audio</span></label>
      </section>

      <section className="settings-section">
        <h2>Automation & Appearance</h2>
        <label className="settings-toggle"><input type="checkbox" checked={autoStartBreak} onChange={(e) => setAutoStartBreak(e.target.checked)} /><span>Auto-start breaks</span></label>
        <label className="settings-toggle"><input type="checkbox" checked={autoStartFocus} onChange={(e) => setAutoStartFocus(e.target.checked)} /><span>Auto-start focus</span></label>
        <label className="settings-toggle"><input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} /><span>Dark mode</span></label>
        <label className="settings-toggle"><input type="checkbox" checked={compactMode} onChange={(e) => setCompactMode(e.target.checked)} /><span>Compact / Zen mode</span></label>
      </section>

      <section className="settings-section settings-actions-section">
        <h2>Reset</h2>
        <div className="settings-actions">
          <button type="button" onClick={resetToDefaults}>Reset timer defaults</button>
          <button type="button" onClick={resetCompletedSessions}>Reset completed sessions</button>
        </div>
      </section>
      <div className="visuals"></div>
    </div>
  );
}
