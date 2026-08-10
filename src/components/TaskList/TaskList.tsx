import './TaskList.css'

interface TaskListProps {
  setShowTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameMenuPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskList ({ setShowTaskList, setIsGameMenuPage }: TaskListProps) {

  return (
    <div className="task-list-container">
      <h1>📝 Task Tracker</h1>
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
