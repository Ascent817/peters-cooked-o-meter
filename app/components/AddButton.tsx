"use client";
import CalculateButton from "./CalculateButton";
import Inputs from "./Inputs";
import { useState } from 'react';

export default function AddButton () {
  const [classList, setClassList] = useState<number[]>([]);
  const [count, setCount] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);

  function addInput (count: number) {
    setClassList((prev) => [...prev, count]);
    setCount(count + 1)
  }

  return (
    <div>
      <button className="add-button" onClick = {() => addInput(count)} > Add Class </button>

      {classList.map((id) => {
        return <Inputs key={id} id = {id} setClassList = {setClassList} setTotalScore = {setTotalScore} setShowTotalScore = {setShowTotalScore}/>;
      })}

      <CalculateButton totalScore = {totalScore} showTotalScore = {showTotalScore} setShowTotalScore = {setShowTotalScore}/>
    </div>
  )
}