interface ScoreProps {
  showScore: boolean;
  average: number;
}
import "./Main.css"

export default function Score ({showScore, average}: ScoreProps) {
  return (
    <div>
      {showScore && <h1> {average} </h1>}
    </div>
  )
}