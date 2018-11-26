import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Command from "../pages/Command";
import Home from "../pages/Home";

export default class Router extends Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/command/:command" exact component={Command} />
        </div>
      </BrowserRouter>
    );
  }
}
