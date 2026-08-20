import { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

interface UseBreakSoundResult {
  breakAudioUrl: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  openFilePicker: () => void;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  playBreakSound: () => void;
}

export function useBreakSound(alarmVolume: number): UseBreakSoundResult {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInstanceRef = useRef<HTMLAudioElement | null>(null);

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
      }
    };
  }, [breakAudioUrl]);

  useEffect(() => {
    if (audioInstanceRef.current) {
      audioInstanceRef.current.volume = alarmVolume / 10;
    }
  }, [alarmVolume]);

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
    if (audioInstanceRef.current) {
      audioInstanceRef.current.pause();
    }

    const audio = new Audio(breakAudioUrl);
    audio.volume = alarmVolume / 10;
    audioInstanceRef.current = audio;
    audio.play();
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
