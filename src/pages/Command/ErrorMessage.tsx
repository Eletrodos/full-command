import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";

interface IErrorMessageProps {
  command: string;
}

export default class ErrorMessage extends Component<IErrorMessageProps> {
  public render() {
    const { command } = this.props;
    return (
      <Paper>
        <Typography color="secondary" variant="h1">
          Oops...
        </Typography>
        <Typography color="primary" paragraph>
          ...não foi possivel encontrar dados para o comando <b>{command}.</b>
        </Typography>
      </Paper>
    );
  }
}
