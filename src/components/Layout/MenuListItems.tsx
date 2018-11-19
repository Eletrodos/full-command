import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React, { Component } from "react";

import commands from "../../../data/mockTestCommands.json";

export default class MenuListItems extends Component {
  public render() {
    return (
      <List>
        {commands.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    );
  }
}
