import React, { Component, useState } from "react";

const Home = () => {
  return (
    <div>
      <ul>
      <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/group">Group</a>
        </li>
        <li>
          <a href="/messenger">Messenger</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
