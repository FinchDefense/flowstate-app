import { useEffect } from "react";
import "./FlowMusicButton.css";

interface FlowMusicButtonProps {
  hasFolder: boolean;
  isPlaying: boolean;
  currentTrack: string;
  onMusicFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMusic: () => void;
  onSkipMusic: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isMuted: boolean;
  musicVolume: number;
  setMusicVolume: React.Dispatch<React.SetStateAction<number>>;
}

export function FlowMusicButton({
  hasFolder,
  isPlaying,
  currentTrack,
  onMusicFileChange,
  onToggleMusic,
  onSkipMusic,
  audioRef,
  isMuted,
  musicVolume,
  setMusicVolume,
}: FlowMusicButtonProps) {
  const directoryInputProps = {
    webkitdirectory: "",
    directory: "",
  } as React.InputHTMLAttributes<HTMLInputElement> & {
    webkitdirectory?: string;
    directory?: string;
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : musicVolume / 10;
  }, [musicVolume, isMuted]);

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
            <div className="volume-slider-header">
              <label className="setting-label">Control the Volume</label>
            </div>
            <input
              type="range"
              className="volume-slider"
              min="1"
              max="10"
              value={musicVolume.toString()}
              onChange={(e) => {
                const val = Number(e.target.value);
                setMusicVolume(Math.max(1, Math.min(10, val)));
              }}
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
