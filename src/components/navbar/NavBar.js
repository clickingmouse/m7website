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
  },
  a: { color: "#fff" },
  ":hover": { color: "#00F" }
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
          <Link smooth to="/#about" className={classes.a}>
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link smooth to="/#rooms">
            Rooms
          </Link>
        </Button>
        <Button color="inherit">
          <Link smooth to="/#here">
            Getting Here
          </Link>
        </Button>
        <Button color="inherit">Around Us</Button>
        <Button color="inherit">Touristripedia</Button>
        <Button color="inherit">Going To</Button>
        <Link to="/faq">
          <Button color="inherit">FAQ</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
