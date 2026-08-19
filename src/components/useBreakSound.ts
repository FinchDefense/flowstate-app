import { useState, useEffect, useRef } from 'react';
import { set, get } from 'idb-keyval';

export interface BreakSoundType {
  id: string,
  name: string,
  isCustom: boolean,
  src: string,
}

export function useBreakSound() {
  const [currentBreakSound, setCurrentBreakSound] = useState<BreakSoundType>({
    id: "default-chime",
    name: "Gentle Chime",
    isCustom: false,
    src: "../../../public/audio/chime.mp3",
  });

  const [breakVolume, setBreakVolume] = useState<number>(0.7);
  const breakAudioRef = useRef<HTMLAudioElement | null>(null);
  const customFileRef = useRef<File | null>(null);

  useEffect(() => {
    async function loadSavedSound() {
      const savedConfig = await get<BreakSoundType>("break-sound-config");
      const savedFile = await get<File>("break-sound-file");
      if (savedConfig) setCurrentBreakSound(savedConfig);
      if (savedFile) customFileRef.current = savedFile;
    }

    loadSavedSound();
  }, []);
}