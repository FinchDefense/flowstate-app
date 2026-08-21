import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

const ALARM_DURATION_MS = 10_000;

export interface UseBreakSoundResult {
  breakAudioUrl: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  openFilePicker: () => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  playBreakSound: () => void;
}

export function useBreakSound(
  alarmVolume: number,
  alarmPlayCount: number,
  onAlarmStart?: () => void,
  onAlarmEnd?: () => void,
  isMuted = false,
): UseBreakSoundResult {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInstanceRef = useRef<HTMLAudioElement | null>(null);
  const stopAlarmTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingPlaysRef = useRef(0);
  const onAlarmStartRef = useRef(onAlarmStart);
  const onAlarmEndRef = useRef(onAlarmEnd);

  useEffect(() => {
    onAlarmStartRef.current = onAlarmStart;
    onAlarmEndRef.current = onAlarmEnd;
  }, [onAlarmStart, onAlarmEnd]);

  const [breakAudioUrl, setBreakAudioUrl] = useState<string>(() => {
    return localStorage.getItem("break-audio") || "/audio/lofi-audio.mp3";
  });

  useEffect(() => {
    if (!breakAudioUrl.startsWith("blob:")) {
      localStorage.setItem("break-audio", breakAudioUrl);
    }
  }, [breakAudioUrl]);

  useEffect(() => {
    return () => {
      if (breakAudioUrl.startsWith("blob:")) {
        URL.revokeObjectURL(breakAudioUrl);
      }

      if (audioInstanceRef.current) {
        audioInstanceRef.current.pause();
        audioInstanceRef.current.src = "";
        audioInstanceRef.current = null;
      }

      if (stopAlarmTimeoutRef.current) {
        clearTimeout(stopAlarmTimeoutRef.current);
        stopAlarmTimeoutRef.current = null;
      }

      remainingPlaysRef.current = 0;
      onAlarmEndRef.current?.();
    };
  }, [breakAudioUrl]);

  useEffect(() => {
    if (audioInstanceRef.current) {
      audioInstanceRef.current.volume = isMuted ? 0 : alarmVolume / 10;
    }
  }, [alarmVolume, isMuted]);

  const openFilePicker = (): void => {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    try {
      fileInput.showPicker();
    } catch {
      fileInput.click();
    }
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const val = e.target.value;
    if (!val) return;

    if (val === "custom") {
      openFilePicker();
    } else {
      setBreakAudioUrl(val);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setBreakAudioUrl(URL.createObjectURL(file));
    }
  };

  const playBreakSound = (): void => {
    if (stopAlarmTimeoutRef.current) {
      clearTimeout(stopAlarmTimeoutRef.current);
    }

    if (audioInstanceRef.current) {
      audioInstanceRef.current.pause();
    }

    remainingPlaysRef.current = Math.max(1, Math.floor(alarmPlayCount));
    onAlarmStartRef.current?.();

    const audio = new Audio(breakAudioUrl);
    audio.volume = isMuted ? 0 : alarmVolume / 10;
    audioInstanceRef.current = audio;

    const finishAlarm = (): void => {
      if (audioInstanceRef.current !== audio) return;

      audio.pause();
      audio.currentTime = 0;
      audioInstanceRef.current = null;
      remainingPlaysRef.current = 0;
      onAlarmEndRef.current?.();
    };

    audio.addEventListener("ended", () => {
      remainingPlaysRef.current -= 1;
      if (remainingPlaysRef.current > 0) {
        audio.currentTime = 0;
        audio.play().catch((error: Error) => {
          console.error("Break sound playback was blocked:", error);
        });
      } else {
        finishAlarm();
      }
    });

    audio.play().catch((error: Error) => {
      console.error("Break sound playback was blocked:", error);
    });

    stopAlarmTimeoutRef.current = setTimeout(() => {
      finishAlarm();
      stopAlarmTimeoutRef.current = null;
    }, ALARM_DURATION_MS * remainingPlaysRef.current);
  };

  return {
    breakAudioUrl,
    fileInputRef,
    openFilePicker,
    handleSelectChange,
    handleFileChange,
    playBreakSound,
  };
}
