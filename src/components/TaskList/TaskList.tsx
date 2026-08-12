import "./TaskList.css";
import { useState } from "react";
import { getRandomQuote, type Quote } from "../Timer/quotes";

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList({ setShowTaskList }: TaskListProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());
  const [questName, setQuestName] = useState<string>("");

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

      <div className="quest-info-container">
        <div className="quest-notebook"></div>
        <div className="campaign-selector">
          <span>🛡️</span> <p>Assign Campaign: </p>
          <div className="dropdown">
            <button className="dropbtn">[ Scriptorium (Work) ▼ ]</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
            </div>
          </div>
        </div>
      </div>

      <div className="task-list-filters">
        <button>📋 All</button>
        <button>⚔️ Active</button>
        <button>✅ Completed</button>
        <button>🏆 Priority</button>
      </div>
    </div>
  );
}
