export type QuestDifficulty = "trivial" | "guarded" | "perilous";

export function usePlayerStats(
  currentLevel: number,
  currentXp: number,
  setCurrentLevel: React.Dispatch<React.SetStateAction<number>>,
  setCurrentXp: React.Dispatch<React.SetStateAction<number>>,
) {
  const getXpRequiredForLevel = (level: number): number => {
    const baseLineXp = 12; 
    const scalingExponent = 1.2; 
    return Math.round(baseLineXp * Math.pow(level, scalingExponent));
  };

  const handleUserGainXp = (
    minutesTracked: number,
    difficulty: QuestDifficulty,
  ) => {
    const baseRate = 1;
    const multipliers: Record<QuestDifficulty, number> = {
      trivial: 0.5,
      guarded: 1,
      perilous: 2,
    };
    const reward = Math.max(
      1,
      Math.round(
        baseRate * Math.max(0, minutesTracked) * multipliers[difficulty],
      ),
    );

    let newXp = currentXp + reward;
    let newLevel = currentLevel;

    while (true) {
      const nextLevelThreshold = getXpRequiredForLevel(newLevel);
      if (newXp >= nextLevelThreshold) {
        newXp -= nextLevelThreshold;
        newLevel++;
      } else {
        break;
      }
    }

    setCurrentLevel(newLevel);
    setCurrentXp(newXp);

    return {
      xpGained: reward,
      leveledUp: newLevel > currentLevel,
      finalLevel: newLevel,
    };
  };

  return {
    handleUserGainXp,
    xpNeededForNextLevel: getXpRequiredForLevel(currentLevel),
  };
}
