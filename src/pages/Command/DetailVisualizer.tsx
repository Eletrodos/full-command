import { Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";

interface IDetailVisualizerProps {
  name: string;
  description: string;
}

/**
 * Exibe os detalhes do comando
 * desenhando os parâmetros em uma tabela
 */
export default class DetailVisualizer extends Component<
  IDetailVisualizerProps
> {
  public render() {
    const { name, description } = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item lg={12}>
          <Typography variant="h2">{name}</Typography>
          <Typography variant="subheading">{description}</Typography>
        </Grid>
      </Grid>
    );
  }
}
