import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import myFlightAppIcon from "./HKG MyFlight.png";
import { ReactComponent as MyFlightAppIcon } from "./HKG MyFlight.png";
const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    padding: theme.spacing(2)
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 160,
    margin: "auto"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const AppCard = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia>
          <img src={props.appIcon} alt="" height="160" width="160" />
        </CardMedia>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.appDescription}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default AppCard;
