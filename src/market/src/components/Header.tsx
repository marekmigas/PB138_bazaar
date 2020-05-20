import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core"; 

export default class Header extends Component {

  

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-evenly">
              <Grid item><Typography>Marketplace</Typography></Grid>
              <Grid item><Typography>Add Offer</Typography></Grid>
              <Grid item><Typography>Categories</Typography></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}