import { useState, useRef, useEffect } from "react";

export function FlowMusicButton() {
  const [hasFolder, setHasFolder] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<string>("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const filesRef = useRef<FileSystemFileHandle[]>([]);
  const currentUrlRef = useRef<string>("");

  useEffect(() => {
    audioRef.current = new Audio();

    const handleTrackEnd = () => {
      playRandomTrack();
    };

    audioRef.current.addEventListener("ended", handleTrackEnd);

    return () => {
      const currentUrl = currentUrlRef.current;
      audioRef.current?.pause();
      audioRef.current?.removeEventListener("ended", handleTrackEnd);
      if (currentUrl) {
        URL.revokeObjectURL(currentUrl);
        currentUrlRef.current = "";
      }
    };
  }, []);

  const handleChooseDir = async () => {
    try {
      const dirChosen = await window.showDirectoryPicker();
      const foundFiles: FileSystemFileHandle[] = [];

      for await (const entry of dirChosen.values()) {
        if (
          entry.kind === "file" &&
          (entry.name.endsWith(".mp3") || entry.name.endsWith(".mp4"))
        )
          foundFiles.push(entry);
      }

      if (foundFiles.length === 0) {
        alert("No mp3 or mp4 files found in this folder!");
        return;
      }

      filesRef.current = foundFiles;
      setHasFolder(true);
    } catch (error) {
      console.log("No file selected", error);
    }
  };

  const playRandomTrack = async () => {
    const audio = audioRef.current;
    const files = filesRef.current;

    if (files.length === 0 || !audio || !files) return;

    const randomFile = files[Math.floor(Math.random() * files.length)];
    const randomFileData = await randomFile.getFile();
    currentUrlRef.current = URL.createObjectURL(randomFileData);
    audio.src = currentUrlRef.current;
    setCurrentTrack(randomFile.name);

    audio.play();
    setIsPlaying(true);
  };

  const toggleIsPlaying = () => {
    if (!audioRef.current) return;

    if (!currentUrlRef.current) {
      playRandomTrack();
    } else if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
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
        <button
          onClick={handleChooseDir}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
          }}
        >
          📁 Step 1: Select Music Folder
        </button>
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
