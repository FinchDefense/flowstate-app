import { useState, useEffect, useRef } from 'react';

export function useBreakSound() {
  const fileInputRef = useRef(null);
  const audioInstanceRef = useRef(null);
  const [breakAudioUrl, setBreakAudioUrl] = useState(() => {
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
    }
  }, [breakAudioUrl])

  const handleSelectChange = (e) => {
    const val = e.target.value;
    if (!val) return;

    if (val === 'custom') {
      fileInputRef.current?.click();
    } 
    else {
      setBreakAudioUrl(val);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBreakAudioUrl(URL.createObjectURL(file));
    }
  };

  const playBreakSound = () => {
    if (audioInstanceRef.current) {
      audioInstanceRef.current.pause();
    }

    audioInstanceRef.current = new Audio(breakAudioUrl);
    audioInstanceRef.current.play().catch(err => {
      console.log("Error, break audio could not play: ", err);
    })
  }

  return {
    breakAudioUrl,
    fileInputRef,
    handleSelectChange,
    handleFileChange,
    playBreakSound
  }
};