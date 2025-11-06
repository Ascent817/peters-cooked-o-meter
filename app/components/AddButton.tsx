"use client";
import "./Main.css"
import CalculateButton from "./CalculateButton";
import Inputs from "./Inputs";
import { useState } from 'react';

export default function AddButton () {
  const [classList, setClassList] = useState<number[]>([]);
  const [count, setCount] = useState(1);
  const [showScore, setShowScore] = useState(false);

  function addInput (count: number) {
    setClassList((prev) => [...prev, count]);
    setCount(count + 1)
  }

  return (
    <div>
      <div className="button-row">
        <button className="add-button" onClick = {() => addInput(count)} > Add Class </button>
        <CalculateButton setShowScore = {setShowScore}/>
      </div>
      <div className="class-container">
        {classList.map((id) => {
          return <Inputs key={id} id = {id} setClassList = {setClassList} showScore = {showScore}/>;
        })}
      </div>
    </div>
  )
}