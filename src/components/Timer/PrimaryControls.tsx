import { useRef } from 'react';

interface PrimaryControlsProps {
  handleStartPause: () => void;
  isRunning: boolean;
  time: number;
  setInFocusMode: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function PrimaryControls({ handleStartPause, setInFocusMode, isRunning, time}: PrimaryControlsProps) {
  const buttonContent = isRunning
      ? { icon: "⏸", text: "Pause" }
      : time === 0
      ? { icon: "🔄", text: "Restart" }
      : { icon: "▶", text: "Start" };

  const buttonRef = useRef<HTMLButtonElement>(null); 

  const animationOnClick = () => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add('animate-click');

      const handleAnimationEnd = () => {
        button.classList.remove('animate-click');
        button.removeEventListener('animationend', handleAnimationEnd);
      };

      button.addEventListener('animationend', handleAnimationEnd);
  }
};

  return (
    <>
      <div className="timer-buttons-main-controls">
        <button 
          onClick={() => {handleStartPause(); animationOnClick(); }} 
          className="start-pause-button"
          ref={buttonRef}>
          <span className="button-icon">{buttonContent.icon}</span>
          <span>{buttonContent.text}</span>
        </button>
        <button 
          onClick={() => {
            setInFocusMode(true);
            animationOnClick();
          }} 
          className="focus-button"
        >
        🧘 Focus
      </button>
      </div>
    </>
  );
}
