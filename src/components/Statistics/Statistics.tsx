import { useCallback, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import type { Session } from "../../App";
import "./Statistics.css";

interface StatisticsProps {
  sessionLog: Session[];
  setShowStatistics: React.Dispatch<React.SetStateAction<boolean>>;
  showStatistics: boolean;
}

export function Statistics({ sessionLog, setShowStatistics }: StatisticsProps) {
  const [userGoal, setUserGoal] = useState<number>(() => {
    const savedUserGoal = localStorage.getItem('user-goal');
    return savedUserGoal ? +savedUserGoal : 25;
  });

  const stats = useMemo(() => {
    const focusSessionsToday = sessionLog.filter(
      (session) =>
        session.type === "focus" &&
        new Date(session.timestamp).toDateString() ===
          new Date().toDateString(),
    );
    const totalFocusSecondsToday = focusSessionsToday.reduce(
      (total, session) => total + session.duration,
      0,
    );
    const totalFocusSessionsToday = focusSessionsToday.length;
    const totalFocusMinutesToday = totalFocusSecondsToday / 60;

    const focusSessionsAllTime = sessionLog.filter(
      (session) => session.type === "focus",
    );
    const totalFocusMinutesAllTime = focusSessionsAllTime.reduce(
      (total, session) => total + session.duration,
      0,
    );
    const totalFocusSessionsAllTime = focusSessionsAllTime.length;

    return {
      totalFocusMinutesToday: totalFocusMinutesToday,
      totalFocusSecondsToday: totalFocusSecondsToday,
      totalFocusSessionsToday: totalFocusSessionsToday,
      totalFocusMinutesAllTime: totalFocusMinutesAllTime,
      totalFocusSessionsAllTime: totalFocusSessionsAllTime,
    };
  }, [sessionLog]);

  const percentageCompleted =
    userGoal > 0
      ? Math.min((stats.totalFocusMinutesToday / userGoal) * 100, 100)
      : 0;

  const handleUserGoalInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newUserGoal = +(e.target.value);
      setUserGoal(newUserGoal);
      localStorage.setItem('user-goal', String(newUserGoal));
    },
    [],
  );

  const chartData = useMemo(() => {
    interface ChartDaySlot {
      dayLabel: string;
      dateString: string;
      minutes: number;
    }

    const days: ChartDaySlot[] = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      days.push({
        dayLabel: d.toLocaleDateString([], { weekday: "short" }),
        dateString: d.toDateString(),
        minutes: 0,
      });
    }

    sessionLog.forEach((session) => {
      if (session.type !== "focus") return;
      const sessionDateStr = new Date(session.timestamp).toDateString();
      const match = days.find((day) => day.dateString === sessionDateStr);
      if (match) {
        match.minutes += Math.round(session.duration / 60);
      }
    });

    return days.reverse();
  }, [sessionLog]);

  const currentStreak = useMemo(() => {
    const datesOfFocus = new Set(
      sessionLog
        .filter((session) => session.type === "focus")
        .map((session) => new Date(session.timestamp).toDateString()),
    );
    const today = new Date();
    const todayString = today.toDateString();

    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    if (!datesOfFocus.has(todayString) && !datesOfFocus.has(yesterdayString)) {
      return 0;
    }

    const startPoint = datesOfFocus.has(todayString) ? today : yesterday;
    let streakCounter = 0;

    while (datesOfFocus.has(startPoint.toDateString())) {
      streakCounter++;
      startPoint.setDate(startPoint.getDate() - 1);
    }

    return streakCounter;
  }, [sessionLog]);

  return (
    <div className="stats-page-wrapper">
      <h2>Your Performance Dashboard</h2>

      <button
        className="back-button statistics"
        onClick={() => setShowStatistics(false)}
      >
        ← Back to Menu
      </button>

      <div className="stat-cards">
        <span className="stat-card-item">
          <span style={{ marginRight: "8px" }}>🎯</span>Focus Hours Today:{" "}
          <strong>{Math.round(stats.totalFocusMinutesToday / 60)}</strong>
        </span>
        <span className="stat-card-item">
          <span style={{ marginRight: "8px" }}>🏆</span> Total Focus Hours:{" "}
          <strong>{Math.round(stats.totalFocusMinutesAllTime / 60)}</strong>
        </span>
        <span className="stat-card-item">
          <span style={{ marginRight: "8px" }}>🔢</span> Study Sessions Today:{" "}
          <strong>{Math.round(stats.totalFocusSessionsToday)}</strong>
        </span>
        <span className="stat-card-item">
          <span style={{ marginRight: "8px" }}>⏳</span> Total Study Sessions:{" "}
          <strong>{stats.totalFocusSessionsAllTime}</strong>
        </span>
      </div>

      <div className="summary-number">
        🔥 {currentStreak} {currentStreak === 1 ? "Day Streak" : "Days Streak"}
      </div>

      <div className="session-log-container">
        <h2>The Annal of Aeons</h2>
        {sessionLog
          .slice(-5)
          .reverse()
          .map((session) => (
            <div
              key={session.id}
              className={`session-log-card ${session.type}`}
            >
              <span className="session-tag">
                {session.type === "focus" ? "🔥 Focus" : "☕ Break"}
              </span>
              <span className="session-duration">
                {session.duration / 60} mins
              </span>
              <span className="session-time">
                {new Date(session.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="session-time-range">
                {new Date(
                  session.timestamp - session.duration * 1000,
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {" - "}
                {new Date(session.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))}
      </div>

      <div className="dashboard-card">
        <div className="circle-size-container">
          <CircularProgressbar
            value={percentageCompleted}
            text={`${Math.round(percentageCompleted)}%`}
            styles={buildStyles({
              pathColor: "#ff4500",
              textColor: "#ffffff",
              trailColor: "#222222",
            })}
          />
        </div>

        <p className="subtitle-text">
          You spent {Math.round(stats.totalFocusMinutesToday)} minutes focused
          today.
        </p>

        <input
          type="number"
          min="1"
          className="user-goal-input"
          placeholder="Set daily focus goal (e.g., 240 mins)"
          onChange={handleUserGoalInputChange}
        />
      </div>

      <div className="dashboard-card chart-height-fix">
        <h3>7-Day Distribution</h3>

        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={chartData}>
            <XAxis dataKey="dayLabel" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Tooltip />
            <Bar dataKey="minutes" fill="#ff4500" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
