import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import singleImg from "../../../images/rooms/single.jpg";

const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  }
});

const SingleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={singleImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Single
          </Typography>
          <Paper>
            <List>
              <ListItem>
                <ListItemIcon>
                  <i class="fas fa-plane" />
                </ListItemIcon>
                <ListItemText primary="Most Popular" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <i class="fas fa-plane" />
                </ListItemIcon>
                <ListItemText primary="1 pax" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <i class="fas fa-plane" />
                </ListItemIcon>
                <ListItemText primary="1 x Standard twin-sized bed" />
              </ListItem>
            </List>
          </Paper>
          <Typography variant="body2" color="textSecondary" component="p">
            ...
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
export default SingleCard;
