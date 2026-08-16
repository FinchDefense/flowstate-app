import { useState, useRef, useEffect } from "react";

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginTop: "50px",
      }}
    >
      {!hasFolder ? (
        <label
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          📁 Step 1: Select Music Folder
          <input
            type="file"
            onChange={handleFileChange}
            webkitdirectory="" 
            directory="" 
            multiple
            style={{ display: "none" }}
            {...({ webkitdirectory: "", directory: "" } as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        </label>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={toggleIsPlaying}
            style={{
              padding: "20px 40px",
              fontSize: "1.5rem",
              cursor: "pointer",
              background: isPlaying ? "#ff4757" : "#2ed573",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              fontWeight: "bold",
            }}
          >
            {isPlaying ? "⏸ Pause Flow" : "▶ Start Flow"}
          </button>
          {currentTrack && (
            <p style={{ fontSize: "0.9rem", color: "#888", marginTop: "15px" }}>
              Currently Playing: <strong>{currentTrack}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
