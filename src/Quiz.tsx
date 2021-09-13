import { useState } from "react";
import QuizQ from "./QuizQ/QuizQ";

const Quiz = () => {
  const quiz = QuizQ;

  const [activeindex, setactiveindex] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setshowscore] = useState(false);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (activeindex < quiz.length) {
      setactiveindex(activeindex + 1);
    } else {
      setshowscore(true);
    }
  };

  return (
    <div>
      {showscore ? (
        <div>Your score: {score}</div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {activeindex + 1}</span>
            </div>
            <div className="question-text">
              {quiz[activeindex].questionText}
            </div>
          </div>
          <div className="answer-section">
            {quiz[activeindex].answerOptions.map((answerOption, index) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
