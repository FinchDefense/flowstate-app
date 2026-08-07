import { useState } from "react";
import { FocusMode } from "./components/Timer/FocusMode.tsx";
import { useTimer } from "./components/Timer/useTimer.ts";
import { Timer } from "./components/Timer/Timer.tsx";
import { TaskList } from "./components/TaskList/TaskList.tsx";
import { Settings } from "./components/Settings";
import { Statistics } from "./components/Statistics";
import { Profile } from "./components/Profile";

import "./App.css";
import "./index.css";

export function App() {
  const [activeTab, setActiveTab] = useState<"timer" | "taskList" | "statistics" | "settings" | "profile">("timer");
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  const [inputName, setInputName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  const timer = useTimer();
  if (inFocusMode) {
      return <FocusMode
        time={timer.time}
        formatTime={timer.formatTime}
        numPomos={timer.numPomos}
        setInFocusMode={setInFocusMode}
       />
    }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  }

  const handleDisplayChange = () => {
    if (inputName.trim() === "") {
      alert("Please enter a name");
      return;
    }

    setDisplayName(inputName);
    localStorage.setItem('flowstate_userName', inputName);
    setInputName('');
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="welcome-message">🌀 Welcome back {displayName || "Guest"} </h1>
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
      </div>
      <div className="content">
        {activeTab === "timer" && <Timer setInFocusMode={setInFocusMode} />}
        {activeTab === "taskList" && <TaskList />}
        {activeTab === "statistics" && <Statistics />}
        {activeTab === "settings" && <Settings />}
        {activeTab === "profile" && <Profile inputName={inputName} handleInputChange={handleInputChange} handleDisplayChange={handleDisplayChange} />}
      </div>
    </div>
  );
}

export default App;
