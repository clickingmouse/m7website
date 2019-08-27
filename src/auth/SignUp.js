import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";
import { signUp } from "../store/actions/authActions";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
class SignUp extends Component {
  // constructor(props) {
  //   super(props);
  //this.
  state = {
    isSignedIn: false,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
    this.props.signUp(this.state);
    //this.props.createPost(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/posts" />;
    return (
      <div>
        <h1>SIGN UP</h1>
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

            <label htmlFor="lastName">Last Name</label>
            <TextField
              id="lastName"
              label="lastName"
              placeholder="lastName"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />

            <label htmlFor="firstName">First Name</label>
            <TextField
              id="firstName"
              label="firstName"
              placeholder="firstName"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              margin="normal"
            />

            <div>
              <button className="btn">SIGN UP</button>
            </div>
            <div className="AuthERR">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
