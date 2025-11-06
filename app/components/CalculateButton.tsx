import { useState } from 'react';
import "./Main.css"

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

      {showTotalScore && <div className='rating-box'> {totalScore} </div>}
    </div>
  )
}