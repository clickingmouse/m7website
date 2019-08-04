import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
//import {Fragment} from 'react'
import { Toolbar } from "@material-ui/core";

import Address from "./Address";
import ContactInfo from "./ContactInfo";
import cyan from "@material-ui/core/colors/cyan";
import indigo from "@material-ui/core/colors/indigo";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
//const footerPrimary = cyan["A200"]; //#18ffff
const footerPrimary = indigo["500"]; //#3f51b5

const useStyles = makeStyles(theme => ({
  root: {
    //width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    overflowX: "auto"
    //backgroundColor: footerPrimary
  },
  table: {
    //minWidth: 650
  },
  toolBar: {
    backgroundColor: footerPrimary
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#f44336"
    }
  }
});
const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Toolbar className={classes.toolBar}>tool bar</Toolbar>
        </MuiThemeProvider>
      </div>

      <div className={classes.root} color="inherit">
        BOTTOM FOOTER
        <Grid container spacing={1}>
          <Grid container item xs={3} spacing={3} />
          <Grid container item xs={3} spacing={3}>
            <Address />
          </Grid>
          <Grid container item xs={3} spacing={3}>
            <ContactInfo />
          </Grid>

          <Grid container item xs={3} spacing={3} />
        </Grid>
        All Rights Reserved
      </div>
    </React.Fragment>
  );
};

export default Footer;
