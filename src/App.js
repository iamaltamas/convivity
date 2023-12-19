import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./Page/Courses/Courses";
import { questions } from "./util/QuestionDate";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Achievements from "./Page/Achievements/Achievements";
import LearningLab from "./Page/LearningLab/LearningLab";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ backgroundColor: "#F7F5F1" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/achievement" element={<Achievements />} />
            <Route path="/learning" element={<LearningLab />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
