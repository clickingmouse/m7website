import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import cyan from "@material-ui/core/colors/cyan";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "#00838f"
    //    color: { cyan }
  },
  responsive: {
    flex: "0 0 100%"
  },
  a: { color: "#fff" },
  ":hover": { color: "#00F" }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed" className={classes.appbar}>
      <Toolbar>
        {/** 
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        */}
        <Typography variant="h6" className={classes.title}>
          Majestic7Guesthouse
        </Typography>
        <Hidden only="xs">
          <Button color="inherit">
            <Link smooth to="/" className={classes.a}>
              Home
            </Link>
          </Button>

          <Button color="inherit">
            <Link smooth to="/#rooms" className={classes.a}>
              Rooms
            </Link>
          </Button>

          <Button color="inherit">
            <Link smooth to="/#here" className={classes.a}>
              Getting Here
            </Link>
          </Button>
          <Link smooth to="/#featured" className={classes.a}>
            <Button color="inherit" className={classes.a}>
              Around Us
            </Button>
          </Link>

          <Link to="/posts">
            <Button color="inherit" className={classes.a}>
              Touristripedia
            </Button>
          </Link>
          <a
            href="https://hotels.cloudbeds.com/reservation/IOlzSh"
            target="_blank"
          >
            <Button color="inherit" className={classes.a}>
              BOOK
            </Button>
          </a>
          <Link to="/faq">
            <Button color="inherit" className={classes.a}>
              FAQ
            </Button>
          </Link>
        </Hidden>
      </Toolbar>
      <Hidden smUp>
        <Toolbar>
          <Button color="inherit">
            <Link smooth to="/" className={classes.a}>
              Home
            </Link>
          </Button>
          <Link to="/posts">
            <Button color="inherit" className={classes.a}>
              Touristripedia
            </Button>
          </Link>
          <a
            href="https://hotels.cloudbeds.com/reservation/IOlzSh"
            target="_blank"
          >
            <Button color="inherit" className={classes.a}>
              BOOK
            </Button>
          </a>
          <Link to="/faq">
            <Button color="inherit" className={classes.a}>
              FAQ
            </Button>
          </Link>
        </Toolbar>
      </Hidden>
    </AppBar>
  );
};

export default NavBar;
