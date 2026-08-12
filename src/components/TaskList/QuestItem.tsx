import { useState } from "react";

export function QuestItem() {
  const [colorIndicator, setColorIndicator] = useState<string>("🔴");

  return (
    <div className="quest-item-container">
      <span>{colorIndicator}</span>
      
    </div>
  );
}