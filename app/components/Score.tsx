/* eslint-disable @next/next/no-img-element */
import "./Main.css"

interface ScoreProps {
  showScore: boolean;
  average: number;
}

export default function Score({ showScore, average }: ScoreProps) {

  console.log(average);

  return (
    <div>
      {showScore && <div> {average} </div>}
      <div className="meter-box">
        {average == -Infinity && <img src="/Peter2.svg" alt="Peter"></img>}
        {average >= -5 && average <= 1 && showScore && <img src="/Peter1.svg" alt="Peter"></img>}
        {average == 2 && showScore && <img src="/Peter1.svg" alt="Peter"></img>}
        {average == 3 && showScore && <img src="/Peter2.svg" alt="Peter"></img>}
        {average == 4 && showScore && <img src="/Peter3.svg" alt="Peter"></img>}
        {average >= 5 && showScore && <img src="/Peter4.svg" alt="Peter"></img>}
      </div>
      {average >= -5 && average < 2 && showScore && <div className="cooked-img"><img src="/Cooked1.svg" alt="Peter" />1/5 This will be a well seasoned quarter!</div>}
      {average == 2 && showScore && <div className="cooked-img"><img src="/Cooked2.svg" alt="Peter" />2/5 This quarter will be a well-done steak!</div>}
      {average == 3 && showScore && <div className="cooked-img"><img src="/Cooked3.svg" alt="Peter" />3/5 It&apos;s getting kinda spicy...</div>}
      {average == 4 && showScore && <div className="cooked-img"><img src="/Cooked4.svg" alt="Peter" />4/5 You are cooked mate!</div>}
      {average >= 5 && showScore && <div className="cooked-img"><img src="/Cooked5.svg" alt="Peter" />5/5 Cooked. Burnt. Toasted...</div>}
    </div>
  )
}