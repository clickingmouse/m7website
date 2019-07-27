import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Majestic7Guesthouse
        </Typography>
        <Button color="inherit">
          <Link smooth to="/#about">
            Home
          </Link>
        </Button>
        <Button color="inherit">Rooms</Button>
        <Button color="inherit">Getting Here</Button>
        <Button color="inherit">Around Us</Button>
        <Button color="inherit">Touristripedia</Button>
        <Button color="inherit">Going To</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
