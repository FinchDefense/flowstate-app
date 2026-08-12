import "./TaskList.css";
import { useState, useEffect } from "react";
import { getRandomQuote, type Quote } from "../Timer/quotes";

export type CampaignEvents = '' | 'Guild Contracts (Work)' | 'Physical Prowess (Fitness)' | 'Ancient Runes (School)' | 'Hearth & Home (Chores)' | 'The Royal Ledger (Finances)';
export type ThreatTier = '' | 'Trivial' | 'Guarded' | 'Perilous';

export interface Quest {
  id: string;
  title: string;
  campaign: string;
  threatTier: ThreatTier;
  battleSteps: string[];
  loreStory: string;
  completed: boolean;
}

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList({ setShowTaskList }: TaskListProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());
  const [showQuestSetUp, setShowQuestSetUp] = useState<boolean>(false);
  const [currentQuestName, setCurrentQuestName] = useState<string>("");
  const [currentCampaign, setCurrentCampaign] = useState<CampaignEvents>('');
  const [currentThreatTier, setCurrentThreatTier] = useState<ThreatTier>('');
  const [currentBattleStep, setCurrentBattleStep] = useState<string>("");
  const [currentBattleSteps, setCurrentBattleSteps] = useState<string[]>([]);
  const [currentLoreStory, setCurrentLoreStory] = useState<string>("");
  const [quests, setQuests] = useState<Quest[]>(() => {
    const savedQuests = localStorage.getItem('quests');
    return savedQuests ? JSON.parse(savedQuests) as Quest[] : [];
  });

  const [selectedQuestId, setSelectedQuestId] = useState<string>("");

  const handleInputChangeNextQuest = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestName(event.target.value);
  };

  const handleInputChangeBattleSteps = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentBattleStep(event.target.value);
  }

  const handleInputChangeLoreStory = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLoreStory(event.target.value);
  }
  const createNewQuest = () => {
    const newQuest: Quest = {
      id: crypto.randomUUID(),
      title: currentQuestName,
      campaign: currentCampaign,
      threatTier: currentThreatTier,
      battleSteps: currentBattleSteps,
      loreStory: currentLoreStory,
      completed: false,
    }

    setQuests([...quests, newQuest]);
  }

  useEffect(() => {
    if (currentQuestName.trim() !== '') setShowQuestSetUp(true);
    else setShowQuestSetUp(false);
  }, [currentQuestName]);

  useEffect(() => {
    localStorage.setItem("quests", JSON.stringify(quests));
  }, [quests]);


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
          onChange={handleInputChangeNextQuest}
          value={currentQuestName}
        />
        <button className="add-task-button" onClick={() => {
          setShowQuestSetUp(false);
          createNewQuest();
          setCurrentQuestName("");
          setCurrentCampaign("");
          setCurrentThreatTier("");
          setCurrentBattleStep("")
          setCurrentBattleSteps([]);
          setCurrentLoreStory("");
        }}>Add Quest</button>
      </div>

      {showQuestSetUp && (
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
              <button className="threat-tiers" onClick={() => setCurrentThreatTier("Trivial")} >Trivial</button>
              <button className="threat-tiers" onClick={() => setCurrentThreatTier("Guarded")} >Guarded</button>
              <button className="threat-tiers" onClick={() => setCurrentThreatTier("Perilous")}>Perilous</button>
            </div>
          </div>

          <div className="battle-steps-info">
            <span>⚔️</span> <p>Battle Steps: </p>
            <input placeholder="Map out your tactical steps..." onChange={handleInputChangeBattleSteps} value={currentBattleStep} />
            <button onClick={() => {
              setCurrentBattleSteps([...currentBattleSteps, currentBattleStep]);
              setCurrentBattleStep("");
            }}>+</button>
          </div>

          <div className="lore-story-info">
            <span>📜</span> <p>Add Lore Story: </p>
            <textarea
              className="lore-story-text-area"
              rows={1}
              onChange={handleInputChangeLoreStory}
              placeholder="Record your noble motivations in the chronicler's ledger..."
              value={currentLoreStory}
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
