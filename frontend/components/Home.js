import React, { Component, useState } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
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
