import { useState } from 'react';
import './Profile.css';

interface ProfileProps {
  inputName: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDisplayChange: () => void;
}

export function Profile({ inputName, handleInputChange, handleDisplayChange }: ProfileProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  return (
    <form className="name-container" onSubmit={(event) => {
      event.preventDefault();
      handleDisplayChange();
      setIsSaved(true);
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }}>
      <label className="name-field-label" htmlFor="profile-name-input">Adventurer name</label>
      <div className="name-field-controls">
        <input
          id="profile-name-input"
          className="name-input-box"
          placeholder="Enter your name"
          maxLength={32}
          value={inputName}
          onChange={handleInputChange}
        />
        <button type="submit">
          {isSaved ? <span className="saved-message">Saved</span> : "Save name"}
        </button>
      </div>
    </form>
  )
}
