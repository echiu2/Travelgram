import React, { Component } from "react";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Profile from "./Profile"
import MyNavbar from "./MyNavbar"
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>  
      <MyNavbar/>
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
