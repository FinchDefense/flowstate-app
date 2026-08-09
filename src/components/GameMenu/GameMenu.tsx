import { ImageUploader } from "./ImageUploader";
import "./GameMenu.css";

export function GameMenu() {
  return (
    <div className="game-menu-container">
      <div className="game-menu-sidebar">
        <div className="game-title">AGE QUOD AGIS</div>
        <div className="game-title-motivation">Own the hour, or the hour owns you.</div>
        <div className="game-menu-nav">
          <button className="menu-btn">ENTER THE ZONE</button>
          <button className="menu-btn">CONTINUE QUEST</button>
          <button className="menu-btn">SYSTEM OPTIONS</button>
        </div>        
        <div className="menu-footer-tool">
          <ImageUploader />
        </div>
      </div>
    </div>
  );
}
