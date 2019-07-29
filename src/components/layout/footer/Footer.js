import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Address from "./Address";
import ContactInfo from "./ContactInfo";
import cyan from "@material-ui/core/colors/cyan";
const footerPrimary = cyan["A200"]; //#18ffff

const useStyles = makeStyles(theme => ({
  root: {
    //width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    overflowX: "auto",
    backgroundColor: footerPrimary
  },
  table: {
    //minWidth: 650
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
  );
};

export default Footer;
