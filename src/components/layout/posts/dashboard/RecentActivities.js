import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import PostsCard from "./PostsCard";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 18
    //textAlign: "center"
  },
  pos: {
    marginBottom: 12
  },
  item: {}
});

const RecentActivities = props => {
  const { activities } = props;
  console.log("=============>", props);
  const classes = useStyles();
  return (
    <div>
      <br />
      <Card>
        <CardContent>
          <Typography className={classes.title}>Recent Activities</Typography>
          <Divider />
          <List className={classes.root}>
            {activities &&
              activities.map(item => {
                return (
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={item.user}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {item.content}
                          </Typography>
                          {"   " + moment(item.time.toDate()).fromNow()}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                );
              })}
            <Divider variant="inset" component="li" />
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivities;
