import React, { Component, useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  // React Hook: email is value being changed from input text, setEmail is the function
  // that allows the change to occur, useState is reactHook inbuild function to hold states
  // (replaces using class and constructors)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (ev) => {
    console.log("submitting", ev);
    ev.preventDefault();
    axios.post("/", { firstName, lastName, email, password });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label>
          First Name:
          <input
            type="text"
            name="firsname"
            placeholder="first name"
            // On change takes event variable and changes his value according to user input
            onChange={(event) => setFirstName(event.target.value)}
          />
          Last Name:
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            // On change takes event variable and changes his value according to user input
            onChange={(event) => setLastName(event.target.value)}
          />
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
          Re-enter Password:
          <input
            type="text"
            name="password"
            placeholder="Re-enter password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
