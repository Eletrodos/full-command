import React, { Component } from "react";

import PersistentDrawer from "./PersistentDrawer";

interface ILayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<ILayoutProps> {
  public render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <PersistentDrawer />
        <main>{children}</main>
      </React.Fragment>
    );
  }
}
