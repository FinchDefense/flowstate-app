import { type Quest } from "./TaskList";

interface QuestItemLeftPanelProps {
  quest: Quest;
}

export function QuestItemLeftPanel({ quest }: QuestItemLeftPanelProps) {
  return (
    <div className="quest-item-container">
      <label className="custom-checkbox-container">
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
      <span className="quest-name">{quest.title.toUpperCase()}</span>
      <div className="tag-container">
        <span className="campaign-name">
          {quest.campaign !== ""
            ? `[ ${quest.campaign} ]`
            : "[ None ]"}
        </span>
        <span>
          {quest.threatTier === "Trivial"
            ? "🟢"
            : quest.threatTier === "Guarded"
              ? "🛡️"
              : quest.threatTier === "Perilous"
                ? "💀"
                : "⚪"}
        </span>
      </div>
    </div>
  );
}
