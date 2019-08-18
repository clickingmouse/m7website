import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppsPost from "./featuredPosts/AppsPost";
import BreakfastPost from "./featuredPosts/BreakfastPost";
import SiuYehPost from "./featuredPosts/SiuYehPost";
import SupermarketPost from "./featuredPosts/SupermarketPost";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
const PostsSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <center>-=FEATURED POSTS=-</center>
            </Paper>
          </Grid>
          <Grid item sm={3}>
            <AppsPost />
          </Grid>
          <Grid item sm={3}>
            <SupermarketPost />
          </Grid>
          <Grid item sm={3}>
            <BreakfastPost />
          </Grid>
          <Grid item sm={3}>
            <SiuYehPost />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PostsSection;
