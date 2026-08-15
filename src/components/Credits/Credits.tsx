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
          <p>Menu Architecture inspired by: The Witcher 3: Wild Hunt (CD Projekt Red).</p>
          <p>Atmosphere & Intro inspired by: The Dark Souls Series (FromSoftware).</p>
        </div>

        <div className="special-thanks-credits">
          <p>To the Dev Community: "Grateful to the open-source creators and documentation writers whose guides illuminated the path."</p>
        </div>
      </div>
    </div>
  );
}
