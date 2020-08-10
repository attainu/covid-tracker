import React from "react";
import logo from "../images/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";

class Navigator extends React.component {
  render() {
    return (
      <Navbar expand="lg navbar-dark bg-primary">
        <img src={logo} alt="logo" width="3%" />
        <Navbar.Brand href="/">Corona Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/covid">What is COVID-19</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/selfassess">Self Assess</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigator;
