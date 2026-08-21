import { useState, useEffect } from "react";

export function useNavigation() {
  const [isStartingPage, setIsStartingPage] = useState<boolean>(true);
  const [isGameMenuPage, setIsGameMenuPage] = useState<boolean>(false);
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    if (!isStartingPage) return;

    const handleKeyDown = () => {
      setIsGameMenuPage(true);
      setIsExiting(true);
      setTimeout(() => {
        setIsStartingPage(false);
      }, 1200);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStartingPage]);

  return {
    isStartingPage,
    setIsStartingPage,
    isGameMenuPage,
    setIsGameMenuPage,
    inFocusMode,
    setInFocusMode,
    isExiting,
    setIsExiting,
  };
}
