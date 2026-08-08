import { useState, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState<
    "timer" | "taskList" | "statistics" | "settings" | "profile"
  >("timer");
  const [inFocusMode, setInFocusMode] = useState<boolean>(false);
  const [isStartingPage, setIsStartingPage] = useState<boolean>(true);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const timer = useTimer(1500);
  const [displayName, setDisplayName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  const [inputName, setInputName] = useState<string>(() => {
    const currentName = localStorage.getItem("flowstate_userName");
    return currentName ? currentName : "";
  });

  useEffect(() => {
    if (!isStartingPage) return;

    const handleKeyDown = () => {
      setIsExiting(true);
      setTimeout(() => {
        setIsStartingPage(false);
      }, 1200);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStartingPage]);

  if (isStartingPage) {
    return (
      <div className={`welcome-message ${isExiting ? "exiting" : ""}`}>
        <div className="cinder-container left-edge">
          <div className="cinder c1"></div>
          <div className="cinder c2"></div>
          <div className="cinder c3"></div>
          <div className="cinder c4"></div>
          <div className="cinder c5"></div>
          <div className="cinder c6"></div>
        </div>

        <div className="main-intro">Welcome Back {displayName || "Guest"}</div>

        <div className="cinder-container right-edge">
          <div className="cinder c7"></div>
          <div className="cinder c8"></div>
          <div className="cinder c9"></div>
          <div className="cinder c10"></div>
          <div className="cinder c11"></div>
          <div className="cinder c12"></div>
        </div>

        <div className="sub-intro">Ready to Focus?</div>
        <div className="press-any-key">Press any Key</div>
      </div>
    );
  }

  if (inFocusMode) {
    return (
      <FocusMode
        time={timer.time}
        formatTime={timer.formatTime}
        numPomos={timer.numPomos}
        setInFocusMode={setInFocusMode}
        handleStartPause={timer.handleStartPause}
        isRunning={timer.isRunning}
        isOnBreak={timer.isOnBreak}
        breakTime={timer.breakTime}
      />
    );
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleDisplayChange = () => {
    if (inputName.trim() === "") {
      alert("Please enter a name");
      return;
    }

    setDisplayName(inputName);
    localStorage.setItem("flowstate_userName", inputName);
    setInputName("");
  };

  return (
    <div className="app-container">
      <div className="header">
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
        {activeTab === "timer" && (
          <Timer timer={timer} setInFocusMode={setInFocusMode} />
        )}
        {activeTab === "taskList" && <TaskList />}
        {activeTab === "statistics" && <Statistics />}
        {activeTab === "settings" && <Settings />}
        {activeTab === "profile" && (
          <Profile
            inputName={inputName}
            handleInputChange={handleInputChange}
            handleDisplayChange={handleDisplayChange}
          />
        )}
      </div>
    </div>
  );
}

export default App;
