import { useState, useRef, useEffect } from "react";
import "./FlowMusicButton.css";

export function FlowMusicButton() {
  const [hasFolder, setHasFolder] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<string>("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const filesRef = useRef<File[]>([]);
  const currentUrlRef = useRef<string>("");
  const isComponentMounted = useRef<boolean>(true);

  const revokeCurrentUrl = () => {
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = "";
    }
  };

  useEffect(() => {
    isComponentMounted.current = true;
    audioRef.current = new Audio();

    const handleTrackEnd = () => {
      playRandomTrack();
    };

    audioRef.current.addEventListener("ended", handleTrackEnd);

    return () => {
      isComponentMounted.current = false;
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("ended", handleTrackEnd);
      revokeCurrentUrl();
    };
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const foundFiles: File[] = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const nameLower = file.name.toLowerCase();
      if (nameLower.endsWith(".mp3") || nameLower.endsWith(".mp4")) {
        foundFiles.push(file);
      }
    }

    if (foundFiles.length === 0) {
      alert("No mp3 or mp4 files found in this folder!");
      return;
    }

    filesRef.current = foundFiles;
    setHasFolder(true);
  };

  const playRandomTrack = () => {
    const audio = audioRef.current;
    const files = filesRef.current;

    if (files.length === 0 || !audio) return;

    try {
      const randomFile = files[Math.floor(Math.random() * files.length)];

      if (!isComponentMounted.current) return;

      revokeCurrentUrl();

      currentUrlRef.current = URL.createObjectURL(randomFile);
      audio.src = currentUrlRef.current;
      setCurrentTrack(randomFile.name);

      audio.play().catch((err) => {
        console.error("Playback interrupted or blocked by browser:", err);
      });
      setIsPlaying(true);
    } catch (error) {
      console.error("Playback setup failed, skipping track:", error);
      playRandomTrack();
    }
  };

  const toggleIsPlaying = () => {
    if (!audioRef.current) return;

    if (!currentUrlRef.current) {
      playRandomTrack();
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  const handleSkip = () => {
    if (!audioRef.current || !currentUrlRef.current) return;

    audioRef.current.pause();
    revokeCurrentUrl();
    playRandomTrack();
  };

  return (
    <div className="flowmusicbutton-container">
      {!hasFolder ? (
        <label className="flowmusicbutton-pick-label">
          📁 Step 1: Select Music Folder
          <input
            type="file"
            onChange={handleFileChange}
            webkitdirectory=""
            directory=""
            multiple
            className="flowmusicbutton-hidden-input"
            {...({
              webkitdirectory: "",
              directory: "",
            } as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </label>
      ) : ( 
        <div className="flowmusicbutton-player">
          <div className="flowmusicbutton-player-row">
            <button
              className={`flowmusicbutton-toggle ${isPlaying ? "is-playing" : ""}`}
              onClick={toggleIsPlaying}
            >
              {isPlaying ? "⏸ Pause Flow" : "▶ Start Flow"}
            </button>

            <button
              className="flowmusicbutton-skip"
              onClick={handleSkip}
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
