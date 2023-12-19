import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Card from "../../components/Card/Card";
import "./Courses.css";
const Courses = () => {
  const [newFgId, setNewFgId] = useState();
  // useEffect(() => {}, [newFgId]);
  const fgHandle = (id) => {
    setNewFgId(id);
  };
  return (
    <div className="courses-body">
      <Sidebar fgId={fgHandle} />
      <Card cardFgId={newFgId} />
    </div>
  );
};

export default Courses;
