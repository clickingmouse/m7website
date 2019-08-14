import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const SignedInLinks = () => {
  return (
    <span>
      <Button>
        <NavLink to="/create">New Posts</NavLink>
      </Button>
      <Button>
        <NavLink to="/">Log Out</NavLink>
      </Button>
      <Button>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          KK
        </NavLink>
      </Button>
    </span>
  );
};

export default SignedInLinks;
