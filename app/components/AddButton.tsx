"use client";
import Inputs from "./Inputs"
import { useState } from 'react';

export default function AddButton () {
  const [classList, setClassList] = useState<number[]>([]);
  const [count, setCount] = useState(1);

  function addInput (count: number) {
    setClassList((prev) => [...prev, count]);
    setCount(count + 1)
  }

  return (
    <div>
      <button className="add-button" onClick = {() => addInput(count)} > Add Class </button>

      {classList.map((id) => {
        return <Inputs key={id} />;
      })}
    </div>
  )
}