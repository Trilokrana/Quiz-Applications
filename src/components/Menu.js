import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <h1>Enter Your Name</h1>
      <input
        type="text"
        placeholder="Ex. Trilok Rana"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button className="StartQuiz"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
