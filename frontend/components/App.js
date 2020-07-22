import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Home from "./Home";
import Profile from './Profile'
import LoginPage from "./LoginPage";
import MyNavbar from "./MyNavbar"

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
