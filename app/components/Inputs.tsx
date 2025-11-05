import { useState } from 'react';
import TrashButton from './TrashButton';

export default function Inputs ({id, setClassList, setTotalScore, setShowTotalScore}: any) {
  const [localValue, setLocalValue] = useState(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    setTotalScore((prev: number) => prev - localValue + newValue);
    setLocalValue(newValue);
    setShowTotalScore(false)
  }

  return (
    <div className="class-box">
      <input
        placeholder = "Class"
        type = "number"
        onChange = {handleChange}
      />

      <input
        placeholder = "Professor"
      />

      <TrashButton id = {id} setClassList = {setClassList}/>
    </div>
  )
}