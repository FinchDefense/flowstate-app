import './TaskList.css'
import { useState } from 'react';
import { getRandomQuote, type Quote } from "../Timer/quotes";

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList ({ setShowTaskList, setIsGameMenuPage }: TaskListProps) {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());

  return (
    <div className="task-list-container">
      <div className="fixed-button-container">
        <button className="back-button">← Back to Menu</button>
        <div className="task-list-quote-text">"{quote.text}"</div>
        <div className="task-list-quote-author">- {quote.author}</div>
      </div>

      <h1>📜 QUEST LOG</h1>
      <div className="task-row">
        <input
        placeholder="Add a new task..."
        className="task-input"
        />
        <button className="add-task-button">Add</button>
      </div>
    </div>
  )
}
