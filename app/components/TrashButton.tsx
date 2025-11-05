import { useState } from 'react';

export default function TrashButton ({id, setClassList}: any) {
  function deleteInput () {
    setClassList((prev: number[]) => prev.filter((item) => item !== id));
  }

  return (
    <div>
      <button onClick = {deleteInput}> Trash Button </button>
    </div>
  )
}