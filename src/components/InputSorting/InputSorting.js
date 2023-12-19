import React, { useEffect, useState } from "react";
import "./InputSorting.css";
const InputSorting = ({ inputSorting }) => {
  const [sortingInput, setSortingInput] = useState({
    first: "1",
    second: "4",
    third: "2",
    forth: "3",
  });
  useEffect(() => {
    inputSorting(sortingInput);
  }, [sortingInput]);
  const sortingHandle = (e, name) => {
    const update = { ...sortingInput };
    update[name] = e.target.value;
    setSortingInput(update);
  };
  return (
    <div>
      <input
        className="sort-input"
        name="first"
        type="text"
        value={sortingInput.first}
        onChange={(e) => sortingHandle(e, "first")}
      />
      <input
        className="sort-input"
        name="second"
        type="text"
        value={sortingInput.second}
        onChange={(e) => sortingHandle(e, "second")}
      />
      <input
        className="sort-input"
        name="third"
        type="text"
        value={sortingInput.third}
        onChange={(e) => sortingHandle(e, "third")}
      />
      <input
        className="sort-input"
        name="forth"
        type="text"
        value={sortingInput.forth}
        onChange={(e) => sortingHandle(e, "forth")}
      />
    </div>
  );
};

export default InputSorting;
