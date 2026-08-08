import { ImageUploader } from './ImageUploader'
import './GameMenu.css'

export function GameMenu() {
  return (
    <div className="game-menu-container">
      <div className="game-menu-bar">
        <div className="game-title">
          <div className="New Game"></div>
          <div className="Options"></div>
          <div className="Settings"></div>
          <ImageUploader />
        </div>
      </div>
    </div>
  )
}