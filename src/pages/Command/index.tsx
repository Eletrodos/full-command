import React, { Component } from "react";

import Layout from "../../components/Layout";

interface ICommandProps {
  match: any;
}

interface ICommandStates {
  data: any;
}

export default class Command extends Component<ICommandProps, ICommandStates> {
  public state = {
    data: { loading: true }
  };

  constructor(props: ICommandProps) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    // Pega os dados do arquivo na pasta data
    this.getFileData(params.command).then(data => {
      this.setState({ data });
    });
  }
  public async getFileData(command: string) {
    const response = await fetch(`/data/${command}.json`);
    const data = await response.json();
    return data;
  }

  public render() {
    const { data } = this.state;
    return (
      <Layout title="Full Command">
        <pre>{JSON.stringify(data, null, "\n")}</pre>
      </Layout>
    );
  }
}
