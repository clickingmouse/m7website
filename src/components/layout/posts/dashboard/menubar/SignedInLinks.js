import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../../../../store/actions/authActions";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
const SignedInLinks = props => {
  return (
    <span>
      <Button>
        <NavLink to="/create">New Posts</NavLink>
      </Button>
      <Button>
        <a onClick={props.signOut}>Log Out</a>
      </Button>
      <Button>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          KK
        </NavLink>
      </Button>
    </span>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
