import './TaskList.css'
import { useState } from 'react';
import { getRandomQuote, type Quote } from "../Timer/quotes";

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList ({ setShowTaskList }: TaskListProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());

  return (
    <div className="task-list-container">
      <div className="fixed-button-container">
        <button className="back-button" onClick={() => setShowTaskList(false)}>← Back to Menu</button>
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
        />
        <button className="add-task-button">Add Quest</button>
      </div>
      <div className="task-list-filters">
        <button>📋 All</button>
        <button>⚔️ Active</button>
        <button>✅ Completed</button>
        <button>🏆 Priority</button>
      </div>
    </div>
  )
}
