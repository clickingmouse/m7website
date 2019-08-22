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
import doubleImg from "../../../images/rooms/double.png";
const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  }
});

const DoubleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div>
        <CardMedia
          component="img"
          alt="double room"
          height="140"
          image={doubleImg}
          title="Double Room with Private Bathroom"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Double Room
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="Most Favorite" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="2 pax" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="1 x small double bed" />
            </ListItem>
          </List>

          <Typography variant="body2" color="textSecondary" component="p">
            ...
          </Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button size="small" color="primary">
          Book Now!
        </Button>
      </CardActions>
    </Card>
  );
};
export default DoubleCard;
