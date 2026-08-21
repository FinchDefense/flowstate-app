import { useMemo } from "react";

export function useUsername() {
  const displayName = useMemo(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  }, []);

  return displayName;
}
