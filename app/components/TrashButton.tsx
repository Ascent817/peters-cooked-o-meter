import { useState } from 'react';
import "./Main.css"

export default function TrashButton ({id, setClassList}: any) {
  function deleteInput () {
    setClassList((prev: number[]) => prev.filter((item) => item !== id));
  }

  return (
    <div>
      <button className="delete-button" onClick = {deleteInput}> Delete 🗑️</button>
    </div>
  )
}