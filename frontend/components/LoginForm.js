import React, { Component, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { setUser } from '../redux/user'
import Home from './Home'
const LoginForm = (props) => {
  // React Hook: userName is value being changed from input text, setUserName is the function
  // that allows the change to occur, useState is reactHook inbuild function to hold states
  // (replaces using class and constructors)
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return props.user.id ? <Redirect to="/home"></Redirect> : (
    <div>
      <h1>Login</h1>
      <form onSubmit={(ev) => {
        ev.preventDefault()
        props.login(username, password)
      }}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            // On change takes event variable and changes his value according to user input
            onChange={(event) => setUserName(event.target.value)}
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
  login: (username, password) => dispatch(setUser(username, password))
})

export default connect(mapState, mapDispatch)(LoginForm);
