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
const ViaBusCard = () => {
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
                <CardContent className={classes.content}>
                  <CardHeader title="Via Bus" />
                  <Typography gutterBottom variant="h5" component="h2">
                    A21/N21 Airport Bus - HKD33.00
                  </Typography>
                  <Typography> ( Preferred & Recommended)</Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  component="img"
                  alt="airport express train image"
                  width="30%"
                  height="30%"
                  image={airportshuttle}
                  title="Airport Express"
                />
              </div>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" disabled>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" disabled>
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
                    <h3>A21/N21 Airport Bus - HKD 33.00</h3>
                  </Typography>
                  <Typography paragraph>
                    Our advice is to take the Cityflyer bus. It's MUCH cheaper
                    and has beautiful views (especially if you can snag one of
                    the front seats on the upper deck). The Cityflyer bus costs
                    HK$33 and takes 1 hour and 22 minutes; whereas, the Airport
                    Express Train costs about HK $100 (and takes about 1 hour)
                    and a taxi costs about HK$270 (and takes about 40 minutes).
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
export default ViaBusCard;
