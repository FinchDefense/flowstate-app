import { useState } from "react";
import { type CampaignEvents, type Quest, type ThreatTier } from "./TaskList";
import type { QuestDifficulty } from "../../hooks/usePlayerStats";

interface QuestItemRightPanelProps {
  quest: Quest;
  onUpdate: (updatedQuest: Quest) => void;
  handleToggleQuest: (id: string, title: string, difficulty: QuestDifficulty) => void;
  activeQuestId: string | null;
}

export function QuestItemRightPanel({ quest, onUpdate, handleToggleQuest, activeQuestId }: QuestItemRightPanelProps) {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [presentCampaign, setPresentCampaign] = useState<CampaignEvents>(
    quest.campaign as CampaignEvents,
  );
  const [presentThreatTier, setPresentThreatTier] = useState<ThreatTier>(
    quest.threatTier as ThreatTier,
  );
  const [presentLoreStory, setPresentLoreStory] = useState<string>(
    quest.loreStory,
  );
  const [presentBattleSteps, setPresentBattleSteps] = useState<string[]>(
    quest.battleSteps,
  );

  const handlePresentLoreStoryInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPresentLoreStory(e.target.value);
  };

  const isActive = activeQuestId === quest.id;

  if (isUpdating)
    return (
      <div className="quest-item-right-container editing-mode">
        <h3 className="right-panel-title editing-mode">
          {quest.title.toUpperCase()}
        </h3>
        <div className="quest-item-all-details editing-mode">
          <div className="editing-field-group">
            <label className="editing-label">
              <span>🛡️</span> Assign Campaign:
            </label>
            <div className="editing-campaign-dropdown">
              <button className="editing-campaign-dropbtn">
                [{" "}
                {presentCampaign === ""
                  ? " Choose Your Campaign... "
                  : presentCampaign}{" "}
                ▼ ]
              </button>
              <div className="editing-campaign-dropdown-content">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPresentCampaign("Guild Contracts (Work)");
                  }}
                >
                  [ Guild Contracts (Work) ]
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPresentCampaign("Physical Prowess (Fitness)");
                  }}
                >
                  [ Physical Prowess (Fitness) ]
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPresentCampaign("Ancient Runes (School)");
                  }}
                >
                  [ Ancient Runes (School) ]
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPresentCampaign("Hearth & Home (Chores)");
                  }}
                >
                  [ Hearth & Home (Chores) ]
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPresentCampaign("The Royal Ledger (Finances)");
                  }}
                >
                  [ The Royal Ledger (Finances) ]
                </a>
              </div>
            </div>
          </div>

          <div className="editing-field-group">
            <label className="editing-label">
              <span>🔴</span> Threat Tier:
            </label>
            <div className="editing-threat-tier-buttons-container">
              <button
                type="button"
                className={`editing-threat-tiers ${presentThreatTier === "Trivial" ? "active trivial" : ""}`}
                onClick={() => setPresentThreatTier("Trivial")}
              >
                Trivial
              </button>
              <button
                type="button"
                className={`editing-threat-tiers ${presentThreatTier === "Guarded" ? "active guarded" : ""}`}
                onClick={() => setPresentThreatTier("Guarded")}
              >
                Guarded
              </button>
              <button
                type="button"
                className={`editing-threat-tiers ${presentThreatTier === "Perilous" ? "active perilous" : ""}`}
                onClick={() => setPresentThreatTier("Perilous")}
              >
                Perilous
              </button>
            </div>
          </div>

          <div className="editing-field-group">
            <label className="editing-label">
              <span>⚔️</span> Battle Steps:
            </label>
            <textarea
              className="editing-battle-steps-textarea"
              rows={4}
              placeholder="1. Scout the perimeter...&#10;2. Gather supplies...&#10;3. Strike at dawn..."
              value={presentBattleSteps.join("\n")}
              onChange={(e) => {
                const lines = e.target.value.split("\n");
                setPresentBattleSteps(lines);
              }}
            />
          </div>

          <div className="editing-field-group">
            <label className="editing-label">
              <span>📜</span> Add Lore Story:
            </label>
            <textarea
              className="editing-lore-story-text-area"
              rows={3}
              onChange={handlePresentLoreStoryInputChange}
              placeholder="Record your noble motivations in the chronicler's ledger..."
              value={presentLoreStory}
            />
          </div>

          <button
            className="quest-item-done-editing-btn"
            onClick={() => {
              setIsUpdating(false);
              const updatedQuest: Quest = {
                id: quest.id,
                title: quest.title,
                campaign: presentCampaign,
                threatTier: presentThreatTier,
                battleSteps: presentBattleSteps,
                loreStory: presentLoreStory,
                completed: quest.completed,
              }
              onUpdate(updatedQuest);
            }}
          >
            DONE
          </button>
        </div>
      </div>
    );
  else
    return (
      <div className="quest-item-right-container">
        <h3 className="right-panel-title">{quest.title.toUpperCase()}</h3>
        <div className="quest-item-all-details">
          <div className="right-panel-badges">
            {quest.campaign && (
              <span className="badge-campaign">
                ⛺ Campaign: [ {quest.campaign} ]
              </span>
            )}
            {quest.threatTier && (
              <span className="badge-threat-tier">
                <span>⚔️</span> Threat Tier: {quest.threatTier}
              </span>
            )}
          </div>

          {quest.loreStory !== "" && (
            <div className="right-panel-lore-container">
              <h4 className="right-panel-lore-subtitle">Chronicler's Desk</h4>
              <p className="lore-text">{quest.loreStory}</p>
            </div>
          )}

          {quest.battleSteps.length > 0 && (
            <div className="right-panel-battle-steps-container">
              <div className="right-panel-battle-steps-subtitle">
                Guild Directives
              </div>
              <div className="steps-list">
                {quest.battleSteps.map((battleStep, index) => (
                  <div key={index} className="battle-step-row">
                    <span className="battle-step-number">0{index + 1}. </span>
                    <span className="battle-step-text">{battleStep}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className="quest-item-edit-btn"
            onClick={() => setIsUpdating(true)}
          >
            EDIT
          </button>

          <button
            className="track-on-timer-btn"
            onClick={() => {
              const normalizedDifficulty = quest.threatTier.toLowerCase();
              const difficulty: QuestDifficulty = normalizedDifficulty === "trivial" || normalizedDifficulty === "perilous"
                ? normalizedDifficulty
                : "guarded";
              handleToggleQuest(quest.id, quest.title, difficulty);
              if (isActive) {
                localStorage.removeItem("active-quest-title");
                localStorage.removeItem("active-quest-difficulty");
              } else {
                localStorage.setItem("active-quest-title", quest.title);
                localStorage.setItem("active-quest-difficulty", difficulty);
              }
            }}
          >
            {isActive ? "Abandon Quest" : "Equip Quest"}
          </button>
        </div>
      </div>
    );
}
