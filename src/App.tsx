import { useEffect, useState } from "react";
import { Timer } from "./components/Timer";
import { TaskList } from "./components/TaskList";
import { Settings } from "./components/Settings";
import { Statistics } from "./components/Statistics";
import { Profile } from "./components/Profile";

import "./App.css";
import "./index.css";

export function App() {
  const [activeTab, setActiveTab] = useState<"timer" | "taskList" | "statistics" | "settings" | "profile">("timer");
  const [userName, setUserName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  useEffect(() => {
    localStorage.setItem("flowstate_userName", userName);
  }, [userName]);

  const updateUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="welcome-message">Welcome back {userName} </h1>
        <h2 className="welcome-message">Ready to Focus?</h2>
        <div className="tabs">
          <button
            onClick={() => setActiveTab("timer")}
            className={activeTab === "timer" ? "active" : ""}
          >
            Timer
          </button>
          <button
            onClick={() => setActiveTab("taskList")}
            className={activeTab === "taskList" ? "active" : ""}
          >
            Task List
          </button>
          <button
            onClick={() => setActiveTab("statistics")}
            className={activeTab === "statistics" ? "active" : ""}
          >
            Statistics
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={activeTab === "settings" ? "active" : ""}
          >
            Settings
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={activeTab === "profile" ? "active" : ""}
          >
            Profile
          </button>
        </div>
        <div className="name-container">
          <input 
          className="name-input-box"
          placeholder="Type Your Name Here "
          onChange={updateUserName}
          />
          <button>Enter</button>
        </div>
      </div>
      <div className="content">
        {activeTab === "timer" && <Timer />}
        {activeTab === "taskList" && <TaskList />}
        {activeTab === "statistics" && <Statistics />}
        {activeTab === "settings" && <Settings />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
}

export default App;
