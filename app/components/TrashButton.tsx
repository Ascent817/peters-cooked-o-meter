import "./Main.css"

type RatingItem = { inputId: number, rating: number };

interface InputsProps {
  id: number;
  setClassList: React.Dispatch<React.SetStateAction<number[]>>;
  setRatingList: React.Dispatch<React.SetStateAction<RatingItem[]>>;
}

export default function TrashButton({ id, setClassList, setRatingList }: InputsProps) {
  function deleteInput() {
    setClassList((prev: number[]) => prev.filter((item) => item !== id));
    setRatingList(prev => prev.filter(r => r.inputId !== id));
  }

  return (
    <div>
      <button className="delete-button" onClick={deleteInput}> Delete 🗑️</button>
    </div>
  )
}