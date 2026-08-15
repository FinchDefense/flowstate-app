import { GameMenu } from "./components/GameMenu/GameMenu.tsx";
import { useTimer } from "./components/Timer/useTimer.ts";

import "./App.css";

export function App() {
  const timer = useTimer(1500);

  return (
    <div className="app-container">
      <GameMenu
        timer={timer}
        setInFocusMode={() => undefined}
        setIsGameMenuPage={() => undefined}
      />
    </div>
  );
}

export default App;
