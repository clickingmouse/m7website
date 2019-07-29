import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardActions";
//import Collapse from "@material-ui/core/Collapse";
//import Avatar from "@material-ui/core/Avatar";
//import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
//import FavoriteIcon from "@material-ui/icons/Favorite";
//import ShareIcon from "@material-ui/icons/Share";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

import airportexpress from "../../../../images/location/Airport-Express-Train.jpg";

import airportshuttle from "../../../../images/location/cityflyer-a21-bus.jpg";

import taxi from "../../../../images/location/HK-Taxi.jpg";
//import classes from "*.module.sass";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    //maxWidth: "100%",
    display: "flex"
    //flexDirection: "column"
  },
  details: {
    //flex: "1 1 0",
    //flex: "2",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    //flex: 2,
    flexDirection: "column"
    //flex: "1 0 auto"
  },
  media: {
    // flex: "1 1 0",
    //flex: "1 "
    //flexGrow: "1",
    width: "33%",
    height: "33%"
    //  height: 0,
    //paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  flexContainer: {
    display: "flex"
  }
}));

const FromHKIA = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <CardHeader title="BY TRAIN" />
                <Typography gutterBottom variant="h5" component="h2">
                  Airport Express Train
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.media}
              component="img"
              alt="airport express train image"
              width="30%"
              height="30%"
              image={airportexpress}
              title="Airport Express"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          CENTER
          <br />
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="airport shuttle bus image"
              width="50%"
              image={airportshuttle}
              title="Airport Shuttle Bus"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <CardHeader title="BY BUS" />
                <Typography gutterBottom variant="h5" component="h2">
                  Airport Express Shuttle
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          CENTER
          <br />
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <CardHeader title="BY TAXI" />
                <Typography gutterBottom variant="h5" component="h2">
                  cabbing
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.media}
              component="img"
              alt="hong kong taxi image"
              width="50%"
              image={taxi}
              title="Hong Kong Taxi"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>LEFT</Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>RIGHT</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FromHKIA;
