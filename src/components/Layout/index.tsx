import AppBar from "@material-ui/core/AppBar/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider/Divider";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Hidden from "@material-ui/core/Hidden/Hidden";
import IconButton from "@material-ui/core/IconButton/IconButton";
import { Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";

import MenuListItems from "./MenuListItems";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
      width: drawerWidth
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
});

interface ILayoutProps {
  title: string;
  children: React.ReactNode;
  classes: any;
}

class Layout extends Component<ILayoutProps> {
  public state = {
    mobileOpen: false
  };

  public handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  public render() {
    const { children, classes, title } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swap with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <div className={classes.toolbar} />
              <Divider />
              <MenuListItems />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              <div className={classes.toolbar} />
              <Divider />
              <MenuListItems />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>{children}</div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
