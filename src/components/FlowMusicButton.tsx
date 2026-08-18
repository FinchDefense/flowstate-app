import { useState, useEffect } from "react";
import "./FlowMusicButton.css";

interface FlowMusicButtonProps {
  hasFolder: boolean;
  isPlaying: boolean;
  currentTrack: string;
  onMusicFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMusic: () => void;
  onSkipMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export function FlowMusicButton({
  hasFolder,
  isPlaying,
  currentTrack,
  onMusicFileChange,
  onToggleMusic,
  onSkipMusic,
  audioRef,
}: FlowMusicButtonProps) {
  const directoryInputProps = {
    webkitdirectory: "",
    directory: "",
  } as React.InputHTMLAttributes<HTMLInputElement> & {
    webkitdirectory?: string;
    directory?: string;
  };

  const [volumeValue, setVolumeValue] = useState<number>(5);
  useEffect(() => {
    if (!audioRef.current) return;
    else {
      audioRef.current.volume = (volumeValue / 10);
    }
  }, [volumeValue, audioRef]);

  return (
    <div className="flowmusicbutton-container">
      {!hasFolder ? (
        <label className="flowmusicbutton-pick-label">
          📁 Step 1: Select Music Folder
          <input
            type="file"
            onChange={onMusicFileChange}
            multiple
            className="flowmusicbutton-hidden-input"
            {...directoryInputProps}
          />
        </label>
      ) : (
        <div className="flowmusicbutton-player">
          <div className="flowmusicbutton-player-row">
            <button
              className={`flowmusicbutton-toggle ${isPlaying ? "is-playing" : ""}`}
              onClick={onToggleMusic}
            >
              {isPlaying ? "⏸ Pause Flow" : "▶ Start Flow"}
            </button>

            <button
              className="flowmusicbutton-skip"
              onClick={onSkipMusic}
              aria-label="Skip to next track"
            >
              ➜
            </button>
          </div>

          <div className="volume-slider-container">
            <div className="rpg-slider-header">
              <label className="setting-label">Control the Volume</label>
            </div>
            <input
              type="range"
              className="volume-slider"
              min={1}
              max={10}
              value={volumeValue}
              onChange={(e) => setVolumeValue(Number(e.target.value))}
            />
          </div>
          {currentTrack && (
            <p className="flowmusicbutton-track">
              Currently Playing: <strong>{currentTrack}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
