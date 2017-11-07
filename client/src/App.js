import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";

const App = () =>
  <div className="container">
      <Nav />
      <Jumbotron />
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  </div>

export default App;
