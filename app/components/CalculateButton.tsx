interface CalculateButtonProps {
  showScore: boolean;
  ratingList: number[];
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;

  canCalculate: boolean;
}

import { Rating } from "../types/teacher";
import { useState } from "react";
import "./Main.css"

export default function CalculateButton ({showScore, ratingList, setShowScore, canCalculate}: CalculateButtonProps) {
  const [average, setAverage] = useState(0);

  function calculateRatings() {
    setShowScore(true);
    if (!canCalculate) return;

    const sum = ratingList.reduce((acc, rating) => acc + rating, 0);
    console.log(ratingList)
    setAverage(Math.round(sum / ratingList.length));
  }

  return (
    <div>
      {showScore && <h1> {average} </h1>}
      <button 
        type="button" 
        className="calc-button"
        onClick = {() => calculateRatings()}
      >
        Calculate
      </button>

    </div>
  )
}