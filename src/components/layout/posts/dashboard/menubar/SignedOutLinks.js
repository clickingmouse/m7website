import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const SignedOutLinks = () => {
  return (
    <span>
      <Button>
        <NavLink to="/">SignUp</NavLink>
      </Button>
      <Button>
        <NavLink to="/">Log In</NavLink>
      </Button>
    </span>
  );
};

export default SignedOutLinks;
