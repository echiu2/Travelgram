import React, { Component } from "react";
import Forms from "./Forms";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Forms} exact/>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
