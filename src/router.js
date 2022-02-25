import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/login';
function Router() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route path="/book" component={Book} />
      </Switch>
    </Router>
  );
}

export default Router;