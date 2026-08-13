import { type Quest } from "./TaskList";

interface QuestItemLeftPanelProps {
  quest: Quest;
}

export function QuestItemLeftPanel({ quest }: QuestItemLeftPanelProps) {

  return (
    <div className="quest-item-container">
      <input type="checkbox"></input>
      <span>{quest.title.toUpperCase()}</span>
      <div className="tag-container">
        <span>{quest.campaign !== '' ? `[Campaign: ${quest.campaign}]` : "[Campaign: none]" }</span>
        <span>{quest.threatTier === 'Trivial' ? '🟢' : quest.threatTier === 'Guarded' ? '🛡️' : quest.threatTier === 'Perilous' ? '💀' : '⚪' }</span>
      </div>
    </div>
  );
}