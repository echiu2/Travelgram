import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import LoginPage from "./LoginPage";
import Home from "./Home";
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <div>NAV</div>
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
