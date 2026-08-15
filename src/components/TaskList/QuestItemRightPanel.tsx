import { useState } from "react";
import { type CampaignEvents, type Quest, type ThreatTier } from "./TaskList";

interface QuestItemRightPanelProps {
  quest: Quest;
}

export function QuestItemRightPanel({ quest }: QuestItemRightPanelProps) {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [presentCampaign, setPresentCampaign] = useState<CampaignEvents>("");
  const [presentThreatTier, setPresentThreatTier] = useState<ThreatTier>("");
  const [presentLoreStory, setPresentLoreStory] = useState<string>("");
  const [presentBattleStep, setPresentBattleStep] = useState<string>("");
  const [presentBattleSteps, setPresentBattleSteps] = useState<string[]>([]);

  const handlePresentLoreStoryInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setPresentLoreStory(e.target.value);
  };

  const handlePresentBattleStepInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPresentBattleStep(e.target.value);
  }

  if (isUpdating)
    return (
      <div className="quest-item-right-container editing-mode">
        <h3 className="right-panel-title editing-mode">
          {quest.title.toUpperCase()}
        </h3>
        <div className="quest-item-all-details editing-mode">
          <div className="editing-campaign-selector">
            <span>🛡️</span> <p>Assign Campaign: </p>
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
                  onClick={() => setPresentCampaign("Guild Contracts (Work)")}
                >
                  [ Guild Contracts (Work)]
                </a>
                <a
                  href="#"
                  onClick={() =>
                    setPresentCampaign("Physical Prowess (Fitness)")
                  }
                >
                  [ Physical Prowess (Fitness)]
                </a>
                <a
                  href="#"
                  onClick={() => setPresentCampaign("Ancient Runes (School)")}
                >
                  [ Ancient Runes (School)]
                </a>
                <a
                  href="#"
                  onClick={() => setPresentCampaign("Hearth & Home (Chores)")}
                >
                  [ Hearth & Home (Chores)]
                </a>
                <a
                  href="#"
                  onClick={() =>
                    setPresentCampaign("The Royal Ledger (Finances)")
                  }
                >
                  [ The Royal Ledger (Finances)]
                </a>
              </div>
            </div>
          </div>

          <div className="editing-threat-tier-selector">
            <span>🔴</span> <p>Threat Tier: </p>
            <div className="editing-threat-tier-buttons-container">
              <button
                className="editing-threat-tiers"
                onClick={() => setPresentThreatTier("Trivial")}
              >
                Trivial
              </button>
              <button
                className="editing-threat-tiers"
                onClick={() => setPresentThreatTier("Guarded")}
              >
                Guarded
              </button>
              <button
                className="editing-threat-tiers"
                onClick={() => setPresentThreatTier("Perilous")}
              >
                Perilous
              </button>
            </div>
          </div>

          <div className="editing-lore-story-info">
            <span>📜</span> <p>Add Lore Story: </p>
            <textarea
              className="editing-lore-story-text-area"
              rows={3}
              onChange={handlePresentLoreStoryInputChange}
              placeholder="Record your noble motivations in the chronicler's ledger..."
              value={presentLoreStory}
            />
          </div>

          <div className="editing-battle-steps-info">
            <span>⚔️</span> <p>Battle Steps: </p>
            <input
              placeholder="Map out your tactical steps..."
              onChange={handlePresentBattleStepInputChange}
              value={presentBattleStep}
            />
            <button
              onClick={() => {
                setPresentBattleSteps([
                  ...presentBattleSteps,
                  presentBattleStep,
                ]);
                setPresentBattleStep("");
              }}
            >
              +
            </button>
          </div>

          <button className="quest-item-done-editing-btn">DONE</button>
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
        </div>
      </div>
    );
}
