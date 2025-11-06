interface CalculateButtonProps {
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
}

import { useState } from 'react';
import "./Main.css"

export default function CalculateButton ({setShowScore}: CalculateButtonProps) {

  return (
    <div>
      <button 
        type="button" 
        className="calc-button"
        onClick = {() => setShowScore(true)}
      >
        Calculate
      </button>

    </div>
  )
}