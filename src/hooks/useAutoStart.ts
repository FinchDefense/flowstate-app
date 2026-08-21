import { useState, useEffect } from "react";

export function useAutoStart() {
  const [autoStartBreak, setAutoStartBreak] = useState<boolean>(() => {
    return localStorage.getItem("auto-start-break") === "true";
  });

  const [autoStartFocus, setAutoStartFocus] = useState<boolean>(() => {
    return localStorage.getItem("auto-start-focus") === "true";
  });

  useEffect(() => {
    localStorage.setItem("auto-start-break", String(autoStartBreak));
  }, [autoStartBreak]);

  useEffect(() => {
    localStorage.setItem("auto-start-focus", String(autoStartFocus));
  }, [autoStartFocus]);

  return {
    autoStartBreak,
    setAutoStartBreak,
    autoStartFocus,
    setAutoStartFocus,
  };
}
