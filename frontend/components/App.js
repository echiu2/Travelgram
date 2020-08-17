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

const App = (props) => {
  useEffect(() => {
    const x = () => {
      props.load();
      // if (props.post.length == 1){
      //   setCaption(props.post[0].caption)
      // }
    };
    x();
  }, []);

  // let data = props.post[0];
  // if (props.post.length == 1) {
  //   setCaption(data.caption)
  // }


  return (
    <div>
      <Router>
        <MyNavbar />
        {/* <h1>{`${caption}`}</h1> */}
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  )
};


const mapDispatch = (dispatch) => ({
  load: () => dispatch(homePost()),
});

export default connect(null, mapDispatch)(App);
