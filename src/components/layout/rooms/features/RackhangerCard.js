import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as RackhangerIcon } from "../../../../images/rooms/icons/coathangers.svg";

import airconIcon from "../../../../images/rooms/icons/aircon.svg";
const useStyles = makeStyles({
  card: {
    /*    textAlign: "center"
    /*maxWidth: "100%"*/
  },
  icon: {
    /*  */

    height: "auto",
    width: "80%"
  }
});

const RackhangerCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea style={{ display: "flex", flexDirection: "column" }}>
          <CardMedia>
            <RackhangerIcon width="80%" height="auto" fill="#3f51b5" />
          </CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              styles={{ lineHeight: "0" }}
            >
              Rack Hanger
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default RackhangerCard;
