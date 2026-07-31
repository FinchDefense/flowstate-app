import { useState } from 'react';
import { Timer } from './components/Timer';
import { TaskList } from './components/TaskList';
import './index.css';

export function App() {
  const [activeTab, setActiveTab] = useState<'timer' | 'taskList' | 'statistics' | 'settings' | 'profile'>('timer');

  return (
    <div className="app-container">
      <div className="header">
        <div className="tabs">
          <button onClick={() => setActiveTab('timer')} className={activeTab === 'timer' ? 'active' : ''}>Timer</button>
          <button onClick={() => setActiveTab('taskList')} className={activeTab === 'taskList' ? 'active' : ''}>Task List</button>
          <button onClick={() => setActiveTab('statistics')} className={activeTab === 'statistics' ? 'active' : ''}>Statistics</button>
          <button onClick={() => setActiveTab('settings')} className={activeTab === 'settings' ? 'active' : ''}>Settings</button>
          <button onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'active' : ''}>Profile</button>
        </div>
      </div>
      <div className="content">
        {activeTab === 'timer' && <Timer />}
        {activeTab === 'taskList' && <TaskList />}
        {activeTab === 'statistics' && <div>Statistics Content</div>}
        {activeTab === 'settings' && <div>Settings Content</div>}
        {activeTab === 'profile' && <div>Profile Content</div>}
      </div>
    </div>
  );
}

export default App;