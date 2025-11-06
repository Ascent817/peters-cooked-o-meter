"use client";
import "./Main.css"
import CalculateButton from "./CalculateButton";
import Inputs from "./Inputs";
import { useState, useEffect, use } from 'react';
import { Rating } from "../types/teacher";

export default function AddButton () {
  type RatingItem = { inputId: number, rating: number };
  const [classList, setClassList] = useState<number[]>([]);
  const [count, setCount] = useState(1);

  const [canCalculate, setCanCalculate] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [ratingList, setRatingList] = useState<RatingItem[]>([]);

  function addInput (count: number) {
    setClassList((prev) => [...prev, count]);
    setCount(count + 1)
  }

  return (
    <div>
      <div className="button-row">
        <button className="add-button" onClick = {() => addInput(count)} > Add Class </button>
        <CalculateButton showScore = {showScore} ratingList = {ratingList} setShowScore = {setShowScore} canCalculate = {canCalculate}/>
      </div>

      <div className="class-container">
        {classList.map((id) => {
          return <Inputs key={id} id = {id} setClassList = {setClassList} setShowScore = {setShowScore} setRatingList = {setRatingList} setCanCalculate = {setCanCalculate}/>;
        })}
      </div>
    </div>
  )
}