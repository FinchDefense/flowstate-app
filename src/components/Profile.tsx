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
    <div className="name-container">
      <input 
      className="name-input-box"
      placeholder="Type Your Name Here "
      value={inputName}
      onChange={handleInputChange}
      />
      <button
        onClick={() => {
          handleDisplayChange();
          setIsSaved(true);
          setTimeout(() => {
            setIsSaved(false);
          }, 2000);
        }}>
        {isSaved ? <span style={{ color: "light gray", fontWeight: 300, fontStyle: 'italic'}}>Saved ✅</span>: "Enter"}
      </button>
    </div>
  )
}
