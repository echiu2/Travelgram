import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
const Login = () => {
  // React Hook: userName is value being changed from input text, setUserName is the function
  // that allows the change to occur, useState is reactHook inbuild function to hold states
  // (replaces using class and constructors)
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = async (ev) => {
    console.log("submitting", ev);
    ev.preventDefault();
    const user = await axios.post("/", { username, password });
    if (user){
      setRedirect(true);
    }
    console.log(redirect);

  };
  // Using states to check if we want to redirect or not. left side of ? is true, right side is false
  return redirect ? (
    <Redirect to="/home"></Redirect>
  ) : (
    <div>
      <h1>Login</h1>
      <form onSubmit={(ev) => handleSubmit(ev)}>
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

export default Login;
