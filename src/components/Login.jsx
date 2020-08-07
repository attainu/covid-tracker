import React from "react";
import "../styles/Login.css";
import fire from "../config";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class Login extends React.Component {
  login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("successfully loggedin");
      })
      .catch((err) => {
        console.log("Error : " + err.toString());
      });
  }

  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("successfully signedUp");
      })
      .catch((err) => {
        console.log("Error : " + err.toString());
      });
  }

  render() {
    return (
      <Form className="login-form">
        <h3>
          <span className="font-weight-bold">CovidTracker</span>.com
        </h3>
        <FormGroup>
          <Label>Email</Label>
          <Input id="email" type="email" placeholder="Email" />
          <Label>Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </FormGroup>
        <Button
          color="primary"
          className="btn-lg btn-block"
          onClick={this.login}
        >
          Login
        </Button>
        {/* <Button
          color="primary"
          className="btn-lg btn-block"
          onClick={this.signUp}
        >
          Signup
        </Button> */}
        <div className="text-center pt-3">OR</div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/sign-up" onClick={this.signUp}>
            Signup
          </a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </Form>
    );
  }
}

export default Login;
