import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
//import {Fragment} from 'react'
import Paper from "@material-ui/core/Paper";
import { Toolbar } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Address from "./Address";
import ContactInfo from "./ContactInfo";
import cyan from "@material-ui/core/colors/cyan";
import indigo from "@material-ui/core/colors/indigo";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { mergeClasses } from "@material-ui/styles";
import Typography from "@material-ui/core/typography";
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
  wrapper: {
    backgroundColor: "#00838f",
    height: "100%"
    //marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(2),
    //overflowX: "auto"
  },
  follow: {
    display: "flex",
    flexDirection: "column"
  },
  text: {
    flexGrow: 1,
    textAlign: "right"
  },
  table: {
    //minWidth: 650
  },
  toolBar: {
    backgroundColor: footerPrimary
  }
}));
//<div className={classes.text}>Follow Us</div>
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
      <div className={classes.wrapper}>
        <Container>
          <Grid container spacing={1} />
          <Grid container spacing={1}>
            <Grid item xs={3} spacing={3} />
            <Grid item xs={3} spacing={3} />
            <Grid item xs={3} spacing={3} />
            <Grid item xs={3} spacing={3} className={classes.follow}>
              <Typography variant="h6" align="right">
                {" "}
                Follow Us
              </Typography>
              <Divider />

              <Toolbar disableGutters>
                <span style={{ marginLeft: "auto" }}>
                  <Button color="inherit">
                    <i
                      class="fab fa-facebook fa-2x"
                      style={{ color: "#3b5998" }}
                    />
                  </Button>
                  <Button color="inherit">
                    <i
                      class="fab fa-whatsapp-square fa-2x"
                      style={{ color: "#25D366" }}
                    />
                  </Button>
                  <Button color="inherit">
                    <i
                      class="fab fa-weixin fa-2x"
                      style={{ color: "#7BB32E" }}
                    />
                  </Button>
                </span>
              </Toolbar>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} spacing={3}>
              All Rights Reserved
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Footer;
