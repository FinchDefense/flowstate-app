import React from "react";
import { useBreakSound } from "./useBreakSound";

export default function BreakAudioView(): React.JSX.Element {
  const {
    breakAudioUrl,
    fileInputRef,
    openFilePicker,
    handleSelectChange,
    handleFileChange,
    playBreakSound,
  } = useBreakSound();

  return (
    <div>
      <label htmlFor="sound-select">Choose Break Sound: </label>
      <select
        id="sound-select"
        className="name-input-box"
        value={breakAudioUrl.startsWith("blob:") ? "custom" : breakAudioUrl}
        onChange={handleSelectChange}
      >
        <option value="/audio/lofi-audio.mp3">☕ Lo-Fi Beat</option>
        <option value="/audio/raining-audio.mp3">🌧️ Rain Sounds</option>
        <option value="/audio/water-splash-audio.mp3">💦 Water Splash</option>
        <option value="/audio/whoosh-audio.mp3">💨 Soft Whoosh</option>
        <option value="/audio/wind-chimes.mp3">🎐 Wind Chimes</option>
        <option value="audio/bubbles-audio.mp3">🫧 Rising Bubbles</option>
        <option value="/audio/dragon-audio.mp3">🐉 Dragon Roar</option>
        <option value="/audio/bird-chirping-audio.mp3">🐦 Bird Chirping</option>
      </select>

      <button
        type="button"
        onClick={openFilePicker}
        style={{ marginLeft: "10px" }}
      >
        🎵 Upload Custom File...
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
        onClick={playBreakSound}
        style={{ marginLeft: "10px" }}
      >
        ▶️ Test Sound
      </button>
    </div>
  );
}
