import { useState } from 'react';

export default function CalculateButton ({totalScore, showTotalScore, setShowTotalScore}: any) {

  return (
    <div>
      <button 
        type="button" 
        className="calc-button"
        onClick = {() => setShowTotalScore(true)}
      >
        Calculate
      </button>

      {showTotalScore && <p> {totalScore} </p>}
    </div>
  )
}