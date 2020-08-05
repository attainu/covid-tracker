import React from "react";
import "./App.css";

// components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import SelfAssess from "./components/SelfAssess";
import Covid from "./components/Covid";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/covid" component={Covid} />
        <Route path="/selfassess" component={SelfAssess} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
