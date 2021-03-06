import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import PreviewPhoto from "./PreviewPhoto";
import peakTramImg from "./peak-tram.jpg";
import { Divider } from "material-ui";
const useStyles = makeStyles({
  card: {
    //    maxWidth: ,
  }
});

const PostsDetails = props => {
  //console.log(props);
  const { post } = props;
  const classes = useStyles();
  const id = props.match.params.id;
  if (post) {
    return (
      <div>
        <Container>
          <Card className={classes.card}>
            <PreviewPhoto pictureUrl={post.pictureUrl} />

            <Divider />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title} - {id}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.content}
              </Typography>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
                Posted By {post.authorFirstName} {post.authorLastName}
                <p>Posted at {moment(post.createdAt.toDate()).calendar()}</p>
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <h1>
            <center>...loading...</center>
          </h1>
        </Container>
      </div>
    );
  }
};
const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts"
    }
  ])
)(PostsDetails);
