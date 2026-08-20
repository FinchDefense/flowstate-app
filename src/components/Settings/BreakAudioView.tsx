import React from "react";
import { useBreakSound } from "./useBreakSound";
import "./BreakAudioView.css";

export default function BreakAudioView(): React.JSX.Element {
  const {
    breakAudioUrl,
    fileInputRef,
    openFilePicker,
    handleSelectChange,
    handleFileChange,
    playBreakSound,
  } = useBreakSound();

  const displayActiveText = (value: string, originalText: string): string => {
    return originalText;
  };

  return (
    <div className="sound-selector-container">
      <label htmlFor="sound-select" className="sound-label">Choose Break Sound: </label>
      
      <div className="break-sound-select-wrapper">
        <select
          id="sound-select"
          className="break-sound-select"
          value={breakAudioUrl.startsWith("blob:") ? "custom" : breakAudioUrl}
          onChange={handleSelectChange}
        >
          {breakAudioUrl.startsWith('blob:') && (
            <option value="custom">🎵 Custom Uploaded Sound</option>
          )}
          <option value="/audio/lofi-audio.mp3">☕ Lo-Fi Beat</option>
          <option value="/audio/raining-audio.mp3">🌧️ Rain Sounds</option>
          <option value="/audio/water-splash-audio.mp3">💦 Water Splash</option>
          <option value="/audio/whoosh-audio.mp3">💨 Soft Whoosh</option>
          <option value="/audio/wind-chimes.mp3">🎐 Wind Chimes</option>
          <option value="audio/bubbles-audio.mp3">🫧 Rising Bubbles</option>
          <option value="/audio/dragon-audio.mp3">🐉 Dragon Roar</option>
          <option value="/audio/bird-chirping-audio.mp3">🐦 Bird Chirping</option>
        </select>
      </div>

      <button
        type="button"
        onClick={openFilePicker}
        className="upload-custom-btn"
      >
        📁 Upload Custom...
      </button>

      <input
        type="file"
        ref={fileInputRef}
        accept="audio/*"
        onChange={handleFileChange}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      <button
        type="button"
        className="play-btn"
        onClick={playBreakSound}
      >
        ▶️ Test Sound
      </button>
    </div>
  );
}
