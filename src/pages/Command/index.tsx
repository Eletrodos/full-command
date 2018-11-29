import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

import Layout from "../../components/Layout";
import ErrorMessage from "./ErrorMessage";

interface ICommandProps {
  match: any;
}

interface ICommandStates {
  data?: any;
  error?: boolean;
}

export default class Command extends Component<ICommandProps, ICommandStates> {
  public state = {
    data: {},
    error: false
  };

  public componentDidMount = () => {
    const { match } = this.props;
    const { params } = match;

    // Pega os dados do arquivo na pasta data
    this.getFileData(params.command)
      .then(data => {
        this.setState({ data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  /** Pega as informações do comando */
  public async getFileData(command: string) {
    const response = await fetch(`/data/${command}.json`);
    const data = await response.json();
    return data;
  }

  public render() {
    const { error } = this.state;
    const { match } = this.props;
    const { params } = match;
    return (
      <Layout title="Full Command">
        <Grid container spacing={8}>
          {error && (
            <Grid item xs={12}>
              <ErrorMessage command={params.command} />
            </Grid>
          )}
        </Grid>
      </Layout>
    );
  }
}
