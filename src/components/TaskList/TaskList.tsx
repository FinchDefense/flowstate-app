import './TaskList.css'

export function TaskList() {

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
