import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import SoloRooms from "./SoloRooms";
import { ReactComponent as SoloIcon } from "../../../images/rooms/icons/solo.svg";
import { ReactComponent as DuetIcon } from "../../../images/rooms/icons/duet.svg";

import { ReactComponent as FamilyIcon } from "../../../images/rooms/icons/family.svg";
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
      <AppBar position="relative" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab
            label="Item One"
            icon={<SoloIcon width="25%" fill="#3f51b5" />}
          />

          <Tab label="Item Two" icon={<DuetIcon fill="#3f51b5" />} />
          <Tab
            label="Item Three"
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
          Single Rooms
          <SoloRooms />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          Item Two
          <DuetIcon />
        </TabContainer>

        <TabContainer dir={theme.direction}>
          Item Three
          <FamilyIcon />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
};

export default RoomsTabs;
