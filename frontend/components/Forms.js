import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./Signup"
import {render} from 'react-dom';

const Forms = () => {
      return (
        <section>
        <Login />
        <SignUp />
        </section>
      )
}
export default Forms;