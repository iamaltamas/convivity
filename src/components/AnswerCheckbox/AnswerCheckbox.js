import React, { useEffect, useState } from "react";
import "./AnswerCheckbox.css";
const AnswerCheckbox = ({ checkboxValue }) => {
  const [checkboxInp, setCheckboxInp] = useState([]);
  const checkboxData = [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
    { id: 4, name: "forth" },
    { id: 5, name: "five" },
  ];
  useEffect(() => {
    checkboxValue(checkboxInp);
  }, [checkboxInp]);
  const checkedHandle = (e, id) => {
    // const data =[...]
    const { name, checked } = e.target;
    if (checked) {
      setCheckboxInp((prev) => [...prev, name]);
    } else {
      setCheckboxInp((prev) => {
        return [...prev.filter((ele) => ele != name)];
      });
    }
  };
  return (
    <div>
      {checkboxData &&
        checkboxData.map((item, index) => {
          return (
            <div key={index} className="d-flex align-items-center">
              <input
                type="checkbox"
                name={item?.name}
                onChange={(e) => checkedHandle(e, item.id)}
              />
              <p className="checkbox-p">{item?.id}</p>
            </div>
          );
        })}
    </div>
  );
};

export default AnswerCheckbox;
