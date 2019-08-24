import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PreviewPhoto from "./PreviewPhoto";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import placeHolderImg from "./m7_logo_sm.jpg";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  card: {
    //padding: theme.spacing(2),
    height: 200,
    display: "flex",
    margin: theme.spacing(2)
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
    //height: "auto"
  }
}));

const PostsCard = ({ post }) => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(post.id);
  const title = ".";
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={post.pictureUrl}
        title={post.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {post.title}
          </Typography>
          <br />
          <Typography variant="subtitle1" color="textSecondary">
            By {post.authorFirstName} {post.authorLastName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Posted at {moment(post.createdAt.toDate()).calendar()}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default PostsCard;
