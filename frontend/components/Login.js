import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

const Login = () => {
  // React Hook: userName is value being changed from input text, setUserName is the function
  // that allows the change to occur, useState is reactHook inbuild function to hold states
  // (replaces using class and constructors)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <form>
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
