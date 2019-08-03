import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";

//import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";

//import bathroomIcon from "../../../../images/rooms/icons/bathroom.svg";

import { ReactComponent as BathIcon } from "../../../../images/rooms/icons/bathroom.svg";

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

const BathroomCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <CardMedia>
            <BathIcon width="80%" height="auto" fill="#3f51b5" />
          </CardMedia>
          <CardHeader
            titleTypographyProps={{ variant: "h6" }}
            style={{ padding: 0, color: "#3f51b5" }}
            title="Bathroom"
          />
        </CardActionArea>
      </Card>
    </div>
  );
};
export default BathroomCard;
