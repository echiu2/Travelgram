import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm"

const LoginPage = (props) => {
  return (
    <section>
      <LoginForm />
      <SignUpForm />
    </section>
  )
}

export default LoginPage;