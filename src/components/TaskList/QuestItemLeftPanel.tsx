import { type Quest } from "./TaskList";

interface QuestItemLeftPanelProps {
  quests: Quest[];
  quest: Quest;
  setQuests: React.Dispatch<React.SetStateAction<Quest[]>>;
  onSelect: () => void;
}

export function QuestItemLeftPanel({ quest, quests, setQuests, onSelect }: QuestItemLeftPanelProps) {
  return (
    <div className="quest-item-left-container" onClick={onSelect}>
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
        <button className="quest-item-delete-btn" onClick={() => {
          setQuests(quests.filter((currentQuest) => quest.id !== currentQuest.id));
        }}>DEL</button>
      </div>
    </div>
  );
}
