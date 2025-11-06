import "./Main.css"
import CalculateButton from "./CalculateButton"
import AddButton from "./AddButton"

export default function Main() {
  return (
    <div className="fullscreen-background">
      <div className="title-box">
        <img src="/Title.svg" alt="Peter's Cooked-O Meter" className="title-svg" />
      </div>
      <div className="button-row">
        <AddButton />
      </div>
      <div className="meter-box">
        <img src="/Peter.svg" alt="Peter"></img>
      </div>
    </div>
  );
}