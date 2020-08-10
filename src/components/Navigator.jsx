import React from "react";
import logo from "../images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"

export const Navigator = () => (
  <Navbar expand="lg navbar-dark bg-dark">
    <img src={logo} alt="logo" width="3%" />
    <Link>Corona Tracker</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto ">
        <Nav.Item>
          <Nav.Link><Link to={"/home"}>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/covid"}>What is COVID-19</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/selfassess"}>Self Assess</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/About"}>About</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={"/login"}>Login</Link></Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);