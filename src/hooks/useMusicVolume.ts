import { useState, useEffect } from "react";

export function useMusicVolume() {
  const [musicVolume, setMusicVolume] = useState<number>(() => {
    const savedVolume = localStorage.getItem("music-volume");
    const volume = savedVolume ? Number(savedVolume) : 7;
    return Math.max(1, Math.min(10, volume));
  });

  useEffect(() => {
    localStorage.setItem("music-volume", String(musicVolume));
  }, [musicVolume]);

  return {
    musicVolume,
    setMusicVolume,
  };
}
