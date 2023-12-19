import React, { useState } from "react";
import "./AnswerRadio.css";
const AnswerRadio = ({ radio }) => {
  const radioHandle = (e) => {
    radio(e.target.value);
  };
  return (
    <div className="w-50">
      <div className="checkbox-input">
        <input
          type="radio"
          value="incorrect"
          name="radio"
          onChange={(e) => radioHandle(e)}
        />
        <p className="p-item">incorrect</p>
      </div>
      <div className="checkbox-input mt-2">
        <input
          type="radio"
          name="radio"
          value="correct"
          onChange={(e) => radioHandle(e)}
        />
        <p className="p-item">correct</p>
      </div>
    </div>
  );
};

export default AnswerRadio;
