interface SecondaryControlsProps {
  addFiveMinutes: () => void;
  minusFiveMinutes: () => void;
}

export function SecondaryControls({ addFiveMinutes, minusFiveMinutes }: SecondaryControlsProps) {
  return (
    <div className="timer-buttons-secondary-controls">
      <button className="skip-button">⏭ Skip</button>
      <button className="add-button" onClick={addFiveMinutes}>➕ 5</button>
      <button className="subtract-button" onClick={minusFiveMinutes}>➖ 5</button>
    </div>
  );
}
