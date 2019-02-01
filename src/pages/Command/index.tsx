import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";

import Layout from "../../components/Layout";
import DetailVisualizer from "./DetailVisualizer";
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
    const { error, data } = this.state;
    const { match } = this.props;
    const { params } = match;
    const { name, description } = data;
    return (
      <Layout title="Full Command">
        <Grid container spacing={8}>
          <Grid item xs={12}>
            {error && <ErrorMessage command={params.command} />}
            {!error && (
              <DetailVisualizer name={name} description={description} />
            )}
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
