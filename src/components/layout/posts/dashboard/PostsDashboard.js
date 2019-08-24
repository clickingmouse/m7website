import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import RecentActivities from "./RecentActivities";
import PostsList from "./PostsList";
import { firestoreConnect } from "react-redux-firebase";

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
    console.log("xxxxxxxxxxxxxxx", this.props);
    const { posts, notifications } = this.props;
    //const classes = useStyles();
    return (
      <div className="postsDashboard">
        ...{" "}
        <Container>
          <Grid container spacing={3}>
            <Grid item sm={7}>
              <PostsList posts={posts} />
            </Grid>
            <Grid item sm={5}>
              <RecentActivities activities={notifications} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    //posts: state.post.posts
    posts: state.firestore.ordered.posts,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] }
  ])
)(PostsDashboard);
