import React, { Component, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { setUser } from '../redux/user'

const LoginForm = (props) => {
  // React Hook: userName is value being changed from input text, setUserName is the function
  // that allows the change to occur, useState is reactHook inbuild function to hold states
  // (replaces using class and constructors)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return props.user.id ? <Redirect to="/home"></Redirect> : (
    <div>
      <h1>Login</h1>
      <form onSubmit={(ev) => {
        ev.preventDefault()
        props.login(email, password)
      }}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="email"
            // On change takes event variable and changes his value according to user input
            onChange={(event) => setEmail(event.target.value)}
          />
          Password:
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const mapState = ({ user }) => ({
  user
})
const mapDispatch = (dispatch) => ({
  login: (email, password) => dispatch(setUser(email, password))
})

export default connect(mapState, mapDispatch)(LoginForm);
