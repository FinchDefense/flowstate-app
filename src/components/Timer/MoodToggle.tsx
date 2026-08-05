interface MoodToggleProps {
  glowColor: string;
  currentMood: string;
  toggleMood: () => void;
}

export function MoodToggle({ glowColor, currentMood, toggleMood}: MoodToggleProps) {
  return (
    <button
      onClick={toggleMood}
      className="mood-toggle-button"
      style={{
        borderColor: glowColor,
        color: glowColor,
        boxShadow: `0 0 8px ${glowColor}44`,
      }}
    >
      {currentMood}
    </button>
  )
}