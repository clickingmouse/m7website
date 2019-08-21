import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import appsImg from "../../../../images/posts/featured/apps.png";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const AppsPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="apps"
          height="140"
          image={appsImg}
          title="Handy Apps"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Handy Apps
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            When in Rome, use what the romans use. Although some apps are
            globally recognizeds, some apps do have their niche locally.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default AppsPost;
