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
import quadrupleImg from "../../../images/rooms/quadruple.jpg";
const useStyles = makeStyles({
  card: {
    maxWidth: "100%"
  }
});

const QuadrupleCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div>
        <CardMedia
          component="img"
          alt="quadruple room"
          height="140"
          image={quadrupleImg}
          title="Quadruple Room with Private Bathroom"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Quadruple Room
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="Most Economical" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="4 pax" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <i class="fas fa-plane" />
              </ListItemIcon>
              <ListItemText primary="2 x small double beds" />
            </ListItem>
          </List>

          <Typography variant="body2" color="textSecondary" component="p">
            ...
          </Typography>
        </CardContent>
      </div>

      <CardActions>
        <a
          href="https://hotels.cloudbeds.com/reservation/IOlzSh"
          target="_blank"
        >
          <Button size="small" color="primary">
            Book Now!
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};
export default QuadrupleCard;
