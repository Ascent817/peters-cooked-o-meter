import "./Main.css"
import CalculateButton from "./CalculateButton"
import AddButton from "./AddButton"

export default function Main() {
  return (
    <div>
      <h1 id = "title"> Peter's Cooked-O Meter </h1>
      <AddButton />
      <CalculateButton />
    </div>
  );
}