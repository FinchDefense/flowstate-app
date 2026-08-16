import "./FlowMusicButton.css";

interface FlowMusicButtonProps {
  hasFolder: boolean;
  isPlaying: boolean;
  currentTrack: string;
  onMusicFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleMusic: () => void;
  onSkipMusic: () => void;
}

export function FlowMusicButton({
  hasFolder,
  isPlaying,
  currentTrack,
  onMusicFileChange,
  onToggleMusic,
  onSkipMusic,
}: FlowMusicButtonProps) {
  const directoryInputProps = {
    webkitdirectory: "",
    directory: "",
  } as React.InputHTMLAttributes<HTMLInputElement> & {
    webkitdirectory?: string;
    directory?: string;
  };

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
