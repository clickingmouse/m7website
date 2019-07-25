import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as TelevisionIcon } from "../../../../images/rooms/icons/television.svg";
import bathroomIcon from "../../../../images/rooms/icons/bathroom.svg";

import { ReactComponent as HairdryerIcon } from "../../../../images/rooms/icons/hairdryer.svg";

const useStyles = makeStyles({
  card: {
    /*    textAlign: "center"
    /*maxWidth: "100%"*/
  },
  icon: {
    /*  */
    fill: "red",
    height: "auto",
    width: "80%",
    color: "blue",
    backgroundColor: "green"
  }
});

const TvCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
          <CardMedia>
            <TelevisionIcon width="80%" height="auto" fill="#3f51b5" />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              styles={{ lineHeight: "0" }}
            >
              Television
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default TvCard;
