import { useState, useEffect } from "react";

export function useAlarmSettings() {
  const [alarmVolume, setAlarmVolume] = useState<number>(() => {
    const savedVolume = localStorage.getItem("alarm-volume");
    return savedVolume ? Number(savedVolume) : 7;
  });

  const [alarmPlayCount, setAlarmPlayCount] = useState<number>(() => {
    const savedPlayCount = localStorage.getItem("alarm-play-count");
    return savedPlayCount ? Number(savedPlayCount) : 1;
  });

  useEffect(() => {
    localStorage.setItem("alarm-volume", String(alarmVolume));
  }, [alarmVolume]);

  useEffect(() => {
    localStorage.setItem("alarm-play-count", String(alarmPlayCount));
  }, [alarmPlayCount]);

  return {
    alarmVolume,
    setAlarmVolume,
    alarmPlayCount,
    setAlarmPlayCount,
  };
}
