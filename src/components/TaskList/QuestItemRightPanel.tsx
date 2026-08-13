import { type Quest } from "./TaskList";

interface QuestItemRightPanelProps {
  quest: Quest;
}

export function QuestItemRightPanel({ quest }: QuestItemRightPanelProps) {
  return (
    <div className="quest-item-right-container">
      <h3 className="right-panel-title">{quest.title.toUpperCase()}</h3>
      <div className="quest-item-all-details">
        <div className="right-panel-badges">
          {quest.campaign && <span className="badge-campaign">⛺ {quest.campaign}</span>}
          {quest.threatTier && <span className="badge-threat-tier">{quest.threatTier}</span>}
        </div>

        {quest.loreStory !== '' && (
          <div className="right-panel-lore-container">
            <h4 className="right-panel-lore-subtitle">Chronicler's Desk</h4>
            <p className="lore-text">{quest.loreStory}</p>
          </div>
        )}

        {quest.battleSteps.length > 0 && (
          <div className="right-panel-battle-steps-container">
            <div className="right-panel-battle-steps-subtitle">Tactical Battle Steps</div>
            <div className="steps-list">
              {quest.battleSteps.map((index, battleStep) => (
                <div key={index} className="battle-step-row">
                  <span className="battle-step-number">0{index+1}</span>
                  <span className="battle-step-text">{battleStep}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}