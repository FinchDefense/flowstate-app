import { useState, useEffect } from "react";

export function useAppSettings() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    return savedTheme === null ? true : savedTheme === "true";
  });

  const [compactMode, setCompactMode] = useState<boolean>(() => {
    return localStorage.getItem("compact-mode") === "true";
  });

  const [isMuted, setIsMuted] = useState<boolean>(() => {
    return localStorage.getItem("global-mute") === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("compact-mode", String(compactMode));
  }, [compactMode]);

  useEffect(() => {
    localStorage.setItem("global-mute", String(isMuted));
  }, [isMuted]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-dark", darkMode);
    root.classList.toggle("theme-light", !darkMode);
    root.classList.toggle("compact-mode", compactMode);
  }, [darkMode, compactMode]);

  return {
    darkMode,
    setDarkMode,
    compactMode,
    setCompactMode,
    isMuted,
    setIsMuted,
  };
}
