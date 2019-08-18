import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
class SignIn extends Component {
  // constructor(props) {
  //   super(props);
  //this.
  state = {
    isSignedIn: false,
    email: "",
    password: ""
  };
  // }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDIdMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  handleChange = e => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    console.log("login submit:", this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/posts" />;
    return (
      <div>
        <h1>PLEASE SIGN IN</h1>
        <hr />
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <hr />
        <Container>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              label="email"
              placeholder="email"
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />
            <label htmlFor="password">password</label>
            <TextField
              id="password"
              label="password"
              placeholder="password"
              type="password"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />
            <div>
              <button className="btn">LOGIN</button>
            </div>
            <div>
              <center>{authError ? <p>{authError}</p> : null}</center>
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
