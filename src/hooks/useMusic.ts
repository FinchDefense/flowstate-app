import { useState, useRef, useEffect, useCallback } from "react";
import { set, get } from "idb-keyval";

export function useMusic(isMuted: boolean, musicVolume: number) {
  const [hasFolder, setHasFolder] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<string>("");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const filesRef = useRef<File[]>([]);
  const currentUrlRef = useRef<string>("");
  const musicWasPlayingForAlarmRef = useRef(false);

  useEffect(() => {
    async function loadStoredFolder() {
      try {
        const retrievedFolder = await get<File[]>("current-folder");
        if (retrievedFolder && retrievedFolder.length > 0) {
          filesRef.current = retrievedFolder;
          setHasFolder(true);
        }
      } catch (error) {
        console.error("Failed to load folder from IndexedDB:", error);
      }
    }
    loadStoredFolder();
  }, []);

  const revokeCurrentUrl = useCallback(() => {
    if (currentUrlRef.current) {
      URL.revokeObjectURL(currentUrlRef.current);
      currentUrlRef.current = "";
    }
  }, []);

  const playRandomTrack = useCallback(
    function playRandomTrack() {
      const audio = audioRef.current;
      const files = filesRef.current;

      if (files.length === 0 || !audio) return;

      try {
        const randomIndex = Math.floor(Math.random() * files.length);
        const randomFile = files[randomIndex];
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
    },
    [revokeCurrentUrl],
  );

  const handleMusicFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
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
    try {
      await set("current-folder", foundFiles);
      setHasFolder(true);
    } catch (error) {
      console.error("Failed to save folder to IndexedDB:", error);
      alert("Failed to securely store folder index in browser cache storage.");
    }
  };

  const toggleMusic = useCallback(() => {
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
  }, [isPlaying, playRandomTrack]);

  const skipMusic = useCallback(() => {
    if (!audioRef.current || !currentUrlRef.current) return;

    audioRef.current.pause();
    revokeCurrentUrl();
    playRandomTrack();
  }, [playRandomTrack, revokeCurrentUrl]);

  const pauseMusicForAlarm = useCallback(() => {
    const audio = audioRef.current;
    musicWasPlayingForAlarmRef.current = Boolean(
      audio && !audio.paused && currentUrlRef.current,
    );

    if (musicWasPlayingForAlarmRef.current && audio) {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const resumeMusicAfterAlarm = useCallback(() => {
    const audio = audioRef.current;
    if (!musicWasPlayingForAlarmRef.current || !audio) return;

    musicWasPlayingForAlarmRef.current = false;
    audio.play().catch((error: Error) => {
      console.error("Music playback was blocked after the alarm:", error);
    });
    setIsPlaying(true);
  }, []);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : musicVolume / 10;
    }
  }, [isMuted, musicVolume]);

  // Initialize audio element and handle track end
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleTrackEnd = () => {
      playRandomTrack();
    };

    audio.addEventListener("ended", handleTrackEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", handleTrackEnd);
      revokeCurrentUrl();
      audioRef.current = null;
    };
  }, [playRandomTrack, revokeCurrentUrl]);

  return {
    hasFolder,
    isPlaying,
    currentTrack,
    audioRef,
    handleMusicFileChange,
    toggleMusic,
    skipMusic,
    pauseMusicForAlarm,
    resumeMusicAfterAlarm,
  };
}
