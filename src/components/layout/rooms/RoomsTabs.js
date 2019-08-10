import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SoloRooms from "./SoloRooms";
import DoubleRooms from "./DoubleRooms";
import FamilyRooms from "./FamilyRooms";
import { ReactComponent as SoloIcon } from "../../../images/rooms/icons/solo.svg";
import { ReactComponent as DuetIcon } from "../../../images/rooms/icons/duet.svg";

import { ReactComponent as FamilyIcon } from "../../../images/rooms/icons/family.svg";

import { maxHeight } from "@material-ui/system";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  }
}));

const RoomsTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab
            titleTypographyProps={{ variant: "h6" }}
            style={{ color: "#3f51b5" }}
            label="Solo Traveller"
            maxheight="100%"
            icon={<SoloIcon fill="#3f51b5" />}
          />

          <Tab
            titleTypographyProps={{ variant: "h6" }}
            style={{ color: "#3f51b5" }}
            label="Tango Pair"
            icon={<DuetIcon fill="#3f51b5" />}
          />
          <Tab
            titleTypographyProps={{ variant: "h6" }}
            style={{ color: "#3f51b5" }}
            label="The Pack"
            icon={<FamilyIcon width="25%" fill="#3f51b5" />}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <Paper>{/***/}</Paper>
          <SoloRooms />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <DoubleRooms />
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <Paper>{/***/}</Paper>
          <FamilyRooms />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
};

export default RoomsTabs;
