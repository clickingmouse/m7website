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

const Address = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.tuple}>
        <Grid item xs>
          <Paper>
            7D Majestic House
            <br />
            80 Nathan Road
            <br />
            Tsim Sha Tsui <br />
            Kowloon <br />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Address;
