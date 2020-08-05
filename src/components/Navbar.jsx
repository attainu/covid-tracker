import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <img src={logo} alt="logo" width="3%" />
      <div className="text-light">
        Corona Tracker <span className="sr-only">(current)</span>
      </div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active  ">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            What is COVID-19 <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Self Assess <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            About <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Login <span className="sr-only">(current)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
