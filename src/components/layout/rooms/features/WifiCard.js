import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
//import CardActions from "@material-ui/core/CardActions";
//import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import { ReactComponent as WifiIcon } from "../../../../images/rooms/icons/freewifi.svg";

//import airconIcon from "../../../../images/rooms/icons/aircon.svg";
const useStyles = makeStyles({
  card: {
    /*    textAlign: "center"*/
    maxWidth: "100%",
    width: "100%"
  },
  icon: {
    /*  */

    height: "auto",
    width: "80%"
  }
});

const WifiCard = props => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center"
          }}
        >
          <CardMedia>
            <WifiIcon width="80%" height="auto" fill={props.color} />
          </CardMedia>
          <CardHeader
            titleTypographyProps={{ variant: "h6" }}
            style={{ padding: 0, color: "#3f51b5" }}
            title="Free Wifi"
          />
        </div>
      </Card>
    </div>
  );
};
export default WifiCard;
