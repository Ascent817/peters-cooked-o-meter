import { useState } from 'react';
import "./Main.css"

interface InputsProps {
  id: number;
  setClassList: React.Dispatch<React.SetStateAction<number[]>>;
  setRatingList: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function TrashButton ({id, setClassList, setRatingList}: InputsProps) {
  function deleteInput () {
    setClassList((prev: number[]) => prev.filter((item) => item !== id));
    setRatingList((prev: number[]) => prev.filter((item) => item !== id));
  }

  return (
    <div>
      <button className="delete-button" onClick = {deleteInput}> Delete 🗑️</button>
    </div>
  )
}