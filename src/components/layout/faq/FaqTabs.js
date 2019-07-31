import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CheckingInOut from "./CheckingInOut";
import Facilities from "./Facilities";
import Misc from "./Misc";
import Policies from "./Policies";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const FaqTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="one"
            label="Checking In/Out"
            wrapped
            {...a11yProps("one")}
          />
          <Tab value="two" label="Facilities" {...a11yProps("two")} />
          <Tab value="three" label="Misc" {...a11yProps("three")} />
          <Tab value="four" label="Policies" {...a11yProps("four")} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <CheckingInOut />
      </TabPanel>
      <TabPanel value={value} index="two">
        <Facilities />
      </TabPanel>
      <TabPanel value={value} index="three">
        <Misc />
      </TabPanel>
      <TabPanel value={value} index="four">
        <h2> Policies</h2>
        In Order to make your stay as pleasant as possible, the Management
        requests your co-operation in observing the following as an agreement
        between the guest and Majestic 7 Guest House (hereinafter called
        'Management') under which rooms are permitted to be used by the
        guest(s):
        <Policies />
        THE MANAGEMENT RESERVES THE RIGHT TO ADD TO, OR ALTER ORAMEND ANY OF THE
        ABOVE TERMS, CONDITIONS AND RULES WHICH WESEE REASONABLE.
      </TabPanel>
    </div>
  );
};

export default FaqTabs;
