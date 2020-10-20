import React, { Component, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { homePost } from "../redux/post";

//components
import Home from "./Home";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import MyNavbar from "./MyNavbar";
import UpdateProfile from "./UpdateProfile";

const App = () => {

  return (
    <div>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/updateProfile" component={UpdateProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default connect(null, null)(App);
