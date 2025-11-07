type RatingItem = { inputId: number, rating: number };
interface CalculateButtonProps {
  showScore: boolean;
  ratingList: RatingItem[];
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;

  canCalculate: boolean;
}
import { useState } from "react";
import "./Main.css"
import Score from "./Score";

export default function CalculateButton ({showScore, ratingList, setShowScore, canCalculate}: CalculateButtonProps) {
  const [average, setAverage] = useState(0);

  function calculateRatings() {
    setShowScore(true);
    if (!canCalculate) return;

    const sum = ratingList.reduce((acc, item) => acc + item.rating, 0) * (ratingList.length * 0.1) - (6 - ratingList.length);
    console.log(ratingList)
    setAverage(Math.round(sum / ratingList.length));
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

      <Score showScore = {showScore} average = {average} />
    </div>
  )
}