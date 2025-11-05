import { useState } from 'react';

export default function Inputs () {
  const [totalScore, setTotalScore] = useState(0);
  const [numClasses, setNumClasses] = useState(0);

  return (
    <div className="class-box">
      <input
        placeholder = "Class"
        type = "number"
        onChange = {() => setNumClasses}
      />
      <input
        placeholder = "Professor"
      />
    </div>
  )
}