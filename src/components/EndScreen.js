import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h2>Quiz Finished</h2>
      <h1>{userName}</h1>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button className="restartQuiz" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
