import { useState } from "react";

export function useUsername() {
  const [displayName, setDisplayNameState] = useState(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  const setDisplayName = (name: string) => {
    const trimmedName = name.trim();
    setDisplayNameState(trimmedName);
    localStorage.setItem("flowstate_userName", trimmedName);
  };

  return { displayName, setDisplayName };
}
