import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderNav from "./components/HeaderNav";
import Overview from "./pages/Overview";
import Homework from "./pages/Homework";
import Quizzes from "./pages/Quizzes";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route path="/Homework">
              <Homework />
            </Route>
            <Route path="/Quizzes">
              <Quizzes />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
