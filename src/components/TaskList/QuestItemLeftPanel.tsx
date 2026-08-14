import { type Quest } from "./TaskList";
import './TaskList.css'

interface QuestItemLeftPanelProps {
  quests: Quest[];
  quest: Quest;
  setQuests: React.Dispatch<React.SetStateAction<Quest[]>>;
  onSelect: () => void;
  onToggle: () => void;
}

export function QuestItemLeftPanel({ quest, quests, setQuests, onSelect, onToggle }: QuestItemLeftPanelProps) {
  return (
    <div className={`quest-item-left-container`} onClick={onSelect} >
      <label className="custom-checkbox-container" onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" checked={quest.completed} onChange={onToggle} />
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
        <button className="quest-item-delete-btn" onClick={(e) => {
          e.stopPropagation();
          setQuests(quests.filter((currentQuest) => quest.id !== currentQuest.id));
        }}>DEL</button>
      </div>
    </div>
  );
}
