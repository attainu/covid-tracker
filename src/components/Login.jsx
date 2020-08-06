import React from "react";
import "../styles/Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  return (
    <Form className="login-form">
      <h3>
        <span className="font-weight-bold">CovidTracker</span>.com
      </h3>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary" className="btn-lg btn-block">
        Login
      </Button>
      <div className="text-center pt-3">OR</div>
      <FacebookLoginButton className="mt-3 mb-3" />
      <div className="text-center">
        <a href="/sign-up">Signup</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </Form>
  );
};

export default Login;
