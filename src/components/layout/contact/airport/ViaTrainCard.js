import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  topWrapper: {
    display: "flex",
    flexDirection: "row"
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
    width: "35%",
    height: "35%"
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
const ViaTrainCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  function handleExpandClick() {
    setExpanded(!expanded);
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.card}>
            <div className={classes.details}>
              <div className={classes.topWrapper}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="airport express train image"
                  width="30%"
                  height="30%"
                  image={airportexpress}
                  title="Airport Express"
                />
                <CardContent className={classes.content}>
                  <CardHeader title="Via Bus" />
                  <Typography gutterBottom variant="h5" component="h2">
                    Airport Express - HKD100.00-105.00
                  </Typography>
                  <Typography> (Not really that convenient!)</Typography>
                </CardContent>
              </div>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    <h3>Airport Express - HKD 100.00 - 115.00 </h3>
                  </Typography>
                  <Typography paragraph>
                    Unless your destination is right next to one of the train
                    stations I would think twice before riding the Airport
                    Express. The rail system serves the 7.8 million population
                    of Hong Kong, and in order to better manage the crowd,
                    there' a bit of a walk between the Airport Shuttle line and
                    the other train lines.
                  </Typography>
                  <Typography paragraph />
                  <Typography paragraph />
                  <Typography />
                </CardContent>
              </Collapse>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default ViaTrainCard;
