import React, { useEffect, useState } from "react";

const AnswerPattern = ({ patternAnswer }) => {
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    patternAnswer(inputValue);
  }, [inputValue]);
  const patternInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex align-items-center w-25 justify-content-between">
      <strong>345</strong>
      <input
        className="input-pattern"
        name="firstInput"
        type="text"
        maxLength={3}
        onChange={(e) => patternInput(e)}
      />
      <input
        className="input-pattern"
        name="secondInput"
        type="text"
        maxLength={3}
        onChange={(e) => patternInput(e)}
      />
      <strong>350</strong>
    </div>
  );
};

export default AnswerPattern;
