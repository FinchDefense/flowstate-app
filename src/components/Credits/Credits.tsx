import "./Credits.css";

interface CreditsProps {
  setShowCredits: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Credits({ setShowCredits }: CreditsProps) {
  return (
    <div className="credits-component-container">
      <button
        className="back-button credits"
        onClick={() => setShowCredits(false)}
      >
        ← Back to Menu
      </button>

      <div className="credits-container">
        <div className="architect-credits">
          <p>CREATED & DEVELOPED BY</p> <h3>Jerry Yang</h3>
        </div>

        <div className="visual-themes-credits">
          <div className="row-wrapper">
            <p>UI ARCHITECTURE INSPIRATION </p>{" "}
            <h3>The Witcher 3: Wild Hunt (CD Projekt Red)</h3>
          </div>
          <div className="row-wrapper">
            <p>ATMOSPHERE & AESTHETIC</p>{" "}
            <h3>The Dark Souls Series (FromSoftware)</h3>
          </div>
          <div className="row-wrapper">
            <p>CORE WEB FOUNDATIONS</p> <h3>The Odin Project</h3>
          </div>
          <div className="row-wrapper">
            <p>REACT ARCHITECTURE</p>
            <h3>SuperSimpleDev</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
