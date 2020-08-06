import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="container">
        <div className="navbar-brand d-flex">
          <img src={logo} alt="logo" width="5%" />
          Corona Tracker
        </div>
        <ul className="navbar-nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              What is COVID-19
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Self Assess
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
