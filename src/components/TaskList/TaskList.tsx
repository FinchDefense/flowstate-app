import "./TaskList.css";
import { useState } from "react";
import { getRandomQuote, type Quote } from "../Timer/quotes";

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

type CampaignEvents = '' | 'Guild Contracts (Work)' | 'Physical Prowess (Fitness)' | 'Ancient Runes (School)' | 'Hearth & Home (Chores)' | 'The Royal Ledger (Finances)';

export function TaskList({ setShowTaskList }: TaskListProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());
  const [questName, setQuestName] = useState<string>("");
  const [currentCampaign, setCurrentCampaign] = useState<CampaignEvents>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestName(event.target.value);
  };

  return (
    <div className="task-list-container">
      <div className="fixed-button-container">
        <button className="back-button" onClick={() => setShowTaskList(false)}>
          ← Back to Menu
        </button>
        <div className="task-list-quote-text">"{quote.text}"</div>
        <div className="task-list-quote-author">- {quote.author}</div>
      </div>

      <h1 className="task-list-title">
        <span>📜</span>
        QUEST LOG
      </h1>

      <div className="task-row">
        <input
          placeholder="✍️ What is your next quest?..."
          className="task-input"
          onChange={handleInputChange}
        />
        <button className="add-task-button">Add Quest</button>
      </div>

      {questName !== "" && (
        <div className="quest-info-container">
          <div className="campaign-selector">
            <span>🛡️</span> <p>Assign Campaign: </p>
            <div className="dropdown">
              <button className="dropbtn">[ {currentCampaign === '' ? 'Choose Your Campaign...' : currentCampaign} ▼ ]</button>
              <div className="dropdown-content">
                <a href="#" onClick={() => setCurrentCampaign('Guild Contracts (Work)')}>[ Guild Contracts (Work)]</a>
                <a href="#" onClick={() => setCurrentCampaign('Physical Prowess (Fitness)')}>[ Physical Prowess (Fitness)]</a>
                <a href="#" onClick={() => setCurrentCampaign('Ancient Runes (School)')}>[ Ancient Runes (School)]</a>
                <a href="#" onClick={() => setCurrentCampaign('Hearth & Home (Chores)')}>[ Hearth & Home (Chores)]</a>
                <a href="#" onClick={() => setCurrentCampaign('The Royal Ledger (Finances)')}>[ The Royal Ledger (Finances)]</a>
              </div>
            </div>
          </div>

          <div className="threat-tier-selector">
            <span>🔴</span> <p>Threat Tier: </p>
            <div className="threat-tier-button-container">
              <button className="threat-tiers">Trivial</button>
              <button className="threat-tiers">Guarded</button>
              <button className="threat-tiers">Perilous</button>
            </div>
          </div>

          <div className="battle-steps-info">
            <span>⚔️</span> <p>Battle Steps: </p>
            <input placeholder="Map out your tactical steps..." />
            <button>+</button>
          </div>

          <div className="lore-story-info">
            <span>📜</span> <p>Add Lore Story: </p>
            <textarea
              className="lore-story-text-area"
              rows={1}
              placeholder="Record your noble motivations in the chronicler's ledger..."
            />
          </div>
        </div>
      )}

      <div className="task-list-filters">
        <button>📋 All</button>
        <button>⚔️ Active</button>
        <button>✅ Completed</button>
        <button>🏆 Priority</button>
      </div>
    </div>
  );
}
