interface CreditsProps {
  setShowCredits: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Credits({ setShowCredits }: CreditsProps) {
  return (
    <button className="back-button credits" onClick={() => setShowCredits(false)}>
      ← Back to Menu
    </button>
  );
}
