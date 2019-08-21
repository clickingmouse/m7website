import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import breakfastImg from "../../../../images/posts/featured/breakfast.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const BreakfastPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="breakfast"
          height="140"
          image={breakfastImg}
          title="breakfast"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Breakfast for the early bird (or jet-lagged)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hong Kong is also known as the city of the night, the city doesn't
            wake up till 10:30 AM. It's not uncommon to see a coffee house not
            open at nine; Here are some morning options...
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
export default BreakfastPost;
