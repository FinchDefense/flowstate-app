import { type Quest } from "./TaskList";

interface QuestItemLeftPanelProps {
  quest: Quest;
}

export function QuestItemLeftPanel({ quest }: QuestItemLeftPanelProps) {

  return (
    <div className="quest-item-container">
      <input type="checkbox"></input>
      <span>{quest.title}</span>
      <div className="tag-container">
        <span>Campaign: {quest.campaign}</span>
        <span>{quest.threatTier === 'Trivial' ? '🟢' : quest.threatTier === 'Guarded' ? '🛡️' : quest.threatTier === 'Perilous' ? '💀' : 'None' }</span>
      </div>
    </div>
  );
}