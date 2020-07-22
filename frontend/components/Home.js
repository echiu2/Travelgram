import React, { Component, useState } from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>

      <Link to="/">Login</Link>

      <Link to="/home">Home</Link>

      <Link to="/profile">Profile</Link>


    </div >
  );
};
export default Home;
