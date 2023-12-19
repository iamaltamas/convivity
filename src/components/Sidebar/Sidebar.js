import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import backPng from "../../img/Book.png";
import ok from "../../img/Icon.png";
import circle from "../../img/Ellipse 1535.png";
import progress from "../../img/Progress.png";
import flag from "../../img/flag-color.png";
import { useSelector, useDispatch } from "react-redux";
import { Flag } from "../../redux/counterSlice";

const Sidebar = ({ fgId }) => {
  const dispatch = useDispatch();
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const data = useSelector((state) => state?.app?.data);

  const sidebarBtn = (id) => {
    const flagQuestion = data[0]?.filter((ele) => ele?.flag === true);

    const flagFilter = flagQuestion?.filter((ele) => ele.id == id);

    if (id == flagFilter[0]?.id) {
      dispatch(Flag(id));
      fgId(id);
    }
  };
  return (
    <div className="" style={{ display: "flex" }}>
      {sidebarVisibility ? (
        <div className="side-bar-body">
          <div className="p-2">
            <img
              src={backPng}
              alt="img"
              style={{ width: "24px", height: "33px" }}
            />
            <strong>Saxon Math 5/4</strong>
          </div>
          <div className="mt-2 p-2">
            <form class="d-flex" role="search">
              <span class="input-group-text">
                <i class="bi bi-search"></i>
              </span>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <div className="mt-2 d-flex lesson-box">
            <i class="bi bi-chevron-left"></i>
            <p style={{ marginLeft: "12px", marginBottom: "0px" }}>Lesson 5</p>
          </div>
          <div className="p-2 bg-white">
            <strong>Assignment Title Here</strong>
            <div className="d-flex align-items-center justify-content-between w-100 pr-5">
              <p>Question:</p>
              <p>{data[0].length} Question</p>
            </div>
            <div className="row">
              {data[0]?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-4 card-btn-body"
                    onClick={() => sidebarBtn(item?.id)}
                  >
                    {item?.rightAns ? <img src={ok} alt="img" /> : null}
                    {item?.wrongAns ? (
                      <i class="bi bi-x-lg text-danger"></i>
                    ) : null}
                    {item?.notAttemptQus ? (
                      <img src={circle} alt="img" />
                    ) : null}
                    {item?.activeQus ? <img src={progress} alt="img" /> : null}
                    <strong> &nbsp; &nbsp;{item.id}</strong>
                    {item?.flag ? (
                      <div>
                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                        <img src={flag} />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      <div
        className="side-bar-btn"
        onClick={() => setSidebarVisibility(!sidebarVisibility)}
      >
        {sidebarVisibility ? (
          <i class="bi bi-chevron-left"></i>
        ) : (
          <i class="bi bi-chevron-right"></i>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
