import React, { useState } from "react";
import logo from "../../img/logo.png";
import logo1 from "../../img/Layer_1 (1).png";
import logo2 from "../../img/Layer_1 (2).png";
import logo3 from "../../img/Layer_1 (3).png";
import logo4 from "../../img/Layer_1.png";
import logo5 from "../../img/Avatar.png";
import logo6 from "../../img/bell-01.png";
import logo7 from "../../img/Icons.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [activeAppBar, setActiveAppBar] = useState();
  const naveLinkStyle = ({ isActive }) => {
    return {
      color: "#000",
      textDecoration: "none",
      backgroundColor: isActive ? "orange" : "#ffffff",
      height: "50px",
    };
  };
  const appBarHandle = () => {
    setActiveAppBar(!activeAppBar);
  };
  return (
    <nav class="" style={{ backgroundColor: "#ffffff" }}>
      <div class="container-fluid nav-all-body">
        <div className="app-bar" onClick={appBarHandle}>
          {activeAppBar ? (
            <div className="app-bar-item">
              <NavLink
                to="/"
                className="row justify-content-center"
                style={naveLinkStyle}
              >
                <img
                  class="navbar-brand"
                  src={logo4}
                  alt="img"
                  height="26"
                  style={{ width: "auto" }}
                />
                <strong className="d-flex justify-content-center nav-text">
                  Dashboard
                </strong>
              </NavLink>
              <NavLink
                to="/courses"
                className="row justify-content-center"
                style={naveLinkStyle}
              >
                <img
                  class="navbar-brand"
                  src={logo3}
                  alt="img"
                  height="26"
                  style={{ width: "auto" }}
                />
                <strong className="d-flex justify-content-center nav-text">
                  Courses
                </strong>
              </NavLink>
              <NavLink
                to="/learning"
                className="row justify-content-center"
                style={naveLinkStyle}
              >
                <img
                  class="navbar-brand"
                  src={logo2}
                  alt="img"
                  height="26"
                  style={{ width: "auto" }}
                />
                <strong className="d-flex justify-content-center nav-text">
                  Learning Lab
                </strong>
              </NavLink>
              <NavLink
                to="/achievement"
                className="row justify-content-center"
                style={naveLinkStyle}
              >
                <img
                  class="navbar-brand"
                  src={logo1}
                  alt="img"
                  height="26"
                  style={{ width: "auto" }}
                />
                <strong className="d-flex justify-content-center nav-text">
                  Achievements
                </strong>
              </NavLink>
            </div>
          ) : null}
          <i class="bi bi-list-nested"></i>
        </div>
        <img
          class="navbar-brand"
          src={logo}
          alt="img"
          height="66"
          width="190"
        />
        <div className="nav-item">
          <NavLink
            to="/"
            className="row justify-content-center"
            style={naveLinkStyle}
          >
            <img
              class="navbar-brand"
              src={logo4}
              alt="img"
              height="26"
              style={{ width: "auto" }}
            />
            <strong className="d-flex justify-content-center align-items-center nav-text">
              Dashboard
            </strong>
          </NavLink>
          <NavLink
            to="/courses"
            className="row justify-content-center"
            style={naveLinkStyle}
          >
            <img
              class="navbar-brand"
              src={logo3}
              alt="img"
              height="26"
              style={{ width: "auto" }}
            />
            <strong className="d-flex justify-content-center nav-text">
              Courses
            </strong>
          </NavLink>
          <NavLink
            to="/learning"
            className="row justify-content-center"
            style={naveLinkStyle}
          >
            <img
              class="navbar-brand"
              src={logo2}
              alt="img"
              height="26"
              style={{ width: "auto" }}
            />
            <strong className="d-flex justify-content-center nav-text">
              Learning Lab
            </strong>
          </NavLink>
          <NavLink
            to="/achievement"
            className="row justify-content-center"
            style={naveLinkStyle}
          >
            <img
              class="navbar-brand"
              src={logo1}
              alt="img"
              height="26"
              style={{ width: "auto" }}
            />
            <strong className="d-flex justify-content-center nav-text">
              Achievements
            </strong>
          </NavLink>
        </div>
        <div>
          <img class="nav-last-item" src={logo7} alt="img" />
          <img class="nav-last-item" src={logo6} alt="img" />
          <img class="nav-last-item" src={logo5} alt="img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
