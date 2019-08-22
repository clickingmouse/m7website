import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import supermarketImg from "../../../../images/posts/featured/supermarket.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

const SupermarketPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={"/posts/featured/supermarkets"} color="black">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="supermarket"
            height="140"
            image={supermarketImg}
            title="supermarket"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="textPrimary"
            >
              Nearby supermarkets
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Usually the first thing after airport and check-in is to head off
              to restock one's supplies, often in a foreign land without your
              the familiar Safeway, Carrefour, or Tesco, its easy to lose one
              bearings. Here are some options to help travellers off their feet
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Link to={"/posts/featured/supermarkets"} color="black">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default SupermarketPost;
