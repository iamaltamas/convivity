import React, { useEffect, useState } from "react";
import flag from "../../img/flag.png";
import AnswerInput from "../Answer/AnswerInput";
import AnswerPattern from "../Answer/AnswerPattern";
import DragDrop from "../DragDrop/DragDrop";
import InputSorting from "../InputSorting/InputSorting";
import AnswerRadio from "../AnswerRadio/AnswerRadio";
import AnswerCheckbox from "../AnswerCheckbox/AnswerCheckbox";
import { questions } from "../../util/QuestionDate";
import eye from "../../img/eye.png";
import tick from "../../img/tick.png";
import playIcon from "../../img/play-i.png";
import mobile from "../../img/mobile.png";
import sound from "../../audio.mp3.mp3";
import success from "../../sucsess.mp3.mp3";
import {
  updateQuestion,
  updateAttempts,
  wrongAnswer,
  updateFlag,
} from "../../redux/counterSlice";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
const Card = ({ cardFgId }) => {
  const stateList = useSelector((state) => state?.app?.data[0]);
  const dispatch = useDispatch();
  const flagQ = stateList?.filter((ele) => ele.flagId == cardFgId);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [qId, setQId] = useState(1);
  const [tackInput, setTackInput] = useState();
  const [patInput, setPatInput] = useState({});
  const [dragPatInput, setDragPatInput] = useState({});
  const [sorting, setSorting] = useState({});
  const [radioIn, setRadioIn] = useState();
  const [checkboxValue, setCheckboxValue] = useState([]);

  useEffect(() => {
    if (qId) {
      const selectQuestion = questions?.filter((ele) => ele.id === qId);
      setCurrentQuestion(selectQuestion[0]);
    }
  }, [qId]);
  useEffect(() => {
    if (flagQ[0]?.flagId) {
      setQId(flagQ[0]?.flagId);
    }
  }, [cardFgId]);
  const attempts = stateList?.filter((ele) => ele?.id === qId);
  let wonAudio = new Audio(sound);
  let sucAudio = new Audio(success);

  const checkHandle = () => {
    if (currentQuestion?.id === 1) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (currentQuestion?.correctAns == tackInput) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    } else if (currentQuestion?.id === 2) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (
        currentQuestion?.correctAns ==
        patInput?.firstInput + patInput?.secondInput
      ) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    } else if (currentQuestion?.id === 3) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (
        currentQuestion?.correctAns ===
        dragPatInput[0].name + dragPatInput[1].name + dragPatInput[2].name
      ) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    } else if (currentQuestion?.id === 4) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (
        currentQuestion?.correctAns ===
        sorting.first + sorting.second + sorting.third + sorting.forth
      ) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    } else if (currentQuestion?.id === 5) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (currentQuestion?.correctAns === radioIn) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    } else if (currentQuestion?.id === 6) {
      if (attempts[0]?.attempts === 1) {
        dispatch(wrongAnswer(currentQuestion?.id));
        setQId(qId + 1);
      }
      if (currentQuestion?.correctAns === checkboxValue[0] + checkboxValue[1]) {
        dispatch(updateQuestion(currentQuestion.id));
        sucAudio.play();
        setQId(qId + 1);
      } else {
        wonAudio.play();
        dispatch(updateAttempts(currentQuestion?.id));
      }
    }
  };
  const inputHandle = (value) => {
    setTackInput(value);
  };
  const patternHandle = (value) => {
    setPatInput({ ...value });
  };
  const dragPatternHandle = (value) => {
    setDragPatInput({ ...value });
  };
  const inputSortingHandle = (value) => {
    setSorting({ ...value });
  };

  const radioInputHandle = (value) => {
    setRadioIn(value);
  };
  const checkboxHandle = (value) => {
    setCheckboxValue({ ...value });
  };
  const flagHandle = () => {
    dispatch(updateFlag(currentQuestion?.id));
    setQId(qId + 1);
  };
  return (
    <>
      <div className="container h-50 bg-white mt-5 p-4 d-flex">
        <div className="container h-50 bg-white">
          <div className="d-flex align-items-center justify-content-between">
            <strong>Question {currentQuestion?.id}</strong>
            <div
              className="d-flex align-items-center justify-content-center flag-item"
              onClick={() => flagHandle()}
            >
              <img src={flag} alt="img" height="15px" width="12px" />
              <p className="m-0" style={{ paddingLeft: "10px" }}>
                Flag for later
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p>{currentQuestion?.questions}</p>
            <p>Answer</p>
          </div>
          <div className="d-lg-flex w-100 justify-content-between d-sm-block">
            {currentQuestion?.questionType === "calculation" ? (
              <AnswerInput answerValue={inputHandle} />
            ) : null}
            {currentQuestion?.questionType === "pattern" ? (
              <AnswerPattern patternAnswer={patternHandle} />
            ) : null}
            {currentQuestion?.questionType === "sorting" ? (
              <DragDrop dragPatternAnswer={dragPatternHandle} />
            ) : null}
            {currentQuestion?.questionType === "inputSorting" ? (
              <InputSorting inputSorting={inputSortingHandle} />
            ) : null}
            {currentQuestion?.questionType === "redo" ? (
              <AnswerRadio radio={radioInputHandle} />
            ) : null}
            {currentQuestion?.questionType === "checkbox" ? (
              <AnswerCheckbox checkboxValue={checkboxHandle} />
            ) : null}
            <div className="check-btn">
              <button
                onClick={checkHandle}
                type="button"
                class="btn btn-primary w-100"
              >
                check
              </button>
              <p className="p-attempts">
                {attempts[0]?.attempts} attempts left
              </p>
            </div>
          </div>
        </div>
        <div className="side-item">
          <img src={mobile} alt="img" className="side-img" />
          <img src={playIcon} alt="img" className="side-img" />
          <img src={tick} alt="img" className="side-img" />
          <img src={eye} alt="img" className="side-img" />
        </div>
      </div>
    </>
  );
};

export default Card;
