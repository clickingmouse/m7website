import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  tuple: {
    display: "flex",
    flexDirection: "column"
  }
}));

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.tuple}>
        <Grid item xs>
          <Paper>Tel: +852-3599-4315</Paper>
          <Paper>Email: book@majestic7guesthouse.com</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ContactInfo;
