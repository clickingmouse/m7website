import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RecentPosts from "./RecentPosts";
import PostsList from "./PostsList";

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

class PostsDashboard extends Component {
  render() {
    //const classes = useStyles();
    return (
      <div className="postsDashboard">
        ...{" "}
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={7}>
              <Paper>
                <PostsList />
              </Paper>
            </Grid>
            <Grid item sm={5}>
              <Paper>
                <RecentPosts />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default PostsDashboard;
