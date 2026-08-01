import './Profile.css';

interface ProfileProps {
  inputName: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDisplayChange: () => void;
}

export function Profile({ inputName, handleInputChange, handleDisplayChange }: ProfileProps) {
  return (
    <div className="name-container">
      <input 
      className="name-input-box"
      placeholder="Type Your Name Here "
      value={inputName}
      onChange={handleInputChange}
      />
      <button
        onClick={handleDisplayChange}>
        Enter
      </button>
    </div>
  )
}
