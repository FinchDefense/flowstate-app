import { useEffect } from "react";

export function useThemeEffect(isOnBreak: boolean) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("phase-focus", "phase-break");
    root.classList.add(isOnBreak ? "phase-break" : "phase-focus");

    return () => {
      root.classList.remove("phase-focus", "phase-break");
    };
  }, [isOnBreak]);
}
