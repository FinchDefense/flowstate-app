import { useState, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';

interface UseBreakSoundResult {
  breakAudioUrl: string;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  playBreakSound: () => void;
}

export function useBreakSound(): UseBreakSoundResult {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioInstanceRef = useRef<HTMLAudioElement | null>(null);

  const [breakAudioUrl, setBreakAudioUrl] = useState<string>(() => {
    return localStorage.getItem('break-audio') || 'https://soundhelix.com';
  });

  useEffect(() => {
    if (!breakAudioUrl.startsWith('blob:')) {
      localStorage.setItem('break-audio', breakAudioUrl);
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

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const val = e.target.value;
    if (!val) return;

    if (val === 'custom') {
      fileInputRef.current?.click(); 
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
    
    audioInstanceRef.current = new Audio(breakAudioUrl);
    audioInstanceRef.current.play().catch((err: Error) => {
      console.log("Safari auto-play framework safeguard: ", err);
    });
  };

  return {
    breakAudioUrl,
    fileInputRef,
    handleSelectChange,
    handleFileChange,
    playBreakSound
  };
}