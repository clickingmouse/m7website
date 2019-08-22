import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const SupermarketCard = props => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={4} sm={4}>
        <img src={props.logo} alt="logo" width="100%" />
      </Grid>
      <Grid item>
        <h5>{props.title}</h5> <hr />
        Address : {props.address}
        <br />- {props.summary}
      </Grid>
    </Grid>
  );
};

export default SupermarketCard;
