import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const SignedOutLinks = () => {
  return (
    <span>
      <Button>
        <NavLink to="/signup">SignUp</NavLink>
      </Button>
      <Button>
        <NavLink to="/signin">Log In</NavLink>
      </Button>
    </span>
  );
};

export default SignedOutLinks;
