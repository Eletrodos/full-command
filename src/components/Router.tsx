import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Command from "../pages/Command";

export default class Router extends Component {
  public render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/command/:command" exact component={Command} />
        </BrowserRouter>
      </div>
    );
  }
}
