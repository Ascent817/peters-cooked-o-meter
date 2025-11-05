import "./Main.css"
import CalculateButton from "./CalculateButton"
import AddButton from "./AddButton"

export default function Main() {
  return (
    <div className="fullscreen-background">
      <h1 id = "title"> Peter's Cooked-O Meter</h1>
      <div className="button-row">
        <AddButton />
      </div>
    </div>
  );
}