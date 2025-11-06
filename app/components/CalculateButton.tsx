interface CalculateButtonProps {
  showScore: boolean;
  ratingList: Rating[];
  totalRatings: number;
  setTotalRatings: React.Dispatch<React.SetStateAction<number>>;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;

  canCalculate: boolean;
}

import { Rating } from "../types/teacher";
import "./Main.css"

export default function CalculateButton ({showScore, ratingList, totalRatings, setTotalRatings, setShowScore, canCalculate}: CalculateButtonProps) {
  function calculateRatings() {
    if (!canCalculate) return;

    console.log(ratingList[0].difficultyRating);
    //const total = allRatings.reduce((sum, r) => sum + r.node!.difficultyRating, 0);
    //const average = total / allRatings.length;

    //setTotalRatings(average);
    setShowScore(true);

    //console.log("allRatings:", allRatings);
    //console.log("Average difficulty:", average);
  }

  return (
    <div>
      <button 
        type="button" 
        className="calc-button"
        onClick = {() => calculateRatings()}
      >
        Calculate
      </button>

    {showScore && <h1>{totalRatings}</h1>}
    </div>
  )
}