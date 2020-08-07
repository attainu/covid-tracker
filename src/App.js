import React, { Component } from "react";
import "./App.css";

// components
import { Navigator } from "./components/Navigator";
import About from "./components/About";
import Home from "./components/Home";
import SelfAssess from "./components/SelfAssess";
import Covid from "./components/Covid";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import firebase from "firebase";
import fire from "././config";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navigator />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/covid" component={Covid} />
          <Route path="/selfassess" component={SelfAssess} />
          <Route path="/about" component={About} />
          {/* <Route path="/login" component={Login} /> */}
        </Switch>
        {this.state.user ? <Home /> : <Login />}
      </div>
    );
  }
}
export default App;
