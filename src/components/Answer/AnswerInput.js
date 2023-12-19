import React from "react";
import "./Answer.css";
const AnswerInput = ({ answerValue }) => {
  const answerInputHandle = (e) => {
    answerValue(e.target.value);
  };

  return (
    <>
      <input
        className="answer-input"
        type="text"
        placeholder="enter your answer"
        onChange={(e) => answerInputHandle(e)}
      />
    </>
  );
};

export default AnswerInput;
