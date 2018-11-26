import React, { Component } from "react";

import Layout from "../../components/Layout";

interface ICommandProps {
  match: any;
}

export default class Command extends Component<ICommandProps> {
  public render() {
    const { match } = this.props;
    const { params } = match;
    return (
      <Layout title="Full Command">
        Commando a ser carregado: <b>{params.command}</b>
      </Layout>
    );
  }
}
